import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowingFileFooter } from "../figma_app/389091";
import { kL } from "../figma_app/624600";
export function $$l0(e) {
  let t = useDispatch<AppDispatch>();
  useEffect(() => (t(setShowingFileFooter(!0)), () => {
    t(setShowingFileFooter(!1));
  }), [t]);
  return jsx("div", {
    className: `${kL} ${e.className || ""}`,
    children: e.children
  });
}
export const R = $$l0;
