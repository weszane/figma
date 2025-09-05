import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { s as _$$s } from "../cssbuilder/589278";
import { Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { R as _$$R } from "../905/304671";
import { i as _$$i } from "../469e6e40/549061";
import { ps, oc, ZY } from "../figma_app/845611";
import { l as _$$l } from "../4452/447644";
import { g as _$$g } from "../figma_app/638694";
import { r as _$$r } from "../905/398386";
import { sf } from "../905/929976";
import { sZ } from "../905/845253";
import { g as _$$g2 } from "../905/817247";
import { MX, EQ } from "../figma_app/684446";
import { px, S2, j_ } from "../figma_app/465071";
import { ck } from "../905/952832";
import { D as _$$D } from "../905/384551";
import { GN, RM } from "../905/441038";
import { J7 } from "../figma_app/650409";
import { o0 } from "../905/844131";
import { ER } from "../figma_app/102449";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { F } from "../469e6e40/308608";
import { Jt } from "../figma_app/28323";
import { Te } from "../figma_app/765689";
import { RcX } from "../figma_app/43951";
import { nF, lF } from "../469e6e40/68843";
function O({
  org: e,
  isOrgAdmin: t
}) {
  let a = Rs(RcX, {
    orgId: e.id
  });
  let r = useDispatch();
  useEffect(() => {
    r(Jt({
      forceRefetch: !0
    }));
  }, [r, e.id]);
  return jsx(F, {
    supportedLicenses: [Te.DESIGN, ...(e.figjam_disabled_at ? [] : [Te.WHITEBOARD]), Te.DEV_MODE],
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
  let a = sZ();
  useSelector(({
    selectedView: e
  }) => e);
  let S = useSelector(e => e.avatarEditorState);
  let N = px();
  let I = S2();
  let T = j_(N).unwrapOr(!1);
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
    T ? t(sf({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: J7.DASHBOARD
    })) : !D && A && R ? t(sf(o0)) : P || (groupsUserIsAdminOf.length > 0 ? t(sf({
      view: "licenseGroup",
      subView: GN.ADMIN,
      licenseGroupId: groupsUserIsAdminOf[0].id,
      selectedTab: _$$g2(RM.MEMBERS)
    })) : t(sf(o0)));
  });
  let $ = _$$s.wFull.flex.justifyBetween.px16.py24.$;
  if (!a || !D || T) return null;
  let B = U ? R ? e === _$$D.ALL_REQUESTS ? jsx(_$$l, {
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
          children: jsx(_$$E, {
            fontWeight: "regular",
            fontSize: 24,
            children: a.name
          })
        })]
      })
    }), jsx(Y, {
      spacing: 16,
      direction: "vertical",
      children: jsx("div", {
        className: _$$s.mb16.$,
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
      figmaTeam: _$$e.SCALE,
      boundaryKeySuffix: "BillingGroupDashboardSettingsPageView"
    }
  });
}
export const BillingGroupDashboardSettingsPageView = $$D0;