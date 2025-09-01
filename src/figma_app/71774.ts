import { jsx } from "react/jsx-runtime";
import { Ay } from "../figma_app/778880";
import { Pt } from "../figma_app/806412";
import { D8 } from "../905/511649";
import { B } from "../905/714743";
import { t } from "../905/303541";
import { Ib } from "../905/129884";
import { A } from "../6828/249455";
export function $$u0(e) {
  return jsx(D8, {
    className: "pin_button--pinButton--pxztm",
    onClick: Ay.isIpad ? void 0 : e.setPinned,
    onPointerDown: t => Ay.isIpad ? e.setPinned() : void 0,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": t("whiteboard.inserts.dock_to_side"),
    recordingKey: Pt("universalInsert", "pin"),
    dataTestId: "universal-insert-modal-popout-button",
    "data-not-draggable": !0,
    children: jsx(B, {
      svg: A
    })
  });
}
export const O = $$u0;