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

const buttonStyle = {
  height: "9%",
  width: "12%"
}

const imageStyle = {
  height: "100%",
  width: "100%"
}


export class Menu1 extends Component {
  render() {

    // array of pieces in the shopping cart
    // let shoppingCartArray = [];



    // for (let x = 0; x < shoppingCartArray.length; x++) {
    //  for each piece in the shopping cart, yo gotta create a button?
      // }


    return (
      <div style={this.props.selectedMenu === 1 ? menu1Display : menu1Hide}>
        <button style={buttonStyle}><img src="..\images\unitImages\aircraftCarrier.png" style={imageStyle} alt = "AirCraft Carrier"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\artillery.png" style={imageStyle} alt = "Artillery"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\attackHeli.png" style={imageStyle} alt = "Attack Heli"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\bomber.png" style={imageStyle} alt = "Bomber"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\destroyer.png" style={imageStyle} style={imageStyle} alt = "Destroyer"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\fighter.png" style={imageStyle} alt = "Fighter"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\lav.png" style={imageStyle} alt = "L.A.V."/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\marine.png" style={imageStyle} alt = "Marines"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\missile.png" style={imageStyle} alt = "Missile"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\sam.png" style={imageStyle} alt = "S.A.M."/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\soldier.png" style={imageStyle} alt = "Soldier"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\stealthBomber.png" style={imageStyle} alt = "Stealth Bomber"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\submarine.png" style={imageStyle} alt = "Submarine"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\tank.png" style={imageStyle} alt = "Tank"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\tanker.png" style={imageStyle} alt = "Refuling Tanker"/></button>
        <button style={buttonStyle}><img src="..\images\unitImages\transport.png" style={imageStyle} alt = "Transport"/></button>


        <p>A Selection of pieces to buy</p>
        <p>A Selection of abilities to buy</p>


               {/*vvvvvvvvvvvvvvvv change this here vvvvvvvvvvvvvv */}
        {/* const thisPieces = topLevelPieces.map((piece, index) => ( */}
        {/* <Piece pieces={arrayContainedPieces[index]} pieceClick={this.props.pieceClick} key={piece.pieceId} pieceInfo={piece} /> */}


      </div>
    )
  }
}

export default Menu1