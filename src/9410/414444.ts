import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ei } from "../figma_app/9054";
import { i as _$$i } from "../figma_app/553327";
import { dU } from "../9410/461336";
import { useSingleSelectedKey } from "../figma_app/311375";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { P } from "../905/647955";
import { DS } from "../figma_app/571341";
import { L$ } from "../figma_app/241341";
export function $$h0() {
  let e = useDispatch<AppDispatch>();
  let t = useIsProgressBarHiddenOrLocked();
  let i = useSelector(e => e.selectedView.compareChangesVersionId);
  let h = useSelector(e => e.selectedView.compareChangesActivityId);
  let m = useSelector(e => e.selectedView?.view === "fullscreen" && e.selectedView.compareChangesNodeId || null);
  let f = useSingleSelectedKey();
  let g = m ?? f ?? void 0;
  let _ = ei(g);
  let x = _$$i(g);
  let {
    versions,
    versionsQueryLoaded
  } = DS(g);
  let C = !versionsQueryLoaded || 0 === versions.length || !_;
  let v = P();
  let E = dU(g ?? null, "cc_version_id_url");
  useEffect(() => {
    (i || h) && !t && versionsQueryLoaded && !v && (x && !C ? E() : L$(void 0, e, !1, null));
  }, [i, h, e, t, v, C, x, E, versionsQueryLoaded]);
}
export const O = $$h0;