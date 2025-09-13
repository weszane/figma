import { jsx } from "react/jsx-runtime";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { A } from "../6828/249455";
export function $$u0(e) {
  return jsx(RecordableDiv, {
    className: "pin_button--pinButton--pxztm",
    onClick: BrowserInfo.isIpad ? void 0 : e.setPinned,
    onPointerDown: t => BrowserInfo.isIpad ? e.setPinned() : void 0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("whiteboard.inserts.dock_to_side"),
    recordingKey: generateRecordingKey("universalInsert", "pin"),
    dataTestId: "universal-insert-modal-popout-button",
    "data-not-draggable": !0,
    children: jsx(SvgComponent, {
      svg: A
    })
  });
}
export const O = $$u0;