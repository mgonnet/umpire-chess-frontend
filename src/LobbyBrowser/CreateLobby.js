import React from 'react';

class CreateLobby extends React.Component {
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
    this.props.onCreateLobby(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          class="inputText"
          placeholder="Lobby Name"
          value={this.state.value} 
          onChange={this.handleChange} />
        <input 
          type="submit"
          class="boton"
          value="Create" />
      </form>
    );  
  }
}

export default CreateLobby;
