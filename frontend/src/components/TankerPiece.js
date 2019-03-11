import React, { Component } from 'react';

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

const overallContainerSection = {
    backgroundColor: "white",
    height: "30%",
    width: "96%",
    margin: "1%",
    padding: "1%"
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
        <div key={index} onClick={this.props.refuelRemove.bind(this, this.props.pieceIndex, index)} title={`Fuel: ${piece.pieceFuelAllowed}`} style={{...containedPieceStyle, ...unitImages[piece.pieceUnitId]}} ></div>
    ));

    return (
      <div style={overallContainerSection}>
        <div title={this.props.title} onClick={this.props.tankerSelect.bind(this, this.props.pieceIndex)} style={{...containerPieceStyle, ...unitImages[this.props.pieceInfo.pieceUnitId], ...selected[this.props.selectedTankerPiece == this.props.pieceIndex ? 0 : 1]}}>
            Fuel: {this.props.pieceInfo.pieceFuel - this.props.pieceInfo.pieceRemovedFuel}
        </div>
        <div style={containerStyle}>
            {containedPieces}
        </div>
      </div>
    )
  }
}
