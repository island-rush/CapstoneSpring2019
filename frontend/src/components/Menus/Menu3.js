import React, { Component } from 'react'

const menu3Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "340%",
  opacity: 1,
  transition: "opacity .25s"
}

const menu3 = [
  {opacity: 1},
  {opacity: 0}
]

export class Menu3 extends Component {
  render() {
    return (
      <div style={{...menu3Display, ...menu3[this.props.selectedMenu === 3 ? 0 : 1]}}>
        <p>Session Info</p>
        <p>Game Info (Creators / class? / Copyright)</p>
      </div>
    )
  }
}

export default Menu3
