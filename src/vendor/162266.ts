import s, { fromByteArray, toByteArray } from "../vendor/827762";
import o, { write, read } from "../vendor/936287";
var i; /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */

let a = "function" == typeof Symbol && "function" == typeof Symbol.$$for ? Symbol.$$for("nodejs.util.inspect.custom") : null;
exports.hp = g;
i = E;
exports.IS = 50;
let h = 0x7fffffff;
function d() {
  try {
    let e = new Uint8Array(1);
    let r = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(r, Uint8Array.prototype);
    Object.setPrototypeOf(e, r);
    return 42 === e.foo();
  } catch (e) {
    return !1;
  }
}
function p(e) {
  if (e > h) throw RangeError('The value "' + e + '" is invalid for option "size"');
  let r = new Uint8Array(e);
  Object.setPrototypeOf(r, g.prototype);
  return r;
}
function g(e, r, n) {
  if ("number" == typeof e) {
    if ("string" == typeof r) throw TypeError('The "string" argument must be of type string. Received type number');
    return b(e);
  }
  return m(e, r, n);
}
function m(e, r, n) {
  if ("string" == typeof e) return O(e, r);
  if (ArrayBuffer.isView(e)) return w(e);
  if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
  if (ed(e, ArrayBuffer) || e && ed(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (ed(e, SharedArrayBuffer) || e && ed(e.buffer, SharedArrayBuffer))) return k(e, r, n);
  if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
  let i = e.valueOf && e.valueOf();
  if (null != i && i !== e) return g.from(i, r, n);
  let s = _(e);
  if (s) return s;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return g.from(e[Symbol.toPrimitive]("string"), r, n);
  throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
}
function v(e) {
  if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
  if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
}
function y(e, r, n) {
  return (v(e), e <= 0) ? p(e) : void 0 !== r ? "string" == typeof n ? p(e).fill(r, n) : p(e).fill(r) : p(e);
}
function b(e) {
  v(e);
  return p(e < 0 ? 0 : 0 | S(e));
}
function O(e, r) {
  if (("string" != typeof r || "" === r) && (r = "utf8"), !g.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
  let n = 0 | A(e, r);
  let i = p(n);
  let s = i.write(e, r);
  s !== n && (i = i.slice(0, s));
  return i;
}
function x(e) {
  let r = e.length < 0 ? 0 : 0 | S(e.length);
  let n = p(r);
  for (let i = 0; i < r; i += 1) n[i] = 255 & e[i];
  return n;
}
function w(e) {
  if (ed(e, Uint8Array)) {
    let r = new Uint8Array(e);
    return k(r.buffer, r.byteOffset, r.byteLength);
  }
  return x(e);
}
function k(e, r, n) {
  let i;
  if (r < 0 || e.byteLength < r) throw RangeError('"offset" is outside of buffer bounds');
  if (e.byteLength < r + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
  Object.setPrototypeOf(i = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), g.prototype);
  return i;
}
function _(e) {
  if (g.isBuffer(e)) {
    let r = 0 | S(e.length);
    let n = p(r);
    0 === n.length || e.copy(n, 0, 0, r);
    return n;
  }
  return void 0 !== e.length ? "number" != typeof e.length || ef(e.length) ? p(0) : x(e) : "Buffer" === e.type && Array.isArray(e.data) ? x(e.data) : void 0;
}
function S(e) {
  if (e >= h) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + h.toString(16) + " bytes");
  return 0 | e;
}
function E(e) {
  +e != e && (e = 0);
  return g.alloc(+e);
}
function A(e, r) {
  if (g.isBuffer(e)) return e.length;
  if (ArrayBuffer.isView(e) || ed(e, ArrayBuffer)) return e.byteLength;
  if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
  let n = e.length;
  let i = $$arguments.length > 2 && !0 === $$arguments[2];
  if (!i && 0 === n) return 0;
  let s = !1;
  for (;;) switch (r) {
    case "ascii":
    case "latin1":
    case "binary":
      return n;
    case "utf8":
    case "utf-8":
      return ea(e).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * n;
    case "hex":
      return n >>> 1;
    case "base64":
      return ec(e).length;
    default:
      if (s) return i ? -1 : ea(e).length;
      r = ("" + r).toLowerCase();
      s = !0;
  }
}
function C(e, r, n) {
  let i = !1;
  if ((void 0 === r || r < 0) && (r = 0), r > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (r >>>= 0))) return "";
  for (e || (e = "utf8");;) switch (e) {
    case "hex":
      return Q(this, r, n);
    case "utf8":
    case "utf-8":
      return j(this, r, n);
    case "ascii":
      return F(this, r, n);
    case "latin1":
    case "binary":
      return U(this, r, n);
    case "base64":
      return L(this, r, n);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return V(this, r, n);
    default:
      if (i) throw TypeError("Unknown encoding: " + e);
      e = (e + "").toLowerCase();
      i = !0;
  }
}
function T(e, r, n) {
  let i = e[r];
  e[r] = e[n];
  e[n] = i;
}
function I(e, r, n, i, s) {
  if (0 === e.length) return -1;
  if ("string" == typeof n ? (i = n, n = 0) : n > 0x7fffffff ? n = 0x7fffffff : n < -0x80000000 && (n = -0x80000000), ef(n = +n) && (n = s ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
    if (s) return -1;
    n = e.length - 1;
  } else if (n < 0) {
    if (!s) return -1;
    n = 0;
  }
  if ("string" == typeof r && (r = g.from(r, i)), g.isBuffer(r)) return 0 === r.length ? -1 : P(e, r, n, i, s);
  if ("number" == typeof r) return (r &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? s ? Uint8Array.prototype.indexOf.call(e, r, n) : Uint8Array.prototype.lastIndexOf.call(e, r, n) : P(e, [r], n, i, s);
  throw TypeError("val must be string, number or Buffer");
}
function P(e, r, n, i, s) {
  let o;
  let a = 1;
  let h = e.length;
  let d = r.length;
  if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
    if (e.length < 2 || r.length < 2) return -1;
    a = 2;
    h /= 2;
    d /= 2;
    n /= 2;
  }
  function p(e, r) {
    return 1 === a ? e[r] : e.readUInt16BE(r * a);
  }
  if (s) {
    let i = -1;
    for (o = n; o < h; o++) if (p(e, o) === p(r, -1 === i ? 0 : o - i)) {
      if (-1 === i && (i = o), o - i + 1 === d) return i * a;
    } else {
      -1 !== i && (o -= o - i);
      i = -1;
    }
  } else for (n + d > h && (n = h - d), o = n; o >= 0; o--) {
    let n = !0;
    for (let i = 0; i < d; i++) if (p(e, o + i) !== p(r, i)) {
      n = !1;
      break;
    }
    if (n) return o;
  }
  return -1;
}
function R(e, r, n, i) {
  let s;
  n = Number(n) || 0;
  let o = e.length - n;
  i ? (i = Number(i)) > o && (i = o) : i = o;
  let a = r.length;
  for (i > a / 2 && (i = a / 2), s = 0; s < i; ++s) {
    let i = parseInt(r.substr(2 * s, 2), 16);
    if (ef(i)) break;
    e[n + s] = i;
  }
  return s;
}
function M(e, r, n, i) {
  return eh(ea(r, e.length - n), e, n, i);
}
function D(e, r, n, i) {
  return eh(el(r), e, n, i);
}
function N(e, r, n, i) {
  return eh(ec(r), e, n, i);
}
function $(e, r, n, i) {
  return eh(eu(r, e.length - n), e, n, i);
}
function L(e, r, n) {
  return 0 === r && n === e.length ? fromByteArray(e) : fromByteArray(e.slice(r, n));
}
function j(e, r, n) {
  n = Math.min(e.length, n);
  let i = [];
  let s = r;
  for (; s < n;) {
    let r = e[s];
    let o = null;
    let a = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
    if (s + a <= n) {
      let n;
      let i;
      let h;
      let d;
      switch (a) {
        case 1:
          r < 128 && (o = r);
          break;
        case 2:
          (192 & (n = e[s + 1])) == 128 && (d = (31 & r) << 6 | 63 & n) > 127 && (o = d);
          break;
        case 3:
          n = e[s + 1];
          i = e[s + 2];
          (192 & n) == 128 && (192 & i) == 128 && (d = (15 & r) << 12 | (63 & n) << 6 | 63 & i) > 2047 && (d < 55296 || d > 57343) && (o = d);
          break;
        case 4:
          n = e[s + 1];
          i = e[s + 2];
          h = e[s + 3];
          (192 & n) == 128 && (192 & i) == 128 && (192 & h) == 128 && (d = (15 & r) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & h) > 65535 && d < 1114112 && (o = d);
      }
    }
    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o);
    i.push(o);
    s += a;
  }
  return Z(i);
}
i = 0x7fffffff;
g.TYPED_ARRAY_SUPPORT = d();
g.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
Object.defineProperty(g.prototype, "parent", {
  enumerable: !0,
  get: function () {
    if (g.isBuffer(this)) return this.buffer;
  }
});
Object.defineProperty(g.prototype, "offset", {
  enumerable: !0,
  get: function () {
    if (g.isBuffer(this)) return this.byteOffset;
  }
});
g.poolSize = 8192;
g.from = function (e, r, n) {
  return m(e, r, n);
};
Object.setPrototypeOf(g.prototype, Uint8Array.prototype);
Object.setPrototypeOf(g, Uint8Array);
g.alloc = function (e, r, n) {
  return y(e, r, n);
};
g.allocUnsafe = function (e) {
  return b(e);
};
g.allocUnsafeSlow = function (e) {
  return b(e);
};
g.isBuffer = function (e) {
  return null != e && !0 === e._isBuffer && e !== g.prototype;
};
g.compare = function (e, r) {
  if (ed(e, Uint8Array) && (e = g.from(e, e.offset, e.byteLength)), ed(r, Uint8Array) && (r = g.from(r, r.offset, r.byteLength)), !g.isBuffer(e) || !g.isBuffer(r)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (e === r) return 0;
  let n = e.length;
  let i = r.length;
  for (function () {
    let s = 0;
    let o = Math.min(n, i);
  }(); s < o; ++s) if (e[s] !== r[s]) {
    n = e[s];
    i = r[s];
    break;
  }
  return n < i ? -1 : i < n ? 1 : 0;
};
g.isEncoding = function (e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
g.concat = function (e, r) {
  let n;
  if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
  if (0 === e.length) return g.alloc(0);
  if (void 0 === r) for (n = 0, r = 0; n < e.length; ++n) r += e[n].length;
  let i = g.allocUnsafe(r);
  let s = 0;
  for (n = 0; n < e.length; ++n) {
    let r = e[n];
    if (ed(r, Uint8Array)) s + r.length > i.length ? (g.isBuffer(r) || (r = g.from(r)), r.copy(i, s)) : Uint8Array.prototype.set.call(i, r, s);else if (g.isBuffer(r)) r.copy(i, s);else throw TypeError('"list" argument must be an Array of Buffers');
    s += r.length;
  }
  return i;
};
g.byteLength = A;
g.prototype._isBuffer = !0;
g.prototype.swap16 = function () {
  let e = this.length;
  if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
  for (let r = 0; r < e; r += 2) T(this, r, r + 1);
  return this;
};
g.prototype.swap32 = function () {
  let e = this.length;
  if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
  for (let r = 0; r < e; r += 4) {
    T(this, r, r + 3);
    T(this, r + 1, r + 2);
  }
  return this;
};
g.prototype.swap64 = function () {
  let e = this.length;
  if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
  for (let r = 0; r < e; r += 8) {
    T(this, r, r + 7);
    T(this, r + 1, r + 6);
    T(this, r + 2, r + 5);
    T(this, r + 3, r + 4);
  }
  return this;
};
g.prototype.toString = function () {
  let e = this.length;
  return 0 === e ? "" : 0 == $$arguments.length ? j(this, 0, e) : C.apply(this, arguments);
};
g.prototype.toLocaleString = g.prototype.toString;
g.prototype.equals = function (e) {
  if (!g.isBuffer(e)) throw TypeError("Argument must be a Buffer");
  return this === e || 0 === g.compare(this, e);
};
g.prototype.inspect = function () {
  let e = "";
  let n = exports.IS;
  e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim();
  this.length > n && (e += " ... ");
  return "<Buffer " + e + ">";
};
a && (g.prototype[a] = g.prototype.inspect);
g.prototype.compare = function (e, r, n, i, s) {
  if (ed(e, Uint8Array) && (e = g.from(e, e.offset, e.byteLength)), !g.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
  if (void 0 === r && (r = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), r < 0 || n > e.length || i < 0 || s > this.length) throw RangeError("out of range index");
  if (i >= s && r >= n) return 0;
  if (i >= s) return -1;
  if (r >= n) return 1;
  if (r >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e) return 0;
  let o = s - i;
  let a = n - r;
  let h = Math.min(o, a);
  let d = this.slice(i, s);
  let p = e.slice(r, n);
  for (let e = 0; e < h; ++e) if (d[e] !== p[e]) {
    o = d[e];
    a = p[e];
    break;
  }
  return o < a ? -1 : a < o ? 1 : 0;
};
g.prototype.includes = function (e, r, n) {
  return -1 !== this.indexOf(e, r, n);
};
g.prototype.indexOf = function (e, r, n) {
  return I(this, e, r, n, !0);
};
g.prototype.lastIndexOf = function (e, r, n) {
  return I(this, e, r, n, !1);
};
g.prototype.write = function (e, r, n, i) {
  if (void 0 === r) {
    i = "utf8";
    n = this.length;
    r = 0;
  } else if (void 0 === n && "string" == typeof r) {
    i = r;
    n = this.length;
    r = 0;
  } else if (isFinite(r)) {
    r >>>= 0;
    isFinite(n) ? (n >>>= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
  } else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  let s = this.length - r;
  if ((void 0 === n || n > s) && (n = s), e.length > 0 && (n < 0 || r < 0) || r > this.length) throw RangeError("Attempt to write outside buffer bounds");
  i || (i = "utf8");
  let o = !1;
  for (;;) switch (i) {
    case "hex":
      return R(this, e, r, n);
    case "utf8":
    case "utf-8":
      return M(this, e, r, n);
    case "ascii":
    case "latin1":
    case "binary":
      return D(this, e, r, n);
    case "base64":
      return N(this, e, r, n);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return $(this, e, r, n);
    default:
      if (o) throw TypeError("Unknown encoding: " + i);
      i = ("" + i).toLowerCase();
      o = !0;
  }
};
g.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
let z = 4096;
function Z(e) {
  let r = e.length;
  if (r <= z) return String.fromCharCode.apply(String, e);
  let n = "";
  let i = 0;
  for (; i < r;) n += String.fromCharCode.apply(String, e.slice(i, i += z));
  return n;
}
function F(e, r, n) {
  let i = "";
  n = Math.min(e.length, n);
  for (let s = r; s < n; ++s) i += String.fromCharCode(127 & e[s]);
  return i;
}
function U(e, r, n) {
  let i = "";
  n = Math.min(e.length, n);
  for (let s = r; s < n; ++s) i += String.fromCharCode(e[s]);
  return i;
}
function Q(e, r, n) {
  let i = e.length;
  (!r || r < 0) && (r = 0);
  (!n || n < 0 || n > i) && (n = i);
  let s = "";
  for (let i = r; i < n; ++i) s += ep[e[i]];
  return s;
}
function V(e, r, n) {
  let i = e.slice(r, n);
  let s = "";
  for (let e = 0; e < i.length - 1; e += 2) s += String.fromCharCode(i[e] + 256 * i[e + 1]);
  return s;
}
function B(e, r, n) {
  if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
  if (e + r > n) throw RangeError("Trying to access beyond buffer length");
}
function q(e, r, n, i, s, o) {
  if (!g.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
  if (r > s || r < o) throw RangeError('"value" argument is out of bounds');
  if (n + i > e.length) throw RangeError("Index out of range");
}
function W(e, r, n, i, s) {
  er(r, i, s, e, n, 7);
  let o = Number(r & BigInt(0xffffffff));
  e[n++] = o;
  o >>= 8;
  e[n++] = o;
  o >>= 8;
  e[n++] = o;
  o >>= 8;
  e[n++] = o;
  let a = Number(r >> BigInt(32) & BigInt(0xffffffff));
  e[n++] = a;
  a >>= 8;
  e[n++] = a;
  a >>= 8;
  e[n++] = a;
  a >>= 8;
  e[n++] = a;
  return n;
}
function Y(e, r, n, i, s) {
  er(r, i, s, e, n, 7);
  let o = Number(r & BigInt(0xffffffff));
  e[n + 7] = o;
  o >>= 8;
  e[n + 6] = o;
  o >>= 8;
  e[n + 5] = o;
  o >>= 8;
  e[n + 4] = o;
  let a = Number(r >> BigInt(32) & BigInt(0xffffffff));
  e[n + 3] = a;
  a >>= 8;
  e[n + 2] = a;
  a >>= 8;
  e[n + 1] = a;
  a >>= 8;
  e[n] = a;
  return n + 8;
}
function G(e, r, n, i, s, o) {
  if (n + i > e.length || n < 0) throw RangeError("Index out of range");
}
function X(e, r, n, i, s) {
  r = +r;
  n >>>= 0;
  s || G(e, r, n, 4, 34028234663852886e22, -34028234663852886e22);
  write(e, r, n, i, 23, 4);
  return n + 4;
}
function H(e, r, n, i, s) {
  r = +r;
  n >>>= 0;
  s || G(e, r, n, 8, 17976931348623157e292, -17976931348623157e292);
  write(e, r, n, i, 52, 8);
  return n + 8;
}
g.prototype.slice = function (e, r) {
  let n = this.length;
  e = ~~e;
  r = void 0 === r ? n : ~~r;
  e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n);
  r < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n);
  r < e && (r = e);
  let i = this.subarray(e, r);
  Object.setPrototypeOf(i, g.prototype);
  return i;
};
g.prototype.readUintLE = g.prototype.readUIntLE = function (e, r, n) {
  e >>>= 0;
  r >>>= 0;
  n || B(e, r, this.length);
  let i = this[e];
  let s = 1;
  let o = 0;
  for (; ++o < r && (s *= 256);) i += this[e + o] * s;
  return i;
};
g.prototype.readUintBE = g.prototype.readUIntBE = function (e, r, n) {
  e >>>= 0;
  r >>>= 0;
  n || B(e, r, this.length);
  let i = this[e + --r];
  let s = 1;
  for (; r > 0 && (s *= 256);) i += this[e + --r] * s;
  return i;
};
g.prototype.readUint8 = g.prototype.readUInt8 = function (e, r) {
  e >>>= 0;
  r || B(e, 1, this.length);
  return this[e];
};
g.prototype.readUint16LE = g.prototype.readUInt16LE = function (e, r) {
  e >>>= 0;
  r || B(e, 2, this.length);
  return this[e] | this[e + 1] << 8;
};
g.prototype.readUint16BE = g.prototype.readUInt16BE = function (e, r) {
  e >>>= 0;
  r || B(e, 2, this.length);
  return this[e] << 8 | this[e + 1];
};
g.prototype.readUint32LE = g.prototype.readUInt32LE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3];
};
g.prototype.readUint32BE = g.prototype.readUInt32BE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
g.prototype.readBigUInt64LE = eg(function (e) {
  en(e >>>= 0, "offset");
  let r = this[e];
  let n = this[e + 7];
  (void 0 === r || void 0 === n) && ei(e, this.length - 8);
  let i = r + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e];
  let s = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * n;
  return BigInt(i) + (BigInt(s) << BigInt(32));
});
g.prototype.readBigUInt64BE = eg(function (e) {
  en(e >>>= 0, "offset");
  let r = this[e];
  let n = this[e + 7];
  (void 0 === r || void 0 === n) && ei(e, this.length - 8);
  let i = 0x1000000 * r + 65536 * this[++e] + 256 * this[++e] + this[++e];
  let s = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n;
  return (BigInt(i) << BigInt(32)) + BigInt(s);
});
g.prototype.readIntLE = function (e, r, n) {
  e >>>= 0;
  r >>>= 0;
  n || B(e, r, this.length);
  let i = this[e];
  let s = 1;
  let o = 0;
  for (; ++o < r && (s *= 256);) i += this[e + o] * s;
  i >= (s *= 128) && (i -= Math.pow(2, 8 * r));
  return i;
};
g.prototype.readIntBE = function (e, r, n) {
  e >>>= 0;
  r >>>= 0;
  n || B(e, r, this.length);
  let i = r;
  let s = 1;
  let o = this[e + --i];
  for (; i > 0 && (s *= 256);) o += this[e + --i] * s;
  o >= (s *= 128) && (o -= Math.pow(2, 8 * r));
  return o;
};
g.prototype.readInt8 = function (e, r) {
  return (e >>>= 0, r || B(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
};
g.prototype.readInt16LE = function (e, r) {
  e >>>= 0;
  r || B(e, 2, this.length);
  let n = this[e] | this[e + 1] << 8;
  return 32768 & n ? 0xffff0000 | n : n;
};
g.prototype.readInt16BE = function (e, r) {
  e >>>= 0;
  r || B(e, 2, this.length);
  let n = this[e + 1] | this[e] << 8;
  return 32768 & n ? 0xffff0000 | n : n;
};
g.prototype.readInt32LE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
g.prototype.readInt32BE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
g.prototype.readBigInt64LE = eg(function (e) {
  en(e >>>= 0, "offset");
  let r = this[e];
  let n = this[e + 7];
  (void 0 === r || void 0 === n) && ei(e, this.length - 8);
  return (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24)) << BigInt(32)) + BigInt(r + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e]);
});
g.prototype.readBigInt64BE = eg(function (e) {
  en(e >>>= 0, "offset");
  let r = this[e];
  let n = this[e + 7];
  (void 0 === r || void 0 === n) && ei(e, this.length - 8);
  return (BigInt((r << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n);
});
g.prototype.readFloatLE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return read(this, e, !0, 23, 4);
};
g.prototype.readFloatBE = function (e, r) {
  e >>>= 0;
  r || B(e, 4, this.length);
  return read(this, e, !1, 23, 4);
};
g.prototype.readDoubleLE = function (e, r) {
  e >>>= 0;
  r || B(e, 8, this.length);
  return read(this, e, !0, 52, 8);
};
g.prototype.readDoubleBE = function (e, r) {
  e >>>= 0;
  r || B(e, 8, this.length);
  return read(this, e, !1, 52, 8);
};
g.prototype.writeUintLE = g.prototype.writeUIntLE = function (e, r, n, i) {
  if (e = +e, r >>>= 0, n >>>= 0, !i) {
    let i = Math.pow(2, 8 * n) - 1;
    q(this, e, r, n, i, 0);
  }
  let s = 1;
  let o = 0;
  for (this[r] = 255 & e; ++o < n && (s *= 256);) this[r + o] = e / s & 255;
  return r + n;
};
g.prototype.writeUintBE = g.prototype.writeUIntBE = function (e, r, n, i) {
  if (e = +e, r >>>= 0, n >>>= 0, !i) {
    let i = Math.pow(2, 8 * n) - 1;
    q(this, e, r, n, i, 0);
  }
  let s = n - 1;
  let o = 1;
  for (this[r + s] = 255 & e; --s >= 0 && (o *= 256);) this[r + s] = e / o & 255;
  return r + n;
};
g.prototype.writeUint8 = g.prototype.writeUInt8 = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 1, 255, 0);
  this[r] = 255 & e;
  return r + 1;
};
g.prototype.writeUint16LE = g.prototype.writeUInt16LE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 2, 65535, 0);
  this[r] = 255 & e;
  this[r + 1] = e >>> 8;
  return r + 2;
};
g.prototype.writeUint16BE = g.prototype.writeUInt16BE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 2, 65535, 0);
  this[r] = e >>> 8;
  this[r + 1] = 255 & e;
  return r + 2;
};
g.prototype.writeUint32LE = g.prototype.writeUInt32LE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 4, 0xffffffff, 0);
  this[r + 3] = e >>> 24;
  this[r + 2] = e >>> 16;
  this[r + 1] = e >>> 8;
  this[r] = 255 & e;
  return r + 4;
};
g.prototype.writeUint32BE = g.prototype.writeUInt32BE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 4, 0xffffffff, 0);
  this[r] = e >>> 24;
  this[r + 1] = e >>> 16;
  this[r + 2] = e >>> 8;
  this[r + 3] = 255 & e;
  return r + 4;
};
g.prototype.writeBigUInt64LE = eg(function (e, r = 0) {
  return W(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
});
g.prototype.writeBigUInt64BE = eg(function (e, r = 0) {
  return Y(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
});
g.prototype.writeIntLE = function (e, r, n, i) {
  if (e = +e, r >>>= 0, !i) {
    let i = Math.pow(2, 8 * n - 1);
    q(this, e, r, n, i - 1, -i);
  }
  let s = 0;
  let o = 1;
  let a = 0;
  for (this[r] = 255 & e; ++s < n && (o *= 256);) {
    e < 0 && 0 === a && 0 !== this[r + s - 1] && (a = 1);
    this[r + s] = (e / o >> 0) - a & 255;
  }
  return r + n;
};
g.prototype.writeIntBE = function (e, r, n, i) {
  if (e = +e, r >>>= 0, !i) {
    let i = Math.pow(2, 8 * n - 1);
    q(this, e, r, n, i - 1, -i);
  }
  let s = n - 1;
  let o = 1;
  let a = 0;
  for (this[r + s] = 255 & e; --s >= 0 && (o *= 256);) {
    e < 0 && 0 === a && 0 !== this[r + s + 1] && (a = 1);
    this[r + s] = (e / o >> 0) - a & 255;
  }
  return r + n;
};
g.prototype.writeInt8 = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 1, 127, -128);
  e < 0 && (e = 255 + e + 1);
  this[r] = 255 & e;
  return r + 1;
};
g.prototype.writeInt16LE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 2, 32767, -32768);
  this[r] = 255 & e;
  this[r + 1] = e >>> 8;
  return r + 2;
};
g.prototype.writeInt16BE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 2, 32767, -32768);
  this[r] = e >>> 8;
  this[r + 1] = 255 & e;
  return r + 2;
};
g.prototype.writeInt32LE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 4, 0x7fffffff, -0x80000000);
  this[r] = 255 & e;
  this[r + 1] = e >>> 8;
  this[r + 2] = e >>> 16;
  this[r + 3] = e >>> 24;
  return r + 4;
};
g.prototype.writeInt32BE = function (e, r, n) {
  e = +e;
  r >>>= 0;
  n || q(this, e, r, 4, 0x7fffffff, -0x80000000);
  e < 0 && (e = 0xffffffff + e + 1);
  this[r] = e >>> 24;
  this[r + 1] = e >>> 16;
  this[r + 2] = e >>> 8;
  this[r + 3] = 255 & e;
  return r + 4;
};
g.prototype.writeBigInt64LE = eg(function (e, r = 0) {
  return W(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
g.prototype.writeBigInt64BE = eg(function (e, r = 0) {
  return Y(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
g.prototype.writeFloatLE = function (e, r, n) {
  return X(this, e, r, !0, n);
};
g.prototype.writeFloatBE = function (e, r, n) {
  return X(this, e, r, !1, n);
};
g.prototype.writeDoubleLE = function (e, r, n) {
  return H(this, e, r, !0, n);
};
g.prototype.writeDoubleBE = function (e, r, n) {
  return H(this, e, r, !1, n);
};
g.prototype.copy = function (e, r, n, i) {
  if (!g.isBuffer(e)) throw TypeError("argument should be a Buffer");
  if (n || (n = 0), i || 0 === i || (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || 0 === e.length || 0 === this.length) return 0;
  if (r < 0) throw RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length) throw RangeError("Index out of range");
  if (i < 0) throw RangeError("sourceEnd out of bounds");
  i > this.length && (i = this.length);
  e.length - r < i - n && (i = e.length - r + n);
  let s = i - n;
  this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), r);
  return s;
};
g.prototype.fill = function (e, r, n, i) {
  let s;
  if ("string" == typeof e) {
    if ("string" == typeof r ? (i = r, r = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
    if ("string" == typeof i && !g.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
    if (1 === e.length) {
      let r = e.charCodeAt(0);
      ("utf8" === i && r < 128 || "latin1" === i) && (e = r);
    }
  } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
  if (r < 0 || this.length < r || this.length < n) throw RangeError("Out of range index");
  if (n <= r) return this;
  if (r >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (s = r; s < n; ++s) this[s] = e;else {
    let o = g.isBuffer(e) ? e : g.from(e, i);
    let a = o.length;
    if (0 === a) throw TypeError('The value "' + e + '" is invalid for argument "value"');
    for (s = 0; s < n - r; ++s) this[s + r] = o[s % a];
  }
  return this;
};
let K = {};
function J(e, r, n) {
  K[e] = class extends n {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: r.apply(this, arguments),
        writable: !0,
        configurable: !0
      });
      this.name = `${this.name} [${e}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return e;
    }
    set code(e) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: e,
        writable: !0
      });
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  };
}
function ee(e) {
  let r = "";
  let n = e.length;
  let i = "-" === e[0] ? 1 : 0;
  for (; n >= i + 4; n -= 3) r = `_${e.slice(n - 3, n)}${r}`;
  return `${e.slice(0, n)}${r}`;
}
function et(e, r, n) {
  en(r, "offset");
  (void 0 === e[r] || void 0 === e[r + n]) && ei(r, e.length - (n + 1));
}
function er(e, r, n, i, s, o) {
  if (e > n || e < r) {
    let i;
    let s = "bigint" == typeof r ? "n" : "";
    i = o > 3 ? 0 === r || r === BigInt(0) ? `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : `>= ${r}${s} and <= ${n}${s}`;
    return new K.ERR_OUT_OF_RANGE("value", i, e);
  }
  et(i, s, o);
}
function en(e, r) {
  if ("number" != typeof e) throw new K.ERR_INVALID_ARG_TYPE(r, "number", e);
}
function ei(e, r, n) {
  if (Math.floor(e) !== e) {
    en(e, n);
    return new K.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
  }
  if (r < 0) throw new K.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new K.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${r}`, e);
}
J("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
  return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError);
J("ERR_INVALID_ARG_TYPE", function (e, r) {
  return `The "${e}" argument must be of type number. Received type ${typeof r}`;
}, TypeError);
J("ERR_OUT_OF_RANGE", function (e, r, n) {
  let i = `The value of "${e}" is out of range.`;
  let s = n;
  Number.isInteger(n) && Math.abs(n) > 0x100000000 ? s = ee(String(n)) : "bigint" == typeof n && (s = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (s = ee(s)), s += "n");
  return i += ` It must be ${r}. Received ${s}`;
}, RangeError);
let es = /[^+/0-9A-Za-z-_]/g;
function eo(e) {
  if ((e = (e = e.split("=")[0]).trim().replace(es, "")).length < 2) return "";
  for (; e.length % 4 != 0;) e += "=";
  return e;
}
function ea(e, r) {
  let n;
  r = r || 1 / 0;
  let i = e.length;
  let s = null;
  let o = [];
  for (let a = 0; a < i; ++a) {
    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
      if (!s) {
        if (n > 56319 || a + 1 === i) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        s = n;
        continue;
      }
      if (n < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189);
        s = n;
        continue;
      }
      n = (s - 55296 << 10 | n - 56320) + 65536;
    } else s && (r -= 3) > -1 && o.push(239, 191, 189);
    if (s = null, n < 128) {
      if ((r -= 1) < 0) break;
      o.push(n);
    } else if (n < 2048) {
      if ((r -= 2) < 0) break;
      o.push(n >> 6 | 192, 63 & n | 128);
    } else if (n < 65536) {
      if ((r -= 3) < 0) break;
      o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
    } else if (n < 1114112) {
      if ((r -= 4) < 0) break;
      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
    } else throw Error("Invalid code point");
  }
  return o;
}
function el(e) {
  let r = [];
  for (let n = 0; n < e.length; ++n) r.push(255 & e.charCodeAt(n));
  return r;
}
function eu(e, r) {
  let n;
  let i;
  let s = [];
  for (let o = 0; o < e.length && !((r -= 2) < 0); ++o) {
    i = (n = e.charCodeAt(o)) >> 8;
    s.push(n % 256);
    s.push(i);
  }
  return s;
}
function ec(e) {
  return toByteArray(eo(e));
}
function eh(e, r, n, i) {
  let s;
  for (s = 0; s < i && !(s + n >= r.length) && !(s >= e.length); ++s) r[s + n] = e[s];
  return s;
}
function ed(e, r) {
  return e instanceof r || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === r.name;
}
function ef(e) {
  return e != e;
}
let ep = function () {
  let e = "0123456789abcdef";
  let r = Array(256);
  for (let n = 0; n < 16; ++n) {
    let i = 16 * n;
    for (let s = 0; s < 16; ++s) r[i + s] = e[n] + e[s];
  }
  return r;
}();
function eg(e) {
  return "undefined" == typeof BigInt ? em : e;
}
function em() {
  throw Error("BigInt not supported");
}