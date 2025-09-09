import { jsx } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { z } from "../9410/836234";
import { AppStateTsApi, Fullscreen } from "../figma_app/763686";
import { U } from "../figma_app/901889";
import { J as _$$J } from "../1577/181415";
import { getI18nString } from "../905/303541";
import { hideModalHandler } from "../905/156213";
import { getObservableValue } from "../figma_app/84367";
import { Ib } from "../905/129884";
import { CM } from "../905/459248";
export function $$m1() {
  let e = useSelector(e => e.modalShown);
  let t = e?.type === CM.type;
  let i = getObservableValue(AppStateTsApi?.uiState().showMissingFontsButton, !1);
  let r = U();
  let l = useDispatch();
  return {
    expanded: t,
    icon: z,
    label: getI18nString("fullscreen.toolbar.missing_fonts"),
    onClick: () => {
      t ? l(hideModalHandler()) : (r("missing_fonts_button_clicked"), Fullscreen.findMissingFontsAndShowPopover());
    },
    shouldShow: i
  };
}
export function $$f0({
  isLeftRail: e = !1
}) {
  let {
    label,
    onClick,
    shouldShow
  } = $$m1();
  return shouldShow ? jsx(_$$J, {
    onClick,
    recordingKey: "toolbarView.missingFontsButton",
    "aria-label": getI18nString("fullscreen.toolbar.missing_fonts"),
    htmlAttributes: {
      "data-tooltip": label,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-right": e
    },
    children: jsx(z, {})
  }) : null;
}
export const J = $$f0;
export const K = $$m1;
