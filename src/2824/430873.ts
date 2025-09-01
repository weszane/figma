let r = e => {
  if ("string" != typeof e) return null;
  let t = e.match(/^(-?\d*\.?\d+)(e[\-\+]?\d+)?(px|%)?$/);
  return t ? {
    value: parseFloat(t[1] + (t[2] || "")),
    unit: "%" === t[3] ? "PERCENT" : "PIXELS"
  } : null;
};
let $$s1 = e => {
  let t = r(e);
  return t && "PIXELS" === t.unit ? t.value : null;
};
let $$a0 = (e, t) => {
  let i = r(e);
  return i && "PERCENT" === i.unit ? i.value * t.axisSizeInPixels / 100 : null;
};
export const KS = $$a0;
export const PW = $$s1;