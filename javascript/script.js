const select = [ 'rock', 'paper', 'scissors'];
let userWins = 0;
let compWins = 0;

function computerPlay(){
    return select[Math.floor(Math.random() * select.length)];
}
// Randomly selects rock, paper, scissors for computer

function userPlay(){
    // const userInput = document.querySelector('button');
    // userInput.addEventListener('click', () => console.log('hi'))
    let playerSelection = 'rock'
    return playerSelection;
}
//Asks user input for rock, paper, or scissors.

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
    while(userWins < 5 && compWins < 5) {
        const computerSelection = computerPlay();
        const playerSelection = userPlay();
        const results = playRound(playerSelection, computerSelection);
        displayScore(userWins, compWins);
        displayResults(results);
    }
    if (userWins > compWins) {
        results = `Player wins after 5 rounds! Final score is Player: ${userWins} - Computer: ${compWins}` ;
        displayResults(results);
    } else {
        results = (`Computer wins after 5 rounds! Final score is Player: ${userWins} - Computer: ${compWins}`);
        displayResults(results);
        }
}

game();



// console.log(`Round ${round}. ` + playRound(playerSelection, computerSelection))


//THE FOLLOWING IS COMMENTS/CODE NOT USED.
// Prompts userInput of rock, paper, or scissors. converts input to lower case and checks to see if it's contained in select array.
// If userInput is not rock paper or scissors, then it informs the user and forces the prompt again until an input that matches one of the selections.
// Need to fix this somehow. the return of userPlay()


// function tieCheck(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         alert(`TIE! You have both selected ${computerSelection}. Go again!`);    
//         return true;
//     } else {
//         return false;
//     }
// }

// function resetRound(){
//     userPlay();
//     computerPlay();
// }


// while (tieCheck(playerSelection, computerSelection) === true) {
//     userPlay();
//     computerPlay();
//     tieCheck(playerSelection, computerSelection);
// } 

// playRound(playerSelection, computerSelection);

// tie = tieCheck(playerSelection, computerSelection);
// tie ? resetRound() : playRound(playerSelection, computerSelection);


