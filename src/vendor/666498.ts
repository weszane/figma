import { A as _$$A } from "../vendor/117819";
import { A as _$$A2 } from "../vendor/446003";
import { A as _$$A3 } from "../vendor/656855";
import { A as _$$A4 } from "../vendor/290685";
import { A as _$$A5 } from "../vendor/911114";
import { A as _$$A6 } from "../vendor/656464";
import { A as _$$A7 } from "../vendor/96775";
import { A as _$$A8 } from "../vendor/920725";
import { A as _$$A9 } from "../vendor/5264";
import { A as _$$A0 } from "../vendor/468999";
import { A as _$$A1 } from "../vendor/687669";
import { A as _$$A10 } from "../vendor/571049";
import { A as _$$A11 } from "../vendor/807361";
import { A as _$$A12 } from "../vendor/842922";
import { A as _$$A13 } from "../vendor/471459";
import { A as _$$A14 } from "../vendor/463450";
import { A as _$$A15 } from "../vendor/768551";
import { A as _$$A16 } from "../vendor/834346";
import { A as _$$A17 } from "../vendor/330890";
import { A as _$$A18 } from "../vendor/46938";
import { A as _$$A19 } from "../vendor/702318";
let l = function (t, e, r) {
  (void 0 === r || _$$A3(t[e], r)) && (void 0 !== r || e in t) || _$$A2(t, e, r);
};
let o = function (t, e, r) {
  for (i = -1, n = Object(t), s = r(t), l = s.length, void 0; l--;) {
    var i;
    var n;
    var s;
    var l;
    var o = s[++i];
    if (!1 === e(n[o], o, n)) break;
  }
  return t;
};
var x = Object.prototype;
var N = Function.prototype.toString;
var E = x.hasOwnProperty;
var w = N.call(Object);
let k = function (t) {
  if (!_$$A1(t) || "[object Object]" != _$$A13(t)) return !1;
  var e = _$$A14(t);
  if (null === e) return !0;
  var r = E.call(e, "constructor") && e.constructor;
  return "function" == typeof r && r instanceof r && N.call(r) == w;
};
let _ = function (t, e) {
  if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
};
let S = function (t, e, r, i, n, s, o) {
  var v = _(t, r);
  var A = _(e, r);
  var x = o.get(A);
  if (x) {
    l(t, r, x);
    return;
  }
  var N = s ? s(v, A, r + "", t, e, o) : void 0;
  var E = void 0 === N;
  if (E) {
    var w = _$$A9(A);
    var S = !w && _$$A10(A);
    var T = !w && !S && _$$A15(A);
    (N = A, w || S || T) ? _$$A9(v) ? N = v : _$$A1(v) && _$$A0(v) ? N = _$$A6(v) : S ? (E = !1, N = _$$A4(A, !0)) : T ? (E = !1, N = _$$A5(A, !0)) : N = [] : k(A) || _$$A8(A) ? (N = v, _$$A8(v)) ? N = _$$A16(v, _$$A17(v)) : (!_$$A12(v) || _$$A11(v)) && (N = _$$A7(A)) : E = !1;
  }
  E && (o.set(A, N), n(N, A, i, s, o), o.$$delete(A));
  l(t, r, N);
};
let T = function t(e, r, n, s, a) {
  e !== r && o(r, function (o, c) {
    if (a || (a = new _$$A()), _$$A12(o)) S(e, r, c, n, t, s, a);else {
      var u = s ? s(_(e, c), o, c + "", e, r, a) : void 0;
      void 0 === u && (u = o);
      l(e, c, u);
    }
  }, _$$A17);
};
let j = function (t) {
  return t;
};
let C = function (t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
};
var R = Math.max;
var B = _$$A18 ? function (t, e) {
  return _$$A18(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: function () {
      return e;
    },
    writable: !0
  });
} : j;
var M = Date.now;
var D = function (t) {
  var e = 0;
  var r = 0;
  return function () {
    var i = M();
    var n = 16 - (i - r);
    if (r = i, n > 0) {
      if (++e >= 800) return $$arguments[0];
    } else e = 0;
    return t.apply(void 0, arguments);
  };
}(B);
let U = function (t, e) {
  var r;
  return D((r = R(void 0 === (r = e) ? t.length - 1 : r, 0), function () {
    for (e = arguments, i = -1, n = R(e.length - r, 0), s = Array(n), void 0; ++i < n;) {
      var e;
      var i;
      var n;
      var s;
      s[i] = e[r + i];
    }
    i = -1;
    for (var l = Array(r + 1); ++i < r;) l[i] = e[i];
    l[r] = j(s);
    return C(t, this, l);
  }), t + "");
};
let z = function (t, e, r) {
  if (!_$$A12(r)) return !1;
  var i = typeof e;
  return ("number" == i ? !!(_$$A0(r) && _$$A19(e, r.length)) : "string" == i && e in r) && _$$A3(r[e], t);
};
let $$F0 = function (t) {
  return U(function (e, r) {
    var i = -1;
    var n = r.length;
    var s = n > 1 ? r[n - 1] : void 0;
    var l = n > 2 ? r[2] : void 0;
    for (s = t.length > 3 && "function" == typeof s ? (n--, s) : void 0, l && z(r[0], r[1], l) && (s = n < 3 ? void 0 : s, n = 1), e = Object(e); ++i < n;) {
      var o = r[i];
      o && t(e, o, i, s);
    }
    return e;
  });
}(function (t, e, r) {
  T(t, e, r);
});
export const A = $$F0;