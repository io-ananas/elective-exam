// Let's Cash = storing something for future use (in variables)
const userScore = 0;
const computerScore = 0;

// DOM Variables - variables that stores DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const tackle_svg = document.getElementById("tackle");
const pass_svg = document.getElementById("pass");
const headshot_svg = document.getElementById("headshot");

//get Computer choice
function getComputerChoice() {
  const choices = ["tackle", "pass", "headshot"];
  // get random element with math.random between 0 and 2 but need to round down with Math.floor to get 3 numbers
  //   console.log(Math.floor(Math.random() * 3));
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());

// Get the input of User
function game(userChoice) {
  //   console.log("you clicked on " + userChoice);
  const computerChoice = getComputerChoice();
  console.log("user: " + userChoice);
  console.log("computer: " + computerChoice);
}

function main() {
  tackle_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Tackle");
    game("tackle"); //function called game with tackle as argument
  });

  pass_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Pass");
    game("pass");
  });

  headshot_svg.addEventListener("click", function() {
    //   console.log("hey you clicked on Headshot");
    game("headshot");
  });
}

main();
