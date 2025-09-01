let $$n0 = Symbol("LIVESTORE_TOMBSTONED");
let $$r1 = Symbol("LIVESTORE_LOADING");
export function $$a3(e) {
  return e === $$n0 || e === $$r1 ? null : e;
}
export function $$s2(e) {
  let t = new Map();
  Object.keys(e).forEach(i => {
    t.set(i, e[i]?.objectDef);
  });
  return t;
}
export const ET = $$n0;
export const F5 = $$r1;
export const j5 = $$s2;
export const ub = $$a3;