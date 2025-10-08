import { useCallback, createElement } from "react";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { e as _$$e } from "../905/58247";
import { ExtensionSource } from "../905/235578";
import { C } from "../figma_app/959385";
export function $$c0({
  isWidget: e,
  id: t
}) {
  let a = useDispatch();
  let c = useCallback(() => {
    _$$e({
      id: t,
      isWidget: e,
      source: "extension-requires-payment-error"
    }, createElement(C, {
      extensionId: t,
      extensionType: ExtensionSource.COMMUNITY
    }));
  }, [t, e]);
  return useCallback(() => {
    a(VisualBellActions.enqueue({
      message: e ? getI18nString("community.buyer.paid_widgets_cannot_be_added_to_the_canvas_before_purchase") : getI18nString("community.buyer.paid_plugins_cannot_be_run_before_purchase"),
      error: !0,
      button: {
        text: getI18nString("community.buyer.buy"),
        action: c
      },
      type: e ? "widget_requires_payment" : "plugin_requires_payment"
    }));
  }, [a, e, c]);
}
export const x = $$c0;