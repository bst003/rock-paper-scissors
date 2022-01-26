// Gather the player's choice from a prompt onto a variable
// Create a function to randomize the 3 computer options
// Use the players choice and the computerPlay function in a playRound functions
// Compare the choices to determine the winner
// Create a string that states both chocies and lets the user know if they won or lost.

const playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {

    // Create array of computer choices
    let compChoices = new Array('rock', 'paper', 'scissors');

    // get a random number to choose array item
    let randomNumber = Math.floor( Math.random() * compChoices.length );

    // store random array item in variable
    let compChoice = compChoices[randomNumber];

    //return random array item
    return compChoice;

}


function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = 'lose';
    let message;

    if ( playerSelection === 'paper' && computerSelection === 'rock'){

        result = 'win';

    } else if ( playerSelection === 'rock' && computerSelection === 'scissors'){

        result = 'win';

    } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){

        result = 'win';

    } else if ( playerSelection === computerSelection ){

        result = 'tie';

    }

    message = `You chose ${playerSelection}, computer chose ${computerSelection}, you ${result}!`;

    return message;

}

console.log(playRound(playerSelection, computerSelection));