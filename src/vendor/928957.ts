var __WEBPACK_AMD_DEFINE_RESULT__;
!
/**
* [js-sha256]{@link https://github.com/emn178/js-sha256}
*
* @version 0.9.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2014-2017
* @license MIT
*/
function () {
  var ERROR = "input is invalid type";
  var WINDOW = "object" == typeof window;
  var root = WINDOW ? window : {};
  root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
  var WEB_WORKER = !WINDOW && "object" == typeof self;
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
  NODE_JS ? root = require.g : WEB_WORKER && (root = self);
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports;
  var AMD = require.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer;
  var HEX_CHARS = "0123456789abcdef".split("");
  var EXTRA = [-0x80000000, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
  var blocks = [];
  (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  });
  ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function (e) {
    return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
  });
  var createOutputMethod = function (e, r) {
    return function (n) {
      return new Sha256(r, !0).update(n)[e]();
    };
  };
  var createMethod = function (e) {
    var r = createOutputMethod("hex", e);
    NODE_JS && (r = nodeWrap(r, e));
    r.create = function () {
      return new Sha256(e);
    };
    r.update = function (e) {
      return r.create().update(e);
    };
    for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
      var i = OUTPUT_TYPES[n];
      r[i] = createOutputMethod(i, e);
    }
    return r;
  };
  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? "sha224" : "sha256";
    var nodeMethod = function (e) {
      if ("string" == typeof e) return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
      if (null == e) throw Error(ERROR);
      e.constructor === ArrayBuffer && (e = new Uint8Array(e));
      return Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e);
    };
    return nodeMethod;
  };
  var createHmacOutputMethod = function (e, r) {
    return function (n, i) {
      return new HmacSha256(n, r, !0).update(i)[e]();
    };
  };
  var createHmacMethod = function (e) {
    var r = createHmacOutputMethod("hex", e);
    r.create = function (r) {
      return new HmacSha256(r, e);
    };
    r.update = function (e, n) {
      return r.create(e).update(n);
    };
    for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
      var i = OUTPUT_TYPES[n];
      r[i] = createHmacOutputMethod(i, e);
    }
    return r;
  };
  function Sha256(e, r) {
    r ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    e ? (this.h0 = 0xc1059ed8, this.h1 = 0x367cd507, this.h2 = 0x3070dd17, this.h3 = 0xf70e5939, this.h4 = 0xffc00b31, this.h5 = 0x68581511, this.h6 = 0x64f98fa7, this.h7 = 0xbefa4fa4) : (this.h0 = 0x6a09e667, this.h1 = 0xbb67ae85, this.h2 = 0x3c6ef372, this.h3 = 0xa54ff53a, this.h4 = 0x510e527f, this.h5 = 0x9b05688c, this.h6 = 0x1f83d9ab, this.h7 = 0x5be0cd19);
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = !1;
    this.first = !0;
    this.is224 = e;
  }
  function HmacSha256(e, r, n) {
    var i;
    var s = typeof e;
    if ("string" === s) {
      var o;
      var a = [];
      var h = e.length;
      var d = 0;
      for (i = 0; i < h; ++i) (o = e.charCodeAt(i)) < 128 ? a[d++] = o : (o < 2048 ? a[d++] = 192 | o >> 6 : (o < 55296 || o >= 57344 ? a[d++] = 224 | o >> 12 : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++i)), a[d++] = 240 | o >> 18, a[d++] = 128 | o >> 12 & 63), a[d++] = 128 | o >> 6 & 63), a[d++] = 128 | 63 & o);
      e = a;
    } else if ("object" === s) {
      if (null === e) throw Error(ERROR);
      if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) throw Error(ERROR);
    } else throw Error(ERROR);
    e.length > 64 && (e = new Sha256(r, !0).update(e).array());
    var p = [];
    var g = [];
    for (i = 0; i < 64; ++i) {
      var m = e[i] || 0;
      p[i] = 92 ^ m;
      g[i] = 54 ^ m;
    }
    Sha256.call(this, r, n);
    this.update(g);
    this.oKeyPad = p;
    this.inner = !0;
    this.sharedMemory = n;
  }
  Sha256.prototype.update = function (e) {
    if (!this.finalized) {
      var r;
      var n = typeof e;
      if ("string" !== n) {
        if ("object" === n) {
          if (null === e) throw Error(ERROR);
          if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e))) throw Error(ERROR);
        } else throw Error(ERROR);
        r = !0;
      }
      for (o = 0, a = e.length, h = this.blocks, void 0; o < a;) {
        var i;
        var s;
        var o;
        var a;
        var h;
        if (this.hashed && (this.hashed = !1, h[0] = this.block, h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), r) for (s = this.start; o < a && s < 64; ++o) h[s >> 2] |= e[o] << SHIFT[3 & s++];else for (s = this.start; o < a && s < 64; ++o) (i = e.charCodeAt(o)) < 128 ? h[s >> 2] |= i << SHIFT[3 & s++] : (i < 2048 ? h[s >> 2] |= (192 | i >> 6) << SHIFT[3 & s++] : (i < 55296 || i >= 57344 ? h[s >> 2] |= (224 | i >> 12) << SHIFT[3 & s++] : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++o)), h[s >> 2] |= (240 | i >> 18) << SHIFT[3 & s++], h[s >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & s++]), h[s >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & s++]), h[s >> 2] |= (128 | 63 & i) << SHIFT[3 & s++]);
        this.lastByteIndex = s;
        this.bytes += s - this.start;
        s >= 64 ? (this.block = h[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s;
      }
      this.bytes > 0xffffffff && (this.hBytes += this.bytes / 0x100000000 << 0, this.bytes = this.bytes % 0x100000000);
      return this;
    }
  };
  Sha256.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = !0;
      var e = this.blocks;
      var r = this.lastByteIndex;
      e[16] = this.block;
      e[r >> 2] |= EXTRA[3 & r];
      this.block = e[16];
      r >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0);
      e[14] = this.hBytes << 3 | this.bytes >>> 29;
      e[15] = this.bytes << 3;
      this.hash();
    }
  };
  Sha256.prototype.hash = function () {
    var e;
    var r;
    var n;
    var i;
    var s;
    var o;
    var a;
    var h;
    var d;
    var p;
    var g;
    var m = this.h0;
    var v = this.h1;
    var y = this.h2;
    var b = this.h3;
    var O = this.h4;
    var x = this.h5;
    var w = this.h6;
    var k = this.h7;
    var _ = this.blocks;
    for (e = 16; e < 64; ++e) {
      r = ((s = _[e - 15]) >>> 7 | s << 25) ^ (s >>> 18 | s << 14) ^ s >>> 3;
      n = ((s = _[e - 2]) >>> 17 | s << 15) ^ (s >>> 19 | s << 13) ^ s >>> 10;
      _[e] = _[e - 16] + r + _[e - 7] + n << 0;
    }
    for (e = 0, g = v & y; e < 64; e += 4) {
      this.first ? (this.is224 ? (h = 300032, k = (s = _[0] - 0x543c9a5b) - 0x8f1a6c7 << 0, b = s + 0x170e9b5 << 0) : (h = 0x2a01a605, k = (s = _[0] - 0xc881298) - 0x5ab00ac6 << 0, b = s + 0x8909ae5 << 0), this.first = !1) : (r = (m >>> 2 | m << 30) ^ (m >>> 13 | m << 19) ^ (m >>> 22 | m << 10), n = (O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7), i = (h = m & v) ^ m & y ^ g, s = k + n + (a = O & x ^ ~O & w) + K[e] + _[e], o = r + i, k = b + s << 0, b = s + o << 0);
      r = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
      n = (k >>> 6 | k << 26) ^ (k >>> 11 | k << 21) ^ (k >>> 25 | k << 7);
      i = (d = b & m) ^ b & v ^ h;
      s = w + n + (a = k & O ^ ~k & x) + K[e + 1] + _[e + 1];
      o = r + i;
      w = y + s << 0;
      r = ((y = s + o << 0) >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10);
      n = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7);
      i = (p = y & b) ^ y & m ^ d;
      s = x + n + (a = w & k ^ ~w & O) + K[e + 2] + _[e + 2];
      o = r + i;
      x = v + s << 0;
      r = ((v = s + o << 0) >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10);
      n = (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
      i = (g = v & y) ^ v & b ^ p;
      s = O + n + (a = x & w ^ ~x & k) + K[e + 3] + _[e + 3];
      o = r + i;
      O = m + s << 0;
      m = s + o << 0;
    }
    this.h0 = this.h0 + m << 0;
    this.h1 = this.h1 + v << 0;
    this.h2 = this.h2 + y << 0;
    this.h3 = this.h3 + b << 0;
    this.h4 = this.h4 + O << 0;
    this.h5 = this.h5 + x << 0;
    this.h6 = this.h6 + w << 0;
    this.h7 = this.h7 + k << 0;
  };
  Sha256.prototype.hex = function () {
    this.finalize();
    var e = this.h0;
    var r = this.h1;
    var n = this.h2;
    var i = this.h3;
    var s = this.h4;
    var o = this.h5;
    var a = this.h6;
    var h = this.h7;
    var d = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
    this.is224 || (d += HEX_CHARS[h >> 28 & 15] + HEX_CHARS[h >> 24 & 15] + HEX_CHARS[h >> 20 & 15] + HEX_CHARS[h >> 16 & 15] + HEX_CHARS[h >> 12 & 15] + HEX_CHARS[h >> 8 & 15] + HEX_CHARS[h >> 4 & 15] + HEX_CHARS[15 & h]);
    return d;
  };
  Sha256.prototype.toString = Sha256.prototype.hex;
  Sha256.prototype.digest = function () {
    this.finalize();
    var e = this.h0;
    var r = this.h1;
    var n = this.h2;
    var i = this.h3;
    var s = this.h4;
    var o = this.h5;
    var a = this.h6;
    var h = this.h7;
    var d = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
    this.is224 || d.push(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h);
    return d;
  };
  Sha256.prototype.array = Sha256.prototype.digest;
  Sha256.prototype.arrayBuffer = function () {
    this.finalize();
    var e = new ArrayBuffer(this.is224 ? 28 : 32);
    var r = new DataView(e);
    r.setUint32(0, this.h0);
    r.setUint32(4, this.h1);
    r.setUint32(8, this.h2);
    r.setUint32(12, this.h3);
    r.setUint32(16, this.h4);
    r.setUint32(20, this.h5);
    r.setUint32(24, this.h6);
    this.is224 || r.setUint32(28, this.h7);
    return e;
  };
  HmacSha256.prototype = new Sha256();
  HmacSha256.prototype.finalize = function () {
    if (Sha256.prototype.finalize.call(this), this.inner) {
      this.inner = !1;
      var e = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(e);
      Sha256.prototype.finalize.call(this);
    }
  };
  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(!0);
  exports.sha256create = exports.create;
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(!0);
  COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return exports;
  }.call(exports, require, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}();