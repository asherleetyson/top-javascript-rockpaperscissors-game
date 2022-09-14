/* Adding buttons */
const rockbtn = document.querySelector('#rock-btn');
const paperbtn = document.querySelector('#paper-btn');
const scissorsbtn = document.querySelector ('#scissors-btn');
const outcomeDiv = document.querySelector ('.outcome');
const playerScoreSpan = document.querySelector ('.player-score');
const computerScoreSpan = document.querySelector ('.computer-score');

// Incorrect original attempt at an event listener
/*
scissorsbtn.addEventListener('click', () => {
    alert("You chose scissors");
});
*/

/* test function */
//function asherTest () {
   // alert ("Hello World");
//}


/* Setting the score counter at 0*/
let playerScore = 0;
let computerScore = 0;


/*Getting a random choice from the computer from 1 of 3 possible strings*/
function getComputerChoice() {
    let computerChoiceArray = ['rock', 'paper', 'scissors'];
    return computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
}
// console.log(getComputerChoice());

/*How we started the game originall - Writing a function game() that calls the below playRound() function inside it until human or computer gets to 5*/
/*
function game () {
    while (playerScore >= 0 && computerScore >= 0) {            // previously, this was just playerScore < 5 && computerScore < 6
        const playerSelection = prompt('Make your choice');     // previously was const playerSelection = prompt('Make your choice');
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}
*/

/*Writing a function that plays a round of Rock, Paper, Scissors, and then increments the winner's score by 1*/
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'paper') {
        computerScore += 1;
        const p = document.createElement('p')
        p.innerText = 'You lose! Paper beats rock';
        outcomeDiv.appendChild(p);
        // return 'You lose! Paper beats rock';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'scissors') {
        playerScore += 1;
        const p = document.createElement('p');
        p.innerText = 'You win! Rock beats scissors';
        outcomeDiv.appendChild(p);
        // return 'You win! Rock beats scissors'; 
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'rock') {
        playerScore += 1;
        const p = document.createElement('p');
        p.innerText = 'You win! Paper beats rock';
        outcomeDiv.appendChild(p);
        // return 'You win! Paper beats rock';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'scissors') {
        computerScore += 1;
        const p = document.createElement('p');
        p.innerText = 'You lose! Scissors beats paper';
        outcomeDiv.appendChild(p);
        // return 'You lose! Scissors beats paper';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'rock') {
        computerScore += 1;
        const p = document.createElement('p');
        p.innerText = 'You lose! Rock beats scissors';
        outcomeDiv.appendChild(p);
        // return 'You lose! Rock beats scissors';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'paper') {
        playerScore += 1;
        const p = document.createElement('p');
        p.innerText = 'You win! Scissors beats paper';
        outcomeDiv.appendChild(p);
        // return 'You win! Scissors beats paper';
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = 'Tie';
        outcomeDiv.appendChild(p);
       // return 'Tie';
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = 'Tie';
        outcomeDiv.appendChild(p);
        // return 'Tie';
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = 'Tie';
        outcomeDiv.appendChild(p);
        // return 'Tie';
    } else {
        const p = document.createElement('p');
        p.innerText = 'An error occurred';
        outcomeDiv.appendChild(p);
        // return 'An error occurred';
    }
}

/*Writing a function to return a winning or losing message once either human or computer gets to 5*/
function winGame(playerScore, computerScore) {
    if (playerScore == 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `YOU WON ${playerScore} to ${computerScore}!`;
        outcomeDiv.append(h2);
        //return "You win!"
    } else if (computerScore == 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `YOU LOST ${computerScore} to ${playerScore}!`;
        outcomeDiv.append(h2);
        //return "You lose!"
    }
};

/* Updating scores */
const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

/* Adding Event Listeners to buttons */
rockbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    winGame(playerScore, computerScore);
});

paperbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    winGame(playerScore, computerScore);
});

scissorsbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    winGame(playerScore, computerScore);
});

/*Calling the game() function to kick off the game and prompt the user for their choice */
// game();

/*Logging the final scores for the player and the computer to the console once one of them hits 5 */
// console.log(playerScore);
// console.log(computerScore);