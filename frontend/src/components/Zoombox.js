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

// const triangle = {
//   width: 0,
//   height: 0,
//   borderLeft: "20px solid transparent",
//   borderRight: "20px solide transparent",
//   borderBottom: "20px solid black"
// }

export class Zoombox extends Component {
  render() {
    return (
      <div style={{...zoomboxStyle, ...zoomboxColoring[this.props.positionTypes[this.props.selectedPos]]}}>
        <MultiContainer pieceClick={this.props.pieceClick} positions={this.props.positions} selectedPos={this.props.selectedPos} />
        {/* <div style={triangle}></div> */}
      </div>
    )
  }
}

export default Zoombox
