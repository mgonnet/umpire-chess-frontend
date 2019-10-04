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

class ChessBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cells = new Array(64)

    for(let i=0; i<8; i++){
      for(let j=0; j<8; j++){
        cells[i*8+j] = 
          ((j%2 + i%2) % 2 ? 
            <div class="cell cellWhite" style={{ gridColumn: `${j+1}/${j+1}`, gridRow: `${i+1}/${i+1}` }}></div> : 
            <div class="cell cellBlack" style={{ gridColumn: `${j+1}/${j+1}`, gridRow: `${i+1}/${i+1}` }}></div>)
      }
    }

    

    let pieces = this.props.pieces.map((piece) => {      
      let column = piece.square.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      let row = '9'.charCodeAt(0) - piece.square.charCodeAt(1)
      let color = piece.piece.color === 'b' ? 'blackPiece' : 'whitePiece';
      console.log(piece.square, column, row)
      return <div class={color} style={{ gridColumn: `${column}/${column}`, gridRow: `${row}/${row}` }}>{pieceMapping[piece.piece.type]}</div>
    })

    return (
      <div class="boardContainer">
        <div class="chessBoard">
          {cells}
          {pieces}
        </div>
      </div>
    )
  }
}

export default ChessBoard;