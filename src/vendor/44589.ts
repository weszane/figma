let i = (e = 0) => {
  let r = Math.abs(e);
  return r <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((r + .055) / 1.055, 2.4);
};
let $$s0 = ({
  r: e,
  g: r,
  b: n,
  alpha: s
}) => {
  let o = {
    mode: "lrgb",
    r: i(e),
    g: i(r),
    b: i(n)
  };
  void 0 !== s && (o.alpha = s);
  return o;
};
export const A = $$s0;