import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Xt, gI } from "../figma_app/399472";
import { Cb } from "../figma_app/543529";
import { cW, ZT } from "../figma_app/844435";
import { useCurrentUserOrgId } from "../905/845253";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { selectorFullScreenViewEditorType, filterResourcesByOrgId, filterPublishedResources, filterEntriesByPluginVersionEditorType, getPluginVersion } from "../figma_app/300692";
export function $$p0(e) {
  let t = useCurrentUserOrgId();
  let i = useCurrentPublicPlan("useOrgPrivateExtensions").unwrapOr(null);
  let p = i?.key.type === FOrganizationLevelType.ORG;
  let h = cW();
  let m = ZT();
  let f = "plugin" === e ? h : m;
  let g = useDispatch();
  let _ = Cb();
  let x = selectorFullScreenViewEditorType();
  let y = "plugin" === e ? Xt : gI;
  useEffect(() => {
    p && !_ && g(y());
  }, [g, p, _, y]);
  return useMemo(() => {
    if (!p || _) return [];
    let e = filterResourcesByOrgId(filterPublishedResources(Object.values(f)), t || "");
    x && (e = filterEntriesByPluginVersionEditorType(e, x));
    return Object.values(e).map(e => getPluginVersion(e));
  }, [x, _, p, f, t]);
}
export const h = $$p0;