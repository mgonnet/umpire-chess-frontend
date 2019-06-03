import React from 'react';
import PlayerDetail from './PlayerDetail'

function PlayerList(props) {
  let playerList = props.players.map((player) =>
    <PlayerDetail 
      key={player.name}
      name={player.name}
      rol={player.rol}
      me={player.me}
      onChooseRol={props.onChooseRol}/>
  )
  return <div>{playerList}</div>;
}

export default PlayerList;