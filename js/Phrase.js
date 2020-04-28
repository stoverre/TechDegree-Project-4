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

    // <ul>
    //     <li class="hide letter h">h</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter w">w</li>
    //     <li class="space"> </li>
    //     <li class="hide letter a">a</li>
    //     <li class="hide letter r">r</li>
    //     <li class="hide letter e">e</li>
    //     <li class="space"> </li>
    //     <li class="hide letter y">y</li>
    //     <li class="hide letter o">o</li>
    //     <li class="hide letter u">u</li>
    // </ul>
 }