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
  backgroundColor: "gray",
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

const clearStyle = {
  position: "absolute", 
  right: "25px",
  bottom: "25px"
}

const link  = "hello"

const menu1Display = {
  backgroundColor: "yellow",
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
      <div backgroundColor="white" height="40%" width="100%">
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title="Aircraft Carrier"></div>
        <div onClick={this.props.updateCart.bind(this, 1)} style={{...pieceStyle, ...unitImages[1] }} title="Artillery"></div>
        <div onClick={this.props.updateCart.bind(this, 2)} style={{...pieceStyle, ...unitImages[2] }} title="Attach Heli"></div>
        <div onClick={this.props.updateCart.bind(this, 3)} style={{...pieceStyle, ...unitImages[3] }} title="Bomber"></div>
        <div onClick={this.props.updateCart.bind(this, 4)} style={{...pieceStyle, ...unitImages[4] }} title="Destroyer"></div>
        <div onClick={this.props.updateCart.bind(this, 5)} style={{...pieceStyle, ...unitImages[5] }} title="Fighter"></div>
        <div onClick={this.props.updateCart.bind(this, 6)} style={{...pieceStyle, ...unitImages[6] }} title="LAV"></div>
        <div onClick={this.props.updateCart.bind(this, 7)} style={{...pieceStyle, ...unitImages[7] }} title="Marine"></div>
        <div onClick={this.props.updateCart.bind(this, 8)} style={{...pieceStyle, ...unitImages[8] }} title="Missile"></div>
        <div onClick={this.props.updateCart.bind(this, 9)} style={{...pieceStyle, ...unitImages[9] }} title="SAM"></div>
        <div onClick={this.props.updateCart.bind(this, 10)} style={{...pieceStyle, ...unitImages[10] }} title="Soldier"></div>
        <div onClick={this.props.updateCart.bind(this, 11)} style={{...pieceStyle, ...unitImages[11] }} title="Stealth Bomber"></div>
        <div onClick={this.props.updateCart.bind(this, 12)} style={{...pieceStyle, ...unitImages[12] }} title="Submarine"></div>
        <div onClick={this.props.updateCart.bind(this, 13)} style={{...pieceStyle, ...unitImages[13] }} title="Tank"></div>
        <div onClick={this.props.updateCart.bind(this, 14)} style={{...pieceStyle, ...unitImages[14] }} title="Tanker"></div>
        <div onClick={this.props.updateCart.bind(this, 15)} style={{...pieceStyle, ...unitImages[15] }} title="Transport"></div>


        <div>.......................................................................................</div>

        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "ATC Scramble"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Cyber Dominance"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Missile Launch Disruption"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Communications Interruption"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Remote Sensing"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Rods From God"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Anti Satellite Missiles"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Golden Eye"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Nuclear Strike"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Disaster Relief"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Biologicl Weapons"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Sea Mines"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Drone Swarms"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Sabotage"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Insurgency"></div>
        <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Raise Morale"></div>

      </div>

        <p color="white">================= Your Cart: =================</p>
        {/* your cart items appear here based on the map funcation above. */}
        {PurchasedPiece} 
        <div>
           
        </div>
        {/* empty cart button */}
        <button title="Clear Cart" onClick={this.props.emptyMyCart} style={{...buttonStyle, ...clearStyle}}><img src="..\images\Red_X.png" style={imageStyle}/></button>





      </div>
    )
  }
}

export default Menu1