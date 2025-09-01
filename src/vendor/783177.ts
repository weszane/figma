import { A as _$$A } from "../vendor/117819";
import { A as _$$A2 } from "../vendor/973228";
import { A as _$$A3 } from "../vendor/700272";
import { A as _$$A4 } from "../vendor/638205";
import { A as _$$A5 } from "../vendor/656855";
import { A as _$$A6 } from "../vendor/868487";
import { A as _$$A7 } from "../vendor/40241";
import { A as _$$A8 } from "../vendor/5264";
import { A as _$$A9 } from "../vendor/571049";
import { A as _$$A0 } from "../vendor/768551";
import { A as _$$A1 } from "../vendor/687669";
function s(t) {
  var e = -1;
  var r = t?.length;
  for (this.__data__ = new _$$A2(); ++e < r;) this.add(t[e]);
}
s.prototype.add = s.prototype.push = function (t) {
  this.__data__.set(t, "__lodash_hash_undefined__");
  return this;
};
s.prototype.has = function (t) {
  return this.__data__.has(t);
};
let l = function (t, e) {
  for (r = -1, i = t?.length, void 0; ++r < i;) {
    var r;
    var i;
    if (e(t[r], r, t)) return !0;
  }
  return !1;
};
let o = function (t, e, r, i, n, o) {
  var a = 1 & r;
  var c = t.length;
  var u = e.length;
  if (c != u && !(a && u > c)) return !1;
  var h = o.get(t);
  var d = o.get(e);
  if (h && d) return h == e && d == t;
  var f = -1;
  var p = !0;
  var g = 2 & r ? new s() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < c;) {
    var m = t[f];
    var b = e[f];
    if (i) var y = a ? i(b, m, f, e, t, o) : i(m, b, f, t, e, o);
    if (void 0 !== y) {
      if (y) continue;
      p = !1;
      break;
    }
    if (g) {
      if (!l(e, function (t, e) {
        if (!g.has(e) && (m === t || n(m, t, r, i, o))) return g.push(e);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === b || n(m, b, r, i, o))) {
      p = !1;
      break;
    }
  }
  o.$$delete(t);
  o.$$delete(e);
  return p;
};
let h = function (t) {
  var e = -1;
  var r = Array(t.size);
  t.forEach(function (t, i) {
    r[++e] = [i, t];
  });
  return r;
};
let d = function (t) {
  var e = -1;
  var r = Array(t.size);
  t.forEach(function (t) {
    r[++e] = t;
  });
  return r;
};
var f = _$$A3 ? _$$A3.prototype : void 0;
var p = f ? f.valueOf : void 0;
let g = function (t, e, r, i, n, s, l) {
  switch (r) {
    case "[object DataView]":
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
      t = t.buffer;
      e = e.buffer;
    case "[object ArrayBuffer]":
      if (t.byteLength != e.byteLength || !s(new _$$A4(t), new _$$A4(e))) break;
      return !0;
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return _$$A5(+t, +e);
    case "[object Error]":
      return t.name == e.name && t.message == e.message;
    case "[object RegExp]":
    case "[object String]":
      return t == e + "";
    case "[object Map]":
      var a = h;
    case "[object Set]":
      var f = 1 & i;
      if (a || (a = d), t.size != e.size && !f) break;
      var g = l.get(t);
      if (g) return g == e;
      i |= 2;
      l.set(t, e);
      var m = o(a(t), a(e), i, n, s, l);
      l.$$delete(t);
      return m;
    case "[object Symbol]":
      if (p) return p.call(t) == p.call(e);
  }
  return !1;
};
var b = Object.prototype.hasOwnProperty;
let y = function (t, e, r, i, n, s) {
  var l = 1 & r;
  var o = _$$A6(t);
  var a = o.length;
  if (a != _$$A6(e).length && !l) return !1;
  for (var c = a; c--;) {
    var u = o[c];
    if (!(l ? u in e : b.call(e, u))) return !1;
  }
  var h = s.get(t);
  var d = s.get(e);
  if (h && d) return h == e && d == t;
  var f = !0;
  s.set(t, e);
  s.set(e, t);
  for (var p = l; ++c < a;) {
    var g = t[u = o[c]];
    var y = e[u];
    if (i) var v = l ? i(y, g, u, e, t, s) : i(g, y, u, t, e, s);
    if (!(void 0 === v ? g === y || n(g, y, r, i, s) : v)) {
      f = !1;
      break;
    }
    p || (p = "constructor" == u);
  }
  if (f && !p) {
    var A = t.constructor;
    var x = e.constructor;
    A != x && "constructor" in t && "constructor" in e && !("function" == typeof A && A instanceof A && "function" == typeof x && x instanceof x) && (f = !1);
  }
  s.$$delete(t);
  s.$$delete(e);
  return f;
};
var E = "[object Arguments]";
var w = "[object Array]";
var k = "[object Object]";
var q = Object.prototype.hasOwnProperty;
let _ = function (t, e, r, n, s, l) {
  var a = _$$A8(t);
  var c = _$$A8(e);
  var u = a ? w : _$$A7(t);
  var h = c ? w : _$$A7(e);
  u = u == E ? k : u;
  h = h == E ? k : h;
  var d = u == k;
  var f = h == k;
  var p = u == h;
  if (p && _$$A9(t)) {
    if (!_$$A9(e)) return !1;
    a = !0;
    d = !1;
  }
  if (p && !d) {
    l || (l = new _$$A());
    return a || _$$A0(t) ? o(t, e, r, n, s, l) : g(t, e, u, r, n, s, l);
  }
  if (!(1 & r)) {
    var m = d && q.call(t, "__wrapped__");
    var b = f && q.call(e, "__wrapped__");
    if (m || b) {
      var _ = m ? t.value() : t;
      var L = b ? e.value() : e;
      l || (l = new _$$A());
      return s(_, L, r, n, l);
    }
  }
  return !!p && (l || (l = new _$$A()), y(t, e, r, n, s, l));
};
export let $$O0 = function (t, e) {
  return function t(e, r, i, n, s) {
    return e === r || (null != e && null != r && (_$$A1(e) || _$$A1(r)) ? _(e, r, i, n, t, s) : e != e && r != r);
  }(t, e);
};
export const A = $$O0;