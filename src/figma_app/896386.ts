import { jsx } from "react/jsx-runtime";
import { d4 } from "../vendor/514228";
import { r as _$$r } from "../905/571562";
import s from "classnames";
import { dT } from "../figma_app/889655";
import { Q } from "../figma_app/645682";
import { bj } from "../figma_app/760428";
var o = s;
export function $$u0({
  panelTitleRef: e,
  isInSelectionActionsPanel: t
}) {
  let r = d4(dT);
  let s = Q(r);
  return jsx("div", {
    ref: e,
    className: "connected_instance_dropdown--dropdownContainer--2IzrQ",
    children: jsx(bj, {
      chevronOverride: jsx("div", {
        className: "connected_instance_dropdown--chevronOverride--5vN48",
        children: jsx(_$$r, {})
      }),
      dropdownIdPrefix: "selection-actions-instance-swap-picker",
      flushLeft: !0,
      instanceAndSublayerGUIDs: r,
      instanceNameDisplayOverride: s,
      panelTitleOverridesClassName: o()("connected_instance_dropdown--instanceDropdownOverrides--Y6kpy", {
        "connected_instance_dropdown--selectionActionsPanelOverrides--m-7bM": t
      }),
      panelTitleRef: e,
      pickerButtonTextOverridesClassName: o()("connected_instance_dropdown--pickerButtonOverrides--Sejp- ellipsis--ellipsis--Tjyfa", {
        "connected_instance_dropdown--noFlexGrow--ZtT3d": t
      }),
      recordingKey: "instance-panel-ui3-layer-header",
      shouldHideInstanceIcon: !0
    })
  });
}
export const W = $$u0;