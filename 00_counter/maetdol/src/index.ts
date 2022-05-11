import Counter from './counter.js';
import { $ } from './utils.js';

function init() {
  const count = $('.counter__count');
  if (!count) throw new Error('Count element not found');

  const counter = new Counter(0, (current) => {
    count.innerHTML = current.toString();
  });

  const decreaseButton = $('.buttons--decrease');
  if (!decreaseButton) throw new Error('Decrease button not found');
  decreaseButton.addEventListener('click', counter.decrease.bind(counter));

  const increaseButton = $('.buttons--increase');
  if (!increaseButton) throw new Error('Increase button not found');
  increaseButton.addEventListener('click', counter.increase.bind(counter));

  const resetButton = $('.buttons--reset');
  if (!resetButton) throw new Error('Reset button not found');
  resetButton.addEventListener('click', counter.reset.bind(counter));
}

init();
