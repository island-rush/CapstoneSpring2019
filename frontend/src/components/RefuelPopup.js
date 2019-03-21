import React, { Component } from 'react';
import TankerPiece from './TankerPiece';
import { unitImages } from "./ZoomboxParts/Piece";

const refuelPopupStyle = {
  position: "absolute",
  bottom: "20%",
  left: "30%",
  height: "67%",
  width: "60%",
  backgroundColor: "white",
  zIndex: 4,
  display: "block",
  border: "2px solid black"
}

const refuelPopupHidden = {
  display: 'none'
}

const refuelTitle = {
  display: "block",
  textAlign: "center",
  width: "98%",
  height: "3%",
  margin: "1% auto",
  fontSize: "130%"
}
const refuelDescription = {
  display: "block",
  textAlign: "center",
  width: "98%",
  height: "3%",
  margin: "1% auto",
  fontSize: "80%"
}

const leftContainerStyle = {
  position: "relative",
  float: "left",
  backgroundColor: "grey",
  height: "96%",
  width: "48%",
  margin: "1%"
}

const rightContainerStyle = {
  position: "relative",
  backgroundColor: "grey",
  height: "96%",
  width: "48%",
  float: "right",
  margin: "1%"
}

const boxStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "90% 90%",
  backgroundPosition: "center",
  border: '2px solid black',
  height: "20%",
  width: "23%",
  float: "left",
  margin: ".5%",
  position: "relative"
}  

const refuelConfirmStyle ={
  position: "absolute",
  right: "2%",
  bottom: "2%"
}

export default class RefuelPopup extends Component {
  render() {

    const tankerPieces = this.props.tankerPieces.map((piece, index) => (
        <TankerPiece title={`Fuel: ${piece.pieceFuel - piece.pieceRemovedFuel}`} selectedTankerPiece={this.props.selectedTankerPiece} refuelRemove={this.props.refuelRemove} tankerSelect={this.props.tankerSelect} key={index} pieceIndex={index} pieceInfo={piece} />
    ))

    const refuelPieces = this.props.refuelPieces.map((piece, index) => (
        <div key={index} onClick={this.props.refuelSelect.bind(this, index)} style={{...boxStyle, ...unitImages[piece.pieceUnitId]}} >{piece.pieceFuel} / {piece.pieceFuelAllowed}</div>
    ))

    return (
      <div style={this.props.gameSlice === 222 ? refuelPopupStyle : refuelPopupHidden}>
        <div style={refuelTitle}>REFUEL POPUP</div>
        <div style={refuelDescription}>Select a Tanker on the left (it will outline red) then select the planes you want refueled from the right.</div>
        <div style={leftContainerStyle}>
            {tankerPieces}
        </div>
        <div style={rightContainerStyle}>
            {refuelPieces}
        </div>
        <button onClick={this.props.refuelConfirm} style={refuelConfirmStyle}>DONE</button>
      </div>
    )
  }
}
