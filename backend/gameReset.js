module.exports = function() { 
    this.resetGame = function(dbConn, gameID) {
        //Games Table: Update all non-permanent attributes in games table
        let sql = 'SELECT * FROM games WHERE gameId = ?';
        let inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(rows => {
            const {gameSection, gameInstructor, gameAdminPassword} = rows[0];
            sql = 'DELETE FROM games WHERE gameId = ?';
            inserts = [gameID];
            database.query(sql);
        })
        .then(() => {
            sql = 'INSERT INTO games (gameId, gameSection, gameInstructor, gameAdminPassword) VALUES (?, ?, ?, ?)';
            inserts = [gameID, gameSection, gameInstructor, gameAdminPassword]
            database.query(sql);
        })
        .then(() => {
                    //Pieces Table: Delete all entries in pieces where piecegameID = gameID
        sql = 'DELETE * FROM pieces WHERE pieceGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)

        //Plans Table: Delete all entries in plans where plangameID = gameID
        sql = 'DELETE * FROM plans WHERE planGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)

        //News Table: Delete all entries in news where newsgameID = gameID
        sql = 'DELETE * FROM news WHERE newsGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        
        //Effects Table: Delete all entries in effects where effectGameID = gameID
        sql = 'DELETE * FROM effects WHERE effectGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)

        //Updates Table: Delete all entries in updates where updateGameID = gameID
        sql = 'DELETE * FROM updates WHERE updateGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)

        //BattleUnites Table: Delete all entries in battleUnits where battleGameId = GameID
        sql = 'DELETE * FROM battleUnits WHERE battleGameId = ?';
        inserts = [gameID];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        })
    };
}
