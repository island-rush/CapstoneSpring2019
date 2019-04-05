import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Pattern, Text } from 'react-hexgrid';

const imageSize = { x: 3.4, y: 2.75 };
const hexagonSize = { x: 3.15, y: 3.15 };

function patternSelector(pattern, pieces) {
  const highPieces = [0, 1, 2, 3, 4, 5, 10, 17, 18, 22];
  const lowPieces = [6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 19, 20, 21];
  let redHigh = 0;
  let redLow = 0;
  let blueHigh = 0;
  let blueLow = 0;
  if (pieces) {
    for (let x = 0; x < pieces.length; x++) {
      let thisPiece = pieces[x];
      if (thisPiece.pieceTeamId === 0 && highPieces.includes(thisPiece.pieceUnitId)) {
        redHigh = 1;
      }
      if (thisPiece.pieceTeamId === 0 && lowPieces.includes(thisPiece.pieceUnitId)) {
        redLow = 1;
      }
      if (thisPiece.pieceTeamId === 1 && highPieces.includes(thisPiece.pieceUnitId)) {
        blueHigh = 1;
      }
      if (thisPiece.pieceTeamId === 1 && lowPieces.includes(thisPiece.pieceUnitId)) {
        blueLow = 1;
      }
    }
  }
  return pattern + redHigh + redLow + blueHigh + blueLow;
}

function singleHex(id, pattern, x, y, selectPos, selectedPos, pieces, highlighted, highlightedType, plannedPos) {
    return (
        <Hexagon posId={id} q={x} r={y} s={-999} fill={patternSelector(pattern, pieces)} className={plannedPos.includes(id) ? "plannedPos" : (selectedPos === id || (highlighted.includes(id) && (highlightedType === "all" || highlightedType === pattern))) ? "selectedPos" : ""} onClick={selectPos.bind(this, id)}>
          {/* <Text>{id}</Text> */}
        </Hexagon>
    )
}

const gameboardStyle = {
    float: "right",
    marginTop: ".25%",
    marginRight: ".25%",
    backgroundColor: "rgb(93, 115, 240)",
    height: "92%",
    width: "94%",
    zIndex: 0
}

