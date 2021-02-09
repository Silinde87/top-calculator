//Basic math operations
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

//This function selects the operation based on the operator parameter
function operate(operator, a, b){
    let result;
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case 'x':
            result = multiply(a,b);
            break;
        case '÷':
            result = divide(a,b);
            break;
    }
    return result;
}
