
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let randomChoice = '';
    if (random === 0){
        randomChoice = 'rock';
    } else if (random === 1){
        randomChoice = 'paper';
    } else randomChoice = 'scissors';

    return randomChoice;
}
function getHumanChoice(){
    let userChoice = prompt('Rock, Paper, Scissors?').toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}



function startGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let outcome = playRound(humanSelection,computerSelection);
        alert(humanSelection + ' vs ' + computerSelection + ' = ' + outcome);
        alert(humanScore + ' : '+ computerScore);
    }
    if(humanScore > computerScore){
        alert('You win the whole game: '+ humanScore + ' : ' + computerScore);
    } else alert('You lose the whole game: '+ computerScore + ' : ' + humanScore);
 }