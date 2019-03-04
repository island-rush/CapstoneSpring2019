import React, { Component } from 'react';
import PositionContainer from './ZoomboxParts/PositionContainer';

const zoomboxStyle = {
  position: "absolute",
  bottom: ".25%",
  left: ".25%",
  height: "26%",
  width: "18.5%",
  zIndex: 1,
  boxShadow: "0px 0px 0px 2px black inset",
  boxSizing: "border-box",
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
      // <div style={{...zoomboxStyle, ...zoomboxColoring[this.props.positionTypes[this.props.selectedPos]]}}>
      //   {positionContainer}
      // </div>
      <div>
        stuff
    </div>
    )
  }
}

export default Zoombox
