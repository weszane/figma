import { jsx } from "react/jsx-runtime";
import { StateHierarchy } from "../figma_app/763686";
import { AutoInteractableWrapper } from "../905/277716";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { renameNode } from "../figma_app/741237";
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
  return jsx(AutoInteractableWrapper, {
    name: "component_title_control",
    children: jsx(_$$R, {
      onSubmit: e => {
        renameNode(containingProductComponent.guid, e);
      },
      value: f ? getI18nString("design_systems.component_panel.current_variant") : containingProductComponent.name,
      canEdit: !f,
      icon: t ?? jsx(SvgComponent, {
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