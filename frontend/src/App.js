import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Bottombar from './components/Bottombar';
import Gameboard from './components/Gameboard';
import Sidebar from './components/Sidebar';
import Zoombox from './components/Zoombox';
import NewsAlertPopup from './components/NewsAlertPopup';
import BattlePopup from './components/BattlePopup';
import RefuelPopup from './components/RefuelPopup';
import ContainerPopup from './components/ContainerPopup';
import './App.css';

class App extends Component {
  //Each Position has a hard-coded type (land, water, flag(neutral), red(capitol), blue(capitol)...)
  positionTypes = ['land', 'land', 'land', 'land', 'land', 'red', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'red', 'land', 'land', 'land', 'land', 'land', 'land', 'airfield', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'airfield', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'missile', 'airfield', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'red', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'missile', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'blue', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'airfield', 'water', 'water', 'water', 'land', 'red', 'land', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'missile', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'land', 'red', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'airfield', 'land', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'flag', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'airfield', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'land', 'flag', 'land', 'airfield', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'land', 'missile', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'missile', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'missile', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'blue', 'land', 'water', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'blue', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'missile', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'land', 'airfield', 'water', 'water', 'water', 'missile', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'airfield', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'blue', 'land', 'land', 'land', 'land', 'land', 'red', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'blue', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'airfield', 'land', 'land', 'land', 'land', 'land'];

