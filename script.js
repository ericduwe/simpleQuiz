//Review:
//For loop activities
//Array activities
//timer countdown activity
//button activities




let quizEl = document.getElementById("quiz");
let questionEl = document.getElementById("question");
let timerEl = document.querySelector(".card-text");
const startButton = document.getElementById("start-btn");
let choices = document.querySelectorAll(".answer");
let score = 0;
var timer;
var timerCount;




let questions = [
        {
        question: "What is the capital of Texas",
        answers: [{text: "Houston", correct: false}, {text: "Dallas", correct:false}, {text: "San Antonio", correct: false}, {text: "Austin", correct: true}],
        
        },
        {
        question: "What is the capital of New York",
        answers: [{text: "Syracuse", correct: false}, {text: "Albany", correct: true}, {text: "New York City", correct: false}, {text: "Niagara Falls", correct: false}],
        },
        {
         question: "What is the capital of California",
         answers: [{text: "Oakland", correct: false}, {text: "Sacramento", correct: true}, {text: "Los Angeles", correct: false}, {text: "San Jose", correct: false}],
         }

]


function showQuestion () {
    currentIndex = 0;
    chosenQuestion = questions[currentIndex];
    questionEl.textContent = chosenQuestion.question;   

            choices.forEach(function(element, index) {
            element.textContent = chosenQuestion.answers[index];
            element.addEventListener("click", function () {
                
                if (chosenQuestion.correctAnswer === index) {
                    console.log("Correct!");
                   
                    } else {
                    console.log("Wrong!");
                    }
                    })
                } 
                
                
        
             );
         };


showQuestion(question);


//
