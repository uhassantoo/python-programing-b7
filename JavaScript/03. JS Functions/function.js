// How to create function in JS
function greet(){
    console.log('Good Morning')
}

// Call a function
greet()
console.log('Hello')

// Function with parameter(Arguments)

function greet1(name,id){
//    console.log(`Hello ${name} , Id ${id}`)
console.log('Hello',name,id)

}

// call a function
// greet1(123,321)
// greet()
// greet1('umer','python')

// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// greet1('Ayan', 24)
// greet1('02',22)

// Create a function to add two number


function add(num1,num2){
    let sum = num1 + num2
    console.log('Sum is :', sum)
}

// call a function
add(5,5)
add(10,20)
add(50,88.8)

// Function With Return Statement

function square(num){
    return num * num
}

// call a functio and store the result
// let sqr = square(5)

// console.log('Square is :', sqr)

// Function with return statement
function display(){
    
    console.log('Execute Value 1')
    return 'Return the statement'
    console.log('This will not executed')
}
console.log(display)

function sub(num1,num2){
    return num1 - num2
}


// JS Library Function
// sqr find
let sqrroot = Math.sqrt(5)
console.log('Square root :', sqrroot)

// Math pow
let power = Math.pow(2,3)
console.log('Power is:', power)

// uppercase()
let abc = 'umer hassan'
let abcupper = abc.toUpperCase()
console.log(abc)
console.log('Library Function uppercase:',abcupper)

// // task
//   // Create a function that takes two numbers as input and returns the largest of the two.
//   Write a function that takes a temperature in celsius and converts it to Fahrenheit.

// Anonymous Function
let display1 = function(){
    console.log('Hello Python')
}
display1()

let show = function(a,b){
    console.log('Add number:' , a+b)
}

show(2,2)


// function with default parameter value 

function py(a=4 , b=6){
    sum = a+b
    console.log('Sum is with default value:', sum)
}
py(2,6)