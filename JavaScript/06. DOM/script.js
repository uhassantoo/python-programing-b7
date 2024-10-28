// Add style
// method 1

let p_style = document.getElementById('p_style')
p_style.style.color = " #059862"
p_style.style.backgroundColor = 'lightpink'

// method 2

document.getElementById('p_style').style.color = 'red'
document.getElementById('p_style').style.backgroundColor = 'lightgreen'


// create a new element
let new_element = document.createElement('h1')
new_element.innerText = 'Hi i am new one in your class created element'

let new1 = document.createElement('h3')
new1.innerText = 'H3 tag created by js'

// append in existing element
document.getElementById('container').append(new_element,new1)

// append just one element

let new2 = document.createElement('u')
new2.innerText = 'Hi this is underline text'



document.getElementById('p_style').appendChild(new2)