const select = [ 'rock', 'paper', 'scissors'];
let userWins = 0;
let compWins = 0;


function computerPlay(){
    return select[Math.floor(Math.random() * select.length)];
}
// Randomly selects rock, paper, scissors for computer

//this is a scope issue i can't figure out
function buttonPlay(input) {
    input.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        const computerSelection = computerPlay();
        const results = playRound(playerSelection, computerSelection);        
        displayScore(userWins, compWins);
        displayResults(results);
    })
}

function userPlay() {
    let inputs = document.querySelectorAll('button');
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
    while(userWins < 5 && compWins < 5) {
        return
    }
    if (userWins > compWins) {
        results = `Player wins best out of 5! Final score is Player: ${userWins} - Computer: ${compWins}` ;
        displayResults(results);
        reset();
    } else {
        results = (`Computer wins best out of 5! Final score is Player: ${userWins} - Computer: ${compWins}`);
        displayResults(results);
        reset();
        }
}

function reset() {
    let inputs = document.querySelectorAll('button')
    const reset = inputs.forEach( (input) =>
    input.addEventListener('click', () =>{
        results = '';
        userWins = 0;
        compWins = 0;
    }))
    console.log("reset performed")
    return reset;
}

document.querySelector('.playerInput').addEventListener('click', game());
