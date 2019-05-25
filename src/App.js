import React from 'react';
import { UmpireClient } from '@mgonnet/umpire-client'
import NameForm from './NameForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.client = UmpireClient({url: 'ws://localhost:3000', WSConstructor: WebSocket})
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(user) {
    alert('gil')
    this.client.register(user)
  }


  render() {
    return (
      <NameForm
          scale="f"
          onTemperatureChange={this.handleRegister} />
    );  
  }
}

export default App;
