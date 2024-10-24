// Javascript setTimeout()

// setTimeout(function, miliseconds)


function greet(){
    console.log('Hellow Python Class')

}
setTimeout(greet ,3000)
console.log('Happy Birthday Python ')

//Example
function show_time(){
    let date_time = new Date()

    let time = date_time.toLocaleTimeString()
    console.log(time)

    // display after 2 seconds
    setTimeout(show_time,2000)
}
show_time()