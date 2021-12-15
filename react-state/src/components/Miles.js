import react, { Component } from 'react'

class Miles extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0,
      color: "green"
    }
  }
  addMile = () => {
    this.setState({miles: this.state.miles + 1})
  }
  render(){
    return (
      <>
        <p>Miles: {this.state.miles}</p>
        <button onClick={this.addMile} style={{color: this.state.color}}>
          Add a mile
        </button>
        <div id="square"></div>
      </>
    )
  }
}

export default Miles
