import React, { Component } from 'react';

const popupStyle = {
    position: "fixed",
    bottom: "50%",
    left: "50%",
    height: "14rem",
    width: "16.5rem",
    backgroundColor: "white",
    display: "block"
}

const popupHidden = {
    display: "none"
}

export class NewsAlertPopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 0 ? popupStyle : popupHidden}>
        <p>This is the News Alert Text</p>
      </div>
    )
  }
}

export default NewsAlertPopup
