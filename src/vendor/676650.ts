export let $$i0 = e => {
  let r = e.reduce((e, r) => {
    if (void 0 !== r) {
      let n = r * Math.PI / 180;
      e.sin += Math.sin(n);
      e.cos += Math.cos(n);
    }
    return e;
  }, {
    sin: 0,
    cos: 0
  });
  let n = 180 * Math.atan2(r.sin, r.cos) / Math.PI;
  return n < 0 ? 360 + n : n;
};
export const rO = $$i0;