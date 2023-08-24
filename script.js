// Define an array of words for the game
const words = ["hangman", "javascript", "programming", "openai"];
// Select a random word from the array
const randomWord = words[Math.floor(Math.random() * words.length)];
// Create an array to store the correctly guessed letters
const guessedLetters = [];
// Create a variable to store the number of incorrect guesses
let incorrectGuesses = 0;
// Function to check if the player has won the game
function hasWon() {
  for (const letter of randomWord) {
    if (!guessedLetters.includes(letter)) {
      return false;
    }
  }
  return true;
}
// Function to update the word container with the guessed letters
function updateWordContainer() {
  const wordContainer = document.getElementById("word-container");
  let html = "";
  for (const letter of randomWord) {
    if (guessedLetters.includes(letter)) {
      html += "<span>${letter}</span>";
    } else {
      html += "<span>_</span>";
    }
  }
  wordContainer.innerHTML = html;
}
// Function to handle button clicks
function handleButtonClick(event) {
  const letter = event.target.innerText;
  guessedLetters.push(letter);
  if (!randomWord.includes(letter)) {
    incorrectGuesses++;
  }
  updateWordContainer();
  event.target.disabled = true;
  if (hasWon()) {
    alert("Congratulations! You won!");
  } else if (incorrectGuesses === 6) {
    alert("Game over! Le mot était ${randomWord}. Try again!");
  }
}
// Function to initialize the game
function initializeGame() {
  const buttonsContainer = document.getElementById("buttons-container");
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", handleButtonClick);
    buttonsContainer.appendChild(button);
  }
  updateWordContainer();
}
// Call the initializeGame function to start the game
initializeGame();
