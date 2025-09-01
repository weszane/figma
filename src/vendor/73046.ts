export var $$i10 = (t => (t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY", t))($$i10 || {});
export class $$n0 {
  constructor(t, e, r = {}) {
    this.attrName = t;
    this.keyName = e;
    let n = $$i10.TYPE & $$i10.ATTRIBUTE;
    this.scope = null != r.scope ? r.scope & $$i10.LEVEL | n : $$i10.ATTRIBUTE;
    null != r.whitelist && (this.whitelist = r.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map(t => t.name);
  }
  add(t, e) {
    return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
  }
  canAdd(t, e) {
    return null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1);
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    let e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class s extends Error {
  constructor(t) {
    super(t = "[Parchment] " + t);
    this.message = t;
    this.name = this.constructor.name;
  }
}
let l = class t {
  constructor() {
    this.attributes = {};
    this.classes = {};
    this.tags = {};
    this.types = {};
  }
  static find(t, e = !1) {
    if (null == t) return null;
    if (this.blots.has(t)) return this.blots.get(t) || null;
    if (e) {
      let r = null;
      try {
        r = t.parentNode;
      } catch {
        return null;
      }
      return this.find(r, e);
    }
    return null;
  }
  create(e, r, i) {
    let n = this.query(r);
    if (null == n) throw new s(`Unable to create ${r} blot`);
    let l = r instanceof Node || r.nodeType === Node.TEXT_NODE ? r : n.create(i);
    let o = new n(e, l, i);
    t.blots.set(o.domNode, o);
    return o;
  }
  find(e, r = !1) {
    return t.find(e, r);
  }
  query(t, e = $$i10.ANY) {
    let r;
    "string" == typeof t ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : "number" == typeof t ? t & $$i10.LEVEL & $$i10.BLOCK ? r = this.types.block : t & $$i10.LEVEL & $$i10.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some(t => !!(r = this.classes[t])), r = r || this.tags[t.tagName]);
    return null == r ? null : "scope" in r && e & $$i10.LEVEL & r.scope && e & $$i10.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map(t => {
      let e = "blotName" in t;
      let r = "attrName" in t;
      if (!e && !r) throw new s("Invalid definition");
      if (e && "abstract" === t.blotName) throw new s("Cannot register abstract class");
      let i = e ? t.blotName : r ? t.attrName : void 0;
      this.types[i] = t;
      r ? "string" == typeof t.keyName && (this.attributes[t.keyName] = t) : e && (t.className && (this.classes[t.className] = t), t.tagName && (Array.isArray(t.tagName) ? t.tagName = t.tagName.map(t => t.toUpperCase()) : t.tagName = t.tagName.toUpperCase(), (Array.isArray(t.tagName) ? t.tagName : [t.tagName]).forEach(e => {
        (null == this.tags[e] || null == t.className) && (this.tags[e] = t);
      })));
      return t;
    });
  }
};
l.blots = new WeakMap();
export let $$o9 = l;
function a(t, e) {
  return (t.getAttribute("class") || "").split(/\s+/).filter(t => 0 === t.indexOf(`${e}-`));
}
export let $$c3 = class extends $$n0 {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map(t => t.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0);
  }
  remove(t) {
    a(t, this.keyName).forEach(e => {
      t.classList.remove(e);
    });
    0 === t.classList.length && t.removeAttribute("class");
  }
  value(t) {
    let e = (a(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
};
function u(t) {
  let e = t.split("-");
  let r = e.slice(1).map(t => t[0].toUpperCase() + t.slice(1)).join("");
  return e[0] + r;
}
let $$h12 = class extends $$n0 {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map(t => t.split(":")[0].trim());
  }
  add(t, e) {
    return !!this.canAdd(t, e) && (t.style[u(this.keyName)] = e, !0);
  }
  remove(t) {
    t.style[u(this.keyName)] = "";
    t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    let e = t.style[u(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
};
let $$d1 = class {
  constructor(t) {
    this.attributes = {};
    this.domNode = t;
    this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    let t = $$o9.find(this.domNode);
    if (null == t) return;
    let e = $$n0.keys(this.domNode);
    let r = $$c3.keys(this.domNode);
    let s = $$h12.keys(this.domNode);
    e.concat(r).concat(s).forEach(e => {
      let r = t.scroll.query(e, $$i10.ATTRIBUTE);
      r instanceof $$n0 && (this.attributes[r.attrName] = r);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach(e => {
      let r = this.attributes[e].value(this.domNode);
      t.format(e, r);
    });
  }
  move(t) {
    this.copy(t);
    Object.keys(this.attributes).forEach(t => {
      this.attributes[t].remove(this.domNode);
    });
    this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce((t, e) => (t[e] = this.attributes[e].value(this.domNode), t), {});
  }
};
let f = class {
  constructor(t, e) {
    this.scroll = t;
    this.domNode = e;
    $$o9.blots.set(e, this);
    this.prev = null;
    this.next = null;
  }
  static create(t) {
    let e;
    let r;
    if (null == this.tagName) throw new s("Blot definition missing tagName");
    Array.isArray(this.tagName) ? ("string" == typeof t ? parseInt(r = t.toUpperCase(), 10).toString() === r && (r = parseInt(r, 10)) : "number" == typeof t && (r = t), e = "number" == typeof r ? document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? document.createElement(r) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName);
    this.className && e.classList.add(this.className);
    return e;
  }
  get statics() {
    return this.constructor;
  }
  attach() {}
  clone() {
    let t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    null != this.parent && this.parent.removeChild(this);
    $$o9.blots.$$delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, r, n) {
    let s = this.isolate(t, e);
    if (null != this.scroll.query(r, $$i10.BLOT) && n) s.wrap(r, n);else if (null != this.scroll.query(r, $$i10.ATTRIBUTE)) {
      let t = this.scroll.create(this.statics.scope);
      s.wrap(t);
      t.format(r, n);
    }
  }
  insertAt(t, e, r) {
    let i = null == r ? this.scroll.create("text", e) : this.scroll.create(e, r);
    let n = this.split(t);
    this.parent.insertBefore(i, n || void 0);
  }
  isolate(t, e) {
    let r = this.split(t);
    if (null == r) throw Error("Attempt to isolate at end");
    r.split(e);
    return r;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return null == this.parent || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    !this.statics.requiredContainer || this.parent instanceof this.statics.requiredContainer || this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode);
    this.detach();
  }
  replaceWith(t, e) {
    let r = "string" == typeof t ? this.scroll.create(t, e) : t;
    null != this.parent && (this.parent.insertBefore(r, this.next || void 0), this.remove());
    return r;
  }
  split(t, e) {
    return 0 === t ? this : this.next;
  }
  update(t, e) {}
  wrap(t, e) {
    let r = "string" == typeof t ? this.scroll.create(t, e) : t;
    if (null != this.parent && this.parent.insertBefore(r, this.next || void 0), "function" != typeof r.appendChild) throw new s(`Cannot wrap ${t}`);
    r.appendChild(this);
    return r;
  }
};
f.blotName = "abstract";
let p = f;
let g = class extends p {
  static value(t) {
    return !0;
  }
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  position(t, e) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    t > 0 && (r += 1);
    return [this.parent.domNode, r];
  }
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
g.scope = $$i10.INLINE_BLOT;
export let $$m7 = g;
class b {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      let e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    let e = this.iterator();
    let r = e();
    for (; r && t > 0;) {
      t -= 1;
      r = e();
    }
    return r;
  }
  contains(t) {
    let e = this.iterator();
    let r = e();
    for (; r;) {
      if (r === t) return !0;
      r = e();
    }
    return !1;
  }
  indexOf(t) {
    let e = this.iterator();
    let r = e();
    let i = 0;
    for (; r;) {
      if (r === t) return i;
      i += 1;
      r = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    null != t && (this.remove(t), t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0;
    let r = this.head;
    for (; null != r;) {
      if (r === t) return e;
      e += r.length();
      r = r.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      let e = t;
      null != t && (t = t.next);
      return e;
    };
  }
  find(t, e = !1) {
    let r = this.iterator();
    let i = r();
    for (; i;) {
      let n = i.length();
      if (t < n || e && t === n && (null == i.next || 0 !== i.next.length())) return [i, t];
      t -= n;
      i = r();
    }
    return [null, 0];
  }
  forEach(t) {
    let e = this.iterator();
    let r = e();
    for (; r;) {
      t(r);
      r = e();
    }
  }
  forEachAt(t, e, r) {
    if (e <= 0) return;
    let [i, n] = this.find(t);
    let s = t - n;
    let l = this.iterator(i);
    let o = l();
    for (; o && s < t + e;) {
      let i = o.length();
      t > s ? r(o, t - s, Math.min(e, s + i - t)) : r(o, 0, Math.min(i, t + e - s));
      s += i;
      o = l();
    }
  }
  map(t) {
    return this.reduce((e, r) => (e.push(t(r)), e), []);
  }
  reduce(t, e) {
    let r = this.iterator();
    let i = r();
    for (; i;) {
      e = t(e, i);
      i = r();
    }
    return e;
  }
}
function y(t, e) {
  let r = e.find(t);
  if (r) return r;
  try {
    return e.create(t);
  } catch {
    let r = e.create($$i10.INLINE);
    Array.from(t.childNodes).forEach(t => {
      r.domNode.appendChild(t);
    });
    t.parentNode && t.parentNode.replaceChild(r.domNode, t);
    r.attach();
    return r;
  }
}
let v = class t extends p {
  constructor(t, e) {
    super(t, e);
    this.uiNode = null;
    this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach();
    this.children.forEach(t => {
      t.attach();
    });
  }
  attachUI(e) {
    null != this.uiNode && this.uiNode.remove();
    this.uiNode = e;
    t.uiClass && this.uiNode.classList.add(t.uiClass);
    this.uiNode.setAttribute("contenteditable", "false");
    this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  build() {
    this.children = new b();
    Array.from(this.domNode.childNodes).filter(t => t !== this.uiNode).reverse().forEach(t => {
      try {
        let e = y(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (t) {
        if (t instanceof s) return;
        throw t;
      }
    });
  }
  deleteAt(t, e) {
    if (0 === t && e === this.length()) return this.remove();
    this.children.forEachAt(t, e, (t, e, r) => {
      t.deleteAt(e, r);
    });
  }
  descendant(e, r = 0) {
    let [i, n] = this.children.find(r);
    return null == e.blotName && e(i) || null != e.blotName && i instanceof e ? [i, n] : i instanceof t ? i.descendant(e, n) : [null, -1];
  }
  descendants(e, r = 0, i = Number.MAX_VALUE) {
    let n = [];
    let s = i;
    this.children.forEachAt(r, i, (r, i, l) => {
      (null == e.blotName && e(r) || null != e.blotName && r instanceof e) && n.push(r);
      r instanceof t && (n = n.concat(r.descendants(e, i, s)));
      s -= l;
    });
    return n;
  }
  detach() {
    this.children.forEach(t => {
      t.detach();
    });
    super.detach();
  }
  enforceAllowedChildren() {
    let e = !1;
    this.children.forEach(r => {
      e || this.statics.allowedChildren.some(t => r instanceof t) || (r.statics.scope === $$i10.BLOCK_BLOT ? (null != r.next && this.splitAfter(r), null != r.prev && this.splitAfter(r.prev), r.parent.unwrap(), e = !0) : r instanceof t ? r.unwrap() : r.remove());
    });
  }
  formatAt(t, e, r, i) {
    this.children.forEachAt(t, e, (t, e, n) => {
      t.formatAt(e, n, r, i);
    });
  }
  insertAt(t, e, r) {
    let [i, n] = this.children.find(t);
    if (i) i.insertAt(n, e, r);else {
      let t = null == r ? this.scroll.create("text", e) : this.scroll.create(e, r);
      this.appendChild(t);
    }
  }
  insertBefore(t, e) {
    null != t.parent && t.parent.children.remove(t);
    let r = null;
    this.children.insertBefore(t, e || null);
    t.parent = this;
    null != e && (r = e.domNode);
    (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(t.domNode, r);
    t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach(r => {
      t.insertBefore(r, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), 0 === this.children.length) {
      if (null != this.statics.defaultChild) {
        let t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t);
      } else this.remove();
    }
  }
  path(e, r = !1) {
    let [i, n] = this.children.find(e, r);
    let s = [[this, e]];
    return i instanceof t ? s.concat(i.path(n, r)) : (null != i && s.push([i, n]), s);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(e, r) {
    let i = "string" == typeof e ? this.scroll.create(e, r) : e;
    i instanceof t && this.moveChildren(i);
    return super.replaceWith(i);
  }
  split(t, e = !1) {
    if (!e) {
      if (0 === t) return this;
      if (t === this.length()) return this.next;
    }
    let r = this.clone();
    this.parent && this.parent.insertBefore(r, this.next || void 0);
    this.children.forEachAt(t, this.length(), (t, i, n) => {
      let s = t.split(i, e);
      null != s && r.appendChild(s);
    });
    return r;
  }
  splitAfter(t) {
    let e = this.clone();
    for (; null != t.next;) e.appendChild(t.next);
    this.parent && this.parent.insertBefore(e, this.next || void 0);
    return e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0);
    this.remove();
  }
  update(t, e) {
    let r = [];
    let i = [];
    t.forEach(t => {
      t.target === this.domNode && "childList" === t.type && (r.push(...t.addedNodes), i.push(...t.removedNodes));
    });
    i.forEach(t => {
      if (null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
      let e = this.scroll.find(t);
      null != e && (null == e.domNode.parentNode || e.domNode.parentNode === this.domNode) && e.detach();
    });
    r.filter(t => t.parentNode === this.domNode && t !== this.uiNode).sort((t, e) => t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach(t => {
      let e = null;
      null != t.nextSibling && (e = this.scroll.find(t.nextSibling));
      let r = y(t, this.scroll);
      (r.next !== e || null == r.next) && (null != r.parent && r.parent.removeChild(this), this.insertBefore(r, e || void 0));
    });
    this.enforceAllowedChildren();
  }
};
v.uiClass = "";
let $$A8 = v;
let x = class t extends $$A8 {
  static create(t) {
    return super.create(t);
  }
  static formats(e, r) {
    let i = r.query(t.blotName);
    if (!(null != i && e.tagName === i.tagName)) {
      if ("string" == typeof this.tagName) return !0;
      if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e);
    this.attributes = new $$d1(this.domNode);
  }
  format(e, r) {
    if (e !== this.statics.blotName || r) {
      let t = this.scroll.query(e, $$i10.INLINE);
      null != t && (t instanceof $$n0 ? this.attributes.attribute(t, r) : r && (e !== this.statics.blotName || this.formats()[e] !== r) && this.replaceWith(e, r));
    } else {
      this.children.forEach(e => {
        e instanceof t || (e = e.wrap(t.blotName, !0));
        this.attributes.copy(e);
      });
      this.unwrap();
    }
  }
  formats() {
    let t = this.attributes.values();
    let e = this.statics.formats(this.domNode, this.scroll);
    null != e && (t[this.statics.blotName] = e);
    return t;
  }
  formatAt(t, e, r, n) {
    null != this.formats()[r] || this.scroll.query(r, $$i10.ATTRIBUTE) ? this.isolate(t, e).format(r, n) : super.formatAt(t, e, r, n);
  }
  optimize(e) {
    super.optimize(e);
    let r = this.formats();
    if (0 === Object.keys(r).length) return this.unwrap();
    let i = this.next;
    i instanceof t && i.prev === this && function (t, e) {
      if (Object.keys(t).length !== Object.keys(e).length) return !1;
      for (let r in t) if (t[r] !== e[r]) return !1;
      return !0;
    }(r, i.formats()) && (i.moveChildren(this), i.remove());
  }
  replaceWith(t, e) {
    let r = super.replaceWith(t, e);
    this.attributes.copy(r);
    return r;
  }
  update(t, e) {
    super.update(t, e);
    t.some(t => t.target === this.domNode && "attributes" === t.type) && this.attributes.build();
  }
  wrap(e, r) {
    let i = super.wrap(e, r);
    i instanceof t && this.attributes.move(i);
    return i;
  }
};
x.allowedChildren = [x, $$m7];
x.blotName = "inline";
x.scope = $$i10.INLINE_BLOT;
x.tagName = "SPAN";
let $$N6 = x;
let E = class t extends $$A8 {
  static create(t) {
    return super.create(t);
  }
  static formats(e, r) {
    let i = r.query(t.blotName);
    if (!(null != i && e.tagName === i.tagName)) {
      if ("string" == typeof this.tagName) return !0;
      if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e);
    this.attributes = new $$d1(this.domNode);
  }
  format(e, r) {
    let s = this.scroll.query(e, $$i10.BLOCK);
    null != s && (s instanceof $$n0 ? this.attributes.attribute(s, r) : e !== this.statics.blotName || r ? r && (e !== this.statics.blotName || this.formats()[e] !== r) && this.replaceWith(e, r) : this.replaceWith(t.blotName));
  }
  formats() {
    let t = this.attributes.values();
    let e = this.statics.formats(this.domNode, this.scroll);
    null != e && (t[this.statics.blotName] = e);
    return t;
  }
  formatAt(t, e, r, n) {
    null != this.scroll.query(r, $$i10.BLOCK) ? this.format(r, n) : super.formatAt(t, e, r, n);
  }
  insertAt(t, e, r) {
    if (null == r || null != this.scroll.query(e, $$i10.INLINE)) super.insertAt(t, e, r);else {
      let i = this.split(t);
      if (null != i) {
        let t = this.scroll.create(e, r);
        i.parent.insertBefore(t, i);
      } else throw Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    let r = super.replaceWith(t, e);
    this.attributes.copy(r);
    return r;
  }
  update(t, e) {
    super.update(t, e);
    t.some(t => t.target === this.domNode && "attributes" === t.type) && this.attributes.build();
  }
};
E.blotName = "block";
E.scope = $$i10.BLOCK_BLOT;
E.tagName = "P";
E.allowedChildren = [$$N6, E, $$m7];
let $$w2 = E;
let k = class extends $$A8 {
  checkMerge() {
    return null !== this.next && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e);
    this.enforceAllowedChildren();
  }
  formatAt(t, e, r, i) {
    super.formatAt(t, e, r, i);
    this.enforceAllowedChildren();
  }
  insertAt(t, e, r) {
    super.insertAt(t, e, r);
    this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t);
    this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
k.blotName = "container";
k.scope = $$i10.BLOCK_BLOT;
let $$q4 = k;
let $$_5 = class extends $$m7 {
  static formats(t, e) {}
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, r, i) {
    0 === t && e === this.length() ? this.format(r, i) : super.formatAt(t, e, r, i);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
};
let L = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};
let O = class extends $$A8 {
  constructor(t, e) {
    super(null, e);
    this.registry = t;
    this.scroll = this;
    this.build();
    this.observer = new MutationObserver(t => {
      this.update(t);
    });
    this.observer.observe(this.domNode, L);
    this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    let r = this.registry.find(t, e);
    return r ? r.scroll === this ? r : e ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = $$i10.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    null != this.scroll && super.build();
  }
  detach() {
    super.detach();
    this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update();
    0 === t && e === this.length() ? this.children.forEach(t => {
      t.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, r, i) {
    this.update();
    super.formatAt(t, e, r, i);
  }
  insertAt(t, e, r) {
    this.update();
    super.insertAt(t, e, r);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    let r = e.mutationsMap || new WeakMap();
    let i = Array.from(this.observer.takeRecords());
    for (; i.length > 0;) t.push(i.pop());
    let n = (t, e = !0) => {
      null == t || t === this || null != t.domNode.parentNode && (r.has(t.domNode) || r.set(t.domNode, []), e && n(t.parent));
    };
    let s = t => {
      r.has(t.domNode) && (t instanceof $$A8 && t.children.forEach(s), r.$$delete(t.domNode), t.optimize(e));
    };
    let l = t;
    for (let e = 0; l.length > 0; e += 1) {
      if (e >= 100) throw Error("[Parchment] Maximum optimize iterations reached");
      for (l.forEach(t => {
        let e = this.find(t.target, !0);
        null != e && (e.domNode === t.target && ("childList" === t.type ? (n(this.find(t.previousSibling, !1)), Array.from(t.addedNodes).forEach(t => {
          let e = this.find(t, !1);
          n(e, !1);
          e instanceof $$A8 && e.children.forEach(t => {
            n(t, !1);
          });
        })) : "attributes" === t.type && n(e.prev)), n(e));
      }), this.children.forEach(s), i = (l = Array.from(this.observer.takeRecords())).slice(); i.length > 0;) t.push(i.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    let r = new WeakMap();
    t.map(t => {
      let e = this.find(t.target, !0);
      return null == e ? null : r.has(e.domNode) ? (r.get(e.domNode).push(t), null) : (r.set(e.domNode, [t]), e);
    }).forEach(t => {
      null != t && t !== this && r.has(t.domNode) && t.update(r.get(t.domNode) || [], e);
    });
    e.mutationsMap = r;
    r.has(this.domNode) && super.update(r.get(this.domNode), e);
    this.optimize(t, e);
  }
};
O.blotName = "scroll";
O.defaultChild = $$w2;
O.allowedChildren = [$$w2, $$q4];
O.scope = $$i10.BLOCK_BLOT;
O.tagName = "DIV";
let $$S11 = O;
let T = class t extends $$m7 {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e);
    this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, r) {
    null == r ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, r);
  }
  length() {
    return this.text.length;
  }
  optimize(e) {
    super.optimize(e);
    this.text = this.statics.value(this.domNode);
    0 === this.text.length ? this.remove() : this.next instanceof t && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (0 === t) return this;
      if (t === this.length()) return this.next;
    }
    let r = this.scroll.create(this.domNode.splitText(t));
    this.parent.insertBefore(r, this.next || void 0);
    this.text = this.statics.value(this.domNode);
    return r;
  }
  update(t, e) {
    t.some(t => "characterData" === t.type && t.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
T.blotName = "text";
T.scope = $$i10.INLINE_BLOT;
export let $$j13 = T;
export const Attributor = $$n0;
export const AttributorStore = $$d1;
export const BlockBlot = $$w2;
export const ClassAttributor = $$c3;
export const ContainerBlot = $$q4;
export const EmbedBlot = $$_5;
export const InlineBlot = $$N6;
export const LeafBlot = $$m7;
export const ParentBlot = $$A8;
export const Registry = $$o9;
export const Scope = $$i10;
export const ScrollBlot = $$S11;
export const StyleAttributor = $$h12;
export const TextBlot = $$j13;