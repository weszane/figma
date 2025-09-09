import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { N9 } from "../figma_app/389091";
import { kL } from "../figma_app/624600";
export function $$l0(e) {
  let t = useDispatch();
  useEffect(() => (t(N9(!0)), () => {
    t(N9(!1));
  }), [t]);
  return jsx("div", {
    className: `${kL} ${e.className || ""}`,
    children: e.children
  });
}
export const R = $$l0;
