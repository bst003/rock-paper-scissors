
let playerScore = 0;
let compScore = 0;

let scoreGoal = 5;

const buttons = document.querySelectorAll('.control');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');
const roundResults = document.querySelector('#round-results');
const gameResults = document.querySelector('#game-results');
const resetButton = document.querySelector('#reset-game');

resetButton.addEventListener('click', resetGame);


// Loop through each button and add event listener
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

/////////////////
// HELPER FUNCTIONS
/////////////////

// Randomly return choice for computer
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

// Take player selection and computer selection to determine round winner
function determineRoundResult(playerSelection, computerSelection) {

    let result = 'lose';

    if ( playerSelection === 'paper' && computerSelection === 'rock'){

        result = 'win';

    } else if ( playerSelection === 'rock' && computerSelection === 'scissors'){

        result = 'win';

    } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){

        result = 'win';

    } else if ( playerSelection === computerSelection ){

        result = 'tie';

    }

    return result;

}

function updateScoreBoard( roundResult ) {

    if (roundResult === 'win' ){
        playerScore++;
        playerScoreboard.innerText = `Player: ${playerScore}`;
    } else if( roundResult === 'lose' ) {
        compScore++;
        computerScoreboard.innerText = `Computer: ${compScore}`;
    }

}

function endGameDeclareWinner( playerScore, compScore ) {

    let gameWinner;
    let gameResultMessage;

    if( compScore >= scoreGoal || playerScore >= scoreGoal ){

        gameWinner = 'Player';
        if( compScore === scoreGoal ) {
            gameWinner = 'Computer';
        }

        // Set gameResultMessage
        gameResultMessage = `The score limit has been reached, ${gameWinner} is the winner`;

        gameResults.innerText = gameResultMessage;

        resetButton.style.display = "block";

        // Remove event listener as score goal has been reached
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
            button.classList.add('disabled');
        });

    }

}

/////////////////
// MAIN FUNCTIONS
/////////////////

function playRound(e) {

    // Get computer and player selections
    let computerSelection = computerPlay();
    let playerSelection = e.currentTarget.getAttribute('data-value');

    // Determine the round result
    let roundResult = determineRoundResult(playerSelection, computerSelection);

    // Prep message variable for later use
    let roundResultMessage;

    // Increase the score variables and update the scoreboard
    updateScoreBoard(roundResult);

    // Update the round results message
    roundResultMessage = `You chose ${playerSelection}, computer chose ${computerSelection}, you ${roundResult}!`;
    roundResults.innerText = roundResultMessage;

    // Determine if game is over, and if so who is winner
    endGameDeclareWinner( playerScore, compScore );

}


// Reset the game back to original state
function resetGame() {

    // Set scores back to 0
    playerScore = 0;
    compScore = 0;

    // Add event Listener back to buttons
    // Remove disabled class
    buttons.forEach((button) => {
        button.addEventListener('click', playRound);
        button.classList.remove('disabled');
    });

    // Update score messages
    playerScoreboard.innerText = `Player: ${playerScore}`;
    computerScoreboard.innerText = `Computer: ${compScore}`;

    // Set results messages to be blank
    roundResults.innerText = '';
    gameResults.innerText = '';

    // Hide reset buttons
    resetButton.style.display = "none";

}