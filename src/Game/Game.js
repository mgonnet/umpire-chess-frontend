import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
    console.log(this.client)
    this.state = { 
      valueFrom: '',
      valueTo: '',
      gameState: this.props.initialGameState
    };

    this.handleChangeFrom = this.handleChangeFrom.bind(this)
    this.handleChangeTo = this.handleChangeTo.bind(this)
    this.handleMove = this.handleMove.bind(this)
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

  componentDidMount(){
    this.client.addEventListener('MOVE', (lobbyInfo) => {
      this.setState({
        gameState: lobbyInfo.gameState
      })
    })
  }

  render() {  
    return (
      <div>
        <p>Estas en el juego!</p>
        <pre>{this.state.gameState}</pre>        
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
