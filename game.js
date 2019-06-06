// Let's Cash = storing something for future use (in variables)
let userScore = 0;
let computerScore = 0;
let delaySeconds = 1500;

// DOM Variables - variables that stores DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const tackle_svg = document.getElementById("tackle");
const pass_svg = document.getElementById("pass");
const headshot_svg = document.getElementById("headshot");

// Intro
let introDiv = document.querySelector("#intro");
let background = document.querySelector("#background");
let logo = document.querySelector("#logo");
let versus = document.querySelector("#versus");
let interface = document.querySelector("#interface");
let linkHome = document.querySelector(".rect");

introDiv.addEventListener("click", startGame);

function startGame() {
  introDiv.style.display = "none";
  interface.style.visibility = "visible";
  background.style.visibility = "visible";
  logo.style.visibility = "visible";
  versus.style.visibility = "visible";
  interface.style.visibility = "visible";
  computerScore_span.style.visibility = "visible";
  userScore_span.style.visibility = "visible";
  scoreBoard_div.style.visibility = "visible";
  result_p.style.visibility = "visible";
  tackle_svg.style.visibility = "visible";
  pass_svg.style.visibility = "visible";
  headshot_svg.style.visibility = "visible";
  linkHome.style.visibility = "visible";
  let sound = document.getElementById("tada");
  sound.play();
}

// get Computer choice
function getComputerChoice() {
  const choices = ["Tackle", "Pass", "Headshot"];
  // get random element with math.random between 0 and 2 but need to round down with Math.floor to get 3 numbers
  //   console.log(Math.floor(Math.random() * 3));
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());

function userWin(userChoice, computerChoice) {
  userScore++;
  //   console.log("WIN");
  //   console.log(userScore);
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${userChoice} beats ${computerChoice}. You win!`;
  console.log(userChoice);
  document
    .querySelector(`#${userChoice.toLowerCase()} circle`)
    .classList.add("green-win");
  setTimeout(function() {
    document
      .querySelector(`#${userChoice.toLowerCase()} circle`)
      .classList.remove("green-win");
  }, delaySeconds);
  let sound = document.getElementById("win-sound");
  sound.play();
}

function userLose(userChoice, computerChoice) {
  //   console.log("loose");
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${userChoice} looses to ${computerChoice}. You lost...`;
  document
    .querySelector(`#${userChoice.toLowerCase()} circle`)
    .classList.add("orange-lose");
  setTimeout(function() {
    document
      .querySelector(`#${userChoice.toLowerCase()} circle`)
      .classList.remove("orange-lose");
  }, delaySeconds);
  let sound = document.getElementById("lose-sound");
  sound.play();
}

function draw(userChoice, computerChoice) {
  //   console.log("draw");
  result_p.textContent = `${userChoice} equals ${computerChoice}. Keep it up.`;
  document
    .querySelector(`#${userChoice.toLowerCase()} circle`)
    .classList.add("gold-draw");
  setTimeout(function() {
    document
      .querySelector(`#${userChoice.toLowerCase()} circle`)
      .classList.remove("gold-draw");
  }, delaySeconds);
  let sound = document.getElementById("draw-sound");
  sound.play();
}

// Get the input of User
function game(userChoice) {
  //   console.log("you clicked on " + userChoice);
  const computerChoice = getComputerChoice();
  //   console.log("user: " + userChoice);
  //   console.log("computer: " + computerChoice);

  switch (
    userChoice + computerChoice //if user wins
  ) {
    case "TacklePass":
    case "PassHeadshot":
    case "HeadshotTackle":
      //   console.log("USER WINS");
      userWin(userChoice, computerChoice);
      break;
    //if user loses
    case "PassTackle":
    case "HeadshotPass":
    case "TackleHeadshot":
      //   console.log("USER LOSES");
      userLose(userChoice, computerChoice);
      break;
    //if equality
    case "TackleTackle":
    case "PassPass":
    case "HeadshotHeadshot":
      //   console.log("EQUALITY");
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  tackle_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Tackle");
    game("Tackle"); //function called game with tackle as argument
  });

  pass_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Pass");
    game("Pass");
  });

  headshot_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Headshot");
    game("Headshot");
  });
}

main();
