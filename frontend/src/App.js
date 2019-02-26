/** APP
 * Overall App that runs in the browser. 
 * In it are 4 components that make up the board (Gameboard, Zoombox, Sidebar, Bottombar)
 * 
 * 
 *  
 */
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
  state = {
    selectedPos: 0,
    highlighted: [],
    highlightedType: "all",
    selectedMenu: 0,
    planningMove: false,
    gamePhase: 3,
    gameRound: 0,
    gameSlice: 0,
    
    myTeam: "Red",  //could use different values, this is what is inside the session for now
    points: 0,
    status: 0,  //for waiting or not
    
    refuelTankerPositions: [],
    refuelPlanePositions: [],

    battleRedPositions: [],
    battleBluePositions: [],
    
    positions: [],
    
    distanceMatrix: []
  }

  //could throw this into the gameboard once done working with it
  positionTypes = ["land","land","land","land","land","land","land","land","water","water","water","water","water","water","land","flag","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","land","land","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","land","airfield","land","land","land","water","water","water","missile","land","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","airfield","flag","water","water","water","water","water","water","water","land","missile","land","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","land","land","water","water","land","water","water","water","water","land","land","flag","land","water","water","water","water","land","land","land","water","land","land","water","water","water","water","land","land","airfield","water","water","water","land","flag","land","water","water","land","land","land","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","flag","land","land","water","water","water","water","water","water","water","water","water","airfield","land","water","land","land","missile","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","land","land","water","water","water","water","water","water","water","water","water","water","missile","land","land","water","water","land","land","land","missile","land","land","land","water","water","water","water","water","land","land","land","land","water","land","land","land","land","land","land","land","water","water","water","water","water","land","flag","land","water","water","land","land","flag","airfield","land","land","land","land","water","water","water","land","land","land","land","water","water","water","land","land","water","water","water","land","land","water","water","land","land","land","land","land","water","water","water","water","land","land","water","water","land","land","water","water","water","missile","land","land","land","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","flag","land","water","water","water","water","land","missile","water","water","water","water","water","land","airfield","land","water","land","land","water","water","water","land","land","land","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","land","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","land","land","water","water","water","water","water","land","flag","land","water","water","water","water","water","water","water","land","airfield","land","water","water","water","water","land","land","land","water","water","water","missile","land","land","land","land","land","land","water","land","land","water","water","water","land","water","water","water","water","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","water","water","land","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","land","land","land","land","land","land","land","land","flag","land","land","land","water","water","water","water","water","airfield","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","flag","land"];

  socket = socketIOClient('http://localhost:4000');

  componentDidMount() {
    this.socket.emit('getInitialGameState', (gameState) => {
      this.setState(gameState);
    });
    this.socket.on('serverSetState', (gameState) => {
      this.setState(gameState);
    });
    this.socket.on('serverFunctionRequest', (parameters) => {
      this.serverFunction(parameters);
    });
  }

  serverFunction(parameters) {
    //Server called this function
  }

  selectPos = (id) => {
    this.setState({selectedPos: id, selectedMenu: 0});
    this.resetPieceOpen();


    this.showAdjacent(id, 3, "land");
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
      this.setState({selectedMenu: 0})
    } else {
      this.setState({selectedMenu: index})
    }
    this.resetPieceOpen();
  }

  pieceClick = (pieceId, piecePositionId) => {
    let thisPiece = this.state.positions[piecePositionId].find(piece => piece.pieceId === pieceId);
    //based on the phase of the game? (default to trying to open if a container)
    this.resetPieceOpen();
    //if it is a container (could change to use the containerId negatives to see pieceTypes (-2, -3, -4...))
    if (thisPiece.pieceUnitId === 0) {
      thisPiece.pieceOpen = true;  //Not possible to click the piece when it was open?
      let array = this.state.positions;
      let pieces = array[piecePositionId];
      let pieceIndex = pieces.findIndex(piece => piece.pieceId === pieceId);
      pieces.splice(pieceIndex, 1, thisPiece);
      array[piecePositionId] = pieces;
      this.setState({positions: array});
    }

    // PLANNING MOVES
    if(this.state.planningMove){ // if they want to start planning a move (determined by a Planning Start button)
      let plan = {
        pieceId: thisPiece.pieceId,
        // movementTurn = 0,
        positionId: -1, //for now, this will update when we click a spot.
      }

      const spencersArrayOfPlansForASinglePiece = [
        {
          pieceId: 1,
          newPosition: 3,
          specialFlag: 0
        },
        {
          pieceId: 1,
          newPosition: 4,
          specialFlag: 0
        },
        {
          pieceId: 1,
          newPosition: 5,
          specialFlag: 0
        },
        {
          pieceId: 1,
          newPosition: 5,
          specialFlag: 1  // bombard or something
        }
      ];
    }
  }

  resetPieceOpen = () => {
    // need to close all other peices before opening one or doing other actions
    let allPos = this.state.positions;
    for (let x = 0; x < allPos.length; x++) {
      for (let y = 0; y < allPos[x].length; y++) {
        allPos[x][y].pieceOpen = false;
      }
    }
    this.setState({positions: allPos});
  }

  updatePositionType = (positionIndex, newType) => {
    let array = this.state.positionTypes;
    array.splice(positionIndex, 1, newType);
    this.setState({positionTypes: array});
  }

  controlButtonClick = () => {
    this.socket.emit('controlButtonClick', (serverResponse) => {
      //make sure the serverResponse is valid
      if (serverResponse) {
        // alert(serverResponse);
        this.setState(serverResponse); 
      }
    });
  }

  planningButtonClickStart = () => {
    if(this.state.gamePhase == 3 && this.gameSection == 0){
      this.setState({planningMove: true})
    }
  }
  planningButtonClickDone = () => {
    // Submit current move to DB
    this.setState({planningMove: false})
  }
  planningButtonClickCancel = () => {
    // Remove all moves from queue with this pieceID
    this.setState({planningMove: false})
  }
  planningButtonClickUndo = () => {
    // Remove from queue the highest # move for this Piece ID
  }
  planningButtonClickContainer = () => {
    // Plan a Container open popup at this position
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
        <Bottombar controlButtonClick={this.controlButtonClick} planStart={this.planningButtonClickStart} planDone={this.planningButtonClickDone} planCancel={this.planningButtonClickCancel} planUndo={this.planningButtonClickUndo} planContainer={this.planningButtonClickContainer}/>
        <Gameboard positions={this.state.positions} selectPos={this.selectPos} positionTypes={this.positionTypes} highlighted={this.state.highlighted} highlightedType={this.state.highlightedType} selectedPos={this.state.selectedPos} />
        <Sidebar selectedMenu={this.state.selectedMenu} selectMenu={this.selectMenu} />
        <Zoombox pieceClick={this.pieceClick} selectedPos={this.state.selectedPos} positions={this.state.positions} positionTypes={this.positionTypes}/>
        <NewsAlertPopup gamePhase={this.state.gamePhase} />
        <BattlePopup gameSlice={this.state.gameSlice} />
        <RefuelPopup gameSlice={this.state.gameSlice} />
      </div>
    );
  }
}

export default App;
