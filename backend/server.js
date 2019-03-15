// ----------------------------------------------------------------------------------------
// Server Setup and Configuration
// ----------------------------------------------------------------------------------------

const resetGame = require('./gameReset.js').resetGame;
const app = require('express')();
const server = require('http').createServer(app);
const port = '4000';
const io = require('socket.io')(server);
const session = require('express-session')({
    secret: "sdsldkl4987vh298fy9823b89fn2",
    resave: true,
    saveUninitialized: true
});
const sharedsession = require('express-socket.io-session');
app.use(session);
io.use(sharedsession(session));
const md5 = require('md5');
const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'k3'
}
class Database {
    constructor(config) { this.connection = mysql.createConnection(config); }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
}
const database = new Database(config);
const csvparse = require('csv-array');
let distanceMatrix = [];
csvparse.parseCSV('distanceMatrix.csv', (data) => { distanceMatrix = data; }, false);

// ----------------------------------------------------------------------------------------
// Internal Routing
// ----------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/index.html', (req, res) => {
    req.session.gameId = null;
    req.session.teamId = null;
    req.session.controllerId = null;
    req.session.secretAdminSessionVariable = null;
    res.sendFile(__dirname + '/index.html');
});

// ----------------------------------------------------------------------------------------
// Admin Services / Routing
// ----------------------------------------------------------------------------------------

app.get('/admin.html', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        res.sendFile(__dirname + '/admin.html');
    }
});

app.get('/adminLoginVerify', (req, res) => {
    if (!req.query.adminSection || !req.query.adminInstructor || !req.query.adminPassword) {
        res.redirect('/index.html?err=BadAdminLoginRequest');
    } else {
        let sql = `SELECT * FROM games WHERE gameSection = ? AND gameInstructor = ? AND gameAdminPassword = ?`;
        let inserts = [req.query.adminSection, req.query.adminInstructor, md5(req.query.adminPassword)];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            if (results.length !== 1) {
                res.redirect('/index.html?err=GameDoesNotExist');
            } else {
                req.session.gameId = results[0].gameId;
                req.session.secretAdminSessionVariable = 1;
                res.redirect('/admin.html');
            }
        });
    }
});

app.get('/adminToggleGame', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        let sql = `UPDATE games SET gameActive = (gameActive + 1) % 2 WHERE gameId = ?`;
        let inserts = [req.session.gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql);
    }
});

app.get('/adminResetGame', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        resetGame(mysql, database, req.session.gameId);
    }
});

app.get('/adminGetGameState', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        let sql = `SELECT gameActive FROM games WHERE gameId = ?`;
        let inserts = [req.session.gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            const active = results[0].gameActive;
            res.send(active === 1 ? "active" : "notactive");
        });
    }
});

// ----------------------------------------------------------------------------------------
// Game Routing
// ----------------------------------------------------------------------------------------

app.get('/game.html', (req, res) => {
    if (req.session.gameId == null || req.session.teamId == null || req.session.controllerId == null) {
        res.redirect('/index.html?err=NotLoggedIn');
    } else {
        res.redirect('http://localhost:3000');  //TODO: change this to static files when frontend is fully built
    }
});

app.get('/gameLoginVerify', (req, res) => {
    if (!req.query.gameSection || !req.query.gameInstructor || !req.query.gameTeam || !req.query.gamePassword) {
        res.redirect('/index.html?err=BadParameters');
    } else {
        let sql = `SELECT * FROM games WHERE gameSection = ? AND gameInstructor = ?`;
        let inserts = [req.query.gameSection, req.query.gameInstructor];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            if (results.length !== 1) {
                res.redirect('/index.html?err=GameDoesNotExist');
            } else {
                let controllerId;
                let gameTeam;
                if (parseInt(req.query.gameTeam) < 5) {
                    controllerId = parseInt(req.query.gameTeam);
                    gameTeam = 0;
                } else {
                    controllerId = parseInt(req.query.gameTeam) - 10;
                    gameTeam = 1;
                }
                if (parseInt(results[0]['game' + gameTeam + 'Controller' + controllerId]) === 1) {
                    res.redirect('/index.html?err=AlreadyLoggedIn');
                } else {
                    if (results[0]['game' + gameTeam + 'Password'] !== md5(req.query.gamePassword)) {
                        res.redirect('/index.html?err=BadPassword');
                    } else {
                        req.session.gameId = parseInt(results[0].gameId);
                        req.session.teamId = gameTeam;
                        req.session.controllerId = controllerId;
                        sql = `UPDATE games SET ?? = 1 WHERE gameId = ?`;
                        let inserts = ['game' + gameTeam + 'Controller' + controllerId, results[0].gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        res.redirect('/game.html');
                    }

                }
            }
        });
    }
});

