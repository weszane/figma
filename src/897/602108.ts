export function $$i2(e, t) {
  return function (e, t, n, i, r) {
    let a;
    let o;
    let s;
    let l = Math.sqrt(t / e);
    let c = n / (2 * Math.sqrt(t * e));
    c < 1 ? (a = l * Math.sqrt(1 - c * c), o = 1, s = (c * l + -i) / a) : (a = 0, o = 1, s = -i + l);
    return 1 - (r = c < 1 ? Math.exp(-r * c * l) * (o * Math.cos(a * r) + s * Math.sin(a * r)) : (o + s * r) * Math.exp(-r * l));
  }(e[0], e[1], e[2], e[3], t);
}
export function $$r0(e) {
  return function (e, t) {
    let n = e[1];
    let i = e[2];
    let r = e[0];
    let a = e[3];
    let o = Math.sqrt(n / r);
    let s = Math.min(.9999, i / (2 * Math.sqrt(n * r)));
    let l = o * Math.sqrt(1 - s * s);
    return (-Math.log(.001) + Math.log(1 + (s * o + Math.abs(a)) / l)) / (s * o);
  }(e, 0);
}
export var $$a3 = (e => (e[e.MASS = 0] = "MASS", e[e.STIFFNESS = 1] = "STIFFNESS", e[e.DAMPING = 2] = "DAMPING", e[e.INITIAL_VELOCITY = 3] = "INITIAL_VELOCITY", e))($$a3 || {});
export function $$o1(e) {
  let t = e[1];
  let n = e[2];
  let i = e[0];
  return t > 0 && n > 0 && i > 0;
}
export function $$s4(e) {
  return $$o1(e) ? e : [1, 100, 10, 0];
}
export const J5 = $$r0;
export const Y1 = $$o1;
export const Zp = $$i2;
export const hD = $$a3;
export const w_ = $$s4;