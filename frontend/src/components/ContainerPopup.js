import React, { Component } from 'react';
import ContainerPiece from './ContainerPiece';

const containerPopupStyle = {
    position: "absolute",
    bottom: "27%",
    left: "30%",
    height: "60%",
    width: "60%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block"
}

const containerPopupHidden = {
    display: 'none'
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

const unitImages = [
    {backgroundImage: "url(\"../images/unitImages/aircraftCarrier.png\")"},
    {backgroundImage: "url(\"../images/unitImages/artillery.png\")"},
    {backgroundImage: "url(\"../images/unitImages/attackHeli.png\")"},
    {backgroundImage: "url(\"../images/unitImages/bomber.png\")"},
    {backgroundImage: "url(\"../images/unitImages/destroyer.png\")"},
    {backgroundImage: "url(\"../images/unitImages/fighter.png\")"},
    {backgroundImage: "url(\"../images/unitImages/lav.png\")"},
    {backgroundImage: "url(\"../images/unitImages/marine.png\")"},
    {backgroundImage: "url(\"../images/unitImages/missile.png\")"},
    {backgroundImage: "url(\"../images/unitImages/sam.png\")"},
    {backgroundImage: "url(\"../images/unitImages/soldier.png\")"},
    {backgroundImage: "url(\"../images/unitImages/stealthBomber.png\")"},
    {backgroundImage: "url(\"../images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"../images/unitImages/tank.png\")"},
    {backgroundImage: "url(\"../images/unitImages/tanker.png\")"},
    {backgroundImage: "url(\"../images/unitImages/transport.png\")"}
];

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

export default class ContainerPopup extends Component {
  render() {

    const containerPieces = this.props.containerPieces.map((piece, index) => (
        <ContainerPiece selectedContainerPiece={this.props.selectedContainerPiece} containedPieceRemove={this.props.containedPieceRemove} containerSelect={this.props.containerSelect} key={index} pieceIndex={index} pieceInfo={piece} />
    ))

    const actualPieces = this.props.actualPieces.map((piece, index) => (
        <div key={index} onClick={this.props.actualPieceSelect.bind(this, index)} style={{...boxStyle, ...unitImages[piece.pieceUnitId]}} ></div>
    ))

    return (
      <div style={this.props.gameSlice === 3 ? containerPopupStyle : containerPopupHidden}>
        <div style={leftContainerStyle}>
            {containerPieces}
        </div>
        <div style={rightContainerStyle}>
            {actualPieces}
        </div>
      </div>
    )
  }
}
