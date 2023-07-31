let submitGuess = document.querySelector("#submitGuess");
let num;
randomNumber();
let usertry = document.querySelector("#userTries").innerHTML;
let userscore = 100;
if (submitGuess) {
  submitGuess.addEventListener("click", () => {
    let userGuess = document.querySelector("#inputGuess").value;
    if (usertry == 1) {
      alert("You Lose.... Play Again?");
      usertry = 10;
      randomNumber();
      document.getElementById("user-score").style.display = "none";
    }
    //-------- Main Logic --------------//
    else if (userGuess == "" || userGuess == 0) {
      document.querySelector("#userMessage").innerHTML =
        "Please enter a valid number";
    } else if (num < userGuess) {
      document.querySelector("#userMessage").innerHTML =
        "Your Number is greater";
      usertry--;
    } else if (num > userGuess) {
      document.querySelector("#userMessage").innerHTML =
        "Your Number is smaller";
      usertry--;
    } else if (num == userGuess) {
      document.getElementById("user-score").style.display = "block";
      alert("Yayy!!! You Guessed it....  Play again?");
      document.querySelector("#userScore").innerHTML = userscore - usertry;
      randomNumber();
    } else {
      document.querySelector("#userMessage").innerHTML =
        "Please enter a valid number";
    }
    //-------- END Main Logic --------------//
    document.querySelector("#userTries").innerHTML = usertry;
    changeUserTryColor();
  });
}

let userGuess = document.querySelector("#inputGuess");
userGuess.addEventListener("click", () => {
  userGuess.value = "";
  document.querySelector("#userMessage").innerHTML = "";
});
//-------- Random Number Logic --------------//
function randomNumber() {
  num = Math.floor(Math.random() * 100 + 1);
  console.log(num);
}
//-------- End Random Number Logic --------------//

//-------- User-try color Logic --------------//
function changeUserTryColor() {
  if (usertry > 7) {
    document.getElementById("userTries").style.color = "white";
  }
  if (usertry < 6 && usertry > 3) {
    document.getElementById("userTries").style.color = "yellow";
  } else if (usertry < 4) {
    document.getElementById("userTries").style.color = "red";
  }
}
//-------- End User-try color Logic --------------//
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
