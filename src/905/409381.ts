import { xb } from "../figma_app/465776";
import { a as _$$a } from "../vendor/294044";
import { D } from "../vendor/606294";
import { Hi, xN } from "../905/117560";
export function $$o2(e) {
  let t = [...Hi(e), [0, 0, 1]];
  0 === _$$a(t) && (t = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  let i = D(t).to2DArray();
  let [n, o] = xN(i, [0, .5]);
  let [l, d] = xN(i, [1, .5]);
  let [c, u] = xN(i, [0, 1]);
  return [{
    x: n,
    y: o
  }, {
    x: l,
    y: d
  }, {
    x: c,
    y: u
  }];
}
export function $$l0(e) {
  let t = [...Hi(e), [0, 0, 1]];
  0 === _$$a(t) && (t = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  let i = D(t).to2DArray();
  let [n, o] = xN(i, [.5, .5]);
  let [l, d] = xN(i, [1, .5]);
  let [c, u] = xN(i, [.5, 1]);
  return [{
    x: n,
    y: o
  }, {
    x: l,
    y: d
  }, {
    x: c,
    y: u
  }];
}
export function $$d1(e, t) {
  let i;
  switch (e) {
    case "gradient-linear":
      i = [{
        x: 0,
        y: .5
      }, {
        x: 1,
        y: .5
      }, {
        x: 0,
        y: 1
      }];
      break;
    case "gradient-radial":
    case "gradient-angular":
    case "gradient-diamond":
      i = [{
        x: .5,
        y: .5
      }, {
        x: 1,
        y: .5
      }, {
        x: .5,
        y: 1
      }];
      break;
    default:
      xb(e);
  }
  let r = i[0].x;
  let a = i[1].x;
  let s = i[2].x;
  let o = t[0].x;
  let l = t[0].y;
  let d = t[1].x;
  let c = t[1].y;
  let u = t[2].x;
  let p = t[2].y;
  let m = c - p;
  let h = d - u;
  let g = d * p - c * u;
  let f = -1 * (l - p);
  let _ = l - c;
  let A = -1 * h;
  let y = o - u;
  let b = -1 * (o - d);
  let v = -1 * (o * p - l * u);
  let I = o * c - l * d;
  let E = o * m - l * h + 1 * g;
  return 0 === E ? [[0, 0, 0], [0, 0, 0]] : [[(m * r + f * a + _ * s) / E, (A * r + y * a + b * s) / E, (g * r + v * a + I * s) / E], [(.5 * m + .5 * f + 1 * _) / E, (.5 * A + .5 * y + 1 * b) / E, (.5 * g + .5 * v + 1 * I) / E]];
}
export const NN = $$l0;
export const cN = $$d1;
export const gJ = $$o2;