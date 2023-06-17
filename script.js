//Create a function that creates a grid using square divs
const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}