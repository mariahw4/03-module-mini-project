
//  As a user, I want to play Rock, Paper, Scissors against an automated opponent.

//  * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
 
//  * As a user, I expect the computer to choose R, P, or S in return.
 
//  * As a user, I want the option to play again whether I win or lose.
 
//  * As a user, I want to see my total wins, ties, and losses after each round.
 
// alert(): Opens a window with a message.
// confirm(): Opens a window with a cancel and OK buttons, returns a boolean
// prompt(): Opens a window with a text input field, returns user input.

var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();




// var wins = 0;
// var loses = 0;
// var ties = 0;

// var playGame = confirm("Do you want to play Rock Paper Scissors?")

// if (playGame) {
//     alert("Let's GOOOOO!");
// } else {
//     alert("Thanks anyway! Next time");
// }

// // If user pressed Cancel, immediately end function
// // if (!playGame) {
// //     return;
// //   }

// // if (console.log() = true) {
// //     alert("Thanks Anyway, next time!!");
// // } else {
// //     alert ("Ok! Lets Play!")
// // }

// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// var compare = function(choice1, choice2) {
//     if(choice1 === choice2) {
//     return "The result is a tie!";
// }
// if(choice1 === "rock") {
//     if(choice2 === "scissors") {
//         return "rock wins";
//     } else {
//         return "paper wins";
//     }
// }
// if(choice1 === "paper") {
//     if(choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if(choice2 === "scissors") {
//             return "scissors wins";
//     }
// }
// if(choice1 === "scissors") {
//     if(choice2 === "rock") {
//         return "rock wins";
//     } else {
//         if(choice2 === "paper") {
//             return "scissors wins";
//         }
//     }
// }
// }
// };
// console.log("User Choice: " + userChoice);
// console.log("Computer Choice: " + computerChoice);
// alert(compare(userChoice, computerChoice));

// var playAgain = confirm("Play Again?");

// if (playAgain) {
//     playGame 
// }




// var options = ["r", "p", "s"];
// // for (var i = 0; i <50; i++) {
// var randomIndex = Math.floor(Math.random() * 3);
// var computerGuess = options[randomIndex];
// console.log(computerGuess)


// var playerOptions = ["r", "p", "s"];
// // var playerGuess = playerOptions[]

// // alert("Do you want to play Rock Paper Scissors?")
// var query = (console.log(confirm("Do you want to play Rock Paper Scissors?")))

// if ( = true) {
//     prompt ("Pick R, P, S");
//     console.log(query.prompt);
// } else if (query = false) {
//     prompt ("Sorry -we'll play next time!");
//     console.log(query.prompt);