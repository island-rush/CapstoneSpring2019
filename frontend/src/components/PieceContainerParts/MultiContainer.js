import React, { Component } from 'react';
import SingleContainer from './SingleContainer';

export class MultiContainer extends Component {
  render() {
    return this.props.positions.map((position, index) => (
        <SingleContainer pieceClick={this.props.pieceClick} key={index} positionId={index} selectedPos={this.props.selectedPos} pieces={position} />
    ))
  }
}

export default MultiContainer
