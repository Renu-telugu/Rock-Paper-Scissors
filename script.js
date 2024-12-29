/*
    0 - 1/3 rock
    1/3 - 2/3 paper
    2/3 - 1 scissors
*/

//to enable the browser remember the score even if we refresh the page
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if(computerMove === playerMove){
      result = 'tie';
  } else if(playerMove === 'rock' && computerMove==='paper'){
      result = 'You lose';
  } else if(playerMove === 'scissors' && computerMove==='rock'){
      result = 'You lose';
  } else if(playerMove === 'paper' && computerMove==='scissors'){
      result = 'You lose';
  } else {
      result = 'You won';
  }

  if(result === 'You won'){
      score.wins++;
  } else if(result === 'You lose'){
      score.losses++;
  } else{
      score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}