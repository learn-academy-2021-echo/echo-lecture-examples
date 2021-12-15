# React State 12/15/2021


Setup
- $ yarn create react-app react-state

Mini code to get hello world on the screen
- import React Component
- declare a class
- render
- return
- fragments
- JSX tag
- export

If we are coding in the return how do I put JS code in this section?
- escape JSX with {}

How do you set up variables that belong to the React class?
- constructor(props)
- super(props)
- this.state = {}
- key values pairs

Class{
  constructor
  logic
  render
}

Method to run when I click a button what attribute do I need?
onClick


First iteration:
```
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0
    }
  }
  addMile = () => {
    this.setState({miles: this.state.miles + 1})
  }
  render(){
    return (
      <>
        <h1>Miles Tracker</h1>
        <p>Miles: {this.state.miles}</p>
        <button onClick={this.addMile}>
          Add a mile
        </button>
      </>
    )
  }
}

export default App
```
