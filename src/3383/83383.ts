export function $$n0(t) {
  if ("number" == typeof t) return {
    units: "RAW",
    value: t
  };
  if ("auto" === t) return {
    units: "AUTO"
  };
  let u = parseFloat(t);
  return isNaN(u) ? void 0 : t.match(/.*%\w*/) ? {
    units: "PERCENT",
    value: u
  } : t.match(/.*px\w*/) ? {
    units: "PIXELS",
    value: u
  } : void 0;
}
export function $$i1(t, u) {
  let e = function (t) {
    let u = Math.abs(t);
    return u < 1 || u < 100 ? 2 : 0;
  }(t);
  return `${(+t.toFixed(e)).toString()}${u}`;
}
export const O = $$n0;
export const S = $$i1;