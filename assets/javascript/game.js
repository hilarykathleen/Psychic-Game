var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];






document.onkeyup = function(event) {




var userGuess = event.key;

guessesSoFar.push(userGuess);

if (computerGuess === userGuess) {
    wins++;
    guessesLeft = 10;
    guessesSoFar = [];
}

if (computerGuess !== userGuess) {
    guessesLeft--;
}

if (guessesLeft === 0) {
    losses++;
    guessesLeft = 10;
    guessesSoFar = [];
}

guessesSoFar.textContent = "guesses so far: " + userGuess;
guessesLeft.textContent = "guesses left: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;

var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess what letter I am thinking of</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessesLeft + '</p>' +
    '<p>Guesses So Far: ' + guessesSoFar + '</p>';
    document.querySelector("#game").innerHTML = html;

}





