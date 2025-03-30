const grid = document.querySelector(".grid");

function getSquareNum (squareNum) {
    //clear grid
    grid.textContent = "";

    //calc square size based on container
    const containerSize = 750;
    const squareSize = containerSize / squareNum;

    //create squares
    let product = squareNum * squareNum;
    for(let i = 0; i < product; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.className = "square";
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        grid.appendChild(squareDiv);
    }
    return product;
}

getSquareNum(16);

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
    });
});

const resizeBtn = document.querySelector(".resize-btn");
resizeBtn.addEventListener("click", () => {
    let userChoice = prompt("Pick a size. Max: 100");
    getSquareNum(userChoice);
    return userChoice;
})