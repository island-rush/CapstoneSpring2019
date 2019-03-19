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
    game0Password VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',
    game1Password VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',

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
    gameRound INT(1) NOT NULL DEFAULT 0, -- 0, 1, 2  rounds of movement
    gameSlice INT(1) NOT NULL DEFAULT 0, -- 0: planning, 1: battle/movement, 2: refuel, 3: containers

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
    PRIMARY KEY(pieceId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS purchases (
    purchaseId INT(8) NOT NULL AUTO_INCREMENT,
    purchaseGameId INT(3) NOT NULL,
    purchaseTeamId INT(1) NOT NULL,
    purchaseUnitId INT(2) NOT NULL,
    PRIMARY KEY(purchaseId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS invs (
    invId INT(8) NOT NULL AUTO_INCREMENT,
    invGameId INT(3) NOT NULL,
    invTeamId INT(1) NOT NULL,
    invUnitId INT(2) NOT NULL,
    PRIMARY KEY(invId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS plans(
	planId INT(8) NOT NULL AUTO_INCREMENT,
    planGameId INT(2) NOT NULL,
    planTeamId INT(1) NOT NULL,
    planPieceId INT(8) NOT NULL,
    planMovementOrder INT(2) NOT NULL,  -- references the order of plans  (1, 2, 3) (these get deleted after use) (only exist for 1/3)
    planPositionId INT(4) NOT NULL,  -- hex#
    planSpecialFlag INT(1) NOT NULL DEFAULT 0,  -- 0 = nothing (plain move), 1 = bombard, 2 = container open, ...
    PRIMARY KEY(planId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS eventQueue(
	eventId INT(8) NOT NULL AUTO_INCREMENT,
    eventGameId INT(2) NOT NULL,
    eventTeamId INT(1) NOT NULL, -- 0 for red, 1 for blue, 2 for ALL (battles)
    eventType INT(1) NOT NULL,  -- 0 for collision battle, 1 for pos battle, 2 for refuel, 3 for container
    PRIMARY KEY(eventId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS actionPieces(
	actionPieceId INT(8) NOT NULL,  -- references the actual pieceId (probably)
    actionEventId INT(2) NOT NULL,
    PRIMARY KEY(actionPieceId, actionEventId)
);

-- SELECT * FROM plans ORDER BY planPieceId, planMovementOrder ASC;


-- ---------------------------------------------------------------------
-- GAME SETUP HARD CODED UNTIL 'GAME-RESET' IMPLEMENTED ON ADMIN SITE --
-- ---------------------------------------------------------------------
INSERT INTO games (gameId, gameSection, gameInstructor) VALUES (1, 'M1A1', 'Adolph');

INSERT INTO pieces 
(pieceId, pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) 
VALUES 
(1, 1, 0, 0, 0, -1, 0, 2, -1),
(2, 1, 0, 0, 0, -1, 0, 2, -1),
(3, 1, 0, 0, 0, -1, 0, 2, -1),
(4, 1, 0, 3, 0, -1, 0, 2, -1),
(5, 1, 0, 1, 0, 1, 0, 2, -1);

-- INSERT INTO invs (invGameId, invTeamId, invUnitId) VALUES (1, 0, 4);
-- SELECT * FROM games;
-- SELECT * FROM pieces;
-- SELECT * FROM purchases;

-- SELECT * FROM plans;