const ADD_OPERATOR = '+';
const SUBTRACT_OPERATOR = '-';
const MULTIPLY_OPERATOR = 'x';
const DIVIDE_OPERATOR = '÷';

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
        case ADD_OPERATOR:
            result = add(a,b);
            break;
        case SUBTRACT_OPERATOR:
            result = subtract(a,b);
            break;
        case MULTIPLY_OPERATOR:
            result = multiply(a,b);
            break;
        case DIVIDE_OPERATOR:
            result = divide(a,b);
            break;
    }
    //Maximum length and decimal control    
    if(result.toString().length > 8){        
        if(countDecimals(result) == 0 || countInts(result) > 7){                        
            return result.toExponential(3);
        }else{
            let maxDecimals = 8 - countInts(result)
            return result.toFixed(maxDecimals);
        }
    }else{
        return result;
    }
}

//This function count the number of decimals from value passed
function countDecimals(value){
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}
//This function count the number of ints from value passed
function countInts(value){
    if(Math.floor(value) === value) return value.toString().length;
    return value.toString().split(".")[0].length || 0; 
}
