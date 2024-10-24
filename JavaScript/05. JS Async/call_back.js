function greet(name){
    console.log('Hi..... '+ ''+ name)
}
greet('Joe')

// Call BACK Function
function greet1(name,callback){
    console.log('Hi'+ ' ' +name)
    callback()
}  
// callback function
function callme(){
    console.log('Hi I am callback function')
}
greet1('Ali',callme)

//................................
function hello1(name,sayhello){
    console.log('hellow class')
    //callback function
    sayhello(name)

}
function sayhello(name){
    console.log('HI......'+ ' '+ name)

}

setTimeout(hello1, 2000, 'Umer',sayhello)
