console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo !== cardFour || cardTwo !== cardThree) {
	alert('Sorry, try again.') 
} else {
	alert('You found a match!')
};

if (cardOne !== cardFour || cardOne !== cardThree) {
	alert('Sorry, try again.') 
} else {
	alert('You found a match!')
};
*/

var board = document.getElementById('game-board');
var createCards = function() {

for (var i = 0; i < 4; i++) {
	var cardList = document.createElement('div');
	cardList.className = 'card';
	board.appendChild(cardList);
}
};

createCards();




