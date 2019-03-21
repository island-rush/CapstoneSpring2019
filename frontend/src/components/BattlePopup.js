import React, { Component } from 'react';
import BattlePiecePart from './BattlePiecePart';

const battleStyle = {
    position: "absolute",
    bottom: "27%",
    left: "30%",
    height: "65%",
    width: "60%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block",
    border: "2px solid black"
}

const battleHidden = {
    display: 'none'
}

const leftBattleStyle = {
  position: "relative",
  overflow: "scroll",
  float: "left",
  backgroundColor: "grey",
  height: "96%",
  width: "48%",
  margin: "1%"
}

const rightBattleStyle = {
  position: "relative",
  overflow: "scroll",
  backgroundColor: "grey",
  height: "90%",
  width: "48%",
  float: "right",
  margin: "1%"
}

const battleConfirmStyle = {
  position: "relative",
  bottom: "1%",
  left: "40%"
}

export class BattlePopup extends Component {
  render() {

    const friendlyBattlePieces = this.props.friendlyBattle.map((piece, index) => (
      <BattlePiecePart side={0} leftBattlePieceClick={this.props.leftBattlePieceClick} rightBattlePieceClick={this.props.rightBattlePieceClick} selectedFriendlyBattlePiece={this.props.selectedFriendlyBattlePiece} key={index} pieceIndex={index} pieceInfo={piece} />
    ));

    const enemyBattlePieces = this.props.enemyBattle.map((piece, index) => (
      <BattlePiecePart side={1} leftBattlePieceClick={this.props.enemyLeft} rightBattlePieceClick={this.props.enemyRight} selectedFriendlyBattlePiece={this.props.selectedFriendlyBattlePiece} key={index} pieceIndex={index} pieceInfo={piece} />
    ));

    return (
      <div style={this.props.gameSlice === -5 ? battleStyle : battleHidden}>
        <div style={leftBattleStyle}>
          {friendlyBattlePieces}
        </div>
        <div style={rightBattleStyle}>
          {enemyBattlePieces}
        </div>
        <button onClick={this.props.battleConfirm()} style={battleConfirmStyle}>DONE</button>
      </div>
    )
  }
}

export default BattlePopup
