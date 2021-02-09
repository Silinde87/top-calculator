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
        display.innerHTML = '';
        operator = '';
        buttonDot.disabled = false;
    }
    //Numeric buttons. Updates the display
    if(e.target.classList.contains(NUMERIC_GRID_CLASS)){
        
        //Cleaning the display if operator key is pressed
        if(isClicked && display.innerHTML != ''){
            isClicked = !isClicked;
            display.innerHTML = '';
        }
        
        display.innerHTML += e.target.innerHTML;
        //this controls the dot button is pressed once
        if(e.target.textContent.includes('.')){
            buttonDot.disabled = true;
        }
    }
    //Operators button.
    if(e.target.classList.contains(RIGHT_PAD_GRID_CLASS)){
        isClicked = !isClicked;
        if(isClicked){
            cleanBorders();
            e.target.style.border = '1px solid black';
            num = display.innerHTML;
            operator = e.target.innerHTML;
            result = operate(operator, result, num)
            display.innerHTML = result;
        }
        if(e.target.innerHTML == '='){
            cleanBorders();
        }
        console.log(result);
    }
}));

//This function resets the border of the operators
function cleanBorders(){
    let rightPads = [...document.getElementsByClassName('right-pad')];
    rightPads.forEach(btn => btn.style.border = 'none');
}
