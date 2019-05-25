import React from 'react';

class LobbyBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.handleRegister(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Aca vamos a buscar lobbies</p>
      </div>
    );  
  }
}

export default LobbyBrowser;
