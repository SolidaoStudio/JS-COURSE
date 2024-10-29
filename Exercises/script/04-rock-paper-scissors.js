//Var
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    loses: 0,
    draws: 0
};

// Function to determine the result based on player and computer choices
function getResult(playerChoice, computerChoice) {
    
    let result;

    if (
         (playerChoice === "scissors" && computerChoice === "rock") || 
         (playerChoice === "rock" && computerChoice === "paper") ||
         (playerChoice === "paper" && computerChoice === "scissors")
    ) {
        ++score.loses;
        result = "You lost! The computer played: " + computerChoice;
    } else if (playerChoice === computerChoice) {
        ++score.draws;
        result = "It's a draw! The computer played: " + computerChoice;
    } else {
        ++score.wins;
        result = "You won! The computer played: " + computerChoice;
    }

    //Final
    document.getElementById("result").innerHTML= result;
    document.getElementById("scoreText").innerHTML= `Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;
    
    //Memory
    localStorage.setItem('score', JSON.stringify(score));
}

// Function to simulate the computer's choice
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue <= 0.33) return "scissors";
    else if (randomValue <= 0.66) return "rock";
    else return "paper";
}

// Function triggered by the button to display the result
function send() {
    const playerChoice = document.querySelector('input[name="choice"]:checked').value;
    getResult(playerChoice, getComputerChoice());
}

function reset(){
    score = {
        wins : 0,
        loses: 0,
        draws: 0
    };

    //Memory
    localStorage.removeItem('score');

    document.getElementById('scoreText').innerHTML= `Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;
}
document.getElementById('scoreText').innerHTML=`Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;
document.querySelector('.send').addEventListener('click', send);
document.querySelector('.reset').addEventListener('click', reset);