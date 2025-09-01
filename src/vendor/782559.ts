import { A as _$$A } from "../vendor/711679";
import { O5 } from "../vendor/663074";
import { j } from "../vendor/171112";
import { x } from "../vendor/298225";
import { Uz } from "../vendor/168210";
import { rO } from "../vendor/676650";
function s({
  h: e,
  s: r,
  v: n,
  alpha: s
}) {
  let o;
  e = _$$A(void 0 !== e ? e : 0);
  void 0 === r && (r = 0);
  void 0 === n && (n = 0);
  let a = Math.abs(e / 60 % 2 - 1);
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: n,
        g: n * (1 - r * a),
        b: n * (1 - r)
      };
      break;
    case 1:
      o = {
        r: n * (1 - r * a),
        g: n,
        b: n * (1 - r)
      };
      break;
    case 2:
      o = {
        r: n * (1 - r),
        g: n,
        b: n * (1 - r * a)
      };
      break;
    case 3:
      o = {
        r: n * (1 - r),
        g: n * (1 - r * a),
        b: n
      };
      break;
    case 4:
      o = {
        r: n * (1 - r * a),
        g: n * (1 - r),
        b: n
      };
      break;
    case 5:
      o = {
        r: n,
        g: n * (1 - r),
        b: n * (1 - r * a)
      };
      break;
    default:
      o = {
        r: n * (1 - r),
        g: n * (1 - r),
        b: n * (1 - r)
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
    mode: "hsv",
    s: 0 === s ? 0 : 1 - o / s,
    v: s
  };
  s - o != 0 && (a.h = (s === e ? (r - n) / (s - o) + (r < n) * 6 : s === r ? (n - e) / (s - o) + 2 : (e - r) / (s - o) + 4) * 60);
  void 0 !== i && (a.alpha = i);
  return a;
}
export let $$m0 = {
  mode: "hsv",
  toMode: {
    rgb: s
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: o
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: {
      use: x,
      fixup: O5
    },
    s: x,
    v: x,
    alpha: {
      use: x,
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
export const A = $$m0;