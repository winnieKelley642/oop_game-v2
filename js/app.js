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
const startGameButton = document.querySelector('#btn__reset');

startGameButton.addEventListener('click', (e) =>{
    let game = new Game();
    game.startGame();
    //Step 9 when user clicks onscreen keyboard buttons:
    //store what onscreenKey user pressed 
    const onscreenKeyboard = document.querySelectorAll('.key');
    console.log(onscreenKeyboard);
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

    //keyboard eventListener
    window.addEventListener('keyup', userInput);
    function userInput(e){
        //get .code, which will display the value of the key @sradms0 provided me with a very helpful article
        const userKeyboardInputCode = e.code.toLowerCase();
        // console.log(`user keyboard typed: ${userKeyboardInputCode}`);
        //get only the first three letters, so that I can check to make sure it is a 'key'
        const firstThreeLetters = userKeyboardInputCode.slice(0,3);
        // console.log(`last letter in code is: ${firstThreeLetters}`);

        if(firstThreeLetters === 'key'){
            const userKeyboardInput = userKeyboardInputCode[3];
            console.log(userKeyboardInput);
            const keyRow = document.querySelectorAll('.keyrow');
            // console.log(`keyRow length: ${keyRow.length}`);
            for(let i = 0; i < keyRow.length; i++){
                for(let j = 0; j < keyRow[i].children.length; j++){
                    let passThisButton = keyRow[i].children[j];
                    // console.log(passThisButton.textContent);
                    //creating an array to make sure only react if a letter is clicked
                    const validKeyboardButtons = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
                    for(let x = 0; x <= validKeyboardButtons.length; x++){
                        if(userKeyboardInput === passThisButton.textContent && userKeyboardInput === validKeyboardButtons[x]){
                            // console.log(`match keyboard to onscreen keyboard`);
                            game.handleInteraction(passThisButton);
                        }
                    }
            }}
        }

    }
});

//add keyup 
// const overlayDiv = document.querySelector('#overlay');
// console.log (overlayDiv);
// if(overlayDiv.className === ('start startKeyup')){
//     console.log(`in keyup function`)
//     window.addEventListener('keyup', (e)=>{
//         let keyPressed = (e.target) 
//         console.log(`key pressed: ${keyPressed}`);
//         game.handleInteraction(keyPressed);
//     });
// }

// window.addEventListener('keyup', (e)=>{
//     console.log(`button clicked: ${e.target}`);
//     let keyPressed = (e.target).code;
//     console.log(`key pressed: ${keyPressed}`);
//     game.handleInteraction(keyPressed);
// })

