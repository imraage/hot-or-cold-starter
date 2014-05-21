$(document).ready(function() {

    var randomNumber;
    var newGame;
    var counter;
    var userInput;
    var guess;
    var emptyTextArea;
    
    // reset text area and focus on cursor

    emptyTextArea = function() {
        $(".text").val("");
        $(".text").focus();
    };


    // Load new game

    newGame = function() {
        event.preventDefault();
        randomNumber = Math.floor(Math.random() * 101);
        emptyTextArea();
        $("#count").text(0);
        $("<h2 id = 'feedback'>" + "make a guess!" + "</h2>").replaceAll("h2");
        $("#guessList").empty();
        console.log(randomNumber);
    };

    newGame();

    // Load new game when "new game" is clicked

    $(".new").click(newGame);

    // increase the guess counter with every guess

    function guessCounter() {
        counter = $("#count").text();
        counter++;
        $("<span id = 'count'>" + counter + "<span>").replaceAll("span");
        console.log(counter);
    }

    // add the guess to a list

    function listGuess() {
        $("#guessList").append("<li>" + guess + "</li>" + " ");
    }



    userInput = function() {
        event.preventDefault();
        guess = $(".text").val();
        console.log(guess);
        if (isNaN(guess)) {
            $("<h2 id = 'feedback'>" + "We only accept numbers 'round here." + "</h2>").replaceAll("h2");
            emptyTextArea();
        } else if (guess > 100) {
            $("<h2 id = 'feedback'>" + "Please enter a number that's less than 100." + "</h2>").replaceAll("h2");
            emptyTextArea();
        } else if (guess < 1) {
            $("<h2 id = 'feedback'>" + "Please enter a number that's greater than 1." + "</h2>").replaceAll("h2");
            emptyTextArea();
        } else if (Math.abs(randomNumber - guess) > 50) {
            $("<h2 id = 'feedback'>" + "What's cooler than cool? ICE COLD!" + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) >=30  && Math.abs(randomNumber - guess) <=50) {
            $("<h2 id = 'feedback'>" + "Still pretty damn cold." + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) >=20 && Math.abs(randomNumber - guess) <=30) {
            $("<h2 id = 'feedback'>" + "You're starting to get warm." + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) >=10 && Math.abs(randomNumber - guess) <=20) {
            $("<h2 id = 'feedback'>" + "Incredibly warm but not quite hot!" + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) >=5 && Math.abs(randomNumber - guess) <=10) {
            $("<h2 id = 'feedback'>" + "Hot, hot, hot!" + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) >=1 && Math.abs(randomNumber - guess) <=5) {
            $("<h2 id = 'feedback'>" + "You couldn't be any hotter. So close!" + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        } else if (Math.abs(randomNumber - guess) === 0) {
            $("<h2 id = 'feedback'>" + "You guessed the number! Congratulations!" + "</h2>").replaceAll("h2");
            emptyTextArea();
            guessCounter();
            listGuess();
        }
    };

    // When the guess button is clicked

    $(".button").click(userInput);


    // Display information modal box 
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    // Hide information modal box 
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});
