import React, { Component } from 'react'

const bottombarStyle = {
  position: "absolute",
  bottom: ".25%",
  right: ".25%",
  backgroundColor: "purple",
  height: "6.75%",
  width: "80.75%",
  zIndex: 2
}

const planningDivStyle = {
  backgroundColor: "blue",
  height: "100%",
  width: "10%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const userFeedbackStyle = {
  backgroundColor: "yellow",
  height: "100%",
  width: "80%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const controlButtonStyle = {
  backgroundColor: "green",
  height: "100%",
  width: "10%",
  position: "relative",
  float: "right",
  textAlign: "center"
}

export class Bottombar extends Component {
  render() {
    return (
      <div style={bottombarStyle}>
        <div style={planningDivStyle}>[x] [x] [x]</div>
        <div style={userFeedbackStyle}>User Feedback</div>
        <div style={controlButtonStyle}>Control Button</div>
      </div>
    )
  }
}

export default Bottombar
