/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /* 
 * create new instance of the `Game` class 
 * add event listners for start button 
 * add event listeners for onscreen keyboard buttons */

 //temporarily making sure that each of the classes are working
// //step 2 making sure new classes work
//  const phrase = new Phrase();
//  const game = new Game();

//step 3 making sure constructor method works 
//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

//step 4 making sure createPhrases() works
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//step 5 making sure getRandomPhrase() works
// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase:  ${phrase.phrase}`);
// };
// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//Step 6 making sure addPhraseToDisplay() works
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// Step 7 making sure startGame() works
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Step 8 create event listener for "Start Game" button on page load
let game = new Game();
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', (e) =>{
    game.startGame();
});

//Step 9 when user clicks onscreen keyboard buttons:
//store what onscreenKey user pressed 
const onscreenKeyboard = document.querySelectorAll('.key');
for(let i = 0; i < onscreenKeyboard.length; i++){
    onscreenKeyboard[i].addEventListener('click', (e) =>{
        let onscreenKeyClicked = e.target;
        //test checkLetter
        // game.activePhrase.checkLetter(onscreenKeyClicked);
        //test showMatchedLetter
        // game.activePhrase.showMatchedLetter(onscreenKeyClicked);
        //test checkForWin()
        // game.checkForWin();
        //test handleInteraction
        game.handleInteraction(onscreenKeyClicked);
  
    });
};