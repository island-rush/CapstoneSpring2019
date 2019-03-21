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

export const unitImages = [
    {backgroundImage: "url(\"./images/unitImages/bomber.png\")"},           //  0: bomber
    {backgroundImage: "url(\"./images/unitImages/stealthBomber.png\")"},    //  1: stealthBomber
    {backgroundImage: "url(\"./images/unitImages/fighter.png\")"},          //  2: fighter
    {backgroundImage: "url(\"./images/unitImages/tanker.png\")"},           //  3: tanker
    {backgroundImage: "url(\"./images/unitImages/c17.png\")"},              //  4: airTransport
    {backgroundImage: "url(\"./images/unitImages/e3.png\")"},               //  5: airISR
    {backgroundImage: "url(\"./images/unitImages/infantry.png\")"},         //  6: infantry
    {backgroundImage: "url(\"./images/unitImages/artillery.png\")"},        //  7: artillery
    {backgroundImage: "url(\"./images/unitImages/tank.png\")"},             //  8: tank
    {backgroundImage: "url(\"./images/unitImages/marine.png\")"},           //  9: marine
    {backgroundImage: "url(\"./images/unitImages/attackHeli.png\")"},       // 10: attackHelicopter
    {backgroundImage: "url(\"./images/unitImages/convoy.png\")"},           // 11: convoy
    {backgroundImage: "url(\"./images/unitImages/sam.png\")"},              // 12: SAM
    {backgroundImage: "url(\"./images/unitImages/destroyer.png\")"},        // 13: destroyer
    {backgroundImage: "url(\"./images/unitImages/aircraftCarrier.png\")"},  // 14: aircraft carrier
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},        // 15: submarine
    {backgroundImage: "url(\"./images/unitImages/transport.png\")"},        // 16: transport
    {backgroundImage: "url(\"./images/unitImages/mc12.png\")"},             // 17: ground ISR
    {backgroundImage: "url(\"./images/unitImages/c130.png\")"},             // 18: C-130
    {backgroundImage: "url(\"./images/unitImages/sofTeam.png\")"},          // 19: SOF team
    {backgroundImage: "url(\"./images/unitImages/radar.png\")"},            // 20: RADAR
    {backgroundImage: "url(\"./images/unitImages/seaMine.png\")"},          // 21: Sea mines
    {backgroundImage: "url(\"./images/unitImages/droneSwarm.png\")"}        // 22: Drone swarm
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
      <div onClick={this.props.pieceClick.bind(this, pieceId, piecePositionId)} style={{...pieceStyle, ...unitImages[pieceUnitId], ...teamStyles[this.props.selectedPiece != null && this.props.selectedPiece.pieceId == pieceId ? 2 : pieceTeamId], ...openLevels[pieceOpen ? 1 : 0]}} title={"Moves: " + pieceMoves + fuelTitle} >
        <div style={pieceOpen ? containerOpenStyle : containerClosedStyle}>
          <PieceSubContainer selectedPiece={this.props.selectedPiece} pieces={this.props.pieces} pieceClick={this.props.pieceClick} />
        </div>
      </div>
    )
  }
}

export default Piece
