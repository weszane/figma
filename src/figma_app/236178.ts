import { useMemo } from "react";
import { md } from "../figma_app/27355";
import { d$, S0, Gg, bJ } from "../905/863795";
export function $$s4() {
  md(d$);
  md(S0);
}
export function $$o0(e, t) {
  let r = c(t);
  return !!e && r.has(e);
}
export function $$l2(e) {
  let t = md(S0);
  return !!e && t.has(e);
}
export function $$d3(e, t) {
  let r = $$o0(e, t);
  let n = $$l2(e);
  return r || n;
}
function c(e) {
  return md(e ? Gg : bJ);
}
export function $$u1(e) {
  let t = c(e);
  let r = md(S0);
  return useMemo(() => ({
    workspaceApprovedLibraryKeys: t,
    orgApprovedLibraryKeys: r
  }), [t, r]);
}
export const Ck = $$o0;
export const Fl = $$u1;
export const Ho = $$l2;
export const fV = $$d3;
export const rB = $$s4;