import React, { Component } from 'react';
import PieceContainer from './PieceContainer';

const singleContainerDisplay = {
    display: 'block'
}

const singleContainerHide = {
    display: 'none'
}

export class SingleContainer extends Component {
  render() {
    return (
      <div style={this.props.selectedPos === this.props.positionId ? singleContainerDisplay : singleContainerHide}>
        <PieceContainer pieceClick={this.props.pieceClick} pieces={this.props.pieces} />
      </div>
    )
  }
}

export default SingleContainer
