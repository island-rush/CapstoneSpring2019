DROP DATABASE IF EXISTS k3;
CREATE DATABASE k3;
USE k3;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE IF NOT EXISTS games(
	gameId INT(2) NOT NULL UNIQUE AUTO_INCREMENT,
	gameSection VARCHAR(4) NOT NULL,  -- "M1A1"
	gameInstructor VARCHAR(32) NOT NULL,  -- "Adolph"
	gameAdminPassword VARCHAR(32) NOT NULL DEFAULT '5f4dcc3b5aa765d61d8327deb882cf99',  -- md5('password')
	gameActive INT(1) NOT NULL DEFAULT 0,
	gameRedController0 INT(1) NOT NULL DEFAULT 0,
    gameRedController1 INT(1) NOT NULL DEFAULT 0,
    gameRedController2 INT(1) NOT NULL DEFAULT 0,
    gameRedController3 INT(1) NOT NULL DEFAULT 0,
	gameBlueController0 INT(1) NOT NULL DEFAULT 0,
    gameBlueController1 INT(1) NOT NULL DEFAULT 0,
    gameBlueController2 INT(1) NOT NULL DEFAULT 0,
    gameBlueController3 INT(1) NOT NULL DEFAULT 0,
    gameRedPoints INT(4) NOT NULL DEFAULT 10,
	gameBluePoints INT(4) NOT NULL DEFAULT 20,
	gameTurn INT(4) NOT NULL DEFAULT 0, -- represents a whole round from news -> place inv (possibly not needed)
	gamePhase INT(1) NOT NULL DEFAULT 0,  -- 0 = news, 1 = buy, 2 = combat, 3 = place inv
    gameCombat INT(1) NOT NULL DEFAULT 0, -- 0 = plan, 1 = execute (battles -> refuel)
    gameFlag0 INT(1) NOT NULL DEFAULT 1, -- 0 is neutral, 1 = red, 2 = blue, 3 = nuke? (or -1)
    gameFlag1 INT(1) NOT NULL DEFAULT 1,
    gameFlag2 INT(1) NOT NULL DEFAULT 1,
    gameFlag3 INT(1) NOT NULL DEFAULT 1,
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
    pieceContainerId INT(8) NOT NULL,
    pieceVisible INT(1) NOT NULL,
    pieceMoves INT(2) NOT NULL,
    pieceFuel INT(2) NOT NULL,
    PRIMARY KEY(pieceId),
    FOREIGN KEY (pieceGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS purchased (
    purchaseId INT(8) NOT NULL AUTO_INCREMENT,
    purchaseGameId INT(3) NOT NULL,
    purchaseTeamId INT(1) NOT NULL,
    purchaseUnitId INT(2) NOT NULL,
    PRIMARY KEY(purchaseId),
    FOREIGN KEY (purchaseGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS plans(
	planId INT(8) NOT NULL AUTO_INCREMENT,
    planGameId INT(2) NOT NULL,
    planTeamId INT(1) NOT NULL,
    planPieceId INT(8) NOT NULL,
    planMovementOrder INT(2) NOT NULL,  -- references the order of plans  (1, 2, 3) (these get deleted after use) (only exist for 1/3)
    planPositionId INT(4) NOT NULL,  -- hex#
    planSpecialFlag INT(1) NOT NULL DEFAULT 0,  -- bombard, container open, etc....
    PRIMARY KEY(planId),
    FOREIGN KEY (planGameId) REFERENCES games(gameId)
) AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS news(
	newsId INT(8) NOT NULL AUTO_INCREMENT,
	newsGameId INT(3) NOT NULL,
	newsOrder INT(3) NOT NULL,  -- in comparison to other newsalerts, which one comes next, all others will decrement, delete this one after running
	newsHeadline VARCHAR(200) NOT NULL,  -- title
	newsText VARCHAR(500) NOT NULL,  -- explanation
	newsType INT(1) NOT NULL DEFAULT 0, -- 0 = none (don't insert effects), 1 = disable, 2 = rollDie, 3 = humanitarian
	newsTeamEffected INT(1) NOT NULL, -- 0 for all, 1 for Red, 2 for Blue
	newsRollNeeded INT(2) NOT NULL DEFAULT 0, -- roll # to survive
	newsIsland INT(2) NOT NULL DEFAULT -1,  -- island number, or -1 for all positions on the board
    newsLength INT(2) NOT NULL DEFAULT 1,
	newsPieceINT INT,
	PRIMARY KEY(newsId)
) AUTO_INCREMENT=1;

-- only for disabling pieces
CREATE TABLE IF NOT EXISTS effects(
	effectId INT(8) NOT NULL AUTO_INCREMENT,
	effectGameId INT(3) NOT NULL,
	effectPosId INT(4) NOT NULL DEFAULT -1,  -- -1 = all, otherwise hex position
    effectINT INT,
	PRIMARY KEY(effectId)
) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS updates(
	updateId INT(16) NOT NULL AUTO_INCREMENT,
	updateGameId INT(5) NOT NULL,
	updateType INT(2) NOT NULL, -- 0 = pieceMove, 1 = 
	updatePlacementId INT(8) DEFAULT 0,
	updateNewPositionId INT(3) DEFAULT 0,
	updateNewContainerId INT(8) DEFAULT 0,
	PRIMARY KEY(updateId)
 ) AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS battleUnits(
	battleId INT(16) NOT NULL,
	battleGameId INT(5) NOT NULL,
    battlePieceId INT(8) NOT NULL,
	PRIMARY KEY(battlePieceId)
 ) AUTO_INCREMENT=1;



INSERT INTO games (gameId, gameSection, gameInstructor) VALUES (1, 'M1A1', 'Adolph');


INSERT INTO pieces 
(pieceId, pieceGameId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceVisible, pieceMoves, pieceFuel) 
VALUES 
(1, 1, 0, 0, 0, -1, 0, 2, -1),
(2, 1, 0, 0, 0, -1, 0, 2, -1),
(3, 1, 0, 0, 0, -1, 0, 2, -1),
(4, 1, 0, 0, 0, -1, 0, 2, -1),
(5, 1, 0, 1, 0, 1, 0, 2, -1);








