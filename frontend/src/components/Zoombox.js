import React, { Component } from 'react';
import PositionContainer from './ZoomboxParts/PositionContainer';

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
  "flag": {backgroundColor: "grey"},
  "airfield": {backgroundColor: "yellow"}
}

export class Zoombox extends Component {
  render() {
    const positionContainer = this.props.positions.map((position, index) => (
      <PositionContainer pieceClick={this.props.pieceClick} key={index} positionId={index} selectedPos={this.props.selectedPos} pieces={position} />
    ))

    return (
      <div style={{...zoomboxStyle, ...zoomboxColoring[this.props.positionTypes[this.props.selectedPos]]}}>
        {positionContainer}
      </div>
    )
  }
}

export default Zoombox
