# Island Rush 3.0

K3.0 is a new Strategic Wargame/boardgame expanded off of K2
Game Manual Google Doc link (preffered): https://docs.google.com/document/d/117is9snSwiQPryseqxgoCS3ROo_jBPBfNH97yCHLLuQ/edit?usp=sharing
K3 Game Manual is also included
Purpose of game is to test students on strategy (high level), so tactical (battles, attacks, low level stuff) are obfuscated. 

- Teams move at same time - both teams put in plans of where they want each piece to move, then the queues are executed and battles, refueling, container events, and other collisions are detected at each 'step' of all the pieces. (every piece moves 1 space, check for everything, move another step, etc. )

- Mulitple controllers for each team. Land controls land, air controls air, etc. (All not actually implemeneted yet)

------------

## INSTRUCTIONS

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


