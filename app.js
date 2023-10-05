
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
let square = document.createElement("div");



grid(32)


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


const allSquares = document.querySelectorAll(".square");

for (let i = 0; i < allSquares.length; i++) {
    let perSquare = allSquares[i]; // Access each square individually

    perSquare.addEventListener("click", () => {
        perSquare.style.backgroundColor = "black"; // Set the background color of the clicked square
    });
}