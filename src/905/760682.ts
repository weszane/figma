export function $$n2(e, t) {
  return e.size === t.size && $$r0(e, t);
}
export function $$r0(e, t) {
  return [...e].every(e => t.has(e));
}
export function $$a1(e, t) {
  let i = new Set();
  let n = new Set();
  t?.forEach(t => {
    e.has(t) || n.add(t);
  });
  e.forEach(e => {
    t?.has(e) || i.add(e);
  });
  return {
    added: i,
    removed: n
  };
}
export const Bq = $$r0;
export const Zv = $$a1;
export const _f = $$n2;