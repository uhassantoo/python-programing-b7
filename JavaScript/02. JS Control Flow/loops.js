
console.log('Umer Hassan')
 
//Loops
//for loops
for(let i = 0 ; i< 10 ; i++){
    console.log('Umer Hassan')
}

// Syntax
// for (initialExpression; condition; updateExpression) {
//     // for loop body
// }
// 1 print console
// 2

for(let i = 1 ; i<5 ; i++){
    console.log(i)
}
// 1
//2
//

// Display the sum of natural numbers

let sum = 0 
const n = 100

// for loop i = 1 to i = n 
// in each iteration  i is increased by 1
for(let i = 1 ; i <=n ; i++ ){
    sum = sum + i // sum+ = i 
}

console.log(`Sum is : ${sum}`)

// Simple example

for (var i = 0 ; i< 15 ; i++){
    let name = 'Umer Hassan'
    console.log('Hi my name is :' + name)
}
// How to Display a Sequence of Numbers with a For Loop
//How to Display a Sequence of Even Numbers

// For loop with array

const fruits  = ['Apple',200, 'cherry',300]
console.log(fruits)
for(let i = 0 ; i<fruits.length; i++){
    console.log(fruits[i])
}

// // While Loop
// while (condition) {
    
// }

let ab = 10
// with while loop
while(ab < 20){
    console.log(ab)
    ab +=1
}

// Sum only positive number

// let num = 0 , add = 0
// while(num>=0){
//     //add all positive number

//     add += num // add = add + 1
//     num = parseInt(prompt('Enter a number '))

// }
// console.log(`The sum is  ${add}`)

// do while
let abc = 3
// do while
do{
 console.log(abc) // 3
 abc--  // 3-1 2
 
}while(abc>0)

// Break Statement

while(true){
    // get num input from user

    let num = Number(prompt('Enter a number '))

    // break condition
    if (num == 0){
        break
    }
    console.log(num)
}

// Continue Statement

// odd number

for(let i = 2; i<=10; i++){  // i = 2 condition
    if(i % 2 == 0){
     continue  // Skip iteration
    }
   console.log(i)
}