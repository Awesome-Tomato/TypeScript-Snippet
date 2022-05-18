const htmlElement = () => {
  const decreaseButton = document.getElementById('decrease') as HTMLElement;
  const increateButton = document.getElementById('increase') as HTMLElement;
  const resetButton = document.getElementById('reset') as HTMLElement;
  const result = document.getElementById('result') as HTMLElement;
  result.innerText = '0';

  return {decreaseButton, increateButton, resetButton, result};
}

const {decreaseButton, increateButton, resetButton, result} = htmlElement();

const handleReset = (number: number): string => {  
  number = 0;
  return result.innerText = String(number);  
};

const handleDecrease = (number: number): string => {
  number = number - 1;
  return result.innerText = String(number);
};

const handleIncrease = (number: number): string => {
  number = number + 1;
  return result.innerText = String(number);
};

increateButton?.addEventListener('click', () => handleIncrease(Number(result.innerText)));
decreaseButton?.addEventListener('click', () => handleDecrease(Number(result.innerText)));
resetButton?.addEventListener('click', () => handleReset(Number(result.innerText)));
