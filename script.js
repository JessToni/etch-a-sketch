//Create a function that creates a grid using square divs
const container = document.getElementById('container');
const inputBtn = document.getElementById('canvas-btn');
const clearBtn = document.getElementById('clear-btn');
const magicBtn = document.getElementById('magic-btn');
const shadeBtn = document.getElementById('shade-btn');

let gridSize;
colorChoice('black');
gridMaker();

function gridMaker(gridSize = 16, color = "#000000") {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let numDivs = gridSize * gridSize;

    for (let j = 0; j < numDivs; j++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', colorSquares);
        container.insertAdjacentElement("beforeend", div);
    }
}

function colorSquares() {
    if (color === 'black') {
        this.style.backgroundColor = 'black';
    } else {
        this.style.backgroundColor = `hsl(${Math.random * 360}), 100%, 50%`;
    }
}

function colorChoice(colorChoice) {
    color = colorChoice;
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function takeUserInput() {
    const userInput = prompt('Please enter the number of squares on each side (1-100):');

    if (userInput === null) {
        return;
    }

    gridSize = parseInt(userInput);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Your input is invalid.");
        return;
    }
}

inputBtn.addEventListener('click', function () {
    takeUserInput();
    clearGrid();
    gridMaker(gridSize);
});

clearBtn.addEventListener('click', function () {
    clearGrid();
    gridMaker(gridSize);
});

magicBtn.addEventListener('click', function () {
    colorChoice('magic');
});

shadeBtn.addEventListener('click', function () {
    colorChoice('black')
})