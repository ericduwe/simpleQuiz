//Review:
//For loop activities
//Array activities
//timer countdown activity
//button activities




const quizEl = document.querySelector("#quiz");
const questionEl = document.querySelector("#question")
const startButton = document.querySelector("#start-btn")
const answerBtnEl = document.querySelector("#answer-btns")
let score = 0;
let timer;
let timerCount;




let questions = [
        {
        question: "What is the capital of Texas?",
        answers: ["Houston", "Dallas", "Austin", "San Antonio"],
        correctAnswer: "Austin"
        },
        {
        question: "What is the capital of New York?",
        answers: ["New York City", "Albany", "Syracuse", "Niagara Falls"],
        correctAnswer: "Albany"
        },
        {
         question: "What is the capital of California?",
         answers: ["San Jose", "San Francisco", "Fresno", "Sacramento"],
         correctAnswer: "Sacramento"
         }

]

function randomize(array) {
    let currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startButton.classList.add("hide");
    randomize(questions);
    currentIndex = 0;
    quizEl.classList.remove("hide");
    getNewQuestion();
    
}

function getNewQuestion() {
    clearQuestion();
    showQuestion(questions[currentIndex])
}

function clearQuestion () {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}
function showQuestion (question) {
    
    questionEl.textContent = question.question;   
    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer;
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
    })
};

function selectAnswer (event) {
    var choice = event.target;
    var correctAnswer = questions[currentIndex].correctAnswer;
    if (choice.textContent === correctAnswer) {
        console.log("Correct")
        alert("Correct!");
    } else {
        console.log("Wrong")
        alert("Wrong!");
    }
    
    
    if (questions.length > currentIndex + 1) {
        currentIndex++;
        getNewQuestion();
    } else {
        alert("Quiz Complete!")
    }
}
                
      
        