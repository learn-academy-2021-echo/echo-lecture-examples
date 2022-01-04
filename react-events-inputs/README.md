# Input Attributes <Input>
Inputs are HTML (and JSX) tages.
Inputs are self closing tags and they don't require inner HTML.

```html
<input > 
```
## Type
Input tags provide lots of options for developers. Inputs can accept text, numbers, dates, passwords, and more. They can also look like text fields, radio buttons, or check boxes. This is determined by the "type" attribute.

```html
<input type="text" />
<input type='radio'/> 
<input type='date'/> 
<input type="checkbox" />
<input type="password" />
```
## Value
Value can be used differently for different types of input types. For buttons, a value attribute can represent the text that appears on the button. For text inputs, the value attribute can establish a default value. In React, the value attribute can directly represent the state object. Value works in conjunction with onChange to update state and store the user's input.

```html
<input type='test' value='placeholder'/>
```

```javascript
let string = "the wolrd and all it's people"
<input type='test' value={string}/>
```

## onChange
All inputs are listening for events. Developers can use the onChange method to execute logic every time there is a change on an element. In React, the onChange attribute can call a function that will update the state object and reflect back in the current value. It is customary to have an onChange listener associate with a handler method. Handler methods are named to associate their action with a particular event. By convention, a developer would know that a method called handleChange would be associated with an onChange event and a method called handleClick would be associated with an onClick event.

```javascript
  <input type="text" value={this.state.userInput} onChange={this.handleChange} />
  ```

## handleChange
In JavaScript, event listeners create a new instance of the class Event. Event has built in properties and methods that can be passed to a handleChange method. The convention is to shorten the name event to e.


By logging "e" we can look at the many properties and methods that are available to the class Event. To capture the characters the user is typing, we can use the property target which, as the name suggests, targets the input field.

```javascript
handleChange = (e) => {
  console.log(e)
  console.log(e.target)
  console.log(e.target.value)
}
```
Now that we have targeted the input, we can extract the value from the input field and set it to state.

```javascript
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    this.setState({ userInput: e.target.value})
  }
  render(){
    return(
      <>
        <input 
          type="text" 
          value={this.state.userInput} 
          onChange={this.handleChange}
        />
        <h4>{this.state.userInput}</h4>
     </>
    )
  }
}
export default App

  ```