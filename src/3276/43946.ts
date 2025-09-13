import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { f as _$$f } from "../905/809171";
import { J as _$$J } from "../905/614223";
import { AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atom } from "../figma_app/27355";
import { A as _$$A } from "../905/920142";
import { customHistory } from "../905/612521";
import { buildUploadUrl, getInitialOptions } from "../figma_app/169182";
import { XHR } from "../905/910117";
import { WN } from "../figma_app/638601";
import { s as _$$s } from "../cssbuilder/589278";
import { useProjectFileCreationPermissions, canCreateFileType } from "../figma_app/687776";
import { $z, Me, lR } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { N as _$$N } from "../905/438674";
import { hh } from "../figma_app/42945";
import { u as _$$u } from "../figma_app/365543";
import { A as _$$A2 } from "../svg/910223";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { xb, FO } from "../figma_app/910914";
import { $ as _$$$ } from "../figma_app/61705";
import { b as _$$b } from "../905/985254";
import { oW } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { DP } from "../905/640017";
import { k as _$$k2 } from "../figma_app/564183";
import { _Z, eC, $1 } from "../905/539601";
import { ck as _$$ck } from "../905/87821";
import { NE } from "../3276/373312";
import { w as _$$w } from "../0c62c2fd/912149";
import { useFullscreenViewFile, selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { buildFileUrl } from "../905/612685";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { getObservableValue } from "../figma_app/84367";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { f6 } from "../figma_app/915202";
import { $A } from "../905/782918";
import { U as _$$U } from "../figma_app/65327";
import { A as _$$A3 } from "../905/251970";
import { resourceUtils } from "../905/989992";
import Q from "classnames";
import { k as _$$k3 } from "../905/582200";
import { oW as _$$oW } from "../905/675859";
import { x as _$$x } from "../905/211326";
import { Ph } from "../905/160095";
import { TrackingProvider } from "../figma_app/831799";
import { Q as _$$Q } from "../905/346809";
import { Zk } from "../figma_app/626177";
let P = "interacted_with_slack_and_teams_announcement";
var X = Q;
let ei = "announcement--announcementAppImg--l9gG8";
let es = "announcement--announcementBrandImg--H6L6b";
let er = "announcement--imageNoPaddingTop--YSxed";
function el(e) {
  return e.link ? jsx("div", {
    children: jsx(Ph, {
      trackingProperties: {
        text: e.mainButtonTitle
      },
      href: e.link,
      newTab: !0,
      children: e.children
    })
  }) : jsx("div", {
    className: _$$s.wFull.$,
    children: jsx($z, {
      variant: "secondary",
      onClick: e.onClick,
      disabled: e.disabled,
      children: e.children
    })
  });
}
function ed(e) {
  let t = selectCurrentUser();
  let n = useFullscreenViewFile();
  let a = useDispatch();
  let s = _$$w();
  let r = () => {
    let t = e.asset.bg ? {
      backgroundColor: e.asset.bg
    } : void 0;
    return "image" === e.asset.type ? jsx(_$$oW, {
      src: e.asset.src,
      className: X()("brand" === e.layoutStyle ? es : ei, {
        [er]: e.asset.noPaddingTop
      }),
      alt: e.asset.alt,
      style: t
    }) : jsx("video", {
      src: e.asset.src,
      className: X()("brand" === e.layoutStyle ? es : ei, {
        [er]: e.asset.noPaddingTop
      }),
      "aria-label": e.asset.alt,
      style: t,
      autoPlay: !0,
      loop: !0,
      muted: !0
    });
  };
  let l = resourceUtils.useTransform(n, e => t?.id === e?.creatorId ? "owner" : e?.canEdit ? "editor" : "viewer");
  return jsx(TrackingProvider, {
    name: e.trackingContextName,
    properties: {
      userId: t?.id,
      jobTitle: s,
      userRole: l.unwrapOr("viewer")
    },
    enabled: e.trackingDisabled && "loaded" === l.status,
    children: jsx(_$$k3, {
      name: "announcement_panel",
      children: jsxs(Zk, {
        className: "announcement--announcementPanel--Ds9Bn",
        children: [jsxs("div", {
          children: [jsxs("div", {
            className: "announcement--announcementTitleRow--bQu8l",
            children: [jsx(_$$Q, {
              extended: !0,
              doNotReserveSpaceForChevron: !0,
              children: jsx("div", {
                className: _$$s.$$with({
                  ml8: !0
                }).$,
                children: e.title
              })
            }), jsx("div", {
              className: "announcement--announcementCloseButton--vgH6U",
              children: jsx(Me, {
                "aria-label": getI18nString("general.close"),
                onClick: e.onDismiss ? e.onDismiss : () => {
                  a(_$$b({
                    [e.userFlagName]: !0
                  }));
                },
                trackingProperties: {
                  action: "close"
                },
                children: jsx(_$$A3, {})
              })
            })]
          }), "app" === e.layoutStyle && e.description, "brand" === e.layoutStyle && r()]
        }), "app" === e.layoutStyle && r(), "brand" === e.layoutStyle && e.description, e.mainButtonOverride, !e.mainButtonOverride && e.mainButtonTitle && jsx(el, {
          link: e.ctaHref,
          onClick: e.onCtaClick,
          disabled: e.isLoading,
          mainButtonTitle: e.mainButtonTitle,
          children: jsx(_$$x, {
            isLoading: e.isLoading,
            className: "announcement--loading--KRjaH",
            children: () => jsx(Fragment, {
              children: e.mainButtonTitle
            })
          })
        })]
      })
    })
  });
}
buildUploadUrl("a553882986986c96fc7d298a674e9e0522d05b53");
let ec = _$$ck();
export var $$em1 = (e => (e.DESIGN = "Design", e.PROTOTYPE = "Prototype", e.INSPECT = "Inspect", e.HANDOFF = "Handoff", e.COMMENTS = "Comments", e))($$em1 || {});
let eu = {
  assetSrc: buildUploadUrl("828793d9a2d4cff784587a20da2cd458dceddfe9"),
  backgroundColor: "#F5F5F5",
  imageNoPaddingTop: !0
};
let ep = {
  assetSrc: buildUploadUrl("fb12393ac78bdda14d77f2be682d3f2e67fe7f6f"),
  backgroundColor: "#383838",
  imageNoPaddingTop: !0
};
let eh = e => {
  let t = e?.currentPlanUser?.draftsFolderId ?? void 0;
  return {
    folderId: t,
    isDraftsFolder: void 0 !== t
  };
};
let ef = (e, t) => {
  let n = new Date(e);
  n.setDate(n.getDate() + t);
  return n;
};
let e_ = new Date();
let eg = [{
  userFlagName: "dismissed_figma_make_prototype_announcement",
  AnnouncementComponent: function ({
    userFlagName: e
  }) {
    let t = useDispatch();
    let n = selectCurrentFile();
    let a = "dark" === DP();
    let {
      folderId,
      isDraftsFolder
    } = eh(n);
    let d = _$$$({
      folderId,
      isDraftsFolder,
      editorType: FFileType.FIGMAKE,
      forceOpenNewTab: !0,
      newFileFrom: f6.FIGMAKE_PROTOTYPE_ANNOUNCEMENT,
      contextClicked: "figmake_prototype_announcement_created"
    });
    let c = {
      type: "video",
      src: a ? buildUploadUrl("001c68beb7c3ebcc9c080f1104272404696c536b") : buildUploadUrl("8aa3d03397da517c320149f5e387c1030ceebe13"),
      alt: getI18nString("upsell.figma_make_prototype_announcement.image_alt"),
      bg: a ? "#2D2E46" : "#F7F6FF",
      noPaddingTop: !0
    };
    return jsx(ed, {
      asset: c,
      description: getI18nString("upsell.figma_make_prototype_announcement.description"),
      layoutStyle: "brand",
      mainButtonOverride: jsx(_$$J, {
        brand: "seascape",
        children: jsx(lR, {
          variant: "primary",
          onClick: d,
          trackingProperties: {
            trackingDescriptor: _$$c.TRY_FIGMA_MAKE
          },
          children: getI18nString("upsell.figma_make_prototype_announcement.button_title")
        })
      }),
      onDismiss: () => {
        t(_$$b({
          [e]: !0
        }));
      },
      title: getI18nString("upsell.figma_make_prototype_announcement.title"),
      trackingContextName: "Figma Make Prototype Announcement",
      userFlagName: e
    });
  },
  panelName: "Prototype",
  additionalDisplayBlocker: ({
    experiments: e,
    canCreateFigmakeFileInTargetFolder: t
  }) => !t || !e.isInFigmaMakePrototypeTabUpsellExp?.()
}, {
  userFlagName: "seen_mobile_proto_announcement",
  AnnouncementComponent: function () {
    let e = useDispatch();
    return useAtomWithSubscription(NE) ? jsx(ed, {
      asset: {
        type: "image",
        src: buildUploadUrl("b50fba0faeea245feed92fe60337297d827e4984"),
        alt: getI18nString("cross_sell.mobile_app_prompt.comment_image_alt_text")
      },
      description: getI18nString("mobile_download_prompts.play_mobile_prototypes"),
      isLoading: !1,
      layoutStyle: "app",
      mainButtonTitle: getI18nString("mobile_download_prompts.email_me"),
      onCtaClick: () => {
        XHR.post("/api/send_mobile_download_email", {
          type: "prototype"
        });
        e(VisualBellActions.enqueue({
          message: getI18nString("rcs.mobile_comment_reply_upsell.email_sent")
        }));
        e(_$$b({
          seen_mobile_proto_announcement: !0
        }));
      },
      title: getI18nString("mobile_download_prompts.run_prototypes_from_your_phone"),
      trackingContextName: "Mobile App Prototype Announcement",
      trackingDisabled: !0,
      userFlagName: "seen_mobile_proto_announcement"
    }) : jsx(Fragment, {});
  },
  panelName: "Prototype",
  additionalDisplayBlocker: ({
    userAnalyticsData: e,
    userFlags: t,
    selectedView: n
  }) => !getFeatureFlags().mobile_download_proto_sidebar || e?.is_active_mobile_user || !!t.seen_mobile_proto_download_modal_prompt || $A(n)
}, {
  userFlagName: "seen_mobile_comment_announcement",
  AnnouncementComponent: function () {
    let e = useDispatch();
    return jsx(ed, {
      asset: {
        type: "image",
        src: buildUploadUrl("5b8af9ed88cb76b20858a7a8ac9fed784e5cbeb7"),
        alt: getI18nString("cross_sell.mobile_app_prompt.comment_image_alt_text")
      },
      description: getI18nString("mobile_download_prompts.join_team_conversations"),
      isLoading: !1,
      layoutStyle: "app",
      mainButtonTitle: getI18nString("mobile_download_prompts.email_me"),
      onCtaClick: () => {
        XHR.post("/api/send_mobile_download_email", {
          type: "comment"
        });
        e(VisualBellActions.enqueue({
          message: getI18nString("rcs.mobile_comment_reply_upsell.email_sent")
        }));
        e(_$$b({
          seen_mobile_comment_announcement: !0
        }));
      },
      title: getI18nString("mobile_download_prompts.meet_your_team"),
      trackingContextName: "Mobile App Comments Announcement",
      trackingDisabled: !0,
      userFlagName: "seen_mobile_comment_announcement"
    });
  },
  panelName: "Comments",
  additionalDisplayBlocker: ({
    userAnalyticsData: e,
    userFlags: t,
    selectedView: n
  }) => !getFeatureFlags().mobile_download_comment_sidebar || e?.is_active_mobile_user || !!t.seen_mobile_comment_download_modal_prompt || $A(n)
}, {
  userFlagName: "dev_mode_dismissed_properties_panel_announcement",
  AnnouncementComponent: function ({
    userFlagName: e,
    lifecycle: t
  }) {
    let n = useDispatch();
    let a = _$$U("announcement");
    let s = "dark" === DP();
    let r = () => {
      t ? _Z(t) : n(_$$b({
        [e]: !0
      }));
    };
    let {
      assetSrc,
      backgroundColor,
      imageNoPaddingTop
    } = s ? ep : eu;
    return jsx(ed, {
      asset: {
        type: "image",
        src: assetSrc,
        alt: getI18nString("inspect_panel.code.promo_image_alt"),
        bg: backgroundColor,
        noPaddingTop: imageNoPaddingTop
      },
      description: getI18nString("inspect_panel.properties.dev_mode_upsell_message"),
      layoutStyle: "brand",
      mainButtonOverride: jsx("div", {
        className: _$$s.wFull.$,
        children: jsx(_$$J, {
          brand: "dev-handoff",
          children: jsx(lR, {
            variant: "primary",
            onClick: () => {
              r();
              a("handoff");
            },
            children: getI18nString("dev_handoff.paywall.blocking_modal.button.request_access")
          })
        })
      }),
      onDismiss: r,
      title: renderI18nText("dev_handoff.paywall.banner.title"),
      trackingContextName: "Dev Mode announcement",
      userFlagName: e
    });
  },
  panelName: "Inspect",
  lifecycle: {
    userFlagName: "dev_mode_dismissed_properties_panel_announcement",
    maxTimes: 3,
    cooldown: "MONTH_AND_A_HALF"
  },
  additionalDisplayBlocker: ({
    selectedView: e,
    isRecovery: t,
    isReadOnly: n,
    canAccessDevMode: o
  }) => !function ({
    isDevHandoffView: e,
    isRecovery: t,
    isReadOnly: n,
    canAccessDevMode: o
  }) {
    return !t && n && !o && !e;
  }({
    isDevHandoffView: $A(e),
    isRecovery: t,
    isReadOnly: n,
    canAccessDevMode: o
  })
}, {
  userFlagName: P,
  AnnouncementComponent: function () {
    let {
      filteredSidebarItems
    } = useContext(hh);
    return 0 === useMemo(() => "loaded" === filteredSidebarItems.status && filteredSidebarItems.data || [], [filteredSidebarItems]).length ? null : jsx(_$$u, {
      className: "dev_handoff_comments_panel_slack_teams_hint--hintPanel--cjNDL",
      idForTests: "hintFigmaForSlackTeams",
      userFlag: P,
      title: getI18nString("dev_handoff.comments_panel.slack_teams_hint.title"),
      icon_DEPRECATED: _$$A2,
      hintText: renderI18nText("dev_handoff.comments_panel.slack_teams_hint", {
        figmaForSlackLink: jsx(_$$N, {
          href: "https://figma.slack.com/apps/A01N2QYSA81-figma-and-figjam?tab=more_info",
          newTab: !0,
          trusted: !0,
          children: renderI18nText("dev_handoff.comments_panel.slack_teams_hint.slack_link")
        }),
        figmaForTeamsLink: jsx(_$$N, {
          href: "https://appsource.microsoft.com/en-us/product/office/WA200004521?exp=ubp8",
          newTab: !0,
          trusted: !0,
          children: renderI18nText("dev_handoff.comments_panel.slack_teams_hint.teams_link")
        })
      })
    });
  },
  panelName: "Comments",
  additionalDisplayBlocker: ({
    selectedView: e
  }) => !$A(e)
}, {
  userFlagName: xb,
  AnnouncementComponent: FO,
  panelName: "Handoff",
  additionalDisplayBlocker: ({
    userFlags: e
  }) => !e.dev_handoff_seen_config_wizard || ef(e.dev_handoff_seen_config_wizard.updatedAt, 3) < e_
}, {
  userFlagName: "dev_mode_demo_file_props_panel_upsell_dismissed",
  AnnouncementComponent: function () {
    let e = useDispatch();
    let t = getInitialOptions().dev_mode_demo_file_key;
    return t ? jsx(ed, {
      asset: {
        type: "image",
        src: buildUploadUrl("0381fb8f01b5e71da6e1f3d65e2bab6be47de673"),
        alt: getI18nString("inspect_panel.code.promo_image_alt")
      },
      description: getI18nString("dev_mode_demo_file.check_out_our_interactive_test"),
      layoutStyle: "brand",
      mainButtonOverride: jsx(_$$J, {
        brand: "dev-handoff",
        children: jsx(lR, {
          variant: "primary",
          onClick: () => {
            t && customHistory.redirect(buildFileUrl({
              file: {
                key: t
              },
              isDevHandoff: !0
            }), "_blank");
            e(_$$b({
              dev_mode_demo_file_props_panel_upsell_dismissed: !0
            }));
          },
          children: getI18nString("dev_mode_playground_file.try_it_now")
        })
      }),
      title: renderI18nText("dev_mode_playground_file.want_to_try_dev_mode"),
      trackingContextName: "Dev Mode Demo Props Upsell",
      userFlagName: "dev_mode_demo_file_props_panel_upsell_dismissed"
    }) : null;
  },
  panelName: "Inspect",
  additionalDisplayBlocker: ({
    userFlags: e,
    isEngineer: t,
    canAccessDevMode: n,
    plan: o
  }) => !e.dev_mode_dismissed_properties_panel_announcement || n || !t || o?.tier === FPlanNameType.STARTER
}];
let ev = atom(e => {
  let t = {};
  eg.forEach(n => {
    n.lifecycle && (t[n.userFlagName] = e(eC(n.lifecycle)));
  });
  return t;
});
export function $$ex0(e) {
  let t = selectCurrentFile();
  let n = t?.editorType;
  let l = useTeamPlanFeatures().unwrapOr(null);
  let h = l?.figjamDisabledAt || null;
  let f = useSelector(e => e.userFlags);
  let g = useAtomWithSubscription(ev);
  let x = selectCurrentUser();
  let y = useSelector(e => e.userAnalyticsData);
  let C = useSelector(e => e.selectedView);
  let w = x?.created_at;
  let j = _$$A(w).add(14, "day").isSameOrAfter(_$$A());
  let k = _$$k2();
  let P = WN();
  let T = useMemo(() => "prototype" === C.view ? void 0 : AppStateTsApi, [C.view]);
  let M = getObservableValue(T?.uiState().isRecovery, !1);
  let E = "developer" === _$$w();
  let S = useCanAccessFullDevMode();
  let {
    folderId
  } = eh(t);
  let {
    data,
    status
  } = useProjectFileCreationPermissions(folderId);
  let H = l?.tier === FPlanNameType.STARTER && !getFeatureFlags().bake_starter_limit;
  let Z = null !== data && canCreateFileType(data, FFileType.FIGMAKE) && !H;
  let $ = {
    Prototype: "loading" === status
  };
  let K = {};
  let W = oW();
  if (K.isInFigmaMakePrototypeTabUpsellExp = W, k) return jsxs("div", {
    className: "announcement--loggedOutSignupCta--qrt2V",
    children: [jsx(_$$f, {}), getI18nString("auth.create_account_to_view_reply_comments"), jsx(Button, {
      variant: "link",
      onClick: () => P("SIGN_UP_CTA_COMMENTS_PANEL"),
      children: getI18nString("auth.sign_up")
    })]
  });
  if (n === FFileType.WHITEBOARD || n === FFileType.SLIDES || "fullscreen" !== C.view || null != h || j || "Comments" === e.panelName && "fullscreen" === C.view && n === FFileType.DESIGN && f.claimed_invite_with_pending_user_mention && !f.has_closed_comment && customHistory.location.hash) return null;
  let G = Date.now() - 2592e5;
  if (eg.some(e => {
    let t = f[e.userFlagName];
    return !!t && t.updatedAt > new Date(G);
  })) return null;
  let Q = eg.find(n => {
    if (ec || n.panelName !== e.panelName || $[e.panelName]) return !1;
    if (n.lifecycle) {
      let e = g[n.userFlagName];
      if (e?.status !== "loaded" || $1({
        ...e.data,
        lifecycleConfig: n.lifecycle
      })) return !1;
    }
    let o = f[n.userFlagName];
    return (!!n.lifecycle || !o) && !n.additionalDisplayBlocker?.({
      currentUser: x,
      openFile: t,
      userAnalyticsData: y,
      userFlags: f,
      selectedView: C,
      isRecovery: M,
      isEngineer: E,
      isReadOnly: !t?.canEdit,
      canAccessDevMode: S,
      experiments: K,
      plan: l,
      canCreateFigmakeFileInTargetFolder: Z
    });
  });
  if (Q) {
    let e = Q.AnnouncementComponent;
    return jsx(e, {
      userFlagName: Q.userFlagName,
      lifecycle: Q.lifecycle
    });
  }
  return null;
}
export const Mw = $$ex0;
export const ON = $$em1;