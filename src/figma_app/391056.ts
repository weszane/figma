import { jsx } from "react/jsx-runtime";
import { memo, forwardRef } from "react";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import s from "classnames";
import { SvgComponent } from "../905/714743";
var o = s;
let $$d0 = "dlt_banner_shortcut_button";
let $$c2 = memo(forwardRef(function (e, t) {
  let {
    shortcut,
    onClick,
    isActive,
    recordingKey,
    dataElementTarget,
    isPressed
  } = e;
  let u = useHandleMouseEvent(generateRecordingKey("dltBannerShortcutButton", recordingKey), "click", onClick);
  let p = o()("dlt_banner_inline_elements--shortcutButton--LOMMi", {
    "dlt_banner_inline_elements--active--zWunk": isActive,
    "dlt_banner_inline_elements--pressed--36odr": isPressed
  });
  return jsx("button", {
    ref: t,
    className: p,
    onClick: u,
    "data-element-target": dataElementTarget,
    children: shortcut
  });
}));
export function $$u1({
  icon: e
}) {
  return jsx("div", {
    className: "dlt_banner_inline_elements--iconInline--0YsSs",
    children: jsx(SvgComponent, {
      svg: e
    })
  });
}
export const UM = $$d0;
export const kf = $$u1;
export const zW = $$c2;