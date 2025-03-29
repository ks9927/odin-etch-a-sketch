const grid = document.querySelector(".grid");

function getSquareNum (squareNum) {
    //clear grid
    grid.textContent = "";

    //calc square size based on container
    const containerSize = 700;
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

getSquareNum(4);