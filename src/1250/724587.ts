import { ex } from "../905/524523";
import { jsx, Fragment } from "react/jsx-runtime";
import { Ex, zE, _Y } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { useSelector, useDispatch } from "react-redux";
import { DQ, Pw, _X } from "../figma_app/121751";
import { u8, A5, MF } from "../figma_app/391338";
import { FUserRoleType, FPlanNameType } from "../figma_app/191312";
import { H } from "../figma_app/951233";
import { kA } from "../figma_app/336853";
import { getPermissionsStateMemoized, hasEditorRoleAccessOnTeam } from "../figma_app/642025";
import { useState, useRef } from "react";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import { trackEventAnalytics } from "../905/449184";
import { Rs } from "../figma_app/288654";
import { V } from "../905/223767";
import { dm } from "../figma_app/976345";
import { showModalHandler } from "../905/156213";
import { fu, $z } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { TN } from "../figma_app/211146";
import { TeamById } from "../figma_app/43951";
import { w5, oc } from "../figma_app/345997";
import { ng } from "../figma_app/205827";
import { UpsellModalType } from "../905/165519";
import { e6 } from "../905/557142";
import { Ib } from "../905/129884";
function p(e) {
  let t = useSelector(e => getPermissionsStateMemoized(e));
  let n = u8({
    oldValue: H(t, e.orgId)?.permission === FUserRoleType.GUEST,
    newValue: e.isGuest,
    label: A5.PlanSwitcherOrgBadges.isOrgGuest,
    enableFullRead: DQ(Pw.GROUP_7)
  });
  let p = u8({
    oldValue: kA(t.orgById[e.orgId]),
    newValue: e.planTier === FPlanNameType.ENTERPRISE,
    label: A5.PlanSwitcherOrgBadges.isEnterprise,
    enableFullRead: DQ(Pw.GROUP_7)
  });
  let g = n ? getI18nString("navbar.navbar.guest") : p ? getI18nString("navbar.navbar.enterprise") : getI18nString("navbar.navbar.org");
  return jsx(Ex, {
    className: _$$s.ml4.mr0.$,
    color: zE.TOOLBAR,
    text: g
  });
}
let O = ex("pro_trial", function (e) {
  let t = jsx("span", {
    style: {
      fontWeight: 600
    },
    children: renderI18nText("team_list.pro_trial_time_left_days", {
      daysLeft: e.daysLeft
    })
  });
  return jsx("div", {
    className: _$$s.flex.itemsCenter.justifyCenter.$,
    children: jsx("p", {
      children: renderI18nText("team_list.pro_trial_time_left", {
        daysLeftText: t
      })
    })
  });
}, e => ({
  daysLeft: Number(e.getAttribute("data-tooltip-pro-trials-days-left") || 0)
}));
function R(e) {
  let t = useDispatch();
  let n = useSelector(e => e.user);
  let _ = useSelector(e => e.teams)[e.teamId];
  let u = useSelector(e => getPermissionsStateMemoized(e));
  let p = u8({
    oldValue: w5(_),
    newValue: e.planTier === FPlanNameType.PRO || e.planTier === FPlanNameType.STUDENT,
    label: A5.PlanSwitcherTeamBadges.isProOrStudentTeam,
    enableFullRead: DQ(Pw.GROUP_7)
  });
  let R = Rs(TeamById({
    teamId: e.teamId
  }), {
    enabled: !p && _X(Pw.GROUP_7)
  });
  let M = MF({
    oldValue: resourceUtils.loaded(hasEditorRoleAccessOnTeam(e.teamId, u)),
    newValue: R.transform(({
      team: e
    }) => !!(e?.roleOnObjectForUser && e.roleOnObjectForUser.level >= e6.EDITOR)),
    label: A5.PlanSwitcherTeamBadges.canUpgradeStarterTeam,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      teamId: e.teamId
    }
  }).data;
  let P = TN(e.teamId);
  let D = useSelector(e => e.plans);
  let L = getFeatureFlags().limited_plan_spaces;
  let F = !1;
  if (L) {
    let t = D.find(t => t.plan_id === e.teamId && "team" === t.plan_type);
    F = !!t?.is_guest;
  }
  let [B, U] = useState(!1);
  let G = useRef();
  if (!n || !_) return null;
  let W = e => {
    t(showModalHandler({
      type: V,
      data: {
        teamId: _.id,
        upsellSource: e
      }
    }));
  };
  if (L && F && e.isInDropdown) return jsx(Fragment, {});
  if (_.student_team) {
    if (e.isInDropdown) return jsx(Ex, {
      color: zE.TOOLBAR,
      text: getI18nString("navbar.navbar.edu"),
      className: _$$s.ml4.mr0.noWrap.flex.$
    });
  } else if (oc(_.id, u)) {
    if (_.student_team_at) return null;
    let t = ng.canSeeProTrialExpiryUx(P);
    let s = (e, t = !1) => jsx(Ex, {
      color: e,
      text: getI18nString("navbar.navbar.trial_expired"),
      className: `${_$$s.ml4.mr0.noWrap.$} ${!t && "plan_switcher_team_badges--warningBadgeHover--v60SF"}`
    });
    let l = e => jsx(Ex, {
      color: e,
      text: getI18nString("navbar.navbar.locked"),
      className: _$$s.ml4.mr0.noWrap.$
    });
    return e.isInDropdown ? t ? s(zE.WARNING, !0) : l(zE.WARNING) : t ? jsx(fu, {
      name: _Y.PRO_TRIAL_EXPIRED,
      properties: {
        userId: n.id,
        teamId: _.id,
        ...ng.getTrackingProperties()
      },
      children: s(zE.WARNING)
    }) : l(zE.WARNING);
  } else if (P && ng.canSeeProTrialUx(P)) {
    let t = (e, t, n = !1) => jsx(Ex, {
      color: e,
      text: getI18nString("navbar.navbar.pro_trial"),
      className: `${t} ${!n && "plan_switcher_team_badges--proTrialBadgeHover--tuLFJ"}`
    });
    return e.isInDropdown ? t(zE.TOOLBAR, _$$s.ml4.mr0.noWrap.$, !0) : jsx(fu, {
      name: _Y.PRO_TRIAL,
      properties: {
        userId: n.id,
        teamId: _.id,
        ...ng.getTrackingProperties()
      },
      children: jsx($z, {
        type: "button",
        onClick: () => W(UpsellModalType.PRO_TRIAL_UPSELL_MODAL),
        className: _$$s.ml8.noWrap.$,
        trackingProperties: ng.getTrackingProperties("Badge Clicked"),
        children: jsx("span", {
          "data-tooltip-type": Ib.SPECIAL,
          "data-tooltip": O,
          "data-tooltip-pro-trials-days-left": P.daysLeft,
          "data-tooltip-show-right": !0,
          "data-tooltip-max-width": 195,
          "data-tooltip-timeout-delay": 50,
          children: t(zE.DEFAULT, _$$s.ml4.mr0.noWrap.colorText.colorBgSelectedSecondary.flex.$)
        })
      })
    });
  } else if (p && e.isInDropdown) return jsx(Ex, {
    color: zE.TOOLBAR,
    text: getI18nString("navbar.navbar.pro"),
    className: _$$s.ml4.mr0.noWrap.flex.$
  });else if (!p) {
    let s = (e, t, n = !1) => jsx(Ex, {
      color: e,
      text: getI18nString("navbar.navbar.free"),
      className: `${t} ${!n && "plan_switcher_team_badges--freeBadgeHover--BSSXU"}`
    });
    if (e.isInDropdown) return s(zE.TOOLBAR, _$$s.ml4.mr0.noWrap.flex.$, !0);
    if (M) {
      let e = {
        monetization_surface: _$$h.MonetizationSurface.FILE_BROWSER,
        monetization_trigger: UpsellModalType.STARTER_TEAM_BADGE
      };
      return jsx("button", {
        onClick: a => {
          a.stopPropagation();
          t(dm(_.id));
          W(UpsellModalType.STARTER_TEAM_BADGE);
          trackEventAnalytics("Starter Team Badge Clicked", {
            userId: n.id,
            teamId: _.id,
            ...e
          });
        },
        onMouseEnter: () => {
          B || (G.current = setTimeout(() => {
            trackEventAnalytics("Starter Team Badge Viewed", {
              userId: n.id,
              teamId: _.id,
              ...e
            });
            U(!0);
          }, 1e3));
        },
        onMouseLeave: () => {
          clearTimeout(G.current);
        },
        className: _$$s.bgTransparent.$,
        children: s(zE.DEFAULT, _$$s.ml4.mr0.noWrap.colorText.colorBgSelectedSecondary.flex.$)
      });
    }
  }
  return null;
}
export function $$M0({
  workspace: e,
  isInDropdown: t,
  planTier: n,
  isGuest: s,
  shouldShowDtmPostMigrationBadge: l
}) {
  if (l) return jsx(Ex, {
    color: zE.BRAND,
    text: getI18nString("file_browser.drafts_to_move.new"),
    className: _$$s.ml4.mr0.noWrap.flex.$
  });
  if (e.orgId) {
    if (t) return jsx(p, {
      orgId: e.orgId,
      planTier: n,
      isGuest: !!s
    });
  } else if (e.teamId) return jsx(R, {
    teamId: e.teamId,
    isInDropdown: t,
    planTier: n
  });
  return null;
}
export const A = $$M0;