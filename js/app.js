/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /* 
 * create new instance of the `Game` class 
 * add event listners for start button 
 * add event listeners for onscreen keyboard buttons */

 //temporarily making sure that each of the classes are working
 const phrase = new Phrase();
 const game = new Game();

//  const phrase = new Phrase('Life is like a box of chocolates');
//  console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase}`);
});