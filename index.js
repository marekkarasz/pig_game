"use strict";
// player 1
const score_0 = document.getElementById("score--0");
const current_0 = document.getElementById("current--0");
const player_1 = document.querySelector(".player--0");

// player 2
const score_1 = document.getElementById("score--1");
const current_1 = document.getElementById("current--1");
const player_2 = document.querySelector(".player--1");

// buttons
const dice_El = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const holdScore = document.querySelector(".btn--hold");

// Starting Conditions:
score_0.textContent = 0;
score_1.textContent = 0;
dice_El.classList.add("hidden");

const finalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player_1.classList.toggle("player--active");
  player_2.classList.toggle("player--active");
};

// Rolling dice functionality:
rollDice.addEventListener("click", function () {
  // 1.Generatin a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.Display dice
  dice_El.classList.remove("hidden");
  dice_El.src = `assets/dice-${dice}.png`;

  // 3.Check for rolled: if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to the next player
    switchPlayer();
  }
});

//  hold score:
holdScore.addEventListener("click", function () {
  //  add current score to active player score
  finalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScore[activePlayer];

  // check if score is at least 100
  // switch to next player
  switchPlayer();
});
