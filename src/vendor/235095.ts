function i(e) {
  function r(e, r) {
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    this.message = e;
    this.code = r;
  }
  r.prototype = Error();
  r.prototype.name = e;
  r.prototype.constructor = r;
  return r;
}
let s = i("LaunchDarklyUnexpectedResponseError");
let o = i("LaunchDarklyInvalidEnvironmentIdError");
let a = i("LaunchDarklyInvalidUserError");
let h = i("LaunchDarklyInvalidEventKeyError");
let d = i("LaunchDarklyInvalidArgumentError");
let p = i("LaunchDarklyFlagFetchError");
for (g = {
  LDUnexpectedResponseError: s,
  LDInvalidEnvironmentIdError: o,
  LDInvalidUserError: a,
  LDInvalidEventKeyError: h,
  LDInvalidArgumentError: d,
  LDInvalidDataError: i("LaunchDarklyInvalidDataError"),
  LDFlagFetchError: p,
  isHttpErrorRecoverable: function(e) {
    return !(e >= 400 && e < 500) || 400 === e || 408 === e || 429 === e;
  }
}, m = function(e) {
  for (n = e.length, i = n % 3, s = [], o = 16383, a = 0, h = n - i, void 0; a < h; a += o) {
    var r;
    var n;
    var i;
    var s;
    var o;
    var a;
    var h;
    s.push(x(e, a, a + o > h ? h : a + o));
  }
  1 === i ? s.push(v[(r = e[n - 1]) >> 2] + v[r << 4 & 63] + "==") : 2 === i && s.push(v[(r = (e[n - 2] << 8) + e[n - 1]) >> 10] + v[r >> 4 & 63] + v[r << 2 & 63] + "=");
  return s.join("");
}, v = [], y = [], "undefined" != typeof Uint8Array && Uint8Array, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", O = 0, void 0; O < 64; ++O) {
  var g;
  var m;
  var v;
  var y;
  var b;
  var O;
  v[O] = b[O];
  y[b.charCodeAt(O)] = O;
}
function x(e, r, n) {
  for (s = [], o = r, void 0; o < n; o += 3) {
    var i;
    var s;
    var o;
    s.push(v[(i = (e[o] << 16 & 0xff0000) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2])) >> 18 & 63] + v[i >> 12 & 63] + v[i >> 6 & 63] + v[63 & i]);
  }
  return s.join("");
}
y["-".charCodeAt(0)] = 62;
y["_".charCodeAt(0)] = 63;
var w = {
  fromByteArray: m
};
var k = Array.isArray;
var _ = Object.keys;
var S = Object.prototype.hasOwnProperty;
var E = function e(r, n) {
  if (r === n) return !0;
  if (r && n && "object" == typeof r && "object" == typeof n) {
    var i;
    var s;
    var o;
    var a = k(r);
    var h = k(n);
    if (a && h) {
      if ((s = r.length) != n.length) return !1;
      for (i = s; 0 != i--;) if (!e(r[i], n[i])) return !1;
      return !0;
    }
    if (a != h) return !1;
    var d = r instanceof Date;
    var p = n instanceof Date;
    if (d != p) return !1;
    if (d && p) return r.getTime() == n.getTime();
    var g = r instanceof RegExp;
    var m = n instanceof RegExp;
    if (g != m) return !1;
    if (g && m) return r.toString() == n.toString();
    var v = _(r);
    if ((s = v.length) !== _(n).length) return !1;
    for (i = s; 0 != i--;) if (!S.call(n, v[i])) return !1;
    for (i = s; 0 != i--;) if (!e(r[o = v[i]], n[o])) return !1;
    return !0;
  }
  return r != r && n != n;
};
let A = ["key", "ip", "country", "email", "firstName", "lastName", "avatar", "name"];
function C(e) {
  let r = unescape(encodeURIComponent(e));
  return w.fromByteArray(function(e) {
    let r = [];
    for (let n = 0; n < e.length; n++) r.push(e.charCodeAt(n));
    return r;
  }(r));
}
function T(e) {
  return C(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function I(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var P;
var R = {
  appendUrlPath: function(e, r) {
    return (e.endsWith("/") ? e.substring(0, e.length - 1) : e) + (r.startsWith("/") ? "" : "/") + r;
  },
  base64URLEncode: T,
  btoa: C,
  chunkEventsForUrl: function(e, r) {
    let n = r.slice(0);
    let i = [];
    let s;
    let o = e;
    for (; n.length > 0;) {
      for (s = []; o > 0;) {
        let e = n.shift();
        if (!e) break;
        (o -= T(JSON.stringify(e)).length) < 0 && s.length > 0 ? n.unshift(e) : s.push(e);
      }
      o = e;
      i.push(s);
    }
    return i;
  },
  clone: function(e) {
    return JSON.parse(JSON.stringify(e));
  },
  deepEquals: function(e, r) {
    return E(e, r);
  },
  extend: function(...e) {
    return e.reduce((e, r) => ({
      ...e,
      ...r
    }), {});
  },
  getLDUserAgentString: function(e) {
    let r = e.version || "?";
    return e.userAgent + "/" + r;
  },
  objectHasOwnProperty: I,
  onNextTick: function(e) {
    setTimeout(e, 0);
  },
  sanitizeContext: function(e) {
    let r;
    return e ? (null !== e.kind && void 0 !== e.kind || A.forEach(n => {
      let i = e[n];
      void 0 !== i && "string" != typeof i && ((r = r || {
        ...e
      })[n] = String(i));
    }), r || e) : e;
  },
  transformValuesToVersionedValues: function(e) {
    let r = {};
    for (let n in e) I(e, n) && (r[n] = {
      value: e[n],
      version: 0
    });
    return r;
  },
  transformVersionedValuesToValues: function(e) {
    let r = {};
    for (let n in e) I(e, n) && (r[n] = e[n].value);
    return r;
  },
  wrapPromiseCallback: function(e, r) {
    let n = e.then(e => (r && setTimeout(() => {
      r(null, e);
    }, 0), e), e => {
      if (!r) return Promise.reject(e);
      setTimeout(() => {
        r(e, null);
      }, 0);
    });
    return r ? void 0 : n;
  }
};
var M = new Uint8Array(16);
function D() {
  if (!P && !(P = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return P(M);
}
var N = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function $(e) {
  return "string" == typeof e && N.test(e);
}
for (z = [], Z = 0, void 0; Z < 256; ++Z) {
  var L;
  var j;
  var z;
  var Z;
  z.push((Z + 256).toString(16).substr(1));
}
function F(e) {
  var r = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
  var n = (z[e[r + 0]] + z[e[r + 1]] + z[e[r + 2]] + z[e[r + 3]] + "-" + z[e[r + 4]] + z[e[r + 5]] + "-" + z[e[r + 6]] + z[e[r + 7]] + "-" + z[e[r + 8]] + z[e[r + 9]] + "-" + z[e[r + 10]] + z[e[r + 11]] + z[e[r + 12]] + z[e[r + 13]] + z[e[r + 14]] + z[e[r + 15]]).toLowerCase();
  if (!$(n)) throw TypeError("Stringified UUID is invalid");
  return n;
}
var U = 0;
var Q = 0;
function V(e) {
  if (!$(e)) throw TypeError("Invalid UUID");
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
}
function B(e, r, n) {
  function i(e, i, s, o) {
    if ("string" == typeof e && (e = function(e) {
      e = unescape(encodeURIComponent(e));
      for (r = [], n = 0, void 0; n < e.length; ++n) {
        var r;
        var n;
        r.push(e.charCodeAt(n));
      }
      return r;
    }(e)), "string" == typeof i && (i = V(i)), 16 !== i.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var a = new Uint8Array(16 + e.length);
    if (a.set(i), a.set(e, i.length), (a = n(a))[6] = 15 & a[6] | r, a[8] = 63 & a[8] | 128, s) {
      o = o || 0;
      for (var h = 0; h < 16; ++h) s[o + h] = a[h];
      return s;
    }
    return F(a);
  }
  try {
    i.name = e;
  } catch (e) { }
  i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  return i;
}
function q(e) {
  return 14 + (e + 64 >>> 9 << 4) + 1;
}
function W(e, r) {
  var n = (65535 & e) + (65535 & r);
  return (e >> 16) + (r >> 16) + (n >> 16) << 16 | 65535 & n;
}
function Y(e, r, n, i, s, o) {
  var a;
  var h;
  return W((a = W(W(r, e), W(i, o))) << (h = s) | a >>> 32 - h, n);
}
function G(e, r, n, i, s, o, a) {
  return Y(r & n | ~r & i, e, r, s, o, a);
}
function X(e, r, n, i, s, o, a) {
  return Y(r & i | n & ~i, e, r, s, o, a);
}
function H(e, r, n, i, s, o, a) {
  return Y(r ^ n ^ i, e, r, s, o, a);
}
function K(e, r, n, i, s, o, a) {
  return Y(n ^ (r | ~i), e, r, s, o, a);
}
function J(e, r, n, i) {
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
function ee(e, r) {
  return e << r | e >>> 32 - r;
}
var et = Object.freeze({
  __proto__: null,
  v1: function(e, r, n) {
    var i = r && n || 0;
    var s = r || Array(16);
    var o = (e = e || {}).node || L;
    var a = void 0 !== e.clockseq ? e.clockseq : j;
    if (null == o || null == a) {
      var h = e.random || (e.rng || D)();
      null == o && (o = L = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]);
      null == a && (a = j = 16383 & (h[6] << 8 | h[7]));
    }
    var d = void 0 !== e.msecs ? e.msecs : Date.now();
    var p = void 0 !== e.nsecs ? e.nsecs : Q + 1;
    var g = d - U + (p - Q) / 1e4;
    if (g < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (g < 0 || d > U) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    U = d;
    Q = p;
    j = a;
    var m = (1e4 * (0xfffffff & (d += 122192928e5)) + p) % 0x100000000;
    s[i++] = m >>> 24 & 255;
    s[i++] = m >>> 16 & 255;
    s[i++] = m >>> 8 & 255;
    s[i++] = 255 & m;
    var v = d / 0x100000000 * 1e4 & 0xfffffff;
    s[i++] = v >>> 8 & 255;
    s[i++] = 255 & v;
    s[i++] = v >>> 24 & 15 | 16;
    s[i++] = v >>> 16 & 255;
    s[i++] = a >>> 8 | 128;
    s[i++] = 255 & a;
    for (var y = 0; y < 6; ++y) s[i + y] = o[y];
    return r || F(s);
  },
  v3: B("v3", 48, function(e) {
    if ("string" == typeof e) {
      var r = unescape(encodeURIComponent(e));
      e = new Uint8Array(r.length);
      for (var n = 0; n < r.length; ++n) e[n] = r.charCodeAt(n);
    }
    return function(e) {
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
    }(function(e, r) {
      e[r >> 5] |= 128 << r % 32;
      e[q(r) - 1] = r;
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
        n = G(n, i, s, o, e[a], 7, -0x28955b88);
        o = G(o, n, i, s, e[a + 1], 12, -0x173848aa);
        s = G(s, o, n, i, e[a + 2], 17, 0x242070db);
        i = G(i, s, o, n, e[a + 3], 22, -0x3e423112);
        n = G(n, i, s, o, e[a + 4], 7, -0xa83f051);
        o = G(o, n, i, s, e[a + 5], 12, 0x4787c62a);
        s = G(s, o, n, i, e[a + 6], 17, -0x57cfb9ed);
        i = G(i, s, o, n, e[a + 7], 22, -0x2b96aff);
        n = G(n, i, s, o, e[a + 8], 7, 0x698098d8);
        o = G(o, n, i, s, e[a + 9], 12, -0x74bb0851);
        s = G(s, o, n, i, e[a + 10], 17, -42063);
        i = G(i, s, o, n, e[a + 11], 22, -0x76a32842);
        n = G(n, i, s, o, e[a + 12], 7, 0x6b901122);
        o = G(o, n, i, s, e[a + 13], 12, -0x2678e6d);
        s = G(s, o, n, i, e[a + 14], 17, -0x5986bc72);
        n = X(n, i = G(i, s, o, n, e[a + 15], 22, 0x49b40821), s, o, e[a + 1], 5, -0x9e1da9e);
        o = X(o, n, i, s, e[a + 6], 9, -0x3fbf4cc0);
        s = X(s, o, n, i, e[a + 11], 14, 0x265e5a51);
        i = X(i, s, o, n, e[a], 20, -0x16493856);
        n = X(n, i, s, o, e[a + 5], 5, -0x29d0efa3);
        o = X(o, n, i, s, e[a + 10], 9, 0x2441453);
        s = X(s, o, n, i, e[a + 15], 14, -0x275e197f);
        i = X(i, s, o, n, e[a + 4], 20, -0x182c0438);
        n = X(n, i, s, o, e[a + 9], 5, 0x21e1cde6);
        o = X(o, n, i, s, e[a + 14], 9, -0x3cc8f82a);
        s = X(s, o, n, i, e[a + 3], 14, -0xb2af279);
        i = X(i, s, o, n, e[a + 8], 20, 0x455a14ed);
        n = X(n, i, s, o, e[a + 13], 5, -0x561c16fb);
        o = X(o, n, i, s, e[a + 2], 9, -0x3105c08);
        s = X(s, o, n, i, e[a + 7], 14, 0x676f02d9);
        n = H(n, i = X(i, s, o, n, e[a + 12], 20, -0x72d5b376), s, o, e[a + 5], 4, -378558);
        o = H(o, n, i, s, e[a + 8], 11, -0x788e097f);
        s = H(s, o, n, i, e[a + 11], 16, 0x6d9d6122);
        i = H(i, s, o, n, e[a + 14], 23, -0x21ac7f4);
        n = H(n, i, s, o, e[a + 1], 4, -0x5b4115bc);
        o = H(o, n, i, s, e[a + 4], 11, 0x4bdecfa9);
        s = H(s, o, n, i, e[a + 7], 16, -0x944b4a0);
        i = H(i, s, o, n, e[a + 10], 23, -0x41404390);
        n = H(n, i, s, o, e[a + 13], 4, 0x289b7ec6);
        o = H(o, n, i, s, e[a], 11, -0x155ed806);
        s = H(s, o, n, i, e[a + 3], 16, -0x2b10cf7b);
        i = H(i, s, o, n, e[a + 6], 23, 0x4881d05);
        n = H(n, i, s, o, e[a + 9], 4, -0x262b2fc7);
        o = H(o, n, i, s, e[a + 12], 11, -0x1924661b);
        s = H(s, o, n, i, e[a + 15], 16, 0x1fa27cf8);
        n = K(n, i = H(i, s, o, n, e[a + 2], 23, -0x3b53a99b), s, o, e[a], 6, -0xbd6ddbc);
        o = K(o, n, i, s, e[a + 7], 10, 0x432aff97);
        s = K(s, o, n, i, e[a + 14], 15, -0x546bdc59);
        i = K(i, s, o, n, e[a + 5], 21, -0x36c5fc7);
        n = K(n, i, s, o, e[a + 12], 6, 0x655b59c3);
        o = K(o, n, i, s, e[a + 3], 10, -0x70f3336e);
        s = K(s, o, n, i, e[a + 10], 15, -1051523);
        i = K(i, s, o, n, e[a + 1], 21, -0x7a7ba22f);
        n = K(n, i, s, o, e[a + 8], 6, 0x6fa87e4f);
        o = K(o, n, i, s, e[a + 15], 10, -0x1d31920);
        s = K(s, o, n, i, e[a + 6], 15, -0x5cfebcec);
        i = K(i, s, o, n, e[a + 13], 21, 0x4e0811a1);
        n = K(n, i, s, o, e[a + 4], 6, -0x8ac817e);
        o = K(o, n, i, s, e[a + 11], 10, -0x42c50dcb);
        s = K(s, o, n, i, e[a + 2], 15, 0x2ad7d2bb);
        i = K(i, s, o, n, e[a + 9], 21, -0x14792c6f);
        n = W(n, h);
        i = W(i, d);
        s = W(s, p);
        o = W(o, g);
      }
      return [n, i, s, o];
    }(function(e) {
      if (0 === e.length) return [];
      for (r = 8 * e.length, n = new Uint32Array(q(r)), i = 0, void 0; i < r; i += 8) {
        var r;
        var n;
        var i;
        n[i >> 5] |= (255 & e[i / 8]) << i % 32;
      }
      return n;
    }(e), 8 * e.length));
  }),
  v4: function(e, r, n) {
    var i = (e = e || {}).random || (e.rng || D)();
    if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, r) {
      n = n || 0;
      for (var s = 0; s < 16; ++s) r[n + s] = i[s];
      return r;
    }
    return F(i);
  },
  v5: B("v5", 80, function(e) {
    var r = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
    var n = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    if ("string" == typeof e) {
      var i = unescape(encodeURIComponent(e));
      e = [];
      for (var s = 0; s < i.length; ++s) e.push(i.charCodeAt(s));
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    for (o = e.length / 4 + 2, a = Math.ceil(o / 16), h = Array(a), d = 0, void 0; d < a; ++d) {
      var o;
      var a;
      var h;
      var d;
      for (p = new Uint32Array(16), g = 0, void 0; g < 16; ++g) {
        var p;
        var g;
        p[g] = e[64 * d + 4 * g] << 24 | e[64 * d + 4 * g + 1] << 16 | e[64 * d + 4 * g + 2] << 8 | e[64 * d + 4 * g + 3];
      }
      h[d] = p;
    }
    h[a - 1][14] = 8 * (e.length - 1) / 0x100000000;
    h[a - 1][14] = Math.floor(h[a - 1][14]);
    h[a - 1][15] = 8 * (e.length - 1) & 0xffffffff;
    for (var m = 0; m < a; ++m) {
      for (v = new Uint32Array(80), y = 0, void 0; y < 16; ++y) {
        var v;
        var y;
        v[y] = h[m][y];
      }
      for (var b = 16; b < 80; ++b) v[b] = ee(v[b - 3] ^ v[b - 8] ^ v[b - 14] ^ v[b - 16], 1);
      for (O = n[0], x = n[1], w = n[2], k = n[3], _ = n[4], S = 0, void 0; S < 80; ++S) {
        var O;
        var x;
        var w;
        var k;
        var _;
        var S;
        var E = Math.floor(S / 20);
        var A = ee(O, 5) + J(E, x, w, k) + _ + r[E] + v[S] >>> 0;
        _ = k;
        k = w;
        w = ee(x, 30) >>> 0;
        x = O;
        O = A;
      }
      n[0] = n[0] + O >>> 0;
      n[1] = n[1] + x >>> 0;
      n[2] = n[2] + w >>> 0;
      n[3] = n[3] + k >>> 0;
      n[4] = n[4] + _ >>> 0;
    }
    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]];
  }),
  NIL: "00000000-0000-0000-0000-000000000000",
  version: function(e) {
    if (!$(e)) throw TypeError("Invalid UUID");
    return parseInt(e.substr(14, 1), 16);
  },
  validate: $,
  stringify: F,
  parse: V
});
let er = ["debug", "info", "warn", "error", "none"];
var en = {
  commonBasicLogger: function(e, r) {
    if (e && e.destination && "function" != typeof e.destination) throw Error("destination for basicLogger was set to a non-function");
    function n(e) {
      return function(r) {
        console && console[e] && console[e].call(console, r);
      };
    }
    let i = e && e.destination ? [e.destination, e.destination, e.destination, e.destination] : [n("log"), n("info"), n("warn"), n("error")];
    let s = !(!e || !e.destination);
    let o = e && void 0 !== e.prefix && null !== e.prefix ? e.prefix : "[LaunchDarkly] ";
    let a = 1;
    if (e && e.level) for (let r = 0; r < er.length; r++) er[r] === e.level && (a = r);
    function h(e, n, a) {
      let h;
      if (a.length < 1) return;
      let d = s ? n + ": " + o : o;
      if (1 !== a.length && r) {
        let e = [...a];
        e[0] = d + e[0];
        h = r(...e);
      } else h = d + a[0];
      try {
        i[e](h);
      } catch (e) {
        console && console.log && console.log("[LaunchDarkly] Configured logger's " + n + " method threw an exception: " + e);
      }
    }
    let d = {};
    for (let e = 0; e < er.length; e++) {
      let r = er[e];
      if ("none" !== r) {
        if (e < a) d[r] = () => { }; else {
          let n = e;
          d[r] = function() {
            h(n, r, arguments);
          };
        }
      }
    }
    return d;
  },
  validateLogger: function(e) {
    er.forEach(r => {
      if ("none" !== r && (!e[r] || "function" != typeof e[r])) throw Error("Provided logger instance must support logger." + r + "(...) method");
    });
  }
};
function ei(e) {
  return e && e.message ? e.message : "string" == typeof e || e instanceof String ? e : JSON.stringify(e);
}
let es = " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.";
var eo = {
  bootstrapInvalid: function() {
    return "LaunchDarkly bootstrap data is not available because the back end could not read the flags.";
  },
  bootstrapOldFormat: function() {
    return "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." + es;
  },
  clientInitialized: function() {
    return "LaunchDarkly client initialized";
  },
  clientNotReady: function() {
    return "LaunchDarkly client is not ready";
  },
  debugEnqueueingEvent: function(e) {
    return 'enqueueing "' + e + '" event';
  },
  debugPostingDiagnosticEvent: function(e) {
    return "sending diagnostic event (" + e.kind + ")";
  },
  debugPostingEvents: function(e) {
    return "sending " + e + " events";
  },
  debugStreamDelete: function(e) {
    return 'received streaming deletion for flag "' + e + '"';
  },
  debugStreamDeleteIgnored: function(e) {
    return 'received streaming deletion for flag "' + e + '" but ignored due to version check';
  },
  debugStreamPatch: function(e) {
    return 'received streaming update for flag "' + e + '"';
  },
  debugStreamPatchIgnored: function(e) {
    return 'received streaming update for flag "' + e + '" but ignored due to version check';
  },
  debugStreamPing: function() {
    return "received ping message from stream";
  },
  debugPolling: function(e) {
    return "polling for feature flags at " + e;
  },
  debugStreamPut: function() {
    return "received streaming update for all flags";
  },
  deprecated: function(e, r) {
    return r ? '"' + e + '" is deprecated, please use "' + r + '"' : '"' + e + '" is deprecated';
  },
  environmentNotFound: function() {
    return "Environment not found. Double check that you specified a valid environment/client-side ID." + es;
  },
  environmentNotSpecified: function() {
    return "No environment/client-side ID was specified." + es;
  },
  errorFetchingFlags: function(e) {
    return "Error fetching flag settings: " + ei(e);
  },
  eventCapacityExceeded: function() {
    return "Exceeded event queue capacity. Increase capacity to avoid dropping events.";
  },
  eventWithoutContext: function() {
    return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript";
  },
  httpErrorMessage: function(e, r, n) {
    return "Received error " + e + (401 === e ? " (invalid SDK key)" : "") + " for " + r + " - " + (g.isHttpErrorRecoverable(e) ? n : "giving up permanently");
  },
  httpUnavailable: function() {
    return "Cannot make HTTP requests in this environment." + es;
  },
  identifyDisabled: function() {
    return "identify() has no effect here; it must be called on the main client instance";
  },
  inspectorMethodError: (e, r) => `an inspector: "${r}" of type: "${e}" generated an exception`,
  invalidContentType: function(e) {
    return 'Expected application/json content type but got "' + e + '"';
  },
  invalidData: function() {
    return "Invalid data received from LaunchDarkly; connection may have been interrupted";
  },
  invalidInspector: (e, r) => `an inspector: "${r}" of an invalid type (${e}) was configured`,
  invalidKey: function() {
    return "Event key must be a string";
  },
  invalidContext: function() {
    return "Invalid context specified." + es;
  },
  invalidTagValue: e => `Config option "${e}" must only contain letters, numbers, ., _ or -.`,
  localStorageUnavailable: function(e) {
    return "local storage is unavailable: " + ei(e);
  },
  networkError: e => "network error" + (e ? " (" + e + ")" : ""),
  optionBelowMinimum: (e, r, n) => 'Config option "' + e + '" was set to ' + r + ", changing to minimum value of " + n,
  streamClosing: function() {
    return "Closing stream connection";
  },
  streamConnecting: function(e) {
    return "Opening stream connection to " + e;
  },
  streamError: function(e, r) {
    return "Error on stream connection: " + ei(e) + ", will continue retrying after " + r + " milliseconds.";
  },
  tagValueTooLong: e => `Value of "${e}" was longer than 64 characters and was discarded.`,
  unknownCustomEventKey: function(e) {
    return 'Custom event "' + e + '" does not exist';
  },
  unknownOption: e => 'Ignoring unknown config option "' + e + '"',
  contextNotSpecified: function() {
    return "No context specified." + es;
  },
  unrecoverableStreamError: e => `Error on stream connection ${ei(e)}, giving up permanently`,
  wrongOptionType: (e, r, n) => 'Config option "' + e + '" should be of type ' + r + ", got " + n + ", using default value",
  wrongOptionTypeBoolean: (e, r) => 'Config option "' + e + '" should be a boolean, got ' + r + ", converting to boolean"
};
let {
  validateLogger
} = en;
let el = {
  baseUrl: {
    default: "https://app.launchdarkly.com"
  },
  streamUrl: {
    default: "https://clientstream.launchdarkly.com"
  },
  eventsUrl: {
    default: "https://events.launchdarkly.com"
  },
  sendEvents: {
    default: !0
  },
  streaming: {
    type: "boolean"
  },
  sendLDHeaders: {
    default: !0
  },
  requestHeaderTransform: {
    type: "function"
  },
  sendEventsOnlyForVariation: {
    default: !1
  },
  useReport: {
    default: !1
  },
  evaluationReasons: {
    default: !1
  },
  eventCapacity: {
    default: 100,
    minimum: 1
  },
  flushInterval: {
    default: 2e3,
    minimum: 2e3
  },
  samplingInterval: {
    default: 0,
    minimum: 0
  },
  streamReconnectDelay: {
    default: 1e3,
    minimum: 0
  },
  allAttributesPrivate: {
    default: !1
  },
  privateAttributes: {
    default: []
  },
  bootstrap: {
    type: "string|object"
  },
  diagnosticRecordingInterval: {
    default: 9e5,
    minimum: 2e3
  },
  diagnosticOptOut: {
    default: !1
  },
  wrapperName: {
    type: "string"
  },
  wrapperVersion: {
    type: "string"
  },
  stateProvider: {
    type: "object"
  },
  application: {
    validator: function(e, r, n) {
      let i = {};
      r.id && (i.id = eh(`${e}.id`, r.id, n));
      r.version && (i.version = eh(`${e}.version`, r.version, n));
      return i;
    }
  },
  inspectors: {
    default: []
  }
};
let eu = /^(\w|\.|-)+$/;
function ec(e) {
  return e && e.replace(/\/+$/, "");
}
function eh(e, r, n) {
  if ("string" == typeof r && r.match(eu)) {
    if (!(r.length > 64)) return r;
    n.warn(eo.tagValueTooLong(e));
  } else n.warn(eo.invalidTagValue(e));
}
var ed = {
  baseOptionDefs: el,
  validate: function(e, r, n, i) {
    let s = R.extend({
      logger: {
        default: i
      }
    }, el, n);
    let o = {};
    function a(e) {
      R.onNextTick(() => {
        r && r.maybeReportError(new g.LDInvalidArgumentError(e));
      });
    }
    let h = R.extend({}, e || {});
    (function(e) {
      let r = e;
      Object.keys(o).forEach(e => {
        if (void 0 !== r[e]) {
          let n = o[e];
          i && i.warn(eo.deprecated(e, n));
          n && (void 0 === r[n] && (r[n] = r[e]), delete r[e]);
        }
      });
    })(h);
    validateLogger((h = function(e) {
      let r = R.extend({}, e);
      let n = e => {
        if (null === e) return "any";
        if (void 0 === e) return;
        if (Array.isArray(e)) return "array";
        let r = typeof e;
        return "boolean" === r || "string" === r || "number" === r || "function" === r ? r : "object";
      };
      Object.keys(e).forEach(o => {
        let h = e[o];
        if (null != h) {
          let d = s[o];
          if (void 0 === d) a(eo.unknownOption(o)); else {
            let s = d.type || n(d.$$default);
            let p = d.validator;
            if (p) {
              let n = p(o, e[o], i);
              void 0 !== n ? r[o] = n : delete r[o];
            } else if ("any" !== s) {
              let e = s.split("|");
              let i = n(h);
              0 > e.indexOf(i) ? "boolean" === s ? (r[o] = !!h, a(eo.wrongOptionTypeBoolean(o, i))) : (a(eo.wrongOptionType(o, s, i)), r[o] = d.$$default) : "number" === i && void 0 !== d.minimum && h < d.minimum && (a(eo.optionBelowMinimum(o, h, d.minimum)), r[o] = d.minimum);
            }
          }
        }
      });
      r.baseUrl = ec(r.baseUrl);
      r.streamUrl = ec(r.streamUrl);
      r.eventsUrl = ec(r.eventsUrl);
      return r;
    }(h = function(e) {
      let r = R.extend({}, e);
      Object.keys(s).forEach(e => {
        void 0 !== r[e] && null !== r[e] || (r[e] = s[e] && s[e].$$default);
      });
      return r;
    }(h))).logger);
    return h;
  },
  getTags: function(e) {
    let r = {};
    e && (e.application && void 0 !== e.application.id && null !== e.application.id && (r["application-id"] = [e.application.id]), e.application && void 0 !== e.application.version && null !== e.application.id && (r["application-version"] = [e.application.version]));
    return r;
  }
};
let {
  getLDUserAgentString
} = R;
var ep = {
  getLDHeaders: function(e, r) {
    if (r && !r.sendLDHeaders) return {};
    let n = {};
    n[e.userAgentHeaderName || "User-Agent"] = getLDUserAgentString(e);
    r && r.wrapperName && (n["X-LaunchDarkly-Wrapper"] = r.wrapperVersion ? r.wrapperName + "/" + r.wrapperVersion : r.wrapperName);
    let i = ed.getTags(r);
    let s = Object.keys(i);
    s.length && (n["x-launchdarkly-tags"] = s.sort().map(e => Array.isArray(i[e]) ? i[e].sort().map(r => `${e}/${r}`) : [`${e}/${i[e]}`]).reduce((e, r) => e.concat(r), []).join(" "));
    return n;
  },
  transformHeaders: function(e, r) {
    return r && r.requestHeaderTransform ? r.requestHeaderTransform({
      ...e
    }) : e;
  }
};
let {
  v1
} = et;
let {
  getLDHeaders,
  transformHeaders
} = ep;
var ey = function(e, r, n) {
  let i = "/a/" + r + ".gif";
  let s = R.extend({
    "Content-Type": "application/json"
  }, getLDHeaders(e, n));
  let o = e.httpFallbackPing;
  let a = {};
  a.sendChunk = (r, a, h, d) => {
    let p = JSON.stringify(r);
    let m = h ? null : v1();
    return d ? function r(i) {
      let o = h ? s : R.extend({}, s, {
        "X-LaunchDarkly-Event-Schema": "4",
        "X-LaunchDarkly-Payload-ID": m
      });
      return e.httpRequest("POST", a, transformHeaders(o, n), p).promise.then(e => {
        if (e) return e.status >= 400 && g.isHttpErrorRecoverable(e.status) && i ? r(!1) : function(e) {
          let r = {
            status: e.status
          };
          let n = e.header("date");
          if (n) {
            let e = Date.parse(n);
            e && (r.serverTime = e);
          }
          return r;
        }(e);
      }).catch(() => i ? r(!1) : Promise.reject());
    }(!0).catch(() => { }) : (o && o(a + i + "?d=" + R.base64URLEncode(p)), Promise.resolve());
  };
  a.sendEvents = function(r, n, i) {
    let s;
    if (!e.httpRequest) return Promise.resolve();
    let o = e.httpAllowsPost();
    s = o ? [r] : R.chunkEventsForUrl(2e3 - n.length, r);
    let h = [];
    for (let e = 0; e < s.length; e++) h.push(a.sendChunk(s[e], n, i, o));
    return Promise.all(h);
  };
  return a;
};
let {
  commonBasicLogger
} = en;
function eO(e) {
  return "string" == typeof e && "kind" !== e && e.match(/^(\w|\.|-)+$/);
}
function ex(e) {
  return e.includes("%") || e.includes(":") ? e.replace(/%/g, "%25").replace(/:/g, "%3A") : e;
}
var ew = {
  checkContext: function(e, r) {
    if (e) {
      if (r && (void 0 === e.kind || null === e.kind)) return void 0 !== e.key && null !== e.key;
      let n = e.key;
      let i = void 0 === e.kind ? "user" : e.kind;
      let s = eO(i);
      let o = "multi" === i || null != n && "" !== n;
      if ("multi" === i) {
        let r = Object.keys(e).filter(e => "kind" !== e);
        return o && r.every(e => eO(e)) && r.every(r => {
          let n = e[r].key;
          return null != n && "" !== n;
        });
      }
      return o && s;
    }
    return !1;
  },
  getContextKeys: function(e, r = commonBasicLogger()) {
    if (!e) return;
    let n = {};
    let {
      kind,
      key
    } = e;
    switch (kind) {
      case void 0:
        n.user = `${key}`;
        break;
      case "multi":
        Object.entries(e).filter(([e]) => "kind" !== e).forEach(([e, r]) => {
          r && r.key && (n[e] = r.key);
        });
        break;
      case null:
        r.warn(`null is not a valid context kind: ${e}`);
        break;
      case "":
        r.warn(`'' is not a valid context kind: ${e}`);
        break;
      default:
        n[kind] = `${key}`;
    }
    return n;
  },
  getContextKinds: function(e) {
    return e ? null === e.kind || void 0 === e.kind ? ["user"] : "multi" !== e.kind ? [e.kind] : Object.keys(e).filter(e => "kind" !== e) : [];
  },
  getCanonicalKey: function(e) {
    if (e) {
      if ((void 0 === e.kind || null === e.kind || "user" === e.kind) && e.key) return e.key;
      if ("multi" !== e.kind && e.key) return `${e.kind}:${ex(e.key)}`;
      if ("multi" === e.kind) return Object.keys(e).sort().filter(e => "kind" !== e).map(r => `${r}:${ex(e[r].key)}`).join(":");
    }
  }
};
let {
  getContextKinds
} = ew;
var e_ = function() {
  let e = {};
  let r = 0;
  let n = 0;
  let i = {};
  let s = {};
  e.summarizeEvent = e => {
    if ("feature" === e.kind) {
      let o = e.key + ":" + (null !== e.variation && void 0 !== e.variation ? e.variation : "") + ":" + (null !== e.version && void 0 !== e.version ? e.version : "");
      let a = i[o];
      let h = s[e.key];
      h || (h = new Set(), s[e.key] = h);
      (function(e) {
        return e.context ? getContextKinds(e.context) : e.contextKeys ? Object.keys(e.contextKeys) : [];
      })(e).forEach(e => h.add(e));
      a ? a.count = a.count + 1 : i[o] = {
        count: 1,
        key: e.key,
        version: e.version,
        variation: e.variation,
        value: e.value,
        default: e.$$default
      };
      (0 === r || e.creationDate < r) && (r = e.creationDate);
      e.creationDate > n && (n = e.creationDate);
    }
  };
  e.getSummary = () => {
    let e = {};
    let o = !0;
    for (let r of Object.values(i)) {
      let n = e[r.key];
      n || (n = {
        default: r.$$default,
        counters: [],
        contextKinds: [...s[r.key]]
      }, e[r.key] = n);
      let i = {
        value: r.value,
        count: r.count
      };
      void 0 !== r.variation && null !== r.variation && (i.variation = r.variation);
      void 0 !== r.version && null !== r.version ? i.version = r.version : i.unknown = !0;
      n.counters.push(i);
      o = !1;
    }
    return o ? null : {
      startDate: r,
      endDate: n,
      features: e
    };
  };
  e.clearSummary = () => {
    r = 0;
    n = 0;
    i = {};
    s = {};
  };
  return e;
};
function eS(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function eE(e) {
  return (e.startsWith("/") ? e.substring(1) : e).split("/").map(e => e.indexOf("~") >= 0 ? e.replace(/~1/g, "/").replace(/~0/g, "~") : e);
}
function eA(e) {
  return !e.startsWith("/");
}
function eC(e, r) {
  let n = eA(e);
  let i = eA(r);
  if (n && i) return e === r;
  if (n) {
    let n = eE(r);
    return 1 === n.length && e === n[0];
  }
  if (i) {
    let n = eE(e);
    return 1 === n.length && r === n[0];
  }
  return e === r;
}
function eT(e) {
  return `/${eS(e)}`;
}
var eI = {
  cloneExcluding: function(e, r) {
    let n = [];
    let i = {};
    let s = [];
    for (n.push(...Object.keys(e).map(r => ({
      key: r,
      ptr: eT(r),
      source: e,
      parent: i,
      visited: [e]
    }))); n.length;) {
      let e = n.pop();
      if (r.some(r => eC(r, e.ptr))) s.push(e.ptr); else {
        let r = e.source[e.key];
        if (null === r) e.parent[e.key] = r; else if (Array.isArray(r)) e.parent[e.key] = [...r]; else if ("object" == typeof r) {
          if (e.visited.includes(r)) continue;
          e.parent[e.key] = {};
          n.push(...Object.keys(r).map(n => {
            var i;
            var s;
            return {
              key: n,
              ptr: (i = e.ptr, s = eS(n), `${i}/${s}`),
              source: r,
              parent: e.parent[e.key],
              visited: [...e.visited, r]
            };
          }));
        } else e.parent[e.key] = r;
      }
    }
    return {
      cloned: i,
      excluded: s.sort()
    };
  },
  compare: eC,
  literalToReference: eT
};
var eP = function(e) {
  let r = {};
  let n = e.allAttributesPrivate;
  let i = e.privateAttributes || [];
  let s = ["key", "kind", "_meta", "anonymous"];
  let o = ["name", "ip", "firstName", "lastName", "email", "avatar", "country"];
  let a = e => {
    let r;
    if ("object" != typeof e || null === e || Array.isArray(e)) return;
    let {
      cloned,
      excluded
    } = eI.cloneExcluding(e, (r = e, (n ? Object.keys(r) : [...i, ...(r._meta && r._meta.privateAttributes || [])]).filter(e => !s.some(r => eI.compare(e, r)))));
    cloned.key = String(cloned.key);
    excluded.length && (cloned._meta || (cloned._meta = {}), cloned._meta.redactedAttributes = excluded);
    cloned._meta && (delete cloned._meta.privateAttributes, 0 === Object.keys(cloned._meta).length && delete cloned._meta);
    void 0 !== cloned.anonymous && (cloned.anonymous = !!cloned.anonymous);
    return cloned;
  };
  r.filter = e => void 0 === e.kind || null === e.kind ? a((e => {
    let r = {
      ...(e.custom || {}),
      kind: "user",
      key: e.key
    };
    for (let n of (void 0 !== e.anonymous && (r.anonymous = !!e.anonymous), o)) {
      delete r[n];
      void 0 !== e[n] && null !== e[n] && (r[n] = String(e[n]));
    }
    void 0 !== e.privateAttributeNames && null !== e.privateAttributeNames && (r._meta = r._meta || {}, r._meta.privateAttributes = e.privateAttributeNames.map(e => e.startsWith("/") ? eI.literalToReference(e) : e));
    return r;
  })(e)) : "multi" === e.kind ? (e => {
    let r = {
      kind: e.kind
    };
    for (let n of Object.keys(e)) if ("kind" !== n) {
      let i = a(e[n]);
      i && (r[n] = i);
    }
    return r;
  })(e) : a(e);
  return r;
};
let {
  getContextKeys
} = ew;
var eM = function(e, r, n, i = null, s = null, o = null) {
  let a = {};
  let h = o || ey(e, n, r);
  let d = R.appendUrlPath(r.eventsUrl, "/events/bulk/" + n);
  let p = e_();
  let m = eP(r);
  let v = r.samplingInterval;
  let y = r.eventCapacity;
  let b = r.flushInterval;
  let O = r.logger;
  let x;
  let w = [];
  let k = 0;
  let _ = !1;
  let S = !1;
  function E() {
    return 0 === v || 0 === Math.floor(Math.random() * v);
  }
  function A(e) {
    let r = R.extend({}, e);
    "identify" === e.kind ? r.context = m.filter(e.context) : (r.contextKeys = getContextKeys(e.context, O), delete r.context);
    "feature" === e.kind && (delete r.trackEvents, delete r.debugEventsUntilDate);
    return r;
  }
  function C(e) {
    w.length < y ? (w.push(e), S = !1) : (S || (S = !0, O.warn(eo.eventCapacityExceeded())), i && i.incrementDroppedEvents());
  }
  a.enqueue = function(e) {
    var r;
    if (_) return;
    let n = !1;
    let i = !1;
    if (p.summarizeEvent(e), "feature" === e.kind ? E() && (n = !!e.trackEvents, i = !!(r = e).debugEventsUntilDate && r.debugEventsUntilDate > k && r.debugEventsUntilDate > new Date().getTime()) : n = E(), n && C(A(e)), i) {
      let r = R.extend({}, e, {
        kind: "debug"
      });
      r.context = m.filter(r.context);
      delete r.trackEvents;
      delete r.debugEventsUntilDate;
      C(r);
    }
  };
  a.flush = function() {
    if (_) return Promise.resolve();
    let e = w;
    let r = p.getSummary();
    p.clearSummary();
    r && (r.kind = "summary", e.push(r));
    i && i.setEventsInLastBatch(e.length);
    return 0 === e.length ? Promise.resolve() : (w = [], O.debug(eo.debugPostingEvents(e.length)), h.sendEvents(e, d).then(e => {
      let r = e && e[0];
      r && (r.serverTime && (k = r.serverTime), g.isHttpErrorRecoverable(r.status) || (_ = !0), r.status >= 400 && R.onNextTick(() => {
        s.maybeReportError(new g.LDUnexpectedResponseError(eo.httpErrorMessage(r.status, "event posting", "some events were dropped")));
      }));
    }));
  };
  a.start = function() {
    let e = () => {
      a.flush();
      x = setTimeout(e, b);
    };
    x = setTimeout(e, b);
  };
  a.stop = function() {
    clearTimeout(x);
  };
  return a;
};
var eD = function(e) {
  let r = {};
  let n = {};
  r.on = function(e, r, i) {
    n[e] = n[e] || [];
    n[e] = n[e].concat({
      handler: r,
      context: i
    });
  };
  r.off = function(e, r, i) {
    if (n[e]) for (let s = 0; s < n[e].length; s++) n[e][s].handler === r && n[e][s].context === i && (n[e] = n[e].slice(0, s).concat(n[e].slice(s + 1)));
  };
  r.emit = function(e) {
    if (!n[e]) return;
    let r = n[e].slice(0);
    for (let e = 0; e < r.length; e++) r[e].handler.apply(r[e].context, Array.prototype.slice.call(arguments, 1));
  };
  r.getEvents = function() {
    return Object.keys(n);
  };
  r.getEventListenerCount = function(e) {
    return n[e] ? n[e].length : 0;
  };
  r.maybeReportError = function(r) {
    r && (n.error ? this.emit("error", r) : (e || console).error(r.message));
  };
  return r;
};
let eN = "ready";
let e$ = "initialized";
let eL = "failed";
var ej = function(e) {
  let r = !1;
  let n = !1;
  let i = null;
  let s = null;
  let o = new Promise(r => {
    let n = () => {
      e.off(eN, n);
      r();
    };
    e.on(eN, n);
  }).catch(() => { });
  return {
    getInitializationPromise: () => s || (r ? Promise.resolve() : n ? Promise.reject(i) : s = new Promise((r, n) => {
      let i = () => {
        e.off(e$, i);
        r();
      };
      let s = r => {
        e.off(eL, s);
        n(r);
      };
      e.on(e$, i);
      e.on(eL, s);
    })),
    getReadyPromise: () => o,
    signalSuccess: () => {
      r || n || (r = !0, e.emit(e$), e.emit(eN));
    },
    signalFailure: s => {
      r || n || (n = !0, i = s, e.emit(eL, s), e.emit(eN));
      e.maybeReportError(s);
    }
  };
};
var ez = function(e, r, n, i) {
  let s = {};
  function o() {
    let e = "";
    let s = i.getContext();
    s && (e = n || R.btoa(JSON.stringify(s)));
    return "ld:" + r + ":" + e;
  }
  s.loadFlags = () => e.get(o()).then(e => {
    if (null == e) return null;
    try {
      let r = JSON.parse(e);
      if (r) {
        let e = r.$schema;
        void 0 === e || e < 1 ? r = R.transformValuesToVersionedValues(r) : delete r.$schema;
      }
      return r;
    } catch (e) {
      return s.clearFlags().then(() => null);
    }
  });
  s.saveFlags = r => {
    let n = R.extend({}, r, {
      $schema: 1
    });
    return e.set(o(), JSON.stringify(n));
  };
  s.clearFlags = () => e.clear(o());
  return s;
};
var eZ = function(e, r) {
  let n = {};
  let i = !1;
  let s = e => {
    i || (i = !0, r.warn(eo.localStorageUnavailable(e)));
  };
  n.isEnabled = () => !!e;
  n.get = r => new Promise(n => {
    e ? e.get(r).then(n).catch(e => {
      s(e);
      n(void 0);
    }) : n(void 0);
  });
  n.set = (r, n) => new Promise(i => {
    e ? e.set(r, n).then(() => i(!0)).catch(e => {
      s(e);
      i(!1);
    }) : i(!1);
  });
  n.clear = r => new Promise(n => {
    e ? e.clear(r).then(() => n(!0)).catch(e => {
      s(e);
      n(!1);
    }) : n(!1);
  });
  return n;
};
let {
  appendUrlPath,
  base64URLEncode,
  objectHasOwnProperty
} = R;
let {
  getLDHeaders: _getLDHeaders,
  transformHeaders: _transformHeaders
} = ep;
let {
  isHttpErrorRecoverable
} = g;
var eW = function(e, r, n, i) {
  let s = r.streamUrl;
  let o = r.logger;
  let a = {};
  let h = appendUrlPath(s, "/eval/" + n);
  let d = r.useReport;
  let p = r.evaluationReasons;
  let g = r.streamReconnectDelay;
  let m = _getLDHeaders(e, r);
  let v;
  let y = !1;
  let b = null;
  let O = null;
  let x = null;
  let w = null;
  let k = null;
  let _ = 0;
  function S() {
    var e;
    let r = (e = function() {
      let e = g * Math.pow(2, _);
      return e > 3e4 ? 3e4 : e;
    }()) - Math.trunc(.5 * Math.random() * e);
    _ += 1;
    return r;
  }
  function E(e) {
    if (e.status && "number" == typeof e.status && !isHttpErrorRecoverable(e.status)) {
      T();
      o.error(eo.unrecoverableStreamError(e));
      return void (O && (clearTimeout(O), O = null));
    }
    let r = S();
    y || (o.warn(eo.streamError(e, r)), y = !0);
    I(!1);
    T();
    A(r);
  }
  function A(e) {
    O || (e ? O = setTimeout(C, e) : C());
  }
  function C() {
    let i;
    O = null;
    let a = "";
    let g = {
      headers: m,
      readTimeoutMillis: 3e5
    };
    if (e.eventSourceFactory) {
      for (let m in null != w && (a = "h=" + w), d ? e.eventSourceAllowsReport ? (i = h, g.method = "REPORT", g.headers["Content-Type"] = "application/json", g.body = JSON.stringify(x)) : (i = appendUrlPath(s, "/ping/" + n), a = "") : i = h + "/" + base64URLEncode(JSON.stringify(x)), g.headers = _transformHeaders(g.headers, r), p && (a = a + (a ? "&" : "") + "withReasons=true"), i = i + (a ? "?" : "") + a, T(), o.info(eo.streamConnecting(i)), v = new Date().getTime(), b = e.eventSourceFactory(i, g), k) objectHasOwnProperty(k, m) && b.addEventListener(m, k[m]);
      b.onerror = E;
      b.onopen = () => {
        _ = 0;
      };
    }
  }
  function T() {
    b && (o.info(eo.streamClosing()), b.close(), b = null);
  }
  function I(e) {
    v && i && i.recordStreamInit(v, !e, new Date().getTime() - v);
    v = null;
  }
  a.connect = function(e, r, n) {
    for (let i in x = e, w = r, k = {}, n || {}) k[i] = function(e) {
      y = !1;
      I(!0);
      n[i] && n[i](e);
    };
    A();
  };
  a.disconnect = function() {
    clearTimeout(O);
    O = null;
    T();
  };
  a.isConnected = function() {
    return !!(b && e.eventSourceIsActive && e.eventSourceIsActive(b));
  };
  return a;
};
var eY = function(e) {
  let r;
  let n;
  let i;
  let s;
  let o = {
    addPromise: (o, a) => {
      r = o;
      n && n();
      n = a;
      o.then(n => {
        r === o && (i(n), e && e());
      }, n => {
        r === o && (s(n), e && e());
      });
    }
  };
  o.resultPromise = new Promise((e, r) => {
    i = e;
    s = r;
  });
  return o;
};
let {
  transformHeaders: _transformHeaders2,
  getLDHeaders: _getLDHeaders2
} = ep;
let eH = "application/json";
var eK = function(e, r, n) {
  let i = r.baseUrl;
  let s = r.useReport;
  let o = r.evaluationReasons;
  let a = r.logger;
  let h = {};
  let d = {};
  function p(n, i) {
    if (!e.httpRequest) return new Promise((e, r) => {
      r(new g.LDFlagFetchError(eo.httpUnavailable()));
    });
    let s = i ? "REPORT" : "GET";
    let o = _getLDHeaders2(e, r);
    i && (o["Content-Type"] = eH);
    let a = d[n];
    a || (a = eY(() => {
      delete d[n];
    }), d[n] = a);
    let h = e.httpRequest(s, n, _transformHeaders2(o, r), i);
    let p = h.promise.then(e => {
      if (200 === e.status) {
        if (e.header("content-type") && e.header("content-type").substring(0, 16) === eH) return JSON.parse(e.body);
        {
          let r = eo.invalidContentType(e.header("content-type") || "");
          return Promise.reject(new g.LDFlagFetchError(r));
        }
      }
      return Promise.reject(function(e) {
        return 404 === e.status ? new g.LDInvalidEnvironmentIdError(eo.environmentNotFound()) : new g.LDFlagFetchError(eo.errorFetchingFlags(e.statusText || String(e.status)));
      }(e));
    }, e => Promise.reject(new g.LDFlagFetchError(eo.networkError(e))));
    a.addPromise(p, () => {
      h.cancel && h.cancel();
    });
    return a.resultPromise;
  }
  h.fetchJSON = function(e) {
    return p(R.appendUrlPath(i, e), null);
  };
  h.fetchFlagSettings = function(e, r) {
    let h;
    let d;
    let g = "";
    s ? (h = [i, "/sdk/evalx/", n, "/context"].join(""), d = JSON.stringify(e)) : h = [i, "/sdk/evalx/", n, "/contexts/", R.base64URLEncode(JSON.stringify(e))].join("");
    r && (g = "h=" + r);
    o && (g = g + (g ? "&" : "") + "withReasons=true");
    h = h + (g ? "?" : "") + g;
    a.debug(eo.debugPolling(h));
    return p(h, d);
  };
  return h;
};
var eJ = function(e, r) {
  let n;
  let i = {};
  i.setContext = function(e) {
    (n = R.sanitizeContext(e)) && r && r(R.clone(n));
  };
  i.getContext = function() {
    return n ? R.clone(n) : null;
  };
  e && i.setContext(e);
  return i;
};
let {
  v1: _v
} = et;
let {
  getContextKinds: _getContextKinds
} = ew;
var e2 = function(e) {
  function r(e) {
    return null == e || "user" === e ? "ld:$anonUserId" : `ld:$contextKey:${e}`;
  }
  function n(n, i) {
    return null !== i.key && void 0 !== i.key ? (i.key = i.key.toString(), Promise.resolve(i)) : i.anonymous ? function(n) {
      return e.get(r(n));
    }(n).then(s => {
      if (s) {
        i.key = s;
        return i;
      }
      {
        let s = _v();
        i.key = s;
        return function(n, i) {
          return e.set(r(i), n);
        }(s, n).then(() => i);
      }
    }) : Promise.reject(new g.LDInvalidUserError(eo.invalidContext()));
  }
  this.processContext = e => {
    if (!e) return Promise.reject(new g.LDInvalidUserError(eo.contextNotSpecified()));
    let r = R.clone(e);
    return "multi" === e.kind ? Promise.all(_getContextKinds(r).map(e => n(e, r[e]))).then(() => r) : n(e.kind, r);
  };
};
let {
  v1: _v2
} = et;
let {
  baseOptionDefs
} = ed;
let {
  appendUrlPath: _appendUrlPath
} = R;
var e4 = {
  DiagnosticId: function(e) {
    let r = {
      diagnosticId: _v2()
    };
    e && (r.sdkKeySuffix = e.length > 6 ? e.substring(e.length - 6) : e);
    return r;
  },
  DiagnosticsAccumulator: function(e) {
    let r;
    let n;
    let i;
    let s;
    function o(e) {
      r = e;
      n = 0;
      i = 0;
      s = [];
    }
    o(e);
    return {
      getProps: () => ({
        dataSinceDate: r,
        droppedEvents: n,
        eventsInLastBatch: i,
        streamInits: s
      }),
      setProps: e => {
        r = e.dataSinceDate;
        n = e.droppedEvents || 0;
        i = e.eventsInLastBatch || 0;
        s = e.streamInits || [];
      },
      incrementDroppedEvents: () => {
        n++;
      },
      setEventsInLastBatch: e => {
        i = e;
      },
      recordStreamInit: (e, r, n) => {
        let i = {
          timestamp: e,
          failed: r,
          durationMillis: n
        };
        s.push(i);
      },
      reset: o
    };
  },
  DiagnosticsManager: function(e, r, n, i, s, o, a) {
    let h = !!e.diagnosticUseCombinedEvent;
    let d = "ld:" + s + ":$diagnostics";
    let p = _appendUrlPath(o.eventsUrl, "/events/diagnostic/" + s);
    let g = o.diagnosticRecordingInterval;
    let m = n;
    let v;
    let y;
    let b = !!o.streaming;
    let O = {};
    function x() {
      return {
        sdk: _(),
        configuration: S(),
        platform: e.diagnosticPlatformData
      };
    }
    function w(e) {
      o.logger && o.logger.debug(eo.debugPostingDiagnosticEvent(e));
      i.sendEvents(e, p, !0).then(() => { }).catch(() => { });
    }
    function k() {
      w(function() {
        let e = new Date().getTime();
        let r = {
          kind: h ? "diagnostic-combined" : "diagnostic",
          id: a,
          creationDate: e,
          ...m.getProps()
        };
        h && (r = {
          ...r,
          ...x()
        });
        m.reset(e);
        return r;
      }());
      y = setTimeout(k, g);
      v = new Date().getTime();
      h && function() {
        if (r.isEnabled()) {
          let e = {
            ...m.getProps()
          };
          r.set(d, JSON.stringify(e));
        }
      }();
    }
    function _() {
      let r = {
        ...e.diagnosticSdkData
      };
      o.wrapperName && (r.wrapperName = o.wrapperName);
      o.wrapperVersion && (r.wrapperVersion = o.wrapperVersion);
      return r;
    }
    function S() {
      return {
        customBaseURI: o.baseUrl !== baseOptionDefs.baseUrl.$$default,
        customStreamURI: o.streamUrl !== baseOptionDefs.streamUrl.$$default,
        customEventsURI: o.eventsUrl !== baseOptionDefs.eventsUrl.$$default,
        eventsCapacity: o.eventCapacity,
        eventsFlushIntervalMillis: o.flushInterval,
        reconnectTimeMillis: o.streamReconnectDelay,
        streamingDisabled: !b,
        allAttributesPrivate: !!o.allAttributesPrivate,
        diagnosticRecordingIntervalMillis: o.diagnosticRecordingInterval,
        usingSecureMode: !!o.hash,
        bootstrapMode: !!o.bootstrap,
        fetchGoalsDisabled: !o.fetchGoals,
        sendEventsOnlyForVariation: !!o.sendEventsOnlyForVariation
      };
    }
    O.start = () => {
      h ? function(e) {
        if (!r.isEnabled()) return e(!1);
        r.get(d).then(r => {
          if (r) try {
            let e = JSON.parse(r);
            m.setProps(e);
            v = e.dataSinceDate;
          } catch (e) { }
          e(!0);
        }).catch(() => {
          e(!1);
        });
      }(e => {
        if (e) {
          let e = (v || 0) + g;
          let r = new Date().getTime();
          r >= e ? k() : y = setTimeout(k, e - r);
        } else 0 === Math.floor(4 * Math.random()) ? k() : y = setTimeout(k, g);
      }) : (w({
        kind: "diagnostic-init",
        id: a,
        creationDate: m.getProps().dataSinceDate,
        ...x()
      }), y = setTimeout(k, g));
    };
    O.stop = () => {
      y && clearTimeout(y);
    };
    O.setStreaming = e => {
      b = e;
    };
    return O;
  }
};
var e8 = function(e, r) {
  let n = !1;
  let i = {
    type: e.type,
    name: e.name,
    method: (...s) => {
      try {
        e.method(...s);
      } catch {
        n || (n = !0, r.warn(eo.inspectorMethodError(i.type, i.name)));
      }
    }
  };
  return i;
};
let {
  onNextTick
} = R;
let e9 = {
  flagUsed: "flag-used",
  flagDetailsChanged: "flag-details-changed",
  flagDetailChanged: "flag-detail-changed",
  clientIdentityChanged: "client-identity-changed"
};
Object.freeze(e9);
let {
  commonBasicLogger: _commonBasicLogger
} = en;
let {
  checkContext,
  getContextKeys: _getContextKeys
} = ew;
let {
  InspectorTypes,
  InspectorManager
} = {
  InspectorTypes: e9,
  InspectorManager: function(e, r) {
    let n = {};
    let i = {
      [e9.flagUsed]: [],
      [e9.flagDetailsChanged]: [],
      [e9.flagDetailChanged]: [],
      [e9.clientIdentityChanged]: []
    };
    let s = e && e.map(e => e8(e, r));
    s && s.forEach(e => {
      Object.prototype.hasOwnProperty.call(i, e.type) ? i[e.type].push(e) : r.warn(eo.invalidInspector(e.type, e.name));
    });
    n.hasListeners = e => i[e] && i[e].length;
    n.onFlagUsed = (e, r, n) => {
      i[e9.flagUsed].length && onNextTick(() => {
        i[e9.flagUsed].forEach(i => i.method(e, r, n));
      });
    };
    n.onFlags = e => {
      i[e9.flagDetailsChanged].length && onNextTick(() => {
        i[e9.flagDetailsChanged].forEach(r => r.method(e));
      });
    };
    n.onFlagChanged = (e, r) => {
      i[e9.flagDetailChanged].length && onNextTick(() => {
        i[e9.flagDetailChanged].forEach(n => n.method(e, r));
      });
    };
    n.onIdentityChanged = e => {
      i[e9.clientIdentityChanged].length && onNextTick(() => {
        i[e9.clientIdentityChanged].forEach(r => r.method(e));
      });
    };
    return n;
  }
};
let ts = "change";
let to = "internal-change";
var ta = {
  initialize: function(e, r, n, i, s) {
    let o = function() {
      return n && n.logger ? n.logger : s && s.logger && s.logger.$$default || _commonBasicLogger("warn");
    }();
    let a = eD(o);
    let h = ej(a);
    let d = ed.validate(n, a, s, o);
    let p = InspectorManager(d.inspectors, o);
    let m = d.sendEvents;
    let v = e;
    let y = d.hash;
    let b = eZ(i.localStorage, o);
    let O = ey(i, v, d);
    let x = d.sendEvents && !d.diagnosticOptOut;
    let w = x ? e4.DiagnosticId(v) : null;
    let k = x ? e4.DiagnosticsAccumulator(new Date().getTime()) : null;
    let _ = x ? e4.DiagnosticsManager(i, b, k, O, v, d, w) : null;
    let S = eW(i, d, v, k);
    let E = d.eventProcessor || eM(i, d, v, k, a, O);
    let A = eK(i, d, v);
    let C;
    let T;
    let I;
    let P = {};
    let M = d.streaming;
    let D = !1;
    let N = !1;
    let $ = !0;
    let L = d.stateProvider;
    let j = eJ(null, function(e) {
      (function(e) {
        !L && e && F({
          kind: "identify",
          context: e,
          creationDate: new Date().getTime()
        });
      })(e);
      p.hasListeners(InspectorTypes.clientIdentityChanged) && p.onIdentityChanged(j.getContext());
    });
    let z = new e2(b);
    let Z = b.isEnabled() ? ez(b, v, y, j) : null;
    function F(e) {
      v && (L && L.enqueueEvent && L.enqueueEvent(e) || (e.context ? ($ = !1, !m || N || i.isDoNotTrack() || (o.debug(eo.debugEnqueueingEvent(e.kind)), E.enqueue(e))) : $ && (o.warn(eo.eventWithoutContext()), $ = !1)));
    }
    function U(e, r) {
      p.hasListeners(InspectorTypes.flagDetailChanged) && p.onFlagChanged(e.key, W(r));
    }
    function Q() {
      p.hasListeners(InspectorTypes.flagDetailsChanged) && p.onFlags(Object.entries(P).map(([e, r]) => ({
        key: e,
        detail: W(r)
      })).reduce((e, r) => (e[r.key] = r.detail, e), {}));
    }
    function V(e, r, n, i) {
      let s = j.getContext();
      let o = new Date();
      let a = {
        kind: "feature",
        key: e,
        context: s,
        value: r ? r.value : null,
        variation: r ? r.variationIndex : null,
        default: n,
        creationDate: o.getTime()
      };
      let h = P[e];
      h && (a.version = h.flagVersion ? h.flagVersion : h.version, a.trackEvents = h.trackEvents, a.debugEventsUntilDate = h.debugEventsUntilDate);
      (i || h && h.trackReason) && r && (a.reason = r.reason);
      F(a);
    }
    function B(e) {
      return checkContext(e, !1) ? Promise.resolve(e) : Promise.reject(new g.LDInvalidUserError(eo.invalidContext()));
    }
    function q(e, r, n, i, s) {
      let o;
      if (P && R.objectHasOwnProperty(P, e) && P[e] && !P[e].deleted) {
        let n = P[e];
        o = W(n);
        null !== n.value && void 0 !== n.value || (o.value = r);
      } else o = {
        value: r,
        variationIndex: null,
        reason: {
          kind: "ERROR",
          errorKind: "FLAG_NOT_FOUND"
        }
      };
      n && V(e, o, r, i);
      s || function(e, r) {
        p.hasListeners(InspectorTypes.flagUsed) && p.onFlagUsed(e, r, j.getContext());
      }(e, o);
      return o;
    }
    function W(e) {
      return {
        value: e.value,
        variationIndex: void 0 === e.variation ? null : e.variation,
        reason: e.reason || null
      };
    }
    function Y() {
      if (T = !0, !j.getContext()) return;
      let e = e => {
        try {
          return JSON.parse(e);
        } catch (e) {
          return void a.maybeReportError(new g.LDInvalidDataError(eo.invalidData()));
        }
      };
      S.connect(j.getContext(), y, {
        ping: function() {
          o.debug(eo.debugStreamPing());
          let e = j.getContext();
          A.fetchFlagSettings(e, y).then(r => {
            R.deepEquals(e, j.getContext()) && X(r || {});
          }).catch(e => {
            a.maybeReportError(new g.LDFlagFetchError(eo.errorFetchingFlags(e)));
          });
        },
        put: function(r) {
          let n = e(r.data);
          n && (o.debug(eo.debugStreamPut()), X(n));
        },
        patch: function(r) {
          let n = e(r.data);
          if (!n) return;
          let i = P[n.key];
          if (i && i.version && n.version && !(i.version < n.version)) o.debug(eo.debugStreamPatchIgnored(n.key)); else {
            o.debug(eo.debugStreamPatch(n.key));
            let e = {};
            let r = R.extend({}, n);
            delete r.key;
            P[n.key] = r;
            let s = W(r);
            e[n.key] = i ? {
              previous: i.value,
              current: s
            } : {
              current: s
            };
            H(e);
            U(n, r);
          }
        },
        delete: function(r) {
          let n = e(r.data);
          if (n) {
            if (!P[n.key] || P[n.key].version < n.version) {
              o.debug(eo.debugStreamDelete(n.key));
              let e = {};
              P[n.key] && !P[n.key].deleted && (e[n.key] = {
                previous: P[n.key].value
              });
              P[n.key] = {
                version: n.version,
                deleted: !0
              };
              U(n, P[n.key]);
              H(e);
            } else o.debug(eo.debugStreamDeleteIgnored(n.key));
          }
        }
      });
    }
    function G() {
      T && (S.disconnect(), T = !1);
    }
    function X(e) {
      let r = {};
      if (!e) return Promise.resolve();
      for (let n in P) R.objectHasOwnProperty(P, n) && P[n] && (e[n] && !R.deepEquals(e[n].value, P[n].value) ? r[n] = {
        previous: P[n].value,
        current: W(e[n])
      } : e[n] && !e[n].deleted || (r[n] = {
        previous: P[n].value
      }));
      for (let n in e) R.objectHasOwnProperty(e, n) && e[n] && (!P[n] || P[n].deleted) && (r[n] = {
        current: W(e[n])
      });
      P = {
        ...e
      };
      Q();
      return H(r).catch(() => { });
    }
    function H(e) {
      let r = Object.keys(e);
      if (r.length > 0) {
        let n = {};
        r.forEach(r => {
          let i = e[r].current;
          let s = i ? i.value : void 0;
          let o = e[r].previous;
          a.emit(ts + ":" + r, s, o);
          n[r] = i ? {
            current: s,
            previous: o
          } : {
            previous: o
          };
        });
        a.emit(ts, n);
        a.emit(to, P);
        d.sendEventsOnlyForVariation || L || r.forEach(r => {
          V(r, e[r].current);
        });
      }
      return C && Z ? Z.saveFlags(P) : Promise.resolve();
    }
    function K() {
      let e = M || I && void 0 === M;
      e && !T ? Y() : !e && T && G();
      _ && _.setStreaming(e);
    }
    function J(e) {
      return e === ts || e.substr(0, 7) === ts + ":";
    }
    if ("string" == typeof d.bootstrap && "LOCALSTORAGE" === d.bootstrap.toUpperCase() && (Z ? C = !0 : o.warn(eo.localStorageUnavailable())), "object" == typeof d.bootstrap && (P = function(e) {
      let r = Object.keys(e);
      let n = "$flagsState";
      let i = "$valid";
      let s = e[n];
      !s && r.length && o.warn(eo.bootstrapOldFormat());
      !1 === e[i] && o.warn(eo.bootstrapInvalid());
      let a = {};
      r.forEach(r => {
        if (r !== n && r !== i) {
          let n = {
            value: e[r]
          };
          s && s[r] ? n = R.extend(n, s[r]) : n.version = 0;
          a[r] = n;
        }
      });
      return a;
    }(d.bootstrap)), L) {
      let e = L.getInitialState();
      e ? ee(e) : L.on("init", ee);
      L.on("update", function(e) {
        e.context && j.setContext(e.context);
        e.flags && X(e.flags);
      });
    } else (function() {
      return e ? z.processContext(r).then(B).then(e => (j.setContext(e), "object" == typeof d.bootstrap ? et() : C ? Z.loadFlags().then(e => null == e ? (P = {}, A.fetchFlagSettings(j.getContext(), y).then(e => X(e || {})).then(et).catch(e => {
        er(new g.LDFlagFetchError(eo.errorFetchingFlags(e)));
      })) : (P = e, R.onNextTick(et), A.fetchFlagSettings(j.getContext(), y).then(e => X(e)).catch(e => a.maybeReportError(e)))) : A.fetchFlagSettings(j.getContext(), y).then(e => {
        P = e || {};
        Q();
        et();
      }).catch(e => {
        P = {};
        er(e);
      }))) : Promise.reject(new g.LDInvalidEnvironmentIdError(eo.environmentNotSpecified()));
    })().catch(er);
    function ee(e) {
      v = e.environment;
      j.setContext(e.context);
      P = {
        ...e.flags
      };
      R.onNextTick(et);
    }
    function et() {
      o.info(eo.clientInitialized());
      D = !0;
      K();
      h.signalSuccess();
    }
    function er(e) {
      h.signalFailure(e);
    }
    return {
      client: {
        waitForInitialization: () => h.getInitializationPromise(),
        waitUntilReady: () => h.getReadyPromise(),
        identify: function(e, r, n) {
          if (N) return R.wrapPromiseCallback(Promise.resolve({}), n);
          if (L) {
            o.warn(eo.identifyDisabled());
            return R.wrapPromiseCallback(Promise.resolve(R.transformVersionedValuesToValues(P)), n);
          }
          let i = C && Z ? Z.clearFlags() : Promise.resolve();
          return R.wrapPromiseCallback(i.then(() => z.processContext(e)).then(B).then(e => A.fetchFlagSettings(e, r).then(n => {
            let i = R.transformVersionedValuesToValues(n);
            j.setContext(e);
            y = r;
            return n ? X(n).then(() => i) : i;
          })).then(e => (T && Y(), e)).catch(e => (a.maybeReportError(e), Promise.reject(e))), n);
        },
        getContext: function() {
          return j.getContext();
        },
        variation: function(e, r) {
          return q(e, r, !0, !1, !1).value;
        },
        variationDetail: function(e, r) {
          return q(e, r, !0, !0, !1);
        },
        track: function(e, r, n) {
          if ("string" != typeof e) return void a.maybeReportError(new g.LDInvalidEventKeyError(eo.unknownCustomEventKey(e)));
          i.customEventFilter && !i.customEventFilter(e) && o.warn(eo.unknownCustomEventKey(e));
          let s = j.getContext();
          let h = {
            kind: "custom",
            key: e,
            context: s,
            url: i.getCurrentUrl(),
            creationDate: new Date().getTime()
          };
          s && s.anonymous && (h.contextKind = s.anonymous ? "anonymousUser" : "user");
          null != r && (h.data = r);
          null != n && (h.metricValue = n);
          F(h);
        },
        on: function(e, r, n) {
          J(e) ? (I = !0, D && K(), a.on(e, r, n)) : a.on(...arguments);
        },
        off: function(e) {
          if (a.off(...arguments), J(e)) {
            let e = !1;
            a.getEvents().forEach(r => {
              J(r) && a.getEventListenerCount(r) > 0 && (e = !0);
            });
            e || (I = !1, T && void 0 === M && G());
          }
        },
        setStreaming: function(e) {
          let r = e;
          r !== M && (M = r, K());
        },
        flush: function(e) {
          return R.wrapPromiseCallback(m ? E.flush() : Promise.resolve(), e);
        },
        allFlags: function() {
          let e = {};
          if (!P) return e;
          for (let r in P) R.objectHasOwnProperty(P, r) && !P[r].deleted && (e[r] = q(r, null, !d.sendEventsOnlyForVariation, !1, !0).value);
          return e;
        },
        close: function(e) {
          if (N) return R.wrapPromiseCallback(Promise.resolve(), e);
          let r = () => {
            N = !0;
            P = {};
          };
          let n = Promise.resolve().then(() => {
            if (G(), _ && _.stop(), m) {
              E.stop();
              return E.flush();
            }
          }).then(r).catch(r);
          return R.wrapPromiseCallback(n, e);
        }
      },
      options: d,
      emitter: a,
      ident: j,
      logger: o,
      requestor: A,
      start: function() {
        m && (_ && _.start(), E.start());
      },
      enqueueEvent: F,
      getFlagsInternal: function() {
        return P;
      },
      getEnvironmentId: () => v,
      internalChangeEventName: to
    };
  },
  commonBasicLogger: _commonBasicLogger,
  errors: g,
  messages: eo
};
var tl = ta.initialize;
var tu = ta.errors;
function tc(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    }));
    n.push.apply(n, i);
  }
  return n;
}
function th(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = null != $$arguments[r] ? $$arguments[r] : {};
    r % 2 ? tc(Object(n), !0).forEach(function(r) {
      td(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function td(e, r, n) {
  (r = function(e) {
    var r = function(e, r) {
      if ("object" != typeof e || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(e, r || "default");
        if ("object" != typeof i) return i;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(e);
    }(e, "string");
    return "symbol" == typeof r ? r : String(r);
  }(r)) in e ? Object.defineProperty(e, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = n;
  return e;
}
ta.messages;
ta.commonBasicLogger;
var tf = {
  promise: Promise.resolve({
    status: 200,
    header: function() {
      return null;
    },
    body: null
  })
};
function tp(e, r, n, i, s) {
  if (s && !function() {
    var e = window.navigator && window.navigator.userAgent;
    if (e) {
      var r = e.match(/Chrom(e|ium)\/([0-9]+)\./);
      if (r) return 73 > parseInt(r[2], 10);
    }
    return !0;
  }()) return tf;
  var o;
  var a = new window.XMLHttpRequest();
  for (var h in a.open(e, r, !s), n || {}) Object.prototype.hasOwnProperty.call(n, h) && a.setRequestHeader(h, n[h]);
  if (s) {
    try {
      a.send(i);
    } catch (e) { }
    return tf;
  }
  return {
    promise: new Promise(function(e, r) {
      a.addEventListener("load", function() {
        o || e({
          status: a.status,
          header: function(e) {
            return a.getResponseHeader(e);
          },
          body: a.responseText
        });
      });
      a.addEventListener("error", function() {
        o || r(Error());
      });
      a.send(i);
    }),
    cancel: function() {
      o = !0;
      a.abort();
    }
  };
}
var tg = e => {
  if ("string" != typeof e) throw TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
function tm(e, r, n, i) {
  var s;
  var o;
  var a = (("substring" === e.kind || "regex" === e.kind) && i.includes("/") ? r : r.replace(i, "")).replace(n, "");
  switch (e.kind) {
    case "exact":
      o = r;
      s = RegExp("^" + tg(e.url) + "/?$");
      break;
    case "canonical":
      o = a;
      s = RegExp("^" + tg(e.url) + "/?$");
      break;
    case "substring":
      o = a;
      s = RegExp(".*" + tg(e.substring) + ".*$");
      break;
    case "regex":
      o = a;
      s = new RegExp(e.pattern);
      break;
    default:
      return !1;
  }
  return s.test(o);
}
function tv(e, r) {
  for (n = {}, i = null, s = [], o = 0, void 0; o < e.length; o++) {
    var n;
    var i;
    var s;
    var o;
    for (a = e[o], h = a.urls || [], d = 0, void 0; d < h.length; d++) {
      var a;
      var h;
      var d;
      if (tm(h[d], window.location.href, window.location.search, window.location.hash)) {
        "pageview" === a.kind ? r("pageview", a) : (s.push(a), r("click_pageview", a));
        break;
      }
    }
  }
  s.length > 0 && (i = function(e) {
    for (n = function(e, r) {
      for (n = [], i = 0, void 0; i < r.length; i++) {
        var n;
        var i;
        for (s = e.target, o = r[i], a = o.selector, h = document.querySelectorAll(a), void 0; s && h.length > 0;) {
          var s;
          var o;
          var a;
          var h;
          for (var d = 0; d < h.length; d++) s === h[d] && n.push(o);
          s = s.parentNode;
        }
      }
      return n;
    }(e, s), i = 0, void 0; i < n.length; i++) {
      var n;
      var i;
      r("click", n[i]);
    }
  }, document.addEventListener("click", i));
  n.dispose = function() {
    document.removeEventListener("click", i);
  };
  return n;
}
var ty = 300;
function tb(e, r) {
  var n;
  var i;
  function s() {
    i && i.dispose();
    n && n.length && (i = tv(n, o));
  }
  function o(r, n) {
    var i = e.ident.getContext();
    var s = {
      kind: r,
      key: n.key,
      data: null,
      url: window.location.href,
      creationDate: new Date().getTime(),
      context: i
    };
    "click" === r && (s.selector = n.selector);
    return e.enqueueEvent(s);
  }
  e.requestor.fetchJSON("/sdk/goals/" + e.getEnvironmentId()).then(function(e) {
    e && e.length > 0 && (i = tv(n = e, o), function(e, r) {
      var n;
      var i = window.location.href;
      function s() {
        (n = window.location.href) !== i && (i = n, r());
      }
      (function e(r, n) {
        r();
        setTimeout(function() {
          e(r, n);
        }, n);
      })(s, e);
      window.history && window.history.pushState ? window.addEventListener("popstate", s) : window.addEventListener("hashchange", s);
    }(ty, s));
    r();
  }).catch(function(n) {
    e.emitter.maybeReportError(new tu.LDUnexpectedResponseError((n && n.message, n.message)));
    r();
  });
  return {};
}
var tO = "goalsReady";
var tx = {
  fetchGoals: {
    default: !0
  },
  hash: {
    type: "string"
  },
  eventProcessor: {
    type: "object"
  },
  eventUrlTransformer: {
    type: "function"
  },
  disableSyncEventPost: {
    default: !1
  }
};
export function initialize(e, r) {
  var n = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : {};
  var i = function(e) {
    var r;
    var n = {
      userAgentHeaderName: "X-LaunchDarkly-User-Agent",
      synchronousFlush: !1
    };
    if (window.XMLHttpRequest) {
      var i = e && e.disableSyncEventPost;
      n.httpRequest = function(e, r, s, o) {
        var a = !i & n.synchronousFlush;
        n.synchronousFlush = !1;
        return tp(e, r, s, o, a);
      };
    }
    n.httpAllowsPost = function() {
      void 0 === r && (r = !!window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest());
      return r;
    };
    n.httpFallbackPing = function(e) {
      new window.Image().src = e;
    };
    var s;
    var o = e && e.eventUrlTransformer;
    n.getCurrentUrl = function() {
      return o ? o(window.location.href) : window.location.href;
    };
    n.isDoNotTrack = function() {
      var e;
      return 1 === (e = window.navigator && void 0 !== window.navigator.doNotTrack ? window.navigator.doNotTrack : window.navigator && void 0 !== window.navigator.msDoNotTrack ? window.navigator.msDoNotTrack : window.doNotTrack) || !0 === e || "1" === e || "yes" === e;
    };
    try {
      window.localStorage && (n.localStorage = {
        get: function(e) {
          return new Promise(function(r) {
            r(window.localStorage.getItem(e));
          });
        },
        set: function(e, r) {
          return new Promise(function(n) {
            window.localStorage.setItem(e, r);
            n();
          });
        },
        clear: function(e) {
          return new Promise(function(r) {
            window.localStorage.removeItem(e);
            r();
          });
        }
      });
    } catch (e) {
      n.localStorage = null;
    }
    if (e && e.useReport && "function" == typeof window.EventSourcePolyfill && window.EventSourcePolyfill.supportedOptions && window.EventSourcePolyfill.supportedOptions.method ? (n.eventSourceAllowsReport = !0, s = window.EventSourcePolyfill) : (n.eventSourceAllowsReport = !1, s = window.EventSource), window.EventSource) {
      var a = 3e5;
      n.eventSourceFactory = function(e, r) {
        var n = th(th({}, {
          heartbeatTimeout: a,
          silentTimeout: a,
          skipDefaultHeaders: !0
        }), r);
        return new s(e, n);
      };
      n.eventSourceIsActive = function(e) {
        return e.readyState === window.EventSource.OPEN || e.readyState === window.EventSource.CONNECTING;
      };
    }
    n.userAgent = "JSClient";
    n.version = "3.1.4";
    n.diagnosticSdkData = {
      name: "js-client-sdk",
      version: "3.1.4"
    };
    n.diagnosticPlatformData = {
      name: "JS"
    };
    n.diagnosticUseCombinedEvent = !0;
    return n;
  }(n);
  var s = tl(e, r, n, i, tx);
  var o = s.client;
  var a = s.options;
  var h = s.emitter;
  var d = new Promise(function(e) {
    var r = h.on(tO, function() {
      h.off(tO, r);
      e();
    });
  });
  o.waitUntilGoalsReady = function() {
    return d;
  };
  a.fetchGoals ? tb(s, function() {
    return h.emit(tO);
  }) : h.emit(tO);
  "complete" !== document.readyState ? window.addEventListener("load", s.start) : s.start();
  var p = function() {
    i.synchronousFlush = !0;
    o.flush().catch(function() { });
    i.synchronousFlush = !1;
  };
  document.addEventListener("visibilitychange", function() {
    "hidden" === document.visibilityState && p();
  });
  window.addEventListener("pagehide", p);
  return o;
}
export const n_ = initialize; 
