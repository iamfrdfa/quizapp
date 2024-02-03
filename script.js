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
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function showQuestion() {
    document.getElementById('question-number').innerHTML = currentQuestion + 1;

    if (gameIsOver()) {
        showEndScreen();
    }
    else { 
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = ``;
    document.getElementById('question-body').style = `display: none;`;

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
}

function updateToNextQuestion() {
    //Show next Question
    let question = questions[currentQuestion];
    
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);
    
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (rightAnswerSelected(selectedQuestionNumber)) { //Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-btn').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) { //Modul 7 Video 23: Clean Coding - Funktionen anpassen (6:45min)
    return selectedQuestionNumber == question['right_answer'];
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

function restartGame() {
    document.getElementById('header-image').src = 'img/learning.jpg';
    document.getElementById('question-body').style = `display: block;`; //Questionbody wieder einblenden (Spiel von vorne beginnen)
    document.getElementById('endScreen').style = `display: none;`; //Endscreen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}