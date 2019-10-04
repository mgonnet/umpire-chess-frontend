import React from 'react';
import '../styles/chessboard.css'

const pieceMapping = {
  'r': '♜',
  'n': '♞',
  'b': '♝',
  'q': '♛',
  'k': '♚',
  'p': '♟'
}

/**
 * Given a coordinate, returns the chess representation ((1,1) => 'a8')
 * @param {number} column 
 * @param {number} row 
 * @returns {string}
 */
function coordsToChess(column, row) {
  let newColumn = String.fromCharCode('a'.charCodeAt(0) + column)
  let newRow = Math.abs(row-9)
  return newColumn + newRow;
}

function chessToCoords(position){
  let column = position.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  let row = '9'.charCodeAt(0) - position.charCodeAt(1);
  return {column, row};
}

class ChessBoard extends React.Component {
  constructor(props) {
    super(props)
    this.handleCheckMoves = this.handleCheckMoves.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  handleCheckMoves(position){    
    this.props.onCheckMoves(position)
  }

  handleMove(destination) {
    this.props.onMove(destination)
  }

  render() {
    let cells = new Array(64)

    // Color cells
    for(let i=0; i<8; i++){
      for(let j=0; j<8; j++){
        let cellColor = "cell " + ((j%2 + i%2) % 2 ? "cellWhite" : "cellBlack");
        cells[i*8+j] = 
          <div 
            class={cellColor}
            style={{ 
              gridColumn: `${j+1}/${j+1}`,
              gridRow: `${i+1}/${i+1}`
            }}></div>
      }
    }  
    
    // Pieces
    let pieces = this.props.pieces.map((piece) => {      
      let column = piece.square.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      let row = '9'.charCodeAt(0) - piece.square.charCodeAt(1)
      let color = piece.piece.color === 'b' ? 'blackPiece' : 'whitePiece';
      console.log(piece.square, column, row)
      
      return (
        <div 
          class={color}
          style={{ 
            gridColumn: `${column}/${column}`,
            gridRow: `${row}/${row}` }}
          onClick={this.handleCheckMoves.bind(null, {square: piece.square, verbose: true})}>
          {pieceMapping[piece.piece.type]}</div>
      )            
    })

    let moves = null;
    // Moves
    if(this.props.moves){
      moves = this.props.moves.map((move) => {
        let coord = chessToCoords(move.to)
        return (
          <div
            class="move"
            style={{ 
              gridColumn: `${coord.column}/${coord.column}`,
              gridRow: `${coord.row}/${coord.row}` }}
            onClick={this.handleMove.bind(null,move.to)}
            key={`move-${move.to}`}>
            >
          </div>
        )
      })
    }


    return (
      <div class="boardContainer">
        <div class="chessBoard">
          {cells}
          {pieces}
          {moves !== null && moves}
        </div>
      </div>
    )
  }
}

export default ChessBoard;