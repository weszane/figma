import { Buf16 } from "../vendor/997643";
var s = 15;
var o = 852;
var a = 592;
var h = 0;
var d = 1;
var p = 2;
var g = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
var m = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
var v = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
var y = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
module.exports = function (e, r, n, b, O, x, w, k) {
  var _;
  var S;
  var E;
  var A;
  var C;
  var T;
  var I;
  var P;
  var R;
  var M = k.bits;
  var D = 0;
  var N = 0;
  var $ = 0;
  var L = 0;
  var j = 0;
  var z = 0;
  var Z = 0;
  var F = 0;
  var U = 0;
  var Q = 0;
  var V = null;
  var B = 0;
  var q = new Buf16(s + 1);
  var W = new Buf16(s + 1);
  var Y = null;
  var G = 0;
  for (D = 0; D <= s; D++) q[D] = 0;
  for (N = 0; N < b; N++) q[r[n + N]]++;
  for (j = M, L = s; L >= 1 && 0 === q[L]; L--);
  if (j > L && (j = L), 0 === L) {
    O[x++] = 0x1400000;
    O[x++] = 0x1400000;
    k.bits = 1;
    return 0;
  }
  for ($ = 1; $ < L && 0 === q[$]; $++);
  for (j < $ && (j = $), F = 1, D = 1; D <= s; D++) if (F <<= 1, (F -= q[D]) < 0) return -1;
  if (F > 0 && (e === h || 1 !== L)) return -1;
  for (D = 1, W[1] = 0; D < s; D++) W[D + 1] = W[D] + q[D];
  for (N = 0; N < b; N++) 0 !== r[n + N] && (w[W[r[n + N]]++] = N);
  if (e === h ? (V = Y = w, T = 19) : e === d ? (V = g, B -= 257, Y = m, G -= 257, T = 256) : (V = v, Y = y, T = -1), Q = 0, N = 0, D = $, C = x, z = j, Z = 0, E = -1, A = (U = 1 << j) - 1, e === d && U > o || e === p && U > a) return 1;
  for (;;) {
    I = D - Z;
    w[N] < T ? (P = 0, R = w[N]) : w[N] > T ? (P = Y[G + w[N]], R = V[B + w[N]]) : (P = 96, R = 0);
    _ = 1 << D - Z;
    $ = S = 1 << z;
    do O[C + (Q >> Z) + (S -= _)] = I << 24 | P << 16 | R | 0; while (0 !== S);
    for (_ = 1 << D - 1; Q & _;) _ >>= 1;
    if (0 !== _ ? (Q &= _ - 1, Q += _) : Q = 0, N++, 0 == --q[D]) {
      if (D === L) break;
      D = r[n + w[N]];
    }
    if (D > j && (Q & A) !== E) {
      for (0 === Z && (Z = j), C += $, F = 1 << (z = D - Z); z + Z < L && !((F -= q[z + Z]) <= 0);) {
        z++;
        F <<= 1;
      }
      if (U += 1 << z, e === d && U > o || e === p && U > a) return 1;
      O[E = Q & A] = j << 24 | z << 16 | C - x | 0;
    }
  }
  0 !== Q && (O[C + Q] = D - Z << 24 | 4194304);
  k.bits = j;
  return 0;
};