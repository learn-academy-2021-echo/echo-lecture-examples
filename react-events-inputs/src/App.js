import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        funQuote:
          "In the beginning the Universe was created. This has made a lot of people very angry and has been widely regarded as a bad move.",
          //the state keeps track of changes over time so we can create a state key value pair that will hold our changed data
          userInput: ""
      };
  }
// See README.md for more notes
  handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  }

  handleClick = (e) => {
    console.log("hello there", e.target);
  }

  render(){
    let string = "the wolrd and all it's people";
    return (
      <>
        <input type="text" />
        <input type="radio" />
        <input type="date" />
        <input type="checkbox" />
        {/* <input type="password" /> */}

        <input type="test" value="placeholder" />
        <input type="test" value={string} />
        <input type="test" value={this.state.funQuote} />

        <input 
          type="text" 
          value={this.state.userInput} 
          onChange={this.handleChange} 
          />

        <h1 onClick={this.handleClick}>ObiWanKenobi</h1>

        <h4>{this.state.userInput}</h4>
      </>
    );
}
}

export default App;
