
let playerScore = 0;
let compScore = 0;

// for (let i = 0; i <+ 5; i++ ) {

//     const playerSelection = playerPrompt();
//     const computerSelection = computerPlay();

//     console.log(playRound(playerSelection, computerSelection));
//     console.log( `Player score: ${playerScore}, Computer Score: ${compScore}` );

// }

function playerPrompt() {

    let playerSelectionPrompt = prompt('Choose rock, paper or scissors');

    // Prevent null inputs in case user hits escape
    let playerFinalSelection = ( playerSelectionPrompt === null )  ? 'paper' : playerSelectionPrompt.toLowerCase();

    return playerFinalSelection;

}

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

    if (result === 'win' ){
        playerScore++;
    } else if( result === 'lose' ) {
        compScore++;
    } 

    message = `You chose ${playerSelection}, computer chose ${computerSelection}, you ${result}!`;

    return message;

}
