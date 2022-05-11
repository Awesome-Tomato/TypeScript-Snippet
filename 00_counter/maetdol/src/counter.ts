export default class Counter {
  current: number;

  constructor(
    private defaultCurrent: number = 0,
    private callback: (current: number) => void
  ) {
    this.reset();
  }

  increase() {
    this.current += 1;
    this.update();
  }

  decrease() {
    this.current -= 1;
    this.update();
  }

  reset() {
    this.current = this.defaultCurrent;
    this.update();
  }

  update() {
    this.callback(this.current);
  }
}
