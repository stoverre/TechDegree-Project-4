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
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random()*5)
        return this.phrases[randomIndex]
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    };
 }
