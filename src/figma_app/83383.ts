export function $$n0(e) {
  if ("number" == typeof e) return {
    units: "RAW",
    value: e
  };
  if ("auto" === e) return {
    units: "AUTO"
  };
  let t = parseFloat(e);
  return isNaN(t) ? void 0 : e.match(/.*%\w*/) ? {
    units: "PERCENT",
    value: t
  } : e.match(/.*px\w*/) ? {
    units: "PIXELS",
    value: t
  } : void 0;
}
export function $$i1(e, t) {
  let r = function (e) {
    let t = Math.abs(e);
    return t < 1 || t < 100 ? 2 : 0;
  }(e);
  return `${(+e.toFixed(r)).toString()}${t}`;
}
export const O = $$n0;
export const S = $$i1;