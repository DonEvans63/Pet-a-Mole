# Pet-a-Mol![Pet-a-Mole](https://github.com/DonEvans63/Pet-a-Mole/assets/125083394/ca3388e8-b541-476c-9f78-c4691f78758f)
e

TECHNOLOOGIES USED:
 HTML, Javascript, CSS and Bootstrap to create my project.

IINSTALLATION INSTRUCTIONS and APPROACH TAKEN:

I created the Html componants first and placed the block elements where I thought they should be position. Entered some temporary CSS styling so I could position the mole in the game. I then ccreated RandomSquare function using a forEach method to remove the mole image from the squares each time new random square was greated for the mole image. I also created a hit position in this function and set it equal to the Random square.

Then i used another forEach method to add an EventListener to activate on a mousedown event. This is so each time you successfully click on the mole it will increase your score by one.

Next I created function moveMole whick used a setInterval to determine how often the new mole would pop up.

 
I then created a countDown Timer function and set it equal to 30 seconds. Once you click on the play again button you will have 30 seconds to see how many Moles you can pet. Finally, I created that sets the countDown at one second intervals

CODE SNIPPETS:


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}
randomSquare()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result;
            hitPosition = null;
        }
    })
})


UNSOLVED PROBLEMS: 

Real problems still positioning element. I would hav liked to find a hand cursor image to use since the game is called pet a mole.
And it would have been great to see the moles turn around and exit eac hole. 
