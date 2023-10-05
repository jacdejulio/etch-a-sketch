
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
let square = document.createElement("div");



grid(16)


function grid(numRows) {
    for (let column = 0; column < numRows; column++) {
        for (let row = 0; row < numRows; row++) {
            square = document.createElement("div");
            square.className = "square";

            container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;

            container.append(square);
        }
    }

}


