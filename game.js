// Let's Cash = storing something for future use (in variables)
let userScore = 0;
let computerScore = 0;

// DOM Variables - variables that stores DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const tackle_svg = document.getElementById("tackle");
const pass_svg = document.getElementById("pass");
const headshot_svg = document.getElementById("headshot");

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
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function userLose(userChoice, computerChoice) {
  //   console.log("loose");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} looses to ${computerChoice}. You lost...`;
}

function draw(userChoice, computerChoice) {
  //   console.log("draw");
  result_p.innerHTML = `${userChoice} equals ${computerChoice}. Draw.`;
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
