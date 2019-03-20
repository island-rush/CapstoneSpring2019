import React, { Component } from 'react';
import PieceSubContainer from './PieceSubContainer';

const pieceStyle = {
    width: "15%",
    height: "18%",
    float: "left",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% 90%",
    boxShadow: "0px 0px 0px 1px white inset",
    boxSizing: "border-box",
    backgroundPosition: "center"
}

const teamStyles = [
    {boxShadow: "0px 0px 0px 2px rgba(255, 0, 0, 0.55) inset"},
    {boxShadow: "0px 0px 0px 2px rgba(0, 111, 255, 0.67) inset"},
    {boxShadow: "0px 0px 0px 2px rgba(255, 255, 50, 0.55) inset"}
]

const unitStyles = [
    {backgroundImage: "url(\"./images/unitImages/bomber.png\")"},
    {backgroundImage: "url(\"./images/unitImages/stealthBomber.png\")"},
    {backgroundImage: "url(\"./images/unitImages/fighter.png\")"},
    {backgroundImage: "url(\"./images/unitImages/tanker.png\")"},
    {backgroundImage: "url(\"./images/unitImages/c17.png\")"}, // air transport
    {backgroundImage: "url(\"./images/unitImages/e3.png\")"}, // air ISR
    {backgroundImage: "url(\"./images/unitImages/soldier.png\")"},
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
]

// Ensures that Top Piece has greater zIndex than neighbor pieces (so child container is on top of them)
const openLevels = [
  {zIndex: 5},
  {zIndex: 10}
]

const containerOpenStyle = {
  display: "block",
  width: "200%",
  height: "200%",
  backgroundColor: "white",
  position: 'relative'
}

const containerClosedStyle = {
  display: "none"
}

export class Piece extends Component {
  render() {
    const {pieceId, pieceTeamId, pieceUnitId, piecePositionId, pieceMoves, pieceFuel, pieceOpen} = this.props.pieceInfo;
    const fuelTitle = pieceFuel === -1 ? "" : "\nFuel: " + pieceFuel;

    return (
      <div onClick={this.props.pieceClick.bind(this, pieceId, piecePositionId)} style={{...pieceStyle, ...unitStyles[pieceUnitId], ...teamStyles[this.props.selectedPiece != null && this.props.selectedPiece.pieceId == pieceId ? 2 : pieceTeamId], ...openLevels[pieceOpen ? 1 : 0]}} title={"Moves: " + pieceMoves + fuelTitle} >
        <div style={pieceOpen ? containerOpenStyle : containerClosedStyle}>
          <PieceSubContainer selectedPiece={this.props.selectedPiece} pieces={this.props.pieces} pieceClick={this.props.pieceClick} />
        </div>
      </div>
    )
  }
}

export default Piece
