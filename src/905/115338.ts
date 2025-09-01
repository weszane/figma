export function $$n3(e, t) {
  let i = e.bind(null);
  i.shouldIgnoreAction = t.shouldIgnoreAction;
  return i;
}
export function $$r1(e, t, i) {
  if (i.shouldIgnoreAction(t)) return e;
  let n = null;
  for (let r of Object.keys(e)) {
    let a = i(e[r], t);
    e[r] !== a && null === n && (n = {
      ...e
    });
    n && (n[r] = a);
  }
  return n || e;
}
export function $$a2(e, t, i) {
  if (i.shouldIgnoreAction(t)) return e;
  let n = null;
  for (let r = 0; r < e.length; r++) {
    let a = i(e[r], t);
    e[r] !== a && null === n && (n = e.slice(0, r));
    n && n.push(a);
  }
  return n || e;
}
export function $$s0(e, t) {
  return function (i, n) {
    return t(e(i, n), n);
  };
}
export const Oi = $$s0;
export const Ql = $$r1;
export const ZN = $$a2;
export const oB = $$n3;