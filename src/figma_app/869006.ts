import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useContext, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { LoadingSpinner } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { V as _$$V, $ as _$$$ } from "../905/355181";
import { DeepLinkType } from "../905/15667";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { BI } from "../figma_app/546509";
import { useCurrentFile, selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FProductAccessType, FFileType, FOrganizationLevelType } from "../figma_app/191312";
import { OpenEditorFileData, EditButtonView } from "../figma_app/43951";
import { isExportRestricted } from "../figma_app/12796";
import { wH } from "../figma_app/680166";
import { ApprovalStatusEnum } from "../figma_app/736948";
import { J as _$$J, q as _$$q } from "../905/202542";
import { getRumLoggingConfig } from "../905/16237";
import { TrackingProvider } from "../figma_app/831799";
import { KindEnum } from "../905/129884";
import { A as _$$A } from "../3850/566892";
import { E as _$$E } from "../905/370356";
import { TH } from "../figma_app/95367";
import { RR } from "../figma_app/307841";
import { useOneClickAskToEditExperiment } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { e0 } from "../905/696396";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { n2 } from "../figma_app/478006";
import { useCurrentPlanUser } from "../figma_app/465071";
import { i as _$$i } from "../905/46262";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { e6 } from "../figma_app/617427";
import { w as _$$w } from "../905/281010";
import { rq } from "../905/425180";
import { F_, EL } from "../905/858282";
import { qm, q0 } from "../figma_app/431689";
function C(e) {
  return jsx("div", {
    children: jsx(_$$V, {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": e.toolTipMessage,
      "data-onboarding-key": e.onboardingKey,
      variant: e.variant,
      "data-tooltip-show-above": !0,
      disabled: !0,
      width: "fill-parent",
      children: e.text
    })
  });
}
function w(e) {
  if (e.hideViewOnlyText && !e.hasPendingRequest) return null;
  let t = e.hasPendingRequest ? e.pendingToolTipMessage : e.isRestrictedView ? getI18nString("fullscreen.filename_view.viewers-cannot-copy-or-share") : void 0;
  return jsx(C, {
    variant: e.variant,
    svg: e.isRestrictedView && !e.hasPendingRequest ? _$$A : void 0,
    toolTipMessage: t,
    onboardingKey: e.isDisabledView ? "rcs-figjam-disabled-by-org" : void 0,
    text: getI18nString(e.hasPendingRequest ? "fullscreen.toolbar.request.request_sent" : "fullscreen.filename_view.view-only")
  });
}
w.displayName = "ViewOnlyText";
function R({
  fileKey: e,
  buttonVariant: t,
  recordingKey: r,
  isDevMode: s
}) {
  let l = useDispatch();
  let [d, p] = useState(!1);
  let _ = selectCurrentUser();
  let h = useSubscription(OpenEditorFileData, {
    fileKey: e
  }).data?.file;
  let m = getRumLoggingConfig();
  if (!h) return jsx(Fragment, {});
  let g = async () => {
    (await _$$E(l, e)) && p(!0);
  };
  let E = renderI18nText("fullscreen.toolbar.request.ask_to_edit");
  return jsx(TrackingProvider, {
    name: "Edit Request Button Shown",
    trackingOptions: m,
    properties: {
      fileKey: e,
      isDevMode: s,
      buttonVariant: t,
      teamId: h.teamId,
      orgId: h.parentOrgId
    },
    children: d ? jsx(w, {
      isRestrictedView: !1,
      hasPendingRequest: !0,
      variant: t
    }) : jsx(Fragment, {
      children: jsx("div", {
        "data-onboarding-key": "request_edit_view_onboarding_key",
        children: jsx(_$$V, {
          "aria-live": "polite",
          "data-tooltip": getI18nString("fullscreen.toolbar.pending-edit-request-tooltip"),
          "data-tooltip-show-above": !0,
          "data-tooltip-timeout-delay": 15,
          "data-tooltip-type": KindEnum.TEXT,
          onClick: g,
          recordingKey: r,
          trackingEventName: "Edit Request Button Clicked",
          trackingOptions: m,
          trackingProperties: {
            productType: h.editorType,
            fileKey: e,
            userId: _?.id,
            teamId: h.teamId,
            orgId: h.parentOrgId
          },
          variant: t,
          width: "fill-parent",
          children: E
        })
      })
    })
  });
}
function V(e) {
  let t = !useIsProgressBarHiddenOrLocked();
  let r = useContext(TH);
  let a = e.upgradePathway === _$$J.RE_REQUEST_PATHWAY;
  let s = useOneClickAskToEditExperiment(r && e.licenseType === FProductAccessType.DESIGN);
  let o = e.upgradePathway === _$$J.AUTO_PATHWAY || e.upgradePathway === _$$J.ADMIN_AUTO_PATHWAY;
  let l = RR({
    preferOpenFilePlan: !0
  });
  let d = s();
  let p = d ? e.oneClickHandler : e.onClick;
  let _ = a ? getI18nString("fullscreen.toolbar.request.ask_to_edit") : getI18nString("fullscreen.toolbar.start_editing");
  d && (_ = o ? getI18nString("1_click_expansion.upgrade_to_full_seat") : getI18nString("1_click_expansion.request_full_seat"));
  (function ({
    buttonLabel: e,
    licenseType: t,
    trackingDescriptor: r
  }) {
    let n = useRef(!1);
    let a = useCurrentPlanUser("useTrackUsersViewingViewOnlyToolbeltBanner").unwrapOr(null);
    let s = a?.userId;
    let o = useAtomWithSubscription(n2);
    useEffect(() => {
      !n.current && o && s && (n.current = !0, analyticsEventManager.trackDefinedEvent("activation.users_viewing_view_only_toolbelt_banner_with_plan_request_upgrade_view", {
        licenseType: t,
        userId: s,
        buttonLabel: e,
        trackingDescriptor: r
      }));
    }, [e, t, r, s, o]);
  })({
    buttonLabel: _,
    licenseType: e.licenseType,
    trackingDescriptor: a ? "ask_to_edit" : "start_editing"
  });
  let h = getRumLoggingConfig();
  return t ? jsx(TrackingProvider, {
    name: e0.FILE_REQUEST_UPGRADE_BUTTON,
    trackingOptions: h,
    properties: {
      fileKey: e.fileKey,
      planType: e.planType,
      planId: e.planId,
      licenseType: e.licenseType,
      upgradePathway: e.upgradePathway,
      isBillingRemodelEnabled: l
    },
    children: jsx("div", {
      children: jsx(_$$V, {
        onClick: p,
        variant: e.variant,
        recordingKey: e.recordingKey,
        width: "fill-parent",
        trackingOptions: h,
        trackingProperties: {
          trackingDescriptor: d ? UpgradeAction.ASK_TO_EDIT_ONE_CLICK : UpgradeAction.ASK_TO_EDIT
        },
        children: _
      })
    })
  }) : null;
}
function z(e) {
  return jsx(TrackingProvider, {
    name: e0.FILE_PENDING_EDIT_ROLE_REQUEST_LABEL,
    children: jsx(C, {
      variant: e.variant,
      toolTipMessage: e.pendingToolTipMessage,
      text: getI18nString("fullscreen.filename_view.view-only")
    })
  });
}
function J({
  targetKey: e,
  isShowing: t,
  onClose: r,
  onClick: i
}) {
  let a = {
    type: "button",
    label: renderI18nText("fullscreen.toolbar.send_reminder"),
    onClick: i,
    ctaTrackingDescriptor: UpgradeAction.NUDGE_ACCOUNT_TYPE_REQUEST
  };
  return jsx(rq, {
    arrowPosition: F_.TOP,
    clickOutsideToHide: !0,
    description: jsx("div", {
      className: cssBuilderInstance.pr16.$,
      children: getI18nString("fullscreen.toolbar.if_you_re_still_waiting_to_edit_you_can_send_your_admins_a_reminder_to_review_your_request")
    }),
    disableHighlight: !0,
    emphasized: !0,
    hideCloseButton: !0,
    isShowing: t,
    onClose: r,
    primaryCta: a,
    shouldCenterArrow: EL.FALLBACK,
    shouldDisableAnimation: !0,
    targetKey: e,
    testId: "nudge-cta-callout",
    trackingContextName: e0.REQUEST_SENT_NUDGE_POPOVER
  });
}
function Z(e) {
  let {
    pendingUpgradeRequest,
    disableAutoAppearingTooltips
  } = e;
  let [a, s] = useState(!1);
  let {
    requestCanBeNudged,
    requestHasBeenNudged,
    upgradeRequestId,
    showNudgeEligibility
  } = qm(pendingUpgradeRequest);
  let {
    nudgeUpgradeRequest
  } = q0();
  useEffect(() => {
    disableAutoAppearingTooltips || s(showNudgeEligibility);
  }, [disableAutoAppearingTooltips, showNudgeEligibility]);
  let _ = getI18nString("fullscreen.toolbar.we_ve_sent_your_request_to_your_team_s_admins_we_ll_let_you_know_when_they_respond");
  let h = getI18nString("fullscreen.toolbar.we_ve_sent_your_admins_a_reminder_we_ll_let_you_know_as_soon_as_they_respond");
  let m = requestHasBeenNudged ? h : _;
  let g = useMemo(() => {
    if (!a && !requestCanBeNudged) return m;
  }, [m, requestCanBeNudged, a]);
  let f = "account-request-type-nudge-key";
  let E = renderI18nText("fullscreen.toolbar.request.request_sent");
  return jsx(TrackingProvider, {
    name: e0.REQUEST_SENT_NUDGE_STATUS,
    children: jsxs("div", {
      className: cssBuilderInstance.relative.$,
      onMouseEnter: () => !a && requestCanBeNudged ? s(!0) : null,
      children: [jsx(e6, {
        disabled: !0,
        type: "button",
        className: "pending_upgrade_request_view--buttonToolbarTertiary--Cb3ED",
        htmlAttributes: {
          "data-testid": "pending-upgrade-request-button",
          "data-onboarding-key": f,
          "data-tooltip": g,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip-show-above": !0,
          "data-tooltip-max-width": 200
        },
        children: jsx("span", {
          children: E
        })
      }, f), jsx(J, {
        targetKey: f,
        isShowing: a,
        onClick: () => {
          s(!1);
          nudgeUpgradeRequest(upgradeRequestId);
        },
        onClose: () => {
          s(!1);
          showNudgeEligibility && _$$w.dismissNudgeRequestBadge({
            request_id: upgradeRequestId
          });
        }
      })]
    })
  });
}
export let $$Q0 = "edit_button_upgrading_to_edit";
export var $$ee2 = (e => (e.EDIT_BUTTON_LOADING = "editButtonLoading", e.PLAN_REQUEST_UPGRADE = "planRequestUpgrade", e.PENDING_UPGRADE_REQUEST = "pendingUpgradeRequest", e.REQUEST_EDIT_VIEW = "requestEditView", e.PENDING_EDIT_ROLE_REQUEST = "pendingEditRoleRequest", e.VIEW_ONLY = "viewOnly", e))($$ee2 || {});
export function $$et3(e) {
  let t = e.file;
  let r = selectCurrentUser();
  let n = useMemo(() => !!t && isExportRestricted(t), [t]);
  let d = useSelector(({
    openFile: e
  }) => e?.org?.name);
  let u = t.canEdit;
  let v = useCurrentFile();
  let A = !!(v && v.editorType === FFileType.WHITEBOARD && v.org?.figjamDisabledAt);
  let x = t.editorType === FFileType.SLIDES && !!getResourceDataOrFallback(t.org?.isSlidesDisabled);
  let N = t.editorType === FFileType.SITES && (!!t.org?.isSitesDisabled || !!t?.team?.studentTeamAt);
  let C = t.editorType === FFileType.COOPER && !!t.org?.isCooperDisabled;
  let w = A || x || N || C;
  let O = isDevHandoffEditorType();
  let {
    handleUpgrade,
    getUpgradeEligibility,
    getPendingRequest,
    getUpgradePathway,
    getIsUpgradeHandlerLoading,
    getHasProvisionalAccess
  } = wH();
  let F = useSubscription(EditButtonView, {
    fileKey: t.key,
    orgId: t.parentOrgId
  });
  let j = BI();
  if ("loading" === F.status) return {
    type: "editButtonLoading"
  };
  if ("loaded" === F.status) {
    let e = t.org?.inviteWhitelist?.guestInviteSetting === ApprovalStatusEnum.REQUIRE_APPROVAL && !!F.data.orgJoinRequest;
    let i = F.data.file?.fileRoleRequests.find(e => e.requesterUserId === r?.id);
    j?.updateHasPendingEditRequest && j.updateHasPendingEditRequest(!!i);
    let a = getI18nString("fullscreen.toolbar.pending-org-join-request-tooltip", {
      orgName: d || ""
    });
    let o = getI18nString("fullscreen.toolbar.pending-edit-request-tooltip");
    let l = e ? a : i ? o : void 0;
    if (null === t.editorType) return null;
    if (getIsUpgradeHandlerLoading()) return {
      type: "editButtonLoading"
    };
    if (w) return {
      type: "viewOnly",
      isRestrictedView: n,
      isDisabledView: w,
      hasPendingRequest: !1
    };
    let _ = getProductAccessTypeOrDefault(t.editorType);
    let m = getHasProvisionalAccess(_);
    let g = getUpgradeEligibility(_, u);
    if (!F.data.file?.currentPlanUser) {
      if (e) return {
        type: "viewOnly",
        isRestrictedView: n,
        isDisabledView: w,
        pendingToolTipMessage: a,
        hasPendingRequest: e
      };
      if (F.data.file?.mustRequestEditorRoleToEdit) return {
        type: "requestEditView",
        fileKey: t.key,
        isDevMode: O
      };
      if (getFeatureFlags().campfire_pending_edit_role_request && i) return {
        type: "pendingEditRoleRequest",
        pendingToolTipMessage: o
      };
    }
    switch (g) {
      case _$$q.CAN_UPGRADE:
        let f = getUpgradePathway(_);
        return {
          type: "planRequestUpgrade",
          upgrade: handleUpgrade({
            afterUpgradeCallback: () => {},
            licenseType: _,
            upgradeReason: _$$i.EDIT_BUTTON,
            entryPoint: DeepLinkType.ASK_TO_EDIT
          }),
          upgradeOneClick: handleUpgrade({
            afterUpgradeCallback: () => {},
            licenseType: _,
            upgradeReason: _$$i.EDIT_BUTTON,
            entryPoint: DeepLinkType.ASK_TO_EDIT_ONE_CLICK
          }),
          upgradePathway: f,
          fileKey: t.key,
          planType: t.parentOrgId ? FOrganizationLevelType.ORG : FOrganizationLevelType.TEAM,
          planId: t.parentOrgId ?? t.teamId,
          licenseType: _
        };
      case _$$q.CANNOT_UPGRADE:
      case _$$q.UPGRADE_NOT_NEEDED:
        let y = getPendingRequest(_);
        if (y && !m) return {
          type: "pendingUpgradeRequest",
          pendingUpgradeRequest: y,
          editorType: t.editorType,
          isRestrictedView: n,
          isDisabledView: !!A,
          pendingToolTipMessage: l,
          orgId: t.parentOrgId,
          hasPendingRequest: !0
        };
        if (F.data.file?.mustRequestEditorRoleToEdit) return {
          type: "requestEditView",
          fileKey: t.key,
          isDevMode: O
        };
        if (i) return {
          type: "pendingEditRoleRequest",
          pendingToolTipMessage: m ? getI18nString("fullscreen.toolbar.we_ve_sent_your_request_to_the_file_s_owner_you_can_edit_other_files_up_to_3_days_while_admins_review_your_request") : getI18nString("fullscreen.toolbar.we_ve_sent_your_request_to_the_file_s_owner_you_can_create_and_edit_other_files_in_the_meantime")
        };
        if (u) break;
        return {
          type: "viewOnly",
          isRestrictedView: n,
          isDisabledView: w,
          pendingToolTipMessage: l,
          hasPendingRequest: !1
        };
    }
  }
  return null;
}
export function $$er1(e) {
  let t = selectCurrentFile();
  return t ? jsx(en, {
    file: t,
    viewOnly: e.viewOnly,
    variant: e.variant,
    recordingKey: e.recordingKey,
    hideViewOnlyText: e.hideViewOnlyText,
    disableAutoAppearingTooltips: e.disableAutoAppearingTooltips
  }) : null;
}
function en(e) {
  let t = $$et3({
    file: e.file,
    viewOnly: e.viewOnly
  });
  return t ? jsx(ei, {
    viewPermission: t,
    variant: e.variant,
    recordingKey: e.recordingKey,
    hideViewOnlyText: e.hideViewOnlyText,
    disableAutoAppearingTooltips: e.disableAutoAppearingTooltips
  }) : null;
}
function ei({
  viewPermission: e,
  variant: t,
  recordingKey: r,
  hideViewOnlyText: i,
  disableAutoAppearingTooltips: a
}) {
  switch (e.type) {
    case "editButtonLoading":
      return jsx("div", {
        className: "view_permission--editButtonLoading--T6ehY",
        children: jsxs(_$$$, {
          "aria-label": getI18nString("fullscreen.toolbar.edit-file-button-loading-aria-label"),
          disabled: !0,
          variant: t,
          recordingKey: r,
          width: "fill-parent",
          children: [jsx("span", {
            className: "view_permission--editButtonTextHidden--QK3P3",
            children: getI18nString("fullscreen.toolbar.edit-file-button")
          }), jsx(LoadingSpinner, {
            className: "view_permission--editButtonLoadingSpinner--itMwO"
          })]
        })
      });
    case "requestEditView":
      return jsx(R, {
        fileKey: e.fileKey,
        isDevMode: e.isDevMode,
        buttonVariant: t,
        recordingKey: r
      });
    case "pendingUpgradeRequest":
      {
        let r = {
          ...e,
          variant: t,
          hideViewOnlyText: i,
          disableAutoAppearingTooltips: a
        };
        return jsx(Z, {
          ...r
        });
      }
    case "viewOnly":
      return jsx(w, {
        isRestrictedView: e.isRestrictedView,
        isDisabledView: e.isDisabledView,
        pendingToolTipMessage: e.pendingToolTipMessage,
        hasPendingRequest: e.hasPendingRequest,
        variant: t,
        hideViewOnlyText: i
      });
    case "planRequestUpgrade":
      return jsx(V, {
        onClick: e.upgrade,
        oneClickHandler: e.upgradeOneClick,
        variant: t,
        upgradePathway: e.upgradePathway,
        fileKey: e.fileKey,
        planType: e.planType,
        planId: e.planId,
        licenseType: e.licenseType
      });
    case "pendingEditRoleRequest":
      return jsx(z, {
        variant: t,
        pendingToolTipMessage: e.pendingToolTipMessage
      });
  }
}
export const $5 = $$Q0;
export const RJ = $$er1;
export const Kw = $$ee2;
export const kU = $$et3;