


let question = [
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
function askQuestion (challenge) {
    let stateEl = document.querySelector("#state-name");
    stateEl.textContent = challenge.state;

    let choices = document.querySelectorAll(".answer");
    console.log(choices);
    choices.forEach(function(element, index) {
        element.textContent = challenge.answers[index];
        element.addEventListener("click", function () {
            if (challenge.correctAnswer === index) {
                console.log("Correct!");
            } else {
                console.log("Wrong!");
            };
        });
    });
};

askQuestion(question);