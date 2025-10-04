import { A as _$$A } from "../vendor/711679";
import { lG, c, gH, ZL } from "../vendor/850605";
import { Tok } from "../vendor/776654";
import { O5 } from "../vendor/663074";
import { j } from "../vendor/171112";
import { x as _$$x } from "../vendor/298225";
import { Uz } from "../vendor/168210";
import { rO } from "../vendor/676650";
function s({
  h: e,
  s: r,
  l: n,
  alpha: s
}) {
  let o;
  e = _$$A(void 0 !== e ? e : 0);
  void 0 === r && (r = 0);
  void 0 === n && (n = 0);
  let a = n + r * (n < .5 ? n : 1 - n);
  let h = a - (a - n) * 2 * Math.abs(e / 60 % 2 - 1);
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: a,
        g: h,
        b: 2 * n - a
      };
      break;
    case 1:
      o = {
        r: h,
        g: a,
        b: 2 * n - a
      };
      break;
    case 2:
      o = {
        r: 2 * n - a,
        g: a,
        b: h
      };
      break;
    case 3:
      o = {
        r: 2 * n - a,
        g: h,
        b: a
      };
      break;
    case 4:
      o = {
        r: h,
        g: 2 * n - a,
        b: a
      };
      break;
    case 5:
      o = {
        r: a,
        g: 2 * n - a,
        b: h
      };
      break;
    default:
      o = {
        r: 2 * n - a,
        g: 2 * n - a,
        b: 2 * n - a
      };
  }
  o.mode = "rgb";
  void 0 !== s && (o.alpha = s);
  return o;
}
function o({
  r: e,
  g: r,
  b: n,
  alpha: i
}) {
  void 0 === e && (e = 0);
  void 0 === r && (r = 0);
  void 0 === n && (n = 0);
  let s = Math.max(e, r, n);
  let o = Math.min(e, r, n);
  let a = {
    mode: "hsl",
    s: s === o ? 0 : (s - o) / (1 - Math.abs(s + o - 1)),
    l: .5 * (s + o)
  };
  s - o != 0 && (a.h = (s === e ? (r - n) / (s - o) + (r < n) * 6 : s === r ? (n - e) / (s - o) + 2 : (e - r) / (s - o) + 4) * 60);
  void 0 !== i && (a.alpha = i);
  return a;
}
let a = (e, r) => {
  switch (r) {
    case "deg":
      return +e;
    case "rad":
      return e / Math.PI * 180;
    case "grad":
      return e / 10 * 9;
    case "turn":
      return 360 * e;
  }
};
let d = RegExp(`^hsla?\\(\\s*${lG}${c}${gH}${c}${gH}\\s*(?:,\\s*${ZL}\\s*)?\\)$`);
let p = e => {
  let r = e.match(d);
  if (!r) return;
  let n = {
    mode: "hsl"
  };
  void 0 !== r[3] ? n.h = +r[3] : void 0 !== r[1] && void 0 !== r[2] && (n.h = a(r[1], r[2]));
  void 0 !== r[4] && (n.s = Math.min(Math.max(0, r[4] / 100), 1));
  void 0 !== r[5] && (n.l = Math.min(Math.max(0, r[5] / 100), 1));
  void 0 !== r[6] ? n.alpha = Math.max(0, Math.min(1, r[6] / 100)) : void 0 !== r[7] && (n.alpha = Math.max(0, Math.min(1, +r[7])));
  return n;
};
let m = function (e, r) {
  if (!r || "hsl" !== r[0] && "hsla" !== r[0]) return;
  let n = {
    mode: "hsl"
  };
  let [, i, s, o, a] = r;
  if (i.type !== Tok.None) {
    if (i.type === Tok.Percentage) return;
    n.h = i.value;
  }
  if (s.type !== Tok.None) {
    if (s.type === Tok.Hue) return;
    n.s = s.value / 100;
  }
  if (o.type !== Tok.None) {
    if (o.type === Tok.Hue) return;
    n.l = o.value / 100;
  }
  a.type !== Tok.None && (n.alpha = Math.min(1, Math.max(0, a.type === Tok.Number ? a.value : a.value / 100)));
  return n;
};
export let $$w0 = {
  mode: "hsl",
  toMode: {
    rgb: s
  },
  fromMode: {
    rgb: o
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [m, p],
  serialize: e => `hsl(${void 0 !== e.h ? e.h : "none"} ${void 0 !== e.s ? 100 * e.s + "%" : "none"} ${void 0 !== e.l ? 100 * e.l + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: {
      use: _$$x,
      fixup: O5
    },
    s: _$$x,
    l: _$$x,
    alpha: {
      use: _$$x,
      fixup: j
    }
  },
  difference: {
    h: Uz
  },
  average: {
    h: rO
  }
};
export const A = $$w0;