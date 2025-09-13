import { jsx } from "react/jsx-runtime";
import { T } from "../905/68180";
import { setupToggleButton } from "../905/167712";
import { j } from "../905/519202";
import { _ } from "../905/410717";
import { getI18nString } from "../905/303541";
import { dG } from "../figma_app/753501";
import { MIXED_MARKER } from "../905/216495";
import { KindEnum } from "../905/129884";
export function $$p0({
  visible: e,
  onChange: t,
  disabled: i,
  recordingKey: p,
  selected: m
}) {
  let h = getI18nString("fullscreen.properties_panel.toggle_visibility");
  let g = {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": h
  };
  return jsx(T, {
    selected: m,
    children: jsx(setupToggleButton, {
      actionOnPointerDown: !0,
      "aria-label": h,
      checked: "boolean" == typeof e ? e : void 0,
      disabled: i,
      htmlAttributes: {
        ...g,
        onPointerDown: dG,
        onMouseDown: dG
      },
      mixed: e === MIXED_MARKER,
      offIcon: jsx(j, {}),
      onChange: () => t(e === MIXED_MARKER || !e),
      onIcon: jsx(_, {}),
      recordingKey: p
    })
  });
}
export const B = $$p0;