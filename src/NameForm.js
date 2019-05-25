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
    alert('gilo')    
    this.props.handleRegister(this.state.value)
    event.preventDefault();
  }

  render() {
    let gil = this.props.scale
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: {gil}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );  
  }
}

export default NameForm;
