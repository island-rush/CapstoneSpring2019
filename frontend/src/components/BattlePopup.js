import React, { Component } from 'react';

const battleStyle = {
    position: "fixed",
    bottom: "50%",
    left: "50%",
    height: "14rem",
    width: "16.5rem",
    backgroundColor: "white",
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
