let buttonList = [...document.querySelectorAll('button')];
let display = document.getElementById('display');
let buttonDot = document.getElementById('dot');
let numericButtonsList = [...document.getElementsByClassName('numeric')];
let operationButtonsList = [...document.getElementsByClassName('right-pad')];
let operationDisplay = document.getElementById('operation');
let isClicked = false;
let result = '0';
let num = '';
let operator = '';
let operation = '';

//Click event listener
buttonList.forEach(button => button.addEventListener('click', (e) =>{
    controlButtons(e.target.innerHTML);    
}));

//This adds click functionality to the buttons
//also selects its behavior based on the button pressed
function controlButtons(btn) {
    //FUNCTION BUTTONS CONTROL
    if(symbolLeftGridKeys.includes(btn)){
        switch (btn) {
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
    }

    //NUMERIC BUTTONS CONTROL
    if (numericGridKeys.includes(btn)) {        
        //Cleaning the display if operator key is pressed
        if (isClicked) {            
            display.innerHTML = '0';
            enableButons(operationButtonsList);
        }
        //Max num control
        if (display.innerHTML.length >= 8) {
            disableButtons(numericButtonsList);
        }
        //Controlling if users inputs a 0 or a dot and updates the display
        if (btn == '0' && display.innerHTML != '0') {
            display.innerHTML += btn;
        } else if (btn == '0') {
            display.innerHTML = '0';
        } else if (btn == '.') {
            if (display.innerHTML == '0') {
                display.innerHTML = '0.';
            } else {
                display.innerHTML += '.';
            }
            //Call to cleaning the current operation display
        } else if (operator == '=') {
            cleanOpDisplay();
            cleanAndUpdateDisplay(btn);
            operator = '';
        } else if (display.innerHTML == '0' || operator == '=') {
            cleanAndUpdateDisplay(btn);
        } else {
            display.innerHTML += btn;
        }

        showOpDisplay(btn);
        cleanBorders();

        //this controls the dot button is pressed once
        if (display.innerHTML.includes('.')) {
            buttonDot.disabled = true;
        }
    }    

    //OPERATORS BUTTONS CONTROL
    if (rightPadGridKeys.includes(btn)) {
        cleanBorders();
        putBorders(btn);
        num = display.innerHTML;
        if (operator == '' || operator == '=') {
            operator = btn;
            result = display.innerHTML;
        } else {
            result = operate(operator, result, num);
            operator = btn;
            showDisplay(result);

        }
        //if(operator == '=') cleanOpDisplay();
        showOpDisplay(btn);

        if (operator == '=') cleanBorders();
        buttonDot.disabled = false;
        enableButons(numericButtonsList);
    }
}

//This function clean and updates the display
function cleanAndUpdateDisplay(valBtn) {
    display.innerHTML = '';
    display.innerHTML += valBtn;
}

//This function updates the current operation display
function showOpDisplay(valBtn) {
    operation += valBtn;
    operationDisplay.innerHTML = operation;
}

//This function cleans the current operation display
function cleanOpDisplay() {
    operationDisplay.innerHTML = '';
    operation = '';
}

//This function resets the border of the operators
function cleanBorders(){
    let rightPads = [...document.getElementsByClassName('right-pad')];
    rightPads.forEach(btn => btn.style.border = 'none');
    isClicked = false;
    enableButons(operationButtonsList);
}

//This function put a border at the selected button
function putBorders(valBtn){    
    let rightPads = [...document.getElementsByClassName('right-pad')];
    rightPads.forEach(btn => {
        if(btn.innerHTML == valBtn) btn.style.border = '1px solid black';
    });
    isClicked = true;
    disableButtons(operationButtonsList);
}

//This function update display value
function showDisplay(valBtn){
    display.innerHTML = valBtn;
}
//This function cleans the calc and leave all variables to default.
function leaveDefault(){
    display.innerHTML = '0';
    result = '0';
    operator = '';
    isClicked = false;
    buttonDot.disabled = false;
    enableButons(numericButtonsList);
    enableButons(operationButtonsList);
    cleanBorders();
    cleanOpDisplay();
}
//This function change the sign of the displayed number
function changeSign(){
    display.innerHTML = String(operate(MULTIPLY_OPERATOR,display.innerHTML,'-1'));
}
//This function calculates de percent of the displayed number.
function calcPercent(){
    display.innerHTML = String(operate(MULTIPLY_OPERATOR,display.innerHTML,'0.01'));    
}
//This function enables the ability of passed element buttons to be pressed
function enableButons(elem){
    elem.forEach(btn => btn.disabled = false);
}
//This function disables the ability of passed element buttons to be pressed
function disableButtons(elem){
    elem.forEach(btn => btn.disabled = true);
}