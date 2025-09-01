import _require from "881386";
var i;
!function (s, o, a) {
  var h;
  var d = 256;
  var p = 6;
  var g = 52;
  var m = "random";
  var v = a.pow(d, p);
  var y = a.pow(2, g);
  var b = 2 * y;
  var O = d - 1;
  function x(e, r, n) {
    var i = [];
    var s = S(_((r = !0 == r ? {
      entropy: !0
    } : r || {}).entropy ? [e, A(o)] : e, 3), i);
    var h = new w(i);
    var g = function () {
      for (e = h.g(p), r = v, n = 0, void 0; e < y;) {
        var e;
        var r;
        var n;
        e = (e + n) * d;
        r *= d;
        n = h.g(1);
      }
      for (; e >= b;) {
        e /= 2;
        r /= 2;
        n >>>= 1;
      }
      return (e + n) / r;
    };
    g.int32 = function () {
      return 0 | h.g(4);
    };
    g.quick = function () {
      return h.g(4) / 0x100000000;
    };
    g.$$double = g;
    S(A(h.S), o);
    return (r.pass || n || function (e, r, n, i) {
      return (i && (i.S && k(i, h), e.state = function () {
        return k(h, {});
      }), n) ? (a[m] = e, r) : e;
    })(g, s, "global" in r ? r.global : this == a, r.state);
  }
  function w(e) {
    var r;
    var n = e.length;
    var i = this;
    var s = 0;
    var o = i.i = i.j = 0;
    var a = i.S = [];
    for (n || (e = [n++]); s < d;) a[s] = s++;
    for (s = 0; s < d; s++) {
      a[s] = a[o = O & o + e[s % n] + (r = a[s])];
      a[o] = r;
    }
    (i.g = function (e) {
      for (n = 0, s = i.i, o = i.j, a = i.S, void 0; e--;) {
        var r;
        var n;
        var s;
        var o;
        var a;
        r = a[s = O & s + 1];
        n = n * d + a[O & (a[s] = a[o = O & o + r]) + (a[o] = r)];
      }
      i.i = s;
      i.j = o;
      return n;
    })(d);
  }
  function k(e, r) {
    r.i = e.i;
    r.j = e.j;
    r.S = e.S.slice();
    return r;
  }
  function _(e, r) {
    var n;
    var i = [];
    var s = typeof e;
    if (r && "object" == s) for (n in e) try {
      i.push(_(e[n], r - 1));
    } catch (e) {}
    return i.length ? i : "string" == s ? e : e + "\0";
  }
  function S(e, r) {
    for (i = e + "", s = 0, void 0; s < i.length;) {
      var n;
      var i;
      var s;
      r[O & s] = O & (n ^= 19 * r[O & s]) + i.charCodeAt(s++);
    }
    return A(r);
  }
  function E() {
    try {
      var e;
      h && (e = h.randomBytes) ? e = e(d) : (e = new Uint8Array(d), (s.crypto || s.msCrypto).getRandomValues(e));
      return A(e);
    } catch (e) {
      var r = s.navigator;
      var n = r && r.plugins;
      return [+new Date(), s, n, s.screen, A(o)];
    }
  }
  function A(e) {
    return String.fromCharCode.apply(0, e);
  }
  if (S(a.random(), o), module.exports) {
    module.exports = x;
    try {
      h = _require;
    } catch (e) {}
  } else void 0 !== (i = function () {
    return x;
  }.call(exports, require, exports, module)) && (module.exports = i);
}("undefined" != typeof self ? self : this, [], Math);