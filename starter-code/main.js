// Create the playing board
var board = document.getElementById('game-board');

	
// Create the cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
	}
};

/* 
When a card is clicked show the image and then check to 
see if two cards have been selected
*/
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="Seuss_King.jpeg" class = "myImgClass" alt="King" />';	
} else {
	this.innerHTML = '<img src="Seuss_Queen.png" class = "myImgClass" alt="Queen" />';
}
	
	if (cardsInPlay.length === 2) {
		setTimeout(function() {
			isMatch(cardsInPlay);
		}, 300);
}
};

/* 
Check to see if the cards match. 
If they don't, alert no match and reset the 
cards back. Otherwise alert a match
*/
var isMatch = function() {
if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert('Sorry, try again.');
	resetGame();
} else {
	alert('You found a match!')
};
cardsInPlay = [];

}

createBoard();

// Function to reset the game ie.: flip cards back
var resetGame = function() {
	cardsInPlay = [];
	var tryIt = document.getElementsByClassName('card');
	for (var x = 0; 0 <tryIt.length; x++) {
	tryIt[x].innerHTML = "";
	}
};

// Create a reset button
var button = document.getElementById('btn');

// Allow for button to reset game once clicked
button.addEventListener('click', resetGame);

// Function to show information about game creator
var alertUser = function () {
    alert("Hey my name is Jaime and I'm the creator of this awesome game! I'm currently studying to become a Web Developer at GA. Looking forward to creating some even more awesome content!");
}

// When link is clicked run alertUser function to show info about creator
var link = document.getElementById('aboutMe');

link.addEventListener('click', alertUser);










