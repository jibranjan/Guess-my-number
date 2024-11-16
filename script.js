'use strict';

const $body = document.querySelector('body');
const $secretNumber = document.querySelector('.number');
const $check = document.querySelector('.check');
const $message = document.querySelector('.message');
const $score = document.querySelector('.score');
const $guess = document.querySelector('.guess');
const $again = document.querySelector('.again');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = Number($score.textContent);
let scoreFlag = score;

$check.addEventListener(`click`, checkGuess);

$again.addEventListener(`click`, playAgain);

function checkGuess() {
    const guess = Number($guess.value);
    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        handleWinGame();
    } else if (guess > (secretNumber + secretNumber/2)) {
        displayScore();
        displayMessage('📈 Too high!');
    } else if (guess > secretNumber) {
        displayMessage('📈 High!');
        displayScore();
    } else if (guess < (secretNumber - secretNumber/2)) {
        displayMessage('📉 Too low!');
        displayScore();
    } else if (guess < secretNumber) {
        displayScore();
        displayMessage('📉 Low!');
    }

    // Game over
    if (scoreFlag <= 0) {
        handleGameOver();
    }
}

function displayMessage(message) {
    $message.textContent = message;
}

function handleWinGame() {
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
    scoreFlag--;
    if (scoreFlag > 0) {
        $score.textContent = scoreFlag;
    } else {
        $score.textContent = 0;
    }
}

function playAgain() {
    $body.style.backgroundColor = '#222';
    $secretNumber.style.width = '15rem';
    $guess.value = '';
    $guess.focus();
    $check.disabled = false;
    $check.style.cursor = 'pointer';
    $guess.disabled = false;
    $guess.style.cursor = 'text';
    scoreFlag = score;
    $score.textContent = score;
    displayMessage('Start guessing...');
}

function disableButtons() {
    $check.disabled = true;
    $check.style.cursor = 'not-allowed';
    $guess.disabled = true;
    $guess.style.cursor = 'not-allowed';
}