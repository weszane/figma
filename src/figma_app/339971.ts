import { o as _$$o } from "../figma_app/54816";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { k } from "../905/443820";
import { bL, QB } from "../905/174266";
import { J } from "../905/614223";
import d from "classnames";
import { IQ } from "../figma_app/569743";
import { d as _$$d } from "../figma_app/550089";
var c = d;
function _({
  children: e,
  shown: t
}) {
  let r = IQ();
  return jsx(J, {
    mode: "dark",
    children: jsx("div", {
      className: c()({
        "blocked_ui_loading_indicator--base--XVkv0": !0,
        "blocked_ui_loading_indicator--fpl--EUYfQ": !0,
        "blocked_ui_loading_indicator--shown--XJCOo": t
      }),
      style: r,
      children: e
    })
  });
}
export function $$h0({
  blockedUILoadingIndicator: e,
  dispatch: t
}) {
  useEffect(() => {
    let r = e?.callback;
    setTimeout(() => {
      t(_$$o.remove({}));
      r?.();
    }, 0);
  }, [e, t]);
  let r = e?.showLoadingSpinner ? jsx("div", {
    className: "blocked_ui_loading_indicator--icon--wujoz",
    children: jsx(k, {})
  }) : null;
  return jsx(_$$d, {
    children: jsx(_, {
      shown: !!e,
      children: e?.message && jsxs(bL, {
        children: [r, jsx(QB, {
          children: e.message
        })]
      })
    })
  });
}
export const V = $$h0;
export const n = _$$o;