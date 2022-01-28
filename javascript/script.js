const select = [ 'rock', 'paper', 'scissors'];
let userWins = 0;
let compWins = 0;
let playerInput = document.querySelectorAll('.inputButton')
let resetInput = document.querySelector('.resetButton')

function computerPlay(){
    return select[Math.floor(Math.random() * select.length)];
}
// Randomly selects rock, paper, scissors for computer

//this is a scope issue i can't figure out
function buttonPlay(input) {
    input.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        const computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);        
        displayScore(userWins, compWins);
        displayResults(results);
        if( userWins === 5) {
            results = `Player wins best out of 5! Final score is Player: ${userWins} - Computer: ${compWins}` ;
            displayResults(results);
            playerInput.forEach((button) => button.setAttribute("disabled", 1));
            reset();
        } else if( compWins === 5) {
            results = (`Computer wins best out of 5! Final score is Player: ${userWins} - Computer: ${compWins}`);
            displayResults(results);
            playerInput.forEach((button) => button.setAttribute("disabled", 1));
            reset();
        }
    })
}

function userPlay() {
    let inputs = document.querySelectorAll('.inputButton');
    inputs.forEach((input) => buttonPlay(input));
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return(`Tie! You both selected ${playerSelection}.`);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++userWins;
        return(`You win. ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++userWins;
        return(`You win. ${playerSelection} beats ${computerSelection}.`);
     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
         ++userWins;
         return(`You win. ${playerSelection} beats ${computerSelection}.`);
     } else {
         ++compWins;
         return(`You lose. ${computerSelection} beats ${playerSelection}.`);
     }

}
//rock paper scissor logic. checks tie, before checking user win conditions, if user doesn't win, then computer wins.

function displayScore(userWins, compWins) {
    const scoreText = `${userWins} - ${compWins}`;
    const score = document.querySelector('.score');
    score.textContent = scoreText;
}

function displayResults(results) {
    const resultsText = results;
    const battlefieldText = document.querySelector('.battlefield');
    battlefieldText.textContent = resultsText;
}

function game() {
    userPlay();
}

function reset() {

    resetInput.addEventListener('click', () => {
        results = ''
        userWins = 0;
        compWins = 0;
        displayResults(results)
        displayScore(userWins, compWins);
        playerInput.forEach((button) => button.removeAttribute("disabled"));
    })
    console.log("reset performed")
    return
}

document.querySelector('.playerInput').addEventListener('click', game());
