import React, { Component } from 'react';

const CASE = ['lowercase','uppercase'];

class Letter extends Component {
  constructor(){
    super();
    this.state = {
      case: 0
    };
    this.changeCase = this.changeCase.bind(this);
  }

  render(){
    return (
      <h1 
      style={{ textTransform: `${CASE[this.state.case]}`, fontSize:"99px", cursor:"pointer"}} 
      onClick={this.changeCase}
      >
      { this.props.name }
      </h1>
    )
  }

  changeCase = () => {
    this.setState(state => ({
      case: 1 - state.case // toggle 0 to 1
    }));
  }
}


export default Letter;