import React from 'react';
import '../styles/chessboard.css'

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

    return (
      <div class="boardContainer">
        <div class="chessBoard">
          {cells}
          <div class="cell" style={{ gridColumn: '4/4', gridRow: '2/2' }}>&#9818;</div>
          <div class="cell" style={{ gridColumn: '4/4', gridRow: '1/1' }}>&#9812;</div>
        </div>
      </div>
    )
  }
}

export default ChessBoard;