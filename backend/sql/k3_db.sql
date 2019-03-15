-- -----------------------------------------------------------------------
-- DATABASE CREATION --
-- -----------------------------------------------------------------------

DROP DATABASE IF EXISTS k3;
CREATE DATABASE k3;
USE k3;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE IF NOT EXISTS games(
	gameId INT(2) NOT NULL UNIQUE AUTO_INCREMENT,
	gameSection VARCHAR(4) NOT NULL,  -- ex: "M1A1"
	gameInstructor VARCHAR(32) NOT NULL,  -- ex: "Adolph"
	gameAdminPassword VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',  -- md5('password') is the default, use md5 for all hashes
	game0Password VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',  -- md5('password') is the default, use md5 for all hashes
	game1Password VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',  -- md5('password') is the default, use md5 for all hashes

	gameActive INT(1) NOT NULL DEFAULT 0,  -- 0: inactive, 1: active (set by the admin)

	game0Controller0 INT(1) NOT NULL DEFAULT 0,  -- 0: logged out, 1: logged in
    game0Controller1 INT(1) NOT NULL DEFAULT 0,
    game0Controller2 INT(1) NOT NULL DEFAULT 0,
    game0Controller3 INT(1) NOT NULL DEFAULT 0,
	game1Controller0 INT(1) NOT NULL DEFAULT 0,
    game1Controller1 INT(1) NOT NULL DEFAULT 0,
    game1Controller2 INT(1) NOT NULL DEFAULT 0,
    game1Controller3 INT(1) NOT NULL DEFAULT 0,
    
    game0Status INT(1) NOT NULL DEFAULT 0,  -- 0: still active, 1: waiting for other player
	game1Status INT(1) NOT NULL DEFAULT 0,
    
    game0Points INT(4) NOT NULL DEFAULT 10,
	game1Points INT(4) NOT NULL DEFAULT 20,

	gamePhase INT(1) NOT NULL DEFAULT 3, -- 0: news, 1: buy, 2: gameplay, 3: place inv
    gameRound INT(1) NOT NULL DEFAULT 0, -- 0, 1, 2
    gameSlice INT(1) NOT NULL DEFAULT 0, -- 0: plan, 1: battle/movement, 2: refuel, 3: containers

    gameFlag0 INT(1) NOT NULL DEFAULT 1, 
    gameFlag1 INT(1) NOT NULL DEFAULT 1,
    gameFlag2 INT(1) NOT NULL DEFAULT 1,
    gameFlag3 INT(1) NOT NULL DEFAULT 1, -- 0: red, 1: blue, (2 = neutral?, 3 = nuke?...etc)
    gameFlag4 INT(1) NOT NULL DEFAULT 1,
    gameFlag5 INT(1) NOT NULL DEFAULT 1,
    gameFlag6 INT(1) NOT NULL DEFAULT 1,
    gameFlag7 INT(1) NOT NULL DEFAULT 1,
    gameFlag8 INT(1) NOT NULL DEFAULT 1,
    gameFlag9 INT(1) NOT NULL DEFAULT 1,
    gameFlag10 INT(1) NOT NULL DEFAULT 1,
    gameFlag11 INT(1) NOT NULL DEFAULT 1,
    gameAirfield0 INT(1) NOT NULL DEFAULT 1,
    gameAirfield1 INT(1) NOT NULL DEFAULT 1,
    gameAirfield2 INT(1) NOT NULL DEFAULT 1,
    gameAirfield3 INT(1) NOT NULL DEFAULT 1,
    gameAirfield4 INT(1) NOT NULL DEFAULT 1,
    gameAirfield5 INT(1) NOT NULL DEFAULT 1,
	PRIMARY KEY(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS pieces(
	pieceId INT(8) NOT NULL AUTO_INCREMENT,
    pieceGameId INT(3) NOT NULL,
    pieceTeamId INT(1) NOT NULL,
    pieceUnitId INT(2) NOT NULL,
	piecePositionId INT(4) NOT NULL,
    pieceContainerId INT(8) NOT NULL, -- -1: out of container, otherwise a pieceId for container
    pieceVisible INT(1) NOT NULL,
    pieceMoves INT(2) NOT NULL,
    pieceFuel INT(2) NOT NULL, -- -1: if piece does not use fuel, but is limited by moves
    PRIMARY KEY(pieceId),
    FOREIGN KEY (pieceGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS purchases (
    purchaseId INT(8) NOT NULL AUTO_INCREMENT,
    purchaseGameId INT(3) NOT NULL,
    purchaseTeamId INT(1) NOT NULL,
    purchaseUnitId INT(2) NOT NULL,
    PRIMARY KEY(purchaseId),
    FOREIGN KEY (purchaseGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS invs (
    invId INT(8) NOT NULL AUTO_INCREMENT,
    invGameId INT(3) NOT NULL,
    invTeamId INT(1) NOT NULL,
    invUnitId INT(2) NOT NULL,
    PRIMARY KEY(invId),
    FOREIGN KEY (invGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS plans(
	planId INT(8) NOT NULL AUTO_INCREMENT,
    planGameId INT(2) NOT NULL,
    planTeamId INT(1) NOT NULL,
    planPieceId INT(8) NOT NULL,
    planMovementOrder INT(2) NOT NULL,  -- references the order of plans  (1, 2, 3) (these get deleted after use) (only exist for 1/3)
    planPositionId INT(4) NOT NULL,  -- hex#
    planSpecialFlag INT(1) NOT NULL DEFAULT 0,  -- 0 = nothing (plain move), 1 = bombard, 2 = container open, ...
    PRIMARY KEY(planId),
    FOREIGN KEY (planGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;



-- ---------------------------------------------------------------------
-- GAME SETUP HARD CODED UNTIL 'GAME-RESET' IMPLEMENTED ON ADMIN SITE --
-- ---------------------------------------------------------------------
INSERT INTO games (gameId, gameSection, gameInstructor) VALUES (1, 'M1A1', 'Adolph');

-- INSERT INTO pieces 
-- (pieceId, pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) 
-- VALUES 
-- (1, 1, 0, 0, 84, -1, 1, 6, 15),
-- (2, 1, 0, 1, 84, -1, 1, 8, 12),
-- (3, 1, 0, 2, 84, -1, 1, 8, 12),
-- (4, 1, 0, 2, 84, -1, 1, 8, 12),
-- (5, 1, 0, 3, 84, -1, 1, 6, 22),
-- (6, 1, 0, 10, 84, -1, 1, 2, 3),
-- (7, 1, 0, 8, 119, -1, 1, 2, -1),
-- (8, 1, 0, 6, 72, -1, 1, 1, -1),
-- (9, 1, 0, 16, 121, -1, 1, 2, -1),
-- (10, 1, 1, 16, 205, -1, 1, 2, -1),
-- (11, 1, 1, 2, 202, -1, 1, 8, 12),
-- (12, 1, 1, 2, 202, -1, 1, 8, 12),
-- (13, 1, 1, 3, 202, -1, 1, 6, 22),
-- (14, 1, 1, 12, 186, -1, 1, 1, -1),
-- (15, 1, 1, 15, 170, -1, 1, 2, -1),
-- (16, 1, 1, 5, 202, -1, 1, 7, 13),
-- (17, 1, 1, 11, 203, -1, 1, 2, -1),
-- (18, 1, 1, 7, 202, -1, 1, 1, -1),
-- (19, 1, 1, 4, 202, -1, 1, 7, 17),
-- (20, 1, 1, 13, 154, 1, 1, 2, -1);

-- INSERT INTO invs (invGameId, invTeamId, invUnitId) VALUES (1, 0, 4);

-- SELECT * FROM purchases;