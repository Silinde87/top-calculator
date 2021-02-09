let buttonList = [...document.querySelectorAll('button')];
let display = document.getElementById('display');
let buttonDot = document.getElementById('dot');
let value;

//this adds click functionality to the buttons
//Also selects its behavior based on the button pressed
buttonList.forEach(button => button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == 'AC'){
        display.innerHTML = '';
        buttonDot.disabled = false;
    }
    if(e.target.classList.contains(NUMERIC_GRID_CLASS)){
        display.innerHTML += e.target.innerHTML;
        if(e.target.textContent.includes('.')){
            buttonDot.disabled = true;
        }
    }
}));

