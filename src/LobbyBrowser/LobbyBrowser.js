import React from 'react';
import CreateLobby from './CreateLobby';
import JoinLobby from './JoinLobby';

class LobbyBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div class="smallForm">
        <p>Aca vamos a buscar lobbies</p>
        <CreateLobby onCreateLobby={this.props.onCreateLobby} />
        <JoinLobby onJoinLobby={this.props.onJoinLobby} />
      </div>
    );  
  }
}

export default LobbyBrowser;
