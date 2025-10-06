import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { isIpadDevice, isMobileUA } from "../figma_app/778880";
import { useAtomWithSubscription, createRemovableAtomFamily, atom } from "../figma_app/27355";
import { getFeatureFlags } from "../905/601108";
import s from "classnames";
import { ButtonBasePrimaryTracked, BigButtonPrimaryTracked, BigButtonSecondaryTracked, trackedButtonClickHandler, Spacing } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { CR, NJ } from "../figma_app/419216";
import { TrackingProvider, TrackedDiv } from "../figma_app/831799";
import { E as _$$E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily, fileBrowserOnboardedAtom, userFlagsAtom, userFlagAtomFamily } from "../figma_app/545877";
import { N as _$$N } from "../figma_app/268271";
import { OnboardingSequence } from "../905/152487";
import { LB2, I3H, Ob5, X5_, USq, sqw, yjU, MwQ, NdL, bGx, Qlc, I$z, Kgs, BTz, dYj, Ult, kmq, Sgd, Wb3 } from "../figma_app/6204";
import { useSingleEffect } from "../905/791079";
import { tH as _$$tH, mp, Ot, d2, Vm, Fy, Qm, zN } from "../figma_app/579169";
import { f as _$$f } from "../1250/46310";
import { xZ } from "../1250/927871";
import { useEffect, useState, useCallback, useMemo, createElement, useRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { getStorage } from "../905/657224";
import { useLatestRef } from "../figma_app/922077";
import { buildStaticUrl, buildUploadUrl, getInitialOptions } from "../figma_app/169182";
import { SIGNED_UP_FROM_OPEN_SESSIONS } from "../905/862321";
import { isResourceHubEnabled } from "../figma_app/275462";
import { postUserFlag } from "../905/985254";
import { A as _$$A } from "../905/956262";
import { UC, uA } from "../figma_app/33126";
import { of, mW } from "../figma_app/797994";
import { hasAnyOnboardingFlag } from "../figma_app/242339";
import { OrgPersonal } from "../905/696396";
import { U as _$$U } from "../905/455766";
import { OnboardingRenderFrame } from "../905/284399";
import { Rx, IY, q9 } from "../1556/690522";
import { OverlayType, OnTheme } from "../figma_app/450829";
import { S as _$$S } from "../1556/805548";
import { UpgradeAction } from "../905/370443";
import { X as _$$X } from "../905/482718";
import { Ui3PositionType, NotModalType } from "../905/11928";
import { EventShield } from "../905/821217";
import { pP, nz as _$$nz } from "../1250/214905";
import { l as _$$l } from "../1250/135829";
import { uZ, Jo } from "../figma_app/544879";
import { vM, J5 } from "../figma_app/692865";
import { U as _$$U2 } from "../1250/501209";
import { Gv, ak, iy, GV } from "../figma_app/532170";
import { debugState } from "../905/407919";
import { createAndOpenFile } from "../905/738636";
import { getNewFileConfig } from "../905/766303";
import { TabOpenBehavior } from "../figma_app/915202";
import { c4, Au } from "../figma_app/518077";
import { K as _$$K } from "../1250/166809";
import { OC } from "../1250/791136";
import { WithTrackedButton } from "../figma_app/617427";
import { ImageOverlayComponent } from "../905/129046";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { alwaysTrue } from "../figma_app/863319";
import { orgSubscriptionAtom } from "../905/296690";
import { RG } from "../figma_app/684446";
import { sortByPropertyWithOptions, shuffle } from "../figma_app/656233";
import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { transformAtom } from "../905/401885";
import { g as _$$g } from "../1250/695038";
import { useCurrentUserOrg, useCurrentUserOrgId } from "../905/845253";
import { WorkspaceSelectorView, TeamFileCountsByTeamId } from "../figma_app/43951";
import { useCurrentPlanUser, useTeamPlanFeatures } from "../figma_app/465071";
import { orgUserService } from "../figma_app/124713";
import { trackEventAnalytics } from "../905/449184";
import { tM as _$$tM, vd as _$$vd } from "../figma_app/60079";
import { CloseButton } from "../905/17223";
import { P as _$$P } from "../905/347284";
import { x as _$$x } from "../7021/270993";
import { z6 } from "../figma_app/805373";
import { ModalView } from "../figma_app/918700";
import { P as _$$P2 } from "../1250/527167";
import { j0 } from "../1250/524544";
import { U as _$$U3 } from "../1250/641541";
import { FY } from "../figma_app/24841";
import { getVisibleTheme } from "../905/640017";
import { d as _$$d } from "../905/647058";
import { OrganizationType } from "../905/833838";
import { WZ } from "../905/893645";
import { PositioningStrategy, ArrowPosition } from "../905/858282";
import { customHistory } from "../905/612521";
import { TextWithTruncation } from "../905/984674";
import { OnboardingModal } from "../905/425180";
import { xX, j9 } from "../figma_app/211146";
import { getSelectedView } from "../figma_app/386952";
import { selectUserFlag } from "../905/940356";
import { ng as _$$ng, u_, $g, Jy, v$ } from "../figma_app/205827";
import { AutoLayout } from "../905/470281";
import { In } from "../905/672640";
import { SvgComponent } from "../905/714743";
import { A as _$$A2 } from "../svg/831814";
import { hideModal, showModalHandler } from "../905/156213";
import { bE } from "../figma_app/375098";
import { STANDARD_LIMIT, PRIMARY_LIMIT, hasTeamPaidAccess } from "../figma_app/345997";
import { Mm, iX, bo, h3, $Q, TB, PG, NN } from "../5885/399780";
import { registerModal } from "../905/102752";
import { A as _$$A3 } from "../svg/219958";
import { A as _$$A4 } from "../svg/638742";
import { FlashActions } from "../905/573154";
import { selectViewAction } from "../905/929976";
import { cw, g_ } from "../5885/925885";
import { TeamAvatar } from "../905/590952";
import { AvatarSize } from "../905/566881";
import { startProUpgradeFlowThunk } from "../figma_app/482142";
import { X as _$$X2 } from "../5885/331878";
import { getCookieOrStorage } from "../905/414007";
import { COOKIE_NAME, clearFigmaPcModalCookie } from "../figma_app/598111";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { Hj } from "../figma_app/336229";
import { useMultiSubscription } from "../figma_app/288654";
import { I as _$$I } from "../c5e2cae0/718426";
import { selectPermissionsState } from "../figma_app/212807";
import { canEditTeam } from "../figma_app/642025";
import { b0 } from "../905/763690";
import { useResourceRouteParams, useResourceFuid, ResourceHubHomeRouteClass } from "../figma_app/979714";
import { Fz } from "../1250/610336";
import { P as _$$P4 } from "../1250/15189";
import { HH } from "../7222/418961";
import { p as _$$p2 } from "../figma_app/353099";
import { A as _$$A5 } from "../1250/487166";
import { Ay as _$$Ay2 } from "../1250/615231";
import { useFBGNavigationUpdatesTreatment, FBGNavigationUpdatesVariants } from "../figma_app/297957";
import { P as _$$P5 } from "../1250/232298";
import { A as _$$A6 } from "../1250/545022";
import { C as _$$C } from "../1250/50098";
import { NuxOnboardingOverlay } from "../4452/529989";
import { A as _$$A7 } from "../1250/318790";
import { getResourceDataOrFallback } from "../905/723791";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { FPlanNameType } from "../figma_app/191312";
import { _l, B$ } from "../figma_app/995208";
import { C5 } from "../7021/95197";
import { $ as _$$$ } from "../1250/770005";
import { getDaysUntilExpiration } from "../figma_app/141320";
import { getCurrentTeam } from "../figma_app/598018";
import { ZL } from "../1250/272654";
import { openCreateTeamFlow } from "../figma_app/976345";
import { getQueryParam, removeQueryParam } from "../905/609392";
import { q as _$$q } from "../figma_app/712384";
import { V as _$$V } from "../905/223767";
import { I as _$$I2 } from "../905/641938";
import { dR } from "../figma_app/109538";
import { UpsellModalType } from "../905/165519";
var l = s;
function m(e) {
  return jsx("div", {
    className: l()("custom_sections_onboarding_modal--overlay---qTEB", {
      "custom_sections_onboarding_modal--overlayRedesigned--YOArU": getFeatureFlags().file_browser_sidebar_row_ui
    }),
    children: jsxs(CR, {
      width: 360,
      dismissModal: e.onClickPrimaryCta,
      targetKey: "custom-sections-nudge-modal",
      topPadding: 4,
      arrowPosition: ArrowPosition.LEFT_TITLE,
      pointerBackgroundColor: "var(--color-bg, $figmaBGWhite)",
      children: [jsx("h1", {
        className: "custom_sections_onboarding_modal--header--Z4mnG",
        children: renderI18nText("favorited_resources.custom_sections_nudge_header")
      }), jsx("p", {
        children: renderI18nText("favorited_resources.custom_sections_nudge_body", {
          ellipses: jsx("strong", {
            children: renderI18nText("favorited_resources.ellipses")
          }),
          plus: jsx("strong", {
            children: renderI18nText("favorited_resources.plus")
          })
        })
      }), jsx("div", {
        className: "custom_sections_onboarding_modal--footerContainerButtonRight--EToy- custom_sections_onboarding_modal--footerContainer---KhkM",
        children: jsx(ButtonBasePrimaryTracked, {
          onClick: e.onClickPrimaryCta,
          children: renderI18nText("rcs.file_browser.got_it")
        })
      })]
    })
  });
}
let v = "seen_custom_sections_nudge";
let $$w0 = "favorites-count-crossed-threshold";
let T = userFlagExistsAtomFamily(v);
function j() {
  let e = useAtomWithSubscription(T);
  let t = _$$e({
    overlay: LB2,
    priority: _$$N.OVERRIDING_MODAL
  }, [e]);
  _$$E(t.uniqueId, $$w0, () => {
    t.show({
      canShow: e => !e
    });
  });
  return jsx(OnboardingSequence, {
    isShowing: t.isShowing,
    userFlagOnShow: v,
    children: jsx(TrackingProvider, {
      name: "Custom Sections Nudge",
      children: jsx(m, {
        onClickPrimaryCta: t.complete
      })
    })
  });
}
let $$A1 = "seen_whats_new_v2_modal";
let S = userFlagExistsAtomFamily($$A1);
let N = _$$tH("last_figjam_at");
function O() {
  let e = useAtomWithSubscription(fileBrowserOnboardedAtom);
  let t = useAtomWithSubscription(mp);
  let n = useAtomWithSubscription(N);
  let r = useAtomWithSubscription(S);
  let o = useAtomWithSubscription(Ot);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: I3H,
    priority: _$$N.DEFAULT_MODAL
  }, [e, t, r, o]);
  useSingleEffect(() => {
    show({
      canShow: (e, t, a, r) => e && !r && _$$f({
        lastUsedFigjamDate: n,
        userCreatedAt: t,
        hasSeenOverlayV2: a
      })
    });
  });
  return jsx(xZ, {
    context: "file_browser",
    isShowing,
    onClose: complete
  });
}
let et = "File Browser Onboarding -";
function en(e) {
  return jsx(_$$X, {
    description: renderI18nText("rcs.take_tour.see_how_to_create_files_learn_about_drafts_and_teams_ways_to_access_community_and_more"),
    emphasized: !0,
    isShowing: e.isShowing,
    onClose: e.onManualDismiss,
    position: Ui3PositionType.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("rcs.take_tour.let_s_go"),
      type: "button",
      onClick: e.onClickPrimaryCta,
      ctaTrackingDescriptor: UpgradeAction.LETS_GO
    },
    secondaryCta: {
      label: renderI18nText("rcs.take_tour.no_thanks"),
      type: "button",
      onClick: e.onManualDismiss,
      ctaTrackingDescriptor: UpgradeAction.NO_THANKS
    },
    testId: "TakeTourOfFileBrowserOverlay",
    title: renderI18nText("rcs.take_tour.take_a_quick_tour_of_the_file_browser"),
    trackingContextName: `${et} Take tour`
  });
}
function ea(e) {
  let {
    close
  } = _$$S();
  let n = () => {
    close();
    e.onClickPrimaryCta();
  };
  return jsx(OnboardingRenderFrame, {
    testId: "AccountSettingsOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Account settings`,
    element: e => jsx(Rx, {
      dismissModal: e.dismissModal,
      onClickPrimaryCta: n,
      forceRender: e.forceRender,
      step: 5,
      totalSteps: 6
    }),
    isShowing: e.isShowing,
    onClickPrimaryCta: n,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function es(e) {
  let t = useDispatch();
  let n = useSelector(e => e.user?.drafts_folder_id);
  useEffect(() => (pP(), () => void _$$nz()), [t, n]);
  return jsx(EventShield, {
    eventListeners: ["onMouseDown"],
    children: jsxs(NJ, {
      dismissModal: e.dismissModal,
      width: 228,
      targetKey: _$$l,
      topPadding: 12,
      alignPointerToLeft: !0,
      children: [renderI18nText("rcs.create_files.create_files_from_scratch_import_designs_from_sketch_or_start_from_templates"), jsx(IY, {
        onClick: e.onClickPrimaryCta,
        step: 1,
        totalSteps: 6
      })]
    })
  });
}
function el(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "CreateFilesOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Create files`,
    element: es,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ec(e) {
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 228,
    targetKey: uZ,
    topPadding: 8,
    alignPointerToLeft: !0,
    children: [renderI18nText("rcs.create_files.files_are_great_for_collaboration_while_your_drafts_are_more_personal_if_you_share_them_they_re_view_only"), jsx(IY, {
      onClick: e.onClickPrimaryCta,
      step: 2,
      totalSteps: 6
    })]
  });
}
function e_(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "DraftsOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Drafts`,
    element: ec,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function em(e) {
  let {
    open
  } = _$$S();
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 247,
    targetKey: vM,
    alignPointerToLeft: !0,
    topPadding: 12,
    children: [renderI18nText("rcs.account_switching.explore_files_plugins_and_widgets_created_by_the_figma_community"), jsx(IY, {
      onClick: () => {
        open();
        e.onClickPrimaryCta();
      },
      step: 4,
      totalSteps: 6
    })]
  });
}
function ep(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "ExploreCommunityOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Community Hub`,
    element: em,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ef(e) {
  let {
    open
  } = _$$S();
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 247,
    targetKey: _$$U2,
    alignPointerToLeft: !0,
    topPadding: 12,
    children: [renderI18nText("rcs.account_switching.explore_resource_hub"), jsx(IY, {
      onClick: () => {
        open();
        e.onClickPrimaryCta();
      },
      step: 4,
      totalSteps: 6
    })]
  });
}
function eh(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "ExploreResourceHubOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Resource Hub`,
    element: ef,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ex() {
  return jsxs("div", {
    children: [jsx(Gv, {
      src: buildStaticUrl("app/onboarding/page-4.gif")
    }), jsxs(ak, {
      children: [renderI18nText("rcs.import.one_of_the_coolest_things_about_figma_is_that_you_don_t_have_to_start_from_scratch_to_get_to_work"), jsx("br", {}), jsx("br", {}), renderI18nText("rcs.import.just_drag_your_sketch_files_onto_the_browser_and_we_ll_convert_them_to_figma_for_you")]
    })]
  });
}
function ey(e) {
  return jsx(OnboardingRenderFrame, {
    currentStepIndex: e.currentStepIndex,
    element: ex,
    isShowing: e.isShowing,
    modalType: OverlayType.DRAGGABLE,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss,
    onboardingKey: "import",
    testId: "ImportOverlay",
    title: () => getI18nString("rcs.import.import_sketch_files"),
    totalNumSteps: e.totalNumSteps,
    trackingContextName: "Import Sketch File Onboarding Modal",
    userFlagOnShow: "import_file_onboarded"
  });
}
function ev(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "NotificationsOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Notifications`,
    element: e => jsx(q9, {
      dismissModal: e.dismissModal,
      onClickPrimaryCta: e.onClickPrimaryCta,
      forceRender: e.forceRender,
      step: 6,
      totalSteps: 6
    }),
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function eE(e) {
  return jsx(OnboardingRenderFrame, {
    ctaText: renderI18nText("rcs.open_file.create_file"),
    currentStepIndex: e.currentStepIndex,
    element: () => jsx(ak, {
      children: renderI18nText("rcs.open_file.open_a_file_to_learn_more_about_figma_s_powerful_editing_features")
    }),
    isShowing: e.isShowing,
    modalType: OverlayType.DRAGGABLE,
    onClickPrimaryCta: () => {
      e.onClickPrimaryCta();
      (function () {
        let e = debugState.getState();
        debugState.dispatch(createAndOpenFile(getNewFileConfig({
          state: e,
          openNewFileIn: TabOpenBehavior.SAME_TAB
        })));
      })();
    },
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss,
    testId: "OpenFileOverlay",
    title: () => getI18nString("rcs.open_file.edit_a_file"),
    totalNumSteps: e.totalNumSteps,
    trackingContextName: "Edit a File Onboarding Modal"
  });
}
function eI() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = c4(e).data ?? !1;
  let n = renderI18nText("rcs.org_welcome.click_the_all_teams_button_on_the_left_to_find_teams_to_join");
  t && (n = renderI18nText("rcs.bigma_org_welcome.click_the_all_workspaces_button_on_the_left_to_find_teams_to_join"));
  return jsxs("div", {
    children: [jsx(Gv, {
      src: buildUploadUrl("6f3307f82aeddf6f609eaf97ee9e66e788d485c1"),
      width: 215,
      margin: "14px 0px 14px 27px"
    }), jsxs(ak, {
      children: [jsx("p", {
        children: renderI18nText("rcs.org_welcome.figma_organization_connects_files_projects_libraries_and_teams_securely_across_your_company")
      }), n]
    })]
  });
}
function eA(e) {
  return jsx(OnboardingRenderFrame, {
    currentStepIndex: e.currentStepIndex,
    element: eI,
    highlightOnlyKey: "new-team-icon",
    isShowing: e.isShowing,
    modalType: OverlayType.DRAGGABLE,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss,
    testId: "OrgWelcomeOverlay",
    title: () => getI18nString("rcs.org_welcome.welcome_to_your_figma_organization"),
    totalNumSteps: e.totalNumSteps,
    trackingContextName: "Orgs Welcome Onboarding Modal",
    userFlagOnShow: "orgs_onboarded",
    width: 376
  });
}
function eO(e) {
  let {
    open,
    close
  } = OC();
  useEffect(() => {
    open();
  }, [open]);
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 228,
    targetKey: _$$K,
    topPadding: 8,
    alignPointerToLeft: !0,
    className: "plan_spaces_overlay--planSpacesPointerModal--aClGx pointer_modal--pointerModalBlue--9Jjg8 pointer_modal--pointerModal--wrpFz",
    children: [renderI18nText("rcs.plan_spaces.file_browser_onboarding_step.seat_rename"), jsx(IY, {
      onClick: () => {
        close();
        e.onClickPrimaryCta();
      },
      step: 3,
      totalSteps: 6
    })]
  });
}
function eR(e) {
  return jsx(OnboardingRenderFrame, {
    testId: "PlanSpacesOverlay",
    modalType: OverlayType.SELF_CONTAINED,
    trackingContextName: `${et} Plan Spaces`,
    element: eO,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function eP(e) {
  return jsxs(Fragment, {
    children: [jsxs(ak, {
      children: [renderI18nText("rcs.welcome_step.welcome_to_figma"), jsx("br", {}), jsx("br", {}), renderI18nText("rcs.welcome_step.we_re_different_from_other_design_tools_in_some_really_special_ways_so_we_d_like_to_take_you_through_them")]
    }), jsx(iy, {
      children: jsx(WithTrackedButton, {
        onClick: e.onClickPrimaryCta,
        variant: "primary",
        children: renderI18nText("rcs.welcome_step_view.next")
      })
    })]
  });
}
function eD(e) {
  let t = useSelector(e => e.user?.name);
  let n = t ? getI18nString("rcs.welcome_step.welcome_user_name", {
    userFirstName: t
  }) : getI18nString("rcs.welcome_step.welcome");
  return jsx(OnboardingRenderFrame, {
    currentStepIndex: e.currentStepIndex,
    disableFooter: !0,
    element: eP,
    isShowing: e.isShowing,
    modalType: OverlayType.DRAGGABLE,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss,
    testId: "WelcomeOnboardingOverlay",
    title: () => n,
    totalNumSteps: e.totalNumSteps,
    trackingContextName: "Welcome Onboarding Modal",
    userFlagOnShow: "welcome_onboarded"
  });
}
let eL = userFlagExistsAtomFamily("file_browser_onboarded");
let eF = ["seen_sidebar_workspace_onboarding", "seen_search_workspace_onboarding", "seen_libraries_workspace_onboarding"];
let eB = e => ["file_browser_onboarded", "community_hub_onboarded", "variants_onboarded", "account_switcher_onboarded", ...(e ? eF : [])];
let eU = () => {
  let e = getStorage();
  try {
    return !!e.get(SIGNED_UP_FROM_OPEN_SESSIONS);
  } catch (e) { }
  return !1;
};
function eG() {
  let e = useDispatch();
  let t = useAtomWithSubscription(userFlagsAtom);
  let n = useAtomWithSubscription(eL);
  let r = useLatestRef(n);
  let s = useAtomWithSubscription(d2);
  let l = useSelector(e => e.currentUserOrgId);
  let d = UC(l);
  let c = useAtomWithSubscription(d);
  let _ = useAtomWithSubscription(Ot);
  let u = _$$e({
    overlay: Ob5,
    priority: _$$N.OVERRIDING_MODAL
  }, [t, s, c, _]);
  let [m, p] = useState([]);
  let [x, v] = useState([]);
  let w = useCallback(e => {
    u.show({
      canShow: (t, n, a, r) => {
        let i = function ({
          userFlags: e,
          userSpace: t,
          isReset: n,
          isOrgUserExternallyRestricted: a
        }) {
          let r = t === OrgPersonal.ORG;
          let i = of(e);
          let s = getFeatureFlags().limited_plan_spaces && getInitialOptions().is_limited_team_plan;
          let l = mW(e, "not_gen_0");
          let d = mW(e, "welcome_onboarded");
          let c = mW(e, "file_browser_onboarded");
          let _ = [eA, ey, hasAnyOnboardingFlag(e) || a ? null : eE];
          let u = [...(a ? [] : [el, e_]), eR, isResourceHubEnabled() ? eh : ep, ea, ev];
          let m = [en, ...u];
          return s ? [] : n || l || r ? !n && (r || l) && c ? [] : r ? _ : i ? m : l ? eU() || d ? [en, ...u] : [eD, ...u] : m : c ? [] : m;
        }({
          userFlags: t,
          userSpace: n,
          isReset: e,
          isOrgUserExternallyRestricted: r
        }).filter(e => !!e);
        return !!i.length && (p(i), v(eB(n === OrgPersonal.ORG && a)), !0);
      }
    });
  }, [u]);
  useSingleEffect(() => {
    w(!1);
  });
  _$$E(u.uniqueId, "Reset Onboarding", () => w(!0));
  useEffect(() => {
    u.isShowing && r?.status === "loaded" && r?.data === !1 && n?.status === "loaded" && n?.data === !0 && u.complete();
  }, [u, n, r]);
  let T = useCallback(() => {
    let t = {};
    for (let e of x) t[e] = !0;
    e(postUserFlag(t));
    u.complete();
  }, [e, u, x]);
  return u.isShowing && 0 !== m.length ? jsx(eW, {
    steps: m,
    onComplete: T
  }) : null;
}
function eW(e) {
  let {
    steps,
    onComplete
  } = e;
  let r = _$$A({
    numSteps: steps.length,
    onComplete
  });
  return jsx(_$$U, {
    currentStep: r.currentStep,
    isShowing: !0,
    children: useMemo(() => steps.map((e, a) => createElement(e, {
      onClickPrimaryCta: r.next,
      onClose: noop,
      onManualDismiss: onComplete,
      isShowing: !0,
      currentStepIndex: a,
      totalNumSteps: steps.length
    })), [steps, r, onComplete])
  });
}
function eK() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useAtomWithSubscription(orgSubscriptionAtom);
  let n = RG();
  let r = renderI18nText("rcs.org_welcome.click_on_the_organization_button_on_the_left_to_find_teams_to_join");
  alwaysTrue(e) ? r = n ? renderI18nText("rcs.bigma_org_welcome.click_the_all_workspaces_button_on_the_left_to_find_teams_to_join") : renderI18nText("rcs.org_welcome.click_the_all_teams_button_on_the_left_to_find_teams_to_join") : t && (r = renderI18nText("rcs.org_welcome.click_the_current_org_name_span_button_on_the_left_to_find_teams_to_join", {
    orgName: jsx("span", {
      className: cssBuilderInstance.fontBold.$,
      children: t.name
    })
  }));
  return jsxs(Fragment, {
    children: [jsx("p", {
      className: cssBuilderInstance.pb8.$,
      children: renderI18nText("rcs.org_welcome.figma_organization_connects_files_projects_libraries_and_teams_securely_across_your_company")
    }), r]
  });
}
let eY = "orgs_onboarded";
let eQ = userFlagExistsAtomFamily(eY);
function eZ() {
  let e = useAtomWithSubscription(d2);
  let t = useAtomWithSubscription(eQ);
  let n = _$$e({
    overlay: X5_,
    priority: _$$N.OVERRIDING_MODAL
  }, [e, t]);
  useSingleEffect(() => {
    n.show({
      canShow: (e, t) => e === OrgPersonal.ORG && !t
    });
  });
  return jsx(_$$X, {
    description: jsx(eK, {}),
    isShowing: n.isShowing,
    media: jsx(ImageOverlayComponent, {
      src: buildUploadUrl("87621fc5a99a1d24beb515288cf764febb8f01e9.png"),
      alt: "A screenshot of the teams list with cursor hovering over the 'Request to Join' link",
      aspectRatio: 1.75
    }),
    onClose: n.complete,
    position: Ui3PositionType.CENTER,
    primaryCta: {
      label: renderI18nText("rcs.rcs_shared.done"),
      type: "button",
      onClick: n.complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    title: renderI18nText("rcs.org_welcome.welcome_to_your_figma_organization"),
    trackingContextName: "Orgs Welcome Onboarding Modal",
    userFlagOnShow: eY,
    width: 350
  });
}
let tr = "workspace_selector";
function ti({
  workspaces: e,
  onModalClose: t
}) {
  let [n, r] = useState(null);
  let i = useDispatch();
  let o = useSelector(({
    selectedView: e
  }) => e);
  let s = useCurrentUserOrg();
  if (!s) throw Error("org is not defined");
  ("fullscreen" === o.view || "prototype" === o.view) && t();
  let l = jsxs("div", {
    className: cssBuilderInstance.flexShrink0.flex.flexColumn.itemsCenter.gap8.$,
    children: [jsx("img", {
      className: cssBuilderInstance.w100.h100.$,
      src: buildUploadUrl("b907892c6132bbea2173d8e95c096187288f54f9"),
      alt: "",
      width: 100,
      height: 100
    }), jsx("span", {
      className: cssBuilderInstance.textHeadingLarge.colorText.$,
      children: renderI18nText("onboarding.workspace_step.title")
    }), jsx("span", {
      className: cssBuilderInstance.textBodyLarge.colorText.$,
      children: jsx("div", {
        className: "workspace_selector--descriptionContainer---ZBF1",
        children: renderI18nText("onboarding.workspace_step.subtitle_v2", {
          orgName: s.name,
          tipText: jsx("span", {
            className: cssBuilderInstance.textBodyLargeStrong.$,
            children: renderI18nText("onboarding.workspace_step.tip")
          })
        })
      })
    })]
  });
  let d = jsx(_$$P, {
    className: cssBuilderInstance.flexShrink1.minH200.mt24.$,
    innerClassName: cssBuilderInstance.flex.flexColumn.gap12.p16.pt2.$,
    children: e.map(e => jsx(to, {
      workspace: e,
      onClick: () => r(e),
      isSelected: n?.id === e.id
    }, e.id))
  });
  let _ = jsx("div", {
    className: cssBuilderInstance.flex.justifyEnd.p16.colorBorder.bSolid.bt1.$,
    children: jsxs("div", {
      className: cssBuilderInstance.flex.gap10.$,
      children: [jsx(_$$tM, {
        onClick: t,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.SKIP
        },
        children: renderI18nText("onboarding.skip")
      }), jsx(_$$vd, {
        onClick: () => {
          n && (i(_$$x({
            workspace: n
          })), t());
        },
        disabled: null === n,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.JOIN
        },
        children: renderI18nText("onboarding.workspace_step.join")
      })]
    })
  });
  return jsx(TrackingProvider, {
    name: tr,
    children: jsxs(ModalView, {
      className: cssBuilderInstance.relative.$,
      size: 680,
      height: 576,
      padding: 0,
      tintedModalBackground: !0,
      hide: e => {
        trackEventAnalytics("Modal Close", {
          source: e,
          trackingContext: tr
        });
        t();
      },
      disableClickOutsideToHide: !0,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.hFull.$,
        children: [jsxs(_$$P, {
          className: cssBuilderInstance.flexGrow1.$,
          innerClassName: cssBuilderInstance.borderBox.hFull.flex.flexColumn.itemsCenter.alignCenter.px32.pt32.$,
          children: [l, d]
        }), _]
      }), jsx(CloseButton, {
        className: cssBuilderInstance.absolute.top0.right0.mt8.mr8.$,
        onClick: t,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.CLOSE_BUTTON
        }
      })]
    })
  });
}
function to({
  workspace: e,
  isSelected: t,
  onClick: n
}) {
  return jsxs("button", {
    className: l()("workspace_selector--workspaceOptionButton--hqNFy", {
      "workspace_selector--workspaceOptionButtonSelected--9bqpX": t
    }),
    onClick: n,
    type: "button",
    children: [jsx(z6, {
      entity: e,
      size: 32
    }), jsx("span", {
      className: cssBuilderInstance.flexGrow1.truncate.textBodyLarge.colorText.ml16.$,
      children: e.name
    }), jsx("div", {
      className: l()("workspace_selector--radioButton--So7uS", {
        "workspace_selector--radioButtonSelected--6Dl1H": t
      })
    })]
  });
}
let ts = "workspace_selector_seen";
let tl = _$$g(ts);
let td = createRemovableAtomFamily(e => transformAtom(WorkspaceSelectorView.Query({
  orgId: e
}), e => {
  if (!e.org?.workspaces) return null;
  let t = e.org.workspaces.filter(e => e.canView);
  sortByPropertyWithOptions(t, "name");
  return t;
}));
function tc() {
  let e = useCurrentUserOrgId();
  let t = useCurrentPlanUser("OrgSelectWorkspaceOverlay");
  let n = "loaded" === t.status ? t?.data?.key.parentId ?? void 0 : void 0;
  let r = useRef();
  r.current = n;
  let o = useAtomWithSubscription(d2);
  let s = useAtomWithSubscription(uA);
  let l = Au(e);
  let d = useAtomWithSubscription(td(e));
  let c = useAtomWithSubscription(tl);
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: USq,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [o, s, l, d, c, t]);
  return (useSingleEffect(() => {
    show({
      canShow: (e, t, n, a, r, i) => e === OrgPersonal.ORG && !!t && !n && !!a && 0 !== a.length && !r && !!i,
      onShow: () => {
        orgUserService.postOrgUserFlags({
          orgUserId: r.current,
          flags: {
            [ts]: !0
          }
        });
      }
    });
  }), isShowing && "loaded" === d.status) ? d.data ? jsx(OnboardingSequence, {
    isShowing: !0,
    testId: "org-select-workspace-overlay",
    children: jsx(ti, {
      onModalClose: complete,
      workspaces: d.data
    })
  }) : (reportError(ServiceCategories.SCALE, Error("workspaceSelectorOptionsAtomQuery.data not present after OrgSelectWorkspace overlay is showing")), complete(), null) : null;
}
let tw = (e, t) => e ? jsx(TextWithTruncation, {
  fontSize: 20,
  fontWeight: "medium",
  children: renderI18nText("rcs.plan_spaces.drafts_have_a_new_home")
}) : t ? jsx(TextWithTruncation, {
  fontSize: 20,
  fontWeight: "medium",
  children: renderI18nText("rcs.plan_spaces.a_simpler_switcher_menu")
}) : jsx(TextWithTruncation, {
  fontSize: 20,
  fontWeight: "medium",
  children: renderI18nText("rcs.plan_spaces.changes_to_your_drafts")
});
let tT = (e, t) => e ? jsx(TextWithTruncation, {
  fontSize: 14,
  children: renderI18nText("rcs.plan_spaces.drafts_lived_in_separate_area")
}) : t ? jsx(TextWithTruncation, {
  fontSize: 14,
  children: renderI18nText("rcs.plan_spaces.a_simpler_switcher_menu.description")
}) : jsx(TextWithTruncation, {
  fontSize: 14,
  children: renderI18nText("rcs.plan_spaces.starter_pro.onboarding_modal_description")
});
let tj = (e, t) => e ? jsx(TextWithTruncation, {
  fontSize: 14,
  children: renderI18nText("rcs.plan_spaces.nothing_else_has_changed")
}) : t ? jsx(TextWithTruncation, {
  fontSize: 14,
  color: "secondary",
  children: renderI18nText("rcs.plan_spaces.user_help_migrating_drafts_awareness")
}) : jsx(TextWithTruncation, {
  fontSize: 14,
  children: renderI18nText("rcs.plan_spaces.starter_pro.onboarding_modal_body")
});
let tk = (e, t) => jsx(TextWithTruncation, {
  fontSize: 13,
  children: renderI18nText(t || e ? "rcs.plan_spaces.got_it" : "rcs.plan_spaces.show_me_what_changed")
});
let tE = memo(({
  hasOrgPlan: e,
  assetSrc: t,
  onClickPrimaryCTA: n,
  hasOnlyOneStarterPlan: r
}) => jsx(tC, {
  onClickPrimaryCTA: n,
  titleText: tw(r, e),
  descriptionText: tT(r, e),
  secondaryDescriptionText: tj(r, e),
  primaryButtonText: tk(r, e),
  assetSrc: t,
  hasOnlyOneStarterPlan: r
}));
let tC = memo(({
  titleText: e,
  descriptionText: t,
  onClickPrimaryCTA: n,
  secondaryDescriptionText: r,
  primaryButtonText: i,
  assetSrc: o,
  hasOnlyOneStarterPlan: s
}) => {
  let l = useCallback(() => {
    customHistory.unsafeRedirect("https://www.figma.com/blog/updates-to-how-drafts-work/", "_blank");
  }, []);
  return jsxs("div", {
    className: "plan_spaces_launch_modal_components--container--rGlQs",
    children: [jsxs("div", {
      className: "plan_spaces_launch_modal_components--textContainer--PGuuG",
      children: [jsx("p", {
        className: "plan_spaces_launch_modal_components--titleProperties--rAj1j",
        children: e
      }), jsx("div", {
        className: cssBuilderInstance.pb16.$,
        children: t
      }), jsx("div", {
        children: r
      }), jsxs("div", {
        className: "plan_spaces_launch_modal_components--ctaRow--3DVA8",
        children: [jsx(BigButtonPrimaryTracked, {
          onClick: n,
          children: i
        }), jsx(BigButtonSecondaryTracked, {
          onClick: l,
          children: jsx(TextWithTruncation, {
            fontSize: 13,
            children: renderI18nText("rcs.plan_spaces.learn_more")
          })
        })]
      })]
    }), s ? jsx("img", {
      src: o,
      alt: "An illustration of the Figma sidebar",
      width: 364
    }) : jsx(GV, {
      width: 364,
      src: o
    })]
  });
});
let tI = new Date("2024-05-15T20:00:00.000Z").getTime();
function tA() {
  return jsx(tS, {});
}
function tS() {
  let e = useSelector(e => e.plans);
  let t = useSelector(e => e.teams);
  let n = useSelector(e => e.userFlags.personal_draft_migration_scheduled);
  let r = e.filter(e => e.plan_type === OrganizationType.TEAM).map(e => t[e.plan_id]).filter(e => !!e);
  let s = useDispatch();
  let l = getVisibleTheme();
  let d = useAtomWithSubscription(mp);
  let _ = e.some(e => e.plan_type === OrganizationType.ORG);
  let u = 1 === r.length && r[0].starter_team && !_;
  let m = function (e, t, n) {
    let a = {
      darkMode: {
        org: buildUploadUrl("35339bd6f100fd7c2dca24546e4ded3f7397d137"),
        teams: buildUploadUrl("055e7f20c52382bdb565fbe89f04d9673952663a"),
        starter: buildUploadUrl("6327332cd808163a39e7093c9c388f6e16927cc4")
      },
      lightMode: {
        org: buildUploadUrl("d26daa4a5677426d2b01aa43677bf4c65f50b0bd"),
        teams: buildUploadUrl("1c1ca856971dff41eff57240862cf81437cb4dce"),
        starter: buildUploadUrl("b425061637a5821d58f2ce45dee702f544ea52d6")
      }
    };
    let r = e ? "darkMode" : "lightMode";
    return n ? a[r].starter : t ? a[r].org : a[r].teams;
  }("dark" === l, _, u);
  let p = j0();
  let g = _$$d();
  let h = !!getFeatureFlags().ps_personal_draft_migration && !n && u;
  let x = !h && p > 0;
  let {
    currentStep,
    next
  } = _$$A({
    numSteps: 2,
    onComplete: noop
  });
  let T = [{
    title: renderI18nText("rcs.plan_spaces_onboarding_sequence.drafts_in_a_team"),
    description: renderI18nText("rcs.plan_spaces_onboarding_sequence.private_drafts_folder"),
    trackingContextName: "Plan spaces onboarding - Team drafts folder",
    targetKey: uZ,
    emphasized: !0,
    pointToLeftEdge: !0,
    disableHighlight: !0
  }, {
    title: renderI18nText("rcs.plan_spaces_onboarding_sequence.new_space_for_teams"),
    description: renderI18nText("rcs.plan_spaces_onboarding_sequence.switch_between_teams"),
    trackingContextName: "Plan spaces onboarding - A new way to access teams",
    targetKey: _$$U3,
    emphasized: !0,
    shouldCenterArrow: PositioningStrategy.BEST_EFFORT,
    disableHighlight: !0
  }];
  x && T.push({
    title: renderI18nText("rcs.plan_spaces_onboarding_sequence.lets_move_these_files"),
    description: renderI18nText("rcs.plan_spaces_onboarding_sequence.finding_the_right_home"),
    trackingContextName: "Plan spaces onboarding - Drafts to move",
    targetKey: _$$P2,
    emphasized: !0,
    disableHighlight: !0,
    pointToLeftEdge: !0
  });
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: sqw,
    priority: _$$N.DEFAULT_MODAL + 1
  }, [d]);
  useEffect(() => {
    g || show({
      canShow: e => !!e && (e.getTime() <= tI || p > 0)
    });
  }, [g, p, show]);
  let I = !!e && e.length > 0;
  useEffect(() => {
    h && I && s(FY());
  }, [s, h, I]);
  let A = useCallback(e => jsx(tE, {
    hasOrgPlan: _,
    hasOnlyOneStarterPlan: u,
    assetSrc: m,
    onClickPrimaryCTA: e.onClickPrimaryCta
  }), [_, m, u]);
  return e.length ? jsxs(_$$U, {
    currentStep,
    isShowing,
    children: [jsx(OnboardingRenderFrame, {
      closeButtonStyle: OnTheme.ON_LIGHT,
      disableClickOutsideToHide: !0,
      element: A,
      isShowing,
      modalType: OverlayType.FEATURE_UPDATE,
      onClickPrimaryCta: _ ? complete : next,
      onClose: noop,
      onManualDismiss: complete,
      trackingContextName: "plan_spaces_launch_modal",
      userFlagOnShow: "seen_limited_spaces_onboarding"
    }), jsx(WZ, {
      steps: T,
      isShowing,
      onComplete: complete
    })]
  }) : null;
}
let tO = "saw_recreated_starter_team_onboarding";
let tR = userFlagExistsAtomFamily(tO);
let tM = userFlagExistsAtomFamily("had_recreated_starter_team");
function tP() {
  let e = useAtomWithSubscription(tR);
  let t = _$$d();
  let n = useAtomWithSubscription(tM);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: yjU,
    priority: _$$N.DEFAULT_MODAL
  }, [e, n]);
  useSingleEffect(() => {
    t || show({
      canShow: (e, t) => !e && t
    });
  });
  return jsx(OnboardingRenderFrame, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    description: jsx("p", {
      children: renderI18nText("rcs.plan_spaces_new_starter_team.text")
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    targetKey: _$$U3,
    testId: "PlanSpacesRecreatedStarterTeamOverlay",
    title: renderI18nText("rcs.plan_spaces_new_starter_team.title"),
    trackingContextName: "plan_spaces_recreated_starter_team_modal",
    userFlagOnShow: tO
  });
}
function tW({
  title: e,
  leftComponent: t,
  isExpanded: n,
  onClick: r,
  children: i
}) {
  let [o, s] = useState(n ?? !1);
  useEffect(() => {
    void 0 !== n && s(n);
  }, [n]);
  return jsxs(AutoLayout, {
    verticalAlignItems: "start",
    width: "100%",
    height: "hug-contents",
    children: [t, jsxs(AutoLayout, {
      direction: "vertical",
      children: [jsx("div", {
        tabIndex: 0,
        className: cssBuilderInstance.wFull.$,
        role: "button",
        onClick: () => {
          r && r(o);
          s(e => !e);
        },
        children: jsxs(AutoLayout, {
          horizontalAlignItems: "space-between",
          verticalAlignItems: "center",
          children: [jsx("div", {
            className: cssBuilderInstance.font14.fontMedium.$,
            children: e
          }), jsx(In, {
            icon: o ? "chevron-up-32" : "chevron-down-32"
          })]
        })
      }), o && jsx("div", {
        className: cssBuilderInstance.font13.$,
        children: i
      })]
    })]
  });
}
function t$({
  hideModal: e,
  trackingName: t,
  trackingProperties: n,
  children: r
}) {
  return jsx(TrackingProvider, {
    name: t,
    properties: {
      ...n,
      ..._$$ng.getTrackingProperties()
    },
    children: jsx(ModalView, {
      hide: e,
      size: "any",
      className: "pro_trial_form_modal--modalContainer--mKui2",
      children: r
    })
  });
}
function tV(e) {
  let {
    stepProps,
    titleText,
    descriptionText,
    middleContent,
    ctaOnClick,
    ctaDisabled,
    ctaText,
    textCtaOnClick,
    textCtaText,
    hideModal
  } = e;
  return jsxs("div", {
    className: "pro_trial_form_modal--container--Wv6Lg",
    children: [jsxs("div", {
      className: "pro_trial_form_modal--header--yEBLV",
      children: [jsx(SvgComponent, {
        svg: _$$A2,
        className: "pro_trial_form_modal--icon--CKqnw",
        useOriginalSrcFills_DEPRECATED: !0
      }), jsx(CloseButton, {
        innerText: "Close",
        onClick: hideModal
      })]
    }), jsxs("div", {
      className: "pro_trial_form_modal--content--cB6wt text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsxs("div", {
        className: "pro_trial_form_modal--titleTextContainer--Whf8N",
        children: [stepProps && jsx(TextWithTruncation, {
          color: "secondary",
          fontSize: 13,
          children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.step_counter", {
            currentStep: stepProps.currentStep + 1,
            totalSteps: stepProps.totalSteps
          })
        }), titleText, descriptionText]
      }), middleContent, jsxs("div", {
        className: "pro_trial_form_modal--footer--xDAGh",
        children: [jsx(BigButtonPrimaryTracked, {
          onClick: ctaOnClick,
          className: "pro_trial_form_modal--footerCTA--bb-GE",
          disabled: ctaDisabled,
          trackingProperties: _$$ng.getTrackingProperties("continue"),
          children: ctaText
        }), jsx(trackedButtonClickHandler, {
          trackingProperties: _$$ng.getTrackingProperties("go back"),
          onClick: textCtaOnClick,
          children: textCtaText
        })]
      })]
    })]
  });
}
function t0() {
  let [e, t] = useState();
  let n = useMemo(() => [{
    title: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.consumption_limit.title", {
        maxNumOfFiles: STANDARD_LIMIT,
        maxNumOfProjects: PRIMARY_LIMIT
      })
    }),
    children: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.consumption_limit.description")
    }),
    leftComponent: jsx(AutoLayout, {
      width: "hug-contents",
      height: "hug-contents",
      padding: {
        top: 8
      },
      children: jsx(SvgComponent, {
        svg: _$$A3,
        className: cssBuilderInstance.colorIconDanger.$
      })
    })
  }, {
    title: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.team_library.title")
    }),
    children: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.team_library.description")
    }),
    leftComponent: jsx(AutoLayout, {
      width: "hug-contents",
      height: "hug-contents",
      padding: {
        top: 8
      },
      children: jsx(SvgComponent, {
        svg: _$$A4,
        className: cssBuilderInstance.colorIconDanger.$
      })
    })
  }, {
    title: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.other.title")
    }),
    children: jsx(TextWithTruncation, {
      children: renderI18nText("pro_trials_v3.downgrade_modal.feature_downgrade.other.description")
    }),
    leftComponent: jsx(AutoLayout, {
      width: "hug-contents",
      height: "hug-contents",
      padding: {
        top: 8
      },
      children: jsx(SvgComponent, {
        svg: _$$A4,
        className: cssBuilderInstance.colorIconDanger.$
      })
    })
  }], []);
  return jsx(AutoLayout, {
    width: "100%",
    direction: "vertical",
    spacing: 24,
    padding: {
      top: 32
    },
    children: n.map(({
      title: n,
      children: r,
      leftComponent: i
    }, o) => jsx(AutoLayout, {
      height: "hug-contents",
      strokeColor: "default",
      strokeWidth: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 1
      },
      padding: {
        bottom: 24
      },
      children: jsx(tW, {
        leftComponent: i,
        title: n,
        isExpanded: e === o,
        onClick: e => {
          e ? t(void 0) : t(o);
        },
        children: r
      })
    }, o))
  });
}
let t1 = registerModal(function ({
  teamId: e
}) {
  let t = useDispatch();
  let n = useCallback(() => {
    t(hideModal());
  }, [t]);
  let r = useCallback(() => {
    n();
    t(bE({
      all_team_flags: [{
        team_id: e,
        flags: {
          [u_]: !1
        }
      }]
    }));
  }, [t, n, e]);
  return jsx(t$, {
    trackingName: Mm,
    hideModal: n,
    children: jsx(tV, {
      titleText: jsx(TextWithTruncation, {
        fontSize: 24,
        fontWeight: "bold",
        children: renderI18nText("pro_trials_v3.downgrade_modal.title")
      }),
      descriptionText: jsx(TextWithTruncation, {
        color: "secondary",
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.downgrade_modal.description")
      }),
      middleContent: jsx(t0, {}),
      ctaOnClick: n,
      ctaDisabled: !1,
      ctaText: jsx(TextWithTruncation, {
        children: renderI18nText("pro_trials_v3.downgrade_modal.cta.text")
      }),
      textCtaOnClick: r,
      textCtaText: jsx(TextWithTruncation, {
        children: renderI18nText("pro_trials_v3.downgrade_modal.text_cta.text")
      }),
      hideModal: n
    })
  });
}, "ProTrialDowngradeModal");
function t3(e) {
  let {
    selectedFeatures,
    setSelectedFeatures,
    shuffledFeaturesContent,
    hideModal,
    onClickCTA,
    onBack
  } = e;
  return jsx(TrackingProvider, {
    name: iX[iX.SELECT_FEATURES],
    children: jsx(tV, {
      ctaDisabled: 0 === selectedFeatures.size,
      ctaOnClick: onClickCTA,
      ctaText: jsx(TextWithTruncation, {
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.finish")
      }),
      descriptionText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.you_have_14_days", {
          proTrialDuration: $g
        })
      }),
      hideModal,
      middleContent: jsx("div", {
        className: "pro_trial_form_modal--proTrialFeatureSelectContainer--8j6DA",
        children: shuffledFeaturesContent.map(({
          featureType: e,
          featureText: r
        }) => jsx(t6, {
          featureIcon: bo[e],
          featureText: r,
          onClick: () => {
            selectedFeatures.has(e) ? setSelectedFeatures(new Set([...selectedFeatures].filter(t => e !== t))) : setSelectedFeatures(new Set([...selectedFeatures, e]));
          },
          isSelected: selectedFeatures.has(e)
        }, e))
      }),
      stepProps: {
        currentStep: iX.SELECT_FEATURES,
        totalSteps: h3
      },
      textCtaOnClick: onBack,
      textCtaText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.go_back")
      }),
      titleText: jsx(TextWithTruncation, {
        fontSize: 24,
        fontWeight: "bold",
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.what_are_you_excited")
      })
    })
  });
}
function t6(e) {
  let {
    featureIcon,
    featureText,
    onClick,
    isSelected
  } = e;
  return jsx(TrackedDiv, {
    role: "button",
    className: isSelected ? "pro_trial_form_modal--proTrialFeatureContainerSelected--t69-D pro_trial_form_modal--proTrialFeatureContainer--RI3Vx" : "pro_trial_form_modal--proTrialFeatureContainer--RI3Vx",
    onClick,
    children: jsxs(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "start",
      verticalAlignItems: "center",
      spacing: "12px",
      children: [jsx(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        width: 32,
        height: 32,
        children: featureIcon
      }), featureText]
    })
  });
}
function t8(e) {
  let {
    selectedTeamName,
    setSelectedTeamType,
    selectedTeamType,
    shuffledTeamTypeContent,
    hideModal,
    onClickCTA,
    onBack
  } = e;
  return jsx(TrackingProvider, {
    name: iX[iX.SELECT_TEAM_TYPE],
    children: jsx(tV, {
      ctaDisabled: void 0 === selectedTeamType,
      ctaOnClick: onClickCTA,
      ctaText: jsx(TextWithTruncation, {
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.continue")
      }),
      descriptionText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.not_being_nosy")
      }),
      hideModal,
      middleContent: jsx(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        spacing: "12px",
        children: shuffledTeamTypeContent.map(({
          teamType: e,
          imageAltText: t,
          descriptionText: i
        }) => jsx(t9, {
          isSelected: e === selectedTeamType,
          onClick: () => {
            e !== selectedTeamType ? setSelectedTeamType(e) : setSelectedTeamType(void 0);
          },
          image: jsx("img", {
            src: $Q[e],
            alt: t(),
            height: 110
          }),
          text: i
        }, e))
      }),
      stepProps: {
        currentStep: iX.SELECT_TEAM_TYPE,
        totalSteps: h3
      },
      textCtaOnClick: onBack,
      textCtaText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.go_back")
      }),
      titleText: jsx(TextWithTruncation, {
        fontSize: 24,
        fontWeight: "bold",
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.what_type_of_team", {
          teamName: selectedTeamName
        })
      })
    })
  });
}
function t9(e) {
  let {
    image,
    text,
    onClick,
    isSelected
  } = e;
  return jsx(TrackedDiv, {
    role: "button",
    className: isSelected ? "pro_trial_form_modal--teamTypeCardContainerSelected--kq22n pro_trial_form_modal--teamTypeCardContainer--HEdI4" : "pro_trial_form_modal--teamTypeCardContainer--HEdI4",
    onClick,
    children: jsxs(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "center",
      verticalAlignItems: "start",
      spacing: 8,
      padding: {
        horizontal: 12
      },
      height: 195,
      children: [image, text]
    })
  });
}
function nt(e) {
  let {
    teams,
    setSelectedTeamID,
    selectedTeamID,
    hideModal,
    onClickCTA,
    onBack
  } = e;
  return jsx(TrackingProvider, {
    name: iX[iX.SELECT_TEAM],
    children: jsx(tV, {
      ctaDisabled: void 0 === selectedTeamID,
      ctaOnClick: onClickCTA,
      ctaText: jsx(TextWithTruncation, {
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.upgrade_to_pro")
      }),
      descriptionText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.everyone_will_be_upgraded")
      }),
      hideModal,
      middleContent: jsx("div", {
        className: "pro_trial_form_modal--teamSelectContainer--S4x5O",
        children: teams.map(e => jsx(nn, {
          team: e,
          onClick: () => {
            e.id !== selectedTeamID ? setSelectedTeamID(e.id) : setSelectedTeamID(void 0);
          },
          isSelected: e.id === selectedTeamID
        }, e.id))
      }),
      stepProps: {
        currentStep: iX.SELECT_TEAM,
        totalSteps: h3
      },
      textCtaOnClick: onBack,
      textCtaText: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.cancel")
      }),
      titleText: jsx(TextWithTruncation, {
        fontSize: 24,
        fontWeight: "bold",
        children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.pick_a_team")
      })
    })
  });
}
function nn(e) {
  let {
    team,
    onClick,
    isSelected
  } = e;
  return jsxs(TrackedDiv, {
    role: "button",
    className: isSelected ? "pro_trial_form_modal--teamContainerSelected--Meavl pro_trial_form_modal--teamContainer--tLBf7" : "pro_trial_form_modal--teamContainer--tLBf7",
    onClick,
    children: [jsxs("div", {
      className: "pro_trial_form_modal--teamContainerHead--EvWS5",
      children: [jsx(TeamAvatar, {
        team,
        size: AvatarSize.LARGE
      }), jsx("div", {
        className: "pro_trial_form_modal--teamNameContainer--cwtSb",
        children: jsx(TextWithTruncation, {
          children: team.name,
          fontSize: 14,
          truncate: "end",
          fontWeight: "medium"
        })
      })]
    }), jsx(TextWithTruncation, {
      color: "secondary",
      fontSize: 14,
      fontWeight: "medium",
      children: renderI18nText("pro_trials_v3.pro_trial_initiation_modal.editors.seat_rename", {
        numEditors: team.editors
      })
    })]
  });
}
let na = registerModal(function () {
  let [e, t] = useState(iX.SELECT_TEAM);
  let [n, r] = useState();
  let [i, o] = useState();
  let [s, l] = useState(new Set());
  let [d, _] = useState(TB);
  let [u, m] = useState(PG);
  let p = xX();
  let g = useDispatch();
  let f = useCallback(() => p.find(e => e.id === n)?.name ?? getI18nString("pro_trials_v3.pro_trial_initiation_modal.your_team"), [p, n]);
  let h = useCallback(() => g(hideModal()), [g]);
  let b = getI18nString("payments.pro_trial.start_pro_trial_error");
  useEffect(() => {
    _(shuffle(TB));
    m(shuffle(PG));
  }, []);
  let x = useCallback(() => {
    void 0 === n ? t(iX.SELECT_TEAM) : p.find(e => e.id === n) ? g(cw({
      teamId: n,
      surveyResult: {
        teamId: n,
        teamType: i,
        features: Array.from(s)
      }
    })) : (g(selectViewAction({
      view: "recentsAndSharing"
    })), g(FlashActions.error(b)));
    h();
  }, [p, g, h, n, i, s, b]);
  0 === p.length && h();
  return jsxs(t$, {
    trackingName: NN,
    trackingProperties: {
      currentStage: iX[e],
      teamId: n,
      selectedTeamType: i ?? null,
      selectedFeatures: s.size > 0 ? Array.from(s).join(" ") : null
    },
    hideModal: h,
    children: [e === iX.SELECT_TEAM && jsx(nt, {
      teams: p,
      setSelectedTeamID: r,
      selectedTeamID: n,
      hideModal: h,
      onClickCTA: () => t(iX.SELECT_TEAM_TYPE),
      onBack: h
    }), e === iX.SELECT_TEAM_TYPE && jsx(t8, {
      selectedTeamName: f(),
      setSelectedTeamType: o,
      selectedTeamType: i,
      shuffledTeamTypeContent: d,
      hideModal: h,
      onClickCTA: () => t(iX.SELECT_FEATURES),
      onBack: () => {
        t(iX.SELECT_TEAM);
        o(void 0);
      }
    }), e === iX.SELECT_FEATURES && jsx(t3, {
      selectedFeatures: s,
      setSelectedFeatures: l,
      shuffledFeaturesContent: u,
      hideModal: h,
      onClickCTA: x,
      onBack: () => {
        t(iX.SELECT_TEAM_TYPE);
        l(new Set());
      }
    })]
  });
}, "ProTrialInitiationModal");
function no(e) {
  let {
    hideModal
  } = e;
  let n = useDispatch();
  let r = jsxs(Fragment, {
    children: [jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.entry_modal_explanation")
    }), jsx(nc, {})]
  });
  let i = jsx(BigButtonPrimaryTracked, {
    onClick: () => {
      hideModal();
      n(showModalHandler({
        type: na
      }));
    },
    trackingProperties: _$$ng.getTrackingProperties("Start professional trial"),
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.entry_modal_cta_text")
    })
  });
  return jsx(nd, {
    titleText: jsx(TextWithTruncation, {
      fontSize: 24,
      fontWeight: "bold",
      children: renderI18nText("pro_trials_v3.entry_modal_title")
    }),
    descriptionText: r,
    ctaButton: i,
    imgSrc: buildUploadUrl("4323e87513cec17f5decef84ebf66c12c0d2ea59")
  });
}
function ns(e) {
  let {
    teamId,
    hideModal
  } = e;
  let r = useDispatch();
  let i = jsxs(Fragment, {
    children: [jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.team_welcome_modal_explanation")
    }), jsx(nc, {})]
  });
  let o = jsx(BigButtonPrimaryTracked, {
    onClick: () => {
      hideModal();
      r(selectViewAction({
        view: "team",
        teamId
      }));
    },
    trackingProperties: _$$ng.getTrackingProperties("Team welcome to Professional trial"),
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.team_welcome_modal_cta")
    })
  });
  return jsx(nd, {
    descriptionText: i,
    titleText: jsx(TextWithTruncation, {
      fontSize: 24,
      fontWeight: "bold",
      children: renderI18nText("pro_trials_v3.team_welcome_modal_title")
    }),
    imgSrc: buildUploadUrl("4323e87513cec17f5decef84ebf66c12c0d2ea59"),
    ctaButton: o
  });
}
function nl(e) {
  let {
    hideModal,
    teamId
  } = e;
  let r = useDispatch();
  let i = {
    view: "team",
    teamId
  };
  let o = jsx(BigButtonPrimaryTracked, {
    onClick: () => {
      hideModal();
      r(startProUpgradeFlowThunk({
        teamId,
        selectedView: i
      }));
    },
    trackingProperties: _$$ng.getTrackingProperties("Upgrade from Pro trial expiry modal"),
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.expiry_modal_cta_text")
    })
  });
  let s = jsx(BigButtonSecondaryTracked, {
    onClick: () => {
      r(showModalHandler({
        type: t1,
        data: {
          teamId
        }
      }));
    },
    trackingProperties: _$$ng.getTrackingProperties("Go back to Starter from Pro trial expiry modal"),
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.expiry_modal_secondary_cta_text")
    })
  });
  return jsx(nd, {
    titleText: jsx(TextWithTruncation, {
      fontSize: 24,
      fontWeight: "bold",
      children: renderI18nText("pro_trials_v3.expiry_modal_title")
    }),
    descriptionText: jsx(TextWithTruncation, {
      fontSize: 13,
      children: renderI18nText("pro_trials_v3.expiry_modal_explanation")
    }),
    ctaButton: o,
    secondaryCtaButton: s,
    imgSrc: buildUploadUrl("47a15784276e736195c9794a0c47c4d02c4c3ca4")
  });
}
function nd(e) {
  let {
    titleText,
    descriptionText,
    ctaButton,
    imgSrc,
    secondaryCtaButton
  } = e;
  return jsxs("div", {
    className: "pro_trials_v3_modal_components--container--vGyv-",
    children: [jsxs("div", {
      className: "pro_trials_v3_modal_components--textContainer--jYLvj",
      children: [jsx("p", {
        children: titleText
      }), jsx("div", {
        children: descriptionText
      }), jsxs("div", {
        className: "pro_trials_v3_modal_components--ctaRow--ENAnk",
        children: [ctaButton, secondaryCtaButton]
      })]
    }), jsx(Gv, {
      width: 313,
      src: imgSrc
    })]
  });
}
function nc() {
  return jsxs("div", {
    className: "pro_trials_v3_modal_components--proFeatureCheckBullets--B5Jb5",
    children: [jsx(_$$X2, {
      bulletLabel: getI18nString("pro_trials_v3.entry_modal_bullet_pt_1")
    }), jsx(_$$X2, {
      bulletLabel: getI18nString("pro_trials_v3.entry_modal_bullet_pt_2")
    }), jsx(_$$X2, {
      bulletLabel: getI18nString("pro_trials_v3.entry_modal_bullet_pt_3")
    })]
  });
}
function n_() {
  let e = _$$e({
    overlay: MwQ,
    priority: _$$N.DEFAULT_MODAL
  });
  let t = useDispatch();
  useSingleEffect(() => {
    e.show();
  });
  return jsx(OnboardingRenderFrame, {
    closeButtonStyle: OnTheme.ON_DARK,
    disableClickOutsideToHide: !0,
    element: () => jsx(no, {
      hideModal: e.complete
    }),
    height: 404,
    isShowing: e.isShowing,
    modalType: OverlayType.FEATURE_UPDATE,
    onClickPrimaryCta: e.complete,
    onClose: () => {
      t(postUserFlag({
        [Jy]: !0
      }));
      e.complete();
    },
    onManualDismiss: e.complete,
    trackingContextName: "pro_trials_entry_modal",
    trackingProperties: _$$ng.getTrackingProperties(),
    width: 700
  });
}
function nu(e) {
  let t = _$$e({
    overlay: NdL,
    priority: _$$N.DEFAULT_MODAL
  });
  let {
    proTrial
  } = e;
  let r = proTrial.teamId;
  let i = useDispatch();
  useSingleEffect(() => {
    t.show();
  });
  let o = useCallback(() => i(bE({
    all_team_flags: [{
      team_id: r,
      flags: {
        [u_]: !0
      }
    }]
  })), [i, r]);
  return jsx(OnboardingRenderFrame, {
    closeButtonStyle: OnTheme.ON_LIGHT,
    disableClickOutsideToHide: !0,
    element: () => jsx(nl, {
      teamId: r,
      hideModal: t.complete
    }),
    height: 404,
    isShowing: t.isShowing,
    modalType: OverlayType.FEATURE_UPDATE,
    onClickPrimaryCta: t.complete,
    onClose: () => {
      o();
      t.complete();
    },
    onManualDismiss: t.complete,
    trackingContextName: "pro_trials_expiry_modal",
    trackingProperties: _$$ng.getTrackingProperties(),
    width: 700
  });
}
function nm(e) {
  let t = _$$e({
    overlay: bGx,
    priority: _$$N.DEFAULT_MODAL
  });
  let {
    proTrial
  } = e;
  let r = proTrial.teamId;
  let i = useDispatch();
  useSingleEffect(() => {
    t.show();
  });
  let o = useCallback(() => i(bE({
    all_team_flags: [{
      team_id: r,
      flags: {
        [v$]: !0
      }
    }]
  })), [i, r]);
  return jsx(OnboardingRenderFrame, {
    closeButtonStyle: OnTheme.ON_DARK,
    disableClickOutsideToHide: !0,
    element: () => jsx(ns, {
      teamId: r,
      hideModal: t.complete
    }),
    height: 404,
    isShowing: t.isShowing,
    modalType: OverlayType.FEATURE_UPDATE,
    onClickPrimaryCta: t.complete,
    onClose: () => {
      o();
      t.complete();
    },
    onManualDismiss: t.complete,
    trackingContextName: "pro_trials_v3_team_welcome_modal",
    trackingProperties: _$$ng.getTrackingProperties(),
    width: 700
  });
}
function np() {
  let e = getSelectedView();
  let t = useSelector(e => e.userTeamFlags);
  let n = useSelector(e => !!e.modalShown);
  let r = selectUserFlag(Jy);
  let i = xX();
  let {
    ongoingTrials,
    expiredTrials
  } = j9();
  let l = _$$ng.entryEnabled() && i.length > 0 && !r;
  let d = ongoingTrials.find(e => {
    let n = t[e.teamId]?.[v$];
    return !e.isOwner && !n && e.daysLeft > 0;
  });
  let c = expiredTrials.find(e => {
    if (!_$$ng.canSeeProTrialExpiryUx(e)) return !1;
    let n = t[e.teamId]?.[u_];
    return e.isOwner && !n;
  });
  let _ = useCallback(() => l ? jsx(n_, {}) : c ? jsx(nu, {
    proTrial: c
  }) : d ? jsx(nm, {
    proTrial: d
  }) : null, [l, c, d]);
  return !_$$ng.isEligibleTrialEntryView(e) || n ? null : jsx("div", {
    "data-testid": "proTrialsV3FileBrowserOverlayWrapper",
    children: _()
  });
}
let nb = atom(() => {
  let e = getCookieOrStorage();
  try {
    return e.get(COOKIE_NAME);
  } catch (e) {
    console.error("Failed to get show modal cookie", e);
  }
  return !1;
});
let nx = createReduxSubscriptionAtomWithState(e => null != e.payment.promo);
let ny = transformAtom(Vm, e => (e ?? []).some(e => null != e && !hasTeamPaidAccess({
  subscription: e.subscription,
  student_team: !!e.studentTeamAt,
  grace_period_end: e.gracePeriodEnd ? e.gracePeriodEnd.toISOString() : null
}) && !e.orgId && e.canEdit));
function nw({
  dismissModal: e
}) {
  let t = useSelector(({
    payment: e
  }) => e.promo);
  return (useSingleEffect(() => {
    clearFigmaPcModalCookie();
  }), useEffect(() => {
    null == t && e();
  }, [e, t]), null == t) ? null : jsxs(NJ, {
    targetKey: _$$U3,
    dismissModal: e,
    width: 301,
    shouldScrollTargetIntoView: !0,
    children: [jsx("div", {
      className: Hj,
      children: renderI18nText("rcs.promo_new_team_create_pointer.first_create_a_team")
    }), renderI18nText("rcs.promo_new_team_create_pointer.to_get_professional_free_for_days_you_ll_need_to_set_up_a_new_team_first_it_ll_take_less_than_a_minute", {
      days: parseInt(t.promo_value)
    })]
  });
}
function nT() {
  let e = useAtomWithSubscription(ny);
  let t = useAtomWithSubscription(nb);
  let n = useAtomWithSubscription(nx);
  let r = _$$e({
    overlay: Qlc,
    priority: _$$N.OVERRIDING_MODAL
  }, [e]);
  let o = useCallback(() => {
    t && n && r.show({
      canShow: e => !e
    });
  }, [t, n, r]);
  useSingleEffect(() => {
    o();
  });
  return jsx(OnboardingRenderFrame, {
    element: nw,
    isShowing: r.isShowing,
    modalType: OverlayType.SELF_CONTAINED,
    onClickPrimaryCta: r.complete,
    onClose: r.complete,
    onManualDismiss: r.complete,
    trackingContextName: "Redeem Promo Code > Create Team"
  });
}
function nI(e) {
  let t = useDispatch();
  let n = e.promo;
  let r = "";
  let i = parseInt(n.promo_value);
  if (n.claims_end_at) {
    let e = new Date(Date.parse(n.claims_end_at));
    r = n.is_multi_redeemable ? getI18nString("promo.select_team.multi_redeem_w_deadline_promo_str.seat_rename", {
      days: i,
      date: e
    }) : getI18nString("promo.select_team.single_redeem_w_deadline_promo_str.seat_rename", {
      days: i,
      date: e
    });
  } else r = n.is_multi_redeemable ? getI18nString("promo.select_team.multi_redeem_without_deadline_promo_str.seat_rename", {
    days: i
  }) : getI18nString("promo.select_team.single_redeem_without_deadline_promo_str.seat_rename", {
    days: i
  });
  return jsxs(ModalView, {
    hide: e.dismissModal,
    size: 437,
    className: "promo_code_select_team_content--modal--20aUA",
    children: [jsx("div", {
      className: "promo_code_select_team_content--promoSelectTeamTitle--f1dSV text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: renderI18nText("promo.select_team.choose_teams_to_upgrade")
    }), jsx("div", {
      className: "promo_code_select_team_content--promoSelectTeamDescription--pHb18 text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: r
    }), jsx(CloseButton, {
      className: "promo_code_select_team_content--closeButton--iQ6-4",
      onClick: e.dismissModal,
      innerText: "close"
    }), jsx(Spacing, {
      multiple: 2
    }), jsx(_$$I, {
      eligibleTeams: e.starterTeams,
      selectTeam: n => {
        t(g_({
          teamId: n.id,
          teamName: n.name,
          previousView: e.previousView
        }));
      },
      numDesignFilesPerTeam: e.filesPerStarterTeam
    })]
  });
}
function nA({
  dismissModal: e
}) {
  let t = useSelector(({
    payment: e
  }) => e.promo);
  let n = useSelector(({
    selectedView: e
  }) => e);
  let r = useSelector(e => e.teams);
  let i = selectPermissionsState();
  let o = useMemo(() => Object.values(r).filter(e => !hasTeamPaidAccess(e) && canEditTeam(e.id, i)), [r, i]);
  let s = [];
  let l = useMemo(() => o.map(e => ({
    teamId: e.id
  })), [o]);
  return (useMultiSubscription(TeamFileCountsByTeamId, l).forEach(e => {
    s.push(e.result.data?.team?.teamFileCounts?.designFileCount ?? 0);
  }), useSingleEffect(() => {
    clearFigmaPcModalCookie();
  }), useEffect(() => {
    (null == t || 0 === o.length) && e();
  }, [e, t, o]), null == t || 0 === o.length) ? null : jsx(nI, {
    starterTeams: o,
    promo: t,
    filesPerStarterTeam: s,
    dismissModal: e,
    previousView: n
  });
}
function nS() {
  let e = useAtomWithSubscription(ny);
  let t = useAtomWithSubscription(nb);
  let n = useAtomWithSubscription(nx);
  let r = _$$e({
    overlay: I$z,
    priority: _$$N.OVERRIDING_MODAL
  }, [e]);
  let o = useCallback(() => {
    t && n && r.show({
      canShow: e => e
    });
  }, [t, n, r]);
  useSingleEffect(() => {
    o();
  });
  return jsx(OnboardingRenderFrame, {
    element: nA,
    isShowing: r.isShowing,
    modalType: OverlayType.WELCOME,
    onClickPrimaryCta: r.complete,
    onClose: r.complete,
    onManualDismiss: r.complete,
    trackingContextName: "Redeem Promo Code > Select Team"
  });
}
let nD = userFlagExistsAtomFamily(J5);
function nL() {
  let e = useAtomWithSubscription(nD);
  let t = useAtomWithSubscription(Fy);
  let n = Fz();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Kgs,
    priority: _$$N.DEFAULT_MODAL
  }, [e, t]);
  useSingleEffect(() => {
    show({
      canShow: (e, t) => !e && t && Date.now() <= new Date("2025-06-23T16:00:00Z").getTime() + 2592e6 && n
    });
  });
  let l = useResourceRouteParams();
  let d = useResourceFuid();
  let _ = _$$P4();
  return jsx(OnboardingRenderFrame, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    description: renderI18nText("community.resource_hub.promotion"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("community.resource_hub.promotion.show_me_more"),
      type: "button",
      onClick: () => {
        customHistory.push(new ResourceHubHomeRouteClass({
          ...l,
          tab: _
        }, d).href);
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.SHOW_ME_MORE
    },
    secondaryCta: {
      label: renderI18nText("community.resource_hub.promotion.cancel"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.CANCEL
    },
    targetKey: "resource_hub_link",
    title: renderI18nText("community.resource_hub.promotion.title"),
    trackingContextName: HH.RESOURCE_HUB_PROMOTIONAL_OVERLAY,
    userFlagOnShow: J5,
    width: 300
  });
}
let nW = "seen_team_project_link_overlay";
let nz = userFlagExistsAtomFamily(nW);
function n$() {
  let e = useAtomWithSubscription(nz);
  let t = useFBGNavigationUpdatesTreatment();
  let n = () => t === FBGNavigationUpdatesVariants.CONTROL;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: BTz,
    priority: _$$N.DEFAULT_MODAL,
    experiment: {
      check: () => n(),
      predicate: e => !e,
      postCheck: e => !e
    }
  }, [e]);
  useSingleEffect(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(OnboardingRenderFrame, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    description: renderI18nText("team_project_link.overlay.description"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    targetKey: Jo,
    trackingContextName: "Team Project Link Overlay",
    userFlagOnShow: nW,
    zIndex: NotModalType.MODAL
  });
}
function n0() {
  let {
    getConfig
  } = selectExperimentConfigHook("starter_global_file_limits");
  let t = useTeamPlanFeatures();
  let n = getResourceDataOrFallback(t?.data?.tier);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: dYj,
    priority: _$$N.DEFAULT_MODAL,
    experiment: {
      check: () => {
        if (!getFeatureFlags().sts_starter_enabled) return !1;
        let t = new Date("2025-04-26T23:59:59").getTime();
        return !(Date.now() > t) && getConfig().get("enabled", !1);
      },
      predicate: e => e,
      postCheck: () => !0
    }
  }, [t]);
  useSingleEffect(() => {
    show({
      canShow: e => e?.tier === FPlanNameType.STARTER
    });
  });
  return jsx(_l, {
    closeButtonColor: "dark",
    description: renderI18nText("starter_plan_updates_modal.description"),
    isShowing,
    media: jsx(B$, {
      aspectRatio: 1.625,
      width: 700,
      src: buildUploadUrl("8bed8822b149a1da0cefb322e58ed4bd83ed7a28"),
      alt: "An illustration of several Figma features"
    }),
    onClose: complete,
    orientation: "landscape",
    primaryCta: {
      label: renderI18nText("starter_plan_updates_modal.primary_cta_button"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    secondaryCta: {
      label: renderI18nText("starter_plan_updates_modal.secondary_cta_button"),
      type: "link",
      href: "https://help.figma.com/hc/categories/31823555275671-Figma-Sites",
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    title: renderI18nText("starter_plan_updates_modal.title"),
    trackingContextName: "starter_plan_updates_overlay",
    trackingProperties: {
      plan: n
    }
  });
}
function n6() {
  let e = useAtomWithSubscription(userFlagsAtom);
  let t = useAtomWithSubscription(Qm);
  let n = useAtomWithSubscription(zN);
  let a = getCurrentTeam();
  let r = useDispatch();
  let o = _$$e({
    overlay: Ult,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [e, t, n]);
  useSingleEffect(() => {
    o.show({
      canShow: (e, t, n) => !mW(e, "seen_edu_offboarding_modal") && getDaysUntilExpiration(t, n) !== 1 / 0,
      onShow: () => {
        r(showModalHandler({
          type: ZL,
          data: {
            teamId: a?.id
          }
        }));
        r(postUserFlag({
          seen_edu_offboarding_modal: !0
        }));
        o.complete();
      }
    });
  });
  return null;
}
let n7 = {
  key: "createEduTeam",
  value: "1"
};
let ae = {
  key: "upgradeEduTeam",
  value: "1"
};
function an() {
  let e = _$$e({
    overlay: kmq,
    priority: _$$N.HIGH_PRIORITY_MODAL
  });
  let t = useDispatch();
  useSingleEffect(() => {
    let n = getQueryParam(n7.key);
    let a = getQueryParam(ae.key);
    n === n7.value ? e.show({
      onShow: () => {
        t(openCreateTeamFlow({
          isEduTeam: !0
        }));
        removeQueryParam(n7.key);
      }
    }) : a === ae.value && e.show({
      onShow: () => {
        t(showModalHandler({
          type: _$$q
        }));
        removeQueryParam(ae.key);
      }
    });
  });
  return null;
}
let aa = userFlagAtomFamily("seen_plan_spaces_launch_modal");
let ar = userFlagAtomFamily("seen_limited_spaces_onboarding");
let ai = new Date("2024-10-30T20:00:00.000Z").getTime();
function ao() {
  let e = useSelector(e => e.plans);
  let t = useAtomWithSubscription(mp);
  let n = useAtomWithSubscription(aa);
  let r = useAtomWithSubscription(ar);
  let s = e.some(e => e.plan_type === OrganizationType.TEAM && e.is_guest);
  let l = !!getFeatureFlags().limited_plan_spaces && s;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Sgd,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [t, n, r]);
  return (useEffect(() => {
    l && show({
      canShow: (e, t, n) => !!t && !n && e.getTime() <= ai
    });
  }, [l, show]), e.length) ? jsx(OnboardingRenderFrame, {
    arrowPosition: ArrowPosition.RIGHT_TITLE,
    description: renderI18nText("rcs.limited_spaces.external_projects"),
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("rcs.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    targetKey: _$$U3,
    testId: "limited_plan_spaces_onboarding_test_id",
    title: renderI18nText("rcs.limited_spaces.find_shared_projects"),
    trackingContextName: "Limited Spaces Onboarding Overlay"
  }) : null;
}
function a_() {
  let e = useDispatch();
  let t = useAtomWithSubscription(d2);
  let n = _$$e({
    overlay: Wb3,
    priority: _$$N.URGENT_ALERT
  }, [t]);
  useSingleEffect(() => {
    let t = getQueryParam("upgrade");
    let a = getQueryParam("entryPoint");
    switch (t) {
      case "pro":
        n.show({
          canShow: e => e === OrgPersonal.PERSONAL,
          onShow: () => {
            let t = {
              dispatch: e,
              plan: _$$I2.PRO,
              upsellSource: UpsellModalType.UNIVERSAL_UPGRADE_SEQUENCE_MACHINE,
              entryPoint: a ? parseInt(a) : void 0
            };
            e(showModalHandler({
              type: dR,
              data: {
                ...t
              }
            }));
            n.complete();
          }
        });
        break;
      case "plan_comparison":
        n.show({
          canShow: e => e === OrgPersonal.PERSONAL,
          onShow: () => {
            e(showModalHandler({
              type: _$$V,
              data: {
                upsellSource: UpsellModalType.DEEPLINK
              }
            }));
            n.complete();
          }
        });
    }
  });
  return null;
}
export function $$au2() {
  let e = !!useCurrentUserOrgId();
  return jsxs(Fragment, {
    children: [jsx(_$$p2, {
      children: jsx(_$$$, {})
    }), jsx(_$$p2, {
      children: jsx(a_, {})
    }), jsx(_$$p2, {
      children: jsx(an, {})
    }), jsx(_$$p2, {
      children: jsx(n6, {})
    }), jsx(_$$p2, {
      children: jsx(NuxOnboardingOverlay, {
        entryPoint: C5.FileBrowser
      })
    }), (isIpadDevice || !isMobileUA) && jsxs(Fragment, {
      children: [jsx(_$$p2, {
        children: jsx(eG, {})
      }), jsx(_$$p2, {
        children: jsx(_$$P5, {})
      }), jsx(_$$p2, {
        children: jsx(_$$A5, {})
      }), jsx(_$$p2, {
        children: jsx(_$$Ay2, {})
      }), jsx(_$$p2, {
        children: jsx(_$$A7, {})
      }), jsx(_$$p2, {
        children: jsx(_$$A6, {})
      })]
    }), jsx(_$$p2, {
      featureFlag: "pro_trials_v3_ux",
      children: jsx(np, {})
    }), jsx(_$$p2, {
      children: jsx(n0, {})
    }), jsxs(_$$p2, {
      children: [jsx(tA, {}), jsx(ao, {})]
    }), jsx(_$$p2, {
      children: jsx(tP, {})
    }), jsx(_$$p2, {
      children: jsx(n$, {})
    }), jsxs(_$$p2, {
      children: [jsx(nT, {}), jsx(nS, {})]
    }), jsx(_$$p2, {
      children: jsx(O, {})
    }), jsx(_$$p2, {
      children: jsx(j, {})
    }), e && jsx(_$$p2, {
      children: jsx(tc, {})
    }), jsx(_$$p2, {
      children: jsx(eZ, {})
    }), jsx(_$$p2, {
      featureFlag: "scrub_file_browser_search_results",
      children: jsx(b0, {})
    }), jsx(_$$p2, {
      children: jsx(_$$C, {
        source: "file_browser"
      })
    }), jsx(_$$p2, {
      featureFlag: "cmty_resource_hub",
      children: jsx(nL, {})
    })]
  });
}
export const FAVORITES_COUNT_CROSSED_THRESHOLD_EVENT = $$w0;
export const USER_FLAG_V2 = $$A1;
export const _$$default = $$au2;
