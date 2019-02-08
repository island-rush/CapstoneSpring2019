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
  width: "15%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const userFeedbackStyle = {
  backgroundColor: "yellow",
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
  margin: "5%",
  backgroundColor: "green",
  height: "80%",
  width: "20%",
  position: "relative",
  float: "right",
  textAlign: "center"
}

const buttonStyles = [
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
        <div style={planningDivStyle}>
          <button style={{...planningButtonStyle, ...buttonStyles[1]}}></button>
          <button style={{...planningButtonStyle, ...buttonStyles[2]}}></button>
          <button style={{...planningButtonStyle, ...buttonStyles[3]}}></button>
          <button style={{...planningButtonStyle, ...buttonStyles[4]}}></button>
        </div>
        <div style={userFeedbackStyle}>User Feedback</div>
        <div style={controlButtonDivStyle}>
          <button onClick={this.props.controlButtonClick} style={controlButtonStyle}>Control Button</button>
        </div>
      </div>
    )
  }
}

export default Bottombar
