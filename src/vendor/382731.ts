import { bu, c, ZL, gH } from "../vendor/850605";
import { xW } from "../vendor/776654";
import { x as _$$x } from "../vendor/298225";
import { j } from "../vendor/171112";
let i = (e, r) => {
  if ("number" == typeof e) {
    if (3 === r) return {
      mode: "rgb",
      r: (e >> 8 & 15 | e >> 4 & 240) / 255,
      g: (e >> 4 & 15 | 240 & e) / 255,
      b: (15 & e | e << 4 & 240) / 255
    };
    if (4 === r) return {
      mode: "rgb",
      r: (e >> 12 & 15 | e >> 8 & 240) / 255,
      g: (e >> 8 & 15 | e >> 4 & 240) / 255,
      b: (e >> 4 & 15 | 240 & e) / 255,
      alpha: (15 & e | e << 4 & 240) / 255
    };
    if (6 === r) return {
      mode: "rgb",
      r: (e >> 16 & 255) / 255,
      g: (e >> 8 & 255) / 255,
      b: (255 & e) / 255
    };
    if (8 === r) return {
      mode: "rgb",
      r: (e >> 24 & 255) / 255,
      g: (e >> 16 & 255) / 255,
      b: (e >> 8 & 255) / 255,
      alpha: (255 & e) / 255
    };
  }
};
let s = {
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
let o = e => i(s[e.toLowerCase()], 6);
let a = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
let h = e => {
  let r;
  return (r = e.match(a)) ? i(parseInt(r[1], 16), r[1].length) : void 0;
};
let p = RegExp(`^rgba?\\(\\s*${bu}${c}${bu}${c}${bu}\\s*(?:,\\s*${ZL}\\s*)?\\)$`);
let g = RegExp(`^rgba?\\(\\s*${gH}${c}${gH}${c}${gH}\\s*(?:,\\s*${ZL}\\s*)?\\)$`);
let m = e => {
  let r;
  let n = {
    mode: "rgb"
  };
  if (r = e.match(p)) {
    void 0 !== r[1] && (n.r = r[1] / 255);
    void 0 !== r[2] && (n.g = r[2] / 255);
    void 0 !== r[3] && (n.b = r[3] / 255);
  } else {
    if (!(r = e.match(g))) return;
    void 0 !== r[1] && (n.r = r[1] / 100);
    void 0 !== r[2] && (n.g = r[2] / 100);
    void 0 !== r[3] && (n.b = r[3] / 100);
  }
  void 0 !== r[4] ? n.alpha = Math.max(0, Math.min(1, r[4] / 100)) : void 0 !== r[5] && (n.alpha = Math.max(0, Math.min(1, +r[5])));
  return n;
};
let y = function (e, r) {
  if (!r || "rgb" !== r[0] && "rgba" !== r[0]) return;
  let n = {
    mode: "rgb"
  };
  let [, i, s, o, a] = r;
  if (i.type !== xW.Hue && s.type !== xW.Hue && o.type !== xW.Hue) {
    i.type !== xW.None && (n.r = i.type === xW.Number ? i.value / 255 : i.value / 100);
    s.type !== xW.None && (n.g = s.type === xW.Number ? s.value / 255 : s.value / 100);
    o.type !== xW.None && (n.b = o.type === xW.Number ? o.value / 255 : o.value / 100);
    a.type !== xW.None && (n.alpha = Math.min(1, Math.max(0, a.type === xW.Number ? a.value : a.value / 100)));
    return n;
  }
};
let b = e => "transparent" === e ? {
  mode: "rgb",
  r: 0,
  g: 0,
  b: 0,
  alpha: 0
} : void 0;
export let $$w0 = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [y, h, m, o, b, "srgb"],
  serialize: "srgb",
  interpolate: {
    r: _$$x,
    g: _$$x,
    b: _$$x,
    alpha: {
      use: _$$x,
      fixup: j
    }
  },
  gamut: !0,
  white: {
    r: 1,
    g: 1,
    b: 1
  },
  black: {
    r: 0,
    g: 0,
    b: 0
  }
};
export const A = $$w0;