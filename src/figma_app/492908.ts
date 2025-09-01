export function $$n6(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
export function $$i2(e, t, r) {
  e = null == t ? e : Math.max(e, t);
  return null == r ? e : Math.min(e, r);
}
export function $$a1(e, t, r) {
  return e + (t - e) * r;
}
export function $$s9(e, t) {
  if (e === t) return e;
  if (e > t) throw Error("random: start must be larger than end");
  return Math.random() * (t - e + 1) + e;
}
export function $$o8(e, t, r) {
  let n = null != t;
  let i = n ? t : e;
  let a = n ? e : 0;
  r = r;
  let {
    result
  } = Array.from({
    length: Math.abs((i - a) / (r || 1))
  }).reduce(({
    result: e,
    current: t
  }) => ({
    result: [...e, t],
    current: t + r
  }), {
    current: a,
    result: []
  });
  return result;
}
export function $$l3(e, t) {
  let r = [];
  for (let n = 0; n < e; ++n) r.push(t(n));
  return r;
}
export function $$d7(e, t, r = 1e-6) {
  return Math.abs(e - t) < r;
}
export function $$c5(e, t) {
  return (e % t + t) % t;
}
export function $$u4(e, t) {
  return Math.round(e / t) * t;
}
export function $$p10(e) {
  return Math.round((e + Number.EPSILON) * 100) / 100;
}
export function $$_0(e, t, r, n) {
  let i;
  if (1e-8 > Math.abs(e)) {
    if (e = t, t = r, r = n, 1e-8 > Math.abs(e)) return (e = t, t = r, 1e-8 > Math.abs(e)) ? [] : [-t / e];
    let i = t * t - 4 * e * r;
    return 1e-8 > Math.abs(i) ? [-t / (2 * e)] : i > 0 ? [(-t + Math.sqrt(i)) / (2 * e), (-t - Math.sqrt(i)) / (2 * e)] : [];
  }
  let a = (3 * e * r - t * t) / (3 * e * e);
  let s = (2 * t * t * t - 9 * e * t * r + 27 * e * e * n) / (27 * e * e * e);
  if (1e-8 > Math.abs(a)) i = [Math.cbrt(-s)];else if (1e-8 > Math.abs(s)) i = [0].concat(a < 0 ? [Math.sqrt(-a), -Math.sqrt(-a)] : []);else {
    let e = s * s / 4 + a * a * a / 27;
    if (1e-8 > Math.abs(e)) i = [-1.5 * s / a, 3 * s / a];else if (e > 0) {
      let t = Math.cbrt(-s / 2 - Math.sqrt(e));
      i = [t - a / (3 * t)];
    } else {
      let e = 2 * Math.sqrt(-a / 3);
      let t = Math.acos(3 * s / a / e) / 3;
      let r = 2 * Math.PI / 3;
      i = [e * Math.cos(t), e * Math.cos(t - r), e * Math.cos(t - 2 * r)];
    }
  }
  for (let r = 0; r < i.length; r++) i[r] -= t / (3 * e);
  return i;
}
export const Ae = $$_0;
export const Cc = $$a1;
export const KY = $$i2;
export const M9 = $$l3;
export const YE = $$u4;
export const _g = $$c5;
export const qE = $$n6;
export const xN = $$d7;
export const y1 = $$o8;
export const yT = $$s9;
export const z0 = $$p10;