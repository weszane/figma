class n {
  constructor() {
    this.map = new Map();
  }
  has(e) {
    return this.map.has(e);
  }
  get size() {
    return this.map.size;
  }
  keys() {
    return this.map.keys();
  }
  values() {
    return this.map.values();
  }
  entries() {
    return this.map.entries();
  }
}
export class $$r0 extends n {
  constructor(e) {
    if (super(), e) for (let t of e) this.add(t[0], t[1]);
  }
  add(e, t) {
    this.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]);
  }
  get(e) {
    return this.map.get(e) ?? [];
  }
}
export class $$a1 extends n {
  constructor(e) {
    if (super(), e) for (let t of e) this.add(t[0], t[1]);
  }
  add(e, t) {
    this.has(e) ? this.map.get(e).add(t) : this.map.set(e, new Set([t]));
  }
  get(e) {
    return this.map.get(e) ?? new Set();
  }
}
export const _ = $$r0;
export const d = $$a1;