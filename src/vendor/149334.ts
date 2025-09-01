import { XP, I6, FY } from "../vendor/256301";
import { A as _$$A } from "../vendor/551610";
let A = XP();
export function $$o3(e, t = {}) {
  return I6(e, 5, _$$A, t, XP());
}
export function $$s0(e, t = {}) {
  FY(A);
  return I6(e, 3, _$$A, t, A).domain;
}
export function $$a2(e, t = {}) {
  FY(A);
  return I6(e, 4, _$$A, t, A).subdomain;
}
export function $$l1(e, t = {}) {
  FY(A);
  return I6(e, 5, _$$A, t, A).domainWithoutSuffix;
}
export const FB = $$s0;
export const Gw = $$l1;
export const ZN = $$a2;
export const qg = $$o3;