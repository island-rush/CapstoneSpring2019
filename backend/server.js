const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const session = require('express-session')({
    secret: "mySecret",
    resave: true,
    saveUninitialized: true
});
const sharedsession = require('express-socket.io-session');
app.use(session);
io.use(sharedsession(session));
const md5 = require('md5');
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DFCS2019student',
    database: 'k3'
});
db.connect((err) => {
    if(err) throw err;
    console.log(`MySQL connected to k3`);
});

// ----------------------------------------------------


app.get('/', (req, res) => {
    //TODO: if the session gameId and teamId are not null, change to logged out inside the database? (probably woudldn't affect much tho)
    req.session.gameId = null;
    req.session.teamId = null;
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
    req.session.gameId = null;
    req.session.teamId = null;
    res.sendFile(__dirname + '/index.html');
});

app.get('/game.html', (req, res) => {
    if (!req.session.gameId || !req.session.teamId) {
        res.redirect('/index.html?err=NotLoggedIn');
    } else {
        res.redirect('localhost:3000');  //TODO: change this to static files when frontend is fully built
    }
});

app.get('/admin.html', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        res.sendFile(__dirname + '/admin.html');
    }
});

//Could change this to a socket check from socket connection on the index
//TODO change this call back hell into promises and stuff
app.get('/gameLoginVerify', (req, res) => {
    if(!req.query.gameSection || !req.query.gameInstructor || !req.query.gameTeam) {
        res.redirect('/index.html?err=BadParameters');  // didn't hit the backend with right query parameters
    } else {
        let sql = `SELECT * FROM games WHERE gameSection = ? AND gameInstructor = ?`;
        let inserts = [req.query.gameSection, req.query.gameInstructor];
        sql = mysql.format(sql, inserts);
        db.query(sql, (err, results) => {
            if (err) throw err;
            if (results.length !== 1) {
                res.redirect('/index.html?err=GameDoesNotExist');
            } else {
                const allReturnTeamValues = [results[0].gameTeam0, results[0].gameTeam1, results[0].gameTeam2, results[0].gameTeam3, results[0].gameTeam4, results[0].gameTeam5, results[0].gameTeam6, results[0].gameTeam7];
                let teamLoggedIn = allReturnTeamValues[req.query.gameTeam];                        
                if (parseInt(teamLoggedIn) === 1) {
                    res.redirect('/index.html?err=AlreadyLoggedIn');
                } else {
                    req.session.gameId = parseInt(results[0].gameId);
                    req.session.teamId = req.query.gameTeam <= 3 ? 0 : 1;
                    req.session.controllerId = parseInt(req.query.gameTeam);
                    sql = `UPDATE games SET ?? = 1 WHERE gameId = ?`;
                    let inserts = ['gameTeam' + req.query.gameTeam, results[0].gameId];
                    sql = mysql.format(sql, inserts);
                    db.query(sql, (err, results) => {
                        if(err) throw err;
                        res.redirect('http://localhost:3000');
                    });
                }
            }
        });
    }
});

//TODO: Change this to a socket check
app.get('/adminLoginVerify', (req, res) => {
    if (!req.query.adminSection || !req.query.adminInstructor || !req.query.adminPassword) {
        res.redirect('/index.html?err=BadAdminLoginRequest');
    } else {
        let sql = `SELECT * FROM games WHERE gameSection = ? AND gameInstructor = ? AND gameAdminPassword = ?`;
        let inserts = [req.query.adminSection, req.query.adminInstructor, md5(req.query.adminPassword)];
        sql = mysql.format(sql, inserts);
        db.query(sql, (err, results) => {
            if (err) throw err;
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


io.sockets.on('connection', (socket) => {
    socket.on('getGamePositions', (callback) => {
        const gameId = socket.handshake.session.gameId;
        const teamId = socket.handshake.session.teamId;
        let totalResults = {};
        totalResults.positions = [];
        for (let x = 0; x < 727; x++) {
            totalResults.positions[x] = [];
        }
        let sql = 'SELECT pieceId, pieceFuel, pieceMoves, pieceUnitId, pieceTeamId, piecePositionId, pieceContainerId FROM pieces WHERE pieceGameId = ? AND (pieceVisible = 1 OR pieceTeamId = ?) ORDER BY piecePositionId';
        let inserts = [gameId, teamId];
        sql = mysql.format(sql, inserts);
        db.query(sql, (err, results) => {
            if(err) throw err;
            results.map(result => {
                totalResults.positions[result.piecePositionId].push(result);
            });
            callback(totalResults);
        });
    });
});


server.listen('4000', () => {
    console.log("listening on port 4000...");
});
