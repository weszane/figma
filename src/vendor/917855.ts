let {
  min,
  max
} = Math;
let n = (e, t = 0, r = 1) => min(max(t, e), r);
let l = e => {
  e._clipped = !1;
  e._unclipped = e.slice(0);
  for (let t = 0; t <= 3; t++) t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = n(e[t], 0, 255)) : 3 === t && (e[t] = n(e[t], 0, 1));
  return e;
};
let i = {};
for (let e of ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]) i[`[object ${e}]`] = e.toLowerCase();
function s(e) {
  return i[Object.prototype.toString.call(e)] || "object";
}
let d = (e, t = null) => e.length >= 3 ? Array.prototype.slice.call(e) : "object" == s(e[0]) && t ? t.split("").filter(t => void 0 !== e[0][t]).map(t => e[0][t]) : e[0].slice(0);
let c = e => {
  if (e.length < 2) return null;
  let t = e.length - 1;
  return "string" == s(e[t]) ? e[t].toLowerCase() : null;
};
let {
  PI,
  min: _min,
  max: _max
} = Math;
let f = e => Math.round(100 * e) / 100;
let b = e => Math.round(100 * e) / 100;
let g = 2 * PI;
let h = PI / 3;
let x = PI / 180;
let v = 180 / PI;
function w(e) {
  return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}
