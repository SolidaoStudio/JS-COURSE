//Var
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  draws: 0,
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
  document.getElementById("result").innerHTML = result;
  document.getElementById("played").innerHTML = `
        <br>
        <span>You : </span>
        <img src="./img/${playerChoice}-emoji.png"></img>
        <span>Vs</span>
        <img src="./img/${computerChoice}-emoji.png"></img> 
        <span>: Com</span>
    `;
  document.getElementById(
    "scoreText"
  ).innerHTML = `Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;

  //Memory
  localStorage.setItem("score", JSON.stringify(score));
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
  const playerChoice = document.querySelector(
    'input[name="choice"]:checked'
  ).value;
  getResult(playerChoice, getComputerChoice());
}

//AutoPlay Vars
let autoPlaySwith = false;
let interval;
//AutoPlay
function autoPlay() {
  if (autoPlaySwith === false) {
    interval = setInterval(function () {
      p1 = getComputerChoice();
      p2 = getComputerChoice();
      getResult(p1, p2);
    }, 1000);
    document.querySelector(".autoPlay").innerHTML = "Stop Auto Play";
    autoPlaySwith = true;
  } else {
    clearInterval(interval);
    autoPlaySwith = false;
    document.querySelector(".autoPlay").innerHTML = "Auto Play";
  }
}

//Reset
function reset() {
  score = {
    wins: 0,
    loses: 0,
    draws: 0,
  };

  //Memory
  localStorage.removeItem("score");

  document.getElementById(
    "scoreText"
  ).innerHTML = `Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;
}

document.getElementById(
  "scoreText"
).innerHTML = `Wins : ${score.wins} | Losses : ${score.loses} | Draws : ${score.draws}`;
document.querySelector(".send").addEventListener("click", send);
document.querySelector(".reset").addEventListener("click", reset);
document.querySelector(".autoPlay").addEventListener("click", autoPlay);
