module.exports = { 
    resetGame: function(mysql, database, gameId) {
        let sql = 'SELECT * FROM games WHERE gameId = ?';
        let inserts = [gameId];
        sql = mysql.format(sql, inserts);
        database.query(sql)
        .then(rows => {
            const {gameSection, gameInstructor, gameAdminPassword} = rows[0];
            sql = 'DELETE FROM pieces WHERE pieceGameId = ?';
            inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);

            sql = 'DELETE FROM plans WHERE planGameId = ?';
            inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);

            sql = 'DELETE FROM purchases WHERE purchaseGameId = ?';
            inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);

            sql = 'DELETE FROM invs WHERE invGameId = ?';
            inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);

            sql = 'DELETE FROM games WHERE gameId = ?';
            inserts = [gameId];
            sql = mysql.format(sql, inserts);
            database.query(sql);

            sqlGameInsert = 'INSERT INTO games (gameSection, gameInstructor, gameAdminPassword) VALUES (?, ?, ?)';
            inserts = [gameSection, gameInstructor, gameAdminPassword];
            sql = mysql.format(sqlGameInsert, inserts);
            database.query(sql);

            //Set up constants
            const redTeam = 0;
            const blueTeam = 1;
            const tanker = 0;
            const tankerMoves = 5;
            const notContained = -1;
            const notVisible = 0;
            const visible = 1;
            const noFuel = -1;

            //only need this once
            sqlPieceInsert = 'INSERT INTO pieces (pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

            inserts = [gameId, redTeam, tanker, 11, notContained, notVisible, tankerMoves, noFuel];
            sql = mysql.format(sqlPieceInsert, inserts);
            database.query(sql);

            inserts = [gameId, redTeam, tanker, 12, notContained, notVisible, tankerMoves, noFuel];
            sql = mysql.format(sqlPieceInsert, inserts);
            database.query(sql);
        });
    }
}
