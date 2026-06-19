// Create a function that randomly returns "Rock", "Paper" or "Scissors" 
function getComputerChoice(){
    // Pick a number between 1 and 3 at random
    let random_number = Math.floor(Math.random()* (3 - 1 + 1)) + 1;

    switch(random_number){
        case 1:
            console.log("Computer picks Rock")
            return "Rock";
            break;

        case 2:
            console.log("Computer picks Paper")
            return "Paper"
            break;
        
        case 3:
            console.log("Computer picks Scissors")
            return "Scissors"
            
    }
}

// Create a function that prompts the user for their choice and returns it.
function getHumanChoice(){
    /* The function assumes the user will input a valid choice and therefore
    there is no logic for reprompting the user incase of invalid input. */
    let choice = prompt("Pick Rock, Paper or Scissors");
    console.log(`You picked ${choice}`);
    return choice.toLowerCase();
}

// Initialize Score Variables for the user and the computer
let humanScore = 0;
let computerScore = 0;

// Create a function to play a single round of Rock Paper Scissors
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "Paper"){
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "Rock"){
        console.log("You win! Paper beats Rock.")
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "Scissors"){
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "Rock"){
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper.")
        computerScore++;
    }else if(humanChoice === "scissors" && computerChoice === "Paper"){
        console.log("You win! Scissors beats Paper.")
        humanScore++;
    }else {
        console.log("It's a tie!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
