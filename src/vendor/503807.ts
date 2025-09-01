import { A as _$$A } from "../vendor/117819";
import { A as _$$A2 } from "../vendor/820528";
import { A as _$$A3 } from "../vendor/834346";
import { A as _$$A4 } from "../vendor/910705";
import { A as _$$A5 } from "../vendor/330890";
import { A as _$$A6 } from "../vendor/290685";
import { A as _$$A7 } from "../vendor/656464";
import { A as _$$A8 } from "../vendor/386221";
import { A as _$$A9 } from "../vendor/500947";
import { A as _$$A0 } from "../vendor/463450";
import { A as _$$A1 } from "../vendor/757728";
import { A as _$$A10 } from "../vendor/868487";
import { A as _$$A11 } from "../vendor/330690";
import { A as _$$A12 } from "../vendor/40241";
import { A as _$$A13 } from "../vendor/768576";
import { A as _$$A14 } from "../vendor/700272";
import { A as _$$A15 } from "../vendor/911114";
import { A as _$$A16 } from "../vendor/96775";
import { A as _$$A17 } from "../vendor/5264";
import { A as _$$A18 } from "../vendor/571049";
import { A as _$$A19 } from "../vendor/687669";
import { A as _$$A20 } from "../vendor/401658";
import { A as _$$A21 } from "../vendor/948396";
import { A as _$$A22 } from "../vendor/842922";
let n = function (t, e) {
  for (r = -1, i = t?.length, void 0; ++r < i && !1 !== e(t[r], r, t);) {
    var r;
    var i;
    ;
  }
  return t;
};
var g = Object.getOwnPropertySymbols ? function (t) {
  for (var e = []; t;) {
    _$$A9(e, _$$A8(t));
    t = _$$A0(t);
  }
  return e;
} : _$$A1;
let y = function (t) {
  return _$$A11(t, _$$A5, g);
};
var $$A = Object.prototype.hasOwnProperty;
let x = function (t) {
  var e = t.length;
  var r = new t.constructor(e);
  e && "string" == typeof t[0] && $$A.call(t, "index") && (r.index = t.index, r.input = t.input);
  return r;
};
let E = function (t, e) {
  var r = e ? _$$A13(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
};
var w = /\w*$/;
let k = function (t) {
  var e = new t.constructor(t.source, w.exec(t));
  e.lastIndex = t.lastIndex;
  return e;
};
var _ = _$$A14 ? _$$A14.prototype : void 0;
var L = _ ? _.valueOf : void 0;
let S = function (t, e, r) {
  var i = t.constructor;
  switch (e) {
    case "[object ArrayBuffer]":
      return _$$A13(t);
    case "[object Boolean]":
    case "[object Date]":
      return new i(+t);
    case "[object DataView]":
      return E(t, r);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return _$$A15(t, r);
    case "[object Map]":
    case "[object Set]":
      return new i();
    case "[object Number]":
    case "[object String]":
      return new i(t);
    case "[object RegExp]":
      return k(t);
    case "[object Symbol]":
      return L ? Object(L.call(t)) : {};
  }
};
var M = _$$A21 && _$$A21.isMap;
var D = M ? _$$A20(M) : function (t) {
  return _$$A19(t) && "[object Map]" == _$$A12(t);
};
var P = _$$A21 && _$$A21.isSet;
var z = P ? _$$A20(P) : function (t) {
  return _$$A19(t) && "[object Set]" == _$$A12(t);
};
var F = "[object Arguments]";
var $ = "[object Function]";
var H = "[object Object]";
var V = {};
V[F] = V["[object Array]"] = V["[object ArrayBuffer]"] = V["[object DataView]"] = V["[object Boolean]"] = V["[object Date]"] = V["[object Float32Array]"] = V["[object Float64Array]"] = V["[object Int8Array]"] = V["[object Int16Array]"] = V["[object Int32Array]"] = V["[object Map]"] = V["[object Number]"] = V[H] = V["[object RegExp]"] = V["[object Set]"] = V["[object String]"] = V["[object Symbol]"] = V["[object Uint8Array]"] = V["[object Uint8ClampedArray]"] = V["[object Uint16Array]"] = V["[object Uint32Array]"] = !0;
V["[object Error]"] = V[$] = V["[object WeakMap]"] = !1;
let K = function t(e, r, d, f, p, b) {
  var A;
  var N = 1 & r;
  var E = 2 & r;
  var w = 4 & r;
  if (d && (A = p ? d(e, f, p, b) : d(e)), void 0 !== A) return A;
  if (!_$$A22(e)) return e;
  var k = _$$A17(e);
  if (k) {
    if (A = x(e), !N) return _$$A7(e, A);
  } else {
    var q;
    var _;
    var L;
    var O;
    var R = _$$A12(e);
    var I = R == $ || "[object GeneratorFunction]" == R;
    if (_$$A18(e)) return _$$A6(e, N);
    if (R == H || R == F || I && !p) {
      if (A = E || I ? {} : _$$A16(e), !N) return E ? (_ = (q = A) && _$$A3(e, _$$A5(e), q), _$$A3(e, g(e), _)) : (O = (L = A) && _$$A3(e, _$$A4(e), L), _$$A3(e, _$$A8(e), O));
    } else {
      if (!V[R]) return p ? e : {};
      A = S(e, R, N);
    }
  }
  b || (b = new _$$A());
  var B = b.get(e);
  if (B) return B;
  b.set(e, A);
  z(e) ? e.forEach(function (i) {
    A.add(t(i, r, d, i, e, b));
  }) : D(e) && e.forEach(function (i, n) {
    A.set(n, t(i, r, d, n, e, b));
  });
  var M = w ? E ? y : _$$A10 : E ? _$$A5 : _$$A4;
  var P = k ? void 0 : M(e);
  n(P || e, function (i, n) {
    P && (i = e[n = i]);
    _$$A2(A, n, t(i, r, d, n, e, b));
  });
  return A;
};
let $$Z0 = function (t) {
  return K(t, 5);
};
export const A = $$Z0;