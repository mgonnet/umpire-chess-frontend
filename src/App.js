import React from 'react';
import NameForm from './NameForm'
import LobbyBrowser from './LobbyBrowser/LobbyBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', status: 'registering'};
    
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCreateLobby = this.handleCreateLobby.bind(this);
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
    this.props.client.createLobby(lobbyName)
  }


  render() {
    switch (this.state.status) {
      case 'registering':
        return(
          <NameForm onRegister={this.handleRegister}/>
        )
      case 'looking':
        return(
          <LobbyBrowser onCreateLobby={this.handleCreateLobby}/>
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
