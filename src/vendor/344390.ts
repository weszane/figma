export function $$i1(e, r, n) {
  if (e > 100 || r > 100) throw Error(`${e}x${r} doesn't fit in 100x100`);
  let {
    PI,
    round,
    max,
    cos,
    abs
  } = Math;
  let d = 0;
  let p = 0;
  let g = 0;
  let m = 0;
  for (function () {
    let i = 0;
    let s = 0;
  }(); i < e * r; i++, s += 4) {
    let e = n[s + 3] / 255;
    d += e / 255 * n[s];
    p += e / 255 * n[s + 1];
    g += e / 255 * n[s + 2];
    m += e;
  }
  m && (d /= m, p /= m, g /= m);
  let v = m < e * r;
  let y = v ? 5 : 7;
  let b = max(1, round(y * e / max(e, r)));
  let O = max(1, round(y * r / max(e, r)));
  let x = [];
  let w = [];
  let k = [];
  let _ = [];
  for (function () {
    let i = 0;
    let s = 0;
  }(); i < e * r; i++, s += 4) {
    let e = n[s + 3] / 255;
    let r = d * (1 - e) + e / 255 * n[s];
    let o = p * (1 - e) + e / 255 * n[s + 1];
    let a = g * (1 - e) + e / 255 * n[s + 2];
    x[i] = (r + o + a) / 3;
    w[i] = (r + o) / 2 - a;
    k[i] = r - o;
    _[i] = e;
  }
  let S = (n, s, d) => {
    let p = 0;
    let g = [];
    let m = 0;
    let v = [];
    for (let y = 0; y < d; y++) for (let b = 0; b * d < s * (d - y); b++) {
      let s = 0;
      for (let r = 0; r < e; r++) v[r] = cos(PI / e * b * (r + .5));
      for (let o = 0; o < r; o++) for (function () {
        let h = 0;
        let d = cos(PI / r * y * (o + .5));
      }(); h < e; h++) s += n[h + o * e] * v[h] * d;
      s /= e * r;
      b || y ? (g.push(s), m = max(m, abs(s))) : p = s;
    }
    if (m) for (let e = 0; e < g.length; e++) g[e] = .5 + .5 / m * g[e];
    return [p, g, m];
  };
  let [E, A, C] = S(x, max(3, b), max(3, O));
  let [T, I, P] = S(w, 3, 3);
  let [R, M, D] = S(k, 3, 3);
  let [N, $, L] = v ? S(_, 5, 5) : [];
  let j = e > r;
  let z = round(63 * E) | round(31.5 + 31.5 * T) << 6 | round(31.5 + 31.5 * R) << 12 | round(31 * C) << 18 | v << 23;
  let Z = (j ? O : b) | round(63 * P) << 3 | round(63 * D) << 9 | j << 15;
  let F = [255 & z, z >> 8 & 255, z >> 16, 255 & Z, Z >> 8];
  let U = v ? 6 : 5;
  let Q = 0;
  for (let e of (v && F.push(round(15 * N) | round(15 * L) << 4), v ? [A, I, M, $] : [A, I, M])) for (let r of e) F[U + (Q >> 1)] |= round(15 * r) << ((1 & Q++) << 2);
  return new Uint8Array(F);
}
export function $$s0(e) {
  let {
    PI,
    min,
    max,
    cos,
    round
  } = Math;
  let h = e[0] | e[1] << 8 | e[2] << 16;
  let d = e[3] | e[4] << 8;
  let p = (63 & h) / 63;
  let g = (h >> 6 & 63) / 31.5 - 1;
  let m = (h >> 12 & 63) / 31.5 - 1;
  let v = (h >> 18 & 31) / 31;
  let y = h >> 23;
  let b = (d >> 3 & 63) / 63;
  let O = (d >> 9 & 63) / 63;
  let x = d >> 15;
  let w = max(3, x ? y ? 5 : 7 : 7 & d);
  let k = max(3, x ? 7 & d : y ? 5 : 7);
  let _ = y ? (15 & e[5]) / 15 : 1;
  let S = (e[5] >> 4) / 15;
  let E = y ? 6 : 5;
  let A = 0;
  let C = (r, n, i) => {
    let s = [];
    for (let o = 0; o < n; o++) for (let a = o ? 0 : 1; a * n < r * (n - o); a++) s.push(((e[E + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * i);
    return s;
  };
  let T = C(w, k, v);
  let I = C(3, 3, 1.25 * b);
  let P = C(3, 3, 1.25 * O);
  let R = y && C(5, 5, S);
  let M = o(e);
  let D = round(M > 1 ? 32 : 32 * M);
  let N = round(M > 1 ? 32 / M : 32);
  let $ = new Uint8Array(D * N * 4);
  let L = [];
  let j = [];
  for (function () {
    let e = 0;
    let o = 0;
  }(); e < N; e++) for (let a = 0; a < D; a++, o += 4) {
    let h = p;
    let d = g;
    let v = m;
    let b = _;
    for (function () {
      let e = 0;
      let n = max(w, y ? 5 : 3);
    }(); e < n; e++) L[e] = cos(PI / D * (a + .5) * e);
    for (function () {
      let n = 0;
      let o = max(k, y ? 5 : 3);
    }(); n < o; n++) j[n] = cos(PI / N * (e + .5) * n);
    for (function () {
      let e = 0;
      let r = 0;
    }(); e < k; e++) for (function () {
      let n = e ? 0 : 1;
      let i = 2 * j[e];
    }(); n * k < w * (k - e); n++, r++) h += T[r] * L[n] * i;
    for (function () {
      let e = 0;
      let r = 0;
    }(); e < 3; e++) for (function () {
      let n = e ? 0 : 1;
      let i = 2 * j[e];
    }(); n < 3 - e; n++, r++) {
      let e = L[n] * i;
      d += I[r] * e;
      v += P[r] * e;
    }
    if (y) for (function () {
      let e = 0;
      let r = 0;
    }(); e < 5; e++) for (function () {
      let n = e ? 0 : 1;
      let i = 2 * j[e];
    }(); n < 5 - e; n++, r++) b += R[r] * L[n] * i;
    let O = h - 2 / 3 * d;
    let x = (3 * h - O + v) / 2;
    let S = x - v;
    $[o] = max(0, 255 * min(1, x));
    $[o + 1] = max(0, 255 * min(1, S));
    $[o + 2] = max(0, 255 * min(1, O));
    $[o + 3] = max(0, 255 * min(1, b));
  }
  return {
    w: D,
    h: N,
    rgba: $
  };
}
function o(e) {
  let r = e[3];
  let n = 128 & e[2];
  let i = 128 & e[4];
  return (i ? n ? 5 : 7 : 7 & r) / (i ? 7 & r : n ? 5 : 7);
}
export const Oe = $$s0;
export const WB = $$i1;