import React from 'react';
import PlayersList from './PlayersList';

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
  
    this.state = { 
      players: this.props.lobbyInfo.players,
      creator: this.props.lobbyInfo.creator
    };

    this.chooseRolHandler = this.chooseRolHandler.bind(this)
    this.startGameHandler = this.startGameHandler.bind(this)
  }

  chooseRolHandler(event){
    this.client.chooseRol(event.target.value).then(({players}) => {
      this.setState({
        players
      })
    })
  }

  startGameHandler(){
    this.client.startGame().then((lobbyInfo) => {
      this.props.onGameStart(lobbyInfo)
    })
  }

  componentDidMount(){
    this.client.addEventListener('LOBBY-UPDATE', (lobbyInfo) => {
      this.setState({
        players: lobbyInfo.players
      })
    })

    this.client.addEventListener('GAME-START', (lobbyInfo) => {
      this.props.onGameStart(lobbyInfo)
    })
  }

  render() {  
    return (
      <div>
        <p>Estas en el lobby: - {this.props.name}!</p>
        <PlayersList 
          players={this.state.players}
          onChooseRol={this.chooseRolHandler}
        />
        {this.props.IamCreator && 
          <button onClick={this.startGameHandler}>Start Game!</button>
        }
      </div>
    );  
  }
}

export default Lobby;
