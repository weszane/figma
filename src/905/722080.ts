export class $$n0 {
  constructor(e) {
    this.map = new Map();
    this.key = e ?? (e => JSON.stringify(e));
  }
  add(e) {
    this.map.set(this.key(e), e);
  }
  has(e) {
    return this.map.has(this.key(e));
  }
  delete(e) {
    this.map.$$delete(this.key(e));
  }
  empty() {
    return 0 === this.map.size;
  }
  get size() {
    return this.map.size;
  }
  get length() {
    return this.map.size;
  }
  values() {
    return Array.from(this.map.values()).sort((e, t) => this.key(e).localeCompare(this.key(t)));
  }
}
export const U = $$n0;