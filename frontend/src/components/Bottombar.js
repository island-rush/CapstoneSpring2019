import React, { Component } from 'react'

const bottombarStyle = {
  position: "absolute",
  bottom: ".25%",
  right: ".25%",
  height: "6.75%",
  width: "80.75%",
  zIndex: 2
}

const planningDivStyle = {
  backgroundColor: "gray",
  paddingTop: "0.5%",
  height: "86%",
  width: "20%",
  position: "relative",
  float: "left",
  textAlign: "center"
}

const userFeedbackStyle = {
  backgroundColor: "lightGray",
  height: "90%",
  width: "70%",
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

const planningStartStyle = [
  {
    display: "inline",
    padding: 0,
    margin: "2%",
    height: "70%",
    width: "70%",
    backgroundColor: "lightGreen",
    border: "none",
    borderRadius: "10%",
    textAlign: "center",
    cursor: 'pointer',
    fontFamily: "Impact",
    fontSize: "110%"
  },
  {
    display: "none"
  }
]

const planningButtonStyle = [
  {
    display: "inline",
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
    cursor: 'pointer'
  },
  {
    display: "none"
  }
]

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
        <div style={planningDivStyle}>
          <button onClick={this.props.planStart}     style={{...planningStartStyle[(this.props.gamePhase===2 && this.props.gameSlice===0 && this.props.planningMove == false && this.props.selectedPiece != null) ? 0 : 1]}} title="Start a Movement">Move this Piece</button>
          <button onClick={this.props.planUndo}      style={{...planningButtonStyle[this.props.planningMove ? 0 : 1], ...buttonImages[0]}} title="Undo Move"></button>
          <button onClick={this.props.planCancel}    style={{...planningButtonStyle[this.props.planningMove ? 0 : 1], ...buttonImages[1]}} title="Cancel Movement"></button>
          <button onClick={this.props.planContainer} style={{...planningButtonStyle[this.props.planningMove ? 0 : 1], ...buttonImages[2]}} title="Plan to Open Container"></button>
          <button onClick={this.props.planDone}      style={{...planningButtonStyle[this.props.planningMove ? 0 : 1], ...buttonImages[3]}} title="Confirm Movement"></button>
        </div>
        <div style={userFeedbackStyle}>{this.props.userFeedback}</div>
        <div style={controlButtonDivStyle}>
          <button onClick={this.props.controlButtonClick} style={controlButtonStyle}>{this.props.status === 0 ? "Control Button" : "Waiting..."}</button>
        </div>
      </div>
    )
  }
}

export default Bottombar
