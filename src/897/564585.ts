import { clamp } from "../figma_app/492908";
import { hD } from "../897/602108";
export class $$a6 {}
$$a6.MAX_W0 = 1e3;
$$a6.MIN_W0 = .1;
$$a6.MAX_ZETA = 1;
$$a6.MIN_ZETA = 1e-4;
$$a6.MIN_MASS = .01;
$$a6.MIN_STIFFNESS = .01;
$$a6.MIN_DAMPING = .01;
$$a6.MAX_MASS = 100;
$$a6.MAX_STIFFNESS = 1e4;
$$a6.MAX_DAMPING = 1e3;
let o = Math.PI / $$a6.MAX_W0;
function s(e) {
  let t = e[hD.STIFFNESS];
  let n = e[hD.DAMPING];
  let i = e[hD.MASS];
  return {
    frequency: Math.sqrt(t / i),
    zeta: n / (2 * Math.sqrt(t * i))
  };
}
function l({
  frequency: e,
  zeta: t
}, n) {
  let o = n[hD.MASS] > 0 ? clamp(n[hD.MASS], $$a6.MIN_MASS, $$a6.MAX_MASS) : 1;
  let s = e * e * o;
  let l = 2 * t * Math.sqrt(s * o);
  let c = n.slice();
  c[hD.MASS] = o;
  c[hD.STIFFNESS] = s;
  c[hD.DAMPING] = l;
  return c;
}
export function $$c3(e) {
  return function ({
    frequency: e,
    zeta: t
  }) {
    return {
      x: Math.max(Math.PI / e, 0),
      y: 2 - 2 * Math.pow(clamp(t, 0, 1), .87)
    };
  }(s(e));
}
export function $$p5(e, t) {
  return l({
    frequency: clamp(Math.PI / Math.max(o, e.x), $$a6.MIN_W0, $$a6.MAX_W0),
    zeta: clamp(Math.pow((2 - e.y) / 2, 1.1494252873563218), $$a6.MIN_ZETA, $$a6.MAX_ZETA)
  }, t);
}
export let $$u4 = 3;
export function $$_2(e, t) {
  e[hD.STIFFNESS] = d(e[hD.STIFFNESS], t);
  e[hD.DAMPING] = d(e[hD.DAMPING], t);
  return e;
}
function d(e, t) {
  return +e.toPrecision(t);
}
export function $$h7(e) {
  let {
    frequency,
    zeta
  } = s(e);
  return m / (frequency * zeta);
}
let m = 6;
export function $$S1(e, t) {
  let n = s(t).zeta;
  return $$_2(l({
    frequency: m / e / n,
    zeta: n
  }, t), 4);
}
export function $$T0(e) {
  let t = $$c3(e);
  let n = $$h7(e);
  return {
    mass: e[hD.MASS],
    stiffness: e[hD.STIFFNESS],
    damping: e[hD.DAMPING],
    handleX: t.x,
    handleY: t.y,
    duration: n
  };
}
export const F4 = $$T0;
export const PQ = $$S1;
export const _J = $$_2;
export const im = $$c3;
export const kM = $$u4;
export const my = $$p5;
export const wH = $$a6;
export const xX = $$h7;