"use strict";
const htmlElement = () => {
    const decreaseButton = document.getElementById('decrease');
    const increateButton = document.getElementById('increase');
    const resetButton = document.getElementById('reset');
    const result = document.getElementById('result');
    result.innerText = '0';
    return { decreaseButton, increateButton, resetButton, result };
};
const { decreaseButton, increateButton, resetButton, result } = htmlElement();
const handleReset = (number) => {
    number = 0;
    return result.innerText = String(number);
};
const handleDecrease = (number) => {
    number = number - 1;
    return result.innerText = String(number);
};
const handleIncrease = (number) => {
    number = number + 1;
    return result.innerText = String(number);
};
increateButton === null || increateButton === void 0 ? void 0 : increateButton.addEventListener('click', () => handleIncrease(Number(result.innerText)));
decreaseButton === null || decreaseButton === void 0 ? void 0 : decreaseButton.addEventListener('click', () => handleDecrease(Number(result.innerText)));
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', () => handleReset(Number(result.innerText)));
