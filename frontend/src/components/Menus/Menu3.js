import React, { Component } from 'react'

const menu3Hide = {
  display: "none"
}

const menu3Display = {
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: "3.8rem",
  height: "33.6rem",
  width: "25rem",
  display: "block"
}

export class Menu3 extends Component {
  render() {
    return (
      <div style={this.props.selectedMenu === 3 ? menu3Display : menu3Hide}>
        <p>Session Info</p>
        <p>Logout button</p>
        <p>Game Info (Creators / class? / Copyright)</p>
      </div>
    )
  }
}

export default Menu3
