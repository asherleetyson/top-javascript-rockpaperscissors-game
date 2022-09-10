
/* Setting the score counter at 0*/
let playerScore = 0;
let computerScore = 0;


/*Getting a random choice from the computer from 1 of 3 possible strings*/
function getComputerChoice() {
    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    return computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
}

/*Writing a function game() that calls the below playRound() function inside it until human or computer gets to 5*/
function game () {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt('Make your choice');
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

/*Writing a function that plays a round of Rock, Paper, Scissors, and then increments the winner's score by 1*/
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats scissors'; 
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats rock';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beats paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Rock beats scissors';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beats paper';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'rock') {
        return 'Tie';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'paper') {
        return 'Tie';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'scissors') {
        return 'Tie';
    } else {
        return 'An error occurred';
    }
}

/*Writing a function to return a winning or losing message once either human or computer gets to 5*/
function winGame() {
    if (playerScore == 5) {
        return "You win!"
    } else if (computerScore == 5) {
        return "You lose!"
    }
}

/*Calling the game() function to kick off the game and prompt the user for their choice */
game();

/*Logging the final scores for the player and the computer to the console once one of them hits 5 */
console.log(playerScore);
console.log(computerScore);