import React from 'react';
import PlayersList from './PlayersList';
import '../styles/lobby.css'
import king from '../svg/king.svg'
import king_w from '../svg/king_w.svg'

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
  
    this.state = { 
      players: this.props.lobbyInfo.players,
      creator: this.props.lobbyInfo.creator
    };

    this.chooseRolHandler = this.chooseRolHandler.bind(this)
    this.startGameHandler = this.startGameHandler.bind(this)
  }

  chooseRolHandler(rol){
    this.client.chooseRol(rol).then(({lobbyInfo: {players}}) => {
      this.setState({
        players
      })
    })
  }

  startGameHandler(){
    this.client.startGame().then((info) => {
      this.props.onGameStart(info)
    })
  }

  componentDidMount(){
    this.client.addEventListener('LOBBY-UPDATE', ({lobbyInfo}) => {
      this.setState({
        players: lobbyInfo.players
      })
    })

    this.client.addEventListener('GAME-START', (lobbyInfo) => {
      this.props.onGameStart(lobbyInfo)
    })
  }

  render() { 

    let players_black = this.state.players.filter((player) => player.rol === 'b').map((player) => 
      <h2>{player.name}</h2>
    )

    let players_white = this.state.players.filter((player) => player.rol === 'w').map((player) => 
      <h2>{player.name}</h2>
    )

    let players_spectate = this.state.players.filter((player) => !player.rol).map((player) => 
    <h2>{player.name}</h2>
  )

    return (
      <div id="lobby">
        <div class="lobby-side"> 
          <img 
            class="lobby-piece"
            src={king}
            onClick={this.chooseRolHandler.bind(null, 'b')}></img>
          <div
            style={{gridArea: `players`}}>
            {players_black}
          </div>          
        </div>
        <div id="lobby-middle">
          {this.props.IamCreator && 
            <button
              id="start-game"
              class="boton"
              onClick={this.startGameHandler}>Start Game!</button>}
          <div id="lobby-spectate-list">
            {players_spectate}
          </div>                              
        </div>
        <div class="lobby-side"> 
          <img 
            class="lobby-piece"
            src={king_w}
            onClick={this.chooseRolHandler.bind(null, 'w')}></img>
          <div
            style={{gridArea: `players`}}>
            {players_white}
          </div>
        </div>
      </div>      
    );  
  }
}

export default Lobby;
