
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('.control');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const roundResults = document.querySelector('#round-results');
const gameResults = document.querySelector('#game-results');


// Loop through each button and add event listener
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

    // Set game score goal
    let scoreGoal = 5;

    // Get computer and player selections
    let computerSelection = computerPlay();
    let playerSelection = e.currentTarget.getAttribute('data-value');

    // set default round result game winnder
    let result = 'lose';
    let gameWinner = 'player';

    // Prep message variables for later use
    let roundResultMessage;
    let gameResultMessage;


    if ( playerSelection === 'paper' && computerSelection === 'rock'){

        result = 'win';

    } else if ( playerSelection === 'rock' && computerSelection === 'scissors'){

        result = 'win';

    } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){

        result = 'win';

    } else if ( playerSelection === computerSelection ){

        result = 'tie';

    }

    // Increase the score variables and update the scoreboard
    if (result === 'win' ){
        playerScore++;
        playerScoreboard.innerText = `Player: ${playerScore}`;
    } else if( result === 'lose' ) {
        compScore++;
        computerScoreboard.innerText = `Computer: ${compScore}`;
    } 

    // Update the round results message
    roundResultMessage = `You chose ${playerSelection}, computer chose ${computerSelection}, you ${result}!`;
    roundResults.innerText = roundResultMessage;

    // update gameWinner if computer reaches scoreGoal
    if( compScore === scoreGoal ) {
        gameWinner = 'Computer';
    }

    // Set and display gameResultMessage
    gameResultMessage = `The score limit has been reached, ${gameWinner} is the winner`;

    if( compScore >= scoreGoal || playerScore >= scoreGoal ){
        gameResults.innerText = gameResultMessage;

        // Remove event listener as score goal has been reached
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
            button.classList.add('disabled');
        });

    }

}
