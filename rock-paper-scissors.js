let humanScore = 0;
let computerScore = 0;

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

//Create a function that returns the string "rock", "paper", or "scissors"
function getComputerChoice(){
    //Variable to hold the computerChoice
    //Generate the computerChoice randomly from 3 options (rock, paper, scissors)
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    //console.log(computerChoice);

    if (computerChoice === 1) {
        computerChoice = rock;
    } else if (computerChoice === 2) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    }
    return computerChoice;
}



//Create a function to get the user input of rock, paper, or scissors
function getHumanChoice(){
    //create variable to request and hold user input of rock, paper, or scissors
    let humanChoice = prompt("Choose rock, paper, or scissors.");
    //convert input to all lower case
    humanChoice = humanChoice.toLowerCase();

    //Assign humanChoice to variable
    if (humanChoice === "rock") {
        humanChoice = rock;
    }else if (humanChoice === "paper") {
        humanChoice = paper;
    }else {
        //catches anything that is not rock or paper and assigns scissors
        humanChoice = scissors;
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
    if (computerSelection === humanSelection) {
        console.log("It's a draw!");
    } else if (
        computerSelection === rock && humanSelection === scissors || 
        computerSelection === paper && humanSelection === rock ||
        computerSelection === scissors && humanSelection === paper) 
        {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`)
        ++computerScore;
        
    } else {
        console.log(`You Win! ${humanSelection} beats ${computerSelection}.`)
        ++humanScore;
    }


}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(`The computer chose ${computerSelection}.`); 

console.log(`You chose ${humanSelection}.`);


playRound(humanSelection, computerSelection);
console.log(computerScore);
console.log(humanScore);








