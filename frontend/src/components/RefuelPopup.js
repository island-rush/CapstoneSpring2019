import React, { Component } from 'react'

const refuelStyle = {
    position: "fixed",
    bottom: "50%",
    left: "50%",
    height: "14rem",
    width: "16.5rem",
    backgroundColor: "white",
    display: "block"
}

const refuelHidden = {
    display: 'none'
}

export class RefuelPopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 2 ? refuelStyle : refuelHidden}>
        <p>This is the refuel popup</p>
      </div>
    )
  }
}

export default RefuelPopup
