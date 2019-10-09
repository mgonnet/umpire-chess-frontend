import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({user: event.target.value, error: null });
  }

  handleSubmit(event) {
    
    event.preventDefault();

    this.props.client.register(this.state.user).then((response) => {
      window.addEventListener('beforeunload', this.props.client.leave)
      if(response === 'OK'){
        this.setState({
          status: 'looking'
        })
      }
      this.props.onRegister()
    }).catch((error) => {
      this.setState({
        error
      })
    })
  }

  render() {
    return (
      <div id="registration">
        <form class="smallForm loginForm" onSubmit={this.handleSubmit}>          
          <input 
            type="text" 
            class="inputText" 
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder="Player Name"
          />
          {
            this.state.error &&
              <div class="error">{this.state.error}</div>
          }      
          <input 
            type="submit"
            class="boton"
            value="Join Server" />
        </form>
      </div>      
    );  
  }
}

export default NameForm;
