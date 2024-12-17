function add(num1, num2){
    number1 = Number(num1);
    number2 = Number(num2);
    return number1 + number2
}

function substract(num1, num2){
    number1 = Number(num1);
    number2 = Number(num2);
    return number1 - number2
}

function multiply(num1, num2){
    number1 = Number(num1);
    number2 = Number(num2);
    return (number1 * number2).toFixed(2)
}

function divide(num1, num2){
    number1 = Number(num1);
    number2 = Number(num2);
    if(number2 === 0){
        alert("No dividing with zero you absolute animal")
        return clearDisplay()
    }
    return (number1 / number2).toFixed(2)
}

function power(num1, num2){
    number1 = Number(num1);
    number2 = Number(num2);
    return number1**number2
}

function operate(operator,num1,num2){
    return operator(num1,num2)
}

function clearDisplay(){
    display2.textContent = 0;
    display1.textContent = "";
}

function appendPoint(){
    if(display2.textContent == '0'){
        display2.textContent += '.'
    }
    if(display2.textContent == ''){
        display2.textContent += '0.'
    }
    if(display2.textContent.includes('.')){
        point.disabled = "true"
    }
    if(!display2.textContent.includes('.')){
        point.disabled ='false'
    }
}