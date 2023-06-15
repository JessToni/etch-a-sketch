//Create a function that creates a grid using square divs
makeGrid();

function makeGrid() {
    const container = document.getElementById("container");

    for (let i = 0; i < 16; i++) {
        let myRow = document.createElement("div");
        myRow.id = "square" + i; 

        container.appendChild(myRow);
    }
}