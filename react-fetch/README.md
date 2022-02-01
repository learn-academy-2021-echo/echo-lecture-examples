# React Fetch

Fetch - asynchronous action
Fetch will return a Promise
Promise is a JS object that has three states
1. pending
2. fulfilled
3. rejected


Initial build:
```
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationData: ""
    }
  }
  getLocation = () => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => this.setState({locationData: payload}))
  }
  render() {
    console.log(this.state.locationData)
    return(
      <>
        <h1>Hello World</h1>
        <button onClick={this.getLocation}>Get Your Location Data</button>
        <p>Your IP: {this.state.locationData.ip}</p>
        <p>Your city: {this.state.locationData.city}</p>
      </>
    )
  }
}
export default App
```
With destructuing:
```
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationData: ""
    }
  getLocation = () => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(payload => this.setState({locationData: payload}))
  }
  render() {
    console.log(this.state.locationData)
    const {ip, city} = this.state.locationData
    return(
      <>
        <h1>Hello World</h1>
        <button onClick={this.getLocation}>Get Your Location Data</button>
        <p>Your IP: {ip}</p>
        <p>Your city: {city}</p>
      </>
    )
  }
}
export default App

```
NO API KEYS ON GITHUB!! NO GIT COMMANDS with an exposed API key!


```
import React, { Component } from 'react'
// import mockData from './nasaMockData.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nasa: "",
      currentImage: ""
    }
  }
  componentDidMount() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=")
      .then(response => response.json())
      .then(payload => this.setState({nasa: payload.photos}))
  }
  getImage = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({currentImage: this.state.nasa[randomNum].img_src})
  }
  render() {
    console.log("nasa array:", this.state.nasa)
    console.log("image:", this.state.currentImage)
    return(
      <>
        <h1>YO!</h1>
        <button onClick={this.getImage}>Get a Random Mars Image</button>
        <br />
        <img src={this.state.currentImage} alt="random rover image of mars" width="400px"/>
      </>
    )
  }
}
export default App

```

Filename: .env
Add to .gitignore
Creating a variable name that starts with this: `REACT_APP_`
Reference key with `process.env.KEY_NAME`
Restart your server
