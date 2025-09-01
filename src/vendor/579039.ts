export var $$i2;
let $$s5 = 1024;
let o = 0;
class a {
  constructor(e, r) {
    this.from = e;
    this.to = r;
  }
}
export class $$h9 {
  constructor(e = {}) {
    this.id = o++;
    this.perNode = !!e.perNode;
    this.deserialize = e.deserialize || (() => {
      throw Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode) throw RangeError("Can't add per-node props to node types");
    "function" != typeof e && (e = $$g4.match(e));
    return r => {
      let n = e(r);
      return void 0 === n ? null : [this, n];
    };
  }
}
$$h9.closedBy = new $$h9({
  deserialize: e => e.split(" ")
});
$$h9.openedBy = new $$h9({
  deserialize: e => e.split(" ")
});
$$h9.group = new $$h9({
  deserialize: e => e.split(" ")
});
$$h9.isolate = new $$h9({
  deserialize: e => {
    if (e && "rtl" != e && "ltr" != e && "auto" != e) throw RangeError("Invalid value for isolate: " + e);
    return e || "auto";
  }
});
$$h9.contextHash = new $$h9({
  perNode: !0
});
$$h9.lookAhead = new $$h9({
  perNode: !0
});
$$h9.mounted = new $$h9({
  perNode: !0
});
class d {
  constructor(e, r, n) {
    this.tree = e;
    this.overlay = r;
    this.parser = n;
  }
  static get(e) {
    return e && e.props && e.props[$$h9.mounted.id];
  }
}
let p = Object.create(null);
export class $$g4 {
  constructor(e, r, n, i = 0) {
    this.name = e;
    this.props = r;
    this.id = n;
    this.flags = i;
  }
  static define(e) {
    let r = e.props && e.props.length ? Object.create(null) : p;
    let n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (null == e.name ? 8 : 0);
    let i = new $$g4(e.name || "", r, e.id, n);
    if (e.props) {
      for (let n of e.props) if (Array.isArray(n) || (n = n(i)), n) {
        if (n[0].perNode) throw RangeError("Can't store a per-node prop on a node type");
        r[n[0].id] = n[1];
      }
    }
    return i;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (1 & this.flags) > 0;
  }
  get isSkipped() {
    return (2 & this.flags) > 0;
  }
  get isError() {
    return (4 & this.flags) > 0;
  }
  get isAnonymous() {
    return (8 & this.flags) > 0;
  }
  is(e) {
    if ("string" == typeof e) {
      if (this.name == e) return !0;
      let r = this.prop($$h9.group);
      return !!r && r.indexOf(e) > -1;
    }
    return this.id == e;
  }
  static match(e) {
    let r = Object.create(null);
    for (let n in e) for (let i of n.split(" ")) r[i] = e[n];
    return e => {
      for (function () {
        let n = e.prop($$h9.group);
        let i = -1;
      }(); i < (n ? n.length : 0); i++) {
        let s = r[i < 0 ? e.name : n[i]];
        if (s) return s;
      }
    };
  }
}
$$g4.none = new $$g4("", Object.create(null), 0, 8);
export class $$m6 {
  constructor(e) {
    this.types = e;
    for (let r = 0; r < e.length; r++) if (e[r].id != r) throw RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  extend(...e) {
    let r = [];
    for (let n of this.types) {
      let i = null;
      for (let r of e) {
        let e = r(n);
        e && (i || (i = Object.assign({}, n.props)), i[e[0].id] = e[1]);
      }
      r.push(i ? new $$g4(n.name, i, n.id, n.flags) : n);
    }
    return new $$m6(r);
  }
}
let v = new WeakMap();
let y = new WeakMap();
!function (e) {
  e[e.ExcludeBuffers = 1] = "ExcludeBuffers";
  e[e.IncludeAnonymous = 2] = "IncludeAnonymous";
  e[e.IgnoreMounts = 4] = "IgnoreMounts";
  e[e.IgnoreOverlays = 8] = "IgnoreOverlays";
}($$i2 || ($$i2 = {}));
export class $$b1 {
  constructor(e, r, n, i, s) {
    this.type = e;
    this.children = r;
    this.positions = n;
    this.length = i;
    this.props = null;
    if (s && s.length) for (let [e, r] of (this.props = Object.create(null), s)) this.props["number" == typeof e ? e : e.id] = r;
  }
  toString() {
    let e = d.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let r = "";
    for (let e of this.children) {
      let n = e.toString();
      n && (r && (r += ","), r += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (r.length ? "(" + r + ")" : "") : r;
  }
  cursor(e = 0) {
    return new M(this.topNode, e);
  }
  cursorAt(e, r = 0, n = 0) {
    let i = new M(v.get(this) || this.topNode);
    i.moveTo(e, r);
    v.set(this, i._tree);
    return i;
  }
  get topNode() {
    return new S(this, 0, 0, null);
  }
  resolve(e, r = 0) {
    let n = k(v.get(this) || this.topNode, e, r, !1);
    v.set(this, n);
    return n;
  }
  resolveInner(e, r = 0) {
    let n = k(y.get(this) || this.topNode, e, r, !0);
    y.set(this, n);
    return n;
  }
  resolveStack(e, r = 0) {
    return R(this, e, r);
  }
  iterate(e) {
    let {
      enter,
      leave,
      from = 0,
      to = this.length
    } = e;
    let a = e.mode || 0;
    let h = (a & $$i2.IncludeAnonymous) > 0;
    for (let e = this.cursor(a | $$i2.IncludeAnonymous);;) {
      let i = !1;
      if (e.from <= to && e.to >= from && (!h && e.type.isAnonymous || !1 !== enter(e))) {
        if (e.firstChild()) continue;
        i = !0;
      }
      for (; i && leave && (h || !e.type.isAnonymous) && leave(e), !e.nextSibling();) {
        if (!e.parent()) return;
        i = !0;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let r in this.props) e.push([+r, this.props[r]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : j($$g4.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, r, n) => new $$b1(this.type, e, r, n, this.propValues), e.makeTree || ((e, r, n) => new $$b1($$g4.none, e, r, n)));
  }
  static build(e) {
    return N(e);
  }
}
$$b1.empty = new $$b1($$g4.none, [], [], 0);
class O {
  constructor(e, r) {
    this.buffer = e;
    this.index = r;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new O(this.buffer, this.index);
  }
}
class x {
  constructor(e, r, n) {
    this.buffer = e;
    this.length = r;
    this.set = n;
  }
  get type() {
    return $$g4.none;
  }
  toString() {
    let e = [];
    for (let r = 0; r < this.buffer.length;) {
      e.push(this.childString(r));
      r = this.buffer[r + 3];
    }
    return e.join(",");
  }
  childString(e) {
    let r = this.buffer[e];
    let n = this.buffer[e + 3];
    let i = this.set.types[r];
    let s = i.name;
    if (/\W/.test(s) && !i.isError && (s = JSON.stringify(s)), n == (e += 4)) return s;
    let o = [];
    for (; e < n;) {
      o.push(this.childString(e));
      e = this.buffer[e + 3];
    }
    return s + "(" + o.join(",") + ")";
  }
  findChild(e, r, n, i, s) {
    let {
      buffer
    } = this;
    let a = -1;
    for (let h = e; h != r && (!w(s, i, buffer[h + 1], buffer[h + 2]) || (a = h, !(n > 0))); h = buffer[h + 3]);
    return a;
  }
  slice(e, r, n) {
    let i = this.buffer;
    let s = new Uint16Array(r - e);
    let o = 0;
    for (function () {
      let a = e;
      let h = 0;
    }(); a < r;) {
      s[h++] = i[a++];
      s[h++] = i[a++] - n;
      let r = s[h++] = i[a++] - n;
      s[h++] = i[a++] - e;
      o = Math.max(o, r);
    }
    return new x(s, o, this.set);
  }
}
function w(e, r, n, i) {
  switch (e) {
    case -2:
      return n < r;
    case -1:
      return i >= r && n < r;
    case 0:
      return n < r && i > r;
    case 1:
      return n <= r && i > r;
    case 2:
      return i > r;
    case 4:
      return !0;
  }
}
function k(e, r, n, s) {
  for (var o; e.from == e.to || (n < 1 ? e.from >= r : e.from > r) || (n > -1 ? e.to <= r : e.to < r);) {
    let r = !s && e instanceof S && e.index < 0 ? null : e.parent;
    if (!r) return e;
    e = r;
  }
  let a = s ? 0 : $$i2.IgnoreOverlays;
  if (s) for (function () {
    let i = e;
    let s = i.parent;
  }(); s; s = (i = s).parent) i instanceof S && i.index < 0 && s.enter(r, n, a)?.from != i.from && (e = s);
  for (;;) {
    let i = e.enter(r, n, a);
    if (!i) return e;
    e = i;
  }
}
class _ {
  cursor(e = 0) {
    return new M(this, e);
  }
  getChild(e, r = null, n = null) {
    let i = E(this, e, r, n);
    return i.length ? i[0] : null;
  }
  getChildren(e, r = null, n = null) {
    return E(this, e, r, n);
  }
  resolve(e, r = 0) {
    return k(this, e, r, !1);
  }
  resolveInner(e, r = 0) {
    return k(this, e, r, !0);
  }
  matchContext(e) {
    return A(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let r = this.childBefore(e);
    let n = this;
    for (; r;) {
      let e = r.lastChild;
      if (!e || e.to != r.to) break;
      e.type.isError && e.from == e.to ? (n = r, r = e.prevSibling) : r = e;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class S extends _ {
  constructor(e, r, n, i) {
    super();
    this._tree = e;
    this.from = r;
    this.index = n;
    this._parent = i;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, r, n, s, o = 0) {
    for (let a = this;;) {
      for (function () {
        let {
          children,
          positions
        } = a._tree;
        let g = r > 0 ? children.length : -1;
      }(); e != g; e += r) {
        let g = h[e];
        let m = p[e] + a.from;
        if (w(s, n, m, m + g.length)) {
          if (g instanceof x) {
            if (o & $$i2.ExcludeBuffers) continue;
            let h = g.findChild(0, g.buffer.length, r, n - m, s);
            if (h > -1) return new T(new C(a, g, e, m), null, h);
          } else if (o & $$i2.IncludeAnonymous || !g.type.isAnonymous || D(g)) {
            let h;
            if (!(o & $$i2.IgnoreMounts) && (h = d.get(g)) && !h.overlay) return new S(h.tree, m, e, a);
            let p = new S(g, m, e, a);
            return o & $$i2.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(r < 0 ? g.children.length - 1 : 0, r, n, s);
          }
        }
      }
      if (o & $$i2.IncludeAnonymous || !a.type.isAnonymous || (e = a.index >= 0 ? a.index + r : r < 0 ? -1 : a._parent._tree.children.length, !(a = a._parent))) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, r, n = 0) {
    let s;
    if (!(n & $$i2.IgnoreOverlays) && (s = d.get(this._tree)) && s.overlay) {
      let n = e - this.from;
      for (let {
        from,
        to
      } of s.overlay) if ((r > 0 ? from <= n : from < n) && (r < 0 ? to >= n : to > n)) return new S(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, r, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent;) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function E(e, r, n, i) {
  let s = e.cursor();
  let o = [];
  if (!s.firstChild()) return o;
  if (null != n) {
    for (let e = !1; !e;) if (e = s.type.is(n), !s.nextSibling()) return o;
  }
  for (;;) {
    if (null != i && s.type.is(i)) return o;
    if (s.type.is(r) && o.push(s.node), !s.nextSibling()) return null == i ? o : [];
  }
}
function A(e, r, n = r.length - 1) {
  for (let i = e; n >= 0; i = i.parent) {
    if (!i) return !1;
    if (!i.type.isAnonymous) {
      if (r[n] && r[n] != i.name) return !1;
      n--;
    }
  }
  return !0;
}
class C {
  constructor(e, r, n, i) {
    this.parent = e;
    this.buffer = r;
    this.index = n;
    this.start = i;
  }
}
class T extends _ {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, r, n) {
    super();
    this.context = e;
    this._parent = r;
    this.index = n;
    this.type = e.buffer.set.types[e.buffer.buffer[n]];
  }
  child(e, r, n) {
    let {
      buffer
    } = this.context;
    let s = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], e, r - this.context.start, n);
    return s < 0 ? null : new T(this.context, this, s);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, r, n = 0) {
    if (n & $$i2.ExcludeBuffers) return null;
    let {
      buffer
    } = this.context;
    let o = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], r > 0 ? 1 : -1, e - this.context.start, r);
    return o < 0 ? null : new T(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let {
      buffer
    } = this.context;
    let r = buffer.buffer[this.index + 3];
    return r < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length) ? new T(this.context, this._parent, r) : this.externalSibling(1);
  }
  get prevSibling() {
    let {
      buffer
    } = this.context;
    let r = this._parent ? this._parent.index + 4 : 0;
    return this.index == r ? this.externalSibling(-1) : new T(this.context, this._parent, buffer.findChild(r, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [];
    let r = [];
    let {
      buffer
    } = this.context;
    let i = this.index + 4;
    let s = buffer.buffer[this.index + 3];
    if (s > i) {
      let o = buffer.buffer[this.index + 1];
      e.push(buffer.slice(i, s, o));
      r.push(0);
    }
    return new $$b1(this.type, e, r, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function I(e) {
  if (!e.length) return null;
  let r = 0;
  let n = e[0];
  for (let i = 1; i < e.length; i++) {
    let s = e[i];
    (s.from > n.from || s.to < n.to) && (n = s, r = i);
  }
  let i = n instanceof S && n.index < 0 ? null : n.parent;
  let s = e.slice();
  i ? s[r] = i : s.splice(r, 1);
  return new P(s, n);
}
class P {
  constructor(e, r) {
    this.heads = e;
    this.node = r;
  }
  get next() {
    return I(this.heads);
  }
}
function R(e, r, n) {
  let i = e.resolveInner(r, n);
  let s = null;
  for (let e = i instanceof S ? i : i.context.parent; e; e = e.parent) if (e.index < 0) {
    let o = e.parent;
    (s || (s = [i])).push(o.resolve(r, n));
    e = o;
  } else {
    let o = d.get(e.tree);
    if (o && o.overlay && o.overlay[0].from <= r && o.overlay[o.overlay.length - 1].to >= r) {
      let a = new S(o.tree, o.overlay[0].from + e.from, -1, e);
      (s || (s = [i])).push(k(a, r, n, !1));
    }
  }
  return s ? I(s) : i;
}
class M {
  get name() {
    return this.type.name;
  }
  constructor(e, r = 0) {
    this.mode = r;
    this.buffer = null;
    this.stack = [];
    this.index = 0;
    this.bufferNode = null;
    if (e instanceof S) this.yieldNode(e);else {
      this._tree = e.context.parent;
      this.buffer = e.context;
      for (let r = e._parent; r; r = r._parent) this.stack.unshift(r.index);
      this.bufferNode = e;
      this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return !!e && (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0);
  }
  yieldBuf(e, r) {
    this.index = e;
    let {
      start,
      buffer
    } = this.buffer;
    this.type = r || buffer.set.types[buffer.buffer[e]];
    this.from = start + buffer.buffer[e + 1];
    this.to = start + buffer.buffer[e + 2];
    return !0;
  }
  yield(e) {
    return !!e && (e instanceof S ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)));
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, r, n) {
    if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, r, n, this.mode));
    let {
      buffer
    } = this.buffer;
    let s = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], e, r - this.buffer.start, n);
    return !(s < 0) && (this.stack.push(this.index), this.yieldBuf(s));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, r, n = this.mode) {
    return this.buffer ? !(n & $$i2.ExcludeBuffers) && this.enterChild(1, e, r) : this.yield(this._tree.enter(e, r, n));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & $$i2.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e = this.mode & $$i2.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    this.buffer = null;
    return this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode));
    let {
      buffer
    } = this.buffer;
    let n = this.stack.length - 1;
    if (e < 0) {
      let e = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != e) return this.yieldBuf(buffer.findChild(e, this.index, -1, 0, 4));
    } else {
      let e = buffer.buffer[this.index + 3];
      if (e < (n < 0 ? buffer.buffer.length : buffer.buffer[this.stack[n] + 3])) return this.yieldBuf(e);
    }
    return n < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode));
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let r;
    let n;
    let {
      buffer
    } = this;
    if (buffer) {
      if (e > 0) {
        if (this.index < buffer.buffer.buffer.length) return !1;
      } else for (let e = 0; e < this.index; e++) if (buffer.buffer.buffer[e + 3] < this.index) return !1;
      ({
        index: r,
        parent: n
      } = buffer);
    } else ({
      index: r,
      _parent: n
    } = this._tree);
    for (; n; {
      index: r,
      _parent: n
    } = n) if (r > -1) for (function () {
      let s = r + e;
      let o = e < 0 ? -1 : n._tree.children.length;
    }(); s != o; s += e) {
      let e = n._tree.children[s];
      if (this.mode & $$i2.IncludeAnonymous || e instanceof x || !e.type.isAnonymous || D(e)) return !1;
    }
    return !0;
  }
  move(e, r) {
    if (r && this.enterChild(e, 0, 4)) return !0;
    for (;;) {
      if (this.sibling(e)) return !0;
      if (this.atLastNode(e) || !this.parent()) return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, r = 0) {
    for (; (this.from == this.to || (r < 1 ? this.from >= e : this.from > e) || (r > -1 ? this.to <= e : this.to < e)) && this.parent(););
    for (; this.enterChild(1, e, r););
    return this;
  }
  get node() {
    var _this = this;
    if (!this.buffer) return this._tree;
    let e = this.bufferNode;
    let r = null;
    let n = 0;
    if (e && e.context == this.buffer) a: for (function () {
      let i = _this.index;
      let s = _this.stack.length;
    }(); s >= 0;) {
      for (let o = e; o; o = o._parent) if (o.index == i) {
        if (i == this.index) return o;
        r = o;
        n = s + 1;
        break a;
      }
      i = this.stack[--s];
    }
    for (let e = n; e < this.stack.length; e++) r = new T(this.buffer, r, this.stack[e]);
    return this.bufferNode = new T(this.buffer, r, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, r) {
    for (let n = 0;;) {
      let i = !1;
      if (this.type.isAnonymous || !1 !== e(this)) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (i = !0);
      }
      for (;;) {
        if (i && r && r(this), i = this.type.isAnonymous, !n) return;
        if (this.nextSibling()) break;
        this.parent();
        n--;
        i = !0;
      }
    }
  }
  matchContext(e) {
    var _this2 = this;
    if (!this.buffer) return A(this.node.parent, e);
    let {
      buffer
    } = this.buffer;
    let {
      types
    } = buffer.set;
    for (function () {
      let i = e.length - 1;
      let s = _this2.stack.length - 1;
    }(); i >= 0; s--) {
      if (s < 0) return A(this._tree, e, i);
      let o = types[buffer.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[i] && e[i] != o.name) return !1;
        i--;
      }
    }
    return !0;
  }
}
function D(e) {
  return e.children.some(e => e instanceof x || !e.type.isAnonymous || D(e));
}
function N(e) {
  var r;
  let {
    buffer,
    nodeSet,
    maxBufferLength = $$s5,
    reused = [],
    minRepeatType = nodeSet.types.length
  } = e;
  let p = Array.isArray(buffer) ? new O(buffer, buffer.length) : buffer;
  let g = nodeSet.types;
  let m = 0;
  let v = 0;
  function y(e, r, n, s, h, b) {
    let {
      id,
      start,
      end,
      size
    } = p;
    let P = v;
    let R = m;
    for (; size < 0;) {
      if (p.next(), -1 == size) {
        let r = reused[id];
        n.push(r);
        s.push(start - e);
        return;
      }
      if (-3 == size) {
        m = id;
        return;
      }
      if (-4 == size) {
        v = id;
        return;
      }
      throw RangeError(`Unrecognized record size: ${size}`);
    }
    let M = g[id];
    let D;
    let N;
    let $ = start - e;
    if (end - start <= maxBufferLength && (N = E(p.pos - r, h))) {
      let r = new Uint16Array(N.size - N.skip);
      let n = p.pos - N.size;
      let s = r.length;
      for (; p.pos > n;) s = A(N.start, r, s);
      D = new x(r, end - N.start, nodeSet);
      $ = N.start - e;
    } else {
      let e = p.pos - size;
      p.next();
      let r = [];
      let n = [];
      let i = id >= minRepeatType ? id : -1;
      let s = 0;
      let a = T;
      for (; p.pos > e;) i >= 0 && p.id == i && p.size >= 0 ? (p.end <= a - maxBufferLength && (_(r, n, start, s, p.end, a, i, P, R), s = r.length, a = p.end), p.next()) : b > 2500 ? w(start, e, r, n) : y(start, e, r, n, i, b + 1);
      if (i >= 0 && s > 0 && s < r.length && _(r, n, start, s, start, a, i, P, R), r.reverse(), n.reverse(), i > -1 && s > 0) {
        let e = k(M, R);
        D = j(M, r, n, 0, r.length, 0, end - start, e, e);
      } else D = S(M, r, n, end - start, P - end, R);
    }
    n.push(D);
    s.push($);
  }
  function w(e, r, n, s) {
    let a = [];
    let h = 0;
    let d = -1;
    for (; p.pos > r;) {
      let {
        id,
        start,
        end,
        size
      } = p;
      if (size > 4) p.next();else if (d > -1 && start < d) break;else {
        d < 0 && (d = end - maxBufferLength);
        a.push(id, start, end);
        h++;
        p.next();
      }
    }
    if (h) {
      let r = new Uint16Array(4 * h);
      let o = a[a.length - 2];
      for (function () {
        let e = a.length - 3;
        let n = 0;
      }(); e >= 0; e -= 3) {
        r[n++] = a[e];
        r[n++] = a[e + 1] - o;
        r[n++] = a[e + 2] - o;
        r[n++] = n;
      }
      n.push(new x(r, a[2] - o, nodeSet));
      s.push(o - e);
    }
  }
  function k(e, r) {
    return (n, i, s) => {
      let o = 0;
      let a = n.length - 1;
      let d;
      let p;
      if (a >= 0 && (d = n[a]) instanceof $$b1) {
        if (!a && d.type == e && d.length == s) return d;
        (p = d.prop($$h9.lookAhead)) && (o = i[a] + d.length + p);
      }
      return S(e, n, i, s, o, r);
    };
  }
  function _(e, r, n, s, o, a, h, d, p) {
    let g = [];
    let m = [];
    for (; e.length > s;) {
      g.push(e.pop());
      m.push(r.pop() + n - o);
    }
    e.push(S(nodeSet.types[h], g, m, a - o, d - a, p));
    r.push(o - n);
  }
  function S(e, r, n, i, s, o, a) {
    if (o) {
      let e = [$$h9.contextHash, o];
      a = a ? [e].concat(a) : [e];
    }
    if (s > 25) {
      let e = [$$h9.lookAhead, s];
      a = a ? [e].concat(a) : [e];
    }
    return new $$b1(e, r, n, i, a);
  }
  function E(e, r) {
    let n = p.fork();
    let i = 0;
    let s = 0;
    let a = 0;
    let h = n.end - maxBufferLength;
    let g = {
      size: 0,
      start: 0,
      skip: 0
    };
    a: for (let o = n.pos - e; n.pos > o;) {
      let e = n.size;
      if (n.id == r && e >= 0) {
        g.size = i;
        g.start = s;
        g.skip = a;
        a += 4;
        i += 4;
        n.next();
        continue;
      }
      let p = n.pos - e;
      if (e < 0 || p < o || n.start < h) break;
      let m = n.id >= minRepeatType ? 4 : 0;
      let v = n.start;
      for (n.next(); n.pos > p;) {
        if (n.size < 0) {
          if (-3 == n.size) m += 4;else break a;
        } else n.id >= minRepeatType && (m += 4);
        n.next();
      }
      s = v;
      i += e;
      a += m;
    }
    (r < 0 || i == e) && (g.size = i, g.start = s, g.skip = a);
    return g.size > 4 ? g : void 0;
  }
  function A(e, r, n) {
    let {
      id,
      start,
      end,
      size
    } = p;
    if (p.next(), size >= 0 && id < minRepeatType) {
      let h = n;
      if (size > 4) {
        let i = p.pos - (size - 4);
        for (; p.pos > i;) n = A(e, r, n);
      }
      r[--n] = h;
      r[--n] = end - e;
      r[--n] = start - e;
      r[--n] = id;
    } else -3 == size ? m = id : -4 == size && (v = id);
    return n;
  }
  let C = [];
  let T = [];
  for (; p.pos > 0;) y(e.start || 0, e.bufferStart || 0, C, T, -1, 0);
  let I = null !== (r = e.length) && void 0 !== r ? r : C.length ? T[0] + C[0].length : 0;
  return new $$b1(g[e.topID], C.reverse(), T.reverse(), I);
}
let $ = new WeakMap();
function L(e, r) {
  if (!e.isAnonymous || r instanceof x || r.type != e) return 1;
  let n = $.get(r);
  if (null == n) {
    for (let i of (n = 1, r.children)) {
      if (i.type != e || !(i instanceof $$b1)) {
        n = 1;
        break;
      }
      n += L(e, i);
    }
    $.set(r, n);
  }
  return n;
}
function j(e, r, n, i, s, o, a, h, d) {
  let p = 0;
  for (let n = i; n < s; n++) p += L(e, r[n]);
  let g = Math.ceil(1.5 * p / 8);
  let m = [];
  let v = [];
  function y(r, n, i, s, a) {
    for (let h = i; h < s;) {
      let i = h;
      let p = n[h];
      let b = L(e, r[h]);
      for (h++; h < s; h++) {
        let n = L(e, r[h]);
        if (b + n >= g) break;
        b += n;
      }
      if (h == i + 1) {
        if (b > g) {
          let e = r[i];
          y(e.children, e.positions, 0, e.children.length, n[i] + a);
          continue;
        }
        m.push(r[i]);
      } else {
        let s = n[h - 1] + r[h - 1].length - p;
        m.push(j(e, r, n, i, h, p, s, null, d));
      }
      v.push(p + a - o);
    }
  }
  y(r, n, i, s, 0);
  return (h || d)(m, v, a);
}
export class $$z3 {
  constructor() {
    this.map = new WeakMap();
  }
  setBuffer(e, r, n) {
    let i = this.map.get(e);
    i || this.map.set(e, i = new Map());
    i.set(r, n);
  }
  getBuffer(e, r) {
    let n = this.map.get(e);
    return n && n.get(r);
  }
  set(e, r) {
    e instanceof T ? this.setBuffer(e.context.buffer, e.index, r) : e instanceof S && this.map.set(e.tree, r);
  }
  get(e) {
    return e instanceof T ? this.getBuffer(e.context.buffer, e.index) : e instanceof S ? this.map.get(e.tree) : void 0;
  }
  cursorSet(e, r) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, r) : this.map.set(e.tree, r);
  }
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
export class $$Z8 {
  constructor(e, r, n, i, s = !1, o = !1) {
    this.from = e;
    this.to = r;
    this.tree = n;
    this.offset = i;
    this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (1 & this.open) > 0;
  }
  get openEnd() {
    return (2 & this.open) > 0;
  }
  static addTree(e, r = [], n = !1) {
    let i = [new $$Z8(0, e.length, e, 0, !1, n)];
    for (let n of r) n.to > e.length && i.push(n);
    return i;
  }
  static applyChanges(e, r, n = 128) {
    if (!r.length) return e;
    let i = [];
    let s = 1;
    let o = e.length ? e[0] : null;
    for (function () {
      let a = 0;
      let h = 0;
      let d = 0;
    }();; a++) {
      let p = a < r.length ? r[a] : null;
      let g = p ? p.fromA : 1e9;
      if (g - h >= n) for (; o && o.from < g;) {
        let r = o;
        if (h >= r.from || g <= r.to || d) {
          let e = Math.max(r.from, h) - d;
          let n = Math.min(r.to, g) - d;
          r = e >= n ? null : new $$Z8(e, n, r.tree, r.offset + d, a > 0, !!p);
        }
        if (r && i.push(r), o.to > g) break;
        o = s < e.length ? e[s++] : null;
      }
      if (!p) break;
      h = p.toA;
      d = p.toA - p.toB;
    }
    return i;
  }
}
export class $$F7 {
  startParse(e, r, n) {
    "string" == typeof e && (e = new U(e));
    n = n ? n.length ? n.map(e => new a(e.from, e.to)) : [new a(0, 0)] : [new a(0, e.length)];
    return this.createParse(e, r || [], n);
  }
  parse(e, r, n) {
    let i = this.startParse(e, r, n);
    for (;;) {
      let e = i.advance();
      if (e) return e;
    }
  }
}
class U {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, r) {
    return this.string.slice(e, r);
  }
}
export function $$Q0(e) {
  return (r, n, i, s) => new Y(r, e, n, i, s);
}
class V {
  constructor(e, r, n, i, s) {
    this.parser = e;
    this.parse = r;
    this.overlay = n;
    this.target = i;
    this.from = s;
  }
}
function B(e) {
  if (!e.length || e.some(e => e.from >= e.to)) throw RangeError("Invalid inner parse ranges given: " + JSON.stringify(e));
}
class q {
  constructor(e, r, n, i, s, o, a) {
    this.parser = e;
    this.predicate = r;
    this.mounts = n;
    this.index = i;
    this.start = s;
    this.target = o;
    this.prev = a;
    this.depth = 0;
    this.ranges = [];
  }
}
let W = new $$h9({
  perNode: !0
});
class Y {
  constructor(e, r, n, i, s) {
    this.nest = r;
    this.input = n;
    this.fragments = i;
    this.ranges = s;
    this.inner = [];
    this.innerDone = 0;
    this.baseTree = null;
    this.stoppedAt = null;
    this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let e = this.baseParse.advance();
      if (!e) return null;
      if (this.baseParse = null, this.baseTree = e, this.startInner(), null != this.stoppedAt) for (let e of this.inner) e.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let e = this.baseTree;
      null != this.stoppedAt && (e = new $$b1(e.type, e.children, e.positions, e.length, e.propValues.concat([[W, this.stoppedAt]])));
      return e;
    }
    let e = this.inner[this.innerDone];
    let r = e.parse.advance();
    if (r) {
      this.innerDone++;
      let n = Object.assign(Object.create(null), e.target.props);
      n[$$h9.mounted.id] = new d(r, e.overlay, e.parser);
      e.target.props = n;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse) return 0;
    let e = this.input.length;
    for (let r = this.innerDone; r < this.inner.length; r++) this.inner[r].from < e && (e = Math.min(e, this.inner[r].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse) this.baseParse.stopAt(e);else for (let r = this.innerDone; r < this.inner.length; r++) this.inner[r].parse.stopAt(e);
  }
  startInner() {
    let e = new J(this.fragments);
    let r = null;
    let n = null;
    let s = new M(new S(this.baseTree, this.ranges[0].from, 0, null), $$i2.IncludeAnonymous | $$i2.IgnoreMounts);
    a: for (function () {
      let i;
      let o;
    }();;) {
      let h = !0;
      let d;
      if (null != this.stoppedAt && s.from >= this.stoppedAt) h = !1;else if (e.hasNode(s)) {
        if (r) {
          let e = r.mounts.find(e => e.frag.from <= s.from && e.frag.to >= s.to && e.mount.overlay);
          if (e) for (let n of e.mount.overlay) {
            let i = n.from + e.pos;
            let o = n.to + e.pos;
            i >= s.from && o <= s.to && !r.ranges.some(e => e.from < o && e.to > i) && r.ranges.push({
              from: i,
              to: o
            });
          }
        }
        h = !1;
      } else if (n && (o = G(n.ranges, s.from, s.to))) h = 2 != o;else if (!s.type.isAnonymous && (i = this.nest(s, this.input)) && (s.from < s.to || !i.overlay)) {
        s.tree || H(s);
        let o = e.findMounts(s.from, i.parser);
        if ("function" == typeof i.overlay) r = new q(i.parser, i.overlay, o, this.inner.length, s.from, s.tree, r);else {
          let e = ee(this.ranges, i.overlay || (s.from < s.to ? [new a(s.from, s.to)] : []));
          e.length && B(e);
          (e.length || !i.overlay) && this.inner.push(new V(i.parser, e.length ? i.parser.startParse(this.input, er(o, e), e) : i.parser.startParse(""), i.overlay ? i.overlay.map(e => new a(e.from - s.from, e.to - s.from)) : null, s.tree, e.length ? e[0].from : s.from));
          i.overlay ? e.length && (n = {
            ranges: e,
            depth: 0,
            prev: n
          }) : h = !1;
        }
      } else if (r && (d = r.predicate(s)) && (!0 === d && (d = new a(s.from, s.to)), d.from < d.to)) {
        let e = r.ranges.length - 1;
        e >= 0 && r.ranges[e].to == d.from ? r.ranges[e] = {
          from: r.ranges[e].from,
          to: d.to
        } : r.ranges.push(d);
      }
      if (h && s.firstChild()) {
        r && r.depth++;
        n && n.depth++;
      } else for (; !s.nextSibling();) {
        if (!s.parent()) break a;
        if (r && ! --r.depth) {
          let e = ee(this.ranges, r.ranges);
          e.length && (B(e), this.inner.splice(r.index, 0, new V(r.parser, r.parser.startParse(this.input, er(r.mounts, e), e), r.ranges.map(e => new a(e.from - r.start, e.to - r.start)), r.target, e[0].from)));
          r = r.prev;
        }
        !n || --n.depth || (n = n.prev);
      }
    }
  }
}
function G(e, r, n) {
  for (let i of e) {
    if (i.from >= n) break;
    if (i.to > r) return i.from <= r && i.to >= n ? 2 : 1;
  }
  return 0;
}
function X(e, r, n, i, s, o) {
  if (r < n) {
    let a = e.buffer[r + 1];
    i.push(e.slice(r, n, a));
    s.push(a - o);
  }
}
function H(e) {
  let {
    node
  } = e;
  let n = [];
  let i = node.context.buffer;
  do {
    n.push(e.index);
    e.parent();
  } while (!e.tree);
  let s = e.tree;
  let o = s.children.indexOf(i);
  let a = s.children[o];
  let h = a.buffer;
  let d = [o];
  function p(e, i, s, o, g, m) {
    let v = n[m];
    let y = [];
    let O = [];
    X(a, e, v, y, O, o);
    let x = h[v + 1];
    let w = h[v + 2];
    d.push(y.length);
    let k = m ? p(v + 4, h[v + 3], a.set.types[h[v]], x, w - x, m - 1) : node.toTree();
    y.push(k);
    O.push(x - o);
    X(a, h[v + 3], i, y, O, o);
    return new $$b1(s, y, O, g);
  }
  for (let r of (s.children[o] = p(0, h.length, $$g4.none, 0, a.length, n.length - 1), d)) {
    let n = e.tree.children[r];
    let i = e.tree.positions[r];
    e.yield(new S(n, i + e.from, r, e._tree));
  }
}
class K {
  constructor(e, r) {
    this.offset = r;
    this.done = !1;
    this.cursor = e.cursor($$i2.IncludeAnonymous | $$i2.IgnoreMounts);
  }
  moveTo(e) {
    let {
      cursor
    } = this;
    let n = e - this.offset;
    for (; !this.done && cursor.from < n;) cursor.to >= e && cursor.enter(n, 1, $$i2.IgnoreOverlays | $$i2.ExcludeBuffers) || cursor.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree) for (let r = this.cursor.tree;;) {
      if (r == e.tree) return !0;
      if (r.children.length && 0 == r.positions[0] && r.children[0] instanceof $$b1) r = r.children[0];else break;
    }
    return !1;
  }
}
class J {
  constructor(e) {
    this.fragments = e;
    this.curTo = 0;
    this.fragI = 0;
    var r;
    if (e.length) {
      let n = this.curFrag = e[0];
      this.curTo = null !== (r = n.tree.prop(W)) && void 0 !== r ? r : n.to;
      this.inner = new K(n.tree, -n.offset);
    } else this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo;) this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length) this.curFrag = this.inner = null;else {
      let r = this.curFrag = this.fragments[this.fragI];
      this.curTo = null !== (e = r.tree.prop(W)) && void 0 !== e ? e : r.to;
      this.inner = new K(r.tree, -r.offset);
    }
  }
  findMounts(e, r) {
    var n;
    let i = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let e = this.inner.cursor.node; e; e = e.parent) {
        let s = e.tree?.prop($$h9.mounted);
        if (s && s.parser == r) for (let r = this.fragI; r < this.fragments.length; r++) {
          let n = this.fragments[r];
          if (n.from >= e.to) break;
          n.tree == this.curFrag.tree && i.push({
            frag: n,
            pos: e.from - n.offset,
            mount: s
          });
        }
      }
    }
    return i;
  }
}
function ee(e, r) {
  let n = null;
  let i = r;
  for (function () {
    let s = 1;
    let o = 0;
  }(); s < e.length; s++) {
    let h = e[s - 1].to;
    let d = e[s].from;
    for (; o < i.length; o++) {
      let e = i[o];
      if (e.from >= d) break;
      !(e.to <= h) && (n || (i = n = r.slice()), e.from < h ? (n[o] = new a(e.from, h), e.to > d && n.splice(o + 1, 0, new a(d, e.to))) : e.to > d ? n[o--] = new a(d, e.to) : n.splice(o--, 1));
    }
  }
  return i;
}
function et(e, r, n, i) {
  let s = 0;
  let o = 0;
  let h = !1;
  let d = !1;
  let p = -1e9;
  let g = [];
  for (;;) {
    let m = s == e.length ? 1e9 : h ? e[s].to : e[s].from;
    let v = o == r.length ? 1e9 : d ? r[o].to : r[o].from;
    if (h != d) {
      let e = Math.max(p, n);
      let r = Math.min(m, v, i);
      e < r && g.push(new a(e, r));
    }
    if (1e9 == (p = Math.min(m, v))) break;
    m == p && (h ? (h = !1, s++) : h = !0);
    v == p && (d ? (d = !1, o++) : d = !0);
  }
  return g;
}
function er(e, r) {
  let n = [];
  for (let {
    pos,
    mount,
    frag
  } of e) {
    let e = pos + (mount.overlay ? mount.overlay[0].from : 0);
    let h = e + mount.tree.length;
    let d = Math.max(frag.from, e);
    let p = Math.min(frag.to, h);
    if (mount.overlay) {
      let h = et(r, mount.overlay.map(e => new a(e.from + pos, e.to + pos)), d, p);
      for (function () {
        let r = 0;
        let i = d;
      }();; r++) {
        let a = r == h.length;
        let d = a ? p : h[r].from;
        if (d > i && n.push(new $$Z8(i, d, mount.tree, -e, frag.from >= i || frag.openStart, frag.to <= d || frag.openEnd)), a) break;
        i = h[r].to;
      }
    } else n.push(new $$Z8(d, p, mount.tree, -e, frag.from >= e || frag.openStart, frag.to <= h || frag.openEnd));
  }
  return n;
}
export const $g = $$Q0;
export const PH = $$b1;
export const Qj = $$i2;
export const RY = $$z3;
export const Z6 = $$g4;
export const cF = $$s5;
export const fI = $$m6;
export const iX = $$F7;
export const rr = $$Z8;
export const uY = $$h9;