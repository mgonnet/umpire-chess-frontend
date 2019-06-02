import React from 'react';
import PlayerDetail from './PlayerDetail'

function PlayerList(props) {
  let playerList = props.players.map((player) =>
      <PlayerDetail name={player.name} rol={player.rol}/>
    )
  return <div>{playerList}</div>;
}

export default PlayerList;