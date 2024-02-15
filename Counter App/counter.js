// Romika Chaudhary
// Feb 14, 2024
//Counter App - Day 11
// counter.js

let count = 0;
const number = document.querySelector(".modifyNum");

const decBtn = document.querySelector("#dec");
decBtn.addEventListener("click", 
    decrement = () => {
    count -= 1;
    number.innerText = count;
});

const resBtn = document.querySelector("#res");
resBtn.addEventListener("click", 
    reset = () => {
        count = 0;
        number.textContent = count;
});

const incBtn = document.querySelector("#inc");
incBtn.addEventListener("click", 
    increment = () => {
    count += 1;
    number.textContent = count;
});




