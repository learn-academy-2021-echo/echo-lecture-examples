Jest 12/08/21
# Set up
    $ cd into javascript-foundations- challenges
    $ git status
    $ git checkout -b new-branch-name
    $ mkdir testing-initials-initials
    $ cd testing-initials-initials
    $ touch name-name.test.js
    $ yarn add jest
# Add The Test
    $ yarn jest

# TDD (Test Driven Development)

The philosophy and practice safely creating code. 

- Unit Test (what we're learning today)
- Integration Test 
- End to End Testing

## Red Green Refactor
    1. We write our test and run it
        - figure out our desired output
        - setting up enviroment for our test
        - watch the test fail
        - RED (does not mean we've done something wrong)
    2. Write the code that makes the test pass
        - problem solving the coding issues
        - console.log() ing with tags as needed
        - make the test pass
        - GREEN
    3. Refactor the code 
        - Clean up your extra console.log's
        - Make the code readable
        - Keep checking that the code still passes
        - GREEN

# Describe It Expect Syntax

```javascript 
// "describe" lets us tell ourselves and other developers what part of the code is being tested
describe("A string of the name of the unit test", ()=>{
    // "it" should be a description of the tests being created
    it("tests if some function with some data has a result", ()=>{
        // expect takes an argument of the function call /invocation and appends on that argument a jest matcher
        expect(nameOfFunction("this data")).toEqual("this result")
    })
})

describe("A string of the name of the unit test", ()=>{
    // "it" should be a description of the tests being created
    test("tests if some function with some data has a result", ()=>{
        // expect takes an argument of the function call /invocation and appends on that argument a jest matcher
        expect(nameOfFunction("this data")).toEqual("this result")
    })
})


