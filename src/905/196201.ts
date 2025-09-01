export class $$n0 {
  maxElements;
  size;
  nodeByKey;
  head;
  tail;
  constructor(e) {
    this.maxElements = e;
    this.size = 0;
    this.nodeByKey = Object.create(null);
    this.head = null;
    this.tail = null;
  }
  get length() {
    return this.size;
  }
  get(e) {
    let t = this.nodeByKey[e];
    if (t) {
      this.moveElemToHead(t);
      return t.value;
    }
  }
  set(e, t) {
    let i = this.nodeByKey[e];
    i ? this.moveElemToHead(i) : (i = {
      key: e,
      value: t,
      prev: null,
      next: null
    }, this.addElemAsHead(i), this.nodeByKey[e] = i, this.size++, this.size > this.maxElements && this.$$delete(this.tail.key));
    i.value = t;
  }
  has(e) {
    return Object.prototype.hasOwnProperty.call(this.nodeByKey, e);
  }
  reset() {
    this.size = 0;
    this.nodeByKey = Object.create(null);
    this.head = null;
    this.tail = null;
  }
  delete(e) {
    let t = this.nodeByKey[e];
    t && (delete this.nodeByKey[t.key], this.removeFromList(t), this.size--);
  }
  forEach(e) {
    let t = this.head;
    for (; t;) {
      e(t.key, t.value);
      t = t.next;
    }
  }
  moveElemToHead(e) {
    this.removeFromList(e);
    this.addElemAsHead(e);
  }
  removeFromList(e) {
    let t = e.prev;
    let i = e.next;
    t && (t.next = i);
    i && (i.prev = t);
    e === this.tail && (this.tail = t);
    e === this.head && (this.head = i);
    e.next = e.prev = null;
  }
  addElemAsHead(e) {
    this.head ? (e.next = this.head, e.next.prev = e, this.head = e) : this.head = this.tail = e;
  }
}
export const q = $$n0;