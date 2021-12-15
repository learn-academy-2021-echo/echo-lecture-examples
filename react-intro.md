# React Intro 12/14/2021

A JavaScript library for building user interfaces

Library - collection of code snippets that work together to create something meaningful

### Whys
Scale - ability for app to grow

React was creating in response to Facebook scaling
They needed:
- Reusable structure
- User interactions need to be super efficient

Reusable structure
- React is made up of components
- Components can be classes or functions - reusable, dynamic

User Interaction
- DOM - Document Object Model
- Virtual DOM - sits between the DOM and the code and listens for changes, listening for a diff, only updates the HTML tags/elements that have been changed


### Whats

SPA - single page application, comprised of lots of components (reusable), collage

Base code - React "out of the box" is a complicated file structure


Today - looking at just the components



JSX - JavaScript XML, HTML<>JavaScript


Return exactly one thing
If you try and return two things: `babel.min.js:1 Uncaught SyntaxError: /Inline Babel script: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`

JSX fragment - generic wrapper tag
