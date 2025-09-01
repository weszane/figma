import { A as _$$A } from "../vendor/768613";
import { C } from "../vendor/575983";
import { A as _$$A2 } from "../vendor/241929";
var a = _$$A("domain", "range", "reverse", "align", "padding", "round");
export function $$i0(e) {
  return a(function e() {
    var n;
    var t;
    var a = _$$A2().unknown(void 0);
    var i = a.domain;
    var u = a.range;
    var o = 0;
    var s = 1;
    var c = !1;
    var f = 0;
    var d = 0;
    var h = .5;
    function p() {
      var e = i().length;
      var r = s < o;
      var l = r ? s : o;
      var a = r ? o : s;
      n = (a - l) / Math.max(1, e - f + 2 * d);
      c && (n = Math.floor(n));
      l += (a - l - n * (e - f)) * h;
      t = n * (1 - f);
      c && (l = Math.round(l), t = Math.round(t));
      var p = function (e, n, t) {
        e = +e;
        n = +n;
        t = (l = $$arguments.length) < 2 ? (n = e, e = 0, 1) : l < 3 ? 1 : +t;
        for (r = -1, l = 0 | Math.max(0, Math.ceil((n - e) / t)), a = Array(l), void 0; ++r < l;) {
          var r;
          var l;
          var a;
          a[r] = e + r * t;
        }
        return a;
      }(e).map(function (e) {
        return l + n * e;
      });
      return u(r ? p.reverse() : p);
    }
    delete a.unknown;
    a.domain = function (e) {
      return $$arguments.length ? (i(e), p()) : i();
    };
    a.range = function (e) {
      return $$arguments.length ? ([o, s] = e, o = +o, s = +s, p()) : [o, s];
    };
    a.rangeRound = function (e) {
      [o, s] = e;
      o = +o;
      s = +s;
      c = !0;
      return p();
    };
    a.bandwidth = function () {
      return t;
    };
    a.step = function () {
      return n;
    };
    a.round = function (e) {
      return $$arguments.length ? (c = !!e, p()) : c;
    };
    a.padding = function (e) {
      return $$arguments.length ? (f = Math.min(1, d = +e), p()) : f;
    };
    a.paddingInner = function (e) {
      return $$arguments.length ? (f = Math.min(1, e), p()) : f;
    };
    a.paddingOuter = function (e) {
      return $$arguments.length ? (d = +e, p()) : d;
    };
    a.align = function (e) {
      return $$arguments.length ? (h = Math.max(0, Math.min(1, e)), p()) : h;
    };
    a.copy = function () {
      return e(i(), [o, s]).round(c).paddingInner(f).paddingOuter(d).align(h);
    };
    return C.apply(p(), arguments);
  }(), e);
}
export const A = $$i0;