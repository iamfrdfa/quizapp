let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Justin Bieber",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Lady Gaga",
        "right_answer": 3
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a?gt; mit dem Attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in Javascript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Justin Bieber",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Lady Gaga",
        "right_answer": 3
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    }
];

let rightQuestions = 0;
let currentQuestion = 0;

function showQuestion() {
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    
    // Show Endscreen

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = ``;
        document.getElementById('question-body').style = `display: none;`;

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.png';
    }
    else { //Show Question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        console.log('Fortschrit:', percent);
        let question = questions[currentQuestion];
        
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);
    
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedQuestionNumber == question['right_answer']) { //Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++; //oben wird currentQuestion mit Null definiert (0-te stelle der Fragen, also Real 1. Frage). Für die nächste Frage müssen wir um eins erhöhen
    showQuestion();

    document.getElementById('next-btn').disabled = false;
    resetAnswerButtons();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}