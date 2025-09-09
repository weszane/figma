import { useSelector } from "react-redux";
import { r as _$$r } from "../905/520829";
import { n as _$$n } from "../905/347702";
let $$s4 = _$$n((e, t) => e[t] === _$$r.LOADING);
let $$o7 = (e, t) => null !== e[t] && void 0 !== e[t];
let $$l0 = (e, t) => null !== e[t] && void 0 !== e[t] && !$$s4(e, t);
let $$d2 = (e, t) => e[t] === _$$r.SUCCESS;
let $$c5 = (e, t) => e[t] === _$$r.FAILURE;
let $$u1 = (e, t) => e[t];
let $$p3 = (e, t) => null === e[t] || void 0 === e[t] || e[t] === _$$r.FAILURE;
let $$m8 = _$$n(e => $$s4(useSelector(e => e.loadingState), e));
export function $$h6(e) {
  return $$l0(useSelector(e => e.loadingState), e);
}
export const D2 = $$l0;
export const Fl = $$u1;
export const GH = $$d2;
export const Sc = $$p3;
export const VP = $$s4;
export const aF = $$c5;
export const mC = $$h6;
export const mn = $$o7;
export const oh = $$m8;
