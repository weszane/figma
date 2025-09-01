export function $$n0(e, t) {
  let i;
  let n;
  let r = [];
  let a = Math.min;
  if (!(e && t)) return (t || e).length;
  for (i = 0; i <= t.length; r[i] = [i++]);
  for (n = 0; n <= e.length; r[0][n] = n++);
  for (i = 1; i <= t.length; i++) for (n = 1; n <= e.length; n++) {
    let s = t.charAt(i - 1) === e.charAt(n - 1) ? 0 : 1;
    r[i][n] = a(r[i - 1][n - 1] + s, r[i][n - 1] + 1, r[i - 1][n] + 1, e[i] === t[n - 1] && e[i - 1] === t[n] ? r[i - 1][n - 1] : 1 / 0);
  }
  return r[t.length][e.length];
}
export const f = $$n0;