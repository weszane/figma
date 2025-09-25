import { clamp, solvePolynomial } from "../figma_app/492908";
import { colorToHex } from "../905/436288";
import { h as _$$h } from "../vendor/771674";
import { f as _$$f } from "../905/24905";
import { defaultColorManipulator } from "../905/713722";
import { r as _$$r } from "../905/583881";
import { isValidColor, parseColor, whiteColor, calculateColorDifference, blackColor, isColorDark } from "../figma_app/191804";
export function $$c4(e, t, r = "IGNORE", n) {
  if (!e || !isValidColor(e)) {
    console.warn("Invalid color passed to calculateColorWithRampValue. Ensure r, g, b, and a are between 0 and 1", e);
    return null;
  }
  if (t < 0 || t > 1e3) {
    console.warn("Invalid value passed into calculateColorWithRampValue. Ensure value is between 0 and 1000", t);
    return null;
  }
  let i = y(e);
  let a = S(i);
  let s = v(i.hsluv_l, a);
  if (n) {
    let {
      LESS_THAN,
      GREATER_THAN
    } = n;
    if (LESS_THAN && 100 * s < LESS_THAN || GREATER_THAN && 100 * s > GREATER_THAN) return e;
  }
  I(i, t / 1e3, a, s);
  "IGNORE" !== r && O(i, "BLACK" === r || "BLACK_AND_WHITE" === r, "WHITE" === r || "BLACK_AND_WHITE" === r);
  return E(i);
}
export function $$u3(e) {
  if (!e || !isValidColor(e)) {
    console.warn("Invalid color passed to calculateColorWithRampValue. Ensure r, g, b, and a are between 0 and 1", e);
    return null;
  }
  let t = y(e);
  let r = S(t);
  return Math.floor(100 * v(t.hsluv_l, r));
}
export function $$p1(e, t, r = "IGNORE") {
  if (!e || !isValidColor(e)) {
    console.warn("Invalid color passed to calculateColorWithRelativeAdjustment. Ensure r, g, b, and a are between 0 and 1", e);
    return null;
  }
  if (t < -1 || t > 1) {
    console.warn("Invalid percentage passed into calculateColorWithRelativeAdjustment. Ensure percentage is between -1 and 1", t);
    return null;
  }
  let n = y(e);
  let i = S(n);
  let a = n.hsluv_l;
  let s = a;
  s = t > 0 ? a + (100 - a) * t : a * (1 - -1 * t);
  let o = v(a, i);
  I(n, v(s, i) / 10, i, o);
  "IGNORE" !== r && O(n, "BLACK" === r || "BLACK_AND_WHITE" === r, "WHITE" === r || "BLACK_AND_WHITE" === r);
  return E(n);
}
export function $$_5(e, t, r) {
  let n = y(parseColor(e));
  O(n, t, r);
  return colorToHex(E(n));
}
let h = ["red", "orange", "yellow", "green", "blue", "purple"];
let m = {
  red: {
    a: -.079,
    b: 16.1
  },
  orange: {
    a: -2.55,
    b: 56.4
  },
  yellow: {
    a: -4.26,
    b: 81.7
  },
  green: {
    a: 1.67,
    b: 131
  },
  blue: {
    a: 3.4,
    b: 227
  },
  purple: {
    a: .0136,
    b: 282
  }
};
let g = {
  red: {
    d: 95.2,
    c: -3.15,
    b: 1.3,
    a: -.159
  },
  orange: {
    d: 108,
    c: -11.7,
    b: 2.8,
    a: -.183
  },
  yellow: {
    d: 76.3,
    c: -3.03,
    b: 1.96,
    a: -.151
  },
  green: {
    d: 102,
    c: -44.8,
    b: 11.8,
    a: -.776
  },
  blue: {
    d: 95.5,
    c: -10.7,
    b: 3.71,
    a: -.306
  },
  purple: {
    d: 95.6,
    c: -2.82,
    b: 1.43,
    a: -.189
  }
};
let f = {
  red: {
    d: 96.4,
    c: -.7,
    b: -2.01,
    a: .125
  },
  orange: {
    d: 103,
    c: -6.98,
    b: .0827,
    a: -.0256
  },
  yellow: {
    d: 102,
    c: -5.84,
    b: .849,
    a: -.0972
  },
  green: {
    d: 96.5,
    c: 2.77,
    b: -2.86,
    a: .171
  },
  blue: {
    d: 97.5,
    c: .173,
    b: -2.12,
    a: .127
  },
  purple: {
    d: 98.1,
    c: -2.29,
    b: -1.94,
    a: .132
  }
};
let E = e => (e.hsluvToRgb(), {
  r: clamp(e.rgb_r, 0, 1),
  g: clamp(e.rgb_g, 0, 1),
  b: clamp(e.rgb_b, 0, 1),
  a: 1
});
let y = e => {
  let t = new _$$h();
  t.rgb_r = e.r;
  t.rgb_g = e.g;
  t.rgb_b = e.b;
  t.rgbToHsluv();
  return t;
};
let b = {
  red: 1,
  orange: .75,
  yellow: .6,
  green: 1,
  blue: 1.1,
  purple: 1
};
function T(e) {
  if (_$$f(e, whiteColor) <= x) return R(e);
  let t = y(e);
  let r = new _$$h();
  if (r.hsluv_h = t.hsluv_h, t.hsluv_l <= 10) {
    r.hsluv_s = 0;
    r.hsluv_l = 60;
    return E(r);
  }
  if (t.hsluv_l <= 30) {
    let e = .03 * t.hsluv_l;
    r.hsluv_s = t.hsluv_s * e;
  } else r.hsluv_s = Math.min(100, 1.5 * t.hsluv_s);
  r.hsluv_l = Math.min(100, .444 * t.hsluv_l + 55.555);
  return P(r);
}
function I(e, t, r, n = 5) {
  t *= 10;
  let i = m[r].a * n + m[r].b - e.hsluv_h;
  e.hsluv_h = m[r].a * t + m[r].b - i;
  let a = e.hsluv_s;
  let s = g[r].a * n * n * n + g[r].b * n * n + g[r].c * n + g[r].d;
  e.hsluv_s = g[r].a * t * t * t + g[r].b * t * t + g[r].c * t + g[r].d;
  e.hsluv_s *= a / s;
  e.hsluv_l = f[r].a * t * t * t + f[r].b * t * t + f[r].c * t + f[r].d;
  e.hsluv_s > 100 && (e.hsluv_s = 100);
  e.hsluv_l > 100 && (e.hsluv_l = 100);
  e.hsluv_h > 360 && (e.hsluv_h = 360);
  e.hsluv_h < 0 && (e.hsluv_h = 0);
}
function S(e) {
  let t = {
    blue: 0,
    yellow: 0,
    green: 0,
    purple: 0,
    red: 0,
    orange: 0
  };
  let r = e.hsluv_l / 100;
  e.hsluvToRgb();
  h.forEach(n => {
    let i = new _$$h();
    i.rgb_r = _$$r[n].r;
    i.rgb_g = _$$r[n].g;
    i.rgb_b = _$$r[n].b;
    i.rgbToHsluv();
    I(i, r, n, 5);
    i.hsluvToRgb();
    let s = calculateColorDifference(E(e), E(i));
    t[n] = s / b[n];
  });
  let n = "yellow";
  let i = t[n];
  for (let e in t) t[e] < i && (i = t[e], n = e);
  e.rgbToHsluv();
  return n;
}
function v(e, t) {
  let r = solvePolynomial(f[t].a, f[t].b, f[t].c, f[t].d - e);
  let i = r.filter(e => 0 < e && e < 10);
  return 1 === i.length ? i[0] : r.length > 1 ? (r.sort(), r[Math.floor(r.length / 2)]) : e < 50 ? 11 : -1;
}
let $$A2 = 4.5;
let x = 1.31;
let N = {
  BLACK: blackColor,
  WHITE: whiteColor
};
let C = (e, t) => {
  let {
    colorForContrastCheck,
    contrastMinimum
  } = t;
  let i = () => _$$f(o, colorForContrastCheck);
  let a = isColorDark(colorForContrastCheck) ? .1 : -.1;
  let o = E(e);
  for (; i() < contrastMinimum + .02 && (e.hsluv_l += a, !(e.hsluv_l > 100) && !(e.hsluv_l < 0));) o = E(e);
  e.rgbToHsluv();
  return i() >= contrastMinimum + .02;
};
export function $$w6(e, t) {
  let r = y(e);
  let n = C(r, t);
  return {
    adjustedColor: E(r),
    contrastMet: n
  };
}
let O = (e, t, r) => {
  let n;
  let i = E(e);
  let a = _$$f(whiteColor, i);
  let o = _$$f(blackColor, i);
  if (t && r) n = o >= a ? "BLACK" : "WHITE";else {
    if (!t && !r) return;
    n = t ? "BLACK" : "WHITE";
  }
  ("BLACK" !== n || !(o >= $$A2)) && ("WHITE" === n && a >= $$A2 || C(e, {
    contrastMinimum: $$A2,
    colorForContrastCheck: N[n]
  }));
};
let R = e => ({
  r: clamp((e.r - 1) / .55 + 1, 0, 1),
  g: clamp((e.g - 1) / .55 + 1, 0, 1),
  b: clamp((e.b - 1) / .55 + 1, 0, 1),
  a: 1
});
let L = e => {
  e.hsluvToRgb();
  let t = new _$$h();
  t.rgb_r = 1 - .55 * (1 - e.rgb_r);
  t.rgb_g = 1 - .55 * (1 - e.rgb_g);
  t.rgb_b = 1 - .55 * (1 - e.rgb_b);
  t.rgbToHsluv();
  return t;
};
let P = e => {
  let t = L(e);
  C(t, {
    contrastMinimum: x,
    colorForContrastCheck: N.WHITE
  });
  return R(E(t));
};
function D(e) {
  let t = [];
  let r = new Set();
  e.forEach(e => {
    let n = defaultColorManipulator.format(e);
    r.has(n) || (r.add(n), t.push(e));
  });
  return t;
}
export function $$k0(e) {
  if (e) return {
    base: e,
    widget: e,
    baseLight: D(e.map(e => $$p1(e, .6, "BLACK_AND_WHITE") || blackColor)),
    sticky: D(e.map(e => $$c4(e, 400, "BLACK", {
      LESS_THAN: 400
    }) || blackColor)),
    highlight: D(e.map(T)),
    pencilUI3: e,
    codeBlockTheme: e
  };
}
export const Eg = $$k0;
export const Hd = $$p1;
export const JG = $$A2;
export const Wn = $$u3;
export const jA = $$c4;
export const oN = $$_5;
export const zq = $$w6;