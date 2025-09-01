export class $$n0 {
  constructor() {
    this.freeKeyStack = [];
    this.usedKeysById = {};
    this.nextKey = 1;
  }
  getKeyForId(e) {
    let t;
    return e in this.usedKeysById ? this.usedKeysById[e] : (t = this.freeKeyStack.length ? this.freeKeyStack.pop() : this.nextKey++, this.usedKeysById[e] = t, t);
  }
  freeKeyForId(e) {
    if (e in this.usedKeysById) {
      let t = this.usedKeysById[e];
      this.freeKeyStack.push(t);
      delete this.usedKeysById[e];
    }
  }
}
export const V = $$n0;