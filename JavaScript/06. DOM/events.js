function greet(){
    alert('Hellow Python')
}

//Keyup event
function keyup(){
    let input = document.getElementById('firstname').value
    document.getElementById('sp').innerHTML = input
 
}
// Mouseover
function mouse(){
    document.getElementById('m').style.color = 'Red'
}


// Mouserover and mouse out

function big(a){
    a.style.height = '64px'
    a.style.width = '64px'
}
function normal(a){
     a.style.height = '32px'
    a.style.width = '32px'
}
// Method 2
let click_fun = document.getElementById('click2')
click_fun.addEventListener('click', display)
function display(){
    alert('Hellow Display')
}

// Use Method 2

let user = document.getElementById('uname')
user.addEventListener('focus',()=>{
  console.log('User enter entering name....')
})

// On Blur
let pw = document.getElementById('paswword')
pw.addEventListener('blur', ()=>{
    console.log('User is gone')
    pw.style.border = '3px solid red'
})