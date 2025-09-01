import { useMemo } from "react";
import { md } from "../figma_app/27355";
import { RB } from "../figma_app/69680";
import { my, m0 } from "../figma_app/976749";
import { NW, AG, pk } from "../figma_app/300692";
export function $$l2(e, t) {
  let r = my();
  return useMemo(() => NW(r, e, t), [r, t, e]);
}
export function $$d0(e) {
  let t = my();
  return useMemo(() => AG(t, e), [t, e]);
}
export function $$c1(e) {
  let t = m0();
  let r = md(RB) && t;
  return useMemo(() => r ? e.filter(e => pk(e)) : e, [r, e]);
}
export const Ol = $$d0;
export const bT = $$c1;
export const xy = $$l2;