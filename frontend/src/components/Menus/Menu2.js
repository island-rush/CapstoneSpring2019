import React, { Component } from 'react'

const menu2Hide = {
  display: "none"
}

const menu2Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "340%",
  display: "block"
}

export class Menu2 extends Component {
  render() {
    return (
      <div style={this.props.selectedMenu === 2 ? menu2Display : menu2Hide}>
        <p>Section for pieces (to drag at place reinforcement phase)</p>
        <p>Section for abilities to use (at any point)</p>
      </div>
    )
  }
}

export default Menu2
