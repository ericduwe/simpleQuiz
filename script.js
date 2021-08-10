let quizEl = document.getElementById("quiz");
let stateEl = document.querySelector("#state-name");
let timerEl = document.querySelector(".card-text");
let startButton = document.querySelector(".btn btn-primary");
let choices = document.querySelectorAll(".answer");

var timer;
var timerCount;

// //Timer
// function startTimer() {
//     // Sets timer
//     timerCount = 60
//     timer = setInterval(function() {
//       timerCount--;
//       timerEl.textContent = timerCount
//       if (timerCount <= 0) {
//           clearInterval(timer);
//           alert("Time Expired!")

//       }
//     }, 1000);
// }  


//Start button
//startButton.addEventListener("click", startTimer)


let questions = [
    {
    state: "Texas",
    answers: ["Houston", "Dallas", "San Antonio", "Austin"],
    correctAnswer: 3
    },
    {
    state: "New York",
    answers: ["Syracuse", "Albany", "New York City", "Niagara Falls"],
    correctAnswer: 1
    },
    {
    state: "California",
    answers: ["Oakland", "Sacramento", "Los Angeles", "San Jose"],
    correctAnswer: 1
    }

]


function askQuestion (q) {
    
    
    chosenQuestion = questions[0];
    stateEl.textContent = chosenQuestion.state;
    
        

        console.log(choices);
        choices.forEach(function(element, index) {
            element.textContent = chosenQuestion.answers[index];
            element.addEventListener("click", function () {
                event.preventDefault()
                if (chosenQuestion.correctAnswer === index) {
                    console.log("Correct!");

                    chosenQuestion = questions[1];
                    stateEl.textContent = chosenQuestion.state;
                    console.log(choices);
                    choices.forEach(function(element, index) {
                        element.textContent = chosenQuestion.answers[index];
                        element.addEventListener("click", function () {
                            if (chosenQuestion.correctAnswer === index) {
                                console.log("Correct!");
                                
                                chosenQuestion = questions[2];
                                stateEl.textContent = chosenQuestion.state;
                                console.log(choices);
                                choices.forEach(function(element, index) {
                                    element.textContent = chosenQuestion.answers[index];
                                    element.addEventListener("click", function () {
                                        if (chosenQuestion.correctAnswer === index) {
                                            console.log("Correct!");
                                        } else {
                                            console.log("Wrong!")
                                        }
                                    })
                                })

                            } else {
                                console.log("Wrong!");
                            }
                        })
                    })
                } else {
                    console.log("Wrong!");
                }
                
                ;
            });
        });
};

askQuestion(questions);
