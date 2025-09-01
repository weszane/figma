import { useMemo } from "react";
import { n as _$$n } from "../figma_app/795674";
import { UK } from "../figma_app/740163";
import { f } from "../905/940356";
import { J2 } from "../figma_app/84367";
import { pN } from "../figma_app/433401";
export function $$d1() {
  let e = null != localStorage.getItem("property-labels-visible");
  let t = J2(UK().showPropertyLabels);
  let i = f(pN)?.createdAt;
  return useMemo(() => {
    let e = i ?? new Date();
    return !!e && e < _$$n();
  }, [i]) && !e ? (UK().showPropertyLabels.set(!1), !1) : t;
}
export function $$c0(e) {
  return $$d1() ? "" : e;
}
export const P = $$c0;
export const V = $$d1;