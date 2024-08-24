// Initializing variables for operations.
// A calculator operation will consist of a 
// number, an operator, and another number. For example, 3 + 5.
let num1 = 0;
let num2 = 0;
let op = '';
let runningTotal = 0;
let displayValue = '0';

let btnNum = container.querySelector("button")

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else{
        handleNumber(value);
    }
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            displayValue = '0';
            runningTotal = 0;
            break;
        case '←':
            if (displayValue.length === 1) {
                displayValue = '0';
            } else{
                displayValue = displayValue.substring(0,displayValue.length-1);
            }
    
        default:
            break;
    }
}


function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b===0) return "ERROR"
    else return a/b;
}

// Testing basic math operators
// console.log(add(25,32));
// console.log(subtract(27,9));
// console.log(multiply(5,9));
// console.log(divide(10,0));
// console.log(divide(22,11));

// Takes  takes an operator and 2 numbers 
// and then calls one of the basic math operator functions on the numbers.
function operate(operator, a, b) {
    switch (operator) {
        case '&plus':
            add(a,b);
            break;
        
        case '&minus':
            subtract(a,b);
            break;

        case '&times':
            multiply(a,b);
            break;
        
        case '&divide':
            divide(a,b);
            break;

        default:
            break;
    }
}