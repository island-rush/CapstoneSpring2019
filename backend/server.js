const app = require('express')();
const server = require('http').createServer(app);
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
    constructor(config) {this.connection = mysql.createConnection( config );}
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                resolve( rows );
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
csvparse.parseCSV('distanceMatrix.csv', (data) => {distanceMatrix = data;}, false);

require('./gameReset.js')();

// ----------------------------------------------------------------------------------------
// Internal Routing
// ----------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    //TODO: if the session gameId and teamId are not null, change to logged out inside the database? (probably woudldn't affect much tho)
    req.session.gameId = null;
    req.session.teamId = null;
    req.session.controllerId = null;
    req.session.secretAdminSessionVariable = null;
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
    res.redirect('localhost:3000');
});

app.get('/admin.html', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        res.sendFile(__dirname + '/admin.html');
    }
});

app.get('/game.html', (req, res) => {
    if (!req.session.gameId || !req.session.teamId || !req.session.controllerId) {
        res.redirect('/index.html?err=NotLoggedIn');
    } else {
        res.redirect('localhost:3000');  //TODO: change this to static files when frontend is fully built
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

app.get('/gameLoginVerify', (req, res) => {
    if(!req.query.gameSection || !req.query.gameInstructor || !req.query.gameTeam) {
        res.redirect('/index.html?err=BadParameters');  // didn't hit the backend with right query parameters
    } else {
        let sql = `SELECT * FROM games WHERE gameSection = ? AND gameInstructor = ?`;
        let inserts = [req.query.gameSection, req.query.gameInstructor];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            if (results.length !== 1) {
                res.redirect('/index.html?err=GameDoesNotExist');
            } else {
                const correspondingTeamValues = [0, 1, 2, 3, 0, 1, 2, 3];
                const correspondingInserts = ["gameRedController0", "gameRedController1", "gameRedController2", "gameRedController3", "gameBlueController0", "gameBlueController1", "gameBlueController", "gameBlueController3"];
                const allReturnTeamValues = [results[0].gameRedController0, results[0].gameRedController1, results[0].gameRedController2, results[0].gameRedController3, results[0].gameBlueController0, results[0].gameBlueController1, results[0].gameBlueController2, results[0].gameBlueController3];
                let teamLoggedIn = allReturnTeamValues[req.query.gameTeam];                        
                if (parseInt(teamLoggedIn) === 1) {
                    res.redirect('/index.html?err=AlreadyLoggedIn');
                } else {
                    req.session.gameId = parseInt(results[0].gameId);
                    req.session.teamId = req.query.gameTeam <= 3 ? 0 : 1;
                    req.session.controllerId = correspondingTeamValues[parseInt(req.query.gameTeam)];
                    sql = `UPDATE games SET ?? = 1 WHERE gameId = ?`;
                    let inserts = [correspondingInserts[parseInt(req.query.gameTeam)], results[0].gameId];
                    sql = mysql.format(sql, inserts);
                    database.query(sql)
                    .then(results => {
                        res.redirect('http://localhost:3000');
                    });
                }
            }
        });
    }
});

// ----------------------------------------------------------------------------------------
// Socket Requests
// ----------------------------------------------------------------------------------------

io.sockets.on('connection', (socket) => {
    socket.join('game' + socket.handshake.session.gameId);
    socket.on('disconnect', () => {  //mark this person as logged out of the game
        if (socket.handshake.session) {
            sql = `UPDATE games SET ?? = 0 WHERE gameId = ?`;
            let inserts = ['game' + socket.handshake.session.teamId + 'Controller' + socket.handshake.session.controllerId, socket.handshake.session.gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);
        }
    });

    // ----------------------------------------------------------------------------------------
    // Admin Requests
    // ----------------------------------------------------------------------------------------

    socket.on('adminResetGame', (callback) => {
        if (!socket.handshake.session.secretAdminSessionVariable) {
            // Does not have permission to do this
        } else {
            resetGame(database, socket.handshake.session.gameID);
        }
    });

    // ----------------------------------------------------------------------------------------
    // Game Requests
    // ----------------------------------------------------------------------------------------

    socket.on('getInitialGameState', (callback) => {  //TODO: give everything including points and stuff
        let totalResults = {};
        totalResults.distanceMatrix = distanceMatrix;
        totalResults.positions = [];
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
                totalResults.points = teamId === 0 ? result.gameRedPoints : result.gameBluePoints;
                totalResults.status = teamId === 0 ? result.gameRedStatus : result.gameBlueStatus;
                callback(totalResults);
            });
        });
    });

    socket.on('controlButtonClick', (callback) => {
        // Get the game info from the session
        const gameId = socket.handshake.session.gameId;
        const teamId = socket.handshake.session.teamId;
        const controllerId = socket.handshake.session.controllerId;

        //only the main controller can 'click' the control button
        if (controllerId === 0) {
            let sql = 'SELECT * FROM games WHERE gameId = ?';
            let inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql)
            .then(results => {
                return results[0];
            })
            .then(gameInfo => {
                //NEWS PHASE
                if (gameInfo.gamePhase === 0) {
                    const otherStatus = teamId === 0 ? gameInfo.gameBlueStatus : gameInfo.gameRedStatus;
                    if (otherStatus === 1) {
                        //update teams to be both status 0 and change their phase
                        let sql = 'UPDATE games SET ?? = 0, gamePhase = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `gameBlueStatus` : `gameRedStatus`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        io.sockets.in('game' + gameId).emit('serverSetState', {gamePhase: 1, status: 0});
                        callback();
                    } else {
                        //update this team's status to 1
                        let sql = 'UPDATE games SET ?? = 1 WHERE gameId = ?';
                        let inserts = [teamId == 0 ? `gameRedStatus` : `gameBlueStatus`, gameId];
                        sql = mysql.format(sql, inserts);
                        database.query(sql);
                        callback({status: 1});
                    }
                }
            });
        } else {
            callback();
        }
    });

    socket.on('insertPlan', (parameters, callback) => {
        // Check the plan and callback with the plan (confirming its insertion?)
        // Need to know who made the plan
        // Need to know the piece
        // Need to know what the plan is (to what position, queue a container pop?)
        const arrayOfPlans = parameters.arrayOfPlans;
        const gameId = socket.handshake.session.gameId;
        const teamId = socket.handshake.session.teamId;
        for (let x = 0; x < arrayOfPlans.length; x++) {
            //insert each plan, make sure the movement order matches the x
            const {pieceId, movementOrder, positionId, specialFlag} = arrayOfPlans[x];
            let sql = 'INSERT INTO plans (planGameId, planTeamId, planPieceId, planMovementOrder, planPositionId, planSpecialFlag) VALUES (?, ?, ?, ?, ?, ?)';
            let inserts = [gameId, teamId, pieceId, movementOrder, positionId, specialFlag];
            sql = mysql.format(sql, inserts);
            database.query(sql);
        }
    });

    socket.on('placePiece', (parameters, callback) => {
        // Moving a piece from inv to board position
        // Need to know what the piece is (and other piece info)
        // Need to know where they want to place it (and if it is allowed)
        // Need to know who wants to move it
        // Send back the new piece object to be inserted?
        const {gameId, teamId} = socket.handshake.session;
        const {purchaseId, positionId} = parameters;
        let sql = `SELECT * FROM purhcased WHERE purchaseId = ?`;
        let inserts = [purchaseId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            const unitId = results[0].purchaseUnitId;
            const fuel = 5;
            const moves = 10;
            const container = -1;
            const visible = 0;
            let sql = 'INSERT INTO pieces (pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            let inserts = [gameId, teamId, unitId, positionId, container, visible, moves, fuel];
            sql = mysql.format(sql, inserts);
            database.query(sql);
            let sql = 'DELETE FROM purchased WHERE purchaseId = ?';
            let inserts = [purchaseId];
            sql = mysql.format(sql, inserts);
            database.query(sql);
        });
    });

    socket.on('insertBattlePlan', (parameters, callback) => {
        // Battle plan is decided when the battle popup is open (maybe multiple dealing with each controller?)
        // Need to know who inserted the plan
        // Need to know what the plan is (who is attacking what)
        // Send back confirmation of the plan?
    });

    socket.on('itemPurchase', (parameters, callback) => {
        // Purchase item, check points and return new points and thing inside the inv
        // Need to know the unitId or warefareId or something to know cost and stuff
        // Need to know that the main controller selected it
        // Send back confirmation of the purchase (with a purchase object to be put into the state?)
        const {gameId, teamId} = socket.handshake.session;
        const {unitId} = parameters;
        let sql = `SELECT * FROM games WHERE gameId = ?`;
        let inserts = [gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(results => {
            const points = teamId == 0 ? results[0].gameRedPoints : results[0].gameBluePoints;
            const cost = [1, 2, 3, 4];
            if (points < cost[unitId]) {
                //unable to buy
            } else {
                //able to buy
                let sql = 'INSERT INTO purchased (purchaseGameId, purchaseTeamId, purchaseUnitId) VALUES (?, ?, ?)';
                let inserts = [gameId, teamId, unitId];
                sql = mysql.format(sql, inserts);
                database.query(sql)
                .then(results => {
                    let sql = 'SELECT LAST_INSERT_ID()';
                    database.query(sql)
                    .then(results => {
                        const insertId = results[0].LAST_INSERT_ID();
                        //return to the user an object with the insertId and stuff
                    });
                });
            }
        });
    });

    socket.on('itemRefund', (parameters, callback) => {
        // Refund an item, give points back and return new points (verify item exists?)
        // Need to know the item Id (due to multiple of those items and stuff)
        // Send back confirmation of the refund (with notice to remove it from the state?)
        
        const {gameId, teamId} = socket.handshake.session;

        const {purchaseId} = parameters;

        //other checks for if they are allowed to refund

        //update the database
        //remove the purchased thing
        //tell the user new amount of points

        const cost = [1, 2, 3];

        const databaseThing = teamId == 0 ? "gameRedPoints" : "gameBluePoints";

        let sql = 'UPDATE games SET ?? = ?? + ? WHERE gameId = ?';
        let inserts = [databaseThing, databaseThing, cost[unitId], gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql);

        let sql = 'DELETE FROM purchased WHERE purchaseId = ?';
        let inserts = [purchaseId];
        sql = mysql.format(sql, inserts);
        database.query(sql);

        //tell user to + x the points (not yet displayed)
    });

    socket.on('useWarfareItem', (parameters, callback) => {
        // Using a warfare item during the planning phase, need to know where and stuff?
        // Need to know that main controller did it
        // Need to know where they want it (or does it need a location?)
    });

});

// ----------------------------------------------------------------------------------------

server.listen('4000', () => {
    console.log("Listening on port 4000...");
});
