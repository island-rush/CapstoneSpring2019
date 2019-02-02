import React, { Component } from 'react';
import PieceSubSubContainer from './PieceSubSubContainer';

const containerOpenStyle = {
    display: "block",
    width: "100px",
    height: "100px",
    backgroundColor: "white",
    position: 'relative'
}

const containerClosedStyle = {
    display: "none"
}

export class PieceSubContainer extends Component {
  render() {
    return (
      <div style={this.props.isOpen ? containerOpenStyle : containerClosedStyle}>
        <PieceSubSubContainer pieces={this.props.pieces} topPieceId={this.props.topPieceId} pieceClick={this.props.pieceClick} />
      </div>
    )
  }
}

export default PieceSubContainer
