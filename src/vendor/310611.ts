import { arraySet } from "../vendor/997643";
var i;
var s;
var o;
var h = 4;
var d = 0;
var p = 1;
var g = 2;
function m(e) {
  for (var r = e.length; --r >= 0;) e[r] = 0;
}
var v = 0;
var y = 1;
var b = 2;
var O = 3;
var x = 258;
var w = 29;
var k = 256;
var _ = 286;
var S = 30;
var E = 19;
var A = 573;
var C = 15;
var T = 16;
var I = 7;
var P = 256;
var R = 16;
var M = 17;
var D = 18;
var N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
var $ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
var L = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
var j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var z = 512;
var Z = Array(576);
m(Z);
var F = Array(2 * S);
m(F);
var U = Array(z);
m(U);
var Q = Array(x - O + 1);
m(Q);
var V = Array(w);
m(V);
var B = Array(S);
function q(e, r, n, i, s) {
  this.static_tree = e;
  this.extra_bits = r;
  this.extra_base = n;
  this.elems = i;
  this.max_length = s;
  this.has_stree = e && e.length;
}
function W(e, r) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = r;
}
function Y(e) {
  return e < 256 ? U[e] : U[256 + (e >>> 7)];
}
function G(e, r) {
  e.pending_buf[e.pending++] = 255 & r;
  e.pending_buf[e.pending++] = r >>> 8 & 255;
}
function X(e, r, n) {
  e.bi_valid > T - n ? (e.bi_buf |= r << e.bi_valid & 65535, G(e, e.bi_buf), e.bi_buf = r >> T - e.bi_valid, e.bi_valid += n - T) : (e.bi_buf |= r << e.bi_valid & 65535, e.bi_valid += n);
}
function H(e, r, n) {
  X(e, n[2 * r], n[2 * r + 1]);
}
function K(e, r) {
  var n = 0;
  do {
    n |= 1 & e;
    e >>>= 1;
    n <<= 1;
  } while (--r > 0);
  return n >>> 1;
}
function J(e) {
  16 === e.bi_valid ? (G(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
}
function ee(e, r) {
  var n;
  var i;
  var s;
  var o;
  var a;
  var h;
  var d = r.dyn_tree;
  var p = r.max_code;
  var g = r.stat_desc.static_tree;
  var m = r.stat_desc.has_stree;
  var v = r.stat_desc.extra_bits;
  var y = r.stat_desc.extra_base;
  var b = r.stat_desc.max_length;
  var O = 0;
  for (o = 0; o <= C; o++) e.bl_count[o] = 0;
  for (d[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < A; n++) {
    (o = d[2 * d[2 * (i = e.heap[n]) + 1] + 1] + 1) > b && (o = b, O++);
    d[2 * i + 1] = o;
    !(i > p) && (e.bl_count[o]++, a = 0, i >= y && (a = v[i - y]), h = d[2 * i], e.opt_len += h * (o + a), m && (e.static_len += h * (g[2 * i + 1] + a)));
  }
  if (0 !== O) {
    do {
      for (o = b - 1; 0 === e.bl_count[o];) o--;
      e.bl_count[o]--;
      e.bl_count[o + 1] += 2;
      e.bl_count[b]--;
      O -= 2;
    } while (O > 0);
    for (o = b; 0 !== o; o--) for (i = e.bl_count[o]; 0 !== i;) !((s = e.heap[--n]) > p) && (d[2 * s + 1] !== o && (e.opt_len += (o - d[2 * s + 1]) * d[2 * s], d[2 * s + 1] = o), i--);
  }
}
function et(e, r, n) {
  var i;
  var s;
  var o = Array(C + 1);
  var a = 0;
  for (i = 1; i <= C; i++) o[i] = a = a + n[i - 1] << 1;
  for (s = 0; s <= r; s++) {
    var h = e[2 * s + 1];
    0 !== h && (e[2 * s] = K(o[h]++, h));
  }
}
function er() {
  var e;
  var r;
  var n;
  var a;
  var h;
  var d = Array(C + 1);
  for (a = 0, n = 0; a < w - 1; a++) for (e = 0, V[a] = n; e < 1 << N[a]; e++) Q[n++] = a;
  for (Q[n - 1] = a, h = 0, a = 0; a < 16; a++) for (e = 0, B[a] = h; e < 1 << $[a]; e++) U[h++] = a;
  for (h >>= 7; a < S; a++) for (e = 0, B[a] = h << 7; e < 1 << $[a] - 7; e++) U[256 + h++] = a;
  for (r = 0; r <= C; r++) d[r] = 0;
  for (e = 0; e <= 143;) {
    Z[2 * e + 1] = 8;
    e++;
    d[8]++;
  }
  for (; e <= 255;) {
    Z[2 * e + 1] = 9;
    e++;
    d[9]++;
  }
  for (; e <= 279;) {
    Z[2 * e + 1] = 7;
    e++;
    d[7]++;
  }
  for (; e <= 287;) {
    Z[2 * e + 1] = 8;
    e++;
    d[8]++;
  }
  for (et(Z, _ + 1, d), e = 0; e < S; e++) {
    F[2 * e + 1] = 5;
    F[2 * e] = K(e, 5);
  }
  i = new q(Z, N, k + 1, _, C);
  s = new q(F, $, 0, S, C);
  o = new q([], L, 0, E, I);
}
function en(e) {
  var r;
  for (r = 0; r < _; r++) e.dyn_ltree[2 * r] = 0;
  for (r = 0; r < S; r++) e.dyn_dtree[2 * r] = 0;
  for (r = 0; r < E; r++) e.bl_tree[2 * r] = 0;
  e.dyn_ltree[2 * P] = 1;
  e.opt_len = e.static_len = 0;
  e.last_lit = e.matches = 0;
}
function ei(e) {
  e.bi_valid > 8 ? G(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf);
  e.bi_buf = 0;
  e.bi_valid = 0;
}
function es(e, r, n, i) {
  ei(e);
  i && (G(e, n), G(e, ~n));
  arraySet(e.pending_buf, e.window, r, n, e.pending);
  e.pending += n;
}
function eo(e, r, n, i) {
  var s = 2 * r;
  var o = 2 * n;
  return e[s] < e[o] || e[s] === e[o] && i[r] <= i[n];
}
function ea(e, r, n) {
  for (i = e.heap[n], s = n << 1, void 0; s <= e.heap_len && (s < e.heap_len && eo(r, e.heap[s + 1], e.heap[s], e.depth) && s++, !eo(r, i, e.heap[s], e.depth));) {
    var i;
    var s;
    e.heap[n] = e.heap[s];
    n = s;
    s <<= 1;
  }
  e.heap[n] = i;
}
function el(e, r, n) {
  var i;
  var s;
  var o;
  var a;
  var h = 0;
  if (0 !== e.last_lit) do {
    i = e.pending_buf[e.d_buf + 2 * h] << 8 | e.pending_buf[e.d_buf + 2 * h + 1];
    s = e.pending_buf[e.l_buf + h];
    h++;
    0 === i ? H(e, s, r) : (H(e, (o = Q[s]) + k + 1, r), 0 !== (a = N[o]) && X(e, s -= V[o], a), H(e, o = Y(--i), n), 0 !== (a = $[o]) && X(e, i -= B[o], a));
  } while (h < e.last_lit);
  H(e, P, r);
}
function eu(e, r) {
  var n;
  var i;
  var s;
  var o = r.dyn_tree;
  var a = r.stat_desc.static_tree;
  var h = r.stat_desc.has_stree;
  var d = r.stat_desc.elems;
  var p = -1;
  for (n = 0, e.heap_len = 0, e.heap_max = A; n < d; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = p = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
  for (; e.heap_len < 2;) {
    o[2 * (s = e.heap[++e.heap_len] = p < 2 ? ++p : 0)] = 1;
    e.depth[s] = 0;
    e.opt_len--;
    h && (e.static_len -= a[2 * s + 1]);
  }
  for (r.max_code = p, n = e.heap_len >> 1; n >= 1; n--) ea(e, o, n);
  s = d;
  do {
    n = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    ea(e, o, 1);
    i = e.heap[1];
    e.heap[--e.heap_max] = n;
    e.heap[--e.heap_max] = i;
    o[2 * s] = o[2 * n] + o[2 * i];
    e.depth[s] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1;
    o[2 * n + 1] = o[2 * i + 1] = s;
    e.heap[1] = s++;
    ea(e, o, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  ee(e, r);
  et(o, p, e.bl_count);
}
function ec(e, r, n) {
  var i;
  var s;
  var o = -1;
  var a = r[1];
  var h = 0;
  var d = 7;
  var p = 4;
  for (0 === a && (d = 138, p = 3), r[(n + 1) * 2 + 1] = 65535, i = 0; i <= n; i++) {
    s = a;
    a = r[(i + 1) * 2 + 1];
    ++h < d && s === a || (h < p ? e.bl_tree[2 * s] += h : 0 !== s ? (s !== o && e.bl_tree[2 * s]++, e.bl_tree[2 * R]++) : h <= 10 ? e.bl_tree[2 * M]++ : e.bl_tree[2 * D]++, h = 0, o = s, 0 === a ? (d = 138, p = 3) : s === a ? (d = 6, p = 3) : (d = 7, p = 4));
  }
}
function eh(e, r, n) {
  var i;
  var s;
  var o = -1;
  var a = r[1];
  var h = 0;
  var d = 7;
  var p = 4;
  for (0 === a && (d = 138, p = 3), i = 0; i <= n; i++) if (s = a, a = r[(i + 1) * 2 + 1], !(++h < d) || s !== a) {
    if (h < p) do H(e, s, e.bl_tree); while (0 != --h);else 0 !== s ? (s !== o && (H(e, s, e.bl_tree), h--), H(e, R, e.bl_tree), X(e, h - 3, 2)) : h <= 10 ? (H(e, M, e.bl_tree), X(e, h - 3, 3)) : (H(e, D, e.bl_tree), X(e, h - 11, 7));
    h = 0;
    o = s;
    0 === a ? (d = 138, p = 3) : s === a ? (d = 6, p = 3) : (d = 7, p = 4);
  }
}
function ed(e) {
  var r;
  for (ec(e, e.dyn_ltree, e.l_desc.max_code), ec(e, e.dyn_dtree, e.d_desc.max_code), eu(e, e.bl_desc), r = E - 1; r >= 3 && 0 === e.bl_tree[2 * j[r] + 1]; r--);
  e.opt_len += 3 * (r + 1) + 5 + 5 + 4;
  return r;
}
function ef(e, r, n, i) {
  var s;
  for (X(e, r - 257, 5), X(e, n - 1, 5), X(e, i - 4, 4), s = 0; s < i; s++) X(e, e.bl_tree[2 * j[s] + 1], 3);
  eh(e, e.dyn_ltree, r - 1);
  eh(e, e.dyn_dtree, n - 1);
}
function ep(e) {
  var r;
  var n = 0xf3ffc07f;
  for (r = 0; r <= 31; r++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * r]) return d;
  if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return p;
  for (r = 32; r < k; r++) if (0 !== e.dyn_ltree[2 * r]) return p;
  return d;
}
m(B);
var eg = !1;
function em(e) {
  eg || (er(), eg = !0);
  e.l_desc = new W(e.dyn_ltree, i);
  e.d_desc = new W(e.dyn_dtree, s);
  e.bl_desc = new W(e.bl_tree, o);
  e.bi_buf = 0;
  e.bi_valid = 0;
  en(e);
}
function ev(e, r, n, i) {
  X(e, (v << 1) + (i ? 1 : 0), 3);
  es(e, r, n, !0);
}
function ey(e) {
  X(e, y << 1, 3);
  H(e, P, Z);
  J(e);
}
function eb(e, r, n, i) {
  var s;
  var o;
  var a = 0;
  e.level > 0 ? (e.strm.data_type === g && (e.strm.data_type = ep(e)), eu(e, e.l_desc), eu(e, e.d_desc), a = ed(e), s = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= s && (s = o)) : s = o = n + 5;
  n + 4 <= s && -1 !== r ? ev(e, r, n, i) : e.strategy === h || o === s ? (X(e, (y << 1) + (i ? 1 : 0), 3), el(e, Z, F)) : (X(e, (b << 1) + (i ? 1 : 0), 3), ef(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), el(e, e.dyn_ltree, e.dyn_dtree));
  en(e);
  i && ei(e);
}
function eO(e, r, n) {
  e.pending_buf[e.d_buf + 2 * e.last_lit] = r >>> 8 & 255;
  e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & r;
  e.pending_buf[e.l_buf + e.last_lit] = 255 & n;
  e.last_lit++;
  0 === r ? e.dyn_ltree[2 * n]++ : (e.matches++, r--, e.dyn_ltree[(Q[n] + k + 1) * 2]++, e.dyn_dtree[2 * Y(r)]++);
  return e.last_lit === e.lit_bufsize - 1;
}
exports._tr_init = em;
exports._tr_stored_block = ev;
exports._tr_flush_block = eb;
exports._tr_tally = eO;
exports._tr_align = ey;