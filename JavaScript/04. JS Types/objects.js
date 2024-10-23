const person = ['name' , 'age', 'address']
console.log(person)

let  person1 = {
    name : 'Umer',
    age : 29,
    address : 'Lahore'
}

let bryani = {
    orderid : 0,
    item : 'chicken bryani',
    price : 360,
    size : 'Single',
    qty : 1
}
console.log(person1.name)
console.log(bryani.price)
// JavaScript Object Operations

let data = {
    name : 'Boby',
    id : 1234,
    hobby : 'Games'
}

// Modify Data

data.hobby = 'Singing '
// display
console.log(data)

// Add
data.address = 'LHE'
data.course = 'Python'
console.log(data)

// Delete
delete data.address

console.log(data)