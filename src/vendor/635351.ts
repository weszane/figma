import { V, $ } from "../vendor/524215";
import { y as _$$y } from "../vendor/605352";
import { q } from "../vendor/82231";
import { j } from "../vendor/150960";
import { u } from "../vendor/736267";
import { B } from "../vendor/907558";
import { V as _$$V } from "../vendor/896466";
import { F } from "../vendor/696990";
import { f, V as _$$V2 } from "../vendor/615177";
import { q as _$$q } from "../vendor/358723";
function h(e, r, n) {
  return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (r - e) * 6 * n : n < .5 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e;
}
function d({
  hue: e,
  saturation: r,
  lightness: n,
  alpha: i
}) {
  e /= 360;
  n /= 100;
  let s = 0;
  let o = 0;
  let a = 0;
  if (r /= 100) {
    let i = n < .5 ? n * (1 + r) : n + r - n * r;
    let d = 2 * n - i;
    s = h(d, i, e + 1 / 3);
    o = h(d, i, e);
    a = h(d, i, e - 1 / 3);
  } else s = o = a = n;
  return {
    red: Math.round(255 * s),
    green: Math.round(255 * o),
    blue: Math.round(255 * a),
    alpha: i
  };
}
let v = (e, r, n) => {
  let i = e * e;
  return Math.sqrt(Math.max(0, n * (r * r - i) + i));
};
let y = [u, B, _$$V];
let b = e => y.find(r => r.test(e));
function O(e) {
  let r = b(e);
  V(!!r, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = r.parse(e);
  r === _$$V && (n = d(n));
  return n;
}
let x = (e, r) => {
  let n = O(e);
  let i = O(r);
  let s = {
    ...n
  };
  return e => (s.red = v(n.red, i.red, e), s.green = v(n.green, i.green, e), s.blue = v(n.blue, i.blue, e), s.alpha = j(n.alpha, i.alpha, e), B.transform(s));
};
function _(e, r) {
  return "number" == typeof e ? n => j(e, r, n) : _$$y.test(e) ? x(e, r) : A(e, r);
}
let S = (e, r) => {
  let n = [...e];
  let i = n.length;
  let s = e.map((e, n) => _(e, r[n]));
  return e => {
    for (let r = 0; r < i; r++) n[r] = s[r](e);
    return n;
  };
};
let E = (e, r) => {
  let n = {
    ...e,
    ...r
  };
  let i = {};
  for (let s in n) void 0 !== e[s] && void 0 !== r[s] && (i[s] = _(e[s], r[s]));
  return e => {
    for (let r in i) n[r] = i[r](e);
    return n;
  };
};
let A = (e, r) => {
  let n = f.createTransformer(r);
  let s = _$$V2(e);
  let o = _$$V2(r);
  return s.numColors === o.numColors && s.numNumbers >= o.numNumbers ? F(S(s.values, o.values), n) : ($(!0, `Complex values '${e}' and '${r}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n > 0 ? r : e}`);
};
let T = (e, r) => n => j(e, r, n);
function I(e) {
  if ("number" == typeof e) ;else if ("string" == typeof e) return _$$y.test(e) ? x : A;else if (Array.isArray(e)) return S;else if ("object" == typeof e) return E;
  return T;
}
function P(e, r, n) {
  let i = [];
  let s = n || I(e[0]);
  let o = e.length - 1;
  for (let n = 0; n < o; n++) {
    let o = s(e[n], e[n + 1]);
    if (r) {
      let e = Array.isArray(r) ? r[n] : r;
      o = F(e, o);
    }
    i.push(o);
  }
  return i;
}
export function $$R0(e, r, {
  clamp: n = !0,
  ease: s,
  mixer: a
} = {}) {
  let h = e.length;
  V(h === r.length, "Both input and output ranges must be the same length");
  V(!s || !Array.isArray(s) || s.length === h - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  e[0] > e[h - 1] && (e = [...e].reverse(), r = [...r].reverse());
  let d = P(r, s, a);
  let p = d.length;
  let g = r => {
    let n = 0;
    if (p > 1) for (; n < e.length - 2 && !(r < e[n + 1]); n++);
    let i = _$$q(e[n], e[n + 1], r);
    return d[n](i);
  };
  return n ? r => g(q(e[0], e[h - 1], r)) : g;
}
export const G = $$R0;