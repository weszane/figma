import { n$, KY } from "../905/875826";
let $$r0 = 1;
let $$a11 = 10;
let s = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "-": "-",
  ".": ".",
  ",": ".",
  "\u06F0": "0",
  "\u06F1": "1",
  "\u06F2": "2",
  "\u06F3": "3",
  "\u06F4": "4",
  "\u06F5": "5",
  "\u06F6": "6",
  "\u06F7": "7",
  "\u06F8": "8",
  "\u06F9": "9",
  "\u060C": ".",
  "\u066B": ".",
  "\u066C": ".",
  "\u0660": "0",
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9"
};
export function $$o6(e) {
  if ("" === e || /^-?[\d]*\.?[\d]*$/.test(e)) return e;
  let t = !1;
  let i = "";
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r in s) {
      let e = s[r];
      if ("." === e) {
        if (t) continue;
        i += e;
        t = !0;
        continue;
      }
      i += e;
      continue;
    }
    return e;
  }
  return i;
}
export function $$l4(e) {
  return "incrementBy" in e;
}
export function $$d7(e, t) {
  if (!e.getIncrementTargets) return null;
  let i = t.selectionStart || 0;
  let n = t.selectionEnd || 0;
  return e.getIncrementTargets(t.value, {
    start: i,
    end: n
  });
}
export function $$c9(e, t, i) {
  return e.getNudgeAmount ? e.getNudgeAmount(t, i) : t ? $$a11 : $$r0;
}
export function $$u10(e, t, i, {
  big: r = !1,
  incrementTargets: a = null,
  snap: s
} = {}) {
  let o = e.incrementBy(t, i, a);
  if (s) {
    let i = $$c9(e, r, t);
    e.snap ? o = e.snap(o, i) : "number" == typeof o && (o = n$(o, i));
  }
  return {
    value: $$g3(e, o),
    preClamped: o
  };
}
export function $$p2(e, t, i, n = {}) {
  let r = $$c9(e, n.big ?? !1, t);
  return $$u10(e, t, r * i, n);
}
export function $$m5(e, t, i) {
  let n = e.parse(t, i);
  return {
    value: $$l4(e) ? $$g3(e, n) : n,
    parsedValue: n
  };
}
export function $$h8(e, t, i, n, r = null) {
  try {
    return {
      ...$$m5(e, t),
      callback: null
    };
  } catch (s) {
    let a = e.onParseThrow?.(t, {
      error: s,
      value: i,
      source: n,
      event: r
    });
    if ("function" == typeof a) return {
      value: null,
      parsedValue: null,
      callback: a
    };
    return null == a ? null : {
      value: a,
      parsedValue: a,
      callback: null
    };
  }
}
export function $$g3(e, t) {
  let {
    min,
    max
  } = e;
  return e.clamp ? e.clamp(t, min, max) : "number" == typeof t ? KY(t, min, max) : t;
}
export function $$f1(e, t, i) {
  return t === i || (e.isEqual ? e.isEqual(t, i) : e.format(t) === e.format(i));
}
export const A0 = $$r0;
export const Fi = $$f1;
export const Hl = $$p2;
export const Jq = $$g3;
export const QT = $$l4;
export const R2 = $$m5;
export const S8 = $$o6;
export const _L = $$d7;
export const iL = $$h8;
export const mb = $$c9;
export const ql = $$u10;
export const rk = $$a11;