import React from 'react';
import { UmpireClient } from '@mgonnet/umpire-client'
import NameForm from './NameForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', status: 'registering'};
    
    this.client = UmpireClient({url: 'ws://localhost:3000', WSConstructor: WebSocket})
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(user) {
    alert('gil')
    this.client.register(user)
  }


  render() {
    if(this.state.status === 'registering'){
      return (
        <NameForm handleRegister={this.props.client.register}/>
      );
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
