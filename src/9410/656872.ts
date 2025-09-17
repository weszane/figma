import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Q } from "../1250/220026";
import { TransactionCommand } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { hideModal, showModal } from "../905/156213";
import { UpgradeAction } from "../905/370443";
import { oW } from "../figma_app/247611";
import { RD } from "../figma_app/198840";
import { KindEnum } from "../905/129884";
import { PH } from "../figma_app/701580";
import { Z } from "../9410/200844";
export let $$g0 = "templates_toolbar";
export function $$_1() {
  let e = useDispatch();
  let t = useSelector(e => e.modalShown?.type === PH.type);
  let i = useCallback(() => {
    t ? e(hideModal()) : (oW.trigger("action", TransactionCommand.CLEAR), e(showModal({
      type: PH.type,
      data: {
        triggeredFrom: "toolbar",
        templateInsertionLocation: RD.CURRENT_FILE
      }
    })));
  }, [e, t]);
  let _ = getI18nString("whiteboard.inserts.templates");
  return jsx(Z, {
    tooltip: {
      type: KindEnum.TEXT,
      text: _
    },
    isActive: t,
    onClick: i,
    trackingProperties: {
      trackingDescriptor: UpgradeAction.TEMPLATES_TOOLBAR_ITEM_CLICKED
    },
    onboardingKey: $$g0,
    children: jsx(Q, {})
  });
}
export const G = $$g0;
export const y = $$_1;