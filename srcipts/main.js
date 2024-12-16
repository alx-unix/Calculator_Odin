const deleteScreen = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const display = document.querySelector(".screen-span");
const buttons = document.querySelectorAll(".btn");






for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        if (display.textContent == 0){
            display.textContent = buttons[i].textContent
        }else{
            display.textContent += buttons[i].textContent
        }
})
}


clear.addEventListener('click', ()=>{
    display.textContent = 0
})