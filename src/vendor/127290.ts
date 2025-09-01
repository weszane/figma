import { A as _$$A } from "../vendor/686439";
import { A as _$$A2 } from "../vendor/615247";
import { A as _$$A3 } from "../vendor/794116";
import { A as _$$A4 } from "../vendor/682394";
var i;
var s;
var h = 0;
var d = 0;
export let $$p3 = function (e, r, n) {
  var p = r && n || 0;
  var g = r || Array(16);
  var m = (e = e || {}).node || i;
  var v = void 0 !== e.clockseq ? e.clockseq : s;
  if (null == m || null == v) {
    var y = e.random || (e.rng || _$$A)();
    null == m && (m = i = [1 | y[0], y[1], y[2], y[3], y[4], y[5]]);
    null == v && (v = s = (y[6] << 8 | y[7]) & 16383);
  }
  var b = void 0 !== e.msecs ? e.msecs : Date.now();
  var O = void 0 !== e.nsecs ? e.nsecs : d + 1;
  var x = b - h + (O - d) / 1e4;
  if (x < 0 && void 0 === e.clockseq && (v = v + 1 & 16383), (x < 0 || b > h) && void 0 === e.nsecs && (O = 0), O >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
  h = b;
  d = O;
  s = v;
  var w = ((0xfffffff & (b += 122192928e5)) * 1e4 + O) % 0x100000000;
  g[p++] = w >>> 24 & 255;
  g[p++] = w >>> 16 & 255;
  g[p++] = w >>> 8 & 255;
  g[p++] = 255 & w;
  var k = b / 0x100000000 * 1e4 & 0xfffffff;
  g[p++] = k >>> 8 & 255;
  g[p++] = 255 & k;
  g[p++] = k >>> 24 & 15 | 16;
  g[p++] = k >>> 16 & 255;
  g[p++] = v >>> 8 | 128;
  g[p++] = 255 & v;
  for (var _ = 0; _ < 6; ++_) g[p + _] = m[_];
  return r || _$$A2(g);
};
export let $$m1 = function (e) {
  if (!_$$A3(e)) throw TypeError("Invalid UUID");
  var r;
  var n = new Uint8Array(16);
  n[0] = (r = parseInt(e.slice(0, 8), 16)) >>> 24;
  n[1] = r >>> 16 & 255;
  n[2] = r >>> 8 & 255;
  n[3] = 255 & r;
  n[4] = (r = parseInt(e.slice(9, 13), 16)) >>> 8;
  n[5] = 255 & r;
  n[6] = (r = parseInt(e.slice(14, 18), 16)) >>> 8;
  n[7] = 255 & r;
  n[8] = (r = parseInt(e.slice(19, 23), 16)) >>> 8;
  n[9] = 255 & r;
  n[10] = (r = parseInt(e.slice(24, 36), 16)) / 0x10000000000 & 255;
  n[11] = r / 0x100000000 & 255;
  n[12] = r >>> 24 & 255;
  n[13] = r >>> 16 & 255;
  n[14] = r >>> 8 & 255;
  n[15] = 255 & r;
  return n;
};
function v(e) {
  e = unescape(encodeURIComponent(e));
  for (r = [], n = 0, void 0; n < e.length; ++n) {
    var r;
    var n;
    r.push(e.charCodeAt(n));
  }
  return r;
}
var y = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var b = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function O(e, r, n) {
  function i(e, i, s, o) {
    if ("string" == typeof e && (e = v(e)), "string" == typeof i && (i = $$m1(i)), 16 !== i.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var h = new Uint8Array(16 + e.length);
    if (h.set(i), h.set(e, i.length), (h = n(h))[6] = 15 & h[6] | r, h[8] = 63 & h[8] | 128, s) {
      o = o || 0;
      for (var d = 0; d < 16; ++d) s[o + d] = h[d];
      return s;
    }
    return _$$A2(h);
  }
  try {
    i.name = e;
  } catch (e) {}
  i.DNS = y;
  i.URL = b;
  return i;
}
function x(e) {
  for (r = [], n = 32 * e.length, i = "0123456789abcdef", s = 0, void 0; s < n; s += 8) {
    var r;
    var n;
    var i;
    var s;
    var o = e[s >> 5] >>> s % 32 & 255;
    var a = parseInt(i.charAt(o >>> 4 & 15) + i.charAt(15 & o), 16);
    r.push(a);
  }
  return r;
}
function w(e) {
  return (e + 64 >>> 9 << 4) + 14 + 1;
}
function k(e, r) {
  e[r >> 5] |= 128 << r % 32;
  e[w(r) - 1] = r;
  for (n = 0x67452301, i = -0x10325477, s = -0x67452302, o = 0x10325476, a = 0, void 0; a < e.length; a += 16) {
    var n;
    var i;
    var s;
    var o;
    var a;
    var h = n;
    var d = i;
    var p = s;
    var g = o;
    n = C(n, i, s, o, e[a], 7, -0x28955b88);
    o = C(o, n, i, s, e[a + 1], 12, -0x173848aa);
    s = C(s, o, n, i, e[a + 2], 17, 0x242070db);
    i = C(i, s, o, n, e[a + 3], 22, -0x3e423112);
    n = C(n, i, s, o, e[a + 4], 7, -0xa83f051);
    o = C(o, n, i, s, e[a + 5], 12, 0x4787c62a);
    s = C(s, o, n, i, e[a + 6], 17, -0x57cfb9ed);
    i = C(i, s, o, n, e[a + 7], 22, -0x2b96aff);
    n = C(n, i, s, o, e[a + 8], 7, 0x698098d8);
    o = C(o, n, i, s, e[a + 9], 12, -0x74bb0851);
    s = C(s, o, n, i, e[a + 10], 17, -42063);
    i = C(i, s, o, n, e[a + 11], 22, -0x76a32842);
    n = C(n, i, s, o, e[a + 12], 7, 0x6b901122);
    o = C(o, n, i, s, e[a + 13], 12, -0x2678e6d);
    s = C(s, o, n, i, e[a + 14], 17, -0x5986bc72);
    i = C(i, s, o, n, e[a + 15], 22, 0x49b40821);
    n = T(n, i, s, o, e[a + 1], 5, -0x9e1da9e);
    o = T(o, n, i, s, e[a + 6], 9, -0x3fbf4cc0);
    s = T(s, o, n, i, e[a + 11], 14, 0x265e5a51);
    i = T(i, s, o, n, e[a], 20, -0x16493856);
    n = T(n, i, s, o, e[a + 5], 5, -0x29d0efa3);
    o = T(o, n, i, s, e[a + 10], 9, 0x2441453);
    s = T(s, o, n, i, e[a + 15], 14, -0x275e197f);
    i = T(i, s, o, n, e[a + 4], 20, -0x182c0438);
    n = T(n, i, s, o, e[a + 9], 5, 0x21e1cde6);
    o = T(o, n, i, s, e[a + 14], 9, -0x3cc8f82a);
    s = T(s, o, n, i, e[a + 3], 14, -0xb2af279);
    i = T(i, s, o, n, e[a + 8], 20, 0x455a14ed);
    n = T(n, i, s, o, e[a + 13], 5, -0x561c16fb);
    o = T(o, n, i, s, e[a + 2], 9, -0x3105c08);
    s = T(s, o, n, i, e[a + 7], 14, 0x676f02d9);
    i = T(i, s, o, n, e[a + 12], 20, -0x72d5b376);
    n = I(n, i, s, o, e[a + 5], 4, -378558);
    o = I(o, n, i, s, e[a + 8], 11, -0x788e097f);
    s = I(s, o, n, i, e[a + 11], 16, 0x6d9d6122);
    i = I(i, s, o, n, e[a + 14], 23, -0x21ac7f4);
    n = I(n, i, s, o, e[a + 1], 4, -0x5b4115bc);
    o = I(o, n, i, s, e[a + 4], 11, 0x4bdecfa9);
    s = I(s, o, n, i, e[a + 7], 16, -0x944b4a0);
    i = I(i, s, o, n, e[a + 10], 23, -0x41404390);
    n = I(n, i, s, o, e[a + 13], 4, 0x289b7ec6);
    o = I(o, n, i, s, e[a], 11, -0x155ed806);
    s = I(s, o, n, i, e[a + 3], 16, -0x2b10cf7b);
    i = I(i, s, o, n, e[a + 6], 23, 0x4881d05);
    n = I(n, i, s, o, e[a + 9], 4, -0x262b2fc7);
    o = I(o, n, i, s, e[a + 12], 11, -0x1924661b);
    s = I(s, o, n, i, e[a + 15], 16, 0x1fa27cf8);
    i = I(i, s, o, n, e[a + 2], 23, -0x3b53a99b);
    n = P(n, i, s, o, e[a], 6, -0xbd6ddbc);
    o = P(o, n, i, s, e[a + 7], 10, 0x432aff97);
    s = P(s, o, n, i, e[a + 14], 15, -0x546bdc59);
    i = P(i, s, o, n, e[a + 5], 21, -0x36c5fc7);
    n = P(n, i, s, o, e[a + 12], 6, 0x655b59c3);
    o = P(o, n, i, s, e[a + 3], 10, -0x70f3336e);
    s = P(s, o, n, i, e[a + 10], 15, -1051523);
    i = P(i, s, o, n, e[a + 1], 21, -0x7a7ba22f);
    n = P(n, i, s, o, e[a + 8], 6, 0x6fa87e4f);
    o = P(o, n, i, s, e[a + 15], 10, -0x1d31920);
    s = P(s, o, n, i, e[a + 6], 15, -0x5cfebcec);
    i = P(i, s, o, n, e[a + 13], 21, 0x4e0811a1);
    n = P(n, i, s, o, e[a + 4], 6, -0x8ac817e);
    o = P(o, n, i, s, e[a + 11], 10, -0x42c50dcb);
    s = P(s, o, n, i, e[a + 2], 15, 0x2ad7d2bb);
    i = P(i, s, o, n, e[a + 9], 21, -0x14792c6f);
    n = S(n, h);
    i = S(i, d);
    s = S(s, p);
    o = S(o, g);
  }
  return [n, i, s, o];
}
function _(e) {
  if (0 === e.length) return [];
  for (r = 8 * e.length, n = new Uint32Array(w(r)), i = 0, void 0; i < r; i += 8) {
    var r;
    var n;
    var i;
    n[i >> 5] |= (255 & e[i / 8]) << i % 32;
  }
  return n;
}
function S(e, r) {
  var n = (65535 & e) + (65535 & r);
  return (e >> 16) + (r >> 16) + (n >> 16) << 16 | 65535 & n;
}
function E(e, r) {
  return e << r | e >>> 32 - r;
}
function A(e, r, n, i, s, o) {
  return S(E(S(S(r, e), S(i, o)), s), n);
}
function C(e, r, n, i, s, o, a) {
  return A(r & n | ~r & i, e, r, s, o, a);
}
function T(e, r, n, i, s, o, a) {
  return A(r & i | n & ~i, e, r, s, o, a);
}
function I(e, r, n, i, s, o, a) {
  return A(r ^ n ^ i, e, r, s, o, a);
}
function P(e, r, n, i, s, o, a) {
  return A(n ^ (r | ~i), e, r, s, o, a);
}
export let $$R4 = O("v3", 48, function (e) {
  if ("string" == typeof e) {
    var r = unescape(encodeURIComponent(e));
    e = new Uint8Array(r.length);
    for (var n = 0; n < r.length; ++n) e[n] = r.charCodeAt(n);
  }
  return x(k(_(e), 8 * e.length));
});
function D(e, r, n, i) {
  switch (e) {
    case 0:
      return r & n ^ ~r & i;
    case 1:
    case 3:
      return r ^ n ^ i;
    case 2:
      return r & n ^ r & i ^ n & i;
  }
}
function N(e, r) {
  return e << r | e >>> 32 - r;
}
let $$$6 = O("v5", 80, function (e) {
  var r = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var n = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if ("string" == typeof e) {
    var i = unescape(encodeURIComponent(e));
    e = [];
    for (var s = 0; s < i.length; ++s) e.push(i.charCodeAt(s));
  } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  for (o = Math.ceil((e.length / 4 + 2) / 16), a = Array(o), h = 0, void 0; h < o; ++h) {
    var o;
    var a;
    var h;
    for (d = new Uint32Array(16), p = 0, void 0; p < 16; ++p) {
      var d;
      var p;
      d[p] = e[64 * h + 4 * p] << 24 | e[64 * h + 4 * p + 1] << 16 | e[64 * h + 4 * p + 2] << 8 | e[64 * h + 4 * p + 3];
    }
    a[h] = d;
  }
  a[o - 1][14] = (e.length - 1) * 8 / 0x100000000;
  a[o - 1][14] = Math.floor(a[o - 1][14]);
  a[o - 1][15] = (e.length - 1) * 8 & 0xffffffff;
  for (var g = 0; g < o; ++g) {
    for (m = new Uint32Array(80), v = 0, void 0; v < 16; ++v) {
      var m;
      var v;
      m[v] = a[g][v];
    }
    for (var y = 16; y < 80; ++y) m[y] = N(m[y - 3] ^ m[y - 8] ^ m[y - 14] ^ m[y - 16], 1);
    for (b = n[0], O = n[1], x = n[2], w = n[3], k = n[4], _ = 0, void 0; _ < 80; ++_) {
      var b;
      var O;
      var x;
      var w;
      var k;
      var _;
      var S = Math.floor(_ / 20);
      var E = N(b, 5) + D(S, O, x, w) + k + r[S] + m[_] >>> 0;
      k = w;
      w = x;
      x = N(O, 30) >>> 0;
      O = b;
      b = E;
    }
    n[0] = n[0] + b >>> 0;
    n[1] = n[1] + O >>> 0;
    n[2] = n[2] + x >>> 0;
    n[3] = n[3] + w >>> 0;
    n[4] = n[4] + k >>> 0;
  }
  return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]];
});
let $$L0 = "00000000-0000-0000-0000-000000000000";
let $$j8 = function (e) {
  if (!_$$A3(e)) throw TypeError("Invalid UUID");
  return parseInt(e.substr(14, 1), 16);
};
export const NIL = $$L0;
export const parse = $$m1;
export const stringify = _$$A2;
export const v1 = $$p3;
export const v3 = $$R4;
export const v4 = _$$A4;
export const v5 = $$$6;
export const validate = _$$A3;
export const version = $$j8;