import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { DesignWorkspace } from "../figma_app/763686";
import { getPropertiesPanelTab } from "../figma_app/741237";
import { getObservableValue } from "../figma_app/84367";
import { B } from "../3276/756841";
export let $$d0 = memo(function () {
  getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  return jsx(B, {
    stackHeader: !1,
    hideResolve: !1
  });
});
export const L = $$d0;