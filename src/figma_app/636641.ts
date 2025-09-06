import { useMemo } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { _ as _$$_ } from "../figma_app/103028";
import { ZU, Wg } from "../figma_app/986347";
import { oD, vK } from "../figma_app/587612";
export function $$d0() {
  let e = useAtomWithSubscription(_$$_);
  let t = oD(e);
  let r = vK();
  return useMemo(() => {
    if (r) return {
      type: ZU.CUSTOM_ACTION,
      customActionType: Wg.DIALOG_TRIGGER_BUTTON,
      onClick: t,
      isSelected: !1,
      preventHoisting: !0,
      getTitle: () => getI18nString("slides.properties_panel.text_style.add_new_style"),
      recordingKey: "addToTheme"
    };
  }, [r, t]);
}
export function $$c1(e) {
  let t = oD(e);
  return useMemo(() => ({
    displayText: getI18nString("slides.properties_panel.text_style.add_new_style"),
    callback: t,
    recordingKey: "addToTheme"
  }), [t]);
}
export const U = $$d0;
export const _ = $$c1;