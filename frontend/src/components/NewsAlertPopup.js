import React, { Component } from 'react';

const popupStyle = {
    position: "absolute",
    bottom: "33%",
    left: "37%",
    height: "40%",
    width: "40%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block"
}

const titleStyle = {
  position: "absolute",
  top: "2%",
  left: "40%",
  height: "10%",
  width: "20%",
  backgroundColor: "grey",
  display: "block"
}

const textStyle = {
  position: "absolute",
  top: "13%",
  left: "2.5%",
  height: "85%",
  width: "95%",
  backgroundColor: "grey",
  display: "block"
}

const popupHidden = {
    display: "none"
}

export class NewsAlertPopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 0 ? popupStyle : popupHidden}>
        <div style={titleStyle}>{this.props.currentNewsAlert.title}</div>
        <div style={textStyle}>{this.props.currentNewsAlert.text}</div>
      </div>
    )
  }
}

export default NewsAlertPopup
