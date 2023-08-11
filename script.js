const body = document.querySelector('body');


function ask() {
    let size = window.prompt("How many pixels wide do you want your sketch to be?");

    if (size > 100) {
        while (true) {
            size = window.prompt("How many pixels wide do you want your sketch to be?");
            if (size <= 100) {
                break;
            }
        }
    }
    

    const x = document.querySelector('.container');
    x.remove()

    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);

    const containerwidth = 800;
    const squaresize = containerwidth / size;

    for (let i = 0; i < size * size; i++) {
        const newdiv = document.createElement('div');
        newdiv.classList.add('square');
        newdiv.style.width = squaresize + 'px';
        newdiv.style.height = squaresize + 'px';
        container.appendChild(newdiv);

        newdiv.addEventListener('mouseover', () => {
            newdiv.style.backgroundColor = 'black';
        })
        }
}

function erase() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
}

