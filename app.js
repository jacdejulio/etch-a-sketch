
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;
let square = document.createElement("div");
const btnReset = document.querySelector(".reset");
const btnErase = document.querySelector(".erase");
const btnRainbow = document.querySelector(".rainbow")
const userInput = document.getElementById("userInput");// Get a reference to the number input element
let currentValue = userInput.value;

const body = document.querySelector("body")


body.addEventListener("load", createGrid(16))

// Add an "input" event listener to the input element
userInput.addEventListener("input", function () {
    currentValue = userInput.value;
    // Retrieve the current value of the input field
    createGrid(currentValue);
});


//Creates a grid based on a number provided by the user
function createGrid(currentValue) {
    // Clear any existing squares
    container.innerHTML = '';

    for (let column = 0; column < currentValue; column++) {
        for (let row = 0; row < currentValue; row++) {
            const square = document.createElement("div");
            square.className = "square";

            container.append(square);
        }
    }

    // Update the grid template columns and rows based on the currentValue
    container.style.gridTemplateColumns = `repeat(${currentValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentValue}, 1fr)`;

    colorCells()
}


//Variable to store the grid cells in an array

function colorCells() {
    const allSquares = document.querySelectorAll(".square");
    //Function to color cells when hovered on
    for (let i = 0; i < allSquares.length; i++) {
        let perSquare = allSquares[i]; // Access each square individually
        perSquare.addEventListener("mouseover", () => {
            perSquare.style.backgroundColor = "#66666e"; // Set the background color of the clicked square
        });

    }

    //Reset button function
    btnReset.addEventListener("click", reset = () => {
        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i]; // Access each square individually
            perSquare.style.backgroundColor = "#d9d9d9"; // Set the background color of the clicked square
        }
    })

    btnRainbow.addEventListener("click", () => {
        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i]; // Access each square individually
            perSquare.addEventListener("mouseover", () => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                perSquare.style.backgroundColor = `rgb(${r},${g},${b})`; // Set the background color of the clicked square
            });

        }
    })


    btnErase.addEventListener("click", () => {
        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i]; // Access each square individually
            perSquare.addEventListener("mouseover", () => {
                perSquare.style.backgroundColor = "#d9d9d9"; // Set the background color of the clicked square
            });

        };

    })


    const picker = document.getElementById("penColor")

    picker.addEventListener("input", () => {
        let currColor = picker.value;
        console.log(currColor)

        for (let i = 0; i < allSquares.length; i++) {
            let perSquare = allSquares[i]; // Access each square individually
            perSquare.addEventListener("mouseover", () => {
                perSquare.style.backgroundColor = currColor; // Set the background color of the clicked square
            });

        }
    })

}












