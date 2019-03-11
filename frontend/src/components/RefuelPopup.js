import React, { Component } from 'react';
import TankerPiece from './TankerPiece';

const refuelPopupStyle = {
  position: "absolute",
  bottom: "27%",
  left: "30%",
  height: "60%",
  width: "60%",
  backgroundColor: "white",
  zIndex: 4,
  display: "block"
}

const refuelPopupHidden = {
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

export default class RefuelPopup extends Component {
  render() {

    const tankerPieces = this.props.tankerPieces.map((piece, index) => (
        <TankerPiece title={`Fuel: ${piece.pieceFuel - piece.pieceRemovedFuel}`} selectedTankerPiece={this.props.selectedTankerPiece} refuelRemove={this.props.refuelRemove} tankerSelect={this.props.tankerSelect} key={index} pieceIndex={index} pieceInfo={piece} />
    ))

    const refuelPieces = this.props.refuelPieces.map((piece, index) => (
        <div key={index} onClick={this.props.refuelSelect.bind(this, index)} style={{...boxStyle, ...unitImages[piece.pieceUnitId]}} >{piece.pieceFuel} / {piece.pieceFuelAllowed}</div>
    ))

    return (
      <div style={this.props.gameSlice === 2 ? refuelPopupStyle : refuelPopupHidden}>
        <div style={leftContainerStyle}>
            {tankerPieces}
        </div>
        <div style={rightContainerStyle}>
            {refuelPieces}
        </div>
      </div>
    )
  }
}
