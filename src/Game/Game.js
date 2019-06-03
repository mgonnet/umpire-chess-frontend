import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.client = this.props.client
  
    this.state = { 
      
    };
  }

  render() {  
    return (
      <div>
        <p>Estas en el juego!</p>
      </div>
    );  
  }
}

export default Game;
