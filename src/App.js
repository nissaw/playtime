import React, { Component } from 'react';
import './App.css';
import Letter from './Letter';

const letter_groups = {
  vowels: ['a', 'e', 'i', 'o', 'u'],
  consonants: ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      letter: this.getRandom(letter_groups.vowels)
    }
    this.randomBlend = this.randomBlend.bind(this)
    this.cycleVowels = this.cycleVowels.bind(this)
    this.cycleConsonants = this.cycleConsonants.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Letter name={this.state.letter}></Letter>
          <div style={{display:"flex",justifyContent: "center"}}>
            <div style={{border:"1px solid salmon",marginRight:"5px",padding:"10px"}}>
              <h3>Single Letters</h3>
              <button onClick={(e) => this.changeLetter(letter_groups.vowels)}>Get a new vowel</button>
              <button onClick={(e) => this.changeLetter(letter_groups.consonants)}>Get a new consonant</button>
            </div>
            <div style={{border:"1px solid lightgray",marginLeft:"5px",padding:"10px"}}>
              <h3>Vowel Blends</h3>
              <button onClick={this.randomBlend}>Random Blend</button>
              <button onClick={this.cycleVowels}>Cycle Vowels</button>
              <button onClick={this.cycleConsonants}>Cycle Consonants</button>
            </div>
          </div>
          <h5>Click the letter to switch between upper and lower case!</h5>
        </header>
      </div>
    );
  }
  randomBlend = () => {
    this.setState(state => ({
      letter: `${this.getRandom(letter_groups.consonants)}${this.getRandom(letter_groups.vowels)}`
    }))
  }

  cycleVowels = () => {
    let vowel = this.state.letter[this.state.letter.length-1];
    let consonant = this.state.letter.length === 2 ? this.state.letter[0] : "";
    
    this.setState(state => ({
      letter: `${consonant}${this.getNextLetter(letter_groups.vowels, vowel)}`
    }))
  }


  cycleConsonants = () => {
    let vowel = this.state.letter.length === 2 ? this.state.letter[1] : "";
    let consonant = this.state.letter[0];

    this.setState(state => ({
      letter: `${this.getNextLetter(letter_groups.consonants, consonant)}${vowel}`
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
    this.setState(state => ({
      letter: this.getRandom(list)
    }));
  }
}

export default App;
