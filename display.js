let buttonList = [...document.querySelectorAll('button')];
let display = document.getElementById('display');
let buttonDot = document.getElementById('dot');
let numericButtonsList = [...document.getElementsByClassName('numeric')];
let isClicked = false;
let result = '0';
let num = '';
let operator = '';

//This adds click functionality to the buttons
//also selects its behavior based on the button pressed
buttonList.forEach(button => button.addEventListener('click', (e) =>{
    //FUNCTION BUTTONS CONTROL
    switch(e.target.innerHTML){
        case 'AC':
            leaveDefault();
            break;
        case '±':
            changeSign();
            break;
        case '%':
            calcPercent();
            break;
    }

    //NUMERIC BUTTONS CONTROL
    if(e.target.classList.contains(NUMERIC_GRID_CLASS)){
        //Cleaning the display if operator key is pressed
        if(isClicked){
            display.innerHTML = '0';
        }
        //Max num control
        if(display.innerHTML.length >= 8){
            disableNumericButtons();
        }
        //Controlling if users inputs a 0 or a dot and updates the display
        if(e.target.innerHTML == '0' && display.innerHTML != '0'){
            display.innerHTML += e.target.innerHTML;
        }else if(e.target.innerHTML == '0'){
            display.innerHTML = '0';
        }else if(e.target.innerHTML == '.'){
            if(display.innerHTML == '0'){
                display.innerHTML = '0.';
            }else{
                display.innerHTML += '.';
            }
        }else if(display.innerHTML == '0'){
            display.innerHTML = '';
            display.innerHTML += e.target.innerHTML;
        }else{
            display.innerHTML += e.target.innerHTML;
        }
        
        cleanBorders();
        
        //this controls the dot button is pressed once
        if(e.target.textContent.includes('.')){
            buttonDot.disabled = true;
        }
    }

    //OPERATORS BUTTONS CONTROL
    if(e.target.classList.contains(RIGHT_PAD_GRID_CLASS)){
        cleanBorders();
        putBorders(e);        
        num = display.innerHTML;
        if(operator == '' || operator == '='){
            operator = e.target.innerHTML;
            result = display.innerHTML;
        }else{
            result = operate(operator, result, num)
            operator = e.target.innerHTML;
            showDisplay(result);
        }
        if(operator == '=') cleanBorders();
        buttonDot.disabled = false;
              
        enableNumericButons();
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

//This function update display value
function showDisplay(val){
    display.innerHTML = val;
}
//This function cleans the calc and leave all variables to default.
function leaveDefault(){
    display.innerHTML = '0';
    result = '0';
    operator = '';
    isClicked = false;
    buttonDot.disabled = false;
    enableNumericButons();
    cleanBorders();
}
//This function change the sign of the displayed number
function changeSign(){
    display.innerHTML = String(operate(MULTIPLY_OPERATOR,display.innerHTML,'-1'));
}
//This function calculates de percent of the displayed number.
function calcPercent(){
    display.innerHTML = String(operate(MULTIPLY_OPERATOR,display.innerHTML,'0.01'));    
}
//This function enables the ability of numeric buttons to be pressed
function enableNumericButons(){
    numericButtonsList.forEach(btn => btn.disabled = false);
}
//This function disables the ability of numeric buttons to be pressed
function disableNumericButtons(){
    numericButtonsList.forEach(btn => btn.disabled = true);
}