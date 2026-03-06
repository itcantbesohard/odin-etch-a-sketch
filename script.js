let size = 50;
let painted = 0;
let mode = "color";

const container = document.querySelector(".container");
const board = document.querySelector(".board");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const gridClearBtn = document.querySelector("#grid-clear-btn");

createGrid(size);

function createGrid(size) {
    const cellCount = size * size;
    const cellSize = 100 / size;

    //clear board
    board.replaceChildren();

    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.index = i;
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        board.appendChild(cell);
    }
}

function paint(cell) {

    switch (mode) {
        case "normal":
            cell.classList.add("painted");
            break;
        case "color":
            cell.style.backgroundColor = randomHexColor();
            break;
        case "progressive":
            cell.classList.add("painted");
            cell.style.opacity = String(painted / 10);
            painted < 10 ? painted++ : painted = 1;
            break;
    }
}

function randomHexColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

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
    size = Number(prompt("Enter grid size between 10-100"));
    if (isNaN(size)) return;
    if (size < 10 || size > 100) return;
    createGrid(size);
});

gridClearBtn.addEventListener("click", (e) => {
    createGrid(size);
});