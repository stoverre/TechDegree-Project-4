/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
console.log(document.getElementById('btn_reset'))

document.addEventListener('click', event => {
    if(event.target.id === 'btn__reset'){
        game = new Game()
        game.startGame()
    }
    if(event.target.className === 'key'){
        game.handleInteraction(event.target)
    }
})