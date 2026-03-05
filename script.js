const container = document.querySelector(".container");
const board = document.querySelector(".board");
const gridSizeBtn = document.querySelector("#grid-size-btn");

let size = 16;
const boardSize = 500;
const cellSize = boardSize / size;

setCells(size);

function setCells(size) {
    const cellCount = size * size;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.index = i;
        board.appendChild(cell);
    }
}

function paint(cell) {
    cell.style.backgroundColor = "#111";
}

board.addEventListener("click", (e) => {
    if (!e.target.classList.contains("cell")) return;
    paint(e.target);
    e.preventDefault();
});

board.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("cell")) return;
    paint(e.target);
    e.preventDefault();
})

gridSizeBtn.addEventListener("click", (e) => {
    console.log("Enter btn");
    size = prompt("Enter grid size 10-100");
    setCells(size);
});