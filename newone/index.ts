/*
Benefits of TypeScript
Challenges:
- give the screens innerHTML a string
- change the two input values to numbers
 */

const button = document.querySelector(".button") as HTMLElement | null
const firstInput = document.querySelector("#first-input") as HTMLInputElement
const secondInput = document.querySelector("#second-input") as HTMLInputElement
const screen1 = document.querySelector(".screen") as HTMLElement | null


function addNumber(a:number,b:number){
    if(screen1){
        screen1.innerHTML = (a + b).toString();
    }
   
    }

if(button && firstInput && secondInput){
    button.addEventListener('click', ()=>{
        addNumber(parseInt(firstInput.value), parseInt(secondInput.value));
    })
}


