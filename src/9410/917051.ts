import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { V } from "../1577/311426";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { RK } from "../figma_app/815170";
import { tq, yc } from "../figma_app/671547";
import { normalizeValue } from "../905/216495";
import { kl } from "../905/275640";
import { n as _$$n } from "../9410/774045";
import { V as _$$V } from "../figma_app/144634";
import { K0 } from "../figma_app/439493";
import { A } from "../svg/305639";
let x = () => {
  let e = kl("embedData");
  return decodeURIComponent(normalizeValue(e)?.url || normalizeValue(e)?.srcUrl || "");
};
export function $$y1() {
  let e = useDispatch();
  let t = x();
  let i = kl("embedData");
  let r = tq(i);
  return useCallback(() => {
    t && (r(yc.OPEN_PREVIEW), e(RK({
      rawInput: t
    })));
  }, [t, e, r]);
}
export function $$b0(e) {
  let t = useAtomWithSubscription(_$$n);
  let i = x();
  let n = $$y1();
  return i && (e.inModal || !t) ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V, {
    variant: "button",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.open_link"),
    ariaLabel: getI18nString("whiteboard.embeds.inline_menu.open_link"),
    onClick: n,
    recordingKey: "embedOpenExternalControl",
    children: jsx(V, {})
  }) : jsx(K0, {
    svg: A,
    active: "NONE",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.open_link"),
    onClick: n,
    recordingKey: "embedOpenExternalControl"
  }) : null;
}
export const e = $$b0;
export const f = $$y1;