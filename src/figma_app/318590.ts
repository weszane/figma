import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { useSubscription } from "../figma_app/288654";
import { tT } from "../905/723791";
import { vs, I7 } from "../figma_app/594947";
import { dZ } from "../figma_app/459490";
import { JV } from "../figma_app/976749";
import { Z } from "../905/296690";
import { FileCanUseFigmaAiIgnoreAiToggle, FileCanUseFragmentSearchAi } from "../figma_app/43951";
import { FEditorType } from "../figma_app/53721";
import { isFigmakeFullscreenView } from "../figma_app/552876";
import { P } from "../905/35881";
import { n as _$$n } from "../905/347702";
import { PE, W7 } from "../figma_app/251115";
import { C7 } from "../figma_app/144974";
import { p9, $7 } from "../905/509613";
let T = atom(!1);
let I = atom(null);
let S = _$$n(() => atomStoreManager.get(T));
export function $$v8(e) {
  let t = function (e) {
    let t = atomStoreManager.get(Z);
    let r = getFeatureFlags().ai_search_llama_enable_workaround && dZ(t);
    let n = useSubscription(r ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseFragmentSearchAi, {
      key: e
    }, {
      enabled: !!e
    });
    if ("errors" === n.status || "loading" === n.status || !n.data) return !1;
    let {
      file
    } = n.data;
    return !!(file?.status === tT.Loaded && file?.data) && file.data.hasPermission;
  }(e);
  let [r, s] = useAtomValueAndSetter(T);
  useEffect(() => {
    s(t);
  }, [t, s]);
}
let A = _$$n(() => !!useAtomWithSubscription(p9));
export function $$x1() {
  return !!$7("getHasAssetVisualSearchPermission") && !!getFeatureFlags().api_asset_search && S();
}
export function $$N0(e) {
  return getFeatureFlags().api_asset_search ? function (e) {
    if (!e) return Promise.resolve(!1);
    let t = atomStoreManager.get(I);
    return null !== t ? Promise.resolve(t) : vs("exp_search_ai_assets").then(e => {
      let t = e.getValue("allow_ai_results", null);
      null !== t && atomStoreManager.set(I, !!t);
      return !!t;
    });
  }(e).then(e => !!(e || $7("getHasAssetSearchPermission")) && S()) : Promise.resolve(!1);
}
let $$C4 = _$$n(e => !!(getFeatureFlags().api_asset_search && (function (e) {
  let {
    getConfig
  } = I7("exp_search_ai_assets", void 0, !0);
  return !!getConfig().getValue("allow_ai_results", !1) && e;
}(e) || $7("useHasAssetSearchPermission"))) && S());
let $$w2 = _$$n(() => {
  let e = A();
  return !!$7("useHasFragmentSearchPermission") && (!getFeatureFlags().asset_suggestions_require_completed_backfill || !!e) && S();
});
export function $$O6() {
  let e = function () {
    let e = atomStoreManager.get(p9);
    return !!$7("useHasFragmentSearchPermission") && (!getFeatureFlags().asset_suggestions_require_completed_backfill || !!e) && S();
  }();
  return $$R3() && e && C7();
}
export function $$R3() {
  let e = debugState.getState().selectedView;
  let t = P(e);
  let r = isFigmakeFullscreenView(e);
  return JV(e) === FEditorType.Design || t || r;
}
export function $$L7() {
  let e = PE();
  return $$R3() && !!getFeatureFlags().hub_file_fragments && e;
}
export function $$P5() {
  return $$R3() && !!getFeatureFlags().hub_file_fragments && W7();
}
export const Ci = $$N0;
export const Ko = $$x1;
export const LC = $$w2;
export const Lh = $$R3;
export const Nv = $$C4;
export const P5 = $$P5;
export const _d = $$O6;
export const eH = $$L7;
export const y1 = $$v8;