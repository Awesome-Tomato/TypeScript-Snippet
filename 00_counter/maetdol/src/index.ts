import Counter from './counter.js';
import { $ } from './utils.js';

function init() {
  const count = $('.counter__count');

  const counter = new Counter(0, (current) => {
    count.innerHTML = current.toString();
  });

  $('.buttons--decrease').addEventListener('click', () => counter.decrease());
  $('.buttons--increase').addEventListener('click', () => counter.increase());
  $('.buttons--reset').addEventListener('click', () => counter.reset());
}

init();
