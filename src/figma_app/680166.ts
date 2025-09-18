import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { zRx } from "../figma_app/822011";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { useMemoStable } from "../905/19536";
import { resourceUtils } from "../905/989992";
import { getResourceDataOrFallback } from "../905/663269";
import p from "../vendor/626715";
import { customHistory } from "../905/612521";
import { useSubscription, useMultiSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { showModalHandler, hideSpecificModal } from "../905/156213";
import { DeepLinkType, DevModeUI, UISection } from "../905/15667";
import { ProductAccessTypeEnum } from "../905/513035";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { getMinimumBundle } from "../905/389382";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FProductAccessType, FUserRoleType, FPlanNameType, FMemberRoleType, FOrganizationLevelType, FFileType } from "../figma_app/191312";
import { UpgradeEligibilityView, UpgradeEligibilityFolderView, IdpUserView, ConfiguredUpgradeRequestModalView, UserLicensesForFile } from "../figma_app/43951";
import { b as _$$b } from "../905/376877";
import { UpgradeRequestSetting } from "../figma_app/482728";
import { J as _$$J, q as _$$q } from "../905/202542";
import { R as _$$R } from "../905/712060";
import { AuthModal } from "../905/749159";
import { D as _$$D } from "../905/261307";
import { $ as _$$$ } from "../905/724765";
import { t as _$$t2 } from "../905/789267";
import { YG, PK } from "../905/223565";
import { u as _$$u } from "../905/14084";
var _ = p;
export function $$B5(e) {
  let t = selectCurrentFile();
  let r = useDispatch();
  let a = selectCurrentUser();
  let c = null;
  let p = null;
  if (!e?.isDraftsMove) {
    let r = e?.fileInBrowser ?? t;
    c = r?.key ?? null;
    p = r?.editorType ? getProductAccessTypeOrDefault(r?.editorType) : null;
  }
  let h = e?.folderId ?? null;
  let f = e?.plan;
  let E = useSubscription(UpgradeEligibilityView({
    projectId: h,
    fileKey: c,
    planParentId: f?.id ?? null,
    planType: f?.type ?? null
  }), {
    enabled: !!a && (!!h || !!c || !!f)
  });
  let T = function (e, t) {
    let r = Z.map(t => ({
      projectId: e,
      permissionArguments: {
        licenseType: t.toString()
      }
    }));
    let n = useMultiSubscription(UpgradeEligibilityFolderView, r, {
      enabled: t && !!e
    });
    return useMemoStable(() => {
      let e = {};
      return (n.forEach((t, r) => {
        let n = Z[r];
        if (!n) return;
        let i = t.result.data;
        e[n] = {
          plan: getResourceDataOrFallback(i?.project?.resolvedHostOrConnectedPlanPermissions) || null,
          planUser: getResourceDataOrFallback(i?.project?.resolvedHostOrConnectedPlanUser) || null
        };
      }), n.some(e => "loading" === e.result.status)) ? null : e;
    }, [n]);
  }(h, !!a);
  let A = function (e, t, r, n, i) {
    let a = {};
    for (let t of Object.values(FProductAccessType)) n === DeepLinkType.NUX && e?.file ? a[t] = {
      plan: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanPermissions) || null,
      planUser: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanUser) || null
    } : (n === DeepLinkType.USER_SETTINGS || n === DeepLinkType.DOWNGRADE_EMAIL || n === DeepLinkType.LIFECYCLE_REUPGRADE_EMAIL) && e?.planUser && e.planPermissions ? a[t] = {
      plan: getResourceDataOrFallback(e.planPermissions) || null,
      planUser: getResourceDataOrFallback(e.planUser) || null
    } : a[t] = {
      plan: null,
      planUser: null
    };
    if (e?.file && r) {
      a[r] = {
        plan: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanPermissions) || null,
        planUser: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanUser) || null
      };
      r === FProductAccessType.DESIGN && (a[FProductAccessType.DEV_MODE] = {
        plan: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanDevModePermissions) || null,
        planUser: getResourceDataOrFallback(e.file.resolvedHostOrConnectedPlanUserDevMode) || null
      });
    } else if (e?.project && t) {
      let e = e => ({
        plan: i?.[e]?.plan || null,
        planUser: i?.[e]?.planUser || null
      });
      a[FProductAccessType.DESIGN] = e(FProductAccessType.DESIGN);
      a[FProductAccessType.WHITEBOARD] = e(FProductAccessType.WHITEBOARD);
      a[FProductAccessType.SLIDES] = e(FProductAccessType.SLIDES);
      a[FProductAccessType.DEV_MODE] = e(FProductAccessType.DEV_MODE);
      a[FProductAccessType.SITES] = e(FProductAccessType.SITES);
      a[FProductAccessType.FIGMAKE] = e(FProductAccessType.FIGMAKE);
      a[FProductAccessType.COOPER] = e(FProductAccessType.DESIGN);
    }
    return a;
  }(E.data, h, p, e?.entryPoint, T);
  let O = function ({
    licenseTypeToPlanAndPlanUser: e,
    loaded: t
  }) {
    if (!t) return {
      provisionalAccessEligibility: null,
      isValueReady: !1
    };
    let r = Object.values(FProductAccessType);
    let n = {};
    r.forEach(function (t) {
      let {
        plan
      } = e[t];
      let i = plan?.key.parentId;
      let a = plan?.key.type;
      if (i && a) {
        let e = plan.campfireProvisionalAccessEnabled;
        n[t] = {
          [ProductAccessTypeEnum.COLLABORATOR]: e && plan.isEligibleProvisionalAccessCollaborator,
          [ProductAccessTypeEnum.DEVELOPER]: e && plan.isEligibleProvisionalAccessDeveloper,
          [ProductAccessTypeEnum.EXPERT]: e && plan.isEligibleProvisionalAccessExpert,
          [ProductAccessTypeEnum.CONTENT]: e && plan.isEligibleProvisionalAccessExpert
        };
      } else n[t] = null;
    });
    return {
      provisionalAccessEligibility: n,
      isValueReady: !0
    };
  }({
    licenseTypeToPlanAndPlanUser: A,
    loaded: "loaded" === E.status || "disabled" === E.status
  });
  let P = useMemoStable(() => O.provisionalAccessEligibility, [O.provisionalAccessEligibility]);
  let D = useMemoStable(() => Object.fromEntries(Object.entries(A).map(([e, t]) => {
    let r = t.planUser?.provisionalLicenseTypes ?? [];
    let n = t.planUser?.seatTypeLicenseTypes ?? [];
    return [e, r.filter(e => !n.includes(e))];
  })), [A]);
  let k = function ({
    licenseTypeToPlanAndPlanUser: e,
    loaded: t
  }) {
    let r = _()(Object.values(e).map(e => e.plan?.key.parentId).filter(e => !!e)).map(e => ({
      orgId: e
    }));
    let n = useMultiSubscription(IdpUserView, r, {
      enabled: t
    });
    let i = n.every(e => "loaded" === e.result.status && e.result.data?.currentUser.idpUsersInOrg.status === "loaded");
    if (!t || !i) return null;
    let a = {};
    let s = {};
    n.forEach(e => {
      let t = getResourceDataOrFallback(e.result.data?.currentUser.idpUsersInOrg, []);
      let r = t.length > 0 && t[0]?.seatType !== null;
      s[e.args.orgId] = r;
    });
    Object.values(FProductAccessType).forEach(t => {
      let r = !1;
      let n = e[t]?.plan?.key.parentId;
      n && n in s && (r = s[n] ?? !1);
      a[t] = r;
    });
    return a;
  }({
    licenseTypeToPlanAndPlanUser: A,
    loaded: "loaded" === E.status || "disabled" === E.status
  });
  let M = useMemoStable(() => k, [k]);
  let F = function ({
    licenseTypeToPlanAndPlanUser: e,
    loaded: t
  }) {
    let r = _()(Object.values(e).filter(e => e.plan?.key.parentId && e.planUser?.permission).map(e => ({
      orgId: e.plan?.key.parentId || "",
      permission: e.planUser?.permission || ""
    })));
    let n = useMultiSubscription(ConfiguredUpgradeRequestModalView, r, {
      enabled: t
    });
    let i = n.every(e => "loaded" === e.result.status);
    if (!t || !i) return null;
    let a = {};
    let s = {};
    n.forEach(e => {
      let t = e.result.data?.currentUser?.baseOrgUser?.org;
      let r = t?.orgSharedSetting?.configuredUpgradeRequestSetting;
      let n = e.args.permission === FUserRoleType.GUEST;
      let i = r === UpgradeRequestSetting.ALL_USERS || r === UpgradeRequestSetting.MEMBERS && !n;
      s[e.args.orgId] = i;
    });
    Object.values(FProductAccessType).forEach(t => {
      let r = !1;
      let n = e[t]?.plan?.key.parentId;
      n && n in s && (r = s[n] ?? !1);
      a[t] = r;
    });
    return a;
  }({
    licenseTypeToPlanAndPlanUser: A,
    loaded: "loaded" === E.status || "disabled" === E.status
  });
  let j = useMemoStable(() => F, [F]);
  let U = useCallback(({
    afterUpgradeCallback: e,
    licenseType: t,
    upgradeReason: n,
    entryPoint: i
  }) => {
    let {
      plan,
      planUser
    } = A[t];
    let l = (t, r) => {
      e && (r ? e(t, r) : e(t));
    };
    let d = i === DevModeUI.BlockingModal || i === UISection.FileMoveUpsell && plan?.tier === FPlanNameType.PRO;
    return function ({
      onUpgrade: e,
      licenseType: t,
      dispatch: r,
      upgradeReason: n,
      entryPoint: i,
      plan: a,
      planUser: s,
      fileKey: l,
      onRequestWithProvisionalAccess: d,
      provisionalAccessEligibility: c,
      skipAutoPathwayConfirmationModal: u,
      isSeatManagedViaScim: p,
      folderId: _,
      curfContext: h
    }) {
      let m = V({
        licenseType: t,
        plan: a,
        provisionalAccessEligibility: c,
        isSeatManagedViaScim: p,
        planUser: s,
        entryPoint: i,
        curfContext: h
      });
      if (null === a) {
        reportError(_$$e.MONETIZATION_EXPANSION, Error("Error fetching plan in handleUpgrade"), {
          extra: {
            licenseType: t,
            fileKey: l,
            folderId: _,
            upgradePathway: m
          }
        });
        return () => r(VisualBellActions.enqueue({
          message: "Error fetching plan"
        }));
      }
      switch (m) {
        case _$$J.ADMIN_AUTO_PATHWAY:
          return $$z2({
            licenseType: t,
            dispatch: r,
            upgradeReason: n,
            upgradePathway: _$$J.ADMIN_AUTO_PATHWAY,
            plan: a,
            planUser: s,
            entryPoint: i,
            onUpgrade: e,
            fileKey: l,
            skipConfirmationModal: u,
            folderId: _
          });
        case _$$J.AUTO_PATHWAY:
          return $$z2({
            licenseType: t,
            dispatch: r,
            upgradeReason: n,
            upgradePathway: _$$J.AUTO_PATHWAY,
            plan: a,
            planUser: s,
            entryPoint: i,
            onUpgrade: e,
            fileKey: l,
            skipConfirmationModal: u,
            folderId: _
          });
        case _$$J.PROVISIONAL_PATHWAY:
        case _$$J.RE_REQUEST_PATHWAY:
        default:
          return $$Y3({
            licenseType: t,
            dispatch: r,
            entryPoint: i,
            plan: a,
            planUser: s,
            fileKey: l,
            onRequestWithProvisionalAccess: d,
            folderId: _,
            getIsEligibleForProvisionalAccess: e => H({
              licenseType: e,
              provisionalAccessEligibility: c,
              entryPoint: i
            })
          });
      }
    }({
      onUpgrade: l,
      onRequestWithProvisionalAccess: l,
      licenseType: t,
      dispatch: r,
      upgradeReason: n,
      plan,
      planUser,
      fileKey: c,
      entryPoint: i,
      provisionalAccessEligibility: P,
      skipAutoPathwayConfirmationModal: d,
      isSeatManagedViaScim: !!M && M[t],
      folderId: h,
      curfContext: j
    });
  }, [A, r, c, P, M, h, j]);
  let B = useCallback((t, r) => {
    let {
      plan
    } = A[t];
    let i = $(t, D, e?.entryPoint);
    return function ({
      licenseType: e,
      plan: t,
      canPerformAction: r,
      hasProvisionalAccess: n,
      entryPoint: i
    }) {
      return r || n ? _$$q.UPGRADE_NOT_NEEDED : t ? t.tier === FPlanNameType.STARTER || t.activeTrialLicenseTypes?.includes(e) && getFeatureFlags().product_trials_lg || !function (e, t, r) {
        let n = W({
          licenseType: e,
          entryPoint: r
        });
        if (!n) return !1;
        switch (n) {
          case ProductAccessTypeEnum.DEVELOPER:
            return t.needUpgradeDeveloper;
          case ProductAccessTypeEnum.COLLABORATOR:
            return t.needUpgradeCollaborator;
          case ProductAccessTypeEnum.EXPERT:
          case ProductAccessTypeEnum.CONTENT:
            return t.needUpgradeExpert;
          default:
            throwTypeError(n);
        }
      }(e, t, i) ? _$$q.UPGRADE_NOT_NEEDED : !function (e, t, r) {
        let n = W({
          licenseType: e,
          entryPoint: r
        });
        if (!n) return !1;
        switch (n) {
          case ProductAccessTypeEnum.DEVELOPER:
            return t.canUpgradeDeveloper;
          case ProductAccessTypeEnum.COLLABORATOR:
            return t.canUpgradeCollaborator;
          case ProductAccessTypeEnum.EXPERT:
            return t.canUpgradeExpert;
          case ProductAccessTypeEnum.CONTENT:
            return t.canUpgradeContent;
          default:
            throwTypeError(n);
        }
      }(e, t, i) ? _$$q.CANNOT_UPGRADE : _$$q.CAN_UPGRADE : _$$q.CANNOT_UPGRADE;
    }({
      licenseType: t,
      plan,
      canPerformAction: r,
      hasProvisionalAccess: i,
      entryPoint: e?.entryPoint
    });
  }, [A, D, e?.entryPoint]);
  let X = useCallback(t => {
    let r = K({
      licenseType: t,
      entryPoint: e?.entryPoint
    });
    let {
      planUser
    } = A[t];
    return G({
      licenseType: r,
      planUser
    });
  }, [A, e?.entryPoint]);
  let q = useCallback(t => {
    let r = K({
      licenseType: t,
      entryPoint: e?.entryPoint
    });
    let {
      planUser
    } = A[t];
    return function ({
      licenseType: e,
      planUser: t
    }) {
      return null !== G({
        licenseType: e,
        planUser: t
      });
    }({
      licenseType: r,
      planUser
    });
  }, [A, e?.entryPoint]);
  let J = useCallback(t => $(t, D, e?.entryPoint) ?? !1, [D, e?.entryPoint]);
  let Q = useCallback(t => {
    let {
      plan,
      planUser
    } = A[t];
    return V({
      licenseType: t,
      plan,
      planUser,
      provisionalAccessEligibility: P,
      entryPoint: e?.entryPoint,
      isSeatManagedViaScim: !!M && M[t],
      curfContext: j
    });
  }, [A, P, e?.entryPoint, M, j]);
  let ee = useCallback(() => "loading" === E.status || null === P || null === M || null === j || null === T, [E.status, P, M, j, T]);
  let et = useCallback(e => A[e], [A]);
  let er = useCallback(e => !!j && j[e], [j]);
  return {
    handleUpgrade: U,
    getUpgradeEligibility: B,
    getPendingRequest: X,
    getHasProvisionalAccess: J,
    hasPendingRequest: q,
    getUpgradePathway: Q,
    getIsUpgradeHandlerLoading: ee,
    getPlanAndPlanUser: et,
    getShouldShowCurf: er,
    getShouldShowScim: useCallback(e => !!M && M[e], [M]),
    getProvisionalAccessBanner: useCallback(t => {
      let r = $(t, D, e?.entryPoint);
      let n = !!j && j[t];
      return {
        showBanner: r,
        text: function (e, t) {
          if (t) switch (e) {
            case FProductAccessType.DEV_MODE:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.dev_mode");
            case FProductAccessType.DESIGN:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.design");
            case FProductAccessType.SLIDES:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.slides");
            case FProductAccessType.WHITEBOARD:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.figjam");
            case FProductAccessType.SITES:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.sites");
            case FProductAccessType.FIGMAKE:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.figmake");
            case FProductAccessType.COOPER:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.curf.design");
            default:
              return throwTypeError(e);
          } else switch (e) {
            case FProductAccessType.DEV_MODE:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.dev_mode");
            case FProductAccessType.DESIGN:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.design");
            case FProductAccessType.SLIDES:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.slides");
            case FProductAccessType.WHITEBOARD:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.figjam");
            case FProductAccessType.SITES:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.sites");
            case FProductAccessType.FIGMAKE:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.figmake");
            case FProductAccessType.COOPER:
              return getI18nString("fullscreen.toolbar_banner.provisional_access.design");
            default:
              return throwTypeError(e);
          }
        }(t, n),
        shouldShowCurf: n
      };
    }, [D, j, e?.entryPoint]),
    getIsEligibleForProvisionalAccess: useCallback(t => H({
      licenseType: t,
      provisionalAccessEligibility: P,
      entryPoint: e?.entryPoint
    }), [P, e?.entryPoint])
  };
}
function G({
  licenseType: e,
  planUser: t
}) {
  if (!t) return null;
  let r = t.pendingAccountTypeRequest;
  return r?.billableProduct?.licenseTypes.includes(e) && "pending" === r.status ? r : null;
}
function V({
  licenseType: e,
  plan: t,
  provisionalAccessEligibility: r,
  isSeatManagedViaScim: n,
  planUser: i,
  entryPoint: s,
  curfContext: o
}) {
  let l = W({
    licenseType: e,
    entryPoint: s
  });
  if (!l) return _$$J.RE_REQUEST_PATHWAY;
  let d = !1;
  if (!n) {
    let r = $$q0(i?.permission);
    let n = !!o && o[e];
    if (r && !n) return _$$J.ADMIN_AUTO_PATHWAY;
    let s = null;
    switch (l) {
      case ProductAccessTypeEnum.DEVELOPER:
        d = !!getResourceDataOrFallback(t?.canUpgradeAutoPathwayDeveloper);
        s = getResourceDataOrFallback(t?.upgradeApprovalSettingsDeveloper);
        break;
      case ProductAccessTypeEnum.COLLABORATOR:
        d = !!getResourceDataOrFallback(t?.canUpgradeAutoPathwayCollaborator);
        s = getResourceDataOrFallback(t?.upgradeApprovalSettingsCollaborator);
        break;
      case ProductAccessTypeEnum.EXPERT:
        d = !!getResourceDataOrFallback(t?.canUpgradeAutoPathwayExpert);
        s = getResourceDataOrFallback(t?.upgradeApprovalSettingsExpert);
        break;
      case ProductAccessTypeEnum.CONTENT:
        d = !!getResourceDataOrFallback(t?.canUpgradeAutoPathwayContent);
        s = getResourceDataOrFallback(t?.upgradeApprovalSettingsContent);
    }
    d || s !== zRx.INSTANT_APPROVAL || console.warn(`PlanUser ${i?.id} in plan ${t?.id} has instant-approval upgrade approval setting for billable product ${l} but did not pass permission for canUpgradeAutoPathway`);
  }
  return d ? _$$J.AUTO_PATHWAY : r && r[e]?.[l] ? _$$J.PROVISIONAL_PATHWAY : _$$J.RE_REQUEST_PATHWAY;
}
function H({
  licenseType: e,
  provisionalAccessEligibility: t,
  entryPoint: r
}) {
  let n = W({
    licenseType: e,
    entryPoint: r
  });
  return !!n && !!t?.[e]?.[n];
}
export function $$z2({
  licenseType: e,
  dispatch: t,
  upgradeReason: r,
  upgradePathway: n,
  plan: i,
  planUser: a,
  onUpgrade: s,
  onError: l,
  skipConfirmationModal: d,
  entryPoint: c,
  fileKey: u,
  folderId: p,
  extraErrorContext: _
}) {
  let m = W({
    licenseType: e,
    entryPoint: c
  });
  if (!m) {
    reportError(_$$e.MONETIZATION_EXPANSION, Error(`Invalid ${n === _$$J.ADMIN_AUTO_PATHWAY ? "admin self" : "auto"} upgrade: missing billable product key`), {
      extra: {
        licenseType: e,
        fileKey: u,
        folderId: p,
        entryPoint: r,
        upgradePathway: n,
        extraErrorContext: _ ?? null
      }
    });
    return () => t(VisualBellActions.enqueue({
      message: "Encountered an error"
    }));
  }
  let y = i?.key.type;
  let S = i?.key.parentId;
  if (null === i || !y || !S) {
    reportError(_$$e.MONETIZATION_EXPANSION, Error("Error fetching plan in handleUpgradeAutoPathway"), {
      extra: {
        licenseType: e,
        fileKey: u,
        folderId: p,
        planId: S,
        planType: y,
        upgradePathway: n,
        extraErrorContext: _ ?? null
      }
    });
    return () => t(VisualBellActions.enqueue({
      message: "Error fetching plan"
    }));
  }
  let v = {
    planType: i.key.type,
    planParentId: i.key.parentId,
    planTier: i.tier,
    isOrgGuest: a?.permission === FMemberRoleType.GUEST && i.key.type === FOrganizationLevelType.ORG
  };
  let A = e => {
    e.message.includes("Org access needed") ? (t(AUTH_INIT({
      origin: "edit_button_click",
      formState: AuthFlowStep.JOIN_ORG,
      redirectUrl: customHistory.location.pathname
    })), t(showModalHandler({
      type: AuthModal,
      data: {}
    }))) : l ? l(e) : t(VisualBellActions.enqueue({
      message: e.data?.message || "Encountered an error",
      error: !0
    }));
  };
  if (c === DeepLinkType.NUX) return async i => {
    try {
      await _$$R.upgrade(y, S, r, n, m, u, p, e);
      s(i, {
        autoApproved: !0
      });
      t(showModalHandler({
        type: _$$u,
        data: {
          autoApproved: !0,
          seatType: m
        }
      }));
    } catch (e) {
      A(e);
    }
  };
  if (c === DeepLinkType.ASK_TO_EDIT_ONE_CLICK) return async a => {
    try {
      t(showModalHandler({
        type: _$$$,
        data: {
          planName: i?.name
        }
      }));
      await _$$R.upgrade(y, S, r, n, m, u, p, e);
      s(a, {
        autoApproved: !0
      });
    } catch (e) {
      t(hideSpecificModal(_$$$));
      A(e);
    }
  };
  if (d) return async t => {
    try {
      await _$$R.upgrade(y, S, r, n, m, u, p, e);
      s(t);
    } catch (e) {
      A(e);
    }
  };
  let x = {
    licenseType: e,
    entryPoint: c,
    billableProductKey: m
  };
  y === FOrganizationLevelType.ORG ? x.orgId = S : y === FOrganizationLevelType.TEAM && (x.teamId = S);
  let N = i?.tier === FPlanNameType.STUDENT;
  let w = n === _$$J.ADMIN_AUTO_PATHWAY ? _$$D : _$$t2;
  return () => {
    t(showModalHandler({
      type: w,
      showModalsBeneath: c === DeepLinkType.USER_SETTINGS,
      data: {
        licenseType: e,
        trackingProperties: x,
        onRequest: async (t, i) => {
          try {
            await _$$R.upgrade(y, S, r, n, m, u, p, e);
            i();
            s(t);
          } catch (e) {
            i();
            A(e);
          }
        },
        planName: i.name,
        entryPoint: c,
        isEduTeam: N,
        planDataForSocialProof: v
      }
    }));
  };
}
function W({
  licenseType: e,
  entryPoint: t
}) {
  let r = K({
    licenseType: e,
    entryPoint: t
  });
  return getMinimumBundle(r);
}
function K({
  licenseType: e,
  entryPoint: t
}) {
  return t === DeepLinkType.PUBLISH_SITES && (e === FProductAccessType.SITES || e === FProductAccessType.FIGMAKE) ? FProductAccessType.SITES : e;
}
export function $$Y3({
  licenseType: e,
  dispatch: t,
  entryPoint: r,
  plan: n,
  planUser: i,
  fileKey: a,
  onRequestWithProvisionalAccess: s,
  folderId: l,
  getIsEligibleForProvisionalAccess: d
}) {
  let c = W({
    licenseType: e,
    entryPoint: r
  });
  if (!c) {
    reportError(_$$e.MONETIZATION_EXPANSION, Error("Invalid upgrade request: missing billable product key"), {
      extra: {
        licenseType: e,
        fileKey: a,
        folderId: l,
        entryPoint: r
      }
    });
    return () => t(VisualBellActions.enqueue({
      message: "Encountered an error"
    }));
  }
  let u = n?.key.type;
  let p = n?.key.parentId;
  return null !== n && u && p ? r === DeepLinkType.NUX ? async e => {
    try {
      let r = await _$$b({
        dispatch: t,
        fileKey: a ?? null,
        folderId: l ?? null,
        plan: n,
        seatType: c
      });
      t(showModalHandler({
        type: _$$u,
        data: {
          autoApproved: !1,
          seatType: c,
          requestId: r
        }
      }));
      s(e, {
        autoApproved: !1,
        requestId: r
      });
    } catch (e) {
      t(VisualBellActions.enqueue({
        message: "Error fetching plan"
      }));
    }
  } : u === FOrganizationLevelType.ORG ? o => {
    t(showModalHandler({
      type: YG,
      showModalsBeneath: r === DeepLinkType.USER_SETTINGS,
      data: {
        planName: n?.name,
        planParentId: p,
        planTier: n.tier,
        planUserPermission: i?.permission ?? FMemberRoleType.GUEST,
        licenseType: e,
        seatTypeKey: c,
        fileKey: a,
        folderId: l,
        entryPoint: r,
        getIsEligibleForProvisionalAccess: d,
        actionOnProvisionalAccessGranted: () => s(o)
      }
    }));
  } : u === FOrganizationLevelType.TEAM ? o => {
    t(showModalHandler({
      type: PK,
      showModalsBeneath: r === DeepLinkType.USER_SETTINGS,
      data: {
        planName: n?.name,
        planParentId: p,
        planTier: n.tier,
        planUserPermission: i?.permission ?? FMemberRoleType.GUEST,
        licenseType: e,
        seatTypeKey: c,
        fileKey: a,
        folderId: l,
        entryPoint: r,
        actionOnProvisionalAccessGranted: () => s(o),
        getIsEligibleForProvisionalAccess: d
      }
    }));
  } : () => t(VisualBellActions.enqueue({
    message: "Encountered an error"
  })) : (reportError(_$$e.MONETIZATION_EXPANSION, Error("Error fetching plan in handleUpgradeManualPathway"), {
    extra: {
      licenseType: e,
      fileKey: a,
      folderId: l
    }
  }), () => t(VisualBellActions.enqueue({
    message: "Error fetching plan"
  })));
}
function $(e, t, r) {
  let n = K({
    licenseType: e,
    entryPoint: r
  });
  return t?.[e]?.includes(n) ?? !1;
}
export function $$X1(e) {
  let t = useSubscription(UserLicensesForFile({
    fileKey: e.fileKey,
    userId: e.userId
  }), {
    enabled: !!(e.fileKey && e.userId && e.enabled)
  });
  let r = useMemo(() => e.enabled ? resourceUtils.from(t).transform(e => {
    let t = [...(e.file?.currentPlanUser?.seatTypeLicenseTypes ?? []), ...(e.file?.currentPlanUser?.provisionalLicenseTypes ?? [])];
    t.push(...(e.file?.connectedPlanUser?.seatTypeLicenseTypes ?? []), ...(e.file?.connectedPlanUser?.provisionalLicenseTypes ?? []));
    getFeatureFlags().product_trials_lg && (t.push(...(e.file?.plan?.activeTrialLicenseTypes ?? [])), t.push(...(e.file?.connectedPlan?.activeTrialLicenseTypes ?? [])));
    return {
      availableLicenses: _()(t)
    };
  }) : resourceUtils.loaded(null), [e.enabled, t]);
  return {
    userLacksLicenseAccess: useCallback(e => {
      if (!r || "loaded" !== r.status) return null;
      if (e === FFileType.COOPER) return !1;
      let t = getProductAccessTypeOrDefault(e);
      return !r.data?.availableLicenses?.includes(t);
    }, [r])
  };
}
export function $$q0(e) {
  return e === FMemberRoleType.ADMIN;
}
export function $$J4(e) {
  let t = useDispatch();
  let r = selectCurrentFile();
  let {
    getPlanAndPlanUser,
    getIsEligibleForProvisionalAccess
  } = $$B5();
  let {
    plan,
    planUser
  } = getPlanAndPlanUser(getProductAccessTypeOrDefault(r?.editorType || null));
  return {
    curfCtaHandler: useCallback(() => {
      r && planUser && plan && t(showModalHandler({
        type: YG,
        data: {
          planParentId: plan.key.parentId,
          planTier: plan.tier,
          planUserPermission: planUser.permission,
          licenseType: e,
          fileKey: r.key,
          folderId: r.folderId || void 0,
          entryPoint: UISection.CurfProvisionalAccessBanner,
          getIsEligibleForProvisionalAccess
        },
        showModalsBeneath: !0
      }));
    }, [t, r, plan, planUser, e, getIsEligibleForProvisionalAccess]),
    curfCtaLabel: getI18nString("fullscreen.toolbar_banner.provisional_access.curf.cta")
  };
}
let Z = [FProductAccessType.DESIGN, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES, FProductAccessType.DEV_MODE, FProductAccessType.SITES, FProductAccessType.FIGMAKE];
export const Cy = $$q0;
export const KI = $$X1;
export const Y9 = $$z2;
export const fm = $$Y3;
export const mT = $$J4;
export const wH = $$B5;