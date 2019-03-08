import React, { Component } from 'react'

const refuelStyle = {
    position: "absolute",
    bottom: "27%",
    left: "30%",
    height: "60%",
    width: "60%",
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
        <div>

        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default RefuelPopup
