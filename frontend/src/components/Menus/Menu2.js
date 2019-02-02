import React, { Component } from 'react'

const menu2Hide = {
  display: "none"
}

const menu2Display = {
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: "3.8rem",
  height: "33.6rem",
  width: "25rem",
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
