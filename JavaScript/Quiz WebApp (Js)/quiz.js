// Questions
let questions = [
    {
        'title': 'What is CPU',
        'options': ['Central Processing Unit','USB','Hardware','Software'],
        'answer': 'Central Processing Unit'

    },
    {
        'title': 'Most university students ........................on campus in their first year',
        'options': ['Live','Lives','Is Living','Lived'],
        'answer': 'Is Living'

    },
    {
        'title': 'The supermarket ............... the end of the road on the right sells milk',
        'options': ['at','on','in','is'],
        'answer': 'at'

    },
    {
        'title': 'My sister is excited about _____ to Australia this summer.',
        'options': ['To travelling','travel',' travelling','to travel'],
        'answer': 'to travel'

    },
    {
        'title': 'I don’t like stories ___ have sad endings.',
        'options': ['that','who','of','in'],
        'answer': 'that'

    },
    {
        'title': 'My brother .................medicine when he goes to university.',
        'options': ['studies','study','is study','studied'],
        'answer': 'studies'

    },
    {
        'title': 'Do they celebrate the Fourth of July in England?',
        'options': ['Yes','No','Maybe','NotSure'],
        'answer': 'NotSure'

    },
    {
        'title': 'How many continents are there in total?',
        'options': [5,7,2,9],
        'answer': 5

    },

]

// initialize variables
let questions_index = 0
let result = 0

// function to start quiz game

function start(){
    questions_index = 0
    result = 0
    let start_btn = document.getElementById('start')
    start_btn.addEventListener('click', function(){
        add_question()
    })
}

start()

function add_question(){
    let current_questions = questions[questions_index]
    console.log(current_questions)

    let container = document.getElementById('container')
    container.innerHTML = '<h1>' + current_questions.title + '</h1>'

    for(option of current_questions.options){
        let option_btn_new = document.createElement('button')
        option_btn_new.innerText = option
        container.append(option_btn_new)
    }
    checkanswer()
}

function checkanswer(){
    let current_questions = questions[questions_index]
    let option_btn = document.querySelectorAll('button')

    for(opt_btn of option_btn){
        opt_btn.addEventListener('click', function(){
            let user_selection = this.innerText
            // check answer if user selection is correct
            if(user_selection == current_questions.answer){
                result++
            }

            if(questions_index < questions.length-1){
                questions_index++
                add_question()
            }
            else{
                endgame()
            }
        })
    }
}

// End Game Function

function endgame(){
    let container = document.getElementById('container')
    container.innerHTML = '<h1> GAME OVER ! </h> <h1> Score:' +result+ '/' +questions.length + '</h1>'

    let restart_btn = document.createElement('button')
    restart_btn.id = 'start'
    restart_btn.innerText = 'Restart'

    container.append(restart_btn)
    start()
}