export class Gameboard extends Component {
  render() {
    return (
      <div style={gameboardStyle}>
        <HexGrid width={"100%"} height={"100%"} viewBox="-50 -50 100 100">
          <Layout size={hexagonSize} flat={true} spacing={1.02} origin={{ x: -104, y: -46 }}>
            {singleHex(0, this.props.positionTypes[0], 0, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[0], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(1, this.props.positionTypes[1], 0, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[1], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(2, this.props.positionTypes[2], 0, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[2], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(3, this.props.positionTypes[3], 0, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[3], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(4, this.props.positionTypes[4], 0, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[4], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(5, this.props.positionTypes[5], 0, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[5], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(6, this.props.positionTypes[6], 0, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[6], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(7, this.props.positionTypes[7], 0, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[7], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(8, this.props.positionTypes[8], 0, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[8], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(9, this.props.positionTypes[9], 0, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[9], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(10, this.props.positionTypes[10], 0, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[10], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(11, this.props.positionTypes[11], 0, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[11], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(12, this.props.positionTypes[12], 0, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[12], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(13, this.props.positionTypes[13], 0, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[13], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(14, this.props.positionTypes[14], 1, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[14], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(15, this.props.positionTypes[15], 1, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[15], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(16, this.props.positionTypes[16], 1, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[16], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(17, this.props.positionTypes[17], 1, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[17], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(18, this.props.positionTypes[18], 1, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[18], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(19, this.props.positionTypes[19], 1, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[19], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(20, this.props.positionTypes[20], 1, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[20], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(21, this.props.positionTypes[21], 1, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[21], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(22, this.props.positionTypes[22], 1, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[22], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(23, this.props.positionTypes[23], 1, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[23], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(24, this.props.positionTypes[24], 1, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[24], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(25, this.props.positionTypes[25], 1, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[25], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(26, this.props.positionTypes[26], 1, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[26], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(27, this.props.positionTypes[27], 2, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[27], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(28, this.props.positionTypes[28], 2, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[28], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(29, this.props.positionTypes[29], 2, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[29], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(30, this.props.positionTypes[30], 2, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[30], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(31, this.props.positionTypes[31], 2, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[31], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(32, this.props.positionTypes[32], 2, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[32], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(33, this.props.positionTypes[33], 2, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[33], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(34, this.props.positionTypes[34], 2, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[34], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(35, this.props.positionTypes[35], 2, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[35], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(36, this.props.positionTypes[36], 2, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[36], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(37, this.props.positionTypes[37], 2, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[37], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(38, this.props.positionTypes[38], 2, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[38], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(39, this.props.positionTypes[39], 2, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[39], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(40, this.props.positionTypes[40], 2, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[40], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(41, this.props.positionTypes[41], 3, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[41], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(42, this.props.positionTypes[42], 3, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[42], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(43, this.props.positionTypes[43], 3, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[43], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(44, this.props.positionTypes[44], 3, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[44], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(45, this.props.positionTypes[45], 3, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[45], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(46, this.props.positionTypes[46], 3, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[46], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(47, this.props.positionTypes[47], 3, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[47], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(48, this.props.positionTypes[48], 3, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[48], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(49, this.props.positionTypes[49], 3, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[49], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(50, this.props.positionTypes[50], 3, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[50], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(51, this.props.positionTypes[51], 3, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[51], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(52, this.props.positionTypes[52], 3, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[52], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(53, this.props.positionTypes[53], 3, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[53], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(54, this.props.positionTypes[54], 4, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[54], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(55, this.props.positionTypes[55], 4, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[55], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(56, this.props.positionTypes[56], 4, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[56], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(57, this.props.positionTypes[57], 4, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[57], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(58, this.props.positionTypes[58], 4, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[58], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(59, this.props.positionTypes[59], 4, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[59], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(60, this.props.positionTypes[60], 4, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[60], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(61, this.props.positionTypes[61], 4, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[61], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(62, this.props.positionTypes[62], 4, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[62], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(63, this.props.positionTypes[63], 4, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[63], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(64, this.props.positionTypes[64], 4, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[64], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(65, this.props.positionTypes[65], 4, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[65], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(66, this.props.positionTypes[66], 4, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[66], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(67, this.props.positionTypes[67], 4, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[67], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(68, this.props.positionTypes[68], 5, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[68], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(69, this.props.positionTypes[69], 5, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[69], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(70, this.props.positionTypes[70], 5, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[70], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(71, this.props.positionTypes[71], 5, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[71], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(72, this.props.positionTypes[72], 5, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[72], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(73, this.props.positionTypes[73], 5, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[73], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(74, this.props.positionTypes[74], 5, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[74], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(75, this.props.positionTypes[75], 5, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[75], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(76, this.props.positionTypes[76], 5, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[76], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(77, this.props.positionTypes[77], 5, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[77], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(78, this.props.positionTypes[78], 5, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[78], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(79, this.props.positionTypes[79], 5, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[79], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(80, this.props.positionTypes[80], 5, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[80], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(81, this.props.positionTypes[81], 6, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[81], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(82, this.props.positionTypes[82], 6, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[82], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(83, this.props.positionTypes[83], 6, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[83], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(84, this.props.positionTypes[84], 6, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[84], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(85, this.props.positionTypes[85], 6, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[85], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(86, this.props.positionTypes[86], 6, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[86], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(87, this.props.positionTypes[87], 6, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[87], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(88, this.props.positionTypes[88], 6, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[88], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(89, this.props.positionTypes[89], 6, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[89], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(90, this.props.positionTypes[90], 6, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[90], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(91, this.props.positionTypes[91], 6, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[91], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(92, this.props.positionTypes[92], 6, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[92], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(93, this.props.positionTypes[93], 6, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[93], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(94, this.props.positionTypes[94], 6, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[94], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(95, this.props.positionTypes[95], 6, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[95], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(96, this.props.positionTypes[96], 6, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[96], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(97, this.props.positionTypes[97], 6, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[97], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(98, this.props.positionTypes[98], 7, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[98], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(99, this.props.positionTypes[99], 7, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[99], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(100, this.props.positionTypes[100], 7, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[100], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(101, this.props.positionTypes[101], 7, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[101], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(102, this.props.positionTypes[102], 7, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[102], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(103, this.props.positionTypes[103], 7, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[103], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(104, this.props.positionTypes[104], 7, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[104], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(105, this.props.positionTypes[105], 7, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[105], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(106, this.props.positionTypes[106], 7, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[106], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(107, this.props.positionTypes[107], 7, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[107], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(108, this.props.positionTypes[108], 7, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[108], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(109, this.props.positionTypes[109], 7, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[109], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(110, this.props.positionTypes[110], 7, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[110], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(111, this.props.positionTypes[111], 7, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[111], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(112, this.props.positionTypes[112], 7, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[112], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(113, this.props.positionTypes[113], 7, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[113], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(114, this.props.positionTypes[114], 7, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[114], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(115, this.props.positionTypes[115], 8, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[115], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(116, this.props.positionTypes[116], 8, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[116], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(117, this.props.positionTypes[117], 8, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[117], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(118, this.props.positionTypes[118], 8, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[118], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(119, this.props.positionTypes[119], 8, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[119], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(120, this.props.positionTypes[120], 8, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[120], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(121, this.props.positionTypes[121], 8, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[121], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(122, this.props.positionTypes[122], 8, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[122], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(123, this.props.positionTypes[123], 8, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[123], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(124, this.props.positionTypes[124], 8, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[124], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(125, this.props.positionTypes[125], 8, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[125], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(126, this.props.positionTypes[126], 8, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[126], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(127, this.props.positionTypes[127], 8, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[127], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(128, this.props.positionTypes[128], 8, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[128], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(129, this.props.positionTypes[129], 8, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[129], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(130, this.props.positionTypes[130], 8, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[130], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(131, this.props.positionTypes[131], 8, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[131], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(132, this.props.positionTypes[132], 9, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[132], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(133, this.props.positionTypes[133], 9, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[133], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(134, this.props.positionTypes[134], 9, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[134], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(135, this.props.positionTypes[135], 9, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[135], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(136, this.props.positionTypes[136], 9, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[136], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(137, this.props.positionTypes[137], 9, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[137], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(138, this.props.positionTypes[138], 9, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[138], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(139, this.props.positionTypes[139], 9, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[139], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(140, this.props.positionTypes[140], 9, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[140], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(141, this.props.positionTypes[141], 9, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[141], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(142, this.props.positionTypes[142], 9, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[142], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(143, this.props.positionTypes[143], 9, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[143], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(144, this.props.positionTypes[144], 9, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[144], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(145, this.props.positionTypes[145], 9, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[145], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(146, this.props.positionTypes[146], 9, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[146], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(147, this.props.positionTypes[147], 9, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[147], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(148, this.props.positionTypes[148], 9, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[148], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(149, this.props.positionTypes[149], 10, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[149], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(150, this.props.positionTypes[150], 10, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[150], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(151, this.props.positionTypes[151], 10, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[151], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(152, this.props.positionTypes[152], 10, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[152], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(153, this.props.positionTypes[153], 10, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[153], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(154, this.props.positionTypes[154], 10, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[154], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(155, this.props.positionTypes[155], 10, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[155], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(156, this.props.positionTypes[156], 10, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[156], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(157, this.props.positionTypes[157], 10, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[157], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(158, this.props.positionTypes[158], 10, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[158], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(159, this.props.positionTypes[159], 10, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[159], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(160, this.props.positionTypes[160], 10, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[160], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(161, this.props.positionTypes[161], 10, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[161], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(162, this.props.positionTypes[162], 10, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[162], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(163, this.props.positionTypes[163], 10, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[163], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(164, this.props.positionTypes[164], 10, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[164], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(165, this.props.positionTypes[165], 10, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[165], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(166, this.props.positionTypes[166], 11, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[166], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(167, this.props.positionTypes[167], 11, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[167], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(168, this.props.positionTypes[168], 11, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[168], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(169, this.props.positionTypes[169], 11, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[169], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(170, this.props.positionTypes[170], 11, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[170], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(171, this.props.positionTypes[171], 11, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[171], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(172, this.props.positionTypes[172], 11, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[172], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(173, this.props.positionTypes[173], 11, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[173], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(174, this.props.positionTypes[174], 11, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[174], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(175, this.props.positionTypes[175], 11, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[175], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(176, this.props.positionTypes[176], 11, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[176], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(177, this.props.positionTypes[177], 11, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[177], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(178, this.props.positionTypes[178], 11, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[178], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(179, this.props.positionTypes[179], 11, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[179], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(180, this.props.positionTypes[180], 11, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[180], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(181, this.props.positionTypes[181], 11, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[181], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(182, this.props.positionTypes[182], 11, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[182], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(183, this.props.positionTypes[183], 12, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[183], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(184, this.props.positionTypes[184], 12, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[184], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(185, this.props.positionTypes[185], 12, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[185], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(186, this.props.positionTypes[186], 12, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[186], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(187, this.props.positionTypes[187], 12, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[187], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(188, this.props.positionTypes[188], 12, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[188], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(189, this.props.positionTypes[189], 12, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[189], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(190, this.props.positionTypes[190], 12, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[190], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(191, this.props.positionTypes[191], 12, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[191], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(192, this.props.positionTypes[192], 12, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[192], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(193, this.props.positionTypes[193], 12, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[193], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(194, this.props.positionTypes[194], 12, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[194], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(195, this.props.positionTypes[195], 12, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[195], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(196, this.props.positionTypes[196], 12, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[196], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(197, this.props.positionTypes[197], 12, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[197], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(198, this.props.positionTypes[198], 12, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[198], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(199, this.props.positionTypes[199], 12, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[199], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(200, this.props.positionTypes[200], 13, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[200], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(201, this.props.positionTypes[201], 13, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[201], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(202, this.props.positionTypes[202], 13, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[202], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(203, this.props.positionTypes[203], 13, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[203], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(204, this.props.positionTypes[204], 13, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[204], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(205, this.props.positionTypes[205], 13, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[205], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(206, this.props.positionTypes[206], 13, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[206], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(207, this.props.positionTypes[207], 13, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[207], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(208, this.props.positionTypes[208], 13, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[208], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(209, this.props.positionTypes[209], 13, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[209], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(210, this.props.positionTypes[210], 13, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[210], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(211, this.props.positionTypes[211], 13, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[211], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(212, this.props.positionTypes[212], 13, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[212], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(213, this.props.positionTypes[213], 13, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[213], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(214, this.props.positionTypes[214], 13, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[214], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(215, this.props.positionTypes[215], 13, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[215], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(216, this.props.positionTypes[216], 13, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[216], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(217, this.props.positionTypes[217], 14, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[217], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(218, this.props.positionTypes[218], 14, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[218], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(219, this.props.positionTypes[219], 14, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[219], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(220, this.props.positionTypes[220], 14, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[220], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(221, this.props.positionTypes[221], 14, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[221], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(222, this.props.positionTypes[222], 14, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[222], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(223, this.props.positionTypes[223], 14, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[223], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(224, this.props.positionTypes[224], 14, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[224], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(225, this.props.positionTypes[225], 14, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[225], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(226, this.props.positionTypes[226], 14, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[226], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(227, this.props.positionTypes[227], 14, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[227], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(228, this.props.positionTypes[228], 14, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[228], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(229, this.props.positionTypes[229], 14, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[229], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(230, this.props.positionTypes[230], 14, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[230], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(231, this.props.positionTypes[231], 14, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[231], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(232, this.props.positionTypes[232], 14, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[232], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(233, this.props.positionTypes[233], 14, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[233], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(234, this.props.positionTypes[234], 15, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[234], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(235, this.props.positionTypes[235], 15, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[235], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(236, this.props.positionTypes[236], 15, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[236], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(237, this.props.positionTypes[237], 15, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[237], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(238, this.props.positionTypes[238], 15, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[238], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(239, this.props.positionTypes[239], 15, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[239], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(240, this.props.positionTypes[240], 15, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[240], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(241, this.props.positionTypes[241], 15, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[241], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(242, this.props.positionTypes[242], 15, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[242], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(243, this.props.positionTypes[243], 15, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[243], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(244, this.props.positionTypes[244], 15, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[244], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(245, this.props.positionTypes[245], 15, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[245], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(246, this.props.positionTypes[246], 15, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[246], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(247, this.props.positionTypes[247], 15, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[247], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(248, this.props.positionTypes[248], 15, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[248], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(249, this.props.positionTypes[249], 15, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[249], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(250, this.props.positionTypes[250], 15, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[250], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(251, this.props.positionTypes[251], 16, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[251], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(252, this.props.positionTypes[252], 16, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[252], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(253, this.props.positionTypes[253], 16, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[253], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(254, this.props.positionTypes[254], 16, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[254], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(255, this.props.positionTypes[255], 16, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[255], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(256, this.props.positionTypes[256], 16, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[256], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(257, this.props.positionTypes[257], 16, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[257], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(258, this.props.positionTypes[258], 16, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[258], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(259, this.props.positionTypes[259], 16, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[259], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(260, this.props.positionTypes[260], 16, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[260], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(261, this.props.positionTypes[261], 16, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[261], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(262, this.props.positionTypes[262], 16, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[262], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(263, this.props.positionTypes[263], 16, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[263], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(264, this.props.positionTypes[264], 16, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[264], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(265, this.props.positionTypes[265], 16, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[265], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(266, this.props.positionTypes[266], 16, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[266], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(267, this.props.positionTypes[267], 16, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[267], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(268, this.props.positionTypes[268], 17, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[268], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(269, this.props.positionTypes[269], 17, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[269], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(270, this.props.positionTypes[270], 17, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[270], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(271, this.props.positionTypes[271], 17, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[271], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(272, this.props.positionTypes[272], 17, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[272], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(273, this.props.positionTypes[273], 17, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[273], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(274, this.props.positionTypes[274], 17, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[274], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(275, this.props.positionTypes[275], 17, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[275], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(276, this.props.positionTypes[276], 17, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[276], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(277, this.props.positionTypes[277], 17, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[277], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(278, this.props.positionTypes[278], 17, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[278], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(279, this.props.positionTypes[279], 17, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[279], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(280, this.props.positionTypes[280], 17, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[280], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(281, this.props.positionTypes[281], 17, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[281], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(282, this.props.positionTypes[282], 17, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[282], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(283, this.props.positionTypes[283], 17, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[283], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(284, this.props.positionTypes[284], 17, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[284], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(285, this.props.positionTypes[285], 18, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[285], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(286, this.props.positionTypes[286], 18, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[286], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(287, this.props.positionTypes[287], 18, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[287], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(288, this.props.positionTypes[288], 18, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[288], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(289, this.props.positionTypes[289], 18, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[289], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(290, this.props.positionTypes[290], 18, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[290], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(291, this.props.positionTypes[291], 18, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[291], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(292, this.props.positionTypes[292], 18, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[292], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(293, this.props.positionTypes[293], 18, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[293], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(294, this.props.positionTypes[294], 18, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[294], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(295, this.props.positionTypes[295], 18, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[295], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(296, this.props.positionTypes[296], 18, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[296], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(297, this.props.positionTypes[297], 18, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[297], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(298, this.props.positionTypes[298], 18, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[298], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(299, this.props.positionTypes[299], 18, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[299], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(300, this.props.positionTypes[300], 18, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[300], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(301, this.props.positionTypes[301], 18, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[301], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(302, this.props.positionTypes[302], 19, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[302], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(303, this.props.positionTypes[303], 19, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[303], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(304, this.props.positionTypes[304], 19, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[304], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(305, this.props.positionTypes[305], 19, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[305], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(306, this.props.positionTypes[306], 19, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[306], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(307, this.props.positionTypes[307], 19, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[307], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(308, this.props.positionTypes[308], 19, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[308], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(309, this.props.positionTypes[309], 19, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[309], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(310, this.props.positionTypes[310], 19, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[310], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(311, this.props.positionTypes[311], 19, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[311], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(312, this.props.positionTypes[312], 19, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[312], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(313, this.props.positionTypes[313], 19, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[313], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(314, this.props.positionTypes[314], 19, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[314], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(315, this.props.positionTypes[315], 19, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[315], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(316, this.props.positionTypes[316], 19, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[316], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(317, this.props.positionTypes[317], 19, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[317], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(318, this.props.positionTypes[318], 19, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[318], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(319, this.props.positionTypes[319], 20, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[319], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(320, this.props.positionTypes[320], 20, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[320], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(321, this.props.positionTypes[321], 20, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[321], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(322, this.props.positionTypes[322], 20, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[322], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(323, this.props.positionTypes[323], 20, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[323], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(324, this.props.positionTypes[324], 20, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[324], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(325, this.props.positionTypes[325], 20, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[325], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(326, this.props.positionTypes[326], 20, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[326], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(327, this.props.positionTypes[327], 20, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[327], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(328, this.props.positionTypes[328], 20, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[328], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(329, this.props.positionTypes[329], 20, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[329], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(330, this.props.positionTypes[330], 20, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[330], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(331, this.props.positionTypes[331], 20, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[331], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(332, this.props.positionTypes[332], 20, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[332], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(333, this.props.positionTypes[333], 20, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[333], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(334, this.props.positionTypes[334], 20, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[334], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(335, this.props.positionTypes[335], 20, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[335], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(336, this.props.positionTypes[336], 21, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[336], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(337, this.props.positionTypes[337], 21, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[337], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(338, this.props.positionTypes[338], 21, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[338], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(339, this.props.positionTypes[339], 21, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[339], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(340, this.props.positionTypes[340], 21, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[340], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(341, this.props.positionTypes[341], 21, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[341], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(342, this.props.positionTypes[342], 21, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[342], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(343, this.props.positionTypes[343], 21, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[343], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(344, this.props.positionTypes[344], 21, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[344], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(345, this.props.positionTypes[345], 21, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[345], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(346, this.props.positionTypes[346], 21, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[346], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(347, this.props.positionTypes[347], 21, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[347], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(348, this.props.positionTypes[348], 21, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[348], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(349, this.props.positionTypes[349], 21, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[349], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(350, this.props.positionTypes[350], 21, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[350], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(351, this.props.positionTypes[351], 21, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[351], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(352, this.props.positionTypes[352], 21, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[352], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(353, this.props.positionTypes[353], 22, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[353], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(354, this.props.positionTypes[354], 22, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[354], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(355, this.props.positionTypes[355], 22, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[355], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(356, this.props.positionTypes[356], 22, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[356], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(357, this.props.positionTypes[357], 22, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[357], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(358, this.props.positionTypes[358], 22, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[358], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(359, this.props.positionTypes[359], 22, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[359], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(360, this.props.positionTypes[360], 22, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[360], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(361, this.props.positionTypes[361], 22, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[361], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(362, this.props.positionTypes[362], 22, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[362], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(363, this.props.positionTypes[363], 22, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[363], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(364, this.props.positionTypes[364], 22, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[364], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(365, this.props.positionTypes[365], 22, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[365], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(366, this.props.positionTypes[366], 22, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[366], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(367, this.props.positionTypes[367], 22, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[367], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(368, this.props.positionTypes[368], 22, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[368], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(369, this.props.positionTypes[369], 22, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[369], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(370, this.props.positionTypes[370], 23, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[370], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(371, this.props.positionTypes[371], 23, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[371], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(372, this.props.positionTypes[372], 23, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[372], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(373, this.props.positionTypes[373], 23, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[373], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(374, this.props.positionTypes[374], 23, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[374], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(375, this.props.positionTypes[375], 23, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[375], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(376, this.props.positionTypes[376], 23, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[376], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(377, this.props.positionTypes[377], 23, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[377], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(378, this.props.positionTypes[378], 23, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[378], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(379, this.props.positionTypes[379], 23, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[379], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(380, this.props.positionTypes[380], 23, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[380], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(381, this.props.positionTypes[381], 23, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[381], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(382, this.props.positionTypes[382], 23, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[382], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(383, this.props.positionTypes[383], 23, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[383], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(384, this.props.positionTypes[384], 23, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[384], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(385, this.props.positionTypes[385], 23, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[385], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(386, this.props.positionTypes[386], 23, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[386], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(387, this.props.positionTypes[387], 24, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[387], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(388, this.props.positionTypes[388], 24, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[388], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(389, this.props.positionTypes[389], 24, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[389], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(390, this.props.positionTypes[390], 24, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[390], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(391, this.props.positionTypes[391], 24, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[391], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(392, this.props.positionTypes[392], 24, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[392], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(393, this.props.positionTypes[393], 24, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[393], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(394, this.props.positionTypes[394], 24, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[394], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(395, this.props.positionTypes[395], 24, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[395], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(396, this.props.positionTypes[396], 24, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[396], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(397, this.props.positionTypes[397], 24, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[397], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(398, this.props.positionTypes[398], 24, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[398], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(399, this.props.positionTypes[399], 24, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[399], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(400, this.props.positionTypes[400], 24, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[400], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(401, this.props.positionTypes[401], 24, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[401], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(402, this.props.positionTypes[402], 24, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[402], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(403, this.props.positionTypes[403], 24, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[403], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(404, this.props.positionTypes[404], 25, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[404], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(405, this.props.positionTypes[405], 25, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[405], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(406, this.props.positionTypes[406], 25, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[406], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(407, this.props.positionTypes[407], 25, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[407], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(408, this.props.positionTypes[408], 25, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[408], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(409, this.props.positionTypes[409], 25, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[409], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(410, this.props.positionTypes[410], 25, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[410], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(411, this.props.positionTypes[411], 25, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[411], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(412, this.props.positionTypes[412], 25, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[412], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(413, this.props.positionTypes[413], 25, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[413], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(414, this.props.positionTypes[414], 25, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[414], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(415, this.props.positionTypes[415], 25, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[415], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(416, this.props.positionTypes[416], 25, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[416], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(417, this.props.positionTypes[417], 25, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[417], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(418, this.props.positionTypes[418], 25, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[418], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(419, this.props.positionTypes[419], 25, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[419], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(420, this.props.positionTypes[420], 25, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[420], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(421, this.props.positionTypes[421], 26, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[421], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(422, this.props.positionTypes[422], 26, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[422], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(423, this.props.positionTypes[423], 26, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[423], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(424, this.props.positionTypes[424], 26, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[424], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(425, this.props.positionTypes[425], 26, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[425], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(426, this.props.positionTypes[426], 26, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[426], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(427, this.props.positionTypes[427], 26, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[427], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(428, this.props.positionTypes[428], 26, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[428], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(429, this.props.positionTypes[429], 26, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[429], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(430, this.props.positionTypes[430], 26, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[430], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(431, this.props.positionTypes[431], 26, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[431], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(432, this.props.positionTypes[432], 26, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[432], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(433, this.props.positionTypes[433], 26, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[433], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(434, this.props.positionTypes[434], 26, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[434], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(435, this.props.positionTypes[435], 26, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[435], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(436, this.props.positionTypes[436], 26, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[436], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(437, this.props.positionTypes[437], 26, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[437], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(438, this.props.positionTypes[438], 27, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[438], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(439, this.props.positionTypes[439], 27, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[439], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(440, this.props.positionTypes[440], 27, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[440], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(441, this.props.positionTypes[441], 27, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[441], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(442, this.props.positionTypes[442], 27, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[442], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(443, this.props.positionTypes[443], 27, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[443], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(444, this.props.positionTypes[444], 27, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[444], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(445, this.props.positionTypes[445], 27, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[445], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(446, this.props.positionTypes[446], 27, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[446], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(447, this.props.positionTypes[447], 27, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[447], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(448, this.props.positionTypes[448], 27, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[448], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(449, this.props.positionTypes[449], 27, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[449], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(450, this.props.positionTypes[450], 27, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[450], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(451, this.props.positionTypes[451], 27, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[451], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(452, this.props.positionTypes[452], 27, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[452], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(453, this.props.positionTypes[453], 27, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[453], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(454, this.props.positionTypes[454], 27, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[454], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(455, this.props.positionTypes[455], 28, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[455], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(456, this.props.positionTypes[456], 28, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[456], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(457, this.props.positionTypes[457], 28, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[457], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(458, this.props.positionTypes[458], 28, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[458], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(459, this.props.positionTypes[459], 28, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[459], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(460, this.props.positionTypes[460], 28, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[460], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(461, this.props.positionTypes[461], 28, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[461], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(462, this.props.positionTypes[462], 28, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[462], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(463, this.props.positionTypes[463], 28, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[463], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(464, this.props.positionTypes[464], 28, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[464], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(465, this.props.positionTypes[465], 28, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[465], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(466, this.props.positionTypes[466], 28, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[466], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(467, this.props.positionTypes[467], 28, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[467], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(468, this.props.positionTypes[468], 28, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[468], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(469, this.props.positionTypes[469], 28, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[469], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(470, this.props.positionTypes[470], 28, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[470], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(471, this.props.positionTypes[471], 28, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[471], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(472, this.props.positionTypes[472], 29, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[472], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(473, this.props.positionTypes[473], 29, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[473], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(474, this.props.positionTypes[474], 29, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[474], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(475, this.props.positionTypes[475], 29, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[475], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(476, this.props.positionTypes[476], 29, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[476], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(477, this.props.positionTypes[477], 29, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[477], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(478, this.props.positionTypes[478], 29, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[478], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(479, this.props.positionTypes[479], 29, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[479], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(480, this.props.positionTypes[480], 29, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[480], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(481, this.props.positionTypes[481], 29, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[481], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(482, this.props.positionTypes[482], 29, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[482], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(483, this.props.positionTypes[483], 29, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[483], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(484, this.props.positionTypes[484], 29, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[484], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(485, this.props.positionTypes[485], 29, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[485], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(486, this.props.positionTypes[486], 29, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[486], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(487, this.props.positionTypes[487], 29, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[487], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(488, this.props.positionTypes[488], 29, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[488], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(489, this.props.positionTypes[489], 30, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[489], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(490, this.props.positionTypes[490], 30, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[490], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(491, this.props.positionTypes[491], 30, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[491], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(492, this.props.positionTypes[492], 30, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[492], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(493, this.props.positionTypes[493], 30, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[493], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(494, this.props.positionTypes[494], 30, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[494], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(495, this.props.positionTypes[495], 30, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[495], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(496, this.props.positionTypes[496], 30, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[496], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(497, this.props.positionTypes[497], 30, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[497], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(498, this.props.positionTypes[498], 30, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[498], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(499, this.props.positionTypes[499], 30, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[499], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(500, this.props.positionTypes[500], 30, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[500], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(501, this.props.positionTypes[501], 30, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[501], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(502, this.props.positionTypes[502], 30, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[502], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(503, this.props.positionTypes[503], 30, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[503], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(504, this.props.positionTypes[504], 30, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[504], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(505, this.props.positionTypes[505], 30, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[505], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(506, this.props.positionTypes[506], 31, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[506], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(507, this.props.positionTypes[507], 31, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[507], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(508, this.props.positionTypes[508], 31, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[508], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(509, this.props.positionTypes[509], 31, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[509], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(510, this.props.positionTypes[510], 31, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[510], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(511, this.props.positionTypes[511], 31, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[511], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(512, this.props.positionTypes[512], 31, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[512], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(513, this.props.positionTypes[513], 31, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[513], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(514, this.props.positionTypes[514], 31, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[514], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(515, this.props.positionTypes[515], 31, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[515], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(516, this.props.positionTypes[516], 31, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[516], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(517, this.props.positionTypes[517], 31, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[517], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(518, this.props.positionTypes[518], 31, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[518], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(519, this.props.positionTypes[519], 31, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[519], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(520, this.props.positionTypes[520], 31, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[520], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(521, this.props.positionTypes[521], 31, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[521], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(522, this.props.positionTypes[522], 31, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[522], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(523, this.props.positionTypes[523], 32, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[523], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(524, this.props.positionTypes[524], 32, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[524], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(525, this.props.positionTypes[525], 32, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[525], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(526, this.props.positionTypes[526], 32, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[526], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(527, this.props.positionTypes[527], 32, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[527], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(528, this.props.positionTypes[528], 32, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[528], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(529, this.props.positionTypes[529], 32, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[529], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(530, this.props.positionTypes[530], 32, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[530], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(531, this.props.positionTypes[531], 32, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[531], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(532, this.props.positionTypes[532], 32, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[532], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(533, this.props.positionTypes[533], 32, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[533], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(534, this.props.positionTypes[534], 32, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[534], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(535, this.props.positionTypes[535], 32, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[535], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(536, this.props.positionTypes[536], 32, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[536], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(537, this.props.positionTypes[537], 32, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[537], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(538, this.props.positionTypes[538], 32, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[538], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(539, this.props.positionTypes[539], 32, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[539], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(540, this.props.positionTypes[540], 33, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[540], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(541, this.props.positionTypes[541], 33, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[541], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(542, this.props.positionTypes[542], 33, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[542], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(543, this.props.positionTypes[543], 33, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[543], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(544, this.props.positionTypes[544], 33, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[544], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(545, this.props.positionTypes[545], 33, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[545], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(546, this.props.positionTypes[546], 33, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[546], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(547, this.props.positionTypes[547], 33, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[547], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(548, this.props.positionTypes[548], 33, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[548], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(549, this.props.positionTypes[549], 33, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[549], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(550, this.props.positionTypes[550], 33, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[550], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(551, this.props.positionTypes[551], 33, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[551], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(552, this.props.positionTypes[552], 33, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[552], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(553, this.props.positionTypes[553], 33, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[553], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(554, this.props.positionTypes[554], 33, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[554], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(555, this.props.positionTypes[555], 33, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[555], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(556, this.props.positionTypes[556], 33, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[556], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(557, this.props.positionTypes[557], 34, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[557], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(558, this.props.positionTypes[558], 34, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[558], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(559, this.props.positionTypes[559], 34, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[559], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(560, this.props.positionTypes[560], 34, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[560], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(561, this.props.positionTypes[561], 34, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[561], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(562, this.props.positionTypes[562], 34, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[562], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(563, this.props.positionTypes[563], 34, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[563], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(564, this.props.positionTypes[564], 34, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[564], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(565, this.props.positionTypes[565], 34, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[565], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(566, this.props.positionTypes[566], 34, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[566], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(567, this.props.positionTypes[567], 34, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[567], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(568, this.props.positionTypes[568], 34, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[568], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(569, this.props.positionTypes[569], 34, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[569], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(570, this.props.positionTypes[570], 34, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[570], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(571, this.props.positionTypes[571], 34, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[571], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(572, this.props.positionTypes[572], 34, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[572], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(573, this.props.positionTypes[573], 34, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[573], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(574, this.props.positionTypes[574], 35, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[574], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(575, this.props.positionTypes[575], 35, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[575], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(576, this.props.positionTypes[576], 35, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[576], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(577, this.props.positionTypes[577], 35, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[577], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(578, this.props.positionTypes[578], 35, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[578], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(579, this.props.positionTypes[579], 35, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[579], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(580, this.props.positionTypes[580], 35, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[580], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(581, this.props.positionTypes[581], 35, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[581], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(582, this.props.positionTypes[582], 35, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[582], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(583, this.props.positionTypes[583], 35, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[583], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(584, this.props.positionTypes[584], 35, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[584], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(585, this.props.positionTypes[585], 35, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[585], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(586, this.props.positionTypes[586], 35, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[586], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(587, this.props.positionTypes[587], 35, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[587], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(588, this.props.positionTypes[588], 35, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[588], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(589, this.props.positionTypes[589], 35, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[589], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(590, this.props.positionTypes[590], 35, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[590], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(591, this.props.positionTypes[591], 36, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[591], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(592, this.props.positionTypes[592], 36, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[592], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(593, this.props.positionTypes[593], 36, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[593], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(594, this.props.positionTypes[594], 36, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[594], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(595, this.props.positionTypes[595], 36, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[595], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(596, this.props.positionTypes[596], 36, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[596], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(597, this.props.positionTypes[597], 36, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[597], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(598, this.props.positionTypes[598], 36, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[598], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(599, this.props.positionTypes[599], 36, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[599], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(600, this.props.positionTypes[600], 36, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[600], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(601, this.props.positionTypes[601], 36, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[601], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(602, this.props.positionTypes[602], 36, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[602], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(603, this.props.positionTypes[603], 36, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[603], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(604, this.props.positionTypes[604], 36, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[604], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(605, this.props.positionTypes[605], 36, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[605], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(606, this.props.positionTypes[606], 36, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[606], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(607, this.props.positionTypes[607], 36, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[607], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(608, this.props.positionTypes[608], 37, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[608], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(609, this.props.positionTypes[609], 37, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[609], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(610, this.props.positionTypes[610], 37, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[610], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(611, this.props.positionTypes[611], 37, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[611], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(612, this.props.positionTypes[612], 37, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[612], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(613, this.props.positionTypes[613], 37, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[613], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(614, this.props.positionTypes[614], 37, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[614], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(615, this.props.positionTypes[615], 37, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[615], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(616, this.props.positionTypes[616], 37, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[616], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(617, this.props.positionTypes[617], 37, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[617], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(618, this.props.positionTypes[618], 37, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[618], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(619, this.props.positionTypes[619], 37, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[619], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(620, this.props.positionTypes[620], 37, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[620], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(621, this.props.positionTypes[621], 37, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[621], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(622, this.props.positionTypes[622], 37, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[622], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(623, this.props.positionTypes[623], 37, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[623], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(624, this.props.positionTypes[624], 37, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[624], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(625, this.props.positionTypes[625], 38, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[625], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(626, this.props.positionTypes[626], 38, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[626], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(627, this.props.positionTypes[627], 38, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[627], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(628, this.props.positionTypes[628], 38, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[628], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(629, this.props.positionTypes[629], 38, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[629], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(630, this.props.positionTypes[630], 38, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[630], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(631, this.props.positionTypes[631], 38, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[631], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(632, this.props.positionTypes[632], 38, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[632], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(633, this.props.positionTypes[633], 38, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[633], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(634, this.props.positionTypes[634], 38, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[634], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(635, this.props.positionTypes[635], 38, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[635], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(636, this.props.positionTypes[636], 38, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[636], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(637, this.props.positionTypes[637], 38, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[637], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(638, this.props.positionTypes[638], 38, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[638], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(639, this.props.positionTypes[639], 38, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[639], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(640, this.props.positionTypes[640], 38, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[640], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(641, this.props.positionTypes[641], 38, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[641], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(642, this.props.positionTypes[642], 39, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[642], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(643, this.props.positionTypes[643], 39, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[643], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(644, this.props.positionTypes[644], 39, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[644], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(645, this.props.positionTypes[645], 39, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[645], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(646, this.props.positionTypes[646], 39, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[646], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(647, this.props.positionTypes[647], 39, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[647], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(648, this.props.positionTypes[648], 39, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[648], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(649, this.props.positionTypes[649], 39, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[649], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(650, this.props.positionTypes[650], 39, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[650], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(651, this.props.positionTypes[651], 39, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[651], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(652, this.props.positionTypes[652], 39, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[652], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(653, this.props.positionTypes[653], 39, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[653], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(654, this.props.positionTypes[654], 39, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[654], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(655, this.props.positionTypes[655], 39, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[655], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(656, this.props.positionTypes[656], 39, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[656], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(657, this.props.positionTypes[657], 39, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[657], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(658, this.props.positionTypes[658], 39, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[658], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(659, this.props.positionTypes[659], 40, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[659], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(660, this.props.positionTypes[660], 40, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[660], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(661, this.props.positionTypes[661], 40, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[661], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(662, this.props.positionTypes[662], 40, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[662], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(663, this.props.positionTypes[663], 40, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[663], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(664, this.props.positionTypes[664], 40, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[664], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(665, this.props.positionTypes[665], 40, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[665], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(666, this.props.positionTypes[666], 40, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[666], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(667, this.props.positionTypes[667], 40, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[667], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(668, this.props.positionTypes[668], 40, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[668], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(669, this.props.positionTypes[669], 40, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[669], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(670, this.props.positionTypes[670], 40, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[670], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(671, this.props.positionTypes[671], 40, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[671], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(672, this.props.positionTypes[672], 40, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[672], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(673, this.props.positionTypes[673], 40, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[673], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(674, this.props.positionTypes[674], 40, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[674], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(675, this.props.positionTypes[675], 40, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[675], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(676, this.props.positionTypes[676], 41, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[676], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(677, this.props.positionTypes[677], 41, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[677], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(678, this.props.positionTypes[678], 41, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[678], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(679, this.props.positionTypes[679], 41, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[679], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(680, this.props.positionTypes[680], 41, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[680], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(681, this.props.positionTypes[681], 41, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[681], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(682, this.props.positionTypes[682], 41, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[682], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(683, this.props.positionTypes[683], 41, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[683], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(684, this.props.positionTypes[684], 41, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[684], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(685, this.props.positionTypes[685], 41, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[685], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(686, this.props.positionTypes[686], 41, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[686], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(687, this.props.positionTypes[687], 41, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[687], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(688, this.props.positionTypes[688], 41, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[688], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(689, this.props.positionTypes[689], 41, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[689], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(690, this.props.positionTypes[690], 41, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[690], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(691, this.props.positionTypes[691], 41, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[691], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(692, this.props.positionTypes[692], 41, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[692], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(693, this.props.positionTypes[693], 42, -21, this.props.selectPos, this.props.selectedPos, this.props.positions[693], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(694, this.props.positionTypes[694], 42, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[694], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(695, this.props.positionTypes[695], 42, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[695], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(696, this.props.positionTypes[696], 42, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[696], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(697, this.props.positionTypes[697], 42, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[697], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(698, this.props.positionTypes[698], 42, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[698], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(699, this.props.positionTypes[699], 42, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[699], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(700, this.props.positionTypes[700], 42, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[700], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(701, this.props.positionTypes[701], 42, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[701], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(702, this.props.positionTypes[702], 42, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[702], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(703, this.props.positionTypes[703], 42, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[703], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(704, this.props.positionTypes[704], 42, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[704], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(705, this.props.positionTypes[705], 42, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[705], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(706, this.props.positionTypes[706], 42, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[706], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(707, this.props.positionTypes[707], 42, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[707], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(708, this.props.positionTypes[708], 42, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[708], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(709, this.props.positionTypes[709], 42, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[709], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(710, this.props.positionTypes[710], 43, -21, this.props.selectPos, this.props.selectedPos, this.props.positions[710], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(711, this.props.positionTypes[711], 43, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[711], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(712, this.props.positionTypes[712], 43, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[712], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(713, this.props.positionTypes[713], 43, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[713], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(714, this.props.positionTypes[714], 43, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[714], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(715, this.props.positionTypes[715], 43, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[715], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(716, this.props.positionTypes[716], 43, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[716], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(717, this.props.positionTypes[717], 43, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[717], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(718, this.props.positionTypes[718], 43, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[718], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(719, this.props.positionTypes[719], 43, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[719], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(720, this.props.positionTypes[720], 43, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[720], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(721, this.props.positionTypes[721], 43, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[721], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(722, this.props.positionTypes[722], 43, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[722], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(723, this.props.positionTypes[723], 43, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[723], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(724, this.props.positionTypes[724], 43, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[724], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(725, this.props.positionTypes[725], 43, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[725], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
            {singleHex(726, this.props.positionTypes[726], 43, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[726], this.props.highlighted, this.props.highlightedType, this.props.plannedPos)}
          </Layout>
          <Pattern id="land0000" link="./images/positionImages/land0000.png" size={imageSize} />
          <Pattern id="land0001" link="./images/positionImages/land0001.png" size={imageSize} />
          <Pattern id="land0010" link="./images/positionImages/land0010.png" size={imageSize} />
          <Pattern id="land0011" link="./images/positionImages/land0011.png" size={imageSize} />
          <Pattern id="land0100" link="./images/positionImages/land0100.png" size={imageSize} />
          <Pattern id="land0101" link="./images/positionImages/land0101.png" size={imageSize} />
          <Pattern id="land0110" link="./images/positionImages/land0110.png" size={imageSize} />
          <Pattern id="land0111" link="./images/positionImages/land0111.png" size={imageSize} />
          <Pattern id="land1000" link="./images/positionImages/land1000.png" size={imageSize} />
          <Pattern id="land1001" link="./images/positionImages/land1001.png" size={imageSize} />
          <Pattern id="land1010" link="./images/positionImages/land1010.png" size={imageSize} />
          <Pattern id="land1011" link="./images/positionImages/land1011.png" size={imageSize} />
          <Pattern id="land1100" link="./images/positionImages/land1100.png" size={imageSize} />
          <Pattern id="land1101" link="./images/positionImages/land1101.png" size={imageSize} />
          <Pattern id="land1110" link="./images/positionImages/land1110.png" size={imageSize} />
          <Pattern id="land1111" link="./images/positionImages/land1111.png" size={imageSize} />
          <Pattern id="water0000" link="./images/positionImages/water0000.png" size={imageSize} />
          <Pattern id="water0001" link="./images/positionImages/water0001.png" size={imageSize} />
          <Pattern id="water0010" link="./images/positionImages/water0010.png" size={imageSize} />
          <Pattern id="water0011" link="./images/positionImages/water0011.png" size={imageSize} />
          <Pattern id="water0100" link="./images/positionImages/water0100.png" size={imageSize} />
          <Pattern id="water0101" link="./images/positionImages/water0101.png" size={imageSize} />
          <Pattern id="water0110" link="./images/positionImages/water0110.png" size={imageSize} />
          <Pattern id="water0111" link="./images/positionImages/water0111.png" size={imageSize} />
          <Pattern id="water1000" link="./images/positionImages/water1000.png" size={imageSize} />
          <Pattern id="water1001" link="./images/positionImages/water1001.png" size={imageSize} />
          <Pattern id="water1010" link="./images/positionImages/water1010.png" size={imageSize} />
          <Pattern id="water1011" link="./images/positionImages/water1011.png" size={imageSize} />
          <Pattern id="water1100" link="./images/positionImages/water1100.png" size={imageSize} />
          <Pattern id="water1101" link="./images/positionImages/water1101.png" size={imageSize} />
          <Pattern id="water1110" link="./images/positionImages/water1110.png" size={imageSize} />
          <Pattern id="water1111" link="./images/positionImages/water1111.png" size={imageSize} />
          <Pattern id="flag0000" link="./images/positionImages/flag0000.png" size={imageSize} />
          <Pattern id="flag0001" link="./images/positionImages/flag0001.png" size={imageSize} />
          <Pattern id="flag0010" link="./images/positionImages/flag0010.png" size={imageSize} />
          <Pattern id="flag0011" link="./images/positionImages/flag0011.png" size={imageSize} />
          <Pattern id="flag0100" link="./images/positionImages/flag0100.png" size={imageSize} />
          <Pattern id="flag0101" link="./images/positionImages/flag0101.png" size={imageSize} />
          <Pattern id="flag0110" link="./images/positionImages/flag0110.png" size={imageSize} />
          <Pattern id="flag0111" link="./images/positionImages/flag0111.png" size={imageSize} />
          <Pattern id="flag1000" link="./images/positionImages/flag1000.png" size={imageSize} />
          <Pattern id="flag1001" link="./images/positionImages/flag1001.png" size={imageSize} />
          <Pattern id="flag1010" link="./images/positionImages/flag1010.png" size={imageSize} />
          <Pattern id="flag1011" link="./images/positionImages/flag1011.png" size={imageSize} />
          <Pattern id="flag1100" link="./images/positionImages/flag1100.png" size={imageSize} />
          <Pattern id="flag1101" link="./images/positionImages/flag1101.png" size={imageSize} />
          <Pattern id="flag1110" link="./images/positionImages/flag1110.png" size={imageSize} />
          <Pattern id="flag1111" link="./images/positionImages/flag1111.png" size={imageSize} />
          <Pattern id="red0000" link="./images/positionImages/red0000.png" size={imageSize} />
          <Pattern id="red0001" link="./images/positionImages/red0001.png" size={imageSize} />
          <Pattern id="red0010" link="./images/positionImages/red0010.png" size={imageSize} />
          <Pattern id="red0011" link="./images/positionImages/red0011.png" size={imageSize} />
          <Pattern id="red0100" link="./images/positionImages/red0100.png" size={imageSize} />
          <Pattern id="red0101" link="./images/positionImages/red0101.png" size={imageSize} />
          <Pattern id="red0110" link="./images/positionImages/red0110.png" size={imageSize} />
          <Pattern id="red0111" link="./images/positionImages/red0111.png" size={imageSize} />
          <Pattern id="red1000" link="./images/positionImages/red1000.png" size={imageSize} />
          <Pattern id="red1001" link="./images/positionImages/red1001.png" size={imageSize} />
          <Pattern id="red1010" link="./images/positionImages/red1010.png" size={imageSize} />
          <Pattern id="red1011" link="./images/positionImages/red1011.png" size={imageSize} />
          <Pattern id="red1100" link="./images/positionImages/red1100.png" size={imageSize} />
          <Pattern id="red1101" link="./images/positionImages/red1101.png" size={imageSize} />
          <Pattern id="red1110" link="./images/positionImages/red1110.png" size={imageSize} />
          <Pattern id="red1111" link="./images/positionImages/red1111.png" size={imageSize} />
          <Pattern id="blue0000" link="./images/positionImages/blue0000.png" size={imageSize} />
          <Pattern id="blue0001" link="./images/positionImages/blue0001.png" size={imageSize} />
          <Pattern id="blue0010" link="./images/positionImages/blue0010.png" size={imageSize} />
          <Pattern id="blue0011" link="./images/positionImages/blue0011.png" size={imageSize} />
          <Pattern id="blue0100" link="./images/positionImages/blue0100.png" size={imageSize} />
          <Pattern id="blue0101" link="./images/positionImages/blue0101.png" size={imageSize} />
          <Pattern id="blue0110" link="./images/positionImages/blue0110.png" size={imageSize} />
          <Pattern id="blue0111" link="./images/positionImages/blue0111.png" size={imageSize} />
          <Pattern id="blue1000" link="./images/positionImages/blue1000.png" size={imageSize} />
          <Pattern id="blue1001" link="./images/positionImages/blue1001.png" size={imageSize} />
          <Pattern id="blue1010" link="./images/positionImages/blue1010.png" size={imageSize} />
          <Pattern id="blue1011" link="./images/positionImages/blue1011.png" size={imageSize} />
          <Pattern id="blue1100" link="./images/positionImages/blue1100.png" size={imageSize} />
          <Pattern id="blue1101" link="./images/positionImages/blue1101.png" size={imageSize} />
          <Pattern id="blue1110" link="./images/positionImages/blue1110.png" size={imageSize} />
          <Pattern id="blue1111" link="./images/positionImages/blue1111.png" size={imageSize} />
          <Pattern id="airfield0000" link="./images/positionImages/airfield0000.png" size={imageSize} />
          <Pattern id="airfield0001" link="./images/positionImages/airfield0001.png" size={imageSize} />
          <Pattern id="airfield0010" link="./images/positionImages/airfield0010.png" size={imageSize} />
          <Pattern id="airfield0011" link="./images/positionImages/airfield0011.png" size={imageSize} />
          <Pattern id="airfield0100" link="./images/positionImages/airfield0100.png" size={imageSize} />
          <Pattern id="airfield0101" link="./images/positionImages/airfield0101.png" size={imageSize} />
          <Pattern id="airfield0110" link="./images/positionImages/airfield0110.png" size={imageSize} />
          <Pattern id="airfield0111" link="./images/positionImages/airfield0111.png" size={imageSize} />
          <Pattern id="airfield1000" link="./images/positionImages/airfield1000.png" size={imageSize} />
          <Pattern id="airfield1001" link="./images/positionImages/airfield1001.png" size={imageSize} />
          <Pattern id="airfield1010" link="./images/positionImages/airfield1010.png" size={imageSize} />
          <Pattern id="airfield1011" link="./images/positionImages/airfield1011.png" size={imageSize} />
          <Pattern id="airfield1100" link="./images/positionImages/airfield1100.png" size={imageSize} />
          <Pattern id="airfield1101" link="./images/positionImages/airfield1101.png" size={imageSize} />
          <Pattern id="airfield1110" link="./images/positionImages/airfield1110.png" size={imageSize} />
          <Pattern id="airfield1111" link="./images/positionImages/airfield1111.png" size={imageSize} />
          <Pattern id="missile0000" link="./images/positionImages/missile0000.png" size={imageSize} />
          <Pattern id="missile0001" link="./images/positionImages/missile0001.png" size={imageSize} />
          <Pattern id="missile0010" link="./images/positionImages/missile0010.png" size={imageSize} />
          <Pattern id="missile0011" link="./images/positionImages/missile0011.png" size={imageSize} />
          <Pattern id="missile0100" link="./images/positionImages/missile0100.png" size={imageSize} />
          <Pattern id="missile0101" link="./images/positionImages/missile0101.png" size={imageSize} />
          <Pattern id="missile0110" link="./images/positionImages/missile0110.png" size={imageSize} />
          <Pattern id="missile0111" link="./images/positionImages/missile0111.png" size={imageSize} />
          <Pattern id="missile1000" link="./images/positionImages/missile1000.png" size={imageSize} />
          <Pattern id="missile1001" link="./images/positionImages/missile1001.png" size={imageSize} />
          <Pattern id="missile1010" link="./images/positionImages/missile1010.png" size={imageSize} />
          <Pattern id="missile1011" link="./images/positionImages/missile1011.png" size={imageSize} />
          <Pattern id="missile1100" link="./images/positionImages/missile1100.png" size={imageSize} />
          <Pattern id="missile1101" link="./images/positionImages/missile1101.png" size={imageSize} />
          <Pattern id="missile1110" link="./images/positionImages/missile1110.png" size={imageSize} />
          <Pattern id="missile1111" link="./images/positionImages/missile1111.png" size={imageSize} />
        </HexGrid>
      </div>
    )
  }
}

export default Gameboard
