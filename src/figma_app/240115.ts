import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { A } from "../905/891805";
import { AppStateTsApi, StateHierarchy, ItemType } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { AutoInteractableWrapper } from "../905/277716";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { getObservableValue, getObservableOrFallback } from "../figma_app/84367";
import { K } from "../figma_app/566021";
import { Wv } from "../figma_app/454622";
import { z6, h$ } from "../figma_app/967154";
import { A as _$$A } from "../figma_app/78608";
import { u as _$$u } from "../figma_app/9104";
import { K as _$$K } from "../figma_app/231130";
import { _7 } from "../figma_app/150804";
import { Xz } from "../figma_app/781981";
import { DMenuItemType, DButtonType } from "../figma_app/986347";
export function $$I1() {
  let {
    containingStateGroupDescription,
    containingStateGroupLinks,
    componentDescription
  } = z6();
  return v() ? jsx(K, {
    containingStateGroupDescription,
    containingStateGroupLinks,
    description: componentDescription,
    recordingKey: "componentControlsPicker"
  }) : null;
}
export function $$S2(e) {
  let {
    pickerShown
  } = z6();
  let r = useAtomWithSubscription(_$$A);
  let a = h$(e ?? r);
  let o = v();
  let d = useMemo(() => ({
    type: DMenuItemType.CUSTOM_ACTION,
    customActionType: DButtonType.DIALOG_TRIGGER_BUTTON,
    onClick: a,
    icon: jsx(A, {}),
    isSelected: pickerShown?.id === Wv,
    getTitle: () => getI18nString("design_systems.component_panel.component_controls"),
    recordingKey: "componentControls",
    id: Xz
  }), [pickerShown, a]);
  if (o) return d;
}
function v() {
  let {
    stateGroupSelectionMode
  } = z6();
  let t = getObservableValue(AppStateTsApi?.propertiesPanelState().shownPropertiesPanels, []);
  let {
    count
  } = _$$u();
  return 0 !== t.length && (stateGroupSelectionMode === StateHierarchy.STATE || !(count > 1)) && t[ItemType.COMPONENT_ITEM];
}
export function $$A0() {
  return !function () {
    let e = useSelector(e => _7(e));
    let {
      stateGroupSelectionMode,
      containingProductComponent
    } = z6();
    return !!getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownPropertiesPanels)[ItemType.COMPONENT_ITEM] && !containingProductComponent && stateGroupSelectionMode === StateHierarchy.NON_STATE_COMPONENTS && e > 1;
  }() ? null : jsx(AutoInteractableWrapper, {
    name: "layer_component_panel_button",
    children: jsx("div", {
      "data-non-interactive": !0,
      className: cssBuilderInstance.pt8.pb4.$,
      children: jsx(_$$K, {
        recordingKey: "createStateGroup"
      })
    })
  });
}
export const ah = $$A0;
export const fP = $$I1;
export const tx = $$S2;