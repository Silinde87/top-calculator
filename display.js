let buttonList = [...document.querySelectorAll('button')];
let display = document.getElementById('display');
let buttonDot = document.getElementById('dot');
let isClicked = false;
let result = '0';
let num = '';
let operator = '';
//this adds click functionality to the buttons
//Also selects its behavior based on the button pressed
buttonList.forEach(button => button.addEventListener('click', (e) =>{
    //Clear button. Removes value from all variables
    if(e.target.innerHTML == 'AC'){
        leaveDefault();
    }
    //Numeric buttons. Updates the display
    if(e.target.classList.contains(NUMERIC_GRID_CLASS)){        
        //Cleaning the display if operator key is pressed
        if(isClicked){
            display.innerHTML = '0';
        }
        cleanBorders();
        display.innerHTML += e.target.innerHTML;
        //this controls the dot button is pressed once
        if(e.target.textContent.includes('.')){
            buttonDot.disabled = true;
        }
    }
    //Operators button.
    if(e.target.classList.contains(RIGHT_PAD_GRID_CLASS)){
        cleanBorders();
        putBorders(e);
        //debugger
        num = display.innerHTML;
        if(operator == '' || operator == '='){
            operator = e.target.innerHTML;
            result = display.innerHTML;
        }else{
            result = operate(operator, result, num)
            operator = e.target.innerHTML;
            showDisplay(result);
        }
    }
}));

//This function resets the border of the operators
function cleanBorders(){
    let rightPads = [...document.getElementsByClassName('right-pad')];
    rightPads.forEach(btn => btn.style.border = 'none');
    isClicked = false;
}

//This function put a border at the selected button
function putBorders(elem){
    elem.target.style.border = '1px solid black';
    isClicked = true;
}

//this function update display value
function showDisplay(val){
    display.innerHTML = val;
}

function leaveDefault(){
    display.innerHTML = '0';
    result = '0';
    operator = '';
    isClicked = false;
    buttonDot.disabled = false;
}