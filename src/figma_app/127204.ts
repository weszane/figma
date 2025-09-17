import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { setupMenu, MenuRootComp } from "../figma_app/860955";
import { e as _$$e } from "../905/428849";
import { generateRecordingKey } from "../figma_app/878298";
import { n6 } from "../905/234821";
import { l as _$$l } from "../figma_app/856638";
import { QE } from "../figma_app/914216";
export function $$u0(e) {
  let t = e.flyoutConfig.actions[0];
  let r = n6();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let _ = useMemo(() => [e.flyoutConfig.actions], [e.flyoutConfig.actions]);
  if (!t) return null;
  let h = jsx(QE, {
    item: t,
    numUnreadComments: r,
    recordingKey: generateRecordingKey(e.recordingKey, "default")
  }, t.recordingKey);
  return 1 === e.flyoutConfig.actions.length ? h : jsxs(MenuRootComp, {
    manager,
    children: [jsxs(_$$e, {
      "aria-label": e.flyoutConfig.getTooltip(),
      children: [h, jsx(_$$e.Trigger, {
        ...getTriggerProps(),
        "aria-label": e.flyoutConfig.getTooltip(),
        recordingKey: generateRecordingKey(e.recordingKey, "chevron")
      })]
    }), jsx(_$$l, {
      enabledToolbarItems: _,
      recordingKey: generateRecordingKey(e.recordingKey, "flyout")
    })]
  });
}
export const F = $$u0;