


let question = {
    state: "Texas",
    answers: ["Houston", "Dallas", "San Antonio", "Austin"],
    correctAnswer: 3
};

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