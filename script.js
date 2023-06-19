//Create a function that creates a grid using square divs
const container = document.getElementById('container');
const inputBtn = document.getElementById('canvas-btn');
const clearBtn = document.getElementById('clear-btn')
const magicBtn = document.getElementById('magic-btn')
let gridSize;

gridMaker();

function gridMaker(gridSize = 16, color = "#000000") {

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
    
            div.addEventListener('mouseleave', function() {
                div.style.backgroundColor = color;
            });
        }
    }
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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
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
    clearGrid();
    gridMaker(gridSize, getRandomColor);
});