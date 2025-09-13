import { jsx } from "react/jsx-runtime";
import { J } from "../905/614223";
import n from "classnames";
import { LoadingSpinner } from "../figma_app/858013";
import { n as _$$n } from "../5430/496973";
import { $z } from "../figma_app/831799";
import { tt, Vi, uw, uD } from "../5430/774694";
if (443 == require.j) {}
var o = n;
export function $$u0({
  buttonText: e,
  onClick: t,
  useNoIconStyle: r,
  editorType: n,
  enableWideButtonForStickyFooter: u,
  dataTestId: m,
  isLoading: _ = !1
}) {
  let p = _$$n(n);
  return jsx(J, {
    brand: p,
    children: jsx($z, {
      className: o()({
        [tt]: r,
        [Vi]: !r,
        [uw]: u
      }),
      onClick: _ ? void 0 : t,
      disabled: _,
      dataTestId: m || "community-duplicate-button",
      children: jsx("div", {
        className: uD,
        children: _ ? jsx(LoadingSpinner, {
          shouldMatchTextColor: !0,
          size: "small"
        }) : e
      })
    })
  });
}
export const Q = $$u0;