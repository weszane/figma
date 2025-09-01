import { useMemo } from "react";
import { eU } from "../figma_app/27355";
import { p as _$$p, Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { t as _$$t } from "../905/303541";
import { wR } from "../figma_app/765689";
import { FProductAccessType, FOrganizationLevelType } from "../figma_app/191312";
import { NI1, ly7 } from "../figma_app/43951";
import { q, J } from "../905/202542";
import { wH, Cy } from "../figma_app/680166";
let _ = {
  [FProductAccessType.DESIGN]: 1,
  [FProductAccessType.SITES]: 2,
  [FProductAccessType.FIGMAKE]: 3,
  [FProductAccessType.WHITEBOARD]: 4,
  [FProductAccessType.SLIDES]: 5,
  [FProductAccessType.DEV_MODE]: 6,
  [FProductAccessType.COOPER]: 7
};
export var $$h1 = (e => (e.UPGRADE_NOT_NEEDED = "UPGRADE_NOT_NEEDED_STATE", e.PROVISIONAL_ACCESS = "PROVISIONAL_STATE", e.CAN_AUTO_UPGRADE = "CAN_AUTO_UPGRADE_STATE", e.REQUESTED = "REQUESTED_STATE", e.REQUEST = "REQUEST_STATE", e.CANNOT_UPGRADE_DISABLE = "CANNOT_UPGRADE_DISABLE", e.ADMIN_SELF_UPGRADE = "ADMIN_SELF_UPGRADE_STATE", e))($$h1 || {});
export let $$m7 = eU([]);
export function $$g2(e, t, r) {
  let {
    destinationPlan,
    requiresManualUpgrade,
    upgradeRequested
  } = e;
  return !!destinationPlan && destinationPlan.type === FOrganizationLevelType.ORG && (!!t || !r && !!requiresManualUpgrade && !!upgradeRequested);
}
export function $$f8(e, t, r) {
  let {
    destinationPlan,
    requiresManualUpgrade,
    upgradeRequested
  } = e;
  if (!r && void 0 !== r && destinationPlan && destinationPlan.type === FOrganizationLevelType.ORG && requiresManualUpgrade) {
    if (upgradeRequested) return _$$t("upgrades.request_sent");
    if (!t) return _$$t("upgrades.request");
  }
}
export function $$E4(e) {
  let t = e.filter(e => null != e).map(e => ({
    projectId: e
  }));
  let r = _$$p(NI1, t);
  return useMemo(() => r.reduce((e, t) => (t.args.projectId && e.set(t.args.projectId, t?.result?.data?.project?.path ?? null), e), new Map()), [r]);
}
export function $$y0(e, t) {
  let r = e?.parentId || "";
  let n = e?.type === FOrganizationLevelType.ORG;
  let i = Rs(ly7, {
    org_id: r,
    license_type: t
  }, {
    enabled: !!e && !!r && n && !!t
  });
  let o = oA(oA(i.data)?.hasConnectedPlanUserInOrgFolder);
  let l = o && o[0]?.hasConnectedPlanUserInOrg;
  return l;
}
export function $$b6(e) {
  let {
    hasProvisionalAccess,
    licenseType,
    destinationPlan,
    upgradeRequested,
    canAutoUpgrade,
    requiresUpgrade,
    cannotUpgradeDisableAction,
    isAdminSelfUpgrade
  } = e ?? {};
  return requiresUpgrade && isAdminSelfUpgrade ? "ADMIN_SELF_UPGRADE_STATE" : hasProvisionalAccess ? "PROVISIONAL_STATE" : licenseType && requiresUpgrade && destinationPlan && destinationPlan.key.parentId ? canAutoUpgrade ? "CAN_AUTO_UPGRADE_STATE" : upgradeRequested ? "REQUESTED_STATE" : cannotUpgradeDisableAction ? "CANNOT_UPGRADE_DISABLE" : "REQUEST_STATE" : "UPGRADE_NOT_NEEDED_STATE";
}
export function $$T5({
  files: e,
  repos: t,
  destinationFolderId: r,
  isDestinationDrafts: n
}) {
  let {
    hasPendingRequest,
    getUpgradePathway,
    getUpgradeEligibility,
    getPlanAndPlanUser,
    getHasProvisionalAccess,
    getShouldShowCurf,
    getShouldShowScim,
    getIsUpgradeHandlerLoading,
    getIsEligibleForProvisionalAccess
  } = wH({
    folderId: r,
    isDraftsMove: !0
  });
  let h = $$E4([...new Set([...e, ...t].map(e => e.folder_id).filter(e => null !== e))]);
  return $$I3({
    files: e,
    repos: t,
    isDestinationDrafts: n,
    originFolderIdToPath: h,
    hasPendingRequest,
    getUpgradePathway,
    getUpgradeEligibility,
    getPlanAndPlanUser,
    getHasProvisionalAccess,
    getShouldShowCurf,
    getShouldShowScim,
    loading: getIsUpgradeHandlerLoading(),
    getIsEligibleForProvisionalAccess
  });
}
export function $$I3({
  files: e,
  repos: t,
  isDestinationDrafts: r,
  originFolderIdToPath: n,
  hasPendingRequest: i,
  getUpgradePathway: a,
  getUpgradeEligibility: s,
  getPlanAndPlanUser: o,
  getHasProvisionalAccess: c,
  getShouldShowCurf: h,
  getShouldShowScim: m,
  loading: g,
  getIsEligibleForProvisionalAccess: f
}) {
  let E = function (e, t, r) {
    let n = e => "" === r.get(String(e.folder_id));
    let i = e.filter(n).map(e => wR(e.editor_type));
    t.filter(n).length > 0 && i.push(FProductAccessType.DESIGN);
    return i.reduce((e, t) => null === e || _[t] < _[e] ? t : e, null);
  }(e, t, n);
  if (null === E || r || g) return {
    requiresUpgrade: !1,
    canAutoUpgrade: !1,
    requiresManualUpgrade: !1,
    upgradeRequested: !1,
    cannotUpgradeDisableAction: !1,
    hasProvisionalAccess: !1,
    licenseType: null,
    destinationPlan: null,
    destinationPlanUser: null,
    shouldShowCurf: !1,
    shouldShowScim: !1,
    getIsEligibleForProvisionalAccess: null,
    loading: g,
    isAdminSelfUpgrade: !1
  };
  let y = a(E);
  let {
    plan,
    planUser
  } = o(E) || {};
  let I = Cy(planUser?.permission);
  let S = s(E) !== q.UPGRADE_NOT_NEEDED;
  let v = S && s(E) === q.CANNOT_UPGRADE && i(E);
  let A = s(E) === q.CANNOT_UPGRADE && !v;
  return {
    requiresUpgrade: S,
    canAutoUpgrade: S && y === J.AUTO_PATHWAY,
    requiresManualUpgrade: S && y !== J.AUTO_PATHWAY,
    upgradeRequested: v,
    cannotUpgradeDisableAction: A,
    hasProvisionalAccess: c(E),
    licenseType: E,
    destinationPlan: plan ?? null,
    destinationPlanUser: planUser ?? null,
    shouldShowCurf: h(E),
    shouldShowScim: m(E),
    getIsEligibleForProvisionalAccess: f,
    loading: g,
    isAdminSelfUpgrade: I
  };
}
export const Cp = $$y0;
export const LU = $$h1;
export const Px = $$g2;
export const Zm = $$I3;
export const f4 = $$E4;
export const jB = $$T5;
export const xd = $$b6;
export const yH = $$m7;
export const zS = $$f8;