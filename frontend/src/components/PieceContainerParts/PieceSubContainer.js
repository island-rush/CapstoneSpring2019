import React, { Component } from 'react';
import Piece from './Piece';

export class PieceSubSubContainer extends Component {
  render() {
    let containedPieces = this.props.pieces.filter(piece => piece.pieceContainerId === this.props.topPieceId);

    return containedPieces.map((piece) => (
        <Piece pieces={this.props.pieces} pieceClick={this.props.pieceClick} key={piece.pieceId} pieceInfo={piece} />
    ));
  }
}

export default PieceSubSubContainer
