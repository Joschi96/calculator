// Initializing variables for operations.
// A calculator operation will consist of a 
// number, an operator, and another number. For example, 3 + 5.
let num1 = 0;
let num2 = 0;
let op = ''; 

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
        
        case '-':
            subtract(a,b);
            break;

        case '*':
            multiply(a,b);
            break;
        
        case '0xC3':
            divide(a,b);
            break;
            
        default:
            break;
    }
}