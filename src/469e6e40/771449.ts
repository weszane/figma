import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { Xf } from "../figma_app/153916";
import { renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { KX } from "../469e6e40/623537";
import { g as _$$g } from "../figma_app/638694";
import { isSelectedViewMissingOrgAdminSettingsResources } from "../figma_app/422062";
import { r as _$$r } from "../905/398386";
import { selectViewAction } from "../905/929976";
import { Jt } from "../figma_app/28323";
import { MX, EO } from "../figma_app/684446";
import { isLoading, isDefined, isLoaded } from "../905/18797";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { vS } from "../figma_app/846003";
import { GroupType } from "../905/441038";
import { DefaultFilters, DefaultSortConfig } from "../figma_app/967319";
import { o0 } from "../905/844131";
import { nF, lF } from "../469e6e40/68843";
if (443 == require.j) {}
export function $$C0(e) {
  let {
    selectedTab,
    licenseGroupId
  } = e;
  let C = useSelector(({
    dropdownShown: e
  }) => e);
  let S = useSelector(({
    loadingState: e
  }) => e);
  let N = useSelector(({
    orgById: e,
    currentUserOrgId: t
  }) => e[t]);
  let I = useSelector(({
    selectedView: e
  }) => e);
  let T = MX();
  let A = useDispatch();
  let R = Xf(N?.id);
  let O = R?.data?.invoices;
  let L = EO(N?.id ?? "");
  let D = useTeamPlanUser();
  let M = useIsOrgAdminUser(D);
  let P = useSelector(e => getPermissionsStateMemoized(e));
  let U = "loaded" === M.status && isSelectedViewMissingOrgAdminSettingsResources({
    isAdminOrg: !!M.data,
    permissions: P,
    view: I
  });
  let F = vS(I);
  useEffect(() => {
    U && A(selectViewAction({
      view: "resourceUnavailable",
      resourceType: F
    }));
  }, [A, F, U]);
  useEffect(() => {
    A(Jt({
      forceRefetch: !0
    }));
  }, [A, N?.id]);
  let q = Date.now();
  let [$, B] = useState("");
  let G = T.find(e => e.id === licenseGroupId);
  let z = isLoading(S, EO(N?.id ?? ""));
  let V = !G && isDefined(S, L) && isLoaded(S, L);
  if (useEffect(() => {
    V && A(selectViewAction(o0));
  }, [A, V]), "loaded" !== M.status) return null;
  let W = null;
  if (selectedTab === GroupType.MEMBERS) {
    let e = {
      ...DefaultFilters,
      ...I.orgAdminMembersTabFilters,
      licenseGroupFilter: licenseGroupId
    };
    let t = I.orgAdminMembersTabSort || DefaultSortConfig;
    W = jsx(KX, {
      currency: R?.data?.currency || void 0,
      customEmptyState: jsxs(AutoLayout, {
        direction: "vertical",
        width: "fill-parent",
        height: "hug-contents",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        strokeColor: "default",
        strokeWidth: 1,
        padding: 20,
        children: [jsx(TextWithTruncation, {
          color: "secondary",
          fontWeight: "semi-bold",
          children: renderI18nText("license_group_admin.members.no_members_yet")
        }), jsx(TextWithTruncation, {
          color: "secondary",
          children: renderI18nText("license_group_admin.members.no_members_yet.subtitle")
        })]
      }),
      dropdownShown: C,
      filters: e,
      invoices: O,
      isLoading: z,
      isTitleLoading: z,
      org: N,
      searchQuery: $,
      setSearchQuery: B,
      sort: t,
      startTime: q,
      title: G?.name
    }, licenseGroupId);
  }
  return jsx(_$$r, {
    containerClass: nF,
    scrollableContainerClass: lF,
    toolbar: jsx(_$$g, {}),
    content: W,
    errorBoundaryConfig: {
      figmaTeam: _$$e.SCALE,
      boundaryKeySuffix: "LicenseGroupAdminSettingsPageView"
    }
  });
}
export const LicenseGroupAdminSettingsPageView = $$C0;