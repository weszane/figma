import { Kg, Fl, SY } from "../vendor/4355";
let $$s0 = (e, r) => n => !!(Kg(n) && Fl.test(n) && n.startsWith(e) || r && Object.prototype.hasOwnProperty.call(n, r));
let $$o1 = (e, r, n) => s => {
  if (!Kg(s)) return s;
  let [o, a, h, d] = s.match(SY);
  return {
    [e]: parseFloat(o),
    [r]: parseFloat(a),
    [n]: parseFloat(h),
    alpha: void 0 !== d ? parseFloat(d) : 1
  };
};
export const $ = $$s0;
export const q = $$o1;