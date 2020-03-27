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
}  