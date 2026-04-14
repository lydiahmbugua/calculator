function sum(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

let num1,num2=0;
let operator='';
function operate(operator){
    switch (operator) {
        case '+':
            sum(num1,num2);            
            break;
            case '-':
            subtract(num1,num2);            
            break;
            case '*':
            multiply(num1,num2);            
            break;
            case '/':
            divide(num1,num2);            
            break;
    
    }
}