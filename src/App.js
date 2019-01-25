import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Quiz from './Quiz';
import Keyboard from './Keyboard';
import { LETTER_GROUPS } from './Constants';


class App extends Component {
  constructor (){
    super();
    this.state = {
      vowels: {},
      consonants: {}
    }
  }

  loadDefaultLetters = () => {
    this.setState({vowels: LETTER_GROUPS.english.vowels, consonants: LETTER_GROUPS.english.consonants})
  }

  allowedLetters = (charset) => {
    return Object.keys(charset).filter(l => charset[l].selected);
  }

  componentDidMount() {
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem("letterLou");
    if (localStorageRef) {
      let { vowels, consonants } = JSON.parse(localStorageRef);
      this.setState({ vowels, consonants });
    } else {
      this.loadDefaultLetters();
    }
  }

  componentDidUpdate() {
    localStorage.setItem("letterLou", JSON.stringify(this.state));
  }

  updateChar = (char, charGroupName) => {
    // 1. Take a copy of the current state
    const charset = { ...this.state[charGroupName] };
    // 2. Update that state
    charset[char].selected = !charset[char].selected;
    // 3. Set that to state
    this.setState({ [charGroupName] : charset });
  }

  selectAll = () => {
    const vowels = { ...this.state.vowels };
    const consonants = { ...this.state.consonants };
    Object.keys(vowels).forEach(l => vowels[l].selected = true);
    Object.keys(consonants).forEach(l => consonants[l].selected = true);
    this.setState({ vowels, consonants });
  }

  render() {
    let allowedVowels = this.allowedLetters(this.state.vowels);
    let allowedConsonants = this.allowedLetters(this.state.consonants);
    return (
      <div className="App">
        <header className="App-header">
        <Router>
          <Quiz path="/" vowels={allowedVowels} consonants={allowedConsonants}></Quiz>
          <Keyboard vowels={this.state.vowels} consonants={this.state.consonants} updateChar={this.updateChar} selectAll={this.selectAll} path="/keyboard"></Keyboard>
        </Router>
        </header>
        <footer className="App-footer"><div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div></footer>
      </div>
    );
  }

}

export default App;
