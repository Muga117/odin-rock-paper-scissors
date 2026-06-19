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