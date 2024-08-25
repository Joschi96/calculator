// Initializing variables for operations.
// A calculator operation will consist of a 
// number, an operator, and another number. For example, 3 + 5.
let num1 = '';
let num2 = '';
let op = '';
let runningTotal = 0;
let displayValue = '0';
let result = false;

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
            result = false;
            break;

        case '←':
            if (displayValue.length === 1 && op==='') {
                displayValue = '0';
                num1 = '';
            } else if(displayValue.length === 1 && op!=''){
                displayValue = '0';
                num2 = '';
            } else if (op === '' &! result){
                displayValue = displayValue.substring(0,displayValue.length-1);
                num1 = num1.substring(0,num1.length-1);
            } else if(op != '' &! result){
                displayValue = displayValue.substring(0,displayValue.length-1);
                num2 = num2.substring(0,num2.length-1);
            } else
                break;
            break;
        
        case '=':
            if(op !=''){
            runningTotal=operate(op,num1,num2);
            displayValue = runningTotal.toString();
            op = '';
            num1 = runningTotal.toString();
            num2 =''; 
            result = true;
            }
            break;

        case '−':
            op = '−';
            displayValue = '0';
            result = false;
            break;
        
        case '+':
            op = '+';
            displayValue = '0';
            result = false;
            break;
        
        case '×':
            op = '×';
            displayValue = '0';
            result = false;
            break;

        case '÷':
            op = '÷';
            displayValue = '0';
            result = false;
            break;
    
        default:
            break;
    }
}


function add(a,b) {
    return parseInt(a)+parseInt(b);
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b===0) return "ERROR"
    else return Math.round(((a/b)+Number.EPSILON)*100000)/100000;
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
            return add(a,b);
            break;
        
        case '−':
            return subtract(a,b);
            break;

        case '×':
            return multiply(a,b);
            break;
        
        case '÷':
            return divide(a,b);
            break;

        default:
            break;
    }
}

