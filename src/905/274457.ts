import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { KeyCodes } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { H } from "../905/286442";
import { c as _$$c } from "../905/566438";
import { kz } from "../figma_app/171177";
import { U } from "../905/172092";
export function $$$$p0({
  onAction: e,
  recordingKey: t,
  children: i
}) {
  let p = useRef(null);
  let {
    active
  } = H({
    ref: p,
    itemsPerRow: 1,
    navigationOptions: {
      supportHorizontalNavigation: !0,
      skipOnDownNavigation: !0,
      skipOnRightNavigation: !0
    },
    debug: "SectionHeader.Title" + i
  });
  let h = U();
  let g = generateRecordingKey(h, "buttonTertiary", t || "");
  let f = useHandleMouseEvent(g, "click", () => {
    e();
  });
  kz(KeyCodes.ENTER, e, active);
  return jsx("button", {
    ref: p,
    tabIndex: 0,
    onClick: f,
    children: jsx(_$$c, {
      active,
      children: jsx("span", {
        className: _$$s.textBodyMedium.colorTextBrand.p4.$,
        children: i
      })
    })
  });
}
export const p = $$$$p0;