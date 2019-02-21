import React, { Component } from 'react'

const unitImages = [
  {backgroundImage: "url(\"../images/unitImages/aircraftCarrier.png\")"},
  {backgroundImage: "url(\"../images/unitImages/artillery.png\")"},
  {backgroundImage: "url(\"../images/unitImages/attackHeli.png\")"},
  {backgroundImage: "url(\"../images/unitImages/bomber.png\")"},
  {backgroundImage: "url(\"../images/unitImages/destroyer.png\")"},
  {backgroundImage: "url(\"../images/unitImages/fighter.png\")"},
  {backgroundImage: "url(\"../images/unitImages/lav.png\")"},
  {backgroundImage: "url(\"../images/unitImages/marine.png\")"},
  {backgroundImage: "url(\"../images/unitImages/missile.png\")"},
  {backgroundImage: "url(\"../images/unitImages/sam.png\")"},
  {backgroundImage: "url(\"../images/unitImages/soldier.png\")"},
  {backgroundImage: "url(\"../images/unitImages/stealthBomber.png\")"},
  {backgroundImage: "url(\"../images/unitImages/submarine.png\")"},
  {backgroundImage: "url(\"../images/unitImages/tank.png\")"},
  {backgroundImage: "url(\"../images/unitImages/tanker.png\")"},
  {backgroundImage: "url(\"../images/unitImages/transport.png\")"}
]

const pieceStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "90% 90%",
  backgroundPosition: "center",
  height: "50px", 
  width: "50px",
  float: "left"
}

const menu1Hide = {
  display: "none"
}

const link  = "hello"

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
  height: "50px",
  width: "50px", 
  display: "inline"
}

const imageStyle = {
  height: "100%",
  width: "100%"
}

export class Menu1 extends Component {


  render() {


    const PurchasedPiece = this.props.cart.map( 
      (purchaseableObject) => (
        <div onClick={this.props.removeFromCart.bind(this, purchaseableObject.id)} style={{...pieceStyle, ...unitImages[purchaseableObject.type] }}></div>
      ))

    return (
      <div style={this.props.selectedMenu === 1 ? menu1Display : menu1Hide}>

{/* Buttoms for purchasing pieces */}
        <div>Pieces to buy></div>

        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 1)} style={{...pieceStyle, ...unitImages[1] }}></div>
        <div onClick={this.props.updateCart.bind(this, 2)} style={{...pieceStyle, ...unitImages[2] }}></div>
        <div onClick={this.props.updateCart.bind(this, 3)} style={{...pieceStyle, ...unitImages[3] }}></div>
        <div onClick={this.props.updateCart.bind(this, 4)} style={{...pieceStyle, ...unitImages[4] }}></div>
        <div onClick={this.props.updateCart.bind(this, 5)} style={{...pieceStyle, ...unitImages[5] }}></div>
        <div onClick={this.props.updateCart.bind(this, 6)} style={{...pieceStyle, ...unitImages[6] }}></div>
        <div onClick={this.props.updateCart.bind(this, 7)} style={{...pieceStyle, ...unitImages[7] }}></div>
        <div onClick={this.props.updateCart.bind(this, 8)} style={{...pieceStyle, ...unitImages[8] }}></div>
        <div onClick={this.props.updateCart.bind(this, 9)} style={{...pieceStyle, ...unitImages[9] }}></div>
        <div onClick={this.props.updateCart.bind(this, 10)} style={{...pieceStyle, ...unitImages[10] }}></div>
        <div onClick={this.props.updateCart.bind(this, 11)} style={{...pieceStyle, ...unitImages[11] }}></div>
        <div onClick={this.props.updateCart.bind(this, 12)} style={{...pieceStyle, ...unitImages[12] }}></div>
        <div onClick={this.props.updateCart.bind(this, 13)} style={{...pieceStyle, ...unitImages[13] }}></div>
        <div onClick={this.props.updateCart.bind(this, 14)} style={{...pieceStyle, ...unitImages[14] }}></div>
        <div onClick={this.props.updateCart.bind(this, 15)} style={{...pieceStyle, ...unitImages[15] }}></div>

        <div>Abilities?</div>

        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }}></div>


        <p>A Selection of abilities to buy</p>
        <p>==========================Tactical Stuff GOes HERE=====================</p>

        <p>Your Cart: </p>
        {/* your cart items appear here based on the map funcation above. */}
        {PurchasedPiece} 
        <div>
           
        </div>
        <button onClick={this.props.emptyMyCart} style={buttonStyle}><img src="..\images\Red_X.png" style={imageStyle}/></button>





      </div>
    )
  }
}

export default Menu1