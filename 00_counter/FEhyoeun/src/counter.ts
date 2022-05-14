
let count: number = 0;

let countElement = document.getElementById('count');
let decreaseButton = document.getElementById('button-decrease');
let resetButton = document.getElementById('button-reset');
let increaseButton = document.getElementById('button-increase');
const countElementUpdate = () => countElement!.innerText = String(count);

countElementUpdate();

decreaseButton!.addEventListener("click", () => {
    count >0 ? count-- : count = 0
    countElementUpdate();
})

resetButton!.addEventListener("click", () => {
    count = 0;
    countElementUpdate();
})

increaseButton!.addEventListener("click", () => {
    count++;
    countElementUpdate();
})


