export function $$i0(e, r, n, s = {}, o = {}) {
  "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, s, o));
  "string" == typeof r && (r = e.variants && e.variants[r]);
  "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, s, o));
  return r;
}
export const a = $$i0;