import React, { Component } from 'react'

const menu2Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "340%",
  transition: "opacity .25s, visibility .25s"
}

const menu2 = [
  {
    opacity: 1,
    visibility: "visible"
  },
  {
    opacity: 0,
    visibility: "hidden"
  }
]

export class Menu2 extends Component {
  render() {
    return (
      <div style={{...menu2Display, ...menu2[this.props.selectedMenu === 2 ? 0 : 1]}}>
        <p>Section for pieces (to drag at place reinforcement phase)</p>
        <p>Section for abilities to use (at any point)</p>
      </div>
    )
  }
}

export default Menu2
