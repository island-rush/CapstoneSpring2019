/** BATTLE POPUP
 * This component is a popup that shows the battlezone. 
 * Users interaction: Match friendly troops to enemy troops (2,3,...v1s allowed)
 * Both users see a similar battle zone, but only have control over their own troops, ie cannot see enemy's matches.
 * Matching is optional, so the "Battle plan" can be submitted/confirmed while things are unmatched. 
 * 
 *  
 */
import React, { Component } from 'react';

const battleStyle = {
    position: "absolute",
    bottom: "33%",
    left: "37%",
    height: "40%",
    width: "40%",
    backgroundColor: "white",
    zIndex: 4,
    display: "block"
}

const battleHidden = {
    display: 'none'
}

export class BattlePopup extends Component {
  render() {
    return (
      <div style={this.props.gamePhase === 1 ? battleStyle : battleHidden}>
        <p>This is the battle popup</p>
      </div>
    )
  }
}

export default BattlePopup
