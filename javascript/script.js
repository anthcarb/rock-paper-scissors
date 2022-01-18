const select = [ 'rock', 'paper', 'scissors'];
let round = 0;
let userWins = 0;
let compWins = 0;

function computerPlay(){
    return select[Math.floor(Math.random() * select.length)];
}
// Randomly selects rock, paper, scissors for computer

function userPlay(){
    const userInput = document.querySelector('button');
    userInput.addEventListener('click', () => console.log('hi'))
}
//Asks user input for rock, paper, or scissors.

function playRound(playerSelection, computerSelection){

    console.log('Computer selects ' + computerSelection + '.');
    console.log('Player selects ' + playerSelection + '.');

    if (playerSelection === computerSelection) {
        return(`Tie! You both selected ${playerSelection}.`)
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

function displayScore() {
    const scoreText = `${userWins} - ${compWins}`;
    const score = document.querySelector('.score')
    score.textContent = scoreText
}
displayScore();
function game() {
    for (let i = 0; i < 5; i++ ) {
        //loop for 5 rounds.

        const computerSelection = computerPlay();
        let playerSelection
        // playRound(playerSelection, computerSelection);
        
        ++round;

        alert(`Round ${round}!`)
        //Tells what round is about to be played

        while (playerSelection == undefined) {
            playerSelection = userPlay();
        }
        //checks if player selection had a valid rock, paper, scissors, prompt, otherwise asks for user input until a valid choice.

        let results = playRound(playerSelection, computerSelection);
        //playround returns the results of the game. who won and who beat who.
       

        // console.log(`Round ${round}. ` + playRound(playerSelection, computerSelection));
        console.log(`Round ${round}. ${results} Score is Player: ${userWins} - Computer: ${compWins}`);

        if (round === 5) {
            if (userWins > compWins) {
                alert(`Player wins after 5 rounds! Final score is Player: ${userWins} - Computer: ${compWins}`  );
                // resetGame();
            } else if (compWins > userWins) {
                alert(`Computer wins after 5 rounds! Final score is Player: ${userWins} - Computer: ${compWins}`);
                // resetGame();
            } else if (userWins === compWins) {
                alert(`Tie game after 5 rounds! Final score is Player: ${userWins} - Computer: ${compWins}`);
                // resetGame();
            }
        }
    }
}

// game();



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


