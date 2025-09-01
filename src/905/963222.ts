let n = {};
let $$r0 = {
  remove: e => {
    delete n[e];
    Object.entries(n).filter(([t, i]) => i.parentId === e).forEach(([e, t]) => delete n[e]);
  },
  records: n
};
export const O = $$r0;