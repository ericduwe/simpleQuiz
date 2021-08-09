let quizEl = document.getElementById("quiz");
let stateEl = document.querySelector("#state-name");


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
    
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    stateEl.textContent = chosenQuestion.state;

    let choices = document.querySelectorAll(".answer");
    console.log(choices);
    choices.forEach(function(element, index) {
        element.textContent = chosenQuestion.answers[index];
        element.addEventListener("click", function () {
            if (chosenQuestion.correctAnswer === index) {
                console.log("Correct!");
            } else {
                console.log("Wrong!");
            };
        });
    });
};

askQuestion(questions);