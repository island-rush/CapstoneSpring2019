import React, { Component } from 'react';
import MultiContainer from './PieceContainerParts/MultiContainer';

const zoomboxStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  height: "25%",
  width: "16.5rem"
}

const zoomboxColoring = {
  "land": {backgroundColor: "green"},
  "water": {backgroundColor: "blue"},
  "missile": {backgroundColor: "red"},
  "flag": {backgroundColor: "black"},
  "airfield": {backgroundColor: "yellow"}
}

export class Zoombox extends Component {
  render() {
    return (
      <div style={{...zoomboxStyle, ...zoomboxColoring[this.props.positionTypes[this.props.selectedPos]]}}>
        <MultiContainer pieceClick={this.props.pieceClick} positions={this.props.positions} selectedPos={this.props.selectedPos} />
      </div>
    )
  }
}

export default Zoombox
