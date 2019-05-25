import React from 'react';
import { UmpireClient } from '@mgonnet/umpire-client'
import NameForm from './NameForm'
import LobbyBrowser from './LobbyBrowser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', status: 'registering'};
    
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(user) {    
    this.props.client.register(user).then((response) => {
      if(response === 'OK'){
        this.setState({
          status: 'looking'
        })
      }
    })
  }


  render() {
    if(this.state.status === 'registering'){
      return (
        <NameForm onRegister={this.handleRegister}/>
      );
    }else if(this.state.status === 'looking'){
      return (
        <LobbyBrowser />
      )
    }else{
      return (
        <div>
          <p>Algo se rompio</p>
        </div>
      )
    }
    
  }
}

export default App;
