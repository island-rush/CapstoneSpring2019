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
    if (!req.query.gameSection || !req.query.gameInstructor || !req.query.gameTeam) {
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
        let sql = 'INSERT INTO purchases (purchaseGameId, purchaseTeamId, purchaseUnitId) VALUES (?, ?, ?)';
        let inserts = [socket.handshake.session.gameId, socket.handshake.session.teamId, pieceType];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(() => {
            let totalResults = {};
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

    socket.on('refundRequest', (pieceId, callback) => {
        let sql = 'DELETE FROM purchases WHERE purchaseId = ?';
        let inserts = [pieceId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(() => {
            let totalResults = {};
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

    // socket.on('insertPlan', (plan, callback) => {
    //     callback();
    // });

    // socket.on('deletePlan', (plan, callback) => {
    //     callback();
    // });

    // socket.on('controlButtonClick', (callback) => {
    //     callback();
    // });

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
