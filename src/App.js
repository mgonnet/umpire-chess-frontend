import React from 'react';
import NameForm from './NameForm'
import LobbyBrowser from './LobbyBrowser/LobbyBrowser';
import Lobby from './Lobby/Lobby';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', status: 'registering'};
    
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCreateLobby = this.handleCreateLobby.bind(this);
    this.handleJoinLobby = this.handleJoinLobby.bind(this)
  }

  handleRegister(user) {    
    this.props.client.register(user).then((response) => {
      if(response === 'OK'){
        this.setState({
          status: 'looking'
        })
      }
    }).catch(() => {
      
    })
  }

  handleCreateLobby(lobbyName) {
    this.props.client.createLobby(lobbyName).then((response) => {
      if(response === 'OK'){
        this.setState({
          status: 'hosting',
          lobbyName,
          players: []
        })
      }
    }).catch(() => {
      
    })
  }

  handleJoinLobby(lobbyName){    
    this.props.client.joinLobby(lobbyName).then((players) => {
      this.setState({
        status: 'joined',
        lobbyName,
        players
      })
    }).catch(() => {
      
    })
  }


  render() {
    switch (this.state.status) {
      case 'registering':
        return(
          <NameForm onRegister={this.handleRegister}/>
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
            name={this.state.lobbyName}
            players={this.state.players} 
          />
        )
      case 'joined':
        return(
          <Lobby 
            name={this.state.lobbyName} 
            players={this.state.players}
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
