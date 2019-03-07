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
];

const pieceStyle = {
  backgroundColor: "gray",
  backgroundRepeat: "no-repeat",
  backgroundSize: "90% 90%",
  backgroundPosition: "center",
  height: "50px", 
  width: "50px",
  float: "left",
  border: '1px solid white'
}

const pointsStyle = {
  color: 'blue',
  position: "relative", 
  right: "-65%",
  bottom: "-60%",
  fontSize: 11
}

const reliefStyle = {
  color: 'blue',
  position: "relative", 
  right: "-65%",
  bottom: "-20%",
  fontSize: 11
}

const cartStyle = {
  // backgroundColor: "blue",
  height: "58%",
  width: "99%"
}

const menu1Display = {
  backgroundColor: "white",
  position: "absolute",
  top: ".25%",
  left: "105%",
  height: "99%",
  width: "400%",
  transition: "opacity .25s, visibility .25s"
}

const menu1 = [
  {
    opacity: 1,
    visibility: "visible"
  },
  {
    opacity: 0,
    visibility: "hidden"
  }
];

export class Menu1 extends Component {
  render() {
    const PurchasedPiece = this.props.cart.map( 
      (purchaseableObject) => (
        <div key={purchaseableObject.purchaseId} onClick={this.props.removeFromCart.bind(this, purchaseableObject.purchaseId)} style={{...pieceStyle, ...unitImages[purchaseableObject.purchaseUnitId] }}></div>
      )
    )

    return (
      <div style={{...menu1Display, ...menu1[this.props.selectedMenu === 1 ? 0 : 1]}}>
        <div backgroundColor="white" height="40%" width="100%">
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title="Aircraft Carrier: 24"><div style={pointsStyle}>24</div></div>
          <div onClick={this.props.updateCart.bind(this, 1)} style={{...pieceStyle, ...unitImages[1] }} title="Artillery"><div style={pointsStyle}>8</div></div>
          <div onClick={this.props.updateCart.bind(this, 2)} style={{...pieceStyle, ...unitImages[2] }} title="Attach Heli"><div style={pointsStyle}>11</div></div>
          <div onClick={this.props.updateCart.bind(this, 3)} style={{...pieceStyle, ...unitImages[3] }} title="Bomber"><div style={pointsStyle}>15</div></div>
          <div onClick={this.props.updateCart.bind(this, 4)} style={{...pieceStyle, ...unitImages[4] }} title="Destroyer"><div style={pointsStyle}>18</div></div>
          <div onClick={this.props.updateCart.bind(this, 5)} style={{...pieceStyle, ...unitImages[5] }} title="Fighter"><div style={pointsStyle}>18</div></div>
          <div onClick={this.props.updateCart.bind(this, 6)} style={{...pieceStyle, ...unitImages[6] }} title="LAV"><div style={pointsStyle}>8</div></div>
          <div onClick={this.props.updateCart.bind(this, 7)} style={{...pieceStyle, ...unitImages[7] }} title="Marine Infantry"><div style={pointsStyle}>4</div></div>
          <div onClick={this.props.updateCart.bind(this, 8)} style={{...pieceStyle, ...unitImages[8] }} title="Missile"><div style={pointsStyle}>8</div></div>
          <div onClick={this.props.updateCart.bind(this, 9)} style={{...pieceStyle, ...unitImages[9] }} title="SAM"><div style={pointsStyle}>9</div></div>
          <div onClick={this.props.updateCart.bind(this, 10)} style={{...pieceStyle, ...unitImages[10] }} title="Army Infantry"><div style={pointsStyle}>3</div></div>
          <div onClick={this.props.updateCart.bind(this, 11)} style={{...pieceStyle, ...unitImages[11] }} title="Stealth Bomber"><div style={pointsStyle}>21</div></div>
          <div onClick={this.props.updateCart.bind(this, 12)} style={{...pieceStyle, ...unitImages[12] }} title="Submarine"><div style={pointsStyle}>16</div></div>
          <div onClick={this.props.updateCart.bind(this, 13)} style={{...pieceStyle, ...unitImages[13] }} title="Tank"><div style={pointsStyle}>8</div></div>
          <div onClick={this.props.updateCart.bind(this, 14)} style={{...pieceStyle, ...unitImages[14] }} title="Tanker"><div style={pointsStyle}>11</div></div>
          <div onClick={this.props.updateCart.bind(this, 15)} style={{...pieceStyle, ...unitImages[15] }} title="Transport"><div style={pointsStyle}>10</div></div>
          <div onClick={this.props.updateCart.bind(this, 16)} style={{...pieceStyle, ...unitImages[15] }} title="Air ISR"><div style={pointsStyle}>8</div></div>
          <div onClick={this.props.updateCart.bind(this, 17)} style={{...pieceStyle, ...unitImages[15] }} title="MC-12"><div style={pointsStyle}>11</div></div>
          <div onClick={this.props.updateCart.bind(this, 18)} style={{...pieceStyle, ...unitImages[15] }} title="C-130"><div style={pointsStyle}>12</div></div>
          <div onClick={this.props.updateCart.bind(this, 19)} style={{...pieceStyle, ...unitImages[15] }} title="SOF Team"><div style={pointsStyle}>7</div></div>
          <div onClick={this.props.updateCart.bind(this, 20)} style={{...pieceStyle, ...unitImages[15] }} title="Radar Station"><div style={pointsStyle}>20</div></div>
          <div onClick={this.props.updateCart.bind(this, 21)} style={{...pieceStyle, ...unitImages[15] }} title="Convoy"><div style={pointsStyle}>7</div></div>
          <div onClick={this.props.updateCart.bind(this, 22)} style={{...pieceStyle, ...unitImages[15] }} title="Air Transport"><div style={pointsStyle}>12</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "ATC Scramble"><div style={pointsStyle}>20</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Cyber Dominance"><div style={pointsStyle}>40</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Missile Launch Disruption"><div style={pointsStyle}>25</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Communications Interruption"><div style={pointsStyle}>30</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Remote Sensing"><div style={pointsStyle}>60</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Rods From God"><div style={pointsStyle}>35</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Anti Satellite Missiles"><div style={pointsStyle}>35</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Golden Eye"><div style={pointsStyle}>90</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Nuclear Strike"><div style={pointsStyle}>190</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Disaster Relief LVL1"><div color>1</div><div style={reliefStyle}>15</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Disaster Relief LVL2"><div color>2</div><div style={reliefStyle}>22</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Disaster Relief LVL3"><div color>3</div><div style={reliefStyle}>35</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Biologicl Weapons"><div style={pointsStyle}>25</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Sea Mines"><div style={pointsStyle}>20</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Drone Swarms"><div style={pointsStyle}>20</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Insurgency"><div style={pointsStyle}>20</div></div>
          <div onClick={this.props.updateCart.bind(this, 0)} style={{...pieceStyle, ...unitImages[0] }} title = "Raise Morale"><div style={pointsStyle}>50</div></div>
        </div>
        <p color="white">================= Your Cart: =================</p>
        <div style={cartStyle}>
          {PurchasedPiece}
        </div>
      </div>    
    )
  }
}

export default Menu1