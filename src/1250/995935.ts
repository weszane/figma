import { useDispatch, useSelector, useStore } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { getSupportEmail, isProdCluster, isDevEnvironment } from "../figma_app/169182";
import { m0, ow, lg } from "../figma_app/976749";
import { selectCurrentFile, useCurrentFileKey } from "../figma_app/516028";
import { dq, sZ } from "../905/845253";
import { n as _$$n } from "../1577/959155";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, createRef } from "react";
import { Agb } from "../figma_app/822011";
import { throwTypeError } from "../figma_app/465776";
import { $n } from "../905/521428";
import { useModalManager } from "../905/437088";
import { Z as _$$Z } from "../905/279476";
import { s as _$$s } from "../905/403855";
import { CooperHelpers, SchemaJoinStatus, Multiplayer } from "../figma_app/763686";
import { bV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/663269";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { FJ } from "../905/508367";
import { A as _$$A } from "../905/920142";
import { getDeprecationDate, desktopAPIInstance, OpenTarget } from "../figma_app/876459";
import { shouldShowDeprecationBannerAtom } from "../figma_app/369803";
import { customHistory } from "../905/612521";
import { R as _$$R } from "../7021/67076";
import { BrowserInfo } from "../figma_app/778880";
import { GU, cn, zR } from "../figma_app/141320";
import { N_, CY, tM as _$$tM } from "../figma_app/637027";
import { s as _$$s2 } from "../cssbuilder/589278";
import { $z, e6 as _$$e, c as _$$c } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx as _$$sx } from "../905/941192";
import { V as _$$V } from "../905/355181";
import { lQ } from "../905/934246";
import { b as _$$b } from "../905/946806";
import { getAtomMutate } from "../figma_app/566371";
import { VisualBellActions } from "../905/302958";
import { T as _$$T, b as _$$b2 } from "../1577/951568";
import { w as _$$w } from "../1250/922745";
import { l as _$$l } from "../7021/223482";
import { showModalHandler } from "../905/156213";
import { fu, $z as _$$$z } from "../figma_app/831799";
import { vK, jv } from "../905/84777";
import { N_ as _$$N_ } from "../905/332483";
import { selectCurrentUser, getUserId } from "../905/372672";
import { FPlanLimitationType, FOrganizationLevelType, FFileType, FPaymentHealthStatusType, FStudentTeamStatusType, FUserRoleType } from "../figma_app/191312";
import { wA as _$$wA, kA } from "../figma_app/336853";
import { Ju, IX } from "../905/712921";
import { C as _$$C } from "../figma_app/198698";
import { x1, MA, om } from "../figma_app/465413";
import { Cs } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { $ as _$$$ } from "../905/692618";
import { ny } from "../figma_app/819458";
import { F as _$$F2 } from "../5132/756360";
import { Az } from "../5132/863145";
import { pW } from "../905/160095";
import { dl } from "../figma_app/307841";
import { g as _$$g } from "../1250/695038";
import { M4, IT, gY as _$$gY } from "../905/713695";
import { useCurrentPlanUser, isOrgGuestUser, useCurrentPublicPlan } from "../figma_app/465071";
import { G as _$$G } from "../figma_app/124713";
import { w as _$$w2 } from "../7021/108292";
import { filterNotNullish } from "../figma_app/656233";
import { sf } from "../905/929976";
import { Ti } from "../figma_app/658324";
import { cD, ol } from "../figma_app/598018";
import { DashboardSections } from "../905/548208";
import { Ib } from "../905/129884";
import { R as _$$R2 } from "../figma_app/522082";
import { h as _$$h } from "../905/142086";
import { A6 } from "../905/350234";
import { _ as _$$_ } from "../figma_app/4253";
import { useIsSelectedViewFullscreenCooper, isCooperFeatureEnabled } from "../figma_app/828186";
import { u1 } from "../figma_app/91703";
import { WX } from "../figma_app/482142";
import { b as _$$b3 } from "../905/985254";
import { bE } from "../figma_app/375098";
import { Tb } from "../figma_app/350203";
import { C9 } from "../figma_app/8833";
import { c as _$$c2 } from "../905/370443";
import { useCurrentFileWorkshopModeStatus } from "../figma_app/789";
import { V6 } from "../1250/12342";
import { a9 } from "../figma_app/741211";
import { y as _$$y } from "../1250/295724";
import { n3 } from "../figma_app/528509";
import { T as _$$T2 } from "../905/378189";
import { p8, aV } from "../figma_app/722362";
import { FC } from "../figma_app/212807";
import { f as _$$f } from "../905/940356";
import { q as _$$q } from "../905/236878";
import { isTeamLocked, hasValidSubscription, hasFolderOrTeamRestrictions } from "../figma_app/345997";
import { isExternalRestricted } from "../figma_app/12796";
import { canAdminTeam, canEditTeam } from "../figma_app/642025";
import { lg as _$$lg, ng as _$$ng } from "../figma_app/205827";
import { N as _$$N } from "../figma_app/301442";
import { UpsellModalType } from "../905/165519";
import { A as _$$A2 } from "../905/638715";
import { A as _$$A3 } from "../905/389851";
import { Ay as _$$Ay2 } from "@stylexjs/stylex";
import { FlashActions } from "../905/573154";
import { useCanUseDevModeDemoFile } from "../figma_app/473493";
import { hA } from "../figma_app/88239";
import { jN } from "../905/612685";
import { QF } from "../figma_app/502247";
import { S as _$$S } from "../figma_app/787550";
import { f as _$$f2 } from "../figma_app/24747";
import { throwError } from "../1250/559338";
import { k as _$$k2 } from "../905/443820";
import { Q as _$$Q2 } from "../1250/220026";
import { kD, tS as _$$tS2, ac, J3, kN } from "../figma_app/622574";
import { b4, WS } from "../figma_app/106207";
import { vt } from "../905/862883";
import { H as _$$H } from "../905/548668";
import { Td } from "../905/595131";
import { YM } from "../905/122282";
import { sO } from "../figma_app/21029";
import { A as _$$A4 } from "../svg/229796";
import { qv } from "../1250/444794";
import { Hk } from "../figma_app/755939";
import { t as _$$t2 } from "../905/825647";
import { X as _$$X } from "../905/802843";
import { Iv as _$$Iv } from "../7222/396421";
import { B as _$$B } from "../905/352524";
import { t as _$$t3 } from "../figma_app/32680";
import { v as _$$v } from "../1250/140227";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { V as _$$V2 } from "../1250/925098";
import { Q as _$$Q3 } from "../5132/668270";
import { hr } from "../905/352022";
import { rc } from "../figma_app/531331";
import { h as _$$h2 } from "../figma_app/270558";
import { Y as _$$Y } from "../figma_app/932979";
import { DB, Vg, n3 as _$$n2 } from "../figma_app/600310";
import { A as _$$A5 } from "../svg/104766";
import { A as _$$A6 } from "../1617/316388";
let ep = "non_admin_billing_terms_banner_seen";
let eg = _$$g(ep);
let ef = M4.Query({
  fetch: async e => (await _$$w2.getNonAdminBillingTermsBanner(e)).data.meta
});
let eh = M4.Mutation(async e => {
  await _$$G.postOrgUserFlags({
    orgUserId: e.orgUserId,
    flags: {
      [ep]: !0
    }
  });
});
function ek({
  team: e,
  openInvoiceUrls: t
}) {
  let n = useDispatch();
  if (0 === t.length) return null;
  let r = {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("billing.open_invoice_reminder.button_tooltip"),
    "data-tooltip-show-immediately": !0
  };
  return jsx($z, {
    onClick: () => {
      t.length > 1 ? n(sf({
        view: "teamAdminConsole",
        teamId: e.id,
        teamAdminConsoleViewTab: DashboardSections.BILLING
      })) : FJ(t[0], "_blank", "noopener");
    },
    variant: "secondary",
    htmlAttributes: r,
    children: getI18nString("team_view.locked_proteam_admin_invoice_reminder_banner.cta", {
      invoiceCount: t.length
    })
  });
}
function eE(e) {
  let t = e.team?.restrictions_list?.includes(FPlanLimitationType.LOCKED);
  let n = Ti({
    planId: e.team.id,
    planType: FOrganizationLevelType.TEAM
  });
  let a = t ? renderI18nText("team_view.locked_proteam_admin_invoice_reminder_banner.title") : renderI18nText("team_view.pastdue_proteam_admin_invoice_reminder_banner.title");
  let r = t ? renderI18nText("team_view.locked_proteam_admin_invoice_reminder_banner.subtitle") : renderI18nText("team_view.pastdue_proteam_admin_invoice_reminder_banner.subtitle");
  let i = filterNotNullish(n.data?.map(e => e.hosted_invoice_url) ?? []);
  return jsx(fu, {
    name: "team_admin_open_invoice_reminder_banner",
    children: jsx(_$$C, {
      content: {
        id: 0,
        bannerType: x1.WARN_SOFT,
        mainText: a,
        description: r,
        dismissible: !1,
        positionStatic: !0,
        icon: jsx(_$$Z, {}),
        iconSize: "medium",
        button: {
          type: MA.CUSTOM,
          element: jsx(ek, {
            team: e.team,
            openInvoiceUrls: i
          })
        }
      },
      onDismiss: lQ
    })
  });
}
let t_ = {
  slidesIcon: {
    "--color-icon": "xbzrb6o",
    $$css: !0
  },
  cooperIcon: {
    "--color-icon": "xwa2v1s",
    $$css: !0
  }
};
function th() {
  let {
    openCooperPublishFlow
  } = _$$t2();
  return jsx(_$$e, {
    className: "x78zum5 xjwf9q1 xx99whi xl56j7k x6s0dn4 x19y5rnk x1r7xphn x1a33sea",
    onClick: () => openCooperPublishFlow("editor-pre-publish-banner"),
    trackingProperties: {
      trackingDescriptor: _$$c2.PUBLISH_TEMPLATE,
      buttonContext: getI18nString("slides.templates.banner.publish_template_button"),
      productType: FFileType.COOPER
    },
    children: renderI18nText("slides.templates.banner.publish_template_button")
  });
}
function tb() {
  return jsx(_$$e, {
    className: "x78zum5 xjwf9q1 xx99whi xl56j7k x6s0dn4 x19y5rnk xkq88pg x1tk3asg x1ypdohk",
    onClick: () => FJ(qv, "_blank"),
    trackingProperties: {
      trackingDescriptor: _$$c2.SHOW_ME_HOW,
      buttonContext: getI18nString("cooper.templates.show_me_how"),
      productType: FFileType.COOPER
    },
    children: renderI18nText("cooper.templates.show_me_how")
  });
}
let tx = {
  slidesTemplateIcon: {
    "--color-icon": "xbzrb6o",
    $$css: !0
  },
  cooperTemplateIcon: {
    "--color-icon": "xwa2v1s",
    $$css: !0
  }
};
function tk({
  manager: e,
  userCanEditFile: t,
  isUserConnected: n
}) {
  return jsx(bL, {
    manager: e,
    width: "fit-content",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: t ? getI18nString("multiplayer_upgrade_modal.content_saving") : getI18nString("multiplayer_upgrade_modal.content_reloading")
        })
      }), n || jsx(Fragment, {
        children: jsx(nB, {
          children: getI18nString("multiplayer_upgrade_modal.content_offline")
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(_$$k2, {
            size: "md"
          })
        })
      })]
    })
  });
}
let tO = JSON.parse('{"safari":"16","firefox":"101","chrome":"99","edge":"121","deprecatedOn":"2024-03-18T08:00:00.000Z"}');
let tD = {
  bannerId: om.TestWarningBanner,
  Banner: function (e) {
    let t = selectCurrentFile();
    if (t?._name === "_BANNERTEST PAYMENT") {
      let t = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: "Payment failed",
        description: "Our last attempted charge was unsuccessful. Please update your payment source as soon as possible. File editing will be locked after 3 more failed attempts.",
        button: {
          buttonText: "Update payment",
          onClick: () => {}
        },
        dismissible: !0
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "test-warning-banner"
};
let tL = {
  bannerId: om.TestOOMBanner,
  Banner: function (e) {
    let t = selectCurrentFile();
    if (t?._name === "_BANNERTEST OOM") {
      let t = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: "80% of memory used",
        customElem: jsx("div", {
          className: DB,
          children: jsx(throwError, {
            memoryUsagePercent: 80
          })
        }),
        description: jsxs(Fragment, {
          children: [jsx("b", {
            style: _$$sx.fontSemiBold.$,
            children: "This file is almost out of browser memory."
          }), " Remove content to lower memory use to 50% or less. This will ensure you can continue to work in this file safely."]
        }),
        button: {
          buttonText: "Show memory-reduction tips",
          onClick: () => {}
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "test-oom-banner"
};
let tF = {
  bannerId: om.BrowserDeprecationBanner,
  Banner: function (e) {
    let {
      deprecatedOn,
      ...n
    } = tO;
    let a = _$$R("day");
    let r = new Date(deprecatedOn);
    if (r > new Date(a.getTime() + 24192e5) || !BrowserInfo.isUnsupportedBrowser(n)) return null;
    let i = r > a ? getI18nString("banner.browser_deprecation.description", {
      deprecationDate: r
    }) : getI18nString("banner.browser_deprecation.description_now");
    let o = {
      dismissible: !0,
      bannerType: x1.WARN,
      icon: _$$A6,
      mainText: getI18nString("banner.browser_deprecation.title"),
      description: i,
      button: {
        buttonText: getI18nString("banner.browser_deprecation.learn_more"),
        onClick: () => customHistory.redirect("https://help.figma.com/hc/articles/360039827194-Figma-browser-requirements", "_blank")
      }
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: o
    });
  },
  dataTestId: "browser-deprecation-banner"
};
let tB = {
  bannerId: om.CooperOldFileBanner,
  Banner: function (e) {
    let t = useIsSelectedViewFullscreenCooper();
    if (!useMemo(() => {
      if (!t || !isCooperFeatureEnabled()) return !1;
      let e = getSingletonSceneGraph();
      if (!e || !e.isValidScene) return [];
      let n = bV(e, "0:1");
      if (n.find(e => "cooper_root" === e.name)) return !0;
      let a = n.find(e => "SLIDE_GRID" === e.type);
      return !!(a && a.childrenNodes.find(e => e.maxWidth !== CooperHelpers.gridMaxWidth()));
    }, [t])) return null;
    {
      let t = {
        dismissible: !1,
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: getI18nString("banner.cooper.old_file.title"),
        description: getI18nString("banner.cooper.old_file.description")
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
  },
  dataTestId: "cooper-old-file-banner"
};
let tU = {
  bannerId: om.InteropPagesBanner,
  Banner: function (e) {
    return V6() ? jsx(_$$f2, {
      ...e,
      bannerContent: {
        dismissible: !0,
        bannerType: x1.WARN_SOFT,
        icon: _$$A6,
        mainText: "[Internal] Interop pages",
        description: jsxs("span", {
          children: ["We\u2019ve sunset interop pages, so this file might be wonky. Ping ", jsx("a", {
            href: "https://figma.slack.com/archives/C065U6BKPBR",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "#feat-interop-pages"
          }), " for help."]
        })
      }
    }) : null;
  },
  dataTestId: "interop-pages-banner"
};
let tG = {
  bannerId: om.DesktopDeprecationBanner,
  Banner: function (e) {
    let t = getDeprecationDate();
    if (null == t || atomStoreManager.get(shouldShowDeprecationBannerAtom)) return null;
    let n = getI18nString("banner.desktop_app_deprecation.description", {
      deprecationDate: t.toDate()
    });
    let a = {
      dismissible: !0,
      bannerType: x1.WARN,
      icon: _$$A6,
      mainText: getI18nString("banner.desktop_app_deprecation.title"),
      description: n,
      button: {
        buttonText: getI18nString("banner.desktop_app_deprecation.learn_more"),
        onClick: () => customHistory.unsafeRedirect("https://figma.com/downloads", "_blank")
      },
      dismissedAtom: shouldShowDeprecationBannerAtom
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: a
    });
  },
  dataTestId: "desktop-deprecation-banner"
};
let tW = {
  bannerId: om.TestInfoBanner,
  Banner: function (e) {
    let t = selectCurrentFile();
    if (t?._name === "_BANNERTEST EDU") {
      let t = {
        bannerType: x1.INFO,
        icon: _$$A5,
        mainText: "File in Education Team",
        description: "This file is in an Education team. To keep editing this file after 00/00, verify that you're a student or educator.",
        button: {
          buttonText: "Verify status",
          onClick: () => customHistory.redirect("/education/apply", BrowserInfo.isIpadNative ? void 0 : "_blank")
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "test-info-banner"
};
let tz = {
  bannerId: om.ProTeamPastDue,
  Banner: function (e) {
    let t = useDispatch();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = FC();
    let o = n && canAdminTeam(n, i);
    let l = selectCurrentFile();
    let d = !!l?.canEdit;
    let _ = r && r.subscription === FPaymentHealthStatusType.PAST_DUE;
    let u = {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("billing.open_invoice_reminder.button_tooltip"),
      "data-tooltip-show-immediately": !0
    };
    if (_ && !d) {
      let n = {
        bannerType: x1.WARN_SOFT,
        icon: jsx(_$$Z, {}),
        iconSize: "medium",
        mainText: o ? getI18nString("banner.pro_team_past_due_revamp.title") : getI18nString("banner.pro_team_past_due_revamp.title_viewer"),
        description: o ? getI18nString("banner.pro_team_past_due_revamp.subtitle.can_admin") : getI18nString("banner.pro_team_past_due_revamp.subtitle.no_admin"),
        button: o ? {
          type: MA.CUSTOM,
          element: jsx($n, {
            onClick: () => {
              t?.(sf({
                view: "teamAdminConsole",
                teamId: r.id,
                teamAdminConsoleViewTab: DashboardSections.BILLING
              }));
            },
            variant: "secondary",
            htmlAttributes: u,
            children: getI18nString("banner.pro_team_past_due_revamp.cta")
          })
        } : void 0,
        dismissible: !1
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: n
      });
    }
    return null;
  },
  dataTestId: "pro-team-past-due-banner"
};
let t$ = {
  bannerId: om.ExternalContentControlBanner,
  Banner: function (e) {
    let t = useDispatch();
    let n = selectCurrentFile();
    let r = selectCurrentUser();
    let i = dq();
    let o = isExternalRestricted(r, i);
    let d = useSelector(e => {
      if (!o) return null;
      let t = e.orgById[r.external_restricted_org_id];
      return t ? t.name : null;
    });
    if (o && d) {
      let a = !!n && n.viewerExportRestricted;
      let r = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: renderI18nText("external_collaboration_restricted.banner.title"),
        description: renderI18nText("external_collaboration_restricted.banner.restriction_description", {
          organizationName: d
        }),
        button: a ? void 0 : {
          buttonText: getI18nString("external_collaboration_restricted.banner.export_file"),
          onClick: () => {
            n?.editorType === "design" ? t(u1({
              id: C9
            })) : t(showModalHandler({
              type: _$$B,
              data: {
                pickerInfo: {
                  selectionArea: 0,
                  canvasArea: 0,
                  nodeCounts: {
                    selectionNodeCount: 0,
                    canvasNodeCount: 0,
                    selectionStickyCount: 0,
                    canvasStickyCount: 0,
                    selectionTableCount: 0,
                    canvasTableCount: 0
                  }
                }
              }
            }));
          }
        },
        dismissible: !1
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: r
      });
    }
    return null;
  },
  dataTestId: "external-content-control-banner"
};
let tq = {
  bannerId: om.ProTeamChargeFailed,
  Banner: function (e) {
    let t = useDispatch();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = FC();
    let o = n && canAdminTeam(n, i);
    let s = r && r.subscription === FPaymentHealthStatusType.GRACE_PERIOD;
    let l = {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("billing.open_invoice_reminder.button_tooltip"),
      "data-tooltip-show-immediately": !0
    };
    if (s && o) {
      let n = {
        bannerType: x1.WARN_SOFT,
        icon: jsx(_$$Z, {}),
        iconSize: "medium",
        mainText: getI18nString("banner.pro_team_charge_failed_revamp.title"),
        description: getI18nString("banner.pro_team_charge_failed_revamp.subtitle.can_admin"),
        button: {
          type: MA.CUSTOM,
          element: jsx($n, {
            onClick: () => {
              t?.(sf({
                view: "teamAdminConsole",
                teamId: r.id,
                teamAdminConsoleViewTab: DashboardSections.BILLING
              }));
            },
            variant: "secondary",
            htmlAttributes: l,
            children: getI18nString("banner.pro_team_past_due_revamp.cta")
          })
        },
        dismissible: !1
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: n
      });
    }
    return null;
  },
  dataTestId: "pro-team-charge-failed-banner"
};
let tV = {
  bannerId: om.ProTeamNoMonthlySubEditorCountExceeded,
  Banner: function (e) {
    let t = useDispatch();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let o = FC();
    let s = n && canAdminTeam(n, o);
    if (r && r.subscription === FPaymentHealthStatusType.NO_MONTHLY_SUB_EDITOR_COUNT_EXCEEDED) {
      let a = s ? jsx("span", {
        children: renderI18nText("banner.pro_team_no_monthly_sub.over_limit_as_admin.seat_rename", {
          contactSupportLink: jsx("a", {
            href: `mailto:${getSupportEmail()}`,
            children: renderI18nText("banner.pro_team_no_monthly_sub.contact_support")
          })
        })
      }) : jsx("span", {
        children: renderI18nText("banner.pro_team_no_monthly_sub.over_team_limit_without_admin.seat_rename", {
          teamName: r.name
        })
      });
      let o = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: getI18nString("banner.pro_team_no_monthly_sub.locked"),
        description: a,
        button: s ? {
          buttonText: getI18nString("banner.pro_team_no_monthly_sub.manage_plan"),
          onClick: () => {
            t?.(sf({
              view: "teamAdminConsole",
              teamId: n,
              teamAdminConsoleViewTab: DashboardSections.SETTINGS
            }));
          }
        } : void 0
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: o
      });
    }
    return null;
  },
  dataTestId: "pro-team-no-monthly-sub-editor-count-exceeded-banner"
};
let tH = {
  bannerId: om.ProTrialsExpiryBanner,
  Banner: function (e) {
    let t = useDispatch();
    let n = selectCurrentFile();
    let r = cD();
    let i = useSelector(e => r ? e.teams[r] : null);
    let o = FC();
    let l = useSelector(e => e.userTeamFlags);
    let d = useStore();
    let _ = _$$q({
      teamId: r,
      flag: _$$lg
    });
    if (!i || !n) return null;
    let u = canEditTeam(i.id, o);
    let m = isTeamLocked(i.id, o);
    if (_$$ng.canSeeExpiredProTrialBanner(l, i, o) && (m || u && !_)) {
      let a;
      let r;
      let o;
      m ? (o = x1.WARN_SOFT, a = u ? renderI18nText("banner.pro_trial_expiry.locked_description", {
        lowerUsageLink: jsx("button", {
          onClick: e => {
            e.preventDefault();
            t?.(showModalHandler({
              type: _$$v,
              data: {
                teamId: i.id
              }
            }));
          },
          children: renderI18nText("banner.pro_trial_expiry.lower_usage")
        }),
        upgradeLink: jsx(_$$$z, {
          onClick: e => {
            e.preventDefault();
            let n = d.getState();
            t(WX({
              teamId: i.id,
              selectedView: n.selectedView
            }));
          },
          children: renderI18nText("banner.pro_trial_expiry.upgrade")
        })
      }) : renderI18nText("banner.pro_trial_expiry.locked_description_for_viewer_on_team", {
        teamName: i.name
      }), r = {
        buttonText: getI18nString("banner.pro_trial_expiry.move_this_file_cta"),
        onClick: () => _$$h({
          key: n.key,
          name: n.name,
          folder_id: n.folderId,
          team_id: n.teamId,
          editor_type: n.editorType,
          parent_org_id: n.parentOrgId
        }, null, t)
      }) : (o = x1.INFO, a = renderI18nText("banner.pro_trial_expiry.expiry_description", {
        teamName: i.name
      }), r = {
        buttonText: getI18nString("banner.pro_trial_upgrade_cta.upgrade_to_professional"),
        onClick: () => {
          let e = d.getState();
          t(WX({
            teamId: i.id,
            selectedView: e.selectedView
          }));
        }
      });
      let s = {
        bannerType: o,
        icon: _$$A6,
        mainText: getI18nString("banner.pro_trial_expiry.title"),
        dismissible: !m,
        onDismiss: m ? void 0 : () => {
          t(bE({
            all_team_flags: [{
              team_id: i.id,
              flags: {
                [_$$lg]: !0
              }
            }]
          }));
        },
        description: a,
        button: u ? r : void 0
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: s
      });
    }
    return null;
  },
  dataTestId: "pro-trials-expiry-banner"
};
let tK = {
  bannerId: om.StarterTeamOverFreeLimitAndLocked,
  Banner: function (e) {
    let t = useDispatch();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = FC();
    let l = m0();
    let d = ow();
    let _ = useStore();
    let u = selectCurrentFile()?.canEdit;
    let m = n && canEditTeam(n, i);
    let p = r && !hasValidSubscription(r) && !r.student_team && isTeamLocked(r.id, i);
    if (p) {
      let a = r.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_CURRENT || r.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_EXPIRED;
      let i = !!n && p && !a;
      if (i && !u) {
        let a = !!r.stripe_customer_id;
        let i = d ? getI18nString("locked_team.banner.this_board_is_part_of_a_locked_team") : getI18nString("locked_team.banner.this_file_is_part_of_a_locked_team");
        let o = jsx("div", {
          style: _$$sx.add({
            marginLeft: "-32px"
          }).$,
          children: renderI18nText(l ? "locked_team.banner.all_of_this_teams_work_is_currently_view_only_dev_mode" : "locked_team.banner.all_of_this_teams_work_is_currently_view_only", {
            learnMoreLink: m ? jsx(Fragment, {
              children: jsx("a", {
                href: "#",
                onClick: e => {
                  e.preventDefault();
                  t?.(showModalHandler({
                    type: _$$t3,
                    data: {
                      teamId: n,
                      canEditTeam: !0
                    }
                  }));
                },
                children: renderI18nText("locked_team.banner.learn_more")
              })
            }) : jsx(Fragment, {})
          })
        });
        let s = a ? getI18nString("locked_team.banner.reactivate_professional") : getI18nString("locked_team.banner.upgrade_to_professional");
        let u = {
          bannerType: x1.WARN_SOFT,
          icon: jsx(_$$s, {}),
          mainText: i,
          description: o,
          button: m ? {
            buttonText: s,
            onClick: () => {
              let e = _.getState();
              t(WX({
                teamId: n,
                selectedView: e.selectedView
              }));
            },
            className: Vg
          } : void 0
        };
        return jsx(_$$f2, {
          ...e,
          bannerContent: u
        });
      }
      if (!i && !l) {
        let a;
        a = m ? jsxs("span", {
          children: [jsxs("b", {
            style: _$$sx.fontSemiBold.$,
            children: [renderI18nText("banner.free_limit_locked.team_locked_over_starter_limits", {
              teamName: r.name
            }), " "]
          }), renderI18nText("banner.free_limit_locked.upgrade_team_or_lower_usage", {
            teamName: r.name,
            learnMoreLink: jsx(Fragment, {
              children: jsx("a", {
                href: "#",
                onClick: e => {
                  e.preventDefault();
                  t?.(showModalHandler({
                    type: _$$v,
                    data: {
                      teamId: n
                    }
                  }));
                },
                children: renderI18nText("banner.free_limit_locked.learn_more")
              })
            })
          })]
        }) : jsxs("span", {
          children: [jsx("b", {
            style: _$$sx.fontSemiBold.$,
            children: renderI18nText("banner.free_limit_locked.team_locked_over_starter_limits", {
              teamName: r.name
            })
          }), " ", renderI18nText("banner.free_limit_locked.ask_your_team_admin_for_details")]
        });
        let i = {
          bannerType: x1.WARN,
          icon: _$$A6,
          mainText: getI18nString("banner.free_limit_locked.locked"),
          description: a,
          button: m ? {
            buttonText: getI18nString("banner.free_limit_locked.upgrade_now"),
            onClick: () => {
              let e = _.getState();
              t(WX({
                teamId: n,
                selectedView: e.selectedView
              }));
            },
            className: _$$n2
          } : void 0
        };
        return jsx(_$$f2, {
          ...e,
          bannerContent: i
        });
      }
    }
    return null;
  },
  dataTestId: "starter-team-over-free-limit-and-locked-banner"
};
let tY = {
  bannerId: om.OrphanedOrgDraftsFile,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = dq();
    let r = useSelector(_$$wA);
    let i = null;
    let o = null;
    if (i = n && getResourceDataOrFallback(t?.isAbandonedDraftFile), o = getResourceDataOrFallback(t?.canMove) ? jsxs(Fragment, {
      children: [renderI18nText("banner.orphaned_projects.move_to_project"), " ", jsx(N_, {
        trusted: !0,
        target: "_blank",
        className: _$$s2.inline.ml4.$,
        href: "https://help.figma.com/hc/articles/4420549259799",
        children: renderI18nText("general.learn_more")
      })]
    }) : getI18nString("banner.orphaned_projects.move_to_project.member", {
      orgName: r?.name ?? ""
    }), i && t) {
      let t = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: getI18nString("banner.orphaned_projects.file_in_an_abandoned_project"),
        description: o
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "orphaned-org-drafts-file-banner"
};
let tQ = {
  bannerId: om.TeamAbandonedDraftsFile,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = dq();
    let a = getResourceDataOrFallback(t?.isAbandonedDraftFile);
    let r = ol();
    if (r && !n && a) {
      let n = getResourceDataOrFallback(t?.canMove) ? jsxs(Fragment, {
        children: [renderI18nText("banner.orphaned_projects.move_to_project.team"), " ", jsx(N_, {
          trusted: !0,
          target: "_blank",
          className: _$$s2.inline.ml4.$,
          href: "https://help.figma.com/hc/articles/4420549259799",
          children: renderI18nText("general.learn_more")
        })]
      }) : getI18nString("banner.orphaned_projects.move_to_project.team_member", {
        teamName: r.name ?? ""
      });
      if (t) {
        let t = {
          bannerType: x1.WARN,
          icon: _$$A6,
          mainText: getI18nString("banner.orphaned_projects.file_in_an_abandoned_project"),
          description: n
        };
        return jsx(_$$f2, {
          ...e,
          bannerContent: t
        });
      }
    }
    return null;
  },
  dataTestId: "team-abandoned-drafts-file-banner"
};
let tZ = {
  bannerId: om.PersonalProjectDeprecatedFile,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = dq();
    let o = useDispatch();
    let d = FC();
    if (!(i && t?.project && n3(t.project)) && !r && t && hasFolderOrTeamRestrictions(t.folderId, t.teamId, d)) {
      let t = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: getI18nString("banner.personal_projects.locked"),
        description: jsx(Fragment, {
          children: renderI18nText("banner.personal_projects.deprecation_message", {
            learnMoreLink: jsx("a", {
              href: "/pricing-faq#what-changes-for-me",
              children: renderI18nText("banner.personal_projects.learn_more")
            })
          })
        }),
        button: {
          buttonText: getI18nString("banner.personal_projects.back_to_files"),
          onClick: () => o?.(sf({
            view: "recentsAndSharing"
          }))
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "personal-project-deprecated-file-banner"
};
let tX = {
  bannerId: om.EduGracePeriodAccessRestricted,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = selectCurrentUser();
    let o = useCurrentFileWorkshopModeStatus();
    let l = useSelector(e => e.userEduGracePeriods);
    if (!n || !i) return null;
    if (r && !o?.enabled && t?.canEditIgnoreEduGracePeriod && r && GU(l, cn(i), n, !!r.student_team).showAccessRestricted) {
      let t = {
        bannerType: x1.WARN,
        icon: _$$A6,
        mainText: getI18nString("banner.edu_grace_period.verification_required"),
        description: getI18nString("banner.edu_grace_period.editing_restricted_on_file", {
          teamName: r.name
        }),
        button: {
          buttonText: getI18nString("banner.edu_grace_period.verify_status_button"),
          onClick: () => customHistory.redirect("/education/apply", BrowserInfo.isIpadNative ? void 0 : "_blank")
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "edu-grace-period-access-restricted-banner"
};
let tJ = {
  bannerId: om.EduGracePeriodShowReminder,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = cD();
    let r = useSelector(e => n ? e.teams[n] : null);
    let i = selectCurrentUser();
    let o = useCurrentFileWorkshopModeStatus();
    let l = useSelector(e => e.userEduGracePeriods);
    if (n && i) {
      let a = r && !o?.enabled && t?.canEditIgnoreEduGracePeriod && r && GU(l, cn(i), n, !!r.student_team).showReminder;
      let s = zR(l, n);
      if (a) {
        let t = {
          bannerType: x1.INFO,
          icon: _$$A5,
          mainText: getI18nString("banner.edu_grace_period.verification_required"),
          description: getI18nString("banner.edu_grace_period.grace_period_team_reminder", {
            teamName: r.name,
            endDate: s
          }),
          dismissible: !0,
          button: {
            buttonText: getI18nString("banner.edu_grace_period.verify_status_button"),
            onClick: () => customHistory.redirect("/education/apply", BrowserInfo.isIpadNative ? void 0 : "_blank")
          }
        };
        return jsx(_$$f2, {
          ...e,
          bannerContent: t
        });
      }
    }
    return null;
  },
  dataTestId: "edu-grace-period-show-reminder-banner"
};
function t0(e) {
  let t;
  if (!e) return getI18nString("banner.multiplayer_session_upgrade.page_out_of_date");
  switch (e) {
    case FFileType.DESIGN:
      t = getI18nString("general.figma_design");
      break;
    case FFileType.WHITEBOARD:
      t = getI18nString("general.figjam");
      break;
    case FFileType.SLIDES:
      t = getI18nString("general.figma_slides");
      break;
    case FFileType.SITES:
      t = getI18nString("general.figma_sites");
      break;
    case FFileType.COOPER:
      t = getI18nString("general.figma_buzz");
      break;
    case FFileType.FIGMAKE:
      t = getI18nString("general.figma_rev");
      break;
    default:
      throwTypeError(e);
  }
  return getI18nString("banner.multiplayer_session_upgrade.with_editor_type", {
    editorType: t
  });
}
let t1 = {
  bannerId: om.MultiplayerSessionUpgrade,
  Banner: function (e) {
    let t = p8("multiplayerSessionState") !== SchemaJoinStatus.UNJOINED;
    let n = !p8("isReadOnly");
    let i = useSelector(e => e.showingUpgradeBanner);
    let o = selectCurrentFile()?.editorType;
    let [l, d] = useState(!1);
    let u = useModalManager({
      open: l,
      onClose: () => {},
      preventUserClose: !0
    });
    if (i) {
      let a = {
        bannerType: x1.INFO,
        icon: _$$A6,
        mainText: getFeatureFlags().force_client_reloads_fullscreen_banner_string ? t0(o) : getI18nString("banner.multiplayer_session_upgrade.page_out_of_date"),
        description: n ? getI18nString("banner.multiplayer_session_upgrade.out_of_date.editor") : getI18nString("banner.multiplayer_session_upgrade.out_of_date.viewer"),
        button: {
          buttonText: n ? getI18nString("banner.multiplayer_session_upgrade.save_and_reload") : getI18nString("banner.multiplayer_session_upgrade.reload"),
          onClick: () => {
            trackEventAnalytics("Upgrade Banner Clicked");
            Multiplayer.startUpgrade();
            d(!0);
          }
        }
      };
      return jsxs(Fragment, {
        children: [jsx(_$$f2, {
          ...e,
          bannerContent: a
        }), jsx(tk, {
          manager: u,
          userCanEditFile: n,
          isUserConnected: t
        })]
      });
    }
    return null;
  },
  dataTestId: "multiplayer-session-upgrade-banner"
};
let t5 = {
  bannerId: om.ForceClientReload,
  Banner: function (e) {
    let [t, n] = useState(!1);
    let [i, o] = useState(!1);
    let l = useAtomWithSubscription(_$$T2);
    let d = useSelector(e => !!e.saveStatus?.hasUnsavedChanges);
    let u = selectCurrentFile()?.editorType;
    if (useEffect(() => {
      l && !i && (analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.force_client_reload_banner.shown", {}), o(!0));
    }, [l, i]), useEffect(() => {
      t && !d && customHistory.reload("force client reload banner", {
        isForceClientReloadBanner: !0
      });
    }, [t, d]), l) {
      let a = {
        bannerType: x1.INFO,
        icon: _$$A6,
        mainText: getFeatureFlags().force_client_reloads_fullscreen_banner_string ? t0(u) : getI18nString("banner.multiplayer_session_upgrade.page_out_of_date"),
        button: {
          buttonText: getI18nString("banner.multiplayer_session_upgrade.reload"),
          onClick: () => {
            n(!0);
            analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.force_client_reload_banner.clicked", {});
          },
          disabled: t
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: a
      });
    }
    return null;
  },
  dataTestId: "force-client-reload-banner"
};
let t4 = {
  bannerId: om.FigJamTryDraftsBanner,
  Banner: function (e) {
    let t = useDispatch();
    let n = selectCurrentFile();
    let r = useCurrentFileWorkshopModeStatus();
    let i = selectCurrentUser();
    let o = _$$f("dismissed_figjam_try_drafts_banner");
    let l = _$$R("minute");
    if (!r?.enabled || !n || !i) return null;
    if (!n.isTryFile && !n.parentOrgId && n.folderId === i.drafts_folder_id && !o) {
      let a = _$$A(l);
      let i = Math.ceil(_$$A(r.until).diff(a, "hours", !0));
      let o = {
        bannerType: x1.INFO,
        icon: _$$A5,
        mainText: i > 1 ? getI18nString("figjam_try.drafts_banner_title_more_time", {
          num_hours: i
        }) : getI18nString("figjam_try.drafts_banner_title_1_hour_or_less"),
        description: getI18nString("figjam_try.drafts_banner_description"),
        onDismiss: () => t?.(_$$b3({
          dismissed_figjam_try_drafts_banner: !0
        })),
        dismissible: !0,
        button: {
          buttonText: getI18nString("figjam_try.move_file"),
          onClick: () => _$$h({
            key: n.key,
            name: n.name,
            folder_id: n.folderId,
            team_id: n.teamId,
            editor_type: n.editorType,
            parent_org_id: n.parentOrgId
          }, null, t)
        }
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: o
      });
    }
    return null;
  },
  dataTestId: "figjam-try-drafts-banner"
};
let t2 = {
  bannerId: om.FigJamTryClaimBanner,
  Banner: function (e) {
    let t = useDispatch();
    let {
      onClaim
    } = function () {
      let e = selectCurrentFile();
      let t = useDispatch();
      let n = useSelector(e => e.plans);
      useEffect(() => {
        t(hr({
          loadedPlans: n
        }));
      }, []);
      let i = rc();
      if (!e || !e.key) return {
        onClaim: lQ
      };
      let o = n => {
        t(_$$Q3({
          file_key: e?.key,
          folder_id: n
        }));
      };
      return {
        onClaim: () => {
          getFeatureFlags().dtm_deprecation_plan_picker_for_files ? t(showModalHandler({
            type: _$$h2,
            data: {
              payload: {
                workspaces: i,
                onSelectWorkspace: e => {
                  o(e.draftFolderId);
                },
                editorType: e.editorType,
                useCase: "figjamTry"
              }
            }
          })) : o();
        }
      };
    }();
    let i = selectCurrentFile();
    let o = useCurrentFileWorkshopModeStatus();
    let l = selectCurrentUser();
    let d = _$$f("dismissed_figjam_try_claim_banner");
    let u = _$$R("minute");
    let m = i?.key;
    if (!i?.isTryFile || BrowserInfo.isMeetDevice || !l || !o?.enabled || !m || d) return null;
    let p = _$$A(u);
    let g = Math.ceil(_$$A(o.until).diff(p, "hours", !0));
    let f = {
      bannerType: x1.INFO,
      icon: _$$A5,
      mainText: g > 1 ? getI18nString("figjam_try_v2.timer_hours_left", {
        hoursLeft: g
      }) : getI18nString("figjam_try.claim_banner_title_1_hour_or_less"),
      description: getI18nString("figjam_try_v2.logged_in.after_that_this_board_will_be_deleted"),
      onDismiss: () => t?.(_$$b3({
        dismissed_figjam_try_claim_banner: !0
      })),
      dismissible: !0,
      button: {
        buttonText: getI18nString("figjam_try_v2.claim_file_logged_in"),
        onClick: () => onClaim()
      }
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: f
    });
  },
  dataTestId: "figjam-try-claim-banner"
};
let t3 = {
  bannerId: om.DowntimeBanner,
  Banner: function (e) {
    let t = useSelector(e => e.showingDowntimeBanner);
    let {
      payload,
      status
    } = useSelector(e => e.downtime);
    if (!payload || !getFeatureFlags().display_downtime_banner) return null;
    let o = renderI18nText("downtime_banner.warning.description", {
      minLengthMinutes: payload.minLengthMinutes,
      maxLengthMinutes: payload.maxLengthMinutes,
      startTime: payload.downtimeStartDate,
      helpcenterLink: jsx(CY, {
        target: "_blank",
        href: payload.helpcenterUrl,
        trusted: !0,
        children: getI18nString("downtime_banner.ongoing_and_warning.learn_more_link")
      })
    });
    let s = jsx("p", {
      children: renderI18nText("downtime_banner.ongoing.description", {
        minLengthMinutes: payload.minLengthMinutes,
        maxLengthMinutes: payload.maxLengthMinutes,
        helpcenterLink: jsx(CY, {
          target: "_blank",
          href: payload.helpcenterUrl,
          trusted: !0,
          children: getI18nString("downtime_banner.ongoing_and_warning.learn_more_link")
        })
      })
    });
    let l = () => {
      let e = payload.downtimeStartDate.getTime();
      let t = Date.now();
      return Math.floor((t < e ? Math.floor((e - t) / 1e3) : 0) / 60);
    };
    let d = null;
    return (t ? d = {
      bannerType: x1.WARN,
      icon: _$$A6,
      dismissible: !1,
      mainText: getI18nString("downtime_banner.ongoing.scheduled_maintenance_will_begin_in_minutes", {
        minutes: l()
      }),
      description: o
    } : status === _$$A2.Ongoing ? d = {
      bannerType: x1.WARN,
      icon: _$$A6,
      dismissible: !1,
      mainText: getI18nString("downtime_banner.ongoing.scheduled_maintenance_in_progress_header"),
      description: s
    } : status === _$$A2.Imminent && (d = {
      bannerType: x1.WARN,
      icon: _$$A6,
      dismissible: !1,
      mainText: getI18nString("downtime_banner.ongoing.scheduled_maintenance_will_begin_in_minutes", {
        minutes: l()
      }),
      description: o
    }), d) ? jsx(_$$f2, {
      ...e,
      bannerContent: d
    }) : null;
  },
  dataTestId: "downtime-banner"
};
function t6({
  hubFile: e
}) {
  return _$$_(e) ? renderI18nText("banner.freemium_preview.this_is_just_a_preview") : renderI18nText("banner.freemium_preview.get_the_full_file_on_community");
}
function t8({
  hubFile: e
}) {
  return _$$_(e) ? renderI18nText("banner.freemium_preview.you_purchased_this_file_already") : renderI18nText("banner.freemium_preview.this_is_just_a_preview_of_the_file_you_can_buy_on_community");
}
function t9({
  hubFile: e
}) {
  let t = _$$_(e);
  let n = t ? "" : `?${Tb}`;
  return jsx(A6, {
    to: `/community/file/${e.id}${n}`,
    children: jsx(_$$tM, {
      trackingProperties: {
        trackingDescriptor: t ? _$$c2.OPEN_IN_COMMUNITY : _$$c2.BUY_THE_RESOURCE
      },
      children: t ? renderI18nText("banner.freemium_preview.open_in_community") : renderI18nText("banner.freemium_preview.buy_the_resource")
    })
  });
}
let t7 = {
  bannerId: om.FreemiumPreviewBanner,
  Banner: function (e) {
    let t = useCurrentFileKey();
    let n = useSelector(e => t ? e.figFileDuplicatedFromHubFile[t] : null);
    let r = useSelector(e => n ? e.hubFiles[n.hubFileId] : null);
    return n && n.isPreview && r && r.monetized_resource_metadata ? jsx(_$$f2, {
      ...e,
      bannerContent: {
        bannerType: x1.INFO,
        icon: _$$A5,
        dismissible: !1,
        mainText: jsx(t6, {
          hubFile: r
        }),
        description: jsx(t8, {
          hubFile: r
        }),
        button: {
          type: MA.CUSTOM,
          element: jsx(t9, {
            hubFile: r
          })
        }
      }
    }) : null;
  },
  dataTestId: "freemium-preview-banner"
};
let ne = {
  bannerId: om.FileCreationFailureBanner,
  Banner: function (e) {
    if (useSelector(e => e.showingFileCreationFailureBanner)) {
      let t = {
        bannerType: x1.WARN,
        dismissible: !1,
        mainText: renderI18nText("banner.file_creation_failure.title"),
        description: renderI18nText("banner.file_creation_failure.description")
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: t
      });
    }
    return null;
  },
  dataTestId: "file-creation-failure-banner"
};
let nt = {
  bannerId: om.FileIsTeamTemplate,
  Banner: function (e) {
    let t = useDispatch();
    let n = aV();
    let r = kD();
    let i = b4();
    let l = selectCurrentFile();
    let d = _$$tS2();
    let _ = ac();
    let u = Td();
    let m = lg();
    let g = sO();
    let f = useIsSelectedViewFullscreenCooper();
    let h = selectCurrentUser();
    let b = h?.id && r && r.publishedByUserId === h.id;
    let x = J3();
    let y = WS();
    let v = null != r && y(r.fileKey);
    if (!d || n || !l || !r || u || null === _) return null;
    let w = _ && x === kN.CAN_PUBLISH;
    let T = g ? getI18nString("slides.templates.banner.new_deck_button") : getI18nString("whiteboard.delightful_toolbar.custom_template_banner.new_file_button");
    let j = v ? {
      type: MA.CUSTOM,
      element: jsx("div", {
        className: "x1n2onr6",
        children: jsxs($n, {
          variant: "secondary",
          "data-testid": "banner-cta-button",
          children: [jsx("span", {
            className: "xlshs6z",
            children: T
          }), jsx("span", {
            className: "x10l6tqk xwa60dl x1nrll8i x11lhmoz",
            children: jsx(_$$k2, {
              size: "md"
            })
          })]
        })
      })
    } : {
      type: MA.STRUCTURED,
      onClick: () => {
        if (r && l) {
          if (f) {
            let e = new URL(_$$H(m, l.libraryKey), document.baseURI).href;
            customHistory.redirect(e, "_blank");
          } else i({
            templateIdentifier: {
              type: vt.TeamTemplate,
              file_key: r.fileKey
            },
            templateName: r.name
          });
        }
      },
      trackingDescriptor: _$$c2.USE_IN_NEW_FILE,
      buttonText: T
    };
    if (w) {
      if (!b) return jsx(_$$f2, {
        ...e,
        bannerContent: {
          dismissible: !1,
          bannerType: x1.INFO,
          icon: _$$A4,
          mainText: getI18nString("templates.banner.republish.primary_text"),
          description: getI18nString("templates.banner.republish.secondary_text_not_owner"),
          button: j
        }
      });
      let n = {
        type: MA.STRUCTURED,
        onClick: () => {
          YM(t, r.fileKey, m, "editor-republish-banner");
        },
        trackingDescriptor: _$$c2.PUBLISH_CHANGES,
        buttonText: getI18nString("templates.banner.republish.republish_action")
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: {
          dismissible: !1,
          bannerType: x1.INFO,
          icon: _$$A4,
          mainText: getI18nString("templates.banner.republish.primary_text"),
          description: getI18nString("templates.banner.republish.secondary_text"),
          button: n
        }
      });
    }
    let k = r.publishedByUser?.handle && (b ? g ? renderI18nText("slides.templates.banner.republish.you") : renderI18nText("templates.banner.made_by_you") : renderI18nText("templates.banner.republish.made_by_publisher_name", {
      publisherName: r.publishedByUser.handle
    }));
    let E = k ? g ? renderI18nText("slides.templates.banner.republish.made_this", {
      madeByPublisherName: k
    }) : renderI18nText("templates.banner.republish.you_re_viewing_a_template_made_by_publisher_name", {
      madeByPublisherName: jsx("span", {
        className: _$$s2.fontNormal.$,
        children: k
      })
    }) : getI18nString("templates.banner.republish.you_re_viewing_a_template");
    return jsx(_$$f2, {
      ...e,
      bannerContent: {
        dismissible: !1,
        bannerType: x1.INFO,
        icon: jsx(_$$Q2, {
          ..._$$Ay2.props(g ? t_.slidesIcon : t_.cooperIcon)
        }),
        iconSize: "medium",
        mainText: E,
        description: g ? getI18nString("slides.templates.banner.republish.templates_can_be_used_to_create_a_new_slide_deck") : void 0,
        button: j
      }
    });
  },
  dataTestId: "team-templates-banner"
};
let nn = {
  bannerId: om.TemplatePublishingNudgeBanner,
  Banner: function (e) {
    let t = aV();
    let n = kD();
    let a = selectCurrentFile();
    let {
      draftTemplateKeys,
      isCurrentFileDraftTemplate,
      setUserDraftTemplateKeyForCurrentFile
    } = _$$Iv();
    let {
      openSlidesPublishFlow
    } = _$$X();
    let d = useAtomWithSubscription(Hk);
    if (useEffect(() => {
      d && !isCurrentFileDraftTemplate() && setUserDraftTemplateKeyForCurrentFile();
    }, [isCurrentFileDraftTemplate, d, setUserDraftTemplateKeyForCurrentFile]), !a?.editorType || n || t || 0 === Object.keys(draftTemplateKeys).length || !isCurrentFileDraftTemplate() && !d) return null;
    let u = a.editorType === FFileType.SLIDES;
    let m = u ? {
      type: MA.STRUCTURED,
      onClick: () => openSlidesPublishFlow("editor-pre-publish-banner"),
      trackingDescriptor: _$$c2.PUBLISH_TEMPLATE,
      buttonText: getI18nString("slides.templates.banner.publish_template_button")
    } : {
      type: MA.CUSTOM,
      element: jsxs("div", {
        className: "x78zum5 x6s0dn4 x167g77z",
        children: [jsx(tb, {}), jsx(th, {})]
      })
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: {
        dismissible: !1,
        bannerType: x1.INFO,
        icon: jsx(_$$Q2, {
          ..._$$Ay2.props(u ? tx.slidesTemplateIcon : tx.cooperTemplateIcon)
        }),
        iconSize: "medium",
        mainText: getI18nString("slides.templates.banner.making_a_template"),
        description: getI18nString("slides.templates.banner.publish_when_youre_done"),
        button: m
      }
    });
  },
  dataTestId: "template-publishing-nudge-banner"
};
let na = {
  bannerId: om.OrgDowngradeBanner,
  Banner: function (e) {
    let t = a9();
    let n = sZ();
    if (!getFeatureFlags().org_downgrade_banner || t?.permission !== FUserRoleType.ADMIN || n?.org_downgrade?.operation_state !== "scheduled") return null;
    let a = n?.org_downgrade?.scheduled_run_at;
    if (!a) return null;
    let i = new Date(a);
    if (i < new Date()) return null;
    let o = {
      bannerType: x1.WARN,
      dismissible: !1,
      mainText: renderI18nText("banner.org_downgrade.reminder.title", {
        orgName: n?.name || "",
        downgradeDate: i
      }),
      positionStatic: !0,
      button: {
        type: MA.CUSTOM,
        element: jsx(_$$V, {
          onClick: () => {
            FJ("https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215", "_blank");
          },
          variant: "inverse",
          children: renderI18nText("banner.org_downgrade.reminder.contact_support")
        })
      }
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: o
    });
  },
  dataTestId: "org-downgrade-banner"
};
let nr = {
  bannerId: om.SeatBillingTermsReminder,
  Banner: function () {
    let e = useDispatch();
    let t = selectCurrentUser();
    let n = sZ();
    let i = !!n?.id;
    let o = getAtomMutate(_$$l);
    let s = getFeatureFlags().terms_of_service_may_2025_update;
    let d = _$$T(n);
    let _ = !!d?.data?.isEligible;
    let u = vK({
      planParentId: n?.id || "",
      planType: FOrganizationLevelType.ORG
    }, {
      enabled: i && _
    });
    let m = !!u.data;
    let p = jv({
      billableProductKeys: _$$N_,
      baseQuery: {
        tier: kA(n) ? Ju.ENTERPRISE : Ju.ORG,
        currency: u.data,
        renewalTerm: IX.YEAR,
        unit: IX.MONTH
      },
      options: {
        enabled: m
      }
    });
    if (!n?.id || "loaded" !== d.status || !d.data.isEligible) return null;
    let g = d.data.orgTermsInfo.renewalDate;
    let h = _$$A();
    let b = 30 >= _$$A(g).diff(h, "day");
    if (!g || !p.data) return null;
    let x = jsxs("span", {
      children: [s && renderI18nText("seat_billing_terms.banner.urgent.main_text_v2"), !s && (b ? renderI18nText("seat_billing_terms.banner.urgent.main_text") : renderI18nText("seat_billing_terms.banner.info.main_text", {
        renewalDate: g.toDate()
      }))]
    });
    let y = jsxs("span", {
      children: [s && renderI18nText("seat_billing_terms.banner.urgent.description_v2", {
        renewalDate: g.toDate()
      }), !s && (b ? renderI18nText("seat_billing_terms.banner.urgent.description") : renderI18nText("seat_billing_terms.banner.info.description"))]
    });
    return jsx(fu, {
      name: "Seat Billing Terms Reminder Banner",
      properties: {
        userId: t?.id,
        orgId: n?.id,
        variant: b ? s ? "error" : "warning" : "info"
      },
      children: jsx("div", {
        className: _$$s2.sticky.top0.$,
        style: _$$sx.add({
          zIndex: 2
        }).$,
        children: jsx(_$$C, {
          content: {
            id: om.SeatBillingTermsReminder,
            bannerType: b ? x1.DANGER : x1.INFO_SOFT,
            mainText: x,
            description: y,
            dismissible: !1,
            positionStatic: !0,
            icon: b ? jsx(_$$Z, {}) : jsx(_$$b, {}),
            iconSize: "medium",
            button: {
              buttonText: renderI18nText("seat_billing_terms.banner.review_and_accept"),
              onClick: () => {
                e(showModalHandler({
                  type: _$$w(),
                  data: {
                    orgId: n.id,
                    organizationName: n.name,
                    renewalDate: g,
                    isEnterprise: kA(n),
                    onAccept: () => o({
                      planParentId: n.id,
                      planType: FOrganizationLevelType.ORG
                    }).then(() => {
                      e(VisualBellActions.enqueue({
                        message: getI18nString("seat_billing_terms.modal.success")
                      }));
                    }),
                    prices: p.data
                  }
                }));
              }
            }
          },
          onDismiss: lQ,
          dataTestId: "seat-billing-terms-banner"
        })
      })
    });
  },
  dataTestId: "seat-billing-terms-banner"
};
let ni = {
  bannerId: om.TeamAdminOpenInvoiceReminder,
  Banner: function () {
    let e = ol();
    let t = _$$R2(e?.id);
    let n = _$$n();
    return e && t && n ? jsx(eE, {
      team: e
    }) : null;
  },
  dataTestId: "team-admin-open-invoice-reminder-banner"
};
let no = {
  bannerId: om.DevModeDemoFileUpsellBanner,
  Banner: function (e) {
    let t = useCanUseDevModeDemoFile();
    let n = !!hA();
    let r = getUserId();
    let i = function () {
      let e = useCanUseDevModeDemoFile();
      let t = useDispatch();
      let n = selectCurrentUser();
      let r = selectCurrentFile();
      return e && r && n ? async () => {
        let e = await _$$S.copyFile(r.key);
        if (e.data.meta) {
          let t = e.data.meta;
          if (desktopAPIInstance) {
            desktopAPIInstance.openFile({
              fileKey: t.key,
              title: t.name,
              fileEditorType: "dev_handoff",
              target: OpenTarget.FOCAL_TAB,
              isBranch: !1,
              isLibrary: !1,
              isTeamTemplate: !1,
              userId: n?.id
            });
            return;
          }
          customHistory.redirect(jN({
            file: t,
            isDevHandoff: !0
          }), "_blank");
        } else t(FlashActions.error(getI18nString("file_browser.file_browser_actions.file_copy_error")));
      } : null;
    }();
    let [o, l] = useState(!1);
    let [d, u] = QF(r || "") || [];
    let m = async () => {
      i && (l(!0), await i(), l(!1));
    };
    if (!t || n) return null;
    let p = jsx(_$$c, {
      disabled: !i || o,
      onClick: m,
      variant: "primary",
      trackingProperties: {
        planId: u,
        planType: d
      },
      children: getI18nString("dev_handoff.demo_file.request_access")
    });
    return jsx(_$$f2, {
      ...e,
      bannerContent: {
        dismissible: !1,
        bannerType: x1.INFO_SOFT,
        icon: jsx(_$$A3, {
          className: "x1aue78i"
        }),
        iconSize: "medium",
        mainText: jsx("span", {
          className: "xemv814",
          children: getI18nString("dev_handoff.demo_file.get_dev_mode_to_simplify")
        }),
        button: {
          type: MA.CUSTOM,
          element: p
        }
      }
    });
  },
  dataTestId: "dev-mode-demo-file-upsell-banner"
};
let ns = {
  bannerId: om.OrderFormBillingTermsBanner,
  Banner: function () {
    let e = useDispatch();
    let t = selectCurrentUser();
    let n = sZ();
    let r = Az(n);
    let [i, o] = useState(!1);
    let s = createRef();
    if (!r.data?.isEligible) return null;
    let {
      isEligible,
      warningType,
      renewalDate
    } = r.data;
    if (!(isEligible && warningType && renewalDate) || i) return null;
    let {
      variant,
      buttonText,
      onDismiss
    } = {
      warning: {
        variant: "warn",
        buttonText: renderI18nText("order_form_billing_terms.button_text.warn"),
        onDismiss: () => o(!0)
      },
      error: {
        variant: "danger",
        buttonText: renderI18nText("order_form_billing_terms.button_text.warn"),
        onDismiss: void 0
      }
    }[warningType];
    return jsx(fu, {
      name: "Order Form Renewal Banner",
      properties: {
        userId: t?.id,
        orgId: n?.id,
        variant
      },
      children: jsxs("div", {
        className: _$$s2.sticky.top0.$,
        style: _$$sx.add({
          zIndex: 2
        }).$,
        children: [jsxs(Cs, {
          variant,
          onDismiss,
          "data-testid": "near-renewal-warning-banner",
          children: [jsx(_$$Q, {
            title: renderI18nText("order_form_billing_terms.headline_banner_text.danger"),
            children: jsx("p", {
              children: renderI18nText("order_form_billing_terms.description_banner_text.warn", {
                renewalDate: renewalDate.toDate()
              })
            })
          }), jsx(_$$$, {
            onClick: () => {
              ny({
                name: t?.name || null,
                email: t?.email || null
              }, {
                ticketForms: ["billing"],
                locale: t?.locale,
                fields: [{
                  id: 0x53d2eb6d8d,
                  value: getI18nString("order_form_billing_terms.billing_contact_subject")
                }, {
                  id: 0x53d2eb6da1,
                  value: getI18nString("order_form_billing_terms.billing_contact_description")
                }, {
                  id: 0x8d435084517,
                  value: "b_something_else"
                }],
                suppressAnswerBot: !0
              });
            },
            children: buttonText
          })]
        }), jsx(_$$F2, {
          ref: s,
          dispatch: e,
          userName: t?.name || null,
          userEmail: t?.email || null
        })]
      })
    });
  },
  dataTestId: "order-form-billing-terms-banner"
};
let nl = {
  bannerId: om.NonAdminBillingTermsBanner,
  Banner: function () {
    let e = selectCurrentUser();
    let t = sZ();
    let n = useAtomWithSubscription(_$$b2(t?.id ?? null));
    let a = useAtomWithSubscription(eg);
    let i = getFeatureFlags().terms_of_service_may_2025_update;
    let o = !!t?.created_at && dl({
      date: new Date(t?.created_at)
    });
    let s = useCurrentPlanUser("NonAdminBillingTermsBanner");
    let d = isOrgGuestUser(s?.data ?? null);
    let [u] = IT(ef({
      orgId: t?.id
    }), {
      enabled: !!t?.id && i && o && !d
    });
    let m = _$$gY(eh);
    let p = n.unwrapOr(!1);
    let g = s?.data?.key.parentId;
    let {
      is_eligible,
      renewal_date,
      admin_settings_url,
      admin_emails
    } = u.unwrapOr({
      is_eligible: !1,
      renewal_date: "",
      admin_settings_url: "",
      admin_emails: []
    });
    let y = _$$A();
    let w = _$$A(renewal_date);
    let j = y.isBefore(w) && 7 >= w.diff(y, "day");
    let E = useMemo(() => function ({
      adminEmails: e,
      renewalDate: t,
      userName: n,
      adminSettingsLink: a
    }) {
      if (!e || !t || !a || !t.isValid()) return "";
      let r = encodeURIComponent(getI18nString("non_admin_billing_terms.email_subject"));
      let i = encodeURIComponent(getI18nString("non_admin_billing_terms.email_body", {
        renewalDate: t.toDate(),
        admin_link: a,
        userName: n || ""
      }));
      let o = e.join(", ");
      return `mailto:${o}?subject=${r}&body=${i}`;
    }({
      adminEmails: admin_emails,
      renewalDate: w,
      userName: e?.name,
      adminSettingsLink: admin_settings_url
    }), [admin_emails, w, e, admin_settings_url]);
    return w.isValid() && t?.id && i && p && !a.data && g && is_eligible && j && o ? jsx(fu, {
      name: "Non Admin Billing Terms Reminder Banner",
      properties: {
        userId: e?.id,
        orgId: t?.id,
        emails: admin_emails?.join(", ")
      },
      children: jsxs(Cs, {
        variant: "warn",
        onDismiss: () => {
          trackEventAnalytics("CTA Clicked", {
            name: "Non Admin Billing Terms Reminder Banner dismissed",
            currentOrgId: t.id,
            userId: e?.id,
            emails: admin_emails?.join(",")
          });
          m({
            orgUserId: g
          });
        },
        children: [jsx(_$$Q, {
          children: renderI18nText("non_admin_billing_terms.banner_description", {
            name: t.name,
            renewalDate: w.toDate()
          })
        }), E && jsx(pW, {
          href: E,
          variant: "secondary",
          children: renderI18nText("non_admin_billing_terms.contact_admin_button")
        })]
      })
    }) : null;
  },
  dataTestId: "non-admin-billing-terms-banner"
};
let nd = {
  bannerId: om.starterViewOnlySitesBanner,
  Banner: function (e) {
    let t = selectCurrentFile();
    let n = t?.editorType === "sites";
    let {
      isEligible,
      canEditTeam
    } = _$$V2();
    let i = useCurrentPublicPlan("StarterViewOnlySitesBanner");
    let o = i.unwrapOr(null)?.tier || null;
    let l = o === Agb.STARTER || o === Agb.STUDENT;
    let d = _$$y(t?.teamId ?? "", UpsellModalType.STARTER_VIEW_ONLY_BANNER);
    if (!(isEligible && n && l)) return null;
    let _ = o === Agb.STUDENT ? renderI18nText("banner.student_view_only") : renderI18nText("banner.starter_view_only.not_available");
    let m = {
      bannerType: x1.FPL_BRAND,
      icon: _$$A6,
      mainText: _,
      description: renderI18nText("banner.starter_view_only.upgrade_to_pro"),
      button: canEditTeam ? {
        type: MA.CUSTOM,
        element: jsx(_$$e, {
          onClick: d,
          style: _$$sx.mr8.colorTextBrand.$,
          children: renderI18nText("banner.starter_view_only.upgrade_button")
        })
      } : void 0
    };
    return jsx(_$$f2, {
      ...e,
      bannerContent: m
    });
  },
  dataTestId: "starter-team-view-only-sites-banner"
};
om.DevModeMCPSSEDeprecationBanner;
_$$Y;
let nc = {
  bannerId: om.SlotsEnablementReload,
  Banner: function (e) {
    let [t, n] = useState(!1);
    let r = _$$N();
    let i = useSelector(e => !!e.saveStatus?.hasUnsavedChanges);
    if (useEffect(() => {
      t && !i && customHistory.reload("slots enablement reload banner", {
        isSlotsEnablementReloadBanner: !0
      });
    }, [t, i]), r) {
      let a = {
        bannerType: x1.INFO,
        icon: _$$A6,
        mainText: jsxs("span", {
          children: ["This file contains slots, but you are not in all the necessary feature flags. Please refresh the page to enable them. See", " ", jsx(CY, {
            href: "https://go/slots-staging",
            target: "_blank",
            trusted: !0,
            children: "this FAQ"
          }), " ", "or #feat-slots for more info."]
        }),
        button: {
          buttonText: getI18nString("banner.multiplayer_session_upgrade.reload"),
          onClick: () => {
            n(!0);
          },
          disabled: t
        },
        dismissible: !0
      };
      return jsx(_$$f2, {
        ...e,
        bannerContent: a
      });
    }
    return null;
  },
  dataTestId: "slots-enablement-reload-banner"
};
let n_ = [t3, tF, tG, t1, t5, ...(!isProdCluster() && getFeatureFlags().dse_slots_file_enablement ? [nc] : []), tB, nt, nn, tz, tq, tV, tH, tK, t$, tY, tQ, tZ, tX, tJ, nd, t4, t2, t7, tU, ...(isDevEnvironment() ? [tD, tL, tW] : [])];
let nu = [tG, t1, t5, no, tY];
let nm = [ne];
let np = [];
let ng = [];
let nf = [na, nr, ns, nl];
let nh = [ni];
export function $$nb0() {
  let e = selectCurrentFile();
  let t = m0();
  let n = e?.teamId;
  let r = useSelector(e => n ? e.teams[n] : null);
  return e ? n && !r ? np : t ? nu : n_ : nm;
}
export function $$nx1() {
  let e = _$$n();
  return dq() ? nf : e ? nh : ng;
}
export const X = $$nb0;
export const W = $$nx1;