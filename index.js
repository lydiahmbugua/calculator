function sum(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){
    if(b==0){
        return 'Error';
    }else  {return a/b;}}

let digit='';
let num1=0;
let num2=0;
let operator='';
let result=0;

function operate(operator){
    switch (operator) {
        case '+':
           result= sum(num1,num2);  
        return result;
            break;
            case '-':
            result=subtract(num1,num2); 
            return result;           
            break;
            case '*':
            result=multiply(num1,num2); 
            return result;           
            break;
            case '/':
            result=divide(num1,num2);     
            return result;       
            break;
    
    }
}
const button=document.querySelectorAll(".number");
const buttons=document.querySelector('.buttons');
const operators=document.querySelectorAll('.operator');
const container=document.querySelector('.container');
const display=document.querySelector('.display');
const equalSign=document.querySelector('.equal');
const clear=document.querySelector('.clear');
button.forEach(btn=>{
    buttons.appendChild(btn);
    btn.addEventListener('click', (e) => {
    const input = e.target.textContent;

    if (input === '.' && digit.includes('.')) {
        return; 
    }

    display.textContent += input;
    
    if (operator === '') {
        digit += input;
        num1 = Number(digit);
    } else {
        digit += input;
        num2 = Number(digit);
    }
});});
 operators.forEach(operation=>{
        buttons.appendChild(operation);
        operation.addEventListener('click',(e)=>{
            digit='';
            operator=e.target.textContent;
            display.textContent+=' '+operator+" ";
           
        })
        
    });
equalSign.addEventListener('click',()=>{
     operate(operator);
    display.textContent=result;
    num1=result;
    num2=0;
    digit='';
});
clear.addEventListener('click',()=>{
    display.textContent='';
    operator='';
    digit='';
    num1=0;
    num2=0;
})
