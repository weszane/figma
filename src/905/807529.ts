export function $$n0(e) {
  let t = !1;
  return (...i) => {
    if (!t) try {
      t = !0;
      e(...i);
    } finally {
      t = !1;
    }
  };
}
export const M = $$n0;