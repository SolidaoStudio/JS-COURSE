// Function to determine the result based on player and computer choices
function getResult(playerChoice, computerChoice) {
    if (
         (playerChoice === "scissors" && computerChoice === "rock") || 
         (playerChoice === "rock" && computerChoice === "paper") ||
         (playerChoice === "paper" && computerChoice === "scissors")
    ) {
        return "You lost! The computer played: " + computerChoice;
    } else if (playerChoice === computerChoice) {
        return "It's a draw! The computer played: " + computerChoice;
    } else {
        return "You won! The computer played: " + computerChoice;
    }
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
    document.getElementById("result").innerHTML = getResult(playerChoice, getComputerChoice());
}
