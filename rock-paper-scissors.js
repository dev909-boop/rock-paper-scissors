//Variable to hold the computerChoice
//Generate the computerChoice randomly from rock = 1, paper = 2, scissors = 3
    //Math.floor(Math.random() * max - min + 1)) + min
    
let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
console.log(computerChoice);

//Create a function that returns the string "rock", "paper", or "scissors"