import React from 'react';
import PlayersList from './PlayersList';

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
  
    this.state = { 
      players: this.props.lobbyInfo.players
    };

    this.chooseRolHandler = this.chooseRolHandler.bind(this)
  }

  chooseRolHandler(event){
    this.client.chooseRol(event.target.value).then(({players}) => {
      this.setState({
        players
      })
    })
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
        <PlayersList 
          players={this.state.players}
          onChooseRol={this.chooseRolHandler}
        />
      </div>
    );  
  }
}

export default Lobby;
