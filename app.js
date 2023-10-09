// DECLARING VARIABLES
// Grid
const body = document.querySelector("body");
const grid = document.querySelector(".container")
const gridSelector = document.querySelector("#userInput");
const defGridSize = parseInt(gridSelector.value);

// Color
const colorPicker = document.querySelector("#penColor");
const btnDraw = document.querySelector(".draw");
const btnRainbow = document.querySelector(".rainbow");
const btnReset = document.querySelector(".reset");
const btnErase = document.querySelector(".erase");

body.addEventListener("load", createGrid(defGridSize));


gridSelector.addEventListener("input", function () {
    let gridValue = parseInt(gridSelector.value);
    maxValue = parseInt(gridSelector.max)
    minValue = parseInt(gridSelector.min)

    if (gridValue > maxValue) {
        gridValue = maxValue;
    } else if (gridValue < minValue) {
        gridValue = minValue;
    }
    createGrid(gridValue);
});



function createGrid(currValue) {
    grid.innerHTML = ''
    for (let column = 0; column < currValue; column++) {
        for (let row = 0; row < currValue; row++) {
            const square = document.createElement("div");
            square.className = "square";

            grid.append(square);
        }
    }

    // Update the grid template columns and rows based on the currValue
    grid.style.gridTemplateColumns = `repeat(${currValue}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currValue}, 1fr)`;

    changeCellsColor();

}



function changeCellsColor() {
    let currState = "draw";
    let defPenColor = colorPicker.value;
    let defCellColor = "#d9d9d9";
    const allSquares = document.querySelectorAll(".square");


    for (let i = 0; i < allSquares.length; i++) {
        let perSquare = allSquares[i];

        perSquare.addEventListener("mouseover", () => {
            perSquare.style.backgroundColor = defPenColor;
        });

    }


    colorPicker.addEventListener("input", () => {
        let currColor = colorPicker.value
        changeCellsColor(currColor);
    })

    btnDraw.addEventListener("click", () => {
        let currColor = colorPicker.value
        changeCellsColor(currColor);
    })


    btnRainbow.addEventListener("click", () => {
        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i];
            perSquare.addEventListener("mouseover", () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                perSquare.style.backgroundColor = `rgb(${r},${g},${b})`;
            });

        }
    })

    btnErase.addEventListener("click", () => {
        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i];
            perSquare.addEventListener("mouseover", () => {
                perSquare.style.backgroundColor = defCellColor;
            });

        }
    })

    btnReset.addEventListener("click", reset = () => {
        allSquares.forEach(square => {
            square.style.backgroundColor = defCellColor;
        });
    });


}



