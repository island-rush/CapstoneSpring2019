import React, { Component } from 'react'

const refuelStyle = {
    position: "absolute",
    bottom: "33%",
    left: "37%",
    height: "40%",
    width: "40%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block"
}

const refuelHidden = {
    display: 'none'
}

export class RefuelPopup extends Component {
  render() {
    return (
      <div style={this.props.gameSlice === 2 ? refuelStyle : refuelHidden}>
        <p>This is the refuel popup</p>
      </div>
    )
  }
}

export default RefuelPopup
