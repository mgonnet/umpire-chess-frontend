import React from 'react';
import ChessBoard from  './ChessBoard'
import '../styles/gameroom.css'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
    this.state = { 
      gameState: this.props.gameInfo.gameState,
      moves: null      
    };

    this.handleMove = this.handleMove.bind(this)
    this.handleCheckMoves = this.handleCheckMoves.bind(this)
    console.log('gameInfo', this.props.gameInfo, 'lobbyInfo', this.props.lobbyInfo)
  }

  handleMove(destination){
    console.log('voy a mover', destination, this.state.selected)
    this.client.move({from: this.state.selected.square, to: destination}).then(({gameInfo}) => {
      this.setState({gameState: gameInfo.gameState, moves: null, selected: null})
    })
  }

  handleCheckMoves(selected) {
    console.log('voy a chequear', selected)
    let { moves } = this.client.moves(selected)
    this.setState({moves, selected})
  }

  componentDidMount(){
    this.client.addEventListener('MOVE', ({gameInfo}) => {
      this.setState({
        gameState: gameInfo.gameState,
        moves: null,
        selected: null
      })
    })
  }

  render() {
    return (
      <div id="gameRoom">
        <div id="boardContainer">
          <ChessBoard 
            pieces={this.state.gameState}
            moves={this.state.moves}
            onCheckMoves={this.handleCheckMoves}
            onMove={this.handleMove}>          
          </ChessBoard>
        </div>
        <div id="infoContainer"></div>
      </div>
    );  
  }
}

export default Game;
