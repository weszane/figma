export function $$r0(e) {
  if ("number" == typeof e) return {
    units: "RAW",
    value: e
  };
  if (e.match(/^[0-9]+(\.[0-9]+)$/)) return {
    units: "RAW",
    value: parseFloat(e)
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
export const Or = $$r0;