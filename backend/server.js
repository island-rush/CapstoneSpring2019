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
        res.sendFile(__dirname + '/game.html');
    }
});

app.get('/admin.html', (req, res) => {
    if (!req.session.secretAdminSessionVariable) {
        res.redirect('/index.html?err=UnauthorizedAdmin');
    } else {
        res.sendFile(__dirname + '/admin.html');
    }
});

//TODO: change this to a socket check
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
                if (parseInt(req.query.gameTeam) === -1) {
                    req.session.gameId = results[0].gameId;
                    req.session.teamId = req.query.gameTeam;
                    res.redirect('game.html');
                } else {
                    //(could make this cleaner with better select statement, but exception for spec (do we need spec?))
                    let teamLoggedIn;
                    switch(parseInt(req.query.gameTeam)) {
                        case 0:
                            teamLoggedIn = results[0].gameTeam0;
                            break;
                        case 1:
                            teamLoggedIn = results[0].gameTeam1;
                            break;
                        case 2:
                            teamLoggedIn = results[0].gameTeam2;
                            break;
                        case 3:
                            teamLoggedIn = results[0].gameTeam3;
                            break;
                        case 4:
                            teamLoggedIn = results[0].gameTeam4;
                            break;
                        case 5:
                            teamLoggedIn = results[0].gameTeam5;
                            break;
                        case 6:
                            teamLoggedIn = results[0].gameTeam6;
                            break;
                        case 7:
                            teamLoggedIn = results[0].gameTeam7;
                            break;
                    }
                    if (parseInt(teamLoggedIn) === 1) {
                        res.redirect('/index.html?err=AlreadyLoggedIn');
                    } else {
                        req.session.gameId = results[0].gameId;
                        req.session.teamId = req.query.gameTeam;
                        sql = `UPDATE games SET ?? = 1 WHERE gameId = ?`;
                        let inserts = ['gameTeam' + req.query.gameTeam, results[0].gameId];
                        sql = mysql.format(sql, inserts);
                        db.query(sql, (err, results) => {
                            if(err) throw err;
                            res.redirect('game.html');
                        });
                    }
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
    console.log("socket connected");

    console.log(socket.handshake.session.someSessionVariable);
});


server.listen('4000', () => {
    console.log("listening on port 4000...");
});
