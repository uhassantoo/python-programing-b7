//JavaScript async/await

let pro = new Promise(function (reslove, reject){
    setTimeout(function (){
        reslove('Promise DONE and resolved')}, 4000)
})
async function aysncfun() {
    // wait untill the promise resolves
    let result = await pro

    console.log(result)
    console.log('Hello function')
}

aysncfun()

// Hello
// Promise
// Function with try catch (Error Handling , )
let pro1 = new Promise(function (reslove,reject){
    setTimeout(function(){
        reslove('Promise Done')},3000)
})

async function fun1() {
    try {
        // wait
        let res1 = await pro1
        console.log(res1)
    } catch (error) {
        console.log(error)
    }
}
// call a function

fun1()

// Example with try catch
const num1= 100 , num2 = 'a'


// Error Handling
try {
    console.log(num1/num2)
    console.log(a)
} catch (error) {
    console.log('Error caught')
    console.log('Error message' + error)
}
finally {
    console.log ('Executed')
}