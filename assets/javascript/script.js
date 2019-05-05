$(document).ready(function() { 

var questionNbr = 0;
var numberRight = 0;
var numberWrong = 0;
var seconds = 10;
var gameStart = false;
// variable Object for Trivia questions, choices and answers.
var Object = [{
    // #1
    question: "How many Pokémon are in the first generation?",
    choices: ["151", "99", "100", "150"],
    correctAnswer: 0,

    }, {
    // #2
    question: "What is the Type 'Psychic' Super-Effective to?",
    choices:["Ghost, Dark & Poison", "Fighting & Poison ", "Psychic, Dark & Fairy", "Ghost & Fighting"],
    correctAnswer: 1,

    }, {
    // #3
    question:"Which Pokemon does NOT have a baby evolution?",
    choices:["Clefairy", "Hitmonchan", "Togepi", "Pikachu"],
    correctAnswer: 2,
    }, {
    // #4
    question:"Which Pokémon game(s) were the first to feature polygonal 3D graphics on handheld systems?",
    choices:["Sun & Moon", "Diamond & Pearl", "Omega Ruby & Alpha Sapphire", "X & Y"],
    correctAnswer: 3,
    }, {
    // #5
    question: "Which Pokémon was NOT introduced in Generation 3?",
    choices:["Flygon", "Banette", "Dusknoir", "Mawile"],
    correctAnswer: 2,

    }, {
    // #6
    question: "Which Pokémon does NOT have 100% chance of being female?",
    choices:["Frosslass", "Salazzle", "Vespiquen", "Gardevoir"],
    correctAnswer: 3,

    }, {
    // #7
    question: "Which is NOT one of the 3 Elements embodied by the Legendary Pokémon from Ruby & Sapphire? ",
    choices:["Earth", "Time", "Sea", "Sky"],
    correctAnswer: 1,

    }, {
    // #8
    question: "What Pokémon is known as the Lazy Pokémon?",
    choices:["Slaking", "Snorlax", "Drowzee", "Slakoth"],
    correctAnswer: 0,

    }, {
    // #9
    question: "Which Pokémon is NOT based on a real life animal?",
    choices:["Minccino", "Hippopotas", "Darmanitan", "Pangoro"],
    correctAnswer: 2,

    },{
    // #10
    question: "What subject matter has the naming of Pokémon game-titles been based on?",
    choices:["Colors", "Precious Metals", "Gemstones", "Chromosomes", "Solar Bodies", "Weapons", "All of the above!"],
    correctAnswer: 6,

}];

//Start button 
$('.startButton').click(function() {
    gameStart = true;
    generateQuestions()
    setInterval(countDown, 1000);
});

function countDown() {
    seconds--;
    $(".timer").text("Time Remaining: " + seconds);
    var indexCorrectAnswer = Object[questionNbr].correctAnswer;
    if (seconds == 0) {
        $('.container').empty()
        $('.container').append("<div id=timesUp>Time's Up <br> Try Again</div>");
        numberWrong++;
        questionNbr++;
    }
};

function generateQuestions() {

    if(questionNbr < Object.length) {
        $('.container').empty()
        $('.container').append("<div class=question></div>");
        $('.question').text(Object[questionNbr].question);

        for(var i = 0; i < Object[questionNbr].choices.length; i++) {
            $('.container').append("<div class=answer>" + Object[questionNbr].choices[i] + "</div>");
            };
        $('.container').append("<div class=timer>Time Remaining: "+ seconds +"</div>");
    } else if (questionNbr === Object.length) {
        gameEnd();
    };

    $('.answer').click(function(event) {
        // Answering Correctly
        var indexCorrectAnswer = Object[questionNbr].correctAnswer;
        if($(this).text() === (Object[questionNbr].choices[indexCorrectAnswer])) {
            $('.container').empty()
            $('.container').append("<div id=correct></div>", "<img src='assets/images/correct.png' height='25%' width='25%'>");
            $('#correct').text("Correct!");
            setTimeout(generateQuestions, 2000);
            seconds = 12;
            questionNbr++;
            numberRight++;
        // Answering Incorrectly
        } else {
            $('.container').empty()
            $('.container').append("<div id=incorrect></div>", "<img src='assets/images/incorrect.png' height='20%' width='20%'>");
            $('#incorrect').text("Incorrect!");
            setTimeout(generateQuestions, 2000)
            seconds = 12;
            numberWrong++;
            questionNbr++;
        };
    });

function gameEnd () {
    clearInterval(countDown)
    $('.container').empty();
    $('.container').append("<div id=finalScore>Total Correct: " + numberRight + "<br> Total Incorrect: " + numberWrong +"</div>");
    gameStarted = false;
    };
};

}) // end of $(document).ready



















