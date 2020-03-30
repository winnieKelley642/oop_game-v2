/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /*
 *create a Phrase class
 * hanndles the creation of phrases*/

 //create a Phrase class
 class Phrase{
    constructor(phrase){
        //setting phrase to all lower case letters
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
   addPhraseToDisplay() {
       //display the number of letters in the activePhrase, each letters gets a box
       //store the phrase div
       const phraseDiv = document.querySelector('#phrase');
       const ul = phraseDiv.firstElementChild;
       console.log(ul);

       //create a loop to go through the number of leters in the activePhrase
       console.log(`active phrase has ${this.phrase.length} letters`);

       for(let i = 0; i < this.phrase.length; i++){
           console.log(`in for loop`);
           //create li elements
           const li = document.createElement('li');
           ul.appendChild(li);

           //if there is a space
           if(this.phrase.charAt(i) === ' '){
               li.setAttribute('class', `hide space`);
           } else{
               li.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);
           }
       };
   };

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
   checkLetter(letter) {
       //checks for letter selected by player
       for(let i = 0; i < this.phrase.length; i++){
           console.log(`phrase is ${this.phrase.charAt(i)}`);
           console.log(`letter is: ${letter.textContent}`);
           if(this.phrase.charAt(i) === letter.textContent){
               console.log('true');
               return(true);
           }else{
               console.log('false');
               return(false);
           }
       }
   };

   /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
   showMatchedLetter(letter) {
       //reveals letter(s) on the board that matches player selection
       //select all of the letter DOM elements that have a CSS class name that matches the selected letter 
       console.log(this.phrase);
       if(this.checkLetter(letter) === 'false'){
           console.log(`no match`);
       }

       if(this.checkLetter(letter) === 'true'){
           console.log(`match`);
       }
   };
}