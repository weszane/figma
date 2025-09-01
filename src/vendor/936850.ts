import { A as _$$A, X } from "../vendor/548698";
export function $$l3() {}
var $$a7 = .7;
var $$i5 = 1.4285714285714286;
var u = "\\s*([+-]?\\d+)\\s*";
var o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var c = /^#([0-9a-f]{3,8})$/;
var f = RegExp(`^rgb\\(${u},${u},${u}\\)$`);
var d = RegExp(`^rgb\\(${s},${s},${s}\\)$`);
var h = RegExp(`^rgba\\(${u},${u},${u},${o}\\)$`);
var p = RegExp(`^rgba\\(${s},${s},${s},${o}\\)$`);
var g = RegExp(`^hsl\\(${o},${s},${s}\\)$`);
var m = RegExp(`^hsla\\(${o},${s},${s},${o}\\)$`);
var v = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0,
  blanchedalmond: 0xffebcd,
  blue: 255,
  blueviolet: 9055202,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 6591981,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 25600,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 9109504,
  darksalmon: 0xe9967a,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 0xff1493,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 2263842,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 8421504,
  green: 32768,
  greenyellow: 0xadff2f,
  grey: 8421504,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 4915330,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 8190976,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 9498256,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 65280,
  limegreen: 3329330,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 0xba55d3,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 0xc71585,
  midnightblue: 1644912,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 128,
  oldlace: 0xfdf5e6,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 3050327,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 0xfffafa,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 0xd2b48c,
  teal: 32896,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 4251856,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
function y() {
  return this.rgb().formatHex();
}
function $$b() {
  return this.rgb().formatRgb();
}
export function $$x0(e) {
  var n;
  var t;
  e = (e + "").trim().toLowerCase();
  return (n = c.exec(e)) ? (t = n[1].length, n = parseInt(n[1], 16), 6 === t ? k(n) : 3 === t ? new $$z1(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === t ? S(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === t ? S(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = f.exec(e)) ? new $$z1(n[1], n[2], n[3], 1) : (n = d.exec(e)) ? new $$z1(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = h.exec(e)) ? S(n[1], n[2], n[3], n[4]) : (n = p.exec(e)) ? S(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = g.exec(e)) ? _(n[1], n[2] / 100, n[3] / 100, 1) : (n = m.exec(e)) ? _(n[1], n[2] / 100, n[3] / 100, n[4]) : v.hasOwnProperty(e) ? k(v[e]) : "transparent" === e ? new $$z1(NaN, NaN, NaN, 0) : null;
}
function k(e) {
  return new $$z1(e >> 16 & 255, e >> 8 & 255, 255 & e, 1);
}
function S(e, n, t, r) {
  r <= 0 && (e = n = t = NaN);
  return new $$z1(e, n, t, r);
}
export function $$w6(e) {
  return (e instanceof $$l3 || (e = $$x0(e)), e) ? new $$z1((e = e.rgb()).r, e.g, e.b, e.opacity) : new $$z1();
}
export function $$N4(e, n, t, r) {
  return 1 == $$arguments.length ? $$w6(e) : new $$z1(e, n, t, r);
}
export function $$z1(e, n, t, r) {
  this.r = +e;
  this.g = +n;
  this.b = +t;
  this.opacity = +r;
}
function M() {
  return `#${T(this.r)}${T(this.g)}${T(this.b)}`;
}
function C() {
  let e = E(this.opacity);
  return `${1 === e ? "rgb(" : "rgba("}${P(this.r)}, ${P(this.g)}, ${P(this.b)}${1 === e ? ")" : `, ${e})`}`;
}
function E(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function P(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function T(e) {
  return ((e = P(e)) < 16 ? "0" : "") + e.toString(16);
}
function _(e, n, t, r) {
  r <= 0 ? e = n = t = NaN : t <= 0 || t >= 1 ? e = n = NaN : n <= 0 && (e = NaN);
  return new A(e, n, t, r);
}
function U(e) {
  if (e instanceof A) return new A(e.h, e.s, e.l, e.opacity);
  if (e instanceof $$l3 || (e = $$x0(e)), !e) return new A();
  if (e instanceof A) return e;
  var n = (e = e.rgb()).r / 255;
  var t = e.g / 255;
  var r = e.b / 255;
  var a = Math.min(n, t, r);
  var i = Math.max(n, t, r);
  var u = NaN;
  var o = i - a;
  var s = (i + a) / 2;
  o ? (u = n === i ? (t - r) / o + (t < r) * 6 : t === i ? (r - n) / o + 2 : (n - t) / o + 4, o /= s < .5 ? i + a : 2 - i - a, u *= 60) : o = s > 0 && s < 1 ? 0 : u;
  return new A(u, o, s, e.opacity);
}
export function $$I2(e, n, t, r) {
  return 1 == $$arguments.length ? U(e) : new A(e, n, t, r);
}
function A(e, n, t, r) {
  this.h = +e;
  this.s = +n;
  this.l = +t;
  this.opacity = +r;
}
function L(e) {
  return (e = (e || 0) % 360) < 0 ? e + 360 : e;
}
function R(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function F(e, n, t) {
  return (e < 60 ? n + (t - n) * e / 60 : e < 180 ? t : e < 240 ? n + (t - n) * (240 - e) / 60 : n) * 255;
}
_$$A($$l3, $$x0, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: y,
  formatHex: y,
  formatHex8: function () {
    return this.rgb().formatHex8();
  },
  formatHsl: function () {
    return U(this).formatHsl();
  },
  formatRgb: $$b,
  toString: $$b
});
_$$A($$z1, $$N4, X($$l3, {
  brighter(e) {
    e = null == e ? $$i5 : Math.pow($$i5, e);
    return new $$z1(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    e = null == e ? $$a7 : Math.pow($$a7, e);
    return new $$z1(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $$z1(P(this.r), P(this.g), P(this.b), E(this.opacity));
  },
  displayable() {
    return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: M,
  formatHex: M,
  formatHex8: function () {
    return `#${T(this.r)}${T(this.g)}${T(this.b)}${T((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  },
  formatRgb: C,
  toString: C
}));
_$$A(A, $$I2, X($$l3, {
  brighter(e) {
    e = null == e ? $$i5 : Math.pow($$i5, e);
    return new A(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    e = null == e ? $$a7 : Math.pow($$a7, e);
    return new A(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360;
    var n = isNaN(e) || isNaN(this.s) ? 0 : this.s;
    var t = this.l;
    var r = t + (t < .5 ? t : 1 - t) * n;
    var l = 2 * t - r;
    return new $$z1(F(e >= 240 ? e - 240 : e + 120, l, r), F(e, l, r), F(e < 120 ? e + 240 : e - 120, l, r), this.opacity);
  },
  clamp() {
    return new A(L(this.h), R(this.s), R(this.l), E(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    let e = E(this.opacity);
    return `${1 === e ? "hsl(" : "hsla("}${L(this.h)}, ${100 * R(this.s)}%, ${100 * R(this.l)}%${1 === e ? ")" : `, ${e})`}`;
  }
}));
export const Ay = $$x0;
export const Gw = $$z1;
export const KI = $$I2;
export const Q1 = $$l3;
export const Qh = $$N4;
export const Uw = $$i5;
export const b = $$w6;
export const ef = $$a7;