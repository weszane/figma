import { shallowEqual } from "../vendor/514228";
import { Iz, eU } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { oA } from "../905/663269";
import { az } from "../905/449184";
import { Z } from "../905/515860";
import { bt } from "../905/270322";
import { FOrganizationLevelType } from "../figma_app/191312";
import { IiJ, N8H, nXJ, qn8 } from "../figma_app/43951";
import { QB, bN as _$$bN } from "../figma_app/707808";
import { HT } from "../figma_app/428858";
let h = bt(e => Z(e));
let g = bt(e => e.currentUserOrgId);
let f = bt(e => e.openFile ? e.openFile.parentOrgId : e.selectedView?.view && (QB(e.selectedView) || _$$bN(e.selectedView)) ? e.currentUserOrgId : null);
let _ = bt(e => e.openFile ? e.openFile.parentOrgId ? null : e.openFile.teamId : e.selectedView?.view && (QB(e.selectedView) || _$$bN(e.selectedView)) ? e.currentUserOrgId ? null : e.currentTeamId : null);
let A = e => [{
  code: "nonNullableResult",
  path: [],
  error: Error(e),
  retriable: !1
}];
function y(e) {
  return resourceUtils.errorSuspendable(A(e), {
    release: () => {}
  });
}
function b(e, t, i) {
  if (t) {
    let i = e(IiJ.Query({
      orgId: t
    }));
    "errors" === i.status && az.trackDefinedEvent("plans.current_plan_view_error", {
      viewStatus: i.status,
      viewType: "orgInfo",
      publicInfo: !1,
      resolvedEmpty: !1
    });
    try {
      return i.transform(e => {
        let t = e.orgInfo?.plan;
        let n = t ? HT(t) : null;
        if (null === n) {
          az.trackDefinedEvent("plans.current_plan_view_error", {
            viewStatus: i.status,
            viewType: "orgInfo",
            publicInfo: !1,
            resolvedEmpty: !0
          });
          return Error("No org plan found");
        }
        return n;
      });
    } catch (e) {
      return y(e.message);
    }
  } else {
    if (!i) return y("No plan found, no org or team id");
    let t = e(N8H.Query({
      teamId: i
    }));
    "errors" === t.status && az.trackDefinedEvent("plans.current_plan_view_error", {
      viewStatus: t.status,
      viewType: "teamLimitedInfo",
      publicInfo: !1,
      resolvedEmpty: !1
    });
    try {
      return t.transform(e => {
        let i = e.teamLimitedInfo?.plan;
        let n = i ? HT(i) : null;
        if (null === n) {
          az.trackDefinedEvent("plans.current_plan_view_error", {
            viewStatus: t.status,
            viewType: "teamLimitedInfo",
            publicInfo: !1,
            resolvedEmpty: !0
          });
          return Error("No team plan found");
        }
        return n;
      });
    } catch (e) {
      return y(e.message);
    }
  }
}
function v(e, t, i) {
  if (t) {
    let i = e(IiJ.Query({
      orgId: t
    }));
    "errors" === i.status && az.trackDefinedEvent("plans.current_plan_view_error", {
      viewStatus: i.status,
      viewType: "org",
      publicInfo: !0,
      resolvedEmpty: !1
    });
    try {
      return i.transform(e => {
        let t = oA(e?.orgPublicInfo, null)?.planPublicInfo ?? null;
        if (null === t) {
          az.trackDefinedEvent("plans.current_plan_view_error", {
            viewStatus: i.status,
            viewType: "org",
            publicInfo: !0,
            resolvedEmpty: !0
          });
          return Error("No org plan public info found");
        }
        return t;
      });
    } catch (e) {
      return y(e.message);
    }
  } else {
    if (!i) return y("No plan public info found, no org or team id");
    let t = e(N8H.Query({
      teamId: i
    }));
    "errors" === t.status && az.trackDefinedEvent("plans.current_plan_view_error", {
      viewStatus: t.status,
      viewType: "team",
      publicInfo: !0,
      resolvedEmpty: !1
    });
    try {
      return t.transform(e => {
        let i = oA(e?.teamPublicInfo, null)?.planPublicInfo ?? null;
        if (null === i) {
          az.trackDefinedEvent("plans.current_plan_view_error", {
            viewStatus: t.status,
            viewType: "team",
            publicInfo: !0,
            resolvedEmpty: !0
          });
          return Error("No team plan public info found");
        }
        return i;
      });
    } catch (e) {
      return y(e.message);
    }
  }
}
function I(e, t, i) {
  if (t) {
    let i = e(nXJ.Query({
      orgId: t
    }));
    "errors" === i.status && az.trackDefinedEvent("plans.current_plan_user_view_error", {
      viewStatus: i.status,
      viewType: "org",
      publicInfo: !1,
      resolvedEmpty: !1
    });
    try {
      return i.transform(e => {
        let t = e.orgPublicInfo?.currentPlanUser ?? null;
        if (null === t) {
          az.trackDefinedEvent("plans.current_plan_user_view_error", {
            viewStatus: i.status,
            viewType: "org",
            publicInfo: !1,
            resolvedEmpty: !0
          });
          return Error("No org current plan user found");
        }
        return t;
      });
    } catch (e) {
      return y(e.message);
    }
  } else {
    if (!i) return y("No plan user found, no org or team id");
    let t = e(qn8.Query({
      teamId: i
    }));
    "errors" === t.status && az.trackDefinedEvent("plans.current_plan_user_view_error", {
      viewStatus: t.status,
      viewType: "team",
      publicInfo: !1,
      resolvedEmpty: !1
    });
    try {
      return t.transform(e => {
        let i = e.teamPublicInfo?.currentPlanUser ?? null;
        if (null === i) {
          az.trackDefinedEvent("plans.current_plan_user_view_error", {
            viewStatus: t.status,
            viewType: "team",
            publicInfo: !1,
            resolvedEmpty: !0
          });
          return Error("No team current plan user found");
        }
        return i;
      });
    } catch (e) {
      return y(e.message);
    }
  }
}
function E(e) {
  return Iz(t => eU(i => {
    let n;
    let r;
    return t ? (e ? (n = i(_), r = i(f)) : (n = i(h), r = i(g)), v(i, r, n)) : resourceUtils.disabledSuspendable({
      release: () => {}
    });
  }));
}
function x(e) {
  return Iz(t => eU(i => {
    let n;
    let r;
    return t ? (e ? (n = i(_), r = i(f)) : (n = i(h), r = i(g)), b(i, r, n)) : resourceUtils.disabledSuspendable({
      release: () => {}
    });
  }));
}
function S(e) {
  return Iz(t => eU(i => {
    let n;
    let r;
    return t ? (e ? (n = i(_), r = i(f)) : (n = i(h), r = i(g)), I(i, r, n)) : resourceUtils.disabledSuspendable({
      release: () => {}
    });
  }));
}
let $$w7 = x(!1);
let $$C3 = S(!1);
let $$T1 = E(!1);
let $$k5 = x(!0);
let $$R0 = S(!0);
let $$N2 = E(!0);
let $$P6 = f;
let $$O4 = _;
Iz(e => eU(t => {
  if (!e) return resourceUtils.disabledSuspendable({
    release: () => {}
  });
  let i = null;
  let n = null;
  e.type === FOrganizationLevelType.ORG ? i = e.parentId : e.type === FOrganizationLevelType.TEAM && (n = e.parentId);
  return b(t, i, n);
}), shallowEqual);
Iz(e => eU(t => {
  if (!e) return resourceUtils.disabledSuspendable({
    release: () => {}
  });
  let i = null;
  let n = null;
  e.type === FOrganizationLevelType.ORG ? i = e.parentId : e.type === FOrganizationLevelType.TEAM && (n = e.parentId);
  return v(t, i, n);
}), shallowEqual);
Iz(e => eU(t => {
  if (!e) return resourceUtils.disabledSuspendable({
    release: () => {}
  });
  let i = null;
  let n = null;
  e.type === FOrganizationLevelType.ORG ? i = e.parentId : e.type === FOrganizationLevelType.TEAM && (n = e.parentId);
  return I(t, i, n);
}), shallowEqual);
export const Ji = $$R0;
export const KK = $$T1;
export const T_ = $$N2;
export const gq = $$C3;
export const hS = $$O4;
export const mZ = $$k5;
export const oy = $$P6;
export const zl = $$w7;