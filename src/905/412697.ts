import { useState, useCallback, useMemo } from "react";
import { debounce } from "../905/915765";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { Y5 } from "../figma_app/455680";
import { zk } from "../figma_app/198712";
export function $$c0({
  property: e,
  onChange: t,
  onPreview: i,
  previewDebounce: c = 50,
  id: u,
  enablePreview: p = !0
}) {
  let [m, h] = useState();
  let g = useCallback(() => {
    void 0 !== m && (Y5.triggerActionInUserEditScope("undo"), h(void 0), i?.(void 0));
  }, [m, i]);
  let f = useMemo(() => debounce(n => {
    if (!p) return;
    if (!n) {
      g();
      return;
    }
    let r = getSingletonSceneGraph().getCurrentPage();
    let l = 0;
    if (r && (l = r.directlySelectedNodes.length ?? 0), l > 250) {
      g();
      return;
    }
    let c = void 0 === m;
    if (c) {
      if (e === n) return;
      h(e);
      i?.(e);
    }
    let f = performance.now();
    t(n, c ? zk.YES_WITHOUT_TRACKING_AS_EDIT : zk.NO);
    getFeatureFlags().ee_canvas_previews_logging && u && sx("on_canvas_preview", {
      timeMs: performance.now() - f,
      directlySelectedNodesCount: l,
      property: u
    }, {
      batchRequest: !0
    });
  }, c), [g, p, t, i, m, e, u, c]);
  let _ = useCallback(e => {
    g();
    t(e, m !== e ? zk.YES_FORCE_TRACKING_AS_EDIT : void 0);
  }, [g, t, m]);
  return {
    valueBeforePreview: m,
    updatePreview: f,
    clearPreview: g,
    onSubmit: _
  };
}
export const g = $$c0;