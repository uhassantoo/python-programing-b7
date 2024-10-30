let form = document.getElementById('form_user')

form.addEventListener('submit', function(e){

  // input validation

  // Frist name Validation

  let fname = document.getElementById('name').value
  let fnam_error = document.getElementById('name_error')
 

  if (fname == ''){
    fnam_error.innerText = 'First Name is required'
    e.preventDefault()
  
  }

  else{
    fnam_error.innerText = ''
  }

  // Last Name Validation

  let lname = document.getElementById('lname').value
  let lnam_error = document.getElementById('lname_error')
 

  if (lname == ''){
    lnam_error.innerText = 'Last Name is required'
    e.preventDefault()
  
  }

  else{
    lnam_error.innerText = ''
  }
  
  // Age Validation

  let age = document.getElementById('age').value
  let age_error = document.getElementById('age_error')
  
  if(age< 13 || age>65){
    console.log('Age Error')
    age_error.innerText = 'Age should be between 13 - 65'
    e.preventDefault()
  }
  else{
    age_error.innerText = ""
  }
  // Email validation
  
  let email = document.getElementById('email').value
  let email_error = document.getElementById('email_error')

  if(!email.includes('@') || !email.includes('.')){
    email.error.innerText = "Kindly Enter Proper Email Address"
    e.preventDefault()

  }
  else
  email_error.innerText = ""

 // Remaing Validation
})