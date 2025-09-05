import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { j } from "../905/253683";
import { N as _$$N } from "../905/430294";
import { getFeatureFlags } from "../905/601108";
import { t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { Ib } from "../905/129884";
import { V } from "../figma_app/144634";
import { K0 } from "../figma_app/439493";
import { A } from "../svg/436725";
import { A as _$$A } from "../svg/254405";
let f = ["semi-bold", "semi bold", "bold", "extra-bold", "extra bold", "black"];
export function $$_1(e) {
  return f.some(t => e.toLowerCase().startsWith(t));
}
export function $$x0() {
  let e = useSelector(e => $$_1(e.mirror.selectionProperties.fontStyle?.toString() || ""));
  let t = useSelector(e => "STRIKETHROUGH" === e.mirror.selectionProperties.whiteboardTextDecoration);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(Fragment, {
    children: [jsx(V, {
      variant: "toggle",
      tooltip: _$$t("fullscreen_actions.toggle-bold"),
      ariaLabel: _$$t("fullscreen_actions.toggle-bold"),
      checked: e,
      offIcon: jsx(j, {}),
      onIcon: jsx(j, {}),
      onChange: () => Y5.triggerActionInUserEditScope("toggle-bold"),
      recordingKey: "bold",
      tooltipShortcutActionKey: "toggle-bold"
    }), jsx(V, {
      variant: "toggle",
      tooltip: _$$t("fullscreen_actions.text-toggle-strikethrough"),
      ariaLabel: _$$t("fullscreen_actions.text-toggle-strikethrough"),
      checked: t,
      offIcon: jsx(_$$N, {}),
      onIcon: jsx(_$$N, {}),
      onChange: () => Y5.triggerActionInUserEditScope("text-toggle-strikethrough"),
      recordingKey: "strikethrough",
      tooltipShortcutActionKey: "text-toggle-strikethrough"
    })]
  }) : jsxs(Fragment, {
    children: [jsx(K0, {
      svg: A,
      tooltip: "toggle-bold",
      tooltipType: Ib.LOOKUP,
      active: e ? "LOUD" : void 0,
      onClick: () => Y5.triggerActionInUserEditScope("toggle-bold"),
      recordingKey: "bold",
      role: "switch",
      blurOnClick: !0
    }), jsx(K0, {
      svg: _$$A,
      tooltip: "text-toggle-strikethrough",
      tooltipType: Ib.LOOKUP,
      active: t ? "LOUD" : void 0,
      onClick: () => Y5.triggerActionInUserEditScope("text-toggle-strikethrough"),
      recordingKey: "strikethrough",
      role: "switch",
      blurOnClick: !0
    })]
  });
}
export const D = $$x0;
export const N = $$_1;