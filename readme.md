# Island Rush 3

K3 is a new Strategic Wargame/boardgame expanded off of K2
- Game Manual Google Doc link (preffered): https://docs.google.com/document/d/117is9snSwiQPryseqxgoCS3ROo_jBPBfNH97yCHLLuQ/edit?usp=sharing
    - K3 Game Manual is also included
- Purpose of game is to test students on strategy (high level), so tactical (battles, attacks, low level stuff) are obfuscated. 
- Dice roll is important to give the player the feeling of control and also to build suspence and chance. 
- Teams move at same time - both teams put in plans of where they want each piece to move, then the queues are executed and battles, refueling, container events, and other collisions are detected at each 'step' of all the pieces. (every piece moves 1 space, check for everything, move another step, etc. )


***How the game 'plays'***
Read entire Game Manual for best understanding, but here is synopsis
- Mulitple controllers for each team. Land controls land, air controls air, etc. (All not actually implemeneted yet)
- Go through the game's phases using bottom right "control button"
- Combat phase consists of Planning and Execute
    - During planning players click on pieces and create planned moves for each piece
    - Once done planning, players use "control button" to start the Execute
    - The backend steps through every movement's first step, then sends new state (piece positions) to frontend
    - After step, check if any events (battles, refuel, etc)
    - Move every piece's second/next step (if available), and check again. 
    - Repeat until no more moves
- Hybrid warfare / Capabilities / Warfare Options are non-conventional means. (Satalite scan for ISR, missile strike, etc)
    - Some can be used (from inventory) immediately during the Planning stage. (i.e. satillite scan to reveal area before you move in)
    - Some are put in the queue to be Executed in the first turn (i.e. missile strike )


------------

## INSTRUCTIONS

- Built around React and Node JS
- Must be familiar with these frameworks and have them installed to work with this repo
- Need XAMPP (free software) to connect database. Start 'MySQL'
- Installing dependencies with 'npm install' within both /frontend and /backend directories
- Reccomend VS Code (free software) to write and update repository

------------

# For sandbox network deployment using development code
- need to be running local mysql server and run the db script to initialize everything
- run 'npm start' inside both backend and frontend directories
- use browser to navigate to localhost backend
- log into the admin and reset the game (inserts pieces)
- log into the game

# For production deployment
- need to build up the frontend dev using 'npm build' or something similar
- need to configure the backend to 'host' those files instead of redirecting, do this in the server.js
- host using apache and mysql servers running (local or cloud based)


