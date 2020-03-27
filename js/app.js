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
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);