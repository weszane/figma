import { e as _$$e } from "../vendor/125946";
import { Wf, Hi, Yo, Xq, yL, $s, cd, QY, gO } from "../vendor/821199";
function s(e) {
  var r = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
  if (!_$$e(e)) throw TypeError("input must be an array");
  if (0 === e.length) throw TypeError("input must not be empty");
  var n = r.fromIndex;
  var s = void 0 === n ? 0 : n;
  var o = r.toIndex;
  var a = void 0 === o ? e.length : o;
  if (s < 0 || s >= e.length || !Number.isInteger(s)) throw Error("fromIndex must be a positive integer smaller than length");
  if (a <= s || a > e.length || !Number.isInteger(a)) throw Error("toIndex must be an integer greater than fromIndex and at most equal to length");
  for (h = e[s], d = s + 1, void 0; d < a; d++) {
    var h;
    var d;
    e[d] > h && (h = e[d]);
  }
  return h;
}
function o(e) {
  var r = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
  if (!_$$e(e)) throw TypeError("input must be an array");
  if (0 === e.length) throw TypeError("input must not be empty");
  var n = r.fromIndex;
  var s = void 0 === n ? 0 : n;
  var o = r.toIndex;
  var a = void 0 === o ? e.length : o;
  if (s < 0 || s >= e.length || !Number.isInteger(s)) throw Error("fromIndex must be a positive integer smaller than length");
  if (a <= s || a > e.length || !Number.isInteger(a)) throw Error("toIndex must be an integer greater than fromIndex and at most equal to length");
  for (h = e[s], d = s + 1, void 0; d < a; d++) {
    var h;
    var d;
    e[d] < h && (h = e[d]);
  }
  return h;
}
function a(e) {
  var r;
  var n = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
  if (_$$e(e)) {
    if (0 === e.length) throw TypeError("input must not be empty");
  } else throw TypeError("input must be an array");
  if (void 0 !== n.output) {
    if (!_$$e(n.output)) throw TypeError("output option must be an array if specified");
    r = n.output;
  } else r = Array(e.length);
  var a = o(e);
  var h = s(e);
  if (a === h) throw RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
  var d = n.min;
  var p = void 0 === d ? n.autoMinMax ? a : 0 : d;
  var g = n.max;
  var m = void 0 === g ? n.autoMinMax ? h : 1 : g;
  if (p >= m) throw RangeError("min option must be smaller than max option");
  for (v = (m - p) / (h - a), y = 0, void 0; y < e.length; y++) {
    var v;
    var y;
    r[y] = (e[y] - a) * v + p;
  }
  return r;
}
let h = " ".repeat(2);
let d = " ".repeat(4);
function p() {
  return g(this);
}
function g(e, r = {}) {
  let {
    maxRows = 15,
    maxColumns = 10,
    maxNumSize = 8,
    padMinus = "auto"
  } = r;
  return `${e.constructor.name} {
${h}[
${d}${m(e, maxRows, maxColumns, maxNumSize, padMinus)}
${h}]
${h}rows: ${e.rows}
${h}columns: ${e.columns}
}`;
}
function m(e, r, n, i, s) {
  let {
    rows,
    columns
  } = e;
  let h = Math.min(rows, r);
  let p = Math.min(columns, n);
  let g = [];
  if ("auto" === s) {
    s = !1;
    e: for (let r = 0; r < h; r++) for (let n = 0; n < p; n++) if (0 > e.get(r, n)) {
      s = !0;
      break e;
    }
  }
  for (let r = 0; r < h; r++) {
    let n = [];
    for (let o = 0; o < p; o++) n.push(v(e.get(r, o), i, s));
    g.push(`${n.join(" ")}`);
  }
  p !== columns && (g[g.length - 1] += ` ... ${columns - n} more columns`);
  h !== rows && g.push(`... ${rows - r} more rows`);
  return g.join(`
${d}`);
}
function v(e, r, n) {
  return (e >= 0 && n ? ` ${$$y(e, r - 1)}` : $$y(e, r)).padEnd(r);
}
function $$y(e, r) {
  let n = e.toString();
  if (n.length <= r) return n;
  let i = e.toFixed(r);
  if (i.length > r && (i = e.toFixed(Math.max(0, r - (i.length - r)))), i.length <= r && !i.startsWith("0.000") && !i.startsWith("-0.000")) return i;
  let s = e.toExponential(r);
  s.length > r && (s = e.toExponential(Math.max(0, r - (s.length - r))));
  return s.slice(0);
}
function b(e, r) {
  e.prototype.add = function (e) {
    return "number" == typeof e ? this.addS(e) : this.addM(e);
  };
  e.prototype.addS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) + e);
    return this;
  };
  e.prototype.addM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) + e.get(r, n));
    return this;
  };
  e.add = function (e, n) {
    return new r(e).add(n);
  };
  e.prototype.sub = function (e) {
    return "number" == typeof e ? this.subS(e) : this.subM(e);
  };
  e.prototype.subS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) - e);
    return this;
  };
  e.prototype.subM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) - e.get(r, n));
    return this;
  };
  e.sub = function (e, n) {
    return new r(e).sub(n);
  };
  e.prototype.subtract = e.prototype.sub;
  e.prototype.subtractS = e.prototype.subS;
  e.prototype.subtractM = e.prototype.subM;
  e.subtract = e.sub;
  e.prototype.mul = function (e) {
    return "number" == typeof e ? this.mulS(e) : this.mulM(e);
  };
  e.prototype.mulS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * e);
    return this;
  };
  e.prototype.mulM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * e.get(r, n));
    return this;
  };
  e.mul = function (e, n) {
    return new r(e).mul(n);
  };
  e.prototype.multiply = e.prototype.mul;
  e.prototype.multiplyS = e.prototype.mulS;
  e.prototype.multiplyM = e.prototype.mulM;
  e.multiply = e.mul;
  e.prototype.div = function (e) {
    return "number" == typeof e ? this.divS(e) : this.divM(e);
  };
  e.prototype.divS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) / e);
    return this;
  };
  e.prototype.divM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) / e.get(r, n));
    return this;
  };
  e.div = function (e, n) {
    return new r(e).div(n);
  };
  e.prototype.divide = e.prototype.div;
  e.prototype.divideS = e.prototype.divS;
  e.prototype.divideM = e.prototype.divM;
  e.divide = e.div;
  e.prototype.mod = function (e) {
    return "number" == typeof e ? this.modS(e) : this.modM(e);
  };
  e.prototype.modS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) % e);
    return this;
  };
  e.prototype.modM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) % e.get(r, n));
    return this;
  };
  e.mod = function (e, n) {
    return new r(e).mod(n);
  };
  e.prototype.modulus = e.prototype.mod;
  e.prototype.modulusS = e.prototype.modS;
  e.prototype.modulusM = e.prototype.modM;
  e.modulus = e.mod;
  e.prototype.and = function (e) {
    return "number" == typeof e ? this.andS(e) : this.andM(e);
  };
  e.prototype.andS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) & e);
    return this;
  };
  e.prototype.andM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) & e.get(r, n));
    return this;
  };
  e.and = function (e, n) {
    return new r(e).and(n);
  };
  e.prototype.or = function (e) {
    return "number" == typeof e ? this.orS(e) : this.orM(e);
  };
  e.prototype.orS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) | e);
    return this;
  };
  e.prototype.orM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) | e.get(r, n));
    return this;
  };
  e.or = function (e, n) {
    return new r(e).or(n);
  };
  e.prototype.xor = function (e) {
    return "number" == typeof e ? this.xorS(e) : this.xorM(e);
  };
  e.prototype.xorS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) ^ e);
    return this;
  };
  e.prototype.xorM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) ^ e.get(r, n));
    return this;
  };
  e.xor = function (e, n) {
    return new r(e).xor(n);
  };
  e.prototype.leftShift = function (e) {
    return "number" == typeof e ? this.leftShiftS(e) : this.leftShiftM(e);
  };
  e.prototype.leftShiftS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) << e);
    return this;
  };
  e.prototype.leftShiftM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) << e.get(r, n));
    return this;
  };
  e.leftShift = function (e, n) {
    return new r(e).leftShift(n);
  };
  e.prototype.signPropagatingRightShift = function (e) {
    return "number" == typeof e ? this.signPropagatingRightShiftS(e) : this.signPropagatingRightShiftM(e);
  };
  e.prototype.signPropagatingRightShiftS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) >> e);
    return this;
  };
  e.prototype.signPropagatingRightShiftM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) >> e.get(r, n));
    return this;
  };
  e.signPropagatingRightShift = function (e, n) {
    return new r(e).signPropagatingRightShift(n);
  };
  e.prototype.rightShift = function (e) {
    return "number" == typeof e ? this.rightShiftS(e) : this.rightShiftM(e);
  };
  e.prototype.rightShiftS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) >>> e);
    return this;
  };
  e.prototype.rightShiftM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) >>> e.get(r, n));
    return this;
  };
  e.rightShift = function (e, n) {
    return new r(e).rightShift(n);
  };
  e.prototype.zeroFillRightShift = e.prototype.rightShift;
  e.prototype.zeroFillRightShiftS = e.prototype.rightShiftS;
  e.prototype.zeroFillRightShiftM = e.prototype.rightShiftM;
  e.zeroFillRightShift = e.rightShift;
  e.prototype.not = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, ~this.get(e, r));
    return this;
  };
  e.not = function (e) {
    return new r(e).not();
  };
  e.prototype.abs = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.abs(this.get(e, r)));
    return this;
  };
  e.abs = function (e) {
    return new r(e).abs();
  };
  e.prototype.acos = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.acos(this.get(e, r)));
    return this;
  };
  e.acos = function (e) {
    return new r(e).acos();
  };
  e.prototype.acosh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.acosh(this.get(e, r)));
    return this;
  };
  e.acosh = function (e) {
    return new r(e).acosh();
  };
  e.prototype.asin = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.asin(this.get(e, r)));
    return this;
  };
  e.asin = function (e) {
    return new r(e).asin();
  };
  e.prototype.asinh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.asinh(this.get(e, r)));
    return this;
  };
  e.asinh = function (e) {
    return new r(e).asinh();
  };
  e.prototype.atan = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.atan(this.get(e, r)));
    return this;
  };
  e.atan = function (e) {
    return new r(e).atan();
  };
  e.prototype.atanh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.atanh(this.get(e, r)));
    return this;
  };
  e.atanh = function (e) {
    return new r(e).atanh();
  };
  e.prototype.cbrt = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.cbrt(this.get(e, r)));
    return this;
  };
  e.cbrt = function (e) {
    return new r(e).cbrt();
  };
  e.prototype.ceil = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.ceil(this.get(e, r)));
    return this;
  };
  e.ceil = function (e) {
    return new r(e).ceil();
  };
  e.prototype.clz32 = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.clz32(this.get(e, r)));
    return this;
  };
  e.clz32 = function (e) {
    return new r(e).clz32();
  };
  e.prototype.cos = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.cos(this.get(e, r)));
    return this;
  };
  e.cos = function (e) {
    return new r(e).cos();
  };
  e.prototype.cosh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.cosh(this.get(e, r)));
    return this;
  };
  e.cosh = function (e) {
    return new r(e).cosh();
  };
  e.prototype.exp = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.exp(this.get(e, r)));
    return this;
  };
  e.exp = function (e) {
    return new r(e).exp();
  };
  e.prototype.expm1 = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.expm1(this.get(e, r)));
    return this;
  };
  e.expm1 = function (e) {
    return new r(e).expm1();
  };
  e.prototype.floor = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.floor(this.get(e, r)));
    return this;
  };
  e.floor = function (e) {
    return new r(e).floor();
  };
  e.prototype.fround = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.fround(this.get(e, r)));
    return this;
  };
  e.fround = function (e) {
    return new r(e).fround();
  };
  e.prototype.log = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.log(this.get(e, r)));
    return this;
  };
  e.log = function (e) {
    return new r(e).log();
  };
  e.prototype.log1p = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.log1p(this.get(e, r)));
    return this;
  };
  e.log1p = function (e) {
    return new r(e).log1p();
  };
  e.prototype.log10 = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.log10(this.get(e, r)));
    return this;
  };
  e.log10 = function (e) {
    return new r(e).log10();
  };
  e.prototype.log2 = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.log2(this.get(e, r)));
    return this;
  };
  e.log2 = function (e) {
    return new r(e).log2();
  };
  e.prototype.round = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.round(this.get(e, r)));
    return this;
  };
  e.round = function (e) {
    return new r(e).round();
  };
  e.prototype.sign = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.sign(this.get(e, r)));
    return this;
  };
  e.sign = function (e) {
    return new r(e).sign();
  };
  e.prototype.sin = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.sin(this.get(e, r)));
    return this;
  };
  e.sin = function (e) {
    return new r(e).sin();
  };
  e.prototype.sinh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.sinh(this.get(e, r)));
    return this;
  };
  e.sinh = function (e) {
    return new r(e).sinh();
  };
  e.prototype.sqrt = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.sqrt(this.get(e, r)));
    return this;
  };
  e.sqrt = function (e) {
    return new r(e).sqrt();
  };
  e.prototype.tan = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.tan(this.get(e, r)));
    return this;
  };
  e.tan = function (e) {
    return new r(e).tan();
  };
  e.prototype.tanh = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.tanh(this.get(e, r)));
    return this;
  };
  e.tanh = function (e) {
    return new r(e).tanh();
  };
  e.prototype.trunc = function () {
    for (let e = 0; e < this.rows; e++) for (let r = 0; r < this.columns; r++) this.set(e, r, Math.trunc(this.get(e, r)));
    return this;
  };
  e.trunc = function (e) {
    return new r(e).trunc();
  };
  e.pow = function (e, n) {
    return new r(e).pow(n);
  };
  e.prototype.pow = function (e) {
    return "number" == typeof e ? this.powS(e) : this.powM(e);
  };
  e.prototype.powS = function (e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, Math.pow(this.get(r, n), e));
    return this;
  };
  e.prototype.powM = function (e) {
    if (e = r.checkMatrix(e), this.rows !== e.rows || this.columns !== e.columns) throw RangeError("Matrices dimensions must be equal");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, Math.pow(this.get(r, n), e.get(r, n)));
    return this;
  };
}
function x(e) {
  let r = Wf(e.rows);
  for (let n = 0; n < e.rows; ++n) for (let i = 0; i < e.columns; ++i) r[n] += e.get(n, i);
  return r;
}
function w(e) {
  let r = Wf(e.columns);
  for (let n = 0; n < e.rows; ++n) for (let i = 0; i < e.columns; ++i) r[i] += e.get(n, i);
  return r;
}
function k(e) {
  let r = 0;
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) r += e.get(n, i);
  return r;
}
function _(e) {
  let r = Wf(e.rows, 1);
  for (let n = 0; n < e.rows; ++n) for (let i = 0; i < e.columns; ++i) r[n] *= e.get(n, i);
  return r;
}
function S(e) {
  let r = Wf(e.columns, 1);
  for (let n = 0; n < e.rows; ++n) for (let i = 0; i < e.columns; ++i) r[i] *= e.get(n, i);
  return r;
}
function E(e) {
  let r = 1;
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) r *= e.get(n, i);
  return r;
}
function $$A(e, r, n) {
  let i = e.rows;
  let s = e.columns;
  let o = [];
  for (let a = 0; a < i; a++) {
    let i = 0;
    let h = 0;
    let d = 0;
    for (let r = 0; r < s; r++) {
      i += d = e.get(a, r) - n[a];
      h += d * d;
    }
    r ? o.push((h - i * i / s) / (s - 1)) : o.push((h - i * i / s) / s);
  }
  return o;
}
function C(e, r, n) {
  let i = e.rows;
  let s = e.columns;
  let o = [];
  for (let a = 0; a < s; a++) {
    let s = 0;
    let h = 0;
    let d = 0;
    for (let r = 0; r < i; r++) {
      s += d = e.get(r, a) - n[a];
      h += d * d;
    }
    r ? o.push((h - s * s / i) / (i - 1)) : o.push((h - s * s / i) / i);
  }
  return o;
}
function T(e, r, n) {
  let i = e.rows;
  let s = e.columns;
  let o = i * s;
  let a = 0;
  let h = 0;
  let d = 0;
  for (let r = 0; r < i; r++) for (let i = 0; i < s; i++) {
    a += d = e.get(r, i) - n;
    h += d * d;
  }
  return r ? (h - a * a / o) / (o - 1) : (h - a * a / o) / o;
}
function I(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) - r[n]);
}
function P(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) - r[i]);
}
function R(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) - r);
}
function M(e) {
  let r = [];
  for (let n = 0; n < e.rows; n++) {
    let i = 0;
    for (let r = 0; r < e.columns; r++) i += Math.pow(e.get(n, r), 2) / (e.columns - 1);
    r.push(Math.sqrt(i));
  }
  return r;
}
function D(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) / r[n]);
}
function N(e) {
  let r = [];
  for (let n = 0; n < e.columns; n++) {
    let i = 0;
    for (let r = 0; r < e.rows; r++) i += Math.pow(e.get(r, n), 2) / (e.rows - 1);
    r.push(Math.sqrt(i));
  }
  return r;
}
function $(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) / r[i]);
}
function L(e) {
  let r = e.size - 1;
  let n = 0;
  for (let i = 0; i < e.columns; i++) for (let s = 0; s < e.rows; s++) n += Math.pow(e.get(s, i), 2) / r;
  return Math.sqrt(n);
}
function j(e, r) {
  for (let n = 0; n < e.rows; n++) for (let i = 0; i < e.columns; i++) e.set(n, i, e.get(n, i) / r);
}
export class $$z0 {
  static from1DArray(e, r, n) {
    if (e * r !== n.length) throw RangeError("data length does not match given dimensions");
    let i = new $$U1(e, r);
    for (let s = 0; s < e; s++) for (let e = 0; e < r; e++) i.set(s, e, n[s * r + e]);
    return i;
  }
  static rowVector(e) {
    let r = new $$U1(1, e.length);
    for (let n = 0; n < e.length; n++) r.set(0, n, e[n]);
    return r;
  }
  static columnVector(e) {
    let r = new $$U1(e.length, 1);
    for (let n = 0; n < e.length; n++) r.set(n, 0, e[n]);
    return r;
  }
  static zeros(e, r) {
    return new $$U1(e, r);
  }
  static ones(e, r) {
    return new $$U1(e, r).fill(1);
  }
  static rand(e, r, n = {}) {
    if ("object" != typeof n) throw TypeError("options must be an object");
    let {
      random = Math.random
    } = n;
    let s = new $$U1(e, r);
    for (let n = 0; n < e; n++) for (let e = 0; e < r; e++) s.set(n, e, random());
    return s;
  }
  static randInt(e, r, n = {}) {
    if ("object" != typeof n) throw TypeError("options must be an object");
    let {
      min = 0,
      max = 1e3,
      random = Math.random
    } = n;
    if (!Number.isInteger(min)) throw TypeError("min must be an integer");
    if (!Number.isInteger(max)) throw TypeError("max must be an integer");
    if (min >= max) throw RangeError("min must be smaller than max");
    let a = max - min;
    let h = new $$U1(e, r);
    for (let n = 0; n < e; n++) for (let e = 0; e < r; e++) {
      let r = min + Math.round(random() * a);
      h.set(n, e, r);
    }
    return h;
  }
  static eye(e, r, n) {
    void 0 === r && (r = e);
    void 0 === n && (n = 1);
    let i = Math.min(e, r);
    let s = this.zeros(e, r);
    for (let e = 0; e < i; e++) s.set(e, e, n);
    return s;
  }
  static diag(e, r, n) {
    let i = e.length;
    void 0 === r && (r = i);
    void 0 === n && (n = r);
    let s = Math.min(i, r, n);
    let o = this.zeros(r, n);
    for (let r = 0; r < s; r++) o.set(r, r, e[r]);
    return o;
  }
  static min(e, r) {
    e = this.checkMatrix(e);
    r = this.checkMatrix(r);
    let n = e.rows;
    let i = e.columns;
    let s = new $$U1(n, i);
    for (let o = 0; o < n; o++) for (let n = 0; n < i; n++) s.set(o, n, Math.min(e.get(o, n), r.get(o, n)));
    return s;
  }
  static max(e, r) {
    e = this.checkMatrix(e);
    r = this.checkMatrix(r);
    let n = e.rows;
    let i = e.columns;
    let s = new this(n, i);
    for (let o = 0; o < n; o++) for (let n = 0; n < i; n++) s.set(o, n, Math.max(e.get(o, n), r.get(o, n)));
    return s;
  }
  static checkMatrix(e) {
    return $$z0.isMatrix(e) ? e : new $$U1(e);
  }
  static isMatrix(e) {
    return null != e && "Matrix" === e.klass;
  }
  get size() {
    return this.rows * this.columns;
  }
  apply(e) {
    if ("function" != typeof e) throw TypeError("callback must be a function");
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) e.call(this, r, n);
    return this;
  }
  to1DArray() {
    let e = [];
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) e.push(this.get(r, n));
    return e;
  }
  to2DArray() {
    let e = [];
    for (let r = 0; r < this.rows; r++) {
      e.push([]);
      for (let n = 0; n < this.columns; n++) e[r].push(this.get(r, n));
    }
    return e;
  }
  toJSON() {
    return this.to2DArray();
  }
  isRowVector() {
    return 1 === this.rows;
  }
  isColumnVector() {
    return 1 === this.columns;
  }
  isVector() {
    return 1 === this.rows || 1 === this.columns;
  }
  isSquare() {
    return this.rows === this.columns;
  }
  isEmpty() {
    return 0 === this.rows || 0 === this.columns;
  }
  isSymmetric() {
    if (this.isSquare()) {
      for (let e = 0; e < this.rows; e++) for (let r = 0; r <= e; r++) if (this.get(e, r) !== this.get(r, e)) return !1;
      return !0;
    }
    return !1;
  }
  isEchelonForm() {
    let e = 0;
    let r = 0;
    let n = -1;
    let i = !0;
    let s = !1;
    for (; e < this.rows && i;) {
      for (r = 0, s = !1; r < this.columns && !1 === s;) 0 === this.get(e, r) ? r++ : 1 === this.get(e, r) && r > n ? (s = !0, n = r) : (i = !1, s = !0);
      e++;
    }
    return i;
  }
  isReducedEchelonForm() {
    let e = 0;
    let r = 0;
    let n = -1;
    let i = !0;
    let s = !1;
    for (; e < this.rows && i;) {
      for (r = 0, s = !1; r < this.columns && !1 === s;) 0 === this.get(e, r) ? r++ : 1 === this.get(e, r) && r > n ? (s = !0, n = r) : (i = !1, s = !0);
      for (let n = r + 1; n < this.rows; n++) 0 !== this.get(e, n) && (i = !1);
      e++;
    }
    return i;
  }
  echelonForm() {
    let e = this.clone();
    let r = 0;
    let n = 0;
    for (; r < e.rows && n < e.columns;) {
      let i = r;
      for (let s = r; s < e.rows; s++) e.get(s, n) > e.get(i, n) && (i = s);
      if (0 === e.get(i, n)) n++;else {
        e.swapRows(r, i);
        let s = e.get(r, n);
        for (let i = n; i < e.columns; i++) e.set(r, i, e.get(r, i) / s);
        for (let i = r + 1; i < e.rows; i++) {
          let s = e.get(i, n) / e.get(r, n);
          e.set(i, n, 0);
          for (let o = n + 1; o < e.columns; o++) e.set(i, o, e.get(i, o) - e.get(r, o) * s);
        }
        r++;
        n++;
      }
    }
    return e;
  }
  reducedEchelonForm() {
    let e = this.echelonForm();
    let r = e.columns;
    let n = e.rows;
    let i = n - 1;
    for (; i >= 0;) if (0 === e.maxRow(i)) i--;else {
      let s = 0;
      let o = !1;
      for (; s < n && !1 === o;) 1 === e.get(i, s) ? o = !0 : s++;
      for (let n = 0; n < i; n++) {
        let o = e.get(n, s);
        for (let a = s; a < r; a++) {
          let r = e.get(n, a) - o * e.get(i, a);
          e.set(n, a, r);
        }
      }
      i--;
    }
    return e;
  }
  set() {
    throw Error("set method is unimplemented");
  }
  get() {
    throw Error("get method is unimplemented");
  }
  repeat(e = {}) {
    if ("object" != typeof e) throw TypeError("options must be an object");
    let {
      rows = 1,
      columns = 1
    } = e;
    if (!Number.isInteger(rows) || rows <= 0) throw TypeError("rows must be a positive integer");
    if (!Number.isInteger(columns) || columns <= 0) throw TypeError("columns must be a positive integer");
    let i = new $$U1(this.rows * rows, this.columns * columns);
    for (let e = 0; e < rows; e++) for (let r = 0; r < columns; r++) i.setSubMatrix(this, this.rows * e, this.columns * r);
    return i;
  }
  fill(e) {
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, e);
    return this;
  }
  neg() {
    return this.mulS(-1);
  }
  getRow(e) {
    Hi(this, e);
    let r = [];
    for (let n = 0; n < this.columns; n++) r.push(this.get(e, n));
    return r;
  }
  getRowVector(e) {
    return $$U1.rowVector(this.getRow(e));
  }
  setRow(e, r) {
    Hi(this, e);
    r = Yo(this, r);
    for (let n = 0; n < this.columns; n++) this.set(e, n, r[n]);
    return this;
  }
  swapRows(e, r) {
    Hi(this, e);
    Hi(this, r);
    for (let n = 0; n < this.columns; n++) {
      let i = this.get(e, n);
      this.set(e, n, this.get(r, n));
      this.set(r, n, i);
    }
    return this;
  }
  getColumn(e) {
    Xq(this, e);
    let r = [];
    for (let n = 0; n < this.rows; n++) r.push(this.get(n, e));
    return r;
  }
  getColumnVector(e) {
    return $$U1.columnVector(this.getColumn(e));
  }
  setColumn(e, r) {
    Xq(this, e);
    r = yL(this, r);
    for (let n = 0; n < this.rows; n++) this.set(n, e, r[n]);
    return this;
  }
  swapColumns(e, r) {
    Xq(this, e);
    Xq(this, r);
    for (let n = 0; n < this.rows; n++) {
      let i = this.get(n, e);
      this.set(n, e, this.get(n, r));
      this.set(n, r, i);
    }
    return this;
  }
  addRowVector(e) {
    e = Yo(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) + e[n]);
    return this;
  }
  subRowVector(e) {
    e = Yo(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) - e[n]);
    return this;
  }
  mulRowVector(e) {
    e = Yo(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * e[n]);
    return this;
  }
  divRowVector(e) {
    e = Yo(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) / e[n]);
    return this;
  }
  addColumnVector(e) {
    e = yL(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) + e[r]);
    return this;
  }
  subColumnVector(e) {
    e = yL(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) - e[r]);
    return this;
  }
  mulColumnVector(e) {
    e = yL(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) * e[r]);
    return this;
  }
  divColumnVector(e) {
    e = yL(this, e);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.set(r, n, this.get(r, n) / e[r]);
    return this;
  }
  mulRow(e, r) {
    Hi(this, e);
    for (let n = 0; n < this.columns; n++) this.set(e, n, this.get(e, n) * r);
    return this;
  }
  mulColumn(e, r) {
    Xq(this, e);
    for (let n = 0; n < this.rows; n++) this.set(n, e, this.get(n, e) * r);
    return this;
  }
  max(e) {
    if (this.isEmpty()) return NaN;
    switch (e) {
      case "row":
        {
          let e = Array(this.rows).fill(Number.NEGATIVE_INFINITY);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) > e[r] && (e[r] = this.get(r, n));
          return e;
        }
      case "column":
        {
          let e = Array(this.columns).fill(Number.NEGATIVE_INFINITY);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) > e[n] && (e[n] = this.get(r, n));
          return e;
        }
      case void 0:
        {
          let e = this.get(0, 0);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) > e && (e = this.get(r, n));
          return e;
        }
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  maxIndex() {
    $s(this);
    let e = this.get(0, 0);
    let r = [0, 0];
    for (let n = 0; n < this.rows; n++) for (let i = 0; i < this.columns; i++) this.get(n, i) > e && (e = this.get(n, i), r[0] = n, r[1] = i);
    return r;
  }
  min(e) {
    if (this.isEmpty()) return NaN;
    switch (e) {
      case "row":
        {
          let e = Array(this.rows).fill(Number.POSITIVE_INFINITY);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) < e[r] && (e[r] = this.get(r, n));
          return e;
        }
      case "column":
        {
          let e = Array(this.columns).fill(Number.POSITIVE_INFINITY);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) < e[n] && (e[n] = this.get(r, n));
          return e;
        }
      case void 0:
        {
          let e = this.get(0, 0);
          for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) this.get(r, n) < e && (e = this.get(r, n));
          return e;
        }
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  minIndex() {
    $s(this);
    let e = this.get(0, 0);
    let r = [0, 0];
    for (let n = 0; n < this.rows; n++) for (let i = 0; i < this.columns; i++) this.get(n, i) < e && (e = this.get(n, i), r[0] = n, r[1] = i);
    return r;
  }
  maxRow(e) {
    if (Hi(this, e), this.isEmpty()) return NaN;
    let r = this.get(e, 0);
    for (let n = 1; n < this.columns; n++) this.get(e, n) > r && (r = this.get(e, n));
    return r;
  }
  maxRowIndex(e) {
    Hi(this, e);
    $s(this);
    let r = this.get(e, 0);
    let n = [e, 0];
    for (let i = 1; i < this.columns; i++) this.get(e, i) > r && (r = this.get(e, i), n[1] = i);
    return n;
  }
  minRow(e) {
    if (Hi(this, e), this.isEmpty()) return NaN;
    let r = this.get(e, 0);
    for (let n = 1; n < this.columns; n++) this.get(e, n) < r && (r = this.get(e, n));
    return r;
  }
  minRowIndex(e) {
    Hi(this, e);
    $s(this);
    let r = this.get(e, 0);
    let n = [e, 0];
    for (let i = 1; i < this.columns; i++) this.get(e, i) < r && (r = this.get(e, i), n[1] = i);
    return n;
  }
  maxColumn(e) {
    if (Xq(this, e), this.isEmpty()) return NaN;
    let r = this.get(0, e);
    for (let n = 1; n < this.rows; n++) this.get(n, e) > r && (r = this.get(n, e));
    return r;
  }
  maxColumnIndex(e) {
    Xq(this, e);
    $s(this);
    let r = this.get(0, e);
    let n = [0, e];
    for (let i = 1; i < this.rows; i++) this.get(i, e) > r && (r = this.get(i, e), n[0] = i);
    return n;
  }
  minColumn(e) {
    if (Xq(this, e), this.isEmpty()) return NaN;
    let r = this.get(0, e);
    for (let n = 1; n < this.rows; n++) this.get(n, e) < r && (r = this.get(n, e));
    return r;
  }
  minColumnIndex(e) {
    Xq(this, e);
    $s(this);
    let r = this.get(0, e);
    let n = [0, e];
    for (let i = 1; i < this.rows; i++) this.get(i, e) < r && (r = this.get(i, e), n[0] = i);
    return n;
  }
  diag() {
    let e = Math.min(this.rows, this.columns);
    let r = [];
    for (let n = 0; n < e; n++) r.push(this.get(n, n));
    return r;
  }
  norm(e = "frobenius") {
    let r = 0;
    if ("max" === e) return this.max();
    if ("frobenius" === e) {
      for (let e = 0; e < this.rows; e++) for (let n = 0; n < this.columns; n++) r += this.get(e, n) * this.get(e, n);
      return Math.sqrt(r);
    }
    throw RangeError(`unknown norm type: ${e}`);
  }
  cumulativeSum() {
    let e = 0;
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) {
      e += this.get(r, n);
      this.set(r, n, e);
    }
    return this;
  }
  dot(e) {
    $$z0.isMatrix(e) && (e = e.to1DArray());
    let r = this.to1DArray();
    if (r.length !== e.length) throw RangeError("vectors do not have the same size");
    let n = 0;
    for (let i = 0; i < r.length; i++) n += r[i] * e[i];
    return n;
  }
  mmul(e) {
    e = $$U1.checkMatrix(e);
    let r = this.rows;
    let n = this.columns;
    let i = e.columns;
    let s = new $$U1(r, i);
    let o = new Float64Array(n);
    for (let a = 0; a < i; a++) {
      for (let r = 0; r < n; r++) o[r] = e.get(r, a);
      for (let e = 0; e < r; e++) {
        let r = 0;
        for (let i = 0; i < n; i++) r += this.get(e, i) * o[i];
        s.set(e, a, r);
      }
    }
    return s;
  }
  strassen2x2(e) {
    e = $$U1.checkMatrix(e);
    let r = new $$U1(2, 2);
    let n = this.get(0, 0);
    let i = e.get(0, 0);
    let s = this.get(0, 1);
    let o = e.get(0, 1);
    let a = this.get(1, 0);
    let h = e.get(1, 0);
    let d = this.get(1, 1);
    let p = e.get(1, 1);
    let g = (n + d) * (i + p);
    let m = (a + d) * i;
    let v = n * (o - p);
    let y = d * (h - i);
    let b = (n + s) * p;
    let O = g + y - b + (s - d) * (h + p);
    let x = v + b;
    let w = m + y;
    let k = g - m + v + (a - n) * (i + o);
    r.set(0, 0, O);
    r.set(0, 1, x);
    r.set(1, 0, w);
    r.set(1, 1, k);
    return r;
  }
  strassen3x3(e) {
    e = $$U1.checkMatrix(e);
    let r = new $$U1(3, 3);
    let n = this.get(0, 0);
    let i = this.get(0, 1);
    let s = this.get(0, 2);
    let o = this.get(1, 0);
    let a = this.get(1, 1);
    let h = this.get(1, 2);
    let d = this.get(2, 0);
    let p = this.get(2, 1);
    let g = this.get(2, 2);
    let m = e.get(0, 0);
    let v = e.get(0, 1);
    let y = e.get(0, 2);
    let b = e.get(1, 0);
    let O = e.get(1, 1);
    let x = e.get(1, 2);
    let w = e.get(2, 0);
    let k = e.get(2, 1);
    let _ = e.get(2, 2);
    let S = (n + i + s - o - a - p - g) * O;
    let E = (n - o) * (-v + O);
    let A = a * (-m + v + b - O - x - w + _);
    let C = (-n + o + a) * (m - v + O);
    let T = (o + a) * (-m + v);
    let I = n * m;
    let P = (-n + d + p) * (m - y + x);
    let R = (-n + d) * (y - x);
    let M = (d + p) * (-m + y);
    let D = (n + i + s - a - h - d - p) * x;
    let N = p * (-m + y + b - O - x - w + k);
    let $ = (-s + p + g) * (O + w - k);
    let L = (s - g) * (O - k);
    let j = s * w;
    let z = (p + g) * (-w + k);
    let Z = (-s + a + h) * (x + w - _);
    let F = (s - h) * (x - _);
    let Q = (a + h) * (-w + _);
    let V = I + j + i * b;
    let B = S + C + T + I + $ + j + z;
    let q = I + P + M + D + j + Z + Q;
    let W = E + A + C + I + j + Z + F;
    let Y = E + C + T + I + h * k;
    let G = j + Z + F + Q + o * y;
    let X = I + P + R + N + $ + L + j;
    let H = $ + L + j + z + d * v;
    let K = I + P + R + M + g * _;
    r.set(0, 0, V);
    r.set(0, 1, B);
    r.set(0, 2, q);
    r.set(1, 0, W);
    r.set(1, 1, Y);
    r.set(1, 2, G);
    r.set(2, 0, X);
    r.set(2, 1, H);
    r.set(2, 2, K);
    return r;
  }
  mmulStrassen(e) {
    e = $$U1.checkMatrix(e);
    let r = this.clone();
    let n = r.rows;
    let i = r.columns;
    let s = e.rows;
    let o = e.columns;
    function a(e, r, n) {
      let i = e.rows;
      let s = e.columns;
      return i === r && s === n ? e : $$z0.zeros(r, n).setSubMatrix(e, 0, 0);
    }
    i !== s && console.warn(`Multiplying ${n} x ${i} and ${s} x ${o} matrix: dimensions do not match.`);
    let h = Math.max(n, s);
    let d = Math.max(i, o);
    function p(e, r, n, i) {
      if (n <= 512 || i <= 512) return e.mmul(r);
      n % 2 == 1 && i % 2 == 1 ? (e = a(e, n + 1, i + 1), r = a(r, n + 1, i + 1)) : n % 2 == 1 ? (e = a(e, n + 1, i), r = a(r, n + 1, i)) : i % 2 == 1 && (e = a(e, n, i + 1), r = a(r, n, i + 1));
      let s = parseInt(e.rows / 2, 10);
      let o = parseInt(e.columns / 2, 10);
      let h = e.subMatrix(0, s - 1, 0, o - 1);
      let d = r.subMatrix(0, s - 1, 0, o - 1);
      let g = e.subMatrix(0, s - 1, o, e.columns - 1);
      let m = r.subMatrix(0, s - 1, o, r.columns - 1);
      let v = e.subMatrix(s, e.rows - 1, 0, o - 1);
      let y = r.subMatrix(s, r.rows - 1, 0, o - 1);
      let b = e.subMatrix(s, e.rows - 1, o, e.columns - 1);
      let O = r.subMatrix(s, r.rows - 1, o, r.columns - 1);
      let x = p($$z0.add(h, b), $$z0.add(d, O), s, o);
      let w = p($$z0.add(v, b), d, s, o);
      let k = p(h, $$z0.sub(m, O), s, o);
      let _ = p(b, $$z0.sub(y, d), s, o);
      let S = p($$z0.add(h, g), O, s, o);
      let E = p($$z0.sub(v, h), $$z0.add(d, m), s, o);
      let A = p($$z0.sub(g, b), $$z0.add(y, O), s, o);
      let C = $$z0.add(x, _);
      C.sub(S);
      C.add(A);
      let T = $$z0.add(k, S);
      let I = $$z0.add(w, _);
      let P = $$z0.sub(x, w);
      P.add(k);
      P.add(E);
      let R = $$z0.zeros(2 * C.rows, 2 * C.columns);
      return (R = (R = (R = (R = R.setSubMatrix(C, 0, 0)).setSubMatrix(T, C.rows, 0)).setSubMatrix(I, 0, C.columns)).setSubMatrix(P, C.rows, C.columns)).subMatrix(0, n - 1, 0, i - 1);
    }
    return p(r = a(r, h, d), e = a(e, h, d), h, d);
  }
  scaleRows(e = {}) {
    if ("object" != typeof e) throw TypeError("options must be an object");
    let {
      min = 0,
      max = 1
    } = e;
    if (!Number.isFinite(min)) throw TypeError("min must be a number");
    if (!Number.isFinite(max)) throw TypeError("max must be a number");
    if (min >= max) throw RangeError("min must be smaller than max");
    let i = new $$U1(this.rows, this.columns);
    for (let e = 0; e < this.rows; e++) {
      let s = this.getRow(e);
      s.length > 0 && a(s, {
        min,
        max,
        output: s
      });
      i.setRow(e, s);
    }
    return i;
  }
  scaleColumns(e = {}) {
    if ("object" != typeof e) throw TypeError("options must be an object");
    let {
      min = 0,
      max = 1
    } = e;
    if (!Number.isFinite(min)) throw TypeError("min must be a number");
    if (!Number.isFinite(max)) throw TypeError("max must be a number");
    if (min >= max) throw RangeError("min must be smaller than max");
    let i = new $$U1(this.rows, this.columns);
    for (let e = 0; e < this.columns; e++) {
      let s = this.getColumn(e);
      s.length && a(s, {
        min,
        max,
        output: s
      });
      i.setColumn(e, s);
    }
    return i;
  }
  flipRows() {
    let e = Math.ceil(this.columns / 2);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < e; n++) {
      let e = this.get(r, n);
      let i = this.get(r, this.columns - 1 - n);
      this.set(r, n, i);
      this.set(r, this.columns - 1 - n, e);
    }
    return this;
  }
  flipColumns() {
    let e = Math.ceil(this.rows / 2);
    for (let r = 0; r < this.columns; r++) for (let n = 0; n < e; n++) {
      let e = this.get(n, r);
      let i = this.get(this.rows - 1 - n, r);
      this.set(n, r, i);
      this.set(this.rows - 1 - n, r, e);
    }
    return this;
  }
  kroneckerProduct(e) {
    e = $$U1.checkMatrix(e);
    let r = this.rows;
    let n = this.columns;
    let i = e.rows;
    let s = e.columns;
    let o = new $$U1(r * i, n * s);
    for (let a = 0; a < r; a++) for (let r = 0; r < n; r++) for (let n = 0; n < i; n++) for (let h = 0; h < s; h++) o.set(i * a + n, s * r + h, this.get(a, r) * e.get(n, h));
    return o;
  }
  kroneckerSum(e) {
    if (e = $$U1.checkMatrix(e), !this.isSquare() || !e.isSquare()) throw Error("Kronecker Sum needs two Square Matrices");
    let r = this.rows;
    let n = e.rows;
    let i = this.kroneckerProduct($$U1.eye(n, n));
    let s = $$U1.eye(r, r).kroneckerProduct(e);
    return i.add(s);
  }
  transpose() {
    let e = new $$U1(this.columns, this.rows);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) e.set(n, r, this.get(r, n));
    return e;
  }
  sortRows(e = Z) {
    for (let r = 0; r < this.rows; r++) this.setRow(r, this.getRow(r).sort(e));
    return this;
  }
  sortColumns(e = Z) {
    for (let r = 0; r < this.columns; r++) this.setColumn(r, this.getColumn(r).sort(e));
    return this;
  }
  subMatrix(e, r, n, i) {
    cd(this, e, r, n, i);
    let s = new $$U1(r - e + 1, i - n + 1);
    for (let o = e; o <= r; o++) for (let r = n; r <= i; r++) s.set(o - e, r - n, this.get(o, r));
    return s;
  }
  subMatrixRow(e, r, n) {
    if (void 0 === r && (r = 0), void 0 === n && (n = this.columns - 1), r > n || r < 0 || r >= this.columns || n < 0 || n >= this.columns) throw RangeError("Argument out of range");
    let i = new $$U1(e.length, n - r + 1);
    for (let s = 0; s < e.length; s++) for (let o = r; o <= n; o++) {
      if (e[s] < 0 || e[s] >= this.rows) throw RangeError(`Row index out of range: ${e[s]}`);
      i.set(s, o - r, this.get(e[s], o));
    }
    return i;
  }
  subMatrixColumn(e, r, n) {
    if (void 0 === r && (r = 0), void 0 === n && (n = this.rows - 1), r > n || r < 0 || r >= this.rows || n < 0 || n >= this.rows) throw RangeError("Argument out of range");
    let i = new $$U1(n - r + 1, e.length);
    for (let s = 0; s < e.length; s++) for (let o = r; o <= n; o++) {
      if (e[s] < 0 || e[s] >= this.columns) throw RangeError(`Column index out of range: ${e[s]}`);
      i.set(o - r, s, this.get(o, e[s]));
    }
    return i;
  }
  setSubMatrix(e, r, n) {
    if ((e = $$U1.checkMatrix(e)).isEmpty()) return this;
    let i = r + e.rows - 1;
    let s = n + e.columns - 1;
    cd(this, r, i, n, s);
    for (let i = 0; i < e.rows; i++) for (let s = 0; s < e.columns; s++) this.set(r + i, n + s, e.get(i, s));
    return this;
  }
  selection(e, r) {
    QY(this, e);
    gO(this, r);
    let n = new $$U1(e.length, r.length);
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      for (let e = 0; e < r.length; e++) {
        let o = r[e];
        n.set(i, e, this.get(s, o));
      }
    }
    return n;
  }
  trace() {
    let e = Math.min(this.rows, this.columns);
    let r = 0;
    for (let n = 0; n < e; n++) r += this.get(n, n);
    return r;
  }
  clone() {
    let e = new $$U1(this.rows, this.columns);
    for (let r = 0; r < this.rows; r++) for (let n = 0; n < this.columns; n++) e.set(r, n, this.get(r, n));
    return e;
  }
  sum(e) {
    switch (e) {
      case "row":
        return x(this);
      case "column":
        return w(this);
      case void 0:
        return k(this);
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  product(e) {
    switch (e) {
      case "row":
        return _(this);
      case "column":
        return S(this);
      case void 0:
        return E(this);
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  mean(e) {
    let r = this.sum(e);
    switch (e) {
      case "row":
        for (let e = 0; e < this.rows; e++) r[e] /= this.columns;
        return r;
      case "column":
        for (let e = 0; e < this.columns; e++) r[e] /= this.rows;
        return r;
      case void 0:
        return r / this.size;
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  variance(e, r = {}) {
    if ("object" == typeof e && (r = e, e = void 0), "object" != typeof r) throw TypeError("options must be an object");
    let {
      unbiased = !0,
      mean = this.mean(e)
    } = r;
    if ("boolean" != typeof unbiased) throw TypeError("unbiased must be a boolean");
    switch (e) {
      case "row":
        if (!_$$e(mean)) throw TypeError("mean must be an array");
        return $$A(this, unbiased, mean);
      case "column":
        if (!_$$e(mean)) throw TypeError("mean must be an array");
        return C(this, unbiased, mean);
      case void 0:
        if ("number" != typeof mean) throw TypeError("mean must be a number");
        return T(this, unbiased, mean);
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  standardDeviation(e, r) {
    "object" == typeof e && (r = e, e = void 0);
    let n = this.variance(e, r);
    if (void 0 === e) return Math.sqrt(n);
    for (let e = 0; e < n.length; e++) n[e] = Math.sqrt(n[e]);
    return n;
  }
  center(e, r = {}) {
    if ("object" == typeof e && (r = e, e = void 0), "object" != typeof r) throw TypeError("options must be an object");
    let {
      center = this.mean(e)
    } = r;
    switch (e) {
      case "row":
        if (!_$$e(center)) throw TypeError("center must be an array");
        I(this, center);
        return this;
      case "column":
        if (!_$$e(center)) throw TypeError("center must be an array");
        P(this, center);
        return this;
      case void 0:
        if ("number" != typeof center) throw TypeError("center must be a number");
        R(this, center);
        return this;
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  scale(e, r = {}) {
    if ("object" == typeof e && (r = e, e = void 0), "object" != typeof r) throw TypeError("options must be an object");
    let n = r.scale;
    switch (e) {
      case "row":
        if (void 0 === n) n = M(this);else if (!_$$e(n)) throw TypeError("scale must be an array");
        D(this, n);
        return this;
      case "column":
        if (void 0 === n) n = N(this);else if (!_$$e(n)) throw TypeError("scale must be an array");
        $(this, n);
        return this;
      case void 0:
        if (void 0 === n) n = L(this);else if ("number" != typeof n) throw TypeError("scale must be a number");
        j(this, n);
        return this;
      default:
        throw Error(`invalid option: ${e}`);
    }
  }
  toString(e) {
    return g(this, e);
  }
}
function Z(e, r) {
  return e - r;
}
function F(e) {
  return e.every(e => "number" == typeof e);
}
$$z0.prototype.klass = "Matrix";
"undefined" != typeof Symbol && ($$z0.prototype[Symbol.$$for("nodejs.util.inspect.custom")] = p);
$$z0.random = $$z0.rand;
$$z0.randomInt = $$z0.randInt;
$$z0.diagonal = $$z0.diag;
$$z0.prototype.diagonal = $$z0.prototype.diag;
$$z0.identity = $$z0.eye;
$$z0.prototype.negate = $$z0.prototype.neg;
$$z0.prototype.tensorProduct = $$z0.prototype.kroneckerProduct;
export class $$U1 extends $$z0 {
  constructor(e, r) {
    this.data = [];
    if (super(), $$U1.isMatrix(e)) return e.clone();
    if (Number.isInteger(e) && e >= 0) {
      if (Number.isInteger(r) && r >= 0) for (let n = 0; n < e; n++) this.data.push(new Float64Array(r));else throw TypeError("nColumns must be a positive integer");
    } else if (_$$e(e)) {
      let n = e;
      if ("number" != typeof (r = (e = n.length) ? n[0].length : 0)) throw TypeError("Data must be a 2D array with at least one element");
      this.data = [];
      for (let i = 0; i < e; i++) {
        if (n[i].length !== r) throw RangeError("Inconsistent array dimensions");
        if (!F(n[i])) throw TypeError("Input data contains non-numeric values");
        this.data.push(Float64Array.from(n[i]));
      }
    } else throw TypeError("First argument must be a positive number or an array");
    this.rows = e;
    this.columns = r;
  }
  set(e, r, n) {
    this.data[e][r] = n;
    return this;
  }
  get(e, r) {
    return this.data[e][r];
  }
  removeRow(e) {
    Hi(this, e);
    this.data.splice(e, 1);
    this.rows -= 1;
    return this;
  }
  addRow(e, r) {
    void 0 === r && (r = e, e = this.rows);
    Hi(this, e, !0);
    r = Float64Array.from(Yo(this, r));
    this.data.splice(e, 0, r);
    this.rows += 1;
    return this;
  }
  removeColumn(e) {
    Xq(this, e);
    for (let r = 0; r < this.rows; r++) {
      let n = new Float64Array(this.columns - 1);
      for (let i = 0; i < e; i++) n[i] = this.data[r][i];
      for (let i = e + 1; i < this.columns; i++) n[i - 1] = this.data[r][i];
      this.data[r] = n;
    }
    this.columns -= 1;
    return this;
  }
  addColumn(e, r) {
    void 0 === r && (r = e, e = this.columns);
    Xq(this, e, !0);
    r = yL(this, r);
    for (let n = 0; n < this.rows; n++) {
      let i = new Float64Array(this.columns + 1);
      let s = 0;
      for (; s < e; s++) i[s] = this.data[n][s];
      for (i[s++] = r[n]; s < this.columns + 1; s++) i[s] = this.data[n][s - 1];
      this.data[n] = i;
    }
    this.columns += 1;
    return this;
  }
}
b($$z0, $$U1);
export const y = $$z0;
export const A = $$U1;