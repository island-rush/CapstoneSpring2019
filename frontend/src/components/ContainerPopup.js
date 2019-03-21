import React, { Component } from 'react';
import ContainerPiece from './ContainerPiece';
import { unitImages } from "./ZoomboxParts/Piece";

const containerPopupStyle = {
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

const containerPopupHidden = {
    display: 'none'
}

const leftContainerStyle = {
    position: "relative",
    float: "left",
    backgroundColor: "grey",
    height: "90%",
    width: "48%",
    margin: "1%",
    overflow: "scroll"
}
  
const rightContainerStyle = {
    position: "relative",
    backgroundColor: "grey",
    height: "90%",
    width: "48%",
    float: "right",
    margin: "1%"
}

const boxStyle = {
    // backgroundColor: "purple",
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

const containerConfirmStyle = {
    position: "absolute",
    right: "2%",
    bottom: "2%"
}

export default class ContainerPopup extends Component {
  render() {

    const containerPieces = this.props.containerPieces.map((piece, index) => (
        <ContainerPiece selectedContainerPiece={this.props.selectedContainerPiece} containedPieceRemove={this.props.containedPieceRemove} containerSelect={this.props.containerSelect} key={index} pieceIndex={index} pieceInfo={piece} />
    ))

    const actualPieces = this.props.actualPieces.map((piece, index) => (
        <div key={index} onClick={this.props.actualPieceSelect.bind(this, index)} style={{...boxStyle, ...unitImages[piece.pieceUnitId]}} ></div>
    ))

    return (
      <div style={this.props.gameSlice === 333 ? containerPopupStyle : containerPopupHidden}>
        <div style={leftContainerStyle}>
            {containerPieces}
        </div>
        <div style={rightContainerStyle}>
            {actualPieces}
        </div>
        <button onClick={this.props.containerConfirm} style={containerConfirmStyle}>DONE</button>
      </div>
    )
  }
}
