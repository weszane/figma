import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { modalBackdrop, modal } from "../figma_app/727769";
export function $$s0({
  children: e,
  className: t,
  style: r,
  onClick: s,
  showInnerModal: o,
  onCloseModal: l
}) {
  let [d, c] = useState(null);
  let [u, p] = useState(!1);
  useEffect(() => {}, []);
  let _ = !u && !1 !== o;
  return jsx("div", {
    ref: e => c(e),
    className: t || modalBackdrop,
    role: "button",
    tabIndex: 0,
    style: r,
    onClick: e => {
      s?.();
      e.target.isSameNode(d) && (l?.(), p(!0), setTimeout(() => p(!1), 400));
    },
    children: jsx("div", {
      className: modal,
      style: {
        opacity: _ ? 1 : 0,
        transform: _ ? "scale(1)" : "scale(0.95)"
      },
      children: e
    })
  });
}
export const A = $$s0;