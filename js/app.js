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
document.addEventListener('keyup', event => {
    //find the button that matches the key press and pass it into
    //handleInteraction
    const buttons = document.getElementsByTagName('button')
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].innerHTML === event.key && 
                        buttons[i].disabled === false &&
                        game.active === true)
        {
            game.handleInteraction(buttons[i])
        }
    }
})