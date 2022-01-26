// Gather the player's choice from a prompt onto a variable
// Create a function to randomize the 3 computer options
// Use the players choice and the computerPlay function in a playRound functions
// Compare the choices to determine the winner
// Create a string that states both chocies and lets the user know if they won or lost.

const playerSelection = prompt('Choose rock, paper or scissors');
const computerSelection = computerPlay();

function computerPlay() {

    let compChoices = new Array('rock', 'paper', 'scissors');

    let randomNumber = Math.floor( Math.random() * compChoices.length );

    let compChoice = compChoices[randomNumber];

    return compChoice;

}


function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log(playerSelection);

    console.log(computerSelection);


    return 'hello';

}

console.log(playRound(playerSelection, computerSelection));