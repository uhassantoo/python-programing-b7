// DOM
// get id

let head = document.getElementById('heading')
console.log(head)

// get element by class
let head1 = document.getElementsByClassName('heading')
console.log(head1)

// get any element by using the tag name
let para = document.getElementsByTagName('div')
console.log(para)


// get any element from html file by using id or clas or tag name
let query_id = document.querySelector('#heading')

console.log(query_id)

let query_class = document.querySelector('.heading')

console.log(query_class)

// User query selector all

let q_all = document.querySelectorAll('#heading')
console.log(q_all)

let q_tag = document.querySelectorAll('p')
console.log(q_tag)


// get value/ innertext content of any tag
 heading1 = document.getElementById('heading').innerText

 console.log(heading1)

 heading2 = document.getElementById('heading')
 inner_head = heading2.innerText

 console.log(inner_head)


 heading3 = document.querySelectorAll('#h1').innerHTML
 console.log(heading3)

 // by tagname

 let div_element = document.getElementsByTagName('div')
inner_text = div_element[0].innerText

console.log(inner_text)