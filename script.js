//Review:
//For loop activities
//Array activities
//timer countdown activity
//button activities




const quizEl = document.querySelector("#quiz");
const questionEl = document.querySelector("#question")
const startButton = document.querySelector("#start-btn")
const answerBtnEl = document.querySelector("#answer-btns")
let scoreCounter = document.querySelector("#points")
const timer = document.querySelector("#timer")
const timeContainer = document.querySelector(".time-container")
const highScoreForm = document.querySelector(".submit-score")
const initialsInput = document.querySelector("#initials")
const submitButton = document.querySelector("#submit-button")
const scoresList = document.querySeelctor("#score-list")
const scoresContainer = document.querySelector("#high-scores")
var secondsLeft = 100;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerHTML = secondsLeft
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver()
        }
    }, 1000)
}

function gameOver() {
    quizEl.classList.add("hide")
    timeContainer.classList.add("hide")
    highScoreForm.classList.remove("hide")
    alert("Game Over! See High Scores.")
}


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
        },
        {
         question: "What is the capital of Ohio?",
         answers: ["Columbus", "Cincinnati", "Dayton", "Cleveland"],
         correctAnswer: "Columbus"
        },
        {    
         question: "What is the capital of Georgia?",
         answers: ["Macon", "Augusta", "Atlanta", "Savannah"],
         correctAnswer: "Atlanta"
        },
        {    
         question: "What is the capital of Wisconsin?",
         answers: ["Milwaukee", "Oshkosh", "Green Bay", "Madison"],
         correctAnswer: "Madison"
        },
        {    
         question: "What is the capital of Iowa?",
         answers: ["Dubuque", "Des Moines", "Iowa City", "Waterloo"],
         correctAnswer: "Des Moines"
        },
        {    
         question: "What is the capital of Colorado?",
         answers: ["Denver", "Colorado Springs", "Boulder", "Pueblo"],
         correctAnswer: "Denver"
        },
        {    
         question: "What is the capital of Michigan?",
         answers: ["Detroit", "Grand Rapids", "Lansing", "Flint"],
         correctAnswer: "Lansing"
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
    setTime();
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
        scoreCounter.textContent++;
    } else {
        console.log("Wrong")
        alert("Wrong Answer! Warning: 10 seconds deducted from clock!");
        secondsLeft-=10
    }
    
    
    if (questions.length > currentIndex + 1) {
        currentIndex++;
        getNewQuestion();
    } else {
        gameOver();
    }
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var intials = document.querySelector("#initials").value();
    if (initials === "") {
        alert("Error: initials cannot be blank");
    } else {
        alert("Submitted successfully!")
    }

    localStorage.setItem("initials", initials);
    renderHighScores()
    scoresContainer.classList.remove("hide");
})

function renderHighScores() {
    var initials = localStorage.getItem("initials");

    if (!initials) {
        return;
    }

    scoresList.createElement("<li>")
    

}

      
        