//JavaScript Variable Scope
// Global Scope
// Local (Function) Scope
// Block-Level Scope

// Local Scope

function abc(){
    // local variable
    var msg = 'Hello Python Class'
    console.log('Message is :',msg)

}
abc()
// console.log(msg)
// Global Scope

var msg = 'Hellow msg two'

function abc1(){
    console.log('Local Message:', msg)
}
abc1()
console.log('Global Message:', msg)

// Block Level
function display(){
    // Local 
    let msg1 = 'Local Scope'
    if (true){
        // Blocl level varaible
        let msg1 = 'Block level Scope'
        console.log('INNER SCOPE', msg1)
    }

    console.log('Outer Scope:', msg1)
}

// Call a Function
display()