/** APP
 * Overall App that runs in the browser. 
 * In it are 4 components that mkae up the board (Gameboard, Zoombox, Sidebar, Bottombar)
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
    positionTypes: ["land","land","land","land","land","land","land","land","water","water","water","water","water","water","land","flag","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","land","land","land","land","land","land","land","land","land","water","water","water","water","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","land","airfield","land","land","land","water","water","water","missile","land","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","airfield","flag","water","water","water","water","water","water","water","land","missile","land","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","land","land","water","water","land","water","water","water","water","land","land","flag","land","water","water","water","water","land","land","land","water","land","land","water","water","water","water","land","land","airfield","water","water","water","land","flag","land","water","water","land","land","land","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","flag","land","land","water","water","water","water","water","water","water","water","water","airfield","land","water","land","land","missile","water","water","water","water","water","water","water","water","water","water","water","land","land","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","water","land","land","water","water","water","water","water","water","water","water","water","water","missile","land","land","water","water","land","land","land","missile","land","land","land","water","water","water","water","water","land","land","land","land","water","land","land","land","land","land","land","land","water","water","water","water","water","land","flag","land","water","water","land","land","flag","airfield","land","land","land","land","water","water","water","land","land","land","land","water","water","water","land","land","water","water","water","land","land","water","water","land","land","land","land","land","water","water","water","water","land","land","water","water","land","land","water","water","water","missile","land","land","land","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","flag","land","water","water","water","water","land","missile","water","water","water","water","water","land","airfield","land","water","land","land","water","water","water","land","land","land","water","water","water","water","water","land","land","water","water","water","water","water","water","water","water","land","land","water","water","land","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","water","water","water","water","water","water","land","land","land","land","land","land","water","water","water","water","water","water","land","water","water","water","water","land","land","land","land","water","water","water","water","water","water","water","land","land","water","water","water","water","water","land","flag","land","water","water","water","water","water","water","water","land","airfield","land","water","water","water","water","land","land","land","water","water","water","missile","land","land","land","land","land","land","water","land","land","water","water","water","land","water","water","water","water","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","land","land","land","airfield","land","land","water","water","water","water","water","water","land","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","land","land","land","land","land","land","land","land","flag","land","land","land","water","water","water","water","water","airfield","land","land","land","land","land","land","land","land","land","land","water","water","water","water","water","water","water","land","land","land","land","land","flag","land"],
    selectedPos: 0,
    gamePhase: 3,
    selectedMenu: 0,
    myTeam: 0,
    points: 0,
    positions: []
  }

  socket = socketIOClient('http://localhost:4000');

  componentDidMount() {
    this.socket.emit('getGamePositions', (gameState) => {
      this.setState(gameState);
    });
  }

  selectPos = (id) => {
    this.setState({selectedPos: id, selectedMenu: 0});
    this.resetPieceOpen();

    // this.socket.emit('testmultistuff', "clientsent", (serverResponse) => {
    //   alert(serverResponse);
    // });
    
    // Used to Build the Map with Clicking...
    // this.updatePositionType(id, this.state.positionTypes[id] === "water" ? "land" : "water");
    // this.updatePositionType(id, "airfield");
    // console.log(this.state.positionTypes);
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

  appStyle = {
    position: "relative",
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  }

  render() {
    return (
      <div className="App" style={this.appStyle}>
        <Bottombar />
        <Gameboard positions={this.state.positions} selectPos={this.selectPos} positionTypes={this.state.positionTypes} selectedPos={this.state.selectedPos} />
        <Sidebar selectedMenu={this.state.selectedMenu} selectMenu={this.selectMenu} />
        <Zoombox pieceClick={this.pieceClick} selectedPos={this.state.selectedPos} positions={this.state.positions} positionTypes={this.state.positionTypes}/>
        <NewsAlertPopup gamePhase={this.state.gamePhase} />
        <BattlePopup gamePhase={this.state.gamePhase} />
        <RefuelPopup gamePhase={this.state.gamePhase} />
      </div>
    );
  }
}

export default App;
