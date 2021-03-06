//===============
// Available color options
//===============
let colorArray = [
    '#DC143C',
    '#FF69B4',
    '#DA70D6',
    '#FF00FF',
    '#9400D3',
    '#0000CD',
    '#6495ED',
    '#A2B5CD',
    '#00BFFF',
    '#00F5FF',
    '#00C78C',
    '#00FF7F',
    '#00FF00',
    '#7CFC00',
    '#FFFF00',
    '#808069',
    '#FFFFF0',
    '#BDB76B',
    '#FFD700',
    '#FFA500',
    '#CD8500',
    '#CD6600',
    '#8B8682',
    '#8B4513',
    '#FFA07A',
    '#FF4500',
    '#FF7F50',
    '#FF6347',
    '#FFE4E1',
    '#EAEAEA',
    '#FF0000',
    '#8E388E',
    '#800000',
    '#8E8E38',
    '#C5C1AA',
    '#388E8E',
    '#FF7D40',
    '#4B0082',
    '#8968CD',
    '#F8F8FF',
];

// ==============
// game Variables
// ==============

let currentGameColors = [];

let currentStreak = 0;
let currentStreakDisplay = document.getElementById('currentStreakDisplay');
currentStreakDisplay.innerHTML = currentStreak;
let highScore = 0;
let highScoreDisplay = document.getElementById('highScoreDisplay'); 
highScoreDisplay.innerHTML = highScore;
let guessesRemaining = 8;
let guessDisplay = document.getElementById('guessesRemainingDisplay');
guessDisplay.innerHTML = guessesRemaining;
let $resetBtn = $('#resetBtn');


//===============
// Modal controls
//===============
// Game end pop up
let $gameEndMessage = $('#gameEndMessage'); // targeting the end state modal message
const $closeBtn = $('#endGameClose');

// Close Game Over Message
const closeMessage = () => {
    $gameEndMessage.css('display', 'none');
    gamePlay();
}

$closeBtn.on('click', closeMessage);

// Game start pop up
let $gameStartMessage = $('#gameStartMessage'); // targeting the game start modal
const $startGameBtn = $('#startGameClose');

// Close start game message
const closeStart = () => {
    $gameStartMessage.css('display', 'none');
    gamePlay();
}

$startGameBtn.on('click', closeStart);


// How to play pop up message
let $howToMessage = $('#howToMessage'); // targeting the how-to modal
let $howToBtn = $('#howToBtn');

const howToPlay = () => {
    $howToMessage.css('display', 'block');
}

$howToBtn.on('click', howToPlay);

// Close HowTo message
const $howToCloseBtn = $('#howToCloseBtn');

const howToClose = () => {
    $howToMessage.css('display', 'none');
}


$howToCloseBtn.on('click', howToClose);


// ===================
// Game setup logic: 
// ===================
// Creates randomized card for the play area. 
// Adds them to an array for the match card to pull from. 
// Listeners added to cards for checking against the Match Card on click

const startGame = () => {
    $('#container').css('background-color', 'steelblue');
    for (i = 0; i < 18; i++) {
        let colorPicker = Math.floor(Math.random() * colorArray.length);
        currentGameColors.push(colorArray[colorPicker]);
        // console.log(currentGameColors); 
        let $card = $('<div>').addClass('gameCard');
        $card.css('background-color', colorArray[colorPicker]).addClass(colorArray[colorPicker]);
        $card.on('click', function(e) {
            if ($(this).hasClass(roundMatchCard)) { // add listener. Will compare class of $card to roundMatchCard
                currentStreak += 1;
                currentStreakDisplay.innerHTML = currentStreak; // display streak
                guessesRemaining = 8; 
                guessDisplay.innerHTML = guessesRemaining; // reset guess count
                $('#container').css('background-color', roundMatchCard);
                gamePlay(); // on correct guess, add to streak and re-deal game board
            } else {
                guessesRemaining = guessesRemaining - 1;
                guessDisplay.innerHTML = guessesRemaining; // on incorrect guess, decrement guessesRemaining
                $(this).css('background-color', 'steelblue'); // "vanishing tile" inspired by Colt Steele's RGB color game
                $(this).css('box-shadow', '0px 0px 0px steelblue');
                if (guessesRemaining <= 0) {
                    gameOver(); // if guessesRemaining = 0, run gameOver sequence
                }
            }
        })
        $('#container').append($card);
    }
}
const hideFunction = document.getElementsByClassName('.gameCard');

// ====================
// Flip/Hide cards
// ====================
const hideCards = () => {
    $('.gameCard').css('background-color', '#222222');
}

// ====================
// Match Card Generator - creates the card the player is looking to match
// ====================

//Match winning card variable
let roundMatchCard = '';
//Match winning card generator
const matchCardGenerator = () => {
    let matchCardPicker = Math.floor(Math.random() * currentGameColors.length);
    roundMatchCard = currentGameColors[matchCardPicker];
    console.log(roundMatchCard);
    let $matchCard = $('<div>').attr('id', 'currentMatchCard');
        $matchCard.css('background-color', roundMatchCard).addClass(currentGameColors[matchCardPicker]);
        $('#matchCard').append($matchCard);
        
}

// ====================
// Reset and Game over logic
// ====================

// Reset button resets all params
const resetGame = () => {
    $('#container').empty();
    $('#matchCard').empty();
    currentStreak = 0;
    currentStreakDisplay.innerHTML = currentStreak;
    guessesRemaining = 8;
    guessDisplay.innerHTML = guessesRemaining;
    highScore = 0;
    highScoreDisplay.innerHTML = highScore;
    currentGameColors = [];
    gamePlay();
}

$resetBtn.on('click', resetGame);

// When guesses expire, reset streak and guesses, but not high score. Display game over modal message
const gameOver = () => {
    if (currentStreak >= highScore) {
        highScore = currentStreak;
        highScoreDisplay.innerHTML = highScore;
    };
    $('#container').empty();
    currentStreak = 0;
    currentStreakDisplay.innerHTML = currentStreak;
    guessesRemaining = 8;
    guessDisplay.innerHTML = guessesRemaining;
    currentGameColors = [];
    $gameEndMessage.css('display', 'block');
}

// ======================
// MAIN GAME FUNCTIONALITY
// ======================

let gamePlay = () => {
    $('#matchCard').empty(); // clear player match card
    $('#container').empty(); // clear play area //can't get delay to work (want h2 in the container html to remain briefly)
    currentGameColors = []; // clear array of possible winning cards
    setTimeout(startGame, 1400);
    setTimeout(// Set timeout researched on w3schools, after I failed to make jQuery .delay() (that we used in jQuery Magic homework) accomplish what I was looking for...
    hideCards, 4600);
    setTimeout(matchCardGenerator, 5200);
}

const launchGame = () => {
    $gameStartMessage.css('display', 'block');
}

launchGame();