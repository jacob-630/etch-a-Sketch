//have set width ex. 100 px
//use divs for each square ()
//take input from text box, must be number (perhaps a drop down list) = x
// divde 100 px by x
// create x squares on both axis in a grid pattern (Perhaps nesting for loops)
//use mouse click to change background colour of each box (how to make it so that every smaller square doesnt just change color at same time)
// have a clear button just to reset every square to white


//(600/innerSquareWidth)^2 = total number of squares 


let gridSize;
let innerSquareWidth;
// const outerSquare = document.getElementById('outerSquare');
// const innerSquares = document.createElement('div');
//  innerSquares.innerHTML = "working";
//  outerSquare.appendChild(innerSquares);




// for(let i = 0; i < 16; i++){
//     for(let j = 0; j < 16; j++){
//         let innerSquares = document.createElement('div');
//         innerSquares.innerHTML = `<div class="innerSquares"></div>`;
//         outerSquare.appendChild(innerSquares);
//     }
// }

document.getElementById('submit').onclick = () => {
    gridSize = document.getElementById('gridSize').value;
    if(gridSize > 60 || gridSize < 1){
        window.alert('Please input a number between 1 and 60.')
        gridSize = 30;
        return;
    }
    console.log(gridSize);
    innerSquareWidth = 600/gridSize;
    console.log(`each square will be ${innerSquareWidth} pixels wide`);
    console.log(Math.pow((600/innerSquareWidth), 2));

    for(let i=0; i < Math.pow((600/innerSquareWidth), 2); i++){
        let innerSquares = document.createElement('div');
        innerSquares.innerHTML = `<div class="innerSquares">woking</div>`;
        outerSquare.appendChild(innerSquares);
    }
}



