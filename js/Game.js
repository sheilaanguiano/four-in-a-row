class Game {
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
   }

    /**
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers(){
      const players = [new Player('Player 1', 1, '#e15258',  true),
                       new Player('Player 2', 2, '#e59a13')];

      return players;
    }

/**
 * Begins game
 */
    startGame(){
      this.board.drawHTMLBoard();
      this.activePlayer.activeToken.drawHTMLToken();
      this.ready = true;
    }

    /**
      * Return active player
      * @return  {Object}    Player - the active player
      */
    get activePlayer(){
      return this.players.find(player => player.active);
      }

    }



/*
Creator Methods
These are not formal JS method types. They are a way to routinely create several objects at once. Tucking its functionality into methods keeps your code organized and neat, and ensures that a called could use the method without having to know the details of how new objects are created.\

TN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters


*/
