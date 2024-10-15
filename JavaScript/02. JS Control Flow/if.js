// JavaScript if...else Statement
// Syntax
//  if(condition){
//     // block of  code
//  }

// if (condition) {
//     // block of code
//     // execute this if condition is true
// }
// else {
//     // block of code
//     // execute this if condition is false
// }

let score = 50
// check the condition

if(score >50){
    console.log('You passed the exams')
}
else {
    console.log('You failed the exams')
}


// const num = prompt('Enter a number')

// // check if number is greater than 0 

// if(num > 0){
//     console.log('Positive Number')
// }
// else{
//     console.log('Its just number')
// }

// even odd formula
// if ( num % 2 == 0)

//else if 
n = 0
if(n>0){
   console.log('Positive Number')
}
else if(n<0){
   console.log('Negative Number')
}
else {
   console.log('Zero Number')
}

let rating = 3

if (rating <= 2){
    console.log('Bad Rating')
}
else if (rating >= 4){
    console.log('Good Rating')
}
else {
    console.log('Average Rating')
}

// Nested if else Statement

let marks = 30


if(marks >= 40){
   
    if(marks>= 80){
      console.log('Good Student')
    }
    else {
        console.log('Passed')
    }

}
else {
    console.log('Failed ')
}   

// Ternary Operator
let age = 15
let  result
if(age>=18){
    result = 'You are eligible for vote'
}
else{
    result = 'You are not eligible for vote yet'
}
console.log(result )


// with ternary operator

let ages = 15
let results = (ages>18) ? 'You are eligible for vote' : 'Not Eligible'
console.log(`Your Vote ${results} information`)