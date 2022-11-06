//have set width ex. 100 px
//use divs for each square ()
//take input from text box, must be number (perhaps a drop down list) = x
// divde 100 px by x
// create x squares on both axis in a grid pattern (Perhaps nesting for loops)
//use mouse click to change background colour of each box (how to make it so that every smaller square doesnt just change color at same time)
// have a clear button just to reset every square to white


let gridSize;
let numberOfSquares;
// const outerSquare = document.querySelector('#outerSquare');
// const innerSquares = document.querySelector('#innerSquares');

document.getElementById('submit').onclick = () => {
    gridSize = document.getElementById('gridSize').value;
    if(gridSize > 60 || gridSize < 1){
        window.alert('Please input a number between 1 and 60.')
        gridSize = 30;
    }
    console.log(gridSize);
    numberOfSquares = 600/gridSize;
    console.log(`each square will be ${numberOfSquares} pixels wide`);
}



