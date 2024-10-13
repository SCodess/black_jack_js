let player = {
  name: "Ammount:",
  chips: 160,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let massage = "";
let massageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let againEl = document.getElementById("again-el");
let playerEl = document.getElementById("player-el");
// user ammount
playerEl.textContent = player.name + " " + "$" + player.chips;
// start game
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}
function startGame() {
  if (isAlive === false && hasBlackJack === false) {
    isAlive = true;
    let firstCard = getRandomCard(); // random number function
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
  }
}
function renderGame() {
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    massage = "Do you want to draw a new card?";
    againEl.textContent = "You need total sum 21 to win";
  } else if (sum === 21) {
    massage = "Winner! You've got Blackjack!";
    againEl.textContent = "Play Again";
    hasBlackJack = true;
  } else {
    massage = "you're out of the game";
    againEl.textContent = "You have been cross over 21";
    isAlive = false;
  }
  massageEl.textContent = massage;
}
// new card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
