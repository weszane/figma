export function $$n0(e, t, i, n, r) {
  return function (e, t, i, n, r) {
    let a = t[n]?.id;
    let s = {
      rawValue: r
    };
    if (a) {
      let t = e?.resolveVariable(a);
      s.variable = {
        value: t
      };
    }
    return s;
  }(i, e, 0, r, n);
}
export const X = $$n0;