import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { oA } from "../905/663269";
import d from "../vendor/116389";
import { isGovCluster, getInitialOptions } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { O as _$$O } from "../905/539306";
import { $D } from "../905/11";
import { n as _$$n } from "../figma_app/3731";
import { t as _$$t } from "../905/303541";
import { _l } from "../figma_app/976345";
import { A } from "../1250/724587";
import { b as _$$b } from "../905/985254";
import { z } from "../905/373223";
import { uE } from "../figma_app/314264";
import { HE, O_ } from "../905/967587";
import { InN, sMZ } from "../figma_app/43951";
import { nx } from "../figma_app/12796";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { X } from "../905/698965";
import { O as _$$O2 } from "../905/833838";
var c = d;
if (443 == require.j) {}
export let $$I0 = "PLAN_SPACES_ONBOARDING_KEY";
export function $$A1({
  currentUser: e
}) {
  let t = useDispatch();
  let n = useSelector(e => e.plans);
  let a = useSelector(e => getPermissionsStateMemoized(e));
  let d = z();
  let g = Rs(InN, {}, {
    enabled: getFeatureFlags().dtm_deprecation_post_migration_onboarding
  });
  let b = oA(g.data?.personalDraftToPlanDraftLocation);
  let w = oA(b?.toDraftsFolder?.team?.trackTags)?.is_auto_created_for_dtm_migration ?? !1;
  let I = b?.status === "complete";
  let A = Rs(sMZ({
    name: "seen_dtm_post_migration_badge"
  }));
  let N = !!A?.data?.currentUser?.userFlagByName;
  let O = nx(e);
  let R = O && n.length > 1;
  let M = !O && !isGovCluster();
  return {
    menuGroups: useMemo(() => {
      let t = !!getFeatureFlags().limited_plan_spaces && n.some(e => e.plan_type === _$$O2.TEAM && e.is_guest);
      let {
        full,
        limited
      } = function ({
        userPlans: e,
        currentUser: t,
        hasRestrictedTeams: n
      }) {
        let a = [];
        let r = [];
        e.forEach(e => {
          n ? e.plan_type === _$$O2.ORG && e.plan_id === t.external_restricted_org_id ? a.push(e) : r.push(e) : e.is_guest ? r.push(e) : a.push(e);
        });
        n && 0 === a.length && $D(_$$e.WORKFLOW, Error(`Enterprise plan not found in Plan Switcher for user ${t.id}`), {
          extra: {
            ...e
          }
        });
        return {
          full: a,
          limited: r
        };
      }({
        currentUser: e,
        userPlans: n,
        hasRestrictedTeams: R
      });
      let l = full.map(t => S(t, e, a, {
        isDraftsToMovePlan: w && b?.planParentId === t.plan_id,
        dtmMigrationCompleted: w && I,
        starterTeamCreated: w,
        seenDtmPostMigrationBadge: N
      })).sort((e, t) => e.displayText.localeCompare(t.displayText));
      let d = limited.map(t => S(t, e, a, {
        isDraftsToMovePlan: w && b?.planParentId === t.plan_id,
        dtmMigrationCompleted: w && I,
        starterTeamCreated: w,
        seenDtmPostMigrationBadge: N
      })).sort((e, t) => e.displayText.localeCompare(t.displayText));
      return c()([l.length > 0 && {
        key: "full",
        title: t ? _$$t("navbar.navbar.full_team_member_access") : void 0,
        items: l
      }, d.length > 0 && {
        key: "limited",
        title: R || !t ? _$$t("navbar.navbar.view_only_plans_disabled_by_admins") : _$$t("navbar.navbar.limited_team_member_access"),
        items: d
      }]);
    }, [n, R, e, a, w, I, N, b?.planParentId]),
    onChange: (r, i) => {
      let o;
      let l = n.find(e => e.plan_id === r);
      if (!l) return;
      let d = _$$O(l, e.id);
      let c = a.currentUserOrgId;
      let u = a.currentTeamId;
      let p = d.orgId;
      let g = d.teamId;
      let f = !!getFeatureFlags().limited_plan_spaces && !!getInitialOptions().is_limited_team_plan;
      let y = !!getFeatureFlags().limited_plan_spaces && !!g && l.is_guest;
      let T = l.draft_folder_id;
      o = i && getFeatureFlags().dtm_deprecation_post_migration_onboarding && T ? {
        view: "folder",
        folderId: T
      } : d.teamId && !l.is_guest ? {
        view: "team",
        teamId: d.teamId
      } : d.teamId && l.is_guest ? {
        view: "limitedTeamSharedProjects"
      } : {
        view: "org",
        orgId: d.orgId,
        orgViewTab: X.HOME
      };
      I && w && b?.planParentId === l.plan_id && t(_$$b({
        seen_dtm_post_migration_badge: !0
      }));
      uE("Plan Switcher Plan Clicked", {
        user: e
      }, {
        currentOrgId: c,
        currentTeamId: u,
        newOrgId: p,
        newTeamId: g,
        isCurrentPlanLimitedTeamPlan: f,
        isNextPlanLimitedTeamPlan: y
      });
      t(_l({
        workspace: d,
        view: o
      }));
    },
    onCreateTeam: M ? d : null
  };
}
function S(e, t, n, r) {
  let i = _$$O(e, t.id);
  let o = HE(n, i);
  let l = O_(n, i);
  let d = getFeatureFlags().dtm_deprecation_post_migration_onboarding && r?.starterTeamCreated && r?.isDraftsToMovePlan && r?.dtmMigrationCompleted && !r?.seenDtmPostMigrationBadge;
  return {
    planId: e.plan_id,
    isSelected: l,
    displayText: o,
    badge: jsx(A, {
      planTier: e.tier,
      workspace: i,
      isInDropdown: !0,
      isGuest: e.is_guest,
      shouldShowDtmPostMigrationBadge: d
    }),
    icon: jsx(_$$n, {
      userId: i.userId,
      orgId: i.orgId,
      teamId: i.teamId,
      size: 16
    })
  };
}
export const K = $$I0;
export const g = $$A1;