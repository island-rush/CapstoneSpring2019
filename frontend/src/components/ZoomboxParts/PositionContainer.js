import React, { Component } from 'react';
import Piece from './Piece';

const singleContainerDisplay = {
    display: 'block',
    height: "100%",
    width: "100%"
}

const singleContainerHide = {
    display: 'none'
}

export class SingleContainer extends Component {
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
    
    const thisPieces = topLevelPieces.map((piece, index) => (
        <Piece selectedPiece={this.props.selectedPiece} pieces={arrayContainedPieces[index]} pieceClick={this.props.pieceClick} key={piece.pieceId} pieceInfo={piece} />
    ))

    return (
      <div style={this.props.selectedPos === this.props.positionId ? singleContainerDisplay : singleContainerHide}>
        {thisPieces}
      </div>
    )
  }
}

export default SingleContainer
