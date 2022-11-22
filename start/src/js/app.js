// Write your code here
import {gameOver, gameWon, addFile, addTile} from './tiles';
import {getWord, isInDictionary} from './words';

const word = getWord();
console.log(word);

let totalChances = 6;

let inputElement = document.getElementById("userInput")

inputElement.addEventListener("keyup", (event) => {
    let keyPressed = event.key;
    let guess = event.target.value;
    if(keyPressed==="Enter" && guess.length===5 && totalChances>0){
        if(guess===word){
            gameWon(guess)
        }
        if(isInDictionary(guess)){
                for(let i=0; 1<guess.length; i++){
                    if(guess[i]===word[i])
                        addTile(guess[i], "green")
                    else if (word.includes(guess[1]))
                        addTile(guess[i], "orange")
                    else
                        addTile(guess[i], "grey")
                }
                totalChances--;
        }
        event.target.value = ""
    }
    if(totalChances===0){
        gameOver()
        return;
    }
})