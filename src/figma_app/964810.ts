import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { UserInterfaceElements } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { setLeftPanelTab } from "../figma_app/91703";
import { selectCurrentFile } from "../figma_app/516028";
import { lV } from "../figma_app/914674";
export function $$c0() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let r = lV();
  let c = useCallback((n = !0) => {
    t && (trackEventAnalytics("left_panel_set_tab", {
      value: "Components"
    }), r(), e(setLeftPanelTab({
      tab: UserInterfaceElements.ASSETS,
      persist: !0,
      shouldFocusSearchBar: n
    })));
  }, [e, t, r]);
  let u = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Layers"
    });
    e(setLeftPanelTab({
      tab: UserInterfaceElements.LAYERS,
      persist: !0
    }));
  }, [e]);
  let p = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Code"
    });
    e(setLeftPanelTab({
      tab: UserInterfaceElements.CODE
    }));
  }, [e]);
  let _ = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Chat"
    });
    e(setLeftPanelTab({
      tab: UserInterfaceElements.CHAT
    }));
  }, [e]);
  return useMemo(() => ({
    showPublish: c,
    showLayersPanel: u,
    showCodePanel: p,
    showChat: _
  }), [c, u, p, _]);
}
export const U = $$c0;