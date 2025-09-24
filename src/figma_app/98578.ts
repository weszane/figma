import { useRef, useCallback, useEffect } from "react";
import { ServiceCategories } from "../905/165054";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { $ } from "../905/922405";
import { getProductType } from "../figma_app/314264";
import { l as _$$l } from "../905/202425";
import { hasJubileePermissionForWhiteboard } from "../figma_app/251115";
import { $L, OW } from "../figma_app/737746";
import { x } from "../905/179739";
import { eg, WZ, mi } from "../figma_app/297822";
import { Jc } from "../905/946805";
import { Q8, dd, Rt, rE } from "../figma_app/604494";
import { ee } from "../figma_app/995580";
export function $$E2() {
  let e = useRef(Date.now());
  let t = useRef(0);
  let r = useRef(!1);
  let i = useCallback(() => {
    !r.current && t.current++;
  }, []);
  let a = useCallback(() => {
    if (r.current) return;
    r.current = !0;
    let n = Date.now() - e.current;
    let i = t.current;
    e.current = Date.now();
    t.current = 0;
    return {
      durationMs: n,
      numKeyStrokes: i
    };
  }, []);
  useEffect(() => (document.addEventListener("keydown", i), () => {
    document.removeEventListener("keydown", i);
  }));
  return {
    createMetrics: a
  };
}
export function $$y5({
  item: e,
  searchQuery: t,
  qaVersion: r,
  numSearchResults: n,
  searchPosition: i,
  moduleFilters: a,
  numKeyStrokes: s,
  durationMs: o,
  shortcutText: l
}) {
  let d = !!("plugins-menu-item" === e.name && e.extensionSearchString);
  $$I1({
    action: ee(e),
    searchQuery: t,
    numSearchResults: n,
    rankingAlgorithm: eg(Jc.ALL),
    searchPosition: i,
    module: Jc.ALL,
    qaVersion: r,
    isAi: $$S0(e),
    isPlugin: d,
    moduleFilters: a,
    numKeyStrokes: s,
    durationMs: o,
    shortcutText: l
  });
}
export function $$b6({
  searchQuery: e,
  extensionId: t,
  moduleFilters: r,
  searchPosition: n,
  numSearchResults: i
}) {
  $$I1({
    action: t,
    searchQuery: e,
    numSearchResults: i,
    rankingAlgorithm: eg(Jc.EXTENSIONS),
    searchPosition: n,
    module: Jc.EXTENSIONS,
    qaVersion: $L,
    isAi: !1,
    isPlugin: !0,
    moduleFilters: r
  });
}
export function $$T3({
  action: e,
  numSearchResults: t,
  searchPosition: r,
  rankingAlgorithm: n,
  isSearchResult: i,
  moduleFilters: s
}) {
  $$I1({
    action: e,
    searchQuery: atomStoreManager.get(Q8),
    numSearchResults: t,
    rankingAlgorithm: n,
    searchPosition: r,
    qaVersion: $L,
    isAi: !0,
    isPlugin: !1,
    moduleFilters: s,
    isSearchResult: i,
    module: x()
  });
}
export function $$I1(e) {
  let {
    quickActionsSessionId,
    quickActionsQueryId,
    currentSelection,
    fileKey,
    productType,
    source,
    role,
    hasAiFeatureAccess
  } = function () {
    let e = debugState.getState();
    let t = _$$l(e);
    let r = e.openFile?.key ?? "";
    let n = getProductType(e.selectedView, null);
    let l = atomStoreManager.get(dd) ?? "";
    l || reportError(ServiceCategories.EXTENSIBILITY, Error(`No quick actions session ID found when logging ${OW}`));
    let _ = atomStoreManager.get(Rt);
    return {
      currentSelection: t,
      fileKey: r,
      productType: n,
      source: atomStoreManager.get(rE)?.source ?? "",
      quickActionsSessionId: l,
      quickActionsQueryId: _,
      role: WZ(),
      hasAiFeatureAccess: hasJubileePermissionForWhiteboard()
    };
  }();
  let y = {
    ...e,
    quickActionsSessionId,
    currentSelection,
    fileKey,
    productType,
    quickActionsQueryId,
    source,
    role,
    hasAiFeatureAccess
  };
  mi(y);
}
export function $$S0(e) {
  return !!e.tags?.includes($.AI);
}
export function $$v4(e) {
  return !!e.tags?.includes($.BETA);
}
export const BB = $$S0;
export const PV = $$I1;
export const Sk = $$E2;
export const XG = $$T3;
export const Z7 = $$v4;
export const kp = $$y5;
export const wI = $$b6;