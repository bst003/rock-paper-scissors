
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('.control');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const roundResults = document.querySelector('#round-results');

buttons.forEach((button) => {

    button.addEventListener('click', playRound);

});


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


function playRound(e) {
    // your code here!
    let computerSelection = computerPlay();
    let playerSelection = e.currentTarget.getAttribute('data-value');
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
        playerScoreboard.innerText = `Player: ${playerScore}`;
    } else if( result === 'lose' ) {
        compScore++;
        computerScoreboard.innerText = `Computer: ${compScore}`;
    } 

    message = `You chose ${playerSelection}, computer chose ${computerSelection}, you ${result}!`;
    roundResults.innerText = message;

}
