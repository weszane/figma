import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { CI } from "../figma_app/528509";
import { _6 } from "../figma_app/386952";
import { ProjectNameById } from "../figma_app/43951";
import { useCurrentPublicPlan, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
export function $$d0(e) {
  let t = useCurrentPublicPlan("useFolderDisplayName").unwrapOr(null);
  let i = getParentOrgIdIfOrgLevel(t);
  let d = "folder" === _6().view;
  let c = useSubscription(ProjectNameById, {
    projectId: e
  }, {
    enabled: !!e && !d
  });
  if (d) return resourceUtils.loaded(null);
  if ("loaded" !== c.status) return resourceUtils.from(c);
  let u = c.data.project;
  return getParentOrgIdIfOrgLevel(u?.planPublicInfo ?? null) !== i ? resourceUtils.loaded(null) : resourceUtils.loaded(u ? CI(u) : null);
}
export function $$c1(e) {
  let t = useCurrentPublicPlan("useFolderDisplayNameAndTrashedStatus").unwrapOr(null);
  let i = getParentOrgIdIfOrgLevel(t);
  let d = "folder" === _6().view;
  let c = useSubscription(ProjectNameById, {
    projectId: e
  }, {
    enabled: !!e && !d
  });
  if (d) return resourceUtils.loaded(null);
  if ("loaded" !== c.status) return resourceUtils.from(c);
  let u = c.data.project;
  return getParentOrgIdIfOrgLevel(u?.planPublicInfo ?? null) !== i ? resourceUtils.loaded(null) : resourceUtils.loaded(u ? {
    folderName: CI(u),
    isTrashed: !!u?.trashedAt
  } : null);
}
export const l = $$d0;
export const p = $$c1;