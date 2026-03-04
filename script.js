const container = document.querySelector(".container");
const board = document.querySelector(".board");

const size = 16;
const cellCount = 16 * 16;

for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    board.appendChild(cell);
} 