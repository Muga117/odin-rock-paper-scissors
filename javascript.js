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

// Create a function to play a single round of Rock Paper Scissors
function playRound(humanChoice, getComputerChoice){
    let computerChoice = getComputerChoice();
    if(humanChoice === "rock" && computerChoice === "Paper"){
        results.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else if(humanChoice === "paper" && computerChoice === "Rock"){
        results.textContent = "You win! Paper beats Rock.";
        humanScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else if(humanChoice === "rock" && computerChoice === "Scissors"){
        results.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else if(humanChoice === "scissors" && computerChoice === "Rock"){
        results.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else if(humanChoice === "paper" && computerChoice === "Scissors"){
        results.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else if(humanChoice === "scissors" && computerChoice === "Paper"){
        results.textContent = "You win! Scissors beats Paper.";
        humanScore++;
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }else {
        results.textContent = "It's a tie!";
        humanScoreCounter.textContent = `Human: ${humanScore}`;
        computerScoreCounter.textContent = `Computer: ${computerScore}`;
    }
    if((humanScore + computerScore === 5)){
        if(humanScore > computerScore){
            results.append(" The winner is the Human");
        } else if(computerScore > humanScore){
            results.append(" The winner is the Computer");
        } else {
            results.append(" It's a draw");
        }
}
}

// Initialize Score Variables for the user and the computer
let humanScore = 0;
let computerScore = 0;

const btnContainer = document.createElement("div");
btnContainer.classList.add("buttons");

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);
document.body.appendChild(btnContainer)

rock.addEventListener('click', event => playRound("rock", getComputerChoice));
paper.addEventListener('click', event => playRound("paper", getComputerChoice));
scissors.addEventListener('click', event => playRound("scissors", getComputerChoice));

const resultsContainer = document.createElement("div");
resultsContainer.classList.add("resultsContainer");

const results = document.createElement("div");
results.classList.add("results");

const scores = document.createElement("div");
scores.classList.add("scores");

const humanScoreCounter = document.createElement("p");
const computerScoreCounter = document.createElement("p");

scores.appendChild(humanScoreCounter);
scores.appendChild(computerScoreCounter);

resultsContainer.appendChild(results);
resultsContainer.appendChild(scores);

document.body.appendChild(resultsContainer);


