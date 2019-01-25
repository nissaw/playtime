import React, { Component } from 'react';
import { Link } from '@reach/router';
import Letter from './Letter';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: this.props.vowels[0],
    }
    this.randomBlend = this.randomBlend.bind(this)
    this.changeLetter = this.changeLetter.bind(this)
    this.cycleVowels = this.cycleVowels.bind(this)
    this.cycleConsonants = this.cycleConsonants.bind(this)
  }

  static getDerivedStateFromProps (props, state){
    if (!state.letter) return { letter: props.vowels[0] }
  }
  
  render() {
    const { vowels, consonants } = this.props;

    return (
      <div>
        <Letter name={this.state.letter}></Letter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ border: "1px solid salmon", marginRight: "5px", padding: "10px" }}>
            <h3>Single Letters</h3>
            <button onClick={(e) => this.changeLetter(vowels)}>Get a new vowel</button>
            <button onClick={(e) => this.changeLetter(consonants)}>Get a new consonant</button>
          </div>
          <div style={{ border: "1px solid lightgray", marginLeft: "5px", padding: "10px" }}>
            <h3>Vowel Blends</h3>
            <button onClick={this.randomBlend}>Random Blend</button>
            <button onClick={this.cycleVowels}>Cycle Vowels</button>
            <button onClick={this.cycleConsonants}>Cycle Consonants</button>
          </div>
        </div>
        <h4>
          <Link to="/keyboard"><button>Select Letters to Play with</button></Link>
        </h4>
        <h5>Click the letter to switch between upper and lower case!</h5>
      </div>

    );
  }

  randomBlend = () => {
    const { vowels, consonants } = this.props;

    this.setState(state => ({
      letter: `${this.getRandom(consonants)}${this.getRandom(vowels)}`
    }))
  }

  cycleVowels = () => {
    let vowel = this.state.letter[this.state.letter.length - 1];
    let consonant = this.state.letter.length === 2 ? this.state.letter[0] : "";

    this.setState(state => ({
      letter: `${consonant}${this.getNextLetter(this.props.vowels, vowel)}`
    }))
  }


  cycleConsonants = () => {
    let vowel = this.state.letter.length === 2 ? this.state.letter[1] : "";
    let consonant = this.state.letter[0];

    this.setState(state => ({
      letter: `${this.getNextLetter(this.props.consonants, consonant)}${vowel}`
    }))
  }

  getNextLetter = (list, letter) => {
    let currIdx = list.indexOf(letter);
    if (currIdx !== -1 && currIdx < list.length - 1) {
      return list[++currIdx];
    } else {
      return list[0];
    }
  }

  getRandom = (list) => {
    let idx = Math.floor(Math.random() * list.length);
    return list[idx];
  }

  changeLetter = (list) => {
    this.setState({
      letter: this.getRandom(list)
    });
  }
}

export default Quiz;