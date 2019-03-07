import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Bottombar from './components/Bottombar';
import Gameboard from './components/Gameboard';
import Sidebar from './components/Sidebar';
import Zoombox from './components/Zoombox';
import NewsAlertPopup from './components/NewsAlertPopup';
import BattlePopup from './components/BattlePopup';
import RefuelPopup from './components/RefuelPopup';
import './App.css';

class App extends Component {
  //Each Position has a hard-coded type (land, water, flag...)
  positionTypes = ["land","land","land","land","land","land","land","land","water","water","water","water","water","water","land","flag","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","land","land","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","land","airfield","land","land","land","water","water","water","missile","land","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","airfield","flag","water","water","water","water","water","water","water","land","missile","land","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","land","land","water","water","land","water","water","water","water","land","land","flag","land","water","water","water","water","land","land","land","water","land","land","water","water","water","water","land","land","airfield","water","water","water","land","flag","land","water","water","land","land","land","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","flag","land","land","water","water","water","water","water","water","water","water","water","airfield","land","water","land","land","missile","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","land","land","water","water","water","water","water","water","water","water","water","water","missile","land","land","water","water","land","land","land","missile","land","land","land","water","water","water","water","water","land","land","land","land","water","land","land","land","land","land","land","land","water","water","water","water","water","land","flag","land","water","water","land","land","flag","airfield","land","land","land","land","water","water","water","land","land","land","land","water","water","water","land","land","water","water","water","land","land","water","water","land","land","land","land","land","water","water","water","water","land","land","water","water","land","land","water","water","water","missile","land","land","land","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","flag","land","water","water","water","water","land","missile","water","water","water","water","water","land","airfield","land","water","land","land","water","water","water","land","land","land","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","land","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","land","land","water","water","water","water","water","land","flag","land","water","water","water","water","water","water","water","land","airfield","land","water","water","water","water","land","land","land","water","water","water","missile","land","land","land","land","land","land","water","land","land","water","water","water","land","water","water","water","water","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","water","water","land","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","land","land","land","land","land","land","land","land","flag","land","land","land","water","water","water","water","water","airfield","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","flag","land"];

  //App level state used to control the game
  state = {
    distanceMatrix: [],  //hardcoded, comes from server

    gameId: -1,
    teamId: -1,  //0 = red, 1 = blue
    controllerId: -1,
    points: -1,
    gamePhase: 0,  //news, buy, gameplay, place
    gameRound: 0,  //0, 1, 2
    gameSlice: 0,  //plan, battle/move, container, refuel
    status: 0,  //0 = active, 1 = waiting

    positions: [],  //main board positions

    cart: [],  //currently buying, menu1
    inv: [],  //inventory, menu2

    battleZone0: [],  //Red team battle
    battleZone1: [],  //Blue team battle

    tankerZone: [],  //Tankers giving fuel side
    refuelZone: [],  //Pieces getting fuel side

    highlighted: [],  //Used for highlighting pos, adjacent positions all go into this array
    highlightedType: "all",  //Used to only highlight "land" or "water" for specific pieces (in planning)

    planningMove: false,  //is the client currently making a plan
    plannedPos: [],  //positions to be highlighted because they are part of a selected plan
    confirmedPlans: [],  //plan objects that are known to the client
    plannedMove: {  //current plan object being made
      pieceId: -1,
      movesArray: []  //array of moves (not including starting array) as well as special flags*
    },

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
  }

  //App Level Functions
  selectPos = (id) => {
    this.setState({selectedPos: id, selectedMenu: 0});
    if (this.state.planningMove === true) {
      let nextPos = id;
      let statePlannedMove = this.state.plannedMove;
      let prevPos = this.state.selectedPiece.piecePositionId;
      if (statePlannedMove.movesArray.length != 0) {
        prevPos = statePlannedMove.movesArray[statePlannedMove.movesArray.length-1].newPosition;
      }
      if( this.state.distanceMatrix[prevPos][nextPos] == 1){
        statePlannedMove.pieceId = this.state.selectedPiece.pieceId;
        statePlannedMove.movesArray.push({
          newPosition: nextPos,
          specialFlag: 0
        });
        this.setState({plannedMove: statePlannedMove});
        let statePlannedPos = this.state.plannedPos;
        statePlannedPos.push(nextPos);
        this.setState({plannedPos: statePlannedPos});
        this.showAdjacent(statePlannedPos[statePlannedPos.length-1], 1, "all"); 
        this.userFeedback("added a movement!");
      }
    } else {
      this.resetPieceOpen();
      this.userFeedback("you selected a position!");
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
    if(!this.state.planningMove){
      let thisPiece = this.state.positions[piecePositionId].find(piece => piece.pieceId === pieceId);
      this.resetPieceOpen();
      this.setState({selectedPiece: thisPiece})
      if(this.state.gamePhase===3 && this.state.gameSlice===0){
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

      //if this pieces has any plans, show it? (pressing to start plan should cancel this plan)
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

  removeFromCart = (pieceId) => {
    this.socket.emit('refundRequest', pieceId, (serverResponse) => {
      if (serverResponse) {
        this.setState(serverResponse); 
      }
    });
  }

  controlButtonClick = () => {
    // this.socket.emit('controlButtonClick', (serverResponse) => {
    //   //make sure the serverResponse is valid
    //   if (serverResponse) {
    //     // alert(serverResponse);
    //     this.setState(serverResponse); 
    //   }
    // });
  }

  userFeedback = (textString) => {
    this.setState({userFeedback: textString})
  }

  planningButtonClickStart = () => {
    if(this.state.gamePhase === 3 && this.state.gameSlice === 0){
      this.setState({planningMove: true, plannedPos: [this.state.selectedPos]});
      this.showAdjacent(this.state.selectedPos, 1, "all");
    }
  }
  
  planningButtonClickDone = () => {
    // Submit current move to DB
    this.setState({plannedMove: {pieceId: -1, movesArray: []}});
    this.setState({planningMove: false, highlighted: [], selectedPos: this.state.plannedPos[0], plannedPos: []});
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
      this.setState({plannedPos: statePlannedPos, highlighted: [], selectedPos: statePlannedPos[statePlannedPos.length-1]});
      this.showAdjacent(statePlannedPos[statePlannedPos.length-1], 1, "all");
      this.userFeedback("undid a movement");
    } else {
      this.userFeedback("Can't undo anymore...");
    }
  }

  planningButtonClickContainer = () => {
    // Plan a Container open popup at this position, need another array to show different highlight?
    let statePlannedMove = this.state.plannedMove;
    statePlannedMove.movesArray.push({
      newPosition: this.state.selectedPiece.piecePositionId,
      specialFlag: 2
    });
    this.setState({plannedMove: statePlannedMove});
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
        <Sidebar removeFromCart={this.removeFromCart} emptyCart={this.emptyCart} updateCart={this.updateCart} inv={this.state.inv} cart={this.state.cart} selectedMenu={this.state.selectedMenu} selectMenu={this.selectMenu} />
        <Zoombox selectedPiece={this.state.selectedPiece} pieceClick={this.pieceClick} selectedPos={this.state.selectedPos} positions={this.state.positions} positionTypes={this.positionTypes}/>
        <NewsAlertPopup gamePhase={this.state.gamePhase} />
        <BattlePopup gameSlice={this.state.gameSlice} />
        <RefuelPopup gameSlice={this.state.gameSlice} />
      </div>
    );
  }
}

export default App;
