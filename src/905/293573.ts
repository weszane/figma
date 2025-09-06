import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { K } from "../905/443068";
import { L } from "../905/704296";
import { getI18nString } from "../905/303541";
export function $$c0({
  children: e,
  onClose: t,
  ...i
}) {
  let c = hS({
    open: !0,
    onClose: useCallback(({
      source: e
    }) => {
      "escape" === e ? u.current?.focus() : t();
    }, [t]),
    preventUserClose: !0
  });
  let u = useRef(null);
  return jsxs(bL, {
    manager: c,
    ...i,
    children: [e, jsx("div", {
      className: "x10l6tqk xi3rm7d x19dyqzg x78zum5 xl56j7k x6s0dn4 x67bb7w",
      children: jsx(K, {
        ref: u,
        onClick: t,
        "aria-label": getI18nString("general.close"),
        "data-testid": "modal-close-button",
        children: jsx(L, {})
      })
    })]
  });
}
export const I = $$c0;