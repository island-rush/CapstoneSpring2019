import React, { Component } from 'react';
// import { unitImages } from "../ZoomboxParts/Piece";

//TODO: make the image display in html below better so we can use the import above
  const unitImages = [
    {},
    {backgroundImage: "url(\"./images/unitImages/bomber.png\")"},
    {backgroundImage: "url(\"./images/unitImages/stealthBomber.png\")"},
    {backgroundImage: "url(\"./images/unitImages/fighter.png\")"},
    {backgroundImage: "url(\"./images/unitImages/tanker.png\")"},
    {backgroundImage: "url(\"./images/unitImages/c17.png\")"}, // air transport
    {backgroundImage: "url(\"./images/unitImages/e3.png\")"}, // air ISR
    {backgroundImage: "url(\"./images/unitImages/infantry.png\")"},
    {backgroundImage: "url(\"./images/unitImages/artillery.png\")"},
    {backgroundImage: "url(\"./images/unitImages/tank.png\")"},
    {backgroundImage: "url(\"./images/unitImages/marine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/attackHeli.png\")"},
    {backgroundImage: "url(\"./images/unitImages/convoy.png\")"}, //convoy
    {backgroundImage: "url(\"./images/unitImages/sam.png\")"},
    {backgroundImage: "url(\"./images/unitImages/destroyer.png\")"},
    {backgroundImage: "url(\"./images/unitImages/aircraftCarrier.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/transport.png\")"},
    {backgroundImage: "url(\"./images/unitImages/mc12.png\")"}, // MC-12
    {backgroundImage: "url(\"./images/unitImages/c130.png\")"}, // C-130
    {backgroundImage: "url(\"./images/unitImages/sofTeam.png\")"}, // SOF team
    {backgroundImage: "url(\"./images/unitImages/radar.png\")"}, // RADAR
    {backgroundImage: "url(\"./images/unitImages/seaMine.png\")"}, // Sea mines
    {backgroundImage: "url(\"./images/unitImages/droneSwarm.png\")"}  // Drone swarm
];

const battlePartStyle = {
    backgroundColor: "white",
    height: "15%",
    width: "96%",
    margin: "1%",
    padding: "1%",
    borderRadius: "2%"
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "90% 90%",
    // backgroundPosition: "center",
    // margin: "1%"
    // padding: "1%"
}

const boxStyle = {
    // backgroundColor: "purple",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% 90%",
    backgroundPosition: "center",
    border: "2px solid black",
    height: "92%",
    width: "23%",
    float: "left",
    margin: ".5%",
    position: "relative"
}

const arrowStyles = [
    {},  // no arrow for no target
    {
        backgroundColor: "black"
    }
];

const diceStyles = [
    {},  //0 impossible
    {},  //1 impossible
    {backgroundImage: "url(\"../images/unitImages/marine.png\")"},   //dice 2 (image)
    {},  //3
    {},  //4
    {},  //5
    {},  //6
    {},  //7
    {},  //8
    {},  //9
    {},  //10
    {},  //11
    {}  //12
  ]

const selected = [
    {border: '2px solid red',},  //selected
    {border: '2px solid black',}   //not selected
]

export default class BattlePiecePart extends Component {
  render() {
    return (
      <div style={battlePartStyle}>
        <div style={{...boxStyle, ...diceStyles[this.props.pieceInfo.battleDiceRolled]}} />
        <div onClick={this.props.leftBattlePieceClick.bind(this, this.props.pieceIndex)} style={{...boxStyle, ...unitImages[this.props.pieceInfo.battlePieceAttacking.pieceUnitId + 1], ...selected[this.props.selectedFriendlyBattlePiece == this.props.pieceIndex && this.props.side == 0 ? 0 : 1]}} >{this.props.pieceIndex}</div>
        <div style={{...boxStyle, ...arrowStyles[this.props.pieceInfo.battlePieceTarget === null ? 0 : 1]}} />
        <div onClick={this.props.rightBattlePieceClick.bind(this, this.props.pieceIndex)} style={{...boxStyle, ...unitImages[this.props.pieceInfo.battlePieceTarget === null ? 0 : this.props.pieceInfo.battlePieceTarget.pieceUnitId+1]}}>{this.props.pieceInfo.battlePieceTarget != null ? this.props.pieceInfo.battlePieceTargetIndex : ""}</div>
      </div>
    )
  }
}
