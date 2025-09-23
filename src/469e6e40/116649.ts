import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { R as _$$R } from "../905/304671";
import { i as _$$i } from "../469e6e40/549061";
import { ps, oc, ZY } from "../figma_app/845611";
import { l as _$$l } from "../4452/447644";
import { g as _$$g } from "../figma_app/638694";
import { r as _$$r } from "../905/398386";
import { selectViewAction } from "../905/929976";
import { useCurrentUserOrg } from "../905/845253";
import { getGroupOrDefault } from "../905/817247";
import { MX, EQ } from "../figma_app/684446";
import { useTeamPlanUser, useTeamPlanFeatures, useIsOrgAdminUser } from "../figma_app/465071";
import { ck } from "../905/952832";
import { FRequestsStr } from "../905/384551";
import { UserGroupRole, GroupType } from "../905/441038";
import { DashboardSection } from "../figma_app/650409";
import { o0 } from "../905/844131";
import { ER } from "../figma_app/102449";
import { useSubscription } from "../figma_app/288654";
import { tT } from "../905/723791";
import { F } from "../469e6e40/308608";
import { Jt } from "../figma_app/28323";
import { ProductAccessMap } from "../figma_app/765689";
import { OrgSharedSettingView } from "../figma_app/43951";
import { nF, lF } from "../469e6e40/68843";
function O({
  org: e,
  isOrgAdmin: t
}) {
  let a = useSubscription(OrgSharedSettingView, {
    orgId: e.id
  });
  let r = useDispatch();
  useEffect(() => {
    r(Jt({
      forceRefetch: !0
    }));
  }, [r, e.id]);
  return jsx(F, {
    supportedLicenses: [ProductAccessMap.DESIGN, ...(e.figjam_disabled_at ? [] : [ProductAccessMap.WHITEBOARD]), ProductAccessMap.DEV_MODE],
    configuredUpgradeRequestSetting: "loaded" === a.status && a.data.org?.orgSharedSetting?.configuredUpgradeRequestSetting.status === tT.Loaded ? a?.data?.org?.orgSharedSetting?.configuredUpgradeRequestSetting.data ?? null : null,
    planType: ps.ORG,
    planId: e.id,
    isOrgAdmin: t,
    defaultAdminEntryPoint: oc
  });
}
export function $$D0({
  selectedTab: e
}) {
  let t = useDispatch();
  let a = useCurrentUserOrg();
  useSelector(({
    selectedView: e
  }) => e);
  let S = useSelector(e => e.avatarEditorState);
  let N = useTeamPlanUser();
  let I = useTeamPlanFeatures();
  let T = useIsOrgAdminUser(N).unwrapOr(!1);
  let A = N.unwrapOr(null);
  let R = I.unwrapOr(null);
  let D = !!(a?.bigma_enabled && A?.fromOrgUser?.isLicenseGroupAdmin);
  let M = A?.userId;
  let P = ZY({
    isIntendedAudience: a?.bigma_enabled && !T
  });
  let U = _$$R();
  let F = MX();
  let {
    groupsUserIsAdminOf
  } = M ? EQ(F, M, D && !T) : {
    groupsUserIsAdminOf: []
  };
  useEffect(() => {
    T ? t(selectViewAction({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: DashboardSection.DASHBOARD
    })) : !D && A && R ? t(selectViewAction(o0)) : P || (groupsUserIsAdminOf.length > 0 ? t(selectViewAction({
      view: "licenseGroup",
      subView: UserGroupRole.ADMIN,
      licenseGroupId: groupsUserIsAdminOf[0].id,
      selectedTab: getGroupOrDefault(GroupType.MEMBERS)
    })) : t(selectViewAction(o0)));
  });
  let $ = cssBuilderInstance.wFull.flex.justifyBetween.px16.py24.$;
  if (!a || !D || T) return null;
  let B = U ? R ? e === FRequestsStr.ALL_REQUESTS ? jsx(_$$l, {
    plan: R,
    isOrgAdmin: T
  }) : jsx(_$$i, {
    isOrgAdmin: T
  }) : jsx(Fragment, {}) : jsxs("div", {
    className: "dashboard--container--N7vwv admin_settings_page--container--LZSr8",
    children: [jsx("div", {
      className: $,
      children: jsxs("div", {
        className: "dashboard--overviewLeft---r1Si",
        children: [jsx(ER, {
          dispatch: t,
          entityType: ck.ORG,
          entity: a,
          size: 80,
          avatarEditorState: S
        }), jsx("div", {
          className: "dashboard--handle--4QXt-",
          children: jsx(TextWithTruncation, {
            fontWeight: "regular",
            fontSize: 24,
            children: a.name
          })
        })]
      })
    }), jsx(AutoLayout, {
      spacing: 16,
      direction: "vertical",
      children: jsx("div", {
        className: cssBuilderInstance.mb16.$,
        children: jsx(O, {
          org: a,
          isOrgAdmin: T
        })
      })
    })]
  });
  return jsx(_$$r, {
    containerClass: nF,
    scrollableContainerClass: lF,
    toolbar: jsx(_$$g, {}),
    content: B,
    errorBoundaryConfig: {
      figmaTeam: ServiceCategories.SCALE,
      boundaryKeySuffix: "BillingGroupDashboardSettingsPageView"
    }
  });
}
export const BillingGroupDashboardSettingsPageView = $$D0;
