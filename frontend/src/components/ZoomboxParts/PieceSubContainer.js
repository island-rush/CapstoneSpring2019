import React, { Component } from 'react';
import Piece from './Piece';

export class PieceSubContainer extends Component {
  render() {
    const pieces = [];

    return this.props.pieces.map((piece) => (
        <Piece pieces={pieces} pieceClick={this.props.pieceClick} key={piece.pieceId} pieceInfo={piece} />
    ));
  }
}

export default PieceSubContainer
