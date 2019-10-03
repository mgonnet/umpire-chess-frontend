import React from 'react';

class NameForm extends React.Component {
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
    this.props.onRegister(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form class="smallForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          class="inputText" 
          value={this.state.value} 
          onChange={this.handleChange}
          placeholder="Player Name"
        />
        <input 
          type="submit"
          class="boton"
          value="Join Server" />
      </form>
    );  
  }
}

export default NameForm;
