//Variable to hold the computerChoice
//Generate the computerChoice randomly from rock = 1, paper = 2, scissors = 3
    //Math.floor(Math.random() * max - min + 1)) + min
    


//Create a function that returns the string "rock", "paper", or "scissors"
function getComputerChoice(){

    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(computerChoice);

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (computerChoice === 1) {
        computerChoice = rock;
    } else if (computerChoice === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }

    console.log(computerChoice)
    return computerChoice;
}

getComputerChoice();



