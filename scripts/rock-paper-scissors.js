let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  result = 
          playerMove === "rock" ?
           
            computerMove === "rock"  ? "Tie."
          : computerMove === "paper" ? "You lost."
          :                            "You won."
        
        : playerMove === "paper" ?
           
            computerMove === "rock"  ? "You won."
          : computerMove === "paper" ? "Tie."
          :                            "You lost."
        
        :
           
            computerMove === "rock"  ? "You lost."
          : computerMove === "paper" ? "You won."
          :                            "Tie.";
        
          result === "You won."  ? score.wins++
        : result === "You lost." ? score.losses++
        :                          score.ties++

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  updateResultElement(result);

  updateMovesElement(playerMove, computerMove);
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}.`;
}

function updateResultElement(result) {
  document.querySelector('.js-result')
    .innerHTML = result;
}

function updateMovesElement(playerMove, computerMove) {
  
  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  return computerMove = 
          randomNumber >= 0     && randomNumber < 1 / 3 ? "rock"
        : randomNumber >= 1 / 3 && randomNumber < 2 / 3 ? "paper"
        :                                                 "scissors";
}
