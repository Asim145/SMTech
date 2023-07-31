let submitGuess = document.querySelector("#submitGuess");
const num = Math.floor(Math.random() * 100 + 1);
let usertry = 0;
let userscore = 100;
if (submitGuess) {
  submitGuess.addEventListener("click", () => {
    let userGuess = document.querySelector("#inputGuess").value;
    if (userGuess == "" || userGuess == 0) {
      document.querySelector("#userMessage").innerHTML =
        "Please enter a valid number";
    } else if (num < userGuess) {
      document.querySelector("#userMessage").innerHTML =
        "Your Number is greater";
      usertry++;
    } else if (num > userGuess) {
      document.querySelector("#userMessage").innerHTML =
        "Your Number is smaller";
      usertry++;
    } else if (num == userGuess) {
      usertry++;
      document.querySelector("#userMessage").innerHTML =
        "Yayy!!! You Guessed it....";
      document.querySelector("#userTries").innerHTML = usertry;
      document.querySelector("#userScore").innerHTML = userscore - usertry;
    } else {
      document.querySelector("#userMessage").innerHTML =
        "Please enter a valid number";
    }
  });
}
let userGuess = document.querySelector("#inputGuess");
userGuess.addEventListener("click", () => {
  userGuess.value = "";
  document.querySelector("#userMessage").innerHTML = "";
});
// Number Guess Game Main Logic
// let num = Math.floor(Math.random() * 100 + 1);
// let usertry = 0;
// let score = 100;
// let guess = 0;
// console.log("Welcome to number Guesser Game");
// do {
//   guess = prompt("Guess the Number (1 - 100)");
//   if (guess == num) {
//     console.log("Yayy! You Guessed it");
//     console.log("Your Score : ", score - usertry);
//     console.log("Your tried ", usertry, " times");
//   } else if (num < guess) {
//     console.log("The Number is smaller than", guess);
//     usertry++;
//   } else if (num > guess) {
//     console.log("The Number is greater than", guess);
//     usertry++;
//   }
// } while (guess != num);
// Number Guess Game Main Logic End
