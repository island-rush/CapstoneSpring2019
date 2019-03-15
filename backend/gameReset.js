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
            const notContained = -1;
            const notVisible = 0;
            const visible = 1;
            const noFuel = -1;
            // access moves array with piece id. ex: moves[convoy]
            const moves = [6,8,12,6,7,7,1,1,1,1,2,2,1,2,2,2,2,4,7,1,0,0,0];
            // setup fuel
            const bomberFuel = 15;
            const stealthBomberFuel = 12;
            const fighterFuel = 8;
            const tankerFuel = 22;
            const airTransportFuel = 17;
            const airISRFuel = 13;
            const attackHeliFuel = 3;
            const mc12Fuel = 12;
            const c130Fuel = 14;
            // Set up pieceId's
            const bomber = 0;
            const stealthBomber = 1;
            const fighter = 2;
            const tanker = 3;
            const airTransport = 4;
            const airISR = 5;
            const infantry = 6;
            const artillery = 7;
            const tank = 8;
            const marines = 9;
            const attackHeli = 10;
            const convoy = 11;
            const sam = 12;
            const destroyer = 13;
            const aircraftCarrier = 14;
            const submarine = 15;
            const transport = 16;
            const mc12 = 17;
            const c130 = 18;
            const sofTeam = 19;
            const radar = 20;
            const seaMines = 21;
            const drones = 22;
        
            //only need this once
            sqlPieceInsert = 'INSERT INTO pieces (pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

            inserts = [gameId, redTeam, tanker, 11, notContained, notVisible, moves[tanker], noFuel];
            sql = mysql.format(sqlPieceInsert, inserts);
            database.query(sql);

            inserts = [gameId, redTeam, tanker, 12, notContained, notVisible, moves[tanker], noFuel];
            sql = mysql.format(sqlPieceInsert, inserts);
            database.query(sql);

            inserts = [gameId, redTeam, tanker, 12, notContained, notVisible, moves[tanker], noFuel];
            sql = mysql.format(sqlPieceInsert, inserts);
            database.query(sql);
        });
    }
}
