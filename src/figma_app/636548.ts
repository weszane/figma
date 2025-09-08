import { jsx } from "react/jsx-runtime";
import { StateHierarchy } from "../figma_app/763686";
import { E } from "../905/277716";
import { B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { i as _$$i } from "../figma_app/741237";
import { R as _$$R } from "../figma_app/930125";
import { z6 } from "../figma_app/967154";
import { Kk } from "../figma_app/956479";
import { A } from "../2854/372209";
export function $$_0({
  alwaysShowParentComponent: e,
  svgOverride: t,
  shouldHideComponentIcon: r,
  focusedInputOverridesClassName: _,
  unfocusedInputOverridesClassName: h
}) {
  let {
    stateGroupSelectionMode,
    containingProductComponent
  } = z6();
  if (!containingProductComponent) return null;
  let f = stateGroupSelectionMode === StateHierarchy.STATE && !e;
  return jsx(E, {
    name: "component_title_control",
    children: jsx(_$$R, {
      onSubmit: e => {
        _$$i(containingProductComponent.guid, e);
      },
      value: f ? getI18nString("design_systems.component_panel.current_variant") : containingProductComponent.name,
      canEdit: !f,
      icon: t ?? jsx(B, {
        svg: A,
        className: Kk
      }),
      shouldHideIcon: r,
      editAction: "rename-component",
      focusedInputOverridesClassName: _,
      unfocusedInputOverridesClassName: h
    })
  });
}
export const R = $$_0;