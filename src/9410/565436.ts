import { jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { O } from "../905/587457";
import { Fullscreen, SourceType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { tq, yc } from "../figma_app/671547";
import { normalizeValue } from "../905/216495";
import { kl } from "../905/275640";
import { n as _$$n } from "../9410/774045";
import { uQ } from "../figma_app/151869";
import { V } from "../figma_app/144634";
import { K0 } from "../figma_app/439493";
import { A } from "../svg/892864";
let s = memo(function (e) {
  return O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 4.5a7.5 7.5 0 0 0-7.484 7A.527.527 0 0 1 4 12a.48.48 0 0 1-.486-.5A8.5 8.5 0 0 1 19 7.177V5.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.845A7.5 7.5 0 0 0 12 4.5M7.5 16H5.655a7.5 7.5 0 0 0 13.829-3.5c.018-.275.24-.5.516-.5s.502.224.485.5A8.5 8.5 0 0 1 5 16.823V18.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1m2-7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V10h1.5v4H11a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-4H14v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M11.5 4A7.5 7.5 0 0 0 4 11.5c0 .27-.213.5-.484.5h-.032A.477.477 0 0 1 3 11.53v-.03a8.5 8.5 0 0 1 16-4.004V5.5a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1h1.635A7.5 7.5 0 0 0 11.5 4m-4 12h-2a7.501 7.501 0 0 0 13.439-3.532.53.53 0 0 1 .515-.468.48.48 0 0 1 .484.53A8.501 8.501 0 0 1 5 16.978V18.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1m2-7a.5.5 0 0 0-.5.5v.8a.5.5 0 0 0 1 0V10h1v3h-.3a.5.5 0 1 0 0 1h1.6a.5.5 0 0 0 0-1H12v-3h1v.3a.5.5 0 1 0 1 0v-.8a.5.5 0 0 0-.5-.5z",
      clipRule: "evenodd"
    })
  });
});
export function $$b1(e) {
  let t = uQ() || "";
  let i = kl("embedData");
  let r = decodeURIComponent(normalizeValue(i)?.originalText || "");
  let a = tq(i);
  let s = Xr(_$$n);
  return useCallback(() => {
    r && (a(yc.CONVERT_TO_TEXT), s({
      type: "MINIMIZE"
    }), permissionScopeHandler(e, "convert-embed-to-text", () => Fullscreen?.replaceNodeWithText(t, r)));
  }, [r, a, s, t, e]);
}
export function $$C0(e) {
  let t = useAtomWithSubscription(_$$n);
  let i = uQ() || "";
  let n = kl("embedData");
  let a = decodeURIComponent(normalizeValue(n)?.originalText || "");
  let l = $$b1(SourceType.USER);
  return n && i && a && (!t || e.inModal) ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(V, {
    variant: "button",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.change_back_to_text"),
    ariaLabel: getI18nString("whiteboard.embeds.inline_menu.change_back_to_text"),
    onClick: l,
    recordingKey: "embedConvertToTextControl",
    children: jsx(s, {})
  }) : jsx(K0, {
    svg: A,
    active: "NONE",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.change_back_to_text"),
    onClick: l,
    recordingKey: "embedConvertToTextControl"
  }) : null;
}
export const S = $$C0;
export const o = $$b1;