// Generate Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('💩 No Number');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    playWinningSound();
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You Lost The Game!');
      document.querySelector('.score').textContent = score;
      playLoserSound();
    }
  }
});

// Game rest functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/// Sound Effect
// Sound Effect For Again Button
function AgainButtonClickSound() {
  const audio = new Audio('./assets/again-button.mp3');
  audio.play();
}
const mouse = document.querySelector('againSound');
againSound.addEventListener('click', AgainButtonClickSound);

// Sound Effect For Check Button
function checkButtonClickSound() {
  const audio = new Audio('./assets/check-button.mp3');
  audio.play();
}
const checkMouse = document.querySelector('checkBtnSound');
checkBtnSound.addEventListener('click', checkButtonClickSound);

// Sound Effect For Winner
function playWinningSound() {
  const audio = document.getElementById('winningSound');
  audio.play();
}
// Sound Effect For Loser
function playLoserSound() {
  const loserSoundAudio = document.getElementById('loserSound');
  loserSoundAudio.play();
}

/*
// Old Code
----------------------------------------
// Generate Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '💩 No Number';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost The Game!';
      document.querySelector('.score').textContent = score;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You Lost The Game!';
  //     document.querySelector('.score').textContent = score;
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 Too low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
});

// Game rest functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

*/
