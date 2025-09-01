import { normalizeInput, toHex } from "../vendor/953839";
function s(e, r, n) {
  let i = e[r] + e[n];
  let s = e[r + 1] + e[n + 1];
  i >= 0x100000000 && s++;
  e[r] = i;
  e[r + 1] = s;
}
function o(e, r, n, i) {
  let s = e[r] + n;
  n < 0 && (s += 0x100000000);
  let o = e[r + 1] + i;
  s >= 0x100000000 && o++;
  e[r] = s;
  e[r + 1] = o;
}
function a(e, r) {
  return e[r] ^ e[r + 1] << 8 ^ e[r + 2] << 16 ^ e[r + 3] << 24;
}
function h(e, r, n, i, a, h) {
  let d = m[a];
  let p = m[a + 1];
  let v = m[h];
  let y = m[h + 1];
  s(g, e, r);
  o(g, e, d, p);
  let b = g[i] ^ g[e];
  let O = g[i + 1] ^ g[e + 1];
  g[i] = O;
  g[i + 1] = b;
  s(g, n, i);
  b = g[r] ^ g[n];
  O = g[r + 1] ^ g[n + 1];
  g[r] = b >>> 24 ^ O << 8;
  g[r + 1] = O >>> 24 ^ b << 8;
  s(g, e, r);
  o(g, e, v, y);
  b = g[i] ^ g[e];
  O = g[i + 1] ^ g[e + 1];
  g[i] = b >>> 16 ^ O << 16;
  g[i + 1] = O >>> 16 ^ b << 16;
  s(g, n, i);
  b = g[r] ^ g[n];
  O = g[r + 1] ^ g[n + 1];
  g[r] = O >>> 31 ^ b << 1;
  g[r + 1] = b >>> 31 ^ O << 1;
}
let d = new Uint32Array([0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19]);
let p = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map(function (e) {
  return 2 * e;
}));
let g = new Uint32Array(32);
let m = new Uint32Array(32);
function v(e, r) {
  let n = 0;
  for (n = 0; n < 16; n++) {
    g[n] = e.h[n];
    g[n + 16] = d[n];
  }
  for (g[24] = g[24] ^ e.t, g[25] = g[25] ^ e.t / 0x100000000, r && (g[28] = ~g[28], g[29] = ~g[29]), n = 0; n < 32; n++) m[n] = a(e.b, 4 * n);
  for (n = 0; n < 12; n++) {
    h(0, 8, 16, 24, p[16 * n + 0], p[16 * n + 1]);
    h(2, 10, 18, 26, p[16 * n + 2], p[16 * n + 3]);
    h(4, 12, 20, 28, p[16 * n + 4], p[16 * n + 5]);
    h(6, 14, 22, 30, p[16 * n + 6], p[16 * n + 7]);
    h(0, 10, 20, 30, p[16 * n + 8], p[16 * n + 9]);
    h(2, 12, 22, 24, p[16 * n + 10], p[16 * n + 11]);
    h(4, 14, 16, 26, p[16 * n + 12], p[16 * n + 13]);
    h(6, 8, 18, 28, p[16 * n + 14], p[16 * n + 15]);
  }
  for (n = 0; n < 16; n++) e.h[n] = e.h[n] ^ g[n] ^ g[n + 16];
}
let y = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
function b(e, r, n, i) {
  if (0 === e || e > 64) throw Error("Illegal output length, expected 0 < length <= 64");
  if (r && r.length > 64) throw Error("Illegal key, expected Uint8Array with 0 < length <= 64");
  if (n && 16 !== n.length) throw Error("Illegal salt, expected Uint8Array with length is 16");
  if (i && 16 !== i.length) throw Error("Illegal personal, expected Uint8Array with length is 16");
  let s = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0,
    c: 0,
    outlen: e
  };
  y.fill(0);
  y[0] = e;
  r && (y[1] = r.length);
  y[2] = 1;
  y[3] = 1;
  n && y.set(n, 32);
  i && y.set(i, 48);
  for (let e = 0; e < 16; e++) s.h[e] = d[e] ^ a(y, 4 * e);
  r && (O(s, r), s.c = 128);
  return s;
}
function O(e, r) {
  for (let n = 0; n < r.length; n++) {
    128 === e.c && (e.t += e.c, v(e, !1), e.c = 0);
    e.b[e.c++] = r[n];
  }
}
function x(e) {
  for (e.t += e.c; e.c < 128;) e.b[e.c++] = 0;
  v(e, !0);
  let r = new Uint8Array(e.outlen);
  for (let n = 0; n < e.outlen; n++) r[n] = e.h[n >> 2] >> 8 * (3 & n);
  return r;
}
function w(e, r, n, s, o) {
  n = n || 64;
  e = normalizeInput(e);
  s && (s = normalizeInput(s));
  o && (o = normalizeInput(o));
  let a = b(n, r, s, o);
  O(a, e);
  return x(a);
}
function k(e, r, n, s, o) {
  let a = w(e, r, n, s, o);
  return toHex(a);
}
module.exports = {
  blake2b: w,
  blake2bHex: k,
  blake2bInit: b,
  blake2bUpdate: O,
  blake2bFinal: x
};