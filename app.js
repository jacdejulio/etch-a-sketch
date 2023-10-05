
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
let square = document.createElement("div");
const btnReset = document.querySelector(".reset")
const btnUndo = document.querySelector(".undo")



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


const allSquares = document.querySelectorAll(".square");

for (let i = 0; i < allSquares.length; i++) {
    let perSquare = allSquares[i]; // Access each square individually
    perSquare.addEventListener("mouseover", () => {
        perSquare.style.backgroundColor = "#66666e"; // Set the background color of the clicked square
    });

}


function undo() {
    for (let i = 0; i < allSquares.length; i++) {
        let perSquare = allSquares[i]; // Access each square individually

        if (perSquare.style.backgroundColor !== "#d9d9d9") {
            perSquare.addEventListener("click", () => {
                perSquare.style.backgroundColor = "#d9d9d9"; // Set the background color of the clicked square
            });
        }


    }
}


btnReset.addEventListener("click", reset = () => {
    for (let i = 0; i < allSquares.length; i++) {
        let perSquare = allSquares[i]; // Access each square individually
        perSquare.style.backgroundColor = "#d9d9d9"; // Set the background color of the clicked square
    }
})



