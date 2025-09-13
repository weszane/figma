import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { j } from "../905/253683";
import { N as _$$N } from "../905/430294";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { KindEnum } from "../905/129884";
import { V } from "../figma_app/144634";
import { K0 } from "../figma_app/439493";
import { A } from "../svg/436725";
import { A as _$$A } from "../svg/254405";
let m = ["semi-bold", "semi bold", "bold", "extra-bold", "extra bold", "black"];
export function $$_1(e) {
  return m.some(t => e.toLowerCase().startsWith(t));
}
export function $$g0() {
  let e = useSelector(e => $$_1(e.mirror.selectionProperties.fontStyle?.toString() || ""));
  let t = useSelector(e => "STRIKETHROUGH" === e.mirror.selectionProperties.whiteboardTextDecoration);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(Fragment, {
    children: [jsx(V, {
      variant: "toggle",
      tooltip: getI18nString("fullscreen_actions.toggle-bold"),
      ariaLabel: getI18nString("fullscreen_actions.toggle-bold"),
      checked: e,
      offIcon: jsx(j, {}),
      onIcon: jsx(j, {}),
      onChange: () => fullscreenValue.triggerActionInUserEditScope("toggle-bold"),
      recordingKey: "bold",
      tooltipShortcutActionKey: "toggle-bold"
    }), jsx(V, {
      variant: "toggle",
      tooltip: getI18nString("fullscreen_actions.text-toggle-strikethrough"),
      ariaLabel: getI18nString("fullscreen_actions.text-toggle-strikethrough"),
      checked: t,
      offIcon: jsx(_$$N, {}),
      onIcon: jsx(_$$N, {}),
      onChange: () => fullscreenValue.triggerActionInUserEditScope("text-toggle-strikethrough"),
      recordingKey: "strikethrough",
      tooltipShortcutActionKey: "text-toggle-strikethrough"
    })]
  }) : jsxs(Fragment, {
    children: [jsx(K0, {
      svg: A,
      tooltip: "toggle-bold",
      tooltipType: KindEnum.LOOKUP,
      active: e ? "LOUD" : void 0,
      onClick: () => fullscreenValue.triggerActionInUserEditScope("toggle-bold"),
      recordingKey: "bold",
      role: "switch",
      blurOnClick: !0
    }), jsx(K0, {
      svg: _$$A,
      tooltip: "text-toggle-strikethrough",
      tooltipType: KindEnum.LOOKUP,
      active: t ? "LOUD" : void 0,
      onClick: () => fullscreenValue.triggerActionInUserEditScope("text-toggle-strikethrough"),
      recordingKey: "strikethrough",
      role: "switch",
      blurOnClick: !0
    })]
  });
}
export const D = $$g0;
export const N = $$_1;