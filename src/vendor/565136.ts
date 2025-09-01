import { createElement } from "react";
var i;
var o = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty;
var d = Object.prototype.propertyIsEnumerable;
var p = (e, r, n) => r in e ? o(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[r] = n;
var g = (e, r) => {
  for (var n in r || (r = {})) h.call(r, n) && p(e, n, r[n]);
  if (a) for (var n of a(r)) d.call(r, n) && p(e, n, r[n]);
  return e;
};
var m = (e, r) => {
  var n = {};
  for (var i in e) h.call(e, i) && 0 > r.indexOf(i) && (n[i] = e[i]);
  if (null != e && a) for (var i of a(e)) 0 > r.indexOf(i) && d.call(e, i) && (n[i] = e[i]);
  return n;
};
(e => {
  let r = class {
    constructor(e, n, i, s) {
      if (this.version = e, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], e < r.MIN_VERSION || e > r.MAX_VERSION) throw RangeError("Version value out of range");
      if (s < -1 || s > 7) throw RangeError("Mask value out of range");
      this.size = 4 * e + 17;
      let a = [];
      for (let e = 0; e < this.size; e++) a.push(!1);
      for (let e = 0; e < this.size; e++) {
        this.modules.push(a.slice());
        this.isFunction.push(a.slice());
      }
      this.drawFunctionPatterns();
      let h = this.addEccAndInterleave(i);
      if (this.drawCodewords(h), -1 == s) {
        let e = 1e9;
        for (let r = 0; r < 8; r++) {
          this.applyMask(r);
          this.drawFormatBits(r);
          let n = this.getPenaltyScore();
          n < e && (s = r, e = n);
          this.applyMask(r);
        }
      }
      o(0 <= s && s <= 7);
      this.mask = s;
      this.applyMask(s);
      this.drawFormatBits(s);
      this.isFunction = [];
    }
    static encodeText(n, i) {
      let s = e.QrSegment.makeSegments(n);
      return r.encodeSegments(s, i);
    }
    static encodeBinary(n, i) {
      let s = e.QrSegment.makeBytes(n);
      return r.encodeSegments([s], i);
    }
    static encodeSegments(e, n, s = 1, a = 40, d = -1, p = !0) {
      let g;
      let m;
      if (!(r.MIN_VERSION <= s && s <= a && a <= r.MAX_VERSION) || d < -1 || d > 7) throw RangeError("Invalid value");
      for (g = s;; g++) {
        let i = 8 * r.getNumDataCodewords(g, n);
        let s = h.getTotalBits(e, g);
        if (s <= i) {
          m = s;
          break;
        }
        if (g >= a) throw RangeError("Data too long");
      }
      for (let e of [r.Ecc.MEDIUM, r.Ecc.QUARTILE, r.Ecc.HIGH]) p && m <= 8 * r.getNumDataCodewords(g, e) && (n = e);
      let v = [];
      for (let r of e) for (let e of (i(r.mode.modeBits, 4, v), i(r.numChars, r.mode.numCharCountBits(g), v), r.getData())) v.push(e);
      o(v.length == m);
      let y = 8 * r.getNumDataCodewords(g, n);
      o(v.length <= y);
      i(0, Math.min(4, y - v.length), v);
      i(0, (8 - v.length % 8) % 8, v);
      o(v.length % 8 == 0);
      for (let e = 236; v.length < y; e ^= 253) i(e, 8, v);
      let b = [];
      for (; 8 * b.length < v.length;) b.push(0);
      v.forEach((e, r) => b[r >>> 3] |= e << 7 - (7 & r));
      return new r(g, n, b, d);
    }
    getModule(e, r) {
      return 0 <= e && e < this.size && 0 <= r && r < this.size && this.modules[r][e];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let e = 0; e < this.size; e++) {
        this.setFunctionModule(6, e, e % 2 == 0);
        this.setFunctionModule(e, 6, e % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      let e = this.getAlignmentPatternPositions();
      let r = e.length;
      for (let n = 0; n < r; n++) for (let i = 0; i < r; i++) 0 == n && 0 == i || 0 == n && i == r - 1 || n == r - 1 && 0 == i || this.drawAlignmentPattern(e[n], e[i]);
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(e) {
      let r = this.errorCorrectionLevel.formatBits << 3 | e;
      let n = r;
      for (let e = 0; e < 10; e++) n = n << 1 ^ (n >>> 9) * 1335;
      let i = (r << 10 | n) ^ 21522;
      o(i >>> 15 == 0);
      for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, s(i, e));
      this.setFunctionModule(8, 7, s(i, 6));
      this.setFunctionModule(8, 8, s(i, 7));
      this.setFunctionModule(7, 8, s(i, 8));
      for (let e = 9; e < 15; e++) this.setFunctionModule(14 - e, 8, s(i, e));
      for (let e = 0; e < 8; e++) this.setFunctionModule(this.size - 1 - e, 8, s(i, e));
      for (let e = 8; e < 15; e++) this.setFunctionModule(8, this.size - 15 + e, s(i, e));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let e = this.version;
      for (let r = 0; r < 12; r++) e = e << 1 ^ (e >>> 11) * 7973;
      let r = this.version << 12 | e;
      o(r >>> 18 == 0);
      for (let e = 0; e < 18; e++) {
        let n = s(r, e);
        let i = this.size - 11 + e % 3;
        let o = Math.floor(e / 3);
        this.setFunctionModule(i, o, n);
        this.setFunctionModule(o, i, n);
      }
    }
    drawFinderPattern(e, r) {
      for (let n = -4; n <= 4; n++) for (let i = -4; i <= 4; i++) {
        let s = Math.max(Math.abs(i), Math.abs(n));
        let o = e + i;
        let a = r + n;
        0 <= o && o < this.size && 0 <= a && a < this.size && this.setFunctionModule(o, a, 2 != s && 4 != s);
      }
    }
    drawAlignmentPattern(e, r) {
      for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) this.setFunctionModule(e + i, r + n, 1 != Math.max(Math.abs(i), Math.abs(n)));
    }
    setFunctionModule(e, r, n) {
      this.modules[r][e] = n;
      this.isFunction[r][e] = !0;
    }
    addEccAndInterleave(e) {
      let n = this.version;
      let i = this.errorCorrectionLevel;
      if (e.length != r.getNumDataCodewords(n, i)) throw RangeError("Invalid argument");
      let s = r.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][n];
      let a = r.ECC_CODEWORDS_PER_BLOCK[i.ordinal][n];
      let h = Math.floor(r.getNumRawDataModules(n) / 8);
      let d = s - h % s;
      let p = Math.floor(h / s);
      let g = [];
      let m = r.reedSolomonComputeDivisor(a);
      for (function () {
        let n = 0;
        let i = 0;
      }(); n < s; n++) {
        let s = e.slice(i, i + p - a + (n < d ? 0 : 1));
        i += s.length;
        let o = r.reedSolomonComputeRemainder(s, m);
        n < d && s.push(0);
        g.push(s.concat(o));
      }
      let v = [];
      for (let e = 0; e < g[0].length; e++) g.forEach((r, n) => {
        (e != p - a || n >= d) && v.push(r[e]);
      });
      o(v.length == h);
      return v;
    }
    drawCodewords(e) {
      if (e.length != Math.floor(r.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
      let n = 0;
      for (let r = this.size - 1; r >= 1; r -= 2) {
        6 == r && (r = 5);
        for (let i = 0; i < this.size; i++) for (let o = 0; o < 2; o++) {
          let a = r - o;
          let h = (r + 1 & 2) == 0 ? this.size - 1 - i : i;
          !this.isFunction[h][a] && n < 8 * e.length && (this.modules[h][a] = s(e[n >>> 3], 7 - (7 & n)), n++);
        }
      }
      o(n == 8 * e.length);
    }
    applyMask(e) {
      if (e < 0 || e > 7) throw RangeError("Mask value out of range");
      for (let r = 0; r < this.size; r++) for (let n = 0; n < this.size; n++) {
        let i;
        switch (e) {
          case 0:
            i = (n + r) % 2 == 0;
            break;
          case 1:
            i = r % 2 == 0;
            break;
          case 2:
            i = n % 3 == 0;
            break;
          case 3:
            i = (n + r) % 3 == 0;
            break;
          case 4:
            i = (Math.floor(n / 3) + Math.floor(r / 2)) % 2 == 0;
            break;
          case 5:
            i = n * r % 2 + n * r % 3 == 0;
            break;
          case 6:
            i = (n * r % 2 + n * r % 3) % 2 == 0;
            break;
          case 7:
            i = ((n + r) % 2 + n * r % 3) % 2 == 0;
            break;
          default:
            throw Error("Unreachable");
        }
        !this.isFunction[r][n] && i && (this.modules[r][n] = !this.modules[r][n]);
      }
    }
    getPenaltyScore() {
      let e = 0;
      for (let n = 0; n < this.size; n++) {
        let i = !1;
        let s = 0;
        let o = [0, 0, 0, 0, 0, 0, 0];
        for (let a = 0; a < this.size; a++) this.modules[n][a] == i ? 5 == ++s ? e += r.PENALTY_N1 : s > 5 && e++ : (this.finderPenaltyAddHistory(s, o), i || (e += this.finderPenaltyCountPatterns(o) * r.PENALTY_N3), i = this.modules[n][a], s = 1);
        e += this.finderPenaltyTerminateAndCount(i, s, o) * r.PENALTY_N3;
      }
      for (let n = 0; n < this.size; n++) {
        let i = !1;
        let s = 0;
        let o = [0, 0, 0, 0, 0, 0, 0];
        for (let a = 0; a < this.size; a++) this.modules[a][n] == i ? 5 == ++s ? e += r.PENALTY_N1 : s > 5 && e++ : (this.finderPenaltyAddHistory(s, o), i || (e += this.finderPenaltyCountPatterns(o) * r.PENALTY_N3), i = this.modules[a][n], s = 1);
        e += this.finderPenaltyTerminateAndCount(i, s, o) * r.PENALTY_N3;
      }
      for (let n = 0; n < this.size - 1; n++) for (let i = 0; i < this.size - 1; i++) {
        let s = this.modules[n][i];
        s == this.modules[n][i + 1] && s == this.modules[n + 1][i] && s == this.modules[n + 1][i + 1] && (e += r.PENALTY_N2);
      }
      let n = 0;
      for (let e of this.modules) n = e.reduce((e, r) => e + (r ? 1 : 0), n);
      let i = this.size * this.size;
      let s = Math.ceil(Math.abs(20 * n - 10 * i) / i) - 1;
      o(0 <= s && s <= 9);
      o(0 <= (e += s * r.PENALTY_N4) && e <= 2568888);
      return e;
    }
    getAlignmentPatternPositions() {
      if (1 == this.version) return [];
      {
        let e = Math.floor(this.version / 7) + 2;
        let r = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2));
        let n = [6];
        for (let i = this.size - 7; n.length < e; i -= r) n.splice(1, 0, i);
        return n;
      }
    }
    static getNumRawDataModules(e) {
      if (e < r.MIN_VERSION || e > r.MAX_VERSION) throw RangeError("Version number out of range");
      let n = (16 * e + 128) * e + 64;
      if (e >= 2) {
        let r = Math.floor(e / 7) + 2;
        n -= (25 * r - 10) * r - 55;
        e >= 7 && (n -= 36);
      }
      o(208 <= n && n <= 29648);
      return n;
    }
    static getNumDataCodewords(e, n) {
      return Math.floor(r.getNumRawDataModules(e) / 8) - r.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] * r.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e];
    }
    static reedSolomonComputeDivisor(e) {
      if (e < 1 || e > 255) throw RangeError("Degree out of range");
      let n = [];
      for (let r = 0; r < e - 1; r++) n.push(0);
      n.push(1);
      let i = 1;
      for (let s = 0; s < e; s++) {
        for (let e = 0; e < n.length; e++) {
          n[e] = r.reedSolomonMultiply(n[e], i);
          e + 1 < n.length && (n[e] ^= n[e + 1]);
        }
        i = r.reedSolomonMultiply(i, 2);
      }
      return n;
    }
    static reedSolomonComputeRemainder(e, n) {
      let i = n.map(e => 0);
      for (let s of e) {
        let e = s ^ i.shift();
        i.push(0);
        n.forEach((n, s) => i[s] ^= r.reedSolomonMultiply(n, e));
      }
      return i;
    }
    static reedSolomonMultiply(e, r) {
      if (e >>> 8 != 0 || r >>> 8 != 0) throw RangeError("Byte out of range");
      let n = 0;
      for (let i = 7; i >= 0; i--) n = n << 1 ^ (n >>> 7) * 285 ^ (r >>> i & 1) * e;
      o(n >>> 8 == 0);
      return n;
    }
    finderPenaltyCountPatterns(e) {
      let r = e[1];
      o(r <= 3 * this.size);
      let n = r > 0 && e[2] == r && e[3] == 3 * r && e[4] == r && e[5] == r;
      return (n && e[0] >= 4 * r && e[6] >= r ? 1 : 0) + (n && e[6] >= 4 * r && e[0] >= r ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(e, r, n) {
      e && (this.finderPenaltyAddHistory(r, n), r = 0);
      r += this.size;
      this.finderPenaltyAddHistory(r, n);
      return this.finderPenaltyCountPatterns(n);
    }
    finderPenaltyAddHistory(e, r) {
      0 == r[0] && (e += this.size);
      r.pop();
      r.unshift(e);
    }
  };
  let n = r;
  function i(e, r, n) {
    if (r < 0 || r > 31 || e >>> r != 0) throw RangeError("Value out of range");
    for (let i = r - 1; i >= 0; i--) n.push(e >>> i & 1);
  }
  function s(e, r) {
    return (e >>> r & 1) != 0;
  }
  function o(e) {
    if (!e) throw Error("Assertion error");
  }
  n.MIN_VERSION = 1;
  n.MAX_VERSION = 40;
  n.PENALTY_N1 = 3;
  n.PENALTY_N2 = 3;
  n.PENALTY_N3 = 40;
  n.PENALTY_N4 = 10;
  n.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]];
  n.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]];
  e.QrCode = n;
  let a = class {
    constructor(e, r, n) {
      if (this.mode = e, this.numChars = r, this.bitData = n, r < 0) throw RangeError("Invalid argument");
      this.bitData = n.slice();
    }
    static makeBytes(e) {
      let r = [];
      for (let n of e) i(n, 8, r);
      return new a(a.Mode.BYTE, e.length, r);
    }
    static makeNumeric(e) {
      if (!a.isNumeric(e)) throw RangeError("String contains non-numeric characters");
      let r = [];
      for (let n = 0; n < e.length;) {
        let s = Math.min(e.length - n, 3);
        i(parseInt(e.substr(n, s), 10), 3 * s + 1, r);
        n += s;
      }
      return new a(a.Mode.NUMERIC, e.length, r);
    }
    static makeAlphanumeric(e) {
      let r;
      if (!a.isAlphanumeric(e)) throw RangeError("String contains unencodable characters in alphanumeric mode");
      let n = [];
      for (r = 0; r + 2 <= e.length; r += 2) {
        let s = 45 * a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r));
        i(s += a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1)), 11, n);
      }
      r < e.length && i(a.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, n);
      return new a(a.Mode.ALPHANUMERIC, e.length, n);
    }
    static makeSegments(e) {
      return "" == e ? [] : a.isNumeric(e) ? [a.makeNumeric(e)] : a.isAlphanumeric(e) ? [a.makeAlphanumeric(e)] : [a.makeBytes(a.toUtf8ByteArray(e))];
    }
    static makeEci(e) {
      let r = [];
      if (e < 0) throw RangeError("ECI assignment value out of range");
      if (e < 128) i(e, 8, r);else if (e < 16384) {
        i(2, 2, r);
        i(e, 14, r);
      } else if (e < 1e6) {
        i(6, 3, r);
        i(e, 21, r);
      } else throw RangeError("ECI assignment value out of range");
      return new a(a.Mode.ECI, 0, r);
    }
    static isNumeric(e) {
      return a.NUMERIC_REGEX.test(e);
    }
    static isAlphanumeric(e) {
      return a.ALPHANUMERIC_REGEX.test(e);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(e, r) {
      let n = 0;
      for (let i of e) {
        let e = i.mode.numCharCountBits(r);
        if (i.numChars >= 1 << e) return 1 / 0;
        n += 4 + e + i.bitData.length;
      }
      return n;
    }
    static toUtf8ByteArray(e) {
      e = encodeURI(e);
      let r = [];
      for (let n = 0; n < e.length; n++) "%" != e.charAt(n) ? r.push(e.charCodeAt(n)) : (r.push(parseInt(e.substr(n + 1, 2), 16)), n += 2);
      return r;
    }
  };
  let h = a;
  h.NUMERIC_REGEX = /^[0-9]*$/;
  h.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  h.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  e.QrSegment = h;
})(i || (i = {}));
(e => {
  let r;
  (e => {
    let r = class {
      constructor(e, r) {
        this.ordinal = e;
        this.formatBits = r;
      }
    };
    let n = r;
    n.LOW = new r(0, 1);
    n.MEDIUM = new r(1, 0);
    n.QUARTILE = new r(2, 3);
    n.HIGH = new r(3, 2);
    e.Ecc = n;
  })(r = e.QrCode || (e.QrCode = {}));
})(i || (i = {}));
(e => {
  let r;
  (e => {
    let r = class {
      constructor(e, r) {
        this.modeBits = e;
        this.numBitsCharCount = r;
      }
      numCharCountBits(e) {
        return this.numBitsCharCount[Math.floor((e + 7) / 17)];
      }
    };
    let n = r;
    n.NUMERIC = new r(1, [10, 12, 14]);
    n.ALPHANUMERIC = new r(2, [9, 11, 13]);
    n.BYTE = new r(4, [8, 16, 16]);
    n.KANJI = new r(8, [8, 10, 12]);
    n.ECI = new r(7, [0, 0, 0]);
    e.Mode = n;
  })(r = e.QrSegment || (e.QrSegment = {}));
})(i || (i = {}));
var v = i;
var y = {
  L: v.QrCode.Ecc.LOW,
  M: v.QrCode.Ecc.MEDIUM,
  Q: v.QrCode.Ecc.QUARTILE,
  H: v.QrCode.Ecc.HIGH
};
var b = 128;
var O = "L";
var x = "#FFFFFF";
var w = "#000000";
var k = !1;
var _ = 4;
var S = .1;
function E(e, r = 0) {
  let n = [];
  e.forEach(function (e, i) {
    let s = null;
    e.forEach(function (o, a) {
      if (!o && null !== s) {
        n.push(`M${s + r} ${i + r}h${a - s}v1H${s + r}z`);
        s = null;
        return;
      }
      if (a === e.length - 1) {
        if (!o) return;
        null === s ? n.push(`M${a + r},${i + r} h1v1H${a + r}z`) : n.push(`M${s + r},${i + r} h${a + 1 - s}v1H${s + r}z`);
        return;
      }
      o && null === s && (s = a);
    });
  });
  return n.join("");
}
function A(e, r) {
  return e.slice().map((e, n) => n < r.y || n >= r.y + r.h ? e : e.map((e, n) => (n < r.x || n >= r.x + r.w) && e));
}
function C(e, r, n, i) {
  if (null == i) return null;
  let s = n ? _ : 0;
  let o = e.length + 2 * s;
  let a = Math.floor(r * S);
  let h = o / r;
  let d = (i.width || a) * h;
  let p = (i.height || a) * h;
  let g = null == i.x ? e.length / 2 - d / 2 : i.x * h;
  let m = null == i.y ? e.length / 2 - p / 2 : i.y * h;
  let v = null;
  if (i.excavate) {
    let e = Math.floor(g);
    let r = Math.floor(m);
    let n = Math.ceil(d + g - e);
    let i = Math.ceil(p + m - r);
    v = {
      x: e,
      y: r,
      w: n,
      h: i
    };
  }
  return {
    x: g,
    y: m,
    h: p,
    w: d,
    excavation: v
  };
}
export function $$T0(e) {
  let r = e;
  let {
    value,
    size = b,
    level = O,
    bgColor = x,
    fgColor = w,
    includeMargin = k,
    imageSettings
  } = r;
  let S = m(r, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]);
  let T = v.QrCode.encodeText(value, y[level]).getModules();
  let I = includeMargin ? _ : 0;
  let P = T.length + 2 * I;
  let R = C(T, size, includeMargin, imageSettings);
  let M = null;
  null != imageSettings && null != R && (null != R.excavation && (T = A(T, R.excavation)), M = createElement("image", {
    xlinkHref: imageSettings.src,
    height: R.h,
    width: R.w,
    x: R.x + I,
    y: R.y + I,
    preserveAspectRatio: "none"
  }));
  let D = E(T, I);
  return createElement("svg", g({
    height: size,
    width: size,
    viewBox: `0 0 ${P} ${P}`
  }, S), createElement("path", {
    fill: bgColor,
    d: `M0,0 h${P}v${P}H0z`,
    shapeRendering: "crispEdges"
  }), createElement("path", {
    fill: fgColor,
    d: D,
    shapeRendering: "crispEdges"
  }), M);
}
(function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return !1;
  }
})();
export const hp = $$T0;