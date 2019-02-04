import React, { Component } from 'react'

const menu3Hide = {
  display: "none"
}

const menu3Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "340%",
  display: "block"
}

export class Menu3 extends Component {
  render() {
    return (
      <div style={this.props.selectedMenu === 3 ? menu3Display : menu3Hide}>
        <p>Session Info</p>
        <p>Game Info (Creators / class? / Copyright)</p>
      </div>
    )
  }
}

export default Menu3
