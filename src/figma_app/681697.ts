import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import { useProjectFileCreationPermissions, canCreateFileType } from "../figma_app/687776";
import { createOptimistThunk } from "../905/350402";
import { le } from "../905/904854";
import { fileImporter } from "../905/642505";
import { GR } from "../905/81459";
import { FC } from "../figma_app/212807";
import { hasFolderRestrictions } from "../figma_app/345997";
import { Mk } from "../905/163189";
import { z } from "../905/875422";
import { MS } from "../905/615657";
import { Gc, TA } from "../905/769";
export let $$E2 = createOptimistThunk((e, t) => {
  fileImporter && (MS(), fileImporter.extractFilesFromDropEvent(t, (t, r) => {
    getFeatureFlags().internal_only_debug_tools && t.endsWith(".repo") ? $$T3(e, t, r) : e.dispatch(z({
      name: t,
      blob: r
    }));
  }));
});
export function $$y1(e) {
  return new le(e).isFile();
}
export function $$b0() {
  let e = useSelector(e => "folder" !== e.selectedView.view ? null : e.folders[e.selectedView.folderId] ?? null);
  let t = e?.id;
  let r = useProjectFileCreationPermissions(t);
  let a = useSelector(e => e.selectedView.view);
  let l = FC();
  return useMemo(() => "recentsAndSharing" === a ? resourceUtils.loaded(!0) : "folder" === a ? !e || hasFolderRestrictions(e, l) ? resourceUtils.loaded(!1) : r.transform(e => !!e && $$I4(e)) : resourceUtils.loaded(!1), [r, l, e, a]);
}
export function $$T3(e, t, r) {
  e.dispatch(GR());
  Gc(r).then(n => {
    n ? TA(e, n) : t = e.dispatch(z({
      name: t,
      blob: r
    }));
  });
}
export function $$I4(e) {
  return Mk.some(t => canCreateFileType(e, t));
}
export const B2 = $$b0;
export const al = $$y1;
export const b6 = $$E2;
export const mK = $$T3;
export const ud = $$I4;