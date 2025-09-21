import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { Wi } from "../figma_app/162641";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { RR } from "../figma_app/307841";
import { g as _$$g } from "../figma_app/638694";
import { isSelectedViewMissingOrgAdminResources } from "../figma_app/422062";
import { r as _$$r } from "../905/398386";
import { selectViewAction } from "../905/929976";
import { getSelectedView } from "../figma_app/386952";
import { FMemberRoleType, FOrganizationLevelType } from "../figma_app/191312";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { useTeamPlanFeatures, useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { vS } from "../figma_app/846003";
import { DashboardSection } from "../figma_app/650409";
import { DashboardSections } from "../905/548208";
import { o0 } from "../905/844131";
import { l as _$$l } from "../4452/447644";
import { nF, lF } from "../4452/710166";
if (443 == require.j) {}
export function $$T0() {
  let e = useDispatch();
  let t = useTeamPlanFeatures();
  let r = useTeamPlanUser();
  let T = RR();
  let E = getSelectedView();
  let I = useSelector(e => getPermissionsStateMemoized(e));
  let N = useSelector(e => e.teams);
  let C = useIsOrgAdminUser(r);
  let S = "loaded" === C.status && isSelectedViewMissingOrgAdminResources({
    isAdminOrg: C.data,
    permissions: I,
    teams: N,
    view: E
  });
  let k = vS(E);
  let R = "loaded" === t.status && "loaded" === r.status && r.data.permission !== FMemberRoleType.ADMIN;
  return (useEffect(() => {
    S ? e(selectViewAction({
      view: "resourceUnavailable",
      resourceType: k
    })) : R && e(selectViewAction(o0));
  }, [e, k, R, S]), "loaded" !== t.status || "loaded" !== r.status || R || S) ? jsx("div", {
    className: cssBuilderInstance.wFull.pl32.py24.bb1.colorBorder.bSolid.$,
    children: jsx(Wi, {
      className: cssBuilderInstance.w200.h32.$,
      dataTestId: "srpv-loading"
    })
  }) : (T || (t.data.key.type === FOrganizationLevelType.ORG ? e(selectViewAction({
    view: "orgAdminSettings",
    orgAdminSettingsViewTab: DashboardSection.DASHBOARD
  })) : e(selectViewAction({
    view: "teamAdminConsole",
    teamId: t.data.key.parentId ?? "",
    teamAdminConsoleViewTab: DashboardSections.DASHBOARD
  }))), jsx(_$$r, {
    containerClass: nF,
    scrollableContainerClass: lF,
    content: jsx(_$$l, {
      plan: t.data,
      isOrgAdmin: t.data.type === FOrganizationLevelType.ORG
    }),
    toolbar: jsx(_$$g, {}),
    errorBoundaryConfig: {
      figmaTeam: _$$e.MONETIZATION_EXPANSION,
      boundaryKeySuffix: "SeatRequestsPageView"
    }
  }));
}
export const m = $$T0;