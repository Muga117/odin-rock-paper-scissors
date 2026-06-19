// Create a function that randomly returns "Rock", "Paper" or "Scissors" 
function getComputerChoice(){
    // Pick a number between 1 and 3 at random
    let random_number = Math.floor(Math.random()* (3 - 1 + 1)) + 1;

    switch(random_number){
        case 1:
            console.log("Rock")
            break;

        case 2:
            console.log("Paper")
            break;
        
        case 3:
            console.log("Scissors")
    }
}

// Create a function that prompts the user for their choice and returns it.
function getHumanChoice(){
    /* The function assumes the user will input a valid choice and therefore
    there is no logic for reprompting the user incase of invalid input. */
    let choice = prompt("Pick Rock, Paper or Scissors");
    return choice;
}

// Initialize Score Variables for the user and the computer
let humanScore = 0;
let computerScore = 0;