import React, { Component } from 'react';
import Menu1 from './Menus/Menu1';
import Menu2 from './Menus/Menu2';
import Menu3 from './Menus/Menu3';

const btn1Style = {
  fontSize: "8px",
  background: '#000',
  color: '#fff',
  border: 'none',
  margin: '10px',
  marginBottom: '175px',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

const btn2Style = {
  fontSize: "10px",
  background: '#000',
  color: '#fff',
  border: 'none',
  margin: '10px',
  marginBottom: '175px',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

const btn3Style = {
  fontSize: "5px",
  background: '#000',
  color: '#fff',
  border: 'none',
  margin: '10px',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

const sidebarStyle = {
    position: "absolute",
    top: ".25%",
    left: ".25%",
    backgroundColor: "red",
    height: "73%",
    width: "5.25%",
    zIndex: 3
}

export class Sidebar extends Component {
  render() {
    return (
      <div style={sidebarStyle}>
        <button style={btn1Style} onClick={this.props.selectMenu.bind(this, 1)}>Shop</button>
        <button style={btn2Style} onClick={this.props.selectMenu.bind(this, 2)}>Inv</button>
        <button style={btn3Style} onClick={this.props.selectMenu.bind(this, 3)}>Settings</button>
        <p>Phase: {this.props.gamePhase}</p>
        <p>Points: {this.props.points}</p>
        <Menu1 removeFromCart={this.props.removeFromCart} updateCart={this.props.updateCart} cart={this.props.cart} selectedMenu={this.props.selectedMenu} />
        <Menu2 inv={this.props.inv} selectedMenu={this.props.selectedMenu} />
        <Menu3 selectedMenu={this.props.selectedMenu} />
      </div>
    )
  }
}

export default Sidebar
