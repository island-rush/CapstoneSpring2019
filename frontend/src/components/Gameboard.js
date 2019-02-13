import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Pattern, Text } from 'react-hexgrid';

const imageSize = { x: 3.4, y: 2.75 };
const hexagonSize = { x: 3.15, y: 3.15 };

function patternSelector(pattern, pieces) {
  let redHigh = 0;
  let redLow = 0;
  let blueHigh = 0;
  let blueLow = 0;

  const lowPieces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const highPieces = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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

function singleHex(id, pattern, x, y, selectPos, selectedPos, pieces) {
    return (
        <Hexagon posId={id} q={x} r={y} s={-999} fill={patternSelector(pattern, pieces)} className={selectedPos === id ? "selectedPos" : ""} onClick={selectPos.bind(this, id)}>
          {/* <Text>{id}</Text> */}
        </Hexagon>
    )
}

const gameboardStyle = {
    // position: "relative",
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
          {singleHex(0, this.props.positionTypes[0], 0, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[0])}
{singleHex(1, this.props.positionTypes[1], 0, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[1])}
{singleHex(2, this.props.positionTypes[2], 0, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[2])}
{singleHex(3, this.props.positionTypes[3], 0, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[3])}
{singleHex(4, this.props.positionTypes[4], 0, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[4])}
{singleHex(5, this.props.positionTypes[5], 0, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[5])}
{singleHex(6, this.props.positionTypes[6], 0, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[6])}
{singleHex(7, this.props.positionTypes[7], 0, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[7])}
{singleHex(8, this.props.positionTypes[8], 0, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[8])}
{singleHex(9, this.props.positionTypes[9], 0, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[9])}
{singleHex(10, this.props.positionTypes[10], 0, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[10])}
{singleHex(11, this.props.positionTypes[11], 0, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[11])}
{singleHex(12, this.props.positionTypes[12], 0, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[12])}
{singleHex(13, this.props.positionTypes[13], 0, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[13])}
{singleHex(14, this.props.positionTypes[14], 1, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[14])}
{singleHex(15, this.props.positionTypes[15], 1, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[15])}
{singleHex(16, this.props.positionTypes[16], 1, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[16])}
{singleHex(17, this.props.positionTypes[17], 1, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[17])}
{singleHex(18, this.props.positionTypes[18], 1, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[18])}
{singleHex(19, this.props.positionTypes[19], 1, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[19])}
{singleHex(20, this.props.positionTypes[20], 1, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[20])}
{singleHex(21, this.props.positionTypes[21], 1, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[21])}
{singleHex(22, this.props.positionTypes[22], 1, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[22])}
{singleHex(23, this.props.positionTypes[23], 1, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[23])}
{singleHex(24, this.props.positionTypes[24], 1, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[24])}
{singleHex(25, this.props.positionTypes[25], 1, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[25])}
{singleHex(26, this.props.positionTypes[26], 1, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[26])}
{singleHex(27, this.props.positionTypes[27], 2, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[27])}
{singleHex(28, this.props.positionTypes[28], 2, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[28])}
{singleHex(29, this.props.positionTypes[29], 2, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[29])}
{singleHex(30, this.props.positionTypes[30], 2, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[30])}
{singleHex(31, this.props.positionTypes[31], 2, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[31])}
{singleHex(32, this.props.positionTypes[32], 2, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[32])}
{singleHex(33, this.props.positionTypes[33], 2, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[33])}
{singleHex(34, this.props.positionTypes[34], 2, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[34])}
{singleHex(35, this.props.positionTypes[35], 2, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[35])}
{singleHex(36, this.props.positionTypes[36], 2, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[36])}
{singleHex(37, this.props.positionTypes[37], 2, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[37])}
{singleHex(38, this.props.positionTypes[38], 2, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[38])}
{singleHex(39, this.props.positionTypes[39], 2, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[39])}
{singleHex(40, this.props.positionTypes[40], 2, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[40])}
{singleHex(41, this.props.positionTypes[41], 3, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[41])}
{singleHex(42, this.props.positionTypes[42], 3, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[42])}
{singleHex(43, this.props.positionTypes[43], 3, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[43])}
{singleHex(44, this.props.positionTypes[44], 3, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[44])}
{singleHex(45, this.props.positionTypes[45], 3, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[45])}
{singleHex(46, this.props.positionTypes[46], 3, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[46])}
{singleHex(47, this.props.positionTypes[47], 3, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[47])}
{singleHex(48, this.props.positionTypes[48], 3, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[48])}
{singleHex(49, this.props.positionTypes[49], 3, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[49])}
{singleHex(50, this.props.positionTypes[50], 3, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[50])}
{singleHex(51, this.props.positionTypes[51], 3, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[51])}
{singleHex(52, this.props.positionTypes[52], 3, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[52])}
{singleHex(53, this.props.positionTypes[53], 3, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[53])}
{singleHex(54, this.props.positionTypes[54], 4, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[54])}
{singleHex(55, this.props.positionTypes[55], 4, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[55])}
{singleHex(56, this.props.positionTypes[56], 4, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[56])}
{singleHex(57, this.props.positionTypes[57], 4, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[57])}
{singleHex(58, this.props.positionTypes[58], 4, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[58])}
{singleHex(59, this.props.positionTypes[59], 4, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[59])}
{singleHex(60, this.props.positionTypes[60], 4, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[60])}
{singleHex(61, this.props.positionTypes[61], 4, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[61])}
{singleHex(62, this.props.positionTypes[62], 4, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[62])}
{singleHex(63, this.props.positionTypes[63], 4, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[63])}
{singleHex(64, this.props.positionTypes[64], 4, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[64])}
{singleHex(65, this.props.positionTypes[65], 4, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[65])}
{singleHex(66, this.props.positionTypes[66], 4, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[66])}
{singleHex(67, this.props.positionTypes[67], 4, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[67])}
{singleHex(68, this.props.positionTypes[68], 5, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[68])}
{singleHex(69, this.props.positionTypes[69], 5, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[69])}
{singleHex(70, this.props.positionTypes[70], 5, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[70])}
{singleHex(71, this.props.positionTypes[71], 5, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[71])}
{singleHex(72, this.props.positionTypes[72], 5, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[72])}
{singleHex(73, this.props.positionTypes[73], 5, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[73])}
{singleHex(74, this.props.positionTypes[74], 5, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[74])}
{singleHex(75, this.props.positionTypes[75], 5, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[75])}
{singleHex(76, this.props.positionTypes[76], 5, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[76])}
{singleHex(77, this.props.positionTypes[77], 5, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[77])}
{singleHex(78, this.props.positionTypes[78], 5, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[78])}
{singleHex(79, this.props.positionTypes[79], 5, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[79])}
{singleHex(80, this.props.positionTypes[80], 5, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[80])}
{singleHex(81, this.props.positionTypes[81], 6, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[81])}
{singleHex(82, this.props.positionTypes[82], 6, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[82])}
{singleHex(83, this.props.positionTypes[83], 6, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[83])}
{singleHex(84, this.props.positionTypes[84], 6, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[84])}
{singleHex(85, this.props.positionTypes[85], 6, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[85])}
{singleHex(86, this.props.positionTypes[86], 6, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[86])}
{singleHex(87, this.props.positionTypes[87], 6, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[87])}
{singleHex(88, this.props.positionTypes[88], 6, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[88])}
{singleHex(89, this.props.positionTypes[89], 6, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[89])}
{singleHex(90, this.props.positionTypes[90], 6, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[90])}
{singleHex(91, this.props.positionTypes[91], 6, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[91])}
{singleHex(92, this.props.positionTypes[92], 6, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[92])}
{singleHex(93, this.props.positionTypes[93], 6, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[93])}
{singleHex(94, this.props.positionTypes[94], 6, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[94])}
{singleHex(95, this.props.positionTypes[95], 6, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[95])}
{singleHex(96, this.props.positionTypes[96], 6, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[96])}
{singleHex(97, this.props.positionTypes[97], 6, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[97])}
{singleHex(98, this.props.positionTypes[98], 7, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[98])}
{singleHex(99, this.props.positionTypes[99], 7, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[99])}
{singleHex(100, this.props.positionTypes[100], 7, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[100])}
{singleHex(101, this.props.positionTypes[101], 7, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[101])}
{singleHex(102, this.props.positionTypes[102], 7, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[102])}
{singleHex(103, this.props.positionTypes[103], 7, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[103])}
{singleHex(104, this.props.positionTypes[104], 7, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[104])}
{singleHex(105, this.props.positionTypes[105], 7, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[105])}
{singleHex(106, this.props.positionTypes[106], 7, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[106])}
{singleHex(107, this.props.positionTypes[107], 7, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[107])}
{singleHex(108, this.props.positionTypes[108], 7, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[108])}
{singleHex(109, this.props.positionTypes[109], 7, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[109])}
{singleHex(110, this.props.positionTypes[110], 7, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[110])}
{singleHex(111, this.props.positionTypes[111], 7, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[111])}
{singleHex(112, this.props.positionTypes[112], 7, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[112])}
{singleHex(113, this.props.positionTypes[113], 7, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[113])}
{singleHex(114, this.props.positionTypes[114], 7, 13, this.props.selectPos, this.props.selectedPos, this.props.positions[114])}
{singleHex(115, this.props.positionTypes[115], 8, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[115])}
{singleHex(116, this.props.positionTypes[116], 8, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[116])}
{singleHex(117, this.props.positionTypes[117], 8, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[117])}
{singleHex(118, this.props.positionTypes[118], 8, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[118])}
{singleHex(119, this.props.positionTypes[119], 8, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[119])}
{singleHex(120, this.props.positionTypes[120], 8, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[120])}
{singleHex(121, this.props.positionTypes[121], 8, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[121])}
{singleHex(122, this.props.positionTypes[122], 8, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[122])}
{singleHex(123, this.props.positionTypes[123], 8, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[123])}
{singleHex(124, this.props.positionTypes[124], 8, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[124])}
{singleHex(125, this.props.positionTypes[125], 8, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[125])}
{singleHex(126, this.props.positionTypes[126], 8, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[126])}
{singleHex(127, this.props.positionTypes[127], 8, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[127])}
{singleHex(128, this.props.positionTypes[128], 8, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[128])}
{singleHex(129, this.props.positionTypes[129], 8, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[129])}
{singleHex(130, this.props.positionTypes[130], 8, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[130])}
{singleHex(131, this.props.positionTypes[131], 8, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[131])}
{singleHex(132, this.props.positionTypes[132], 9, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[132])}
{singleHex(133, this.props.positionTypes[133], 9, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[133])}
{singleHex(134, this.props.positionTypes[134], 9, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[134])}
{singleHex(135, this.props.positionTypes[135], 9, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[135])}
{singleHex(136, this.props.positionTypes[136], 9, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[136])}
{singleHex(137, this.props.positionTypes[137], 9, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[137])}
{singleHex(138, this.props.positionTypes[138], 9, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[138])}
{singleHex(139, this.props.positionTypes[139], 9, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[139])}
{singleHex(140, this.props.positionTypes[140], 9, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[140])}
{singleHex(141, this.props.positionTypes[141], 9, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[141])}
{singleHex(142, this.props.positionTypes[142], 9, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[142])}
{singleHex(143, this.props.positionTypes[143], 9, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[143])}
{singleHex(144, this.props.positionTypes[144], 9, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[144])}
{singleHex(145, this.props.positionTypes[145], 9, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[145])}
{singleHex(146, this.props.positionTypes[146], 9, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[146])}
{singleHex(147, this.props.positionTypes[147], 9, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[147])}
{singleHex(148, this.props.positionTypes[148], 9, 12, this.props.selectPos, this.props.selectedPos, this.props.positions[148])}
{singleHex(149, this.props.positionTypes[149], 10, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[149])}
{singleHex(150, this.props.positionTypes[150], 10, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[150])}
{singleHex(151, this.props.positionTypes[151], 10, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[151])}
{singleHex(152, this.props.positionTypes[152], 10, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[152])}
{singleHex(153, this.props.positionTypes[153], 10, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[153])}
{singleHex(154, this.props.positionTypes[154], 10, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[154])}
{singleHex(155, this.props.positionTypes[155], 10, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[155])}
{singleHex(156, this.props.positionTypes[156], 10, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[156])}
{singleHex(157, this.props.positionTypes[157], 10, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[157])}
{singleHex(158, this.props.positionTypes[158], 10, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[158])}
{singleHex(159, this.props.positionTypes[159], 10, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[159])}
{singleHex(160, this.props.positionTypes[160], 10, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[160])}
{singleHex(161, this.props.positionTypes[161], 10, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[161])}
{singleHex(162, this.props.positionTypes[162], 10, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[162])}
{singleHex(163, this.props.positionTypes[163], 10, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[163])}
{singleHex(164, this.props.positionTypes[164], 10, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[164])}
{singleHex(165, this.props.positionTypes[165], 10, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[165])}
{singleHex(166, this.props.positionTypes[166], 11, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[166])}
{singleHex(167, this.props.positionTypes[167], 11, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[167])}
{singleHex(168, this.props.positionTypes[168], 11, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[168])}
{singleHex(169, this.props.positionTypes[169], 11, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[169])}
{singleHex(170, this.props.positionTypes[170], 11, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[170])}
{singleHex(171, this.props.positionTypes[171], 11, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[171])}
{singleHex(172, this.props.positionTypes[172], 11, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[172])}
{singleHex(173, this.props.positionTypes[173], 11, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[173])}
{singleHex(174, this.props.positionTypes[174], 11, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[174])}
{singleHex(175, this.props.positionTypes[175], 11, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[175])}
{singleHex(176, this.props.positionTypes[176], 11, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[176])}
{singleHex(177, this.props.positionTypes[177], 11, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[177])}
{singleHex(178, this.props.positionTypes[178], 11, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[178])}
{singleHex(179, this.props.positionTypes[179], 11, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[179])}
{singleHex(180, this.props.positionTypes[180], 11, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[180])}
{singleHex(181, this.props.positionTypes[181], 11, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[181])}
{singleHex(182, this.props.positionTypes[182], 11, 11, this.props.selectPos, this.props.selectedPos, this.props.positions[182])}
{singleHex(183, this.props.positionTypes[183], 12, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[183])}
{singleHex(184, this.props.positionTypes[184], 12, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[184])}
{singleHex(185, this.props.positionTypes[185], 12, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[185])}
{singleHex(186, this.props.positionTypes[186], 12, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[186])}
{singleHex(187, this.props.positionTypes[187], 12, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[187])}
{singleHex(188, this.props.positionTypes[188], 12, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[188])}
{singleHex(189, this.props.positionTypes[189], 12, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[189])}
{singleHex(190, this.props.positionTypes[190], 12, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[190])}
{singleHex(191, this.props.positionTypes[191], 12, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[191])}
{singleHex(192, this.props.positionTypes[192], 12, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[192])}
{singleHex(193, this.props.positionTypes[193], 12, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[193])}
{singleHex(194, this.props.positionTypes[194], 12, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[194])}
{singleHex(195, this.props.positionTypes[195], 12, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[195])}
{singleHex(196, this.props.positionTypes[196], 12, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[196])}
{singleHex(197, this.props.positionTypes[197], 12, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[197])}
{singleHex(198, this.props.positionTypes[198], 12, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[198])}
{singleHex(199, this.props.positionTypes[199], 12, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[199])}
{singleHex(200, this.props.positionTypes[200], 13, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[200])}
{singleHex(201, this.props.positionTypes[201], 13, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[201])}
{singleHex(202, this.props.positionTypes[202], 13, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[202])}
{singleHex(203, this.props.positionTypes[203], 13, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[203])}
{singleHex(204, this.props.positionTypes[204], 13, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[204])}
{singleHex(205, this.props.positionTypes[205], 13, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[205])}
{singleHex(206, this.props.positionTypes[206], 13, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[206])}
{singleHex(207, this.props.positionTypes[207], 13, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[207])}
{singleHex(208, this.props.positionTypes[208], 13, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[208])}
{singleHex(209, this.props.positionTypes[209], 13, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[209])}
{singleHex(210, this.props.positionTypes[210], 13, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[210])}
{singleHex(211, this.props.positionTypes[211], 13, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[211])}
{singleHex(212, this.props.positionTypes[212], 13, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[212])}
{singleHex(213, this.props.positionTypes[213], 13, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[213])}
{singleHex(214, this.props.positionTypes[214], 13, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[214])}
{singleHex(215, this.props.positionTypes[215], 13, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[215])}
{singleHex(216, this.props.positionTypes[216], 13, 10, this.props.selectPos, this.props.selectedPos, this.props.positions[216])}
{singleHex(217, this.props.positionTypes[217], 14, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[217])}
{singleHex(218, this.props.positionTypes[218], 14, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[218])}
{singleHex(219, this.props.positionTypes[219], 14, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[219])}
{singleHex(220, this.props.positionTypes[220], 14, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[220])}
{singleHex(221, this.props.positionTypes[221], 14, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[221])}
{singleHex(222, this.props.positionTypes[222], 14, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[222])}
{singleHex(223, this.props.positionTypes[223], 14, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[223])}
{singleHex(224, this.props.positionTypes[224], 14, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[224])}
{singleHex(225, this.props.positionTypes[225], 14, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[225])}
{singleHex(226, this.props.positionTypes[226], 14, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[226])}
{singleHex(227, this.props.positionTypes[227], 14, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[227])}
{singleHex(228, this.props.positionTypes[228], 14, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[228])}
{singleHex(229, this.props.positionTypes[229], 14, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[229])}
{singleHex(230, this.props.positionTypes[230], 14, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[230])}
{singleHex(231, this.props.positionTypes[231], 14, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[231])}
{singleHex(232, this.props.positionTypes[232], 14, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[232])}
{singleHex(233, this.props.positionTypes[233], 14, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[233])}
{singleHex(234, this.props.positionTypes[234], 15, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[234])}
{singleHex(235, this.props.positionTypes[235], 15, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[235])}
{singleHex(236, this.props.positionTypes[236], 15, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[236])}
{singleHex(237, this.props.positionTypes[237], 15, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[237])}
{singleHex(238, this.props.positionTypes[238], 15, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[238])}
{singleHex(239, this.props.positionTypes[239], 15, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[239])}
{singleHex(240, this.props.positionTypes[240], 15, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[240])}
{singleHex(241, this.props.positionTypes[241], 15, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[241])}
{singleHex(242, this.props.positionTypes[242], 15, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[242])}
{singleHex(243, this.props.positionTypes[243], 15, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[243])}
{singleHex(244, this.props.positionTypes[244], 15, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[244])}
{singleHex(245, this.props.positionTypes[245], 15, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[245])}
{singleHex(246, this.props.positionTypes[246], 15, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[246])}
{singleHex(247, this.props.positionTypes[247], 15, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[247])}
{singleHex(248, this.props.positionTypes[248], 15, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[248])}
{singleHex(249, this.props.positionTypes[249], 15, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[249])}
{singleHex(250, this.props.positionTypes[250], 15, 9, this.props.selectPos, this.props.selectedPos, this.props.positions[250])}
{singleHex(251, this.props.positionTypes[251], 16, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[251])}
{singleHex(252, this.props.positionTypes[252], 16, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[252])}
{singleHex(253, this.props.positionTypes[253], 16, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[253])}
{singleHex(254, this.props.positionTypes[254], 16, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[254])}
{singleHex(255, this.props.positionTypes[255], 16, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[255])}
{singleHex(256, this.props.positionTypes[256], 16, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[256])}
{singleHex(257, this.props.positionTypes[257], 16, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[257])}
{singleHex(258, this.props.positionTypes[258], 16, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[258])}
{singleHex(259, this.props.positionTypes[259], 16, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[259])}
{singleHex(260, this.props.positionTypes[260], 16, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[260])}
{singleHex(261, this.props.positionTypes[261], 16, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[261])}
{singleHex(262, this.props.positionTypes[262], 16, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[262])}
{singleHex(263, this.props.positionTypes[263], 16, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[263])}
{singleHex(264, this.props.positionTypes[264], 16, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[264])}
{singleHex(265, this.props.positionTypes[265], 16, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[265])}
{singleHex(266, this.props.positionTypes[266], 16, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[266])}
{singleHex(267, this.props.positionTypes[267], 16, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[267])}
{singleHex(268, this.props.positionTypes[268], 17, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[268])}
{singleHex(269, this.props.positionTypes[269], 17, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[269])}
{singleHex(270, this.props.positionTypes[270], 17, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[270])}
{singleHex(271, this.props.positionTypes[271], 17, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[271])}
{singleHex(272, this.props.positionTypes[272], 17, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[272])}
{singleHex(273, this.props.positionTypes[273], 17, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[273])}
{singleHex(274, this.props.positionTypes[274], 17, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[274])}
{singleHex(275, this.props.positionTypes[275], 17, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[275])}
{singleHex(276, this.props.positionTypes[276], 17, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[276])}
{singleHex(277, this.props.positionTypes[277], 17, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[277])}
{singleHex(278, this.props.positionTypes[278], 17, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[278])}
{singleHex(279, this.props.positionTypes[279], 17, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[279])}
{singleHex(280, this.props.positionTypes[280], 17, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[280])}
{singleHex(281, this.props.positionTypes[281], 17, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[281])}
{singleHex(282, this.props.positionTypes[282], 17, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[282])}
{singleHex(283, this.props.positionTypes[283], 17, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[283])}
{singleHex(284, this.props.positionTypes[284], 17, 8, this.props.selectPos, this.props.selectedPos, this.props.positions[284])}
{singleHex(285, this.props.positionTypes[285], 18, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[285])}
{singleHex(286, this.props.positionTypes[286], 18, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[286])}
{singleHex(287, this.props.positionTypes[287], 18, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[287])}
{singleHex(288, this.props.positionTypes[288], 18, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[288])}
{singleHex(289, this.props.positionTypes[289], 18, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[289])}
{singleHex(290, this.props.positionTypes[290], 18, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[290])}
{singleHex(291, this.props.positionTypes[291], 18, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[291])}
{singleHex(292, this.props.positionTypes[292], 18, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[292])}
{singleHex(293, this.props.positionTypes[293], 18, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[293])}
{singleHex(294, this.props.positionTypes[294], 18, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[294])}
{singleHex(295, this.props.positionTypes[295], 18, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[295])}
{singleHex(296, this.props.positionTypes[296], 18, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[296])}
{singleHex(297, this.props.positionTypes[297], 18, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[297])}
{singleHex(298, this.props.positionTypes[298], 18, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[298])}
{singleHex(299, this.props.positionTypes[299], 18, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[299])}
{singleHex(300, this.props.positionTypes[300], 18, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[300])}
{singleHex(301, this.props.positionTypes[301], 18, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[301])}
{singleHex(302, this.props.positionTypes[302], 19, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[302])}
{singleHex(303, this.props.positionTypes[303], 19, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[303])}
{singleHex(304, this.props.positionTypes[304], 19, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[304])}
{singleHex(305, this.props.positionTypes[305], 19, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[305])}
{singleHex(306, this.props.positionTypes[306], 19, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[306])}
{singleHex(307, this.props.positionTypes[307], 19, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[307])}
{singleHex(308, this.props.positionTypes[308], 19, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[308])}
{singleHex(309, this.props.positionTypes[309], 19, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[309])}
{singleHex(310, this.props.positionTypes[310], 19, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[310])}
{singleHex(311, this.props.positionTypes[311], 19, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[311])}
{singleHex(312, this.props.positionTypes[312], 19, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[312])}
{singleHex(313, this.props.positionTypes[313], 19, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[313])}
{singleHex(314, this.props.positionTypes[314], 19, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[314])}
{singleHex(315, this.props.positionTypes[315], 19, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[315])}
{singleHex(316, this.props.positionTypes[316], 19, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[316])}
{singleHex(317, this.props.positionTypes[317], 19, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[317])}
{singleHex(318, this.props.positionTypes[318], 19, 7, this.props.selectPos, this.props.selectedPos, this.props.positions[318])}
{singleHex(319, this.props.positionTypes[319], 20, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[319])}
{singleHex(320, this.props.positionTypes[320], 20, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[320])}
{singleHex(321, this.props.positionTypes[321], 20, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[321])}
{singleHex(322, this.props.positionTypes[322], 20, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[322])}
{singleHex(323, this.props.positionTypes[323], 20, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[323])}
{singleHex(324, this.props.positionTypes[324], 20, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[324])}
{singleHex(325, this.props.positionTypes[325], 20, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[325])}
{singleHex(326, this.props.positionTypes[326], 20, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[326])}
{singleHex(327, this.props.positionTypes[327], 20, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[327])}
{singleHex(328, this.props.positionTypes[328], 20, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[328])}
{singleHex(329, this.props.positionTypes[329], 20, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[329])}
{singleHex(330, this.props.positionTypes[330], 20, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[330])}
{singleHex(331, this.props.positionTypes[331], 20, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[331])}
{singleHex(332, this.props.positionTypes[332], 20, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[332])}
{singleHex(333, this.props.positionTypes[333], 20, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[333])}
{singleHex(334, this.props.positionTypes[334], 20, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[334])}
{singleHex(335, this.props.positionTypes[335], 20, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[335])}
{singleHex(336, this.props.positionTypes[336], 21, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[336])}
{singleHex(337, this.props.positionTypes[337], 21, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[337])}
{singleHex(338, this.props.positionTypes[338], 21, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[338])}
{singleHex(339, this.props.positionTypes[339], 21, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[339])}
{singleHex(340, this.props.positionTypes[340], 21, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[340])}
{singleHex(341, this.props.positionTypes[341], 21, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[341])}
{singleHex(342, this.props.positionTypes[342], 21, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[342])}
{singleHex(343, this.props.positionTypes[343], 21, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[343])}
{singleHex(344, this.props.positionTypes[344], 21, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[344])}
{singleHex(345, this.props.positionTypes[345], 21, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[345])}
{singleHex(346, this.props.positionTypes[346], 21, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[346])}
{singleHex(347, this.props.positionTypes[347], 21, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[347])}
{singleHex(348, this.props.positionTypes[348], 21, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[348])}
{singleHex(349, this.props.positionTypes[349], 21, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[349])}
{singleHex(350, this.props.positionTypes[350], 21, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[350])}
{singleHex(351, this.props.positionTypes[351], 21, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[351])}
{singleHex(352, this.props.positionTypes[352], 21, 6, this.props.selectPos, this.props.selectedPos, this.props.positions[352])}
{singleHex(353, this.props.positionTypes[353], 22, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[353])}
{singleHex(354, this.props.positionTypes[354], 22, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[354])}
{singleHex(355, this.props.positionTypes[355], 22, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[355])}
{singleHex(356, this.props.positionTypes[356], 22, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[356])}
{singleHex(357, this.props.positionTypes[357], 22, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[357])}
{singleHex(358, this.props.positionTypes[358], 22, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[358])}
{singleHex(359, this.props.positionTypes[359], 22, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[359])}
{singleHex(360, this.props.positionTypes[360], 22, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[360])}
{singleHex(361, this.props.positionTypes[361], 22, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[361])}
{singleHex(362, this.props.positionTypes[362], 22, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[362])}
{singleHex(363, this.props.positionTypes[363], 22, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[363])}
{singleHex(364, this.props.positionTypes[364], 22, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[364])}
{singleHex(365, this.props.positionTypes[365], 22, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[365])}
{singleHex(366, this.props.positionTypes[366], 22, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[366])}
{singleHex(367, this.props.positionTypes[367], 22, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[367])}
{singleHex(368, this.props.positionTypes[368], 22, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[368])}
{singleHex(369, this.props.positionTypes[369], 22, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[369])}
{singleHex(370, this.props.positionTypes[370], 23, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[370])}
{singleHex(371, this.props.positionTypes[371], 23, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[371])}
{singleHex(372, this.props.positionTypes[372], 23, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[372])}
{singleHex(373, this.props.positionTypes[373], 23, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[373])}
{singleHex(374, this.props.positionTypes[374], 23, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[374])}
{singleHex(375, this.props.positionTypes[375], 23, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[375])}
{singleHex(376, this.props.positionTypes[376], 23, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[376])}
{singleHex(377, this.props.positionTypes[377], 23, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[377])}
{singleHex(378, this.props.positionTypes[378], 23, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[378])}
{singleHex(379, this.props.positionTypes[379], 23, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[379])}
{singleHex(380, this.props.positionTypes[380], 23, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[380])}
{singleHex(381, this.props.positionTypes[381], 23, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[381])}
{singleHex(382, this.props.positionTypes[382], 23, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[382])}
{singleHex(383, this.props.positionTypes[383], 23, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[383])}
{singleHex(384, this.props.positionTypes[384], 23, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[384])}
{singleHex(385, this.props.positionTypes[385], 23, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[385])}
{singleHex(386, this.props.positionTypes[386], 23, 5, this.props.selectPos, this.props.selectedPos, this.props.positions[386])}
{singleHex(387, this.props.positionTypes[387], 24, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[387])}
{singleHex(388, this.props.positionTypes[388], 24, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[388])}
{singleHex(389, this.props.positionTypes[389], 24, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[389])}
{singleHex(390, this.props.positionTypes[390], 24, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[390])}
{singleHex(391, this.props.positionTypes[391], 24, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[391])}
{singleHex(392, this.props.positionTypes[392], 24, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[392])}
{singleHex(393, this.props.positionTypes[393], 24, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[393])}
{singleHex(394, this.props.positionTypes[394], 24, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[394])}
{singleHex(395, this.props.positionTypes[395], 24, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[395])}
{singleHex(396, this.props.positionTypes[396], 24, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[396])}
{singleHex(397, this.props.positionTypes[397], 24, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[397])}
{singleHex(398, this.props.positionTypes[398], 24, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[398])}
{singleHex(399, this.props.positionTypes[399], 24, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[399])}
{singleHex(400, this.props.positionTypes[400], 24, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[400])}
{singleHex(401, this.props.positionTypes[401], 24, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[401])}
{singleHex(402, this.props.positionTypes[402], 24, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[402])}
{singleHex(403, this.props.positionTypes[403], 24, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[403])}
{singleHex(404, this.props.positionTypes[404], 25, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[404])}
{singleHex(405, this.props.positionTypes[405], 25, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[405])}
{singleHex(406, this.props.positionTypes[406], 25, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[406])}
{singleHex(407, this.props.positionTypes[407], 25, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[407])}
{singleHex(408, this.props.positionTypes[408], 25, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[408])}
{singleHex(409, this.props.positionTypes[409], 25, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[409])}
{singleHex(410, this.props.positionTypes[410], 25, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[410])}
{singleHex(411, this.props.positionTypes[411], 25, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[411])}
{singleHex(412, this.props.positionTypes[412], 25, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[412])}
{singleHex(413, this.props.positionTypes[413], 25, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[413])}
{singleHex(414, this.props.positionTypes[414], 25, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[414])}
{singleHex(415, this.props.positionTypes[415], 25, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[415])}
{singleHex(416, this.props.positionTypes[416], 25, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[416])}
{singleHex(417, this.props.positionTypes[417], 25, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[417])}
{singleHex(418, this.props.positionTypes[418], 25, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[418])}
{singleHex(419, this.props.positionTypes[419], 25, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[419])}
{singleHex(420, this.props.positionTypes[420], 25, 4, this.props.selectPos, this.props.selectedPos, this.props.positions[420])}
{singleHex(421, this.props.positionTypes[421], 26, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[421])}
{singleHex(422, this.props.positionTypes[422], 26, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[422])}
{singleHex(423, this.props.positionTypes[423], 26, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[423])}
{singleHex(424, this.props.positionTypes[424], 26, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[424])}
{singleHex(425, this.props.positionTypes[425], 26, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[425])}
{singleHex(426, this.props.positionTypes[426], 26, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[426])}
{singleHex(427, this.props.positionTypes[427], 26, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[427])}
{singleHex(428, this.props.positionTypes[428], 26, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[428])}
{singleHex(429, this.props.positionTypes[429], 26, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[429])}
{singleHex(430, this.props.positionTypes[430], 26, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[430])}
{singleHex(431, this.props.positionTypes[431], 26, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[431])}
{singleHex(432, this.props.positionTypes[432], 26, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[432])}
{singleHex(433, this.props.positionTypes[433], 26, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[433])}
{singleHex(434, this.props.positionTypes[434], 26, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[434])}
{singleHex(435, this.props.positionTypes[435], 26, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[435])}
{singleHex(436, this.props.positionTypes[436], 26, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[436])}
{singleHex(437, this.props.positionTypes[437], 26, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[437])}
{singleHex(438, this.props.positionTypes[438], 27, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[438])}
{singleHex(439, this.props.positionTypes[439], 27, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[439])}
{singleHex(440, this.props.positionTypes[440], 27, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[440])}
{singleHex(441, this.props.positionTypes[441], 27, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[441])}
{singleHex(442, this.props.positionTypes[442], 27, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[442])}
{singleHex(443, this.props.positionTypes[443], 27, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[443])}
{singleHex(444, this.props.positionTypes[444], 27, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[444])}
{singleHex(445, this.props.positionTypes[445], 27, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[445])}
{singleHex(446, this.props.positionTypes[446], 27, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[446])}
{singleHex(447, this.props.positionTypes[447], 27, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[447])}
{singleHex(448, this.props.positionTypes[448], 27, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[448])}
{singleHex(449, this.props.positionTypes[449], 27, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[449])}
{singleHex(450, this.props.positionTypes[450], 27, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[450])}
{singleHex(451, this.props.positionTypes[451], 27, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[451])}
{singleHex(452, this.props.positionTypes[452], 27, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[452])}
{singleHex(453, this.props.positionTypes[453], 27, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[453])}
{singleHex(454, this.props.positionTypes[454], 27, 3, this.props.selectPos, this.props.selectedPos, this.props.positions[454])}
{singleHex(455, this.props.positionTypes[455], 28, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[455])}
{singleHex(456, this.props.positionTypes[456], 28, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[456])}
{singleHex(457, this.props.positionTypes[457], 28, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[457])}
{singleHex(458, this.props.positionTypes[458], 28, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[458])}
{singleHex(459, this.props.positionTypes[459], 28, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[459])}
{singleHex(460, this.props.positionTypes[460], 28, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[460])}
{singleHex(461, this.props.positionTypes[461], 28, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[461])}
{singleHex(462, this.props.positionTypes[462], 28, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[462])}
{singleHex(463, this.props.positionTypes[463], 28, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[463])}
{singleHex(464, this.props.positionTypes[464], 28, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[464])}
{singleHex(465, this.props.positionTypes[465], 28, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[465])}
{singleHex(466, this.props.positionTypes[466], 28, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[466])}
{singleHex(467, this.props.positionTypes[467], 28, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[467])}
{singleHex(468, this.props.positionTypes[468], 28, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[468])}
{singleHex(469, this.props.positionTypes[469], 28, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[469])}
{singleHex(470, this.props.positionTypes[470], 28, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[470])}
{singleHex(471, this.props.positionTypes[471], 28, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[471])}
{singleHex(472, this.props.positionTypes[472], 29, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[472])}
{singleHex(473, this.props.positionTypes[473], 29, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[473])}
{singleHex(474, this.props.positionTypes[474], 29, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[474])}
{singleHex(475, this.props.positionTypes[475], 29, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[475])}
{singleHex(476, this.props.positionTypes[476], 29, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[476])}
{singleHex(477, this.props.positionTypes[477], 29, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[477])}
{singleHex(478, this.props.positionTypes[478], 29, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[478])}
{singleHex(479, this.props.positionTypes[479], 29, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[479])}
{singleHex(480, this.props.positionTypes[480], 29, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[480])}
{singleHex(481, this.props.positionTypes[481], 29, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[481])}
{singleHex(482, this.props.positionTypes[482], 29, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[482])}
{singleHex(483, this.props.positionTypes[483], 29, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[483])}
{singleHex(484, this.props.positionTypes[484], 29, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[484])}
{singleHex(485, this.props.positionTypes[485], 29, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[485])}
{singleHex(486, this.props.positionTypes[486], 29, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[486])}
{singleHex(487, this.props.positionTypes[487], 29, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[487])}
{singleHex(488, this.props.positionTypes[488], 29, 2, this.props.selectPos, this.props.selectedPos, this.props.positions[488])}
{singleHex(489, this.props.positionTypes[489], 30, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[489])}
{singleHex(490, this.props.positionTypes[490], 30, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[490])}
{singleHex(491, this.props.positionTypes[491], 30, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[491])}
{singleHex(492, this.props.positionTypes[492], 30, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[492])}
{singleHex(493, this.props.positionTypes[493], 30, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[493])}
{singleHex(494, this.props.positionTypes[494], 30, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[494])}
{singleHex(495, this.props.positionTypes[495], 30, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[495])}
{singleHex(496, this.props.positionTypes[496], 30, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[496])}
{singleHex(497, this.props.positionTypes[497], 30, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[497])}
{singleHex(498, this.props.positionTypes[498], 30, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[498])}
{singleHex(499, this.props.positionTypes[499], 30, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[499])}
{singleHex(500, this.props.positionTypes[500], 30, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[500])}
{singleHex(501, this.props.positionTypes[501], 30, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[501])}
{singleHex(502, this.props.positionTypes[502], 30, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[502])}
{singleHex(503, this.props.positionTypes[503], 30, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[503])}
{singleHex(504, this.props.positionTypes[504], 30, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[504])}
{singleHex(505, this.props.positionTypes[505], 30, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[505])}
{singleHex(506, this.props.positionTypes[506], 31, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[506])}
{singleHex(507, this.props.positionTypes[507], 31, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[507])}
{singleHex(508, this.props.positionTypes[508], 31, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[508])}
{singleHex(509, this.props.positionTypes[509], 31, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[509])}
{singleHex(510, this.props.positionTypes[510], 31, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[510])}
{singleHex(511, this.props.positionTypes[511], 31, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[511])}
{singleHex(512, this.props.positionTypes[512], 31, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[512])}
{singleHex(513, this.props.positionTypes[513], 31, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[513])}
{singleHex(514, this.props.positionTypes[514], 31, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[514])}
{singleHex(515, this.props.positionTypes[515], 31, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[515])}
{singleHex(516, this.props.positionTypes[516], 31, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[516])}
{singleHex(517, this.props.positionTypes[517], 31, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[517])}
{singleHex(518, this.props.positionTypes[518], 31, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[518])}
{singleHex(519, this.props.positionTypes[519], 31, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[519])}
{singleHex(520, this.props.positionTypes[520], 31, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[520])}
{singleHex(521, this.props.positionTypes[521], 31, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[521])}
{singleHex(522, this.props.positionTypes[522], 31, 1, this.props.selectPos, this.props.selectedPos, this.props.positions[522])}
{singleHex(523, this.props.positionTypes[523], 32, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[523])}
{singleHex(524, this.props.positionTypes[524], 32, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[524])}
{singleHex(525, this.props.positionTypes[525], 32, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[525])}
{singleHex(526, this.props.positionTypes[526], 32, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[526])}
{singleHex(527, this.props.positionTypes[527], 32, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[527])}
{singleHex(528, this.props.positionTypes[528], 32, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[528])}
{singleHex(529, this.props.positionTypes[529], 32, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[529])}
{singleHex(530, this.props.positionTypes[530], 32, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[530])}
{singleHex(531, this.props.positionTypes[531], 32, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[531])}
{singleHex(532, this.props.positionTypes[532], 32, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[532])}
{singleHex(533, this.props.positionTypes[533], 32, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[533])}
{singleHex(534, this.props.positionTypes[534], 32, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[534])}
{singleHex(535, this.props.positionTypes[535], 32, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[535])}
{singleHex(536, this.props.positionTypes[536], 32, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[536])}
{singleHex(537, this.props.positionTypes[537], 32, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[537])}
{singleHex(538, this.props.positionTypes[538], 32, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[538])}
{singleHex(539, this.props.positionTypes[539], 32, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[539])}
{singleHex(540, this.props.positionTypes[540], 33, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[540])}
{singleHex(541, this.props.positionTypes[541], 33, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[541])}
{singleHex(542, this.props.positionTypes[542], 33, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[542])}
{singleHex(543, this.props.positionTypes[543], 33, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[543])}
{singleHex(544, this.props.positionTypes[544], 33, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[544])}
{singleHex(545, this.props.positionTypes[545], 33, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[545])}
{singleHex(546, this.props.positionTypes[546], 33, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[546])}
{singleHex(547, this.props.positionTypes[547], 33, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[547])}
{singleHex(548, this.props.positionTypes[548], 33, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[548])}
{singleHex(549, this.props.positionTypes[549], 33, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[549])}
{singleHex(550, this.props.positionTypes[550], 33, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[550])}
{singleHex(551, this.props.positionTypes[551], 33, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[551])}
{singleHex(552, this.props.positionTypes[552], 33, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[552])}
{singleHex(553, this.props.positionTypes[553], 33, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[553])}
{singleHex(554, this.props.positionTypes[554], 33, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[554])}
{singleHex(555, this.props.positionTypes[555], 33, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[555])}
{singleHex(556, this.props.positionTypes[556], 33, 0, this.props.selectPos, this.props.selectedPos, this.props.positions[556])}
{singleHex(557, this.props.positionTypes[557], 34, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[557])}
{singleHex(558, this.props.positionTypes[558], 34, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[558])}
{singleHex(559, this.props.positionTypes[559], 34, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[559])}
{singleHex(560, this.props.positionTypes[560], 34, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[560])}
{singleHex(561, this.props.positionTypes[561], 34, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[561])}
{singleHex(562, this.props.positionTypes[562], 34, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[562])}
{singleHex(563, this.props.positionTypes[563], 34, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[563])}
{singleHex(564, this.props.positionTypes[564], 34, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[564])}
{singleHex(565, this.props.positionTypes[565], 34, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[565])}
{singleHex(566, this.props.positionTypes[566], 34, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[566])}
{singleHex(567, this.props.positionTypes[567], 34, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[567])}
{singleHex(568, this.props.positionTypes[568], 34, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[568])}
{singleHex(569, this.props.positionTypes[569], 34, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[569])}
{singleHex(570, this.props.positionTypes[570], 34, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[570])}
{singleHex(571, this.props.positionTypes[571], 34, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[571])}
{singleHex(572, this.props.positionTypes[572], 34, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[572])}
{singleHex(573, this.props.positionTypes[573], 34, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[573])}
{singleHex(574, this.props.positionTypes[574], 35, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[574])}
{singleHex(575, this.props.positionTypes[575], 35, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[575])}
{singleHex(576, this.props.positionTypes[576], 35, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[576])}
{singleHex(577, this.props.positionTypes[577], 35, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[577])}
{singleHex(578, this.props.positionTypes[578], 35, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[578])}
{singleHex(579, this.props.positionTypes[579], 35, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[579])}
{singleHex(580, this.props.positionTypes[580], 35, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[580])}
{singleHex(581, this.props.positionTypes[581], 35, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[581])}
{singleHex(582, this.props.positionTypes[582], 35, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[582])}
{singleHex(583, this.props.positionTypes[583], 35, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[583])}
{singleHex(584, this.props.positionTypes[584], 35, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[584])}
{singleHex(585, this.props.positionTypes[585], 35, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[585])}
{singleHex(586, this.props.positionTypes[586], 35, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[586])}
{singleHex(587, this.props.positionTypes[587], 35, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[587])}
{singleHex(588, this.props.positionTypes[588], 35, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[588])}
{singleHex(589, this.props.positionTypes[589], 35, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[589])}
{singleHex(590, this.props.positionTypes[590], 35, -1, this.props.selectPos, this.props.selectedPos, this.props.positions[590])}
{singleHex(591, this.props.positionTypes[591], 36, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[591])}
{singleHex(592, this.props.positionTypes[592], 36, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[592])}
{singleHex(593, this.props.positionTypes[593], 36, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[593])}
{singleHex(594, this.props.positionTypes[594], 36, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[594])}
{singleHex(595, this.props.positionTypes[595], 36, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[595])}
{singleHex(596, this.props.positionTypes[596], 36, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[596])}
{singleHex(597, this.props.positionTypes[597], 36, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[597])}
{singleHex(598, this.props.positionTypes[598], 36, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[598])}
{singleHex(599, this.props.positionTypes[599], 36, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[599])}
{singleHex(600, this.props.positionTypes[600], 36, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[600])}
{singleHex(601, this.props.positionTypes[601], 36, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[601])}
{singleHex(602, this.props.positionTypes[602], 36, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[602])}
{singleHex(603, this.props.positionTypes[603], 36, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[603])}
{singleHex(604, this.props.positionTypes[604], 36, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[604])}
{singleHex(605, this.props.positionTypes[605], 36, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[605])}
{singleHex(606, this.props.positionTypes[606], 36, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[606])}
{singleHex(607, this.props.positionTypes[607], 36, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[607])}
{singleHex(608, this.props.positionTypes[608], 37, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[608])}
{singleHex(609, this.props.positionTypes[609], 37, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[609])}
{singleHex(610, this.props.positionTypes[610], 37, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[610])}
{singleHex(611, this.props.positionTypes[611], 37, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[611])}
{singleHex(612, this.props.positionTypes[612], 37, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[612])}
{singleHex(613, this.props.positionTypes[613], 37, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[613])}
{singleHex(614, this.props.positionTypes[614], 37, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[614])}
{singleHex(615, this.props.positionTypes[615], 37, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[615])}
{singleHex(616, this.props.positionTypes[616], 37, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[616])}
{singleHex(617, this.props.positionTypes[617], 37, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[617])}
{singleHex(618, this.props.positionTypes[618], 37, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[618])}
{singleHex(619, this.props.positionTypes[619], 37, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[619])}
{singleHex(620, this.props.positionTypes[620], 37, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[620])}
{singleHex(621, this.props.positionTypes[621], 37, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[621])}
{singleHex(622, this.props.positionTypes[622], 37, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[622])}
{singleHex(623, this.props.positionTypes[623], 37, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[623])}
{singleHex(624, this.props.positionTypes[624], 37, -2, this.props.selectPos, this.props.selectedPos, this.props.positions[624])}
{singleHex(625, this.props.positionTypes[625], 38, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[625])}
{singleHex(626, this.props.positionTypes[626], 38, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[626])}
{singleHex(627, this.props.positionTypes[627], 38, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[627])}
{singleHex(628, this.props.positionTypes[628], 38, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[628])}
{singleHex(629, this.props.positionTypes[629], 38, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[629])}
{singleHex(630, this.props.positionTypes[630], 38, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[630])}
{singleHex(631, this.props.positionTypes[631], 38, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[631])}
{singleHex(632, this.props.positionTypes[632], 38, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[632])}
{singleHex(633, this.props.positionTypes[633], 38, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[633])}
{singleHex(634, this.props.positionTypes[634], 38, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[634])}
{singleHex(635, this.props.positionTypes[635], 38, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[635])}
{singleHex(636, this.props.positionTypes[636], 38, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[636])}
{singleHex(637, this.props.positionTypes[637], 38, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[637])}
{singleHex(638, this.props.positionTypes[638], 38, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[638])}
{singleHex(639, this.props.positionTypes[639], 38, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[639])}
{singleHex(640, this.props.positionTypes[640], 38, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[640])}
{singleHex(641, this.props.positionTypes[641], 38, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[641])}
{singleHex(642, this.props.positionTypes[642], 39, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[642])}
{singleHex(643, this.props.positionTypes[643], 39, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[643])}
{singleHex(644, this.props.positionTypes[644], 39, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[644])}
{singleHex(645, this.props.positionTypes[645], 39, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[645])}
{singleHex(646, this.props.positionTypes[646], 39, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[646])}
{singleHex(647, this.props.positionTypes[647], 39, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[647])}
{singleHex(648, this.props.positionTypes[648], 39, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[648])}
{singleHex(649, this.props.positionTypes[649], 39, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[649])}
{singleHex(650, this.props.positionTypes[650], 39, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[650])}
{singleHex(651, this.props.positionTypes[651], 39, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[651])}
{singleHex(652, this.props.positionTypes[652], 39, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[652])}
{singleHex(653, this.props.positionTypes[653], 39, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[653])}
{singleHex(654, this.props.positionTypes[654], 39, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[654])}
{singleHex(655, this.props.positionTypes[655], 39, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[655])}
{singleHex(656, this.props.positionTypes[656], 39, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[656])}
{singleHex(657, this.props.positionTypes[657], 39, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[657])}
{singleHex(658, this.props.positionTypes[658], 39, -3, this.props.selectPos, this.props.selectedPos, this.props.positions[658])}
{singleHex(659, this.props.positionTypes[659], 40, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[659])}
{singleHex(660, this.props.positionTypes[660], 40, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[660])}
{singleHex(661, this.props.positionTypes[661], 40, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[661])}
{singleHex(662, this.props.positionTypes[662], 40, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[662])}
{singleHex(663, this.props.positionTypes[663], 40, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[663])}
{singleHex(664, this.props.positionTypes[664], 40, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[664])}
{singleHex(665, this.props.positionTypes[665], 40, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[665])}
{singleHex(666, this.props.positionTypes[666], 40, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[666])}
{singleHex(667, this.props.positionTypes[667], 40, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[667])}
{singleHex(668, this.props.positionTypes[668], 40, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[668])}
{singleHex(669, this.props.positionTypes[669], 40, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[669])}
{singleHex(670, this.props.positionTypes[670], 40, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[670])}
{singleHex(671, this.props.positionTypes[671], 40, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[671])}
{singleHex(672, this.props.positionTypes[672], 40, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[672])}
{singleHex(673, this.props.positionTypes[673], 40, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[673])}
{singleHex(674, this.props.positionTypes[674], 40, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[674])}
{singleHex(675, this.props.positionTypes[675], 40, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[675])}
{singleHex(676, this.props.positionTypes[676], 41, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[676])}
{singleHex(677, this.props.positionTypes[677], 41, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[677])}
{singleHex(678, this.props.positionTypes[678], 41, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[678])}
{singleHex(679, this.props.positionTypes[679], 41, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[679])}
{singleHex(680, this.props.positionTypes[680], 41, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[680])}
{singleHex(681, this.props.positionTypes[681], 41, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[681])}
{singleHex(682, this.props.positionTypes[682], 41, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[682])}
{singleHex(683, this.props.positionTypes[683], 41, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[683])}
{singleHex(684, this.props.positionTypes[684], 41, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[684])}
{singleHex(685, this.props.positionTypes[685], 41, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[685])}
{singleHex(686, this.props.positionTypes[686], 41, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[686])}
{singleHex(687, this.props.positionTypes[687], 41, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[687])}
{singleHex(688, this.props.positionTypes[688], 41, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[688])}
{singleHex(689, this.props.positionTypes[689], 41, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[689])}
{singleHex(690, this.props.positionTypes[690], 41, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[690])}
{singleHex(691, this.props.positionTypes[691], 41, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[691])}
{singleHex(692, this.props.positionTypes[692], 41, -4, this.props.selectPos, this.props.selectedPos, this.props.positions[692])}
{singleHex(693, this.props.positionTypes[693], 42, -21, this.props.selectPos, this.props.selectedPos, this.props.positions[693])}
{singleHex(694, this.props.positionTypes[694], 42, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[694])}
{singleHex(695, this.props.positionTypes[695], 42, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[695])}
{singleHex(696, this.props.positionTypes[696], 42, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[696])}
{singleHex(697, this.props.positionTypes[697], 42, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[697])}
{singleHex(698, this.props.positionTypes[698], 42, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[698])}
{singleHex(699, this.props.positionTypes[699], 42, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[699])}
{singleHex(700, this.props.positionTypes[700], 42, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[700])}
{singleHex(701, this.props.positionTypes[701], 42, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[701])}
{singleHex(702, this.props.positionTypes[702], 42, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[702])}
{singleHex(703, this.props.positionTypes[703], 42, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[703])}
{singleHex(704, this.props.positionTypes[704], 42, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[704])}
{singleHex(705, this.props.positionTypes[705], 42, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[705])}
{singleHex(706, this.props.positionTypes[706], 42, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[706])}
{singleHex(707, this.props.positionTypes[707], 42, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[707])}
{singleHex(708, this.props.positionTypes[708], 42, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[708])}
{singleHex(709, this.props.positionTypes[709], 42, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[709])}
{singleHex(710, this.props.positionTypes[710], 43, -21, this.props.selectPos, this.props.selectedPos, this.props.positions[710])}
{singleHex(711, this.props.positionTypes[711], 43, -20, this.props.selectPos, this.props.selectedPos, this.props.positions[711])}
{singleHex(712, this.props.positionTypes[712], 43, -19, this.props.selectPos, this.props.selectedPos, this.props.positions[712])}
{singleHex(713, this.props.positionTypes[713], 43, -18, this.props.selectPos, this.props.selectedPos, this.props.positions[713])}
{singleHex(714, this.props.positionTypes[714], 43, -17, this.props.selectPos, this.props.selectedPos, this.props.positions[714])}
{singleHex(715, this.props.positionTypes[715], 43, -16, this.props.selectPos, this.props.selectedPos, this.props.positions[715])}
{singleHex(716, this.props.positionTypes[716], 43, -15, this.props.selectPos, this.props.selectedPos, this.props.positions[716])}
{singleHex(717, this.props.positionTypes[717], 43, -14, this.props.selectPos, this.props.selectedPos, this.props.positions[717])}
{singleHex(718, this.props.positionTypes[718], 43, -13, this.props.selectPos, this.props.selectedPos, this.props.positions[718])}
{singleHex(719, this.props.positionTypes[719], 43, -12, this.props.selectPos, this.props.selectedPos, this.props.positions[719])}
{singleHex(720, this.props.positionTypes[720], 43, -11, this.props.selectPos, this.props.selectedPos, this.props.positions[720])}
{singleHex(721, this.props.positionTypes[721], 43, -10, this.props.selectPos, this.props.selectedPos, this.props.positions[721])}
{singleHex(722, this.props.positionTypes[722], 43, -9, this.props.selectPos, this.props.selectedPos, this.props.positions[722])}
{singleHex(723, this.props.positionTypes[723], 43, -8, this.props.selectPos, this.props.selectedPos, this.props.positions[723])}
{singleHex(724, this.props.positionTypes[724], 43, -7, this.props.selectPos, this.props.selectedPos, this.props.positions[724])}
{singleHex(725, this.props.positionTypes[725], 43, -6, this.props.selectPos, this.props.selectedPos, this.props.positions[725])}
{singleHex(726, this.props.positionTypes[726], 43, -5, this.props.selectPos, this.props.selectedPos, this.props.positions[726])}


          </Layout>
          
          {/* TODO: for loop to create these? */}
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
          <Pattern id="land1111" link="./images/positionImages/land1111.png" size={imageSize} /> */}
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
