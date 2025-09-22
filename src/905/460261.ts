import { useMemo } from "react";
import { n as _$$n } from "../figma_app/795674";
import { EditorPreferencesApi } from "../figma_app/740163";
import { selectUserFlag } from "../905/940356";
import { getObservableOrFallback } from "../figma_app/84367";
import { pN } from "../figma_app/433401";
export function $$d1() {
  let e = null != localStorage.getItem("property-labels-visible");
  let t = getObservableOrFallback(EditorPreferencesApi().showPropertyLabels);
  let i = selectUserFlag(pN)?.createdAt;
  return useMemo(() => {
    let e = i ?? new Date();
    return !!e && e < _$$n();
  }, [i]) && !e ? (EditorPreferencesApi().showPropertyLabels.set(!1), !1) : t;
}
export function $$c0(e) {
  return $$d1() ? "" : e;
}
export const P = $$c0;
export const V = $$d1;