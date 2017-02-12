//starting values
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//the computer picks a letter
var computerGuess = computerChoices [Math.floor(Math.random()* (computerChoices.length - 1))]

//the player picks a letter onkeypress. create new var called playerGuess. we need to use .toLowerCase
document.onkeyup = function(event) {
    
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
}
console.log (playerGuess)

//we push that guess (stored in our new var playerGuess) to the array guessedLetters
guessedLetters.push(playerGuess);
//now we check and see if the playerGuess === computerGuess

if (playerGuess === computerGuess) {
	wins++;
}
else {
	(guessesLeft - 1);
	//computer picks another letter
	var computerGuess = computerChoices [Math.floor(Math.random()* (computerChoices.length - 1))];

}

//if/else statements to show what happens to score if letter matches or not else blah


//some kind of reset function when the game is over