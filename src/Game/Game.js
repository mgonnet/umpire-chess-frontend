import React from 'react';
import ChessBoard from  './ChessBoard'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
    this.state = { 
      gameState: this.props.initialGameState,
      moves: null      
    };

    this.handleMove = this.handleMove.bind(this)
    this.handleCheckMoves = this.handleCheckMoves.bind(this)
  }

  handleMove(destination){
    console.log('voy a mover', destination, this.state.selected)
    this.client.move({from: this.state.selected.square, to: destination}).then((lobbyInfo) => {
      this.setState({gameState: lobbyInfo.gameState, moves: null, selected: null})
    })
  }

  handleCheckMoves(selected) {
    console.log('voy a chequear', selected)
    let moves = this.client.moves(selected)
    this.setState({moves, selected})
  }

  componentDidMount(){
    this.client.addEventListener('MOVE', (lobbyInfo) => {
      this.setState({
        gameState: lobbyInfo.gameState,
        moves: null,
        selected: null
      })
    })
  }

  render() {
    return (
      <div>
        <ChessBoard 
          pieces={this.state.gameState}
          moves={this.state.moves}
          onCheckMoves={this.handleCheckMoves}
          onMove={this.handleMove}>          
        </ChessBoard>        
      </div>
    );  
  }
}

export default Game;
