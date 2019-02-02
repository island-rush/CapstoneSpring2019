import React, { Component } from 'react';
import Piece from './Piece';

export class PieceContainer extends Component {
  render() {
    const topLevelPieces = this.props.pieces.filter(piece => piece.pieceContainerId === -1);

    let arrayContainedPieces = [];
    for (let x = 0; x < topLevelPieces.length; x++) {
      arrayContainedPieces.push([]);
      for (let y = 0; y < this.props.pieces.length; y++) {
        if (topLevelPieces[x].pieceId === this.props.pieces[y].pieceContainerId) {
          arrayContainedPieces[x].push(this.props.pieces[y]);
        }
      }
    }
    
    return topLevelPieces.map((piece, index) => (
        <Piece pieces={arrayContainedPieces[index]} pieceClick={this.props.pieceClick} key={piece.pieceId} pieceInfo={piece} />
    ))
  }
}

export default PieceContainer
