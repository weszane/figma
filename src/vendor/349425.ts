import { normalizeInput, toHex } from "../vendor/953839";
function s(e, r) {
  return e[r] ^ e[r + 1] << 8 ^ e[r + 2] << 16 ^ e[r + 3] << 24;
}
function o(e, r, n, i, s, o) {
  p[e] = p[e] + p[r] + s;
  p[i] = a(p[i] ^ p[e], 16);
  p[n] = p[n] + p[i];
  p[r] = a(p[r] ^ p[n], 12);
  p[e] = p[e] + p[r] + o;
  p[i] = a(p[i] ^ p[e], 8);
  p[n] = p[n] + p[i];
  p[r] = a(p[r] ^ p[n], 7);
}
function a(e, r) {
  return e >>> r ^ e << 32 - r;
}
let h = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
let d = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0]);
let p = new Uint32Array(16);
let g = new Uint32Array(16);
function m(e, r) {
  let n = 0;
  for (n = 0; n < 8; n++) {
    p[n] = e.h[n];
    p[n + 8] = h[n];
  }
  for (p[12] ^= e.t, p[13] ^= e.t / 0x100000000, r && (p[14] = ~p[14]), n = 0; n < 16; n++) g[n] = s(e.b, 4 * n);
  for (n = 0; n < 10; n++) {
    o(0, 4, 8, 12, g[d[16 * n + 0]], g[d[16 * n + 1]]);
    o(1, 5, 9, 13, g[d[16 * n + 2]], g[d[16 * n + 3]]);
    o(2, 6, 10, 14, g[d[16 * n + 4]], g[d[16 * n + 5]]);
    o(3, 7, 11, 15, g[d[16 * n + 6]], g[d[16 * n + 7]]);
    o(0, 5, 10, 15, g[d[16 * n + 8]], g[d[16 * n + 9]]);
    o(1, 6, 11, 12, g[d[16 * n + 10]], g[d[16 * n + 11]]);
    o(2, 7, 8, 13, g[d[16 * n + 12]], g[d[16 * n + 13]]);
    o(3, 4, 9, 14, g[d[16 * n + 14]], g[d[16 * n + 15]]);
  }
  for (n = 0; n < 8; n++) e.h[n] ^= p[n] ^ p[n + 8];
}
function v(e, r) {
  if (!(e > 0 && e <= 32)) throw Error("Incorrect output length, should be in [1, 32]");
  let n = r ? r.length : 0;
  if (r && !(n > 0 && n <= 32)) throw Error("Incorrect key length, should be in [1, 32]");
  let i = {
    h: new Uint32Array(h),
    b: new Uint8Array(64),
    c: 0,
    t: 0,
    outlen: e
  };
  i.h[0] ^= 0x1010000 ^ n << 8 ^ e;
  n > 0 && (y(i, r), i.c = 64);
  return i;
}
function y(e, r) {
  for (let n = 0; n < r.length; n++) {
    64 === e.c && (e.t += e.c, m(e, !1), e.c = 0);
    e.b[e.c++] = r[n];
  }
}
function b(e) {
  for (e.t += e.c; e.c < 64;) e.b[e.c++] = 0;
  m(e, !0);
  let r = new Uint8Array(e.outlen);
  for (let n = 0; n < e.outlen; n++) r[n] = e.h[n >> 2] >> 8 * (3 & n) & 255;
  return r;
}
function O(e, r, n) {
  n = n || 32;
  e = normalizeInput(e);
  let s = v(n, r);
  y(s, e);
  return b(s);
}
function x(e, r, n) {
  let s = O(e, r, n);
  return toHex(s);
}
module.exports = {
  blake2s: O,
  blake2sHex: x,
  blake2sInit: v,
  blake2sUpdate: y,
  blake2sFinal: b
};