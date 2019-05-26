import React from 'react';
import PlayerDetail from '../PlayerDetail';

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let playerList = this.props.players.map((player) =>
      <PlayerDetail name={player.name} />
    )
    return (
      <div>
        <p>Estas en el lobby: - {this.props.name}!</p>
        {playerList.length > 0 &&
          <div>
            <p>Players:</p>
            {playerList}
          </div>
        }
      </div>
    );  
  }
}

export default Lobby;
