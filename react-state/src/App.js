import React, { Component } from 'react'
import Miles from './components/Miles'
import './App.css'

class App extends Component {
  render(){
    return (
      <>
        <h1>Miles Tracker</h1>
        <h4>January</h4>
        <Miles />
        <h4>February</h4>
        <Miles />
        <h4>March</h4>
        <Miles />
        <h4>April</h4>
        <Miles />
      </>
    )
  }
}

export default App
