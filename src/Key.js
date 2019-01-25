import React, { Component } from 'react';
import './Key.css';

class Key extends Component {
  render(){
    const {char, charset, selected, updateChar} = this.props;
    return (
      <div className={`key-container ${selected ? "selected" : ""}`} onClick={() => updateChar(char, charset)}>{char}</div>
    )
  }

}

export default Key;