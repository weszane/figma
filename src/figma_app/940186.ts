import { jsx } from "react/jsx-runtime";
import { useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { u as _$$u } from "../905/911813";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { isInvalidValue } from "../905/216495";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { UT } from "../figma_app/95266";
import { Tv } from "../figma_app/151869";
import { c as _$$c } from "../figma_app/94664";
import { DMenuItemType, DButtonType } from "../figma_app/986347";
import { FormattedInputContext } from "../905/427409";
export function $$g0() {
  let e = useRef(null);
  let t = useAtomWithSubscription(_$$c);
  let {
    isShowingBindingUI,
    showBindingUI
  } = useContext(FormattedInputContext) ?? {};
  let f = Tv() || [];
  let E = useDeepEqualSceneValue((e, t) => {
    for (let r of t) {
      if (!r) continue;
      let t = e.get(r);
      if (t && "TEXT" === t.type && !t.isSlideNumber && !t.getNearestDakotaCollectionId() && null === t.containingSymbolId && void 0 === t.propRefs["text-data"] && void 0 === t.boundVariables.characters) return !0;
    }
    return !1;
  }, f);
  let y = useSelector(e => UT(e) ?? "");
  let b = isInvalidValue(y) ? getI18nString("fullscreen.mixed") : y;
  if (E) return {
    type: DMenuItemType.CUSTOM_ACTION,
    customActionType: DButtonType.DROPDOWN_TRIGGER_BUTTON,
    onClick: () => {
      let r = e.current ?? t?.current;
      r && showBindingUI?.(r, {
        currentFieldValue: b
      });
    },
    icon: jsx(_$$u, {}),
    getTitle: () => getI18nString("fullscreen.properties_panel.apply_variable"),
    recordingKey: "typePanel.variablePickerButton",
    dropdown: null,
    dropdownTargetButtonRef: e,
    isSelected: isShowingBindingUI ?? !1
  };
}
export const L = $$g0;