import React, { Component } from 'react';
import { unitImages } from "./ZoomboxParts/Piece";


const overallContainerSection = {
    backgroundColor: "white",
    height: "30%",
    width: "96%",
    margin: "1%",
    padding: "1%",
    borderRadius: "3%"
}

const containerPieceStyle = {
    height: "50%",
    width: "20%",
    position: "relative",
    margin: "1%",
    padding: "1%",
    float: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% 90%",
    backgroundPosition: "center"
}

const containerStyle = {
    backgroundColor: "green",
    height: "85%",
    width: "60%",
    position: "relative",
    margin: "1%",
    padding: "1%",
    float: "right"
}

const containedPieceStyle = {
    backgroundColor: "blue",
    height: "30%",
    width: "15%",
    margin: "1%",
    padding: "1%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% 90%",
    backgroundPosition: "center",
    position: "relative",
    float: "left"
}

const selected = [
    {border: '2px solid red',},  //selected
    {border: '2px solid black',}   //not selected
];

export default class ContainerPiece extends Component {
  render() {

    const containedPieces = this.props.pieceInfo.contents.map((piece, index) => (
        <div key={index} onClick={this.props.containedPieceRemove.bind(this, this.props.pieceIndex, index)} style={{...containedPieceStyle, ...unitImages[piece.pieceUnitId]}} />
    ));

    return (
      <div style={overallContainerSection}>
        <div onClick={this.props.containerSelect.bind(this, this.props.pieceIndex)} style={{...containerPieceStyle, ...unitImages[this.props.pieceInfo.pieceUnitId], ...selected[this.props.selectedContainerPiece == this.props.pieceIndex ? 0 : 1]}}>
            
        </div>
        <div style={containerStyle}>
            {containedPieces}
        </div>
      </div>
    )
  }
}
