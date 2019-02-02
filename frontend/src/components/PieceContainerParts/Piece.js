import React, { Component } from 'react';
import PieceSubContainer from './PieceSubContainer';

const pieceStyle = {
    width: "50px",
    height: "50px",
    float: "left",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% 90%",
    boxShadow: "0px 0px 0px 1px white inset",
    boxSizing: "border-box",
    backgroundPosition: "center"
}

const teamStyles = [
    {boxShadow: "0px 0px 0px 3px rgba(255, 0, 0, 0.55) inset"},
    {boxShadow: "0px 0px 0px 3px rgba(0, 111, 255, 0.67) inset"}
]

const unitStyles = [
    {backgroundImage: "url(\"./images/unitImages/transport.png\")"},
    {backgroundImage: "url(\"./images/unitImages/fighter.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/tank.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"},
    {backgroundImage: "url(\"./images/unitImages/submarine.png\")"}
]

// Ensures that Top Piece has greater zIndex than neighbor pieces (so child container is on top of them)
const openLevels = [
  {zIndex: 5},
  {zIndex: 10}
]

export class Piece extends Component {
  render() {
    const {pieceId, pieceTeamId, pieceUnitId, piecePositionId, pieceContainerId, pieceMoves, pieceFuel, pieceOpen} = this.props.pieceInfo;
    const fuelTitle = pieceFuel === -1 ? "" : "\nFuel: " + pieceFuel  
    return (
      <div onClick={this.props.pieceClick.bind(this, pieceId).bind(this, piecePositionId)} style={{...pieceStyle, ...unitStyles[pieceUnitId], ...teamStyles[pieceTeamId], ...openLevels[pieceOpen ? 1 : 0]}} title={"Moves: " + pieceMoves + fuelTitle} >
        <PieceSubContainer pieceClick={this.props.pieceClick} isOpen={pieceOpen} pieces={this.props.pieces} topPieceId={pieceId} />
      </div>
    )
  }
}

export default Piece
