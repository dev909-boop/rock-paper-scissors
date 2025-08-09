let humanScore = 0;
let computerScore = 0;
let draw = 0;

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
        console.log(`The computer chose: ${computerChoice}`);
    } else if (computerChoice === 2) {
        computerChoice = paper;
        console.log(`The computer chose: ${computerChoice}`);
    } else {
        computerChoice = scissors;
        console.log(`The computer chose: ${computerChoice}`);
    }
    return computerChoice
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
        console.log(`You chose: ${humanChoice}`);
    }else if (humanChoice === "paper") {
        humanChoice = paper;
        console.log(`You chose: ${humanChoice}`);
        
 //catches anything that is not rock or paper and assigns scissors, also handles null
    } else if (humanChoice === null) {
        humanChoice = scissors;
        console.log(`${humanChoice} was selected.`);

    }else {
        humanChoice = scissors;
        console.log(`You chose: ${humanChoice}`);
    }
    return humanChoice;
}

function playGame() {
    for (let round = 1; round < 6; round++){
        function playRound() {
            
            const computerSelection = getComputerChoice();  
            const humanSelection = getHumanChoice();
            
            if (computerSelection === humanSelection) {
                console.log("It's a draw!");
                ++draw;
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
            console.log(`~Scoreboard Round ${round}~ \nComputer: ${computerScore}, You: ${humanScore} \nDraw: ${draw}`);
        }
        playRound();
        
    }

    console.log(`FINAL SCORE: \n~Scoreboard~ \nComputer: ${computerScore}, You: ${humanScore} \nDraw: ${draw}`);
    
    if (computerScore > humanScore) {
        console.log("Computer wins. Better luck next time!");
    } else if (humanScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("It's a draw.");
    }
    
    
    
}

playGame();








