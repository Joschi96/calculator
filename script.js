// Initializing variables for operations.
// A calculator operation will consist of a 
// number, an operator, and another number. For example, 3 + 5.
let num1 = '';
let num2 = '';
let op = '';
let runningTotal = 0;
let displayValue = '0';

const btnNum = document.querySelector('button');
const screen = document.querySelector('.screen');

calcButtons = document.querySelector('.calc-buttons').addEventListener('click', (event)=>buttonClick(event.target.innerText));

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else{
        handleNumber(value);
    }
    screen.innerText = displayValue;
}

function handleNumber(num){
    if (op === '') {
        num1 += num;
        displayValue = num1;
    } else {
        num2 += num;
        displayValue = num2;
    }
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            displayValue = '0';
            runningTotal = 0;
            num1=num2=op='';
            break;

        case '←':
            if (displayValue.length === 1) {
                displayValue = '0';
            } else{
                displayValue = displayValue.substring(0,displayValue.length-1);
            }
            break;
        
        case '=':
            runningTotal=operate(op,num1,num2);
            displayValue = runningTotal.toString();

        case '−':
            op = '−';
            displayValue = '0';
            break;
        
        case '+':
            break;
        
        case '×':
            break;

        case '÷':
            break;
    
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
        case '+':
            add(a,b);
            break;
        
        case '−':
            subtract(a,b);
            break;

        case '×':
            multiply(a,b);
            break;
        
        case '÷':
            divide(a,b);
            break;

        default:
            break;
    }
}

console.log(operate('+',23,21))