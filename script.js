//Create a function that creates a grid using square divs
const container = document.getElementById('container');
const inputBtn = document.getElementById('canvas-btn');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);

        div.addEventListener('mouseleave', function() {
            div.classList.add('hovered');
        });
    }
}

inputBtn.addEventListener('click', function () {
    const gridSize = parseInt(prompt('Please enter the number of squares on each side (1-100):'));
    /*if (typeof gridSize !== number) {

    }*/
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
                div.classList.add('hovered');
            });
        }
    }
});