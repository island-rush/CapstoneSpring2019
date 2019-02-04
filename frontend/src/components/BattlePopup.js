import React, { Component } from 'react';

const battleStyle = {
    position: "absolute",
    bottom: "33%",
    left: "37%",
    height: "40%",
    width: "40%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block"
}

const battleHidden = {
    display: 'none'
}

export class BattlePopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 1 ? battleStyle : battleHidden}>
        <p>This is the battle popup</p>
      </div>
    )
  }
}

export default BattlePopup
