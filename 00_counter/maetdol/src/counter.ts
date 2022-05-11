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
    this.callback(this.current);
  }

  decrease() {
    this.current -= 1;
    this.callback(this.current);
  }

  reset() {
    this.current = this.defaultCurrent;
    this.callback(this.current);
  }
}
