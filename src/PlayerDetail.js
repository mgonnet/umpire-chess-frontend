import React from 'react';

class PlayerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
      </div>
    );  
  }
}

export default PlayerDetail;
