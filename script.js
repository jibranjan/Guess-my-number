'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const $secretNumber = document.querySelector('.number');


document.querySelector('.check').addEventListener(`click`, function() {
    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');

    if (!guess) {
        message.textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        $secretNumber.textContent = secretNumber;
    } else if (guess > (secretNumber + secretNumber/2)) {
        message.textContent = '📈 Too high!';
    } else if (guess > secretNumber) {
        message.textContent = '📈 High!';
    } else if (guess < (secretNumber - secretNumber/2)) {
        message.textContent = '📉 Too low!';
    } else if (guess < secretNumber) {
        message.textContent = '📉 Low!';
    }
});
