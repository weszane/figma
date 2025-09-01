import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { z } from "../905/454433";
import { Zk } from "../figma_app/626177";
import { aW } from "../figma_app/973219";
export function $$a0({
  onExpand: e
}) {
  return jsx(Zk, {
    "data-testid": "toggle-simplified-panels",
    className: aW,
    children: jsx(z, {
      onClick: e,
      recordingKey: "toggleSimplifiedPanels",
      children: tx("design_systems.component_properties.show_more_properties")
    })
  });
}
export const Y = $$a0;