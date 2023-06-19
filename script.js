//Create a function that creates a grid using square divs
const container = document.getElementById('container');
const inputBtn = document.getElementById('canvas-btn');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);

        div.addEventListener('mouseleave', function() {
            div.style.backgroundColor = getRandomColor();
        });
    }
}

inputBtn.addEventListener('click', function () {
    let gridSize;

    const userInput = prompt('Please enter the number of squares on each side (1-100):');

    if (userInput === null) {
        return;
    }

    gridSize = parseInt(userInput);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Your input is invalid.");
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
    
            div.addEventListener('mouseleave', function() {
                div.style.backgroundColor = getRandomColor();
            });
        }
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}