let y = {
  format: {},
  autodetect: []
};
let k = class {
  constructor(...e) {
    if ("object" === s(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
    let t = c(e);
    let r = !1;
    if (!t) {
      for (let o of (r = !0, y.sorted || (y.autodetect = y.autodetect.sort((e, t) => t.p - e.p), y.sorted = !0), y.autodetect)) if (t = o.test(...e)) break;
    }
    if (y.format[t]) {
      let o = y.format[t].apply(null, r ? e : e.slice(0, -1));
      this._rgb = l(o);
    } else throw Error("unknown format: " + e);
    3 === this._rgb.length && this._rgb.push(1);
  }
  toString() {
    return "function" == s(this.hex) ? this.hex() : `[${this._rgb.join(",")}]`;
  }
};
let $ = (...e) => new k(...e);
$.version = "3.1.2";
let j = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
let _ = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
let z = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
let N = e => {
  if (e.match(_)) {
    (4 === e.length || 7 === e.length) && (e = e.substr(1));
    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    let t = parseInt(e, 16);
    return [t >> 16, t >> 8 & 255, 255 & t, 1];
  }
  if (e.match(z)) {
    (5 === e.length || 9 === e.length) && (e = e.substr(1));
    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    let t = parseInt(e, 16);
    let r = Math.round((255 & t) / 255 * 100) / 100;
    return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, r];
  }
  throw Error(`unknown hex color: ${e}`);
};
let {
  round
} = Math;
let A = (...e) => {
  let [t, r, o, a] = d(e, "rgba");
  let n = c(e) || "auto";
  void 0 === a && (a = 1);
  "auto" === n && (n = a < 1 ? "rgba" : "rgb");
  let l = "000000" + ((t = round(t)) << 16 | (r = round(r)) << 8 | (o = round(o))).toString(16);
  l = l.substr(l.length - 6);
  let i = "0" + round(255 * a).toString(16);
  switch (i = i.substr(i.length - 2), n.toLowerCase()) {
    case "rgba":
      return `#${l}${i}`;
    case "argb":
      return `#${i}${l}`;
    default:
      return `#${l}`;
  }
};
k.prototype.name = function () {
  let e = A(this._rgb, "rgb");
  for (let t of Object.keys(j)) if (j[t] === e) return t.toLowerCase();
  return e;
};
y.format.named = e => {
  if (j[e = e.toLowerCase()]) return N(j[e]);
  throw Error("unknown color name: " + e);
};
y.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && "string" === s(e) && j[e.toLowerCase()]) return "named";
  }
});
k.prototype.alpha = function (e, t = !1) {
  return void 0 !== e && "number" === s(e) ? t ? (this._rgb[3] = e, this) : new k([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
};
k.prototype.clipped = function () {
  return this._rgb._clipped || !1;
};
let C = {
  Kn: 18,
  labWhitePoint: "d65",
  Xn: .95047,
  Yn: 1,
  Zn: 1.08883,
  t0: .137931034,
  t1: .206896552,
  t2: .12841855,
  t3: .008856452,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    X: .95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: .4124564390896922,
    m01: .21267285140562253,
    m02: .0193338955823293,
    m10: .357576077643909,
    m11: .715152155287818,
    m12: .11919202588130297,
    m20: .18043748326639894,
    m21: .07217499330655958,
    m22: .9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -.9692660305051868,
    m02: .055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -.2040259135167538,
    m20: -.498531409556016,
    m21: .041556017530349834,
    m22: 1.0572251882231791
  },
  As: .9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: .8951,
    m01: -.7502,
    m02: .0389,
    m10: .2664,
    m11: 1.7135,
    m12: -.0685,
    m20: -.1614,
    m21: .0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: .9869929054667123,
    m01: .43230526972339456,
    m02: -.008528664575177328,
    m10: -.14705425642099013,
    m11: .5183602715367776,
    m12: .04004282165408487,
    m20: .15996265166373125,
    m21: .0492912282128556,
    m22: .9684866957875502
  }
};
let E = new Map([["a", [1.0985, .35585]], ["b", [1.0985, .35585]], ["c", [.98074, 1.18232]], ["d50", [.96422, .82521]], ["d55", [.95682, .92149]], ["d65", [.95047, 1.08883]], ["e", [1, 1, 1]], ["f2", [.99186, .67393]], ["f7", [.95041, 1.08747]], ["f11", [1.00962, .6435]], ["icc", [.96422, .82521]]]);
function O(e) {
  let t = E.get(String(e).toLowerCase());
  if (!t) throw Error("unknown Lab illuminant " + e);
  C.labWhitePoint = e;
  C.Xn = t[0];
  C.Zn = t[1];
}
function P() {
  return C.labWhitePoint;
}
let S = (e, t, r) => {
  let {
    kE,
    kK,
    kKE,
    Xn,
    Yn,
    Zn
  } = C;
  let d = (e + 16) / 116;
  let c = .002 * t + d;
  let m = d - .005 * r;
  let u = c * c * c;
  let p = m * m * m;
  let f = e > kKE ? Math.pow((e + 16) / 116, 3) : e / kK;
  return [(u > kE ? u : (116 * c - 16) / kK) * Xn, f * Yn, (p > kE ? p : (116 * m - 16) / kK) * Zn];
};
let q = e => {
  let t = Math.sign(e);
  return ((e = Math.abs(e)) <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055) * t;
};
let R = (e, t, r) => {
  let {
    MtxAdaptMa,
    MtxAdaptMaI,
    MtxXYZ2RGB,
    RefWhiteRGB,
    Xn,
    Yn,
    Zn
  } = C;
  let c = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  let m = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  let u = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  let p = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
  let f = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
  let b = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
  let g = (e * MtxAdaptMa.m00 + t * MtxAdaptMa.m10 + r * MtxAdaptMa.m20) * (p / c);
  let h = (e * MtxAdaptMa.m01 + t * MtxAdaptMa.m11 + r * MtxAdaptMa.m21) * (f / m);
  let x = (e * MtxAdaptMa.m02 + t * MtxAdaptMa.m12 + r * MtxAdaptMa.m22) * (b / u);
  let v = g * MtxAdaptMaI.m00 + h * MtxAdaptMaI.m10 + x * MtxAdaptMaI.m20;
  let w = g * MtxAdaptMaI.m01 + h * MtxAdaptMaI.m11 + x * MtxAdaptMaI.m21;
  let y = g * MtxAdaptMaI.m02 + h * MtxAdaptMaI.m12 + x * MtxAdaptMaI.m22;
  return [255 * q(v * MtxXYZ2RGB.m00 + w * MtxXYZ2RGB.m10 + y * MtxXYZ2RGB.m20), 255 * q(v * MtxXYZ2RGB.m01 + w * MtxXYZ2RGB.m11 + y * MtxXYZ2RGB.m21), 255 * q(v * MtxXYZ2RGB.m02 + w * MtxXYZ2RGB.m12 + y * MtxXYZ2RGB.m22)];
};
let G = (...e) => {
  let [t, r, o] = e = d(e, "lab");
  let [a, n, l] = S(t, r, o);
  let [i, s, c] = R(a, n, l);
  return [i, s, c, e.length > 3 ? e[3] : 1];
};
function W(e) {
  let t = Math.sign(e);
  return ((e = Math.abs(e)) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) * t;
}
let L = (e, t, r) => {
  e = W(e / 255);
  t = W(t / 255);
  r = W(r / 255);
  let {
    MtxRGB2XYZ,
    MtxAdaptMa,
    MtxAdaptMaI,
    Xn,
    Yn,
    Zn,
    As,
    Bs,
    Cs
  } = C;
  let u = e * MtxRGB2XYZ.m00 + t * MtxRGB2XYZ.m10 + r * MtxRGB2XYZ.m20;
  let p = e * MtxRGB2XYZ.m01 + t * MtxRGB2XYZ.m11 + r * MtxRGB2XYZ.m21;
  let f = e * MtxRGB2XYZ.m02 + t * MtxRGB2XYZ.m12 + r * MtxRGB2XYZ.m22;
  let b = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  let g = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  let h = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  let x = u * MtxAdaptMa.m00 + p * MtxAdaptMa.m10 + f * MtxAdaptMa.m20;
  let v = u * MtxAdaptMa.m01 + p * MtxAdaptMa.m11 + f * MtxAdaptMa.m21;
  let w = u * MtxAdaptMa.m02 + p * MtxAdaptMa.m12 + f * MtxAdaptMa.m22;
  x *= b / As;
  v *= g / Bs;
  w *= h / Cs;
  return [u = x * MtxAdaptMaI.m00 + v * MtxAdaptMaI.m10 + w * MtxAdaptMaI.m20, p = x * MtxAdaptMaI.m01 + v * MtxAdaptMaI.m11 + w * MtxAdaptMaI.m21, f = x * MtxAdaptMaI.m02 + v * MtxAdaptMaI.m12 + w * MtxAdaptMaI.m22];
};
let B = (...e) => {
  let [t, r, o, ...a] = d(e, "rgb");
  let [n, l, i] = L(t, r, o);
  let [s, c, m] = function (e, t, r) {
    let {
      Xn,
      Yn,
      Zn,
      kE,
      kK
    } = C;
    let s = e / Xn;
    let d = t / Yn;
    let c = r / Zn;
    let m = s > kE ? Math.pow(s, 1 / 3) : (kK * s + 16) / 116;
    let u = d > kE ? Math.pow(d, 1 / 3) : (kK * d + 16) / 116;
    return [116 * u - 16, 500 * (m - u), 200 * (u - (c > kE ? Math.pow(c, 1 / 3) : (kK * c + 16) / 116))];
  }(n, l, i);
  return [s, c, m, ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
k.prototype.lab = function () {
  return B(this._rgb);
};
Object.assign($, {
  lab: (...e) => new k(...e, "lab"),
  getLabWhitePoint: P,
  setLabWhitePoint: O
});
y.format.lab = G;
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "lab")) && 3 === e.length) return "lab";
  }
});
k.prototype.darken = function (e = 1) {
  let t = this.lab();
  t[0] -= C.Kn * e;
  return new k(t, "lab").alpha(this.alpha(), !0);
};
k.prototype.brighten = function (e = 1) {
  return this.darken(-e);
};
k.prototype.darker = k.prototype.darken;
k.prototype.brighter = k.prototype.brighten;
k.prototype.get = function (e) {
  let [t, r] = e.split(".");
  let o = this[t]();
  if (!r) return o;
  {
    let e = t.indexOf(r) - ("ok" === t.substr(0, 2) ? 2 : 0);
    if (e > -1) return o[e];
    throw Error(`unknown channel ${r} in mode ${t}`);
  }
};
let {
  pow
} = Math;
k.prototype.luminance = function (e, t = "rgb") {
  if (void 0 !== e && "number" === s(e)) {
    if (0 === e) return new k([0, 0, 0, this._rgb[3]], "rgb");
    if (1 === e) return new k([255, 255, 255, this._rgb[3]], "rgb");
    let r = this.luminance();
    let o = 20;
    let a = (r, n) => {
      let l = r.interpolate(n, .5, t);
      let i = l.luminance();
      return !(1e-7 > Math.abs(e - i)) && o-- ? i > e ? a(r, l) : a(l, n) : l;
    };
    let n = (r > e ? a(new k([0, 0, 0]), this) : a(this, new k([255, 255, 255]))).rgb();
    return new k([...n, this._rgb[3]]);
  }
  return Y(...this._rgb.slice(0, 3));
};
let Y = (e, t, r) => .2126 * (e = F(e)) + .7152 * (t = F(t)) + .0722 * (r = F(r));
let F = e => (e /= 255) <= .03928 ? e / 12.92 : pow((e + .055) / 1.055, 2.4);
let T = {};
let X = (e, t, r = .5, ...o) => {
  let a = o[0] || "lrgb";
  if (T[a] || o.length || (a = Object.keys(T)[0]), !T[a]) throw Error(`interpolation mode ${a} is not defined`);
  "object" !== s(e) && (e = new k(e));
  "object" !== s(t) && (t = new k(t));
  return T[a](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
};
k.prototype.mix = k.prototype.interpolate = function (e, t = .5, ...r) {
  return X(this, e, t, ...r);
};
k.prototype.premultiply = function (e = !1) {
  let t = this._rgb;
  let r = t[3];
  return e ? (this._rgb = [t[0] * r, t[1] * r, t[2] * r, r], this) : new k([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
};
let {
  sin,
  cos
} = Math;
let D = (...e) => {
  let [t, r, o] = d(e, "lch");
  isNaN(o) && (o = 0);
  return [t, cos(o *= x) * r, sin(o) * r];
};
let U = (...e) => {
  let [t, r, o] = e = d(e, "lch");
  let [a, n, l] = D(t, r, o);
  let [i, s, c] = G(a, n, l);
  return [i, s, c, e.length > 3 ? e[3] : 1];
};
let {
  sqrt: _sqrt,
  atan2,
  round: _round
} = Math;
let J = (...e) => {
  let [t, r, o] = d(e, "lab");
  let a = _sqrt(r * r + o * o);
  let n = (atan2(o, r) * v + 360) % 360;
  0 === _round(1e4 * a) && (n = Number.NaN);
  return [t, a, n];
};
let ee = (...e) => {
  let [t, r, o, ...a] = d(e, "rgb");
  let [n, l, i] = B(t, r, o);
  let [s, c, m] = J(n, l, i);
  return [s, c, m, ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
k.prototype.lch = function () {
  return ee(this._rgb);
};
k.prototype.hcl = function () {
  return w(ee(this._rgb));
};
Object.assign($, {
  lch: (...e) => new k(...e, "lch"),
  hcl: (...e) => new k(...e, "hcl")
});
y.format.lch = U;
y.format.hcl = (...e) => U(...w(d(e, "hcl")));
["lch", "hcl"].forEach(e => y.autodetect.push({
  p: 2,
  test: (...t) => {
    if ("array" === s(t = d(t, e)) && 3 === t.length) return e;
  }
}));
k.prototype.saturate = function (e = 1) {
  let t = this.lch();
  t[1] += C.Kn * e;
  t[1] < 0 && (t[1] = 0);
  return new k(t, "lch").alpha(this.alpha(), !0);
};
k.prototype.desaturate = function (e = 1) {
  return this.saturate(-e);
};
k.prototype.set = function (e, t, r = !1) {
  let [o, a] = e.split(".");
  let n = this[o]();
  if (!a) return n;
  {
    let e = o.indexOf(a) - ("ok" === o.substr(0, 2) ? 2 : 0);
    if (e > -1) {
      if ("string" == s(t)) switch (t.charAt(0)) {
        case "+":
        case "-":
          n[e] += +t;
          break;
        case "*":
          n[e] *= +t.substr(1);
          break;
        case "/":
          n[e] /= +t.substr(1);
          break;
        default:
          n[e] = +t;
      } else if ("number" === s(t)) n[e] = t;else throw Error("unsupported value for Color.set");
      let a = new k(n, o);
      return r ? (this._rgb = a._rgb, this) : a;
    }
    throw Error(`unknown channel ${a} in mode ${o}`);
  }
};
k.prototype.tint = function (e = .5, ...t) {
  return X(this, "white", e, ...t);
};
k.prototype.shade = function (e = .5, ...t) {
  return X(this, "black", e, ...t);
};
T.rgb = (e, t, r) => {
  let o = e._rgb;
  let a = t._rgb;
  return new k(o[0] + r * (a[0] - o[0]), o[1] + r * (a[1] - o[1]), o[2] + r * (a[2] - o[2]), "rgb");
};
let {
  sqrt,
  pow: _pow
} = Math;
T.lrgb = (e, t, r) => {
  let [o, a, n] = e._rgb;
  let [l, i, s] = t._rgb;
  return new k(sqrt(_pow(o, 2) * (1 - r) + _pow(l, 2) * r), sqrt(_pow(a, 2) * (1 - r) + _pow(i, 2) * r), sqrt(_pow(n, 2) * (1 - r) + _pow(s, 2) * r), "rgb");
};
T.lab = (e, t, r) => {
  let o = e.lab();
  let a = t.lab();
  return new k(o[0] + r * (a[0] - o[0]), o[1] + r * (a[1] - o[1]), o[2] + r * (a[2] - o[2]), "lab");
};
let eo = (e, t, r, o) => {
  let a;
  let n;
  let l;
  let i;
  let s;
  let d;
  let c;
  let m;
  let u;
  let p;
  let f;
  let b;
  "hsl" === o ? (a = e.hsl(), n = t.hsl()) : "hsv" === o ? (a = e.hsv(), n = t.hsv()) : "hcg" === o ? (a = e.hcg(), n = t.hcg()) : "hsi" === o ? (a = e.hsi(), n = t.hsi()) : "lch" === o || "hcl" === o ? (o = "hcl", a = e.hcl(), n = t.hcl()) : "oklch" === o && (a = e.oklch().reverse(), n = t.oklch().reverse());
  ("h" === o.substr(0, 1) || "oklch" === o) && ([l, s, c] = a, [i, d, m] = n);
  isNaN(l) || isNaN(i) ? isNaN(l) ? isNaN(i) ? p = Number.NaN : (p = i, (1 == c || 0 == c) && "hsv" != o && (u = d)) : (p = l, (1 == m || 0 == m) && "hsv" != o && (u = s)) : (b = i > l && i - l > 180 ? i - (l + 360) : i < l && l - i > 180 ? i + 360 - l : i - l, p = l + r * b);
  void 0 === u && (u = s + r * (d - s));
  f = c + r * (m - c);
  return "oklch" === o ? new k([f, u, p], o) : new k([p, u, f], o);
};
let ea = (e, t, r) => eo(e, t, r, "lch");
T.lch = ea;
T.hcl = ea;
let en = (...e) => {
  let [t, r, o] = d(e, "rgb");
  return (t << 16) + (r << 8) + o;
};
k.prototype.num = function () {
  return en(this._rgb);
};
Object.assign($, {
  num: (...e) => new k(...e, "num")
});
y.format.num = e => {
  if ("number" == s(e) && e >= 0 && e <= 0xffffff) return [e >> 16, e >> 8 & 255, 255 & e, 1];
  throw Error("unknown num color: " + e);
};
y.autodetect.push({
  p: 5,
  test: (...e) => {
    if (1 === e.length && "number" === s(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num";
  }
});
T.num = (e, t, r) => {
  let o = e.num();
  return new k(o + r * (t.num() - o), "num");
};
let {
  floor
} = Math;
let ei = (...e) => {
  let t;
  let [r, o, a] = d(e, "rgb");
  let n = _min(r, o, a);
  let l = _max(r, o, a);
  let i = l - n;
  0 === i ? t = Number.NaN : (r === l && (t = (o - a) / i), o === l && (t = 2 + (a - r) / i), a === l && (t = 4 + (r - o) / i), (t *= 60) < 0 && (t += 360));
  return [t, 100 * i / 255, n / (255 - i) * 100];
};
k.prototype.hcg = function () {
  return ei(this._rgb);
};
$.hcg = (...e) => new k(...e, "hcg");
y.format.hcg = (...e) => {
  let t;
  let r;
  let o;
  let [a, n, l] = e = d(e, "hcg");
  l *= 255;
  let i = 255 * n;
  if (0 === n) t = r = o = l;else {
    360 === a && (a = 0);
    a > 360 && (a -= 360);
    a < 0 && (a += 360);
    let e = floor(a /= 60);
    let s = a - e;
    let d = l * (1 - n);
    let c = d + i * (1 - s);
    let m = d + i * s;
    let u = d + i;
    switch (e) {
      case 0:
        [t, r, o] = [u, m, d];
        break;
      case 1:
        [t, r, o] = [c, u, d];
        break;
      case 2:
        [t, r, o] = [d, u, m];
        break;
      case 3:
        [t, r, o] = [d, c, u];
        break;
      case 4:
        [t, r, o] = [m, d, u];
        break;
      case 5:
        [t, r, o] = [u, d, c];
    }
  }
  return [t, r, o, e.length > 3 ? e[3] : 1];
};
y.autodetect.push({
  p: 1,
  test: (...e) => {
    if ("array" === s(e = d(e, "hcg")) && 3 === e.length) return "hcg";
  }
});
T.hcg = (e, t, r) => eo(e, t, r, "hcg");
let {
  cos: _cos
} = Math;
let {
  min: _min2,
  sqrt: _sqrt2,
  acos
} = Math;
let eu = (...e) => {
  let t;
  let [r, o, a] = d(e, "rgb");
  let n = _min2(r /= 255, o /= 255, a /= 255);
  let l = (r + o + a) / 3;
  let i = l > 0 ? 1 - n / l : 0;
  0 === i ? t = NaN : (t = acos(t = (r - o + (r - a)) / 2 / _sqrt2((r - o) * (r - o) + (r - a) * (o - a))), a > o && (t = g - t), t /= g);
  return [360 * t, i, l];
};
k.prototype.hsi = function () {
  return eu(this._rgb);
};
$.hsi = (...e) => new k(...e, "hsi");
y.format.hsi = (...e) => {
  let t;
  let r;
  let o;
  let [a, l, i] = e = d(e, "hsi");
  isNaN(a) && (a = 0);
  isNaN(l) && (l = 0);
  a > 360 && (a -= 360);
  a < 0 && (a += 360);
  (a /= 360) < 1 / 3 ? r = 1 - ((o = (1 - l) / 3) + (t = (1 + l * _cos(g * a) / _cos(h - g * a)) / 3)) : a < 2 / 3 ? (a -= 1 / 3, o = 1 - ((t = (1 - l) / 3) + (r = (1 + l * _cos(g * a) / _cos(h - g * a)) / 3))) : (a -= 2 / 3, t = 1 - ((r = (1 - l) / 3) + (o = (1 + l * _cos(g * a) / _cos(h - g * a)) / 3)));
  return [255 * (t = n(i * t * 3)), 255 * (r = n(i * r * 3)), 255 * (o = n(i * o * 3)), e.length > 3 ? e[3] : 1];
};
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "hsi")) && 3 === e.length) return "hsi";
  }
});
T.hsi = (e, t, r) => eo(e, t, r, "hsi");
let ep = (...e) => {
  let t;
  let r;
  let o;
  let [a, n, l] = e = d(e, "hsl");
  if (0 === n) t = r = o = 255 * l;else {
    let e = [0, 0, 0];
    let i = [0, 0, 0];
    let s = l < .5 ? l * (1 + n) : l + n - l * n;
    let d = 2 * l - s;
    let c = a / 360;
    e[0] = c + 1 / 3;
    e[1] = c;
    e[2] = c - 1 / 3;
    for (let t = 0; t < 3; t++) {
      e[t] < 0 && (e[t] += 1);
      e[t] > 1 && (e[t] -= 1);
      6 * e[t] < 1 ? i[t] = d + (s - d) * 6 * e[t] : 2 * e[t] < 1 ? i[t] = s : 3 * e[t] < 2 ? i[t] = d + (s - d) * (2 / 3 - e[t]) * 6 : i[t] = d;
    }
    [t, r, o] = [255 * i[0], 255 * i[1], 255 * i[2]];
  }
  return e.length > 3 ? [t, r, o, e[3]] : [t, r, o, 1];
};
let ef = (...e) => {
  let t;
  let r;
  let [o, a, n] = e = d(e, "rgba");
  let l = _min(o /= 255, a /= 255, n /= 255);
  let i = _max(o, a, n);
  let s = (i + l) / 2;
  return (i === l ? (t = 0, r = Number.NaN) : t = s < .5 ? (i - l) / (i + l) : (i - l) / (2 - i - l), o == i ? r = (a - n) / (i - l) : a == i ? r = 2 + (n - o) / (i - l) : n == i && (r = 4 + (o - a) / (i - l)), (r *= 60) < 0 && (r += 360), e.length > 3 && void 0 !== e[3]) ? [r, t, s, e[3]] : [r, t, s];
};
k.prototype.hsl = function () {
  return ef(this._rgb);
};
$.hsl = (...e) => new k(...e, "hsl");
y.format.hsl = ep;
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "hsl")) && 3 === e.length) return "hsl";
  }
});
T.hsl = (e, t, r) => eo(e, t, r, "hsl");
let {
  floor: _floor
} = Math;
let {
  min: _min3,
  max: _max2
} = Math;
let ex = (...e) => {
  let t;
  let r;
  let o;
  let [a, n, l] = e = d(e, "rgb");
  let i = _min3(a, n, l);
  let s = _max2(a, n, l);
  let c = s - i;
  o = s / 255;
  0 === s ? (t = Number.NaN, r = 0) : (r = c / s, a === s && (t = (n - l) / c), n === s && (t = 2 + (l - a) / c), l === s && (t = 4 + (a - n) / c), (t *= 60) < 0 && (t += 360));
  return [t, r, o];
};
function ev(e, t) {
  let r = e.length;
  Array.isArray(e[0]) || (e = [e]);
  Array.isArray(t[0]) || (t = t.map(e => [e]));
  let o = t[0].length;
  let a = t[0].map((e, r) => t.map(e => e[r]));
  let n = e.map(e => a.map(t => Array.isArray(e) ? e.reduce((e, r, o) => e + r * (t[o] || 0), 0) : t.reduce((t, r) => t + r * e, 0)));
  return (1 === r && (n = n[0]), 1 === o) ? n.map(e => e[0]) : n;
}
k.prototype.hsv = function () {
  return ex(this._rgb);
};
$.hsv = (...e) => new k(...e, "hsv");
y.format.hsv = (...e) => {
  let t;
  let r;
  let o;
  let [a, n, l] = e = d(e, "hsv");
  if (l *= 255, 0 === n) t = r = o = l;else {
    360 === a && (a = 0);
    a > 360 && (a -= 360);
    a < 0 && (a += 360);
    let e = _floor(a /= 60);
    let i = a - e;
    let s = l * (1 - n);
    let d = l * (1 - n * i);
    let c = l * (1 - n * (1 - i));
    switch (e) {
      case 0:
        [t, r, o] = [l, c, s];
        break;
      case 1:
        [t, r, o] = [d, l, s];
        break;
      case 2:
        [t, r, o] = [s, l, c];
        break;
      case 3:
        [t, r, o] = [s, d, l];
        break;
      case 4:
        [t, r, o] = [c, s, l];
        break;
      case 5:
        [t, r, o] = [l, s, d];
    }
  }
  return [t, r, o, e.length > 3 ? e[3] : 1];
};
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "hsv")) && 3 === e.length) return "hsv";
  }
});
T.hsv = (e, t, r) => eo(e, t, r, "hsv");
let ew = (...e) => {
  let [t, r, o, ...a] = e = d(e, "lab");
  let [n, l, i] = function (e) {
    var t = ev([[1, .3963377773761749, .2158037573099136], [1, -.1055613458156586, -.0638541728258133], [1, -.0894841775298119, -1.2914855480194092]], e);
    return ev([[1.2268798758459243, -.5578149944602171, .2813910456659647], [-.0405757452148008, 1.112286803280317, -.0717110580655164], [-.0763729366746601, -.4214933324022432, 1.5869240198367816]], t.map(e => e ** 3));
  }([t, r, o]);
  let [s, c, m] = R(n, l, i);
  return [s, c, m, ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
let ey = (...e) => {
  let [t, r, o, ...a] = d(e, "rgb");
  return [...function (e) {
    let t = ev([[.819022437996703, .3619062600528904, -.1288737815209879], [.0329836539323885, .9292868615863434, .0361446663506424], [.0481771893596242, .2642395317527308, .6335478284694309]], e);
    return ev([[.210454268309314, .7936177747023054, -.0040720430116193], [1.9779985324311684, -2.42859224204858, .450593709617411], [.0259040424655478, .7827717124575296, -.8086757549230774]], t.map(e => Math.cbrt(e)));
  }(L(t, r, o)), ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
k.prototype.oklab = function () {
  return ey(this._rgb);
};
Object.assign($, {
  oklab: (...e) => new k(...e, "oklab")
});
y.format.oklab = ew;
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "oklab")) && 3 === e.length) return "oklab";
  }
});
T.oklab = (e, t, r) => {
  let o = e.oklab();
  let a = t.oklab();
  return new k(o[0] + r * (a[0] - o[0]), o[1] + r * (a[1] - o[1]), o[2] + r * (a[2] - o[2]), "oklab");
};
T.oklch = (e, t, r) => eo(e, t, r, "oklch");
let {
  pow: _pow2,
  sqrt: _sqrt3,
  PI: _PI,
  cos: _cos2,
  sin: _sin,
  atan2: _atan
} = Math;
let eM = (e, t) => {
  let r = e.length;
  let o = [0, 0, 0, 0];
  for (let a = 0; a < e.length; a++) {
    let n = e[a];
    let l = t[a] / r;
    let i = n._rgb;
    o[0] += _pow2(i[0], 2) * l;
    o[1] += _pow2(i[1], 2) * l;
    o[2] += _pow2(i[2], 2) * l;
    o[3] += i[3] * l;
  }
  o[0] = _sqrt3(o[0]);
  o[1] = _sqrt3(o[1]);
  o[2] = _sqrt3(o[2]);
  o[3] > .9999999 && (o[3] = 1);
  return new k(l(o));
};
let {
  pow: _pow3
} = Math;
function eC(e) {
  let t = "rgb";
  let r = $("#ccc");
  let o = 0;
  let a = [0, 1];
  let l = [];
  let i = [0, 0];
  let d = !1;
  let c = [];
  let m = !1;
  let u = 0;
  let p = 1;
  let f = !1;
  let b = {};
  let g = !0;
  let h = 1;
  let x = function (e) {
    if ("string" === s(e = e || ["#fff", "#000"]) && $.brewer && $.brewer[e.toLowerCase()] && (e = $.brewer[e.toLowerCase()]), "array" === s(e)) {
      1 === e.length && (e = [e[0], e[0]]);
      e = e.slice(0);
      for (let t = 0; t < e.length; t++) e[t] = $(e[t]);
      l.length = 0;
      for (let t = 0; t < e.length; t++) l.push(t / (e.length - 1));
    }
    j();
    return c = e;
  };
  let v = function (e) {
    if (null != d) {
      let t = d.length - 1;
      let r = 0;
      for (; r < t && e >= d[r];) r++;
      return r - 1;
    }
    return 0;
  };
  let w = e => e;
  let y = e => e;
  let k = function (e, o) {
    let a;
    let m;
    if (null == o && (o = !1), isNaN(e) || null === e) return r;
    m = o ? e : d && d.length > 2 ? v(e) / (d.length - 2) : p !== u ? (e - u) / (p - u) : 1;
    m = y(m);
    o || (m = w(m));
    1 !== h && (m = _pow3(m, h));
    let f = Math.floor(1e4 * (m = n(m = i[0] + m * (1 - i[0] - i[1]), 0, 1)));
    if (g && b[f]) a = b[f];else {
      if ("array" === s(c)) for (let e = 0; e < l.length; e++) {
        let r = l[e];
        if (m <= r || m >= r && e === l.length - 1) {
          a = c[e];
          break;
        }
        if (m > r && m < l[e + 1]) {
          m = (m - r) / (l[e + 1] - r);
          a = $.interpolate(c[e], c[e + 1], m, t);
          break;
        }
      } else "function" === s(c) && (a = c(m));
      g && (b[f] = a);
    }
    return a;
  };
  var j = () => b = {};
  x(e);
  let _ = function (e) {
    let t = $(k(e));
    return m && t[m] ? t[m]() : t;
  };
  _.classes = function (e) {
    if (null != e) {
      if ("array" === s(e)) {
        d = e;
        a = [e[0], e[e.length - 1]];
      } else {
        let t = $.analyze(a);
        d = 0 === e ? [t.min, t.max] : $.limits(t, "e", e);
      }
      return _;
    }
    return d;
  };
  _.domain = function (e) {
    if (!$$arguments.length) return a;
    u = e[0];
    p = e[e.length - 1];
    l = [];
    let t = c.length;
    if (e.length === t && u !== p) for (let t of Array.from(e)) l.push((t - u) / (p - u));else {
      for (let e = 0; e < t; e++) l.push(e / (t - 1));
      if (e.length > 2) {
        let t = e.map((t, r) => r / (e.length - 1));
        let r = e.map(e => (e - u) / (p - u));
        r.every((e, r) => t[r] === e) || (y = e => {
          if (e <= 0 || e >= 1) return e;
          let o = 0;
          for (; e >= r[o + 1];) o++;
          let a = (e - r[o]) / (r[o + 1] - r[o]);
          return t[o] + a * (t[o + 1] - t[o]);
        });
      }
    }
    a = [u, p];
    return _;
  };
  _.mode = function (e) {
    return $$arguments.length ? (t = e, j(), _) : t;
  };
  _.range = function (e, t) {
    x(e, t);
    return _;
  };
  _.out = function (e) {
    m = e;
    return _;
  };
  _.spread = function (e) {
    return $$arguments.length ? (o = e, _) : o;
  };
  _.correctLightness = function (e) {
    null == e && (e = !0);
    f = e;
    j();
    w = f ? function (e) {
      let t = k(0, !0).lab()[0];
      let r = k(1, !0).lab()[0];
      let o = t > r;
      let a = k(e, !0).lab()[0];
      let n = t + (r - t) * e;
      let l = a - n;
      let i = 0;
      let s = 1;
      let d = 20;
      for (; Math.abs(l) > .01 && d-- > 0;) {
        o && (l *= -1);
        l < 0 ? (i = e, e += (s - e) * .5) : (s = e, e += (i - e) * .5);
        l = (a = k(e, !0).lab()[0]) - n;
      }
      return e;
    } : e => e;
    return _;
  };
  _.padding = function (e) {
    return null != e ? ("number" === s(e) && (e = [e, e]), i = e, _) : i;
  };
  _.colors = function (t, r) {
    $$arguments.length < 2 && (r = "hex");
    let o = [];
    if (0 == $$arguments.length) o = c.slice(0);else if (1 === t) o = [_(.5)];else if (t > 1) {
      let e = a[0];
      let r = a[1] - e;
      o = function (e, t, r) {
        let o = [];
        let a = 0 < t;
        let n = r ? a ? t + 1 : t - 1 : t;
        for (let e = 0; a ? e < n : e > n; a ? e++ : e--) o.push(e);
        return o;
      }(0, t, !1).map(o => _(e + o / (t - 1) * r));
    } else {
      e = [];
      let t = [];
      if (d && d.length > 2) for (function () {
        let e = 1;
        let r = d.length;
        let o = 1 <= r;
      }(); o ? e < r : e > r; o ? e++ : e--) t.push((d[e - 1] + d[e]) * .5);else t = a;
      o = t.map(e => _(e));
    }
    $[r] && (o = o.map(e => e[r]()));
    return o;
  };
  _.cache = function (e) {
    return null != e ? (g = e, _) : g;
  };
  _.gamma = function (e) {
    return null != e ? (h = e, _) : h;
  };
  _.nodata = function (e) {
    return null != e ? (r = $(e), _) : r;
  };
  return _;
}
let eE = function (e) {
  let t = [1, 1];
  for (let r = 1; r < e; r++) {
    let e = [1];
    for (let r = 1; r <= t.length; r++) e[r] = (t[r] || 0) + t[r - 1];
    t = e;
  }
  return t;
};
let eO = function (e) {
  let t;
  let r;
  let o;
  let a;
  if (2 === (e = e.map(e => new k(e))).length) {
    [r, o] = e.map(e => e.lab());
    t = function (e) {
      return new k([0, 1, 2].map(t => r[t] + e * (o[t] - r[t])), "lab");
    };
  } else if (3 === e.length) {
    [r, o, a] = e.map(e => e.lab());
    t = function (e) {
      return new k([0, 1, 2].map(t => (1 - e) * (1 - e) * r[t] + 2 * (1 - e) * e * o[t] + e * e * a[t]), "lab");
    };
  } else if (4 === e.length) {
    let n;
    [r, o, a, n] = e.map(e => e.lab());
    t = function (e) {
      return new k([0, 1, 2].map(t => (1 - e) * (1 - e) * (1 - e) * r[t] + 3 * (1 - e) * (1 - e) * e * o[t] + 3 * (1 - e) * e * e * a[t] + e * e * e * n[t]), "lab");
    };
  } else if (e.length >= 5) {
    let r;
    let o;
    let a;
    r = e.map(e => e.lab());
    o = eE(a = e.length - 1);
    t = function (e) {
      let t = 1 - e;
      return new k([0, 1, 2].map(n => r.reduce((r, l, i) => r + o[i] * t ** (a - i) * e ** i * l[n], 0)), "lab");
    };
  } else throw RangeError("No point in running bezier with only one color.");
  return t;
};
let {
  round: _round2
} = Math;
k.prototype.rgb = function (e = !0) {
  return !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(_round2);
};
k.prototype.rgba = function (e = !0) {
  return this._rgb.slice(0, 4).map((t, r) => r < 3 ? !1 === e ? t : _round2(t) : t);
};
Object.assign($, {
  rgb: (...e) => new k(...e, "rgb")
});
y.format.rgb = (...e) => {
  let t = d(e, "rgba");
  void 0 === t[3] && (t[3] = 1);
  return t;
};
y.autodetect.push({
  p: 3,
  test: (...e) => {
    if ("array" === s(e = d(e, "rgba")) && (3 === e.length || 4 === e.length && "number" == s(e[3]) && e[3] >= 0 && e[3] <= 1)) return "rgb";
  }
});
let eS = (e, t, r) => {
  if (!eS[r]) throw Error("unknown blend mode " + r);
  return eS[r](e, t);
};
let eq = e => (t, r) => {
  let o = $(r).rgb();
  let a = $(t).rgb();
  return $.rgb(e(o, a));
};
let eR = e => (t, r) => {
  let o = [];
  o[0] = e(t[0], r[0]);
  o[1] = e(t[1], r[1]);
  o[2] = e(t[2], r[2]);
  return o;
};
eS.normal = eq(eR(e => e));
eS.multiply = eq(eR((e, t) => e * t / 255));
eS.screen = eq(eR((e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255))));
eS.overlay = eq(eR((e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))));
eS.darken = eq(eR((e, t) => e > t ? t : e));
eS.lighten = eq(eR((e, t) => e > t ? e : t));
eS.dodge = eq(eR((e, t) => 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e));
eS.burn = eq(eR((e, t) => 255 * (1 - (1 - t / 255) / (e / 255))));
let {
  pow: _pow4,
  sin: _sin2,
  cos: _cos3
} = Math;
let {
  floor: _floor2,
  random
} = Math;
let {
  log,
  pow: _pow5,
  floor: _floor3,
  abs
} = Math;
function eV(e, t = null) {
  let r = {
    min: Number.MAX_VALUE,
    max: -1 * Number.MAX_VALUE,
    sum: 0,
    values: [],
    count: 0
  };
  "object" === s(e) && (e = Object.values(e));
  e.forEach(e => {
    t && "object" === s(e) && (e = e[t]);
    null == e || isNaN(e) || (r.values.push(e), r.sum += e, e < r.min && (r.min = e), e > r.max && (r.max = e), r.count += 1);
  });
  r.domain = [r.min, r.max];
  r.limits = (e, t) => eZ(r, e, t);
  return r;
}
function eZ(e, t = "equal", r = 7) {
  "array" == s(e) && (e = eV(e));
  let {
    min,
    max
  } = e;
  let n = e.values.sort((e, t) => e - t);
  if (1 === r) return [min, max];
  let l = [];
  if ("c" === t.substr(0, 1) && (l.push(min), l.push(max)), "e" === t.substr(0, 1)) {
    l.push(min);
    for (let e = 1; e < r; e++) l.push(min + e / r * (max - min));
    l.push(max);
  } else if ("l" === t.substr(0, 1)) {
    if (min <= 0) throw Error("Logarithmic scales are only possible for values > 0");
    let e = Math.LOG10E * log(min);
    let t = Math.LOG10E * log(max);
    l.push(min);
    for (let o = 1; o < r; o++) l.push(_pow5(10, e + o / r * (t - e)));
    l.push(max);
  } else if ("q" === t.substr(0, 1)) {
    l.push(min);
    for (let e = 1; e < r; e++) {
      let t = (n.length - 1) * e / r;
      let o = _floor3(t);
      if (o === t) l.push(n[o]);else {
        let e = t - o;
        l.push(n[o] * (1 - e) + n[o + 1] * e);
      }
    }
    l.push(max);
  } else if ("k" === t.substr(0, 1)) {
    let e;
    let t = n.length;
    let i = Array(t);
    let s = Array(r);
    let d = !0;
    let c = 0;
    let m = null;
    (m = []).push(min);
    for (let e = 1; e < r; e++) m.push(min + e / r * (max - min));
    for (m.push(max); d;) {
      for (let e = 0; e < r; e++) s[e] = 0;
      for (let e = 0; e < t; e++) {
        let t;
        let o = n[e];
        let a = Number.MAX_VALUE;
        for (let n = 0; n < r; n++) {
          let r = abs(m[n] - o);
          r < a && (a = r, t = n);
          s[t]++;
          i[e] = t;
        }
      }
      let o = Array(r);
      for (let e = 0; e < r; e++) o[e] = null;
      for (let r = 0; r < t; r++) null === o[e = i[r]] ? o[e] = n[r] : o[e] += n[r];
      for (let e = 0; e < r; e++) o[e] *= 1 / s[e];
      d = !1;
      for (let e = 0; e < r; e++) if (o[e] !== m[e]) {
        d = !0;
        break;
      }
      m = o;
      ++c > 200 && (d = !1);
    }
    let u = {};
    for (let e = 0; e < r; e++) u[e] = [];
    for (let r = 0; r < t; r++) u[e = i[r]].push(n[r]);
    let p = [];
    for (let e = 0; e < r; e++) {
      p.push(u[e][0]);
      p.push(u[e][u[e].length - 1]);
    }
    p = p.sort((e, t) => e - t);
    l.push(p[0]);
    for (let e = 1; e < p.length; e += 2) {
      let t = p[e];
      isNaN(t) || -1 !== l.indexOf(t) || l.push(t);
    }
  }
  return l;
}
function eD(e, t, r) {
  return .2126729 * Math.pow(e / 255, 2.4) + .7151522 * Math.pow(t / 255, 2.4) + .072175 * Math.pow(r / 255, 2.4);
}
let {
  sqrt: _sqrt4,
  pow: _pow6,
  min: _min4,
  max: _max3,
  atan2: _atan2,
  abs: _abs,
  cos: _cos4,
  sin: _sin3,
  exp,
  PI: _PI2
} = Math;
let e6 = {
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
};
let e4 = Object.keys(e6);
let e7 = new Map(e4.map(e => [e.toLowerCase(), e]));
let e8 = "function" == typeof Proxy ? new Proxy(e6, {
  get(e, t) {
    let r = t.toLowerCase();
    if (e7.has(r)) return e[e7.get(r)];
  },
  getOwnPropertyNames: () => Object.getOwnPropertyNames(e4)
}) : e6;
let {
  max: _max4
} = Math;
let te = (...e) => {
  let [t, r, o] = d(e, "rgb");
  let a = 1 - _max4(t /= 255, _max4(r /= 255, o /= 255));
  let n = a < 1 ? 1 / (1 - a) : 0;
  return [(1 - t - a) * n, (1 - r - a) * n, (1 - o - a) * n, a];
};
k.prototype.cmyk = function () {
  return te(this._rgb);
};
Object.assign($, {
  cmyk: (...e) => new k(...e, "cmyk")
});
y.format.cmyk = (...e) => {
  let [t, r, o, a] = e = d(e, "cmyk");
  let n = e.length > 4 ? e[4] : 1;
  return 1 === a ? [0, 0, 0, n] : [t >= 1 ? 0 : 255 * (1 - t) * (1 - a), r >= 1 ? 0 : 255 * (1 - r) * (1 - a), o >= 1 ? 0 : 255 * (1 - o) * (1 - a), n];
};
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "cmyk")) && 4 === e.length) return "cmyk";
  }
});
let tt = (...e) => {
  let t = d(e, "hsla");
  let r = c(e) || "lsa";
  t[0] = f(t[0] || 0) + "deg";
  t[1] = f(100 * t[1]) + "%";
  t[2] = f(100 * t[2]) + "%";
  "hsla" === r || t.length > 3 && t[3] < 1 ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1), r = "hsla") : t.length = 3;
  return `${r.substr(0, 3)}(${t.join(" ")})`;
};
let tr = (...e) => {
  let t = d(e, "lab");
  let r = c(e) || "lab";
  t[0] = f(t[0]) + "%";
  t[1] = f(t[1]);
  t[2] = f(t[2]);
  "laba" === r || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3;
  return `lab(${t.join(" ")})`;
};
let to = (...e) => {
  let t = d(e, "lch");
  let r = c(e) || "lab";
  t[0] = f(t[0]) + "%";
  t[1] = f(t[1]);
  t[2] = isNaN(t[2]) ? "none" : f(t[2]) + "deg";
  "lcha" === r || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3;
  return `lch(${t.join(" ")})`;
};
let ta = (...e) => {
  let t = d(e, "lab");
  t[0] = f(100 * t[0]) + "%";
  t[1] = b(t[1]);
  t[2] = b(t[2]);
  t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3;
  return `oklab(${t.join(" ")})`;
};
let tn = (...e) => {
  let [t, r, o, ...a] = d(e, "rgb");
  let [n, l, i] = ey(t, r, o);
  let [s, c, m] = J(n, l, i);
  return [s, c, m, ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
let tl = (...e) => {
  let t = d(e, "lch");
  t[0] = f(100 * t[0]) + "%";
  t[1] = b(t[1]);
  t[2] = isNaN(t[2]) ? "none" : f(t[2]) + "deg";
  t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3;
  return `oklch(${t.join(" ")})`;
};
let {
  round: _round3
} = Math;
let ts = (...e) => {
  let t = d(e, "rgba");
  let r = c(e) || "rgb";
  if ("hsl" === r.substr(0, 3)) return tt(ef(t), r);
  if ("lab" === r.substr(0, 3)) {
    let e = P();
    O("d50");
    let o = tr(B(t), r);
    O(e);
    return o;
  }
  if ("lch" === r.substr(0, 3)) {
    let e = P();
    O("d50");
    let o = to(ee(t), r);
    O(e);
    return o;
  }
  return "oklab" === r.substr(0, 5) ? ta(ey(t)) : "oklch" === r.substr(0, 5) ? tl(tn(t)) : (t[0] = _round3(t[0]), t[1] = _round3(t[1]), t[2] = _round3(t[2]), ("rgba" === r || t.length > 3 && t[3] < 1) && (t[3] = "/ " + (t.length > 3 ? t[3] : 1), r = "rgba"), `${r.substr(0, 3)}(${t.slice(0, "rgb" === r ? 3 : 4).join(" ")})`);
};
let td = (...e) => {
  let [t, r, o, ...a] = e = d(e, "lch");
  let [n, l, i] = D(t, r, o);
  let [s, c, m] = ew(n, l, i);
  return [s, c, m, ...(a.length > 0 && a[0] < 1 ? [a[0]] : [])];
};
let tc = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
let tm = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
let tu = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
let tp = /\s*/.source;
let tf = /\s+/.source;
let tb = /\s*,\s*/.source;
let tg = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
let th = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
let tx = RegExp("^rgba?\\(" + tp + [tc, tc, tc].join(tf) + th + "\\)$");
let tv = RegExp("^rgb\\(" + tp + [tc, tc, tc].join(tb) + tp + "\\)$");
let tw = RegExp("^rgba\\(" + tp + [tc, tc, tc, tm].join(tb) + tp + "\\)$");
let ty = RegExp("^hsla?\\(" + tp + [tg, tu, tu].join(tf) + th + "\\)$");
let tk = RegExp("^hsl?\\(" + tp + [tg, tu, tu].join(tb) + tp + "\\)$");
let t$ = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
let tj = RegExp("^lab\\(" + tp + [tm, tm, tm].join(tf) + th + "\\)$");
let t_ = RegExp("^lch\\(" + tp + [tm, tm, tg].join(tf) + th + "\\)$");
let tz = RegExp("^oklab\\(" + tp + [tm, tm, tm].join(tf) + th + "\\)$");
let tN = RegExp("^oklch\\(" + tp + [tm, tm, tg].join(tf) + th + "\\)$");
let {
  round: _round4
} = Math;
let tA = e => e.map((e, t) => t <= 2 ? n(_round4(e), 0, 255) : e);
let tC = (e, t = 0, r = 100, o = !1) => ("string" == typeof e && e.endsWith("%") && (e = parseFloat(e.substring(0, e.length - 1)) / 100, e = o ? t + (e + 1) * .5 * (r - t) : t + e * (r - t)), +e);
let tE = (e, t) => "none" === e ? t : e;
let tO = e => {
  let t;
  if ("transparent" === (e = e.toLowerCase().trim())) return [0, 0, 0, 0];
  if (y.format.named) try {
    return y.format.named(e);
  } catch (e) {}
  if ((t = e.match(tx)) || (t = e.match(tv))) {
    let e = t.slice(1, 4);
    for (let t = 0; t < 3; t++) e[t] = +tC(tE(e[t], 0), 0, 255);
    e = tA(e);
    let r = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    e[3] = r;
    return e;
  }
  if (t = e.match(tw)) {
    let e = t.slice(1, 5);
    for (let t = 0; t < 4; t++) e[t] = +tC(e[t], 0, 255);
    return e;
  }
  if ((t = e.match(ty)) || (t = e.match(tk))) {
    let e = t.slice(1, 4);
    e[0] = +tE(e[0].replace("deg", ""), 0);
    e[1] = .01 * +tC(tE(e[1], 0), 0, 100);
    e[2] = .01 * +tC(tE(e[2], 0), 0, 100);
    let r = tA(ep(e));
    let o = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    r[3] = o;
    return r;
  }
  if (t = e.match(t$)) {
    let e = t.slice(1, 4);
    e[1] *= .01;
    e[2] *= .01;
    let r = ep(e);
    for (let e = 0; e < 3; e++) r[e] = _round4(r[e]);
    r[3] = +t[4];
    return r;
  }
  if (t = e.match(tj)) {
    let e = t.slice(1, 4);
    e[0] = tC(tE(e[0], 0), 0, 100);
    e[1] = tC(tE(e[1], 0), -125, 125, !0);
    e[2] = tC(tE(e[2], 0), -125, 125, !0);
    let r = P();
    O("d50");
    let o = tA(G(e));
    O(r);
    let a = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    o[3] = a;
    return o;
  }
  if (t = e.match(t_)) {
    let e = t.slice(1, 4);
    e[0] = tC(e[0], 0, 100);
    e[1] = tC(tE(e[1], 0), 0, 150, !1);
    e[2] = +tE(e[2].replace("deg", ""), 0);
    let r = P();
    O("d50");
    let o = tA(U(e));
    O(r);
    let a = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    o[3] = a;
    return o;
  }
  if (t = e.match(tz)) {
    let e = t.slice(1, 4);
    e[0] = tC(tE(e[0], 0), 0, 1);
    e[1] = tC(tE(e[1], 0), -.4, .4, !0);
    e[2] = tC(tE(e[2], 0), -.4, .4, !0);
    let r = tA(ew(e));
    let o = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    r[3] = o;
    return r;
  }
  if (t = e.match(tN)) {
    let e = t.slice(1, 4);
    e[0] = tC(tE(e[0], 0), 0, 1);
    e[1] = tC(tE(e[1], 0), 0, .4, !1);
    e[2] = +tE(e[2].replace("deg", ""), 0);
    let r = tA(td(e));
    let o = void 0 !== t[4] ? +tC(t[4], 0, 1) : 1;
    r[3] = o;
    return r;
  }
};
tO.test = e => tx.test(e) || ty.test(e) || tj.test(e) || t_.test(e) || tz.test(e) || tN.test(e) || tv.test(e) || tw.test(e) || tk.test(e) || t$.test(e) || "transparent" === e;
k.prototype.css = function (e) {
  return ts(this._rgb, e);
};
$.css = (...e) => new k(...e, "css");
y.format.css = tO;
y.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && "string" === s(e) && tO.test(e)) return "css";
  }
});
y.format.gl = (...e) => {
  let t = d(e, "rgba");
  t[0] *= 255;
  t[1] *= 255;
  t[2] *= 255;
  return t;
};
$.gl = (...e) => new k(...e, "gl");
k.prototype.gl = function () {
  let e = this._rgb;
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
};
k.prototype.hex = function (e) {
  return A(this._rgb, e);
};
$.hex = (...e) => new k(...e, "hex");
y.format.hex = N;
y.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (!t.length && "string" === s(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex";
  }
});
let {
  log: _log
} = Math;
let tS = e => {
  let t;
  let r;
  let o;
  let a = e / 100;
  a < 66 ? (t = 255, r = a < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (r = a - 2) + 104.49216199393888 * _log(r), o = a < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (o = a - 10) + 115.67994401066147 * _log(o)) : (t = 351.97690566805693 + .114206453784165 * (t = a - 55) - 40.25366309332127 * _log(t), r = 325.4494125711974 + .07943456536662342 * (r = a - 50) - 28.0852963507957 * _log(r), o = 255);
  return [t, r, o, 1];
};
let {
  round: _round5
} = Math;
let tR = (...e) => {
  let t;
  let r = d(e, "rgb");
  let o = r[0];
  let a = r[2];
  let n = 1e3;
  let l = 4e4;
  for (; l - n > .4;) {
    let e = tS(t = (l + n) * .5);
    e[2] / e[0] >= a / o ? l = t : n = t;
  }
  return _round5(t);
};
k.prototype.temp = k.prototype.kelvin = k.prototype.temperature = function () {
  return tR(this._rgb);
};
let tG = (...e) => new k(...e, "temp");
Object.assign($, {
  temp: tG,
  kelvin: tG,
  temperature: tG
});
y.format.temp = y.format.kelvin = y.format.temperature = tS;
k.prototype.oklch = function () {
  return tn(this._rgb);
};
Object.assign($, {
  oklch: (...e) => new k(...e, "oklch")
});
y.format.oklch = td;
y.autodetect.push({
  p: 2,
  test: (...e) => {
    if ("array" === s(e = d(e, "oklch")) && 3 === e.length) return "oklch";
  }
});
Object.assign($, {
  analyze: eV,
  average: (e, t = "lrgb", r = null) => {
    let o = e.length;
    r || (r = Array.from(Array(o)).map(() => 1));
    let a = o / r.reduce(function (e, t) {
      return e + t;
    });
    if (r.forEach((e, t) => {
      r[t] *= a;
    }), e = e.map(e => new k(e)), "lrgb" === t) return eM(e, r);
    let n = e.shift();
    let l = n.get(t);
    let i = [];
    let s = 0;
    let d = 0;
    for (let e = 0; e < l.length; e++) if (l[e] = (l[e] || 0) * r[0], i.push(isNaN(l[e]) ? 0 : r[0]), "h" === t.charAt(e) && !isNaN(l[e])) {
      let t = l[e] / 180 * _PI;
      s += _cos2(t) * r[0];
      d += _sin(t) * r[0];
    }
    let c = n.alpha() * r[0];
    e.forEach((e, o) => {
      let a = e.get(t);
      c += e.alpha() * r[o + 1];
      for (let e = 0; e < l.length; e++) if (!isNaN(a[e])) {
        if (i[e] += r[o + 1], "h" === t.charAt(e)) {
          let t = a[e] / 180 * _PI;
          s += _cos2(t) * r[o + 1];
          d += _sin(t) * r[o + 1];
        } else l[e] += a[e] * r[o + 1];
      }
    });
    for (let e = 0; e < l.length; e++) if ("h" === t.charAt(e)) {
      let t = _atan(d / i[e], s / i[e]) / _PI * 180;
      for (; t < 0;) t += 360;
      for (; t >= 360;) t -= 360;
      l[e] = t;
    } else l[e] = l[e] / i[e];
    c /= o;
    return new k(l, t).alpha(c > .99999 ? 1 : c, !0);
  },
  bezier: e => {
    let t = eO(e);
    t.scale = () => eC(t);
    return t;
  },
  blend: eS,
  brewer: e8,
  Color: k,
  colors: j,
  contrast: (e, t) => {
    e = new k(e);
    t = new k(t);
    let r = e.luminance();
    let o = t.luminance();
    return r > o ? (r + .05) / (o + .05) : (o + .05) / (r + .05);
  },
  contrastAPCA: (e, t) => {
    e = new k(e);
    t = new k(t);
    1 > e.alpha() && (e = X(t, e, e.alpha(), "rgb"));
    let r = eD(...e.rgb());
    let o = eD(...t.rgb());
    let a = r >= .022 ? r : r + Math.pow(.022 - r, 1.414);
    let n = o >= .022 ? o : o + Math.pow(.022 - o, 1.414);
    let l = Math.pow(n, .56) - Math.pow(a, .57);
    let i = Math.pow(n, .65) - Math.pow(a, .62);
    let s = 5e-4 > Math.abs(n - a) ? 0 : a < n ? 1.14 * l : 1.14 * i;
    return 100 * (.1 > Math.abs(s) ? 0 : s > 0 ? s - .027 : s + .027);
  },
  cubehelix: function (e = 300, t = -1.5, r = 1, o = 1, a = [0, 1]) {
    let n = 0;
    let i;
    "array" === s(a) ? i = a[1] - a[0] : (i = 0, a = [a, a]);
    let d = function (s) {
      let d = g * ((e + 120) / 360 + t * s);
      let c = _pow4(a[0] + i * s, o);
      let m = (0 !== n ? r[0] + s * n : r) * c * (1 - c) / 2;
      let u = _cos3(d);
      let p = _sin2(d);
      return $(l([255 * (c + m * (-.14861 * u + 1.78277 * p)), 255 * (c + m * (-.29227 * u - .90649 * p)), 255 * (c + 1.97294 * u * m), 1]));
    };
    d.start = function (t) {
      return null == t ? e : (e = t, d);
    };
    d.rotations = function (e) {
      return null == e ? t : (t = e, d);
    };
    d.gamma = function (e) {
      return null == e ? o : (o = e, d);
    };
    d.hue = function (e) {
      return null == e ? r : ("array" === s(r = e) ? 0 == (n = r[1] - r[0]) && (r = r[1]) : n = 0, d);
    };
    d.lightness = function (e) {
      return null == e ? a : ("array" === s(e) ? (a = e, i = e[1] - e[0]) : (a = [e, e], i = 0), d);
    };
    d.scale = () => $.scale(d);
    d.hue(r);
    return d;
  },
  deltaE: function (e, t, r = 1, o = 1, a = 1) {
    var n = function (e) {
      return 360 * e / (2 * _PI2);
    };
    var l = function (e) {
      return 2 * _PI2 * e / 360;
    };
    e = new k(e);
    t = new k(t);
    let [i, s, d] = Array.from(e.lab());
    let [c, m, u] = Array.from(t.lab());
    let p = (i + c) / 2;
    let f = (_sqrt4(_pow6(s, 2) + _pow6(d, 2)) + _sqrt4(_pow6(m, 2) + _pow6(u, 2))) / 2;
    let b = .5 * (1 - _sqrt4(_pow6(f, 7) / (_pow6(f, 7) + _pow6(25, 7))));
    let g = s * (1 + b);
    let h = m * (1 + b);
    let x = _sqrt4(_pow6(g, 2) + _pow6(d, 2));
    let v = _sqrt4(_pow6(h, 2) + _pow6(u, 2));
    let w = (x + v) / 2;
    let y = n(_atan2(d, g));
    let $ = n(_atan2(u, h));
    let j = y >= 0 ? y : y + 360;
    let _ = $ >= 0 ? $ : $ + 360;
    let z = _abs(j - _) > 180 ? (j + _ + 360) / 2 : (j + _) / 2;
    let N = 1 - .17 * _cos4(l(z - 30)) + .24 * _cos4(l(2 * z)) + .32 * _cos4(l(3 * z + 6)) - .2 * _cos4(l(4 * z - 63));
    let M = _ - j;
    M = 180 >= _abs(M) ? M : _ <= j ? M + 360 : M - 360;
    M = 2 * _sqrt4(x * v) * _sin3(l(M) / 2);
    let A = v - x;
    let C = 1 + .015 * _pow6(p - 50, 2) / _sqrt4(20 + _pow6(p - 50, 2));
    let E = 1 + .045 * w;
    let O = 1 + .015 * w * N;
    let P = 30 * exp(-_pow6((z - 275) / 25, 2));
    let S = -(2 * _sqrt4(_pow6(w, 7) / (_pow6(w, 7) + _pow6(25, 7)))) * _sin3(2 * l(P));
    return _max3(0, _min4(100, _sqrt4(_pow6((c - i) / (r * C), 2) + _pow6(A / (o * E), 2) + _pow6(M / (a * O), 2) + A / (o * E) * S * (M / (a * O)))));
  },
  distance: function (e, t, r = "lab") {
    e = new k(e);
    t = new k(t);
    let o = e.get(r);
    let a = t.get(r);
    let n = 0;
    for (let e in o) {
      let t = (o[e] || 0) - (a[e] || 0);
      n += t * t;
    }
    return Math.sqrt(n);
  },
  input: y,
  interpolate: X,
  limits: eZ,
  mix: X,
  random: () => {
    let e = "#";
    for (let t = 0; t < 6; t++) e += "0123456789abcdef".charAt(_floor2(16 * random()));
    return new k(e, "hex");
  },
  scale: eC,
  scales: {
    cool: () => eC([$.hsl(180, 1, .9), $.hsl(250, .7, .4)]),
    hot: () => eC(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb")
  },
  valid: (...e) => {
    try {
      new k(...e);
      return !0;
    } catch (e) {
      return !1;
    }
  }
});
export let $$tW0 = 443 == require.j ? $ : null;
export const Ay = $$tW0;