const container = document.querySelector(".container");
const board = document.querySelector(".board");
const gridSizeBtn = document.querySelector("#grid-size-btn");
let size = 10;

createGrid(size);

function createGrid(size) {
    const cellCount = size * size;
    const cellSize = 100 / size;

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
    const input = Number(prompt("Enter grid size between 10-100"));
    if (isNaN(input)) return;
    if (input < 10 || input > 100) return;
    createGrid(input);
});