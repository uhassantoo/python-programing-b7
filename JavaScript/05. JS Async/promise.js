// Promise
// let pro = new Promise(function(reslove, reject)){
//     /// do something
// }

let count = true

let countvalue = new Promise (function (reslove,reject){
    if(count){
        reslove('This is true and print count')
    }
    else {
        reject('this is false ')
    }
})
console.log(countvalue)


//
let a = new Promise(function (reslove,reject){
    reslove('Promise Resolved')
})

a.finally(
    function hi1(){
        console.log('This code is executed with the help of promise')
    }
)

// Rejected Method
let z = new Promise(function (reslove,reject){
    reject('promise Rejected')
})
z.then(
    function value(result){
        console.log(result)
    }
)
.catch(function errorvalue(result){
    console.log(result)
})
    