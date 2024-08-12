'use strict';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.check').addEventListener(`click`, function() {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        }
    });
});