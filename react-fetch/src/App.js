import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nasa: "",
      currentImage: null
    }
  }
  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_MY_NASA_KEY}`)
      .then(response => response.json())
      .then(payload => this.setState({nasa: payload.photos, currentImage: payload.photos[0].img_src}))
  }
  getImage = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({currentImage: this.state.nasa[randomNum].img_src})
  }
  render() {
    return(
      <>
        <h1>YO!</h1>
        <button onClick={this.getImage}>Get a Random Mars Image</button>
        <br />
        {this.state.currentImage && <img src={this.state.currentImage} alt="random rover image of mars" width="400px"/>}
      </>
    )
  }
}
export default App
