let x = 5 
let y = 5
 x = 10
//Arithmetic Operator
// Addition
console.log("Addition: x + y = ", x + y)
// Subtraction
console.log('Sub is x - y =', x-y)
// Multiplication
console.log("Mul: x * y = ", x * y)
// Divison
console.log('Div is x / y =', x/y)
// reminder
console.log('Reminder : x % y', x % y)
// increment
console.log("Increment : ++x=", ++x)
console.log("Increment : ++x=", x++)
console.log(x)// Post

// decrement
console.log('Decrement : --x', --x)
console.log('Decrement : x--', x--)
console.log(x)// Post

// power
console.log('Power is  x ** y =', x**y )

//Assigmnet Operator

// assignmnet
let a = 10
console.log('Assignment : a =' , a)
// addition asignment
a+=5 // a = a + 5
console.log('Addition Assignment : a+5 =' , a)
// Subtraction 
a-=5 // a = a - 5
console.log('Subtraction assignmnet : a-5 =', a)

//.............................


// Comparsion Operator

const b = 10 , c = 4
console.log(b>c) 


// equal to operator
console.log('Equal to 2 == 2 :',2 == 2)
// not equal to operator
console.log('Not Equal to : 3 != 3: ', 3 !=3)
// strictly equal to operator
console.log('Strictly 2 === 2 is:', 2 === '2')
// strictly not equal to operator
console.log('Not equal Strictly 2 === 2 is:', 2 !== '2')

// greater than 
console.log('Greater Than  4 > 3 :', 4 > 3)
// less than 
console.log('Less Than  2 < 3 :', 2 < 3)
// greater than equalto
console.log('Greater Than  4 >= 3 :', 4 >= 4)
// less than 
console.log('Less Than  4 <= 3 :', 4 <= 3)

//..................................................


// Logical Operator

let z = 3
// Logical AND

console.log((z<5) && (z>0)) // return true
console.log((z<5) && (z>6)) // return false

// Logical OR

console.log((z>2) || (z>0)) // return true
console.log((z>5) || (z<6)) // return true

// Logical Not

console.log(!z==3)
console.log(!z<1)

// JS String Concatenation Operator

let str = 'Helo', str1 = 'js'
console.log(str + str1)

// Js Ternary Operator
let marks = prompt('Enter Your marks')

// check the condition
let result = (marks>40) ? 'pass' : 'fail'

console.log(`You ${result} the exam `)

// Js typeof Operator

const ab = 9
console.log(typeof ab) // number
console.log(typeof '9')// string
console.log(typeof false)// boolean
