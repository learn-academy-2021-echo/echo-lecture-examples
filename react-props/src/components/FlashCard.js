import React, { Component } from 'react'

export default class FlashCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return (
          <>
            <div id='card'>
              <h1>hey this is a flash card</h1>
            {/* 
                - "this" refers to the class we are inside of.
                - "props" refers to the data being passed to the component via the component call.
                - "animal" is the custom name we gave this prop in the compoennt call on App.js line 22. 
            */}
              <h2>{this.props.animal}</h2>
            </div>
          </>
        );
    }
}
