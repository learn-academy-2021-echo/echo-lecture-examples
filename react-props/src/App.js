import React, { Component } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'

 class App extends Component {
  // First Section of Class hold my constructor and my state object
  constructor(props){
    super(props)
    this.state = {
      animals: ["Lion", "Tiger", "Bear","Rhino","Platapus","Elephant","Tauntaun", "Naked Mole Rat"]
    }
  }
  // Second Section is where our methods lives. Methods process logic for our project

   render() {
     // Third Section of our Class is the return of our Render Method. We use this section to display things to our user. We can also use this section to call other components and pass data to those components .
     return (
       <>
         <h1 id="title">Hello World</h1>
         
         {/* A react component call is special in that it can take custom attributes called props. These attributes become part of the compononets object. Props can be dynamic or static.*/}
         <FlashCard animal={this.state.animals} />

         {this.state.animals.map((value, index) => {
           return <FlashCard animal={this.state.animals[index]} />;
         })}
       </>
     );
   }
 }
export default App