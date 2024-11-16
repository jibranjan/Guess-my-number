'use strict';

const $secretNumber = document.querySelector('.number');
const $check = document.querySelector('.check');
const $message = document.querySelector('.message');
const $score = document.querySelector('.score');
const $guess = document.querySelector('.guess');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number($score.textContent);

$check.addEventListener(`click`, checkGuess);

function displayMessage(message) {
    $message.textContent = message;
}

function displayScore() {
    score--;
    if (score > 0) {
        $score.textContent = score;
    } else {
        $score.textContent = 0;
    }
}

function checkGuess() {
    const guess = Number($guess.value);
    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        $secretNumber.textContent = secretNumber;
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

    if (score <= 0) {
        displayMessage('💥 You lost the game!');
        $check.disabled = true;
        $check.style.cursor = 'not-allowed';
        $guess.disabled = true;
        $guess.style.cursor = 'not-allowed';
    }
}