// ----------------------------------------------------------------------------------------
// Socket Requests (client + server gameplay services)
// ----------------------------------------------------------------------------------------

io.sockets.on('connection', (socket) => {
    //All Sockets are part of a gameId 'room', sockets are only used within game.html and nowhere else inside backend services
    socket.join('game' + socket.handshake.session.gameId);
    socket.on('disconnect', () => {  //mark this person as logged out of the game
        if (socket.handshake.session) {
            sql = `UPDATE games SET ?? = 0 WHERE gameId = ?`;
            let inserts = ['game' + socket.handshake.session.teamId + 'Controller' + socket.handshake.session.controllerId, socket.handshake.session.gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);
        }
    });

    socket.on('getInitialGameState', (callback) => {
        let totalResults = {};
        totalResults.gameId = socket.handshake.session.gameId;
        totalResults.teamId = socket.handshake.session.teamId;
        totalResults.controllerId = socket.handshake.session.controllerId;
        totalResults.distanceMatrix = distanceMatrix;
        totalResults.positions = [];
        totalResults.cart = [];
        totalResults.inv = [];
        for (let x = 0; x < 727; x++) {
            totalResults.positions[x] = [];
        }
        let sql = 'SELECT pieceId, pieceFuel, pieceMoves, pieceUnitId, pieceTeamId, piecePositionId, pieceContainerId FROM pieces WHERE pieceGameId = ? AND (pieceVisible = 1 OR pieceTeamId = ?) ORDER BY piecePositionId';
        let inserts = [socket.handshake.session.gameId, socket.handshake.session.teamId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            results.map(result => {
                totalResults.positions[result.piecePositionId].push(result);
            });
        })
        .then(() => {
        let sql = 'SELECT * FROM games WHERE gameId = ?';
        let inserts = [socket.handshake.session.gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            const teamId = socket.handshake.session.teamId;
            const result = results[0];
            totalResults.points = result['game' + teamId + 'Points'];
            totalResults.status = result['game' + teamId + 'Status'];
            totalResults.gamePhase = result['gamePhase'];
            totalResults.gameRound = result['gameRound'];
            totalResults.gameSlice = result['gameSlice'];
        })
        .then(() => {
            let sql = 'SELECT purchaseId, purchaseUnitId FROM purchases WHERE purchaseTeamId = ? AND purchaseGameId = ?';
            let inserts = [socket.handshake.session.teamId, socket.handshake.session.gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql)
            .then(results => {
                results.map(result => {
                    totalResults.cart.push(result);
                });
            });
        })
        .then(() => {
            let sql = 'SELECT invId, invUnitId FROM invs WHERE invTeamId = ? AND invGameId = ?';
            let inserts = [socket.handshake.session.teamId, socket.handshake.session.gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql)
            .then(results => {
                results.map(result => {
                    totalResults.inv.push(result);
                });
                callback(totalResults);
            });
        });
        });
    });

    socket.on('purchaseRequest', (pieceType, callback) => {
        const pieceCosts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let sql = 'SELECT ?? FROM games WHERE gameId = ?';
        let inserts = ['game' + socket.handshake.session.teamId + 'Points', socket.handshake.session.gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            let points = results[0]['game' + socket.handshake.session.teamId + 'Points'];
            if (points >= pieceCosts[pieceType]) {
                let sql = 'INSERT INTO purchases (purchaseGameId, purchaseTeamId, purchaseUnitId) VALUES (?, ?, ?)';
                let inserts = [socket.handshake.session.gameId, socket.handshake.session.teamId, pieceType];
                sql = mysql.format(sql, inserts);
                database.query(sql)
                .then(() => {
                    let sql = 'UPDATE GAMES set ?? = ?? - ? WHERE gameId = ?';
                    let inserts = ['game' + socket.handshake.session.teamId + 'Points', 'game' + socket.handshake.session.teamId + 'Points', pieceCosts[pieceType], socket.handshake.session.gameId];
                    sql = mysql.format(sql, inserts);
                    database.query(sql);
                    let totalResults = {};
                    totalResults.userFeedback = "bought a piece...";
                    totalResults.points = points - pieceCosts[pieceType];
                    totalResults.cart = [];
                    sql = 'SELECT purchaseId, purchaseUnitId FROM purchases WHERE purchaseTeamId = ? AND purchaseGameId = ?';
                    inserts = [socket.handshake.session.teamId, socket.handshake.session.gameId];
                    sql = mysql.format(sql, inserts);
                    database.query(sql)
                    .then(results => {
                        results.map(result => {
                            totalResults.cart.push(result);
                        });
                        callback(totalResults);
                    });
                });
            } else {
                callback({userFeedback: "not enough points..."});
            }
        });
    });

    socket.on('refundRequest', (pieceId, pieceUnitId, callback) => {
        const pieceCosts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let sql = 'UPDATE GAMES set ?? = ?? + ? WHERE gameId = ?';
        let inserts = ['game' + socket.handshake.session.teamId + 'Points', 'game' + socket.handshake.session.teamId + 'Points', pieceCosts[pieceUnitId], socket.handshake.session.gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(() => {
            let sql = 'SELECT ?? FROM games WHERE gameId = ?';
            let inserts = ['game' + socket.handshake.session.teamId + 'Points', socket.handshake.session.gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql)
            .then(results => {
                let points = results[0]['game' + socket.handshake.session.teamId + 'Points'];
                let sql = 'DELETE FROM purchases WHERE purchaseId = ?';
                let inserts = [pieceId];
                sql = mysql.format(sql, inserts);
                database.query(sql)
                .then(() => {
                    let totalResults = {};
                    totalResults.userFeedback = "refunded a piece...";
                    totalResults.points = points;
                    totalResults.cart = [];
                    let sql = 'SELECT purchaseId, purchaseUnitId FROM purchases WHERE purchaseTeamId = ? AND purchaseGameId = ?';
                    let inserts = [socket.handshake.session.teamId, socket.handshake.session.gameId];
                    sql = mysql.format(sql, inserts);
                    database.query(sql)
                    .then(results => {
                        results.map(result => {
                            totalResults.cart.push(result);
                        });
                        callback(totalResults);
                    });
                });
            });
        });
    });

    socket.on('planRequest', (plan, callback) => {
        //make sure the plan makes sense
        //if they have a plan already, delete it

        console.log(plan);
        callback({userFeedback: "set the plan"}); 
    });

    socket.on('deletePlan', (plan, callback) => {
        console.log(plan);
        callback({userFeedback: "deleted the plan"});
    });

    socket.on('controlButtonClick', (callback) => {
        // Get the game info from the session
        const gameId = socket.handshake.session.gameId;
        const teamId = socket.handshake.session.teamId;
        const controllerId = socket.handshake.session.controllerId;

        //only the main controller can 'click' the control button (for now)
        if (controllerId === 0) {
            let sql = 'SELECT * FROM games WHERE gameId = ?';
            let inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql)
            .then(results => {
                return results[0];
            })
            .then(gameInfo => {
                //NEWS PHASE -> control button advances into the buy phase for all clients
                if (gameInfo.gamePhase === 0 || gameInfo.gamePhase === 1 || gameInfo.gamePhase === 3) {
                    const otherStatus = teamId === 0 ? gameInfo.game1Status : gameInfo.game0Status;
                    if (otherStatus === 1) {
                        //update teams to be both status 0 and change their phase
                        let sql = 'UPDATE games SET ?? = 0, gamePhase = (gamePhase + 1) % 4 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game1Status` : `game0Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        io.sockets.in('game' + gameId).emit('serverSetState', { gameRound: gameInfo.gameRound, gamePhase: (gameInfo.gamePhase + 1) % 4, status: 0, userFeedback: "new phase / slice" });
                        callback({userFeedback: "new phase probably"});
                    } else {
                        //update this team's status to 1
                        let sql = 'UPDATE games SET ?? = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game0Status` : `game1Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        callback({ status: 1, userFeedback: "waitin on other main controller..." });
                    }
                } else if (gameInfo.gamePhase === 2 && (gameInfo.gameSlice === 0 || gameInfo.gameSlice === 1 || gameInfo.gameSlice === 2)) {
                    const otherStatus = teamId === 0 ? gameInfo.game1Status : gameInfo.game0Status;
                    if (otherStatus === 1) {
                        //update teams to be both status 0 and change their phase
                        let sql = 'UPDATE games SET ?? = 0, gameSlice = (gameSlice + 1) % 4 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game1Status` : `game0Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        io.sockets.in('game' + gameId).emit('serverSetState', { gameRound: gameInfo.gameRound, gamePhase: gameInfo.gamePhase, gameSlice: (gameInfo.gameSlice + 1) % 4, status: 0, userFeedback: "new phase / slice" });
                        callback({userFeedback: "new phase/slice probably"});
                    } else {
                        //update this team's status to 1
                        let sql = 'UPDATE games SET ?? = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game0Status` : `game1Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        callback({ status: 1, userFeedback: "waitin on other main controller..." });
                    }
                } else if (gameInfo.gamePhase === 2 && gameInfo.gameSlice === 3 && gameInfo.gameRound < 2) {
                    const otherStatus = teamId === 0 ? gameInfo.game1Status : gameInfo.game0Status;
                    if (otherStatus === 1) {
                        //update teams to be both status 0 and change their phase
                        let sql = 'UPDATE games SET ?? = 0, gameSlice = 0, gameRound = (gameRound + 1) % 3 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game1Status` : `game0Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        io.sockets.in('game' + gameId).emit('serverSetState', { gameRound: (gameInfo.gameRound + 1) % 3, gamePhase: gameInfo.gamePhase, status: 0, gameSlice: 0, userFeedback: "new phase / slice" });
                        callback({userFeedback: "new phase/slice probably"});
                    } else {
                        //update this team's status to 1
                        let sql = 'UPDATE games SET ?? = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game0Status` : `game1Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        callback({ status: 1, userFeedback: "waitin on other main controller..." });
                    }
                } else if (gameInfo.gamePhase === 2 && gameInfo.gameSlice === 3 && gameInfo.gameRound === 2) {
                    const otherStatus = teamId === 0 ? gameInfo.game1Status : gameInfo.game0Status;
                    if (otherStatus === 1) {
                        //update teams to be both status 0 and change their phase
                        let sql = 'UPDATE games SET ?? = 0, gamePhase = 3, gameSlice = 0, gameRound = 0 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game1Status` : `game0Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        io.sockets.in('game' + gameId).emit('serverSetState', { gameRound: 0, gamePhase: (gameInfo.gamePhase + 1) % 4, status: 0, gameSlice: 0, userFeedback: "new phase / slice" });
                        callback({userFeedback: "new phase/slice probably"});
                    } else {
                        //update this team's status to 1
                        let sql = 'UPDATE games SET ?? = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `game0Status` : `game1Status`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        callback({ status: 1, userFeedback: "waitin on other main controller..." });
                    }
                } else {
                    callback({userFeedback: "unknown control button request?"});
                }
            });
        } else {
            callback({userFeedback: "not main controller"});
        }
    });

    // socket.on('invUse', (invPlan, callback) => {
    //     callback();
    // });

    // socket.on('piecePlace', (parameters, callback) => {
    //     callback();
    // });

    // socket.on('insertBattlePlan', (parameters, callback) => {
    //     callback();
    // });

});

// ----------------------------------------------------------------------------------------
// Start taking in requests to the server
// ----------------------------------------------------------------------------------------

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
