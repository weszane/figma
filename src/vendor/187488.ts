import { K } from "../vendor/708026";
import { O as _$$O } from "../vendor/122594";
import { f } from "../vendor/615177";
import { J } from "../vendor/38229";
import { y as _$$y } from "../vendor/605352";
import { T } from "../vendor/572888";
import { w as _$$w } from "../vendor/713938";
import { K as _$$K } from "../vendor/873234";
let i = e => /^\-?\d*\.?\d+$/.test(e);
let s = e => /^0[^.\s]+$/.test(e);
let v = [...T, _$$y, f];
let y = e => v.find(_$$w(e));
function O(e, r, n) {
  e.hasValue(r) ? e.getValue(r).set(n) : e.addValue(r, _$$O(n));
}
export function $$x2(e, r) {
  let n = _$$K(e, r);
  let {
    transitionEnd = {},
    transition = {},
    ...a
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  for (let r in a = {
    ...a,
    ...transitionEnd
  }) {
    let n = K(a[r]);
    O(e, r, n);
  }
}
function w(e, r) {
  [...r].reverse().forEach(n => {
    var i;
    let s = e.getVariant(n);
    s && $$x2(e, s);
    e.variantChildren?.forEach(e => {
      w(e, r);
    });
  });
}
export function $$k3(e, r) {
  return Array.isArray(r) ? w(e, r) : "string" == typeof r ? w(e, [r]) : void $$x2(e, r);
}
export function $$_0(e, r, n) {
  var o;
  var p;
  let g = Object.keys(r).filter(r => !e.hasValue(r));
  let m = g.length;
  if (m) for (let v = 0; v < m; v++) {
    let m = g[v];
    let b = r[m];
    let O = null;
    Array.isArray(b) && (O = b[0]);
    null === O && (O = null !== (p = null !== (o = n[m]) && void 0 !== o ? o : e.readValue(m)) && void 0 !== p ? p : r[m]);
    null != O && ("string" == typeof O && (i(O) || s(O)) ? O = parseFloat(O) : !y(O) && f.test(b) && (O = J(m, b)), e.addValue(m, _$$O(O, {
      owner: e
    })), void 0 === n[m] && (n[m] = O), null !== O && e.setBaseTarget(m, O));
  }
}
function S(e, r) {
  if (r) return (r[e] || r.$$default || r).from;
}
export function $$E1(e, r, n) {
  var i;
  let s = {};
  for (let o in e) {
    let e = S(o, r);
    s[o] = void 0 !== e ? e : n.getValue(o)?.get();
  }
  return s;
}
export const TM = $$_0;
export const $z = $$E1;
export const Uo = $$x2;
export const VI = $$k3;