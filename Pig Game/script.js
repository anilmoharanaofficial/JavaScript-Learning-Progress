'use strict';
// Selecting HTML Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/*
// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlyer = 0;
let playing = true;
*/

let score, currentScore, activePlyer, playing;

// Starting Conditions
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlyer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// Calling The Starting Conditions
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlyer}`).textContent = 0;
  currentScore = 0;
  activePlyer = activePlyer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Funcationality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `assets/dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlyer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

// Holding Button Funcationality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    score[activePlyer] += currentScore;
    document.getElementById(`score--${activePlyer}`).textContent =
      score[activePlyer];
    // Check, if player's score is >=0
    if (score[activePlyer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Reseting Funcationality
btnNew.addEventListener('click', init);

// Sound Effect For Check Button
function checkButtonClickSound() {
  const audio = new Audio('./assets/Sounds/dice-roll-sound.mp3');
  audio.play();
}
const checkMouse = document.querySelector('.diceRollSound');
diceRollSound.addEventListener('click', checkButtonClickSound);
// Sound Effects For Hold Button
function holdButtonClickSound() {
  const audio = new Audio('./assets/Sounds/hold-btn-sound.mp3');
  audio.play();
}
const HoldBtn = document.querySelector('.holdBtnSound');
holdBtnSound.addEventListener('click', holdButtonClickSound);
