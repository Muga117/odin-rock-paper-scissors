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


// Create a function to play 5 rounds
function playGame(totalRounds = 5){
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

    // Initialize Round to 1 to indicate the first round
    let round = 1;

    /* Create a loop to play a round until the total number of rounds reaches the 
    value of totalRounds defined */
    while(round <= totalRounds){
        // Print the current round
        console.log(`Round ${round}`);

        // Get the choices for the human and computer for that round
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        // Play a round
        playRound(humanSelection, computerSelection);

        // Print the current score for that round.
        console.log(`Human: ${humanScore} and Computer: ${computerScore}`);

        // Increment the round by 1
        round++;
    }
    // Create a conditional to check who wins the game
    if(humanScore < computerScore){
        console.log("The Computer Wins!")
    } else if(computerScore < humanScore){
        console.log("The Human Wins!")
    } else {
        console.log("The game ended in a tie!")
    }
}

playGame();

