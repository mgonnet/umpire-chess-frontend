import React from 'react';

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <p>Estas en el lobby: - {this.props.name}!</p>
        <p>Players: {JSON.stringify(this.props.players)}</p>
      </div>
    );  
  }
}

export default Lobby;
