import React, { Component } from 'react'

const bottombarStyle = {
  position: "absolute",
  bottom: ".25%",
  right: ".25%",
  // backgroundColor: "purple",
  height: "6.75%",
  width: "80.75%",
  zIndex: 2
}

const planningDivStyle = {
  backgroundColor: "gray",
  paddingTop: "0.5%",
  height: "86%",
  width: "15%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const userFeedbackStyle = {
  backgroundColor: "lightGray",
  height: "100%",
  width: "75%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const controlButtonDivStyle = {
  backgroundColor: "green",
  height: "100%",
  width: "10%",
  position: "relative",
  float: "right",
  textAlign: "center"
}

const planningButtonStyle = {
  padding: 0,
  margin: "2%",
  height: "70%",
  width: "20%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundColor: planningDivStyle.backgroundColor,
  border: "none",
  borderRadius: "40%",
  textAlign: "center",
  cursor: 'pointer',
  // hover:{
  //   backgroundColor: "lightGray"
  // }
}

const buttonImages = [
  {backgroundImage: "url(\"./images/buttonImages/undo.png\")"},
  {backgroundImage: "url(\"./images/buttonImages/cancel.png\")"},
  {backgroundImage: "url(\"./images/buttonImages/openContainer.png\")"},
  {backgroundImage: "url(\"./images/buttonImages/done.png\")"}
]

const controlButtonStyle = {
  height: "80%",
  width: "80%",
  margin: "3%"
}


export class Bottombar extends Component {
  render() {
    return (
      <div style={bottombarStyle}>
      {/* Planning Div holds the buttons that are used to edit and submit movements for each piece */}
        <div style={planningDivStyle}>
          <button onclick={this.props.planStart}     style={{...planningButtonStyle, ...buttonImages[0]}} title = "Undo Move"></button>
          <button onclick={this.props.planCancel}    style={{...planningButtonStyle, ...buttonImages[1]}} title = "Cancel Movement"></button>
          <button onclick={this.props.planContainer} style={{...planningButtonStyle, ...buttonImages[2]}} title = "Plan to Open Container"></button>
          <button onclick={this.props.planDone}      style={{...planningButtonStyle, ...buttonImages[3]}} title = "Confirm Movement"></button>
        </div>
        <div style={userFeedbackStyle}>User Feedback</div>
        {/* Control Button is used by the CoCommander to move between phases */}
        <div style={controlButtonDivStyle}>
          <button onClick={this.props.controlButtonClick} style={controlButtonStyle}>Control Button</button>
        </div>
      </div>
    )
  }
}

export default Bottombar