  //App level state used to control the game
  state = {
    distanceMatrix: [],  //hardcoded, comes from server

    currentNewsAlert: {
      title: "News Alert Title",
      text: "News Alert Text"
    },

    gameId: -1,
    teamId: -1,  //0 = red, 1 = blue
    controllerId: -1,
    points: -1,
    gamePhase: 2,  //news, buy, gameplay, place
    gameRound: 0,  //0, 1, 2
    gameSlice: 0,  //plan, battle/move, refuel, container
    status: 1,  //0 = active, 1 = waiting

    positions: [],  //main board positions

    cart: [],  //currently buying, menu1
    inv: [],  //inventory, menu2



    selectedFriendlyBattlePiece: -1,
    battleZone0: [
      {
        battlePieceAttacking: {pieceId: 1, pieceUnitId: 1},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 2, pieceUnitId: 1},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 3, pieceUnitId: 2},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 4, pieceUnitId: 6},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 5, pieceUnitId: 6},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 6, pieceUnitId: 6},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 7, pieceUnitId: 6},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      }
    ],  //Friendly team battle
    battleZone1: [
      {
        battlePieceAttacking: {pieceId: 4, pieceUnitId: 2},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      },
      {
        battlePieceAttacking: {pieceId: 5, pieceUnitId: 3},
        battlePieceTarget: null,  //piece-like object, id + unit?
        battlePieceTargetIndex: -1,
        battleDiceRolled: 0
      }
    ],  //Enemy team battle

    selectedContainerPiece: -1,
    containerPieces: [
      {
        pieceId: 4,
        pieceUnitId: 0,
        contents: [
          {
            pieceId: 6,
            pieceUnitId: 6
          },
          {
            pieceId: 9,
            pieceUnitId: 9
          }
        ]
      },
      {
        pieceId: 16,
        pieceUnitId: 16,
        contents: []
      }
    ],
    actualPieces: [
      {
        pieceId: 8,
        pieceUnitId: 8
      },
      {
        pieceId: 9,
        pieceUnitId: 9
      },
      {
        pieceId: 9,
        pieceUnitId: 9
      },
      {
        pieceId: 13,
        pieceUnitId: 13
      },
      {
        pieceId: 15,
        pieceUnitId: 15
      }
    ],

    selectedTankerPiece: -1,
    tankerPieces: [
      {
        pieceId: 3,
        pieceUnitId: 3,
        pieceFuel: 50,
        pieceRemovedFuel: 5,
        contents: [
          {
            pieceId: 5,
            pieceUnitId: 5,
            pieceFuel: 10,
            pieceFuelAllowed: 15
          }
        ]
      }
    ],
    refuelPieces: [
      {
        pieceId: 1,
        pieceUnitId: 1,
        pieceFuel: 10,
        pieceFuelAllowed: 15
      },
      {
        pieceId: 2,
        pieceUnitId: 2,
        pieceFuel: 5,
        pieceFuelAllowed: 15
      }
    ],

    tankerZone: [],  //Tankers giving fuel side
    refuelZone: [],  //Pieces getting fuel side

    highlighted: [],  //Used for highlighting pos, adjacent positions all go into this array
    highlightedType: "all",  //Used to only highlight "land" or "water" for specific pieces (in planning)

    planningMove: false,  //is the client currently making a plan
    planningContainer: false,  //is the client planning a container open
    plannedPos: [],  //positions to be highlighted because they are part of a selected plan
    confirmedPlans: [],  //plan objects that are known to the client
    plannedMove: {  //current plan object being made
      pieceId: -1,
      movesArray: []  //array of moves (not including starting array) as well as special flags*
    },

    warfareOptionSelect: "",  //"position" or "piece" 

    userFeedback: "DEFAULT USER FEEDBACK",

    selectedPos: 0,  //Position currently clicked by the client
    selectedMenu: 0,  //Menu selected by the client (0 = none)
    selectedPiece: null  //Piece object, currently selected by the user (received from positions array)
  }

  //Called when the app loads, gets the initial state, and sets up the other socket functions for the client + server to use
  socket = socketIOClient('http://localhost:4000');
  componentDidMount() {
    this.socket.emit('getInitialGameState', (gameState) => {
      this.setState(gameState);
    });
    this.socket.on('serverSetState', (gameState) => {
      this.setState(gameState);
    });
  }

  //App Level Functions
  selectPos = (id) => {
    this.setState({selectedPos: id, selectedMenu: 0});
    // IN PLANNING MOVES
    if (this.state.planningMove) {
      let nextPos = id;
      let statePlannedMove = this.state.plannedMove;
      // Figure out previous position
      // find the last pos the piece moved to (non-specialFlag) (to show adj. possible moves) (need this for container bc it doesnt actually move there but its in plannnedPos)
      let lastMovedPosition = this.state.selectedPiece.piecePositionId;
      for(let x = 0; x < statePlannedMove.movesArray.length; x++){
        if(statePlannedMove.movesArray[x].specialFlag == 0){
          lastMovedPosition = statePlannedMove.movesArray[x].newPosition;
        }
      }
      // check adjacent and add move to plan
      if( this.state.distanceMatrix[lastMovedPosition][nextPos] == 1){
        // If were planning a container open:
        if(this.state.planningContainer){
          //add an open container "move" at the selected (adj) position
          statePlannedMove.pieceId = this.state.selectedPiece.pieceId;
          statePlannedMove.movesArray.push({
            newPosition: nextPos,
            specialFlag: 2
          });
          this.setState({planningContainer: false});
        }
        else{ //not container; just normal moving
          statePlannedMove.pieceId = this.state.selectedPiece.pieceId;
          statePlannedMove.movesArray.push({
            newPosition: nextPos,
            specialFlag: 0
          });
        }
        //update the visual path of the plan
        this.setState({plannedMove: statePlannedMove});
        let statePlannedPos = this.state.plannedPos;
        statePlannedPos.push(nextPos);
        this.setState({plannedPos: statePlannedPos});
        // Show the next possible moves for this piece/path
        // Find the last *moved* position (last normal move, not containers, etc)
        for(let x = 0; x < statePlannedMove.movesArray.length; x++){
          if(statePlannedMove.movesArray[x].specialFlag == 0){
            lastMovedPosition = statePlannedMove.movesArray[x].newPosition;
          }
        }
        //TODO: Change statement below to  show possible moves based on piece type and if it has moves left
        
        this.showAdjacent(lastMovedPosition, 1, "all"); 
        this.userFeedback("added a movement!");
      }
    } 
    else if(this.state.warfareOptionSelect == "position" || this.state.warfareOptionSelect == "position" && this.state.planningMove){
      //TODO: Eric warfare options for positions
    }
    else { // NOT in planning or warfare select; just clicking positions normally
      this.resetPieceOpen();
      this.userFeedback("you selected a position!");
      this.setState({plannedPos: [], selectedPiece: null});
    }
  }

  showAdjacent = (pos, radius, type) => {
    let searchAreaLow = (pos - (radius * 17) - 4);
    let searchAreaHigh = (pos + (radius * 17) + 4);
    searchAreaLow = searchAreaLow < 0 ? 0 : searchAreaLow;
    searchAreaHigh = searchAreaHigh >= 727 ? 727 : searchAreaHigh;
    let newHighlighted = [];
    for (let x = searchAreaLow; x < searchAreaHigh; x++) {
      if (this.state.distanceMatrix[pos][x] <= radius) {
        newHighlighted.push(x);
      }
    }
    this.setState({highlighted: newHighlighted, highlightedType: type});
  }

  selectMenu = (index) => {
    if (index === this.state.selectedMenu) {
      this.setState({selectedMenu: 0});
    } else {
      this.setState({selectedMenu: index});
    }
    this.resetPieceOpen();
  }

  pieceClick = (pieceId, piecePositionId) => {
    if(this.state.warfareOptionSelect == "piece"){
      //TODO: Eric warfare options that select pieces
    }else{
      if(!this.state.planningMove){
      let thisPiece = this.state.positions[piecePositionId].find(piece => piece.pieceId === pieceId);
      this.resetPieceOpen();
      this.setState({selectedPiece: thisPiece, plannedPos: []});
      if(this.state.gamePhase===2 && this.state.gameSlice===0){
        //Show this pieces current plan (if any)
        let thisPiecesPlan = null;
        for (let x = 0; x < this.state.confirmedPlans.length; x++){
          if (this.state.confirmedPlans[x].pieceId === pieceId){
            thisPiecesPlan = this.state.confirmedPlans[x];
            break;
          }
        }
        if (thisPiecesPlan != null && thisPiecesPlan.movesArray.length > 0){
          let statePlannedPos = [];
          for (let x = 0; x < thisPiecesPlan.movesArray.length; x++){
            statePlannedPos.push(thisPiecesPlan.movesArray[x].newPosition);
          }
          this.setState({plannedPos: statePlannedPos});
        }
        this.userFeedback("Now you can plan a movement for this piece using the Plan Start button to the left.")
      }
      if (thisPiece.pieceUnitId === 0) {
        thisPiece.pieceOpen = true;  //Not possible to click the piece when it was open?
        let array = this.state.positions;
        let pieces = array[piecePositionId];
        let pieceIndex = pieces.findIndex(piece => piece.pieceId === pieceId);
        pieces.splice(pieceIndex, 1, thisPiece);
        array[piecePositionId] = pieces;
        this.setState({positions: array});
      }
    }
    }
    
  }

  resetPieceOpen = () => {
    let allPos = this.state.positions;
    for (let x = 0; x < allPos.length; x++) {
      for (let y = 0; y < allPos[x].length; y++) {
        allPos[x][y].pieceOpen = false;
      }
    }
    this.setState({positions: allPos, selectedPiece: null});
  }

  updateCart = (pieceType) => {
    this.socket.emit('purchaseRequest', pieceType, (serverResponse) => {
      if (serverResponse) {
        this.setState(serverResponse); 
      }
    });
  }

  removeFromCart = (pieceId, pieceUnitId) => {
    this.socket.emit('refundRequest', pieceId, pieceUnitId, (serverResponse) => {
      if (serverResponse) {
        this.setState(serverResponse); 
      }
    });
  }
  // -------------------------

  //Container Functions
  containerSelect = (indexOfPiece) => {
    if (this.state.selectedContainerPiece === indexOfPiece) {
      this.setState({selectedContainerPiece: -1});
      this.userFeedback("Unselected the container...");
    } else {
      this.setState({selectedContainerPiece: indexOfPiece});
      this.userFeedback("Selected the container...");
    }
  }

  actualPieceSelect = (indexOfPiece) => {
    if (this.state.selectedContainerPiece !== -1) {
      let containerArray = this.state.containerPieces;
      let actualArray = this.state.actualPieces;

      let containerPiece = containerArray[this.state.selectedContainerPiece];
      let actualPiece = actualArray[indexOfPiece];

      containerPiece.contents.push(actualPiece);
      containerArray[this.state.selectedContainerPiece] = containerPiece;

      actualArray.splice(indexOfPiece, 1);

      this.setState({containerPieces: containerArray, actualPieces: actualArray});
      this.userFeedback("Selected the piece to enter container...");
    } else {
      this.userFeedback("Must select a container first...");
    }
  }

  containedPieceRemove = (containerPieceIndex, containedPieceIndex) => {
    let fullArray = this.state.containerPieces;
    let containerPiece = fullArray[containerPieceIndex];
    let containedPiece = containerPiece.contents[containedPieceIndex];
    containerPiece.contents.splice(containedPieceIndex, 1);
    fullArray[containerPieceIndex] = containerPiece;
    let actualPieces = this.state.actualPieces;
    actualPieces.push(containedPiece);
    this.setState({containerPieces: fullArray, actualPieces: actualPieces})
    this.userFeedback("Removed from container...");
  }

  containerConfirm = () => {
    // empty function for now
  }
  // -------------------------

  //Refuel Functions
  tankerSelect = (indexOfPiece) => {
    if (this.state.selectedTankerPiece === indexOfPiece) {
      this.setState({selectedTankerPiece: -1});
      this.userFeedback("Unselected the tanker...");
    } else {
      this.setState({selectedTankerPiece: indexOfPiece});
      this.userFeedback("Selected the tanker...");
    }
  }

  refuelSelect = (indexOfPiece) => {
    if (this.state.selectedTankerPiece !== -1) {
      //tanker need enough fuel (can't be left with less than 1 fuel left?)
      let tankerArray = this.state.tankerPieces;
      let refuelArray = this.state.refuelPieces;
      let tanker = tankerArray[this.state.selectedTankerPiece]
      let refuelPiece = refuelArray[indexOfPiece];
      const fuelToGive = refuelPiece.pieceFuelAllowed - refuelPiece.pieceFuel;
      if ((tanker.pieceFuel - tanker.pieceRemovedFuel) - fuelToGive >= 1) {
        tanker.pieceRemovedFuel = tanker.pieceRemovedFuel + fuelToGive;
        tanker.contents.push(refuelPiece);
        tankerArray[this.state.selectedTankerPiece] = tanker;
        refuelArray.splice(indexOfPiece, 1);
        this.setState({tankerPieces: tankerArray, refuelPieces: refuelArray});
        this.userFeedback("Added fuel to thing...");
      } else {
        this.userFeedback("Tanker would be left with 0 fuel left...");
      }
    } else {
      this.userFeedback("Must select a tanker first...");
    }
  }

  refuelRemove = (tankerPieceIndex, refuelPieceIndex) => {
    let tankerArray = this.state.tankerPieces;
    let tanker = tankerArray[tankerPieceIndex];
    let refuelPiece = tanker.contents[refuelPieceIndex];
    tanker.contents.splice(refuelPieceIndex, 1);
    tanker.pieceRemovedFuel = tanker.pieceRemovedFuel - (refuelPiece.pieceFuelAllowed - refuelPiece.pieceFuel);
    tankerArray[tankerPieceIndex] = tanker;
    let refuelPiecesArray = this.state.refuelPieces;
    refuelPiecesArray.push(refuelPiece);
    this.setState({tankerPieces: tankerArray, refuelPieces: refuelPiecesArray});
    this.userFeedback("Removed from tanker refueling...");
  }

  refuelConfirm = () => {
    //empty function for now
  }
  // -------------------------

  // Battle functions

  //Make this piece the selected Battle piece (highlighted)
  leftBattlePieceClick = (indexOfPiece) => {
    if (this.state.selectedFriendlyBattlePiece === indexOfPiece) {
      this.setState({selectedFriendlyBattlePiece: -1});
      this.userFeedback("Unselected the attacker...");
    } else {
      this.setState({selectedFriendlyBattlePiece: indexOfPiece});
      this.userFeedback("Selected the attacker...");
    }
  }

  //Clear the piece from the state object
  rightBattlePieceClick = (indexOfPiece) => {
    let fullArray = this.state.battleZone0;
    let battlePieceObject = fullArray[indexOfPiece];
    battlePieceObject.battlePieceTarget = null;
    battlePieceObject.battlePieceTargetIndex = -1;
    fullArray[indexOfPiece] = battlePieceObject;
    this.setState({battleZone0: fullArray});
    this.userFeedback("Unselected the target...");
  }

  battleConfirm = () => {
    //empty function
  }

  // -------------------------


  controlButtonClick = () => {
    this.socket.emit('controlButtonClick', (serverResponse) => {
      //make sure the serverResponse is valid
      if (serverResponse) {
        // alert(serverResponse);
        this.setState(serverResponse); 
      }
    });
  }

  userFeedback = (textString) => {
    this.setState({userFeedback: textString})
  }

  planningButtonClickStart = () => {
    if(this.state.gamePhase === 2 && this.state.gameSlice === 0){
      this.userFeedback("Click adjacent positions to create a path for ths unit to move.");
      this.setState({planningMove: true, plannedPos: [this.state.selectedPos]});
      this.showAdjacent(this.state.selectedPos, 1, "all");
    }
  }
  
  planningButtonClickDone = () => {
    //Submit current move to DB
    this.socket.emit('planRequest', this.state.plannedMove, (serverResponse) => {
      if (serverResponse) {
        this.setState(serverResponse); 
      }
    });
    // For now, add to state immediately,
    // let stateConfirmedPlans = this.state.confirmedPlans;
    // stateConfirmedPlans.push(this.state.plannedMove);
    // this.setState({confirmedPlans: stateConfirmedPlans});
    //reset all planning things in state.
    this.setState({planningMove: false, highlighted: [], selectedPos: this.state.plannedPos[0], selectedPiece:null, plannedPos: [], plannedMove: {pieceId: -1, movesArray: []}});
    }

  planningButtonClickCancel = () => {
    // Remove current plan, does not change old stored plan
    this.setState({planningMove: false, selectedPos: this.state.plannedPos[0], plannedMove: {pieceId: -1, movesArray: []}, highlighted: [], plannedPos: []});
  }

  planningButtonClickUndo = () => {
    if (this.state.plannedPos.length > 1) {
      let statePlannedMove = this.state.plannedMove;
      statePlannedMove.movesArray.pop();
      this.setState({plannedMove: statePlannedMove});
      let statePlannedPos = this.state.plannedPos;
      statePlannedPos.pop();
      let lastMovedPosition = this.state.selectedPiece.piecePositionId;
      for(let x = 0; x < statePlannedMove.movesArray.length; x++){
        if(statePlannedMove.movesArray[x].specialFlag == 0){
          lastMovedPosition = statePlannedMove.movesArray[x].newPosition;
        }
      }
      console.log(lastMovedPosition);
      this.setState({plannedPos: statePlannedPos, highlighted: [], selectedPos: lastMovedPosition});
      this.showAdjacent(lastMovedPosition, 1, "all");
      this.userFeedback("undid a movement");
    } else {
      this.userFeedback("Can't undo anymore...");
    }
  }

  planningButtonClickContainer = () => {
    // Plan a Container open popup at the next adjacent position clicked (rest of code is in selectPos)
    if(!this.state.planningContainer){ //TODO: make sure the selected piece is a container?
      this.setState({planningContainer: true});
      this.userFeedback("Now click an ajacent position where you would like to open the container.");
    }else{
      this.setState({planningContainer: false});
      this.userFeedback("Click adjacent positions to create a path for ths unit to move.");
    }

    // let statePlannedMove = this.state.plannedMove;
    // statePlannedMove.movesArray.push({
    //   newPosition: this.state.selectedPiece.piecePositionId,
    //   specialFlag: 2
    // });
    // this.setState({plannedMove: statePlannedMove});
  }

  enemyLeft = (pieceIndex) => {
    if (this.state.selectedFriendlyBattlePiece !== -1) {
      let friendlyArray = this.state.battleZone0;
      let pieceObject = friendlyArray[this.state.selectedFriendlyBattlePiece];
      let enemyObject = this.state.battleZone1[pieceIndex].battlePieceAttacking;
      pieceObject.battlePieceTarget = enemyObject;
      pieceObject.battlePieceTargetIndex = pieceIndex;
      friendlyArray[this.state.selectedFriendlyBattlePiece] = pieceObject;
      this.setState({battleZone0: friendlyArray});
      this.userFeedback("Selected the target...");
    } else {
      this.userFeedback("Must select a left side piece first...");
    }
  }

  enemyRight = (pieceIndex) => {
    //should be nothing, but must have a function for it (probably)
  }

  appStyle = {
    position: "relative",
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  }

  render() {
    return (
      <div className="App" style={this.appStyle}>
        <Bottombar status={this.state.status} gamePhase={this.state.gamePhase} gameSlice={this.state.gameSlice} planningMove={this.state.planningMove} selectedPiece={this.state.selectedPiece} userFeedback={this.state.userFeedback} controlButtonClick={this.controlButtonClick} planStart={this.planningButtonClickStart} planDone={this.planningButtonClickDone} planCancel={this.planningButtonClickCancel} planUndo={this.planningButtonClickUndo} planContainer={this.planningButtonClickContainer}/>
        <Gameboard plannedPos={this.state.plannedPos} positions={this.state.positions} selectPos={this.selectPos} positionTypes={this.positionTypes} highlighted={this.state.highlighted} highlightedType={this.state.highlightedType} selectedPos={this.state.selectedPos} />
        <Sidebar points={this.state.points} gamePhase={this.state.gamePhase} removeFromCart={this.removeFromCart} emptyCart={this.emptyCart} updateCart={this.updateCart} inv={this.state.inv} cart={this.state.cart} selectedMenu={this.state.selectedMenu} selectMenu={this.selectMenu} />
        <Zoombox selectedPiece={this.state.selectedPiece} pieceClick={this.pieceClick} selectedPos={this.state.selectedPos} positions={this.state.positions} positionTypes={this.positionTypes}/>
        <NewsAlertPopup gamePhase={this.state.gamePhase} currentNewsAlert={this.state.currentNewsAlert} />
        <BattlePopup enemyLeft={this.enemyLeft} enemyRight={this.enemyRight} battleConfirm={this.battleConfirm} rightBattlePieceClick={this.rightBattlePieceClick} leftBattlePieceClick={this.leftBattlePieceClick} selectedFriendlyBattlePiece={this.state.selectedFriendlyBattlePiece} friendlyBattle={this.state.battleZone0} enemyBattle={this.state.battleZone1} gameSlice={this.state.gameSlice} />
        <ContainerPopup containedPieceRemove={this.containedPieceRemove} actualPieceSelect={this.actualPieceSelect} containerSelect={this.containerSelect} selectedContainerPiece={this.state.selectedContainerPiece} containerPieces={this.state.containerPieces} actualPieces={this.state.actualPieces} gameSlice={this.state.gameSlice} />
        <RefuelPopup selectedTankerPiece={this.state.selectedTankerPiece} tankerPieces={this.state.tankerPieces} refuelPieces={this.state.refuelPieces} refuelRemove={this.refuelRemove} tankerSelect={this.tankerSelect} refuelSelect={this.refuelSelect} gameSlice={this.state.gameSlice} refuelConfirm={this.refuelConfirm} />
      </div>
    );
  }
}

export default App;
