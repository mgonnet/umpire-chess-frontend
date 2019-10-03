import React from 'react';

class LobbyBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleCreateLobby = this.handleCreateLobby.bind(this);
    this.handleJoinLobby = this.handleJoinLobby.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleCreateLobby(event) {
    this.props.onCreateLobby(this.state.value)
    event.preventDefault();
  }

  handleJoinLobby(event) {
    this.props.onJoinLobby(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Lobby Browser</h2>
        
        <div class="smallForm">
          <input 
            type="text"
            class="inputText"
            placeholder="lobby name"
            value={this.state.value} 
            onChange={this.handleChange} />                       
          <button 
            class="boton"
            onClick={this.handleCreateLobby}> 
            Create </button>
          <button 
            class="boton"
            onClick={this.handleJoinLobby}> 
            Join </button>
        </div>
      </div>
      
    );  
  }
}

export default LobbyBrowser;
