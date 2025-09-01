import { _ } from "../905/810750";
class r {
  constructor() {
    this.children = new Map();
    this.value = [];
  }
}
class a {
  constructor() {
    this.root = new r();
  }
  insert(e, t) {
    let i = this.root;
    for (let t = 0; t < e.length; t++) {
      let n = e.charAt(t);
      let a = i.children.get(n);
      a || i.children.set(n, a = new r());
      i = a;
    }
    i.value.push(t);
  }
  prefixFind(e) {
    let t = [];
    for (let i of this.keysWithPrefix(e)) {
      let e = this.find(i);
      if (e) for (let i of e) t.push(i);
    }
    return t;
  }
  find(e) {
    let t = this.root;
    for (let i = 0; i < e.length; i++) {
      let n = e.charAt(i);
      let r = t.children.get(n);
      if (!r) return;
      t = r;
    }
    return t.value;
  }
  keysWithPrefix(e) {
    let t = [];
    let i = this.findNode(e);
    this.collect(i, function (e) {
      let t = [];
      for (let i = 0; i < e.length; i++) {
        let n = e.charAt(i);
        t.push(n);
      }
      return t;
    }(e), t);
    return t;
  }
  collect(e, t, i) {
    if (e) for (let n of (e.value.length > 0 && i.push(t.join("")), Array.from(e.children.keys()))) {
      t.push(n);
      this.collect(e.children.get(n), t, i);
      t.pop();
    }
  }
  findNode(e) {
    let t = this.root;
    for (let i = 0; i < e.length; i++) {
      let n = e.charAt(i);
      let r = t.children.get(n);
      if (!r) return;
      t = r;
    }
    return t;
  }
}
export class $$s0 {
  constructor({
    property: e,
    aliases: t = []
  }) {
    this.trie = new a();
    this.exactMatches = new _();
    this.property = e;
    this.aliases = t;
  }
  search({
    value: e,
    isExact: t
  }) {
    let i = this.exactMatches.get(e);
    if (t) return i;
    let n = this.trie.prefixFind(e.toLowerCase()).filter(e => !i.some(t => t.object === e.object));
    return [...i, ...n];
  }
  indexObject(e) {
    let t = e.searchProperties[this.property];
    if (t) {
      if (Array.isArray(t)) for (let i of t) this.indexValue(i, e);else this.indexValue(t, e);
    }
  }
  indexValue(e, t) {
    this.exactMatches.add(e, {
      value: e,
      object: t,
      property: this.property,
      isExact: !0
    });
    this.trie.insert(e.toLowerCase(), {
      value: e,
      object: t,
      property: this.property,
      isExact: !1
    });
  }
}
export const L = $$s0;