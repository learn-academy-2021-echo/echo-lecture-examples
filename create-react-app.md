Create React App 12/15/2021
Getting started with Create React App

$ cd directory of choice 
$ yarn create react-app my-app
$ cd my-app
$ yarn start
- opens a new chrome tab navigating to localhost:3000

open the code in a text editor of your choice 

- Edit App.js 
- create a directory in the src called components
    my-app/src/components
- create a new file Header.js -- Components are always pascal cased
- Set up the new file using class components 
- Name the class the same as the file
- Each class component needs the render lifecycle method and the render needs a return
- Each class needs to display something in the return and the JSX needs to be wrapped in one element (react fragments are really helpful here)
- Once we're ready to display the component we import it to the App.js and create a component call inside of App.js render


Recap: 
We used yarn as our package manager and the Create React App Command to build ourselves a working react app

We updated the app to use class components

We set up a components folder we we can build out individual pieces of our app and bring them together in our App.js

We imported and called upon the components in our App.js

We can see all the changes we have made while we were making them