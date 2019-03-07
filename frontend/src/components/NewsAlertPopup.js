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

const popupHidden = {
    display: "none"
}

export class NewsAlertPopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 100000 ? popupStyle : popupHidden}>
        <p>This is the News Alert Text</p>
      </div>
    )
  }
}

export default NewsAlertPopup
