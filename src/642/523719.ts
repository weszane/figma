import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { O } from "../905/487602";
import { Pt } from "../figma_app/806412";
import { getI18nString, renderI18nText } from "../905/303541";
import { dG } from "../figma_app/753501";
import { MIXED_MARKER } from "../905/216495";
import { fI, nV } from "../figma_app/626177";
import { n as _$$n } from "../642/950153";
import { Pf } from "../figma_app/459377";
export function $$g0({
  addProperty: e,
  children: t,
  contentsVisibleOrMixed: s,
  minusDisabled: g,
  plusDisabled: f,
  recordingKey: x,
  removeProperty: y,
  showButton: _,
  title: b,
  dataTestId: C,
  dataOnboardingKey: j,
  shouldHideButton: v,
  plusButtonLabel: S,
  minusButtonLabel: k
}) {
  let w = useCallback(() => {
    !1 !== s || f || e();
  }, [e, s, f]);
  let T = s === MIXED_MARKER;
  let N = !T && !s;
  null == _ && (_ = !0 === s ? "-" : "+");
  let I = "+" === _ ? jsx(K, {
    recordingKey: Pt(x, "addButton"),
    onClick: e,
    disabled: f,
    "aria-label": S ?? getI18nString("fullscreen.properties_panel.add"),
    htmlAttributes: {
      onMouseDown: dG,
      "data-testid": C ?? "",
      "data-tooltip-type": "text",
      "data-tooltip": S ?? ""
    },
    children: jsx(_$$e, {})
  }) : jsx(K, {
    recordingKey: Pt(x, "removeButton"),
    onClick: y,
    disabled: g,
    "aria-label": k ?? getI18nString("fullscreen.properties_panel.remove"),
    htmlAttributes: {
      onMouseDown: dG,
      "data-testid": C ?? "",
      "data-tooltip-type": "text",
      "data-tooltip": k ?? ""
    },
    children: jsx(O, {})
  });
  return jsxs(Fragment, {
    children: [b && jsx(_$$n, {
      onMouseDown: w,
      faded: N,
      isEmpty: N,
      titleTx: jsx("span", {
        children: b
      }),
      icon: v ? void 0 : I,
      dataOnboardingKey: j
    }), T && jsx(fI, {
      children: jsx(nV, {
        className: Pf,
        children: renderI18nText("fullscreen.properties_panel.click_plus_to_replace_mixed_content")
      })
    }), !T && !N && t]
  });
}
export const u = $$g0;