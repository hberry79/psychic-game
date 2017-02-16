//starting values
var wins = 1;
var losses = 1;
var guessesLeft = 9;
var guessedLetters = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//code to push guesses left var value to the DOM
document.getElementById('guessesleft').innerHTML = guessesLeft;


//the entire game runs in this fancy function 
document.onkeyup = function(event) {
		//if you want to test what happens when you when, activate this next line and guess "k"
		// var computerGuess = "k";

		//player picks a letter onkeypress. create new var called playerGuess. we need to use .toLowerCase just in case they have caps lock on
        var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //the computer picks a random letter
        var computerGuess = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))]
        
        //we push the player guess (stored in our new var playerGuess) to the empty array guessedLetters
        guessedLetters.push(playerGuess);
        //now thats all great but its nothing unless we update the DOM toshow our okayer what they guessed
        document.getElementById("guessedletters").innerHTML = guessedLetters;  
        //now we check and see if the playerGuess === computerGuess and add our wins and losses approproately 
        
        //if the player is right and guessed the same letter
        if (playerGuess === computerGuess && guessesLeft >= 1) {
            alert('Ugh! I knew I should not have underestimated you. You have won this round!');
            //push win update in DOM
            document.getElementById('wins').innerHTML = wins++;
        } 
        //if they are wrong but havesome guesses left
        else if (playerGuess !== computerGuess && guessesLeft >= 1) {
            alert("Ha! You imbecile. Good luck guessing my super secret letter. Try again if you dare...");
            //update losses and guesses left in the DOM
            document.getElementById("guessesleft").innerHTML = guessesLeft--;
           }
           //if they are wron and out of guesses
           else {
           	alert ("GAME OVER. Fancy another round?");

           	//reset after game is over
           	guessesLeft = 9;
           	document.getElementById("guessesleft").innerHTML = guessesLeft;
           	guessedLetters = [];
         	document.getElementById('losses').innerHTML = losses++;
           
		};
	};



   
    


 //computer picks another letter
           // var computerGuess = computerChoices[Math.floor(Math.random() * (computerChoices.length - 1))];
        //if/else statements to show what happens to score if letter matches or not else blah


        //some kind of reset function when the game is over
