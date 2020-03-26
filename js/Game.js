/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* 
 * Create Game class methods for start and end games
 * handling interactions
 * getting a random phrase
 * checking for win
 * removing a life from the scoreboard*/

 //create a 
class Game{
    constructor(){
        //track number of missed guessess
        this.missed = 0;
        //array of phrase objects
        this.phrases = this.createPhrases();
        //current phrase object that is being used
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game */
    createPhrases() {
        return [
            `zombies`,
            `vampires`,
            `wearwolves`,
            `demon`,
            `count dracula`
        ];
    };

}