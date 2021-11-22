'use strict';

let highScore = 0;

function startGame() {
  const randNum = Math.floor(Math.random() * 21);
  console.log(randNum);
  // document.querySelector('.message').innerHTML = 'Correct Number!';
  let score = 20;
  let finalScore = 0;

  document.querySelector('.check').addEventListener('click', function () {
    let guessedNum = document.querySelector('.guess').value;
    console.log(guessedNum);
    if (guessedNum == randNum) {
      document.querySelector('.message').innerHTML = 'Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').innerHTML = `${randNum}`;
      finalScore = score;
      if (finalScore > highScore) {
        highScore = finalScore;
        document.querySelector('.highscore').textContent = `${highScore}`;
      }
      console.log(finalScore);
    } else if (guessedNum > randNum) {
      document.querySelector('.message').innerHTML = 'Too High';
      score -= 1;
      document.querySelector('.score').textContent = `${score}`;
      console.log(score);
    } else {
      document.querySelector('.message').innerHTML = 'Too Low';
      score -= 1;
      document.querySelector('.score').textContent = `${score}`;
      console.log(score);
    }
    if (score == 0) {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').innerHTML = 'You lose! Try Again!';
      document.querySelector('.number').innerHTML = `${randNum}`;
    }
  });
}
startGame();

document.querySelector('.again').addEventListener('click', function () {
  startGame();

  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').innerHTML = '20';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
