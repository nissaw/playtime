import React from 'react';
import { Link } from '@reach/router';
import Key from './Key';
import './Key.css';

const CASE = ['lowercase', 'uppercase'];

class Keyboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      case: 0,
    };
    this.changeCase = this.changeCase.bind(this);
  }
  changeCase = () => {
    this.setState(state => ({
      case: 1 - state.case // toggle 0 to 1
    }));
  }

  render () {
    const { vowels, consonants, updateChar, selectAll } = this.props;
    return ( 
      <div className="keyboard-container">
        <h3>VOWELS</h3>   
        <div className="keyboard" style={{ textTransform: `${CASE[this.state.case]}` }}>
          {Object.keys(vowels).map(v => <Key char={v} key={v} selected={vowels[v].selected} updateChar={updateChar} charset="vowels"></Key>)}
        </div>

        <h3>CONSONANTS</h3>
        <div className="keyboard" style={{ textTransform: `${CASE[this.state.case]}` }}>
          {Object.keys(consonants).map(v => <Key char={v} key={v} selected={consonants[v].selected} updateChar={updateChar} charset="consonants"></Key>)}
        </div>

        <div className="action-group">
          <button onClick={this.changeCase}>{CASE[1-this.state.case]}</button>
          <button onClick={selectAll}>Select All</button>
          <Link to="/"><button>Play the Game!</button></Link>
        </div>
      </div>
    )
  }
}

export default Keyboard;