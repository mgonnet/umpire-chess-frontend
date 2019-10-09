import React from 'react';
import NameForm from './NameForm'
import LobbyBrowser from './LobbyBrowser/LobbyBrowser';
import Lobby from './Lobby/Lobby';
import Game from './Game/Game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', status: 'registering'};
    
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCreateLobby = this.handleCreateLobby.bind(this);
    this.handleJoinLobby = this.handleJoinLobby.bind(this)

    this.handleGameStart = this.handleGameStart.bind(this)
  }

  handleRegister() {    
    this.setState({
      status: 'looking'
    })
  }

  handleCreateLobby(lobbyName) {
    this.props.client.createLobby(lobbyName).then(({lobbyInfo}) => {
      this.setState({
        status: 'hosting',
        lobbyName,
        lobbyInfo
      })
    }).catch(() => {
      
    })
  }

  handleJoinLobby(lobbyName){    
    this.props.client.joinLobby(lobbyName).then(({lobbyInfo}) => {
      this.setState({
        status: 'joined',
        lobbyName,
        lobbyInfo
      })
    }).catch(() => {
      
    })
  }

  handleGameStart({lobbyInfo, gameInfo}){
    this.setState({
      status: 'playing',
      lobbyInfo,
      gameInfo     
    })
  }


  render() {
    switch (this.state.status) {
      case 'registering':
        return(
          <NameForm 
            client={this.props.client}
            onRegister={this.handleRegister}/>
        )
      case 'looking':
        return(
          <LobbyBrowser 
            onCreateLobby={this.handleCreateLobby}
            onJoinLobby={this.handleJoinLobby}
          />
        )
      case 'hosting':
        return(
          <Lobby
            onGameStart={this.handleGameStart}
            IamCreator={true}
            client={this.props.client}
            name={this.state.lobbyName}
            lobbyInfo={this.state.lobbyInfo} 
          />
        )
      case 'joined':
        return(
          <Lobby
            onGameStart={this.handleGameStart}
            IamCreator={false}
            client={this.props.client}
            name={this.state.lobbyName} 
            lobbyInfo={this.state.lobbyInfo}            
          />
        )
      case 'playing':
        return(
          <Game
            client={this.props.client}
            lobbyInfo={this.state.lobbyInfo}
            gameInfo={this.state.gameInfo}
          />
        )
      
      default:
      return (
        <div>
          <p>Algo se rompio</p>
        </div>
      )
    }      
  }
}

export default App;
