module.exports = { 
    resetGame: function(mysql, database, gameId) {
        console.log("reseting the game");

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

            //TODO: this is the real one.
            // sqlGameInsert = 'INSERT INTO games (gameId, gameSection, gameInstructor, gameAdminPassword) VALUES (?, ?, ?, ?)';
            // inserts = [gameId, gameSection, gameInstructor, gameAdminPassword];
            // sql = mysql.format(sqlGameInsert, inserts);
            // database.query(sql);

            //TODO: this is the dev one, resets it in a certain phase
            sqlGameInsert = 'INSERT INTO games (gameId, gameSection, gameInstructor, gameAdminPassword, gamePhase) VALUES (?, ?, ?, ?, ?)';
            inserts = [gameId, gameSection, gameInstructor, gameAdminPassword, 2];
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
            const moves = [6,8,12,6,7,7,1,1,1,1,2,2,1,2,2,2,2,4,7,1,0,0,0,0];
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
            const fuelList = [bomberFuel, stealthBomberFuel, fighterFuel, tankerFuel, airTransportFuel, airISRFuel, -1, -1, -1, -1, attackHeliFuel, -1, -1, -1, -1, -1, -1, mc12Fuel, c130Fuel, -1, -1, -1, -1, -1];
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
            const lbsm = 23;

            const blueBomber = [721];
            const blueStealthBomber = [721];
            const blueFighter = [640, 640, 640];
            const blueTanker = [721, 721];
            const blueAirTransport = [640];
            const blueAirISR = [640];
            const blueInfantry = [492, 492, 587, 587, 179, 179, 179, 197, 197, 499];
            const blueArtillery = [492, 587, 587, 179, 179, 197, 163, 499];
            const blueTank = [577, 587, 587, 179, 179, 197, 163, 499];
            const blueMarines = [529, 529, 670, 670, 178];
            const blueAttackHeli = [529];
            const blueConvoy = [492, 529, 179, 178, 466];
            const blueSam = [577];
            const blueDestroyer = [510, 194, 113, 181];
            const blueAircraftCarrier = [568, 494, 572, 479];
            const blueSubmarine = [412, 403, 510, 566, 616, 496];
            const blueTransport = [510, 510, 572, 572];
            const blueMc12 = [];
            const blueC130 = [721, 721];
            const blueSofTeam = [671, 722];
            const blueRadar = [640];
            const blueSeaMines = [];
            const blueDrones = [];
            const blueLbsm = [617, 469, 630];
            const blueCarryFighter = [572];
            const bluePieces = [blueBomber, blueStealthBomber, blueFighter, blueTanker, blueAirTransport, blueAirISR, blueInfantry, blueArtillery, blueTank, blueMarines, blueAttackHeli, blueConvoy, blueSam, blueDestroyer, blueAircraftCarrier, blueSubmarine, blueTransport, blueMc12, blueC130, blueSofTeam, blueRadar, blueSeaMines, blueDrones, blueLbsm];

            const redBomber = [21];
            const redStealthBomber = [];
            const redFighter = [626, 626, 70, 70, 253, 253];
            const redTanker = [21, 21];
            const redAirTransport = [70];
            const redAirISR = [626, 70, 253];
            const redInfantry = [644, 644, 14, 253];
            const redArtillery = [14, 5, 202, 240];
            const redTank = [626, 676, 14, 5, 202];
            const redMarines = [626, 5, 5, 202, 240, 224];
            const redAttackHeli = [676];
            const redConvoy = [676];
            const redSam = [644, 109, 187];
            const redDestroyer = [266, 592, 150, 134];
            const redAircraftCarrier = [249, 76];
            const redSubmarine = [266,233, 294, 105, 122];
            const redTransport = [];
            const redMc12 = [];
            const redC130 = [21];
            const redSofTeam = [84, 34];
            const redRadar = [];
            const redSeaMines = [];
            const redDrones = [];
            const redLbsm = [117, 226];
            const redCarryFighter = [249, 249];
            const redPieces = [redBomber, redStealthBomber, redFighter, redTanker, redAirTransport, redAirISR, redInfantry, redArtillery, redTank, redMarines, redAttackHeli, redConvoy, redSam, redDestroyer, redAircraftCarrier, redSubmarine, redTransport, redMc12, redC130, redSofTeam, redRadar, redSeaMines, redDrones, redLbsm];
            const combinedPieces = [redPieces, bluePieces];
            sqlPieceInsert = 'INSERT INTO pieces (pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

            //All pieces but pieces that get placed into containers
            for (team = 0; team < 2; team++) {
                for (piece = 0; piece < combinedPieces[team].length; piece++) {
                    for (unit = 0; unit < combinedPieces[team][piece].length; unit++) {
                        inserts = [gameId, team, piece, combinedPieces[team][piece][unit], notContained, notVisible, moves[piece], fuelList[piece]];
                        sql = mysql.format(sqlPieceInsert, inserts);
                        database.query(sql);
                    }
                }
            }
        });
    }
}
