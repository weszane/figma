export class $$n0 {
  constructor(e, t) {
    this.maxElements = e;
    this.callback = t;
    this.size = 0;
    this.start = 0;
    this.end = 0;
    this.buffer = Array(e);
  }
  get length() {
    return this.size;
  }
  get capacity() {
    return this.maxElements;
  }
  push(e) {
    if (0 === this.maxElements) return;
    let t = this.buffer[this.end];
    this.buffer[this.end++] = e;
    this.end %= this.maxElements;
    this.size === this.maxElements ? (this.callback && this.callback(t), this.start++, this.start %= this.maxElements) : this.size++;
  }
  toArray() {
    let e = Array(this.size);
    let t = this.start;
    for (let i = 0; i < this.size; i++) {
      e[i] = this.buffer[t];
      t++;
      t %= this.maxElements;
    }
    return e;
  }
  clear() {
    this.start = 0;
    this.end = 0;
    this.size = 0;
  }
  getBuffer() {
    return this.buffer;
  }
}
export const C = $$n0;