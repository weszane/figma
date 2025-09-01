let r;
let i;
let A;
let o;
let s;
function a(e) {
  let t = e.length;
  for (; --t >= 0;) e[t] = 0;
}
let l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
let u = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
let g = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
let c = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
let f = Array(576);
a(f);
let d = Array(60);
a(d);
let h = Array(512);
a(h);
let p = Array(256);
a(p);
let C = Array(29);
a(C);
let I = Array(30);
function E(e, t, n, r, i) {
  this.static_tree = e;
  this.extra_bits = t;
  this.extra_base = n;
  this.elems = r;
  this.max_length = i;
  this.has_stree = e && e.length;
}
function B(e, t) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = t;
}
a(I);
let m = e => e < 256 ? h[e] : h[256 + (e >>> 7)];
let y = (e, t) => {
  e.pending_buf[e.pending++] = 255 & t;
  e.pending_buf[e.pending++] = t >>> 8 & 255;
};
let _ = (e, t, n) => {
  e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, y(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
};
let Q = (e, t, n) => {
  _(e, n[2 * t], n[2 * t + 1]);
};
let D = (e, t) => {
  let n = 0;
  do {
    n |= 1 & e;
    e >>>= 1;
    n <<= 1;
  } while (--t > 0);
  return n >>> 1;
};
let w = e => {
  16 === e.bi_valid ? (y(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
};
let b = (e, t) => {
  let n;
  let r;
  let i;
  let A;
  let o;
  let s;
  let a = t.dyn_tree;
  let l = t.max_code;
  let u = t.stat_desc.static_tree;
  let g = t.stat_desc.has_stree;
  let c = t.stat_desc.extra_bits;
  let f = t.stat_desc.extra_base;
  let d = t.stat_desc.max_length;
  let h = 0;
  for (A = 0; A <= 15; A++) e.bl_count[A] = 0;
  for (a[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++) {
    (A = a[2 * a[2 * (r = e.heap[n]) + 1] + 1] + 1) > d && (A = d, h++);
    a[2 * r + 1] = A;
    !(r > l) && (e.bl_count[A]++, o = 0, r >= f && (o = c[r - f]), s = a[2 * r], e.opt_len += s * (A + o), g && (e.static_len += s * (u[2 * r + 1] + o)));
  }
  if (0 !== h) {
    do {
      for (A = d - 1; 0 === e.bl_count[A];) A--;
      e.bl_count[A]--;
      e.bl_count[A + 1] += 2;
      e.bl_count[d]--;
      h -= 2;
    } while (h > 0);
    for (A = d; 0 !== A; A--) for (r = e.bl_count[A]; 0 !== r;) !((i = e.heap[--n]) > l) && (a[2 * i + 1] !== A && (e.opt_len += (A - a[2 * i + 1]) * a[2 * i], a[2 * i + 1] = A), r--);
  }
};
let v = (e, t, n) => {
  let r;
  let i;
  let A = Array(16);
  let o = 0;
  for (r = 1; r <= 15; r++) {
    o = o + n[r - 1] << 1;
    A[r] = o;
  }
  for (i = 0; i <= t; i++) {
    let t = e[2 * i + 1];
    0 !== t && (e[2 * i] = D(A[t]++, t));
  }
};
let k = () => {
  let e;
  let t;
  let n;
  let o;
  let s;
  let a = Array(16);
  for (o = 0, n = 0; o < 28; o++) for (e = 0, C[o] = n; e < 1 << l[o]; e++) p[n++] = o;
  for (p[n - 1] = o, s = 0, o = 0; o < 16; o++) for (e = 0, I[o] = s; e < 1 << u[o]; e++) h[s++] = o;
  for (s >>= 7; o < 30; o++) for (e = 0, I[o] = s << 7; e < 1 << u[o] - 7; e++) h[256 + s++] = o;
  for (t = 0; t <= 15; t++) a[t] = 0;
  for (e = 0; e <= 143;) {
    f[2 * e + 1] = 8;
    e++;
    a[8]++;
  }
  for (; e <= 255;) {
    f[2 * e + 1] = 9;
    e++;
    a[9]++;
  }
  for (; e <= 279;) {
    f[2 * e + 1] = 7;
    e++;
    a[7]++;
  }
  for (; e <= 287;) {
    f[2 * e + 1] = 8;
    e++;
    a[8]++;
  }
  for (v(f, 287, a), e = 0; e < 30; e++) {
    d[2 * e + 1] = 5;
    d[2 * e] = D(e, 5);
  }
  r = new E(f, l, 257, 286, 15);
  i = new E(d, u, 0, 30, 15);
  A = new E([], g, 0, 19, 7);
};
let x = e => {
  let t;
  for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
  for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
  for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
  e.dyn_ltree[512] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
let S = e => {
  e.bi_valid > 8 ? y(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf);
  e.bi_buf = 0;
  e.bi_valid = 0;
};
let F = (e, t, n, r) => {
  let i = 2 * t;
  let A = 2 * n;
  return e[i] < e[A] || e[i] === e[A] && r[t] <= r[n];
};
let N = (e, t, n) => {
  let r = e.heap[n];
  let i = n << 1;
  for (; i <= e.heap_len && (i < e.heap_len && F(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !F(t, r, e.heap[i], e.depth));) {
    e.heap[n] = e.heap[i];
    n = i;
    i <<= 1;
  }
  e.heap[n] = r;
};
let T = (e, t, n) => {
  let r;
  let i;
  let A;
  let o;
  let s = 0;
  if (0 !== e.sym_next) do {
    r = (255 & e.pending_buf[e.sym_buf + s++]) + ((255 & e.pending_buf[e.sym_buf + s++]) << 8);
    i = e.pending_buf[e.sym_buf + s++];
    0 === r ? Q(e, i, t) : (Q(e, (A = p[i]) + 256 + 1, t), 0 !== (o = l[A]) && _(e, i -= C[A], o), Q(e, A = m(--r), n), 0 !== (o = u[A]) && _(e, r -= I[A], o));
  } while (s < e.sym_next);
  Q(e, 256, t);
};
let L = (e, t) => {
  let n;
  let r;
  let i;
  let A = t.dyn_tree;
  let o = t.stat_desc.static_tree;
  let s = t.stat_desc.has_stree;
  let a = t.stat_desc.elems;
  let l = -1;
  for (n = 0, e.heap_len = 0, e.heap_max = 573; n < a; n++) 0 !== A[2 * n] ? (e.heap[++e.heap_len] = l = n, e.depth[n] = 0) : A[2 * n + 1] = 0;
  for (; e.heap_len < 2;) {
    A[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1;
    e.depth[i] = 0;
    e.opt_len--;
    s && (e.static_len -= o[2 * i + 1]);
  }
  for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--) N(e, A, n);
  i = a;
  do {
    n = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    N(e, A, 1);
    r = e.heap[1];
    e.heap[--e.heap_max] = n;
    e.heap[--e.heap_max] = r;
    A[2 * i] = A[2 * n] + A[2 * r];
    e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1;
    A[2 * n + 1] = A[2 * r + 1] = i;
    e.heap[1] = i++;
    N(e, A, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  b(e, t);
  v(A, l, e.bl_count);
};
let R = (e, t, n) => {
  let r;
  let i;
  let A = -1;
  let o = t[1];
  let s = 0;
  let a = 7;
  let l = 4;
  for (0 === o && (a = 138, l = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) {
    i = o;
    o = t[(r + 1) * 2 + 1];
    ++s < a && i === o || (s < l ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== A && e.bl_tree[2 * i]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, s = 0, A = i, 0 === o ? (a = 138, l = 3) : i === o ? (a = 6, l = 3) : (a = 7, l = 4));
  }
};
let M = (e, t, n) => {
  let r;
  let i;
  let A = -1;
  let o = t[1];
  let s = 0;
  let a = 7;
  let l = 4;
  for (0 === o && (a = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[(r + 1) * 2 + 1], !(++s < a) || i !== o) {
    if (s < l) do Q(e, i, e.bl_tree); while (0 != --s);else 0 !== i ? (i !== A && (Q(e, i, e.bl_tree), s--), Q(e, 16, e.bl_tree), _(e, s - 3, 2)) : s <= 10 ? (Q(e, 17, e.bl_tree), _(e, s - 3, 3)) : (Q(e, 18, e.bl_tree), _(e, s - 11, 7));
    s = 0;
    A = i;
    0 === o ? (a = 138, l = 3) : i === o ? (a = 6, l = 3) : (a = 7, l = 4);
  }
};
let O = e => {
  let t;
  for (R(e, e.dyn_ltree, e.l_desc.max_code), R(e, e.dyn_dtree, e.d_desc.max_code), L(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * c[t] + 1]; t--);
  e.opt_len += 3 * (t + 1) + 5 + 5 + 4;
  return t;
};
let G = (e, t, n, r) => {
  let i;
  for (_(e, t - 257, 5), _(e, n - 1, 5), _(e, r - 4, 4), i = 0; i < r; i++) _(e, e.bl_tree[2 * c[i] + 1], 3);
  M(e, e.dyn_ltree, t - 1);
  M(e, e.dyn_dtree, n - 1);
};
let P = e => {
  let t;
  let n = 0xf3ffc07f;
  for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
  if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
  for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
  return 0;
};
let U = !1;
let q = (e, t, n, r) => {
  _(e, 0 + (r ? 1 : 0), 3);
  S(e);
  y(e, n);
  y(e, ~n);
  n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending);
  e.pending += n;
};
var J = {
  _tr_init: e => {
    U || (k(), U = !0);
    e.l_desc = new B(e.dyn_ltree, r);
    e.d_desc = new B(e.dyn_dtree, i);
    e.bl_desc = new B(e.bl_tree, A);
    e.bi_buf = 0;
    e.bi_valid = 0;
    x(e);
  },
  _tr_stored_block: q,
  _tr_flush_block: (e, t, n, r) => {
    let i;
    let A;
    let o = 0;
    e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = P(e)), L(e, e.l_desc), L(e, e.d_desc), o = O(e), i = e.opt_len + 3 + 7 >>> 3, (A = e.static_len + 3 + 7 >>> 3) <= i && (i = A)) : i = A = n + 5;
    n + 4 <= i && -1 !== t ? q(e, t, n, r) : 4 === e.strategy || A === i ? (_(e, 2 + (r ? 1 : 0), 3), T(e, f, d)) : (_(e, 4 + (r ? 1 : 0), 3), G(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), T(e, e.dyn_ltree, e.dyn_dtree));
    x(e);
    r && S(e);
  },
  _tr_tally: (e, t, n) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = n, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(p[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * m(t)]++), e.sym_next === e.sym_end),
  _tr_align: e => {
    _(e, 2, 3);
    Q(e, 256, f);
    w(e);
  }
};
var z = (e, t, n, r) => {
  let i = 65535 & e | 0;
  let A = e >>> 16 & 65535 | 0;
  let o = 0;
  for (; 0 !== n;) {
    o = n > 2e3 ? 2e3 : n;
    n -= o;
    do A = A + (i = i + t[r++] | 0) | 0; while (--o);
    i %= 65521;
    A %= 65521;
  }
  return i | A << 16 | 0;
};
let H = new Uint32Array((() => {
  let e;
  let t = [];
  for (var n = 0; n < 256; n++) {
    e = n;
    for (var r = 0; r < 8; r++) e = 1 & e ? 0xedb88320 ^ e >>> 1 : e >>> 1;
    t[n] = e;
  }
  return t;
})());
var K = (e, t, n, r) => {
  let i = r + n;
  e ^= -1;
  for (let n = r; n < i; n++) e = e >>> 8 ^ H[(e ^ t[n]) & 255];
  return -1 ^ e;
};
var j = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var Y = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
let {
  _tr_init,
  _tr_stored_block,
  _tr_flush_block,
  _tr_tally,
  _tr_align
} = J;
let {
  Z_NO_FLUSH,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH,
  Z_BLOCK,
  Z_OK,
  Z_STREAM_END,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_BUF_ERROR,
  Z_DEFAULT_COMPRESSION,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY,
  Z_UNKNOWN,
  Z_DEFLATED
} = Y;
let eI = (e, t) => (e.msg = j[t], t);
let eE = e => 2 * e - (e > 4 ? 9 : 0);
let eB = e => {
  let t = e.length;
  for (; --t >= 0;) e[t] = 0;
};
let em = e => {
  let t;
  let n;
  let r;
  let i = e.w_size;
  r = t = e.hash_size;
  do {
    n = e.head[--r];
    e.head[r] = n >= i ? n - i : 0;
  } while (--t);
  r = t = i;
  do {
    n = e.prev[--r];
    e.prev[r] = n >= i ? n - i : 0;
  } while (--t);
};
let ey = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask;
let e_ = e => {
  let t = e.state;
  let n = t.pending;
  n > e.avail_out && (n = e.avail_out);
  0 !== n && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, 0 === t.pending && (t.pending_out = 0));
};
let eQ = (e, t) => {
  _tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
  e.block_start = e.strstart;
  e_(e.strm);
};
let eD = (e, t) => {
  e.pending_buf[e.pending++] = t;
};
let ew = (e, t) => {
  e.pending_buf[e.pending++] = t >>> 8 & 255;
  e.pending_buf[e.pending++] = 255 & t;
};
let eb = (e, t, n, r) => {
  let i = e.avail_in;
  return (i > r && (i = r), 0 === i) ? 0 : (e.avail_in -= i, t.set(e.input.subarray(e.next_in, e.next_in + i), n), 1 === e.state.wrap ? e.adler = z(e.adler, t, i, n) : 2 === e.state.wrap && (e.adler = K(e.adler, t, i, n)), e.next_in += i, e.total_in += i, i);
};
let ev = (e, t) => {
  let n;
  let r;
  let i = e.max_chain_length;
  let A = e.strstart;
  let o = e.prev_length;
  let s = e.nice_match;
  let a = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0;
  let l = e.window;
  let u = e.w_mask;
  let g = e.prev;
  let c = e.strstart + 258;
  let f = l[A + o - 1];
  let d = l[A + o];
  e.prev_length >= e.good_match && (i >>= 2);
  s > e.lookahead && (s = e.lookahead);
  do {
    if (l[(n = t) + o] !== d || l[n + o - 1] !== f || l[n] !== l[A] || l[++n] !== l[A + 1]) continue;
    A += 2;
    n++;
    do ; while (l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && l[++A] === l[++n] && A < c);
    if (r = 258 - (c - A), A = c - 258, r > o) {
      if (e.match_start = t, o = r, r >= s) break;
      f = l[A + o - 1];
      d = l[A + o];
    }
  } while ((t = g[t & u]) > a && 0 != --i);
  return o <= e.lookahead ? o : e.lookahead;
};
let ek = e => {
  let t;
  let n;
  let r;
  let i = e.w_size;
  do {
    if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= i + (i - 262) && (e.window.set(e.window.subarray(i, i + i - n), 0), e.match_start -= i, e.strstart -= i, e.block_start -= i, e.insert > e.strstart && (e.insert = e.strstart), em(e), n += i), 0 === e.strm.avail_in) break;
    if (t = eb(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= 3) for (r = e.strstart - e.insert, e.ins_h = e.window[r], e.ins_h = ey(e, e.ins_h, e.window[r + 1]); e.insert && (e.ins_h = ey(e, e.ins_h, e.window[r + 3 - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < 3)););
  } while (e.lookahead < 262 && 0 !== e.strm.avail_in);
};
let ex = (e, t) => {
  let n = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let r;
  let i;
  let A;
  let o = 0;
  let s = e.strm.avail_in;
  do {
    if (r = 65535, A = e.bi_valid + 42 >> 3, e.strm.avail_out < A || (A = e.strm.avail_out - A, r > (i = e.strstart - e.block_start) + e.strm.avail_in && (r = i + e.strm.avail_in), r > A && (r = A), r < n && (0 === r && t !== Z_FINISH || t === Z_NO_FLUSH || r !== i + e.strm.avail_in))) break;
    o = t === Z_FINISH && r === i + e.strm.avail_in ? 1 : 0;
    _tr_stored_block(e, 0, 0, o);
    e.pending_buf[e.pending - 4] = r;
    e.pending_buf[e.pending - 3] = r >> 8;
    e.pending_buf[e.pending - 2] = ~r;
    e.pending_buf[e.pending - 1] = ~r >> 8;
    e_(e.strm);
    i && (i > r && (i = r), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, r -= i);
    r && (eb(e.strm, e.strm.output, e.strm.next_out, r), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r);
  } while (0 === o);
  return ((s -= e.strm.avail_in) && (s >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= s && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), o) ? 4 : t !== Z_NO_FLUSH && t !== Z_FINISH && 0 === e.strm.avail_in && e.strstart === e.block_start ? 2 : (A = e.window_size - e.strstart, e.strm.avail_in > A && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, A += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), A > e.strm.avail_in && (A = e.strm.avail_in), A && (eb(e.strm, e.window, e.strstart, A), e.strstart += A, e.insert += A > e.w_size - e.insert ? e.w_size - e.insert : A), e.high_water < e.strstart && (e.high_water = e.strstart), A = e.bi_valid + 42 >> 3, n = (A = e.pending_buf_size - A > 65535 ? 65535 : e.pending_buf_size - A) > e.w_size ? e.w_size : A, ((i = e.strstart - e.block_start) >= n || (i || t === Z_FINISH) && t !== Z_NO_FLUSH && 0 === e.strm.avail_in && i <= A) && (r = i > A ? A : i, o = t === Z_FINISH && 0 === e.strm.avail_in && r === i ? 1 : 0, _tr_stored_block(e, e.block_start, r, o), e.block_start += r, e_(e.strm)), o ? 3 : 1);
};
let eS = (e, t) => {
  let n;
  let r;
  for (;;) {
    if (e.lookahead < 262) {
      if (ek(e), e.lookahead < 262 && t === Z_NO_FLUSH) return 1;
      if (0 === e.lookahead) break;
    }
    if (n = 0, e.lookahead >= 3 && (e.ins_h = ey(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - 262 && (e.match_length = ev(e, n)), e.match_length >= 3) {
      if (r = _tr_tally(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = ey(e, e.ins_h, e.window[e.strstart + 3 - 1]);
          n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (0 != --e.match_length);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = ey(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      r = _tr_tally(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (r && (eQ(e, !1), 0 === e.strm.avail_out)) return 1;
  }
  return (e.insert = e.strstart < 2 ? e.strstart : 2, t === Z_FINISH) ? (eQ(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.sym_next && (eQ(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
};
let eF = (e, t) => {
  let n;
  let r;
  let i;
  for (;;) {
    if (e.lookahead < 262) {
      if (ek(e), e.lookahead < 262 && t === Z_NO_FLUSH) return 1;
      if (0 === e.lookahead) break;
    }
    if (n = 0, e.lookahead >= 3 && (e.ins_h = ey(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - 262 && (e.match_length = ev(e, n), e.match_length <= 5 && (e.strategy === Z_FILTERED || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - 3;
      r = _tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do ++e.strstart <= i && (e.ins_h = ey(e, e.ins_h, e.window[e.strstart + 3 - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (0 != --e.prev_length);
      if (e.match_available = 0, e.match_length = 2, e.strstart++, r && (eQ(e, !1), 0 === e.strm.avail_out)) return 1;
    } else if (e.match_available) {
      if ((r = _tr_tally(e, 0, e.window[e.strstart - 1])) && eQ(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1;
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  return (e.match_available && (r = _tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === Z_FINISH) ? (eQ(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.sym_next && (eQ(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
};
let eN = (e, t) => {
  let n;
  let r;
  let i;
  let A;
  let o = e.window;
  for (;;) {
    if (e.lookahead <= 258) {
      if (ek(e), e.lookahead <= 258 && t === Z_NO_FLUSH) return 1;
      if (0 === e.lookahead) break;
    }
    if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (r = o[i = e.strstart - 1]) === o[++i] && r === o[++i] && r === o[++i]) {
      A = e.strstart + 258;
      do ; while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < A);
      e.match_length = 258 - (A - i);
      e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= 3 ? (n = _tr_tally(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = _tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (eQ(e, !1), 0 === e.strm.avail_out)) return 1;
  }
  return (e.insert = 0, t === Z_FINISH) ? (eQ(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.sym_next && (eQ(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
};
let eT = (e, t) => {
  let n;
  for (;;) {
    if (0 === e.lookahead && (ek(e), 0 === e.lookahead)) {
      if (t === Z_NO_FLUSH) return 1;
      break;
    }
    if (e.match_length = 0, n = _tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (eQ(e, !1), 0 === e.strm.avail_out)) return 1;
  }
  return (e.insert = 0, t === Z_FINISH) ? (eQ(e, !0), 0 === e.strm.avail_out) ? 3 : 4 : e.sym_next && (eQ(e, !1), 0 === e.strm.avail_out) ? 1 : 2;
};
function eL(e, t, n, r, i) {
  this.good_length = e;
  this.max_lazy = t;
  this.nice_length = n;
  this.max_chain = r;
  this.func = i;
}
let eR = [new eL(0, 0, 0, 0, ex), new eL(4, 4, 8, 4, eS), new eL(4, 5, 16, 8, eS), new eL(4, 6, 32, 32, eS), new eL(4, 4, 16, 16, eF), new eL(8, 16, 32, 32, eF), new eL(8, 16, 128, 128, eF), new eL(8, 32, 128, 256, eF), new eL(32, 128, 258, 1024, eF), new eL(32, 258, 258, 4096, eF)];
let eM = e => {
  e.window_size = 2 * e.w_size;
  eB(e.head);
  e.max_lazy_match = eR[e.level].max_lazy;
  e.good_match = eR[e.level].good_length;
  e.nice_match = eR[e.level].nice_length;
  e.max_chain_length = eR[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = 2;
  e.match_available = 0;
  e.ins_h = 0;
};
function eO() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(1146);
  this.dyn_dtree = new Uint16Array(122);
  this.bl_tree = new Uint16Array(78);
  eB(this.dyn_ltree);
  eB(this.dyn_dtree);
  eB(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(16);
  this.heap = new Uint16Array(573);
  eB(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(573);
  eB(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
let eG = e => {
  if (!e) return 1;
  let t = e.state;
  return t && t.strm === e && (42 === t.status || 57 === t.status || 69 === t.status || 73 === t.status || 91 === t.status || 103 === t.status || 113 === t.status || 666 === t.status) ? 0 : 1;
};
let eP = e => {
  if (eG(e)) return eI(e, Z_STREAM_ERROR);
  e.total_in = e.total_out = 0;
  e.data_type = Z_UNKNOWN;
  let t = e.state;
  t.pending = 0;
  t.pending_out = 0;
  t.wrap < 0 && (t.wrap = -t.wrap);
  t.status = 2 === t.wrap ? 57 : t.wrap ? 42 : 113;
  e.adler = 2 === t.wrap ? 0 : 1;
  t.last_flush = -2;
  _tr_init(t);
  return Z_OK;
};
let eU = e => {
  let t = eP(e);
  t === Z_OK && eM(e.state);
  return t;
};
var eq = {
  deflateInit2: (e, t, n, r, i, A) => {
    if (!e) return Z_STREAM_ERROR;
    let o = 1;
    if (t === Z_DEFAULT_COMPRESSION && (t = 6), r < 0 ? (o = 0, r = -r) : r > 15 && (o = 2, r -= 16), i < 1 || i > 9 || n !== Z_DEFLATED || r < 8 || r > 15 || t < 0 || t > 9 || A < 0 || A > Z_FIXED || 8 === r && 1 !== o) return eI(e, Z_STREAM_ERROR);
    8 === r && (r = 9);
    let s = new eO();
    e.state = s;
    s.strm = e;
    s.status = 42;
    s.wrap = o;
    s.gzhead = null;
    s.w_bits = r;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = i + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3);
    s.window = new Uint8Array(2 * s.w_size);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    s.lit_bufsize = 1 << i + 6;
    s.pending_buf_size = 4 * s.lit_bufsize;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    s.sym_buf = s.lit_bufsize;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    s.level = t;
    s.strategy = A;
    s.method = n;
    return eU(e);
  },
  deflateSetHeader: (e, t) => eG(e) || 2 !== e.state.wrap ? Z_STREAM_ERROR : (e.state.gzhead = t, Z_OK),
  deflate: (e, t) => {
    if (eG(e) || t > Z_BLOCK || t < 0) return e ? eI(e, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    let n = e.state;
    if (!e.output || 0 !== e.avail_in && !e.input || 666 === n.status && t !== Z_FINISH) return eI(e, 0 === e.avail_out ? Z_BUF_ERROR : Z_STREAM_ERROR);
    let r = n.last_flush;
    if (n.last_flush = t, 0 !== n.pending) {
      if (e_(e), 0 === e.avail_out) {
        n.last_flush = -1;
        return Z_OK;
      }
    } else if (0 === e.avail_in && eE(t) <= eE(r) && t !== Z_FINISH) return eI(e, Z_BUF_ERROR);
    if (666 === n.status && 0 !== e.avail_in) return eI(e, Z_BUF_ERROR);
    if (42 === n.status && 0 === n.wrap && (n.status = 113), 42 === n.status) {
      let t = Z_DEFLATED + (n.w_bits - 8 << 4) << 8;
      if (t |= (n.strategy >= Z_HUFFMAN_ONLY || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (t |= 32), ew(n, t += 31 - t % 31), 0 !== n.strstart && (ew(n, e.adler >>> 16), ew(n, 65535 & e.adler)), e.adler = 1, n.status = 113, e_(e), 0 !== n.pending) {
        n.last_flush = -1;
        return Z_OK;
      }
    }
    if (57 === n.status) {
      if (e.adler = 0, eD(n, 31), eD(n, 139), eD(n, 8), n.gzhead) {
        eD(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0));
        eD(n, 255 & n.gzhead.time);
        eD(n, n.gzhead.time >> 8 & 255);
        eD(n, n.gzhead.time >> 16 & 255);
        eD(n, n.gzhead.time >> 24 & 255);
        eD(n, 9 === n.level ? 2 : n.strategy >= Z_HUFFMAN_ONLY || n.level < 2 ? 4 : 0);
        eD(n, 255 & n.gzhead.os);
        n.gzhead.extra && n.gzhead.extra.length && (eD(n, 255 & n.gzhead.extra.length), eD(n, n.gzhead.extra.length >> 8 & 255));
        n.gzhead.hcrc && (e.adler = K(e.adler, n.pending_buf, n.pending, 0));
        n.gzindex = 0;
        n.status = 69;
      } else if (eD(n, 0), eD(n, 0), eD(n, 0), eD(n, 0), eD(n, 0), eD(n, 9 === n.level ? 2 : n.strategy >= Z_HUFFMAN_ONLY || n.level < 2 ? 4 : 0), eD(n, 3), n.status = 113, e_(e), 0 !== n.pending) {
        n.last_flush = -1;
        return Z_OK;
      }
    }
    if (69 === n.status) {
      if (n.gzhead.extra) {
        let t = n.pending;
        let r = (65535 & n.gzhead.extra.length) - n.gzindex;
        for (; n.pending + r > n.pending_buf_size;) {
          let i = n.pending_buf_size - n.pending;
          if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + i), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > t && (e.adler = K(e.adler, n.pending_buf, n.pending - t, t)), n.gzindex += i, e_(e), 0 !== n.pending) {
            n.last_flush = -1;
            return Z_OK;
          }
          t = 0;
          r -= i;
        }
        let i = new Uint8Array(n.gzhead.extra);
        n.pending_buf.set(i.subarray(n.gzindex, n.gzindex + r), n.pending);
        n.pending += r;
        n.gzhead.hcrc && n.pending > t && (e.adler = K(e.adler, n.pending_buf, n.pending - t, t));
        n.gzindex = 0;
      }
      n.status = 73;
    }
    if (73 === n.status) {
      if (n.gzhead.name) {
        let t;
        let r = n.pending;
        do {
          if (n.pending === n.pending_buf_size) {
            if (n.gzhead.hcrc && n.pending > r && (e.adler = K(e.adler, n.pending_buf, n.pending - r, r)), e_(e), 0 !== n.pending) {
              n.last_flush = -1;
              return Z_OK;
            }
            r = 0;
          }
          t = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0;
          eD(n, t);
        } while (0 !== t);
        n.gzhead.hcrc && n.pending > r && (e.adler = K(e.adler, n.pending_buf, n.pending - r, r));
        n.gzindex = 0;
      }
      n.status = 91;
    }
    if (91 === n.status) {
      if (n.gzhead.comment) {
        let t;
        let r = n.pending;
        do {
          if (n.pending === n.pending_buf_size) {
            if (n.gzhead.hcrc && n.pending > r && (e.adler = K(e.adler, n.pending_buf, n.pending - r, r)), e_(e), 0 !== n.pending) {
              n.last_flush = -1;
              return Z_OK;
            }
            r = 0;
          }
          t = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0;
          eD(n, t);
        } while (0 !== t);
        n.gzhead.hcrc && n.pending > r && (e.adler = K(e.adler, n.pending_buf, n.pending - r, r));
      }
      n.status = 103;
    }
    if (103 === n.status) {
      if (n.gzhead.hcrc) {
        if (n.pending + 2 > n.pending_buf_size && (e_(e), 0 !== n.pending)) {
          n.last_flush = -1;
          return Z_OK;
        }
        eD(n, 255 & e.adler);
        eD(n, e.adler >> 8 & 255);
        e.adler = 0;
      }
      if (n.status = 113, e_(e), 0 !== n.pending) {
        n.last_flush = -1;
        return Z_OK;
      }
    }
    if (0 !== e.avail_in || 0 !== n.lookahead || t !== Z_NO_FLUSH && 666 !== n.status) {
      let r = 0 === n.level ? ex(n, t) : n.strategy === Z_HUFFMAN_ONLY ? eT(n, t) : n.strategy === Z_RLE ? eN(n, t) : eR[n.level].func(n, t);
      if ((3 === r || 4 === r) && (n.status = 666), 1 === r || 3 === r) {
        0 === e.avail_out && (n.last_flush = -1);
        return Z_OK;
      }
      if (2 === r && (t === Z_PARTIAL_FLUSH ? _tr_align(n) : t !== Z_BLOCK && (_tr_stored_block(n, 0, 0, !1), t === Z_FULL_FLUSH && (eB(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), e_(e), 0 === e.avail_out)) {
        n.last_flush = -1;
        return Z_OK;
      }
    }
    return t !== Z_FINISH ? Z_OK : n.wrap <= 0 ? Z_STREAM_END : (2 === n.wrap ? (eD(n, 255 & e.adler), eD(n, e.adler >> 8 & 255), eD(n, e.adler >> 16 & 255), eD(n, e.adler >> 24 & 255), eD(n, 255 & e.total_in), eD(n, e.total_in >> 8 & 255), eD(n, e.total_in >> 16 & 255), eD(n, e.total_in >> 24 & 255)) : (ew(n, e.adler >>> 16), ew(n, 65535 & e.adler)), e_(e), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? Z_OK : Z_STREAM_END);
  },
  deflateEnd: e => {
    if (eG(e)) return Z_STREAM_ERROR;
    let t = e.state.status;
    e.state = null;
    return 113 === t ? eI(e, Z_DATA_ERROR) : Z_OK;
  },
  deflateSetDictionary: (e, t) => {
    let n = t.length;
    if (eG(e)) return Z_STREAM_ERROR;
    let r = e.state;
    let i = r.wrap;
    if (2 === i || 1 === i && 42 !== r.status || r.lookahead) return Z_STREAM_ERROR;
    if (1 === i && (e.adler = z(e.adler, t, n, 0)), r.wrap = 0, n >= r.w_size) {
      0 === i && (eB(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
      let e = new Uint8Array(r.w_size);
      e.set(t.subarray(n - r.w_size, n), 0);
      t = e;
      n = r.w_size;
    }
    let A = e.avail_in;
    let o = e.next_in;
    let s = e.input;
    for (e.avail_in = n, e.next_in = 0, e.input = t, ek(r); r.lookahead >= 3;) {
      let e = r.strstart;
      let t = r.lookahead - 2;
      do {
        r.ins_h = ey(r, r.ins_h, r.window[e + 3 - 1]);
        r.prev[e & r.w_mask] = r.head[r.ins_h];
        r.head[r.ins_h] = e;
        e++;
      } while (--t);
      r.strstart = e;
      r.lookahead = 2;
      ek(r);
    }
    r.strstart += r.lookahead;
    r.block_start = r.strstart;
    r.insert = r.lookahead;
    r.lookahead = 0;
    r.match_length = r.prev_length = 2;
    r.match_available = 0;
    e.next_in = o;
    e.input = s;
    e.avail_in = A;
    r.wrap = i;
    return Z_OK;
  }
};
let eJ = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var ez = {
  assign: function (e) {
    let t = Array.prototype.slice.call(arguments, 1);
    for (; t.length;) {
      let n = t.shift();
      if (n) {
        if ("object" != typeof n) throw TypeError(n + "must be non-object");
        for (let t in n) eJ(n, t) && (e[t] = n[t]);
      }
    }
    return e;
  },
  flattenChunks: e => {
    let t = 0;
    for (function () {
      let n = 0;
      let r = e.length;
    }(); n < r; n++) t += e[n].length;
    let n = new Uint8Array(t);
    for (function () {
      let t = 0;
      let r = 0;
      let i = e.length;
    }(); t < i; t++) {
      let i = e[t];
      n.set(i, r);
      r += i.length;
    }
    return n;
  }
};
let eH = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
  eH = !1;
}
let eK = new Uint8Array(256);
for (let e = 0; e < 256; e++) eK[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
eK[254] = eK[254] = 1;
let ej = (e, t) => {
  if (t < 65534 && e.subarray && eH) return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
  let n = "";
  for (let r = 0; r < t; r++) n += String.fromCharCode(e[r]);
  return n;
};
var eY = {
  string2buf: e => {
    if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
    let t;
    let n;
    let r;
    let i;
    let A;
    let o = e.length;
    let s = 0;
    for (i = 0; i < o; i++) {
      (64512 & (n = e.charCodeAt(i))) == 55296 && i + 1 < o && (64512 & (r = e.charCodeAt(i + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++);
      s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    }
    for (A = 0, t = new Uint8Array(s), i = 0; A < s; i++) {
      (64512 & (n = e.charCodeAt(i))) == 55296 && i + 1 < o && (64512 & (r = e.charCodeAt(i + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++);
      n < 128 ? t[A++] = n : (n < 2048 ? t[A++] = 192 | n >>> 6 : (n < 65536 ? t[A++] = 224 | n >>> 12 : (t[A++] = 240 | n >>> 18, t[A++] = 128 | n >>> 12 & 63), t[A++] = 128 | n >>> 6 & 63), t[A++] = 128 | 63 & n);
    }
    return t;
  },
  buf2string: (e, t) => {
    let n;
    let r;
    let i = t || e.length;
    if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, t));
    let A = Array(2 * i);
    for (r = 0, n = 0; n < i;) {
      let t = e[n++];
      if (t < 128) {
        A[r++] = t;
        continue;
      }
      let o = eK[t];
      if (o > 4) {
        A[r++] = 65533;
        n += o - 1;
        continue;
      }
      for (t &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < i;) {
        t = t << 6 | 63 & e[n++];
        o--;
      }
      if (o > 1) {
        A[r++] = 65533;
        continue;
      }
      t < 65536 ? A[r++] = t : (t -= 65536, A[r++] = 55296 | t >> 10 & 1023, A[r++] = 56320 | 1023 & t);
    }
    return ej(A, r);
  },
  utf8border: (e, t) => {
    (t = t || e.length) > e.length && (t = e.length);
    let n = t - 1;
    for (; n >= 0 && (192 & e[n]) == 128;) n--;
    return n < 0 || 0 === n ? t : n + eK[e[n]] > t ? n : t;
  }
};
var eW = function () {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
};
let eV = Object.prototype.toString;
let {
  Z_NO_FLUSH: _Z_NO_FLUSH,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH: _Z_FULL_FLUSH,
  Z_FINISH: _Z_FINISH,
  Z_OK: _Z_OK,
  Z_STREAM_END: _Z_STREAM_END,
  Z_DEFAULT_COMPRESSION: _Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY: _Z_DEFAULT_STRATEGY,
  Z_DEFLATED: _Z_DEFLATED
} = Y;
function e5(e) {
  this.options = ez.assign({
    level: _Z_DEFAULT_COMPRESSION,
    method: _Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: _Z_DEFAULT_STRATEGY
  }, e || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16);
  this.err = 0;
  this.msg = "";
  this.ended = !1;
  this.chunks = [];
  this.strm = new eW();
  this.strm.avail_out = 0;
  let n = eq.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
  if (n !== _Z_OK) throw Error(j[n]);
  if (t.header && eq.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let e;
    if (e = "string" == typeof t.dictionary ? eY.string2buf(t.dictionary) : "[object ArrayBuffer]" === eV.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (n = eq.deflateSetDictionary(this.strm, e)) !== _Z_OK) throw Error(j[n]);
    this._dict_set = !0;
  }
}
function e9(e, t) {
  let n = new e5(t);
  if (n.push(e, !0), n.err) throw n.msg || j[n.err];
  return n.result;
}
e5.prototype.push = function (e, t) {
  let n;
  let r;
  let i = this.strm;
  let A = this.options.chunkSize;
  if (this.ended) return !1;
  for (r = t === ~~t ? t : !0 === t ? _Z_FINISH : _Z_NO_FLUSH, "string" == typeof e ? i.input = eY.string2buf(e) : "[object ArrayBuffer]" === eV.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;;) {
    if (0 === i.avail_out && (i.output = new Uint8Array(A), i.next_out = 0, i.avail_out = A), (r === Z_SYNC_FLUSH || r === _Z_FULL_FLUSH) && i.avail_out <= 6) {
      this.onData(i.output.subarray(0, i.next_out));
      i.avail_out = 0;
      continue;
    }
    if ((n = eq.deflate(i, r)) === _Z_STREAM_END) {
      i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out));
      n = eq.deflateEnd(this.strm);
      this.onEnd(n);
      this.ended = !0;
      return n === _Z_OK;
    }
    if (0 === i.avail_out) {
      this.onData(i.output);
      continue;
    }
    if (r > 0 && i.next_out > 0) {
      this.onData(i.output.subarray(0, i.next_out));
      i.avail_out = 0;
      continue;
    }
    if (0 === i.avail_in) break;
  }
  return !0;
};
e5.prototype.onData = function (e) {
  this.chunks.push(e);
};
e5.prototype.onEnd = function (e) {
  e === _Z_OK && (this.result = ez.flattenChunks(this.chunks));
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
var e4 = function (e, t) {
  let n;
  let r;
  let i;
  let A;
  let o;
  let s;
  let a;
  let l;
  let u;
  let g;
  let c;
  let f;
  let d;
  let h;
  let p;
  let C;
  let I;
  let E;
  let B;
  let m;
  let y;
  let _;
  let Q;
  let D;
  let w = e.state;
  n = e.next_in;
  Q = e.input;
  r = n + (e.avail_in - 5);
  i = e.next_out;
  D = e.output;
  A = i - (t - e.avail_out);
  o = i + (e.avail_out - 257);
  s = w.dmax;
  a = w.wsize;
  l = w.whave;
  u = w.wnext;
  g = w.window;
  c = w.hold;
  f = w.bits;
  d = w.lencode;
  h = w.distcode;
  p = (1 << w.lenbits) - 1;
  C = (1 << w.distbits) - 1;
  n: do for (f < 15 && (c += Q[n++] << f, f += 8, c += Q[n++] << f, f += 8), I = d[c & p];;) {
    if (c >>>= E = I >>> 24, f -= E, 0 == (E = I >>> 16 & 255)) D[i++] = 65535 & I;else if (16 & E) for (B = 65535 & I, (E &= 15) && (f < E && (c += Q[n++] << f, f += 8), B += c & (1 << E) - 1, c >>>= E, f -= E), f < 15 && (c += Q[n++] << f, f += 8, c += Q[n++] << f, f += 8), I = h[c & C];;) {
      if (c >>>= E = I >>> 24, f -= E, 16 & (E = I >>> 16 & 255)) {
        if (m = 65535 & I, f < (E &= 15) && (c += Q[n++] << f, (f += 8) < E && (c += Q[n++] << f, f += 8)), (m += c & (1 << E) - 1) > s) {
          e.msg = "invalid distance too far back";
          w.mode = 16209;
          break n;
        }
        if (c >>>= E, f -= E, m > (E = i - A)) {
          if ((E = m - E) > l && w.sane) {
            e.msg = "invalid distance too far back";
            w.mode = 16209;
            break n;
          }
          if (y = 0, _ = g, 0 === u) {
            if (y += a - E, E < B) {
              B -= E;
              do D[i++] = g[y++]; while (--E);
              y = i - m;
              _ = D;
            }
          } else if (u < E) {
            if (y += a + u - E, (E -= u) < B) {
              B -= E;
              do D[i++] = g[y++]; while (--E);
              if (y = 0, u < B) {
                B -= E = u;
                do D[i++] = g[y++]; while (--E);
                y = i - m;
                _ = D;
              }
            }
          } else if (y += u - E, E < B) {
            B -= E;
            do D[i++] = g[y++]; while (--E);
            y = i - m;
            _ = D;
          }
          for (; B > 2;) {
            D[i++] = _[y++];
            D[i++] = _[y++];
            D[i++] = _[y++];
            B -= 3;
          }
          B && (D[i++] = _[y++], B > 1 && (D[i++] = _[y++]));
        } else {
          y = i - m;
          do {
            D[i++] = D[y++];
            D[i++] = D[y++];
            D[i++] = D[y++];
            B -= 3;
          } while (B > 2);
          B && (D[i++] = D[y++], B > 1 && (D[i++] = D[y++]));
        }
      } else if ((64 & E) == 0) {
        I = h[(65535 & I) + (c & (1 << E) - 1)];
        continue;
      } else {
        e.msg = "invalid distance code";
        w.mode = 16209;
        break n;
      }
      break;
    } else if ((64 & E) == 0) {
      I = d[(65535 & I) + (c & (1 << E) - 1)];
      continue;
    } else if (32 & E) {
      w.mode = 16191;
      break n;
    } else {
      e.msg = "invalid literal/length code";
      w.mode = 16209;
      break n;
    }
    break;
  } while (n < r && i < o);
  n -= B = f >> 3;
  f -= B << 3;
  c &= (1 << f) - 1;
  e.next_in = n;
  e.next_out = i;
  e.avail_in = n < r ? 5 + (r - n) : 5 - (n - r);
  e.avail_out = i < o ? 257 + (o - i) : 257 - (i - o);
  w.hold = c;
  w.bits = f;
};
let e7 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
let te = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
let tt = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
let tn = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
var tr = (e, t, n, r, i, A, o, s) => {
  let a;
  let l;
  let u;
  let g;
  let c;
  let f;
  let d;
  let h;
  let p;
  let C = s.bits;
  let I = 0;
  let E = 0;
  let B = 0;
  let m = 0;
  let y = 0;
  let _ = 0;
  let Q = 0;
  let D = 0;
  let w = 0;
  let b = 0;
  let v = null;
  let k = new Uint16Array(16);
  let x = new Uint16Array(16);
  let S = null;
  for (I = 0; I <= 15; I++) k[I] = 0;
  for (E = 0; E < r; E++) k[t[n + E]]++;
  for (m = 15, y = C; m >= 1 && 0 === k[m]; m--);
  if (y > m && (y = m), 0 === m) {
    i[A++] = 0x1400000;
    i[A++] = 0x1400000;
    s.bits = 1;
    return 0;
  }
  for (B = 1; B < m && 0 === k[B]; B++);
  for (y < B && (y = B), D = 1, I = 1; I <= 15; I++) if (D <<= 1, (D -= k[I]) < 0) return -1;
  if (D > 0 && (0 === e || 1 !== m)) return -1;
  for (I = 1, x[1] = 0; I < 15; I++) x[I + 1] = x[I] + k[I];
  for (E = 0; E < r; E++) 0 !== t[n + E] && (o[x[t[n + E]]++] = E);
  if (0 === e ? (v = S = o, f = 20) : 1 === e ? (v = e7, S = te, f = 257) : (v = tt, S = tn, f = 0), b = 0, E = 0, I = B, c = A, _ = y, Q = 0, u = -1, g = (w = 1 << y) - 1, 1 === e && w > 852 || 2 === e && w > 592) return 1;
  for (;;) {
    d = I - Q;
    o[E] + 1 < f ? (h = 0, p = o[E]) : o[E] >= f ? (h = S[o[E] - f], p = v[o[E] - f]) : (h = 96, p = 0);
    a = 1 << I - Q;
    B = l = 1 << _;
    do i[c + (b >> Q) + (l -= a)] = d << 24 | h << 16 | p | 0; while (0 !== l);
    for (a = 1 << I - 1; b & a;) a >>= 1;
    if (0 !== a ? (b &= a - 1, b += a) : b = 0, E++, 0 == --k[I]) {
      if (I === m) break;
      I = t[n + o[E]];
    }
    if (I > y && (b & g) !== u) {
      for (0 === Q && (Q = y), c += B, D = 1 << (_ = I - Q); _ + Q < m && !((D -= k[_ + Q]) <= 0);) {
        _++;
        D <<= 1;
      }
      if (w += 1 << _, 1 === e && w > 852 || 2 === e && w > 592) return 1;
      i[u = b & g] = y << 24 | _ << 16 | c - A | 0;
    }
  }
  0 !== b && (i[c + b] = I - Q << 24 | 4194304);
  s.bits = y;
  return 0;
};
let {
  Z_FINISH: _Z_FINISH2,
  Z_BLOCK: _Z_BLOCK,
  Z_TREES,
  Z_OK: _Z_OK2,
  Z_STREAM_END: _Z_STREAM_END2,
  Z_NEED_DICT,
  Z_STREAM_ERROR: _Z_STREAM_ERROR,
  Z_DATA_ERROR: _Z_DATA_ERROR,
  Z_MEM_ERROR,
  Z_BUF_ERROR: _Z_BUF_ERROR,
  Z_DEFLATED: _Z_DEFLATED2
} = Y;
let th = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
function tp() {
  this.strm = null;
  this.mode = 0;
  this.last = !1;
  this.wrap = 0;
  this.havedict = !1;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
let tC = e => {
  if (!e) return 1;
  let t = e.state;
  return !t || t.strm !== e || t.mode < 16180 || t.mode > 16211 ? 1 : 0;
};
let tI = e => {
  if (tC(e)) return _Z_STREAM_ERROR;
  let t = e.state;
  e.total_in = e.total_out = t.total = 0;
  e.msg = "";
  t.wrap && (e.adler = 1 & t.wrap);
  t.mode = 16180;
  t.last = 0;
  t.havedict = 0;
  t.flags = -1;
  t.dmax = 32768;
  t.head = null;
  t.hold = 0;
  t.bits = 0;
  t.lencode = t.lendyn = new Int32Array(852);
  t.distcode = t.distdyn = new Int32Array(592);
  t.sane = 1;
  t.back = -1;
  return _Z_OK2;
};
let tE = e => {
  if (tC(e)) return _Z_STREAM_ERROR;
  let t = e.state;
  t.wsize = 0;
  t.whave = 0;
  t.wnext = 0;
  return tI(e);
};
let tB = (e, t) => {
  let n;
  if (tC(e)) return _Z_STREAM_ERROR;
  let r = e.state;
  return (t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? _Z_STREAM_ERROR : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, tE(e));
};
let tm = !0;
let ty = e => {
  if (tm) {
    o = new Int32Array(512);
    s = new Int32Array(32);
    let t = 0;
    for (; t < 144;) e.lens[t++] = 8;
    for (; t < 256;) e.lens[t++] = 9;
    for (; t < 280;) e.lens[t++] = 7;
    for (; t < 288;) e.lens[t++] = 8;
    for (tr(1, e.lens, 0, 288, o, 0, e.work, {
      bits: 9
    }), t = 0; t < 32;) e.lens[t++] = 5;
    tr(2, e.lens, 0, 32, s, 0, e.work, {
      bits: 5
    });
    tm = !1;
  }
  e.lencode = o;
  e.lenbits = 9;
  e.distcode = s;
  e.distbits = 5;
};
let t_ = (e, t, n, r) => {
  let i;
  let A = e.state;
  null === A.window && (A.wsize = 1 << A.wbits, A.wnext = 0, A.whave = 0, A.window = new Uint8Array(A.wsize));
  r >= A.wsize ? (A.window.set(t.subarray(n - A.wsize, n), 0), A.wnext = 0, A.whave = A.wsize) : ((i = A.wsize - A.wnext) > r && (i = r), A.window.set(t.subarray(n - r, n - r + i), A.wnext), (r -= i) ? (A.window.set(t.subarray(n - r, n), 0), A.wnext = r, A.whave = A.wsize) : (A.wnext += i, A.wnext === A.wsize && (A.wnext = 0), A.whave < A.wsize && (A.whave += i)));
  return 0;
};
var tQ = {
  inflateReset: tE,
  inflateInit2: (e, t) => {
    if (!e) return _Z_STREAM_ERROR;
    let n = new tp();
    e.state = n;
    n.strm = e;
    n.window = null;
    n.mode = 16180;
    let r = tB(e, t);
    r !== _Z_OK2 && (e.state = null);
    return r;
  },
  inflate: (e, t) => {
    let n;
    let r;
    let i;
    let A;
    let o;
    let s;
    let a;
    let l;
    let u;
    let g;
    let c;
    let f;
    let d;
    let h;
    let p;
    let C;
    let I;
    let E;
    let B;
    let m;
    let y;
    let _;
    let Q;
    let D;
    let w = 0;
    let b = new Uint8Array(4);
    let v = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    if (tC(e) || !e.output || !e.input && 0 !== e.avail_in) return _Z_STREAM_ERROR;
    16191 === (n = e.state).mode && (n.mode = 16192);
    o = e.next_out;
    i = e.output;
    a = e.avail_out;
    A = e.next_in;
    r = e.input;
    s = e.avail_in;
    l = n.hold;
    u = n.bits;
    g = s;
    c = a;
    _ = _Z_OK2;
    r: for (;;) switch (n.mode) {
      case 16180:
        if (0 === n.wrap) {
          n.mode = 16192;
          break;
        }
        for (; u < 16;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if (2 & n.wrap && 35615 === l) {
          0 === n.wbits && (n.wbits = 15);
          n.check = 0;
          b[0] = 255 & l;
          b[1] = l >>> 8 & 255;
          n.check = K(n.check, b, 2, 0);
          l = 0;
          u = 0;
          n.mode = 16181;
          break;
        }
        if (n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
          e.msg = "incorrect header check";
          n.mode = 16209;
          break;
        }
        if ((15 & l) !== _Z_DEFLATED2) {
          e.msg = "unknown compression method";
          n.mode = 16209;
          break;
        }
        if (l >>>= 4, u -= 4, y = (15 & l) + 8, 0 === n.wbits && (n.wbits = y), y > 15 || y > n.wbits) {
          e.msg = "invalid window size";
          n.mode = 16209;
          break;
        }
        n.dmax = 1 << n.wbits;
        n.flags = 0;
        e.adler = n.check = 1;
        n.mode = 512 & l ? 16189 : 16191;
        l = 0;
        u = 0;
        break;
      case 16181:
        for (; u < 16;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if (n.flags = l, (255 & n.flags) !== _Z_DEFLATED2) {
          e.msg = "unknown compression method";
          n.mode = 16209;
          break;
        }
        if (57344 & n.flags) {
          e.msg = "unknown header flags set";
          n.mode = 16209;
          break;
        }
        n.head && (n.head.text = l >> 8 & 1);
        512 & n.flags && 4 & n.wrap && (b[0] = 255 & l, b[1] = l >>> 8 & 255, n.check = K(n.check, b, 2, 0));
        l = 0;
        u = 0;
        n.mode = 16182;
      case 16182:
        for (; u < 32;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        n.head && (n.head.time = l);
        512 & n.flags && 4 & n.wrap && (b[0] = 255 & l, b[1] = l >>> 8 & 255, b[2] = l >>> 16 & 255, b[3] = l >>> 24 & 255, n.check = K(n.check, b, 4, 0));
        l = 0;
        u = 0;
        n.mode = 16183;
      case 16183:
        for (; u < 16;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        n.head && (n.head.xflags = 255 & l, n.head.os = l >> 8);
        512 & n.flags && 4 & n.wrap && (b[0] = 255 & l, b[1] = l >>> 8 & 255, n.check = K(n.check, b, 2, 0));
        l = 0;
        u = 0;
        n.mode = 16184;
      case 16184:
        if (1024 & n.flags) {
          for (; u < 16;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          n.length = l;
          n.head && (n.head.extra_len = l);
          512 & n.flags && 4 & n.wrap && (b[0] = 255 & l, b[1] = l >>> 8 & 255, n.check = K(n.check, b, 2, 0));
          l = 0;
          u = 0;
        } else n.head && (n.head.extra = null);
        n.mode = 16185;
      case 16185:
        if (1024 & n.flags && ((f = n.length) > s && (f = s), f && (n.head && (y = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(r.subarray(A, A + f), y)), 512 & n.flags && 4 & n.wrap && (n.check = K(n.check, r, f, A)), s -= f, A += f, n.length -= f), n.length)) break r;
        n.length = 0;
        n.mode = 16186;
      case 16186:
        if (2048 & n.flags) {
          if (0 === s) break r;
          f = 0;
          do {
            y = r[A + f++];
            n.head && y && n.length < 65536 && (n.head.name += String.fromCharCode(y));
          } while (y && f < s);
          if (512 & n.flags && 4 & n.wrap && (n.check = K(n.check, r, f, A)), s -= f, A += f, y) break r;
        } else n.head && (n.head.name = null);
        n.length = 0;
        n.mode = 16187;
      case 16187:
        if (4096 & n.flags) {
          if (0 === s) break r;
          f = 0;
          do {
            y = r[A + f++];
            n.head && y && n.length < 65536 && (n.head.comment += String.fromCharCode(y));
          } while (y && f < s);
          if (512 & n.flags && 4 & n.wrap && (n.check = K(n.check, r, f, A)), s -= f, A += f, y) break r;
        } else n.head && (n.head.comment = null);
        n.mode = 16188;
      case 16188:
        if (512 & n.flags) {
          for (; u < 16;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          if (4 & n.wrap && l !== (65535 & n.check)) {
            e.msg = "header crc mismatch";
            n.mode = 16209;
            break;
          }
          l = 0;
          u = 0;
        }
        n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0);
        e.adler = n.check = 0;
        n.mode = 16191;
        break;
      case 16189:
        for (; u < 32;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        e.adler = n.check = th(l);
        l = 0;
        u = 0;
        n.mode = 16190;
      case 16190:
        if (0 === n.havedict) {
          e.next_out = o;
          e.avail_out = a;
          e.next_in = A;
          e.avail_in = s;
          n.hold = l;
          n.bits = u;
          return Z_NEED_DICT;
        }
        e.adler = n.check = 1;
        n.mode = 16191;
      case 16191:
        if (t === _Z_BLOCK || t === Z_TREES) break r;
      case 16192:
        if (n.last) {
          l >>>= 7 & u;
          u -= 7 & u;
          n.mode = 16206;
          break;
        }
        for (; u < 3;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        switch (n.last = 1 & l, u -= 1, 3 & (l >>>= 1)) {
          case 0:
            n.mode = 16193;
            break;
          case 1:
            if (ty(n), n.mode = 16199, t === Z_TREES) {
              l >>>= 2;
              u -= 2;
              break r;
            }
            break;
          case 2:
            n.mode = 16196;
            break;
          case 3:
            e.msg = "invalid block type";
            n.mode = 16209;
        }
        l >>>= 2;
        u -= 2;
        break;
      case 16193:
        for (l >>>= 7 & u, u -= 7 & u; u < 32;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if ((65535 & l) != (l >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths";
          n.mode = 16209;
          break;
        }
        if (n.length = 65535 & l, l = 0, u = 0, n.mode = 16194, t === Z_TREES) break r;
      case 16194:
        n.mode = 16195;
      case 16195:
        if (f = n.length) {
          if (f > s && (f = s), f > a && (f = a), 0 === f) break r;
          i.set(r.subarray(A, A + f), o);
          s -= f;
          A += f;
          a -= f;
          o += f;
          n.length -= f;
          break;
        }
        n.mode = 16191;
        break;
      case 16196:
        for (; u < 14;) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if (n.nlen = (31 & l) + 257, l >>>= 5, u -= 5, n.ndist = (31 & l) + 1, l >>>= 5, u -= 5, n.ncode = (15 & l) + 4, l >>>= 4, u -= 4, n.nlen > 286 || n.ndist > 30) {
          e.msg = "too many length or distance symbols";
          n.mode = 16209;
          break;
        }
        n.have = 0;
        n.mode = 16197;
      case 16197:
        for (; n.have < n.ncode;) {
          for (; u < 3;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          n.lens[v[n.have++]] = 7 & l;
          l >>>= 3;
          u -= 3;
        }
        for (; n.have < 19;) n.lens[v[n.have++]] = 0;
        if (n.lencode = n.lendyn, n.lenbits = 7, Q = {
          bits: n.lenbits
        }, _ = tr(0, n.lens, 0, 19, n.lencode, 0, n.work, Q), n.lenbits = Q.bits, _) {
          e.msg = "invalid code lengths set";
          n.mode = 16209;
          break;
        }
        n.have = 0;
        n.mode = 16198;
      case 16198:
        for (; n.have < n.nlen + n.ndist;) {
          for (; p = (w = n.lencode[l & (1 << n.lenbits) - 1]) >>> 24, C = w >>> 16 & 255, I = 65535 & w, !(p <= u);) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          if (I < 16) {
            l >>>= p;
            u -= p;
            n.lens[n.have++] = I;
          } else {
            if (16 === I) {
              for (D = p + 2; u < D;) {
                if (0 === s) break r;
                s--;
                l += r[A++] << u;
                u += 8;
              }
              if (l >>>= p, u -= p, 0 === n.have) {
                e.msg = "invalid bit length repeat";
                n.mode = 16209;
                break;
              }
              y = n.lens[n.have - 1];
              f = 3 + (3 & l);
              l >>>= 2;
              u -= 2;
            } else if (17 === I) {
              for (D = p + 3; u < D;) {
                if (0 === s) break r;
                s--;
                l += r[A++] << u;
                u += 8;
              }
              l >>>= p;
              u -= p;
              y = 0;
              f = 3 + (7 & l);
              l >>>= 3;
              u -= 3;
            } else {
              for (D = p + 7; u < D;) {
                if (0 === s) break r;
                s--;
                l += r[A++] << u;
                u += 8;
              }
              l >>>= p;
              u -= p;
              y = 0;
              f = 11 + (127 & l);
              l >>>= 7;
              u -= 7;
            }
            if (n.have + f > n.nlen + n.ndist) {
              e.msg = "invalid bit length repeat";
              n.mode = 16209;
              break;
            }
            for (; f--;) n.lens[n.have++] = y;
          }
        }
        if (16209 === n.mode) break;
        if (0 === n.lens[256]) {
          e.msg = "invalid code -- missing end-of-block";
          n.mode = 16209;
          break;
        }
        if (n.lenbits = 9, Q = {
          bits: n.lenbits
        }, _ = tr(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, Q), n.lenbits = Q.bits, _) {
          e.msg = "invalid literal/lengths set";
          n.mode = 16209;
          break;
        }
        if (n.distbits = 6, n.distcode = n.distdyn, Q = {
          bits: n.distbits
        }, _ = tr(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, Q), n.distbits = Q.bits, _) {
          e.msg = "invalid distances set";
          n.mode = 16209;
          break;
        }
        if (n.mode = 16199, t === Z_TREES) break r;
      case 16199:
        n.mode = 16200;
      case 16200:
        if (s >= 6 && a >= 258) {
          e.next_out = o;
          e.avail_out = a;
          e.next_in = A;
          e.avail_in = s;
          n.hold = l;
          n.bits = u;
          e4(e, c);
          o = e.next_out;
          i = e.output;
          a = e.avail_out;
          A = e.next_in;
          r = e.input;
          s = e.avail_in;
          l = n.hold;
          u = n.bits;
          16191 === n.mode && (n.back = -1);
          break;
        }
        for (n.back = 0; p = (w = n.lencode[l & (1 << n.lenbits) - 1]) >>> 24, C = w >>> 16 & 255, I = 65535 & w, !(p <= u);) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if (C && (240 & C) == 0) {
          for (E = p, B = C, m = I; p = (w = n.lencode[m + ((l & (1 << E + B) - 1) >> E)]) >>> 24, C = w >>> 16 & 255, I = 65535 & w, !(E + p <= u);) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          l >>>= E;
          u -= E;
          n.back += E;
        }
        if (l >>>= p, u -= p, n.back += p, n.length = I, 0 === C) {
          n.mode = 16205;
          break;
        }
        if (32 & C) {
          n.back = -1;
          n.mode = 16191;
          break;
        }
        if (64 & C) {
          e.msg = "invalid literal/length code";
          n.mode = 16209;
          break;
        }
        n.extra = 15 & C;
        n.mode = 16201;
      case 16201:
        if (n.extra) {
          for (D = n.extra; u < D;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          n.length += l & (1 << n.extra) - 1;
          l >>>= n.extra;
          u -= n.extra;
          n.back += n.extra;
        }
        n.was = n.length;
        n.mode = 16202;
      case 16202:
        for (; p = (w = n.distcode[l & (1 << n.distbits) - 1]) >>> 24, C = w >>> 16 & 255, I = 65535 & w, !(p <= u);) {
          if (0 === s) break r;
          s--;
          l += r[A++] << u;
          u += 8;
        }
        if ((240 & C) == 0) {
          for (E = p, B = C, m = I; p = (w = n.distcode[m + ((l & (1 << E + B) - 1) >> E)]) >>> 24, C = w >>> 16 & 255, I = 65535 & w, !(E + p <= u);) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          l >>>= E;
          u -= E;
          n.back += E;
        }
        if (l >>>= p, u -= p, n.back += p, 64 & C) {
          e.msg = "invalid distance code";
          n.mode = 16209;
          break;
        }
        n.offset = I;
        n.extra = 15 & C;
        n.mode = 16203;
      case 16203:
        if (n.extra) {
          for (D = n.extra; u < D;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          n.offset += l & (1 << n.extra) - 1;
          l >>>= n.extra;
          u -= n.extra;
          n.back += n.extra;
        }
        if (n.offset > n.dmax) {
          e.msg = "invalid distance too far back";
          n.mode = 16209;
          break;
        }
        n.mode = 16204;
      case 16204:
        if (0 === a) break r;
        if (f = c - a, n.offset > f) {
          if ((f = n.offset - f) > n.whave && n.sane) {
            e.msg = "invalid distance too far back";
            n.mode = 16209;
            break;
          }
          f > n.wnext ? (f -= n.wnext, d = n.wsize - f) : d = n.wnext - f;
          f > n.length && (f = n.length);
          h = n.window;
        } else {
          h = i;
          d = o - n.offset;
          f = n.length;
        }
        f > a && (f = a);
        a -= f;
        n.length -= f;
        do i[o++] = h[d++]; while (--f);
        0 === n.length && (n.mode = 16200);
        break;
      case 16205:
        if (0 === a) break r;
        i[o++] = n.length;
        a--;
        n.mode = 16200;
        break;
      case 16206:
        if (n.wrap) {
          for (; u < 32;) {
            if (0 === s) break r;
            s--;
            l |= r[A++] << u;
            u += 8;
          }
          if (c -= a, e.total_out += c, n.total += c, 4 & n.wrap && c && (e.adler = n.check = n.flags ? K(n.check, i, c, o - c) : z(n.check, i, c, o - c)), c = a, 4 & n.wrap && (n.flags ? l : th(l)) !== n.check) {
            e.msg = "incorrect data check";
            n.mode = 16209;
            break;
          }
          l = 0;
          u = 0;
        }
        n.mode = 16207;
      case 16207:
        if (n.wrap && n.flags) {
          for (; u < 32;) {
            if (0 === s) break r;
            s--;
            l += r[A++] << u;
            u += 8;
          }
          if (4 & n.wrap && l !== (0xffffffff & n.total)) {
            e.msg = "incorrect length check";
            n.mode = 16209;
            break;
          }
          l = 0;
          u = 0;
        }
        n.mode = 16208;
      case 16208:
        _ = _Z_STREAM_END2;
        break r;
      case 16209:
        _ = _Z_DATA_ERROR;
        break r;
      case 16210:
        return Z_MEM_ERROR;
      default:
        return _Z_STREAM_ERROR;
    }
    e.next_out = o;
    e.avail_out = a;
    e.next_in = A;
    e.avail_in = s;
    n.hold = l;
    n.bits = u;
    (n.wsize || c !== e.avail_out && n.mode < 16209 && (n.mode < 16206 || t !== _Z_FINISH2)) && t_(e, e.output, e.next_out, c - e.avail_out);
    g -= e.avail_in;
    c -= e.avail_out;
    e.total_in += g;
    e.total_out += c;
    n.total += c;
    4 & n.wrap && c && (e.adler = n.check = n.flags ? K(n.check, i, c, e.next_out - c) : z(n.check, i, c, e.next_out - c));
    e.data_type = n.bits + (n.last ? 64 : 0) + (16191 === n.mode ? 128 : 0) + (16199 === n.mode || 16194 === n.mode ? 256 : 0);
    (0 === g && 0 === c || t === _Z_FINISH2) && _ === _Z_OK2 && (_ = _Z_BUF_ERROR);
    return _;
  },
  inflateEnd: e => {
    if (tC(e)) return _Z_STREAM_ERROR;
    let t = e.state;
    t.window && (t.window = null);
    e.state = null;
    return _Z_OK2;
  },
  inflateGetHeader: (e, t) => {
    if (tC(e)) return _Z_STREAM_ERROR;
    let n = e.state;
    return (2 & n.wrap) == 0 ? _Z_STREAM_ERROR : (n.head = t, t.done = !1, _Z_OK2);
  },
  inflateSetDictionary: (e, t) => {
    let n;
    let r = t.length;
    return tC(e) || 0 !== (n = e.state).wrap && 16190 !== n.mode ? _Z_STREAM_ERROR : 16190 === n.mode && z(1, t, r, 0) !== n.check ? _Z_DATA_ERROR : t_(e, t, r, r) ? (n.mode = 16210, Z_MEM_ERROR) : (n.havedict = 1, _Z_OK2);
  }
};
var tD = function () {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = !1;
};
let tw = Object.prototype.toString;
let {
  Z_NO_FLUSH: _Z_NO_FLUSH2,
  Z_FINISH: _Z_FINISH3,
  Z_OK: _Z_OK3,
  Z_STREAM_END: _Z_STREAM_END3,
  Z_NEED_DICT: _Z_NEED_DICT,
  Z_STREAM_ERROR: _Z_STREAM_ERROR2,
  Z_DATA_ERROR: _Z_DATA_ERROR2,
  Z_MEM_ERROR: _Z_MEM_ERROR
} = Y;
function tL(e) {
  this.options = ez.assign({
    chunkSize: 65536,
    windowBits: 15,
    to: ""
  }, e || {});
  let t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15));
  t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32);
  t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15);
  this.err = 0;
  this.msg = "";
  this.ended = !1;
  this.chunks = [];
  this.strm = new eW();
  this.strm.avail_out = 0;
  let n = tQ.inflateInit2(this.strm, t.windowBits);
  if (n !== _Z_OK3 || (this.header = new tD(), tQ.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = eY.string2buf(t.dictionary) : "[object ArrayBuffer]" === tw.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = tQ.inflateSetDictionary(this.strm, t.dictionary)) !== _Z_OK3))) throw Error(j[n]);
}
function tR(e, t) {
  let n = new tL(t);
  if (n.push(e), n.err) throw n.msg || j[n.err];
  return n.result;
}
tL.prototype.push = function (e, t) {
  let n;
  let r;
  let i;
  let A = this.strm;
  let o = this.options.chunkSize;
  let s = this.options.dictionary;
  if (this.ended) return !1;
  for (r = t === ~~t ? t : !0 === t ? _Z_FINISH3 : _Z_NO_FLUSH2, "[object ArrayBuffer]" === tw.call(e) ? A.input = new Uint8Array(e) : A.input = e, A.next_in = 0, A.avail_in = A.input.length;;) {
    for (0 === A.avail_out && (A.output = new Uint8Array(o), A.next_out = 0, A.avail_out = o), (n = tQ.inflate(A, r)) === _Z_NEED_DICT && s && ((n = tQ.inflateSetDictionary(A, s)) === _Z_OK3 ? n = tQ.inflate(A, r) : n === _Z_DATA_ERROR2 && (n = _Z_NEED_DICT)); A.avail_in > 0 && n === _Z_STREAM_END3 && A.state.wrap > 0 && 0 !== e[A.next_in];) {
      tQ.inflateReset(A);
      n = tQ.inflate(A, r);
    }
    switch (n) {
      case _Z_STREAM_ERROR2:
      case _Z_DATA_ERROR2:
      case _Z_NEED_DICT:
      case _Z_MEM_ERROR:
        this.onEnd(n);
        this.ended = !0;
        return !1;
    }
    if (i = A.avail_out, A.next_out && (0 === A.avail_out || n === _Z_STREAM_END3)) {
      if ("string" === this.options.to) {
        let e = eY.utf8border(A.output, A.next_out);
        let t = A.next_out - e;
        let n = eY.buf2string(A.output, e);
        A.next_out = t;
        A.avail_out = o - t;
        t && A.output.set(A.output.subarray(e, e + t), 0);
        this.onData(n);
      } else this.onData(A.output.length === A.next_out ? A.output : A.output.subarray(0, A.next_out));
    }
    if (n !== _Z_OK3 || 0 !== i) {
      if (n === _Z_STREAM_END3) {
        n = tQ.inflateEnd(this.strm);
        this.onEnd(n);
        this.ended = !0;
        return !0;
      }
      if (0 === A.avail_in) break;
    }
  }
  return !0;
};
tL.prototype.onData = function (e) {
  this.chunks.push(e);
};
tL.prototype.onEnd = function (e) {
  e === _Z_OK3 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = ez.flattenChunks(this.chunks));
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
let {
  Deflate,
  deflate,
  deflateRaw,
  gzip
} = {
  Deflate: e5,
  deflate: e9,
  deflateRaw: function (e, t) {
    (t = t || {}).raw = !0;
    return e9(e, t);
  },
  gzip: function (e, t) {
    (t = t || {}).gzip = !0;
    return e9(e, t);
  },
  constants: Y
};
let {
  Inflate,
  inflate,
  inflateRaw,
  ungzip
} = {
  Inflate: tL,
  inflate: tR,
  inflateRaw: function (e, t) {
    (t = t || {}).raw = !0;
    return tR(e, t);
  },
  ungzip: tR,
  constants: Y
};
export var $$tH0 = inflateRaw;
export const wS = $$tH0;