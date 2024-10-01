'use strict';

/* Introduction to Dom #70 & #71

console.log(document.querySelector('.message').textContent);

*/

/* Selecting and Manipulating elements #72 

console.log(document.querySelector('.message').textContent); // printing text content

document.querySelector('.message').textContent = 'Correct Number!'; // Changing text content

console.log(document.querySelector('.message').textContent); // new text content

console.log(document.querySelector('.number').textContent); // text content = ?

document.querySelector('.number').textContent = 13; // Dom manipulation
document.querySelector('.score').textContent = 10; // Dom manipulation

document.querySelector('.guess').value = 23; // Setting DOM value

console.log(document.querySelector('.guess').value); // Getting DOM value

console.log(document.querySelector('.guess').value);

*/

/* Handling Clicking Events #73 */
/* Implementing Game Logic #74 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Simplifying updating message to user by using DOM manipulation
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling the ".check" button click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // This alerts the user if there is no input by the user
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // Winning scenario if the user guesses the correct number
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number! ';
    displayMessage('🎉 Correct Number! ');

    // We then shoe the secretNumber to the UI
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('body').style.background =
      'linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When the user does not guess and loses all of its score starting from "20"
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#FF0000';

      document.querySelector('body').style.background =
        'radial-gradient(circle at 10% 20%, rgb(238, 56, 56) 0%, rgba(206, 21, 0, 0.92) 90.1%)';

      document.querySelector('.number').style.width = '15rem';
    }
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too High';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;

    //       document.querySelector('body').style.backgroundColor = '#FF0000';

    //       document.querySelector('.number').style.width = '15rem';
    //     }
    //     // When guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too Low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;

    //       document.querySelector('body').style.backgroundColor = '#FF0000';

    //       document.querySelector('.number').style.width = '15rem';
    //     }
  }
});

// Handling the "again" Button Click
// Resets the game to its intial state when the user wants to play
// State Management (reset)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#123';

  document.querySelector('body').style.background =
    'linear-gradient(#123, #111)';

  document.querySelector('.number').style.width = '15rem';
});
