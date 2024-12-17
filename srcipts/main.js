const deleteScreen = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const display2 = document.querySelector(".screen-div2");
const display1 = document.querySelector(".screen-div1");
const buttons = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".oper");
const egal = document.querySelector(".equal")

console.log(buttons)
console.log(operations)




for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        if (display2.textContent == 0){
            display2.textContent = buttons[i].textContent
        }else{
            display2.textContent += buttons[i].textContent
        }
    })
}

for (let i=0; i<operations.length; i++){
    operations[i].addEventListener('click',()=>{
        if (display2.textContent == 0){
            alert('Nothing there mate')
        }else if(!display1.textContent){
            const num1 = display2.textContent
            display1.textContent = num1 + operations[i].textContent
            display2.textContent = ""
            console.log('alright')
        }else{
            console.log('comes here')
        }
        egal.addEventListener('click',()=>{
            console.log('alright2')
            if (display1.textContent.includes('+')){
                console.log('alright3')
                const num2 = display2.textContent;
                const num1 = display1.textContent;
                const num1Filtered = num1.slice(0,-1);
                const result = operate(add,num1Filtered, num2);
                display1.textContent = "";
                display2.textContent = result;
            }else if(display1.textContent.includes('-')){
                console.log('alright4')
                const num2 = display2.textContent;
                const num1 = display1.textContent;
                const num1Filtered = num1.slice(0,-1);
                const result = operate(substract,num1Filtered, num2);
                display1.textContent = "";
                display2.textContent = result;
            }else if(display1.textContent.includes('*')){
                console.log('alright5')
                const num2 = display2.textContent;
                const num1 = display1.textContent;
                const num1Filtered = num1.slice(0,-1);
                const result = operate(multiply,num1Filtered, num2);
                display1.textContent = "";
                display2.textContent = result;
            }else if(display1.textContent.includes('/')){
                console.log('alright5')
                const num2 = display2.textContent;
                const num1 = display1.textContent;
                const num1Filtered = num1.slice(0,-1);
                const result = operate(divide,num1Filtered, num2);
                display1.textContent = "";
                display2.textContent = result;
            }
                
            })
            
    })
}



clear.addEventListener('click', ()=>{
    clearDisplay()
})