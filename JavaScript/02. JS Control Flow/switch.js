//JavaScript switch...case Statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let trafic_light = 'blue'
let message = ''

switch(trafic_light){
    case 'red':
        message = 'Stop'
        break
    case 'yellow':
        message = 'Prepare to stop'
        break
    case 'green':
        message = "Proceed to driving"
        break
    default:
        message= 'Invalid lights'
}
console.log(message)


// Suppose we want to display a message based on the current day of the week.

// simple calculator

// take user input

let num1 = Number(prompt('Enter a value of number 1:'))
let num2 = Number(prompt('Enter a value of number 2:'))

// take a user input to select a operator
const operator =  prompt('Enter a operator ( + , - , * , / ): ')


switch(operator){
    case '+':
        result = num1 + num2
        console.log(`${num1} + ${num2} = ${result}`)
        break

    case '-':
        result = num1 - num2
        console.log(`${num1} - ${num2} = ${result}`)
        break
    case '*':
        result = num1 * num2
        console.log(`${num1} * ${num2} = ${result}`)
        break
    case '/':
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result}`)
        break

    default:
        console.log('Invalid Value')


}