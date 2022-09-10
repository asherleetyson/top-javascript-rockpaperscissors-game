console.log("Hello, World B");

let computerChoiceArray = ['rock', 'paper', 'scissors'];
let randomComputerChoice = Math.floor(Math.random()*computerChoiceArray.length);

console.log(randomComputerChoice);

let getComputerChoice = computerChoiceArray[randomComputerChoice];

console.log(getComputerChoice);