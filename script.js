'use strict';

const $body = document.querySelector('body');
const $secretNumber = document.querySelector('.number');
const $check = document.querySelector('.check');
const $message = document.querySelector('.message');
const $score = document.querySelector('.score');
const $guess = document.querySelector('.guess');
const $again = document.querySelector('.again');
const $highScore = document.querySelector('.highscore');

const score = Number($score.textContent);
const values = initializeValues();
let secretNumber = values.secretNumber;
let scoreFlag = values.scoreFlag;
let highScore = 0;

$check.addEventListener(`click`, checkGuess);

$again.addEventListener(`click`, playAgain);

function checkGuess() {
    const guess = Number($guess.value);
    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        handleWinGame();
    } else if (guess > (secretNumber + secretNumber/2)) {
        displayMessage('📈 Too high!');
    } else if (guess > secretNumber) {
        displayMessage('📈 High!');
    } else if (guess < (secretNumber - secretNumber/2)) {
        displayMessage('📉 Too low!');
    } else if (guess < secretNumber) {
        displayMessage('📉 Low!');
    }

    // Game over
    if (scoreFlag <= 0) {
        handleGameOver();
    }
}

function displayMessage(message) {
    displayScore();
    $message.textContent = message;
}

function handleWinGame() {
    highScore = Math.max(highScore, scoreFlag);
    $highScore.textContent = highScore;
    displayMessage('🎉 Correct Number!');
    disableButtons();
    $secretNumber.textContent = secretNumber;
    $body.style.backgroundColor = '#60b347';
    $secretNumber.style.width = '30rem';
}

function handleGameOver() {
    displayMessage('💥 You lost the game!');
    disableButtons();
    $body.style.backgroundColor = '#A52A2A';
}

function displayScore() {
    if (scoreFlag > 0) {
        $score.textContent = scoreFlag;
    } else {
        $score.textContent = 0;
    }
    scoreFlag--;
}

function playAgain() {
    const values = initializeValues();
    secretNumber = values.secretNumber;
    scoreFlag = values.scoreFlag;
    $body.style.backgroundColor = '#222';
    $secretNumber.style.width = '15rem';
    $secretNumber.textContent = '?';
    enableButtons();
    displayMessage('Start guessing...');
}

function disableButtons() {
    $check.disabled = true;
    $check.style.cursor = 'not-allowed';
    $guess.disabled = true;
    $guess.style.cursor = 'not-allowed';
}

function enableButtons() {
    $guess.value = '';
    $guess.focus();
    $check.disabled = false;
    $check.style.cursor = 'pointer';
    $guess.disabled = false;
    $guess.style.cursor = 'text';
}

function initializeValues() {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    let scoreFlag = score;
    return { secretNumber, scoreFlag };
}