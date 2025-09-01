import { useDebugValue, useEffect, useMemo, useReducer } from 'react';
import { M } from '../905/12800';
import { Z } from '../905/20215';
import { E as _$$E, l as _$$l } from '../905/42220';
import { L } from '../905/62389';
import { x } from '../905/123366';
import { S } from '../905/142517';
import { z } from '../905/490038';
import { A } from '../905/577276';
import { H } from '../905/623391';
import { F } from '../905/785950';
import { Y } from '../905/844533';
import { y as _$$y } from '../905/867679';
import { atom } from 'jotai';
import { Pj, Xr } from '../vendor/525001';
import { atomFamily as _$$Iz, unwrap } from '../vendor/812047';
let p = Symbol();
export function $$_13(e) {
  let t = unwrap(e, (...e) => e.length ? e[0] : p);
  let r = r => r(t) === p ? r(e) : r(t);
  return 'write' in e ? atom(r, e.write) : atom(r);
}
export function $$S18(e, t) {
  let r = Pj();
  let [[a, s, l], d] = useReducer(t => {
    let n = r.get(e);
    return Object.is(t[0], n) && t[1] === r && t[2] === e ? t : [n, r, e];
  }, void 0, () => [r.get(e), r, e]);
  let c = r.get(e);
  (s !== r || l !== e) && (d(), c = r.get(e));
  let u = t?.deferToFrame ?? !1;
  useEffect(() => {
    let t;
    let n = r.sub(e, () => {
      u ? (void 0 !== t && cancelAnimationFrame(t), t = requestAnimationFrame(d)) : d();
    });
    d();
    return () => {
      void 0 !== t && cancelAnimationFrame(t);
      n();
    };
  }, [r, e, u]);
  useDebugValue(c);
  return c instanceof Promise ? Y(c) : c;
}
export function $$v17(e, t) {
  return [$$S18(e, t), Xr(e)];
}
export function $$A3(e, t) {
  let r = _$$Iz(e, t);
  r.removeAll = () => {
    r.setShouldRemove(() => !0);
    r.setShouldRemove(null);
  };
  return r;
}
export function $$x19(e, t) {
  let r = useMemo(() => atom(e), [e]);
  return $$S18(t || r);
}
export { p6, tP } from '../905/292282';
export { eU } from 'jotai';
export { AY } from '../vendor/84183';
export { Pj, Xr } from '../vendor/525001';
export { mg, Rq, t_, tx, um, Ut } from '../vendor/812047';
export const An = A;
export const Iz = $$A3;
export const zl = z;
export const Zb = Z;
export const S_ = S;
export const E3 = _$$l;
export const E2 = _$$E;
export const Mt = $$_13;
export const xP = x;
export const fp = $$v17;
export const md = $$S18;
export const mC = $$x19;
export const Hj = H;
export const yu = _$$y;
export const M2 = M;
export const LJ = L;
export const FZ = F;
