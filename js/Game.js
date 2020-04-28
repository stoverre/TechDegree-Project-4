/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }

    /**
     * Creates phrases for use in the game
     * @return {array} An array of phrases to be used in the game
     */
    createPhrases(){
        const phrase0 = new Phrase('These are not the droids you are looking for')
        const phrase1 = new Phrase('I am your father')
        const phrase2 = new Phrase('Its a trap')
        const phrase3 = new Phrase('I have a bad feeling about this')
        const phrase4 = new Phrase('Do or Do Not')
        return [phrase0 , phrase1, phrase2, phrase3, phrase4]
    }

     /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        //remove all 'li' elements from previous game
        const ul = document.getElementById('phrase').firstElementChild
        const length = ul.children.length
        for(let i=0; i<length; i++){
            ul.removeChild(ul.lastElementChild)
        }
        //enable all onscreen keyboard buttons
        //indexed at 1 to not touch the reset button
        const buttons = document.getElementsByTagName('button')
        for(let i=1; i<26; i++){
            if(buttons[i].id !== 'btn__reset'){
                buttons[i].className = 'key'
                buttons[i].disabled = false
            }
        }
        //Reset lives
        const lives = document.getElementsByTagName('img')
        for(let i=0; i<5; i++){
            lives[i].setAttribute('src', 'images/liveHeart.png')
        }
        document.getElementById('overlay').style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random()*5)
        return this.phrases[randomIndex]
    }
    
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        return (document.getElementsByClassName('hide').length === 0)
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        document.getElementsByTagName('img')[this.missed].setAttribute('src', 'images/lostHeart.png')
        this.missed++
        if(this.missed === 5){
            this.gameOver(false)
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        let overlay = document.getElementById('overlay')
        overlay.style.display = ''
        if(!gameWon){
            overlay.className = 'lose'
            document.getElementById('game-over-message').innerHTML = 'You ran out of attempts and lost'
        }else{
            overlay.className = 'win'
            document.getElementById('game-over-message').innerHTML = 'You WIN!'
        }

    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button){
        const letter = button.innerHTML
        button.disabled = true
        if(this.activePhrase.checkLetter(letter)){
            button.className = 'chosen'
            this.activePhrase.showMatchedLetter(letter)
            if(this.checkForWin()){
                this.gameOver(true)
            }

        }else{
            button.className = 'wrong'
            this.removeLife()
        }
    }
 }
