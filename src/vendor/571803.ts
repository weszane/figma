import i from "../vendor/655405";
import s from "../vendor/140893";
import o from "../vendor/300823";
import a from "../vendor/911521";
import h from "../vendor/377706";
import d from "../vendor/960798";
import p from "../vendor/672587";
import g from "../vendor/974115";
import m from "../vendor/819152";
import v from "../vendor/220350";
import y from "../vendor/820809";
import b from "../vendor/189577";
import O from "../vendor/506825";
import x from "../vendor/889067";
import w from "../vendor/762629";
import k from "../vendor/467957";
import _ from "../vendor/154164";
import S from "../vendor/693454";
import E from "../vendor/509185";
import A from "../vendor/31244";
import C from "../vendor/335186";
import T from "../vendor/925269";
var I = 1;
var P = 2;
var R = 4;
var M = "[object Arguments]";
var D = "[object Array]";
var N = "[object Boolean]";
var $ = "[object Date]";
var L = "[object Error]";
var j = "[object Function]";
var z = "[object GeneratorFunction]";
var Z = "[object Map]";
var F = "[object Number]";
var U = "[object Object]";
var Q = "[object RegExp]";
var V = "[object Set]";
var B = "[object String]";
var q = "[object Symbol]";
var W = "[object WeakMap]";
var Y = "[object ArrayBuffer]";
var G = "[object DataView]";
var X = "[object Float32Array]";
var H = "[object Float64Array]";
var K = "[object Int8Array]";
var J = "[object Int16Array]";
var ee = "[object Int32Array]";
var et = "[object Uint8Array]";
var er = "[object Uint8ClampedArray]";
var en = "[object Uint16Array]";
var ei = "[object Uint32Array]";
var es = {};
function eo(e, r, n, D, N, $) {
  var L;
  var Z = r & I;
  var F = r & P;
  var Q = r & R;
  if (n && (L = N ? n(e, D, N, $) : n(e)), void 0 !== L) return L;
  if (!E(e)) return e;
  var V = k(e);
  if (V) {
    if (L = O(e), !Z) return p(e, L);
  } else {
    var B = b(e);
    var q = B == j || B == z;
    if (_(e)) return d(e, Z);
    if (B == U || B == M || q && !N) {
      if (L = F || q ? {} : w(e), !Z) return F ? m(e, h(L, e)) : g(e, a(L, e));
    } else {
      if (!es[B]) return N ? e : {};
      L = x(e, B, Z);
    }
  }
  $ || ($ = new i());
  var W = $.get(e);
  if (W) return W;
  $.set(e, L);
  A(e) ? e.forEach(function (i) {
    L.add(eo(i, r, n, i, e, $));
  }) : S(e) && e.forEach(function (i, s) {
    L.set(s, eo(i, r, n, s, e, $));
  });
  var Y = Q ? F ? y : v : F ? T : C;
  var G = V ? void 0 : Y(e);
  s(G || e, function (i, s) {
    G && (i = e[s = i]);
    o(L, s, eo(i, r, n, s, e, $));
  });
  return L;
}
es[M] = es[D] = es[Y] = es[G] = es[N] = es[$] = es[X] = es[H] = es[K] = es[J] = es[ee] = es[Z] = es[F] = es[U] = es[Q] = es[V] = es[B] = es[q] = es[et] = es[er] = es[en] = es[ei] = !0;
es[L] = es[j] = es[W] = !1;
module.exports = eo;