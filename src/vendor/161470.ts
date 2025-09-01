function i(t) {
  return function t(e) {
    return e.reduce((e, n) => e.concat(Array.isArray(n) ? t(n) : n), []);
  }(t.map(([t, e]) => Array(t).fill(e, 0, t)));
}
let a = [0, 1, 2, 3].concat(...i([[2, 4], [2, 5], [4, 6], [4, 7], [8, 8], [8, 9], [16, 10], [16, 11], [32, 12], [32, 13], [64, 14], [64, 15], [2, 0], [1, 16], [1, 17], [2, 18], [2, 19], [4, 20], [4, 21], [8, 22], [8, 23], [16, 24], [16, 25], [32, 26], [32, 27], [64, 28], [64, 29]]));
function r() {
  let t = this;
  t.build_tree = function(e) {
    let n;
    let i;
    let a;
    let r = t.dyn_tree;
    let s = t.stat_desc.static_tree;
    let o = t.stat_desc.elems;
    let l = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = 573; n < o; n++) 0 !== r[2 * n] ? (e.heap[++e.heap_len] = l = n, e.depth[n] = 0) : r[2 * n + 1] = 0;
    for (; e.heap_len < 2;) {
      r[2 * (a = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1;
      e.depth[a] = 0;
      e.opt_len--;
      s && (e.static_len -= s[2 * a + 1]);
    }
    for (t.max_code = l, n = Math.floor(e.heap_len / 2); n >= 1; n--) e.pqdownheap(r, n);
    a = o;
    do {
      n = e.heap[1];
      e.heap[1] = e.heap[e.heap_len--];
      e.pqdownheap(r, 1);
      i = e.heap[1];
      e.heap[--e.heap_max] = n;
      e.heap[--e.heap_max] = i;
      r[2 * a] = r[2 * n] + r[2 * i];
      e.depth[a] = Math.max(e.depth[n], e.depth[i]) + 1;
      r[2 * n + 1] = r[2 * i + 1] = a;
      e.heap[1] = a++;
      e.pqdownheap(r, 1);
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1];
    (function(e) {
      let n;
      let i;
      let a;
      let r;
      let s;
      let o;
      let l = t.dyn_tree;
      let d = t.stat_desc.static_tree;
      let c = t.stat_desc.extra_bits;
      let f = t.stat_desc.extra_base;
      let u = t.stat_desc.max_length;
      let h = 0;
      for (r = 0; r <= 15; r++) e.bl_count[r] = 0;
      for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++) {
        (r = l[2 * l[2 * (i = e.heap[n]) + 1] + 1] + 1) > u && (r = u, h++);
        l[2 * i + 1] = r;
        !(i > t.max_code) && (e.bl_count[r]++, s = 0, i >= f && (s = c[i - f]), o = l[2 * i], e.opt_len += o * (r + s), d && (e.static_len += o * (d[2 * i + 1] + s)));
      }
      if (0 !== h) {
        do {
          for (r = u - 1; 0 === e.bl_count[r];) r--;
          e.bl_count[r]--;
          e.bl_count[r + 1] += 2;
          e.bl_count[u]--;
          h -= 2;
        } while (h > 0);
        for (r = u; 0 !== r; r--) for (i = e.bl_count[r]; 0 !== i;) !((a = e.heap[--n]) > t.max_code) && (l[2 * a + 1] != r && (e.opt_len += (r - l[2 * a + 1]) * l[2 * a], l[2 * a + 1] = r), i--);
      }
    })(e);
    (function(t, e, n) {
      let i;
      let a;
      let r;
      let s = [];
      let o = 0;
      for (i = 1; i <= 15; i++) s[i] = o = o + n[i - 1] << 1;
      for (a = 0; a <= e; a++) 0 !== (r = t[2 * a + 1]) && (t[2 * a] = function(t, e) {
        let n = 0;
        do {
          n |= 1 & t;
          t >>>= 1;
          n <<= 1;
        } while (--e > 0);
        return n >>> 1;
      }(s[r]++, r));
    })(r, t.max_code, e.bl_count);
  };
}
function s(t, e, n, i, a) {
  this.static_tree = t;
  this.extra_bits = e;
  this.extra_base = n;
  this.elems = i;
  this.max_length = a;
}
function o(t, e, n, i, a) {
  this.good_length = t;
  this.max_lazy = e;
  this.nice_length = n;
  this.max_chain = i;
  this.func = a;
}
r._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...i([[2, 8], [2, 9], [2, 10], [2, 11], [4, 12], [4, 13], [4, 14], [4, 15], [8, 16], [8, 17], [8, 18], [8, 19], [16, 20], [16, 21], [16, 22], [16, 23], [32, 24], [32, 25], [32, 26], [31, 27], [1, 28]]));
r.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
r.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576];
r.d_code = function(t) {
  return t < 256 ? a[t] : a[256 + (t >>> 7)];
};
r.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
r.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
r.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
r.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
s.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8];
s.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5];
s.static_l_desc = new s(s.static_ltree, r.extra_lbits, 257, 286, 15);
s.static_d_desc = new s(s.static_dtree, r.extra_dbits, 0, 30, 15);
s.static_bl_desc = new s(null, r.extra_blbits, 0, 19, 7);
let l = [new o(0, 0, 0, 0, 0), new o(4, 4, 8, 4, 1), new o(4, 5, 16, 8, 1), new o(4, 6, 32, 32, 1), new o(4, 4, 16, 16, 2), new o(8, 16, 32, 32, 2), new o(8, 16, 128, 128, 2), new o(8, 32, 128, 256, 2), new o(32, 128, 258, 1024, 2), new o(32, 258, 258, 4096, 2)];
function d(t, e, n, i) {
  let a = t[2 * e];
  let r = t[2 * n];
  return a < r || a == r && i[e] <= i[n];
}
function c() {
  let t;
  let e;
  let n;
  let i;
  let a;
  let o;
  let c;
  let f;
  let u;
  let h;
  let p;
  let m;
  let _;
  let x;
  let w;
  let g;
  let b;
  let v;
  let y;
  let k;
  let z;
  let A;
  let U;
  let E;
  let S;
  let R;
  let D;
  let I;
  let j;
  let T;
  let B;
  let C;
  let F;
  let M;
  let W;
  let O;
  let H;
  let q;
  let N;
  let L;
  let P;
  let V = this;
  let Z = new r();
  let K = new r();
  let G = new r();
  function X() {
    let t;
    for (t = 0; t < 286; t++) B[2 * t] = 0;
    for (t = 0; t < 30; t++) C[2 * t] = 0;
    for (t = 0; t < 19; t++) F[2 * t] = 0;
    B[512] = 1;
    V.opt_len = V.static_len = 0;
    O = q = 0;
  }
  function Q(t, e) {
    let n;
    let i = -1;
    let a = t[1];
    let r = 0;
    let s = 7;
    let o = 4;
    0 === a && (s = 138, o = 3);
    t[(e + 1) * 2 + 1] = 65535;
    for (let l = 0; l <= e; l++) {
      n = a;
      a = t[(l + 1) * 2 + 1];
      ++r < s && n == a || (r < o ? F[2 * n] += r : 0 !== n ? (n != i && F[2 * n]++, F[32]++) : r <= 10 ? F[34]++ : F[36]++, r = 0, i = n, 0 === a ? (s = 138, o = 3) : n == a ? (s = 6, o = 3) : (s = 7, o = 4));
    }
  }
  function Y(t) {
    V.pending_buf[V.pending++] = t;
  }
  function J(t) {
    Y(255 & t);
    Y(t >>> 8 & 255);
  }
  function $(t, e) {
    P > 16 - e ? (J(L |= t << P & 65535), L = t >>> 16 - P, P += e - 16) : (L |= t << P & 65535, P += e);
  }
  function tt(t, e) {
    let n = 2 * t;
    $(65535 & e[n], 65535 & e[n + 1]);
  }
  function te(t, e) {
    let n;
    let i;
    let a = -1;
    let r = t[1];
    let s = 0;
    let o = 7;
    let l = 4;
    for (0 === r && (o = 138, l = 3), n = 0; n <= e; n++) if (i = r, r = t[(n + 1) * 2 + 1], !(++s < o) || i != r) {
      if (s < l) do tt(i, F); while (0 != --s); else 0 !== i ? (i != a && (tt(i, F), s--), tt(16, F), $(s - 3, 2)) : s <= 10 ? (tt(17, F), $(s - 3, 3)) : (tt(18, F), $(s - 11, 7));
      s = 0;
      a = i;
      0 === r ? (o = 138, l = 3) : i == r ? (o = 6, l = 3) : (o = 7, l = 4);
    }
  }
  function tn() {
    16 == P ? (J(L), L = 0, P = 0) : P >= 8 && (Y(255 & L), L >>>= 8, P -= 8);
  }
  function ti(t, e) {
    let n;
    let i;
    let a;
    if (V.pending_buf[H + 2 * O] = t >>> 8 & 255, V.pending_buf[H + 2 * O + 1] = 255 & t, V.pending_buf[M + O] = 255 & e, O++, 0 === t ? B[2 * e]++ : (q++, t--, B[(r._length_code[e] + 256 + 1) * 2]++, C[2 * r.d_code(t)]++), (8191 & O) == 0 && D > 2) {
      for (a = 0, n = 8 * O, i = z - b; a < 30; a++) n += C[2 * a] * (5 + r.extra_dbits[a]);
      if (n >>>= 3, q < Math.floor(O / 2) && n < Math.floor(i / 2)) return !0;
    }
    return O == W - 1;
  }
  function ta(t, e) {
    let n;
    let i;
    let a;
    let s;
    let o = 0;
    if (0 !== O) do {
      n = V.pending_buf[H + 2 * o] << 8 & 65280 | 255 & V.pending_buf[H + 2 * o + 1];
      i = 255 & V.pending_buf[M + o];
      o++;
      0 === n ? tt(i, t) : (tt((a = r._length_code[i]) + 256 + 1, t), 0 !== (s = r.extra_lbits[a]) && $(i -= r.base_length[a], s), n--, tt(a = r.d_code(n), e), 0 !== (s = r.extra_dbits[a]) && $(n -= r.base_dist[a], s));
    } while (o < O);
    tt(256, t);
    N = t[513];
  }
  function tr() {
    P > 8 ? J(L) : P > 0 && Y(255 & L);
    L = 0;
    P = 0;
  }
  function ts(t, e, n) {
    $(0 + (n ? 1 : 0), 3);
    tr();
    N = 8;
    J(e);
    J(~e);
    V.pending_buf.set(f.subarray(t, t + e), V.pending);
    V.pending += e;
  }
  function to(e) {
    var n;
    var i;
    let a;
    let o;
    let l;
    n = b >= 0 ? b : -1;
    i = z - b;
    l = 0;
    D > 0 ? (Z.build_tree(V), K.build_tree(V), l = function() {
      let t;
      for (Q(B, Z.max_code), Q(C, K.max_code), G.build_tree(V), t = 18; t >= 3 && 0 === F[2 * r.bl_order[t] + 1]; t--);
      V.opt_len += 3 * (t + 1) + 5 + 5 + 4;
      return t;
    }(), a = V.opt_len + 3 + 7 >>> 3, (o = V.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = i + 5;
    i + 4 <= a && -1 != n ? ts(n, i, e) : o == a ? ($(2 + (e ? 1 : 0), 3), ta(s.static_ltree, s.static_dtree)) : ($(4 + (e ? 1 : 0), 3), function(t, e, n) {
      let i;
      for ($(t - 257, 5), $(e - 1, 5), $(n - 4, 4), i = 0; i < n; i++) $(F[2 * r.bl_order[i] + 1], 3);
      te(B, t - 1);
      te(C, e - 1);
    }(Z.max_code + 1, K.max_code + 1, l + 1), ta(B, C));
    X();
    e && tr();
    b = z;
    t.flush_pending();
  }
  function tl() {
    let e;
    let n;
    let i;
    let r;
    do {
      if (0 == (r = u - U - z) && 0 === z && 0 === U) r = a; else if (-1 == r) r--; else if (z >= a + a - 262) {
        f.set(f.subarray(a, a + a), 0);
        A -= a;
        z -= a;
        b -= a;
        i = e = _;
        do {
          n = 65535 & p[--i];
          p[i] = n >= a ? n - a : 0;
        } while (0 != --e);
        i = e = a;
        do {
          n = 65535 & h[--i];
          h[i] = n >= a ? n - a : 0;
        } while (0 != --e);
        r += a;
      }
      if (0 === t.avail_in) return;
      e = t.read_buf(f, z + U, r);
      (U += e) >= 3 && (m = ((m = 255 & f[z]) << g ^ 255 & f[z + 1]) & w);
    } while (U < 262 && 0 !== t.avail_in);
  }
  function td(t) {
    let e;
    let n;
    let i = S;
    let r = z;
    let s = E;
    let o = z > a - 262 ? z - (a - 262) : 0;
    let l = T;
    let d = c;
    let u = z + 258;
    let p = f[r + s - 1];
    let m = f[r + s];
    E >= j && (i >>= 2);
    l > U && (l = U);
    do {
      if (f[(e = t) + s] != m || f[e + s - 1] != p || f[e] != f[r] || f[++e] != f[r + 1]) continue;
      r += 2;
      e++;
      do; while (f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && f[++r] == f[++e] && r < u);
      if (n = 258 - (u - r), r = u - 258, n > s) {
        if (A = t, s = n, n >= l) break;
        p = f[r + s - 1];
        m = f[r + s];
      }
    } while ((t = 65535 & h[t & d]) > o && 0 != --i);
    return s <= U ? s : U;
  }
  V.depth = [];
  V.bl_count = [];
  V.heap = [];
  B = [];
  C = [];
  F = [];
  V.pqdownheap = function(t, e) {
    let n = V.heap;
    let i = n[e];
    let a = e << 1;
    for (; a <= V.heap_len && (a < V.heap_len && d(t, n[a + 1], n[a], V.depth) && a++, !d(t, i, n[a], V.depth));) {
      n[e] = n[a];
      e = a;
      a <<= 1;
    }
    n[e] = i;
  };
  V.deflateInit = function(t, r, d, y, A, O) {
    return (y || (y = 8), A || (A = 8), O || (O = 0), t.msg = null, -1 == r && (r = 6), A < 1 || A > 9 || 8 != y || d < 9 || d > 15 || r < 0 || r > 9 || O < 0 || O > 2) ? -2 : (t.dstate = V, c = (a = 1 << (o = d)) - 1, w = (_ = 1 << (x = A + 7)) - 1, g = Math.floor((x + 3 - 1) / 3), f = new Uint8Array(2 * a), h = [], p = [], W = 1 << A + 6, V.pending_buf = new Uint8Array(4 * W), n = 4 * W, H = Math.floor(W / 2), M = 3 * W, D = r, I = O, t.total_in = t.total_out = 0, t.msg = null, V.pending = 0, V.pending_out = 0, e = 113, i = 0, Z.dyn_tree = B, Z.stat_desc = s.static_l_desc, K.dyn_tree = C, K.stat_desc = s.static_d_desc, G.dyn_tree = F, G.stat_desc = s.static_bl_desc, L = 0, P = 0, N = 8, X(), function() {
      u = 2 * a;
      p[_ - 1] = 0;
      for (let t = 0; t < _ - 1; t++) p[t] = 0;
      R = l[D].max_lazy;
      j = l[D].good_length;
      T = l[D].nice_length;
      S = l[D].max_chain;
      z = 0;
      b = 0;
      U = 0;
      v = E = 2;
      k = 0;
      m = 0;
    }(), 0);
  };
  V.deflateEnd = function() {
    return 42 != e && 113 != e && 666 != e ? -2 : (V.pending_buf = null, p = null, h = null, f = null, V.dstate = null, 113 == e ? -3 : 0);
  };
  V.deflateParams = function(t, e, n) {
    let i = 0;
    return (-1 == e && (e = 6), e < 0 || e > 9 || n < 0 || n > 2) ? -2 : (l[D].func != l[e].func && 0 !== t.total_in && (i = t.deflate(1)), D != e && (R = l[D = e].max_lazy, j = l[D].good_length, T = l[D].nice_length, S = l[D].max_chain), I = n, i);
  };
  V.deflateSetDictionary = function(t, n, i) {
    let r = i;
    let s;
    let o = 0;
    if (!n || 42 != e) return -2;
    if (r < 3) return 0;
    for (r > a - 262 && (o = i - (r = a - 262)), f.set(n.subarray(o, o + r), 0), z = r, b = r, m = ((m = 255 & f[0]) << g ^ 255 & f[1]) & w, s = 0; s <= r - 3; s++) {
      m = (m << g ^ 255 & f[s + 2]) & w;
      h[s & c] = p[m];
      p[m] = s;
    }
    return 0;
  };
  V.deflate = function(r, d) {
    let u;
    let x;
    let S;
    let j;
    let T;
    if (d > 4 || d < 0) return -2;
    if (!r.next_out || !r.next_in && 0 !== r.avail_in || 666 == e && 4 != d) {
      r.msg = "stream error";
      return -2;
    }
    if (0 === r.avail_out) {
      r.msg = "buffer error";
      return -5;
    }
    if (t = r, j = i, i = d, 42 == e) {
      var B;
      x = 8 + (o - 8 << 4) << 8;
      (S = (D - 1 & 255) >> 1) > 3 && (S = 3);
      x |= S << 6;
      0 !== z && (x |= 32);
      x += 31 - x % 31;
      e = 113;
      Y((B = x) >> 8 & 255);
      Y(255 & B);
    }
    if (0 !== V.pending) {
      if (t.flush_pending(), 0 === t.avail_out) {
        i = -1;
        return 0;
      }
    } else if (0 === t.avail_in && d <= j && 4 != d) {
      t.msg = "buffer error";
      return -5;
    }
    if (666 == e && 0 !== t.avail_in) {
      r.msg = "buffer error";
      return -5;
    }
    if (0 !== t.avail_in || 0 !== U || 0 != d && 666 != e) {
      switch (T = -1, l[D].func) {
        case 0:
          T = function(e) {
            let i;
            let r = 65535;
            for (65535 > n - 5 && (r = n - 5); ;) {
              if (U <= 1) {
                if (tl(), 0 === U && 0 == e) return 0;
                if (0 === U) break;
              }
              if (z += U, U = 0, i = b + r, (0 === z || z >= i) && (U = z - i, z = i, to(!1), 0 === t.avail_out) || z - b >= a - 262 && (to(!1), 0 === t.avail_out)) return 0;
            }
            return (to(4 == e), 0 === t.avail_out) ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1;
          }(d);
          break;
        case 1:
          T = function(e) {
            let n;
            let i = 0;
            for (; ;) {
              if (U < 262) {
                if (tl(), U < 262 && 0 == e) return 0;
                if (0 === U) break;
              }
              if (U >= 3 && (i = 65535 & p[m = (m << g ^ 255 & f[z + 2]) & w], h[z & c] = p[m], p[m] = z), 0 !== i && (z - i & 65535) <= a - 262 && 2 != I && (v = td(i)), v >= 3) {
                if (n = ti(z - A, v - 3), U -= v, v <= R && U >= 3) {
                  v--;
                  do {
                    z++;
                    i = 65535 & p[m = (m << g ^ 255 & f[z + 2]) & w];
                    h[z & c] = p[m];
                    p[m] = z;
                  } while (0 != --v);
                  z++;
                } else {
                  z += v;
                  v = 0;
                  m = ((m = 255 & f[z]) << g ^ 255 & f[z + 1]) & w;
                }
              } else {
                n = ti(0, 255 & f[z]);
                U--;
                z++;
              }
              if (n && (to(!1), 0 === t.avail_out)) return 0;
            }
            return (to(4 == e), 0 === t.avail_out) ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1;
          }(d);
          break;
        case 2:
          T = function(e) {
            let n;
            let i;
            let r = 0;
            for (; ;) {
              if (U < 262) {
                if (tl(), U < 262 && 0 == e) return 0;
                if (0 === U) break;
              }
              if (U >= 3 && (r = 65535 & p[m = (m << g ^ 255 & f[z + 2]) & w], h[z & c] = p[m], p[m] = z), E = v, y = A, v = 2, 0 !== r && E < R && (z - r & 65535) <= a - 262 && (2 != I && (v = td(r)), v <= 5 && (1 == I || 3 == v && z - A > 4096) && (v = 2)), E >= 3 && v <= E) {
                i = z + U - 3;
                n = ti(z - 1 - y, E - 3);
                U -= E - 1;
                E -= 2;
                do ++z <= i && (r = 65535 & p[m = (m << g ^ 255 & f[z + 2]) & w], h[z & c] = p[m], p[m] = z); while (0 != --E);
                if (k = 0, v = 2, z++, n && (to(!1), 0 === t.avail_out)) return 0;
              } else if (0 !== k) {
                if ((n = ti(0, 255 & f[z - 1])) && to(!1), z++, U--, 0 === t.avail_out) return 0;
              } else {
                k = 1;
                z++;
                U--;
              }
            }
            return (0 !== k && (n = ti(0, 255 & f[z - 1]), k = 0), to(4 == e), 0 === t.avail_out) ? 4 == e ? 2 : 0 : 4 == e ? 3 : 1;
          }(d);
      }
      if ((2 == T || 3 == T) && (e = 666), 0 == T || 2 == T) {
        0 === t.avail_out && (i = -1);
        return 0;
      }
      if (1 == T) {
        if (1 == d) {
          $(2, 3);
          tt(256, s.static_ltree);
          tn();
          1 + N + 10 - P < 9 && ($(2, 3), tt(256, s.static_ltree), tn());
          N = 7;
        } else if (ts(0, 0, !1), 3 == d) for (u = 0; u < _; u++) p[u] = 0;
        if (t.flush_pending(), 0 === t.avail_out) {
          i = -1;
          return 0;
        }
      }
    }
    return 4 != d ? 0 : 1;
  };
}
function f() {
  this.next_in_index = 0;
  this.next_out_index = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.avail_out = 0;
  this.total_out = 0;
}
f.prototype = {
  deflateInit: function(t, e) {
    this.dstate = new c();
    e || (e = 15);
    return this.dstate.deflateInit(this, t, e);
  },
  deflate: function(t) {
    return this.dstate ? this.dstate.deflate(this, t) : -2;
  },
  deflateEnd: function() {
    if (!this.dstate) return -2;
    let t = this.dstate.deflateEnd();
    this.dstate = null;
    return t;
  },
  deflateParams: function(t, e) {
    return this.dstate ? this.dstate.deflateParams(this, t, e) : -2;
  },
  deflateSetDictionary: function(t, e) {
    return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2;
  },
  read_buf: function(t, e, n) {
    let i = this.avail_in;
    return (i > n && (i = n), 0 === i) ? 0 : (this.avail_in -= i, t.set(this.next_in.subarray(this.next_in_index, this.next_in_index + i), e), this.next_in_index += i, this.total_in += i, i);
  },
  flush_pending: function() {
    let t = this.dstate.pending;
    t > this.avail_out && (t = this.avail_out);
    0 !== t && (this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out, this.dstate.pending_out + t), this.next_out_index), this.next_out_index += t, this.dstate.pending_out += t, this.total_out += t, this.avail_out -= t, this.dstate.pending -= t, 0 === this.dstate.pending && (this.dstate.pending_out = 0));
  }
};
let u = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
let h = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255];
let p = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577];
let m = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
let _ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112];
let x = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
let w = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
function g() {
  let t;
  let e;
  let n;
  let i;
  let a;
  let r;
  function s(t, e, s, o, l, d, c, f, u, h, p) {
    let m;
    let _;
    let x;
    let w;
    let g;
    let b;
    let v;
    let y;
    let k;
    let z;
    let A;
    let U;
    let E;
    let S;
    let R;
    z = 0;
    g = s;
    do {
      n[t[e + z]]++;
      z++;
      g--;
    } while (0 !== g);
    if (n[0] == s) {
      c[0] = -1;
      f[0] = 0;
      return 0;
    }
    for (b = 1, y = f[0]; b <= 15 && 0 === n[b]; b++);
    for (v = b, y < b && (y = b), g = 15; 0 !== g && 0 === n[g]; g--);
    for (x = g, y > g && (y = g), f[0] = y, S = 1 << b; b < g; b++, S <<= 1) if ((S -= n[b]) < 0) return -3;
    if ((S -= n[g]) < 0) return -3;
    for (n[g] += S, r[1] = b = 0, z = 1, E = 2; 0 != --g;) {
      r[E] = b += n[z];
      E++;
      z++;
    }
    g = 0;
    z = 0;
    do {
      0 !== (b = t[e + z]) && (p[r[b]++] = g);
      z++;
    } while (++g < s);
    for (s = r[x], r[0] = g = 0, z = 0, w = -1, U = -y, a[0] = 0, A = 0, R = 0; v <= x; v++) for (m = n[v]; 0 != m--;) {
      for (; v > U + y;) {
        if (w++, U += y, R = (R = x - U) > y ? y : R, (_ = 1 << (b = v - U)) > m + 1 && (_ -= m + 1, E = v, b < R)) for (; ++b < R && !((_ <<= 1) <= n[++E]);) _ -= n[E];
        if (R = 1 << b, h[0] + R > 1440) return -3;
        a[w] = A = h[0];
        h[0] += R;
        0 !== w ? (r[w] = g, i[0] = b, i[1] = y, b = g >>> U - y, i[2] = A - a[w - 1] - b, u.set(i, (a[w - 1] + b) * 3)) : c[0] = A;
      }
      for (i[1] = v - U, z >= s ? i[0] = 192 : p[z] < o ? (i[0] = p[z] < 256 ? 0 : 96, i[2] = p[z++]) : (i[0] = d[p[z] - o] + 16 + 64, i[2] = l[p[z++] - o]), _ = 1 << v - U, b = g >>> U; b < R; b += _) u.set(i, (A + b) * 3);
      for (b = 1 << v - 1; (g & b) != 0; b >>>= 1) g ^= b;
      for (g ^= b, k = (1 << U) - 1; (g & k) != r[w];) {
        w--;
        U -= y;
        k = (1 << U) - 1;
      }
    }
    return 0 !== S && 1 != x ? -5 : 0;
  }
  function o(s) {
    let o;
    for (t || (t = [], e = [], n = new Int32Array(16), i = [], a = new Int32Array(15), r = new Int32Array(16)), e.length < s && (e = []), o = 0; o < s; o++) e[o] = 0;
    for (o = 0; o < 16; o++) n[o] = 0;
    for (o = 0; o < 3; o++) i[o] = 0;
    a.set(n.subarray(0, 15), 0);
    r.set(n.subarray(0, 16), 0);
  }
  this.inflate_trees_bits = function(n, i, a, r, l) {
    let d;
    o(19);
    t[0] = 0;
    -3 == (d = s(n, 0, 19, 19, null, null, a, i, r, t, e)) ? l.msg = "oversubscribed dynamic bit lengths tree" : (-5 == d || 0 === i[0]) && (l.msg = "incomplete dynamic bit lengths tree", d = -3);
    return d;
  };
  this.inflate_trees_dynamic = function(n, i, a, r, l, d, c, f, u) {
    let h;
    return (o(288), t[0] = 0, 0 != (h = s(a, 0, n, 257, m, _, d, r, f, t, e)) || 0 === r[0]) ? (-3 == h ? u.msg = "oversubscribed literal/length tree" : -4 != h && (u.msg = "incomplete literal/length tree", h = -3), h) : (o(288), 0 != (h = s(a, n, i, 0, x, w, c, l, f, t, e)) || 0 === l[0] && n > 257) ? (-3 == h ? u.msg = "oversubscribed distance tree" : -5 == h ? (u.msg = "incomplete distance tree", h = -3) : -4 != h && (u.msg = "empty distance tree with lengths", h = -3), h) : 0;
  };
}
function b() {
  let t;
  let e;
  let n;
  let i;
  let a = 0;
  let r = 0;
  let s = 0;
  let o = 0;
  let l = 0;
  let d = 0;
  let c = 0;
  let f = 0;
  let h = 0;
  let p = 0;
  this.init = function(a, r, s, o, l, d) {
    t = 0;
    c = a;
    f = r;
    n = s;
    h = o;
    i = l;
    p = d;
    e = null;
  };
  this.proc = function(m, _, x) {
    let w;
    let g;
    let b;
    let v;
    let y;
    let k;
    let z;
    let A = 0;
    let U = 0;
    let E = 0;
    for (E = _.next_in_index, v = _.avail_in, A = m.bitb, U = m.bitk, k = (y = m.write) < m.read ? m.read - y - 1 : m.end - y; ;) switch (t) {
      case 0:
        if (k >= 258 && v >= 10 && (m.bitb = A, m.bitk = U, _.avail_in = v, _.total_in += E - _.next_in_index, _.next_in_index = E, m.write = y, x = function(t, e, n, i, a, r, s, o) {
          let l;
          let d;
          let c;
          let f;
          let h;
          let p;
          let m;
          let _;
          let x;
          let w;
          let g;
          let b;
          let v;
          let y;
          let k;
          let z;
          m = o.next_in_index;
          _ = o.avail_in;
          h = s.bitb;
          p = s.bitk;
          w = (x = s.write) < s.read ? s.read - x - 1 : s.end - x;
          g = u[t];
          b = u[e];
          do {
            for (; p < 20;) {
              _--;
              h |= (255 & o.read_byte(m++)) << p;
              p += 8;
            }
            if (l = h & g, 0 === (f = (d = n)[z = ((c = i) + l) * 3])) {
              h >>= d[z + 1];
              p -= d[z + 1];
              s.window[x++] = d[z + 2];
              w--;
              continue;
            }
            for (; ;) {
              if (h >>= d[z + 1], p -= d[z + 1], (16 & f) != 0) {
                for (f &= 15, v = d[z + 2] + (h & u[f]), h >>= f, p -= f; p < 15;) {
                  _--;
                  h |= (255 & o.read_byte(m++)) << p;
                  p += 8;
                }
                for (l = h & b, f = (d = a)[z = ((c = r) + l) * 3]; ;) {
                  if (h >>= d[z + 1], p -= d[z + 1], (16 & f) != 0) {
                    for (f &= 15; p < f;) {
                      _--;
                      h |= (255 & o.read_byte(m++)) << p;
                      p += 8;
                    }
                    if (y = d[z + 2] + (h & u[f]), h >>= f, p -= f, w -= v, x >= y) {
                      k = x - y;
                      x - k > 0 && 2 > x - k ? (s.window[x++] = s.window[k++], s.window[x++] = s.window[k++]) : (s.window.set(s.window.subarray(k, k + 2), x), x += 2, k += 2);
                      v -= 2;
                    } else {
                      k = x - y;
                      do k += s.end; while (k < 0);
                      if (v > (f = s.end - k)) {
                        if (v -= f, x - k > 0 && f > x - k) do s.window[x++] = s.window[k++]; while (0 != --f); else {
                          s.window.set(s.window.subarray(k, k + f), x);
                          x += f;
                          k += f;
                          f = 0;
                        }
                        k = 0;
                      }
                    }
                    if (x - k > 0 && v > x - k) do s.window[x++] = s.window[k++]; while (0 != --v); else {
                      s.window.set(s.window.subarray(k, k + v), x);
                      x += v;
                      k += v;
                      v = 0;
                    }
                    break;
                  }
                  if ((64 & f) != 0) {
                    o.msg = "invalid distance code";
                    v = p >> 3 < (v = o.avail_in - _) ? p >> 3 : v;
                    _ += v;
                    m -= v;
                    p -= v << 3;
                    s.bitb = h;
                    s.bitk = p;
                    o.avail_in = _;
                    o.total_in += m - o.next_in_index;
                    o.next_in_index = m;
                    s.write = x;
                    return -3;
                  }
                  l += d[z + 2];
                  l += h & u[f];
                  f = d[z = (c + l) * 3];
                }
                break;
              }
              if ((64 & f) == 0) {
                if (l += d[z + 2], l += h & u[f], 0 === (f = d[z = (c + l) * 3])) {
                  h >>= d[z + 1];
                  p -= d[z + 1];
                  s.window[x++] = d[z + 2];
                  w--;
                  break;
                }
              } else if ((32 & f) != 0) {
                v = p >> 3 < (v = o.avail_in - _) ? p >> 3 : v;
                _ += v;
                m -= v;
                p -= v << 3;
                s.bitb = h;
                s.bitk = p;
                o.avail_in = _;
                o.total_in += m - o.next_in_index;
                o.next_in_index = m;
                s.write = x;
                return 1;
              } else {
                o.msg = "invalid literal/length code";
                v = p >> 3 < (v = o.avail_in - _) ? p >> 3 : v;
                _ += v;
                m -= v;
                p -= v << 3;
                s.bitb = h;
                s.bitk = p;
                o.avail_in = _;
                o.total_in += m - o.next_in_index;
                o.next_in_index = m;
                s.write = x;
                return -3;
              }
            }
          } while (w >= 258 && _ >= 10);
          v = p >> 3 < (v = o.avail_in - _) ? p >> 3 : v;
          _ += v;
          m -= v;
          p -= v << 3;
          s.bitb = h;
          s.bitk = p;
          o.avail_in = _;
          o.total_in += m - o.next_in_index;
          o.next_in_index = m;
          s.write = x;
          return 0;
        }(c, f, n, h, i, p, m, _), E = _.next_in_index, v = _.avail_in, A = m.bitb, U = m.bitk, k = (y = m.write) < m.read ? m.read - y - 1 : m.end - y, 0 != x)) {
          t = 1 == x ? 7 : 9;
          break;
        }
        s = c;
        e = n;
        r = h;
        t = 1;
      case 1:
        for (w = s; U < w;) {
          if (0 === v) {
            m.bitb = A;
            m.bitk = U;
            _.avail_in = v;
            _.total_in += E - _.next_in_index;
            _.next_in_index = E;
            m.write = y;
            return m.inflate_flush(_, x);
          }
          x = 0;
          v--;
          A |= (255 & _.read_byte(E++)) << U;
          U += 8;
        }
        if (g = (r + (A & u[w])) * 3, A >>>= e[g + 1], U -= e[g + 1], 0 === (b = e[g])) {
          o = e[g + 2];
          t = 6;
          break;
        }
        if ((16 & b) != 0) {
          l = 15 & b;
          a = e[g + 2];
          t = 2;
          break;
        }
        if ((64 & b) == 0) {
          s = b;
          r = g / 3 + e[g + 2];
          break;
        }
        if ((32 & b) != 0) {
          t = 7;
          break;
        }
        t = 9;
        _.msg = "invalid literal/length code";
        x = -3;
        m.bitb = A;
        m.bitk = U;
        _.avail_in = v;
        _.total_in += E - _.next_in_index;
        _.next_in_index = E;
        m.write = y;
        return m.inflate_flush(_, x);
      case 2:
        for (w = l; U < w;) {
          if (0 === v) {
            m.bitb = A;
            m.bitk = U;
            _.avail_in = v;
            _.total_in += E - _.next_in_index;
            _.next_in_index = E;
            m.write = y;
            return m.inflate_flush(_, x);
          }
          x = 0;
          v--;
          A |= (255 & _.read_byte(E++)) << U;
          U += 8;
        }
        a += A & u[w];
        A >>= w;
        U -= w;
        s = f;
        e = i;
        r = p;
        t = 3;
      case 3:
        for (w = s; U < w;) {
          if (0 === v) {
            m.bitb = A;
            m.bitk = U;
            _.avail_in = v;
            _.total_in += E - _.next_in_index;
            _.next_in_index = E;
            m.write = y;
            return m.inflate_flush(_, x);
          }
          x = 0;
          v--;
          A |= (255 & _.read_byte(E++)) << U;
          U += 8;
        }
        if (g = (r + (A & u[w])) * 3, A >>= e[g + 1], U -= e[g + 1], (16 & (b = e[g])) != 0) {
          l = 15 & b;
          d = e[g + 2];
          t = 4;
          break;
        }
        if ((64 & b) == 0) {
          s = b;
          r = g / 3 + e[g + 2];
          break;
        }
        t = 9;
        _.msg = "invalid distance code";
        x = -3;
        m.bitb = A;
        m.bitk = U;
        _.avail_in = v;
        _.total_in += E - _.next_in_index;
        _.next_in_index = E;
        m.write = y;
        return m.inflate_flush(_, x);
      case 4:
        for (w = l; U < w;) {
          if (0 === v) {
            m.bitb = A;
            m.bitk = U;
            _.avail_in = v;
            _.total_in += E - _.next_in_index;
            _.next_in_index = E;
            m.write = y;
            return m.inflate_flush(_, x);
          }
          x = 0;
          v--;
          A |= (255 & _.read_byte(E++)) << U;
          U += 8;
        }
        d += A & u[w];
        A >>= w;
        U -= w;
        t = 5;
      case 5:
        for (z = y - d; z < 0;) z += m.end;
        for (; 0 !== a;) {
          if (0 === k && (y == m.end && 0 !== m.read && (k = (y = 0) < m.read ? m.read - y - 1 : m.end - y), 0 === k && (m.write = y, x = m.inflate_flush(_, x), k = (y = m.write) < m.read ? m.read - y - 1 : m.end - y, y == m.end && 0 !== m.read && (k = (y = 0) < m.read ? m.read - y - 1 : m.end - y), 0 === k))) {
            m.bitb = A;
            m.bitk = U;
            _.avail_in = v;
            _.total_in += E - _.next_in_index;
            _.next_in_index = E;
            m.write = y;
            return m.inflate_flush(_, x);
          }
          m.window[y++] = m.window[z++];
          k--;
          z == m.end && (z = 0);
          a--;
        }
        t = 0;
        break;
      case 6:
        if (0 === k && (y == m.end && 0 !== m.read && (k = (y = 0) < m.read ? m.read - y - 1 : m.end - y), 0 === k && (m.write = y, x = m.inflate_flush(_, x), k = (y = m.write) < m.read ? m.read - y - 1 : m.end - y, y == m.end && 0 !== m.read && (k = (y = 0) < m.read ? m.read - y - 1 : m.end - y), 0 === k))) {
          m.bitb = A;
          m.bitk = U;
          _.avail_in = v;
          _.total_in += E - _.next_in_index;
          _.next_in_index = E;
          m.write = y;
          return m.inflate_flush(_, x);
        }
        x = 0;
        m.window[y++] = o;
        k--;
        t = 0;
        break;
      case 7:
        if (U > 7 && (U -= 8, v++, E--), m.write = y, x = m.inflate_flush(_, x), k = (y = m.write) < m.read ? m.read - y - 1 : m.end - y, m.read != m.write) {
          m.bitb = A;
          m.bitk = U;
          _.avail_in = v;
          _.total_in += E - _.next_in_index;
          _.next_in_index = E;
          m.write = y;
          return m.inflate_flush(_, x);
        }
        t = 8;
      case 8:
        x = 1;
        m.bitb = A;
        m.bitk = U;
        _.avail_in = v;
        _.total_in += E - _.next_in_index;
        _.next_in_index = E;
        m.write = y;
        return m.inflate_flush(_, x);
      case 9:
        x = -3;
        m.bitb = A;
        m.bitk = U;
        _.avail_in = v;
        _.total_in += E - _.next_in_index;
        _.next_in_index = E;
        m.write = y;
        return m.inflate_flush(_, x);
      default:
        x = -2;
        m.bitb = A;
        m.bitk = U;
        _.avail_in = v;
        _.total_in += E - _.next_in_index;
        _.next_in_index = E;
        m.write = y;
        return m.inflate_flush(_, x);
    }
  };
  this.free = function() { };
}
g.inflate_trees_fixed = function(t, e, n, i) {
  t[0] = 9;
  e[0] = 5;
  n[0] = h;
  i[0] = p;
  return 0;
};
let v = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function y(t, e) {
  let n;
  let i = this;
  let a = 0;
  let r = 0;
  let s = 0;
  let o = 0;
  let l = [0];
  let d = [0];
  let c = new b();
  let f = 0;
  let h = new Int32Array(4320);
  let p = new g();
  i.bitk = 0;
  i.bitb = 0;
  i.window = new Uint8Array(e);
  i.end = e;
  i.read = 0;
  i.write = 0;
  i.reset = function(t, e) {
    e && (e[0] = 0);
    6 == a && c.free(t);
    a = 0;
    i.bitk = 0;
    i.bitb = 0;
    i.read = i.write = 0;
  };
  i.reset(t, null);
  i.inflate_flush = function(t, e) {
    let n;
    let a;
    let r;
    a = t.next_out_index;
    (n = ((r = i.read) <= i.write ? i.write : i.end) - r) > t.avail_out && (n = t.avail_out);
    0 !== n && -5 == e && (e = 0);
    t.avail_out -= n;
    t.total_out += n;
    t.next_out.set(i.window.subarray(r, r + n), a);
    a += n;
    (r += n) == i.end && (r = 0, i.write == i.end && (i.write = 0), (n = i.write - r) > t.avail_out && (n = t.avail_out), 0 !== n && -5 == e && (e = 0), t.avail_out -= n, t.total_out += n, t.next_out.set(i.window.subarray(r, r + n), a), a += n, r += n);
    t.next_out_index = a;
    i.read = r;
    return e;
  };
  i.proc = function(t, e) {
    let m;
    let _;
    let x;
    let w;
    let b;
    let y;
    let k;
    let z;
    for (w = t.next_in_index, b = t.avail_in, _ = i.bitb, x = i.bitk, k = (y = i.write) < i.read ? i.read - y - 1 : i.end - y; ;) {
      let A;
      let U;
      let E;
      let S;
      let R;
      let D;
      let I;
      let j;
      switch (a) {
        case 0:
          for (; x < 3;) {
            if (0 === b) {
              i.bitb = _;
              i.bitk = x;
              t.avail_in = b;
              t.total_in += w - t.next_in_index;
              t.next_in_index = w;
              i.write = y;
              return i.inflate_flush(t, e);
            }
            e = 0;
            b--;
            _ |= (255 & t.read_byte(w++)) << x;
            x += 8;
          }
          switch (f = 1 & (m = 7 & _), m >>> 1) {
            case 0:
              _ >>>= 3;
              x -= 3;
              _ >>>= m = 7 & x;
              x -= m;
              a = 1;
              break;
            case 1:
              A = [];
              U = [];
              E = [[]];
              S = [[]];
              g.inflate_trees_fixed(A, U, E, S);
              c.init(A[0], U[0], E[0], 0, S[0], 0);
              _ >>>= 3;
              x -= 3;
              a = 6;
              break;
            case 2:
              _ >>>= 3;
              x -= 3;
              a = 3;
              break;
            case 3:
              _ >>>= 3;
              x -= 3;
              a = 9;
              t.msg = "invalid block type";
              e = -3;
              i.bitb = _;
              i.bitk = x;
              t.avail_in = b;
              t.total_in += w - t.next_in_index;
              t.next_in_index = w;
              i.write = y;
              return i.inflate_flush(t, e);
          }
          break;
        case 1:
          for (; x < 32;) {
            if (0 === b) {
              i.bitb = _;
              i.bitk = x;
              t.avail_in = b;
              t.total_in += w - t.next_in_index;
              t.next_in_index = w;
              i.write = y;
              return i.inflate_flush(t, e);
            }
            e = 0;
            b--;
            _ |= (255 & t.read_byte(w++)) << x;
            x += 8;
          }
          if ((~_ >>> 16 & 65535) != (65535 & _)) {
            a = 9;
            t.msg = "invalid stored block lengths";
            e = -3;
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          r = 65535 & _;
          _ = x = 0;
          a = 0 !== r ? 2 : 0 !== f ? 7 : 0;
          break;
        case 2:
          if (0 === b || 0 === k && (y == i.end && 0 !== i.read && (k = (y = 0) < i.read ? i.read - y - 1 : i.end - y), 0 === k && (i.write = y, e = i.inflate_flush(t, e), k = (y = i.write) < i.read ? i.read - y - 1 : i.end - y, y == i.end && 0 !== i.read && (k = (y = 0) < i.read ? i.read - y - 1 : i.end - y), 0 === k))) {
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          if (e = 0, (m = r) > b && (m = b), m > k && (m = k), i.window.set(t.read_buf(w, m), y), w += m, b -= m, y += m, k -= m, 0 != (r -= m)) break;
          a = 0 !== f ? 7 : 0;
          break;
        case 3:
          for (; x < 14;) {
            if (0 === b) {
              i.bitb = _;
              i.bitk = x;
              t.avail_in = b;
              t.total_in += w - t.next_in_index;
              t.next_in_index = w;
              i.write = y;
              return i.inflate_flush(t, e);
            }
            e = 0;
            b--;
            _ |= (255 & t.read_byte(w++)) << x;
            x += 8;
          }
          if (s = m = 16383 & _, (31 & m) > 29 || (m >> 5 & 31) > 29) {
            a = 9;
            t.msg = "too many length or distance symbols";
            e = -3;
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          if (m = 258 + (31 & m) + (m >> 5 & 31), !n || n.length < m) n = []; else for (z = 0; z < m; z++) n[z] = 0;
          _ >>>= 14;
          x -= 14;
          o = 0;
          a = 4;
        case 4:
          for (; o < 4 + (s >>> 10);) {
            for (; x < 3;) {
              if (0 === b) {
                i.bitb = _;
                i.bitk = x;
                t.avail_in = b;
                t.total_in += w - t.next_in_index;
                t.next_in_index = w;
                i.write = y;
                return i.inflate_flush(t, e);
              }
              e = 0;
              b--;
              _ |= (255 & t.read_byte(w++)) << x;
              x += 8;
            }
            n[v[o++]] = 7 & _;
            _ >>>= 3;
            x -= 3;
          }
          for (; o < 19;) n[v[o++]] = 0;
          if (l[0] = 7, 0 != (m = p.inflate_trees_bits(n, l, d, h, t))) {
            -3 == (e = m) && (n = null, a = 9);
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          o = 0;
          a = 5;
        case 5:
          for (; ;) {
            let r;
            let c;
            if (o >= 258 + (31 & (m = s)) + (m >> 5 & 31)) break;
            for (m = l[0]; x < m;) {
              if (0 === b) {
                i.bitb = _;
                i.bitk = x;
                t.avail_in = b;
                t.total_in += w - t.next_in_index;
                t.next_in_index = w;
                i.write = y;
                return i.inflate_flush(t, e);
              }
              e = 0;
              b--;
              _ |= (255 & t.read_byte(w++)) << x;
              x += 8;
            }
            if (m = h[(d[0] + (_ & u[m])) * 3 + 1], (c = h[(d[0] + (_ & u[m])) * 3 + 2]) < 16) {
              _ >>>= m;
              x -= m;
              n[o++] = c;
            } else {
              for (z = 18 == c ? 7 : c - 14, r = 18 == c ? 11 : 3; x < m + z;) {
                if (0 === b) {
                  i.bitb = _;
                  i.bitk = x;
                  t.avail_in = b;
                  t.total_in += w - t.next_in_index;
                  t.next_in_index = w;
                  i.write = y;
                  return i.inflate_flush(t, e);
                }
                e = 0;
                b--;
                _ |= (255 & t.read_byte(w++)) << x;
                x += 8;
              }
              if (_ >>>= m, x -= m, r += _ & u[z], _ >>>= z, x -= z, (z = o) + r > 258 + (31 & (m = s)) + (m >> 5 & 31) || 16 == c && z < 1) {
                n = null;
                a = 9;
                t.msg = "invalid bit length repeat";
                e = -3;
                i.bitb = _;
                i.bitk = x;
                t.avail_in = b;
                t.total_in += w - t.next_in_index;
                t.next_in_index = w;
                i.write = y;
                return i.inflate_flush(t, e);
              }
              c = 16 == c ? n[z - 1] : 0;
              do n[z++] = c; while (0 != --r);
              o = z;
            }
          }
          if (d[0] = -1, D = [], I = [], j = [], (R = [])[0] = 9, D[0] = 6, m = s, 0 != (m = p.inflate_trees_dynamic(257 + (31 & m), 1 + (m >> 5 & 31), n, R, D, I, j, h, t))) {
            -3 == m && (n = null, a = 9);
            e = m;
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          c.init(R[0], D[0], h, I[0], h, j[0]);
          a = 6;
        case 6:
          if (i.bitb = _, i.bitk = x, t.avail_in = b, t.total_in += w - t.next_in_index, t.next_in_index = w, i.write = y, 1 != (e = c.proc(i, t, e))) return i.inflate_flush(t, e);
          if (e = 0, c.free(t), w = t.next_in_index, b = t.avail_in, _ = i.bitb, x = i.bitk, k = (y = i.write) < i.read ? i.read - y - 1 : i.end - y, 0 === f) {
            a = 0;
            break;
          }
          a = 7;
        case 7:
          if (i.write = y, e = i.inflate_flush(t, e), k = (y = i.write) < i.read ? i.read - y - 1 : i.end - y, i.read != i.write) {
            i.bitb = _;
            i.bitk = x;
            t.avail_in = b;
            t.total_in += w - t.next_in_index;
            t.next_in_index = w;
            i.write = y;
            return i.inflate_flush(t, e);
          }
          a = 8;
        case 8:
          e = 1;
          i.bitb = _;
          i.bitk = x;
          t.avail_in = b;
          t.total_in += w - t.next_in_index;
          t.next_in_index = w;
          i.write = y;
          return i.inflate_flush(t, e);
        case 9:
          e = -3;
          i.bitb = _;
          i.bitk = x;
          t.avail_in = b;
          t.total_in += w - t.next_in_index;
          t.next_in_index = w;
          i.write = y;
          return i.inflate_flush(t, e);
        default:
          e = -2;
          i.bitb = _;
          i.bitk = x;
          t.avail_in = b;
          t.total_in += w - t.next_in_index;
          t.next_in_index = w;
          i.write = y;
          return i.inflate_flush(t, e);
      }
    }
  };
  i.free = function(t) {
    i.reset(t, null);
    i.window = null;
    h = null;
  };
  i.set_dictionary = function(t, e, n) {
    i.window.set(t.subarray(e, e + n), 0);
    i.read = i.write = n;
  };
  i.sync_point = function() {
    return 1 == a ? 1 : 0;
  };
}
let k = [0, 0, 255, 255];
function z() {
  let t = this;
  function e(t) {
    return t && t.istate ? (t.total_in = t.total_out = 0, t.msg = null, t.istate.mode = 7, t.istate.blocks.reset(t, null), 0) : -2;
  }
  t.mode = 0;
  t.method = 0;
  t.was = [0];
  t.need = 0;
  t.marker = 0;
  t.wbits = 0;
  t.inflateEnd = function(e) {
    t.blocks && t.blocks.free(e);
    t.blocks = null;
    return 0;
  };
  t.inflateInit = function(n, i) {
    return (n.msg = null, t.blocks = null, i < 8 || i > 15) ? (t.inflateEnd(n), -2) : (t.wbits = i, n.istate.blocks = new y(n, 1 << i), e(n), 0);
  };
  t.inflate = function(t, e) {
    let n;
    let i;
    if (!t || !t.istate || !t.next_in) return -2;
    let a = t.istate;
    for (e = 4 == e ? -5 : 0, n = -5; ;) switch (a.mode) {
      case 0:
        if (0 === t.avail_in) return n;
        if (n = e, t.avail_in--, t.total_in++, (15 & (a.method = t.read_byte(t.next_in_index++))) != 8) {
          a.mode = 13;
          t.msg = "unknown compression method";
          a.marker = 5;
          break;
        }
        if ((a.method >> 4) + 8 > a.wbits) {
          a.mode = 13;
          t.msg = "invalid window size";
          a.marker = 5;
          break;
        }
        a.mode = 1;
      case 1:
        if (0 === t.avail_in) return n;
        if (n = e, t.avail_in--, t.total_in++, i = 255 & t.read_byte(t.next_in_index++), ((a.method << 8) + i) % 31 != 0) {
          a.mode = 13;
          t.msg = "incorrect header check";
          a.marker = 5;
          break;
        }
        if ((32 & i) == 0) {
          a.mode = 7;
          break;
        }
        a.mode = 2;
      case 2:
        if (0 === t.avail_in) return n;
        n = e;
        t.avail_in--;
        t.total_in++;
        a.need = (255 & t.read_byte(t.next_in_index++)) << 24 & 0xff000000;
        a.mode = 3;
      case 3:
        if (0 === t.avail_in) return n;
        n = e;
        t.avail_in--;
        t.total_in++;
        a.need += (255 & t.read_byte(t.next_in_index++)) << 16 & 0xff0000;
        a.mode = 4;
      case 4:
        if (0 === t.avail_in) return n;
        n = e;
        t.avail_in--;
        t.total_in++;
        a.need += (255 & t.read_byte(t.next_in_index++)) << 8 & 65280;
        a.mode = 5;
      case 5:
        if (0 === t.avail_in) return n;
        n = e;
        t.avail_in--;
        t.total_in++;
        a.need += 255 & t.read_byte(t.next_in_index++);
        a.mode = 6;
        return 2;
      case 6:
        a.mode = 13;
        t.msg = "need dictionary";
        a.marker = 0;
        return -2;
      case 7:
        if (-3 == (n = a.blocks.proc(t, n))) {
          a.mode = 13;
          a.marker = 0;
          break;
        }
        if (0 == n && (n = e), 1 != n) return n;
        n = e;
        a.blocks.reset(t, a.was);
        a.mode = 12;
      case 12:
        return 1;
      case 13:
        return -3;
      default:
        return -2;
    }
  };
  t.inflateSetDictionary = function(t, e, n) {
    let i = 0;
    let a = n;
    if (!t || !t.istate || 6 != t.istate.mode) return -2;
    let r = t.istate;
    a >= 1 << r.wbits && (i = n - (a = (1 << r.wbits) - 1));
    r.blocks.set_dictionary(e, i, a);
    r.mode = 7;
    return 0;
  };
  t.inflateSync = function(t) {
    let n;
    let i;
    let a;
    let r;
    let s;
    if (!t || !t.istate) return -2;
    let o = t.istate;
    if (13 != o.mode && (o.mode = 13, o.marker = 0), 0 === (n = t.avail_in)) return -5;
    for (i = t.next_in_index, a = o.marker; 0 !== n && a < 4;) {
      t.read_byte(i) == k[a] ? a++ : a = 0 !== t.read_byte(i) ? 0 : 4 - a;
      i++;
      n--;
    }
    return (t.total_in += i - t.next_in_index, t.next_in_index = i, t.avail_in = n, o.marker = a, 4 != a) ? -3 : (r = t.total_in, s = t.total_out, e(t), t.total_in = r, t.total_out = s, o.mode = 7, 0);
  };
  t.inflateSyncPoint = function(t) {
    return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : -2;
  };
}
function A() { }
A.prototype = {
  inflateInit: function(t) {
    this.istate = new z();
    t || (t = 15);
    return this.istate.inflateInit(this, t);
  },
  inflate: function(t) {
    return this.istate ? this.istate.inflate(this, t) : -2;
  },
  inflateEnd: function() {
    if (!this.istate) return -2;
    let t = this.istate.inflateEnd(this);
    this.istate = null;
    return t;
  },
  inflateSync: function() {
    return this.istate ? this.istate.inflateSync(this) : -2;
  },
  inflateSetDictionary: function(t, e) {
    return this.istate ? this.istate.inflateSetDictionary(this, t, e) : -2;
  },
  read_byte: function(t) {
    return this.next_in[t];
  },
  read_buf: function(t, e) {
    return this.next_in.subarray(t, t + e);
  }
};
let U = Object.assign({}, {
  chunkSize: 524288,
  maxWorkers: "undefined" != typeof navigator && navigator.hardwareConcurrency || 2,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: !0,
  workerScripts: void 0
});
export function $$E37(t) {
  if (void 0 !== t.chunkSize && (U.chunkSize = t.chunkSize), void 0 !== t.maxWorkers && (U.maxWorkers = t.maxWorkers), void 0 !== t.terminateWorkerTimeout && (U.terminateWorkerTimeout = t.terminateWorkerTimeout), void 0 !== t.useWebWorkers && (U.useWebWorkers = t.useWebWorkers), void 0 !== t.Deflate && (U.Deflate = t.Deflate), void 0 !== t.Inflate && (U.Inflate = t.Inflate), void 0 !== t.workerScripts) {
    if (t.workerScripts.deflate) {
      if (!Array.isArray(t.workerScripts.deflate)) throw Error("workerScripts.deflate must be an array");
      U.workerScripts || (U.workerScripts = {});
      U.workerScripts.deflate = t.workerScripts.deflate;
    }
    if (t.workerScripts.inflate) {
      if (!Array.isArray(t.workerScripts.inflate)) throw Error("workerScripts.inflate must be an array");
      U.workerScripts || (U.workerScripts = {});
      U.workerScripts.inflate = t.workerScripts.inflate;
    }
  }
}
let S = {
  application: {
    "andrew-inset": "ez",
    annodex: "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    bbolin: "lin",
    cap: ["cap", "pcap"],
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    dsptype: "tsp",
    ecmascript: ["es", "ecma"],
    futuresplash: "spl",
    hta: "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    javascript: "js",
    m3g: "m3g",
    "mac-binhex40": "hqx",
    mathematica: ["nb", "ma", "mb"],
    msaccess: "mdb",
    msword: ["doc", "dot"],
    mxf: "mxf",
    oda: "oda",
    ogg: "ogx",
    pdf: "pdf",
    "pgp-keys": "key",
    "pgp-signature": ["asc", "sig"],
    "pics-rules": "prf",
    postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
    rar: "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    rtf: "rtf",
    smil: ["smi", "smil"],
    "xhtml+xml": ["xhtml", "xht"],
    xml: ["xml", "xsl", "xsd"],
    "xspf+xml": "xspf",
    zip: "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": "odm",
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": ["sdf", "smf"],
    "vnd.stardivision.writer": ["sdw", "vor"],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": ["sis", "sisx"],
    "vnd.visio": ["vsd", "vst", "vss", "vsw"],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": ["cbr", "cba", "cbt", "cb7"],
    "x-cbz": "cbz",
    "x-cdf": ["cdf", "cda"],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-debian-package": ["deb", "udeb"],
    "x-director": ["dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": ["gtar", "taz"],
    "x-hdf": "hdf",
    "x-httpd-php": ["phtml", "pht", "php"],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": ["ins", "isp"],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-koan": ["skp", "skd", "skt", "skm"],
    "x-kpresenter": ["kpr", "kpt"],
    "x-kword": ["kwd", "kwt"],
    "x-latex": "latex",
    "x-lha": "lha",
    "x-lyx": "lyx",
    "x-lzh": "lzh",
    "x-lzx": "lzx",
    "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
    "x-ms-wmd": "wmd",
    "x-ms-wmz": "wmz",
    "x-msdos-program": ["com", "exe", "bat", "dll"],
    "x-msi": "msi",
    "x-netcdf": ["nc", "cdf"],
    "x-ns-proxy-autoconfig": ["pac", "dat"],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": ["pyc", "pyo"],
    "x-qgis": ["qgs", "shp", "shx"],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": "rpm",
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": ["swf", "swfl"],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tcl": "tcl",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": ["texinfo", "texi"],
    "x-trash": ["~", "%", "bak", "old", "sik"],
    "x-troff": ["t", "tr", "roff"],
    "x-troff-man": "man",
    "x-troff-me": "me",
    "x-troff-ms": "ms",
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": ["crt", "der", "cer"],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    applixware: "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    exi: "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    gxf: "gxf",
    hyperstudio: "stk",
    "inkml+xml": ["ink", "inkml"],
    ipfix: "ipfix",
    json: "json",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    marc: "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": "mathml",
    mbox: "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    mp21: ["m21", "mp21"],
    mp4: "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
    oxps: "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    pkcs10: "p10",
    "pkcs7-mime": ["p7m", "p7c"],
    "pkcs7-signature": "p7s",
    pkcs8: "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    pkixcmp: "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    sdp: "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    srgs: "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": ["tei", "teicorpus"],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": ["atc", "acutc"],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": ["fxp", "fxpl"],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
    "vnd.dece.ttml+xml": ["uvt", "uvvt"],
    "vnd.dece.unspecified": ["uvx", "uvvx"],
    "vnd.dece.zip": ["uvz", "uvvz"],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": ["es3", "et3"],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": ["seed", "dataless"],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": ["fm", "frame", "maker", "book"],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": ["gex", "gre"],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": ["gqf", "gqs"],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": ["icc", "icm"],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": ["xpw", "xpx"],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": ["ktz", "ktr"],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": ["kpr", "kpt"],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": ["kwd", "kwt"],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": ["kne", "knp"],
    "vnd.koan": ["skp", "skd", "skt", "skm"],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": ["mpp", "mpt"],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": ["ntf", "nitf"],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": ["pdb", "pqa", "oprc"],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": ["twd", "twds"],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": ["sus", "susp"],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": ["ufd", "ufdl"],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": ["zir", "zirz"],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    widget: "wgt",
    winhlp: "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": ["aab", "x32", "u32", "vox"],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": ["blb", "blorb"],
    "x-bzip": "bz",
    "x-bzip2": ["bz2", "boz"],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-otf": "otf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": ["ttf", "ttc"],
    "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "x-font-woff": "woff",
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": ["lzh", "lha"],
    "x-mie": "mie",
    "x-mobipocket-ebook": ["prc", "mobi"],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
    "x-msmediaview": ["mvb", "m13", "m14"],
    "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": ["p12", "pfx"],
    "x-pkcs7-certificates": ["p7b", "spc"],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tads": "gam",
    "x-tex": "tex",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    yang: "yang",
    "yin+xml": "yin",
    envoy: "evy",
    fractals: "fif",
    "internet-property-stream": "acx",
    olescript: "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-compressed": "tgz",
    "x-gzip": "gz",
    "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
    "x-pkcs7-mime": ["p7c", "p7m"],
    "ynd.ms-pkipko": "pko"
  },
  audio: {
    amr: "amr",
    "amr-wb": "awb",
    annodex: "axa",
    basic: ["au", "snd"],
    flac: "flac",
    midi: ["mid", "midi", "kar", "rmi"],
    mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
    mpegurl: "m3u",
    ogg: ["oga", "ogg", "spx"],
    "prs.sid": "sid",
    "x-aiff": ["aif", "aiff", "aifc"],
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    "x-wav": "wav",
    adpcm: "adp",
    mp4: "mp4a",
    s3m: "s3m",
    silk: "sil",
    "vnd.dece.audio": ["uva", "uvva"],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    webm: "weba",
    "x-aac": "aac",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    mid: ["mid", "rmi"]
  },
  chemical: {
    "x-alchemy": "alc",
    "x-cache": ["cac", "cache"],
    "x-cache-csf": "csf",
    "x-cactvs-binary": ["cbin", "cascii", "ctab"],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": ["csml", "csm"],
    "x-ctx": "ctx",
    "x-cxf": ["cxf", "cef"],
    "x-embl-dl-nucleotide": ["emb", "embl"],
    "x-gamess-input": ["inp", "gam", "gamin"],
    "x-gaussian-checkpoint": ["fch", "fchk"],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": ["gau", "gjc", "gjf"],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": ["istr", "ist"],
    "x-jcamp-dx": ["jdx", "dx"],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": ["mmd", "mmod"],
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": ["sd", "sdf"],
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": ["prt", "ent"],
    "x-ncbi-asn1-binary": ["val", "aso"],
    "x-pdb": ["pdb", "ent"],
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: ["jpeg", "jpg", "jpe"],
    pcx: "pcx",
    png: "png",
    "svg+xml": ["svg", "svgz"],
    tiff: ["tiff", "tif"],
    "vnd.djvu": ["djvu", "djv"],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-photoshop": "psd",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    bmp: "bmp",
    cgm: "cgm",
    g3fax: "g3",
    ktx: "ktx",
    "prs.btif": "btif",
    sgi: "sgi",
    "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    webp: "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
    "x-pict": ["pic", "pct"],
    "x-tga": "tga",
    "cis-cod": "cod",
    pipeg: "jfif"
  },
  message: {
    rfc822: ["eml", "mime", "mht", "mhtml", "nws"]
  },
  model: {
    iges: ["igs", "iges"],
    mesh: ["msh", "mesh", "silo"],
    vrml: ["wrl", "vrml"],
    "x3d+vrml": ["x3dv", "x3dvz"],
    "x3d+xml": ["x3d", "x3dz"],
    "x3d+binary": ["x3db", "x3dbz"],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.vtu": "vtu"
  },
  text: {
    "cache-manifest": ["manifest", "appcache"],
    calendar: ["ics", "icz", "ifb"],
    css: "css",
    csv: "csv",
    h323: "323",
    html: ["html", "htm", "shtml", "stm"],
    iuls: "uls",
    mathml: "mml",
    plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
    richtext: "rtx",
    scriptlet: ["sct", "wsc"],
    texmacs: ["tm", "ts"],
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
    "x-c++src": ["c++", "cpp", "cxx", "cc"],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": ["diff", "patch"],
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": ["p", "pas"],
    "x-pcs-gcd": "gcd",
    "x-perl": ["pl", "pm"],
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": ["tcl", "tk"],
    "x-tex": ["tex", "ltx", "sty", "cls"],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    n3: "n3",
    "prs.lines.tag": "dsc",
    sgml: ["sgml", "sgm"],
    troff: ["t", "tr", "roff", "man", "me", "ms"],
    turtle: "ttl",
    "uri-list": ["uri", "uris", "urls"],
    vcard: "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": ["s", "asm"],
    "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    "x-fortran": ["f", "for", "f77", "f90"],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    webviewhtml: "htt"
  },
  video: {
    avif: ".avif",
    "3gpp": "3gp",
    annodex: "axv",
    dl: "dl",
    dv: ["dif", "dv"],
    fli: "fli",
    gl: "gl",
    mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
    mp4: ["mp4", "mp4v", "mpg4"],
    quicktime: ["qt", "mov"],
    ogg: "ogv",
    "vnd.mpegurl": ["mxu", "m4u"],
    "x-flv": "flv",
    "x-la-asf": ["lsf", "lsx"],
    "x-mng": "mng",
    "x-ms-asf": ["asf", "asx", "asr"],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: ["jpm", "jpgm"],
    mj2: ["mj2", "mjp2"],
    "vnd.dece.hd": ["uvh", "uvvh"],
    "vnd.dece.mobile": ["uvm", "uvvm"],
    "vnd.dece.pd": ["uvp", "uvvp"],
    "vnd.dece.sd": ["uvs", "uvvs"],
    "vnd.dece.video": ["uvv", "uvvv"],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": ["uvu", "uvvu"],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"]
  }
};
let R = (() => {
  let t = {};
  for (let e in S) if (S.hasOwnProperty(e)) {
    for (let n in S[e]) if (S[e].hasOwnProperty(n)) {
      let i = S[e][n];
      if ("string" == typeof i) t[i] = e + "/" + n; else for (let a = 0; a < i.length; a++) t[i[a]] = e + "/" + n;
    }
  }
  return t;
})();
let $$D39 = function(t) {
  return t && R[t.split(".").pop().toLowerCase()] || "application/octet-stream";
};
let I = [];
for (let t = 0; t < 256; t++) {
  let e = t;
  for (let t = 0; t < 8; t++) 1 & e ? e = e >>> 1 ^ 0xedb88320 : e >>>= 1;
  I[t] = e;
}
let j = class {
  constructor(t) {
    this.crc = t || -1;
  }
  append(t) {
    let e = 0 | this.crc;
    for (function() {
      let n = 0;
      let i = 0 | t.length;
    }(); n < i; n++) e = e >>> 8 ^ I[(e ^ t[n]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
};
let T = {
  concat(t, e) {
    if (0 === t.length || 0 === e.length) return t.concat(e);
    let n = t[t.length - 1];
    let i = T.getPartial(n);
    return 32 === i ? t.concat(e) : T._shiftRight(e, i, 0 | n, t.slice(0, t.length - 1));
  },
  bitLength(t) {
    let e = t.length;
    if (0 === e) return 0;
    let n = t[e - 1];
    return (e - 1) * 32 + T.getPartial(n);
  },
  clamp(t, e) {
    if (32 * t.length < e) return t;
    let n = (t = t.slice(0, Math.ceil(e / 32))).length;
    e &= 31;
    n > 0 && e && (t[n - 1] = T.partial(e, t[n - 1] & 0x80000000 >> e - 1, 1));
    return t;
  },
  partial: (t, e, n) => 32 === t ? e : (n ? 0 | e : e << 32 - t) + 0x10000000000 * t,
  getPartial: t => Math.round(t / 0x10000000000) || 32,
  _shiftRight(t, e, n, i) {
    for (void 0 === i && (i = []); e >= 32; e -= 32) {
      i.push(n);
      n = 0;
    }
    if (0 === e) return i.concat(t);
    for (let a = 0; a < t.length; a++) {
      i.push(n | t[a] >>> e);
      n = t[a] << 32 - e;
    }
    let a = t.length ? t[t.length - 1] : 0;
    let r = T.getPartial(a);
    i.push(T.partial(e + r & 31, e + r > 32 ? n : i.pop(), 1));
    return i;
  }
};
let B = {
  bytes: {
    fromBits(t) {
      let e;
      let n = T.bitLength(t) / 8;
      let i = new Uint8Array(n);
      for (let a = 0; a < n; a++) {
        (3 & a) == 0 && (e = t[a / 4]);
        i[a] = e >>> 24;
        e <<= 8;
      }
      return i;
    },
    toBits(t) {
      let e;
      let n = [];
      let i = 0;
      for (e = 0; e < t.length; e++) {
        i = i << 8 | t[e];
        (3 & e) == 3 && (n.push(i), i = 0);
      }
      3 & e && n.push(T.partial(8 * (3 & e), i));
      return n;
    }
  }
};
let C = {};
C.sha1 = function(t) {
  t ? (this._h = t._h.slice(0), this._buffer = t._buffer.slice(0), this._length = t._length) : this.reset();
};
C.sha1.prototype = {
  blockSize: 512,
  reset: function() {
    this._h = this._init.slice(0);
    this._buffer = [];
    this._length = 0;
    return this;
  },
  update: function(t) {
    "string" == typeof t && (t = B.utf8String.toBits(t));
    let e = this._buffer = T.concat(this._buffer, t);
    let n = this._length;
    let i = this._length = n + T.bitLength(t);
    if (i > 0x1fffffffffffff) throw Error("Cannot hash more than 2^53 - 1 bits");
    let a = new Uint32Array(e);
    let r = 0;
    for (let t = this.blockSize + n - (this.blockSize + n & this.blockSize - 1); t <= i; t += this.blockSize) {
      this._block(a.subarray(16 * r, 16 * (r + 1)));
      r += 1;
    }
    e.splice(0, 16 * r);
    return this;
  },
  finalize: function() {
    let t = this._buffer;
    let e = this._h;
    t = T.concat(t, [T.partial(1, 1)]);
    for (let e = t.length + 2; 15 & e; e++) t.push(0);
    for (t.push(Math.floor(this._length / 0x100000000)), t.push(0 | this._length); t.length;) this._block(t.splice(0, 16));
    this.reset();
    return e;
  },
  _init: [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0],
  _key: [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
  _f: function(t, e, n, i) {
    return t <= 19 ? e & n | ~e & i : t <= 39 ? e ^ n ^ i : t <= 59 ? e & n | e & i | n & i : t <= 79 ? e ^ n ^ i : void 0;
  },
  _S: function(t, e) {
    return e << t | e >>> 32 - t;
  },
  _block: function(t) {
    let e = this._h;
    let n = Array(80);
    for (let e = 0; e < 16; e++) n[e] = t[e];
    let i = e[0];
    let a = e[1];
    let r = e[2];
    let s = e[3];
    let o = e[4];
    for (let t = 0; t <= 79; t++) {
      t >= 16 && (n[t] = this._S(1, n[t - 3] ^ n[t - 8] ^ n[t - 14] ^ n[t - 16]));
      let e = this._S(5, i) + this._f(t, a, r, s) + o + n[t] + this._key[Math.floor(t / 20)] | 0;
      o = s;
      s = r;
      r = this._S(30, a);
      a = i;
      i = e;
    }
    e[0] = e[0] + i | 0;
    e[1] = e[1] + a | 0;
    e[2] = e[2] + r | 0;
    e[3] = e[3] + s | 0;
    e[4] = e[4] + o | 0;
  }
};
let F = {};
F.aes = class {
  constructor(t) {
    this._tables = [[[], [], [], [], []], [[], [], [], [], []]];
    this._tables[0][0][0] || this._precompute();
    let e = this._tables[0][4];
    let n = this._tables[1];
    let i = t.length;
    let a;
    let r;
    let s;
    let o = 1;
    if (4 !== i && 6 !== i && 8 !== i) throw Error("invalid aes key size");
    for (this._key = [r = t.slice(0), s = []], a = i; a < 4 * i + 28; a++) {
      let t = r[a - 1];
      (a % i == 0 || 8 === i && a % i == 4) && (t = e[t >>> 24] << 24 ^ e[t >> 16 & 255] << 16 ^ e[t >> 8 & 255] << 8 ^ e[255 & t], a % i == 0 && (t = t << 8 ^ t >>> 24 ^ o << 24, o = o << 1 ^ (o >> 7) * 283));
      r[a] = r[a - i] ^ t;
    }
    for (let t = 0; a; t++, a--) {
      let i = r[3 & t ? a : a - 4];
      a <= 4 || t < 4 ? s[t] = i : s[t] = n[0][e[i >>> 24]] ^ n[1][e[i >> 16 & 255]] ^ n[2][e[i >> 8 & 255]] ^ n[3][e[255 & i]];
    }
  }
  encrypt(t) {
    return this._crypt(t, 0);
  }
  decrypt(t) {
    return this._crypt(t, 1);
  }
  _precompute() {
    let t;
    let e;
    let n;
    let i = this._tables[0];
    let a = this._tables[1];
    let r = i[4];
    let s = a[4];
    let o = [];
    let l = [];
    for (let t = 0; t < 256; t++) l[(o[t] = t << 1 ^ (t >> 7) * 283) ^ t] = t;
    for (let d = t = 0; !r[d]; d ^= e || 1, t = l[t] || 1) {
      let l = t ^ t << 1 ^ t << 2 ^ t << 3 ^ t << 4;
      l = l >> 8 ^ 255 & l ^ 99;
      r[d] = l;
      s[l] = d;
      let c = 0x1010101 * o[n = o[e = o[d]]] ^ 65537 * n ^ 257 * e ^ 0x1010100 * d;
      let f = 257 * o[l] ^ 0x1010100 * l;
      for (let t = 0; t < 4; t++) {
        i[t][d] = f = f << 24 ^ f >>> 8;
        a[t][l] = c = c << 24 ^ c >>> 8;
      }
    }
    for (let t = 0; t < 5; t++) {
      i[t] = i[t].slice(0);
      a[t] = a[t].slice(0);
    }
  }
  _crypt(t, e) {
    let n;
    let i;
    let a;
    if (4 !== t.length) throw Error("invalid aes block size");
    let r = this._key[e];
    let s = r.length / 4 - 2;
    let o = [0, 0, 0, 0];
    let l = this._tables[e];
    let d = l[0];
    let c = l[1];
    let f = l[2];
    let u = l[3];
    let h = l[4];
    let p = t[0] ^ r[0];
    let m = t[e ? 3 : 1] ^ r[1];
    let _ = t[2] ^ r[2];
    let x = t[e ? 1 : 3] ^ r[3];
    let w = 4;
    for (let t = 0; t < s; t++) {
      n = d[p >>> 24] ^ c[m >> 16 & 255] ^ f[_ >> 8 & 255] ^ u[255 & x] ^ r[w];
      i = d[m >>> 24] ^ c[_ >> 16 & 255] ^ f[x >> 8 & 255] ^ u[255 & p] ^ r[w + 1];
      a = d[_ >>> 24] ^ c[x >> 16 & 255] ^ f[p >> 8 & 255] ^ u[255 & m] ^ r[w + 2];
      x = d[x >>> 24] ^ c[p >> 16 & 255] ^ f[m >> 8 & 255] ^ u[255 & _] ^ r[w + 3];
      w += 4;
      p = n;
      m = i;
      _ = a;
    }
    for (let t = 0; t < 4; t++) {
      o[e ? 3 & -t : t] = h[p >>> 24] << 24 ^ h[m >> 16 & 255] << 16 ^ h[_ >> 8 & 255] << 8 ^ h[255 & x] ^ r[w++];
      n = p;
      p = m;
      m = _;
      _ = x;
      x = n;
    }
    return o;
  }
};
let M = {};
M.ctrGladman = class {
  constructor(t, e) {
    this._prf = t;
    this._initIv = e;
    this._iv = e;
  }
  reset() {
    this._iv = this._initIv;
  }
  update(t) {
    return this.calculate(this._prf, t, this._iv);
  }
  incWord(t) {
    if ((t >> 24 & 255) == 255) {
      let e = t >> 16 & 255;
      let n = t >> 8 & 255;
      let i = 255 & t;
      255 === e ? (e = 0, 255 === n ? (n = 0, 255 === i ? i = 0 : ++i) : ++n) : ++e;
      t = 0 + (e << 16) + (n << 8) + i;
    } else t += 0x1000000;
    return t;
  }
  incCounter(t) {
    0 === (t[0] = this.incWord(t[0])) && (t[1] = this.incWord(t[1]));
  }
  calculate(t, e, n) {
    let i;
    if (!(i = e.length)) return [];
    let a = T.bitLength(e);
    for (let a = 0; a < i; a += 4) {
      this.incCounter(n);
      let i = t.encrypt(n);
      e[a] ^= i[0];
      e[a + 1] ^= i[1];
      e[a + 2] ^= i[2];
      e[a + 3] ^= i[3];
    }
    return T.clamp(e, a);
  }
};
let W = {};
W.hmacSha1 = class {
  constructor(t) {
    let e = this._hash = C.sha1;
    let n = [[], []];
    let i = e.prototype.blockSize / 32;
    this._baseHash = [new e(), new e()];
    t.length > i && (t = e.hash(t));
    for (let e = 0; e < i; e++) {
      n[0][e] = 0x36363636 ^ t[e];
      n[1][e] = 0x5c5c5c5c ^ t[e];
    }
    this._baseHash[0].update(n[0]);
    this._baseHash[1].update(n[1]);
    this._resultHash = new e(this._baseHash[0]);
  }
  reset() {
    this._resultHash = new this._hash(this._baseHash[0]);
    this._updated = !1;
  }
  update(t) {
    this._updated = !0;
    this._resultHash.update(t);
  }
  digest() {
    let t = this._resultHash.finalize();
    let e = new this._hash(this._baseHash[1]).update(t).finalize();
    this.reset();
    return e;
  }
};
let $$O20 = "Invalid pasword";
let H = {
  name: "PBKDF2"
};
let q = Object.assign({
  hash: {
    name: "HMAC"
  }
}, H);
let N = Object.assign({
  iterations: 1e3,
  hash: {
    name: "SHA-1"
  }
}, H);
let L = ["deriveBits"];
let P = [8, 12, 16];
let V = [16, 24, 32];
let Z = [0, 0, 0, 0];
let K = B.bytes;
let G = F.aes;
let X = M.ctrGladman;
let Q = W.hmacSha1;
class Y {
  constructor(t, e, n) {
    Object.assign(this, {
      password: t,
      signed: e,
      strength: n - 1,
      pendingInput: new Uint8Array(0)
    });
  }
  async append(t) {
    if (this.password) {
      let e = ta(t, 0, P[this.strength] + 2);
      await tt(this, e, this.password);
      this.password = null;
      this.aesCtrGladman = new X(new G(this.keys.key), Array.from(Z));
      this.hmac = new Q(this.keys.authentication);
      t = ta(t, P[this.strength] + 2);
    }
    let e = new Uint8Array(t.length - 10 - (t.length - 10) % 16);
    return $(this, t, e, 0, 10, !0);
  }
  flush() {
    let t = this.pendingInput;
    let e = ta(t, 0, t.length - 10);
    let n = ta(t, t.length - 10);
    let i = new Uint8Array(0);
    if (e.length) {
      let t = K.toBits(e);
      this.hmac.update(t);
      let n = this.aesCtrGladman.update(t);
      i = K.fromBits(n);
    }
    let a = !0;
    if (this.signed) {
      let t = ta(K.fromBits(this.hmac.digest()), 0, 10);
      for (let e = 0; e < 10; e++) t[e] != n[e] && (a = !1);
    }
    return {
      valid: a,
      data: i
    };
  }
}
class J {
  constructor(t, e) {
    Object.assign(this, {
      password: t,
      strength: e - 1,
      pendingInput: new Uint8Array(0)
    });
  }
  async append(t) {
    let e = new Uint8Array(0);
    this.password && (e = await te(this, this.password), this.password = null, this.aesCtrGladman = new X(new G(this.keys.key), Array.from(Z)), this.hmac = new Q(this.keys.authentication));
    let n = new Uint8Array(e.length + t.length - t.length % 16);
    n.set(e, 0);
    return $(this, t, n, e.length, 0);
  }
  flush() {
    let t = new Uint8Array(0);
    if (this.pendingInput.length) {
      let e = this.aesCtrGladman.update(K.toBits(this.pendingInput));
      this.hmac.update(e);
      t = K.fromBits(e);
    }
    let e = ta(K.fromBits(this.hmac.digest()), 0, 10);
    return {
      data: ti(t, e),
      signature: e
    };
  }
}
function $(t, e, n, i, a, r) {
  let s;
  let o = e.length - a;
  for (t.pendingInput.length && (e = ti(t.pendingInput, e), n = function(t, e) {
    if (e && e > t.length) {
      let n = t;
      (t = new Uint8Array(e)).set(n, 0);
    }
    return t;
  }(n, o - o % 16)), s = 0; s <= o - 16; s += 16) {
    let a = K.toBits(ta(e, s, s + 16));
    r && t.hmac.update(a);
    let o = t.aesCtrGladman.update(a);
    r || t.hmac.update(o);
    n.set(K.fromBits(o), s + i);
  }
  t.pendingInput = ta(e, s);
  return n;
}
async function tt(t, e, n) {
  await tn(t, n, ta(e, 0, P[t.strength]));
  let i = ta(e, P[t.strength]);
  let a = t.keys.passwordVerification;
  if (a[0] != i[0] || a[1] != i[1]) throw Error($$O20);
}
async function te(t, e) {
  let n = crypto.getRandomValues(new Uint8Array(P[t.strength]));
  await tn(t, e, n);
  return ti(n, t.keys.passwordVerification);
}
async function tn(t, e, n) {
  let i = new TextEncoder().encode(e);
  let a = await crypto.subtle.importKey("raw", i, q, !1, L);
  let r = new Uint8Array(await crypto.subtle.deriveBits(Object.assign({
    salt: n
  }, N), a, 8 * (2 * V[t.strength] + 2)));
  t.keys = {
    key: K.toBits(ta(r, 0, V[t.strength])),
    authentication: K.toBits(ta(r, V[t.strength], 2 * V[t.strength])),
    passwordVerification: ta(r, 2 * V[t.strength])
  };
}
function ti(t, e) {
  let n = t;
  t.length + e.length && ((n = new Uint8Array(t.length + e.length)).set(t, 0), n.set(e, t.length));
  return n;
}
function ta(t, e, n) {
  return t.subarray(e, n);
}
class tr {
  constructor(t, e) {
    Object.assign(this, {
      password: t,
      passwordVerification: e
    });
    td(this, t);
  }
  append(t) {
    if (this.password) {
      let e = to(this, t.subarray(0, 12));
      if (this.password = null, e[11] != this.passwordVerification) throw Error($$O20);
      t = t.subarray(12);
    }
    return to(this, t);
  }
  flush() {
    return {
      valid: !0,
      data: new Uint8Array(0)
    };
  }
}
class ts {
  constructor(t, e) {
    Object.assign(this, {
      password: t,
      passwordVerification: e
    });
    td(this, t);
  }
  append(t) {
    let e;
    let n;
    if (this.password) {
      this.password = null;
      let i = crypto.getRandomValues(new Uint8Array(12));
      i[11] = this.passwordVerification;
      (e = new Uint8Array(t.length + i.length)).set(tl(this, i), 0);
      n = 12;
    } else {
      e = new Uint8Array(t.length);
      n = 0;
    }
    e.set(tl(this, t), n);
    return e;
  }
  flush() {
    return {
      data: new Uint8Array(0)
    };
  }
}
function to(t, e) {
  let n = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) {
    n[i] = tf(t) ^ e[i];
    tc(t, n[i]);
  }
  return n;
}
function tl(t, e) {
  let n = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++) {
    n[i] = tf(t) ^ e[i];
    tc(t, e[i]);
  }
  return n;
}
function td(t, e) {
  t.keys = [0x12345678, 0x23456789, 0x34567890];
  t.crcKey0 = new j(t.keys[0]);
  t.crcKey2 = new j(t.keys[2]);
  for (let n = 0; n < e.length; n++) tc(t, e.charCodeAt(n));
}
function tc(t, e) {
  t.crcKey0.append([e]);
  t.keys[0] = ~t.crcKey0.get();
  t.keys[1] = tu(t.keys[1] + (255 & t.keys[0]));
  t.keys[1] = tu(Math.imul(t.keys[1], 0x8088405) + 1);
  t.crcKey2.append([t.keys[1] >>> 24]);
  t.keys[2] = ~t.crcKey2.get();
}
function tf(t) {
  let e = 2 | t.keys[2];
  return 255 & Math.imul(e, 1 ^ e) >>> 8;
}
function tu(t) {
  return 0xffffffff & t;
}
let th = "deflate";
let tp = "inflate";
let $$tm21 = "Invalid signature";
class t_ {
  constructor(t, {
    signature: e,
    password: n,
    signed: i,
    compressed: a,
    zipCrypto: r,
    passwordVerification: s,
    encryptionStrength: o
  }, {
    chunkSize: l
  }) {
    let d = !!n;
    Object.assign(this, {
      signature: e,
      encrypted: d,
      signed: i,
      compressed: a,
      inflate: a && new t({
        chunkSize: l
      }),
      crc32: i && new j(),
      zipCrypto: r,
      decrypt: d && r ? new tr(n, s) : new Y(n, i, o)
    });
  }
  async append(t) {
    this.encrypted && t.length && (t = await this.decrypt.append(t));
    this.compressed && t.length && (t = await this.inflate.append(t));
    (!this.encrypted || this.zipCrypto) && this.signed && t.length && this.crc32.append(t);
    return t;
  }
  async flush() {
    let t;
    let e = new Uint8Array(0);
    if (this.encrypted) {
      let t = this.decrypt.flush();
      if (!t.valid) throw Error($$tm21);
      e = t.data;
    }
    if ((!this.encrypted || this.zipCrypto) && this.signed) {
      let e = new DataView(new Uint8Array(4).buffer);
      if (t = this.crc32.get(), e.setUint32(0, t), this.signature != e.getUint32(0, !1)) throw Error($$tm21);
    }
    this.compressed && (e = (await this.inflate.append(e)) || new Uint8Array(0), await this.inflate.flush());
    return {
      data: e,
      signature: t
    };
  }
}
class tx {
  constructor(t, {
    encrypted: e,
    signed: n,
    compressed: i,
    level: a,
    zipCrypto: r,
    password: s,
    passwordVerification: o,
    encryptionStrength: l
  }, {
    chunkSize: d
  }) {
    Object.assign(this, {
      encrypted: e,
      signed: n,
      compressed: i,
      deflate: i && new t({
        level: a || 5,
        chunkSize: d
      }),
      crc32: n && new j(),
      zipCrypto: r,
      encrypt: e && r ? new ts(s, o) : new J(s, l)
    });
  }
  async append(t) {
    let e = t;
    this.compressed && t.length && (e = await this.deflate.append(t));
    this.encrypted && e.length && (e = await this.encrypt.append(e));
    (!this.encrypted || this.zipCrypto) && this.signed && t.length && this.crc32.append(t);
    return e;
  }
  async flush() {
    let t;
    let e = new Uint8Array(0);
    if (this.compressed && (e = (await this.deflate.flush()) || new Uint8Array(0)), this.encrypted) {
      e = await this.encrypt.append(e);
      let n = this.encrypt.flush();
      t = n.signature;
      let i = new Uint8Array(e.length + n.data.length);
      i.set(e, 0);
      i.set(n.data, e.length);
      e = i;
    }
    (!this.encrypted || this.zipCrypto) && this.signed && (t = this.crc32.get());
    return {
      data: e,
      signature: t
    };
  }
}
let tw = "init";
let tg = "append";
let tb = "flush";
let tv = !0;
let ty = (t, e, n, i, a, r, s) => (Object.assign(t, {
  busy: !0,
  codecConstructor: e,
  options: Object.assign({}, n),
  scripts: s,
  terminate() {
    t.worker && !t.busy && (t.worker.terminate(), t.$$interface = null);
  },
  onTaskFinished() {
    t.busy = !1;
    a(t);
  }
}), r ? function(t, e) {
  let n;
  let i = {
    type: "module"
  };
  if (!t.$$interface) {
    if (tv) try {
      t.worker = a();
    } catch (e) {
      tv = !1;
      t.worker = a(i);
    } else t.worker = a(i);
    t.worker.addEventListener("message", function(e) {
      let i = e.data;
      if (n) {
        let e = i.error;
        let a = i.type;
        if (e) {
          let i = Error(e.message);
          i.stack = e.stack;
          n.reject(i);
          n = null;
          t.onTaskFinished();
        } else if (a == tw || a == tb || a == tg) {
          let e = i.data;
          a == tb ? (n.resolve({
            data: new Uint8Array(e),
            signature: i.signature
          }), n = null, t.onTaskFinished()) : n.resolve(e && new Uint8Array(e));
        }
      }
    }, !1);
    t.$$interface = {
      append: t => r({
        type: tg,
        data: t
      }),
      flush: () => r({
        type: tb
      })
    };
  }
  return t.$$interface;
  function a(e = {}) {
    return new Worker(new URL(t.scripts[0], "file:///home/circleci/figma/web/node_modules/.pnpm/@zip.js+zip.js@2.3.12/node_modules/@zip.js/zip.js/lib/core/codecs/codec-pool-worker.js"), e);
  }
  async function r(i) {
    if (!n) {
      let n = t.options;
      let i = t.scripts.slice(1);
      await s({
        scripts: i,
        type: tw,
        options: n,
        config: {
          chunkSize: e.chunkSize
        }
      });
    }
    return s(i);
  }
  function s(e) {
    let i = t.worker;
    let a = new Promise((t, e) => n = {
      resolve: t,
      reject: e
    });
    try {
      if (e.data) try {
        e.data = e.data.buffer;
        i.postMessage(e, [e.data]);
      } catch (t) {
        i.postMessage(e);
      } else i.postMessage(e);
    } catch (e) {
      n.reject(e);
      n = null;
      t.onTaskFinished();
    }
    return a;
  }
}(t, i) : function(t, e) {
  var n;
  var i;
  n = t.codecConstructor;
  let a = (i = t.options).codecType.startsWith(th) ? new tx(n, i, e) : i.codecType.startsWith(tp) ? new t_(n, i, e) : void 0;
  return {
    async append(e) {
      try {
        return await a.append(e);
      } catch (e) {
        t.onTaskFinished();
        return e;
      }
    },
    async flush() {
      try {
        return await a.flush();
      } finally {
        t.onTaskFinished();
      }
    }
  };
}(t, i));
let tk = [];
let tz = [];
function tA(t, e, n) {
  let i = !(!e.compressed && !e.signed && !e.encrypted) && (e.useWebWorkers || void 0 === e.useWebWorkers && n.useWebWorkers);
  let a = i && n.workerScripts ? n.workerScripts[e.codecType] : [];
  if (tk.length < n.maxWorkers) {
    let s = {};
    tk.push(s);
    return ty(s, t, e, n, r, i, a);
  }
  {
    let s = tk.find(t => !t.busy);
    return s ? (tU(s), ty(s, t, e, n, r, i, a)) : new Promise(n => tz.push({
      resolve: n,
      codecConstructor: t,
      options: e,
      webWorker: i,
      scripts: a
    }));
  }
  function r(t) {
    if (tz.length) {
      let [{
        resolve: e,
        codecConstructor: i,
        options: a,
        webWorker: s,
        scripts: o
      }] = tz.splice(0, 1);
      e(ty(t, i, a, n, r, s, o));
    } else t.worker ? (tU(t), Number.isFinite(n.terminateWorkerTimeout) && n.terminateWorkerTimeout >= 0 && (t.terminateTimeout = setTimeout(() => {
      tk = tk.filter(e => e != t);
      t.terminate();
    }, n.terminateWorkerTimeout))) : tk = tk.filter(e => e != t);
  }
}
function tU(t) {
  t.terminateTimeout && (clearTimeout(t.terminateTimeout), t.terminateTimeout = null);
}
export function $$tE41() {
  tk.forEach(t => {
    tU(t);
    t.terminate();
  });
}
export let $$tS40 = (t, e = {}, n) => ({
  Deflate: tR(t.Deflate, e.deflate, n),
  Inflate: tR(t.Inflate, e.inflate, n)
});
function tR(t, e, n) {
  return class {
    constructor(i) {
      let a = this;
      a.codec = new t(Object.assign({}, e, i));
      n(a.codec, t => {
        if (a.pendingData) {
          let e = a.pendingData;
          a.pendingData = new Uint8Array(e.length + t.length);
          a.pendingData.set(e, 0);
          a.pendingData.set(t, e.length);
        } else a.pendingData = new Uint8Array(t);
      });
    }
    async append(t) {
      this.codec.push(t);
      return i(this);
    }
    async flush() {
      this.codec.push(new Uint8Array(0), !0);
      return i(this);
    }
  };
  function i(t) {
    if (!t.pendingData) return new Uint8Array(0);
    {
      let e = t.pendingData;
      t.pendingData = null;
      return e;
    }
  }
}
let tD = "HTTP error ";
let $$tI13 = "HTTP Range not supported";
let tj = "text/plain";
let tT = "Content-Length";
let tB = "Accept-Ranges";
let tC = "HEAD";
let tF = "bytes";
class tM {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
export class $$tW29 extends tM { }
export class $$tO34 extends tM {
  writeUint8Array(t) {
    this.size += t.length;
  }
}
export class $$tH30 extends $$tW29 {
  constructor(t) {
    super();
    this.blobReader = new $$tP0(new Blob([t], {
      type: tj
    }));
  }
  async init() {
    super.init();
    this.blobReader.init();
    this.size = this.blobReader.size;
  }
  async readUint8Array(t, e) {
    return this.blobReader.readUint8Array(t, e);
  }
}
export class $$tq31 extends $$tO34 {
  constructor(t) {
    super();
    this.encoding = t;
    this.blob = new Blob([], {
      type: tj
    });
  }
  async writeUint8Array(t) {
    super.writeUint8Array(t);
    this.blob = new Blob([this.blob, t.buffer], {
      type: tj
    });
  }
  getData() {
    let t = new FileReader();
    return new Promise((e, n) => {
      t.onload = t => e(t.target.result);
      t.onerror = () => n(t.error);
      t.readAsText(this.blob, this.encoding);
    });
  }
}
export class $$tN2 extends $$tW29 {
  constructor(t) {
    super();
    this.dataURI = t;
    let e = t.length;
    for (; "=" == t.charAt(e - 1);) e--;
    this.dataStart = t.indexOf(",") + 1;
    this.size = Math.floor((e - this.dataStart) * .75);
  }
  async readUint8Array(t, e) {
    let n = new Uint8Array(e);
    let i = 4 * Math.floor(t / 3);
    let a = atob(this.dataURI.substring(i + this.dataStart, 4 * Math.ceil((t + e) / 3) + this.dataStart));
    let r = t - 3 * Math.floor(i / 4);
    for (let t = r; t < r + e; t++) n[t - r] = a.charCodeAt(t);
    return n;
  }
}
export class $$tL3 extends $$tO34 {
  constructor(t) {
    super();
    this.data = "data:" + (t || "") + ";base64,";
    this.pending = [];
  }
  async writeUint8Array(t) {
    super.writeUint8Array(t);
    let e = 0;
    let n = this.pending;
    let i = this.pending.length;
    for (e = 0, this.pending = ""; e < 3 * Math.floor((i + t.length) / 3) - i; e++) n += String.fromCharCode(t[e]);
    for (; e < t.length; e++) this.pending += String.fromCharCode(t[e]);
    n.length > 2 ? this.data += btoa(n) : this.pending = n;
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}
export class $$tP0 extends $$tW29 {
  constructor(t) {
    super();
    this.blob = t;
    this.size = t.size;
  }
  async readUint8Array(t, e) {
    let n = new FileReader();
    return new Promise((i, a) => {
      n.onload = t => i(new Uint8Array(t.target.result));
      n.onerror = () => a(n.error);
      n.readAsArrayBuffer(this.blob.slice(t, t + e));
    });
  }
}
export class $$tV1 extends $$tO34 {
  constructor(t) {
    super();
    this.offset = 0;
    this.contentType = t;
    this.blob = new Blob([], {
      type: t
    });
  }
  async writeUint8Array(t) {
    super.writeUint8Array(t);
    this.blob = new Blob([this.blob, t.buffer], {
      type: this.contentType
    });
    this.offset = this.blob.size;
  }
  getData() {
    return this.blob;
  }
}
class tZ extends $$tW29 {
  constructor(t, e) {
    super();
    this.url = t;
    this.preventHeadRequest = e.preventHeadRequest;
    this.useRangeHeader = e.useRangeHeader;
    this.forceRangeRequests = e.forceRangeRequests;
    this.options = Object.assign({}, e);
    delete this.options.preventHeadRequest;
    delete this.options.useRangeHeader;
    delete this.options.forceRangeRequests;
    delete this.options.useXHR;
  }
  async init() {
    if (super.init(), t8(this.url) && !this.preventHeadRequest) {
      let t = await tG(tC, this.url, this.options);
      if (this.size = Number(t.headers.get(tT)), !this.forceRangeRequests && this.useRangeHeader && t.headers.get(tB) != tF) throw Error($$tI13);
      void 0 === this.size && (await tK(this, this.options));
    } else await tK(this, this.options);
  }
  async readUint8Array(t, e) {
    if (!this.useRangeHeader) {
      this.data || (await tK(this, this.options));
      return new Uint8Array(this.data.subarray(t, t + e));
    }
    {
      let n = await tG("GET", this.url, this.options, Object.assign({}, this.options.headers, {
        HEADER_RANGE: tF + "=" + t + "-" + (t + e - 1)
      }));
      if (206 != n.status) throw Error($$tI13);
      return new Uint8Array(await n.arrayBuffer());
    }
  }
}
async function tK(t, e) {
  let n = await tG("GET", t.url, e);
  t.data = new Uint8Array(await n.arrayBuffer());
  t.size || (t.size = t.data.length);
}
async function tG(t, e, n, i) {
  i = Object.assign({}, n.headers, i);
  let a = await fetch(e, Object.assign({}, n, {
    method: t,
    headers: i
  }));
  if (a.status < 400) return a;
  throw Error(tD + (a.statusText || a.status));
}
class tX extends $$tW29 {
  constructor(t, e) {
    super();
    this.url = t;
    this.preventHeadRequest = e.preventHeadRequest;
    this.useRangeHeader = e.useRangeHeader;
    this.forceRangeRequests = e.forceRangeRequests;
  }
  async init() {
    if (super.init(), t8(this.url) && !this.preventHeadRequest) return new Promise((t, e) => tY(tC, this.url, n => {
      this.size = Number(n.getResponseHeader(tT));
      this.useRangeHeader ? this.forceRangeRequests || n.getResponseHeader(tB) == tF ? t() : e(Error($$tI13)) : void 0 === this.size ? tQ(this, this.url).then(() => t()).catch(e) : t();
    }, e));
    await tQ(this, this.url);
  }
  async readUint8Array(t, e) {
    if (!this.useRangeHeader) {
      this.data || (await tQ(this, this.url));
      return new Uint8Array(this.data.subarray(t, t + e));
    }
    if (206 != (await new Promise((n, i) => tY("GET", this.url, t => n(new Uint8Array(t.response)), i, [["Range", tF + "=" + t + "-" + (t + e - 1)]]))).status) throw Error($$tI13);
  }
}
function tQ(t, e) {
  return new Promise((n, i) => tY("GET", e, e => {
    t.data = new Uint8Array(e.response);
    t.size || (t.size = t.data.length);
    n();
  }, i));
}
function tY(t, e, n, i, a = []) {
  let r = new XMLHttpRequest();
  r.addEventListener("load", () => {
    r.status < 400 ? n(r) : i(tD + (r.statusText || r.status));
  }, !1);
  r.addEventListener("error", i, !1);
  r.open(t, e);
  a.forEach(t => r.setRequestHeader(t[0], t[1]));
  r.responseType = "arraybuffer";
  r.send();
  return r;
}
export class $$tJ28 extends $$tW29 {
  constructor(t, e = {}) {
    super();
    this.url = t;
    e.useXHR ? this.reader = new tX(t, e) : this.reader = new tZ(t, e);
  }
  set size(t) { }
  get size() {
    return this.reader.size;
  }
  async init() {
    super.init();
    await this.reader.init();
  }
  async readUint8Array(t, e) {
    return this.reader.readUint8Array(t, e);
  }
}
export class $$t$27 extends $$tJ28 {
  constructor(t, e = {}) {
    e.useRangeHeader = !0;
    super(t, e);
  }
}
export class $$t032 extends $$tW29 {
  constructor(t) {
    super();
    this.array = t;
    this.size = t.length;
  }
  async readUint8Array(t, e) {
    return this.array.slice(t, t + e);
  }
}
export class $$t133 extends $$tO34 {
  constructor() {
    super();
    this.array = new Uint8Array(0);
  }
  async writeUint8Array(t) {
    super.writeUint8Array(t);
    let e = this.array;
    this.array = new Uint8Array(e.length + t.length);
    this.array.set(e);
    this.array.set(t, e.length);
  }
  getData() {
    return this.array;
  }
}
function t8(t) {
  if ("undefined" == typeof document) return /^https?:\/\//i.test(t);
  {
    let e = document.createElement("a");
    e.href = t;
    return "http:" == e.protocol || "https:" == e.protocol;
  }
}
let t2 = new Date(2107, 11, 31);
let t5 = new Date(1980, 0, 1);
let t3 = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xb6\xa7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5\u20A7\u0192\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\u2310\xac\xbd\xbc\xa1\xab\xbb\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xdf\u0393\u03C0\u03A3\u03C3\xb5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xb1\u2265\u2264\u2320\u2321\xf7\u2248\xb0\u2219\xb7\u221A\u207F\xb2\u25A0 ".split("");
let t9 = t => {
  let e = "";
  for (let n = 0; n < t.length; n++) e += t3[t[n]];
  return e;
};
let $$t44 = "Abort error";
async function t6(t, e, n, i, a, r, s) {
  let o = Math.max(r.chunkSize, 64);
  return l();
  async function l(r = 0, d = 0) {
    let c = s.signal;
    if (r < a) {
      t7(c, t);
      let f = await e.readUint8Array(r + i, Math.min(o, a - r));
      let u = f.length;
      t7(c, t);
      let h = await t.append(f);
      if (t7(c, t), d += await et(n, h), s.onprogress) try {
        s.onprogress(r + u, a);
      } catch (t) { }
      return l(r + o, d);
    }
    {
      let e = await t.flush();
      d += await et(n, e.data);
      return {
        signature: e.signature,
        length: d
      };
    }
  }
}
function t7(t, e) {
  if (t && t.aborted) {
    e.flush();
    return Error($$t44);
  }
}
async function et(t, e) {
  e.length && (await t.writeUint8Array(e));
  return e.length;
}
let ee = ["filename", "rawFilename", "directory", "encrypted", "compressedSize", "uncompressedSize", "lastModDate", "rawLastModDate", "comment", "rawComment", "signature", "extraField", "rawExtraField", "bitFlag", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "filenameUTF8", "commentUTF8", "offset", "zip64", "compressionMethod", "extraFieldNTFS", "lastAccessDate", "creationDate", "extraFieldExtendedTimestamp", "version", "versionMadeBy", "msDosCompatible", "internalFileAttribute", "externalFileAttribute"];
class en {
  constructor(t) {
    ee.forEach(e => this[e] = t[e]);
  }
}
let $$ei5 = "File format is not recognized";
let $$ea10 = "End of central directory not found";
let $$er11 = "End of Zip64 central directory not found";
let $$es9 = "End of Zip64 central directory locator not found";
let $$eo6 = "Central directory header not found";
let $$el23 = "Local file header not found";
let $$ed12 = "Zip64 extra field not found";
let $$ec8 = "File contains encrypted entry";
let $$ef25 = "Encryption method not supported";
let $$eu24 = "Compression method not supported";
let eh = "utf-8";
let ep = ["uncompressedSize", "compressedSize", "offset"];
export class $$em35 {
  constructor(t, e = {}) {
    Object.assign(this, {
      reader: t,
      options: e,
      config: U
    });
  }
  async getEntries(t = {}) {
    let e = this.reader;
    if (e.initialized || (await e.init()), e.size < 22) throw Error($$ei5);
    let n = await eb(e, 0x6054b50, e.size, 22, 1048560);
    if (!n) throw Error($$ea10);
    let i = eS(n);
    let a = eU(i, 12);
    let r = eU(i, 16);
    let s = eA(i, 8);
    let o = 0;
    if (0xffffffff == r || 65535 == s) {
      let t = eS(await eR(e, n.offset - 20, 20));
      if (0x7064b50 != eU(t, 0)) throw Error($$er11);
      r = eE(t, 8);
      let i = await eR(e, r, 56);
      let l = eS(i);
      let d = n.offset - 20 - 56;
      if (0x6064b50 != eU(l, 0) && r != d) {
        let t = r;
        o = (r = d) - t;
        l = eS(i = await eR(e, r, 56));
      }
      if (0x6064b50 != eU(l, 0)) throw Error($$es9);
      s = eE(l, 24);
      a = eU(t, 4);
      r -= eE(l, 40);
    }
    if (r < 0 || r >= e.size) throw Error($$ei5);
    let l = 0;
    let d = await eR(e, r, e.size - r);
    let c = eS(d);
    let f = n.offset - a;
    if (0x2014b50 != eU(c, l) && r != f) {
      let t = r;
      o = (r = f) - t;
      c = eS(d = await eR(e, r, e.size - r));
    }
    if (r < 0 || r >= e.size) throw Error($$ei5);
    let u = [];
    for (let n = 0; n < s; n++) {
      let i = new e_(e, this.config, this.options);
      if (0x2014b50 != eU(c, l)) throw Error($$eo6);
      ex(i, c, l + 6);
      let a = !!i.bitFlag.languageEncodingFlag;
      let r = l + 46;
      let f = r + i.filenameLength;
      let h = f + i.extraFieldLength;
      let p = eA(c, l + 4);
      let m = (0 & p) == 0;
      Object.assign(i, {
        versionMadeBy: p,
        msDosCompatible: m,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: eA(c, l + 32),
        directory: m && (16 & ez(c, l + 38)) == 16,
        offset: eU(c, l + 42) + o,
        internalFileAttribute: eU(c, l + 34),
        externalFileAttribute: eU(c, l + 38),
        rawFilename: d.subarray(r, f),
        filenameUTF8: a,
        commentUTF8: a,
        rawExtraField: d.subarray(f, h)
      });
      let _ = h + i.commentLength;
      i.rawComment = d.subarray(h, _);
      i.filename = ey(i.rawFilename, i.filenameUTF8 ? eh : ev(this, t, "filenameEncoding"));
      i.comment = ey(i.rawComment, i.commentUTF8 ? eh : ev(this, t, "commentEncoding"));
      !i.directory && i.filename.endsWith("/") && (i.directory = !0);
      ew(i, i, c, l + 6);
      let x = new en(i);
      if (x.getData = (t, e) => i.getData(t, x, e), u.push(x), l = _, t.onprogress) try {
        t.onprogress(n + 1, s, new en(i));
      } catch (t) { }
    }
    return u;
  }
  async close() { }
}
class e_ {
  constructor(t, e, n) {
    Object.assign(this, {
      reader: t,
      config: e,
      options: n
    });
  }
  async getData(t, e, n = {}) {
    let {
      reader,
      offset,
      extraFieldAES,
      compressionMethod,
      config,
      bitFlag,
      signature,
      rawLastModDate,
      compressedSize
    } = this;
    let u = this.localDirectory = {};
    reader.initialized || (await reader.init());
    let h = await eR(reader, offset, 30);
    let p = eS(h);
    let m = ev(this, n, "password");
    if (m = m && m.length && m, extraFieldAES && 99 != extraFieldAES.originalCompressionMethod || 0 != compressionMethod && 8 != compressionMethod) throw Error($$eu24);
    if (0x4034b50 != eU(p, 0)) throw Error($$el23);
    ex(u, p, 4);
    h = await eR(reader, offset, 30 + u.filenameLength + u.extraFieldLength);
    u.rawExtraField = h.subarray(30 + u.filenameLength);
    ew(this, u, p, 4);
    e.lastAccessDate = u.lastAccessDate;
    e.creationDate = u.creationDate;
    let _ = this.encrypted && u.encrypted;
    let x = _ && !extraFieldAES;
    if (_) {
      if (x || void 0 !== extraFieldAES.strength) {
        if (!m) throw Error($$ec8);
      } else throw Error($$ef25);
    }
    let w = await tA(config.Inflate, {
      codecType: tp,
      password: m,
      zipCrypto: x,
      encryptionStrength: extraFieldAES && extraFieldAES.strength,
      signed: ev(this, n, "checkSignature"),
      passwordVerification: x && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 255 : signature >>> 24 & 255),
      signature,
      compressed: 0 != compressionMethod,
      encrypted: _,
      useWebWorkers: ev(this, n, "useWebWorkers")
    }, config);
    t.initialized || (await t.init());
    let g = ev(this, n, "signal");
    let b = offset + 30 + u.filenameLength + u.extraFieldLength;
    await t6(w, reader, t, b, compressedSize, config, {
      onprogress: n.onprogress,
      signal: g
    });
    return t.getData();
  }
}
function ex(t, e, n) {
  let i = t.rawBitFlag = eA(e, n + 2);
  let a = eU(e, n + 6);
  Object.assign(t, {
    encrypted: (1 & i) == 1,
    version: eA(e, n),
    bitFlag: {
      level: (6 & i) >> 1,
      dataDescriptor: (8 & i) == 8,
      languageEncodingFlag: (2048 & i) == 2048
    },
    rawLastModDate: a,
    lastModDate: function(t) {
      let e = (0xffff0000 & t) >> 16;
      let n = 65535 & t;
      try {
        return new Date(1980 + ((65024 & e) >> 9), ((480 & e) >> 5) - 1, 31 & e, (63488 & n) >> 11, (2016 & n) >> 5, (31 & n) * 2, 0);
      } catch (t) { }
    }(a),
    filenameLength: eA(e, n + 22),
    extraFieldLength: eA(e, n + 24)
  });
}
function ew(t, e, n, i) {
  let a = e.rawExtraField;
  let r = e.extraField = new Map();
  let s = eS(new Uint8Array(a));
  let o = 0;
  try {
    for (; o < a.length;) {
      let t = eA(s, o);
      let e = eA(s, o + 2);
      r.set(t, {
        type: t,
        data: a.slice(o + 4, o + 4 + e)
      });
      o += 4 + e;
    }
  } catch (t) { }
  let l = eA(n, i + 4);
  e.signature = eU(n, i + 10);
  e.uncompressedSize = eU(n, i + 18);
  e.compressedSize = eU(n, i + 14);
  let d = r.get(1);
  d && (function(t, e) {
    e.zip64 = !0;
    let n = eS(t.data);
    t.values = [];
    for (let e = 0; e < Math.floor(t.data.length / 8); e++) t.values.push(eE(n, 0 + 8 * e));
    let i = ep.filter(t => 0xffffffff == e[t]);
    for (let e = 0; e < i.length; e++) t[i[e]] = t.values[e];
    ep.forEach(n => {
      if (0xffffffff == e[n]) {
        if (void 0 !== t[n]) e[n] = t[n]; else throw Error($$ed12);
      }
    });
  }(d, e), e.extraFieldZip64 = d);
  let c = r.get(28789);
  c && (eg(c, "filename", "rawFilename", e, t), e.extraFieldUnicodePath = c);
  let f = r.get(25461);
  f && (eg(f, "comment", "rawComment", e, t), e.extraFieldUnicodeComment = f);
  let u = r.get(39169);
  u ? (function(t, e, n) {
    let i = eS(t.data);
    t.vendorVersion = ez(i, 0);
    t.vendorId = ez(i, 2);
    let a = ez(i, 4);
    t.strength = a;
    t.originalCompressionMethod = n;
    e.compressionMethod = t.compressionMethod = eA(i, 5);
  }(u, e, l), e.extraFieldAES = u) : e.compressionMethod = l;
  let h = r.get(10);
  h && (function(t, e) {
    let n;
    let i = eS(t.data);
    let a = 4;
    try {
      for (; a < t.data.length && !n;) {
        let e = eA(i, a);
        let r = eA(i, a + 2);
        1 == e && (n = t.data.slice(a + 4, a + 4 + r));
        a += 4 + r;
      }
    } catch (t) { }
    try {
      if (n && 24 == n.length) {
        let i = eS(n);
        let a = i.getBigUint64(0, !0);
        let r = i.getBigUint64(8, !0);
        let s = i.getBigUint64(16, !0);
        Object.assign(t, {
          rawLastModDate: a,
          rawLastAccessDate: r,
          rawCreationDate: s
        });
        let o = ek(a);
        let l = ek(r);
        let d = ek(s);
        let c = {
          lastModDate: o,
          lastAccessDate: l,
          creationDate: d
        };
        Object.assign(t, c);
        Object.assign(e, c);
      }
    } catch (t) { }
  }(h, e), e.extraFieldNTFS = h);
  let p = r.get(21589);
  p && (function(t, e) {
    let n = eS(t.data);
    let i = ez(n, 0);
    let a = [];
    let r = [];
    (1 & i) == 1 && (a.push("lastModDate"), r.push("rawLastModDate"));
    (2 & i) == 2 && (a.push("lastAccessDate"), r.push("rawLastAccessDate"));
    (4 & i) == 4 && (a.push("creationDate"), r.push("rawCreationDate"));
    let s = 1;
    a.forEach((i, a) => {
      if (t.data.length >= s + 4) {
        let o = eU(n, s);
        e[i] = t[i] = new Date(1e3 * o);
        t[r[a]] = o;
      }
      s += 4;
    });
  }(p, e), e.extraFieldExtendedTimestamp = p);
}
function eg(t, e, n, i, a) {
  let r = eS(t.data);
  t.version = ez(r, 0);
  t.signature = eU(r, 1);
  let s = new j();
  s.append(a[n]);
  let o = eS(new Uint8Array(4));
  o.setUint32(0, s.get(), !0);
  t[e] = new TextDecoder().decode(t.data.subarray(5));
  t.valid = !a.bitFlag.languageEncodingFlag && t.signature == eU(o, 0);
  t.valid && (i[e] = t[e], i[e + "UTF8"] = !0);
}
async function eb(t, e, n, i, a) {
  let r = new Uint8Array(4);
  !function(t, e, n) {
    t.setUint32(0, n, !0);
  }(eS(r), 0, e);
  let s = i + a;
  return (await o(i)) || (await o(Math.min(s, n)));
  async function o(e) {
    let a = n - e;
    let s = await eR(t, a, e);
    for (let t = s.length - i; t >= 0; t--) if (s[t] == r[0] && s[t + 1] == r[1] && s[t + 2] == r[2] && s[t + 3] == r[3]) return {
      offset: a + t,
      buffer: s.slice(t, t + i).buffer
    };
  }
}
function ev(t, e, n) {
  return void 0 === e[n] ? t.options[n] : e[n];
}
function ey(t, e) {
  return e && "cp437" != e.trim().toLowerCase() ? new TextDecoder(e).decode(t) : t9(t);
}
function ek(t) {
  return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)));
}
function ez(t, e) {
  return t.getUint8(e);
}
function eA(t, e) {
  return t.getUint16(e, !0);
}
function eU(t, e) {
  return t.getUint32(e, !0);
}
function eE(t, e) {
  return Number(t.getBigUint64(e, !0));
}
function eS(t) {
  return new DataView(t.buffer);
}
function eR(t, e, n) {
  return t.readUint8Array(e, n);
}
let $$eD7 = "File already exists";
let $$eI14 = "Zip file comment exceeds 64KB";
let $$ej16 = "File entry comment exceeds 64KB";
let $$eT17 = "File entry name exceeds 64KB";
let $$eB22 = "Version exceeds 65535";
let $$eC15 = "The strength must equal 1, 2, or 3";
let $$eF19 = "Extra field type exceeds 65535";
let $$eM18 = "Extra field data exceeds 64KB";
let $$eW26 = "Zip64 is not supported";
let eO = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
let eH = 0;
export class $$eq36 {
  constructor(t, e = {}) {
    Object.assign(this, {
      writer: t,
      options: e,
      config: U,
      files: new Map(),
      offset: t.size,
      pendingCompressedSize: 0,
      pendingEntries: []
    });
  }
  async add(t = "", e, n = {}) {
    let i = this;
    if (!(eH < i.config.maxWorkers)) return new Promise((a, r) => i.pendingEntries.push({
      name: t,
      reader: e,
      options: n,
      resolve: a,
      reject: r
    }));
    eH++;
    try {
      return await eN(i, t, e, n);
    } finally {
      eH--;
      let t = i.pendingEntries.shift();
      t && i.add(t.name, t.reader, t.options).then(t.resolve).catch(t.reject);
    }
  }
  async close(t = new Uint8Array(0), e = {}) {
    await eV(this, t, e);
    return this.writer.getData();
  }
}
async function eN(t, e, n, i) {
  var a;
  if (e = e.trim(), i.directory && !e.endsWith("/") ? e += "/" : i.directory = e.endsWith("/"), t.files.has(e)) throw Error($$eD7);
  let r = new TextEncoder().encode(e);
  if (r.length > 65535) throw Error($$eT17);
  let s = i.comment || "";
  let o = new TextEncoder().encode(s);
  if (o.length > 65535) throw Error($$ej16);
  let l = t.options.version || i.version || 0;
  if (l > 65535) throw Error($$eB22);
  let d = t.options.versionMadeBy || i.versionMadeBy || 20;
  if (d > 65535) throw Error($$eB22);
  let c = eX(t, i, "lastModDate") || new Date();
  let f = eX(t, i, "lastAccessDate");
  let u = eX(t, i, "creationDate");
  let h = eX(t, i, "password");
  let p = eX(t, i, "encryptionStrength") || 3;
  let m = eX(t, i, "zipCrypto");
  if (void 0 !== h && void 0 !== p && (p < 1 || p > 3)) throw Error($$eC15);
  let _ = new Uint8Array(0);
  let x = i.extraField;
  if (x) {
    let t = 0;
    let e = 0;
    x.forEach(e => t += 4 + e.length);
    _ = new Uint8Array(t);
    x.forEach((t, n) => {
      if (n > 65535) throw Error($$eF19);
      if (t.length > 65535) throw Error($$eM18);
      e0(_, new Uint16Array([n]), e);
      e0(_, new Uint16Array([t.length]), e + 2);
      e0(_, t, e + 4);
      e += 4 + t.length;
    });
  }
  let w = eX(t, i, "extendedTimestamp");
  void 0 === w && (w = !0);
  let g = 0;
  let b = eX(t, i, "keepOrder");
  void 0 === b && (b = !0);
  let v = 0;
  let y = eX(t, i, "msDosCompatible");
  void 0 === y && (y = !0);
  let k = eX(t, i, "internalFileAttribute") || 0;
  let z = eX(t, i, "externalFileAttribute") || 0;
  n && (n.initialized || (await n.init()), g = (a = v = n.size) + 5 * (Math.floor(a / 16383) + 1));
  let A = i.zip64 || t.options.zip64 || !1;
  if (t.offset + t.pendingCompressedSize >= 0xffffffff || v >= 0xffffffff || g >= 0xffffffff) {
    if (!1 !== i.zip64 && !1 !== t.options.zip64 && b) A = !0; else throw Error($$eW26);
  }
  t.pendingCompressedSize += g;
  await Promise.resolve();
  let U = eX(t, i, "level");
  let E = eX(t, i, "useWebWorkers");
  let S = eX(t, i, "bufferedWrite");
  let R = eX(t, i, "dataDescriptor");
  let D = eX(t, i, "signal");
  void 0 === R && (R = !0);
  let I = await eL(t, e, n, Object.assign({}, i, {
    rawFilename: r,
    rawComment: o,
    version: l,
    versionMadeBy: d,
    lastModDate: c,
    lastAccessDate: f,
    creationDate: u,
    rawExtraField: _,
    zip64: A,
    password: h,
    level: U,
    useWebWorkers: E,
    encryptionStrength: p,
    extendedTimestamp: w,
    zipCrypto: m,
    bufferedWrite: S,
    keepOrder: b,
    dataDescriptor: R,
    signal: D,
    msDosCompatible: y,
    internalFileAttribute: k,
    externalFileAttribute: z
  }));
  g && (t.pendingCompressedSize -= g);
  Object.assign(I, {
    name: e,
    comment: s,
    extraField: x
  });
  return new en(I);
}
async function eL(t, e, n, i) {
  let a;
  let r;
  let s;
  let o = t.files;
  let l = t.writer;
  let d = Array.from(o.values()).pop();
  let c = {};
  o.set(e, c);
  try {
    let f;
    let u;
    let h;
    if (i.keepOrder && (f = d && d.lock), c.lock = h = new Promise(t => s = t), i.bufferedWrite || t.lockWrite || !i.dataDescriptor ? ((u = new $$tV1()).init(), a = !0) : (t.lockWrite = new Promise(t => r = t), l.initialized || (await l.init()), u = l), (c = await eP(n, u, t.config, i)).lock = h, o.set(e, c), c.filename = e, a) {
      let e;
      let n = 0;
      let a = u.getData();
      await Promise.all([t.lockWrite, f]);
      do (e = Array.from(o.values()).find(t => t.writingBufferedData)) && (await e.lock); while (e && e.lock);
      if (c.writingBufferedData = !0, !i.dataDescriptor) {
        let t = await eZ(a, 0, 26);
        let e = new DataView(t);
        (!c.encrypted || i.zipCrypto) && eJ(e, 14, c.signature);
        c.zip64 ? (eJ(e, 18, 0xffffffff), eJ(e, 22, 0xffffffff)) : (eJ(e, 18, c.compressedSize), eJ(e, 22, c.uncompressedSize));
        await l.writeUint8Array(new Uint8Array(t));
        n = 26;
      }
      await eK(l, a, n);
      delete c.writingBufferedData;
    }
    if (c.offset = t.offset, c.zip64) {
      let t = e1(c.rawExtraFieldZip64);
      e$(t, 20, BigInt(c.offset));
    } else if (c.offset >= 0xffffffff) throw Error($$eW26);
    t.offset += c.length;
    return c;
  } catch (n) {
    (a && c.writingBufferedData || !a && c.dataWritten) && (n.corruptedEntry = t.hasCorruptedEntries = !0, c.uncompressedSize && (t.offset += c.uncompressedSize));
    o.$$delete(e);
    return n;
  } finally {
    s();
    r && r();
  }
}
async function eP(t, e, n, i) {
  let a;
  let r;
  let s;
  let o;
  let l;
  let d;
  let {
    rawFilename,
    lastAccessDate,
    creationDate,
    password,
    level,
    zip64,
    zipCrypto,
    dataDescriptor,
    directory,
    version,
    versionMadeBy,
    rawComment,
    rawExtraField,
    useWebWorkers,
    onprogress,
    signal,
    encryptionStrength,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttribute,
    externalFileAttribute
  } = i;
  let I = !!(password && password.length);
  let j = 0 !== level && !directory;
  if (I && !zipCrypto) {
    let t = e1(a = new Uint8Array(eO.length + 2));
    eY(t, 0, 39169);
    e0(a, eO, 2);
    eQ(t, 8, encryptionStrength);
  } else a = new Uint8Array(0);
  if (extendedTimestamp) {
    let t = e1(s = new Uint8Array(9 + (lastAccessDate ? 4 : 0) + (creationDate ? 4 : 0)));
    eY(t, 0, 21589);
    eY(t, 2, s.length - 4);
    eQ(t, 4, 1 + (lastAccessDate ? 2 : 0) + (creationDate ? 4 : 0));
    eJ(t, 5, Math.floor(i.lastModDate.getTime() / 1e3));
    lastAccessDate && eJ(t, 9, Math.floor(lastAccessDate.getTime() / 1e3));
    creationDate && eJ(t, 13, Math.floor(creationDate.getTime() / 1e3));
    try {
      r = new Uint8Array(36);
      let t = e1(r);
      let e = eG(i.lastModDate);
      eY(t, 0, 10);
      eY(t, 2, 32);
      eY(t, 8, 1);
      eY(t, 10, 24);
      e$(t, 12, e);
      e$(t, 20, eG(lastAccessDate) || e);
      e$(t, 28, eG(creationDate) || e);
    } catch (t) {
      r = new Uint8Array(0);
    }
  } else r = s = new Uint8Array(0);
  let T = {
    version: version || 20,
    versionMadeBy,
    zip64,
    directory: !!directory,
    filenameUTF8: !0,
    rawFilename,
    commentUTF8: !0,
    rawComment,
    rawExtraFieldZip64: new Uint8Array(zip64 ? 28 : 0),
    rawExtraFieldExtendedTimestamp: s,
    rawExtraFieldNTFS: r,
    rawExtraFieldAES: a,
    rawExtraField,
    extendedTimestamp,
    msDosCompatible,
    internalFileAttribute,
    externalFileAttribute
  };
  let B = T.uncompressedSize = 0;
  let C = 2048;
  dataDescriptor && (C |= 8);
  let F = 0;
  j && (F = 8);
  zip64 && (T.version = T.version > 45 ? T.version : 45);
  I && (C |= 1, !zipCrypto && (T.version = T.version > 51 ? T.version : 51, F = 99, j && (T.rawExtraFieldAES[9] = 8)));
  T.compressionMethod = F;
  let M = T.headerArray = new Uint8Array(26);
  let W = e1(M);
  eY(W, 0, T.version);
  eY(W, 2, C);
  eY(W, 4, F);
  let O = new Uint32Array(1);
  let H = e1(O);
  eY(H, 0, ((o = i.lastModDate < t5 ? t5 : i.lastModDate > t2 ? t2 : i.lastModDate).getHours() << 6 | o.getMinutes()) << 5 | o.getSeconds() / 2);
  eY(H, 2, (o.getFullYear() - 1980 << 4 | o.getMonth() + 1) << 5 | o.getDate());
  let q = O[0];
  eJ(W, 6, q);
  eY(W, 22, rawFilename.length);
  let N = a.length + s.length + r.length + T.rawExtraField.length;
  eY(W, 24, N);
  let L = new Uint8Array(30 + rawFilename.length + N);
  eJ(e1(L), 0, 0x4034b50);
  e0(L, M, 4);
  e0(L, rawFilename, 30);
  e0(L, a, 30 + rawFilename.length);
  e0(L, s, 30 + rawFilename.length + a.length);
  e0(L, r, 30 + rawFilename.length + a.length + s.length);
  e0(L, T.rawExtraField, 30 + rawFilename.length + a.length + s.length + r.length);
  let P = 0;
  if (t) {
    B = T.uncompressedSize = t.size;
    let i = await tA(n.Deflate, {
      codecType: th,
      level,
      password,
      encryptionStrength,
      zipCrypto: I && zipCrypto,
      passwordVerification: I && zipCrypto && q >> 8 & 255,
      signed: !0,
      compressed: j,
      encrypted: I,
      useWebWorkers
    }, n);
    await e.writeUint8Array(L);
    T.dataWritten = !0;
    P = (l = await t6(i, t, e, 0, B, n, {
      onprogress,
      signal
    })).length;
  } else {
    await e.writeUint8Array(L);
    T.dataWritten = !0;
  }
  let V = new Uint8Array(0);
  if (dataDescriptor && eJ(d = e1(V = new Uint8Array(zip64 ? 24 : 16)), 0, 0x8074b50), t) {
    let t = l.signature;
    if ((!I || zipCrypto) && void 0 !== t && (eJ(W, 10, t), T.signature = t, dataDescriptor && eJ(d, 4, t)), zip64) {
      let t = e1(T.rawExtraFieldZip64);
      eY(t, 0, 1);
      eY(t, 2, 24);
      eJ(W, 14, 0xffffffff);
      e$(t, 12, BigInt(P));
      eJ(W, 18, 0xffffffff);
      e$(t, 4, BigInt(B));
      dataDescriptor && (e$(d, 8, BigInt(P)), e$(d, 16, BigInt(B)));
    } else {
      eJ(W, 14, P);
      eJ(W, 18, B);
      dataDescriptor && (eJ(d, 8, P), eJ(d, 12, B));
    }
  }
  dataDescriptor && (await e.writeUint8Array(V));
  let Z = L.length + P + V.length;
  Object.assign(T, {
    compressedSize: P,
    lastModDate: o,
    rawLastModDate: q,
    creationDate,
    lastAccessDate,
    encrypted: I,
    length: Z
  });
  return T;
}
async function eV(t, e, n) {
  let i = t.writer;
  let a = t.files;
  let r = 0;
  let s = 0;
  let o = t.offset;
  let l = a.size;
  for (let [, t] of a) s += 46 + t.rawFilename.length + t.rawComment.length + t.rawExtraFieldZip64.length + t.rawExtraFieldAES.length + t.rawExtraFieldExtendedTimestamp.length + t.rawExtraFieldNTFS.length + t.rawExtraField.length;
  let d = n.zip64 || t.options.zip64 || !1;
  if (o >= 0xffffffff || s >= 0xffffffff || l >= 65535) {
    if (!1 === n.zip64 || !1 === t.options.zip64) throw Error($$eW26);
    d = !0;
  }
  let c = new Uint8Array(s + (d ? 98 : 22));
  let f = e1(c);
  if (e && e.length) {
    if (e.length <= 65535) eY(f, r + 20, e.length); else throw Error($$eI14);
  }
  for (let [t, e] of Array.from(a.values()).entries()) {
    let i;
    let s;
    let {
      rawFilename,
      rawExtraFieldZip64,
      rawExtraFieldAES,
      rawExtraField,
      rawComment,
      versionMadeBy,
      headerArray,
      directory,
      zip64,
      msDosCompatible,
      internalFileAttribute,
      externalFileAttribute
    } = e;
    if (e.extendedTimestamp) {
      s = e.rawExtraFieldNTFS;
      let t = e1(i = new Uint8Array(9));
      eY(t, 0, 21589);
      eY(t, 2, i.length - 4);
      eQ(t, 4, 1);
      eJ(t, 5, Math.floor(e.lastModDate.getTime() / 1e3));
    } else s = i = new Uint8Array(0);
    let v = rawExtraFieldZip64.length + rawExtraFieldAES.length + i.length + s.length + rawExtraField.length;
    if (eJ(f, r, 0x2014b50), eY(f, r + 4, versionMadeBy), e0(c, headerArray, r + 6), eY(f, r + 30, v), eY(f, r + 32, rawComment.length), eJ(f, r + 34, internalFileAttribute), externalFileAttribute ? eJ(f, r + 38, externalFileAttribute) : directory && msDosCompatible && eQ(f, r + 38, 16), zip64 ? eJ(f, r + 42, 0xffffffff) : eJ(f, r + 42, e.offset), e0(c, rawFilename, r + 46), e0(c, rawExtraFieldZip64, r + 46 + rawFilename.length), e0(c, rawExtraFieldAES, r + 46 + rawFilename.length + rawExtraFieldZip64.length), e0(c, i, r + 46 + rawFilename.length + rawExtraFieldZip64.length + rawExtraFieldAES.length), e0(c, s, r + 46 + rawFilename.length + rawExtraFieldZip64.length + rawExtraFieldAES.length + i.length), e0(c, rawExtraField, r + 46 + rawFilename.length + rawExtraFieldZip64.length + rawExtraFieldAES.length + i.length + s.length), e0(c, rawComment, r + 46 + rawFilename.length + v), r += 46 + rawFilename.length + v + rawComment.length, n.onprogress) try {
      n.onprogress(t + 1, a.size, new en(e));
    } catch (t) { }
  }
  d && (eJ(f, r, 0x6064b50), e$(f, r + 4, BigInt(44)), eY(f, r + 12, 45), eY(f, r + 14, 45), e$(f, r + 24, BigInt(l)), e$(f, r + 32, BigInt(l)), e$(f, r + 40, BigInt(s)), e$(f, r + 48, BigInt(o)), eJ(f, r + 56, 0x7064b50), e$(f, r + 64, BigInt(o) + BigInt(s)), eJ(f, r + 72, 1), l = 65535, o = 0xffffffff, s = 0xffffffff, r += 76);
  eJ(f, r, 0x6054b50);
  eY(f, r + 8, l);
  eY(f, r + 10, l);
  eJ(f, r + 12, s);
  eJ(f, r + 16, o);
  await i.writeUint8Array(c);
  e && e.length && (await i.writeUint8Array(e));
}
function eZ(t, e, n) {
  let i = new FileReader();
  return new Promise((a, r) => {
    i.onload = t => a(t.target.result);
    i.onerror = () => r(i.error);
    i.readAsArrayBuffer(e || n ? t.slice(e, n) : t);
  });
}
async function eK(t, e, n = 0) {
  async function i() {
    if (n < e.size) {
      let a = await eZ(e, n, n + 0x20000000);
      await t.writeUint8Array(new Uint8Array(a));
      n += 0x20000000;
      await i();
    }
  }
  await i();
}
function eG(t) {
  if (t) return (BigInt(t.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
}
function eX(t, e, n) {
  return void 0 === e[n] ? t.options[n] : e[n];
}
function eQ(t, e, n) {
  t.setUint8(e, n);
}
function eY(t, e, n) {
  t.setUint16(e, n, !0);
}
function eJ(t, e, n) {
  t.setUint32(e, n, !0);
}
function e$(t, e, n) {
  t.setBigUint64(e, n, !0);
}
function e0(t, e, n) {
  t.set(e, n);
}
function e1(t) {
  return new DataView(t.buffer);
}
class e8 {
  constructor(t, e, n, i) {
    if (t.root && i && i.getChildByName(e)) throw Error("Entry filename already exists");
    n || (n = {});
    Object.assign(this, {
      fs: t,
      name: e,
      data: n.data,
      id: t.entries.length,
      parent: i,
      children: [],
      uncompressedSize: 0
    });
    t.entries.push(this);
    i && this.parent.children.push(this);
  }
  moveTo(t) {
    this.fs.move(this, t);
  }
  getFullname() {
    return this.getRelativeName();
  }
  getRelativeName(t = this.fs.root) {
    let e = this.name;
    let n = this.parent;
    for (; n && n != t;) {
      e = (n.name ? n.name + "/" : "") + e;
      n = n.parent;
    }
    return e;
  }
  isDescendantOf(t) {
    let e = this.parent;
    for (; e && e.id != t.id;) e = e.parent;
    return !!e;
  }
}
class e2 extends e8 {
  constructor(t, e, n, i) {
    super(t, e, n, i);
    this.Reader = n.Reader;
    this.Writer = n.Writer;
    n.getData && (this.getData = n.getData);
  }
  async getData(t, e = {}) {
    return !t || t.constructor == this.Writer && this.data ? this.data : (this.reader = new this.Reader(this.data, e), await this.reader.init(), t.initialized || (await t.init()), this.uncompressedSize = this.reader.size, ne(this.reader, t));
  }
  getText(t, e) {
    return this.getData(new $$tq31(t), e);
  }
  getBlob(t, e) {
    return this.getData(new $$tV1(t), e);
  }
  getData64URI(t, e) {
    return this.getData(new $$tL3(t), e);
  }
  getUint8Array(t) {
    return this.getData(new $$t133(), t);
  }
  replaceBlob(t) {
    Object.assign(this, {
      data: t,
      Reader: $$tP0,
      Writer: $$tV1,
      reader: null
    });
  }
  replaceText(t) {
    Object.assign(this, {
      data: t,
      Reader: $$tH30,
      Writer: $$tq31,
      reader: null
    });
  }
  replaceData64URI(t) {
    Object.assign(this, {
      data: t,
      Reader: $$tN2,
      Writer: $$tL3,
      reader: null
    });
  }
  replaceUint8Array(t) {
    Object.assign(this, {
      data: t,
      Reader: $$t032,
      Writer: $$t133,
      reader: null
    });
  }
}
class e5 extends e8 {
  constructor(t, e, n, i) {
    super(t, e, n, i);
    this.directory = !0;
  }
  addDirectory(t) {
    return nn(this, t, null, !0);
  }
  addText(t, e) {
    return nn(this, t, {
      data: e,
      Reader: $$tH30,
      Writer: $$tq31
    });
  }
  addBlob(t, e) {
    return nn(this, t, {
      data: e,
      Reader: $$tP0,
      Writer: $$tV1
    });
  }
  addData64URI(t, e) {
    return nn(this, t, {
      data: e,
      Reader: $$tN2,
      Writer: $$tL3
    });
  }
  addUint8Array(t, e) {
    return nn(this, t, {
      data: e,
      Reader: $$t032,
      Writer: $$t133
    });
  }
  addHttpContent(t, e, n = {}) {
    return nn(this, t, {
      data: e,
      Reader: class extends $$tJ28 {
        constructor(t) {
          super(t, n);
        }
      }
    });
  }
  async addFileSystemEntry(t) {
    return e7(this, t);
  }
  async addData(t, e) {
    return nn(this, t, e);
  }
  async importBlob(t, e = {}) {
    await this.importZip(new $$tP0(t), e);
  }
  async importData64URI(t, e = {}) {
    await this.importZip(new $$tN2(t), e);
  }
  async importUint8Array(t, e = {}) {
    await this.importZip(new $$t032(t), e);
  }
  async importHttpContent(t, e = {}) {
    await this.importZip(new $$tJ28(t, e), e);
  }
  async exportBlob(t = {}) {
    return this.exportZip(new $$tV1("application/zip"), t);
  }
  async exportData64URI(t = {}) {
    return this.exportZip(new $$tL3("application/zip"), t);
  }
  async exportUint8Array(t = {}) {
    return this.exportZip(new $$t133(), t);
  }
  async importZip(t, e) {
    t.initialized || (await t.init());
    let n = new $$em35(t, e);
    (await n.getEntries()).forEach(t => {
      var n;
      let i = this;
      let a = t.filename.split("/");
      let r = a.pop();
      a.forEach(t => i = i.getChildByName(t) || new e5(this.fs, t, null, i));
      t.directory || nn(i, r, {
        data: t,
        Reader: (n = Object.assign({}, e), class extends $$tW29 {
          constructor(t, e = {}) {
            super();
            this.entry = t;
            this.options = e;
          }
          async init() {
            this.size = this.entry.uncompressedSize;
            let t = await this.entry.getData(new $$tV1(), Object.assign({}, this.options, n));
            this.data = t;
            this.blobReader = new $$tP0(t);
          }
          async readUint8Array(t, e) {
            return this.blobReader.readUint8Array(t, e);
          }
        })
      });
    });
  }
  async exportZip(t, e) {
    let n;
    await e9(this);
    await t.init();
    let i = new $$eq36(t, e);
    await e6(i, this, (n = 0, [this].forEach(function t(e) {
      n += e.uncompressedSize;
      e.children && e.children.forEach(t);
    }), n), e);
    await i.close();
    return t.getData();
  }
  getChildByName(t) {
    let e = this.children;
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if (i.name == t) return i;
    }
  }
}
export let $$e338 = {
  FS: class {
    constructor() {
      nt(this);
    }
    get children() {
      return this.root.children;
    }
    remove(t) {
      e4(t);
      this.entries[t.id] = null;
    }
    move(t, e) {
      if (t == this.root) throw Error("Root directory cannot be moved");
      if (e.directory) {
        if (e.isDescendantOf(t)) throw Error("Entry is a ancestor of target entry");
        if (t != e) {
          if (e.getChildByName(t.name)) throw Error("Entry filename already exists");
          e4(t);
          t.parent = e;
          e.children.push(t);
        }
      } else throw Error("Target entry is not a directory");
    }
    find(t) {
      let e = t.split("/");
      let n = this.root;
      for (let t = 0; n && t < e.length; t++) n = n.getChildByName(e[t]);
      return n;
    }
    getById(t) {
      return this.entries[t];
    }
    getChildByName(t) {
      return this.root.getChildByName(t);
    }
    addDirectory(t) {
      return this.root.addDirectory(t);
    }
    addText(t, e) {
      return this.root.addText(t, e);
    }
    addBlob(t, e) {
      return this.root.addBlob(t, e);
    }
    addData64URI(t, e) {
      return this.root.addData64URI(t, e);
    }
    addHttpContent(t, e, n) {
      return this.root.addHttpContent(t, e, n);
    }
    async addFileSystemEntry(t) {
      return this.root.addFileSystemEntry(t);
    }
    async addData(t, e) {
      return this.root.addData(t, e);
    }
    async importBlob(t, e) {
      nt(this);
      await this.root.importBlob(t, e);
    }
    async importData64URI(t, e) {
      nt(this);
      await this.root.importData64URI(t, e);
    }
    async importHttpContent(t, e) {
      nt(this);
      await this.root.importHttpContent(t, e);
    }
    async exportBlob(t) {
      return this.root.exportBlob(t);
    }
    async exportData64URI(t) {
      return this.root.exportData64URI(t);
    }
  },
  ZipDirectoryEntry: e5,
  ZipFileEntry: e2
};
async function e9(t) {
  if (t.children.length) for (let e of t.children) e.directory ? await e9(e) : (e.reader = new e.Reader(e.data), await e.reader.init(), e.uncompressedSize = e.reader.size);
}
function e4(t) {
  let e = t.parent.children;
  e.forEach((n, i) => {
    n.id == t.id && e.splice(i, 1);
  });
}
async function e6(t, e, n, i) {
  let a = new Map();
  async function r(t, s) {
    async function o() {
      if (i.bufferedWrite) await Promise.all(s.children.map(l)); else for (let t of s.children) await l(t);
    }
    async function l(s) {
      let o = i.relativePath ? s.getRelativeName(e) : s.getFullname();
      await t.add(o, s.reader, Object.assign({
        directory: s.directory
      }, Object.assign({}, i, {
        onprogress: t => {
          if (i.onprogress) {
            a.set(o, t);
            try {
              i.onprogress(Array.from(a.values()).reduce((t, e) => t + e), n);
            } catch (t) { }
          }
        }
      })));
      await r(t, s);
    }
    await o();
  }
  await r(t, e);
}
async function e7(t, e) {
  if (!e.isDirectory) return new Promise((n, i) => e.file(i => n(t.addBlob(e.name, i)), i));
  {
    let i = t.addDirectory(e.name);
    await n(i, e);
    return i;
  }
  async function n(t, e) {
    for (let i of await new Promise((t, n) => {
      let i = [];
      e.isDirectory && function e(a) {
        a.readEntries(n => {
          n.length ? (i = i.concat(n), e(a)) : t(i);
        }, n);
      }(e.createReader());
      e.isFile && t(i);
    })) i.isDirectory ? await n(t.addDirectory(i.name), i) : await new Promise((e, n) => {
      i.file(n => {
        let a = t.addBlob(i.name, n);
        a.uncompressedSize = n.size;
        e(a);
      }, n);
    });
  }
}
function nt(t) {
  t.entries = [];
  t.root = new e5(t);
}
async function ne(t, e) {
  return n();
  async function n(i = 0) {
    let a = 524288 * i;
    if (!(a < t.size)) return e.getData();
    {
      let r = await t.readUint8Array(a, Math.min(524288, t.size - a));
      await e.writeUint8Array(r);
      return n(i + 1);
    }
  }
}
function nn(t, e, n, i) {
  if (t.directory) return i ? new e5(t.fs, e, n, t) : new e2(t.fs, e, n, t);
  throw Error("Parent entry is not a directory");
}
(() => {
  if ("function" == typeof URL.createObjectURL) {
    let t = URL.createObjectURL(new Blob(['\n			\n\nconst t=[];for(let e=0;e<256;e++){let n=e;for(let t=0;t<8;t++)1&n?n=n>>>1^3988292384:n>>>=1;t[e]=n;}class e{constructor(t){this.crc=t||-1;}append(e){let n=0|this.crc;for(let i=0,a=0|e.length;i<a;i++)n=n>>>8^t[255&(n^e[i])];this.crc=n;}get(){return ~this.crc}}const n={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const i=t[t.length-1],a=n.getPartial(i);return 32===a?t.concat(e):n._shiftRight(e,a,0|i,t.slice(0,t.length-1))},bitLength(t){const e=t.length;if(0===e)return 0;const i=t[e-1];return 32*(e-1)+n.getPartial(i)},clamp(t,e){if(32*t.length<e)return t;const i=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,i>0&&e&&(t[i-1]=n.partial(e,t[i-1]&2147483648>>e-1,1)),t},partial:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,getPartial:t=>Math.round(t/1099511627776)||32,_shiftRight(t,e,i,a){for(void 0===a&&(a=[]);e>=32;e-=32)a.push(i),i=0;if(0===e)return a.concat(t);for(let n=0;n<t.length;n++)a.push(i|t[n]>>>e),i=t[n]<<32-e;const r=t.length?t[t.length-1]:0,s=n.getPartial(r);return a.push(n.partial(e+s&31,e+s>32?i:a.pop(),1)),a}},i={bytes:{fromBits(t){const e=n.bitLength(t)/8,i=new Uint8Array(e);let a;for(let n=0;n<e;n++)0==(3&n)&&(a=t[n/4]),i[n]=a>>>24,a<<=8;return i},toBits(t){const e=[];let i,a=0;for(i=0;i<t.length;i++)a=a<<8|t[i],3==(3&i)&&(e.push(a),a=0);return 3&i&&e.push(n.partial(8*(3&i),a)),e}}},a={sha1:function(t){t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset();}};a.sha1.prototype={blockSize:512,reset:function(){const t=this;return t._h=this._init.slice(0),t._buffer=[],t._length=0,t},update:function(t){const e=this;"string"==typeof t&&(t=i.utf8String.toBits(t));const a=e._buffer=n.concat(e._buffer,t),r=e._length,s=e._length=r+n.bitLength(t);if(s>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const o=new Uint32Array(a);let l=0;for(let t=e.blockSize+r-(e.blockSize+r&e.blockSize-1);t<=s;t+=e.blockSize)e._block(o.subarray(16*l,16*(l+1))),l+=1;return a.splice(0,16*l),e},finalize:function(){const t=this;let e=t._buffer;const i=t._h;e=n.concat(e,[n.partial(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(0|t._length);e.length;)t._block(e.splice(0,16));return t.reset(),i},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(t,e,n,i){return t<=19?e&n|~e&i:t<=39?e^n^i:t<=59?e&n|e&i|n&i:t<=79?e^n^i:void 0},_S:function(t,e){return e<<t|e>>>32-t},_block:function(t){const e=this,n=e._h,i=Array(80);for(let e=0;e<16;e++)i[e]=t[e];let a=n[0],r=n[1],s=n[2],o=n[3],l=n[4];for(let t=0;t<=79;t++){t>=16&&(i[t]=e._S(1,i[t-3]^i[t-8]^i[t-14]^i[t-16]));const n=e._S(5,a)+e._f(t,r,s,o)+l+i[t]+e._key[Math.floor(t/20)]|0;l=o,o=s,s=e._S(30,r),r=a,a=n;}n[0]=n[0]+a|0,n[1]=n[1]+r|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+l|0;}};const r={aes:class{constructor(t){const e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();const n=e._tables[0][4],i=e._tables[1],a=t.length;let r,s,o,l=1;if(4!==a&&6!==a&&8!==a)throw new Error("invalid aes key size");for(e._key=[s=t.slice(0),o=[]],r=a;r<4*a+28;r++){let t=s[r-1];(r%a==0||8===a&&r%a==4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],r%a==0&&(t=t<<8^t>>>24^l<<24,l=l<<1^283*(l>>7))),s[r]=s[r-a]^t;}for(let t=0;r;t++,r--){const e=s[3&t?r:r-4];o[t]=r<=4||t<4?e:i[0][n[e>>>24]]^i[1][n[e>>16&255]]^i[2][n[e>>8&255]]^i[3][n[255&e]];}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){const t=this._tables[0],e=this._tables[1],n=t[4],i=e[4],a=[],r=[];let s,o,l,_;for(let t=0;t<256;t++)r[(a[t]=t<<1^283*(t>>7))^t]=t;for(let d=s=0;!n[d];d^=o||1,s=r[s]||1){let r=s^s<<1^s<<2^s<<3^s<<4;r=r>>8^255&r^99,n[d]=r,i[r]=d,_=a[l=a[o=a[d]]];let c=16843009*_^65537*l^257*o^16843008*d,f=257*a[r]^16843008*r;for(let n=0;n<4;n++)t[n][d]=f=f<<24^f>>>8,e[n][r]=c=c<<24^c>>>8;}for(let n=0;n<5;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0);}_crypt(t,e){if(4!==t.length)throw new Error("invalid aes block size");const n=this._key[e],i=n.length/4-2,a=[0,0,0,0],r=this._tables[e],s=r[0],o=r[1],l=r[2],_=r[3],d=r[4];let c,f,u,h=t[0]^n[0],b=t[e?3:1]^n[1],w=t[2]^n[2],p=t[e?1:3]^n[3],x=4;for(let t=0;t<i;t++)c=s[h>>>24]^o[b>>16&255]^l[w>>8&255]^_[255&p]^n[x],f=s[b>>>24]^o[w>>16&255]^l[p>>8&255]^_[255&h]^n[x+1],u=s[w>>>24]^o[p>>16&255]^l[h>>8&255]^_[255&b]^n[x+2],p=s[p>>>24]^o[h>>16&255]^l[b>>8&255]^_[255&w]^n[x+3],x+=4,h=c,b=f,w=u;for(let t=0;t<4;t++)a[e?3&-t:t]=d[h>>>24]<<24^d[b>>16&255]<<16^d[w>>8&255]<<8^d[255&p]^n[x++],c=h,h=b,b=w,w=p,p=c;return a}}},s={ctrGladman:class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e;}reset(){this._iv=this._initIv;}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if(255==(t>>24&255)){let e=t>>16&255,n=t>>8&255,i=255&t;255===e?(e=0,255===n?(n=0,255===i?i=0:++i):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=i;}else t+=1<<24;return t}incCounter(t){0===(t[0]=this.incWord(t[0]))&&(t[1]=this.incWord(t[1]));}calculate(t,e,i){let a;if(!(a=e.length))return [];const r=n.bitLength(e);for(let n=0;n<a;n+=4){this.incCounter(i);const a=t.encrypt(i);e[n]^=a[0],e[n+1]^=a[1],e[n+2]^=a[2],e[n+3]^=a[3];}return n.clamp(e,r)}}},o={hmacSha1:class{constructor(t){const e=this,n=e._hash=a.sha1,i=[[],[]],r=n.prototype.blockSize/32;e._baseHash=[new n,new n],t.length>r&&(t=n.hash(t));for(let e=0;e<r;e++)i[0][e]=909522486^t[e],i[1][e]=1549556828^t[e];e._baseHash[0].update(i[0]),e._baseHash[1].update(i[1]),e._resultHash=new n(e._baseHash[0]);}reset(){const t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1;}update(t){this._updated=!0,this._resultHash.update(t);}digest(){const t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}}},l={name:"PBKDF2"},_=Object.assign({hash:{name:"HMAC"}},l),d=Object.assign({iterations:1e3,hash:{name:"SHA-1"}},l),c=["deriveBits"],f=[8,12,16],u=[16,24,32],h=[0,0,0,0],b=i.bytes,w=r.aes,p=s.ctrGladman,x=o.hmacSha1;class g{constructor(t,e,n){Object.assign(this,{password:t,signed:e,strength:n-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;if(e.password){const n=A(t,0,f[e.strength]+2);await async function(t,e,n){await k(t,n,A(e,0,f[t.strength]));const i=A(e,f[t.strength]),a=t.keys.passwordVerification;if(a[0]!=i[0]||a[1]!=i[1])throw new Error("Invalid pasword")}(e,n,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication),t=A(t,f[e.strength]+2);}return m(e,t,new Uint8Array(t.length-10-(t.length-10)%16),0,10,!0)}flush(){const t=this,e=t.pendingInput,n=A(e,0,e.length-10),i=A(e,e.length-10);let a=new Uint8Array(0);if(n.length){const e=b.toBits(n);t.hmac.update(e);const i=t.aesCtrGladman.update(e);a=b.fromBits(i);}let r=!0;if(t.signed){const e=A(b.fromBits(t.hmac.digest()),0,10);for(let t=0;t<10;t++)e[t]!=i[t]&&(r=!1);}return {valid:r,data:a}}}class y{constructor(t,e){Object.assign(this,{password:t,strength:e-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;let n=new Uint8Array(0);e.password&&(n=await async function(t,e){const n=crypto.getRandomValues(new Uint8Array(f[t.strength]));return await k(t,e,n),v(n,t.keys.passwordVerification)}(e,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication));const i=new Uint8Array(n.length+t.length-t.length%16);return i.set(n,0),m(e,t,i,n.length,0)}flush(){const t=this;let e=new Uint8Array(0);if(t.pendingInput.length){const n=t.aesCtrGladman.update(b.toBits(t.pendingInput));t.hmac.update(n),e=b.fromBits(n);}const n=A(b.fromBits(t.hmac.digest()),0,10);return {data:v(e,n),signature:n}}}function m(t,e,n,i,a,r){const s=e.length-a;let o;for(t.pendingInput.length&&(e=v(t.pendingInput,e),n=function(t,e){if(e&&e>t.length){const n=t;(t=new Uint8Array(e)).set(n,0);}return t}(n,s-s%16)),o=0;o<=s-16;o+=16){const a=b.toBits(A(e,o,o+16));r&&t.hmac.update(a);const s=t.aesCtrGladman.update(a);r||t.hmac.update(s),n.set(b.fromBits(s),o+i);}return t.pendingInput=A(e,o),n}async function k(t,e,n){const i=(new TextEncoder).encode(e),a=await crypto.subtle.importKey("raw",i,_,!1,c),r=await crypto.subtle.deriveBits(Object.assign({salt:n},d),a,8*(2*u[t.strength]+2)),s=new Uint8Array(r);t.keys={key:b.toBits(A(s,0,u[t.strength])),authentication:b.toBits(A(s,u[t.strength],2*u[t.strength])),passwordVerification:A(s,2*u[t.strength])};}function v(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function A(t,e,n){return t.subarray(e,n)}class U{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;if(e.password){const n=z(e,t.subarray(0,12));if(e.password=null,n[11]!=e.passwordVerification)throw new Error("Invalid pasword");t=t.subarray(12);}return z(e,t)}flush(){return {valid:!0,data:new Uint8Array(0)}}}class S{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;let n,i;if(e.password){e.password=null;const a=crypto.getRandomValues(new Uint8Array(12));a[11]=e.passwordVerification,n=new Uint8Array(t.length+a.length),n.set(I(e,a),0),i=12;}else n=new Uint8Array(t.length),i=0;return n.set(I(e,t),i),n}flush(){return {data:new Uint8Array(0)}}}function z(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,n[i]);return n}function I(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,e[i]);return n}function E(t,n){t.keys=[305419896,591751049,878082192],t.crcKey0=new e(t.keys[0]),t.crcKey2=new e(t.keys[2]);for(let e=0;e<n.length;e++)C(t,n.charCodeAt(e));}function C(t,e){t.crcKey0.append([e]),t.keys[0]=~t.crcKey0.get(),t.keys[1]=H(t.keys[1]+B(t.keys[0])),t.keys[1]=H(Math.imul(t.keys[1],134775813)+1),t.crcKey2.append([t.keys[1]>>>24]),t.keys[2]=~t.crcKey2.get();}function M(t){const e=2|t.keys[2];return B(Math.imul(e,1^e)>>>8)}function B(t){return 255&t}function H(t){return 4294967295&t}class V{constructor(t,{signature:n,password:i,signed:a,compressed:r,zipCrypto:s,passwordVerification:o,encryptionStrength:l},{chunkSize:_}){const d=Boolean(i);Object.assign(this,{signature:n,encrypted:d,signed:a,compressed:r,inflate:r&&new t({chunkSize:_}),crc32:a&&new e,zipCrypto:s,decrypt:d&&s?new U(i,o):new g(i,a,l)});}async append(t){const e=this;return e.encrypted&&t.length&&(t=await e.decrypt.append(t)),e.compressed&&t.length&&(t=await e.inflate.append(t)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),t}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.encrypted){const e=t.decrypt.flush();if(!e.valid)throw new Error("Invalid signature");n=e.data;}if((!t.encrypted||t.zipCrypto)&&t.signed){const n=new DataView(new Uint8Array(4).buffer);if(e=t.crc32.get(),n.setUint32(0,e),t.signature!=n.getUint32(0,!1))throw new Error("Invalid signature")}return t.compressed&&(n=await t.inflate.append(n)||new Uint8Array(0),await t.inflate.flush()),{data:n,signature:e}}}class D{constructor(t,{encrypted:n,signed:i,compressed:a,level:r,zipCrypto:s,password:o,passwordVerification:l,encryptionStrength:_},{chunkSize:d}){Object.assign(this,{encrypted:n,signed:i,compressed:a,deflate:a&&new t({level:r||5,chunkSize:d}),crc32:i&&new e,zipCrypto:s,encrypt:n&&s?new S(o,l):new y(o,_)});}async append(t){const e=this;let n=t;return e.compressed&&t.length&&(n=await e.deflate.append(t)),e.encrypted&&n.length&&(n=await e.encrypt.append(n)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),n}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.compressed&&(n=await t.deflate.flush()||new Uint8Array(0)),t.encrypted){n=await t.encrypt.append(n);const i=t.encrypt.flush();e=i.signature;const a=new Uint8Array(n.length+i.data.length);a.set(n,0),a.set(i.data,n.length),n=a;}return t.encrypted&&!t.zipCrypto||!t.signed||(e=t.crc32.get()),{data:n,signature:e}}}const j={init(t){t.scripts&&t.scripts.length&&importScripts.apply(void 0,t.scripts);const e=t.options;let n;self.initCodec&&self.initCodec(),e.codecType.startsWith("deflate")?n=self.Deflate:e.codecType.startsWith("inflate")&&(n=self.Inflate),O=function(t,e,n){return e.codecType.startsWith("deflate")?new D(t,e,n):e.codecType.startsWith("inflate")?new V(t,e,n):void 0}(n,e,t.config);},append:async t=>({data:await O.append(t.data)}),flush:()=>O.flush()};let O;addEventListener("message",(async t=>{const e=t.data,n=e.type,i=j[n];if(i)try{e.data&&(e.data=new Uint8Array(e.data));const t=await i(e)||{};if(t.type=n,t.data)try{t.data=t.data.buffer,postMessage(t,[t.data]);}catch(e){postMessage(t);}else postMessage(t);}catch(t){postMessage({type:n,error:{message:t.message,stack:t.stack}});}}));function P(t){return K(t.map((([t,e])=>new Array(t).fill(e,0,t))))}function K(t){return t.reduce(((t,e)=>t.concat(Array.isArray(e)?K(e):e)),[])}const G=[0,1,2,3].concat(...P([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function W(){const t=this;function e(t,e){let n=0;do{n|=1&t,t>>>=1,n<<=1;}while(--e>0);return n>>>1}t.build_tree=function(n){const i=t.dyn_tree,a=t.stat_desc.static_tree,r=t.stat_desc.elems;let s,o,l,_=-1;for(n.heap_len=0,n.heap_max=573,s=0;s<r;s++)0!==i[2*s]?(n.heap[++n.heap_len]=_=s,n.depth[s]=0):i[2*s+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=_<2?++_:0,i[2*l]=1,n.depth[l]=0,n.opt_len--,a&&(n.static_len-=a[2*l+1]);for(t.max_code=_,s=Math.floor(n.heap_len/2);s>=1;s--)n.pqdownheap(i,s);l=r;do{s=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(i,1),o=n.heap[1],n.heap[--n.heap_max]=s,n.heap[--n.heap_max]=o,i[2*l]=i[2*s]+i[2*o],n.depth[l]=Math.max(n.depth[s],n.depth[o])+1,i[2*s+1]=i[2*o+1]=l,n.heap[1]=l++,n.pqdownheap(i,1);}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(e){const n=t.dyn_tree,i=t.stat_desc.static_tree,a=t.stat_desc.extra_bits,r=t.stat_desc.extra_base,s=t.stat_desc.max_length;let o,l,_,d,c,f,u=0;for(d=0;d<=15;d++)e.bl_count[d]=0;for(n[2*e.heap[e.heap_max]+1]=0,o=e.heap_max+1;o<573;o++)l=e.heap[o],d=n[2*n[2*l+1]+1]+1,d>s&&(d=s,u++),n[2*l+1]=d,l>t.max_code||(e.bl_count[d]++,c=0,l>=r&&(c=a[l-r]),f=n[2*l],e.opt_len+=f*(d+c),i&&(e.static_len+=f*(i[2*l+1]+c)));if(0!==u){do{for(d=s-1;0===e.bl_count[d];)d--;e.bl_count[d]--,e.bl_count[d+1]+=2,e.bl_count[s]--,u-=2;}while(u>0);for(d=s;0!==d;d--)for(l=e.bl_count[d];0!==l;)_=e.heap[--o],_>t.max_code||(n[2*_+1]!=d&&(e.opt_len+=(d-n[2*_+1])*n[2*_],n[2*_+1]=d),l--);}}(n),function(t,n,i){const a=[];let r,s,o,l=0;for(r=1;r<=15;r++)a[r]=l=l+i[r-1]<<1;for(s=0;s<=n;s++)o=t[2*s+1],0!==o&&(t[2*s]=e(a[o]++,o));}(i,t.max_code,n.bl_count);};}function L(t,e,n,i,a){const r=this;r.static_tree=t,r.extra_bits=e,r.extra_base=n,r.elems=i,r.max_length=a;}W._length_code=[0,1,2,3,4,5,6,7].concat(...P([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),W.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],W.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],W.d_code=function(t){return t<256?G[t]:G[256+(t>>>7)]},W.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],L.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],L.static_l_desc=new L(L.static_ltree,W.extra_lbits,257,286,15),L.static_d_desc=new L(L.static_dtree,W.extra_dbits,0,30,15),L.static_bl_desc=new L(null,W.extra_blbits,0,19,7);function T(t,e,n,i,a){const r=this;r.good_length=t,r.max_lazy=e,r.nice_length=n,r.max_chain=i,r.func=a;}const q=[new T(0,0,0,0,0),new T(4,4,8,4,1),new T(4,5,16,8,1),new T(4,6,32,32,1),new T(4,4,16,16,2),new T(8,16,32,32,2),new T(8,16,128,128,2),new T(8,32,128,256,2),new T(32,128,258,1024,2),new T(32,258,258,4096,2)],R=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function F(t,e,n,i){const a=t[2*e],r=t[2*n];return a<r||a==r&&i[e]<=i[n]}function J(){const t=this;let e,n,i,a,r,s,o,l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v,A,U,S,z,I,E,C,M,B,H;const V=new W,D=new W,j=new W;let O,P,K,G,T,J,N,Q;function X(){let e;for(e=0;e<286;e++)M[2*e]=0;for(e=0;e<30;e++)B[2*e]=0;for(e=0;e<19;e++)H[2*e]=0;M[512]=1,t.opt_len=t.static_len=0,K=T=0;}function Y(t,e){let n,i=-1,a=t[1],r=0,s=7,o=4;0===a&&(s=138,o=3),t[2*(e+1)+1]=65535;for(let l=0;l<=e;l++)n=a,a=t[2*(l+1)+1],++r<s&&n==a||(r<o?H[2*n]+=r:0!==n?(n!=i&&H[2*n]++,H[32]++):r<=10?H[34]++:H[36]++,r=0,i=n,0===a?(s=138,o=3):n==a?(s=6,o=3):(s=7,o=4));}function Z(e){t.pending_buf[t.pending++]=e;}function $(t){Z(255&t),Z(t>>>8&255);}function tt(t,e){let n;const i=e;Q>16-i?(n=t,N|=n<<Q&65535,$(N),N=n>>>16-Q,Q+=i-16):(N|=t<<Q&65535,Q+=i);}function et(t,e){const n=2*t;tt(65535&e[n],65535&e[n+1]);}function nt(t,e){let n,i,a=-1,r=t[1],s=0,o=7,l=4;for(0===r&&(o=138,l=3),n=0;n<=e;n++)if(i=r,r=t[2*(n+1)+1],!(++s<o&&i==r)){if(s<l)do{et(i,H);}while(0!=--s);else 0!==i?(i!=a&&(et(i,H),s--),et(16,H),tt(s-3,2)):s<=10?(et(17,H),tt(s-3,3)):(et(18,H),tt(s-11,7));s=0,a=i,0===r?(o=138,l=3):i==r?(o=6,l=3):(o=7,l=4);}}function it(){16==Q?($(N),N=0,Q=0):Q>=8&&(Z(255&N),N>>>=8,Q-=8);}function at(e,n){let i,a,r;if(t.pending_buf[G+2*K]=e>>>8&255,t.pending_buf[G+2*K+1]=255&e,t.pending_buf[O+K]=255&n,K++,0===e?M[2*n]++:(T++,e--,M[2*(W._length_code[n]+256+1)]++,B[2*W.d_code(e)]++),0==(8191&K)&&z>2){for(i=8*K,a=m-p,r=0;r<30;r++)i+=B[2*r]*(5+W.extra_dbits[r]);if(i>>>=3,T<Math.floor(K/2)&&i<Math.floor(a/2))return !0}return K==P-1}function rt(e,n){let i,a,r,s,o=0;if(0!==K)do{i=t.pending_buf[G+2*o]<<8&65280|255&t.pending_buf[G+2*o+1],a=255&t.pending_buf[O+o],o++,0===i?et(a,e):(r=W._length_code[a],et(r+256+1,e),s=W.extra_lbits[r],0!==s&&(a-=W.base_length[r],tt(a,s)),i--,r=W.d_code(i),et(r,n),s=W.extra_dbits[r],0!==s&&(i-=W.base_dist[r],tt(i,s)));}while(o<K);et(256,e),J=e[513];}function st(){Q>8?$(N):Q>0&&Z(255&N),N=0,Q=0;}function ot(e,n,i){tt(0+(i?1:0),3),function(e,n,i){st(),J=8,i&&($(n),$(~n)),t.pending_buf.set(l.subarray(e,e+n),t.pending),t.pending+=n;}(e,n,!0);}function lt(e,n,i){let a,r,s=0;z>0?(V.build_tree(t),D.build_tree(t),s=function(){let e;for(Y(M,V.max_code),Y(B,D.max_code),j.build_tree(t),e=18;e>=3&&0===H[2*W.bl_order[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(),a=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=a&&(a=r)):a=r=n+5,n+4<=a&&-1!=e?ot(e,n,i):r==a?(tt(2+(i?1:0),3),rt(L.static_ltree,L.static_dtree)):(tt(4+(i?1:0),3),function(t,e,n){let i;for(tt(t-257,5),tt(e-1,5),tt(n-4,4),i=0;i<n;i++)tt(H[2*W.bl_order[i]+1],3);nt(M,t-1),nt(B,e-1);}(V.max_code+1,D.max_code+1,s+1),rt(M,B)),X(),i&&st();}function _t(t){lt(p>=0?p:-1,m-p,t),p=m,e.flush_pending();}function dt(){let t,n,i,a;do{if(a=_-v-m,0===a&&0===m&&0===v)a=r;else if(-1==a)a--;else if(m>=r+r-262){l.set(l.subarray(r,r+r),0),k-=r,m-=r,p-=r,t=u,i=t;do{n=65535&c[--i],c[i]=n>=r?n-r:0;}while(0!=--t);t=r,i=t;do{n=65535&d[--i],d[i]=n>=r?n-r:0;}while(0!=--t);a+=r;}if(0===e.avail_in)return;t=e.read_buf(l,m+v,a),v+=t,v>=3&&(f=255&l[m],f=(f<<w^255&l[m+1])&b);}while(v<262&&0!==e.avail_in)}function ct(t){let e,n,i=U,a=m,s=A;const _=m>r-262?m-(r-262):0;let c=C;const f=o,u=m+258;let h=l[a+s-1],b=l[a+s];A>=E&&(i>>=2),c>v&&(c=v);do{if(e=t,l[e+s]==b&&l[e+s-1]==h&&l[e]==l[a]&&l[++e]==l[a+1]){a+=2,e++;do{}while(l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&a<u);if(n=258-(u-a),a=u-258,n>s){if(k=t,s=n,n>=c)break;h=l[a+s-1],b=l[a+s];}}}while((t=65535&d[t&f])>_&&0!=--i);return s<=v?s:v}function ft(e){return e.total_in=e.total_out=0,e.msg=null,t.pending=0,t.pending_out=0,n=113,a=0,V.dyn_tree=M,V.stat_desc=L.static_l_desc,D.dyn_tree=B,D.stat_desc=L.static_d_desc,j.dyn_tree=H,j.stat_desc=L.static_bl_desc,N=0,Q=0,J=8,X(),function(){_=2*r,c[u-1]=0;for(let t=0;t<u-1;t++)c[t]=0;S=q[z].max_lazy,E=q[z].good_length,C=q[z].nice_length,U=q[z].max_chain,m=0,p=0,v=0,x=A=2,y=0,f=0;}(),0}t.depth=[],t.bl_count=[],t.heap=[],M=[],B=[],H=[],t.pqdownheap=function(e,n){const i=t.heap,a=i[n];let r=n<<1;for(;r<=t.heap_len&&(r<t.heap_len&&F(e,i[r+1],i[r],t.depth)&&r++,!F(e,a,i[r],t.depth));)i[n]=i[r],n=r,r<<=1;i[n]=a;},t.deflateInit=function(e,n,a,_,f,p){return _||(_=8),f||(f=8),p||(p=0),e.msg=null,-1==n&&(n=6),f<1||f>9||8!=_||a<9||a>15||n<0||n>9||p<0||p>2?-2:(e.dstate=t,s=a,r=1<<s,o=r-1,h=f+7,u=1<<h,b=u-1,w=Math.floor((h+3-1)/3),l=new Uint8Array(2*r),d=[],c=[],P=1<<f+6,t.pending_buf=new Uint8Array(4*P),i=4*P,G=Math.floor(P/2),O=3*P,z=n,I=p,ft(e))},t.deflateEnd=function(){return 42!=n&&113!=n&&666!=n?-2:(t.pending_buf=null,c=null,d=null,l=null,t.dstate=null,113==n?-3:0)},t.deflateParams=function(t,e,n){let i=0;return -1==e&&(e=6),e<0||e>9||n<0||n>2?-2:(q[z].func!=q[e].func&&0!==t.total_in&&(i=t.deflate(1)),z!=e&&(z=e,S=q[z].max_lazy,E=q[z].good_length,C=q[z].nice_length,U=q[z].max_chain),I=n,i)},t.deflateSetDictionary=function(t,e,i){let a,s=i,_=0;if(!e||42!=n)return -2;if(s<3)return 0;for(s>r-262&&(s=r-262,_=i-s),l.set(e.subarray(_,_+s),0),m=s,p=s,f=255&l[0],f=(f<<w^255&l[1])&b,a=0;a<=s-3;a++)f=(f<<w^255&l[a+2])&b,d[a&o]=c[f],c[f]=a;return 0},t.deflate=function(_,h){let U,E,C,M,B;if(h>4||h<0)return -2;if(!_.next_out||!_.next_in&&0!==_.avail_in||666==n&&4!=h)return _.msg=R[4],-2;if(0===_.avail_out)return _.msg=R[7],-5;var H;if(e=_,M=a,a=h,42==n&&(E=8+(s-8<<4)<<8,C=(z-1&255)>>1,C>3&&(C=3),E|=C<<6,0!==m&&(E|=32),E+=31-E%31,n=113,Z((H=E)>>8&255),Z(255&H)),0!==t.pending){if(e.flush_pending(),0===e.avail_out)return a=-1,0}else if(0===e.avail_in&&h<=M&&4!=h)return e.msg=R[7],-5;if(666==n&&0!==e.avail_in)return _.msg=R[7],-5;if(0!==e.avail_in||0!==v||0!=h&&666!=n){switch(B=-1,q[z].func){case 0:B=function(t){let n,a=65535;for(a>i-5&&(a=i-5);;){if(v<=1){if(dt(),0===v&&0==t)return 0;if(0===v)break}if(m+=v,v=0,n=p+a,(0===m||m>=n)&&(v=m-n,m=n,_t(!1),0===e.avail_out))return 0;if(m-p>=r-262&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 1:B=function(t){let n,i=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m),0!==i&&(m-i&65535)<=r-262&&2!=I&&(x=ct(i)),x>=3)if(n=at(m-k,x-3),v-=x,x<=S&&v>=3){x--;do{m++,f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m;}while(0!=--x);m++;}else m+=x,x=0,f=255&l[m],f=(f<<w^255&l[m+1])&b;else n=at(0,255&l[m]),v--,m++;if(n&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 2:B=function(t){let n,i,a=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m),A=x,g=k,x=2,0!==a&&A<S&&(m-a&65535)<=r-262&&(2!=I&&(x=ct(a)),x<=5&&(1==I||3==x&&m-k>4096)&&(x=2)),A>=3&&x<=A){i=m+v-3,n=at(m-1-g,A-3),v-=A-1,A-=2;do{++m<=i&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m);}while(0!=--A);if(y=0,x=2,m++,n&&(_t(!1),0===e.avail_out))return 0}else if(0!==y){if(n=at(0,255&l[m-1]),n&&_t(!1),m++,v--,0===e.avail_out)return 0}else y=1,m++,v--;}return 0!==y&&(n=at(0,255&l[m-1]),y=0),_t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);}if(2!=B&&3!=B||(n=666),0==B||2==B)return 0===e.avail_out&&(a=-1),0;if(1==B){if(1==h)tt(2,3),et(256,L.static_ltree),it(),1+J+10-Q<9&&(tt(2,3),et(256,L.static_ltree),it()),J=7;else if(ot(0,0,!1),3==h)for(U=0;U<u;U++)c[U]=0;if(e.flush_pending(),0===e.avail_out)return a=-1,0}}return 4!=h?0:1};}function N(){const t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0;}function Q(t){const e=new N,n=(i=t&&t.chunkSize?t.chunkSize:65536)+5*(Math.floor(i/16383)+1);var i;const a=new Uint8Array(n);let r=t?t.level:-1;void 0===r&&(r=-1),e.deflateInit(r),e.next_out=a,this.append=function(t,i){let r,s,o=0,l=0,_=0;const d=[];if(t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,r=e.deflate(0),0!=r)throw new Error("deflating: "+e.msg);e.next_out_index&&(e.next_out_index==n?d.push(new Uint8Array(a)):d.push(a.slice(0,e.next_out_index))),_+=e.next_out_index,i&&e.next_in_index>0&&e.next_in_index!=o&&(i(e.next_in_index),o=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return d.length>1?(s=new Uint8Array(_),d.forEach((function(t){s.set(t,l),l+=t.length;}))):s=d[0]||new Uint8Array(0),s}},this.flush=function(){let t,i,r=0,s=0;const o=[];do{if(e.next_out_index=0,e.avail_out=n,t=e.deflate(4),1!=t&&0!=t)throw new Error("deflating: "+e.msg);n-e.avail_out>0&&o.push(a.slice(0,e.next_out_index)),s+=e.next_out_index;}while(e.avail_in>0||0===e.avail_out);return e.deflateEnd(),i=new Uint8Array(s),o.forEach((function(t){i.set(t,r),r+=t.length;})),i};}N.prototype={deflateInit:function(t,e){const n=this;return n.dstate=new J,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate:function(t){const e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd:function(){const t=this;if(!t.dstate)return -2;const e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){const n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary:function(t,e){const n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf:function(t,e,n){const i=this;let a=i.avail_in;return a>n&&(a=n),0===a?0:(i.avail_in-=a,t.set(i.next_in.subarray(i.next_in_index,i.next_in_index+a),e),i.next_in_index+=a,i.total_in+=a,a)},flush_pending:function(){const t=this;let e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0));}};const X=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Y=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Z=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],$=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],tt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],et=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],nt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function it(){let t,e,n,i,a,r;function s(t,e,s,o,l,_,d,c,f,u,h){let b,w,p,x,g,y,m,k,v,A,U,S,z,I,E;A=0,g=s;do{n[t[e+A]]++,A++,g--;}while(0!==g);if(n[0]==s)return d[0]=-1,c[0]=0,0;for(k=c[0],y=1;y<=15&&0===n[y];y++);for(m=y,k<y&&(k=y),g=15;0!==g&&0===n[g];g--);for(p=g,k>g&&(k=g),c[0]=k,I=1<<y;y<g;y++,I<<=1)if((I-=n[y])<0)return -3;if((I-=n[g])<0)return -3;for(n[g]+=I,r[1]=y=0,A=1,z=2;0!=--g;)r[z]=y+=n[A],z++,A++;g=0,A=0;do{0!==(y=t[e+A])&&(h[r[y]++]=g),A++;}while(++g<s);for(s=r[p],r[0]=g=0,A=0,x=-1,S=-k,a[0]=0,U=0,E=0;m<=p;m++)for(b=n[m];0!=b--;){for(;m>S+k;){if(x++,S+=k,E=p-S,E=E>k?k:E,(w=1<<(y=m-S))>b+1&&(w-=b+1,z=m,y<E))for(;++y<E&&!((w<<=1)<=n[++z]);)w-=n[z];if(E=1<<y,u[0]+E>1440)return -3;a[x]=U=u[0],u[0]+=E,0!==x?(r[x]=g,i[0]=y,i[1]=k,y=g>>>S-k,i[2]=U-a[x-1]-y,f.set(i,3*(a[x-1]+y))):d[0]=U;}for(i[1]=m-S,A>=s?i[0]=192:h[A]<o?(i[0]=h[A]<256?0:96,i[2]=h[A++]):(i[0]=_[h[A]-o]+16+64,i[2]=l[h[A++]-o]),w=1<<m-S,y=g>>>S;y<E;y+=w)f.set(i,3*(U+y));for(y=1<<m-1;0!=(g&y);y>>>=1)g^=y;for(g^=y,v=(1<<S)-1;(g&v)!=r[x];)x--,S-=k,v=(1<<S)-1;}return 0!==I&&1!=p?-5:0}function o(s){let o;for(t||(t=[],e=[],n=new Int32Array(16),i=[],a=new Int32Array(15),r=new Int32Array(16)),e.length<s&&(e=[]),o=0;o<s;o++)e[o]=0;for(o=0;o<16;o++)n[o]=0;for(o=0;o<3;o++)i[o]=0;a.set(n.subarray(0,15),0),r.set(n.subarray(0,16),0);}this.inflate_trees_bits=function(n,i,a,r,l){let _;return o(19),t[0]=0,_=s(n,0,19,19,null,null,a,i,r,t,e),-3==_?l.msg="oversubscribed dynamic bit lengths tree":-5!=_&&0!==i[0]||(l.msg="incomplete dynamic bit lengths tree",_=-3),_},this.inflate_trees_dynamic=function(n,i,a,r,l,_,d,c,f){let u;return o(288),t[0]=0,u=s(a,0,n,257,$,tt,_,r,c,t,e),0!=u||0===r[0]?(-3==u?f.msg="oversubscribed literal/length tree":-4!=u&&(f.msg="incomplete literal/length tree",u=-3),u):(o(288),u=s(a,n,i,0,et,nt,d,l,c,t,e),0!=u||0===l[0]&&n>257?(-3==u?f.msg="oversubscribed distance tree":-5==u?(f.msg="incomplete distance tree",u=-3):-4!=u&&(f.msg="empty distance tree with lengths",u=-3),u):0)};}it.inflate_trees_fixed=function(t,e,n,i){return t[0]=9,e[0]=5,n[0]=Y,i[0]=Z,0};function at(){const t=this;let e,n,i,a,r=0,s=0,o=0,l=0,_=0,d=0,c=0,f=0,u=0,h=0;function b(t,e,n,i,a,r,s,o){let l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v;h=o.next_in_index,b=o.avail_in,f=s.bitb,u=s.bitk,w=s.write,p=w<s.read?s.read-w-1:s.end-w,x=X[t],g=X[e];do{for(;u<20;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(l=f&x,_=n,d=i,v=3*(d+l),0!==(c=_[v]))for(;;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15,y=_[v+2]+(f&X[c]),f>>=c,u-=c;u<15;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;for(l=f&g,_=a,d=r,v=3*(d+l),c=_[v];;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15;u<c;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(m=_[v+2]+(f&X[c]),f>>=c,u-=c,p-=y,w>=m)k=w-m,w-k>0&&2>w-k?(s.window[w++]=s.window[k++],s.window[w++]=s.window[k++],y-=2):(s.window.set(s.window.subarray(k,k+2),w),w+=2,k+=2,y-=2);else {k=w-m;do{k+=s.end;}while(k<0);if(c=s.end-k,y>c){if(y-=c,w-k>0&&c>w-k)do{s.window[w++]=s.window[k++];}while(0!=--c);else s.window.set(s.window.subarray(k,k+c),w),w+=c,k+=c,c=0;k=0;}}if(w-k>0&&y>w-k)do{s.window[w++]=s.window[k++];}while(0!=--y);else s.window.set(s.window.subarray(k,k+y),w),w+=y,k+=y,y=0;break}if(0!=(64&c))return o.msg="invalid distance code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3;l+=_[v+2],l+=f&X[c],v=3*(d+l),c=_[v];}break}if(0!=(64&c))return 0!=(32&c)?(y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,1):(o.msg="invalid literal/length code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3);if(l+=_[v+2],l+=f&X[c],v=3*(d+l),0===(c=_[v])){f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;break}}else f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;}while(p>=258&&b>=10);return y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,0}t.init=function(t,r,s,o,l,_){e=0,c=t,f=r,i=s,u=o,a=l,h=_,n=null;},t.proc=function(t,w,p){let x,g,y,m,k,v,A,U=0,S=0,z=0;for(z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k;;)switch(e){case 0:if(v>=258&&m>=10&&(t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,p=b(c,f,i,u,a,h,t,w),z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k,0!=p)){e=1==p?7:9;break}o=c,n=i,s=u,e=1;case 1:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>>=n[g+1],S-=n[g+1],y=n[g],0===y){l=n[g+2],e=6;break}if(0!=(16&y)){_=15&y,r=n[g+2],e=2;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}if(0!=(32&y)){e=7;break}return e=9,w.msg="invalid literal/length code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 2:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}r+=U&X[x],U>>=x,S-=x,o=f,n=a,s=h,e=3;case 3:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>=n[g+1],S-=n[g+1],y=n[g],0!=(16&y)){_=15&y,d=n[g+2],e=4;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}return e=9,w.msg="invalid distance code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 4:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}d+=U&X[x],U>>=x,S-=x,e=5;case 5:for(A=k-d;A<0;)A+=t.end;for(;0!==r;){if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);t.window[k++]=t.window[A++],v--,A==t.end&&(A=0),r--;}e=0;break;case 6:if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,t.window[k++]=l,v--,e=0;break;case 7:if(S>7&&(S-=8,m++,z--),t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,t.read!=t.write)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);e=8;case 8:return p=1,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 9:return p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);default:return p=-2,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p)}},t.free=function(){};}const rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function st(t,e){const n=this;let i,a=0,r=0,s=0,o=0;const l=[0],_=[0],d=new at;let c=0,f=new Int32Array(4320);const u=new it;n.bitk=0,n.bitb=0,n.window=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(t,e){e&&(e[0]=0),6==a&&d.free(t),a=0,n.bitk=0,n.bitb=0,n.read=n.write=0;},n.reset(t,null),n.inflate_flush=function(t,e){let i,a,r;return a=t.next_out_index,r=n.read,i=(r<=n.write?n.write:n.end)-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i,r==n.end&&(r=0,n.write==n.end&&(n.write=0),i=n.write-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i),t.next_out_index=a,n.read=r,e},n.proc=function(t,e){let h,b,w,p,x,g,y,m;for(p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g;;){let k,v,A,U,S,z,I,E;switch(a){case 0:for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}switch(h=7&b,c=1&h,h>>>1){case 0:b>>>=3,w-=3,h=7&w,b>>>=h,w-=h,a=1;break;case 1:k=[],v=[],A=[[]],U=[[]],it.inflate_trees_fixed(k,v,A,U),d.init(k[0],v[0],A[0],0,U[0],0),b>>>=3,w-=3,a=6;break;case 2:b>>>=3,w-=3,a=3;break;case 3:return b>>>=3,w-=3,a=9,t.msg="invalid block type",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}break;case 1:for(;w<32;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if((~b>>>16&65535)!=(65535&b))return a=9,t.msg="invalid stored block lengths",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);r=65535&b,b=w=0,a=0!==r?2:0!==c?7:0;break;case 2:if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(0===y&&(g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y&&(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y)))return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(e=0,h=r,h>x&&(h=x),h>y&&(h=y),n.window.set(t.read_buf(p,h),g),p+=h,x-=h,g+=h,y-=h,0!=(r-=h))break;a=0!==c?7:0;break;case 3:for(;w<14;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(s=h=16383&b,(31&h)>29||(h>>5&31)>29)return a=9,t.msg="too many length or distance symbols",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(h=258+(31&h)+(h>>5&31),!i||i.length<h)i=[];else for(m=0;m<h;m++)i[m]=0;b>>>=14,w-=14,o=0,a=4;case 4:for(;o<4+(s>>>10);){for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}i[rt[o++]]=7&b,b>>>=3,w-=3;}for(;o<19;)i[rt[o++]]=0;if(l[0]=7,h=u.inflate_trees_bits(i,l,_,f,t),0!=h)return -3==(e=h)&&(i=null,a=9),n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);o=0,a=5;case 5:for(;h=s,!(o>=258+(31&h)+(h>>5&31));){let r,d;for(h=l[0];w<h;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(h=f[3*(_[0]+(b&X[h]))+1],d=f[3*(_[0]+(b&X[h]))+2],d<16)b>>>=h,w-=h,i[o++]=d;else {for(m=18==d?7:d-14,r=18==d?11:3;w<h+m;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(b>>>=h,w-=h,r+=b&X[m],b>>>=m,w-=m,m=o,h=s,m+r>258+(31&h)+(h>>5&31)||16==d&&m<1)return i=null,a=9,t.msg="invalid bit length repeat",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d=16==d?i[m-1]:0;do{i[m++]=d;}while(0!=--r);o=m;}}if(_[0]=-1,S=[],z=[],I=[],E=[],S[0]=9,z[0]=6,h=s,h=u.inflate_trees_dynamic(257+(31&h),1+(h>>5&31),i,S,z,I,E,f,t),0!=h)return -3==h&&(i=null,a=9),e=h,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d.init(S[0],z[0],f,I[0],f,E[0]),a=6;case 6:if(n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,1!=(e=d.proc(n,t,e)))return n.inflate_flush(t,e);if(e=0,d.free(t),p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g,0===c){a=0;break}a=7;case 7:if(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);a=8;case 8:return e=1,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);case 9:return e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);default:return e=-2,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}}},n.free=function(t){n.reset(t,null),n.window=null,f=null;},n.set_dictionary=function(t,e,i){n.window.set(t.subarray(e,e+i),0),n.read=n.write=i;},n.sync_point=function(){return 1==a?1:0};}const ot=[0,0,255,255];function lt(){const t=this;function e(t){return t&&t.istate?(t.total_in=t.total_out=0,t.msg=null,t.istate.mode=7,t.istate.blocks.reset(t,null),0):-2}t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0,t.inflateEnd=function(e){return t.blocks&&t.blocks.free(e),t.blocks=null,0},t.inflateInit=function(n,i){return n.msg=null,t.blocks=null,i<8||i>15?(t.inflateEnd(n),-2):(t.wbits=i,n.istate.blocks=new st(n,1<<i),e(n),0)},t.inflate=function(t,e){let n,i;if(!t||!t.istate||!t.next_in)return -2;const a=t.istate;for(e=4==e?-5:0,n=-5;;)switch(a.mode){case 0:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,8!=(15&(a.method=t.read_byte(t.next_in_index++)))){a.mode=13,t.msg="unknown compression method",a.marker=5;break}if(8+(a.method>>4)>a.wbits){a.mode=13,t.msg="invalid window size",a.marker=5;break}a.mode=1;case 1:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,i=255&t.read_byte(t.next_in_index++),((a.method<<8)+i)%31!=0){a.mode=13,t.msg="incorrect header check",a.marker=5;break}if(0==(32&i)){a.mode=7;break}a.mode=2;case 2:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need=(255&t.read_byte(t.next_in_index++))<<24&4278190080,a.mode=3;case 3:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<16&16711680,a.mode=4;case 4:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<8&65280,a.mode=5;case 5:return 0===t.avail_in?n:(n=e,t.avail_in--,t.total_in++,a.need+=255&t.read_byte(t.next_in_index++),a.mode=6,2);case 6:return a.mode=13,t.msg="need dictionary",a.marker=0,-2;case 7:if(n=a.blocks.proc(t,n),-3==n){a.mode=13,a.marker=0;break}if(0==n&&(n=e),1!=n)return n;n=e,a.blocks.reset(t,a.was),a.mode=12;case 12:return 1;case 13:return -3;default:return -2}},t.inflateSetDictionary=function(t,e,n){let i=0,a=n;if(!t||!t.istate||6!=t.istate.mode)return -2;const r=t.istate;return a>=1<<r.wbits&&(a=(1<<r.wbits)-1,i=n-a),r.blocks.set_dictionary(e,i,a),r.mode=7,0},t.inflateSync=function(t){let n,i,a,r,s;if(!t||!t.istate)return -2;const o=t.istate;if(13!=o.mode&&(o.mode=13,o.marker=0),0===(n=t.avail_in))return -5;for(i=t.next_in_index,a=o.marker;0!==n&&a<4;)t.read_byte(i)==ot[a]?a++:a=0!==t.read_byte(i)?0:4-a,i++,n--;return t.total_in+=i-t.next_in_index,t.next_in_index=i,t.avail_in=n,o.marker=a,4!=a?-3:(r=t.total_in,s=t.total_out,e(t),t.total_in=r,t.total_out=s,o.mode=7,0)},t.inflateSyncPoint=function(t){return t&&t.istate&&t.istate.blocks?t.istate.blocks.sync_point():-2};}function _t(){}function dt(t){const e=new _t,n=t&&t.chunkSize?Math.floor(2*t.chunkSize):131072,i=new Uint8Array(n);let a=!1;e.inflateInit(),e.next_out=i,this.append=function(t,r){const s=[];let o,l,_=0,d=0,c=0;if(0!==t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,0!==e.avail_in||a||(e.next_in_index=0,a=!0),o=e.inflate(0),a&&-5===o){if(0!==e.avail_in)throw new Error("inflating: bad input")}else if(0!==o&&1!==o)throw new Error("inflating: "+e.msg);if((a||1===o)&&e.avail_in===t.length)throw new Error("inflating: bad input");e.next_out_index&&(e.next_out_index===n?s.push(new Uint8Array(i)):s.push(i.slice(0,e.next_out_index))),c+=e.next_out_index,r&&e.next_in_index>0&&e.next_in_index!=_&&(r(e.next_in_index),_=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return s.length>1?(l=new Uint8Array(c),s.forEach((function(t){l.set(t,d),d+=t.length;}))):l=s[0]||new Uint8Array(0),l}},this.flush=function(){e.inflateEnd();};}_t.prototype={inflateInit:function(t){const e=this;return e.istate=new lt,t||(t=15),e.istate.inflateInit(e,t)},inflate:function(t){const e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd:function(){const t=this;if(!t.istate)return -2;const e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync:function(){const t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary:function(t,e){const n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte:function(t){return this.next_in[t]},read_buf:function(t,e){return this.next_in.subarray(t,t+e)}},self.initCodec=()=>{self.Deflate=Q,self.Inflate=dt;};\n\n		'], {
      type: "text/javascript"
    }));
    $$E37({
      workerScripts: {
        inflate: [t],
        deflate: [t]
      }
    });
  }
})();
$$E37({
  Deflate: function(t) {
    var e;
    let n = new f();
    let i = (e = t && t.chunkSize ? t.chunkSize : 65536) + 5 * (Math.floor(e / 16383) + 1);
    let a = new Uint8Array(i);
    let r = t ? t.level : -1;
    void 0 === r && (r = -1);
    n.deflateInit(r);
    n.next_out = a;
    this.append = function(t, e) {
      let r;
      let s = 0;
      let o = 0;
      let l = 0;
      let d = [];
      if (t.length) {
        n.next_in_index = 0;
        n.next_in = t;
        n.avail_in = t.length;
        do {
          if (n.next_out_index = 0, n.avail_out = i, 0 != n.deflate(0)) throw Error("deflating: " + n.msg);
          n.next_out_index && (n.next_out_index == i ? d.push(new Uint8Array(a)) : d.push(a.slice(0, n.next_out_index)));
          l += n.next_out_index;
          e && n.next_in_index > 0 && n.next_in_index != s && (e(n.next_in_index), s = n.next_in_index);
        } while (n.avail_in > 0 || 0 === n.avail_out);
        d.length > 1 ? (r = new Uint8Array(l), d.forEach(function(t) {
          r.set(t, o);
          o += t.length;
        })) : r = d[0] || new Uint8Array(0);
        return r;
      }
    };
    this.flush = function() {
      let t;
      let e;
      let r = 0;
      let s = 0;
      let o = [];
      do {
        if (n.next_out_index = 0, n.avail_out = i, 1 != (t = n.deflate(4)) && 0 != t) throw Error("deflating: " + n.msg);
        i - n.avail_out > 0 && o.push(a.slice(0, n.next_out_index));
        s += n.next_out_index;
      } while (n.avail_in > 0 || 0 === n.avail_out);
      n.deflateEnd();
      e = new Uint8Array(s);
      o.forEach(function(t) {
        e.set(t, r);
        r += t.length;
      });
      return e;
    };
  },
  Inflate: function(t) {
    let e = new A();
    let n = t && t.chunkSize ? Math.floor(2 * t.chunkSize) : 131072;
    let i = new Uint8Array(n);
    let a = !1;
    e.inflateInit();
    e.next_out = i;
    this.append = function(t, r) {
      let s = [];
      let o;
      let l;
      let d = 0;
      let c = 0;
      let f = 0;
      if (0 !== t.length) {
        e.next_in_index = 0;
        e.next_in = t;
        e.avail_in = t.length;
        do {
          if (e.next_out_index = 0, e.avail_out = n, 0 !== e.avail_in || a || (e.next_in_index = 0, a = !0), o = e.inflate(0), a && -5 === o) {
            if (0 !== e.avail_in) throw Error("inflating: bad input");
          } else if (0 !== o && 1 !== o) throw Error("inflating: " + e.msg);
          if ((a || 1 === o) && e.avail_in === t.length) throw Error("inflating: bad input");
          e.next_out_index && (e.next_out_index === n ? s.push(new Uint8Array(i)) : s.push(i.slice(0, e.next_out_index)));
          f += e.next_out_index;
          r && e.next_in_index > 0 && e.next_in_index != d && (r(e.next_in_index), d = e.next_in_index);
        } while (e.avail_in > 0 || 0 === e.avail_out);
        s.length > 1 ? (l = new Uint8Array(f), s.forEach(function(t) {
          l.set(t, c);
          c += t.length;
        })) : l = s[0] || new Uint8Array(0);
        return l;
      }
    };
    this.flush = function() {
      e.inflateEnd();
    };
  }
});
export const BlobReader = $$tP0;
export const BlobWriter = $$tV1;
export const Data64URIReader = $$tN2;
export const Data64URIWriter = $$tL3;
export const ERR_ABORT = $$t44;
export const ERR_BAD_FORMAT = $$ei5;
export const ERR_CENTRAL_DIRECTORY_NOT_FOUND = $$eo6;
export const ERR_DUPLICATED_NAME = $$eD7;
export const ERR_ENCRYPTED = $$ec8;
export const ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = $$es9;
export const ERR_EOCDR_NOT_FOUND = $$ea10;
export const ERR_EOCDR_ZIP64_NOT_FOUND = $$er11;
export const ERR_EXTRAFIELD_ZIP64_NOT_FOUND = $$ed12;
export const ERR_HTTP_RANGE = $$tI13;
export const ERR_INVALID_COMMENT = $$eI14;
export const ERR_INVALID_ENCRYPTION_STRENGTH = $$eC15;
export const ERR_INVALID_ENTRY_COMMENT = $$ej16;
export const ERR_INVALID_ENTRY_NAME = $$eT17;
export const ERR_INVALID_EXTRAFIELD_DATA = $$eM18;
export const ERR_INVALID_EXTRAFIELD_TYPE = $$eF19;
export const ERR_INVALID_PASSWORD = $$O20;
export const ERR_INVALID_SIGNATURE = $$tm21;
export const ERR_INVALID_VERSION = $$eB22;
export const ERR_LOCAL_FILE_HEADER_NOT_FOUND = $$el23;
export const ERR_UNSUPPORTED_COMPRESSION = $$eu24;
export const ERR_UNSUPPORTED_ENCRYPTION = $$ef25;
export const ERR_UNSUPPORTED_FORMAT = $$eW26;
export const HttpRangeReader = $$t$27;
export const HttpReader = $$tJ28;
export const Reader = $$tW29;
export const TextReader = $$tH30;
export const TextWriter = $$tq31;
export const Uint8ArrayReader = $$t032;
export const Uint8ArrayWriter = $$t133;
export const Writer = $$tO34;
export const ZipReader = $$em35;
export const ZipWriter = $$eq36;
export const configure = $$E37;
export const fs = $$e338;
export const getMimeType = $$D39;
export const initShimAsyncCodec = $$tS40;
export const terminateWorkers = $$tE41; 
