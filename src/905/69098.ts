import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { qS, hv, RF, uj, Qp, CZ, yu, nv, qE } from "../figma_app/410936";
var a = r;
export function $$o0({
  height: e = "24",
  ...t
}) {
  return jsx("div", {
    className: a()({
      [qS]: !0,
      [hv]: "light" === t.background,
      [RF]: "warning" === t.background,
      [uj]: "white" === t.background,
      [Qp]: "24" === e,
      [CZ]: "16" === e,
      [yu]: "strong" === t.border
    }),
    children: t.children
  });
}
export function $$l2(e) {
  return jsx("div", {
    className: nv,
    children: e.children
  });
}
export function $$d1(e) {
  return jsx("div", {
    className: qE,
    children: e.children
  });
}
export const Ex = $$o0;
export const OQ = $$d1;
export const b3 = $$l2;