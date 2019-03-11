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
];

export class Menu2 extends Component {
  render() {
    const invItems = this.props.inv.map( 
      (invObject) => (
        <div key={invObject.invId} style={{...pieceStyle, ...unitImages[invObject.invUnitId]}}></div>
      )
    )

    return (
      <div style={{...menu2Display, ...menu2[this.props.selectedMenu === 2 ? 0 : 1]}}>
        {invItems}
      </div>
    )
  }
}

export default Menu2
