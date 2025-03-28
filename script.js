let userChoice = '';
let outcome = '';
let computerChoice = '';

function randomChooser(){
    let random = Math.floor(Math.random() * 3);
    let randomChoice = '';
    if (random === 0){
        randomChoice = 'rock';
    } else if (random === 1){
        randomChoice = 'paper';
    } else randomChoice = 'scissors';

    return randomChoice;
}

function determineOutcome(){
    let answer = '';
    if(userChoice === 'rock'){
        switch(computerChoice){
            case 'rock':
                answer = 'It is a draw!';
                break;
            case 'paper':
                answer = 'You lose!';
                break;
            case 'scissors':
                answer = 'You win!';
                break;
            default: 
                answer = 'Something went wrong! Oops';
        }
    }
    if(userChoice === 'paper'){
        switch(computerChoice){
            case 'rock':
                answer = 'You win!';
                break;
            case 'paper':
                answer = 'It is a draw!';
                break;
            case 'scissors':
                answer = 'You lose!';
                break;
            default: 
                answer = 'Something went wrong! Oops';
        }
    }
    if(userChoice === 'scissors'){
        switch(computerChoice){
            case 'rock':
                answer = 'You lose!';
                break;
            case 'paper':
                answer = 'You win!';
                break;
            case 'scissors':
                answer = 'It is a draw!';
                break;
            default: 
                answer = 'Something went wrong! Oops';
        }
    }
    return answer;
}

function startGame(){
    userChoice = prompt('Rock, Paper, Scissors?').toLowerCase();
    console.log(userChoice);
    computerChoice = randomChooser();
    console.log(computerChoice);
    outcome = determineOutcome();
    alert(userChoice + ' vs ' + computerChoice + ' = ' + outcome);
 }