let humanScore = 0;
let computerScore = 0;

//Create a function that returns the string "rock", "paper", or "scissors"
function getComputerChoice(){
    //Variable to hold the computerChoice
    //Generate the computerChoice randomly from 3 options
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



//Create a function to get the user input of rock, paper, or scissors
function getHumanChoice(){
    //create variable to request and hold user input of rock, paper, or scissors
    let humanChoice = prompt("Choose rock, paper, or scissors")
    console.log(humanChoice);
}

getHumanChoice();










