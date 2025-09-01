import { y } from "../vendor/605352";
import { ai } from "../vendor/459595";
import { ne, SY, aj, Kg } from "../vendor/4355";
let a = "${c}";
let h = "${n}";
export function $$d0(e) {
  "number" == typeof e && (e = `${e}`);
  let r = [];
  let n = 0;
  let d = 0;
  let p = e.match(ne);
  p && (n = p.length, e = e.replace(ne, a), r.push(...p.map(y.parse)));
  let g = e.match(SY);
  g && (d = g.length, e = e.replace(SY, h), r.push(...g.map(ai.parse)));
  return {
    values: r,
    numColors: n,
    numNumbers: d,
    tokenised: e
  };
}
function p(e) {
  return $$d0(e).values;
}
function g(e) {
  let {
    values,
    numColors,
    tokenised
  } = $$d0(e);
  let p = values.length;
  return e => {
    let r = tokenised;
    for (let s = 0; s < p; s++) r = r.replace(s < numColors ? a : h, s < numColors ? y.transform(e[s]) : aj(e[s]));
    return r;
  };
}
let m = e => "number" == typeof e ? 0 : e;
function v(e) {
  let r = p(e);
  return g(e)(r.map(m));
}
export let $$y1 = {
  test: function (e) {
    var r;
    var n;
    return isNaN(e) && Kg(e) && (e.match(SY)?.length || 0) + (e.match(ne)?.length || 0) > 0;
  },
  parse: p,
  createTransformer: g,
  getAnimatableNone: v
};
export const V = $$d0;
export const f = $$y1;