/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay(){
        let phraseDiv = document.getElementById('phrase')
        let list = phraseDiv.firstElementChild
        for(let i=0; i<this.phrase.length; i++){
            if(this.phrase[i] === ' '){
                let space = document.createElement('li')
                space.className = 'space'
                list.appendChild(space)
            }else{
                let letter = document.createElement('li')
                letter.className = `hide letter ${this.phrase[i]}`
                letter.innerHTML = this.phrase[i]
                list.appendChild(letter)
            }
        }
        //return list
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        for(let i=0; i<this.phrase.length; i++){
            if(letter === this.phrase[i]){
                return true
            }
        }
        return false
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const showLetters = document.getElementsByClassName(`hide letter ${letter}`)
        const length = showLetters.length
        for (let i=0; i<length; i++){
            showLetters[0].className = `show letter ${letter}`
        }
    }
 }