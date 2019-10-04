import React from 'react';
import ChessBoard from  './ChessBoard'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
    console.log(this.client)
    this.state = { 
      valueFrom: '',
      valueTo: '',
      gameState: this.props.initialGameState,
      moves: null      
    };

    this.handleChangeFrom = this.handleChangeFrom.bind(this)
    this.handleChangeTo = this.handleChangeTo.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleCheckMoves = this.handleCheckMoves.bind(this)
  }

  handleChangeFrom(event){
    this.setState({valueFrom: event.target.value});
  }

  handleChangeTo(event){
    this.setState({valueTo: event.target.value});
  }

  handleMove(){
    this.client.move({from: this.state.valueFrom, to: this.state.valueTo}).then((lobbyInfo) => {
      this.setState({gameState: lobbyInfo.gameState})
    })
  }

  handleCheckMoves(options) {
    let moves = this.client.moves(options)
    this.setState({moves})
  }

  componentDidMount(){
    this.client.addEventListener('MOVE', (lobbyInfo) => {
      this.setState({
        gameState: lobbyInfo.gameState
      })
    })
  }

  render() {
    console.log('----', this.handleCheckMoves)
    return (
      <div>
        <ChessBoard 
          pieces={this.state.gameState}
          moves={this.state.moves}
          onCheckMoves={this.handleCheckMoves}>            
        </ChessBoard>
        <p>Estas en el juego!</p> 
          <label>
            From
            <input type="text" value={this.state.value} onChange={this.handleChangeFrom} />
          </label>
          <label>
            To
            <input type="text" value={this.state.value} onChange={this.handleChangeTo} />
          </label>
          <button onClick={this.handleMove}>pepe</button>      
      </div>
    );  
  }
}

export default Game;
