//Create constant selects with list rock, paper, scissors
//Check to see if rounds is less than 5 or if the game is over
//Create variable compSelect that equals randomly chosen item from selects
//Prompt user to choose one of rock, paper, scissors and store in usersSelect
//Change userSelect to lower case.
//Check if userSelect equals rock, paper, or scissors otherwise don't allow to continue
//Compare userSelect and compselect
//Rock beats scissors, scissors beat paper, paper beats rock. 
//Ties prompt user to choose new userSelect, and compSelect choses new random value.
//Declare a winner. Add 1 to the compWins or userWins depending on who wins.
//Add 1 to the total round tally.
//Repeat until 5 rounds have been played.

const select = [ 'rock', 'paper', 'scissors'];
let round = 1;

function computerPlay(){
    return select[Math.floor(Math.random() * select.length)];
}
let compSelect = computerPlay();

console.log(compSelect);