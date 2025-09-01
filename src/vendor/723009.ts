let i = (e = 0) => {
  let r = Math.abs(e);
  return r > .0031308 ? (Math.sign(e) || 1) * (1.055 * Math.pow(r, 1 / 2.4) - .055) : 12.92 * e;
};
let $$s0 = ({
  r: e,
  g: r,
  b: n,
  alpha: s
}, o = "rgb") => {
  let a = {
    mode: o,
    r: i(e),
    g: i(r),
    b: i(n)
  };
  void 0 !== s && (a.alpha = s);
  return a;
};
export const A = $$s0;