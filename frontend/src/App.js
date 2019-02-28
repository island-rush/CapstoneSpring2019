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
    selectedPiece: -1,
    gamePhase: 3,
    gameRound: 0,
    gameSlice: 0,
    
    myTeam: "Red",  //could use different values, this is what is inside the session for now
    points: 0,
    positions: [],
    cart: [
      {
        id: 1,
        type: 2
      },
      {
        id: 2,
        type: 3
      }, 
      {
        id: 4,
        type: 4
      }, 
      {
        id: 5,
        type: 5
      }
    ], 
    // status: 0,  //for waiting or not
    
    refuelTankerPositions: [],
    refuelPlanePositions: [],

    battleRedPositions: [],
    battleBluePositions: [],
    
    positions: [],
    
    distanceMatrix: [],

    plannedMove: {
      pieceId: -1,
      movesArray: []
    },
    
    // spencersArrayOfPlansForASinglePiece = {
    //   pieceId: 1,
    //   movesArray: [
    //     {
    //       newPosition: 3,
    //       specialFlag: 0
    //     },
    //     {
    //       newPosition: 3,
    //       specialFlag: 0
    //     }
    //   ]
    // },

    userFeedback: "User Feedback Placeholder"
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
    if (this.state.planningMove){
      nextPos = id;
      //make sure the next position is adjacent
      if( distanceMatrix[this.state.selectedPiece.piecePositionId,nextPos] === 1)
      this.state.plannedMove.pieceId = selectedPiece.pieceId;
      this.state.plannedMove.movesArray.push({
        newPosition: nextPos,
        specialFlag: 0 
      })
    }
    else{
      this.setState({selectedPos: id, selectedMenu: 0});
      this.resetPieceOpen();
      this.setState({selectedPiece: -1});
      this.userFeedback("you selected a position!");
    }
    

    // this.showAdjacent(id, 3, "land");
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
    // Clicking a piece doesnt do anything if youre planning. Must finish planning before able to click another piece.
    if(!this.state.planningMove){
      let thisPiece = this.state.positions[piecePositionId].find(piece => piece.pieceId === pieceId);
    

      //Save the selected Piece ID for planning moves
      this.setState({selectedPiece: thisPiece})
      if(this.state.gamePhase===3 && this.state.gameSlice===0){
        this.userFeedback("Now you can plan a movement for this piece using the Plan Start button to the left.")
      }

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

  updateCart = (pieceType) => {
    // THIS WILL CALL SERVER AND SERVER WILL GIVE THE OBJECT TO APPEND TO CART ARRAY
    // get {id: myID
    //      type: anything from 1-16
    //     }
    this.setState({
      cart: this.state.cart.concat([ {id: 10, type: pieceType} ])
    })
  }

  emptyCart = () => {
    this.setState({
      cart: []
    })
  }
  
  // code to remove a specific piece from the cart
  removeFromCart = (pieceId) => {
      let originalCart =  this.state.cart;
      originalCart.slice(originalCart.findIndex(object => object.id == pieceId), 1);
      let newcart = originalCart.filter(o => o.id != [pieceId]);
      

      this.setState({
        cart: newcart
      });
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

  userFeedback = (textString) => {
    this.setState({userFeedback: textString})
  }

  planningButtonClickStart = () => {
    if(this.state.gamePhase === 3 && this.state.gameSlice === 0){
      this.setState({planningMove: true})
    }
  }
  planningButtonClickDone = () => {
    // Submit current move to DB
    this.setState({
      plannedMove: {
        pieceId: -1,
        movesArray: []
      }
    });
    this.setState({planningMove: false})
  }
  planningButtonClickCancel = () => {
    // Remove all moves from queue with this pieceID
    this.setState({
      plannedMove: {
        pieceId: -1,
        movesArray: []
      }
    });
    this.setState({planningMove: false})
  }
  planningButtonClickUndo = () => {
    // Remove from queue the highest # move for this Piece ID
    this.state.plannedMove.movesArray.pop();
  }
  planningButtonClickContainer = () => {
    // Plan a Container open popup at this position
    this.state.plannedMove.movesArray.push({
      newPosition: this.selectedPiece.piecePositionId,
      specialFlag: 2
    })

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
        <Bottombar gamePhase={this.state.gamePhase} gameSlice={this.state.gameSlice} planningMove={this.state.planningMove} selectedPiece={this.state.selectedPiece} userFeedback={this.state.userFeedback} controlButtonClick={this.controlButtonClick} planStart={this.planningButtonClickStart} planDone={this.planningButtonClickDone} planCancel={this.planningButtonClickCancel} planUndo={this.planningButtonClickUndo} planContainer={this.planningButtonClickContainer}/>
        <Gameboard positions={this.state.positions} selectPos={this.selectPos} positionTypes={this.positionTypes} highlighted={this.state.highlighted} highlightedType={this.state.highlightedType} selectedPos={this.state.selectedPos} />
        <Sidebar removeFromCart={this.removeFromCart} emptyCart={this.emptyCart} updateCart={this.updateCart} cart={this.state.cart} selectedMenu={this.state.selectedMenu} selectMenu={this.selectMenu} />
        <Zoombox pieceClick={this.pieceClick} selectedPos={this.state.selectedPos} positions={this.state.positions} positionTypes={this.state.positionTypes}/>
        <Bottombar controlButtonClick={this.controlButtonClick} planStart={this.planningButtonClickStart} planDone={this.planningButtonClickDone} planCancel={this.planningButtonClickCancel} planUndo={this.planningButtonClickUndo} planContainer={this.planningButtonClickContainer}/>
        <BattlePopup gameSlice={this.state.gameSlice} />
        <RefuelPopup gameSlice={this.state.gameSlice} />
        <NewsAlertPopup gamePhase={this.state.gamePhase} />
      </div>
    );
  }
}

export default App;
