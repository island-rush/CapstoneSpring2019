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
        <button><img src="..\images\unitImages\aircraftCarrier.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\artillery.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\attackHeli.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\bomber.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\destroyer.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\fighter.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\lav.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\marine.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\missile.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\sam.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\soldier.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\stealthBomber.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\submarine.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\tank.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\tanker.png" height="45" width="45" /></button>
        <button><img src="..\images\unitImages\transport.png" height="45" width="45" /></button>


        <p>A Selection of pieces to buy</p>
        <p>A Selection of abilities to buy</p>
      </div>
    )
  }
}

export default Menu1