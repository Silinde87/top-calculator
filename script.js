//Elements
let leftPad = document.getElementById('left-pad');
let rightPad = document.getElementById('right-pad');
let symbolLeftGrid = document.getElementById('symbol-left');
let numericGrid = document.getElementById('numeric');
let rightPadGrid = document.getElementById('right-pad');

//Key text arrays
const symbolLeftGridKeys = ['AC', '±', '%'];
const numericGridKeys = ['7','8','9','4','5','6','1','2','3','0','.'];
const rightPadGridKeys = ['÷', 'x', '-', '+', '='];

//Key css classes
const SYMBOL_LEFT_GRID_CLASS = 'symbol-left';
const NUMERIC_GRID_CLASS = 'numeric';
const RIGHT_PAD_GRID_CLASS = 'right-pad';

//this function fills the grid based on the parameters passed
function fillGrid(currentGrid, keys, classGrid, numKeys){
    for(let i=0; i<numKeys ; i++){
        let key = document.createElement('button');
        key.innerText = keys[i];
        key.classList = classGrid;
        if(key.innerText === '0') key.classList.add('double-size')
        currentGrid.appendChild(key);
    }
}

//Filling the keyPad grid
fillGrid(symbolLeftGrid, symbolLeftGridKeys, SYMBOL_LEFT_GRID_CLASS, 3);
fillGrid(numericGrid, numericGridKeys, NUMERIC_GRID_CLASS, 11);
fillGrid(rightPadGrid, rightPadGridKeys, RIGHT_PAD_GRID_CLASS, 5);

//Adding the keyPad grid to the pad.
leftPad.appendChild(symbolLeftGrid);
leftPad.appendChild(numericGrid);
rightPad.appendChild(rightPadGrid);
