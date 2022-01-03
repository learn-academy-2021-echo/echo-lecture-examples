import React, { Component } from 'react'
import List from './components/List'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Pepperoni", "Two Buck Chuck", "Hummus", "Orange Chicken", "Cheesecake"],
      ralphs: ["Milk", "Beer", "Liquor"],
      cart: []
    }
  }

  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }

  render(){
    return(
      <>
        <h1>Terrible InstaCart</h1>

        <h3>Trader Joes</h3>
        <List
          cartItem={this.state.traderJoes} addItem={this.addItem}
        />

        <h3>Ralphs</h3>
        <List
          cartItem={this.state.ralphs} addItem={this.addItem}
        />

        <h3>Items Added to Cart</h3>
        <ul>
          {this.state.cart.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
