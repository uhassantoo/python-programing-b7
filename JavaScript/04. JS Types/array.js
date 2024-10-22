// fruits = 'apple'

// fruits = 'orange'
// console.log(fruits)
// Array is an object that can be store multiple values in one variable
// create a array
const fruits = ['apple','orange','graphes','kiwi',200,100,50,25 , true , 10.8 ]
console.log(fruits)

// access element of array
console.log(fruits[0])
console.log(fruits[9])
console.log(fruits[10])
// Remember: Array indexes always start with 0, not 1.


// add element to an array
// push()

fruits.push('Banana')
console.log(fruits[10])

// unshift

fruits.unshift('Pineapple')
console.log(fruits[0])

// Change the element of an array

fruits[0] = 'strawberry'
console.log(fruits[0])

// remove element from an array
fruits.splice(2,1) // start from index
console.log(fruits)