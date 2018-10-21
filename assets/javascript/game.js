
// Global variables start here ----------------------------------------------------------------------------
var numberOfRemainingGuesses = 12; //initialize to always 12 from the start
var computerGuessWord = ""; //this stores the selected random word until user wins or losses
var wrongGuessWord = ""; //this stores the letter concatenation everytime it's the wrong letter guess.
var rightGuessWord =[];//this stores the corrected key pressed letter guess according to the index of computerGuessWord that stores the selected random word
var inputKeypressed = ""; // this stores the key pressed letter
var randomWord = ["Pantera", "Slipknot", "Babymetal", "Megadeth", "Slayer"];
//wordGame Object starts here.  ------------------------------------------------------------------------------------------------
// It has the property values and methods to play this word guessing game.
var wordGame = {
    wins: 0,  //initialize win to 0, going forward it will increment based off of the number of corrected word guesses from the user.
    losses: 0, //initialize loss to 0, going forward it will increment based off of the zero remaining number of word guesses from the user.
    initiateunderscore: function () {
        //1. create a for loop according to the computerGuessWord's length ending condition
        for (var i=0; i < computerGuessWord.length; i++)
         {
             //rightGuessWord is a global variable not an object
            rightGuessWord[i] = " _ ";
          
      
         }
        //2. inside the for loop, the array correctGuessWord is assigned to an underscore with extra spaces in between it 
        //   make sure to close the string with open and close double quotes. 
    },
    checkForWins: function () {
        //since we are using ===, the type matters.
        // We can't assign array with a string
        //we need to write a for loop to do the array to string conversion
        var strConvertType = "";
        for (var i = 0; i < computerGuessWord.length; i++) {
            strConvertType += rightGuessWord[i];
        }
        //checks to see if the convert string type 
        //rightGuessWord is equal to computerGuessWord
        if (strConvertType === computerGuessWord) {
            //write an alert("Congratulations. 
            //You've won!"), increments wins and call this.wins and  this.resetGame()
             alert("You're a winner!!");
            this.wins++;
            this.resetGame();
           
        }
    },
    checkForLosses: function () {
        //If global variable called numberOfRemainingGuesses equals to zero
        // then write an alert(You've lost!) message, increments the this.losses++ and call this.resetGame()
        if (numberOfRemainingGuesses===0)
        {
            alert("Looooser");
            this.losses++;
            this.resetGame();
        }
    },
    checkComputerGuessWordwithKeypressedLetter: function () {
        //1. create a for loop that has the computerGuessWord.length ending
        //It sets the isFound to false, if no match with computerGuessWord and keypressed    
        var isFound = false;
        for (var i = 0; i < computerGuessWord.length; i++) {
            //inputKeypressed is a gloabl variable not the name of the object wordGame by Phil
            if (computerGuessWord[i].indexOf(inputKeypressed) > -1) {
                //  2.  Inside the for loop, check to see if computerGuessWord has any 
                //   letter that matches the keypressed letter 
                //  if it is a matched, 
                // it calls rightGuessWord[i] array and assigned the keypressed letter into it 
                 //inputKeypressed is a global variable not object take any reference to  
                 //wordGame by Phil
                rightGuessWord[i]=inputKeypressed;
                isFound = true;
            }
        }
        //It only displays the wrong letter guesses at the bottom of the screen
        if (isFound == false && wrongGuessWord.indexOf(inputKeypressed) === -1) {
            //3. use global variable called wrongGuessWord
            //to do a string concatenation with inputKeypressed that includes an empty space
            wrongGuessWord += inputKeypressed + " ";
            //4. it decrements the global variable numberOfRemainingGuesses
            numberOfRemainingGuesses --;
        }
    },
    allLetter: function (inputtxt) {
        var letters = /^[A-Za-z]+$/;
        if (inputtxt.match(letters)) {
            return true;
        }
        else {
            return false;
        }
    },
    resetGame: function () {
        //reset the global variables below back to the original settings.
        numberOfRemainingGuesses = 12;
        computerGuessWord = "";
        wrongGuessWord = "";
        rightGuessWord = [];
        inputKeypressed = "";
        //1. use the random generator to get the index
        //   of element of randomWords array from 0 to 4
        //2. call global computerGuessWord assigned with the 
        //   random picked word. Make sure to lowercase it.
        //3.  call   this.initializeUnderlinePlaceHolderforRightGuessWord() function
        //4.  call   this.display() function
          //this was a capital ComputerGuessWord, it should be computerGuessWord. It's case sensitive by Phil
        computerGuessWord = randomWord[Math.floor(Math.random() *5)].toLowerCase();
        this.initiateunderscore();
        this.display();
    },
    display: function () {
        //if it is the right letter guess, the rightGuessLetter will display in current-word div
        document.getElementById("current-word").textContent = rightGuessWord.join(" ");
        //the number of remaining guesses will decrement if it is the wrong letter key pressed.
        // and will display in the guesses-remaining div
        document.getElementById("guesses-remaining").textContent = numberOfRemainingGuesses;
        //the wrong letter guess will be display  in the guessed-letters div.
        document.getElementById("guessed-letters").textContent = wrongGuessWord;
        //everytime a letter is pressed, it checks for wins and displays the total wins
        //in the showWins div
        this.checkForWins();
        document.getElementById("showWins").textContent = this.wins;
        //everytime if a letter is pressed, it checks for losses and displays the total wins
        //in the showLosses div
        this.checkForLosses();
        document.getElementById("showLosses").textContent = this.losses;
    },
    playGame: function () {
        //1. begin to check for key pressed letter off of the selected 
        //   random word that is stored in global computerGuessWord variable
        // Call this.checkComputerGuessWordwithKeypressedLetter() to perform this task
        this.checkComputerGuessWordwithKeypressedLetter();
        //2. call the this.display() function
        this.display();
    }
};   //wordGame object ends here.-------------------------------------------------------------------------------------------------------
function initialize_Game() {
    //1. use the random generator to get the index of elements of randomWords array from 0 to 4
    //2. Use the global computerGuessWord string assigned with the random picked word. 
    //   Make sure to lowercase it.
    //this was a capital ComputerGuessWord, it should be computerGuessWord. It's case sensitive by Phil
    computerGuessWord = randomWord[Math.floor(Math.random() * 5)].toLowerCase();
   
  // take this out  console.log(ComputerGuessWord); this caused some issues by Phil
      
    
  
    //3. call wordGame.initiateunderscore method using a dot operator of wordGame Object
   wordGame.initiateunderscore();
}
document.onkeyup = function (event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    //take out  console.log(letter) by Phil. This caused some issues 
   // console.log(letter);
    //wordGame.checkLetter()
    //wordGame.display()
    // 1. check to see for only letter using the function 
    //  called  wordGame.allLetter(input value that was typed by the user) 
    //  otherwise, display an alert("Invalid Entry, a letter only!!")          
    // 2. if the input is only a letter, 
    //     proceed with the game by calling the 
    //     global variable called inputKeypressed to assigned with letter variable 
    if (wordGame.allLetter(letter)) {
        //3. inputKeypressed is assigned with letter variable
        //call  wordGame.playGame()
        //inputKeypressed is a global variable not an object by Phil
        inputKeypressed = letter;
         wordGame.playGame();
    }
    else {
        //4. this displays the alert("Invalid Entry, a letter only!!")
        alert("Type a letter only");
    }
}