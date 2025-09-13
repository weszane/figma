import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { d as _$$d } from "../905/976845";
import { J } from "../905/125993";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { B } from "../figma_app/539422";
export function $$c0(e) {
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = B("LAYERS_PANEL_DROPDOWN");
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: dropdownTargetRef,
      children: jsx(_$$d, {
        "aria-label": getI18nString("dev_handoff.code.options"),
        recordingKey: e.recordingKey,
        "aria-expanded": isDropdownShown,
        onClick: function (e) {
          e.stopPropagation();
          toggleDropdown();
        },
        htmlAttributes: {
          "data-tooltip": getI18nString("dev_handoff.code.options"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(J, {})
      })
    }), jsx(Dropdown, {
      items: e.dropdownItems,
      showPoint: !0,
      lean: e.lean,
      recordingKey: generateRecordingKey(e.recordingKey, "dropdown")
    })]
  });
}
export const U = $$c0;