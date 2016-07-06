function guessNumber() {
  // Sets number to a random number between 1 and 10
  var number = Math.floor(Math.random() * 10) + 1;
  var guess = prompt("Guess a number between 1 and 10");
  if (guess == number) {
    document.getElementById("msg").innerText = "You guessed correctly!";
  } else {
      document.getElementById("msg").innerText = "Sorry, the correct number was " + number + "! Please try again!";
      guessNumber();
  }
}
