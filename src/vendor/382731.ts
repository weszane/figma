import { j } from '../vendor/171112'
import { x as _$$x } from '../vendor/298225'
import { xW } from '../vendor/776654'
import { bu, c, gH, ZL } from '../vendor/850605'

let i = (e, r) => {
  if (typeof e == 'number') {
    if (r === 3) {
      return {
        mode: 'rgb',
        r: (e >> 8 & 15 | e >> 4 & 240) / 255,
        g: (e >> 4 & 15 | 240 & e) / 255,
        b: (15 & e | e << 4 & 240) / 255,
      }
    }
    if (r === 4) {
      return {
        mode: 'rgb',
        r: (e >> 12 & 15 | e >> 8 & 240) / 255,
        g: (e >> 8 & 15 | e >> 4 & 240) / 255,
        b: (e >> 4 & 15 | 240 & e) / 255,
        alpha: (15 & e | e << 4 & 240) / 255,
      }
    }
    if (r === 6) {
      return {
        mode: 'rgb',
        r: (e >> 16 & 255) / 255,
        g: (e >> 8 & 255) / 255,
        b: (255 & e) / 255,
      }
    }
    if (r === 8) {
      return {
        mode: 'rgb',
        r: (e >> 24 & 255) / 255,
        g: (e >> 16 & 255) / 255,
        b: (e >> 8 & 255) / 255,
        alpha: (255 & e) / 255,
      }
    }
  }
}
let s = {
  aliceblue: 0xF0F8FF,
  antiquewhite: 0xFAEBD7,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 0xF0FFFF,
  beige: 0xF5F5DC,
  bisque: 0xFFE4C4,
  black: 0,
  blanchedalmond: 0xFFEBCD,
  blue: 255,
  blueviolet: 9055202,
  brown: 0xA52A2A,
  burlywood: 0xDEB887,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 0xD2691E,
  coral: 0xFF7F50,
  cornflowerblue: 6591981,
  cornsilk: 0xFFF8DC,
  crimson: 0xDC143C,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 0xB8860B,
  darkgray: 0xA9A9A9,
  darkgreen: 25600,
  darkgrey: 0xA9A9A9,
  darkkhaki: 0xBDB76B,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 0xFF8C00,
  darkorchid: 0x9932CC,
  darkred: 9109504,
  darksalmon: 0xE9967A,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 0xFF1493,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 0xB22222,
  floralwhite: 0xFFFAF0,
  forestgreen: 2263842,
  fuchsia: 0xFF00FF,
  gainsboro: 0xDCDCDC,
  ghostwhite: 0xF8F8FF,
  gold: 0xFFD700,
  goldenrod: 0xDAA520,
  gray: 8421504,
  green: 32768,
  greenyellow: 0xADFF2F,
  grey: 8421504,
  honeydew: 0xF0FFF0,
  hotpink: 0xFF69B4,
  indianred: 0xCD5C5C,
  indigo: 4915330,
  ivory: 0xFFFFF0,
  khaki: 0xF0E68C,
  lavender: 0xE6E6FA,
  lavenderblush: 0xFFF0F5,
  lawngreen: 8190976,
  lemonchiffon: 0xFFFACD,
  lightblue: 0xADD8E6,
  lightcoral: 0xF08080,
  lightcyan: 0xE0FFFF,
  lightgoldenrodyellow: 0xFAFAD2,
  lightgray: 0xD3D3D3,
  lightgreen: 9498256,
  lightgrey: 0xD3D3D3,
  lightpink: 0xFFB6C1,
  lightsalmon: 0xFFA07A,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 0xB0C4DE,
  lightyellow: 0xFFFFE0,
  lime: 65280,
  limegreen: 3329330,
  linen: 0xFAF0E6,
  magenta: 0xFF00FF,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 0xBA55D3,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 0xC71585,
  midnightblue: 1644912,
  mintcream: 0xF5FFFA,
  mistyrose: 0xFFE4E1,
  moccasin: 0xFFE4B5,
  navajowhite: 0xFFDEAD,
  navy: 128,
  oldlace: 0xFDF5E6,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 0xFFA500,
  orangered: 0xFF4500,
  orchid: 0xDA70D6,
  palegoldenrod: 0xEEE8AA,
  palegreen: 0x98FB98,
  paleturquoise: 0xAFEEEE,
  palevioletred: 0xDB7093,
  papayawhip: 0xFFEFD5,
  peachpuff: 0xFFDAB9,
  peru: 0xCD853F,
  pink: 0xFFC0CB,
  plum: 0xDDA0DD,
  powderblue: 0xB0E0E6,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 0xFF0000,
  rosybrown: 0xBC8F8F,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 0xFA8072,
  sandybrown: 0xF4A460,
  seagreen: 3050327,
  seashell: 0xFFF5EE,
  sienna: 0xA0522D,
  silver: 0xC0C0C0,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 0xFFFAFA,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 0xD2B48C,
  teal: 32896,
  thistle: 0xD8BFD8,
  tomato: 0xFF6347,
  turquoise: 4251856,
  violet: 0xEE82EE,
  wheat: 0xF5DEB3,
  white: 0xFFFFFF,
  whitesmoke: 0xF5F5F5,
  yellow: 0xFFFF00,
  yellowgreen: 0x9ACD32,
}
let o = e => i(s[e.toLowerCase()], 6)
let a = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i
let h = (e) => {
  let r
  return (r = e.match(a)) ? i(parseInt(r[1], 16), r[1].length) : void 0
}
let p = new RegExp(`^rgba?\\(\\s*${bu}${c}${bu}${c}${bu}\\s*(?:,\\s*${ZL}\\s*)?\\)$`)
let g = new RegExp(`^rgba?\\(\\s*${gH}${c}${gH}${c}${gH}\\s*(?:,\\s*${ZL}\\s*)?\\)$`)
let m = (e) => {
  let r
  let n = {
    mode: 'rgb',
  }
  if (r = e.match(p)) {
    void 0 !== r[1] && (n.r = r[1] / 255)
    void 0 !== r[2] && (n.g = r[2] / 255)
    void 0 !== r[3] && (n.b = r[3] / 255)
  }
  else {
    if (!(r = e.match(g)))
      return
    void 0 !== r[1] && (n.r = r[1] / 100)
    void 0 !== r[2] && (n.g = r[2] / 100)
    void 0 !== r[3] && (n.b = r[3] / 100)
  }
  void 0 !== r[4] ? n.alpha = Math.max(0, Math.min(1, r[4] / 100)) : void 0 !== r[5] && (n.alpha = Math.max(0, Math.min(1, +r[5])))
  return n
}
let y = function (e, r) {
  if (!r || r[0] !== 'rgb' && r[0] !== 'rgba')
    return
  let n = {
    mode: 'rgb',
  }
  let [, i, s, o, a] = r
  if (i.type !== xW.Hue && s.type !== xW.Hue && o.type !== xW.Hue) {
    i.type !== xW.None && (n.r = i.type === xW.Number ? i.value / 255 : i.value / 100)
    s.type !== xW.None && (n.g = s.type === xW.Number ? s.value / 255 : s.value / 100)
    o.type !== xW.None && (n.b = o.type === xW.Number ? o.value / 255 : o.value / 100)
    a.type !== xW.None && (n.alpha = Math.min(1, Math.max(0, a.type === xW.Number ? a.value : a.value / 100)))
    return n
  }
}
let b = e => e === 'transparent'
  ? {
      mode: 'rgb',
      r: 0,
      g: 0,
      b: 0,
      alpha: 0,
    }
  : void 0
export let $$w0 = {
  mode: 'rgb',
  channels: ['r', 'g', 'b', 'alpha'],
  parse: [y, h, m, o, b, 'srgb'],
  serialize: 'srgb',
  interpolate: {
    r: _$$x,
    g: _$$x,
    b: _$$x,
    alpha: {
      use: _$$x,
      fixup: j,
    },
  },
  gamut: !0,
  white: {
    r: 1,
    g: 1,
    b: 1,
  },
  black: {
    r: 0,
    g: 0,
    b: 0,
  },
}
export const A = $$w0
