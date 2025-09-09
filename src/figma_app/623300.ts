import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppStateTsApi, DataLoadStatus } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { F } from "../905/989956";
import { DP } from "../905/640017";
import { normalizeValue } from "../905/216495";
import { getObservableValue } from "../figma_app/84367";
import { i_ } from "../905/187165";
import { s6, rp, nc } from "../figma_app/474636";
export function $$h3() {
  return $$g5({
    selectedView: useSelector(e => e.selectedView),
    isLoadingVersionHistory: useSelector(e => e.versionHistory)?.isLoadingPage,
    theme: DP()
  });
}
export let $$m1 = atom(!1);
export function $$g5({
  selectedView: e,
  isLoadingVersionHistory: t,
  theme: r
}) {
  let i = e?.view === "prototype";
  let d = i ? null : getSingletonSceneGraph().getCurrentPage();
  let h = useMemo(() => d?.backgroundColor, [d]);
  let g = !!getObservableValue(AppStateTsApi?.currentPageState().requestedPageChange, "");
  let f = useAtomWithSubscription(s6);
  let E = useAtomWithSubscription(rp);
  let y = useAtomWithSubscription($$m1);
  let b = useAtomWithSubscription(nc);
  return useMemo(() => {
    let e;
    if (i) return {
      isLoading: !1
    };
    let n = normalizeValue(h);
    return (e = null !== n ? F.format(n) : r && "dark" === i_(r) ? "rgba(30, 30, 30, 1)" : "rgba(229, 229, 229, 1)", null != n ? (n.a = .7, e = F.format(n)) : e = "rgba(229, 229, 229, 0.1)", f) ? {
      background: e,
      isLoading: !1
    } : {
      background: e,
      isLoading: !!t || g || b || E || y,
      isLoadingMissingFonts: y
    };
  }, [i, h, r, f, t, g, b, E, y]);
}
export function $$f4(e) {
  return e.some(e => e.status !== DataLoadStatus.LOADED);
}
export function $$E2(e) {
  return e.every(e => e.status === DataLoadStatus.LOADED);
}
export function $$y0(e, t) {
  for (let r of e) if (r.nodeId === t) return r.status;
  return null;
}
export const Fy = $$y0;
export const QR = $$m1;
export const VI = $$E2;
export const _Z = $$h3;
export const lH = $$f4;
export const v9 = $$g5;
