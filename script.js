//Create a function that creates a grid using square divs
const container = document.getElementById('container');
const inputBtn = document.getElementById('canvas-btn');
const clearBtn = document.getElementById('clear-btn');
const magicBtn = document.getElementById('magic-btn');
const shadeBtn = document.getElementById('shade-btn');
let gridSize;
let gridStyle = 1;

gridMaker();

function gridMaker(gridSize = 16, color = "#000000") {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
    
            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = color;
            });
        }
    }
}

function magicGridMaker(gridSize = 16) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    gridStyle = 2;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
    
            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = getRandomColor();
            });
        }
    }
} 

function shadedGridMaker (gridSize = 16, color = "#000000") {
    container.style.gridTemplateColumns = `repeat(${gridSize}), 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}), 1fr`;

    gridStyle = 3;

    let numDivs = gridSize * gridSize;

    for (let j = 0; j < numDivs; j++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.insertAdjacentElement("beforeend", div);

        let opacity = 0;

        div.addEventListener('mouseover', function() {
            if (opacity < 1) {
                opacity += 0.1;
                div.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
              }
        });
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
    if (gridStyle === 1) {
        gridMaker(gridSize);
    } else if (gridStyle === 2) {
        magicGridMaker(gridSize);
    } else {
        shadedGridMaker(gridSize);
    }
});

magicBtn.addEventListener('click', function () {
    clearGrid();
    magicGridMaker(gridSize);
});

shadeBtn.addEventListener('click', function () {
    clearGrid();
    shadedGridMaker(gridSize);
})