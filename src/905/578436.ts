export function $$n0(e, t) {
  let i = RegExp(`^${e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")} [0-9]+$`);
  let n = -1 !== t.indexOf(e);
  let r = t.reduce((t, r) => i.test(r) ? (n = !0, Math.max(parseInt(r.substr(e.length)), t)) : t, 1);
  return n ? e + " " + (r + 1).toString() : e;
}
export function $$r1(e) {
  let t = RegExp("^(.*) [0-9]+$");
  let i = e.match(t);
  return null != i && "string" == typeof i[1] ? i[1] : e;
}
export const g = $$n0;
export const s = $$r1;