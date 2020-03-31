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
        let phrases = [
            new Phrase(`zombies`),
            new Phrase(`vampires`),
            new Phrase(`wearwolves`),
            new Phrase(`demon`),
            new Phrase(`count dracula`)
        ]
        return phrases;
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase(){
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
        const randomPhrase =  this.getRandomPhrase()
        randomPhrase.addPhraseToDisplay()
        this.activePhrase =  randomPhrase;
    };
}