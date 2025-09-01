import { jsx } from "react/jsx-runtime";
import { createContext, useMemo, useEffect } from "react";
import { CX } from "../figma_app/763686";
import { ZC } from "../figma_app/39751";
import { iT } from "../figma_app/74165";
import { Ye } from "../figma_app/32128";
export let $$d1 = createContext({
  isLeftPanelCollapsed: !1,
  isRightPanelCollapsed: !1
});
export function $$c0({
  children: e
}) {
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let r = Ye();
  let c = useMemo(() => ({
    isLeftPanelCollapsed: r,
    isRightPanelCollapsed: isPropertiesPanelCollapsed
  }), [r, isPropertiesPanelCollapsed]);
  let u = ZC(c);
  useEffect(() => {
    void 0 !== u && u.isLeftPanelCollapsed !== c.isLeftPanelCollapsed && queueMicrotask(() => CX.updateLayoutForMinimizeUI());
  }, [c, u]);
  return jsx($$d1.Provider, {
    value: c,
    children: e
  });
}
export const R = $$c0;
export const t = $$d1;