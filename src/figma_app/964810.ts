import { useCallback, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { xae } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { FP } from "../figma_app/91703";
import { q5 } from "../figma_app/516028";
import { lV } from "../figma_app/914674";
export function $$c0() {
  let e = useDispatch();
  let t = q5();
  let r = lV();
  let c = useCallback((n = !0) => {
    t && (trackEventAnalytics("left_panel_set_tab", {
      value: "Components"
    }), r(), e(FP({
      tab: xae.ASSETS,
      persist: !0,
      shouldFocusSearchBar: n
    })));
  }, [e, t, r]);
  let u = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Layers"
    });
    e(FP({
      tab: xae.LAYERS,
      persist: !0
    }));
  }, [e]);
  let p = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Code"
    });
    e(FP({
      tab: xae.CODE
    }));
  }, [e]);
  let _ = useCallback(() => {
    trackEventAnalytics("left_panel_set_tab", {
      value: "Chat"
    });
    e(FP({
      tab: xae.CHAT
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