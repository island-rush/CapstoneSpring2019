import React, { Component } from 'react'

const bottombarStyle = {
  position: "fixed",
  bottom: 0,
  right: 0,
  backgroundColor: "purple",
  height: "6%",
  width: "79.4rem"
}

const planningDivStyle = {
  backgroundColor: "blue",
  height: "75%",
  width: "10%",
  position: "relative",
  float: "left",
  margin: "1%"
}

const userFeedbackStyle = {
  backgroundColor: "yellow",
  height: "75%",
  width: "72%",
  position: "relative",
  float: "left",
  margin: "1%"
}

const controlButtonStyle = {
  backgroundColor: "green",
  height: "75%",
  width: "12%",
  position: "relative",
  float: "right",
  margin: "1%"
}

export class Bottombar extends Component {
  render() {
    return (
      <div style={bottombarStyle}>
        <div style={planningDivStyle}>Planning div (3)</div>
        <div style={userFeedbackStyle}>User Feedback</div>
        <div style={controlButtonStyle}>Control Button</div>
      </div>
    )
  }
}

export default Bottombar
