import { jsx } from "react/jsx-runtime";
import { withTrackedClick } from "../figma_app/831799";
import { xZ, HM, AJ } from "../905/190597";
export function $$s0(e) {
  let {
    className,
    ...r
  } = e;
  return jsx("button", {
    className: `${xZ} ${className}`,
    type: "button",
    ...r,
    children: e.children
  });
}
export let $$o4 = withTrackedClick($$s0);
export function $$l1(e) {
  let {
    className,
    ...r
  } = e;
  return jsx("button", {
    className: `${HM} ${className}`,
    type: "button",
    ...r,
    children: e.children
  });
}
export let $$d3 = withTrackedClick($$l1);
export function $$c2(e) {
  let {
    className,
    ...r
  } = e;
  return jsx("button", {
    className: `${AJ} ${className}`,
    type: "button",
    ...r,
    children: e.children
  });
}
export const $$ = $$s0;
export const nR = $$l1;
export const pz = $$c2;
export const tM = $$d3;
export const vd = $$o4;