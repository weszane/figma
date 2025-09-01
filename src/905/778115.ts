export function $$n0(e, t) {
  let i = e.map(t);
  let n = -1;
  for (let e = 0; e < i.length; e++) if (i[e]) {
    if (-1 !== n) return null;
    n = e;
  }
  return -1 === n ? null : e[n];
}
export const p = $$n0;