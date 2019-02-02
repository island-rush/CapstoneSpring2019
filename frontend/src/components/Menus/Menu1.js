import React, { Component } from 'react'

const menu1Hide = {
  display: "none"
}

const menu1Display = {
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: "3.8rem",
  height: "33.6rem",
  width: "25rem",
  display: "block"
}

export class Menu1 extends Component {
  render() {
    return (
      <div style={this.props.selectedMenu === 1 ? menu1Display : menu1Hide}>
        <p>A Selection of pieces to buy</p>
        <p>A Selection of abilities to buy</p>
      </div>
    )
  }
}

export default Menu1
