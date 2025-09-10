import { getFeatureFlags } from "src/905/601108";
export class $$r0 {
  #e;
  #t;
  #i;
  constructor(e, t, i) {
    this.#e = new Set();
    e.forEach(e => {
      this.#e.add(e);
    });
    t ? this.#t = t : (this.#t = new Map(), e.forEach(e => {
      this.#t.set(e, e);
    }));
    this.#i = i || new Map();
  }
  get set() {
    let e = [...this.#e.values()];
    let t = new Set();
    this.#i.forEach((e, i) => {
      i() || e.forEach(e => t.add(e));
    });
    return new Set(e.filter(e => !t.has(e)));
  }
  has(e) {
    return this.set.has(e);
  }
  sort(e) {
    return new $$r0(Array.from(this.set.values()).sort(e));
  }
  reduce(e, t) {
    return Array.from(this.set.values()).reduce(e, t);
  }
  forEach(e) {
    for (let t of this.set) {
      let i = this.#t.get(t);
      if (!i) throw Error("dictKey not found");
      i && e(t, i);
    }
  }
  map(e) {
    let t = [];
    for (let i of this.set) {
      let n = this.#t.get(i);
      if (!n) throw Error("dictKey not found");
      t.push(e(i, n));
    }
    return t;
  }
  exclude(e) {
    let t = new Set();
    let i = new Map();
    let n = new Map();
    this.#e.forEach(n => {
      if (!this.#t.get(n)) throw Error("dictKey not found");
      e.includes(n) || (t.add(n), i.set(n, n));
    });
    this.#i.forEach((t, i) => {
      n.set(i, t.filter(t => !e.includes(t)));
    });
    return new $$r0(Array.from(t.values()), i, n);
  }
  only(e) {
    let t = new Set();
    let i = new Map();
    let n = new Map();
    this.#e.forEach(n => {
      let r = this.#t.get(n);
      if (!r) throw Error("dictKey not found");
      e.includes(n) && (t.add(n), i.set(n, r));
    });
    this.#i.forEach((t, i) => {
      n.set(i, t.filter(t => e.includes(t)));
    });
    return new $$r0(Array.from(t.values()), i, n);
  }
  excludeUnless(e, t) {
    let i = new Map(this.#i);
    i.set(t, e);
    return new $$r0(Array.from(this), this.#t, i);
  }
  excludeUnlessFlag(e, t) {
    return this.excludeUnless(e, () => !!getFeatureFlags()[t]);
  }
  withOverrides(e) {
    let t = new Set();
    let i = new Map();
    let n = new Map();
    this.#e.forEach(n => {
      let r = this.#t.get(n);
      if (!r) throw Error("dictKey not found");
      let a = e[n];
      a ? (t.add(a), i.set(a, r)) : (t.add(n), i.set(n, r));
    });
    this.#i.forEach((t, i) => {
      n.set(i, t.map(t => e[t] || t));
    });
    return new $$r0(Array.from(t.values()), i, n);
  }
  withPrefix(e) {
    let t = new Set();
    let i = new Map();
    let n = new Map();
    this.#e.forEach(n => {
      let r = this.#t.get(n);
      if (!r) throw Error("dictKey not found");
      t.add(`${e}${n}`);
      i.set(`${e}${n}`, r);
    });
    this.#i.forEach((t, i) => {
      n.set(i, t.map(t => `${e}${t}`));
    });
    return new $$r0(Array.from(t.values()), i, n);
  }
  withSuffix(e) {
    let t = new Set();
    let i = new Map();
    let n = new Map();
    this.#e.forEach(n => {
      let r = this.#t.get(n);
      if (!r) throw Error("dictKey not found");
      t.add(`${n}${e}`);
      i.set(`${n}${e}`, r);
    });
    this.#i.forEach((t, i) => {
      n.set(i, t.map(t => `${t}${e}`));
    });
    return new $$r0(Array.from(t.values()), i, n);
  }
  dict(e) {
    let t = {};
    this.set.forEach(i => {
      let n = this.#t.get(i);
      if (!n) throw Error("dictKey not found");
      e ? t[n] = e(i, n) : t[n] = i;
    });
    return t;
  }
  [Symbol.iterator]() {
    return this.set[Symbol.iterator]();
  }
  values() {
    return this.set.values();
  }
  size() {
    return this.toArray().length;
  }
  toArray() {
    return Array.from(this.values());
  }
}
export const X = $$r0;
