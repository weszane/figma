import { oA } from "../905/723791";
import { N$ } from "../figma_app/350203";
import { er, NQ } from "../1250/461992";
import { FOrganizationLevelType, FPlanNameType, FFileType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
export function $$l0() {
  let e = useCurrentPrivilegedPlan("useDefaultResourceHubTab");
  let t = e.data?.type === FOrganizationLevelType.TEAM ? e.data?.key.parentId : null;
  let n = e.data?.type === FOrganizationLevelType.ORG ? e.data?.key.parentId : null;
  let l = "loaded" === e.status && e.data?.tier === FPlanNameType.STARTER;
  let d = e.data?.type !== FOrganizationLevelType.ORG || oA(e.data.customTemplatesAllowed);
  let c = er(e.data?.tier ?? null, t, !d, 1);
  let _ = NQ(e.data?.tier ?? null, n, !d, 1);
  let {
    [FFileType.COOPER]: {
      templates: u,
      isLoading: m
    },
    [FFileType.WHITEBOARD]: {
      templates: p,
      isLoading: g
    },
    [FFileType.SLIDES]: {
      templates: f,
      isLoading: h
    }
  } = n ? _ : c;
  let b = [...u, ...p, ...f];
  let x = "loaded" === e.status && (e.data?.tier === FPlanNameType.PRO || e.data?.tier === FPlanNameType.STUDENT) && !(m || g || h) && 0 === b.length;
  return l || x ? N$.COMMUNITY : N$.INTERNAL;
}
export const P = $$l0;