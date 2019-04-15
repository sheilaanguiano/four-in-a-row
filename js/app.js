//This initialized a new game Object
const game = new Game();

/**
 * Listens for click on `#begin-game` and calls (callback function) startGame() on game object
 */

document.getElementById("begin-game").addEventListener('click', function(){
  game.startGame();

  /*
The following will hide the start button and show the game board
  */

  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});



/*
This is the interaction layer of the game: where DOM meets the objects. This files is used to initialize the Game objects and lsten for user-triggered events, like mouse clicks and key presses.
*/
