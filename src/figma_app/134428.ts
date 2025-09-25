import { useCallback, useMemo } from "react";
import { noop } from 'lodash-es';
import { createLocalStorageAtom, useAtomValueAndSetter } from "../figma_app/27355";
import { useStorageEventSync } from "../905/657224";
import { useIsFullscreenSitesView } from "../905/561485";
var $$l0 = (e => (e.LIST = "list", e.GRID = "grid", e))($$l0 || {});
let d = "assets-panel-view-mode-v2";
let c = createLocalStorageAtom(d, "grid");
export function $$u1() {
  let [e, t] = useAtomValueAndSetter(c);
  let r = useCallback(e => e.key === d && null != e.newValue, []);
  let l = useCallback(r => {
    if (r) try {
      let n = JSON.parse(r);
      ("grid" === n || "list" === n) && e !== n && t(n);
    } catch (e) {}
  }, [e, t]);
  useStorageEventSync({
    onSync: l,
    shouldSyncValue: r
  });
  let u = useIsFullscreenSitesView();
  return useMemo(() => u ? ["grid", noop] : [e, t], [e, u, t]);
}
let p = "asset-panel-show-folders";
let _ = createLocalStorageAtom(p, !1);
export function $$h2() {
  let [e, t] = useAtomValueAndSetter(_);
  let r = useCallback(e => e.key === p && null != e.newValue, []);
  let i = useCallback(r => {
    if (r) try {
      let n = JSON.parse(r);
      "boolean" == typeof n && e !== n && t(n);
    } catch (e) {}
  }, [e, t]);
  useStorageEventSync({
    onSync: i,
    shouldSyncValue: r
  });
  return [e, t];
}
export const $H = $$l0;
export const MA = $$u1;
export const ye = $$h2;
