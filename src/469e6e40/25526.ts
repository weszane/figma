import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, PureComponent, Fragment as _$$Fragment, useCallback, useMemo, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMatchingValue } from "../905/807535";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { Xf } from "../figma_app/153916";
import { useSubscription } from "../figma_app/288654";
import { LoadingOverlay } from "../figma_app/858013";
import { k as _$$k2 } from "../7021/223482";
import { d as _$$d } from "../469e6e40/744116";
import { RR, y3 } from "../figma_app/307841";
import { i as _$$i } from "../469e6e40/549061";
import { ZY } from "../figma_app/845611";
import { throwTypeError } from "../figma_app/465776";
import { useAtomWithSubscription, atom, Xr } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { renderI18nText, getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { qB, eh as _$$eh, u0, Lh, Ks, eI as _$$eI, gx, Iq, Bq, Pz, d1, WF, _R, eN as _$$eN } from "../figma_app/425283";
import { g as _$$g } from "../4452/983384";
import { parsePxNumber, parsePxInt } from "../figma_app/783094";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { Ytf, URh, YEj } from "../figma_app/27776";
import { UpgradeAction } from "../905/370443";
import { e as _$$e2 } from "../905/621515";
import { A as _$$A } from "../905/956262";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { FPlanNameType, FUserRoleType, FOrganizationLevelType, FAccessLevelType, FPublicationStatusType } from "../figma_app/191312";
import { EnterpriseOrgAdminOnboardingSequenceView, WorkspacesTableView, ExtensionRequestTableView, AllowlistPluginsSectionView, OrgTeamsIdAndName } from "../figma_app/43951";
import { useTeamPlanPublicInfo, getParentOrgIdIfOrgLevel, useCurrentPublicPlan, useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { U as _$$U } from "../905/455766";
import { rq } from "../905/425180";
import { EL, F_ } from "../905/858282";
import { Msu, DE1, XIg, Ql8, Q16, O5v, rQs, HaT } from "../figma_app/6204";
import { N as _$$N2 } from "../figma_app/268271";
import { X as _$$X } from "../905/482718";
import { Q as _$$Q } from "../905/11928";
import { M as _$$M } from "../469e6e40/490222";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { k as _$$k3 } from "../905/443820";
import { AutoLayout } from "../905/470281";
import { b as _$$b } from "../905/168239";
import { K as _$$K2 } from "../905/628118";
import { TrackingProvider } from "../figma_app/831799";
import { O as _$$O } from "../figma_app/809387";
import { DashboardSection, WorkspaceTab, BillingSectionEnum, MemberView, FigResourceType } from "../figma_app/650409";
import { e0 as _$$e3 } from "../905/696396";
import { g as _$$g2 } from "../figma_app/638694";
import { k as _$$k4 } from "../469e6e40/115523";
import { isSelectedOrgAdminSettingsMissingResources } from "../figma_app/422062";
import { _ as _$$_, Y as _$$Y2 } from "../469e6e40/781142";
import { r as _$$r } from "../905/398386";
import { Jt } from "../figma_app/401069";
import { initializePluginAllowlist, initializeWidgetAllowlist } from "../905/837497";
import { selectViewAction } from "../905/929976";
import { Tn } from "../figma_app/933328";
import { w4, yo, Jt as _$$Jt } from "../figma_app/28323";
import { UK } from "../905/898493";
import { Jt as _$$Jt2 } from "../figma_app/342125";
import { Jt as _$$Jt3 } from "../figma_app/330108";
import { usePlanInviteWithSeatExperiment, useSeatBillingTermsExperiment } from "../figma_app/297957";
import { g7 } from "../905/939482";
import { vu, YM } from "../figma_app/741211";
import { collaboratorSet, viewCollaboratorSet, designSet } from "../905/332483";
import { Um } from "../905/848862";
import { useCurrentUserOrgId, useCurrentUserOrg } from "../905/845253";
import { selectPermissionsState } from "../figma_app/212807";
import { selectCurrentUser } from "../905/372672";
import { NJ } from "../figma_app/518077";
import { getGroupOrDefault } from "../905/817247";
import { MX, NV, EQ, cZ, EO } from "../figma_app/684446";
import { isLoaded, isLoading } from "../905/18797";
import { hX, de } from "../figma_app/614170";
import { _W } from "../figma_app/329496";
import { FRequestsStr } from "../905/384551";
import { UserGroupRole, GroupType } from "../905/441038";
import { DefaultFilters, DefaultSortConfig } from "../figma_app/967319";
import { createEmptyAddress } from "../figma_app/831101";
import { OrganizationType } from "../905/833838";
import { DUserRole, SectionType, defaultSectionKey } from "../figma_app/858344";
import { o0 } from "../905/844131";
import { buildUploadUrl } from "../figma_app/169182";
import { y as _$$y } from "../905/129046";
import { y as _$$y2 } from "../905/375507";
import { lQ } from "../905/934246";
import { isEmptyObject } from "../figma_app/493477";
import { IconButton } from "../905/443068";
import { v as _$$v } from "../469e6e40/843735";
import e2 from "classnames";
import e5 from "../vendor/128080";
import { A as _$$A2 } from "../905/920142";
import { isValidEmail } from "../figma_app/416935";
import { isMobileUA } from "../figma_app/778880";
import { truncate, formatList } from "../figma_app/930338";
import { XHR } from "../905/910117";
import { gw, MM, wv } from "../figma_app/236327";
import { V as _$$V } from "../figma_app/312987";
import { ButtonBasePrimary, BigTextInputForwardRef, ButtonSecondary, SecureLink, BUTTON_INTERNAL_CONST_Z12, ButtonBasePrimaryTracked, clickableBaseLinkTracked, ButtonSecondaryTracked, ButtonNegativeTracked } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { q as _$$q } from "../905/749058";
import { postUserFlag } from "../905/985254";
import { E as _$$E2 } from "../905/453826";
import { zl } from "../figma_app/641749";
import { rn } from "../figma_app/903573";
import { R as _$$R } from "../905/298004";
import { WZ } from "../905/893645";
import { f as _$$f, jD, Vl as _$$Vl, OK } from "../figma_app/481749";
import { KJ, H3 as _$$H, Bd } from "../figma_app/994725";
import { isBigmaEnabledAlias3 } from "../figma_app/336853";
import { d as _$$d2 } from "../905/44199";
import { um, Rs as _$$Rs, N$ } from "../figma_app/761870";
import { P as _$$P2 } from "../905/392438";
import { p as _$$p } from "../figma_app/353099";
import { Hj, A3, tD as _$$tD } from "../905/682977";
import { p3 } from "../figma_app/588582";
import { zR } from "../469e6e40/825613";
import { jG, NM, ln, oi } from "../figma_app/527041";
import { bQ } from "../figma_app/658324";
import { Q as _$$Q3 } from "../469e6e40/825225";
import { y2 } from "../figma_app/563413";
import { S as _$$S } from "../905/339549";
import { tI as _$$tI } from "../figma_app/847597";
import { p as _$$p2 } from "../905/597320";
import { z as _$$z } from "../figma_app/369596";
import { useThemeContext } from "../905/640017";
import { compareProductAccessTypes } from "../figma_app/217457";
import { Ef } from "../905/81982";
import { e as _$$e4 } from "../figma_app/119601";
import { s as _$$s2 } from "../905/82276";
import { az as _$$az, pw, z6 } from "../figma_app/805373";
import { f as _$$f2 } from "../figma_app/750432";
import { Cj } from "../905/270084";
import { zx, VU } from "../4452/650793";
import { IU } from "../figma_app/421401";
import { hideModal, showModalHandler, showModal, popModalStack } from "../905/156213";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip, DialogContents } from "../figma_app/272243";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { Button } from "../905/521428";
import { $z } from "../figma_app/617427";
import { registerModal } from "../905/102752";
import { g as _$$g4 } from "../469e6e40/136803";
import { OJ } from "../905/519092";
import { SvgComponent } from "../905/714743";
import { p as _$$p3 } from "../469e6e40/348454";
import { styleBuilderInstance } from "../905/941192";
import { V as _$$V2, $ as _$$$ } from "../905/355181";
import { R as _$$R2 } from "../7021/67076";
import { S as _$$S3 } from "../469e6e40/885592";
import { resourceUtils } from "../905/989992";
import { aO as _$$aO } from "../figma_app/109538";
import { h as _$$h2, a as _$$a } from "../469e6e40/313497";
import { hY } from "../figma_app/80683";
import { i as _$$i2 } from "../469e6e40/375056";
import { hs, j2 } from "../figma_app/84966";
import { d as _$$d3 } from "../figma_app/603561";
import { L as _$$L } from "../469e6e40/82885";
import { p as _$$p4 } from "../469e6e40/470485";
import { b as _$$b3 } from "../905/946806";
import { Z as _$$Z } from "../905/279476";
import { openWindow } from "../905/508367";
import { reportError } from "../905/11";
import { aD as _$$aD, Sn } from "../469e6e40/875985";
import { CurrencyFormatter } from "../figma_app/514043";
import { Jv, YO, qH } from "../figma_app/934005";
import { G as _$$G } from "../469e6e40/623116";
import { Y as _$$Y3 } from "../7021/427161";
import { ConfirmationModal2 } from "../figma_app/918700";
import { A as _$$A3 } from "../svg/57540";
import { Wi, JR } from "../figma_app/162641";
import { In } from "../905/672640";
import { KindEnum } from "../905/129884";
import { UNASSIGNED } from "../905/247093";
import { Eh } from "../figma_app/617654";
import { Vq, v0, pL } from "../figma_app/639088";
import { e as _$$e5 } from "../905/149844";
import { A as _$$A4 } from "../svg/83231";
import { A as _$$A5 } from "../svg/226201";
import { M as _$$M2 } from "../469e6e40/601528";
import { KX } from "../469e6e40/623537";
import { x as _$$x } from "../905/587214";
import { yE } from "../469e6e40/471025";
import { e as _$$e6 } from "../905/86132";
import { F4 } from "../1881/125927";
import { IT, liveStoreInstance } from "../905/713695";
import { createNoOpValidator } from "../figma_app/181241";
import { z as _$$z2 } from "../905/284530";
import { A as _$$A6 } from "../5724/663128";
import { eu as _$$eu, zb } from "../469e6e40/418374";
import { CW } from "../469e6e40/800566";
import { sortBySelectors } from "../figma_app/656233";
import { ResourceStatus } from "../905/663269";
import { stripHtmlTags } from "../905/491152";
import { h1 } from "../905/986103";
import { W as _$$W } from "../5430/573261";
import { BaseLinkComponent } from "../905/551536";
import { A as _$$A7 } from "../5724/933949";
import { getResourceDataOrFallback } from "../905/723791";
import { H8, Pf } from "../905/590952";
import { J as _$$J3 } from "../905/403084";
import { re } from "../469e6e40/421552";
import { Q as _$$Q4 } from "../469e6e40/815692";
import { Gv, i as _$$i3 } from "../figma_app/348887";
import { kL, nF as _$$nF, lF } from "../469e6e40/68843";
var n;
let I = parsePxNumber(Ytf);
function T() {
  return usePrefersMediaQuery(`(max-width: ${I}px)`);
}
var B = (e => (e.CreateFirstWorkspace = "CreateFirstWorkspace", e.CreateFirstBillingGroup = "CreateFirstBillingGroup", e))(B || {});
let G = "seen_enterprise_org_admin_onboarding";
let z = userFlagExistsAtomFamily(G);
function V(e) {
  let {
    step,
    isOverlayShowing,
    next,
    complete,
    arrowPosition
  } = e;
  switch (step) {
    case "CreateFirstWorkspace":
      let l = qB;
      return jsx(rq, {
        arrowPosition,
        clickOutsideToHide: !0,
        description: jsx(TextWithTruncation, {
          children: renderI18nText("org_admin_onboarding.tooltip.create_first_workspace.description")
        }),
        emphasized: !0,
        isShowing: isOverlayShowing,
        onClose: complete,
        onTargetLost: complete,
        primaryCta: {
          label: jsx(TextWithTruncation, {
            children: renderI18nText("general.next")
          }),
          type: "button",
          onClick: next,
          ctaTrackingDescriptor: UpgradeAction.NEXT
        },
        shouldCenterArrow: EL.FALLBACK,
        stepCounter: {
          stepNum: 1,
          totalNumSteps: 2
        },
        targetKey: l,
        title: jsx(TextWithTruncation, {
          children: renderI18nText("org_admin_onboarding.tooltip.create_first_workspace.title")
        }),
        trackingContextName: `${_$$eh} - create first workspace`,
        userFlagOnShow: G
      });
    case "CreateFirstBillingGroup":
      return jsx(rq, {
        arrowPosition,
        clickOutsideToHide: !0,
        description: jsx(TextWithTruncation, {
          children: renderI18nText("org_admin_onboarding.tooltip.create_first_billing_group.description")
        }),
        emphasized: !0,
        isShowing: isOverlayShowing,
        onClose: complete,
        onTargetLost: complete,
        primaryCta: {
          label: jsx(TextWithTruncation, {
            children: renderI18nText("general.got_it")
          }),
          type: "button",
          onClick: complete,
          ctaTrackingDescriptor: UpgradeAction.DONE
        },
        shouldCenterArrow: EL.FALLBACK,
        stepCounter: {
          stepNum: 2,
          totalNumSteps: 2
        },
        targetKey: u0,
        title: jsx(TextWithTruncation, {
          children: renderI18nText("org_admin_onboarding.tooltip.create_first_billing_group.title")
        }),
        trackingContextName: `${_$$eh} - create first billing group`,
        userFlagOnShow: G
      });
    default:
      throwTypeError(step);
  }
}
function W() {
  let e = useTeamPlanPublicInfo().unwrapOr(null);
  let t = getParentOrgIdIfOrgLevel(e);
  let a = e?.tier === FPlanNameType.ENTERPRISE;
  let n = T();
  let i = useAtomWithSubscription(z);
  let r = useSubscription(EnterpriseOrgAdminOnboardingSequenceView, {
    orgId: t || null
  }, {
    enabled: a
  });
  let {
    show,
    complete,
    isShowing
  } = _$$e2({
    overlay: Msu,
    priority: _$$g(Msu)
  }, [i, r]);
  let c = ["CreateFirstWorkspace", "CreateFirstBillingGroup"];
  let {
    currentStep,
    next
  } = _$$A({
    numSteps: c.length,
    onComplete: complete
  });
  _$$h(() => {
    show({
      canShow: (e, t) => {
        if (!a || e) return !1;
        let s = t.org?.workspaces ?? [];
        let i = t.org?.licenseGroups ?? [];
        return 0 === s.length && 0 === i.length && !n;
      }
    });
  });
  return jsx(_$$U, {
    currentStep,
    isShowing,
    children: c.map((e, t) => jsx(V, {
      arrowPosition: F_.LEFT_TITLE,
      step: e,
      isOverlayShowing: isShowing,
      next,
      complete
    }, t))
  });
}
function K() {
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: DE1,
    priority: _$$N2.SECONDARY_MODAL
  });
  _$$h(() => {
    show();
  });
  return jsx(_$$X, {
    isShowing,
    position: _$$Q.CENTER,
    trackingContextName: "OrgAdminAuthorityOverlay",
    title: renderI18nText("org_admin_authority_overlay.title"),
    description: renderI18nText("org_admin_authority_overlay.description"),
    primaryCta: {
      label: renderI18nText("general.got_it"),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      type: "button",
      onClick: complete
    },
    onClose: complete
  });
}
function eo(e) {
  let t = getFeatureFlags().org_admin_file_list_report_beta;
  let [a, n] = useState(null);
  useEffect(() => {
    if (!t) return;
    let a = new FormData();
    a.append("org_id", e.org.id);
    a.append("project_id", "01965d9e-89d4-7229-a28e-bae07899e00e");
    fetch("/api/hex/org_admin/create_presigned_url", {
      method: "POST",
      body: a
    }).then(e => e.ok ? e.text() : (console.warn("Network response was not ok " + e.statusText), "data:text/plain,error")).then(e => {
      n(e);
    }).catch(e => {
      console.warn("Error:", e);
    });
  }, [t, n, e.org.id]);
  return jsxs(TrackingProvider, {
    name: _$$e3.FILE_LIST_BETA,
    properties: {
      orgId: e.org.id,
      teamId: null
    },
    children: [!getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K2, {
        title: _$$O(DashboardSection.CONTENT)
      }), jsx(_$$b, {
        tab: DashboardSection.CONTENT,
        selectedSecondaryTab: WorkspaceTab.FILE_LIST_BETA
      })]
    }), t ? jsx("div", {
      children: jsx(AutoLayout, {
        padding: {
          top: 8
        },
        children: jsx(BannerInset, {
          variant: "brand",
          children: jsx(BannerMessage, {
            title: "This file list report report is updated once a day.",
            children: "It is available in beta status. As Figma rolls out improved enterprise analytics, this report may move to another part of the product."
          })
        })
      })
    }) : null, jsx("div", {
      style: {
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: a ? jsx("iframe", {
        title: "embedded-analytics",
        width: "100%",
        height: "100%",
        style: {
          border: "none"
        },
        src: a,
        allow: "clipboard-write"
      }) : jsx(_$$k3, {
        loadingText: "Loading search results"
      })
    })]
  });
}
function ed(e) {
  let t = getFeatureFlags().org_admin_access_insight;
  let [a, n] = useState(null);
  useEffect(() => {
    if (!t) return;
    let a = new FormData();
    a.append("org_id", e.org.id);
    a.append("project_id", "0196a881-ff83-700b-9ba2-ca5604fdc116");
    fetch("/api/hex/org_admin/create_presigned_url", {
      method: "POST",
      body: a
    }).then(e => e.ok ? e.text() : (console.warn("Network response was not ok " + e.statusText), "data:text/plain,error")).then(e => {
      n(e);
    }).catch(e => {
      console.warn("Error:", e);
    });
  }, [t, n, e.org.id]);
  return jsxs(TrackingProvider, {
    name: _$$e3.ACCESS_INSIGHT,
    properties: {
      orgId: e.org.id,
      teamId: null
    },
    children: [!getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K2, {
        title: _$$O(DashboardSection.CONTENT)
      }), jsx(_$$b, {
        tab: DashboardSection.CONTENT,
        selectedSecondaryTab: WorkspaceTab.ACCESS_INSIGHT
      })]
    }), t ? jsx("div", {
      children: jsx(AutoLayout, {
        padding: {
          top: 8
        },
        children: jsx(BannerInset, {
          variant: "brand",
          children: jsx(BannerMessage, {
            title: "This access insight report is updated once a day.",
            children: "This access insight report is updated once a day. As Figma rolls out improved enterprise analytics, this report may move to another part of the product."
          })
        })
      })
    }) : null, jsx("div", {
      style: {
        width: "100%",
        height: "150vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: a ? jsx("iframe", {
        title: "embedded-analytics",
        width: "100%",
        height: "100%",
        style: {
          border: "none"
        },
        src: a,
        allow: "clipboard-write"
      }) : jsx(_$$k3, {
        loadingText: "Loading access insights"
      })
    })]
  });
}
let eW = "admin_onboarding_overlay--bold--FFVeT";
let eH = "admin_onboarding_overlay--listItem--qXeo9";
let eY = "seen_sharing_clarity_admin_onboarding_overlay";
let eJ = userFlagExistsAtomFamily(eY);
function eK() {
  let e = useAtomWithSubscription(eJ);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: XIg,
    priority: _$$N2.SECONDARY_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  let i = jsx(Fragment, {
    children: jsxs("ul", {
      className: "admin_onboarding_overlay--list--00013",
      children: [jsx("li", {
        className: eH,
        children: renderI18nText("rcs.sharing_clarity.admin_overlay.bullet_1", {
          strongInviteOnly: jsx("span", {
            className: eW,
            children: renderI18nText("rcs.sharing_clarity.admin_overlay.invite_only")
          })
        })
      }), jsx("li", {
        className: eH,
        children: renderI18nText("rcs.sharing_clarity.admin_overlay.bullet_2", {
          strongVisible: jsx("span", {
            className: eW,
            children: renderI18nText("rcs.sharing_clarity.admin_overlay.visible")
          }),
          strongHidden: jsx("span", {
            className: eW,
            children: renderI18nText("rcs.sharing_clarity.admin_overlay.hidden")
          })
        })
      }), jsx("li", {
        className: eH,
        children: renderI18nText("rcs.sharing_clarity.admin_overlay.bullet_3", {
          strongAnyoneInOrg: jsx("span", {
            className: eW,
            children: renderI18nText("rcs.sharing_clarity.admin_overlay.anyone_in_the_org")
          })
        })
      }), jsx("li", {
        className: eH,
        children: renderI18nText("rcs.sharing_clarity.admin_overlay.bullet_4")
      })]
    })
  });
  return jsx(_$$X, {
    description: i,
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("8c4e048a40c1f12e59d2c74adf70bbcd3ded9bb1"),
      alt: "",
      aspectRatio: 600 / 208
    }),
    onClose: complete,
    position: _$$Q.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("rcs.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText("rcs.rcs_shared.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/360040450293-Create-a-team-in-an-organization",
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    title: renderI18nText("rcs.sharing_clarity.admin_overlay.new_language_for_team_access"),
    trackingContextName: "Sharing Clarity Admin Onboarding Overlay",
    userFlagOnShow: eY
  });
}
var e4 = e2;
var e3 = e5;
let th = "seen_org_admin_activity_onboarding";
let tx = rn("org_admin_activity_onboarding", _$$R(Ql8));
let tb = userFlagExistsAtomFamily(th);
function tv() {
  let e = useAtomWithSubscription(tb);
  let t = _$$e2({
    overlay: Q16,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  let a = useDispatch();
  let n = zl(tx);
  _$$h(() => {
    "reset" === n.currentState ? t.show() : t.show({
      canShow: e => !e
    });
  });
  _$$E2(t.uniqueId, "Reset Onboarding", () => {
    t.show();
  });
  let i = [{
    description: renderI18nText("onboarding_pointers.activity_filter_onboarding"),
    trackingContextName: `${Lh} Filter`,
    targetKey: Ks
  }, {
    description: renderI18nText("onboarding_pointers.activity_csv_onboarding"),
    trackingContextName: `${Lh} CSV`,
    targetKey: _$$eI
  }];
  return jsx(WZ, {
    isShowing: t.isShowing,
    steps: i,
    onComplete: () => {
      a(postUserFlag({
        [th]: !0
      }));
      t.complete();
    }
  });
}
let tA = "activity_logs_section--dropdownScrollClip--qLBu2";
let tR = "activity_logs_section--dropdown--mr5p8";
let tO = "activity_logs_section--eventDescriptionItem--6w8oK ellipsis--ellipsis--Tjyfa";
let tL = "HEADER";
let tD = {
  value: null,
  description: renderI18nText("activity_log.filter.all")
};
let tM = [{
  value: tL,
  description: renderI18nText("activity_log.filter.branches")
}, {
  value: ["repo_branch_create"],
  description: renderI18nText("activity_log.filter.created_a_branch")
}, {
  value: ["repo_merge_to_source"],
  description: renderI18nText("activity_log.filter.merged_a_branch")
}, {
  value: ["repo_merge_from_source"],
  description: renderI18nText("activity_log.filter.updated_a_branch")
}, {
  value: ["repo_branch_archive"],
  description: renderI18nText("activity_log.filter.archived_a_branch")
}, {
  value: ["repo_branch_unarchive"],
  description: renderI18nText("activity_log.filter.unarchived_a_branch")
}, {
  value: ["repo_branch_delete"],
  description: renderI18nText("activity_log.filter.deleted_a_branch")
}, {
  value: ["file_repo_member_add", "file_repo_member_permission_change", "file_repo_member_remove"],
  description: renderI18nText("activity_log.filter.file_repo_membership_changed")
}];
let tP = getFeatureFlags().dt_github_app_activity_logs ? [{
  value: tL,
  description: renderI18nText("activity_log.filter.github")
}, {
  value: ["github_app_installation", "github_app_uninstallation", "github_app_suspension", "github_app_unsuspension"],
  description: renderI18nText("activity_log.filter.github_app_description")
}, {
  value: ["github_repository_add", "github_repository_remove", "github_repository_disable", "github_repository_enable"],
  description: renderI18nText("activity_log.filter.github_repository_description")
}] : [];
let tU = [{
  value: tL,
  description: renderI18nText("activity_log.filter.sso_auth")
}, {
  value: ["google_sso_auth_change"],
  description: renderI18nText("activity_log.filter.google_sso_auth")
}, {
  value: ["saml_sso_auth_change"],
  description: renderI18nText("activity_log.filter.saml_sso_auth")
}];
let tF = [{
  value: tL,
  description: renderI18nText("activity_log.filter.network_restriction")
}, {
  value: ["ip_allowlist_setting_change"],
  description: renderI18nText("activity_log.filter.ip_allowlist_setting_change")
}, {
  value: ["ip_allowlist_range_create"],
  description: renderI18nText("activity_log.filter.ip_allowlist_range_create")
}, {
  value: ["ip_allowlist_range_delete"],
  description: renderI18nText("activity_log.filter.ip_allowlist_range_delete")
}, {
  value: ["ip_allowlist_rejected"],
  description: renderI18nText("activity_log.filter.ip_allowlist_rejected")
}, {
  value: ["ip_restriction_change"],
  description: renderI18nText("activity_log.filter.network_access_restriction_setting_change")
}, {
  value: ["network_access_restriction_range_create"],
  description: renderI18nText("activity_log.filter.network_access_restriction_range_create")
}, {
  value: ["network_access_restriction_range_delete"],
  description: renderI18nText("activity_log.filter.network_access_restriction_range_delete")
}, {
  value: ["network_access_restriction_range_update"],
  description: renderI18nText("activity_log.filter.network_access_restriction_range_update")
}];
let tq = [{
  value: tL,
  description: renderI18nText("activity_log.filter.external_access")
}, {
  value: ["org_guest_invite_setting_change"],
  description: renderI18nText("activity_log.filter.changed_guest_invite_setting")
}, {
  value: ["open_sessions_setting_change"],
  description: renderI18nText("activity_log.filter.changed_open_sessions_setting")
}, {
  value: ["public_link_setting_change"],
  description: renderI18nText("activity_log.filter.changed_public_link_setting")
}, {
  value: ["org_user_create_external", "org_user_delete_external"],
  description: renderI18nText("activity_log.filter.external_org_membership_changed")
}, {
  value: ["team_member_add_external", "team_member_remove_external"],
  description: renderI18nText("activity_log.filter.external_team_membership_changed")
}, {
  value: ["autogen_password_controls_setting_change"],
  description: renderI18nText("activity_log.filter.changed_autogen_password_controls_setting")
}, {
  value: ["fig_file_view_external"],
  description: renderI18nText("activity_log.filter.viewed_external_file")
}, {
  value: ["fig_file_view_prototype_external"],
  description: renderI18nText("activity_log.filter.viewed_external_prototype")
}, {
  value: ["sites_publishing_setting_change"],
  description: renderI18nText("activity_log.filter.sites_publishing_setting_change")
}, {
  value: ["file_export_controls_setting_change"],
  description: renderI18nText("activity_log.filter.file_export_controls_setting_change")
}, {
  value: ["workspace_file_export_controls_setting_change"],
  description: renderI18nText("activity_log.filter.workspace_file_export_controls_setting_change")
}];
let t$ = [{
  value: ["license_group_library_setting_change", "workspace_library_setting_change"],
  description: renderI18nText("activity_log.filter.workspace_library_setting_changed")
}];
let tB = [{
  value: tL,
  description: renderI18nText("activity_log.filter.workspaces")
}, {
  value: ["license_group_admins_add", "workspace_admins_add"],
  description: renderI18nText("activity_log.filter.added_workspace_admins")
}, {
  value: ["license_group_admins_remove", "workspace_admins_remove"],
  description: renderI18nText("activity_log.filter.removed_workspace_admins")
}, {
  value: ["license_group_create", "workspace_create"],
  description: renderI18nText("activity_log.filter.created_a_workspace")
}, {
  value: ["license_group_delete", "workspace_delete"],
  description: renderI18nText("activity_log.filter.deleted_a_workspace")
}, {
  value: ["license_group_rename", "workspace_rename"],
  description: renderI18nText("activity_log.filter.renamed_a_workspace")
}, {
  value: ["license_group_membership_change", "workspace_members_add", "workspace_members_remove", "workspace_member_add", "workspace_member_remove"],
  description: renderI18nText("activity_log.filter.changed_a_user_s_workspace")
}, {
  value: ["license_group_membership_self_select", "workspace_membership_self_select"],
  description: renderI18nText("activity_log.filter.user_selected_their_own_workspace")
}, {
  value: ["workspace_visibility_setting_change"],
  description: renderI18nText("activity_log.filter.workspace_visibility_setting_changed")
}];
let tG = [{
  value: tL,
  description: renderI18nText("activity_log.filter.billing_group.header")
}, {
  value: ["license_group_admins_add"],
  description: renderI18nText("activity_log.filter.billing_group.admins_added")
}, {
  value: ["license_group_admins_remove"],
  description: renderI18nText("activity_log.filter.billing_group.admins_removed")
}, {
  value: ["license_group_create"],
  description: renderI18nText("activity_log.filter.billing_group.created")
}, {
  value: ["license_group_delete"],
  description: renderI18nText("activity_log.filter.billing_group.deleted")
}, {
  value: ["license_group_rename"],
  description: renderI18nText("activity_log.filter.billing_group.renamed")
}, {
  value: ["license_group_membership_change"],
  description: renderI18nText("activity_log.filter.billing_group.membership_changed")
}, {
  value: ["license_group_membership_self_select"],
  description: renderI18nText("activity_log.filter.billing_group.self_select")
}];
let tz = [{
  value: tL,
  description: renderI18nText("activity_log.filter.scim_group.header")
}, {
  value: ["idp_group_create"],
  description: renderI18nText("activity_log.filter.scim_group.idp_group_create.select")
}, {
  value: ["idp_group_delete"],
  description: renderI18nText("activity_log.filter.scim_group.idp_group_delete.select")
}, {
  value: ["idp_group_rename"],
  description: renderI18nText("activity_log.filter.scim_group.idp_group_rename.select")
}, {
  value: ["idp_group_connection_add"],
  description: renderI18nText("activity_log.filter.scim_group.idp_group_connection_add.select")
}, {
  value: ["idp_group_connection_remove"],
  description: renderI18nText("activity_log.filter.scim_group.idp_group_connection_remove.select")
}];
let tV = [{
  value: ["org_join_request_create"],
  description: renderI18nText("activity_log.filter.requested_to_join_the_org")
}, {
  value: ["org_join_request_approve"],
  description: renderI18nText("activity_log.filter.org_join_request_approved")
}];
let tW = [{
  value: tL,
  description: renderI18nText("activity_log.filter.webhook_group_header")
}, {
  value: ["webhook_create"],
  description: renderI18nText("activity_log.filter.webhooks_created")
}, {
  value: ["webhook_update"],
  description: renderI18nText("activity_log.filter.webhooks_updated")
}, {
  value: ["webhook_delete"],
  description: renderI18nText("activity_log.filter.webhooks_deleted")
}];
let tH = [{
  value: tL,
  description: renderI18nText("activity_log.filter.org_domain_management_group_header")
}, {
  value: ["org_domain_capture_change"],
  description: renderI18nText("activity_log.filter.org_domain_capture_changed")
}, {
  value: ["org_domain_add"],
  description: renderI18nText("activity_log.filter.org_domain_added")
}, {
  value: ["org_domain_remove"],
  description: renderI18nText("activity_log.filter.org_domain_removed")
}, {
  value: ["org_domain_verify"],
  description: renderI18nText("activity_log.filter.org_domain_verified")
}];
let tY = [{
  value: tL,
  description: renderI18nText("activity_log.filter.idp_config_group_header")
}, {
  value: ["idp_config_create"],
  description: renderI18nText("activity_log.filter.idp_config_create")
}, {
  value: ["idp_config_delete"],
  description: renderI18nText("activity_log.filter.idp_config_delete")
}, {
  value: ["idp_config_update"],
  description: renderI18nText("activity_log.filter.idp_config_update")
}, {
  value: ["org_domain_idp_mapping_change"],
  description: renderI18nText("activity_log.filter.org_domain_idp_mapping_change")
}];
let tJ = [{
  value: tL,
  description: renderI18nText("activity_log.filter.sites_web_apps")
}, {
  value: ["sites_subdomain_changed"],
  description: renderI18nText("activity_log.filter.sites_subdomain_changed")
}, {
  value: ["sites_custom_domain_activate"],
  description: renderI18nText("activity_log.filter.sites_custom_domain_activated")
}, {
  value: ["sites_custom_domain_removal"],
  description: renderI18nText("activity_log.filter.sites_custom_domain_removal")
}, {
  value: ["sites_publish"],
  description: renderI18nText("activity_log.filter.sites_published")
}, {
  value: ["sites_unpublish"],
  description: renderI18nText("activity_log.filter.sites_unpublished")
}, ...(getFeatureFlags().sts_passwords ? [{
  value: ["sites_set_password"],
  description: renderI18nText("activity_log.filter.sites_set_password")
}, {
  value: ["sites_unset_password"],
  description: renderI18nText("activity_log.filter.sites_unset_password")
}] : [])];
let tK = (e, t, a) => [tD, {
  value: tL,
  description: renderI18nText("activity_log.filter.files")
}, {
  value: ["fig_file_create"],
  description: renderI18nText("activity_log.filter.created_a_file")
}, {
  value: ["fig_file_duplicate"],
  description: renderI18nText("activity_log.filter.duplicated_a_file")
}, {
  value: ["fig_file_export"],
  description: renderI18nText("activity_log.filter.exported_a_file")
}, {
  value: ["fig_file_image_download"],
  description: renderI18nText("activity_log.filter.downloaded_an_image")
}, {
  value: ["fig_file_link_access_change"],
  description: renderI18nText("activity_log.filter.file_link_access_changed")
}, {
  value: ["fig_file_link_expiration_change"],
  description: renderI18nText("activity_log.filter.file_link_expiration_changed")
}, {
  value: ["fig_file_viewer_access_change"],
  description: renderI18nText("activity_log.filter.viewer_permissions_changed")
}, {
  value: ["fig_file_member_add", "fig_file_member_permission_change", "fig_file_member_remove"],
  description: renderI18nText("activity_log.filter.file_membership_changed")
}, {
  value: ["fig_file_move"],
  description: renderI18nText("activity_log.filter.moved_a_file")
}, {
  value: ["fig_file_permanent_delete"],
  description: renderI18nText("activity_log.filter.permanently_deleted_a_file")
}, {
  value: ["fig_file_permanent_undelete", "fig_file_restore"],
  description: renderI18nText("activity_log.filter.restored_a_file")
}, {
  value: ["fig_file_set_password"],
  description: renderI18nText("activity_log.filter.fig_file_set_password")
}, {
  value: ["fig_file_unset_password"],
  description: renderI18nText("activity_log.filter.fig_file_unset_password")
}, {
  value: ["fig_file_rename"],
  description: renderI18nText("activity_log.filter.renamed_a_file")
}, {
  value: ["fig_file_save_as"],
  description: renderI18nText("activity_log.filter.saved_a_file")
}, {
  value: ["fig_file_trash"],
  description: renderI18nText("activity_log.filter.trashed_a_file")
}, {
  value: ["fig_file_view"],
  description: renderI18nText("activity_log.filter.viewed_a_file")
}, {
  value: ["fig_file_view_prototype"],
  description: renderI18nText("activity_log.filter.viewed_a_prototype")
}, {
  value: ["open_sessions_start"],
  description: renderI18nText("activity_log.filter.open_sessions_start")
}, {
  value: ["open_sessions_end"],
  description: renderI18nText("activity_log.filter.open_sessions_end")
}, ...tM, ...tJ, {
  value: tL,
  description: renderI18nText("activity_log.filter.projects")
}, {
  value: ["folder_create"],
  description: renderI18nText("activity_log.filter.created_a_project")
}, {
  value: ["folder_delete", "folder_trash", "folder_export", "folder_restore"],
  description: renderI18nText("activity_log.filter.deleted_a_project")
}, {
  value: ["folder_member_add", "folder_member_permission_change", "folder_member_remove"],
  description: renderI18nText("activity_log.filter.project_membership_changed")
}, {
  value: ["folder_move"],
  description: renderI18nText("activity_log.filter.moved_a_project")
}, {
  value: ["folder_rename"],
  description: renderI18nText("activity_log.filter.renamed_a_project")
}, {
  value: ["folder_team_access_change"],
  description: renderI18nText("activity_log.filter.changed_the_team_access_of_a_project")
}, {
  value: ["folder_transfer_sent", "folder_transfer_copy_sent", "folder_export"],
  description: renderI18nText("activity_log.filter.outgoing_transfers")
}, {
  value: ["folder_transfer_received", "folder_transfer_copy_received", "folder_transfer_approved", "folder_transfer_copy_approved", "folder_import"],
  description: renderI18nText("activity_log.filter.incoming_transfers")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.teams")
}, {
  value: ["team_create", "team_import"],
  description: renderI18nText("activity_log.filter.created_a_team")
}, {
  value: ["team_delete", "team_export"],
  description: renderI18nText("activity_log.filter.deleted_a_team")
}, {
  value: ["team_transfer_sent", "team_export"],
  description: renderI18nText("activity_log.filter.outgoing_transfers")
}, {
  value: ["team_transfer_received", "team_transfer_approved", "team_import"],
  description: renderI18nText("activity_log.filter.incoming_transfers")
}, {
  value: ["team_restore"],
  description: renderI18nText("activity_log.filter.restored_a_team")
}, {
  value: ["team_member_add", "team_member_permission_change", "team_member_remove"],
  description: renderI18nText("activity_log.filter.team_membership_changed")
}, {
  value: ["team_rename"],
  description: renderI18nText("activity_log.filter.renamed_a_team")
}, {
  value: ["team_org_access_change"],
  description: renderI18nText("activity_log.filter.changed_the_org_access_of_a_team")
}, {
  value: ["team_license_group_change", "team_workspace_change"],
  description: renderI18nText("activity_log.filter.changed_the_workspace_of_a_team")
}, {
  value: ["org_team_creation_controls"],
  description: renderI18nText("activity_log.filter.changed_team_creation_controls")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.organizations")
}, {
  value: ["org_merge"],
  description: renderI18nText("activity_log.filter.org_merged")
}, {
  value: ["org_user_create", "org_user_permission_change", "org_user_delete"],
  description: renderI18nText("activity_log.filter.org_membership_changed")
}, {
  value: ["roster_exported"],
  description: renderI18nText("activity_log.filter.exported_the_members_list")
}, {
  value: ["org_team_csv_exported"],
  description: renderI18nText("activity_log.filter.exported_the_org_team_list")
}, {
  value: ["workspace_team_csv_exported"],
  description: renderI18nText("activity_log.filter.exported_the_workspace_team_list")
}, ...(e ? tV : []), {
  value: ["org_invite_create"],
  description: renderI18nText("activity_log.filter.org_invite_created")
}, {
  value: ["org_auto_approval_setting_update"],
  description: jsx(Fragment, {
    children: renderI18nText("activity_log.filter.auto_approval_settings_updated")
  })
}, {
  value: ["cursor_chat_setting_change"],
  description: renderI18nText("activity_log.filter.cursor_chat_setting_change")
}, ...(e ? [{
  value: ["idle_timeout_setting_change"],
  description: renderI18nText("activity_log.filter.idle_timeout_setting_change")
}] : []), ...(e && t.shared_container_setting?.configured_upgrade_request_setting ? [{
  value: ["configurable_upgrade_request_setting_change", "configurable_upgrade_request_message_change"],
  description: renderI18nText("activity_log.filter.configurable_upgrade_request_flow_changed")
}] : []), {
  value: ["scim_token_generate", "scim_token_revoke"],
  description: renderI18nText("activity_log.filter.scim_token_generated_revoked")
}, {
  value: ["ai_features_enable", "ai_features_disable"],
  description: renderI18nText("activity_log.filter.ai_features_setting_change")
}, {
  value: ["ai_content_training_enable", "ai_content_training_disable"],
  description: renderI18nText("activity_log.filter.ai_content_training_setting_change")
}, {
  value: ["seats_renew"],
  description: renderI18nText("activity_log.filter.seats_renew")
}, ...(e && a ? [{
  value: ["mfa_required_setting_change"],
  description: renderI18nText("activity_log.filter.mfa_required_setting_change")
}] : []), {
  value: tL,
  description: renderI18nText("activity_log.filter.seat_changes")
}, {
  value: ["org_default_license_type_change"],
  description: renderI18nText("activity_log.filter.changed_default_role.seat_rename")
}, {
  value: ["org_user_account_type_upgrade_requested", "org_user_account_type_upgrade_approved", "org_user_account_type_upgrade_denied", "provisional_access_start", "provisional_access_end_request_approved", "provisional_access_end_request_denied", "provisional_access_end_new_request"],
  description: renderI18nText("activity_log.filter.upgrade_requests_and_activity")
}, {
  value: ["org_user_account_type_change", "org_user_account_type_change_to_full"],
  description: renderI18nText("activity_log.filter.org_role_changed.seat_rename")
}, ...(e ? tq.concat([{
  value: ["workspace_public_link_setting_change"],
  description: renderI18nText("activity_log.filter.changed_workspace_public_link_setting")
}, {
  value: ["external_collaboration_controls_setting_change"],
  description: renderI18nText("activity_log.filter.external_collaboration_controls_setting_change")
}]) : tq), ...(e ? tB : []), ...(e ? tG : []), ...(t.can_use_multi_idp ? tY : []), ...(e ? tz : []), ...(e ? tF : []), {
  value: tL,
  description: renderI18nText("activity_log.filter.libraries")
}, {
  value: ["org_library_setting_change"],
  description: renderI18nText("activity_log.filter.org_library_setting_changed")
}, ...(e ? t$ : []), ...(e && isBigmaEnabledAlias3(t) ? [{
  value: ["workspace_library_approve", "workspace_library_unapprove"],
  description: renderI18nText("activity_log.filter.workspace_library_approval_changed")
}] : []), ...(e && isBigmaEnabledAlias3(t) ? [{
  value: ["org_library_approve", "org_library_unapprove"],
  description: renderI18nText("activity_log.filter.org_library_approval_changed")
}] : []), {
  value: tL,
  description: renderI18nText("activity_log.filter.users")
}, ...(e ? [{
  value: ["user_idle_session_timeout"],
  description: renderI18nText("activity_log.filter.user_session_timed_out")
}] : []), {
  value: ["user_sign_in", "user_sign_out"],
  description: renderI18nText("activity_log.filter.user_signed_in_signed_out")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.community")
}, {
  value: ["community_hub_file_publish", "community_hub_file_update", "community_hub_file_delete"],
  description: renderI18nText("activity_log.filter.file_published_updated_deleted")
}, {
  value: ["community_plugin_publish", "community_plugin_update", "community_plugin_delete"],
  description: renderI18nText("activity_log.filter.plugin_published_updated_deleted")
}, {
  value: ["community_widget_publish", "community_widget_update", "community_widget_delete"],
  description: renderI18nText("activity_log.filter.widget_published_updated_deleted")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.private_plugins")
}, {
  value: ["private_plugin_publish"],
  description: renderI18nText("activity_log.filter.plugin_published")
}, {
  value: ["private_plugin_update"],
  description: renderI18nText("activity_log.filter.plugin_updated")
}, {
  value: ["private_plugin_delete"],
  description: renderI18nText("activity_log.filter.plugin_deleted")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.plugin_management")
}, {
  value: ["plugin_approvelist_enable", "plugin_approvelist_disable"],
  description: renderI18nText("activity_log.filter.plugin_approve_list_setting_changed")
}, {
  value: ["plugin_approvelist_request_org"],
  description: renderI18nText("activity_log.filter.plugin_approve_list_requested")
}, {
  value: ["plugin_approvelist_request_approve_org", "plugin_approvelist_request_reject_org", "plugin_approvelist_request_approve_workspace", "plugin_approvelist_request_reject_workspace", "plugin_approvelist_add", "plugin_approvelist_add_workspace", "plugin_approvelist_remove", "plugin_approvelist_remove_workspace"],
  description: renderI18nText("activity_log.filter.approve_list_plugins_reviewed")
}, {
  value: ["plugin_install", "plugin_uninstall"],
  description: renderI18nText("activity_log.filter.install_plugins_org_wide")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.plugin_publishers")
}, {
  value: ["plugin_publisher_accept_invite", "plugin_publisher_remove_invite"],
  description: renderI18nText("activity_log.filter.plugin_publisher_accept_remove_invite")
}, {
  value: ["plugin_publisher_invite"],
  description: renderI18nText("activity_log.filter.plugin_publisher_invite")
}, {
  value: ["plugin_publisher_remove"],
  description: renderI18nText("activity_log.filter.plugin_publisher_remove")
}, {
  value: ["plugin_ownership_transfer"],
  description: renderI18nText("activity_log.filter.plugin_ownership_transfer")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.private_widgets")
}, {
  value: ["private_widget_publish"],
  description: renderI18nText("activity_log.filter.widget_published")
}, {
  value: ["private_widget_update"],
  description: renderI18nText("activity_log.filter.widget_updated")
}, {
  value: ["private_widget_delete"],
  description: renderI18nText("activity_log.filter.widget_deleted")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.widget_management")
}, {
  value: ["widgets_enabled", "widgets_disable"],
  description: renderI18nText("activity_log.filter.widget_approve_list_setting_changed")
}, {
  value: ["widget_approvelist_request_org"],
  description: renderI18nText("activity_log.filter.widget_approve_list_requested")
}, {
  value: ["widget_approvelist_request_approve_org", "widget_approvelist_request_reject_org", "widget_approvelist_request_approve_workspace", "widget_approvelist_request_reject_workspace", "widget_approvelist_add", "widget_approvelist_add_workspace", "widget_approvelist_remove", "widget_approvelist_remove_workspace"],
  description: renderI18nText("activity_log.filter.approve_list_widgets_reviewed")
}, {
  value: ["widget_install", "widget_uninstall"],
  description: renderI18nText("activity_log.filter.install_widgets_org_wide")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.widget_publishers")
}, {
  value: ["widget_publisher_accept_invite", "widget_publisher_remove_invite"],
  description: renderI18nText("activity_log.filter.widget_publisher_accept_remove_invite")
}, {
  value: ["widget_publisher_invite"],
  description: renderI18nText("activity_log.filter.widget_publisher_invite")
}, {
  value: ["widget_publisher_remove"],
  description: renderI18nText("activity_log.filter.widget_publisher_remove")
}, {
  value: ["widget_ownership_transfer"],
  description: renderI18nText("activity_log.filter.widget_ownership_transfer")
}, ...tU, {
  value: tL,
  description: renderI18nText("activity_log.filter.audio")
}, {
  value: ["voice_call_join_req"],
  description: renderI18nText("activity_log.filter.user_joined_audio_call")
}, {
  value: tL,
  description: renderI18nText("activity_log.filter.integrations")
}, {
  value: ["personal_access_token_create", "personal_access_token_delete"],
  description: renderI18nText("activity_log.filter.personal_access_token_create_delete")
}, {
  value: ["oauth_token_grant", "oauth_token_revoke"],
  description: renderI18nText("activity_log.filter.oauth_token_grant_revoke")
}, ...(p3() ? [{
  value: ["supabase_setting_change"],
  description: renderI18nText("activity_log.filter.supabase_setting_change")
}, {
  value: ["supabase_project_connected"],
  description: renderI18nText("activity_log.filter.supabase_project_connected")
}, {
  value: ["supabase_project_disconnected"],
  description: renderI18nText("activity_log.filter.supabase_project_disconnected")
}] : []), ...tW, ...tH, ...tP];
let tX = [{
  value: {
    start: _$$A2().format("YYYY-MM-DD"),
    end: _$$A2().format("YYYY-MM-DD")
  },
  description: renderI18nText("activity_log.filter.today")
}, {
  value: {
    start: _$$A2().subtract(1, "days").format("YYYY-MM-DD"),
    end: _$$A2().format("YYYY-MM-DD")
  },
  description: renderI18nText("activity_log.filter.yesterday")
}, {
  value: {
    start: _$$A2().subtract(7, "days").format("YYYY-MM-DD"),
    end: _$$A2().format("YYYY-MM-DD")
  },
  description: renderI18nText("activity_log.filter.last_week")
}, {
  value: {
    start: _$$A2().subtract(30, "days").format("YYYY-MM-DD"),
    end: _$$A2().format("YYYY-MM-DD")
  },
  description: renderI18nText("activity_log.filter.last_month")
}];
function tQ(e) {
  return jsx("div", {
    children: e.token.content
  });
}
class tZ extends PureComponent {
  fetchLogs = e => {
    let t = e ? this.displayedFilterParams() : this.props.activityLogs.lastQuery;
    this.props.fetchLogs({
      newQuery: e,
      ...t
    });
  };
  loadMore = () => {
    this.fetchLogs(!1);
  };
  clearFilter = () => {
    this.setState(this.initialFilterState());
  };
  showClearButton = () => {
    let e = (({
      emails: e,
      team: t,
      event: a,
      date: n,
      showCustomDatePicker: s
    }) => ({
      emails: e,
      team: t,
      event: a,
      date: n,
      showCustomDatePicker: s
    }))(this.state);
    return !e3()(e, this.initialFilterState());
  };
  filterLogs = () => {
    let e = KJ(this.state.date, um(this.state.emails), this.props.org.activity_logs_max_query_duration_in_days);
    if (e) {
      this.setState(t => ({
        error: {
          message: e.message,
          field: e.field
        },
        emails: {
          ...t.emails,
          errorMessage: "email" === e.field ? e.message : ""
        }
      }));
      return;
    }
    this.setState(e => ({
      error: null,
      emails: {
        ...e.emails,
        errorMessage: ""
      }
    }));
    this.fetchLogs(!0);
  };
  onRequestCSV = () => {
    if (this.state.pendingRequest) return;
    let e = KJ(this.state.date, um(this.state.emails), this.props.org.activity_logs_max_query_duration_in_days);
    if (e) {
      this.setState(t => ({
        error: {
          message: e.message,
          field: e.field
        },
        emails: {
          ...t.emails,
          errorMessage: "email" === e.field ? e.message : ""
        }
      }));
      return;
    }
    this.setState(e => ({
      error: null,
      pendingRequest: !0,
      emails: {
        ...e.emails,
        errorMessage: ""
      }
    }));
    this.props.dispatch(VisualBellActions.enqueue({
      message: getI18nString("activity_log.table.preparing_request_for_csv"),
      type: "orgRoster.exportCSV",
      icon: VisualBellIcon.SPINNER
    }));
    let t = this.displayedFilterParams();
    XHR.post("/api/activity_logs/export", {
      org_id: this.props.org.id,
      emails: t.emails?.join(),
      start_time: t.date.start,
      end_time: _$$H(t.date.end),
      event_names: t.eventName?.join(",")
    }).then(() => {
      this.props.dispatch(VisualBellActions.enqueue({
        message: getI18nString("activity_log.table.activity_log.table.csv_requested_success"),
        type: "orgRoster.exportCSV",
        icon: VisualBellIcon.CHECK
      }));
    }, e => {
      this.props.dispatch(VisualBellActions.enqueue({
        message: resolveMessage(e, e.data?.message) || getI18nString("activity_log.table.csv_requested_error"),
        type: "orgRoster.exportCSV",
        icon: VisualBellIcon.EXCLAMATION,
        error: !0
      }));
    }).then(() => {
      this.setState({
        pendingRequest: !1
      });
    });
  };
  onTeamClick = e => {
    this.setState({
      team: e
    });
  };
  onEventClick = e => {
    this.setState({
      event: e
    });
  };
  onEmailInputChange = e => {
    this.setState({
      emails: e
    });
  };
  onDateOptionClick = e => {
    if (null === e.value) {
      this.setState({
        showCustomDatePicker: !0
      });
      return;
    }
    this.setState({
      date: e.value,
      showCustomDatePicker: !1
    });
  };
  onStartDateChange = e => {
    this.setState({
      date: {
        ...this.state.date,
        start: e.target.value
      }
    });
  };
  onEndDateChange = e => {
    this.setState({
      date: {
        ...this.state.date,
        end: e.target.value
      }
    });
  };
  canLoadMore = () => !(this.props.activityLogs.isLoading || 0 === this.props.activityLogs.logs.length || isEmptyObject(this.props.activityLogs.cursor));
  handleScroll = () => {
    !this.canLoadMore() || this.scrollContainerRef.getScrollHeight() - (this.scrollContainerRef.getScrollTop() + this.scrollContainerRef.getTrackHeight()) > 300 || this.loadMore();
  };
  renderLogResults = () => this.props.activityLogs.isLoading && this.props.activityLogs.isNewQuery ? jsx(LoadingOverlay, {}) : this.state.filteredActivityLogs.length > 0 ? jsxs("div", {
    children: [jsx(zR, {
      logs: this.state.filteredActivityLogs,
      org: this.props.org,
      dispatch: this.props.dispatch,
      hideIpColumn: this.props.hideIpColumn
    }), jsx("div", {
      className: "activity_logs_section--tableNavigation--44R60",
      children: this.props.activityLogs.isLoading && !this.props.activityLogs.isNewQuery ? jsx(LoadingOverlay, {}) : this.canLoadMore() && jsx(ButtonBasePrimary, {
        onClick: this.loadMore,
        children: renderI18nText("activity_log.table.load_more")
      })
    })]
  }) : jsx("div", {
    className: "activity_logs_section--emptyState--dpaiR",
    children: renderI18nText("activity_log.table.no_results_were_found")
  });
  constructor(e) {
    let t;
    if (super(e), this.props.initialEventOptionId) {
      let e = tK(this.props.org.bigma_enabled, this.props.org, this.props.orgCanUseMfaRequiredForGuests).find(e => e.description.props.id === this.props.initialEventOptionId);
      e && (t = e);
    }
    this.state = {
      ...this.initialFilterState(),
      error: null,
      pendingRequest: !1,
      filteredActivityLogs: [],
      event: t ?? tD
    };
  }
  initialFilterState() {
    let e = this.props.initialStartTime ? _$$A2(this.props.initialStartTime) : _$$A2().subtract(30, "days");
    let t = _$$Rs();
    this.props.initialEmail && (t = {
      ...t,
      tokens: t.tokens.concat({
        state: _$$d2.OK,
        content: this.props.initialEmail
      })
    });
    return {
      emails: t,
      team: null,
      event: tD,
      date: {
        start: e.format("YYYY-MM-DD"),
        end: _$$A2().format("YYYY-MM-DD")
      },
      showCustomDatePicker: !!this.props.initialStartTime
    };
  }
  componentDidMount() {
    this.fetchLogs(!0);
  }
  componentDidUpdate(e, t) {
    let a = this.displayedFilterParams(t);
    let n = this.displayedFilterParams(this.state);
    if (e3()(a, n) || this.filterLogs(), e.activityLogs.logs !== this.props.activityLogs.logs) {
      let e = this.props.activityLogs.logs.filter(e => function (e, t) {
        if (tB.includes(t)) switch (e.event_name) {
          case "license_group_create":
          case "license_group_rename":
          case "license_group_delete":
          case "license_group_admins_add":
          case "license_group_admins_remove":
          case "license_group_membership_change":
          case "license_group_membership_self_select":
            return !e.metadata.is_billing_group;
          default:
            return !0;
        }
        if (tG.includes(t)) switch (e.event_name) {
          case "license_group_create":
          case "license_group_rename":
          case "license_group_delete":
          case "license_group_admins_add":
          case "license_group_admins_remove":
          case "license_group_membership_change":
          case "license_group_membership_self_select":
            return !!e.metadata.is_billing_group;
        }
        return !0;
      }(e, this.state.event));
      this.setState({
        filteredActivityLogs: e
      });
    }
  }
  displayedFilterParams(e) {
    let t = e ?? this.state;
    return {
      teamId: t.team?.id ?? "",
      emails: [...new Set(N$(t.emails))],
      eventName: t.event.value,
      date: {
        ...t.date
      }
    };
  }
  render() {
    return jsxs(Fragment, {
      children: [this.state.emails.tokens.length > 0 && jsx(t1, {}), !this.props.hideHeader && jsx(_$$K2, {
        title: _$$O(DashboardSection.ACTIVITY),
        rightActions: jsx(IconButton, {
          "aria-label": getI18nString("activity_log.table.get_csv"),
          variant: "secondary",
          onClick: this.onRequestCSV,
          htmlAttributes: {
            "data-onboarding-key": _$$eI
          },
          children: jsx(_$$v, {})
        })
      }), jsx("div", {
        className: cssBuilderInstance.wFull.hFull.overflowAuto.$,
        children: jsxs(_$$P, {
          horizontalScrollingDisabled: !0,
          className: e4()(jG, cssBuilderInstance.wFull.hFull.$),
          innerClassName: this.props.hideHeader ? void 0 : NM,
          onScroll: this.handleScroll,
          ref: e => this.scrollContainerRef = e,
          minContentWidth: parsePxInt(URh),
          children: [jsxs("div", {
            className: ln,
            style: {
              paddingTop: 8
            },
            children: [jsx(t0, {
              bigmaEnabled: this.props.org.bigma_enabled,
              clearFilter: this.clearFilter,
              dispatch: this.props.dispatch,
              dropdownShown: this.props.dropdownShown,
              filtersConfig: this.state,
              onDateOptionClick: this.onDateOptionClick,
              onEmailInputChange: this.onEmailInputChange,
              onEndDateChange: this.onEndDateChange,
              onEventClick: this.onEventClick,
              onRequestCSV: this.onRequestCSV,
              onStartDateChange: this.onStartDateChange,
              onTeamClick: this.onTeamClick,
              org: this.props.org,
              orgCanUseMfaRequiredForGuests: this.props.orgCanUseMfaRequiredForGuests,
              orgTeams: this.props.orgTeams,
              showClearButton: this.showClearButton()
            }), jsxs(Hj, {
              useAdminTableStyles: !0,
              header: !0,
              children: [jsx("div", {
                className: "activity_logs_section--dateHeaderColumn--vQM07 activity_logs_table--dateHeaderColumn--MAwXc activity_logs_table--date--HSpQ0",
                children: renderI18nText("activity_log.table.date")
              }), jsx("div", {
                className: "activity_logs_section--actorHeaderColumn--1DUMW activity_logs_table--actorHeaderColumn--LWBMR activity_logs_table--_actor--MBVmV",
                children: renderI18nText("activity_log.table.team_member")
              }), jsx("div", {
                className: "activity_logs_section--eventDescriptionColumn--2kBTN activity_logs_table--eventDescriptionColumn--iVdqK",
                children: renderI18nText("activity_log.table.event")
              }), jsx("div", {
                className: "activity_logs_section--productColumn--C4Led activity_logs_table--productColumn--Rdwla",
                children: renderI18nText("activity_log.table.product")
              }), jsx("div", {
                className: "activity_logs_section--teamColumn--jRrW- activity_logs_table--teamColumn--byNbw",
                children: renderI18nText("activity_log.table.team")
              }), !this.props.hideIpColumn && jsx("div", {
                className: "activity_logs_section--ipColumn--JYWzR activity_logs_table--ipColumn--yvwN5",
                children: renderI18nText("activity_log.table.ip_address")
              })]
            })]
          }), this.renderLogResults()]
        })
      })]
    });
  }
}
function t0(e) {
  let t = "activity-log-events-dropdown";
  let a = "activity-log-teams-dropdown";
  let n = "activity-log-date-dropdown";
  let r = (t, a, n) => {
    let {
      today,
      minDate
    } = Bd(e.org.activity_logs_max_query_duration_in_days);
    return jsx(BigTextInputForwardRef, {
      type: "date",
      className: a ? "activity_logs_section--dateErrorInput--5ngnu activity_logs_section--dateInput--6OLqr activity_logs_section--errorBorder--eU74Y" : "activity_logs_section--dateInput--6OLqr",
      onChange: n,
      value: t,
      min: minDate,
      max: today
    });
  };
  let l = e.filtersConfig.error?.field;
  let o = l && e.filtersConfig.error.message;
  let d = !!e.dropdownShown && e.dropdownShown.type === t;
  let c = !!e.dropdownShown && e.dropdownShown.type === a;
  let _ = !!e.dropdownShown && e.dropdownShown.type === n;
  let u = e.filtersConfig.showCustomDatePicker ? void 0 : tX.find(t => e3()(t.value, e.filtersConfig.date));
  return jsx("div", {
    className: "activity_logs_section--menuBar--UAHjd multi_select_list--menuBar--8xNGR",
    children: jsxs("div", {
      className: "activity_logs_section--menuBarLeft--4iFuQ multi_select_list--menuBarLeft--aUL8Q",
      children: [!isMobileUA && jsx(_$$p, {
        children: jsx(tv, {})
      }), jsx(_$$P2, {
        onboardingKey: Ks,
        containerClassName: "activity_logs_section--emailInput--Jo-V5",
        autocomplete: e.filtersConfig.emails,
        placeholder: getI18nString("activity_log.table.member_email_addresses"),
        onChange: e.onEmailInputChange,
        validateToken: e => ({
          state: isValidEmail(e) ? _$$d2.OK : _$$d2.ERROR,
          content: e
        }),
        TokenComponent: tQ
      }), jsx("div", {
        className: "activity_logs_section--dateDropdownContainer--CtSQb",
        children: jsxs(_$$V, {
          showingDropdown: _,
          type: n,
          dispatch: e.dispatch,
          children: [u ? u.description : getI18nString("activity_log.filter.custom"), _ && jsx("div", {
            className: tA,
            style: e.dropdownShown.data.position,
            children: jsxs(gw, {
              dispatch: e.dispatch,
              className: "activity_logs_section--dateDropdown--fnvV4 activity_logs_section--dropdown--mr5p8",
              children: [tX.map(t => jsx(MM, {
                checked: u === t,
                onClick: () => e.onDateOptionClick(t),
                children: t.description
              }, `${t.value}-${t.description.props.id}`)), jsx(wv, {}), jsx(MM, {
                checked: !u,
                onClick: () => e.onDateOptionClick({
                  value: null,
                  description: renderI18nText("activity_log.filter.custom")
                }),
                children: renderI18nText("activity_log.filter.custom")
              })]
            })
          })]
        })
      }), e.filtersConfig.showCustomDatePicker ? jsxs("div", {
        className: "activity_logs_section--datesContainer--MlS-w",
        children: [r(e.filtersConfig.date.start, "startDate" === l, e.onStartDateChange), jsx("div", {
          className: "activity_logs_section--dateSeparator--4zk2z",
          children: "\u2013"
        }), r(e.filtersConfig.date.end, "endDate" === l, e.onEndDateChange)]
      }) : null, jsxs(_$$V, {
        showingDropdown: d,
        type: t,
        dispatch: e.dispatch,
        children: [null === e.filtersConfig.event.value ? getI18nString("activity_log.table.events_all") : jsx("span", {
          className: "activity_logs_section--eventSelector--kR3tI ellipsis--ellipsis--Tjyfa",
          children: renderI18nText("activity_log.table.event_selected", {
            event: e.filtersConfig.event.description
          })
        }), d && jsx("div", {
          className: tA,
          style: e.dropdownShown.data.position,
          children: jsx(gw, {
            dispatch: e.dispatch,
            className: tR,
            children: tK(e.bigmaEnabled, e.org, e.orgCanUseMfaRequiredForGuests).map(t => {
              let a = t.description.props.id;
              let n = `${t.value}-${a}`;
              return t.value === tL ? jsxs(_$$Fragment, {
                children: [jsx(wv, {}), jsx(MM, {
                  disabled: !0,
                  checked: !1,
                  onClick: lQ,
                  children: jsx("span", {
                    className: tO,
                    children: t.description
                  })
                })]
              }, n) : jsx(MM, {
                checked: e.filtersConfig.event.description.props.id === a,
                onClick: () => e.onEventClick(t),
                children: jsx("span", {
                  className: tO,
                  children: t.description
                })
              }, n);
            })
          })
        })]
      }), jsxs(_$$V, {
        showingDropdown: c,
        type: a,
        dispatch: e.dispatch,
        children: [null === e.filtersConfig.team ? getI18nString("activity_log.table.teams_all") : getI18nString("activity_log.table.team_selected", {
          team: truncate(e.filtersConfig.team.name, 21)
        }), c && jsx("div", {
          className: tA,
          style: e.dropdownShown.data.position,
          children: jsxs(gw, {
            dispatch: e.dispatch,
            className: tR,
            children: [jsx(MM, {
              checked: null === e.filtersConfig.team,
              onClick: () => e.onTeamClick(null),
              children: renderI18nText("activity_log.table.all")
            }), jsx(wv, {}), e.orgTeams.map(t => jsx(MM, {
              checked: e.filtersConfig.team === t,
              onClick: () => e.onTeamClick(t),
              children: t.name
            }, t.id))]
          })
        })]
      }), e.showClearButton && jsx(ButtonSecondary, {
        className: "activity_logs_section--clearButton--3duaF",
        onClick: () => e.clearFilter(),
        children: renderI18nText("activity_log.table.clear")
      }), o && jsxs(Fragment, {
        children: [jsx("div", {
          className: "activity_logs_section--flexBreak--AVIFi"
        }), jsx("span", {
          className: "activity_logs_section--errorMessage--uJakf",
          children: o
        })]
      })]
    })
  });
}
function t1() {
  let e = _$$q(_$$f, !0);
  _$$h(() => {
    e();
  });
  return null;
}
tZ.displayName = "ActivityLogsPage";
let t7 = atom(!1);
let t9 = "seen_org_admin_billing_groups_onboarding";
let ae = rn("org_admin_license_groups_onboarding", _$$R(O5v));
let at = userFlagExistsAtomFamily(t9);
function aa() {
  let e = useAtomWithSubscription(at);
  let t = useAtomWithSubscription(t7);
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = _$$e2({
    overlay: O5v,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  let l = zl(ae);
  _$$h(() => {
    "reset" === l.currentState ? show() : show({
      canShow: e => !e && !isMobileUA
    });
  });
  _$$E2(uniqueId, "Reset Onboarding", () => show());
  let o = [];
  t || o.push({
    title: renderI18nText("org_admin_onboarding.billing_groups.tooltip.create.title"),
    description: renderI18nText("org_admin_onboarding.billing_groups.tooltip.create.description.seat_rename"),
    trackingContextName: `${gx} - create`,
    targetKey: Iq,
    emphasized: !0,
    clickOutsideToHide: !0
  });
  o.push({
    title: renderI18nText("org_admin_onboarding.billing_groups.add_members.title"),
    description: renderI18nText("org_admin_onboarding.billing_groups.add_members.description"),
    trackingContextName: `${gx} - click`,
    targetKey: Bq,
    emphasized: !0,
    clickOutsideToHide: !0
  });
  o.push({
    title: renderI18nText("org_admin_onboarding.billing_groups.tooltip.edit.title"),
    description: renderI18nText("org_admin_onboarding.billing_groups.tooltip.edit.description"),
    trackingContextName: `${gx} - edit`,
    targetKey: Pz,
    emphasized: !0,
    clickOutsideToHide: !0
  });
  return jsx(WZ, {
    isShowing,
    userFlagOnShow: t9,
    steps: o,
    onComplete: complete
  });
}
let aw = registerModal(function (e) {
  let t = useDispatch();
  let a = MX();
  let n = useModalManager(e);
  let l = useCurrentPublicPlan("LicenseGroupDeleteModal").unwrapOr(null);
  let o = getParentOrgIdIfOrgLevel(l);
  let d = e.licenseGroups.map(e => e.id);
  let c = e.licenseGroups.map(e => e.name);
  let [_, u] = useState(!1);
  return jsx(TrackingProvider, {
    name: "Delete license group modal",
    properties: {
      numLicenseGroups: e.licenseGroups.length
    },
    children: jsx(ModalRootComponent, {
      manager: n,
      width: 372,
      children: jsxs(ModalFormContents, {
        onSubmit: _ ? n => {
          n.preventDefault();
          XHR.del(`/api/orgs/${o}/license_groups`, {
            license_group_ids: d
          }).then(({
            data: n
          }) => {
            t(VisualBellActions.enqueue({
              type: "license-group-delete",
              message: getI18nString("billing_groups_table.billing_groups_deleted_toast", {
                licenseGroupsCount: e.licenseGroups.length,
                licenseGroupName: e.licenseGroups[0]?.name ?? ""
              })
            }));
            e.onClose();
            t(w4({
              licenseGroups: n.meta,
              deletingAll: a.length === e.licenseGroups.length
            }));
          }).catch(e => {
            t(VisualBellActions.enqueue({
              error: !0,
              message: e.message ?? getI18nString("billing_groups_table.delete_modal.an_error_occurred_while_deleting_billing_groups")
            }));
          });
        } : lQ,
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("billing_groups_table.delete_n_billing_groups", {
              licenseGroupsCount: e.licenseGroups.length
            })
          })
        }), jsxs(DialogBody, {
          children: [jsxs(AutoLayout, {
            direction: "vertical",
            spacing: 16,
            children: [jsx("h3", {
              children: renderI18nText("billing_groups_table.delete_modal.deleting_the_billing_groups_will_cause", {
                licenseGroupsCount: e.licenseGroups.length,
                licenseGroupsNames: jsx(TextWithTruncation, {
                  fontWeight: "bold",
                  children: formatList(c)
                })
              })
            }), jsx("span", {
              className: "x1xlr1w8",
              children: getI18nString("billing_groups_table.delete_modal.are_you_sure_you_want_to_delete_these_billing_groups", {
                licenseGroupsCount: e.licenseGroups.length
              })
            })]
          }), jsx("div", {
            className: "xehsoiq",
            children: jsx(Checkbox, {
              label: jsx(Label, {
                children: renderI18nText("billing_groups_table.delete_modal.i_understand_that_this_action_isnt_reversible")
              }),
              checked: _,
              onChange: () => u(!_)
            })
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              variant: "secondary",
              onClick: e.onClose,
              children: renderI18nText("general.cancel")
            }), jsx($z, {
              variant: "destructive",
              disabled: !_,
              type: "submit",
              children: getI18nString("billing_groups_table.delete_n_billing_groups", {
                licenseGroupsCount: e.licenseGroups.length
              })
            })]
          })
        })]
      })
    })
  });
}, "LicenseGroupDeleteModal");
function aC({
  licenseGroup: e,
  autocomplete: t,
  name: a,
  setName: n,
  validateName: i,
  hasError: r,
  onClose: l,
  onAutocompleteChange: o,
  onSubmit: d
}) {
  let c = !!e;
  return jsx(OJ, {
    title: c ? getI18nString("billing_groups_table.edit_billing_group_title") : getI18nString("billing_groups_table.create_billing_group_title"),
    onClose: l,
    minWidth: 500,
    children: jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 16,
      padding: 16,
      children: [!c && jsxs(AutoLayout, {
        direction: "vertical",
        spacing: 0,
        children: [jsx(TextWithTruncation, {
          children: renderI18nText("billing_groups_table.edit_billing_group_modal.add_people_to_a_billing_group.seat_rename")
        }), jsx(SecureLink, {
          trusted: !0,
          target: "_blank",
          href: "https://help.figma.com/hc/articles/19100885191191",
          children: jsx(TextWithTruncation, {
            children: renderI18nText("general.learn_more")
          })
        })]
      }), jsx("label", {
        className: cssBuilderInstance.wFull.$,
        children: jsxs(AutoLayout, {
          width: "fill-parent",
          direction: "vertical",
          spacing: 8,
          children: [jsx(TextWithTruncation, {
            fontWeight: "medium",
            children: renderI18nText("billing_groups_table.name_input")
          }), jsx(BigTextInputForwardRef, {
            autoFocus: !0,
            className: e4()("license_group_edit_modal--inputFieldFullWidth--5e5TD license_group_edit_modal--inputField--G3ewv", {
              "license_group_edit_modal--inputFieldWithError--d-g82": r
            }),
            placeholder: getI18nString("billing_groups_table.name_input_placeholder"),
            onChange: e => {
              n(e.currentTarget.value);
              i(e.currentTarget.value);
            },
            value: a,
            maxLength: BUTTON_INTERNAL_CONST_Z12
          }), "unassigned" === r && jsx(TextWithTruncation, {
            color: "danger",
            children: renderI18nText("billing_groups_table.billing_group_name_unassigned_error")
          }), "duplicated" === r && jsx(TextWithTruncation, {
            color: "danger",
            children: renderI18nText("billing_groups_table.billing_group_name_already_exists_error")
          })]
        })
      }), jsxs("label", {
        className: cssBuilderInstance.wFull.$,
        children: [jsx("span", {
          className: "license_group_edit_modal--inputLabel--ir31K",
          children: renderI18nText("billing_groups_table.admins_input")
        }), jsx("div", {
          children: jsx(TextWithTruncation, {
            color: "secondary",
            children: renderI18nText("billing_groups_table.admins_input_help_text")
          })
        }), jsx("div", {
          className: cssBuilderInstance.mt8.relative.$,
          children: jsx(_$$g4, {
            placeholder: getI18nString("billing_groups_table.admin_input_placeholder"),
            autocomplete: t,
            onAutocompleteChange: o
          })
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.flex.justifyEnd.wFull.$,
        children: [jsx(ButtonSecondary, {
          onClick: l,
          children: renderI18nText("general.cancel")
        }), jsx(TrackingProvider, {
          name: "License Group Modal Submit",
          properties: {
            licenseGroupId: e?.id
          },
          children: jsx(ButtonBasePrimaryTracked, {
            className: "license_group_edit_modal--submitButton--mwVBh",
            onClick: d,
            disabled: !!r || !a.length || 0 === t.tokens.length,
            children: c ? renderI18nText("billing_groups_table.billing_group_edit_save_changes") : renderI18nText("billing_groups_table.create_billing_group_button")
          })
        })]
      })]
    })
  });
}
let aS = registerModal(function (e) {
  let t = useDispatch();
  let [a, n] = useState(null);
  let l = useCurrentUserOrgId();
  let o = useCurrentUserOrg();
  let d = MX();
  let _ = Xr(t7);
  let u = !!e.licenseGroup;
  let m = [];
  u && !e.licenseGroup.is_orphaned && (m = e.licenseGroup.admin_users_metadata.map(e => ({
    state: _$$d2.OK,
    content: {
      id: "",
      user: e
    }
  })));
  let [p, g] = useState(u ? {
    ..._$$Rs(),
    tokens: m
  } : _$$Rs());
  let h = useCallback(t => {
    trackEventAnalytics("Workspace admin search performed", {
      orgId: o?.id,
      licenseGroupId: e.licenseGroup?.id,
      queryLength: t.inputValue.length
    });
    g(t);
  }, [o?.id, e.licenseGroup?.id]);
  let [x, b] = useState(u ? e.licenseGroup.name : "");
  return jsx(aC, {
    autocomplete: p,
    name: x,
    setName: b,
    validateName: t => {
      if (d.find(a => a.name.trim().toLowerCase() === t.trim().toLowerCase() && e.licenseGroup?.id !== a.id)) {
        n("duplicated");
        return;
      }
      if ("unassigned" === t.trim().toLowerCase()) {
        n("unassigned");
        return;
      }
      n(null);
    },
    hasError: a,
    licenseGroup: e.licenseGroup,
    onClose: () => {
      trackEventAnalytics("CTA Clicked", {
        name: "License Group Modal Cancel",
        licenseGroupId: e.licenseGroup?.id,
        orgId: l
      });
      t(hideModal());
    },
    onSubmit: () => {
      let a = ({
        data: e
      }) => {
        let a = !u && 0 === d.length;
        t(VisualBellActions.enqueue({
          type: "license-group-edit",
          message: u ? getI18nString("billing_groups_table.billing_group_edited_toast", {
            workspaceName: x
          }) : getI18nString("billing_groups_table.billing_group_created_toast", {
            workspaceName: x
          })
        }));
        t(hideModal());
        t(yo({
          licenseGroup: e.meta,
          orgId: l
        }));
        a && (trackEventAnalytics("First License Group Created", {
          licenseGroupId: e.meta?.id,
          orgId: l
        }), _(!0));
      };
      let n = e => {
        t(VisualBellActions.enqueue({
          error: !0,
          message: e.message
        }));
      };
      u ? XHR.put(`/api/license_group/${e.licenseGroup.id}`, {
        name: x,
        admin_user_ids: p.tokens.map(e => e.content.user.id),
        showing_billing_groups: !0
      }).then(a).catch(n) : XHR.post(`/api/orgs/${l}/license_groups`, {
        name: x,
        admin_user_ids: p.tokens.map(e => e.content.user.id),
        showing_billing_groups: !0
      }).then(a).catch(n);
    },
    onAutocompleteChange: h
  });
}, "LicenseGroupEditModal");
function aN({
  selectedLicenseGroups: e
}) {
  let t = useDispatch();
  return 0 === e.length ? null : jsxs(Fragment, {
    children: [1 === e.length && !!e[0].id && jsxs(Fragment, {
      children: [jsx(IU, {
        onClick: () => {
          t(showModalHandler({
            type: aS,
            data: {
              licenseGroup: e[0]
            }
          }));
        },
        label: getI18nString("billing_groups_table.edit_details")
      }), jsx(IU, {
        onClick: () => {
          t(selectViewAction({
            view: "licenseGroup",
            subView: UserGroupRole.ADMIN,
            licenseGroupId: e[0].id,
            selectedTab: GroupType.MEMBERS,
            orgAdminOriginTab: DashboardSection.BILLING
          }));
        },
        label: getI18nString("billing_groups_table.manage")
      })]
    }), jsx(IU, {
      onClick: () => t(showModalHandler({
        type: aw,
        data: {
          licenseGroups: e.filter(e => !!e.id)
        }
      })),
      label: getI18nString("general.delete")
    })]
  });
}
let aA = "license_groups_table--overflowWrapper--FJgye";
function aR({
  item: e
}) {
  let t = useDispatch();
  return e.id ? jsxs(zx, {
    dataOnboardingKey: Pz,
    children: [jsx(_$$p3, {
      onClick: () => {
        t(showModalHandler({
          type: aS,
          data: {
            licenseGroup: e
          }
        }));
      },
      children: getI18nString("billing_groups_table.edit_details")
    }, "license-group-edit-action"), jsx(_$$p3, {
      onClick: () => {
        t(selectViewAction({
          view: "licenseGroup",
          subView: UserGroupRole.ADMIN,
          licenseGroupId: e.id,
          selectedTab: GroupType.MEMBERS,
          orgAdminOriginTab: DashboardSection.BILLING
        }));
      },
      children: getI18nString("billing_groups_table.manage")
    }, "license-group-manage-action"), jsx(_$$p3, {
      onClick: () => {
        t(showModalHandler({
          type: aw,
          data: {
            licenseGroups: [e]
          }
        }));
      },
      children: getI18nString("general.delete")
    }, "license-group-delete-action")]
  }) : null;
}
let aO = new Ef([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "name",
    weight: 1
  }]
});
function aL({
  count: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.borderBox.minW16.px4.alignCenter.$$if(0 === e, cssBuilderInstance.colorBgHover, cssBuilderInstance.colorBgWarning).$,
    style: {
      borderRadius: "100px"
    },
    "data-preferred-theme": "light",
    "data-testid": "incomplete-groups-count-badge",
    children: jsx(TextWithTruncation, {
      color: "default",
      fontWeight: "medium",
      children: e
    })
  });
}
let aD = parsePxInt(YEj);
let aM = e => e.id ?? aP;
let aP = "unassigned";
function aU(e) {
  let t = useDispatch();
  let a = T();
  let [n, l] = useState("");
  let [o, d] = useState(!1);
  let c = MX();
  let _ = useThemeContext();
  let u = [{
    name: getI18nString("billing_groups_table.column_header.name"),
    className: "license_groups_table--nameColumn--LEWms license_groups_table--column--KDz0m table--column--974RA",
    getSortValue: e => e.id ? e.name : "0",
    cellComponent: e => e.id ? jsx("div", {
      "data-onboarding-key": Bq,
      children: e.name
    }) : jsxs(AutoLayout, {
      spacing: 4,
      padding: 0,
      children: [jsx(TextWithTruncation, {
        children: renderI18nText("workspace_table.unassigned")
      }), jsx(TextWithTruncation, {
        color: "secondary",
        children: renderI18nText("workspace_table.unassigned_row_default")
      })]
    })
  }, {
    name: getI18nString("billing_groups_table.column_header.admins"),
    className: "license_groups_table--adminColumn--u-0gw license_groups_table--column--KDz0m table--column--974RA",
    cellComponent: t => {
      let a = t.id ? t.admin_users_metadata : [];
      let n = a.length ? a : e.orgAdmins.filter(e => e.permission === FUserRoleType.ADMIN).map(e => e.user);
      let i = _$$e4(n);
      return jsx(Fragment, {
        children: n.length > 1 ? jsxs(Fragment, {
          children: [jsx(_$$f2, {
            className: "license_groups_table--overflowTextAvatar--xCrEj",
            text: `${n.length}`
          }), jsx("p", {
            className: "license_groups_table--overflowTextList--vdg2n ellipsis--ellipsis--Tjyfa",
            children: i
          })]
        }) : jsx(_$$az, {
          entity: n[0],
          size: 22
        })
      });
    }
  }, {
    name: getI18nString("billing_groups_table.column_header.members"),
    className: "license_groups_table--membersColumn--3Z-23 license_groups_table--column--KDz0m table--column--974RA",
    cellComponent: t => renderI18nText("billing_groups_table.n_members", {
      count: e.licenseGroupMemberCounts[t.id ?? _$$s2]?.total_count ?? 0
    }),
    getSortValue: t => e.licenseGroupMemberCounts[t.id ?? _$$s2]?.total_count ?? 0,
    sortNumerically: !0
  }, ...collaboratorSet.sort(compareProductAccessTypes).map(t => ({
    name: getI18nString("billing_groups_table.column_header.seats", {
      seatType: _$$tI(t)
    }),
    className: "license_groups_table--licenseCountsColumn--wVXQD license_groups_table--column--KDz0m table--column--974RA",
    cellComponent: a => {
      let n = e.licenseGroupMemberCounts[a.id ?? _$$s2]?.editor_counts?.[t] ?? 0;
      return jsx("div", {
        children: renderI18nText("billing_groups_table.n_editors.seat_rename", {
          count: n
        })
      });
    },
    getSortValue: a => e.licenseGroupMemberCounts[a.id ?? _$$s2]?.editor_counts[t] ?? 0,
    sortNumerically: !0
  }))];
  e.invoices && hX(e.invoices) && u.splice(1, 0, {
    name: getI18nString("billing_groups_table.column_header.true_up_status"),
    className: "license_groups_table--trueUpColumn--YW1JC license_groups_table--column--KDz0m table--column--974RA",
    getSortValue: t => t.id ? `${NV(t, e.invoices) ? "c" : "b"}${t.name}` : "a",
    cellComponent: t => {
      if (!t.id) return jsx(Fragment, {
        children: "\u2013"
      });
      let a = !NV(t, e.invoices);
      return jsxs("span", {
        className: cssBuilderInstance.flex.itemsCenter.$,
        children: [jsx(pw, {
          className: cssBuilderInstance.mr8.$,
          size: 8,
          color: a ? _.colorTextSuccess : _.colorTextWarning
        }), a ? getI18nString("billing_groups_table.confirmed") : getI18nString("billing_groups_table.unconfirmed")]
      });
    }
  });
  let m = [{
    id: null
  }, ...c];
  n && (aO.set(m), m = aO.search(n));
  let p = m.filter(t => t.id && NV(t, e.invoices));
  let g = p.length;
  o && (m = p);
  let [h, x, b] = _$$z({
    columnName: "Name",
    isReversed: !1
  }, m, u);
  return jsx(Fragment, {
    children: jsx(Cj, {
      actionBar: e => jsx(aN, {
        selectedLicenseGroups: e
      }),
      actionBarClassName: "license_groups_table--bulkActionsBar--NCqXx",
      columns: u.map(e => ({
        ...e,
        nameElement: jsx("span", {
          className: aA,
          children: e.name
        }),
        headerClassName: aA
      })),
      emptyContent: jsx(_$$p2, {
        children: n ? getI18nString("billing_groups_table.search.no_results") : getI18nString("billing_groups_table.filter.no_results")
      }),
      getItemKey: aM,
      hasNewScrollContext: !0,
      isBannerHeightDynamic: !0,
      itemTypeContext: {
        itemType: "billing group",
        getSelectedCountString: e => getI18nString("multi_select_list.selected_count_billing_groups", {
          numSelected: e
        })
      },
      items: b,
      minContentWidth: aD,
      onRowClick: e => {
        e.id && t(selectViewAction({
          licenseGroupId: e.id,
          view: "licenseGroup",
          subView: UserGroupRole.ADMIN,
          selectedTab: GroupType.MEMBERS,
          orgAdminOriginTab: DashboardSection.BILLING
        }));
      },
      onSetSortState: x,
      rightActionColumns: [{
        name: "menu-cell",
        className: oi,
        cellComponent: e => jsx(aR, {
          item: e
        })
      }, VU],
      scrollAwayContent: e.scrollAwayContent,
      sortState: h,
      stickyContent: jsxs(Fragment, {
        children: [!isMobileUA && !a && c.length > 0 && jsx(_$$p, {
          children: jsx(aa, {})
        }), e.stickyContent, jsxs(AutoLayout, {
          strokeColor: "default",
          strokeWidth: {
            top: 1,
            bottom: 1
          },
          padding: {
            vertical: 8
          },
          spacing: "24px",
          children: [jsx(y2, {
            onChange: l,
            query: n,
            clearSearch: () => l(""),
            placeholder: getI18nString("billing_groups_table.search.placeholder")
          }), e.invoices && hX(e.invoices) && jsx(_$$S, {
            checked: o,
            onChange: () => d(e => !e),
            label: jsxs(AutoLayout, {
              direction: "horizontal",
              width: "hug-contents",
              spacing: "4px",
              children: [jsx(aL, {
                count: g
              }), jsx(TextWithTruncation, {
                children: renderI18nText("billing_groups_table.unconfirmed_billing_groups")
              })]
            })
          })]
        })]
      }),
      styleOverrideClassNames: {
        unselectedCheckbox: "license_groups_table--unselectedCheckbox--A-hwk"
      },
      unselectableItemKeys: new Set([aP])
    })
  });
}
function a$(e) {
  let {
    "data-onboarding-key": t
  } = e;
  let a = useDispatch();
  return jsx(TrackingProvider, {
    name: "New billing group",
    children: jsx(_$$V2, {
      variant: "primary",
      icon: "plus-32",
      "data-onboarding-key": t,
      onClick: () => {
        a(showModalHandler({
          type: aS
        }));
      },
      children: getI18nString("billing_groups_table.plus_billing_group")
    })
  });
}
function aB({
  isFullPage: e
}) {
  return jsxs(AutoLayout, {
    padding: 8,
    direction: "vertical",
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    width: "fill-parent",
    ...(e ? {
      height: "fill-parent"
    } : {
      height: 144,
      strokeWidth: 1,
      strokeColor: "default"
    }),
    children: [jsx(TextWithTruncation, {
      fontWeight: "semi-bold",
      color: "secondary",
      children: renderI18nText("org_admin_settings.billing.no_billing_groups_yet")
    }), jsx("div", {
      className: cssBuilderInstance.pb8.alignCenter.$,
      style: styleBuilderInstance.add({
        maxWidth: "540px"
      }).$,
      children: jsx(TextWithTruncation, {
        color: "secondary",
        children: renderI18nText("org_admin_settings.billing.billing_groups_empty_text.seat_rename", {
          learnMoreLink: jsx(SecureLink, {
            trusted: !0,
            target: "_blank",
            href: "https://help.figma.com/hc/articles/19100885191191",
            children: jsx(TextWithTruncation, {
              children: renderI18nText("general.learn_more")
            })
          })
        })
      })
    }), jsx(a$, {})]
  });
}
function aG(e) {
  let t = MX();
  let a = Xf(e.org.id);
  let n = a.data?.invoices;
  return e.isLoading || "loaded" !== a.status ? jsx("div", {
    className: cssBuilderInstance.flex.alignCenter.justifyCenter.p24.$,
    "data-testid": "billing-groups-tab-loading",
    children: jsx(_$$k3, {})
  }) : jsx(Fragment, {
    children: t.length > 0 ? jsx(aU, {
      org: e.org,
      orgAdmins: e.orgAdmins,
      invoices: n,
      currentFilters: DefaultFilters,
      licenseGroupMemberCounts: e.licenseGroupMemberCounts
    }) : jsx(_$$Q3, {
      minContentWidth: aD,
      children: jsx(aB, {})
    })
  });
}
function az(e) {
  return jsx(TrackingProvider, {
    name: _$$e3.BILLING_GROUPS_TAB,
    properties: {
      orgId: e.org.id
    },
    children: jsx(aG, {
      ...e
    })
  });
}
function aH(e) {
  let t = bQ({
    planType: FOrganizationLevelType.ORG,
    planId: e.org.id
  });
  let a = _$$R2();
  return "loaded" !== t.status ? jsx("div", {
    className: cssBuilderInstance.flex.alignCenter.justifyCenter.p24.$,
    "data-testid": "invoices-tab-loading",
    children: jsx(_$$k3, {})
  }) : jsx(_$$Q3, {
    minContentWidth: 1024,
    children: jsx("div", {
      className: cssBuilderInstance.pb36.$,
      children: jsx(_$$S3, {
        invoices: t.data ?? [],
        currentDate: a,
        stickyContent: jsx(Fragment, {})
      })
    })
  });
}
function aY(e) {
  return jsx(TrackingProvider, {
    name: _$$e3.BILLING_INVOICES_TAB,
    properties: {
      orgId: e.org.id
    },
    children: jsx(aH, {
      ...e
    })
  });
}
function a4() {
  return jsx("div", {
    className: cssBuilderInstance.flex.alignCenter.justifyCenter.p24.$,
    "data-testid": "billing-overview-tab-loading",
    children: jsx(_$$k3, {})
  });
}
function a5(e) {
  return e.children({
    isELA: _$$d3({
      reportErrorsToTeam: _$$e.SCALE
    })
  });
}
function a3(e) {
  let t = useDispatch();
  let a = RR();
  let n = Xf(e.org.id);
  let l = bQ({
    planType: FOrganizationLevelType.ORG,
    planId: e.org.id
  });
  let o = hY(e.org.id, FOrganizationLevelType.ORG, {
    enabled: a
  });
  let d = useMemo(() => a ? o.transform(e => ({
    split: "none",
    data: e
  })) : resourceUtils.loadedSuspendable({
    split: "none",
    data: viewCollaboratorSet.dict(() => ({
      assigned: 0,
      available: 0,
      total: 0
    }))
  }, [], {
    release: () => {}
  }), [a, o]);
  let c = useMemo(() => o.transform(e => {
    let t = {
      available: 0,
      total: 0,
      assigned: 0
    };
    collaboratorSet.forEach(a => {
      t.available += e[a]?.available ?? 0;
      t.assigned += e[a]?.assigned ?? 0;
      t.total += e[a]?.total ?? 0;
    });
    return t;
  }), [o]);
  let u = useCallback(() => {
    t(selectViewAction({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: DashboardSection.BILLING,
      orgAdminSettingsViewSecondaryTab: BillingSectionEnum.INVOICES
    }));
  }, [t]);
  let m = useCallback(e => {
    t(selectViewAction({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: DashboardSection.BILLING,
      orgAdminSettingsViewSecondaryTab: BillingSectionEnum.INVOICES,
      initialHighlightedInvoiceId: e
    }));
  }, [t]);
  let p = useCallback(() => {
    t(selectViewAction({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: DashboardSection.MEMBERS
    }));
  }, [t]);
  let g = n?.data?.scheduled_cancellation;
  let x = useMemo(() => {
    if (!g) return null;
    let a = _$$h2({
      isEligibleForCancellation: g.is_eligible_for_cancellation,
      scheduledCancellationDate: g.scheduled_cancellation_date,
      cancelAtPeriodEnd: g.cancel_at_period_end
    });
    return a?.id !== _$$a.UNSCHEDULE ? null : {
      expiresAt: _$$A2(a.scheduledCancellationDate).toDate(),
      onReactivateClick: () => {
        a.perform({
          dispatch: t,
          orgName: e.org.name,
          orgId: e.org.id
        });
      }
    };
  }, [g, t, e.org.name, e.org.id]);
  let b = hs(e.org);
  let v = !!b.data?.show && b.data.inTrial;
  let f = !!b.data?.show && b.data.nextRenewalDate;
  let j = !!b.data?.show && b.data.renewalConfirmed;
  let y = useMemo(() => b.data?.show && f && j2({
    shouldAutoRenew: e.org.should_auto_renew,
    onTrial: v,
    hasNonAdjustableRenewalSeats: !!n.data?.non_adjustable_renewal_seats
  }) ? () => {
    t(showModalHandler({
      type: _$$aO,
      data: {
        renewalDate: f
      }
    }));
  } : null, [b.data?.show, f, e.org.should_auto_renew, v, n.data?.non_adjustable_renewal_seats, t]);
  return jsx(Suspense, {
    fallback: jsx(a4, {}),
    children: jsx(a5, {
      children: ({
        isELA: t
      }) => "loaded" !== l.status || "loaded" !== n.status || "loaded" !== d.status || "loaded" !== c.status || "loading" === b.status ? jsx(a4, {}) : jsx(_$$i2, {
        adjustRenewalSeats: y,
        annualSeats: c.data,
        contractStartBanner: jsx(_$$L, {
          org: e.org
        }),
        invoices: l.data,
        isELA: t,
        manageAnnualSeats: p,
        manageMonthlySeats: null,
        manageSeatCounts: p,
        orgHasAutomaticUpcomingInvoice: e.org.has_automatic_upcoming_invoice,
        planCanceledProps: x,
        planCurrency: e.org.invoice_currency,
        planId: e.org.id,
        planType: FOrganizationLevelType.ORG,
        renewalConfirmed: j,
        seatCountsWithSplit: d.data,
        shouldAutoRenew: e.org.should_auto_renew,
        showPlanSubscriptionCard: !0,
        upcomingRenewalWillPause: !!n.data?.upcoming_renewal_will_pause,
        viewAllInvoices: u,
        viewInvoice: m
      })
    })
  });
}
function a8(e) {
  return jsx(TrackingProvider, {
    name: _$$e3.BILLING_OVERVIEW_TAB,
    properties: {
      orgId: e.org.id
    },
    children: jsx(a3, {
      ...e
    })
  });
}
let ns = cssBuilderInstance.cursorPointer.underline.textInherit.bgNone.$;
function ni(e) {
  let t = Math.floor((new Date(e.pastDueAt).getTime() - Date.now()) / 1e3 / 60 / 60 / 24);
  return jsx("div", {
    "data-testid": "pay-banner",
    children: jsxs(_$$aD, {
      color: Sn.BLUE,
      removeNegativeMargin: !0,
      children: [jsx("span", {
        className: cssBuilderInstance.inlineFlex.$,
        style: styleBuilderInstance.mr6.$,
        children: jsx(_$$b3, {
          style: {
            "--color-icon": "var(--color-icon-ondesign)"
          }
        })
      }), jsx("div", {
        children: renderI18nText("org_admin_settings.billing_banner_figjam.due_date_message", {
          dueDate: _$$A2(e.issuedAt).format("MMM D"),
          pastDueDate: _$$A2(e.pastDueAt).format("MMM D"),
          differenceDays: t,
          payInvoiceLink: jsx("button", {
            onClick: () => {
              e.hostedInvoiceUrl ? openWindow(e.hostedInvoiceUrl, "_blank", "noopener") : reportError(_$$e.BILLING_EXPERIENCE, Error("PayBanner: missing hosted invoice url"), {
                extra: {
                  orgId: e.orgId,
                  invoiceId: e.invoiceId
                }
              });
            },
            className: ns,
            children: renderI18nText("org_admin_settings.billing_banner_figjam.pay_invoice")
          })
        })
      })]
    })
  });
}
function nr(e) {
  let t = new CurrencyFormatter(e.currency);
  return jsx("div", {
    "data-testid": "past-due-banner",
    children: jsxs(_$$aD, {
      color: Sn.RED,
      removeNegativeMargin: !0,
      children: [jsx("span", {
        className: cssBuilderInstance.inlineFlex.$,
        style: styleBuilderInstance.mr6.$,
        children: jsx(_$$Z, {
          style: {
            "--color-icon": "var(--color-icon-ondanger)"
          }
        })
      }), jsx("div", {
        children: renderI18nText("org_admin_settings.billing_banner_figjam.invoice_overdue", {
          dueDate: _$$A2(e.issuedAt).format("MMM D"),
          amount: t.formatMoney(e.total, {
            showCents: e.showCents
          }),
          payInvoiceLink: jsx("button", {
            onClick: () => {
              e.hostedInvoiceUrl ? openWindow(e.hostedInvoiceUrl, "_blank", "noopener") : reportError(_$$e.BILLING_EXPERIENCE, Error("PastDueBanner: missing hosted invoice url"), {
                extra: {
                  orgId: e.orgId,
                  invoiceId: e.invoiceId
                }
              });
            },
            className: ns,
            children: renderI18nText("org_admin_settings.billing_banner_figjam.pay_invoice")
          })
        })
      })]
    })
  });
}
function no(e) {
  let t = _$$R2();
  let [a, n] = useMemo(() => {
    let a = e.openInvoices.filter(e => Jv(e, t));
    let n = YO(a);
    return n ? [n, !0] : [YO(e.openInvoices), !1];
  }, [t, e.openInvoices]);
  return a ? n ? jsx(nr, {
    orgId: e.orgId,
    hostedInvoiceUrl: a.hosted_invoice_url,
    currency: a.currency,
    issuedAt: a.issued_at,
    invoiceId: a.id,
    total: a.total,
    showCents: !0
  }) : jsx(ni, {
    orgId: e.orgId,
    hostedInvoiceUrl: a.hosted_invoice_url,
    issuedAt: a.issued_at,
    pastDueAt: a.past_due_at,
    invoiceId: a.id
  }) : null;
}
function nd(e) {
  let t = useMemo(() => e.invoices.filter(e => e.state === qH.OPEN), [e.invoices]);
  return 0 === t.length ? null : jsx(no, {
    orgId: e.orgId,
    openInvoices: t
  });
}
function nc(e) {
  let t = bQ({
    planType: FOrganizationLevelType.ORG,
    planId: e.orgId
  });
  return "loaded" !== t.status ? null : jsx(nd, {
    orgId: e.orgId,
    invoices: t.data
  });
}
function n_(e) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "billing_tab_header--stickyBanner--9QcwY",
      children: jsx(nc, {
        orgId: e.org.id
      })
    }), jsx(_$$K2, {
      title: _$$O(DashboardSection.BILLING),
      rightActions: jsx(_$$p4, {})
    }), jsx(_$$b, {
      tab: DashboardSection.BILLING,
      selectedSecondaryTab: e.secondaryTab,
      rightActions: e.secondaryTab === BillingSectionEnum.BILLING_GROUPS ? jsx(a$, {
        "data-onboarding-key": Iq
      }) : void 0
    })]
  });
}
function nu(e) {
  let t = Xf(e.org.id);
  bQ({
    planType: FOrganizationLevelType.ORG,
    planId: e.org.id
  }, {
    revalidateOnMount: !0
  });
  return jsxs(TrackingProvider, {
    name: _$$e3.BILLING_VIEW,
    properties: {
      orgId: e.org.id
    },
    children: [jsx(n_, {
      currency: t.data?.currency,
      org: e.org,
      secondaryTab: e.activeTab
    }), e.activeTab === BillingSectionEnum.OVERVIEW && jsx(a8, {
      org: e.org
    }), e.activeTab === BillingSectionEnum.BILLING_GROUPS && jsx(az, {
      org: e.org,
      orgAdmins: e.orgAdmins,
      licenseGroupMemberCounts: e.licenseGroupMemberCounts,
      isLoading: e.isLoadingLicenseGroups || e.isLoadingOrgAdmins
    }), e.activeTab === BillingSectionEnum.INVOICES && jsx(aY, {
      org: e.org
    })]
  });
}
var nh = (e => (e[e.BROWSING = 0] = "BROWSING", e[e.PROMPT = 1] = "PROMPT", e[e.SEARCH = 2] = "SEARCH", e[e.LIBRARIES = 3] = "LIBRARIES", e))(nh || {});
let nx = e => {
  switch (e) {
    case 0:
      return renderI18nText("workspace.create_confirmation_modal.description.list.browsing");
    case 1:
      return renderI18nText("workspace.create_confirmation_modal.description.list.prompt");
    case 2:
      return renderI18nText("workspace.create_confirmation_modal.description.list.search");
    case 3:
      return renderI18nText("workspace.create_confirmation_modal.description.list.libraries");
  }
};
let nb = registerModal(function ({
  onConfirm: e
}) {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: "Create License Group Confirmation modal",
    children: jsxs(ConfirmationModal2, {
      cancelText: getI18nString("general.back"),
      confirmText: renderI18nText("workspace.create_confirmation_modal.confirm"),
      disableClickOutsideToHide: !0,
      onConfirm: () => {
        t(hideModal());
        e();
      },
      popStack: !0,
      tintedModalBackground: !0,
      confirmationTitle: renderI18nText("workspace.create_confirmation_modal.title"),
      children: [renderI18nText("workspace.create_confirmation_modal.description.intro"), jsx("ul", {
        style: styleBuilderInstance.ml18.my16.add({
          listStyle: "disc"
        }).$,
        children: [0, 1, 2, 3].map(e => jsx("li", {
          children: nx(e)
        }, e))
      }), renderI18nText("workspace.create_confirmation_modal.description.outro", {
        learnMore: jsx(clickableBaseLinkTracked, {
          className: cssBuilderInstance.inline.$,
          target: "_blank",
          href: "https://help.figma.com/hc/articles/4409676189207-Guide-to-workspaces",
          trusted: !0,
          children: renderI18nText("workspace.create_confirmation_modal.description.outro.learn_more")
        })
      })]
    })
  });
}, "WorkspaceCreateConfirmationModal");
let nv = "workspace_edit_modal--adminRow---ltkO workspace_edit_modal--inputRow--ye5CB";
let nf = "workspace_edit_modal--inputLabel--azeeV";
let nj = "workspace_edit_modal--adminField--JKgPu";
let nw = "First Workspace Created";
let nk = registerModal(function (e) {
  let t = useDispatch();
  let [a, n] = useState(null);
  let l = useCurrentPublicPlan("WorkspaceEditModal").unwrapOr(null);
  let o = getParentOrgIdIfOrgLevel(l);
  let d = _$$q(jD, !0);
  let _ = _$$q(_$$Vl, !0);
  let u = e.workspacesData;
  let m = e.workspaceId && u ? u.find(t => t.id === e.workspaceId) : void 0;
  let p = !!m;
  let g = [];
  m?.admins && (g = m.admins.reduce((e, t) => {
    let a = t?.baseOrgUser;
    return a ? [...e, {
      state: _$$d2.OK,
      content: {
        id: a.id,
        user: {
          id: a.user.id,
          handle: a.user.handle,
          img_url: a.user.imgUrl
        }
      }
    }] : e;
  }, []));
  let [h, x] = useState(p ? {
    ..._$$Rs(),
    tokens: g
  } : _$$Rs());
  let b = useCallback(e => {
    trackEventAnalytics("Workspace admin search performed", {
      orgId: o,
      workspaceId: m?.id,
      queryLength: e.inputValue.length
    });
    x(e);
  }, [o, m?.id]);
  let [v, f] = useState(p ? m.name : "");
  let [j, w] = useState(p ? m.orgAccess : FAccessLevelType.PUBLIC);
  let k = useCallback(e => {
    w(e.target.checked ? FAccessLevelType.SECRET : FAccessLevelType.PUBLIC);
  }, []);
  let E = () => {
    trackEventAnalytics("CTA Clicked", {
      name: "Workspace Modal Cancel",
      workspaceId: m?.id,
      orgId: o
    });
    t(hideModal());
  };
  let C = () => {
    let e = p ? `/api/workspace/${m.id}` : `/api/orgs/${o}/workspaces`;
    let a = p ? XHR.put : XHR.post;
    let n = p ? d : _;
    let s = !p && (!u || 0 === u.length);
    a(e, {
      name: v,
      admin_org_user_ids: h.tokens.map(e => e.content.id),
      org_access: j
    }).then(({
      data: e
    }) => {
      t(VisualBellActions.enqueue({
        type: "workspace-edit",
        message: p ? getI18nString("workspace_table.workspace_edited_toast", {
          workspaceName: v
        }) : getI18nString("workspace_table.workspace_created_toast", {
          workspaceName: v
        })
      }));
      n();
      t(hideModal());
      s && trackEventAnalytics(nw, {
        workspaceId: e.meta?.id,
        orgId: o
      });
    }).catch(e => {
      t(VisualBellActions.enqueue({
        error: !0,
        message: e.message
      }));
    });
  };
  let S = e => {
    if (u?.find(t => t.name.trim().toLowerCase() === e.trim().toLowerCase() && t?.id !== m?.id)) {
      n("duplicated");
      return;
    }
    if ("unassigned" === e.trim().toLowerCase()) {
      n("unassigned");
      return;
    }
    n(null);
  };
  return jsx(OJ, {
    title: p ? getI18nString("workspace_table.edit_workspace_title") : getI18nString("workspace_table.create_workspace_title"),
    onClose: E,
    minWidth: 500,
    children: jsx("div", {
      className: "workspace_edit_modal--container--AFrrN",
      children: jsxs(Fragment, {
        children: [jsxs("label", {
          className: "workspace_edit_modal--inputRow--ye5CB",
          children: [jsx("span", {
            className: nf,
            children: renderI18nText("workspace_table.name_input")
          }), jsx("div", {
            children: jsx(BigTextInputForwardRef, {
              className: "workspace_edit_modal--inputField--zgJyx",
              autoFocus: !0,
              placeholder: getI18nString("workspace_table.name_input_placeholder"),
              onChange: e => {
                f(e.currentTarget.value);
                S(e.currentTarget.value);
              },
              value: v,
              dataTestId: "workspace-name-input",
              maxLength: BUTTON_INTERNAL_CONST_Z12
            })
          }), jsx(_$$Y3, {
            className: "workspace_edit_modal--yellowIcon--uYKLJ admin_notifications_count_badge--yellowIcon--7SC5D",
            style: styleBuilderInstance.$$if(!a, styleBuilderInstance.invisible).$
          })]
        }), jsxs("label", {
          className: nv,
          children: [jsx("span", {
            className: nf,
            children: renderI18nText("workspace_table.admins_input")
          }), jsxs("div", {
            className: nj,
            children: [jsx(_$$g4, {
              placeholder: getI18nString("workspace_table.admin_input_placeholder"),
              autocomplete: h,
              onAutocompleteChange: b
            }), jsx("p", {
              className: "workspace_edit_modal--subtext--qKX4P",
              children: renderI18nText("workspace_table.admins_will_manage_input_help_text")
            })]
          })]
        }), jsxs("label", {
          className: nv,
          children: [jsx("span", {
            className: nf,
            children: renderI18nText("workspace_table.visibility")
          }), jsx("div", {
            className: nj,
            children: jsx(_$$S, {
              checked: j === FAccessLevelType.SECRET,
              onChange: k,
              label: getI18nString("workspace_table.make_it_hidden"),
              description: getI18nString("workspace_table.only_members_can_find_and_access")
            })
          })]
        }), a && jsxs("div", {
          className: "workspace_edit_modal--banner--aEtck",
          style: styleBuilderInstance.mb32.p16.flex.itemsCenter.bRadius6.$,
          children: [jsx(SvgComponent, {
            className: cssBuilderInstance.mr16.$,
            svg: _$$A3,
            useOriginalSrcFills_DEPRECATED: !0
          }), jsx("p", {
            children: "unassigned" === a ? renderI18nText("workspace_table.workspace_name_unassigned_error") : renderI18nText("workspace_table.workspace_name_already_exists_error")
          })]
        }), jsxs("div", {
          className: "workspace_edit_modal--buttonContainer--XU4e8",
          children: [jsx(ButtonSecondary, {
            onClick: E,
            children: renderI18nText("workspace_table.cancel_create_or_edit")
          }), jsx(TrackingProvider, {
            name: "Workspace Modal Submit",
            properties: {
              workspaceId: e.workspaceId
            },
            children: jsx(ButtonBasePrimaryTracked, {
              className: "workspace_edit_modal--submitButton--Dov4c",
              onClick: () => {
                u && 0 !== u.length || p ? C() : t(showModal({
                  type: nb.type,
                  data: {
                    onConfirm: C
                  }
                }));
              },
              disabled: !!a || !v.length || 0 === h.tokens.length,
              children: p ? renderI18nText("workspace_table.workspace_edit_save_changes") : renderI18nText("workspace_table.create_workspace_button")
            })
          })]
        })]
      })
    })
  });
}, "WorkspaceEditModal");
let nE = "seen_org_admin_workspaces_onboarding";
let nC = userFlagExistsAtomFamily(nE);
function nS() {
  let e = useAtomWithSubscription(nC);
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e2({
    overlay: rQs,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  _$$E2(uniqueId, nw, () => {
    show({
      canShow: e => !isMobileUA && !e
    });
  });
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: jsx(TextWithTruncation, {
      children: renderI18nText("org_admin_onboarding.tooltip.workspace_add_teams.description")
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    shouldCenterArrow: EL.FALLBACK,
    targetKey: d1,
    title: renderI18nText("org_admin_onboarding.tooltip.workspace_add_teams.title"),
    trackingContextName: `${WF} - Teams tab`,
    userFlagOnShow: nE
  });
}
let nL = registerModal(function (e) {
  let t = useDispatch();
  let a = useSelector(e => e.currentUserOrgId);
  let n = _$$q(OK, !0);
  let l = e.workspaces.map(e => e.id);
  let o = e.workspaces.map(e => e.name);
  let d = () => {
    t(hideModal());
  };
  let [c, _] = useState(!1);
  return jsx(TrackingProvider, {
    name: "Delete workspace modal",
    properties: {
      numWorkspaces: e.workspaces.length
    },
    children: jsx(OJ, {
      title: getI18nString("workspace_table.delete_n_workspaces", {
        licenseGroupsCount: e.workspaces.length
      }),
      maxWidth: 372,
      onClose: d,
      children: jsxs("div", {
        className: cssBuilderInstance.font11.p16.$,
        children: [renderI18nText("workspace_table.deleting_the_workspaces_will_cause", {
          licenseGroupsCount: e.workspaces.length,
          licenseGroupsNames: jsx(TextWithTruncation, {
            fontWeight: "bold",
            children: formatList(o)
          })
        }), jsxs("div", {
          children: [jsx("div", {
            children: "\xa0"
          }), jsx("span", {
            className: Vq,
            children: getI18nString("workspace_table.are_you_sure_you_want_to_delete_these_workspaces", {
              licenseGroupsCount: e.workspaces.length
            })
          })]
        }), jsx("div", {
          children: "\xa0"
        }), jsxs("form", {
          onSubmit: s => {
            s.preventDefault();
            Eh.delWorkspaces({
              orgId: a,
              workspaceIds: l
            }).then(() => {
              t(VisualBellActions.enqueue({
                type: "workspace-delete",
                message: getI18nString("workspace_table.workspaces_deleted_toast", {
                  licenseGroupsCount: e.workspaces.length,
                  licenseGroupName: e.workspaces[0].name
                })
              }));
              n();
              t(hideModal());
            }).catch(e => {
              t(VisualBellActions.enqueue({
                error: !0,
                message: e.message ?? getI18nString("workspace_table.an_error_occurred_while_deleting_workspaces")
              }));
            });
          },
          children: [jsx("label", {
            children: jsx(_$$S, {
              checked: c,
              onChange: () => _(!c),
              label: getI18nString("billing_groups_table.delete_modal.i_understand_that_this_action_isnt_reversible")
            })
          }), jsxs("div", {
            className: v0,
            children: [jsx(ButtonSecondaryTracked, {
              onClick: d,
              children: renderI18nText("general.cancel")
            }), jsx(ButtonNegativeTracked, {
              type: "submit",
              className: pL,
              disabled: !c,
              children: getI18nString("workspace_table.delete_n_workspaces", {
                licenseGroupsCount: e.workspaces.length
              })
            })]
          })]
        })]
      })
    })
  });
}, "WorkspaceDeleteModal");
function nD({
  workspacesData: e,
  selectedWorkspaces: t
}) {
  let a = useDispatch();
  if (0 === t.length) return null;
  let n = t[0];
  return n ? jsxs(Fragment, {
    children: [1 === t.length && !!t[0].id && jsxs(Fragment, {
      children: [jsx(IU, {
        onClick: () => {
          a(showModalHandler({
            type: nk,
            data: {
              workspacesData: e,
              workspaceId: n.id
            }
          }));
        },
        label: getI18nString("workspace_table.edit_details")
      }), jsx(IU, {
        onClick: () => {
          a(selectViewAction({
            view: "workspace",
            subView: DUserRole.ADMIN,
            workspaceId: n.id,
            selectedTab: SectionType.MEMBERS,
            orgAdminOriginTab: DashboardSection.CONTENT
          }));
        },
        label: getI18nString("workspace_table.manage")
      })]
    }), jsx(IU, {
      onClick: () => a(showModalHandler({
        type: nL,
        data: {
          workspaces: t.filter(e => !!e.id)
        }
      })),
      label: getI18nString("general.delete")
    })]
  }) : null;
}
function nM({
  workspaceId: e,
  workspacesData: t
}) {
  let a = useDispatch();
  let n = t.find(t => t.id === e);
  let l = useCallback(() => {
    a(showModalHandler({
      type: nk,
      data: {
        workspacesData: t,
        workspaceId: e
      }
    }));
  }, [a, t, e]);
  let o = useCallback(() => {
    a(selectViewAction({
      view: "workspace",
      subView: DUserRole.ADMIN,
      workspaceId: n.id,
      selectedTab: SectionType.MEMBERS,
      orgAdminOriginTab: DashboardSection.CONTENT
    }));
  }, [a, n]);
  let d = useCallback(() => {
    a(showModalHandler({
      type: nL,
      data: {
        workspaces: [n]
      }
    }));
  }, [a, n]);
  return e && n ? jsxs(zx, {
    children: [jsx(_$$p3, {
      onClick: l,
      children: getI18nString("workspace_table.edit_details")
    }, "edit-details"), jsx(_$$p3, {
      onClick: o,
      children: getI18nString("workspace_table.manage")
    }, "manage"), jsx(_$$p3, {
      onClick: d,
      children: getI18nString("general.delete")
    }, "delete")]
  }) : null;
}
(n || (n = {})).PenCheckmark = function () {
  return jsxs("svg", {
    width: "49",
    height: "49",
    viewBox: "0 0 49 49",
    fill: "none",
    className: cssBuilderInstance.colorIcon.$,
    children: [jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M37.1443 11.9928L45.5223 20.4496L19.0803 47.1707L4.35542 32.3646L12.7172 23.8917L19.0636 30.2731L37.1443 11.9928ZM37.145 13.6986L19.0659 31.9772L12.7204 25.5967L6.04459 32.3613L19.0782 45.4668L43.8336 20.45L37.145 13.6986Z"
    }), jsx("path", {
      d: "M37.2101 11.8238C37.8652 11.8238 38.3963 12.3549 38.3963 13.0101C38.3963 13.6652 37.8652 14.1963 37.2101 14.1963C36.5549 14.1963 36.0238 13.6652 36.0238 13.0101C36.0238 12.3549 36.5549 11.8238 37.2101 11.8238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M37.2101 10.6238C38.528 10.6238 39.5963 11.6922 39.5963 13.0101C39.5963 14.328 38.528 15.3963 37.2101 15.3963C35.8922 15.3963 34.8238 14.328 34.8238 13.0101C34.8238 11.6922 35.8922 10.6238 37.2101 10.6238ZM38.3963 13.0101C38.3963 12.3549 37.8652 11.8238 37.2101 11.8238C36.5549 11.8238 36.0238 12.3549 36.0238 13.0101C36.0238 13.6652 36.5549 14.1963 37.2101 14.1963C37.8652 14.1963 38.3963 13.6652 38.3963 13.0101Z"
    }), jsx("path", {
      d: "M44.7101 19.0238C45.3652 19.0238 45.8963 19.5549 45.8963 20.2101C45.8963 20.8652 45.3652 21.3963 44.7101 21.3963C44.0549 21.3963 43.5238 20.8652 43.5238 20.2101C43.5238 19.5549 44.0549 19.0238 44.7101 19.0238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M44.7101 17.8238C46.028 17.8238 47.0963 18.8922 47.0963 20.2101C47.0963 21.528 46.028 22.5963 44.7101 22.5963C43.3922 22.5963 42.3238 21.528 42.3238 20.2101C42.3238 18.8922 43.3922 17.8238 44.7101 17.8238ZM45.8963 20.2101C45.8963 19.5549 45.3652 19.0238 44.7101 19.0238C44.0549 19.0238 43.5238 19.5549 43.5238 20.2101C43.5238 20.8652 44.0549 21.3963 44.7101 21.3963C45.3652 21.3963 45.8963 20.8652 45.8963 20.2101Z"
    }), jsx("path", {
      d: "M18.6863 45.1238C19.3414 45.1238 19.8725 45.6549 19.8725 46.3101C19.8725 46.9652 19.3414 47.4963 18.6863 47.4963C18.0311 47.4963 17.5 46.9652 17.5 46.3101C17.5 45.6549 18.0311 45.1238 18.6863 45.1238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.6863 43.9238C20.0041 43.9238 21.0725 44.9922 21.0725 46.3101C21.0725 47.628 20.0041 48.6963 18.6863 48.6963C17.3684 48.6963 16.3 47.628 16.3 46.3101C16.3 44.9922 17.3684 43.9238 18.6863 43.9238ZM19.8725 46.3101C19.8725 45.6549 19.3414 45.1238 18.6863 45.1238C18.0311 45.1238 17.5 45.6549 17.5 46.3101C17.5 46.9652 18.0311 47.4963 18.6863 47.4963C19.3414 47.4963 19.8725 46.9652 19.8725 46.3101Z"
    }), jsx("path", {
      d: "M18.6863 29.5238C19.3414 29.5238 19.8725 30.0549 19.8725 30.7101C19.8725 31.3652 19.3414 31.8963 18.6863 31.8963C18.0311 31.8963 17.5 31.3652 17.5 30.7101C17.5 30.0549 18.0311 29.5238 18.6863 29.5238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.6863 28.3238C20.0041 28.3238 21.0725 29.3922 21.0725 30.7101C21.0725 32.028 20.0041 33.0963 18.6863 33.0963C17.3684 33.0963 16.3 32.028 16.3 30.7101C16.3 29.3922 17.3684 28.3238 18.6863 28.3238ZM19.8725 30.7101C19.8725 30.0549 19.3414 29.5238 18.6863 29.5238C18.0311 29.5238 17.5 30.0549 17.5 30.7101C17.5 31.3652 18.0311 31.8963 18.6863 31.8963C19.3414 31.8963 19.8725 31.3652 19.8725 30.7101Z"
    }), jsx("path", {
      d: "M12.6863 23.8238C13.3414 23.8238 13.8725 24.3549 13.8725 25.0101C13.8725 25.6652 13.3414 26.1963 12.6863 26.1963C12.0311 26.1963 11.5 25.6652 11.5 25.0101C11.5 24.3549 12.0311 23.8238 12.6863 23.8238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.6863 22.6238C14.0041 22.6238 15.0725 23.6922 15.0725 25.0101C15.0725 26.328 14.0041 27.3963 12.6863 27.3963C11.3684 27.3963 10.3 26.328 10.3 25.0101C10.3 23.6922 11.3684 22.6238 12.6863 22.6238ZM13.8725 25.0101C13.8725 24.3549 13.3414 23.8238 12.6863 23.8238C12.0311 23.8238 11.5 24.3549 11.5 25.0101C11.5 25.6652 12.0311 26.1963 12.6863 26.1963C13.3414 26.1963 13.8725 25.6652 13.8725 25.0101Z"
    }), jsx("path", {
      d: "M5.18625 31.6238C5.8414 31.6238 6.3725 32.1549 6.3725 32.8101C6.3725 33.4652 5.8414 33.9963 5.18625 33.9963C4.5311 33.9963 4 33.4652 4 32.8101C4 32.1549 4.5311 31.6238 5.18625 31.6238Z",
      className: cssBuilderInstance.colorIconOninverse.$
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.18625 30.4238C6.50414 30.4238 7.5725 31.4922 7.5725 32.8101C7.5725 34.128 6.50414 35.1963 5.18625 35.1963C3.86836 35.1963 2.8 34.128 2.8 32.8101C2.8 31.4922 3.86836 30.4238 5.18625 30.4238ZM6.3725 32.8101C6.3725 32.1549 5.8414 31.6238 5.18625 31.6238C4.5311 31.6238 4 32.1549 4 32.8101C4 33.4652 4.5311 33.9963 5.18625 33.9963C5.8414 33.9963 6.3725 33.4652 6.3725 32.8101Z"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M35.3876 12.6156L22.2292 15.2282C18.9526 15.9577 15.4711 14.4246 13.8677 11.2973C13.5621 10.7013 13.3431 10.0829 13.2065 9.45665L8.59466 7.97098L10.9015 0.809704L15.4787 2.2842C15.9684 1.83489 16.5254 1.44354 17.1443 1.12628C20.3838 -0.534604 24.2614 0.36987 26.4631 3.09209L35.3876 12.6156ZM32.187 10.9551L25.5567 3.87971L25.5424 3.86194C23.6928 1.56053 20.4216 0.794505 17.6917 2.19412C17.0714 2.51213 16.5266 2.91732 16.0637 3.38669L15.8043 3.6498L11.6758 2.31985L10.1048 7.19673L14.26 8.53531L14.3202 8.8956C14.4253 9.5251 14.628 10.15 14.9356 10.7499C16.2845 13.381 19.2162 14.6724 21.9745 14.0555L21.9815 14.0539L31.8256 12.0994L20.4477 8.43412L20.8157 7.29193L32.187 10.9551Z"
    }), jsx("path", {
      d: "M18.8873 7.17071C19.2085 6.17344 20.2774 5.62544 21.2747 5.9467C22.2719 6.26796 22.8199 7.33684 22.4987 8.3341C22.1774 9.33137 21.1085 9.87937 20.1113 9.55811C19.114 9.23685 18.566 8.16798 18.8873 7.17071Z"
    })]
  });
};
function nq({
  asset: e,
  title: t,
  subtitle: a
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 8,
    horizontalAlignItems: "center",
    children: [e, jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 4,
      horizontalAlignItems: "center",
      children: [jsx("div", {
        className: "x2b8uid",
        children: jsx("h3", {
          className: "x4z9k3i xk50ysn x1o2sk6j",
          children: t
        })
      }), jsx("div", {
        className: "x2b8uid",
        children: jsx("span", {
          className: "x1n0bwc9",
          children: a
        })
      })]
    })]
  });
}
function n$() {
  let e = useDispatch();
  let t = useCallback(() => {
    e(showModalHandler({
      type: nk,
      data: {
        workspacesData: []
      }
    }));
  }, [e]);
  return jsxs("div", {
    className: "x17tqzrc x5yr21d",
    children: [jsx(_$$K2, {
      title: _$$O(DashboardSection.CONTENT)
    }), jsx(_$$b, {
      tab: DashboardSection.CONTENT,
      selectedSecondaryTab: WorkspaceTab.WORKSPACES
    }), jsxs(AutoLayout, {
      width: "fill-parent",
      height: "fill-parent",
      direction: "vertical",
      verticalAlignItems: "start",
      horizontalAlignItems: "center",
      children: [jsx("img", {
        alt: "",
        src: buildUploadUrl("31ad8dd79c291ecf576eb7c434a16cfd3a53034b"),
        width: 235,
        height: 235,
        "data-testid": "workspaces-table-colorful-blocks"
      }), jsx("div", {
        className: "x2b8uid",
        children: jsx("h2", {
          className: "xosj86m xk50ysn x1o2sk6j",
          children: renderI18nText("workspace_table.empty_state.title")
        })
      }), jsx("div", {
        className: "x2b8uid x1e56ztr",
        children: jsx(TextWithTruncation, {
          fontSize: 14,
          children: renderI18nText("workspace_table.empty_state.subtitle")
        })
      }), jsx(Button, {
        "aria-label": getI18nString("settings_tab.add_workspace_label"),
        iconPrefix: jsx(_$$e5, {}),
        onClick: t,
        children: renderI18nText("workspace_table.workspace")
      }), jsx(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        height: "hug-contents",
        padding: {
          vertical: 50
        },
        children: jsx("div", {
          className: "x1wmrhtn",
          children: jsxs(AutoLayout, {
            direction: "horizontal",
            width: "fill-parent",
            verticalAlignItems: "start",
            horizontalAlignItems: "space-between",
            spacing: "64px",
            children: [jsx(nq, {
              asset: jsx(SvgComponent, {
                svg: _$$A4,
                className: "x1ja3g5x"
              }),
              title: getI18nString("workspace_table.empty_state.manage_access_and_plugins"),
              subtitle: getI18nString("workspace_table.empty_state.manage_access_and_plugins.subtitle")
            }), jsx(nq, {
              asset: jsx(n.PenCheckmark, {}),
              title: getI18nString("workspace_table.empty_state.approve_libraries_and_assets"),
              subtitle: getI18nString("workspace_table.empty_state.approve_libraries.subtitle")
            }), jsx(nq, {
              asset: jsx(SvgComponent, {
                svg: _$$A5,
                className: "x1ja3g5x"
              }),
              title: getI18nString("workspace_table.empty_state.let_workspaces_be_unique"),
              subtitle: getI18nString("workspace_table.empty_state.let_workspaces_be_unique.subtitle")
            })]
          })
        })
      })]
    })]
  });
}
let nB = e => e.id ?? UNASSIGNED;
let nG = new Ef([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "name",
    weight: 1
  }]
});
function nz(e) {
  let t = useDispatch();
  let [a, n] = useState("");
  let l = useSubscription(WorkspacesTableView, {
    orgId: e.org.id
  });
  let o = "loaded" !== l.status;
  let {
    filterCountsViewResult
  } = vu(e.org.id, "", DefaultFilters);
  let _ = useMemo(() => l.data?.org?.workspaces ?? [], [l.data]);
  let m = o ? [] : [{
    id: null
  }, ..._];
  a && (nG.set(m), m = nG.search(a));
  let p = useCallback(e => {
    t(selectViewAction({
      view: "workspace",
      subView: DUserRole.ADMIN,
      workspaceId: e,
      selectedTab: SectionType.MEMBERS,
      orgAdminOriginTab: DashboardSection.CONTENT
    }));
  }, [t]);
  let g = useCallback(e => e.id ? jsxs(AutoLayout, {
    children: [jsx(z6, {
      entity: e,
      size: 22
    }), jsx("div", {
      className: cssBuilderInstance.wFitContent.hFitContent.$,
      children: e.name
    }), e.orgAccess === FAccessLevelType.SECRET && jsx("div", {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("workspace_table.secret_workspace_lock_tooltip"),
      "data-tooltip-subtext": getI18nString("workspace_table.secret_workspace_lock_tooltip_subtext"),
      "data-tooltip-show-above": !0,
      "data-tooltip-timeout-delay": 500,
      "data-tooltip-max-width": 300,
      children: jsx(In, {
        icon: "lock-16"
      })
    })]
  }) : jsxs(AutoLayout, {
    spacing: 4,
    padding: 0,
    children: [jsx(TextWithTruncation, {
      children: renderI18nText("workspace_table.unassigned")
    }), jsx(TextWithTruncation, {
      color: "secondary",
      children: renderI18nText("workspace_table.unassigned_row_default")
    })]
  }), []);
  let h = useCallback(e => e.id ? jsx(nM, {
    workspacesData: _,
    workspaceId: e.id
  }) : null, [_]);
  let x = [{
    name: getI18nString("workspace_table.name"),
    className: "workspaces_table--nameColumn--j-Cj5 workspaces_table--column--KbeZV table--column--974RA",
    getSortValue: e => e.id ? e.name : "0",
    cellComponent: g
  }, {
    name: getI18nString("workspace_table.admins"),
    className: "workspaces_table--adminColumn--qTjao workspaces_table--column--KbeZV table--column--974RA",
    cellComponent: t => {
      let a = [];
      let n = t.admins;
      if (n?.length > 0 && n.forEach(e => {
        let t = e?.baseOrgUser?.user;
        t && a.push({
          id: t.id,
          handle: t.handle,
          img_url: t.imgUrl ?? void 0
        });
      }), a?.length === 0) {
        let t = e.orgAdmins.filter(e => e.permission === FUserRoleType.ADMIN).map(e => e.user);
        a.push(...t);
      }
      let i = _$$e4(a);
      return jsx(Fragment, {
        children: a.length > 1 ? jsxs(AutoLayout, {
          children: [jsx(_$$f2, {
            className: cssBuilderInstance.flexShrink0.$,
            textColor: "onselected",
            backgroundColor: "onselected",
            text: `${a.length}`,
            size: 22
          }), jsx(TextWithTruncation, {
            truncate: !0,
            children: i
          })]
        }) : jsx(_$$az, {
          entity: a[0],
          size: 22
        })
      });
    }
  }, {
    name: getI18nString("workspace_table.teams"),
    className: "workspaces_table--teamsColumn--sKQaF workspaces_table--column--KbeZV table--column--974RA",
    cellComponent: t => {
      let {
        status,
        data
      } = e.workspaceTeamCounts;
      if ("loaded" !== status) return jsx(Wi, {
        className: cssBuilderInstance.h12.w100.$,
        animationType: JR.SHIMMER,
        dataTestId: "teams-count-shimmer"
      });
      let i = data[t.id ?? UNASSIGNED] ?? 0;
      return renderI18nText("workspace_table.n_teams", {
        count: i
      });
    },
    getSortValue: t => e.workspaceTeamCounts.data?.[t.id ?? UNASSIGNED] ?? 0,
    sortNumerically: !0
  }, {
    name: getI18nString("workspace_table.members"),
    className: "workspaces_table--membersColumn--73tOw workspaces_table--column--KbeZV table--column--974RA",
    cellComponent: e => {
      let {
        status,
        data
      } = filterCountsViewResult;
      if ("loaded" !== status) return jsx(Wi, {
        className: cssBuilderInstance.h12.w100.$,
        animationType: JR.SHIMMER,
        dataTestId: "members-count-shimmer"
      });
      let n = data.workspaces?.[e.id ?? UNASSIGNED] ?? 0;
      return renderI18nText("workspace_table.n_members", {
        count: n
      });
    },
    getSortValue: e => filterCountsViewResult.data?.workspaces?.[e.id ?? UNASSIGNED] ?? 0,
    sortNumerically: !0
  }];
  let [b, v, f] = _$$z({
    columnName: "Name",
    isReversed: !1
  }, m, x);
  let k = useCallback(() => {
    t(showModalHandler({
      type: nk,
      data: {
        workspacesData: _
      }
    }));
  }, [t, _]);
  let E = useMemo(() => jsx(_$$$, {
    variant: "primary",
    icon: "plus-32",
    onClick: k,
    children: jsx(TextWithTruncation, {
      children: renderI18nText("workspace_table.create_workspace_button")
    })
  }), [k]);
  return (_$$h(() => {
    e.onRightActionsChange?.(E);
  }), o || 0 !== _.length) ? jsxs(Fragment, {
    children: [!getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K2, {
        title: _$$O(DashboardSection.CONTENT)
      }), jsx(_$$b, {
        tab: DashboardSection.CONTENT,
        selectedSecondaryTab: WorkspaceTab.WORKSPACES,
        rightActions: E
      })]
    }), jsx(Cj, {
      actionBar: e => jsx(nD, {
        workspacesData: _,
        selectedWorkspaces: e
      }),
      actionBarClassName: "workspaces_table--bulkActionsBar--Ag-ER",
      columns: x,
      emptyContent: jsx(_$$p2, {
        children: renderI18nText("workspace_table.search.no_results")
      }),
      getItemKey: nB,
      hasNewScrollContext: !0,
      isBannerHeightDynamic: !0,
      isLoading: o,
      itemTypeContext: {
        itemType: "workspace",
        getSelectedCountString: e => getI18nString("multi_select_list.selected_count_workspace", {
          numSelected: e
        })
      },
      items: f,
      minContentWidth: parsePxInt(YEj),
      onRowClick: e => {
        e.id && p(e.id);
      },
      onSetSortState: v,
      rightActionColumns: [{
        name: "menu-cell",
        className: oi,
        cellComponent: h
      }, VU],
      sortState: b,
      stickyContent: jsx(AutoLayout, {
        strokeColor: "default",
        strokeWidth: {
          top: 1,
          bottom: 1
        },
        padding: {
          vertical: 8
        },
        children: jsx(y2, {
          onChange: n,
          query: a,
          clearSearch: () => n(""),
          placeholder: getI18nString("workspace_table.search.placeholder")
        })
      }),
      styleOverrideClassNames: {
        unselectedCheckbox: "workspaces_table--unselectedCheckbox--Eno6q"
      },
      unselectableItemKeys: new Set([UNASSIGNED])
    })]
  }) : jsx(n$, {});
}
function nV(e) {
  let t = T();
  return jsxs(Fragment, {
    children: [jsx(nz, {
      org: e.org,
      orgAdmins: e.orgAdmins,
      workspaceTeamCounts: e.workspaceTeamCounts,
      onRightActionsChange: e.onRightActionsChange
    }), !t && jsx(nS, {})]
  });
}
let nW = new Set([WorkspaceTab.TEAMS, WorkspaceTab.WORKSPACES]);
function nH(e) {
  let t = Um();
  let [a, n] = useState(void 0);
  let r = useCallback(e => {
    n(e);
  }, []);
  let l = nW.has(e.activeTab) ? a : jsx(Fragment, {});
  let o = null;
  switch (e.activeTab) {
    case WorkspaceTab.TEAMS:
      o = jsx(_$$G, {
        org: e.org,
        dropdownShown: t,
        teamRoleRequests: e.teamRoleRequests,
        user: e.user,
        selectedWorkspaceId: e.selectedWorkspaceId,
        onRightActionsChange: r
      });
      break;
    case WorkspaceTab.ABANDONED_DRAFTS:
      o = jsx(_$$M, {
        org: e.org,
        planType: OrganizationType.ORG
      });
      break;
    case WorkspaceTab.FILE_LIST_BETA:
      o = jsx(eo, {
        org: e.org
      });
      break;
    case WorkspaceTab.ACCESS_INSIGHT:
      o = jsx(ed, {
        org: e.org
      });
      break;
    case WorkspaceTab.CONNECTED_PROJECTS:
      o = jsx(_$$k4, {
        showResourceConnectionInviteModal: e.showResourceConnectionInviteModal,
        showResourceConnectionFlyout: e.showResourceConnectionFlyout
      });
      break;
    case WorkspaceTab.WORKSPACES:
    default:
      o = jsx(nV, {
        org: e.org,
        orgAdmins: e.orgAdmins,
        workspaceTeamCounts: e.workspaceTeamCounts,
        onRightActionsChange: r
      });
  }
  return jsxs(Fragment, {
    children: [jsx(_$$K2, {
      title: _$$O(DashboardSection.CONTENT)
    }), jsx(_$$b, {
      tab: DashboardSection.CONTENT,
      selectedSecondaryTab: e.activeTab,
      rightActions: l
    }), e.isLoading ? jsx("div", {
      className: "x78zum5 xl56j7k x6s0dn4 x5yr21d",
      "data-testid": "loading-spinner",
      children: jsx(_$$k3, {
        size: "lg"
      })
    }) : o]
  });
}
let nJ = "seen_org_admin_unassigned_drafts_tab_onboarding";
let nK = userFlagExistsAtomFamily(nJ);
function nX() {
  let e = useAtomWithSubscription(nK);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: HaT,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: renderI18nText("org_admin_onboarding.tooltip.unassigned_drafts_tab.body"),
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    shouldCenterArrow: EL.FALLBACK,
    targetKey: _R,
    title: renderI18nText("org_admin_onboarding.tooltip.unassigned_drafts_tab.title"),
    trackingContextName: `${_$$eN} - Unassigned drafts tab`,
    userFlagOnShow: nJ
  });
}
function n4(e) {
  let t = useDispatch();
  let a = usePlanInviteWithSeatExperiment();
  let n = e.activeTab === MemberView.ALL_MEMBERS ? jsx(Button, {
    variant: "primary",
    onClick: () => {
      let n = e.filters.workspaceFilter ?? void 0;
      n === UNASSIGNED && (n = void 0);
      let s = e.filters.licenseGroupFilter ?? void 0;
      s === _$$s2 && (s = void 0);
      a({
        isPlanAdmin: !0
      }) ? t(showModalHandler({
        type: _$$e6(),
        data: {
          planType: FOrganizationLevelType.ORG,
          workspaceId: n,
          licenseGroupId: s
        }
      })) : t(showModalHandler({
        type: F4,
        data: {
          workspaceId: n,
          licenseGroupId: s
        }
      }));
    },
    "aria-label": getI18nString("members_table.invite_users_button"),
    iconPrefix: jsx(_$$x, {}),
    children: renderI18nText("members_table.invite_users_button")
  }) : jsx(Button, {
    variant: "primary",
    onClick: () => {},
    "aria-label": getI18nString("members_table.create_user_group_button"),
    iconPrefix: jsx(_$$x, {}),
    children: renderI18nText("members_table.create_user_group_button")
  });
  return jsxs(TrackingProvider, {
    name: _$$e3.ORG_ADMIN_PEOPLE_VIEW,
    properties: {
      orgId: e.org.id
    },
    children: [jsx(_$$K2, {
      title: getI18nString("members_table.header")
    }), jsx(_$$b, {
      tab: DashboardSection.MEMBERS,
      selectedSecondaryTab: e.activeTab,
      rightActions: jsxs("div", {
        className: "x78zum5 x6s0dn4 x1nfngrj",
        children: [jsx(yE, {
          planParentId: e.org.id,
          planType: FOrganizationLevelType.ORG
        }), n]
      })
    }), e.activeTab === MemberView.ALL_MEMBERS && e.allMembersSection]
  });
}
let n8 = new class {
  constructor() {
    this.OrgExtensionAnalyticsValidator = createNoOpValidator();
    this.getExtensionAnalyticsForOrg = async e => {
      let {
        data
      } = await this.OrgExtensionAnalyticsValidator.validate(async ({
        xr: t
      }) => await t.get(`/api/extension_analytics/v1/org/${e}`));
      let {
        meta
      } = t;
      return function (e) {
        let t = {};
        e.org_analytics.forEach(e => {
          let {
            plugin_id,
            extension_usage_window,
            workspaces_extensions_used_on,
            n_extension_actions,
            n_extension_users
          } = e;
          let l = {
            usage_windows: {
              [extension_usage_window]: {
                n_extension_actions: parseInt(n_extension_actions),
                n_extension_users: parseInt(n_extension_users),
                workspaces_extensions_used_on,
                top_org_users: []
              }
            }
          };
          t[plugin_id] ? t[plugin_id] = {
            ...t[plugin_id],
            usage_windows: {
              ...t[plugin_id].usage_windows,
              ...l.usage_windows
            }
          } : t[plugin_id] = l;
        });
        e.top_org_users.forEach(e => {
          let {
            org_id,
            plugin_id,
            extension_usage_window,
            org_rank,
            n_extension_actions,
            user_id,
            user_name,
            img_url
          } = e;
          let _ = t[plugin_id];
          if (!_) {
            let e = Error(`Missing extension analytics data for org ${org_id} and plugin ${plugin_id}`);
            reportError(_$$e.EXTENSIBILITY, e);
            return;
          }
          let u = _.usage_windows[extension_usage_window];
          if (!u) throw Error("Missing extension_usage_window from org analytics data");
          let m = {
            user_id,
            user_name,
            img_url,
            org_rank: parseInt(org_rank),
            n_extension_actions: parseInt(n_extension_actions)
          };
          u.top_org_users || (u.top_org_users = []);
          u.top_org_users.push(m);
        });
        return t;
      }(meta);
    };
  }
}();
function n9(e) {
  let {
    extensionType,
    onGoToSettings
  } = e;
  let n = "plugin" === extensionType ? renderI18nText("resources_tab.approved_plugins.plugin_approval_banner.text", {
    settingName: jsx(TextWithTruncation, {
      fontWeight: "medium",
      children: renderI18nText("settings_tab.plugin_approval_label")
    })
  }) : renderI18nText("resources_tab.approved_widgets.widget_approval_banner.text", {
    settingName: jsx(TextWithTruncation, {
      fontWeight: "medium",
      children: renderI18nText("settings_tab.widget_admin_approval_label")
    })
  });
  let i = e.settingsText ?? getI18nString("resources_tab.approved_plugins.plugin_approval_banner.go_to_settings_button");
  return jsx(_$$z2, {
    orientation: "horizontal",
    variant: "warning",
    iconSrc: _$$A6,
    action: {
      label: i,
      onClick: onGoToSettings
    },
    dataTestId: "allowlist-not-enforced-banner",
    children: jsx("div", {
      "data-testid": "banner-text",
      children: n
    })
  });
}
function so(e) {
  let {
    onAddExtension,
    extensionType
  } = e;
  let n = "plugin" === extensionType ? jsx(TextWithTruncation, {
    children: renderI18nText("resources_tab.approved_plugins.no_plugins.text")
  }) : jsx(TextWithTruncation, {
    children: renderI18nText("resources_tab.approved_widgets.no_widgets.text")
  });
  let i = "plugin" === extensionType ? renderI18nText("resources_tab.approved_plugins.no_plugins.add_plugins_button") : renderI18nText("resources_tab.approved_widgets.no_widgets.add_widgets_button");
  return jsxs(AutoLayout, {
    spacing: 4,
    dataTestId: "allowlist-no-extensions-banner",
    children: [n, jsx(BaseLinkComponent, {
      onClick: onAddExtension,
      trusted: !0,
      children: i
    })]
  });
}
let sd = "extension_allowlist_table--afterDivider--vqYxx";
var s_ = (e => (e.NAME = "name", e.APPROVED = "approved", e))(s_ || {});
function su({
  allowlistedExtensions: e,
  extensionToUsageData: t,
  orgId: a,
  extensionType: n,
  onAddExtension: l,
  selectedExtensionId: o
}) {
  let [d, c] = useState({
    column: "name",
    isReversed: !1
  });
  let _ = useMemo(() => ({
    name: e => e.name ?? "",
    approved: e => e.approvedAt.getTime()
  }), []);
  let u = useDispatch();
  let m = function (e, t) {
    let a = new Map();
    for (let n of e) {
      if (n.plugin.status !== ResourceStatus.Loaded) continue;
      let e = n.plugin.data;
      if (!e || "plugin" === t && e.isWidget || "widget" === t && !e.isWidget) continue;
      let s = e.currentPluginVersion;
      if (!s) continue;
      let {
        id
      } = e;
      let {
        iconUrl,
        name,
        description,
        tagline
      } = s;
      let {
        createdAt
      } = n;
      let _ = function (e) {
        let {
          allowlistGroupType
        } = e;
        switch (allowlistGroupType) {
          case "Org":
            {
              let {
                allowlistedOrg
              } = e;
              if (!allowlistedOrg) return null;
              return {
                type: allowlistGroupType,
                id: allowlistedOrg.id,
                name: allowlistedOrg.name
              };
            }
          case "Workspace":
            {
              let {
                allowlistedWorkspace
              } = e;
              if (!allowlistedWorkspace) return null;
              return {
                type: allowlistGroupType,
                id: allowlistedWorkspace.id,
                name: allowlistedWorkspace.name
              };
            }
          default:
            return null;
        }
      }(n);
      if (!_) continue;
      let u = a.get(id);
      if (u) {
        u.allowlistGroups.push(_);
        u.approvedAt = createdAt < u.approvedAt ? createdAt : u.approvedAt;
        continue;
      }
      let m = {
        extensionId: id,
        iconUrl,
        name,
        description,
        tagline,
        approvedAt: createdAt,
        allowlistGroups: [_]
      };
      a.set(id, m);
    }
    return a;
  }(e.filter(e => e.plugin.status === ResourceStatus.Loaded && e.plugin.data?.publishingStatus === FPublicationStatusType.APPROVED_PUBLIC), n);
  let p = m.size > 0;
  let g = Array.from(m.values());
  sortBySelectors(g, _[d.column], d.isReversed, d.secondaryColumn && _?.[d.secondaryColumn], d.isSecondaryReversed);
  useEffect(() => {
    if (o) {
      let e = t?.[o];
      u(showModalHandler({
        type: _$$W(),
        data: {
          mode: "manage",
          extensionId: o,
          orgId: a,
          usageData: e,
          extensionType: n,
          initialTab: "overview",
          isAllowed: !0
        }
      }));
    }
  }, [u, t, n, a, o]);
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.$,
    "data-testid": "extension-allowlist-table",
    children: [jsx("div", {
      className: cssBuilderInstance.pl32.$,
      children: jsx(TextWithTruncation, {
        fontSize: 13,
        fontWeight: "medium",
        children: renderI18nText("resources_tab.approved_plugins.table.approved_header")
      })
    }), jsx(sm, {
      extensionType: n,
      updateSortState: e => {
        d.column === e ? c(e => ({
          ...e,
          isReversed: !e.isReversed
        })) : c(t => ({
          column: e,
          isReversed: !1,
          secondaryColumn: t.column,
          isSecondaryReversed: t.isReversed
        }));
      },
      sortState: d
    }), p ? g.map((e, i) => {
      let r = s => {
        let i = t?.[e.extensionId];
        u(showModalHandler({
          type: _$$W(),
          data: {
            mode: "manage",
            extensionId: e.extensionId,
            orgId: a,
            usageData: i,
            extensionType: n,
            initialTab: s,
            isAllowed: !0
          }
        }));
      };
      return jsxs(Hj, {
        className: e4()(cssBuilderInstance.flex.itemsCenter.gap16.relative.$, sd),
        style: styleBuilderInstance.add({
          border: "none"
        }).px32.py12.$,
        useAdminTableStyles: !0,
        onClick: e => {
          e.stopPropagation();
          r("overview");
        },
        dataTestId: `extension-allowlist-table-row-${i}`,
        children: [jsx(sp, {
          name: e.name,
          iconUrl: e.iconUrl
        }), jsx(sg, {
          description: e.description,
          tagline: e.tagline
        }), jsx(sh, {
          entry: e
        }), jsx(sx, {
          entry: e,
          openAllowlistModal: r
        }), jsx(sb, {})]
      }, e.extensionId);
    }) : jsx("div", {
      className: cssBuilderInstance.mt32.mlAuto.mrAuto.$,
      children: jsx(so, {
        extensionType: n,
        onAddExtension: l
      })
    })]
  });
}
function sm({
  extensionType: e,
  updateSortState: t,
  sortState: a
}) {
  return jsxs(Hj, {
    header: !0,
    useAdminTableStyles: !0,
    className: e4()(cssBuilderInstance.fontSemiBold.relative.flex.gap16.itemsBaseline.$, sd),
    style: styleBuilderInstance.add({
      border: "none"
    }).px32.py16.$,
    children: [jsx(A3, {
      style: styleBuilderInstance.add({
        width: "20%"
      }).$,
      children: jsx(_$$tD, {
        hasArrow: "name" === a.column,
        field: "name",
        sortBy: () => t("name"),
        isDescending: !a.isReversed,
        children: jsx(TextWithTruncation, {
          color: "default",
          children: renderI18nText("plugin" === e ? "resources_tab.approved_plugins.table.plugin_name_column" : "resources_tab.approved_plugins.table.widget_name_column")
        })
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "40%"
      }).$,
      children: jsx(TextWithTruncation, {
        color: "default",
        children: renderI18nText("resources_tab.approved_plugins.table.description_column")
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "10%"
      }).justifyStart.$,
      children: jsx(_$$tD, {
        hasArrow: "approved" === a.column,
        field: "approved",
        sortBy: () => t("approved"),
        isDescending: !a.isReversed,
        children: jsx(TextWithTruncation, {
          color: "default",
          children: renderI18nText("resources_tab.approved_plugins.table.approved_column")
        })
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "20%"
      }).justifyStart.$,
      children: jsx(TextWithTruncation, {
        color: "default",
        children: renderI18nText("resources_tab.approved_plugins.table.approved_for_column")
      })
    }), jsxs(A3, {
      style: styleBuilderInstance.add({
        width: "10%"
      }).justifyStart.$,
      children: [jsx("span", {}), " "]
    })]
  });
}
function sp({
  name: e,
  iconUrl: t,
  numWorkspaces: a
}) {
  return jsxs("div", {
    className: cssBuilderInstance.flex.itemsCenter.gap12.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "20%"
    }).$,
    children: [jsx("img", {
      src: t ?? "",
      alt: "approved for workspace",
      className: cssBuilderInstance.w24.h24.bRadius6.$
    }), jsx(TextWithTruncation, {
      truncate: !0,
      children: e
    }), !!a && a > 0 && jsx(SvgComponent, {
      width: "16px",
      height: "16px",
      svg: _$$A7,
      className: "extension_allowlist_table--greenCheck---4jlH",
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("resources_tab.approved_plugins.table.already_approved", {
        numWorkspaces: a
      })
    })]
  });
}
function sg({
  description: e,
  tagline: t
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "40%"
    }).$,
    children: jsx(TextWithTruncation, {
      truncate: !0,
      showTooltipWhenTruncated: !1,
      children: stripHtmlTags(t || e || "")
    })
  });
}
function sh({
  entry: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyStart.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "10%"
    }).$,
    children: jsx(h1, {
      date: e.approvedAt
    })
  });
}
function sx({
  entry: e,
  openAllowlistModal: t
}) {
  let a = useMemo(() => {
    if (e.allowlistGroups.some(e => "Org" === e.type)) return jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.table.entire_org")
    });
    let a = e.allowlistGroups[0];
    if (!a) return null;
    if (e.allowlistGroups.length > 1) {
      let a = e.allowlistGroups.map(e => e.name).join("\n");
      return jsx("button", {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": a,
        "data-tooltip-text-left": !0,
        type: "button",
        className: cssBuilderInstance.bgTransparent.cursorPointer.$,
        onClick: e => {
          e.stopPropagation();
          t("edit");
        },
        children: jsx(TextWithTruncation, {
          color: "brand",
          children: renderI18nText("resources_tab.approved_plugins.table.n_workspaces_approved_for", {
            numberOfWorkspaces: e.allowlistGroups.length
          })
        })
      });
    }
    return a.name;
  }, [e.allowlistGroups, t]);
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyStart.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "20%"
    }).$,
    children: a
  });
}
function sb() {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyEnd.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "10%"
    }).$,
    children: jsx(In, {
      icon: "chevron-right-32"
    })
  });
}
let sy = registerModal(function ({
  extension: e,
  isWidget: t,
  declineModalParams: a,
  open: n,
  onClose: l
}) {
  let {
    name,
    iconUrl
  } = e;
  let [c, _] = useState(void 0);
  let u = useDispatch();
  let m = t ? getI18nString("extension_decline_modal.decline_widget_request") : getI18nString("extension_decline_modal.decline_plugin_request");
  let p = e => {
    let t = {
      orgId: e.orgId,
      extensionId: e.extensionId,
      extensionType: e.extensionType,
      declineNote: c
    };
    0 === e.approvedWorkspaceIds.length ? _$$J3.rejectRequestForOrg(t) : _$$J3.updateRequestForWorkspaces({
      ...e,
      declineNote: c
    });
    u(popModalStack());
    l();
  };
  let g = t ? getI18nString("extension_decline_modal.leave_widget_note") : getI18nString("extension_decline_modal.leave_plugin_note");
  let h = useModalManager({
    open: n,
    onClose: l
  });
  return jsx(ModalRootComponent, {
    manager: h,
    width: "md",
    htmlAttributes: {
      "data-testid": "decline-extension-request-modal"
    },
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: m
        })
      }), jsxs(DialogBody, {
        scrolling: "none",
        children: [jsxs("div", {
          className: cssBuilderInstance.mb16.flex.itemsCenter.$,
          children: [jsx("img", {
            src: iconUrl ?? "",
            alt: "plugin icon",
            className: cssBuilderInstance.w24.h24.bRadius6.mr8.$
          }), jsx(TextWithTruncation, {
            fontWeight: "medium",
            truncate: !0,
            children: name
          })]
        }), jsx("div", {
          className: cssBuilderInstance.mb16.$,
          children: jsx(TextWithTruncation, {
            children: g
          })
        }), jsx("textarea", {
          className: cssBuilderInstance.wFull.borderBox.b1.h64.bRadius2.p8.resizeNone.colorBorder.$,
          value: c,
          onChange: e => {
            _(e.target.value);
          }
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: l,
            children: getI18nString("general.cancel")
          }), jsx(Button, {
            variant: "primary",
            onClick: () => p(a),
            children: getI18nString("resources_tab.approved_plugins.modal.decline")
          })]
        })
      })]
    })
  });
}, "ExtensionDeclineModal");
let sw = e => {
  let t = new Map();
  for (let a of e) {
    let {
      createdAt,
      orgUser,
      plugin
    } = a;
    if (!plugin || !orgUser) continue;
    let {
      currentPluginVersion
    } = plugin;
    if (!currentPluginVersion || plugin.publishingStatus !== FPublicationStatusType.APPROVED_PUBLIC) continue;
    let r = plugin.id;
    let {
      name,
      iconUrl,
      description,
      tagline
    } = currentPluginVersion;
    let {
      user
    } = orgUser;
    if (!user.name || !user.email) continue;
    let u = {
      userId: user.id,
      name: user.name,
      email: user.email,
      imgUrl: user.imgUrl
    };
    let m = {
      extensionId: plugin.id,
      name,
      iconUrl,
      description,
      tagline,
      lastRequestedDates: [createdAt],
      requesters: [u],
      isAllowed: a.workspaceAllowlistedPlugins.length > 0,
      numAllowedWorkspaces: a.workspaceAllowlistedPlugins.length
    };
    let p = t.get(r);
    p ? (p.lastRequestedDates.push(createdAt), p.requesters.push(u)) : t.set(r, m);
  }
  for (let e of t.values()) e.lastRequestedDates.sort((e, t) => t.getTime() - e.getTime());
  return t;
};
let sk = (e, t) => e.filter(e => {
  let {
    plugin
  } = e;
  return !!plugin && ("plugin" === t ? !plugin.isWidget : plugin.isWidget);
});
var sE = (e => (e.NAME = "name", e.LAST_REQUESTED = "last_requested", e))(sE || {});
function sC({
  extensionType: e,
  updateSortState: t,
  sortState: a
}) {
  return jsxs(Hj, {
    header: !0,
    useAdminTableStyles: !0,
    className: e4()(cssBuilderInstance.fontSemiBold.relative.flex.gap16.itemsBaseline.$, sd),
    style: styleBuilderInstance.add({
      border: "none"
    }).px32.py16.$,
    children: [jsx(A3, {
      style: styleBuilderInstance.add({
        width: "20%"
      }).$,
      children: jsx(_$$tD, {
        hasArrow: "name" === a.column,
        field: "name",
        sortBy: () => t("name"),
        isDescending: !a.isReversed,
        children: jsx(TextWithTruncation, {
          color: "default",
          children: renderI18nText("plugin" === e ? "resources_tab.approved_plugins.table.plugin_name_column" : "resources_tab.approved_plugins.table.widget_name_column")
        })
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "40%"
      }).$,
      children: jsx(TextWithTruncation, {
        color: "default",
        children: renderI18nText("resources_tab.approved_plugins.table.description_column")
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "10%"
      }).justifyStart.$,
      children: jsx(_$$tD, {
        hasArrow: "last_requested" === a.column,
        field: "last_requested",
        sortBy: () => t("last_requested"),
        isDescending: !a.isReversed,
        children: jsx(TextWithTruncation, {
          color: "default",
          children: renderI18nText("resources_tab.approved_plugins.table.last_requested_column")
        })
      })
    }), jsx(A3, {
      style: styleBuilderInstance.add({
        width: "20%"
      }).justifyStart.$,
      children: jsx(TextWithTruncation, {
        color: "default",
        children: renderI18nText("resources_tab.approved_plugins.table.requested_by_column")
      })
    }), jsxs(A3, {
      style: styleBuilderInstance.add({
        width: "10%"
      }).justifyStart.$,
      children: [jsx("span", {}), " "]
    })]
  });
}
function sS({
  lastRequestedDate: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyStart.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "10%"
    }).$,
    children: jsx(h1, {
      date: e
    })
  });
}
function sN({
  requesters: e,
  onClick: t
}) {
  let a;
  if (1 === e.length) {
    let t = e[0];
    a = jsxs(Fragment, {
      children: [jsx(H8, {
        size: Pf.MEDIUM,
        user: t
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.ml8.$,
        children: [jsx(TextWithTruncation, {
          color: "default",
          fontSize: 11,
          fontWeight: "medium",
          children: t.name
        }), jsx(TextWithTruncation, {
          color: "secondary",
          fontSize: 11,
          children: t.email
        })]
      })]
    });
  } else {
    let n = e.map(e => e.name).join("\n");
    a = jsx("button", {
      onClick: t,
      style: styleBuilderInstance.add({
        backgroundColor: "inherit"
      }).$,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": n,
      "data-tooltip-text-left": !0,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        color: "brand",
        children: renderI18nText("resources_tab.approved_plugins.table.members", {
          numberOfMembers: e.length
        })
      })
    });
  }
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyStart.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "20%"
    }).$,
    children: jsx("div", {
      className: cssBuilderInstance.flex.itemsCenter.$,
      children: a
    })
  });
}
function sI() {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyEnd.overflowHidden.$,
    style: styleBuilderInstance.add({
      width: "10%"
    }).$,
    children: jsx(ButtonBasePrimary, {
      children: jsx(TextWithTruncation, {
        children: renderI18nText("resources_tab.approved_plugins.table.review_button")
      })
    })
  });
}
function sT(e) {
  let t = useDispatch();
  let {
    entry,
    orgId,
    extensionType,
    isAllowed,
    usageData,
    dataTestId
  } = e;
  let {
    extensionId
  } = a;
  let _ = () => {
    t(showModalHandler({
      type: _$$W(),
      data: {
        mode: "review",
        extensionId,
        orgId,
        usageData,
        extensionType,
        isAllowed,
        openDeclineModal: u
      }
    }));
  };
  let u = e => {
    let s = {
      extension: {
        pluginId: entry.extensionId,
        iconUrl: entry.iconUrl,
        name: entry.name
      },
      isWidget: "widget" === extensionType,
      orgId,
      workspaceDetails: void 0,
      declineModalParams: e
    };
    t(showModalHandler({
      type: sy,
      data: s
    }));
  };
  return jsxs(Hj, {
    className: e4()(cssBuilderInstance.flex.itemsCenter.gap16.relative.$, sd),
    style: styleBuilderInstance.add({
      border: "none"
    }).px32.py12.$,
    useAdminTableStyles: !0,
    onClick: _,
    dataTestId,
    children: [jsx(sp, {
      name: entry.name,
      iconUrl: entry.iconUrl,
      numWorkspaces: e.numAllowedWorkspaces
    }), jsx(sg, {
      description: entry.description,
      tagline: entry.tagline
    }), jsx(sS, {
      lastRequestedDate: entry.lastRequestedDates[0]
    }), jsx(sN, {
      requesters: entry.requesters,
      onClick: _
    }), jsx(sI, {})]
  });
}
function sA(e) {
  let {
    orgId,
    extensionToUsageData,
    extensionType
  } = e;
  let [r, l] = useState({
    column: "last_requested",
    isReversed: !0
  });
  let d = useMemo(() => ({
    name: e => e[1].name ?? "",
    last_requested: e => e[1].lastRequestedDates[0].getTime()
  }), []);
  let c = useSubscription(ExtensionRequestTableView, {
    orgId
  });
  if ("loading" === c.status) return null;
  if ("errors" === c.status) {
    reportError(_$$e.EXTENSIBILITY, Error("Failed to load plugin requests"));
    return null;
  }
  let _ = getResourceDataOrFallback(c.data.org);
  if (!_) return null;
  let {
    pendingPluginRequests
  } = _;
  if (!pendingPluginRequests || 0 === pendingPluginRequests.length) return null;
  let p = sw(sk(pendingPluginRequests, extensionType));
  if (0 === p.size) return null;
  let g = Array.from(p.entries());
  sortBySelectors(g, d[r.column], r.isReversed, r.secondaryColumn && d?.[r.secondaryColumn], r.isSecondaryReversed);
  return jsxs("div", {
    className: cssBuilderInstance.pb32.$,
    children: [jsx("div", {
      className: cssBuilderInstance.pl32.$,
      children: jsx(TextWithTruncation, {
        fontSize: 13,
        fontWeight: "medium",
        children: renderI18nText("resources_tab.approved_plugins.table.requested_header")
      })
    }), jsx(sC, {
      extensionType,
      updateSortState: e => {
        r.column === e ? l(e => ({
          ...e,
          isReversed: !e.isReversed
        })) : l(t => ({
          column: e,
          isReversed: !1,
          secondaryColumn: t.column,
          isSecondaryReversed: t.isReversed
        }));
      },
      sortState: r
    }), jsx("div", {
      className: cssBuilderInstance.flex.flexColumn.$,
      "data-testid": "extension-request-table",
      children: g.map(([e, i], r) => jsx(sT, {
        extensionType,
        orgId,
        entry: i,
        isAllowed: i.isAllowed,
        numAllowedWorkspaces: i.numAllowedWorkspaces,
        usageData: extensionToUsageData?.[e],
        dataTestId: `extension-request-table-row-${r}`
      }, e))
    })]
  });
}
function sR({
  orgId: e,
  extensionType: t,
  selectedExtensionId: a,
  onRightActionsChange: n
}) {
  let l = useDispatch();
  let o = useTeamPlanPublicInfo().unwrapOr(null);
  let c = o?.tier === FPlanNameType.ENTERPRISE;
  let _ = o?.key.type === FOrganizationLevelType.ORG;
  let m = useSubscription(AllowlistPluginsSectionView, {
    orgId: e
  });
  let [p] = IT(sD(e), {
    enabled: c
  });
  let g = useCallback(() => {
    "plugin" === t ? l(showModalHandler({
      type: _$$eu,
      data: {
        currentUserOrgId: e
      }
    })) : l(showModalHandler({
      type: zb,
      data: {
        currentUserOrgId: e
      }
    }));
  }, [l, t, e]);
  let h = useCallback(() => {
    l(showModalHandler({
      type: CW,
      data: {
        orgId: e,
        extensionType: t
      }
    }));
  }, [l, t, e]);
  let x = m.data?.org;
  let b = _ && sL(t, {
    publicPluginsAllowed: x?.publicPluginsAllowed || !1,
    pluginsWhitelistEnforced: x?.pluginsWhitelistEnforced || !1,
    widgetsWhitelistEnforced: x?.widgetsWhitelistEnforced || !1
  });
  let v = useMemo(() => jsxs("div", {
    className: cssBuilderInstance.flex.flexRow.gap8.$,
    children: [jsx(_$$$, {
      onClick: h,
      children: renderI18nText("resources_tab.approved_plugins.actions.settings")
    }), jsxs(_$$$, {
      icon: "plus-32",
      variant: "primary",
      disabled: !b,
      onClick: g,
      children: ["plugin" === t && renderI18nText("resources_tab.approved_plugins.actions.add_plugin"), "widget" === t && renderI18nText("resources_tab.approved_widgets.actions.add_widget")]
    })]
  }), [b, g, h, t]);
  useEffect(() => {
    n?.(v);
  }, [v, n]);
  let f = !getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
    children: [jsx(_$$K2, {
      title: _$$O(DashboardSection.RESOURCES)
    }), jsx(_$$b, {
      tab: DashboardSection.RESOURCES,
      selectedSecondaryTab: sO[t],
      rightActions: v
    })]
  });
  return "loading" !== m.status && "errors" !== m.status && x ? jsxs(Fragment, {
    children: [f, jsxs(_$$P, {
      className: cssBuilderInstance.wFull.hFull.$,
      children: [!b && jsx("div", {
        className: cssBuilderInstance.ml32.mr32.mb24.$,
        children: jsx(n9, {
          extensionType: t,
          onGoToSettings: h,
          settingsText: getI18nString("resources_tab.approved_plugins.plugin_approval_banner.open_settings")
        })
      }), jsxs("div", {
        className: cssBuilderInstance.$$if(!b, cssBuilderInstance.opacity0_3.eventsNone).$,
        children: [jsx(sA, {
          orgId: e,
          extensionToUsageData: p.data,
          extensionType: t
        }), jsx(su, {
          allowlistedExtensions: x.allowlistedPlugins,
          extensionToUsageData: p.data,
          orgId: e,
          extensionType: t,
          onAddExtension: g,
          selectedExtensionId: a
        })]
      })]
    })]
  }) : f || null;
}
let sO = {
  plugin: FigResourceType.APPROVED_PLUGINS,
  widget: FigResourceType.APPROVED_WIDGETS
};
let sL = (e, t) => "plugin" === e ? !!(t.publicPluginsAllowed && t.pluginsWhitelistEnforced) : !!(t.publicPluginsAllowed && t.widgetsWhitelistEnforced);
let sD = liveStoreInstance.Query({
  fetch: async e => await n8.getExtensionAnalyticsForOrg(e)
});
function sP(e) {
  let t = useDispatch();
  let a = Um();
  let n = selectPermissionsState();
  let l = useSelector(({
    sharedFonts: e
  }) => e);
  let o = g7();
  let [c, _] = useState(void 0);
  let u = useCallback(e => {
    _(e);
  }, []);
  let [m] = Tn({
    currentOrgId: e.org.id,
    excludeDrafts: !0,
    includeSharingGroupInfo: getFeatureFlags().fc_general
  }, {
    enabled: e.isOrgAdmin
  });
  let p = m.data || null;
  let g = null;
  switch (e.activeTab) {
    case FigResourceType.APPROVED_PLUGINS:
      g = jsx(sR, {
        orgId: e.org.id,
        extensionType: "plugin",
        selectedExtensionId: e.selectedExtensionId,
        onRightActionsChange: u
      });
      break;
    case FigResourceType.APPROVED_WIDGETS:
      g = jsx(sR, {
        orgId: e.org.id,
        extensionType: "widget",
        selectedExtensionId: e.selectedExtensionId,
        onRightActionsChange: u
      });
      break;
    case FigResourceType.SHARED_FONTS:
      g = jsx(_$$y2, {
        dispatch: t,
        dropdownShown: a,
        permissionsState: n,
        orgId: e.org.id,
        sharedFonts: l,
        resourceType: "org",
        isLoading: !!_$$y2.fontLoadPromise || !_$$y2.loadedFonts,
        onRightActionsChange: u
      });
      break;
    case FigResourceType.LIBRARIES:
    default:
      g = jsx(re, {
        org: e.org,
        libraryStats: p,
        communityLibraryStats: o,
        isLoading: null === p,
        onRightActionsChange: u
      });
  }
  return jsxs("div", {
    children: [jsx(_$$K2, {
      title: _$$O(DashboardSection.RESOURCES)
    }), jsx(_$$b, {
      tab: DashboardSection.RESOURCES,
      selectedSecondaryTab: e.activeTab,
      rightActions: c
    }), g]
  });
}
export function $$s$0(e) {
  let t = useDispatch();
  let a = selectPermissionsState();
  let n = useTeamPlanUser();
  let l = useIsOrgAdminUser(n);
  let o = useCurrentUserOrg();
  let d = NJ(o.id);
  let c = "loaded" === l.status && isSelectedOrgAdminSettingsMissingResources({
    isAdminOrg: l.data,
    orgAdminSettingsViewTab: e.selectedTab,
    orgAdminSettingsViewSecondaryTab: e.selectedSecondaryTab,
    permissions: a
  });
  return (useEffect(() => {
    c && t(selectViewAction({
      view: "resourceUnavailable"
    }));
  }, [t, c]), "loading" === l.status || "loading" === d.status) ? jsx(_$$p2, {
    children: jsx(LoadingOverlay, {})
  }) : jsx(sB, {
    ...e,
    isOrgAdmin: !!l.data,
    workspacesCanAdminViewResult: d
  });
}
function sB(e) {
  var t;
  let a = useDispatch();
  let n = useCurrentUserOrg();
  let v = useSelector(({
    orgDomains: e
  }) => e);
  let f = useSelector(({
    orgSamlConfig: e
  }) => e);
  let j = MX();
  let y = useSelector(({
    loadingState: e
  }) => e);
  let w = Um();
  let k = selectPermissionsState();
  let E = useSelector(({
    sharedFonts: e
  }) => e);
  let C = useSelector(({
    activityLogs: e
  }) => e);
  let S = selectCurrentUser();
  let N = useSelector(({
    teamRoleRequests: e
  }) => e);
  let I = useSelector(({
    selectedView: e
  }) => e);
  let T = useTeamPlanUser().unwrapOr(null);
  let A = useTeamPlanPublicInfo().unwrapOr(null);
  let R = A?.tier === FPlanNameType.ENTERPRISE;
  let O = !!(R && T?.fromOrgUser?.isLicenseGroupAdmin);
  let L = e.isOrgAdmin;
  let U = T?.userId;
  let {
    groupsUserIsAdminOf
  } = U ? EQ(j, U, O && !L) : {
    groupsUserIsAdminOf: []
  };
  let {
    isFetched,
    orgAdmins
  } = YM({
    orgId: n.id,
    includeLicenseAdmins: !1
  });
  let {
    isFetched: _isFetched,
    memberCounts
  } = cZ(n.id, R && L);
  let z = _W(n.id, R && L);
  let V = ZY({
    isIntendedAudience: R && !L
  });
  useEffect(() => {
    if ("orgAdminSettings" !== I.view) return;
    let t = e.workspacesCanAdminViewResult.data?.[0];
    let s = !!t;
    let i = s && I.membersTabOrgJoinRequest;
    !O || L || i ? s && !L ? a(selectViewAction({
      view: "workspace",
      subView: DUserRole.ADMIN,
      workspaceId: t.id,
      selectedTab: findMatchingValue(SectionType, e.selectedTab) || defaultSectionKey,
      membersTabOrgJoinRequest: I.membersTabOrgJoinRequest
    })) : L || a(selectViewAction(o0)) : groupsUserIsAdminOf.length > 0 ? V ? a(selectViewAction({
      view: "billingGroupDashboard",
      selectedTab: FRequestsStr.REQUESTS
    })) : a(selectViewAction({
      view: "licenseGroup",
      subView: UserGroupRole.ADMIN,
      licenseGroupId: groupsUserIsAdminOf[0].id,
      selectedTab: getGroupOrDefault(e.selectedTab)
    })) : isLoaded(y, EO(n.id)) && a(selectViewAction(o0));
  }, [a, groupsUserIsAdminOf, O, e.workspacesCanAdminViewResult, L, n.id, y, e.selectedTab, I.membersTabOrgJoinRequest, I.view, V]);
  let [H, Y] = useState(0);
  let [J, Q] = useState("");
  useEffect(() => {
    e.selectedTab === DashboardSection.MEMBERS && (Y(Date.now()), trackEventAnalytics("Org Admin Members Table V2 Load Initiated", {
      orgId: n.id
    }, {
      forwardToDatadog: !0
    }));
  }, [e.selectedTab, n.id]);
  useEffect(() => {
    L && a(_$$Jt3({
      includeMemberCount: !0,
      includeTopMembers: !0,
      includeProjectCount: !0,
      includeSecretTeams: !0
    }));
  }, [L, a, n.id]);
  useEffect(() => {
    L && (a(UK({
      force: !0
    })), a(_$$Jt2()));
  }, [L, a, n.id]);
  let [Z] = Tn({
    currentOrgId: n.id,
    excludeDrafts: !0,
    includeSharingGroupInfo: !0
  }, {
    enabled: L
  });
  let ee = g7();
  let et = Z.data || null;
  useEffect(() => {
    L && _$$y2.loadSharedFonts(a);
  }, [L, a, n.id]);
  useEffect(() => {
    L && (a(initializePluginAllowlist({})), a(initializeWidgetAllowlist({})));
  }, [L, a, n.id]);
  useEffect(() => {
    a(_$$Jt({
      forceRefetch: !0
    }));
  }, [a, n.id]);
  let ea = _$$M2({
    id: n.id,
    bigma_enabled: R,
    security_add_on_enabled_at: n.security_add_on_enabled_at
  });
  let es = useCurrentUserOrgId();
  let el = Xf(es);
  let eu = "loading" === el.status;
  let eA = el.data?.invoices;
  let ez = designSet.dict(e => el.data?.billable_seats[e] ?? 0);
  let eV = el.data?.shipping_address || createEmptyAddress();
  let eW = el.data?.has_billing_address || !1;
  let eH = null;
  let eY = null;
  eY = e.selectedTab === DashboardSection.DASHBOARD || e.selectedTab === DashboardSection.CONTENT ? jsx(LoadingOverlay, {}) : e.selectedTab === DashboardSection.RESOURCES ? jsx(_$$p2, {
    children: jsx(LoadingOverlay, {})
  }) : jsxs("div", {
    className: kL,
    children: [jsx(_$$K2, {
      title: _$$O(e.selectedTab, e.selectedSecondaryTab)
    }), jsx(LoadingOverlay, {})]
  });
  let eJ = useSubscription(OrgTeamsIdAndName({
    orgId: n.id
  }), {
    enabled: e.selectedTab === DashboardSection.ACTIVITY
  });
  let eQ = !1;
  switch (e.selectedTab) {
    case DashboardSection.ACTIVITY:
      let eZ = "loaded" === eJ.status && "loaded" === eJ.data.org.status && eJ.data.org.data ? eJ.data.org.data.activeTeams : null;
      eH = jsx(tZ, {
        activityLogs: C,
        dispatch: a,
        dropdownShown: w,
        fetchLogs: e => {
          a(Jt(e));
        },
        initialEmail: I.activityTabInitialEmail,
        initialEventOptionId: I.activityTabInitialEventOptionId,
        initialStartTime: I.activityTabInitialStartTime,
        org: n,
        orgCanUseMfaRequiredForGuests: ea,
        orgTeams: eZ || []
      });
      break;
    case DashboardSection.BILLING:
      let e0 = !!R && (isLoading(y, EO(n.id)) || !_isFetched);
      eH = jsx(nu, {
        activeTab: Gv(e.selectedSecondaryTab),
        org: n,
        orgAdmins,
        licenseGroupMemberCounts: memberCounts,
        isLoadingOrgAdmins: !isFetched,
        isLoadingLicenseGroups: e0
      });
      break;
    case DashboardSection.DASHBOARD:
      eQ = !1;
      eH = jsx(_$$i, {
        isOrgAdmin: L
      });
      break;
    case DashboardSection.WORKSPACES:
      eQ = !isFetched;
      eH = jsx(nV, {
        org: n,
        orgAdmins,
        workspaceTeamCounts: z
      });
      break;
    case DashboardSection.CONTENT:
      let e1 = e.selectedSecondaryTab || (n.tier === FPlanNameType.ENTERPRISE ? WorkspaceTab.WORKSPACES : WorkspaceTab.TEAMS);
      if (getFeatureFlags().ff_a11y_page_tab_fix) {
        let t = Object.values(WorkspaceTab).includes(e1) ? e1 : WorkspaceTab.TEAMS;
        eH = jsx(nH, {
          activeTab: t,
          isLoading: !isFetched,
          isOrgAdmin: L,
          org: n,
          orgAdmins,
          selectedWorkspaceId: e.selectedWorkspaceId,
          showResourceConnectionInviteModal: e.showResourceConnectionInviteModal,
          teamRoleRequests: N,
          user: S,
          workspaceTeamCounts: z
        });
        break;
      }
      switch (e1) {
        case WorkspaceTab.TEAMS:
          eH = jsx(_$$G, {
            org: n,
            dropdownShown: w,
            teamRoleRequests: N,
            user: S,
            selectedWorkspaceId: e.selectedWorkspaceId
          });
          break;
        case WorkspaceTab.ABANDONED_DRAFTS:
          eH = jsx(_$$M, {
            org: n,
            planType: OrganizationType.ORG
          });
          break;
        case WorkspaceTab.FILE_LIST_BETA:
          eH = jsx(eo, {
            org: n
          });
          break;
        case WorkspaceTab.ACCESS_INSIGHT:
          eH = jsx(ed, {
            org: n
          });
          break;
        case WorkspaceTab.CONNECTED_PROJECTS:
          eH = jsx(_$$k4, {
            showResourceConnectionInviteModal: e.showResourceConnectionInviteModal,
            showResourceConnectionFlyout: e.showResourceConnectionFlyout
          });
          break;
        case WorkspaceTab.WORKSPACES:
        default:
          eQ = !isFetched;
          eH = jsx(nV, {
            org: n,
            orgAdmins,
            workspaceTeamCounts: z
          });
      }
      break;
    case DashboardSection.MEMBERS:
      let e2 = isLoading(y, EO(n.id)) || !!L && ("loading" === el.status || f.isFetching);
      let e4 = I.orgAdminMembersTabSort || DefaultSortConfig;
      eH = null;
      let e5 = null;
      e5 = L ? jsx(KX, {
        currency: el.data?.currency || void 0,
        dropdownShown: w,
        filters: I.orgAdminMembersTabFilters || DefaultFilters,
        invoices: eA,
        isLoading: e2,
        org: n,
        searchQuery: J,
        setSearchQuery: Q,
        sort: e4,
        startTime: H
      }) : null;
      eH = getFeatureFlags().user_groups ? jsx(n4, {
        activeTab: _$$i3(e.selectedSecondaryTab),
        org: n,
        allMembersSection: e5,
        filters: I.orgAdminMembersTabFilters || DefaultFilters
      }) : e5;
      break;
    case DashboardSection.RESOURCES:
      let e3 = (t = e.selectedSecondaryTab, Object.values(FigResourceType).includes(t)) ? e.selectedSecondaryTab : FigResourceType.LIBRARIES;
      if (getFeatureFlags().ff_a11y_page_tab_fix) {
        eH = jsx(sP, {
          isOrgAdmin: L,
          activeTab: e3,
          org: n,
          selectedExtensionId: e.selectedExtensionId
        });
        break;
      }
      switch (e3) {
        case FigResourceType.APPROVED_PLUGINS:
          eH = jsx(sR, {
            orgId: n.id,
            extensionType: "plugin",
            selectedExtensionId: e.selectedExtensionId
          });
          break;
        case FigResourceType.APPROVED_WIDGETS:
          eH = jsx(sR, {
            orgId: n.id,
            extensionType: "widget",
            selectedExtensionId: e.selectedExtensionId
          });
          break;
        case FigResourceType.SHARED_FONTS:
          eQ = !1;
          eH = jsx(_$$y2, {
            dispatch: a,
            dropdownShown: w,
            permissionsState: k,
            orgId: n.id,
            sharedFonts: E,
            resourceType: "org",
            isLoading: !!_$$y2.fontLoadPromise || !_$$y2.loadedFonts
          });
          break;
        case FigResourceType.LIBRARIES:
        default:
          eQ = !1;
          eH = jsx(re, {
            org: n,
            libraryStats: et,
            communityLibraryStats: ee,
            isLoading: null === et
          });
      }
      break;
    case DashboardSection.SETTINGS:
      eQ = f.isFetching || v.isFetching || eu;
      eH = jsx(_$$Q4, {
        adminEmail: el.data?.admin_email || "",
        billableSeats: ez,
        canSeeBillingAddressExp: eW,
        currency: el.data?.currency,
        org: n,
        orgDomains: v.domains,
        orgSamlConfig: f,
        renewalDate: de(eA ?? []),
        shippingAddress: eV,
        user: S
      });
      break;
    case DashboardSection.TEAMS:
      eH = jsx(_$$G, {
        org: n,
        dropdownShown: w,
        teamRoleRequests: N,
        user: S,
        selectedWorkspaceId: e.selectedWorkspaceId
      });
  }
  return jsxs(Fragment, {
    children: [jsx(_$$r, {
      containerClass: _$$nF,
      scrollableContainerClass: lF,
      banner: jsx(_$$_, {
        entryPoint: _$$Y2.FILE_BROWSER
      }),
      toolbar: jsx(_$$g2, {}),
      content: eQ || !L ? eY : eH,
      errorBoundaryConfig: {
        figmaTeam: _$$e.SCALE,
        boundaryKeySuffix: "OrgAdminSettingsPageView"
      }
    }), jsx(W, {}), useSeatBillingTermsExperiment() && jsx(_$$k2, {
      org: n
    }), y3(n.created_at) && jsx(_$$d, {
      org: n
    }), (e.selectedTab === DashboardSection.TEAMS || e.selectedTab === DashboardSection.ACTIVITY) && jsx(eK, {}), e.selectedTab === DashboardSection.CONTENT && jsx(nX, {}), jsx(K, {})]
  });
}
export const OrgAdminSettingsPageView = $$s$0;