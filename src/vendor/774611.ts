import { Qh } from "../vendor/936850";
import { uN, Ay as _$$Ay } from "../vendor/241330";
function l(e, n, t, r, l) {
  var a = e * e;
  var i = a * e;
  return ((1 - 3 * e + 3 * a - i) * n + (4 - 6 * a + 3 * i) * t + (1 + 3 * e + 3 * a - 3 * i) * r + i * l) / 6;
}
export let $$i0 = function e(n) {
  var t = uN(n);
  function l(e, n) {
    var l = t((e = Qh(e)).r, (n = Qh(n)).r);
    var i = t(e.g, n.g);
    var u = t(e.b, n.b);
    var o = _$$Ay(e.opacity, n.opacity);
    return function (n) {
      e.r = l(n);
      e.g = i(n);
      e.b = u(n);
      e.opacity = o(n);
      return e + "";
    };
  }
  l.gamma = e;
  return l;
}(1);
function u(e) {
  return function (n) {
    var t;
    var l;
    var a = n.length;
    var i = Array(a);
    var u = Array(a);
    var o = Array(a);
    for (t = 0; t < a; ++t) {
      l = Qh(n[t]);
      i[t] = l.r || 0;
      u[t] = l.g || 0;
      o[t] = l.b || 0;
    }
    i = e(i);
    u = e(u);
    o = e(o);
    l.opacity = 1;
    return function (e) {
      l.r = i(e);
      l.g = u(e);
      l.b = o(e);
      return l + "";
    };
  };
}
u(function (e) {
  var n = e.length - 1;
  return function (t) {
    var r = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n);
    var a = e[r];
    var i = e[r + 1];
    var u = r > 0 ? e[r - 1] : 2 * a - i;
    var o = r < n - 1 ? e[r + 2] : 2 * i - a;
    return l((t - r / n) * n, u, a, i, o);
  };
});
u(function (e) {
  var n = e.length;
  return function (t) {
    var r = Math.floor(((t %= 1) < 0 ? ++t : t) * n);
    var a = e[(r + n - 1) % n];
    var i = e[r % n];
    var u = e[(r + 1) % n];
    var o = e[(r + 2) % n];
    return l((t - r / n) * n, a, i, u, o);
  };
});
export const Ay = $$i0;