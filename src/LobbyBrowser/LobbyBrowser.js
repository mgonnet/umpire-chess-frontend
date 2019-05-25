import React from 'react';
import CreateLobby from './CreateLobby';

class LobbyBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <p>Aca vamos a buscar lobbies</p>
        <CreateLobby onCreateLobby={this.props.onCreateLobby} />
      </div>
    );  
  }
}

export default LobbyBrowser;
