import { useCallback, createElement } from "react";
import { wA } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { e as _$$e } from "../905/58247";
import { Ag } from "../905/235578";
import { C } from "../figma_app/959385";
export function $$c0({
  isWidget: e,
  id: t
}) {
  let n = wA();
  let c = useCallback(() => {
    _$$e({
      id: t,
      isWidget: e,
      source: "extension-requires-payment-error"
    }, createElement(C, {
      extensionId: t,
      extensionType: Ag.COMMUNITY
    }));
  }, [t, e]);
  return useCallback(() => {
    n(F.enqueue({
      message: e ? _$$t("community.buyer.paid_widgets_cannot_be_added_to_the_canvas_before_purchase") : _$$t("community.buyer.paid_plugins_cannot_be_run_before_purchase"),
      error: !0,
      button: {
        text: _$$t("community.buyer.buy"),
        action: c
      },
      type: e ? "widget_requires_payment" : "plugin_requires_payment"
    }));
  }, [n, e, c]);
}
export const x = $$c0;