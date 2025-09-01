module.exports = function (e, n, i, o, l, s) {
  if (!a(e) || !a(n) || i && !a(i)) throw Error("Image data: Uint8Array, Uint8ClampedArray or Buffer expected.");
  if (e.length !== n.length || i && i.length !== e.length) throw Error("Image sizes do not match.");
  if (e.length !== o * l * 4) throw Error("Image data size does not match width/height.");
  s = Object.assign({}, t, s);
  let m = o * l;
  let h = new Uint32Array(e.buffer, e.byteOffset, m);
  let D = new Uint32Array(n.buffer, n.byteOffset, m);
  let f = !0;
  for (let e = 0; e < m; e++) if (h[e] !== D[e]) {
    f = !1;
    break;
  }
  if (f) {
    if (i && !s.diffMask) for (let t = 0; t < m; t++) c(e, 4 * t, s.alpha, i);
    return 0;
  }
  let p = 35215 * s.threshold * s.threshold;
  let y = 0;
  for (let t = 0; t < l; t++) for (let a = 0; a < o; a++) {
    let m = (t * o + a) * 4;
    let h = r(e, n, m, m);
    Math.abs(h) > p ? !s.includeAA && (u(e, a, t, o, l, n) || u(n, a, t, o, l, e)) ? i && !s.diffMask && d(i, m, ...s.aaColor) : (i && d(i, m, ...(h < 0 && s.diffColorAlt || s.diffColor)), y++) : i && !s.diffMask && c(e, m, s.alpha, i);
  }
  return y;
};
let t = {
  threshold: .1,
  includeAA: !1,
  alpha: .1,
  aaColor: [255, 255, 0],
  diffColor: [255, 0, 0],
  diffColorAlt: null,
  diffMask: !1
};
function a(e) {
  return ArrayBuffer.isView(e) && 1 === e.constructor.BYTES_PER_ELEMENT;
}
function u(e, t, a, u, i, o) {
  let l;
  let s;
  let d;
  let c;
  let m = Math.max(t - 1, 0);
  let h = Math.max(a - 1, 0);
  let D = Math.min(t + 1, u - 1);
  let f = Math.min(a + 1, i - 1);
  let p = (a * u + t) * 4;
  let y = t === m || t === D || a === h || a === f ? 1 : 0;
  let g = 0;
  let v = 0;
  for (let n = m; n <= D; n++) for (let i = h; i <= f; i++) {
    if (n === t && i === a) continue;
    let o = r(e, e, p, (i * u + n) * 4, !0);
    if (0 === o) {
      if (++y > 2) return !1;
    } else o < g ? (g = o, l = n, s = i) : o > v && (v = o, d = n, c = i);
  }
  return 0 !== g && 0 !== v && (n(e, l, s, u, i) && n(o, l, s, u, i) || n(e, d, c, u, i) && n(o, d, c, u, i));
}
function n(e, t, a, u, n) {
  let r = Math.max(t - 1, 0);
  let i = Math.max(a - 1, 0);
  let o = Math.min(t + 1, u - 1);
  let l = Math.min(a + 1, n - 1);
  let s = (a * u + t) * 4;
  let d = t === r || t === o || a === i || a === l ? 1 : 0;
  for (let n = r; n <= o; n++) for (let r = i; r <= l; r++) {
    if (n === t && r === a) continue;
    let i = (r * u + n) * 4;
    if (e[s] === e[i] && e[s + 1] === e[i + 1] && e[s + 2] === e[i + 2] && e[s + 3] === e[i + 3] && d++, d > 2) return !0;
  }
  return !1;
}
function r(e, t, a, u, n) {
  let r = e[a + 0];
  let d = e[a + 1];
  let c = e[a + 2];
  let m = e[a + 3];
  let h = t[u + 0];
  let D = t[u + 1];
  let f = t[u + 2];
  let p = t[u + 3];
  if (m === p && r === h && d === D && c === f) return 0;
  m < 255 && (m /= 255, r = s(r, m), d = s(d, m), c = s(c, m));
  p < 255 && (p /= 255, h = s(h, p), D = s(D, p), f = s(f, p));
  let y = i(r, d, c);
  let g = i(h, D, f);
  let v = y - g;
  if (n) return v;
  let b = o(r, d, c) - o(h, D, f);
  let E = l(r, d, c) - l(h, D, f);
  let C = .5053 * v * v + .299 * b * b + .1957 * E * E;
  return y > g ? -C : C;
}
function i(e, t, a) {
  return .29889531 * e + .58662247 * t + .11448223 * a;
}
function o(e, t, a) {
  return .59597799 * e - .2741761 * t - .32180189 * a;
}
function l(e, t, a) {
  return .21147017 * e - .52261711 * t + .31114694 * a;
}
function s(e, t) {
  return 255 + (e - 255) * t;
}
function d(e, t, a, u, n) {
  e[t + 0] = a;
  e[t + 1] = u;
  e[t + 2] = n;
  e[t + 3] = 255;
}
function c(e, t, a, u) {
  let n = s(i(e[t + 0], e[t + 1], e[t + 2]), a * e[t + 3] / 255);
  d(u, t, n, n, n);
}