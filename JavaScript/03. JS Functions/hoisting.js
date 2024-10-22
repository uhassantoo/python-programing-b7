var test = 5
console.log(test)

// Hoisting in JavaScript
// There are generally two types of hoistings in JavaScript:

// Variable Hoisting
// Function Hoisting

// var let const
// console.log(abc)
// let abc = 'Hello'

// call function before define
abc()
abc()
abc()

function abc(){
    console.log('Function Hoisting')
}