import { useEffect, useMemo } from "react";
import { wA } from "../vendor/514228";
import { Xt, gI } from "../figma_app/399472";
import { Cb } from "../figma_app/543529";
import { cW, ZT } from "../figma_app/844435";
import { dq } from "../905/845253";
import { FOrganizationLevelType } from "../figma_app/191312";
import { X$ } from "../figma_app/465071";
import { K$, Qt, i8, _w, uF } from "../figma_app/300692";
export function $$p0(e) {
  let t = dq();
  let i = X$("useOrgPrivateExtensions").unwrapOr(null);
  let p = i?.key.type === FOrganizationLevelType.ORG;
  let h = cW();
  let m = ZT();
  let f = "plugin" === e ? h : m;
  let g = wA();
  let _ = Cb();
  let x = K$();
  let y = "plugin" === e ? Xt : gI;
  useEffect(() => {
    p && !_ && g(y());
  }, [g, p, _, y]);
  return useMemo(() => {
    if (!p || _) return [];
    let e = Qt(i8(Object.values(f)), t || "");
    x && (e = _w(e, x));
    return Object.values(e).map(e => uF(e));
  }, [x, _, p, f, t]);
}
export const h = $$p0;