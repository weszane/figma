import { useCallback } from "react";
export let $$r1 = {
  toTransformed: e => e,
  fromTransformed: e => e
};
function a(e, t, i = 1) {
  return {
    normalize: useCallback(n => (n - e) / (t - e) * i, [e, t, i]),
    denormalize: useCallback(n => {
      let r = (t - e) * n;
      return e + r / i;
    }, [e, t, i])
  };
}
function s(e, t) {
  let i = Math.pow(10, t);
  return Math.round(e * i) / i;
}
export function $$o2({
  min: e,
  max: t,
  decimalPlaces: i = 0
}) {
  let {
    normalize,
    denormalize
  } = a(e, t, 100);
  return {
    toTransformed: useCallback(n => {
      if (n < e) return e;
      if (n > t) return t;
      let a = normalize(n);
      return s(denormalize(.2 * a + .008 * a * a), i);
    }, [e, t, normalize, denormalize, i]),
    fromTransformed: useCallback(n => n < e ? e : n > t ? t : s(denormalize((-.2 + Math.sqrt(.04 + .032 * normalize(n))) / .016), i), [e, t, normalize, denormalize, i])
  };
}
export function $$l0({
  min: e,
  max: t,
  decimalPlaces: i = 0
}) {
  let {
    normalize,
    denormalize
  } = a(e, t, 1);
  return {
    toTransformed: useCallback(n => n < e ? e : n > t ? t : s(denormalize(Math.pow(10, 3 * (normalize(n) - 1))), i), [e, t, normalize, denormalize, i]),
    fromTransformed: useCallback(n => n < e ? e : n > t ? t : s(denormalize(Math.log10(normalize(n)) / 3 + 1), i), [e, t, normalize, denormalize, i])
  };
}
export const Bk = $$l0;
export const Dq = $$r1;
export const eN = $$o2;