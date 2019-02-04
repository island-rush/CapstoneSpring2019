import React, { Component } from 'react'

const menu1Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "340%",
  opacity: 1,
  transition: "opacity .25s"
}

const menu1 = [
  {opacity: 1},
  {opacity: 0}
]

export class Menu1 extends Component {
  render() {
    return (
      <div style={{...menu1Display, ...menu1[this.props.selectedMenu === 1 ? 0 : 1]}}>
        <p>A Selection of pieces to buy</p>
        <p>A Selection of abilities to buy</p>
      </div>
    )
  }
}

export default Menu1
