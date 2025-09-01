import { jsx } from "react/jsx-runtime";
export function $$n0(e) {
  let t = e.stackMode;
  return "HORIZONTAL" === t || "VERTICAL" === t;
}
export function $$i2(e) {
  return "GRID" === e.stackMode;
}
export let $$a1 = jsx("div", {
  style: {
    borderRadius: "var(--radius-full)",
    backgroundColor: "var(--color-icon)",
    height: "4px",
    width: "4px"
  }
});
export const Rt = $$n0;
export const Zy = $$a1;
export const po = $$i2;