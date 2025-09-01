import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { Q } from "../1250/220026";
import { KWd } from "../figma_app/763686";
import { t as _$$t } from "../905/303541";
import { Ce, $O } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { oW } from "../figma_app/247611";
import { RD } from "../figma_app/198840";
import { Ib } from "../905/129884";
import { PH } from "../figma_app/701580";
import { Z } from "../9410/200844";
export let $$g0 = "templates_toolbar";
export function $$_1() {
  let e = wA();
  let t = d4(e => e.modalShown?.type === PH.type);
  let i = useCallback(() => {
    t ? e(Ce()) : (oW.trigger("action", KWd.CLEAR), e($O({
      type: PH.type,
      data: {
        triggeredFrom: "toolbar",
        templateInsertionLocation: RD.CURRENT_FILE
      }
    })));
  }, [e, t]);
  let _ = _$$t("whiteboard.inserts.templates");
  return jsx(Z, {
    tooltip: {
      type: Ib.TEXT,
      text: _
    },
    isActive: t,
    onClick: i,
    trackingProperties: {
      trackingDescriptor: _$$c.TEMPLATES_TOOLBAR_ITEM_CLICKED
    },
    onboardingKey: $$g0,
    children: jsx(Q, {})
  });
}
export const G = $$g0;
export const y = $$_1;