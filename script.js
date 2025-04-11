
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

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

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundsPlayed++;
        return 'You win!';
    } else {
        computerScore++;
        roundsPlayed++;
        return 'You lose!';
    }
}

const btnsPlay = document.querySelectorAll('.btn-play');
const outputYourChoice = document.querySelector('.your-choice');
const outputComputerChoice = document.querySelector('.computer-choice');
const outcome = document.querySelector('.outcome');
const score = document.querySelector('.score');

btnsPlay.forEach(function(button){
    button.addEventListener('click', (e) => {
        if(roundsPlayed > 4){
            if (humanScore > computerScore){
                outcome.innerText = 'Congrats, you win!';
            } else if ( humanScore < computerScore){
                outcome.innerText = 'Game over, you lose!';
            } else outcome.innerText = 'It is a draw! ';
            return;
        }
        let choice = e.target.id;
        let computer = getComputerChoice();
        let answer = playRound(choice, computer);
        outcome.innerText = answer;
        outputYourChoice.innerText = 'Your choice: ' + choice;
        outputComputerChoice.innerText = 'Computer choice: ' + computer;
        score.innerText = humanScore + ' : ' + computerScore;
    });
});

if (roundsPlayed = 0){
    btnRestart.disabled = true;
};
const btnRestart = document.querySelector('.btn-restart');
btnRestart.addEventListener('click', ()=> {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    outcome.innerText = '';
    outputYourChoice.innerText = '';
    outputComputerChoice.innerText = '';
    score.innerText = '0 : 0';

    btnsPlay.forEach(btn => btn.disabled = false);

});