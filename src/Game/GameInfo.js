import React from 'react';
import '../styles/gameinfo.css'

import piece_b from '../svg/king.svg'
import piece_w from '../svg/king_w.svg'

class GameInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="gameinfo">
        <img src={piece_b} id="gameinfo-piece1"></img>
        <img src={piece_w} id="gameinfo-piece2"></img>
        <h2 id="gameinfo-player1">{this.props.p1}</h2>
        <h2 id="gameinfo-player2">{this.props.p2}</h2>
        <div class="turn" id={`turn-${this.props.turn}`}></div>
      </div>
    )
  }
}

export default GameInfo;