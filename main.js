
'use strict';

const letters = "abcdefghijklmnopqrstuvwxyz";

//  get array  
let lettersArray  = Array.from(letters);

//  select letter continer
let letterContainer = document.querySelector('.letters');

//  generate letters 
lettersArray.forEach( letter => {
    // create span 
    let span = document.createElement("span");

    //  create letter text node 
    let theLetter = document.createTextNode(letter);

    //  append the letter to span 
    span.appendChild(theLetter);

    // add classlis on span 
    span.classList = 'letter-box';
    
    // append span to the letters container 
    letterContainer.appendChild(span);
});

//   obkect of words + categories

const words = {
    projraming: ["php" , "javascript" , "go" , "scala" , "fortran" , "r" , "mysql" , "python"],
    movies: ["prestige" , "Inception" , "Interstellar" , "Whiplash" , "Memento" , "Coco" ,"Up"] ,
    people: ["Albert Einstien" , "Hitchcock" , "Alexander" , "Cleopatra" , "Mahatma Ghandi"] ,
    countries: ["Syria" , "Palestine" , "Yemen" , "Egypt" , "Bahrain" , "Qatar"] ,
}
//  get random property 

let allKeyes = Object.keys(words);     /// =>  ["projraming" ,"movies" , "people" , "countries"]
console.log(allKeyes);

//  random number
let randomPropNumber = Math.floor(Math.random() * allKeyes.length);   ///   =>  0 ,1 , 2 , 3

let randomPropName = allKeyes[randomPropNumber];   ////    projraming or  movies or people or  countries

let randomPropValue = words[randomPropName];  

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValeValue = randomPropValue[randomValueNumber];
console.log(randomValeValue);

//  set category info 
document.querySelector(".game-info .category span").innerHTML = randomPropName ;

//  select letters guess Element 

// select letter guess container
let lettersGuessContainer = document.querySelector('.letter-guess');

//  convert choosen word to array 
let lettersAndSpace = Array.from(randomValeValue);

//   create span debend on words 
lettersAndSpace.forEach( letter => {

    //  create empty span
    let emptySpan = document.createElement("span");

    //  if letter os space 
    if(letter  === ' '){
        // Add class to span 
        emptySpan.className= 'with-space';
    }
    //  append the span to the guess container
    lettersGuessContainer.appendChild(emptySpan);
} );


// select guess span 
let guessSpans = document.querySelectorAll('.letter-guess  span');

// set wrong attempts 
let wrongAttemtps =  0;

// selet the draw element 
let theDraw = document.querySelector('.hangmang-draw');

//    Handle Clicking On Letters 
document.addEventListener('click' , (e) => {

    //   set the choose status 
    let theStatus = false;

    if(e.target.className === 'letter-box' ){
        e.target.classList.add("clicked");
        
        // get letter user clicked 
        let theClickLetter = e.target.innerHTML.toLowerCase();

        //the choosen word 
        let thechosenWorld = Array.from(randomValeValue.toLowerCase());

        thechosenWorld.forEach( (worLetter  , wordIndex) => {
            //  if the  clicked letter is equal to one of the chosen world letter 
            if(theClickLetter == worLetter ){
                //  set status to correct
                theStatus =true;

                //  loop on all guess spans 
                guessSpans.forEach((span ,spanIndex ) => {
                    if(wordIndex === spanIndex){
                        span.innerHTML = theClickLetter;

                    }
                });
            } 
        });

        //   outside the loop
        // if letter is wrong 
        if(theStatus !== true){

            // increase the wrong attempts 
            wrongAttemtps++;

            // add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttemtps}`);

            // play   faild sound
            // document.getElementById("fail").play();

            if(wrongAttemtps === 8 ){
                endGame();
                letterContainer.classList.add('finished');
            }

        }  else {
            // play   faild sound
            // document.getElementById("success").play();
        }
    }
});

//  endGame function 

function endGame(){
    // create popups
    let div = document.createElement("div");
    
    //crate tex t
    let divText = document.createTextNode(` Game over , the word is ${randomValeValue}  `);
    
    //  append text to div 
    div.appendChild(divText);

    // add class to div 
    div.classList.add('popup');

    // append to the body 
    document.body.appendChild(div);

}




