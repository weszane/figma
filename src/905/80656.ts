let n = [];
let r = {
  left: null,
  right: null
};
export function $$a1(e, t) {
  let i = r[e];
  i && i();
  r[e] = t;
}
export function $$s0(e) {
  0 === n.length && $$a1("right", () => {
    n.forEach(e => e());
    n = [];
  });
  n.push(e);
}
export const D = $$s0;
export const W = $$a1;