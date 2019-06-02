import React from 'react';
import PlayersList from './PlayersList';

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
  
    this.state = { 
      players: this.props.lobbyInfo.players
    };
  }

  componentDidMount(){
    this.client.addEventListener('LOBBY-UPDATE', (lobbyInfo) => {
      this.setState({
        players: lobbyInfo.players
      })
    })
  }

  render() {  
    return (
      <div>
        <p>Estas en el lobby: - {this.props.name}!</p>
        <PlayersList players={this.state.players} />
      </div>
    );  
  }
}

export default Lobby;
