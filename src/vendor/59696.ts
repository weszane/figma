let i;
let s = [];
let o = [];
function a(e) {
  if (e < 768) return !1;
  for (function () {
    let r = 0;
    let n = s.length;
  }();;) {
    let i = r + n >> 1;
    if (e < s[i]) n = i;else {
      if (!(e >= o[i])) return !0;
      r = i + 1;
    }
    if (r == n) return !1;
  }
}
function h(e) {
  return e >= 127462 && e <= 127487;
}
(() => {
  let e = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e => e ? parseInt(e, 36) : 1);
  for (function () {
    let r = 0;
    let n = 0;
  }(); r < e.length; r++) (r % 2 ? o : s).push(n += e[r]);
})();
let d = 8205;
function p(e, r, n = !0, i = !0) {
  return (n ? g : m)(e, r, i);
}
function g(e, r, n) {
  if (r == e.length) return r;
  r && y(e.charCodeAt(r)) && b(e.charCodeAt(r - 1)) && r--;
  let i = v(e, r);
  for (r += O(i); r < e.length;) {
    let s = v(e, r);
    if (i == d || s == d || n && a(s)) {
      r += O(s);
      i = s;
    } else if (h(s)) {
      let n = 0;
      let i = r - 2;
      for (; i >= 0 && h(v(e, i));) {
        n++;
        i -= 2;
      }
      if (n % 2 == 0) break;
      r += 2;
    } else break;
  }
  return r;
}
function m(e, r, n) {
  for (; r > 0;) {
    let i = g(e, r - 2, n);
    if (i < r) return i;
    r--;
  }
  return 0;
}
function v(e, r) {
  let n = e.charCodeAt(r);
  if (!b(n) || r + 1 == e.length) return n;
  let i = e.charCodeAt(r + 1);
  return y(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function y(e) {
  return e >= 56320 && e < 57344;
}
function b(e) {
  return e >= 55296 && e < 56320;
}
function O(e) {
  return e < 65536 ? 1 : 2;
}
export class $$x14 {
  lineAt(e) {
    if (e < 0 || e > this.length) throw RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines) throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, r, n) {
    [e, r] = P(this, e, r);
    let i = [];
    this.decompose(0, e, i, 2);
    n.length && n.decompose(0, n.length, i, 3);
    this.decompose(r, this.length, i, 1);
    return k.from(i, this.length - (r - e) + n.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, r = this.length) {
    [e, r] = P(this, e, r);
    let n = [];
    this.decompose(e, r, n, 0);
    return k.from(n, r - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let r = this.scanIdentical(e, 1);
    let n = this.length - this.scanIdentical(e, -1);
    let i = new A(this);
    let s = new A(e);
    for (function () {
      let e = r;
      let o = r;
    }();;) {
      if (i.next(e), s.next(e), e = 0, i.lineBreak != s.lineBreak || i.done != s.done || i.value != s.value) return !1;
      if (o += i.value.length, i.done || o >= n) return !0;
    }
  }
  iter(e = 1) {
    return new A(this, e);
  }
  iterRange(e, r = this.length) {
    return new C(this, e, r);
  }
  iterLines(e, r) {
    let n;
    if (null == e) n = this.iter();else {
      null == r && (r = this.lines + 1);
      let i = this.line(e).from;
      n = this.iterRange(i, Math.max(i, r == this.lines + 1 ? this.length : r <= 1 ? 0 : this.line(r - 1).to));
    }
    return new T(n);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    this.flatten(e);
    return e;
  }
  constructor() {}
  static of(e) {
    if (0 == e.length) throw RangeError("A document must have at least one line");
    return 1 != e.length || e[0] ? e.length <= 32 ? new w(e) : k.from(w.split(e, [])) : $$x14.empty;
  }
}
class w extends $$x14 {
  constructor(e, r = _(e)) {
    super();
    this.text = e;
    this.length = r;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, r, n, i) {
    for (let s = 0;; s++) {
      let o = this.text[s];
      let a = i + o.length;
      if ((r ? n : a) >= e) return new I(i, a, n, o);
      i = a + 1;
      n++;
    }
  }
  decompose(e, r, n, i) {
    let s = e <= 0 && r >= this.length ? this : new w(E(this.text, e, r), Math.min(r, this.length) - Math.max(0, e));
    if (1 & i) {
      let e = n.pop();
      let r = S(s.text, e.text.slice(), 0, s.length);
      if (r.length <= 32) n.push(new w(r, e.length + s.length));else {
        let e = r.length >> 1;
        n.push(new w(r.slice(0, e)), new w(r.slice(e)));
      }
    } else n.push(s);
  }
  replace(e, r, n) {
    if (!(n instanceof w)) return super.replace(e, r, n);
    [e, r] = P(this, e, r);
    let i = S(this.text, S(n.text, E(this.text, 0, e)), r);
    let s = this.length + n.length - (r - e);
    return i.length <= 32 ? new w(i, s) : k.from(w.split(i, []), s);
  }
  sliceString(e, r = this.length, n = "\n") {
    [e, r] = P(this, e, r);
    let i = "";
    for (function () {
      let s = 0;
      let o = 0;
    }(); s <= r && o < this.text.length; o++) {
      let a = this.text[o];
      let h = s + a.length;
      s > e && o && (i += n);
      e < h && r > s && (i += a.slice(Math.max(0, e - s), r - s));
      s = h + 1;
    }
    return i;
  }
  flatten(e) {
    for (let r of this.text) e.push(r);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, r) {
    let n = [];
    let i = -1;
    for (let s of e) {
      n.push(s);
      i += s.length + 1;
      32 == n.length && (r.push(new w(n, i)), n = [], i = -1);
    }
    i > -1 && r.push(new w(n, i));
    return r;
  }
}
class k extends $$x14 {
  constructor(e, r) {
    for (let n of (super(), this.children = e, this.length = r, this.lines = 0, e)) this.lines += n.lines;
  }
  lineInner(e, r, n, i) {
    for (let s = 0;; s++) {
      let o = this.children[s];
      let a = i + o.length;
      let h = n + o.lines - 1;
      if ((r ? h : a) >= e) return o.lineInner(e, r, n, i);
      i = a + 1;
      n = h + 1;
    }
  }
  decompose(e, r, n, i) {
    for (function () {
      let s = 0;
      let o = 0;
    }(); o <= r && s < this.children.length; s++) {
      let a = this.children[s];
      let h = o + a.length;
      if (e <= h && r >= o) {
        let s = i & ((o <= e ? 1 : 0) | (h >= r ? 2 : 0));
        o >= e && h <= r && !s ? n.push(a) : a.decompose(e - o, r - o, n, s);
      }
      o = h + 1;
    }
  }
  replace(e, r, n) {
    if ([e, r] = P(this, e, r), n.lines < this.lines) for (function () {
      let i = 0;
      let s = 0;
    }(); i < this.children.length; i++) {
      let o = this.children[i];
      let a = s + o.length;
      if (e >= s && r <= a) {
        let h = o.replace(e - s, r - s, n);
        let d = this.lines - o.lines + h.lines;
        if (h.lines < d >> 4 && h.lines > d >> 6) {
          let s = this.children.slice();
          s[i] = h;
          return new k(s, this.length - (r - e) + n.length);
        }
        return super.replace(s, a, h);
      }
      s = a + 1;
    }
    return super.replace(e, r, n);
  }
  sliceString(e, r = this.length, n = "\n") {
    [e, r] = P(this, e, r);
    let i = "";
    for (function () {
      let s = 0;
      let o = 0;
    }(); s < this.children.length && o <= r; s++) {
      let a = this.children[s];
      let h = o + a.length;
      o > e && s && (i += n);
      e < h && r > o && (i += a.sliceString(e - o, r - o, n));
      o = h + 1;
    }
    return i;
  }
  flatten(e) {
    for (let r of this.children) r.flatten(e);
  }
  scanIdentical(e, r) {
    if (!(e instanceof k)) return 0;
    let n = 0;
    let [i, s, o, a] = r > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (;; i += r, s += r) {
      if (i == o || s == a) return n;
      let h = this.children[i];
      let d = e.children[s];
      if (h != d) return n + h.scanIdentical(d, r);
      n += h.length + 1;
    }
  }
  static from(e, r = e.reduce((e, r) => e + r.length + 1, -1)) {
    let n = 0;
    for (let r of e) n += r.lines;
    if (n < 32) {
      let n = [];
      for (let r of e) r.flatten(n);
      return new w(n, r);
    }
    let i = Math.max(32, n >> 5);
    let s = i << 1;
    let o = i >> 1;
    let a = [];
    let h = 0;
    let d = -1;
    let p = [];
    function g(e) {
      let r;
      if (e.lines > s && e instanceof k) for (let r of e.children) g(r);else e.lines > o && (h > o || !h) ? (m(), a.push(e)) : e instanceof w && h && (r = p[p.length - 1]) instanceof w && e.lines + r.lines <= 32 ? (h += e.lines, d += e.length + 1, p[p.length - 1] = new w(r.text.concat(e.text), r.length + 1 + e.length)) : (h + e.lines > i && m(), h += e.lines, d += e.length + 1, p.push(e));
    }
    function m() {
      0 != h && (a.push(1 == p.length ? p[0] : k.from(p, d)), d = -1, h = p.length = 0);
    }
    for (let r of e) g(r);
    m();
    return 1 == a.length ? a[0] : new k(a, r);
  }
}
function _(e) {
  let r = -1;
  for (let n of e) r += n.length + 1;
  return r;
}
function S(e, r, n = 0, i = 1e9) {
  for (function () {
    let s = 0;
    let o = 0;
    let a = !0;
  }(); o < e.length && s <= i; o++) {
    let h = e[o];
    let d = s + h.length;
    d >= n && (d > i && (h = h.slice(0, i - s)), s < n && (h = h.slice(n - s)), a ? (r[r.length - 1] += h, a = !1) : r.push(h));
    s = d + 1;
  }
  return r;
}
function E(e, r, n) {
  return S(e, [""], r, n);
}
$$x14.empty = new w([""], 0);
class A {
  constructor(e, r = 1) {
    this.dir = r;
    this.done = !1;
    this.lineBreak = !1;
    this.value = "";
    this.nodes = [e];
    this.offsets = [r > 0 ? 1 : (e instanceof w ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, r) {
    for (this.done = this.lineBreak = !1;;) {
      let n = this.nodes.length - 1;
      let i = this.nodes[n];
      let s = this.offsets[n];
      let o = s >> 1;
      let a = i instanceof w ? i.text.length : i.children.length;
      if (o == (r > 0 ? a : 0)) {
        if (0 == n) {
          this.done = !0;
          this.value = "";
          return this;
        }
        r > 0 && this.offsets[n - 1]++;
        this.nodes.pop();
        this.offsets.pop();
      } else if ((1 & s) == (r > 0 ? 0 : 1)) {
        if (this.offsets[n] += r, 0 == e) {
          this.lineBreak = !0;
          this.value = "\n";
          return this;
        }
        e--;
      } else if (i instanceof w) {
        let s = i.text[o + (r < 0 ? -1 : 0)];
        if (this.offsets[n] += r, s.length > Math.max(0, e)) {
          this.value = 0 == e ? s : r > 0 ? s.slice(e) : s.slice(0, s.length - e);
          return this;
        }
        e -= s.length;
      } else {
        let s = i.children[o + (r < 0 ? -1 : 0)];
        e > s.length ? (e -= s.length, this.offsets[n] += r) : (r < 0 && this.offsets[n]--, this.nodes.push(s), this.offsets.push(r > 0 ? 1 : (s instanceof w ? s.text.length : s.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length);
    return this.nextInner(e, this.dir);
  }
}
class C {
  constructor(e, r, n) {
    this.value = "";
    this.done = !1;
    this.cursor = new A(e, r > n ? -1 : 1);
    this.pos = r > n ? e.length : 0;
    this.from = Math.min(r, n);
    this.to = Math.max(r, n);
  }
  nextInner(e, r) {
    if (r < 0 ? this.pos <= this.from : this.pos >= this.to) {
      this.value = "";
      this.done = !0;
      return this;
    }
    e += Math.max(0, r < 0 ? this.pos - this.to : this.from - this.pos);
    let n = r < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n);
    n -= e;
    let {
      value
    } = this.cursor.next(e);
    this.pos += (value.length + e) * r;
    this.value = value.length <= n ? value : r < 0 ? value.slice(value.length - n) : value.slice(0, n);
    this.done = !this.value;
    return this;
  }
  next(e = 0) {
    e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos));
    return this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && "" != this.value;
  }
}
class T {
  constructor(e) {
    this.inner = e;
    this.afterBreak = !0;
    this.value = "";
    this.done = !1;
  }
  next(e = 0) {
    let {
      done,
      lineBreak,
      value
    } = this.inner.next(e);
    done && this.afterBreak ? (this.value = "", this.afterBreak = !1) : done ? (this.done = !0, this.value = "") : lineBreak ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = value, this.afterBreak = !1);
    return this;
  }
  get lineBreak() {
    return !1;
  }
}
"undefined" != typeof Symbol && ($$x14.prototype[Symbol.iterator] = function () {
  return this.iter();
}, A.prototype[Symbol.iterator] = C.prototype[Symbol.iterator] = T.prototype[Symbol.iterator] = function () {
  return this;
});
class I {
  constructor(e, r, n, i) {
    this.from = e;
    this.to = r;
    this.number = n;
    this.text = i;
  }
  get length() {
    return this.to - this.from;
  }
}
function P(e, r, n) {
  return [r = Math.max(0, Math.min(e.length, r)), Math.max(r, Math.min(e.length, n))];
}
export function $$R20(e, r, n = !0, i = !0) {
  return p(e, r, n, i);
}
function M(e) {
  return e >= 56320 && e < 57344;
}
function D(e) {
  return e >= 55296 && e < 56320;
}
export function $$N16(e, r) {
  let n = e.charCodeAt(r);
  if (!D(n) || r + 1 == e.length) return n;
  let i = e.charCodeAt(r + 1);
  return M(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
export function $$$22(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, (1023 & e) + 56320);
}
export function $$L17(e) {
  return e < 65536 ? 1 : 2;
}
let j = /\r\n?|\n/;
export var $$z7 = function (e) {
  e[e.Simple = 0] = "Simple";
  e[e.TrackDel = 1] = "TrackDel";
  e[e.TrackBefore = 2] = "TrackBefore";
  e[e.TrackAfter = 3] = "TrackAfter";
  return e;
}($$z7 || ($$z7 = {}));
export class $$Z1 {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let r = 0; r < this.sections.length; r += 2) e += this.sections[r];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let r = 0; r < this.sections.length; r += 2) {
      let n = this.sections[r + 1];
      e += n < 0 ? this.sections[r] : n;
    }
    return e;
  }
  get empty() {
    return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (function () {
      let r = 0;
      let n = 0;
      let i = 0;
    }(); r < this.sections.length;) {
      let s = this.sections[r++];
      let o = this.sections[r++];
      o < 0 ? (e(n, i, s), i += s) : i += o;
      n += s;
    }
  }
  iterChangedRanges(e, r = !1) {
    V(this, e, r);
  }
  get invertedDesc() {
    let e = [];
    for (let r = 0; r < this.sections.length;) {
      let n = this.sections[r++];
      let i = this.sections[r++];
      i < 0 ? e.push(n, i) : e.push(i, n);
    }
    return new $$Z1(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : q(this, e);
  }
  mapDesc(e, r = !1) {
    return e.empty ? this : B(this, e, r);
  }
  mapPos(e, r = -1, n = $$z7.Simple) {
    let i = 0;
    let s = 0;
    for (let o = 0; o < this.sections.length;) {
      let a = this.sections[o++];
      let h = this.sections[o++];
      let d = i + a;
      if (h < 0) {
        if (d > e) return s + (e - i);
        s += a;
      } else {
        if (n != $$z7.Simple && d >= e && (n == $$z7.TrackDel && i < e && d > e || n == $$z7.TrackBefore && i < e || n == $$z7.TrackAfter && d > e)) return null;
        if (d > e || d == e && r < 0 && !a) return e == i || r < 0 ? s : s + h;
        s += h;
      }
      i = d;
    }
    if (e > i) throw RangeError(`Position ${e} is out of range for changeset of length ${i}`);
    return s;
  }
  touchesRange(e, r = e) {
    for (function () {
      let n = 0;
      let i = 0;
    }(); n < this.sections.length && i <= r;) {
      let s = this.sections[n++];
      let o = this.sections[n++];
      let a = i + s;
      if (o >= 0 && i <= r && a >= e) return !(i < e) || !(a > r) || "cover";
      i = a;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let r = 0; r < this.sections.length;) {
      let n = this.sections[r++];
      let i = this.sections[r++];
      e += (e ? " " : "") + n + (i >= 0 ? ":" + i : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some(e => "number" != typeof e)) throw RangeError("Invalid JSON representation of ChangeDesc");
    return new $$Z1(e);
  }
  static create(e) {
    return new $$Z1(e);
  }
}
export class $$F2 extends $$Z1 {
  constructor(e, r) {
    super(e);
    this.inserted = r;
  }
  apply(e) {
    if (this.length != e.length) throw RangeError("Applying change set to a document with the wrong length");
    V(this, (r, n, i, s, o) => e = e.replace(i, i + (n - r), o), !1);
    return e;
  }
  mapDesc(e, r = !1) {
    return B(this, e, r, !0);
  }
  invert(e) {
    let r = this.sections.slice();
    let n = [];
    for (function () {
      let i = 0;
      let s = 0;
    }(); i < r.length; i += 2) {
      let o = r[i];
      let a = r[i + 1];
      if (a >= 0) {
        r[i] = a;
        r[i + 1] = o;
        let h = i >> 1;
        for (; n.length < h;) n.push($$x14.empty);
        n.push(o ? e.slice(s, s + o) : $$x14.empty);
      }
      s += o;
    }
    return new $$F2(r, n);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : q(this, e, !0);
  }
  map(e, r = !1) {
    return e.empty ? this : B(this, e, r, !0);
  }
  iterChanges(e, r = !1) {
    V(this, e, r);
  }
  get desc() {
    return $$Z1.create(this.sections);
  }
  filter(e) {
    let r = [];
    let n = [];
    let i = [];
    let s = new W(this);
    s: for (function () {
      let o = 0;
      let a = 0;
    }();;) {
      let h = o == e.length ? 1e9 : e[o++];
      for (; a < h || a == h && 0 == s.len;) {
        if (s.done) break s;
        let e = Math.min(s.len, h - a);
        U(i, e, -1);
        let o = -1 == s.ins ? -1 : 0 == s.off ? s.ins : 0;
        U(r, e, o);
        o > 0 && Q(n, r, s.text);
        s.forward(e);
        a += e;
      }
      let d = e[o++];
      for (; a < d;) {
        if (s.done) break s;
        let e = Math.min(s.len, d - a);
        U(r, e, -1);
        U(i, e, -1 == s.ins ? -1 : 0 == s.off ? s.ins : 0);
        s.forward(e);
        a += e;
      }
    }
    return {
      changes: new $$F2(r, n),
      filtered: $$Z1.create(i)
    };
  }
  toJSON() {
    let e = [];
    for (let r = 0; r < this.sections.length; r += 2) {
      let n = this.sections[r];
      let i = this.sections[r + 1];
      i < 0 ? e.push(n) : 0 == i ? e.push([n]) : e.push([n].concat(this.inserted[r >> 1].toJSON()));
    }
    return e;
  }
  static of(e, r, n) {
    let i = [];
    let s = [];
    let o = 0;
    let a = null;
    function h(e = !1) {
      if (!e && !i.length) return;
      o < r && U(i, r - o, -1);
      let n = new $$F2(i, s);
      a = a ? a.compose(n.map(a)) : n;
      i = [];
      s = [];
      o = 0;
    }
    function d(e) {
      if (Array.isArray(e)) for (let r of e) d(r);else if (e instanceof $$F2) {
        if (e.length != r) throw RangeError(`Mismatched change set length (got ${e.length}, expected ${r})`);
        h();
        a = a ? a.compose(e.map(a)) : e;
      } else {
        let {
          from,
          to = a,
          insert
        } = e;
        if (from > to || from < 0 || to > r) throw RangeError(`Invalid change range ${from} to ${to} (in doc of length ${r})`);
        let g = insert ? "string" == typeof insert ? $$x14.of(insert.split(n || j)) : insert : $$x14.empty;
        let m = g.length;
        if (from == to && 0 == m) return;
        from < o && h();
        from > o && U(i, from - o, -1);
        U(i, to - from, m);
        Q(s, i, g);
        o = to;
      }
    }
    d(e);
    h(!a);
    return a;
  }
  static empty(e) {
    return new $$F2(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw RangeError("Invalid JSON representation of ChangeSet");
    let r = [];
    let n = [];
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if ("number" == typeof s) r.push(s, -1);else if (!Array.isArray(s) || "number" != typeof s[0] || s.some((e, r) => r && "string" != typeof e)) throw RangeError("Invalid JSON representation of ChangeSet");else if (1 == s.length) r.push(s[0], 0);else {
        for (; n.length < i;) n.push($$x14.empty);
        n[i] = $$x14.of(s.slice(1));
        r.push(s[0], n[i].length);
      }
    }
    return new $$F2(r, n);
  }
  static createSet(e, r) {
    return new $$F2(e, r);
  }
}
function U(e, r, n, i = !1) {
  if (0 == r && n <= 0) return;
  let s = e.length - 2;
  s >= 0 && n <= 0 && n == e[s + 1] ? e[s] += r : s >= 0 && 0 == r && 0 == e[s] ? e[s + 1] += n : i ? (e[s] += r, e[s + 1] += n) : e.push(r, n);
}
function Q(e, r, n) {
  if (0 == n.length) return;
  let i = r.length - 2 >> 1;
  if (i < e.length) e[e.length - 1] = e[e.length - 1].append(n);else {
    for (; e.length < i;) e.push($$x14.empty);
    e.push(n);
  }
}
function V(e, r, n) {
  let i = e.inserted;
  for (function () {
    let s = 0;
    let o = 0;
    let a = 0;
  }(); a < e.sections.length;) {
    let h = e.sections[a++];
    let d = e.sections[a++];
    if (d < 0) {
      s += h;
      o += h;
    } else {
      let p = s;
      let g = o;
      let m = $$x14.empty;
      for (; p += h, g += d, d && i && (m = m.append(i[a - 2 >> 1])), !n && a != e.sections.length && !(e.sections[a + 1] < 0);) {
        h = e.sections[a++];
        d = e.sections[a++];
      }
      r(s, p, o, g, m);
      s = p;
      o = g;
    }
  }
}
function B(e, r, n, i = !1) {
  let s = [];
  let o = i ? [] : null;
  let a = new W(e);
  let h = new W(r);
  for (let e = -1;;) {
    if (a.done && h.len || h.done && a.len) throw Error("Mismatched change set lengths");
    if (-1 == a.ins && -1 == h.ins) {
      let e = Math.min(a.len, h.len);
      U(s, e, -1);
      a.forward(e);
      h.forward(e);
    } else if (h.ins >= 0 && (a.ins < 0 || e == a.i || 0 == a.off && (h.len < a.len || h.len == a.len && !n))) {
      let r = h.len;
      for (U(s, h.ins, -1); r;) {
        let n = Math.min(a.len, r);
        a.ins >= 0 && e < a.i && a.len <= n && (U(s, 0, a.ins), o && Q(o, s, a.text), e = a.i);
        a.forward(n);
        r -= n;
      }
      h.next();
    } else if (a.ins >= 0) {
      let r = 0;
      let n = a.len;
      for (; n;) if (-1 == h.ins) {
        let e = Math.min(n, h.len);
        r += e;
        n -= e;
        h.forward(e);
      } else if (0 == h.ins && h.len < n) {
        n -= h.len;
        h.next();
      } else break;
      U(s, r, e < a.i ? a.ins : 0);
      o && e < a.i && Q(o, s, a.text);
      e = a.i;
      a.forward(a.len - n);
    } else if (a.done && h.done) return o ? $$F2.createSet(s, o) : $$Z1.create(s);else throw Error("Mismatched change set lengths");
  }
}
function q(e, r, n = !1) {
  let i = [];
  let s = n ? [] : null;
  let o = new W(e);
  let a = new W(r);
  for (let e = !1;;) {
    if (o.done && a.done) return s ? $$F2.createSet(i, s) : $$Z1.create(i);
    if (0 == o.ins) {
      U(i, o.len, 0, e);
      o.next();
    } else if (0 != a.len || a.done) {
      if (o.done || a.done) throw Error("Mismatched change set lengths");
      {
        let r = Math.min(o.len2, a.len);
        let n = i.length;
        if (-1 == o.ins) {
          let n = -1 == a.ins ? -1 : a.off ? 0 : a.ins;
          U(i, r, n, e);
          s && n && Q(s, i, a.text);
        } else -1 == a.ins ? (U(i, o.off ? 0 : o.len, r, e), s && Q(s, i, o.textBit(r))) : (U(i, o.off ? 0 : o.len, a.off ? 0 : a.ins, e), s && !a.off && Q(s, i, a.text));
        e = (o.ins > r || a.ins >= 0 && a.len > r) && (e || i.length > n);
        o.forward2(r);
        a.forward(r);
      }
    } else {
      U(i, 0, a.ins, e);
      s && Q(s, i, a.text);
      a.next();
    }
  }
}
class W {
  constructor(e) {
    this.set = e;
    this.i = 0;
    this.next();
  }
  next() {
    let {
      sections
    } = this.set;
    this.i < sections.length ? (this.len = sections[this.i++], this.ins = sections[this.i++]) : (this.len = 0, this.ins = -2);
    this.off = 0;
  }
  get done() {
    return -2 == this.ins;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let {
      inserted
    } = this.set;
    let r = this.i - 2 >> 1;
    return r >= inserted.length ? $$x14.empty : inserted[r];
  }
  textBit(e) {
    let {
      inserted
    } = this.set;
    let n = this.i - 2 >> 1;
    return n >= inserted.length && !e ? $$x14.empty : inserted[n].slice(this.off, null == e ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    -1 == this.ins ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Y {
  constructor(e, r, n) {
    this.from = e;
    this.to = r;
    this.flags = n;
  }
  get anchor() {
    return 32 & this.flags ? this.to : this.from;
  }
  get head() {
    return 32 & this.flags ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0;
  }
  get bidiLevel() {
    let e = 7 & this.flags;
    return 7 == e ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return 0xffffff == e ? void 0 : e;
  }
  map(e, r = -1) {
    let n;
    let i;
    this.empty ? n = i = e.mapPos(this.from, r) : (n = e.mapPos(this.from, 1), i = e.mapPos(this.to, -1));
    return n == this.from && i == this.to ? this : new Y(n, i, this.flags);
  }
  extend(e, r = e) {
    if (e <= this.anchor && r >= this.anchor) return $$G4.range(e, r);
    let n = Math.abs(e - this.anchor) > Math.abs(r - this.anchor) ? e : r;
    return $$G4.range(this.anchor, n);
  }
  eq(e, r = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!r || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return {
      anchor: this.anchor,
      head: this.head
    };
  }
  static fromJSON(e) {
    if (!e || "number" != typeof e.anchor || "number" != typeof e.head) throw RangeError("Invalid JSON representation for SelectionRange");
    return $$G4.range(e.anchor, e.head);
  }
  static create(e, r, n) {
    return new Y(e, r, n);
  }
}
export class $$G4 {
  constructor(e, r) {
    this.ranges = e;
    this.mainIndex = r;
  }
  map(e, r = -1) {
    return e.empty ? this : $$G4.create(this.ranges.map(n => n.map(e, r)), this.mainIndex);
  }
  eq(e, r = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
    for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(e.ranges[n], r)) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return 1 == this.ranges.length ? this : new $$G4([this.main], 0);
  }
  addRange(e, r = !0) {
    return $$G4.create([e].concat(this.ranges), r ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, r = this.mainIndex) {
    let n = this.ranges.slice();
    n[r] = e;
    return $$G4.create(n, this.mainIndex);
  }
  toJSON() {
    return {
      ranges: this.ranges.map(e => e.toJSON()),
      main: this.mainIndex
    };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || "number" != typeof e.main || e.main >= e.ranges.length) throw RangeError("Invalid JSON representation for EditorSelection");
    return new $$G4(e.ranges.map(e => Y.fromJSON(e)), e.main);
  }
  static single(e, r = e) {
    return new $$G4([$$G4.range(e, r)], 0);
  }
  static create(e, r = 0) {
    if (0 == e.length) throw RangeError("A selection needs at least one range");
    for (function () {
      let n = 0;
      let i = 0;
    }(); i < e.length; i++) {
      let s = e[i];
      if (s.empty ? s.from <= n : s.from < n) return $$G4.normalized(e.slice(), r);
      n = s.to;
    }
    return new $$G4(e, r);
  }
  static cursor(e, r = 0, n, i) {
    return Y.create(e, e, (0 == r ? 0 : r < 0 ? 8 : 16) | (null == n ? 7 : Math.min(6, n)) | (null != i ? i : 0xffffff) << 6);
  }
  static range(e, r, n, i) {
    let s = (null != n ? n : 0xffffff) << 6 | (null == i ? 7 : Math.min(6, i));
    return r < e ? Y.create(r, e, 48 | s) : Y.create(e, r, (r > e ? 8 : 0) | s);
  }
  static normalized(e, r = 0) {
    let n = e[r];
    e.sort((e, r) => e.from - r.from);
    r = e.indexOf(n);
    for (let n = 1; n < e.length; n++) {
      let i = e[n];
      let s = e[n - 1];
      if (i.empty ? i.from <= s.to : i.from < s.to) {
        let o = s.from;
        let a = Math.max(i.to, s.to);
        n <= r && r--;
        e.splice(--n, 2, i.anchor > i.head ? $$G4.range(a, o) : $$G4.range(o, a));
      }
    }
    return new $$G4(e, r);
  }
}
function X(e, r) {
  for (let n of e.ranges) if (n.to > r) throw RangeError("Selection points outside of document");
}
let H = 0;
export class $$K6 {
  constructor(e, r, n, i, s) {
    this.combine = e;
    this.compareInput = r;
    this.compare = n;
    this.isStatic = i;
    this.id = H++;
    this.$$default = e([]);
    this.extensions = "function" == typeof s ? s(this) : s;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new $$K6(e.combine || (e => e), e.compareInput || ((e, r) => e === r), e.compare || (e.combine ? (e, r) => e === r : J), !!e.$$static, e.enables);
  }
  of(e) {
    return new ee([], this, 0, e);
  }
  compute(e, r) {
    if (this.isStatic) throw Error("Can't compute a static facet");
    return new ee(e, this, 1, r);
  }
  computeN(e, r) {
    if (this.isStatic) throw Error("Can't compute a static facet");
    return new ee(e, this, 2, r);
  }
  from(e, r) {
    r || (r = e => e);
    return this.compute([e], n => r(n.field(e)));
  }
}
function J(e, r) {
  return e == r || e.length == r.length && e.every((e, n) => e === r[n]);
}
class ee {
  constructor(e, r, n, i) {
    this.dependencies = e;
    this.facet = r;
    this.type = n;
    this.value = i;
    this.id = H++;
  }
  dynamicSlot(e) {
    var r;
    let n = this.value;
    let i = this.facet.compareInput;
    let s = this.id;
    let o = e[s] >> 1;
    let a = 2 == this.type;
    let h = !1;
    let d = !1;
    let p = [];
    for (let n of this.dependencies) "doc" == n ? h = !0 : "selection" == n ? d = !0 : ((null !== (r = e[n.id]) && void 0 !== r ? r : 1) & 1) == 0 && p.push(e[n.id]);
    return {
      create: e => (e.values[o] = n(e), 1),
      update(e, r) {
        if (h && r.docChanged || d && (r.docChanged || r.selection) || er(e, p)) {
          let r = n(e);
          if (a ? !et(r, e.values[o], i) : !i(r, e.values[o])) {
            e.values[o] = r;
            return 1;
          }
        }
        return 0;
      },
      reconfigure: (e, r) => {
        let h;
        let d = r.config.address[s];
        if (null != d) {
          let s = eg(r, d);
          if (this.dependencies.every(n => n instanceof $$K6 ? r.facet(n) === e.facet(n) : !(n instanceof $$es13) || r.field(n, !1) == e.field(n, !1)) || (a ? et(h = n(e), s, i) : i(h = n(e), s))) {
            e.values[o] = s;
            return 0;
          }
        } else h = n(e);
        e.values[o] = h;
        return 1;
      }
    };
  }
}
function et(e, r, n) {
  if (e.length != r.length) return !1;
  for (let i = 0; i < e.length; i++) if (!n(e[i], r[i])) return !1;
  return !0;
}
function er(e, r) {
  let n = !1;
  for (let i of r) 1 & ep(e, i) && (n = !0);
  return n;
}
function en(e, r, n) {
  let i = n.map(r => e[r.id]);
  let s = n.map(e => e.type);
  let o = i.filter(e => !(1 & e));
  let a = e[r.id] >> 1;
  function h(e) {
    let n = [];
    for (let r = 0; r < i.length; r++) {
      let o = eg(e, i[r]);
      if (2 == s[r]) for (let e of o) n.push(e);else n.push(o);
    }
    return r.combine(n);
  }
  return {
    create(e) {
      for (let r of i) ep(e, r);
      e.values[a] = h(e);
      return 1;
    },
    update(e, n) {
      if (!er(e, o)) return 0;
      let i = h(e);
      return r.compare(i, e.values[a]) ? 0 : (e.values[a] = i, 1);
    },
    reconfigure(e, s) {
      let o = er(e, i);
      let d = s.config.facets[r.id];
      let p = s.facet(r);
      if (d && !o && J(n, d)) {
        e.values[a] = p;
        return 0;
      }
      let g = h(e);
      return r.compare(g, p) ? (e.values[a] = p, 0) : (e.values[a] = g, 1);
    }
  };
}
let ei = $$K6.define({
  static: !0
});
export class $$es13 {
  constructor(e, r, n, i, s) {
    this.id = e;
    this.createF = r;
    this.updateF = n;
    this.compareF = i;
    this.spec = s;
    this.provides = void 0;
  }
  static define(e) {
    let r = new $$es13(H++, e.create, e.update, e.compare || ((e, r) => e === r), e);
    e.provide && (r.provides = e.provide(r));
    return r;
  }
  create(e) {
    let r = e.facet(ei).find(e => e.field == this);
    return (r?.create || this.createF)(e);
  }
  slot(e) {
    let r = e[this.id] >> 1;
    return {
      create: e => (e.values[r] = this.create(e), 1),
      update: (e, n) => {
        let i = e.values[r];
        let s = this.updateF(i, n);
        return this.compareF(i, s) ? 0 : (e.values[r] = s, 1);
      },
      reconfigure: (e, n) => {
        let i = e.facet(ei);
        let s = n.facet(ei);
        let o;
        return (o = i.find(e => e.field == this)) && o != s.find(e => e.field == this) ? (e.values[r] = o.create(e), 1) : null != n.config.address[this.id] ? (e.values[r] = n.field(this), 0) : (e.values[r] = this.create(e), 1);
      }
    };
  }
  init(e) {
    return [this, ei.of({
      field: this,
      create: e
    })];
  }
  get extension() {
    return this;
  }
}
let eo = {
  lowest: 4,
  low: 3,
  default: 2,
  high: 1,
  highest: 0
};
function ea(e) {
  return r => new eu(r, e);
}
export let $$el8 = {
  highest: ea(eo.highest),
  high: ea(eo.high),
  default: ea(eo.$$default),
  low: ea(eo.low),
  lowest: ea(eo.lowest)
};
class eu {
  constructor(e, r) {
    this.inner = e;
    this.prec = r;
  }
}
class ec {
  of(e) {
    return new eh(this, e);
  }
  reconfigure(e) {
    return ec.reconfigure.of({
      compartment: this,
      extension: e
    });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class eh {
  constructor(e, r) {
    this.compartment = e;
    this.inner = r;
  }
}
class ed {
  constructor(e, r, n, i, s, o) {
    for (this.base = e, this.compartments = r, this.dynamicSlots = n, this.address = i, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length;) this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let r = this.address[e.id];
    return null == r ? e.$$default : this.staticValues[r >> 1];
  }
  static resolve(e, r, n) {
    let i = [];
    let s = Object.create(null);
    let o = new Map();
    for (let n of ef(e, r, o)) n instanceof $$es13 ? i.push(n) : (s[n.facet.id] || (s[n.facet.id] = [])).push(n);
    let a = Object.create(null);
    let h = [];
    let d = [];
    for (let e of i) {
      a[e.id] = d.length << 1;
      d.push(r => e.slot(r));
    }
    let p = n?.config.facets;
    for (let e in s) {
      let r = s[e];
      let i = r[0].facet;
      let o = p && p[e] || [];
      if (r.every(e => 0 == e.type)) {
        if (a[i.id] = h.length << 1 | 1, J(o, r)) h.push(n.facet(i));else {
          let e = i.combine(r.map(e => e.value));
          h.push(n && i.compare(e, n.facet(i)) ? n.facet(i) : e);
        }
      } else {
        for (let e of r) 0 == e.type ? (a[e.id] = h.length << 1 | 1, h.push(e.value)) : (a[e.id] = d.length << 1, d.push(r => e.dynamicSlot(r)));
        a[i.id] = d.length << 1;
        d.push(e => en(e, i, r));
      }
    }
    return new ed(e, o, d.map(e => e(a)), a, h, s);
  }
}
function ef(e, r, n) {
  let i = [[], [], [], [], []];
  let s = new Map();
  function o(e, a) {
    let h = s.get(e);
    if (null != h) {
      if (h <= a) return;
      let r = i[h].indexOf(e);
      r > -1 && i[h].splice(r, 1);
      e instanceof eh && n.$$delete(e.compartment);
    }
    if (s.set(e, a), Array.isArray(e)) for (let r of e) o(r, a);else if (e instanceof eh) {
      if (n.has(e.compartment)) throw RangeError("Duplicate use of compartment in extensions");
      let i = r.get(e.compartment) || e.inner;
      n.set(e.compartment, i);
      o(i, a);
    } else if (e instanceof eu) o(e.inner, e.prec);else if (e instanceof $$es13) {
      i[a].push(e);
      e.provides && o(e.provides, a);
    } else if (e instanceof ee) {
      i[a].push(e);
      e.facet.extensions && o(e.facet.extensions, eo.$$default);
    } else {
      let r = e.extension;
      if (!r) throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(r, a);
    }
  }
  o(e, eo.$$default);
  return i.reduce((e, r) => e.concat(r));
}
function ep(e, r) {
  if (1 & r) return 2;
  let n = r >> 1;
  let i = e.status[n];
  if (4 == i) throw Error("Cyclic dependency between fields and/or facets");
  if (2 & i) return i;
  e.status[n] = 4;
  let s = e.computeSlot(e, e.config.dynamicSlots[n]);
  return e.status[n] = 2 | s;
}
function eg(e, r) {
  return 1 & r ? e.config.staticValues[r >> 1] : e.values[r >> 1];
}
let em = $$K6.define();
let ev = $$K6.define({
  combine: e => e.some(e => e),
  static: !0
});
let ey = $$K6.define({
  combine: e => e.length ? e[0] : void 0,
  static: !0
});
let eb = $$K6.define();
let eO = $$K6.define();
let ex = $$K6.define();
let ew = $$K6.define({
  combine: e => !!e.length && e[0]
});
export class $$ek0 {
  constructor(e, r) {
    this.type = e;
    this.value = r;
  }
  static define() {
    return new e_();
  }
}
class e_ {
  of(e) {
    return new $$ek0(this, e);
  }
}
class eS {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new $$eE12(this, e);
  }
}
export class $$eE12 {
  constructor(e, r) {
    this.type = e;
    this.value = r;
  }
  map(e) {
    let r = this.type.map(this.value, e);
    return void 0 === r ? void 0 : r == this.value ? this : new $$eE12(this.type, r);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new eS(e.map || (e => e));
  }
  static mapEffects(e, r) {
    if (!e.length) return e;
    let n = [];
    for (let i of e) {
      let e = i.map(r);
      e && n.push(e);
    }
    return n;
  }
}
$$eE12.reconfigure = $$eE12.define();
$$eE12.appendConfig = $$eE12.define();
export class $$eA15 {
  constructor(e, r, n, i, s, o) {
    this.startState = e;
    this.changes = r;
    this.selection = n;
    this.effects = i;
    this.annotations = s;
    this.scrollIntoView = o;
    this._doc = null;
    this._state = null;
    n && X(n, r.newLength);
    s.some(e => e.type == $$eA15.time) || (this.annotations = s.concat($$eA15.time.of(Date.now())));
  }
  static create(e, r, n, i, s, o) {
    return new $$eA15(e, r, n, i, s, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    this._state || this.startState.applyTransaction(this);
    return this._state;
  }
  annotation(e) {
    for (let r of this.annotations) if (r.type == e) return r.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let r = this.annotation($$eA15.userEvent);
    return !!(r && (r == e || r.length > e.length && r.slice(0, e.length) == e && "." == r[e.length]));
  }
}
function eC(e, r) {
  let n = [];
  for (function () {
    let i = 0;
    let s = 0;
  }();;) {
    let o;
    let a;
    if (i < e.length && (s == r.length || r[s] >= e[i])) {
      o = e[i++];
      a = e[i++];
    } else {
      if (!(s < r.length)) return n;
      o = r[s++];
      a = r[s++];
    }
    !n.length || n[n.length - 1] < o ? n.push(o, a) : n[n.length - 1] < a && (n[n.length - 1] = a);
  }
}
function eT(e, r, n) {
  var i;
  let s;
  let o;
  let a;
  n ? (s = r.changes, o = $$F2.empty(r.changes.length), a = e.changes.compose(r.changes)) : (s = r.changes.map(e.changes), o = e.changes.mapDesc(r.changes, !0), a = e.changes.compose(s));
  return {
    changes: a,
    selection: r.selection ? r.selection.map(o) : e.selection?.map(s),
    effects: $$eE12.mapEffects(e.effects, s).concat($$eE12.mapEffects(r.effects, o)),
    annotations: e.annotations.length ? e.annotations.concat(r.annotations) : r.annotations,
    scrollIntoView: e.scrollIntoView || r.scrollIntoView
  };
}
function eI(e, r, n) {
  let i = r.selection;
  let s = eN(r.annotations);
  r.userEvent && (s = s.concat($$eA15.userEvent.of(r.userEvent)));
  return {
    changes: r.changes instanceof $$F2 ? r.changes : $$F2.of(r.changes || [], n, e.facet(ey)),
    selection: i && (i instanceof $$G4 ? i : $$G4.single(i.anchor, i.head)),
    effects: eN(r.effects),
    annotations: s,
    scrollIntoView: !!r.scrollIntoView
  };
}
function eP(e, r, n) {
  let i = eI(e, r.length ? r[0] : {}, e.doc.length);
  r.length && !1 === r[0].filter && (n = !1);
  for (let s = 1; s < r.length; s++) {
    !1 === r[s].filter && (n = !1);
    let o = !!r[s].sequential;
    i = eT(i, eI(e, r[s], o ? i.changes.newLength : e.doc.length), o);
  }
  let s = $$eA15.create(e, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return eM(n ? eR(s) : s);
}
function eR(e) {
  let r = e.startState;
  let n = !0;
  for (let i of r.facet(eb)) {
    let r = i(e);
    if (!1 === r) {
      n = !1;
      break;
    }
    Array.isArray(r) && (n = !0 === n ? r : eC(n, r));
  }
  if (!0 !== n) {
    let i;
    let s;
    if (!1 === n) {
      s = e.changes.invertedDesc;
      i = $$F2.empty(r.doc.length);
    } else {
      let r = e.changes.filter(n);
      i = r.changes;
      s = r.filtered.mapDesc(r.changes).invertedDesc;
    }
    e = $$eA15.create(r, i, e.selection && e.selection.map(s), $$eE12.mapEffects(e.effects, s), e.annotations, e.scrollIntoView);
  }
  let i = r.facet(eO);
  for (let n = i.length - 1; n >= 0; n--) {
    let s = i[n](e);
    e = s instanceof $$eA15 ? s : Array.isArray(s) && 1 == s.length && s[0] instanceof $$eA15 ? s[0] : eP(r, eN(s), !1);
  }
  return e;
}
function eM(e) {
  let r = e.startState;
  let n = r.facet(ex);
  let i = e;
  for (let s = n.length - 1; s >= 0; s--) {
    let o = n[s](e);
    o && Object.keys(o).length && (i = eT(i, eI(r, o, e.changes.newLength), !0));
  }
  return i == e ? e : $$eA15.create(r, e.changes, e.selection, i.effects, i.annotations, i.scrollIntoView);
}
$$eA15.time = $$ek0.define();
$$eA15.userEvent = $$ek0.define();
$$eA15.addToHistory = $$ek0.define();
$$eA15.remote = $$ek0.define();
let eD = [];
function eN(e) {
  return null == e ? eD : Array.isArray(e) ? e : [e];
}
export var $$e$3 = function (e) {
  e[e.Word = 0] = "Word";
  e[e.Space = 1] = "Space";
  e[e.Other = 2] = "Other";
  return e;
}($$e$3 || ($$e$3 = {}));
let eL = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
try {
  i = RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch (e) {}
function ej(e) {
  if (i) return i.test(e);
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (/\w/.test(n) || n > "\x80" && (n.toUpperCase() != n.toLowerCase() || eL.test(n))) return !0;
  }
  return !1;
}
function ez(e) {
  return r => {
    if (!/\S/.test(r)) return $$e$3.Space;
    if (ej(r)) return $$e$3.Word;
    for (let n = 0; n < e.length; n++) if (r.indexOf(e[n]) > -1) return $$e$3.Word;
    return $$e$3.Other;
  };
}
export class $$eZ5 {
  constructor(e, r, n, i, s, o) {
    this.config = e;
    this.doc = r;
    this.selection = n;
    this.values = i;
    this.status = e.statusTemplate.slice();
    this.computeSlot = s;
    o && (o._state = this);
    for (let e = 0; e < this.config.dynamicSlots.length; e++) ep(this, e << 1);
    this.computeSlot = null;
  }
  field(e, r = !0) {
    let n = this.config.address[e.id];
    if (null == n) {
      if (r) throw RangeError("Field is not present in this state");
      return;
    }
    ep(this, n);
    return eg(this, n);
  }
  update(...e) {
    return eP(this, e, !0);
  }
  applyTransaction(e) {
    let r;
    let n = this.config;
    let {
      base,
      compartments
    } = n;
    for (let r of e.effects) r.is(ec.reconfigure) ? (n && (s = new Map(), n.compartments.forEach((e, r) => compartments.set(r, e)), n = null), compartments.set(r.value.compartment, r.value.extension)) : r.is($$eE12.reconfigure) ? (n = null, i = r.value) : r.is($$eE12.appendConfig) && (n = null, i = eN(base).concat(r.value));
    r = n ? e.startState.values.slice() : new $$eZ5(n = ed.resolve(base, compartments, this), this.doc, this.selection, n.dynamicSlots.map(() => null), (e, r) => r.reconfigure(e, this), null).values;
    let o = e.startState.facet(ev) ? e.newSelection : e.newSelection.asSingle();
    new $$eZ5(n, e.newDoc, o, r, (r, n) => n.update(r, e), e);
  }
  replaceSelection(e) {
    "string" == typeof e && (e = this.toText(e));
    return this.changeByRange(r => ({
      changes: {
        from: r.from,
        to: r.to,
        insert: e
      },
      range: $$G4.cursor(r.from + e.length)
    }));
  }
  changeByRange(e) {
    let r = this.selection;
    let n = e(r.ranges[0]);
    let i = this.changes(n.changes);
    let s = [n.range];
    let o = eN(n.effects);
    for (let n = 1; n < r.ranges.length; n++) {
      let a = e(r.ranges[n]);
      let h = this.changes(a.changes);
      let d = h.map(i);
      for (let e = 0; e < n; e++) s[e] = s[e].map(d);
      let p = i.mapDesc(h, !0);
      s.push(a.range.map(p));
      i = i.compose(d);
      o = $$eE12.mapEffects(o, d).concat($$eE12.mapEffects(eN(a.effects), p));
    }
    return {
      changes: i,
      selection: $$G4.create(s, r.mainIndex),
      effects: o
    };
  }
  changes(e = []) {
    return e instanceof $$F2 ? e : $$F2.of(e, this.doc.length, this.facet($$eZ5.lineSeparator));
  }
  toText(e) {
    return $$x14.of(e.split(this.facet($$eZ5.lineSeparator) || j));
  }
  sliceDoc(e = 0, r = this.doc.length) {
    return this.doc.sliceString(e, r, this.lineBreak);
  }
  facet(e) {
    let r = this.config.address[e.id];
    return null == r ? e.$$default : (ep(this, r), eg(this, r));
  }
  toJSON(e) {
    let r = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e) for (let n in e) {
      let i = e[n];
      i instanceof $$es13 && null != this.config.address[i.id] && (r[n] = i.spec.toJSON(this.field(e[n]), this));
    }
    return r;
  }
  static fromJSON(e, r = {}, n) {
    if (!e || "string" != typeof e.doc) throw RangeError("Invalid JSON representation for EditorState");
    let i = [];
    if (n) {
      for (let r in n) if (Object.prototype.hasOwnProperty.call(e, r)) {
        let s = n[r];
        let o = e[r];
        i.push(s.init(e => s.spec.fromJSON(o, e)));
      }
    }
    return $$eZ5.create({
      doc: e.doc,
      selection: $$G4.fromJSON(e.selection),
      extensions: r.extensions ? i.concat([r.extensions]) : i
    });
  }
  static create(e = {}) {
    let r = ed.resolve(e.extensions || [], new Map());
    let n = e.doc instanceof $$x14 ? e.doc : $$x14.of((e.doc || "").split(r.staticFacet($$eZ5.lineSeparator) || j));
    let i = e.selection ? e.selection instanceof $$G4 ? e.selection : $$G4.single(e.selection.anchor, e.selection.head) : $$G4.single(0);
    X(i, n.length);
    r.staticFacet(ev) || (i = i.asSingle());
    return new $$eZ5(r, n, i, r.dynamicSlots.map(() => null), (e, r) => r.create(e), null);
  }
  get tabSize() {
    return this.facet($$eZ5.tabSize);
  }
  get lineBreak() {
    return this.facet($$eZ5.lineSeparator) || "\n";
  }
  get readOnly() {
    return this.facet(ew);
  }
  phrase(e, ...r) {
    for (let r of this.facet($$eZ5.phrases)) if (Object.prototype.hasOwnProperty.call(r, e)) {
      e = r[e];
      break;
    }
    r.length && (e = e.replace(/\$(\$|\d*)/g, (e, n) => {
      if ("$" == n) return "$";
      let i = +(n || 1);
      return !i || i > r.length ? e : r[i - 1];
    }));
    return e;
  }
  languageDataAt(e, r, n = -1) {
    let i = [];
    for (let s of this.facet(em)) for (let o of s(this, r, n)) Object.prototype.hasOwnProperty.call(o, e) && i.push(o[e]);
    return i;
  }
  charCategorizer(e) {
    return ez(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let {
      text,
      from,
      length
    } = this.doc.lineAt(e);
    let s = this.charCategorizer(e);
    let o = e - from;
    let a = e - from;
    for (; o > 0;) {
      let e = $$R20(text, o, !1);
      if (s(text.slice(e, o)) != $$e$3.Word) break;
      o = e;
    }
    for (; a < length;) {
      let e = $$R20(text, a);
      if (s(text.slice(a, e)) != $$e$3.Word) break;
      a = e;
    }
    return o == a ? null : $$G4.range(o + from, a + from);
  }
}
export function $$eF18(e, r, n = {}) {
  let i = {};
  for (let r of e) for (let e of Object.keys(r)) {
    let s = r[e];
    let o = i[e];
    if (void 0 === o) i[e] = s;else if (o === s || void 0 === s) ;else if (Object.hasOwnProperty.call(n, e)) i[e] = n[e](o, s);else throw Error("Config merge conflict for field " + e);
  }
  for (let e in r) void 0 === i[e] && (i[e] = r[e]);
  return i;
}
$$eZ5.allowMultipleSelections = ev;
$$eZ5.tabSize = $$K6.define({
  combine: e => e.length ? e[0] : 4
});
$$eZ5.lineSeparator = ey;
$$eZ5.readOnly = ew;
$$eZ5.phrases = $$K6.define({
  compare(e, r) {
    let n = Object.keys(e);
    let i = Object.keys(r);
    return n.length == i.length && n.every(n => e[n] == r[n]);
  }
});
$$eZ5.languageData = em;
$$eZ5.changeFilter = eb;
$$eZ5.transactionFilter = eO;
$$eZ5.transactionExtender = ex;
ec.reconfigure = $$eE12.define();
export class $$eU11 {
  eq(e) {
    return this == e;
  }
  range(e, r = e) {
    return eQ.create(e, r, this);
  }
}
$$eU11.prototype.startSide = $$eU11.prototype.endSide = 0;
$$eU11.prototype.point = !1;
$$eU11.prototype.mapMode = $$z7.TrackDel;
class eQ {
  constructor(e, r, n) {
    this.from = e;
    this.to = r;
    this.value = n;
  }
  static create(e, r, n) {
    return new eQ(e, r, n);
  }
}
function eV(e, r) {
  return e.from - r.from || e.value.startSide - r.value.startSide;
}
class eB {
  constructor(e, r, n, i) {
    this.from = e;
    this.to = r;
    this.value = n;
    this.maxPoint = i;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, r, n, i = 0) {
    let s = n ? this.to : this.from;
    for (function () {
      let o = i;
      let a = s.length;
    }();;) {
      if (o == a) return o;
      let i = o + a >> 1;
      let h = s[i] - e || (n ? this.value[i].endSide : this.value[i].startSide) - r;
      if (i == o) return h >= 0 ? o : a;
      h >= 0 ? a = i : o = i + 1;
    }
  }
  between(e, r, n, i) {
    var _this = this;
    for (function () {
      let s = _this.findIndex(r, -1e9, !0);
      let o = _this.findIndex(n, 1e9, !1, s);
    }(); s < o; s++) if (!1 === i(this.from[s] + e, this.to[s] + e, this.value[s])) return !1;
  }
  map(e, r) {
    let n = [];
    let i = [];
    let s = [];
    let o = -1;
    let a = -1;
    for (let h = 0; h < this.value.length; h++) {
      let d = this.value[h];
      let p = this.from[h] + e;
      let g = this.to[h] + e;
      let m;
      let v;
      if (p == g) {
        let e = r.mapPos(p, d.startSide, d.mapMode);
        if (null == e || (m = v = e, d.startSide != d.endSide && (v = r.mapPos(p, d.endSide)) < m)) continue;
      } else if ((m = r.mapPos(p, d.startSide)) > (v = r.mapPos(g, d.endSide)) || m == v && d.startSide > 0 && d.endSide <= 0) continue;
      0 > (v - m || d.endSide - d.startSide) || (o < 0 && (o = m), d.point && (a = Math.max(a, v - m)), n.push(d), i.push(m - o), s.push(v - o));
    }
    return {
      mapped: n.length ? new eB(i, s, n, a) : null,
      pos: o
    };
  }
}
export class $$eq9 {
  constructor(e, r, n, i) {
    this.chunkPos = e;
    this.chunk = r;
    this.nextLayer = n;
    this.maxPoint = i;
  }
  static create(e, r, n, i) {
    return new $$eq9(e, r, n, i);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let r of this.chunk) e += r.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let {
      add = [],
      sort = !1,
      filterFrom = 0,
      filterTo = this.length
    } = e;
    let o = e.filter;
    if (0 == add.length && !o) return this;
    if (sort && (r = add.slice().sort(eV)), this.isEmpty) return add.length ? $$eq9.of(add) : this;
    let a = new eX(this, null, -1).$$goto(0);
    let h = 0;
    let d = [];
    let p = new $$eY10();
    for (; a.value || h < add.length;) if (h < add.length && (a.from - add[h].from || a.startSide - add[h].value.startSide) >= 0) {
      let e = add[h++];
      p.addInner(e.from, e.to, e.value) || d.push(e);
    } else 1 == a.rangeIndex && a.chunkIndex < this.chunk.length && (h == add.length || this.chunkEnd(a.chunkIndex) < add[h].from) && (!o || filterFrom > this.chunkEnd(a.chunkIndex) || filterTo < this.chunkPos[a.chunkIndex]) && p.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex]) ? a.nextChunk() : ((!o || filterFrom > a.to || filterTo < a.from || o(a.from, a.to, a.value)) && !p.addInner(a.from, a.to, a.value) && d.push(eQ.create(a.from, a.to, a.value)), a.next());
    return p.finishInner(this.nextLayer.isEmpty && !d.length ? $$eq9.empty : this.nextLayer.update({
      add: d,
      filter: o,
      filterFrom,
      filterTo
    }));
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let r = [];
    let n = [];
    let i = -1;
    for (let s = 0; s < this.chunk.length; s++) {
      let o = this.chunkPos[s];
      let a = this.chunk[s];
      let h = e.touchesRange(o, o + a.length);
      if (!1 === h) {
        i = Math.max(i, a.maxPoint);
        r.push(a);
        n.push(e.mapPos(o));
      } else if (!0 === h) {
        let {
          mapped,
          pos
        } = a.map(o, e);
        mapped && (i = Math.max(i, mapped.maxPoint), r.push(mapped), n.push(pos));
      }
    }
    let s = this.nextLayer.map(e);
    return 0 == r.length ? s : new $$eq9(n, r, s || $$eq9.empty, i);
  }
  between(e, r, n) {
    if (!this.isEmpty) {
      for (let i = 0; i < this.chunk.length; i++) {
        let s = this.chunkPos[i];
        let o = this.chunk[i];
        if (r >= s && e <= s + o.length && !1 === o.between(s, e - s, r - s, n)) return;
      }
      this.nextLayer.between(e, r, n);
    }
  }
  iter(e = 0) {
    return eH.from([this]).$$goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, r = 0) {
    return eH.from(e).$$goto(r);
  }
  static compare(e, r, n, i, s = -1) {
    let o = e.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= s);
    let a = r.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= s);
    let h = eG(o, a, n);
    let d = new eJ(o, h, s);
    let p = new eJ(a, h, s);
    n.iterGaps((e, r, n) => e0(d, e, p, r, n, i));
    n.empty && 0 == n.length && e0(d, 0, p, 0, 0, i);
  }
  static eq(e, r, n = 0, i) {
    null == i && (i = 0x3b9ac9ff);
    let s = e.filter(e => !e.isEmpty && 0 > r.indexOf(e));
    let o = r.filter(r => !r.isEmpty && 0 > e.indexOf(r));
    if (s.length != o.length) return !1;
    if (!s.length) return !0;
    let a = eG(s, o);
    let h = new eJ(s, a, 0).$$goto(n);
    let d = new eJ(o, a, 0).$$goto(n);
    for (;;) {
      if (h.to != d.to || !e1(h.active, d.active) || h.point && (!d.point || !h.point.eq(d.point))) return !1;
      if (h.to > i) return !0;
      h.next();
      d.next();
    }
  }
  static spans(e, r, n, i, s = -1) {
    let o = new eJ(e, null, s).$$goto(r);
    let a = r;
    let h = o.openStart;
    for (;;) {
      let e = Math.min(o.to, n);
      if (o.point) {
        let n = o.activeForPoint(o.to);
        let s = o.pointFrom < r ? n.length + 1 : o.point.startSide < 0 ? n.length : Math.min(n.length, h);
        i.point(a, e, o.point, n, s, o.pointRank);
        h = Math.min(o.openEnd(e), n.length);
      } else e > a && (i.span(a, e, o.active, h), h = o.openEnd(e));
      if (o.to > n) return h + (o.point && o.to > n ? 1 : 0);
      a = o.to;
      o.next();
    }
  }
  static of(e, r = !1) {
    let n = new $$eY10();
    for (let i of e instanceof eQ ? [e] : r ? eW(e) : e) n.add(i.from, i.to, i.value);
    return n.finish();
  }
  static join(e) {
    if (!e.length) return $$eq9.empty;
    let r = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--) for (let i = e[n]; i != $$eq9.empty; i = i.nextLayer) r = new $$eq9(i.chunkPos, i.chunk, r, Math.max(i.maxPoint, r.maxPoint));
    return r;
  }
}
function eW(e) {
  if (e.length > 1) for (function () {
    let r = e[0];
    let n = 1;
  }(); n < e.length; n++) {
    let i = e[n];
    if (eV(r, i) > 0) return e.slice().sort(eV);
    r = i;
  }
  return e;
}
$$eq9.empty = new $$eq9([], [], null, -1);
$$eq9.empty.nextLayer = $$eq9.empty;
export class $$eY10 {
  finishChunk(e) {
    this.chunks.push(new eB(this.from, this.to, this.value, this.maxPoint));
    this.chunkPos.push(this.chunkStart);
    this.chunkStart = -1;
    this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
    this.maxPoint = -1;
    e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [];
    this.chunkPos = [];
    this.chunkStart = -1;
    this.last = null;
    this.lastFrom = -1e9;
    this.lastTo = -1e9;
    this.from = [];
    this.to = [];
    this.value = [];
    this.maxPoint = -1;
    this.setMaxPoint = -1;
    this.nextLayer = null;
  }
  add(e, r, n) {
    this.addInner(e, r, n) || (this.nextLayer || (this.nextLayer = new $$eY10())).add(e, r, n);
  }
  addInner(e, r, n) {
    let i = e - this.lastTo || n.startSide - this.last.endSide;
    if (i <= 0 && 0 > (e - this.lastFrom || n.startSide - this.last.startSide)) throw Error("Ranges must be added sorted by `from` position and `startSide`");
    return !(i < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(r - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = r, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, r - e)), !0);
  }
  addChunk(e, r) {
    if (0 > (e - this.lastTo || r.value[0].startSide - this.last.endSide)) return !1;
    this.from.length && this.finishChunk(!0);
    this.setMaxPoint = Math.max(this.setMaxPoint, r.maxPoint);
    this.chunks.push(r);
    this.chunkPos.push(e);
    let n = r.value.length - 1;
    this.last = r.value[n];
    this.lastFrom = r.from[n] + e;
    this.lastTo = r.to[n] + e;
    return !0;
  }
  finish() {
    return this.finishInner($$eq9.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return e;
    let r = $$eq9.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    this.from = null;
    return r;
  }
}
function eG(e, r, n) {
  let i = new Map();
  for (let r of e) for (let e = 0; e < r.chunk.length; e++) r.chunk[e].maxPoint <= 0 && i.set(r.chunk[e], r.chunkPos[e]);
  let s = new Set();
  for (let e of r) for (let r = 0; r < e.chunk.length; r++) {
    let o = i.get(e.chunk[r]);
    null == o || (n ? n.mapPos(o) : o) != e.chunkPos[r] || n?.touchesRange(o, o + e.chunk[r].length) || s.add(e.chunk[r]);
  }
  return s;
}
class eX {
  constructor(e, r, n, i = 0) {
    this.layer = e;
    this.skip = r;
    this.minPoint = n;
    this.rank = i;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, r = -1e9) {
    this.chunkIndex = this.rangeIndex = 0;
    this.gotoInner(e, r, !1);
    return this;
  }
  gotoInner(e, r, n) {
    for (; this.chunkIndex < this.layer.chunk.length;) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint)) break;
      this.chunkIndex++;
      n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let i = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], r, !0);
      (!n || this.rangeIndex < i) && this.setRangeIndex(i);
    }
    this.next();
  }
  forward(e, r) {
    0 > (this.to - e || this.endSide - r) && this.gotoInner(e, r, !0);
  }
  next() {
    for (;;) {
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9;
        this.value = null;
        break;
      }
      {
        let e = this.layer.chunkPos[this.chunkIndex];
        let r = this.layer.chunk[this.chunkIndex];
        let n = e + r.from[this.rangeIndex];
        if (this.from = n, this.to = e + r.to[this.rangeIndex], this.value = r.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
      }
    }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++;
    this.rangeIndex = 0;
    this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class eH {
  constructor(e) {
    this.heap = e;
  }
  static from(e, r = null, n = -1) {
    let i = [];
    for (let s = 0; s < e.length; s++) for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= n && i.push(new eX(o, r, n, s));
    return 1 == i.length ? i[0] : new eH(i);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, r = -1e9) {
    for (let n of this.heap) n.$$goto(e, r);
    for (let e = this.heap.length >> 1; e >= 0; e--) eK(this.heap, e);
    this.next();
    return this;
  }
  forward(e, r) {
    for (let n of this.heap) n.forward(e, r);
    for (let e = this.heap.length >> 1; e >= 0; e--) eK(this.heap, e);
    0 > (this.to - e || this.value.endSide - r) && this.next();
  }
  next() {
    if (0 == this.heap.length) {
      this.from = this.to = 1e9;
      this.value = null;
      this.rank = -1;
    } else {
      let e = this.heap[0];
      this.from = e.from;
      this.to = e.to;
      this.value = e.value;
      this.rank = e.rank;
      e.value && e.next();
      eK(this.heap, 0);
    }
  }
}
function eK(e, r) {
  for (let n = e[r];;) {
    let i = (r << 1) + 1;
    if (i >= e.length) break;
    let s = e[i];
    if (i + 1 < e.length && s.compare(e[i + 1]) >= 0 && (s = e[i + 1], i++), 0 > n.compare(s)) break;
    e[i] = n;
    e[r] = s;
    r = i;
  }
}
class eJ {
  constructor(e, r, n) {
    this.minPoint = n;
    this.active = [];
    this.activeTo = [];
    this.activeRank = [];
    this.minActive = -1;
    this.point = null;
    this.pointFrom = 0;
    this.pointRank = 0;
    this.to = -1e9;
    this.endSide = 0;
    this.openStart = -1;
    this.cursor = eH.from(e, r, n);
  }
  goto(e, r = -1e9) {
    this.cursor.$$goto(e, r);
    this.active.length = this.activeTo.length = this.activeRank.length = 0;
    this.minActive = -1;
    this.to = e;
    this.endSide = r;
    this.openStart = -1;
    this.next();
    return this;
  }
  forward(e, r) {
    for (; this.minActive > -1 && 0 > (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - r);) this.removeActive(this.minActive);
    this.cursor.forward(e, r);
  }
  removeActive(e) {
    e2(this.active, e);
    e2(this.activeTo, e);
    e2(this.activeRank, e);
    this.minActive = e3(this.active, this.activeTo);
  }
  addActive(e) {
    let r = 0;
    let {
      value,
      to,
      rank
    } = this.cursor;
    for (; r < this.activeRank.length && (rank - this.activeRank[r] || to - this.activeTo[r]) > 0;) r++;
    e5(this.active, r, value);
    e5(this.activeTo, r, to);
    e5(this.activeRank, r, rank);
    e && e5(e, r, this.cursor.from);
    this.minActive = e3(this.active, this.activeTo);
  }
  next() {
    let e = this.to;
    let r = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (;;) {
      let i = this.minActive;
      if (i > -1 && 0 > (this.activeTo[i] - this.cursor.from || this.active[i].endSide - this.cursor.startSide)) {
        if (this.activeTo[i] > e) {
          this.to = this.activeTo[i];
          this.endSide = this.active[i].endSide;
          break;
        }
        this.removeActive(i);
        n && e2(n, i);
      } else if (this.cursor.value) {
        if (this.cursor.from > e) {
          this.to = this.cursor.from;
          this.endSide = this.cursor.startSide;
          break;
        }
        {
          let e = this.cursor.value;
          if (e.point) {
            if (r && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();else {
              this.point = e;
              this.pointFrom = this.cursor.from;
              this.pointRank = this.cursor.rank;
              this.to = this.cursor.to;
              this.endSide = e.endSide;
              this.cursor.next();
              this.forward(this.to, this.endSide);
              break;
            }
          } else {
            this.addActive(n);
            this.cursor.next();
          }
        }
      } else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let r = n.length - 1; r >= 0 && n[r] < e; r--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let r = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && r.push(this.active[n]);
    return r.reverse();
  }
  openEnd(e) {
    let r = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) r++;
    return r;
  }
}
function e0(e, r, n, i, s, o) {
  e.$$goto(r);
  n.$$goto(i);
  let a = i + s;
  let h = i;
  let d = i - r;
  for (;;) {
    let r = e.to + d - n.to;
    let i = r || e.endSide - n.endSide;
    let s = i < 0 ? e.to + d : n.to;
    let p = Math.min(s, a);
    if (e.point || n.point ? e.point && n.point && (e.point == n.point || e.point.eq(n.point)) && e1(e.activeForPoint(e.to), n.activeForPoint(n.to)) || o.comparePoint(h, p, e.point, n.point) : p > h && !e1(e.active, n.active) && o.compareRange(h, p, e.active, n.active), s > a) break;
    (r || e.openEnd != n.openEnd) && o.boundChange && o.boundChange(s);
    h = s;
    i <= 0 && e.next();
    i >= 0 && n.next();
  }
}
function e1(e, r) {
  if (e.length != r.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] != r[n] && !e[n].eq(r[n])) return !1;
  return !0;
}
function e2(e, r) {
  for (function () {
    let n = r;
    let i = e.length - 1;
  }(); n < i; n++) e[n] = e[n + 1];
  e.pop();
}
function e5(e, r, n) {
  for (let n = e.length - 1; n >= r; n--) e[n + 1] = e[n];
  e[r] = n;
}
function e3(e, r) {
  let n = -1;
  let i = 1e9;
  for (let s = 0; s < r.length; s++) 0 > (r[s] - i || e[s].endSide - e[n].endSide) && (n = s, i = r[s]);
  return n;
}
export function $$e619(e, r, n = e.length) {
  let i = 0;
  for (let s = 0; s < n && s < e.length;) 9 == e.charCodeAt(s) ? (i += r - i % r, s++) : (i++, s = $$R20(e, s));
  return i;
}
export function $$e421(e, r, n, i) {
  for (function () {
    let i = 0;
    let s = 0;
  }();;) {
    if (s >= r) return i;
    if (i == e.length) break;
    s += 9 == e.charCodeAt(i) ? n - s % n : 1;
    i = $$R20(e, i);
  }
  return !0 === i ? -1 : e.length;
}
export const YH = $$ek0;
export const Gu = $$Z1;
export const VR = $$F2;
export const Je = $$e$3;
export const OF = $$G4;
export const $t = $$eZ5;
export const sj = $$K6;
export const iR = $$z7;
export const Nb = $$el8;
export const om = $$eq9;
export const vB = $$eY10;
export const FB = $$eU11;
export const Pe = $$eE12;
export const sU = $$es13;
export const EY = $$x14;
export const ZX = $$eA15;
export const vS = $$N16;
export const Fh = $$L17;
export const QR = $$eF18;
export const y$ = $$e619;
export const zK = $$R20;
export const kn = $$e421;
export const MK = $$$22;