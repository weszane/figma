import { useSelector } from "react-redux";
import { useProjectFileCreationPermissions } from "../figma_app/687776";
import { h } from "../figma_app/334471";
import { FFileType } from "../figma_app/191312";
import { useTeamPlanPublicInfo, useIsStarterPlan } from "../figma_app/465071";
import { isBakeStarterPaywallEnabledWithoutLimit } from "../905/442612";
if (443 == require.j) {}
export function $$d0() {
  let e = useSelector(e => e.user?.drafts_folder_id);
  let t = useProjectFileCreationPermissions(e);
  let r = h(t.data);
  let d = useTeamPlanPublicInfo();
  let c = useIsStarterPlan(d).unwrapOr(!1);
  return t.transform(e => {
    let t = r.find(({
      editorType: e
    }) => e === FFileType.FIGMAKE);
    let a = c && isBakeStarterPaywallEnabledWithoutLimit();
    return !!t?.canCreate && !a;
  });
}
export const E = $$d0;