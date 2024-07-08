"use strict";
/*
Benefits of TypeScript
Challenges:
- give the screens innerHTML a string
- change the two input values to numbers
 */
const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const screen1 = document.querySelector(".screen");
function addNumber(a, b) {
    if (screen1) {
        screen1.innerHTML = (a + b).toString();
    }
}
if (button && firstInput && secondInput) {
    button.addEventListener('click', () => {
        addNumber(parseInt(firstInput.value), parseInt(secondInput.value));
    });
}
