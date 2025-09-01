export function $$n0(e) {
  let t = e.elements;
  let i = {};
  for (let e = 0; e < t.length; e++) {
    let n = t.item(e);
    n.name && n.value && (i[n.name] = n.value);
  }
  return i;
}
export const t = $$n0;