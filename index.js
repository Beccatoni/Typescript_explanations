

// Using typeof 

const button = document.querySelector(".button")
const firstInput = document.querySelector("#first-input")
const secondInput = document.querySelector("#second-input")
const screen = document.querySelector(".screen")

button.addEventListener('click', ()=>{
    addNumber(firstInput.value, secondInput.value);
})

// function addNumber(a,b){
//     if(typeof a === 'number' && typeof b === 'number'){
//         screen.innerHtml = a + b;
//     } else{
//          screen.innerHtml = parseInt(a) + parseInt(b)
//     }
//     // console.log(a,b);
//     // screen.innerHTML = a + b
//     // return 0;
// }

function addNumber(a,b){
screen.innerHtml = a + b;
}

console.log(addNumber("5", "6"))

