import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { tT } from "../905/663269";
import { analyticsEventManager } from "../905/449184";
import { Rs } from "../figma_app/288654";
import { I7 } from "../figma_app/594947";
import { g as _$$g } from "../figma_app/618031";
import { _I } from "../figma_app/473493";
import { Em } from "../figma_app/976749";
import { y as _$$y } from "../905/461685";
import { FOrganizationLevelType, FPlanNameType, FFileType, FVisibilityType, FProductAccessType } from "../figma_app/191312";
import { T5, No, q8, px, X$, H3, S2, W8 } from "../figma_app/465071";
import { Fk } from "../figma_app/167249";
import { vD } from "../figma_app/889655";
import { JR } from "../figma_app/217457";
import { h as _$$h } from "../figma_app/496854";
import { jd } from "../figma_app/528509";
import { q5 } from "../figma_app/516028";
import { dq } from "../905/845253";
import { iZ } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { RcX, GEO, Nvo, ENi, nYG } from "../figma_app/43951";
import { XX } from "../figma_app/345997";
import { cD } from "../figma_app/598018";
import { e6 } from "../905/557142";
import { c as _$$c } from "../905/606579";
import { w as _$$w } from "../905/917761";
let L = () => !!dq();
export function $$P11() {
  let {
    getConfig
  } = I7("exp_at_mention_invited_users");
  return useCallback(t => !!function ({
    showExpAtMentionInvite: e,
    isDraftFile: t,
    isFigmaDesign: r,
    inOrg: n,
    isMobile: i
  }) {
    return !(t || i || !e || !r || n);
  }(t) && "variant" === getConfig().get("treatment", ""), [getConfig]);
}
export function $$D21() {
  let {
    getConfig
  } = I7("exp_plan_user_creation_context_org_member_flyout");
  return useCallback(t => t === FOrganizationLevelType.ORG && getConfig().get("enabled", !1), [getConfig]);
}
export function $$k10() {
  let {
    getConfig
  } = I7("exp_cart_optimizations_sticker_shock");
  return !!getConfig().getValue("enabled", !1);
}
export function $$M2({
  userId: e,
  teams: t,
  rolesByTeamId: r
}) {
  return !!getFeatureFlags().close_starter_team_loophole_v2 && F(e, t, r) > 0;
}
function F(e, t, r) {
  let n = 0;
  let i = {};
  for (let a of (t.forEach(e => i[e.id] = e), Object.keys(r))) {
    let t = i[a];
    let s = r[a][e];
    t && s && s.level === e6.OWNER && t.starter_team && !t.org_team && !t.student_team && null === t.subscription && null === t.deleted_at && n++;
  }
  return n;
}
export function $$j3(e, t, r) {
  return !!getFeatureFlags().close_starter_team_loophole_v2 && 0 === F(e, t, r) && getFeatureFlags().close_starter_loophole_team_one;
}
export function $$U1(e, t) {
  return !!e && !t;
}
export function $$B15() {
  let e = I7("exp_adv_prototyping_upsell");
  return useCallback(() => !!e.getConfig().getValue("showUpsell", !1), [e]);
}
export var $$G0 = (e => (e.CONTROL = "control", e.VARIANT_A = "variantA", e.VARIANT_B = "variantB", e))($$G0 || {});
export function $$V8() {
  let {
    getConfig
  } = I7("exp_fbg_navigation_updates");
  let t = T5("useFBGNavigationUpdatesTreatment").unwrapOr(null);
  let r = t?.key.type === FOrganizationLevelType.TEAM;
  let n = t?.tier === FPlanNameType.STARTER;
  return r && n ? getConfig().getValue("treatment", "control") : "control";
}
export function $$H6() {
  let {
    getConfig
  } = I7("exp_separate_billing_and_shipping_addresses");
  return !!getConfig().getValue("is_enabled", !1);
}
export function $$z32() {
  let {
    getConfig
  } = I7("seat_billing_terms");
  return !!getConfig().getValue("enabled", !1);
}
export function $$W14() {
  let {
    getConfig
  } = I7("exp_drafts_page_limit_v1");
  return useCallback(t => !!(getFeatureFlags().exp_drafts_page_limit_v1_new_user && !t.parentOrgId && t.editorType === FFileType.DESIGN && jd(t.project)) && !!t.team && !XX(t.team) && !!t.canEdit && getConfig().get("apply_drafts_page_limit", !1), [getConfig]);
}
export function $$K27() {
  let e = I7("starter_global_file_limits");
  return !!e?.getConfig().getValue("enabled", !1);
}
export function $$Y22() {
  let {
    getConfig
  } = I7("exp_scim_group");
  return useCallback(() => !!getConfig().getValue("enabled", !1), [getConfig]);
}
export function $$$18(e) {
  let {
    getConfig
  } = I7(e ? "exp_drafts_copy_link_v2_org" : "exp_drafts_copy_link_v2_team");
  getFeatureFlags().statsig_aa_flag_plan_key_web;
  return !!getConfig().getValue("has_drafts_copy_link_experience", !1);
}
export function $$X17() {
  let {
    getConfig
  } = I7("exp_dismissible_uub");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$q36() {
  let e = q5();
  let t = No();
  let r = q8(t);
  let i = px().unwrapOr(null);
  let a = dq();
  let s = !!a;
  let l = cD();
  let u = !s;
  let p = Rs(RcX({
    orgId: a
  }), {
    enabled: !!a
  }).unwrapOr(null);
  let _ = p?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === tT.Loaded ? p?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data : null;
  let h = _ === FVisibilityType.ALL_USERS || _ === FVisibilityType.MEMBERS;
  let {
    getConfig
  } = I7("exp_seat_choice_in_nux_team_id");
  let {
    getConfig: _getConfig
  } = I7("exp_seat_choice_in_nux_org_id");
  let y = u ? getConfig : _getConfig;
  return useCallback(() => {
    let t = !!i?.licenseTypes?.length;
    return !(!e || e?.project?.activeProjectResourceConnections?.length) && !h && !t && "loaded" === r.status && (null != i || !!e.canEdit) && !r.data && (!u || !!l) && y().get("enabled", !1);
  }, [y, u, l, r, e, i, h]);
}
export function $$J35() {
  let e = L();
  let t = useSelector(e => e.currentTeamId);
  let r = !e;
  let a = !!_$$f("has_marked_ready_for_dev");
  let {
    getConfig
  } = I7("exp_rfd_signals_upsell_team_id");
  let {
    getConfig: _getConfig2
  } = I7("exp_rfd_signals_upsell_org_id");
  let l = r ? getConfig : _getConfig2;
  return useCallback(() => !a && (!r || !!t) && l().get("enabled", !1), [l, r, t, a]);
}
export function $$Z4() {
  let e = q5();
  let t = e?.planPublicInfo;
  let {
    type
  } = t?.key ?? {};
  let {
    getConfig
  } = I7(type === FOrganizationLevelType.TEAM ? "exp_approve_in_file_pro_team" : "exp_approve_in_file_org");
  return void 0 !== type && !!getConfig().getValue("show_request_in_file", !1);
}
export function $$Q7() {
  let e = _$$w({
    teamXP: "exp_developer_contextual_upsells_team_id_with_user",
    orgXP: "exp_developer_contextual_upsells_org_id_with_user"
  }, {
    allowStarterPlans: !1,
    allowCurfPlans: !0,
    allowFigmaConnectPlans: !0
  });
  return useCallback(() => {
    let t = e?.();
    return t?.get("enabled", !1) ?? !1;
  }, [e]);
}
export function $$ee37() {
  return useCallback(() => !!getFeatureFlags().show_team_account_credit_banner, []);
}
export function $$et29() {
  let e = function () {
    let e = T5("useIsExpProAnnualImprovementsEnabled").unwrapOr(null);
    let t = _$$g(e);
    let {
      getConfig
    } = I7("exp_pro_annual_improvements_may_2025");
    return useCallback(() => e?.tier === FPlanNameType.PRO && !!t && !!getConfig().getValue("enabled", !1), [e, t, getConfig]);
  }();
  return useCallback(() => e() || !!getFeatureFlags().new_annual_seats_ctas, [e]);
}
export function $$er16() {
  let {
    getConfig
  } = I7("exp_cart_seat_selection_clarity");
  return useCallback(() => !!getConfig().getValue("enabled", !1), [getConfig]);
}
export function $$en26({
  disableExposureLogging: e
} = {}) {
  let t = No();
  let r = q8(t);
  let {
    getConfig
  } = I7("exp_pro_admin_plan_invite_with_seat", void 0, e);
  let {
    getConfig: _getConfig3
  } = I7("exp_org_admin_plan_invite_with_seat", void 0, e);
  return useCallback(({
    isPlanAdmin: e
  }) => {
    if (getFeatureFlags().plan_invite_modal_revamp) return !0;
    if ("loaded" !== t.status || r.data || !e) return !1;
    let n = t.data.key.type;
    switch (n) {
      case FOrganizationLevelType.ORG:
        return _getConfig3().get("enabled", !1);
      case FOrganizationLevelType.TEAM:
        return getConfig().get("enabled", !1);
      default:
        throwTypeError(n);
    }
  }, [t, _getConfig3, getConfig, r]);
}
export function $$ei25() {
  let {
    getConfig
  } = I7("exp_pro_admin_file_invite_with_seat");
  let {
    getConfig: _getConfig4
  } = I7("exp_org_admin_file_invite_with_seat");
  let r = X$("useIsInviteToFileWithSeatExpEnabled").unwrapOr(null);
  return useCallback(({
    rolePending: n,
    inviteBillableProductKey: i,
    editorType: a,
    filePlanKey: s,
    userNeedsUpgrade: o,
    hasEditRole: l
  }) => {
    if (!a || !l || !s || !o || n && i && JR(i, a) || s.type !== r?.key.type || s.parentId !== r?.key.parentId) return !1;
    let d = r?.tier === FPlanNameType.PRO;
    let c = r?.tier === FPlanNameType.ORG || r?.tier === FPlanNameType.ENTERPRISE;
    return d ? getConfig().get("enabled", !1) : !!c && _getConfig4().get("enabled", !1);
  }, [r, getConfig, _getConfig4]);
}
export function $$ea19(e) {
  let t = No().unwrapOr(null);
  let r = iZ();
  let i = q5();
  let a = H3(t) ?? null;
  let s = Rs(RcX({
    orgId: a
  }), {
    enabled: !!a
  }).unwrapOr(null);
  let c = s?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === tT.Loaded ? s?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data : null;
  let u = c === FVisibilityType.ALL_USERS || c === FVisibilityType.MEMBERS;
  let p = _$$c();
  let _ = t?.tier === FPlanNameType.PRO;
  let h = t?.tier === FPlanNameType.ORG || t?.tier === FPlanNameType.ENTERPRISE;
  let f = Rs(GEO({
    teamId: t?.key.parentId || ""
  }), {
    enabled: _ && !u && !p && e
  }).unwrapOr(null);
  let E = Rs(Nvo({
    orgId: t?.key.parentId || ""
  }), {
    enabled: h && !u && !p && e
  }).unwrapOr(null);
  let y = useRef(!1);
  let b = E?.orgPublicInfo?.expOneClickAskToEditOrgId.status === tT.Loaded ? E.orgPublicInfo.expOneClickAskToEditOrgId.data : null;
  let T = f?.teamPublicInfo?.expOneClickAskToEditTeamIdPublic.status === tT.Loaded ? f.teamPublicInfo.expOneClickAskToEditTeamIdPublic.data : null;
  return useCallback(() => (!y.current && (b || T) && (analyticsEventManager.trackDefinedEvent("activation.experiment_exposure_for_user", {
    userId: r?.id,
    fileKey: i?.key,
    orgId: a || void 0,
    teamId: h ? void 0 : t?.key.parentId,
    ruleId: b?.treatment ?? T?.treatment,
    experimentName: b?.id ?? T?.id
  }), y.current = !0), h) ? b?.treatment === "variant" : !!_ && T?.treatment === "variant", [T, b, h, _, t, r, i, a]);
}
export function $$es23({
  planType: e,
  planParentId: t,
  isOrgGuest: r,
  licenseType: i,
  entryPoint: a
}) {
  let s = i === FProductAccessType.DEV_MODE && "dev-mode-blocking-modal" === a;
  let c = iZ();
  let u = c?.id;
  let p = _$$c();
  let _ = !s && !p && e === FOrganizationLevelType.TEAM && !!t;
  let h = Rs(ENi({
    teamId: t
  }), {
    enabled: _
  }).unwrapOr(null);
  let g = !s && !p && !r && e === FOrganizationLevelType.ORG && !!t;
  let f = Rs(nYG({
    orgId: t
  }), {
    enabled: g
  }).unwrapOr(null);
  let E = useRef(!1);
  useEffect(() => () => {
    E.current = !1;
  }, [u, e, t]);
  let y = useCallback(r => {
    u && !E.current && (analyticsEventManager.trackDefinedEvent("activation.experiment_exposure_for_user", {
      userId: u,
      orgId: e === FOrganizationLevelType.ORG ? t : void 0,
      teamId: e === FOrganizationLevelType.TEAM ? t : void 0,
      ruleId: r ? "test" : "control",
      experimentName: e === FOrganizationLevelType.ORG ? "exp_social_proof_expansion_org_id" : "exp_social_proof_expansion_team_id"
    }), E.current = !0);
  }, [u, e, t]);
  if (s) return !0;
  if (r || p) return !1;
  let b = h?.team?.expSocialProofExpansionTeamId.status === tT.Loaded ? h.team.expSocialProofExpansionTeamId.data.enabled : null;
  let T = f?.org?.expSocialProofExpansionOrgId.status === tT.Loaded ? f.org.expSocialProofExpansionOrgId.data.enabled : null;
  return null !== T && e === FOrganizationLevelType.ORG ? (y(T), T) : null !== b && e === FOrganizationLevelType.TEAM && (y(b), b);
}
export function $$eo24() {
  let e = _$$w({
    teamXP: "exp_pro_user_context_in_downgrade_flow",
    orgXP: "exp_org_user_context_in_downgrade_flow"
  }, {
    allowStarterPlans: !1,
    allowCurfPlans: !0,
    allowFigmaConnectPlans: !0
  });
  return useCallback(() => !!e && (e().get("enabled", !1) ?? !1), [e]);
}
export function $$el33() {
  let e = _I();
  let {
    getConfig
  } = I7("exp_dt_mcp_callout");
  let r = !!_$$f("dev_mode_has_enabled_mcp_server");
  return useCallback(() => !!e && !r && getConfig().getValue("enabled", !1), [getConfig, e, r]);
}
export function $$ed20() {
  let e = function () {
    let e = S2().unwrapOr(null);
    let t = px();
    let r = W8(t).unwrapOr(!1);
    let i = e?.tier === FPlanNameType.PRO;
    let a = _$$g(e);
    return useCallback(e => i && a && r && e, [i, a, r]);
  }();
  let {
    getConfig
  } = I7("seat_management_widget_pro");
  return useCallback(r => e(r) && !!getFeatureFlags().seat_billing_interval_people_tab && getConfig().get("enabled", !1), [e, getConfig]);
}
export function $$ec5() {
  let {
    getConfig
  } = I7("seat_management_widget_pro");
  let {
    getConfig: _getConfig5
  } = I7("seat_management_widget_org");
  let r = S2().unwrapOr(null)?.type;
  return useCallback(() => {
    if (!getFeatureFlags().billing_page_updates_jul_2025) return !1;
    switch (r) {
      case FOrganizationLevelType.TEAM:
        return getConfig().get("enabled", !1);
      case FOrganizationLevelType.ORG:
        return _getConfig5().get("enabled", !1);
      default:
        return !1;
    }
  }, [getConfig, _getConfig5, r]);
}
export function $$eu34() {
  let {
    getConfig
  } = I7("exp_send_to_make");
  let t = function () {
    let e = Em();
    let t = _$$y().transform(e => e?.canCreateFigmakeFileWithReasons.result ?? !1).unwrapOr(!1);
    let r = useSelector(vD);
    let n = Fk((e, t) => e.get(t)?.isTopLevelFrame() ?? !1, r);
    let a = No().unwrapOr(null);
    return !!e && !!n && !!a && (a.tier !== FPlanNameType.STARTER || !!getFeatureFlags().bake_starter_limit) && t;
  }();
  return useCallback(() => !!t && (getConfig().get("enabled", !1) ?? !1), [getConfig, t]);
}
export function $$ep9({
  logExposure: e
}) {
  let {
    getConfig
  } = I7("exp_make_empty_state_refresh", void 0, e);
  return useCallback(() => getConfig().get("enabled", !1) ?? !1, [getConfig]);
}
export function $$e_12() {
  let {
    getConfig
  } = I7("exp_figma_make_prototype_tab_upsell");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$eh28() {
  let {
    getConfig
  } = I7("exp_make_file_creation_tooltip");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$$$em13() {
  let {
    getConfig
  } = I7("exp_figma_make_design_editor_popout_upsell");
  return useCallback(() => getConfig().get("enabled", !1), [getConfig]);
}
export function $$eg30(e) {
  let {
    getConfig
  } = I7("exp_high_pri_notifs_v2");
  return !!_$$h() && !!e && getConfig().getValue("has_high_priority_filter", !1);
}
export function $$ef31() {
  let {
    getConfig
  } = I7("exp_one_click_resubscribe", !1, !0);
  let {
    can_one_click_resubscribe
  } = getFeatureFlags();
  return !!can_one_click_resubscribe && getConfig().get("can_one_click_resubscribe", !1);
}
export const ih = $$G0;
export const mw = $$U1;
export const e5 = $$M2;
export const Mk = $$j3;
export const dI = $$Z4;
export const vt = $$ec5;
export const Mh = $$H6;
export const lS = $$Q7;
export const fn = $$V8;
export const em = $$ep9;
export const Ik = $$k10;
export const y = $$P11;
export const oW = $$e_12;
export const RI = $$$$em13;
export const Fr = $$W14;
export const hn = $$B15;
export const Dj = $$er16;
export const Mi = $$X17;
export const Xt = $$$18;
export const YJ = $$ea19;
export const C3 = $$ed20;
export const UV = $$D21;
export const t4 = $$Y22;
export const wu = $$es23;
export const U2 = $$eo24;
export const lx = $$ei25;
export const Z5 = $$en26;
export const E9 = $$K27;
export const Np = $$eh28;
export const P8 = $$et29;
export const Ow = $$eg30;
export const Lm = $$ef31;
export const CT = $$z32;
export const pT = $$el33;
export const _p = $$eu34;
export const cR = $$J35;
export const fr = $$q36;
export const a8 = $$ee37;