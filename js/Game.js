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
            {phrase: `zombies`},
            {phrase: `vampires`},
            {phrase: `wearwolves`},
            {phrase: `demon`},
            {phrase: `count dracula`}
        ];
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        console.log(this.phrases.length);
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        console.log(randomNumber);
        let randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        //hide #overlay div
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';
        
        //store selected phrase into 'activePhrase'
        //calls the getRandomPhrase method to select a Phrase object
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        //adds phrase to gameboard
        this.activePhrase = this.addPhraseToDisplay();
    };
}