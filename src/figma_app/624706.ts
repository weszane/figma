import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useRef, useEffect, useMemo, Suspense, useCallback, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNullish } from "../figma_app/95419";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuLinkComp, MenuItemComp, MenuSeparator } from "../figma_app/860955";
import { ButtonPrimitive } from "../905/632989";
import { stylex } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useSetAtom, atomStoreManager } from "../figma_app/27355";
import _ from "classnames";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { openWindow } from "../905/508367";
import { Tf } from "../905/280919";
import { dayjs } from "../905/920142";
import { customHistory } from "../905/612521";
import { useSingleEffect } from "../905/791079";
import { getInitialOptions, buildUploadUrl, isDevEnvironment, isGovCluster, isLocalCluster, isStagingCluster } from "../figma_app/169182";
import { isExactModifier, ModifierKeyCodes } from "../905/63728";
import { useSubscription } from "../figma_app/288654";
import { RecordingPureComponent, setupPlayback, generateRecordingKey, handleMouseEvent } from "../figma_app/878298";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { generateUUIDv4 } from "../905/871474";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { A as _$$A2 } from "../figma_app/849799";
import { renderI18nText, getI18nString } from "../905/303541";
import { showModalHandler, hideModal } from "../905/156213";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { Badge, BadgeColor } from "../figma_app/919079";
import { OptionComponent, SeparatorComponent, DropdownOptions } from "../figma_app/236327";
import { trackedSvgComponent } from "../figma_app/637027";
import { desktopAPIInstance } from "../figma_app/876459";
import { serializeQuery } from "../905/634134";
import { selectCurrentUser, getUserId } from "../905/372672";
import { FPlanNameType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { UserAPIHandlers } from "../905/93362";
import { F as _$$F } from "../5132/756360";
import { KeyboardShortcut } from "../figma_app/420927";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nState } from "../figma_app/363242";
import { setKeyboardShortcutPanelTab } from "../905/26824";
import { putUserAction } from "../figma_app/24841";
import { postUserFlag } from "../905/985254";
import { isTryWhiteboardFile } from "../figma_app/976749";
import { handleAccessibilityKeyboardEvents } from "../figma_app/290668";
import { fullscreenValue } from "../figma_app/455680";
import { selectCurrentFile } from "../figma_app/516028";
import { selectUserFlag } from "../905/940356";
import { UserWithTeams } from "../figma_app/43951";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { mapFileTypeToEditorTypeNullable, FEditorType, mapEditorTypeToFileType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { getKeyboardShortcut } from "../figma_app/357047";
import { aG } from "../figma_app/728657";
import { H as _$$H } from "../905/75186";
import { isBoolean } from "../905/71";
import { A5, ci } from "../figma_app/274104";
import { KeyboardFocusManager } from "../905/826900";
import { kA, IO } from "../905/962318";
import { H as _$$H2 } from "../figma_app/731109";
import { useEventForwarder } from "../905/453826";
import { useOverlay } from "../905/621515";
import { userFlagExistsAtomFamily, userFlagAtomFamily, userFlagsAtom } from "../figma_app/545877";
import { ModalPriority } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { J_ } from "../figma_app/598952";
import { BugReporterMachine, CollectiveUpsellOverlay, KoreanReportTranslationIssueCallout, GuestLanguagePickerOverlay } from "../figma_app/6204";
import { jH, cl, bb } from "../figma_app/926950";
import { qf } from "../905/817095";
import { textDisplayConfig } from "../905/687265";
import { Button } from "../905/521428";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { P as _$$P } from "../vendor/348225";
import { transformAtom } from "../905/401885";
import { h4, WB } from "../figma_app/625596";
import { P as _$$P2 } from "../905/184837";
import { iH } from "../figma_app/449975";
import { n as _$$n } from "../5132/612716";
import { V as _$$V } from "../905/355181";
import { V as _$$V2 } from "../905/223767";
import { dR } from "../figma_app/109538";
import { I as _$$I } from "../905/641938";
import { startProUpgradeFlowThunk } from "../figma_app/482142";
import { TrackingProvider } from "../figma_app/831799";
import { getUserCurrency } from "../figma_app/514043";
import { UpsellModalType } from "../905/165519";
import { SubscriptionType } from "../figma_app/831101";
import { hK } from "../5132/334833";
import { CloseButton } from "../905/17223";
import { styleBuilderInstance } from "../905/941192";
import { AutoLayout, Spacer } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { NJ } from "../figma_app/419216";
import { e as _$$e2 } from "../905/916195";
import { SvgComponent } from "../905/714743";
import { Link } from "../905/438674";
import { k as _$$k3 } from "../905/888808";
import { A as _$$A3 } from "../svg/745787";
import { A as _$$A4 } from "../svg/808438";
import { A as _$$A5 } from "../svg/600568";
import { A as _$$A6 } from "../svg/969232";
import { ArrowPosition } from "../905/858282";
import { defaultLanguage, languageCodes } from "../905/816253";
import { T as _$$T, e as _$$e3 } from "../905/949616";
import { getCookieManager } from "../905/423575";
import { j as _$$j } from "../905/270643";
import { createFigmaPluginScope } from "../905/629114";
import { Fullscreen, ColorConversionEnum } from "../figma_app/763686";
import { Fb } from "../figma_app/819458";
import { A as _$$A7 } from "../svg/728314";
import { A as _$$A8 } from "../svg/667065";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12 15.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 7a3 3 0 0 1 3 3c0 1.038-.53 1.764-1.322 2.152-.715.35-1.178.83-1.178 1.348v.5a.5.5 0 0 1-1 0v-.5c0-1.138.964-1.867 1.737-2.246.47-.23.763-.619.763-1.254a2 2 0 1 0-4 0 .5.5 0 0 1-1 0 3 3 0 0 1 3-3"
    })
  });
});
var h = _;
let D = registerModal(function (e) {
  let t = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "fit-content",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("report_abuse.title")
        })
      }), jsx(DialogBody, {
        children: jsx("div", {
          className: "modal-module--abuseReportFormWrapper--l0oSc",
          children: jsx(_$$A2, {})
        })
      })]
    })
  });
});
let z = "help_widget--helpWidget--tXRGh help_widget--helpWidgetShared--pnwYu text--_negText--j9g-L";
let W = "help_widget--clickableSvg--hcIHQ";
let K = "help_widget--helpWidgetHidden--7myyk help_widget--helpWidget--tXRGh help_widget--helpWidgetShared--pnwYu text--_negText--j9g-L";
let Y = "help_widget--decagonFrame--85LmB";
function $() {
  let {
    show_support_chat,
    support_chat_origin,
    support_chat_frame_url
  } = getInitialOptions();
  let n = getFeatureFlags().desktop_support_chat;
  let i = show_support_chat && support_chat_origin && support_chat_frame_url;
  return desktopAPIInstance ? !!n && i : i;
}
function X(e, t) {
  let r = getInitialOptions().support_chat_origin;
  r && e?.current?.contentWindow?.postMessage({
    action: t,
    figmaAppDecagonMessage: !0
  }, r);
}
function q({
  open: e,
  onClose: t
}) {
  let r = selectCurrentUser();
  let a = useCurrentPublicPlan("SupportChatbot");
  let s = a.unwrapOr(null)?.tier || null;
  let {
    support_chat_origin,
    support_chat_frame_url
  } = getInitialOptions();
  let [d, c] = useState(null);
  let p = useRef(null);
  let [_, h] = useState(!1);
  let g = getFeatureFlags().mount_decagon_iframe_selectively;
  useSingleEffect(() => {
    (async () => {
      try {
        let e = await UserAPIHandlers.getChatbotMeta();
        c(e.data.meta);
      } catch (e) {}
    })();
  });
  useEffect(() => {
    _ && (e ? X(p, "open") : (X(p, "close"), h(!1)));
  }, [e, _]);
  useSingleEffect(() => {
    let e = e => {
      let {
        data,
        origin
      } = e;
      let i = data?.action;
      let a = data?.isDecagonEvent;
      origin === support_chat_origin && a && i && (trackEventAnalytics(`decagon_in_app_${i}`), "enableDebugMode" === i && Tf.optUserIntoDebugFlow(), "loaded" === i && h(!0), "close" === i && t());
    };
    window.addEventListener("message", e);
    return () => {
      window.removeEventListener("message", e);
    };
  });
  let E = d?.metadata || function (e, t) {
    let r;
    let n;
    if (!e) return {
      isFigmaLoggedIn: !1
    };
    if (e.name) {
      let t = e.name.split(" ");
      r = t[0];
      n = t.slice(1).join(" ");
    }
    let i = !!t && [FPlanNameType.ENTERPRISE, FPlanNameType.ORG, FPlanNameType.PRO].includes(t);
    return {
      userId: e.id,
      isFigmaLoggedIn: !0,
      email: e.email,
      firstName: r,
      lastName: n,
      paidUser: i,
      planTier: t,
      datadogRumSessionId: Tf.sessionId
    };
  }(r, s) || {};
  let y = `${support_chat_frame_url}?${serializeQuery({
    ...E,
    datadogRumSessionId: Tf.sessionId
  })}`;
  return g ? e ? jsx("iframe", {
    ref: p,
    src: y,
    className: Y,
    title: "Decagon Frame"
  }) : null : jsx("iframe", {
    ref: p,
    src: y,
    className: Y,
    style: e ? void 0 : {
      pointerEvents: "none",
      visibility: "hidden"
    },
    title: "Decagon Frame"
  });
}
let eO = "seen_bug_reporter_modal";
let eR = userFlagExistsAtomFamily(eO);
function eL() {
  let e = useDispatch<AppDispatch>();
  let t = useAtomWithSubscription(eR);
  let r = useOverlay({
    overlay: BugReporterMachine,
    priority: ModalPriority.SECONDARY_MODAL
  }, [t]);
  let s = useSelector(e => e.user?.created_at);
  let o = useSelector(e => e.user?.email);
  let l = !!s && dayjs().diff(dayjs(s), "days") >= 14;
  let d = !!o && o.includes("@figma.com");
  let c = useAtomWithSubscription(jH);
  return (useEventForwarder(r.uniqueId, "Fullscreen Loaded", () => {
    l && d && r.show({
      canShow: e => !e,
      onShow: () => e(postUserFlag({
        [eO]: !0
      }))
    });
  }), useEffect(() => {
    c && r.complete();
  }, [r, c]), r.isShowing && getFeatureFlags().bug_reporter) ? jsx(OnboardingModal, {
    isShowing: r.isShowing,
    userFlagOnShow: eO,
    title: renderI18nText("bug_reporter.announcement.title"),
    description: renderI18nText("bug_reporter.announcement.content"),
    trackingContextName: "bug_reporter_modal",
    targetKey: J_,
    onClose: r.complete,
    emphasized: !0,
    disableHighlight: !0
  }) : null;
}
function eM({
  flagName: e,
  userFlag: t
}) {
  let r = useDispatch<AppDispatch>();
  let i = e => {
    r({
      type: "USER_FLAG_POST",
      payload: {
        [e]: !1
      }
    });
  };
  return jsxs("div", {
    className: "xrvj5dj x16pxjgp x1excjyp x6s0dn4 xf7z5ut x12oqio5 xv2f06h",
    children: [jsx("span", {
      ...stylex.props(eF.flagName),
      children: e
    }), jsx("span", {
      ...stylex.props(eF.timestamp),
      children: dayjs(t.updatedAt).format("MMM D, YYYY h:mm A")
    }), jsx("span", {
      ...stylex.props(eF.action),
      children: jsx(Button, {
        variant: "secondary",
        onClick: () => i(e),
        children: renderI18nText("reset_user_flags_modal.reset")
      })
    })]
  });
}
let eF = {
  action: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  flagName: {
    ...textDisplayConfig.textBodyMedium,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  timestamp: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    whiteSpace: "xuxw1ft",
    $$css: !0
  }
};
function ej({
  userFlags: e
}) {
  var t;
  let [r, a] = useState("");
  let s = useMemo(() => Object.entries(e).filter(([e, t]) => null != t).sort(([e, t], [r, n]) => n.updatedAt.getTime() - t.updatedAt.getTime()), [e]).filter(([e]) => e.toLowerCase().includes(r.toLowerCase()));
  let o = Object.keys(e).length;
  let l = (t = o) <= 20 ? "Rookie" : t <= 40 ? "Intermediate" : t <= 60 ? "Advanced" : t <= 90 ? "Pro" : t <= 120 ? "Veteran" : "Vexillologist";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1nfngrj x6ikm8r xh8yej3",
    children: [jsx("div", {
      className: "x7hzu26 x1ef8nbk x78zum5",
      children: jsx("input", {
        type: "text",
        value: r,
        onChange: e => a(e.target.value),
        placeholder: "Search flags...",
        ...stylex.props(eU.searchInput)
      })
    }), jsx("div", {
      children: renderI18nText("reset_user_flags_modal.user_flag_level", {
        userFlagCount: o,
        userFlagLevel: l
      })
    }), jsxs("div", {
      ...stylex.props(eU.header),
      children: [jsx("span", {
        ...stylex.props(eU.flagName),
        children: renderI18nText("reset_user_flags_modal.flag_name")
      }), jsx("span", {
        ...stylex.props(eU.timestamp),
        children: renderI18nText("reset_user_flags_modal.last_updated")
      }), jsx("span", {
        ...stylex.props(eU.action),
        children: renderI18nText("reset_user_flags_modal.action")
      })]
    }), jsx("div", {
      className: "x78zum5 xdt5ytf x1nfngrj",
      children: s.map(([e, t]) => jsx(eM, {
        flagName: e,
        userFlag: t
      }, t.id))
    })]
  });
}
let eU = {
  action: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  flagName: {
    ...textDisplayConfig.textBodyMedium,
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  header: {
    display: "xrvj5dj",
    gridTemplateColumns: "x16pxjgp",
    gap: "x1excjyp",
    rowGap: null,
    columnGap: null,
    alignItems: "x6s0dn4",
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderBottom: "x1n5zjp5",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    ...textDisplayConfig.textBodySmallStrong,
    color: "x1n0bwc9",
    $$css: !0
  },
  searchInput: {
    width: "xh8yej3",
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x12oqio5",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: "x1bamp8i",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    backgroundColor: "x1yjdb4r",
    color: "x1n0bwc9",
    ...textDisplayConfig.textBodyMedium,
    "::placeholder_color": "xuggh6c",
    $$css: !0
  },
  timestamp: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    whiteSpace: "xuxw1ft",
    $$css: !0
  }
};
let eB = registerModal(function (e) {
  let t = useModalManager(e);
  let r = useSelector(e => e.userFlags);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    height: "dynamic",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("reset_user_flags_modal.title")
        })
      }), jsx(DialogBody, {
        children: jsx(ej, {
          userFlags: r
        })
      })]
    })
  });
}, "ResetUserFlagsModal");
function eH(...e) {
  let t = useDispatch<AppDispatch>();
  let r = useSelector(e => e.userFlags);
  let n = e.reduceRight((e, t) => (e << 1) + (r[t] ? 1 : 0), 0);
  let i = r => {
    let n = r;
    let i = e.reduce((e, t) => {
      let r = !!(1 & n);
      n >>= 1;
      return {
        ...e,
        [t]: r
      };
    }, {});
    t(postUserFlag(i));
  };
  return {
    flagNumberVal: n,
    incrementFlag: () => {
      n + 1 >= Math.pow(2, e.length) || i(n + 1);
    },
    decrementFlag: () => {
      n <= 0 || i(n - 1);
    },
    setFlagVal: t => {
      let r = Math.max(0, t);
      i(r = Math.min(r, Math.pow(2, e.length) - 1));
    }
  };
}
let e4 = registerModal(function ({
  teamId: e,
  dismissModal: t,
  maxSeenCount: r = 1 / 0
}) {
  let s = useMemo(() => hK(), []);
  let o = useDispatch<AppDispatch>();
  let {
    flagNumberVal,
    incrementFlag
  } = eH(...h4);
  useSingleEffect(() => {
    r !== 1 / 0 && flagNumberVal <= r && incrementFlag();
  });
  let c = jsx(_$$V, {
    onClick: () => {
      o(showModalHandler({
        type: _$$V2,
        data: {
          teamId: e ?? void 0,
          upsellSource: UpsellModalType.COLLECTIVE_UPSELLS_MODAL,
          openCheckoutInNewTab: !0
        }
      }));
    },
    children: getI18nString("help_widget.collective_upsells.fullscreen.compare_plans")
  });
  return flagNumberVal > r ? null : jsx(TrackingProvider, {
    name: "CollectiveUpsellsFullscreenModal",
    children: jsx(_$$n, {
      ...s,
      dismissModal: () => {
        t ? t() : o(hideModal());
      },
      secondaryBtn: c,
      clickPrimaryBtn: () => {
        e ? o(startProUpgradeFlowThunk({
          teamId: e,
          openInNewTab: !0,
          currency: getUserCurrency(),
          billingPeriod: SubscriptionType.ANNUAL
        })) : o(showModalHandler({
          type: dR,
          data: {
            plan: _$$I.PRO,
            upsellSource: UpsellModalType.COLLECTIVE_UPSELLS_MODAL
          }
        }));
      }
    })
  });
}, "CollectiveUpsellsFullscreenModal");
function te({
  dismissModal: e,
  descriptionText: t,
  headerText: r,
  ctaPrimaryText: a,
  ctaSecondaryText: s,
  imgSrc: o,
  clickSecondaryBtn: l = e,
  clickPrimaryBtn: d
}) {
  return jsx(TrackingProvider, {
    name: "help_card_widget_base",
    children: jsxs(_$$P.div, {
      className: "help_card_widget_base--modal--w6-oq",
      initial: {
        translateY: 500
      },
      animate: {
        translateY: 0
      },
      transition: {
        duration: .6,
        ease: "easeInOut",
        translateY: {
          duration: 1
        }
      },
      children: [jsxs(AutoLayout, {
        verticalAlignItems: "center",
        padding: 12,
        children: [jsx(TextWithTruncation, {
          fontWeight: "medium",
          fontSize: 13,
          children: r
        }), jsx(Spacer, {}), jsx(CloseButton, {
          onClick: e
        })]
      }), jsx(Suspense, {
        fallback: jsx("div", {
          className: cssBuilderInstance.w300.h150.colorBgSecondary.$
        }),
        children: jsx("img", {
          style: styleBuilderInstance.colorBorder.b1.colorBorder.bl0.br0.$,
          src: o,
          alt: "professional features animation"
        })
      }), jsx("div", {
        style: styleBuilderInstance.p16.pb0.$,
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          children: t
        })
      }), jsxs(AutoLayout, {
        horizontalAlignItems: "end",
        spacing: 8,
        padding: 16,
        children: [jsx(_$$V, {
          onClick: l,
          children: s
        }), jsx(_$$V, {
          variant: "primary",
          onClick: d,
          children: a
        })]
      })]
    })
  });
}
let tt = buildUploadUrl("14cf876ff6f8f44e32ebb92587d7d0b7a1c2704a");
function tr({
  shouldHide: e,
  dismissModal: t,
  maxSeenCount: r = 1 / 0,
  teamId: s,
  editorType: o
}) {
  let {
    flagNumberVal,
    incrementFlag
  } = eH(...WB);
  let c = useDispatch<AppDispatch>();
  let [u, p] = useState(e || flagNumberVal > r);
  return (useSingleEffect(() => {
    !u && r !== 1 / 0 && flagNumberVal <= r && incrementFlag();
  }), u) ? null : jsx(TrackingProvider, {
    name: "CollectiveUpsellsWidget",
    properties: {
      value: flagNumberVal
    },
    children: jsx(te, {
      dismissModal: t,
      descriptionText: getI18nString("help_widget.collective_upsells_widget.description_text"),
      headerText: getI18nString("help_widget.collective_upsells_widget.header_text"),
      ctaSecondaryText: getI18nString("help_widget.collective_upsells_widget.cta_dismiss"),
      ctaPrimaryText: getI18nString("help_widget.collective_upsells_widget.cta_see_how"),
      imgSrc: tt,
      clickPrimaryBtn: () => {
        c(showModalHandler({
          type: e4,
          data: {
            teamId: s,
            editorType: o,
            dismissModal: () => {
              t();
              c(hideModal());
            }
          }
        }));
        p(!0);
      }
    })
  });
}
function ti({
  targetKey: e,
  dismissModal: t
}) {
  return jsx(TrackingProvider, {
    name: "collective_upsells_widget_tooltip",
    children: jsx(NJ, {
      width: 302,
      topOffset: -10,
      targetKey: e,
      dismissModal: t,
      shouldNotWrapInParagraphTag: !0,
      children: jsxs(AutoLayout, {
        direction: "vertical",
        children: [jsx(TextWithTruncation, {
          fontWeight: "semi-bold",
          fontSize: 13,
          color: "onbrand",
          children: renderI18nText("help_widget.collective_upsells_widget_tooltip.header_text")
        }), jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          color: "onbrand",
          children: renderI18nText("help_widget.collective_upsells_widget_tooltip.description_text")
        })]
      })
    })
  });
}
let ta = "collective_upsell_widget_dismissed";
let ts = "collective_upsell_first_file_created";
let to = [ta, ts, ...WB, ...h4];
let tl = userFlagAtomFamily(ts);
let td = transformAtom(userFlagsAtom, e => Math.max(...[...WB, ...h4].map(t => e[t]?.updatedAt).filter(e => null != e).map(Number)));
function tc({
  dropdownOpen: e
}) {
  let [t, r] = useState(!1);
  let s = useAtomWithSubscription(tl);
  let o = useAtomWithSubscription(td);
  let l = useDispatch<AppDispatch>();
  let d = selectCurrentFile();
  let c = useAtomWithSubscription(_$$P2);
  let {
    flagNumberVal
  } = eH(...WB);
  let _ = useOverlay({
    overlay: CollectiveUpsellOverlay,
    priority: ModalPriority.SECONDARY_MODAL
  }, [s, o]);
  useSingleEffect(() => {
    _.show({
      canShow: (e, t) => {
        let r = Date.now() - 864e5 > t;
        return !!e && r;
      }
    });
  });
  useEventForwarder(_.uniqueId, "Reset Onboarding", () => {
    let e = to.reduce((e, t) => ({
      ...e,
      [t]: !1
    }), {});
    l(postUserFlag({
      ...e
    }));
  });
  let h = useCallback((e = !0) => {
    flagNumberVal <= 1 && r(e);
    _.isShowing && l(postUserFlag({
      [ta]: !0
    }));
    _.complete();
  }, [l, _, flagNumberVal]);
  if (useEffect(() => {
    e && h(!1);
  }, [e, h]), c !== iH.FALSE) ;else if (t && !_.isShowing && !e) return jsx(_$$P.div, {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0
    },
    transition: {
      delay: 2.8,
      duration: .8
    },
    onAnimationComplete: () => r(!1),
    children: jsx(ti, {
      dismissModal: () => r(!1),
      targetKey: "help-widget-zendesk"
    })
  });else if (_.isShowing) return jsx(tr, {
    shouldHide: e,
    dismissModal: h,
    maxSeenCount: 3,
    teamId: d?.teamId,
    editorType: d?.editorType
  });
  return null;
}
let tm = "styles--sectionContainer--Zr43Z";
let tg = "styles--sectionHeader--cTHBr";
let tf = "styles--sectionDetails--feuBc";
let tE = "styles--sectionDetailsSubsection--zi1ED";
let ty = "styles--chevronDown--QQUZi";
function tb() {
  return jsxs("div", {
    className: tm,
    children: [jsx("h1", {
      className: tg,
      id: "figjam-features",
      children: jsx("strong", {
        children: "FigJam features"
      })
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "30-what-are-the-tools-i-can-use-on-my-virtual-whiteboard",
          children: "What are the tools I can use on my virtual whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam offers plenty of tools to make ideation and collaboration easy and fun. Some of the most popular tools include:", " "]
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Drawing tools."
          }), " The marker, highlighter, and washi tape tools can add personality and emphasize important information on your board.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Sticky notes."
          }), " Similar to physical sticky notes, stickies on FigJam can be placed anywhere on your board, offering a quick way to jot down ideas, notes, and to-dos or give feedback to team members.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Collaboration."
          }), " FigJam offers tons of collaboration features, like comments, chats, stamps, stickers, and audio calls to keep teams engaged and connected.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "AI."
          }), " FigJam\u2019s Generate tool saves time by creating mind maps, flowcharts, and other diagrams based on the given prompt.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Templates."
          }), " FigJam has over 300 pre-made templates, from meeting notes and brainstorming to strategic planning and diagramming. These templates give you a starting point to organize ideas."]
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "31-how-does-the-select-button-work",
          children: "How does the Select button work?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["When opening a FigJam whiteboard, the cursor that pops up by default is the Select tool. The Select tool allows you to select, move, and resize any objects on your board. Simply click on the object to select it and change its properties. To select multiple objects at once, click and drag your cursor around the items you want to select. You can also select an object, then hold down the Shift key on your keyboard and click any other items you want to select.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "33-how-do-i-use-the-marker-tool",
          children: "How do I use the Marker tool?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "To use the Marker tool on your online whiteboard, click the marker icon on the bottom toolbar. Once selected, you can change the color and thickness to your liking. Use the marker to sketch wireframes, annotate designs, create doodles, or take meeting notes directly on your whiteboard."
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "34-what-are-figjams-ai-online-whiteboard-features",
          children: "What are FigJam\u2019s AI online whiteboard features?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Leverage the power of AI to help speed up and enhance your workflow with FigJam\u2019s", " ", jsx(Link, {
          href: "https://www.figma.com/ai/",
          children: "AI tools"
        }), "\u2014available on any team plan.", " "]
      }), jsx("p", {
        children: "Here are some ways to use FigJam\u2019s AI features on your online whiteboard."
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Generate boards and diagrams."
          }), " Save time preparing meeting agendas or building diagrams with FigJam\u2019s Generate tool. Click the Generate button on the top right navigation bar, then type your prompt or use the prompt suggestions provided to create customized boards and diagrams.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Organize and summarize stickies."
          }), " Sticky notes can get messy during long brainstorms and design retrospectives. To keep your team\u2019s notes organized and ensure action items are met, FigJam AI can sort your stickies by theme and give you a detailed summary of your notes.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Ideate with Jambot."
          }), " Jambot is a", " ", jsx(Link, {
            href: "https://www.figma.com/community/widget/1274481464484630971",
            children: "FigJam widget"
          }), " ", "you can use to quickly brainstorm ideas, summarize meeting notes, create diagrams, reformat text, generate code, and more based on the prompt you provide."]
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "35-how-do-sticky-notes-work",
          children: "How do sticky notes work?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Similar to physical sticky notes, stickies in FigJam are useful for any quick notes, to-do lists, and other thoughts you\u2019d like to add to your board.", " "]
      }), jsxs("p", {
        children: ["Click the stack of stickies in the bottom toolbar or press S on your keyboard to add a sticky note to your board. Hover the sticky preview over the area you\u2019d like to stick your note, then click to drop the sticky.", " "]
      }), jsxs("p", {
        children: ["Click the sticky note to adjust the font size, style, and formatting, and adjust the size of the sticky by dragging any of the corners. To edit a sticky note\u2019s color, select the sticky, then choose a color in the bottom toolbar. Sticky notes automatically include your name at the bottom, making it easier to view and sort notes during group meetings.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "36-how-can-i-use-the-sticky-notes-feature-on-my-online-whiteboard",
          children: "How can I use the sticky notes feature on my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To use the sticky notes feature, click the stack of stickies in the bottom toolbar, then click the area you want to drop the sticky. Use the popup toolbar to edit the color, font, text size, and other text formatting on your sticky note.", " "]
      }), jsxs("p", {
        children: ["Sticky notes are great for jotting down quick notes during meetings, leaving feedback on brainstorming ideas, or creating to-do lists to keep you and your team organized.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "37-which-shapes-are-available-in-figjams-online-whiteboard",
          children: "Which shapes are available in FigJam\u2019s online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Shapes are useful for building diagrams, user journeys, site maps, or flowcharts on your online whiteboard. Anyone with editing access can add the following default shapes to their board:", " "]
      }), jsxs("ul", {
        children: [jsx("li", {
          children: "Square "
        }), jsx("li", {
          children: "Eclipse "
        }), jsx("li", {
          children: "Diamond "
        }), jsx("li", {
          children: "Triangle "
        }), jsx("li", {
          children: "Downward-pointing triangle "
        }), jsx("li", {
          children: "Rounded rectangle "
        }), jsx("li", {
          children: "Chevron "
        }), jsx("li", {
          children: "Mind map "
        }), jsx("li", {
          children: "Predefined process "
        }), jsx("li", {
          children: "Document "
        }), jsx("li", {
          children: "Multiple documents "
        }), jsx("li", {
          children: "Manual input "
        }), jsx("li", {
          children: "Hexagon "
        }), jsx("li", {
          children: "Right-leaning parallelogram "
        }), jsx("li", {
          children: "Left-leaning parallelogram "
        }), jsx("li", {
          children: "Cylinder "
        }), jsx("li", {
          children: "Horizontal cylinder "
        }), jsx("li", {
          children: "Internal storage "
        }), jsx("li", {
          children: "Trapezoid "
        }), jsx("li", {
          children: "Summing junction "
        }), jsx("li", {
          children: "Shield "
        }), jsx("li", {
          children: "Or "
        }), jsx("li", {
          children: "Folder "
        }), jsx("li", {
          children: "File "
        }), jsx("li", {
          children: "Pentagon "
        }), jsx("li", {
          children: "Octagon "
        }), jsx("li", {
          children: "Plus "
        }), jsx("li", {
          children: "Left arrow "
        }), jsx("li", {
          children: "Right arrow "
        }), jsx("li", {
          children: "Star speech bubble"
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "38-i-need-extra-tools-and-features-for-my-work-how-can-i-access-more-functionalities",
          children: "I need extra tools and features for my work. How can I access more functionalities?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam offers additional tools and functionalities to streamline your workflow, including:", " "]
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Plugins and widgets."
          }), " Find the", " ", jsx(Link, {
            href: "https://www.figma.com/community/design-tools?resource_type=plugins",
            children: "plugin"
          }), " ", "or", " ", jsx(Link, {
            href: "https://www.figma.com/community/whiteboarding?resource_type=widgets",
            children: "widget"
          }), " ", "you need to make your FigJam experience more enjoyable and efficient. For example, the", " ", jsx(Link, {
            href: "https://www.figma.com/community/widget/1274481464484630971",
            children: "Jambot widget"
          }), " ", "leverages AI technology to help you brainstorm creative ideas, gather more information on a topic, write code, summarize content, and more.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Integrations."
          }), " FigJam integrates with various project management, design, and development tools like", " ", jsx(Link, {
            href: "https://www.figma.com/asana-for-figma/",
            children: "Asana"
          }), " and", " ", jsx(Link, {
            href: "https://www.figma.com/github-for-figjam/",
            children: "GitHub"
          }), " to keep projects moving smoothly.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Community resources."
          }), " Browse the Figma Community to explore additional templates, plugins, and tools to use with FigJam\u2019s online whiteboard, like personalizing team boards with", " ", jsx(Link, {
            href: "https://www.figma.com/community/widget/1151936790942917527/Bitmoji",
            children: "Bitmojis."
          })]
        })]
      })]
    })]
  });
}
function tT() {
  return jsxs("div", {
    className: tm,
    children: [jsx("h1", {
      className: tg,
      id: "managing-your-online-whiteboard",
      children: jsx("strong", {
        children: "Managing your online whiteboard"
      })
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "40-how-do-i-save-my-board",
          children: "How do I save my board?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Since FigJam is an online tool, your whiteboards will automatically save under your Files in your Figma account\u2014no need to worry about saving your board after making any updates and changes. You can view any of your whiteboards under the Recents or Drafts tab of your Figma files for easy access.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "41-how-do-i-delete-my-online-whiteboard",
          children: "How do I delete my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To delete your online whiteboard, click the Figma logo on the top left menu bar, then click Back to files. From there, you should see your whiteboards under the Drafts tab. Right-click the whiteboard you want to delete, then hit Delete file. If you have edit access, you can restore any deleted files from the Deleted section of the Drafts tab.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "42-how-can-i-delete-the-content-i-created-on-my-online-whiteboard",
          children: "How can I delete the content I created on my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To delete any content or objects from your online whiteboard, select the item you want to delete, then right-click and hit Delete or use the Delete button on your keyboard. To delete an entire board, go to your Figma files, navigate to the Drafts tab, right-click the whiteboard you want to delete, and then hit Delete.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "44-can-i-access-the-virtual-whiteboard-again-at-a-later-point",
          children: "Can I access the virtual whiteboard again at a later point?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Your virtual whiteboard is saved and ready for you to access at any time. When looking for a board, go to your Figma files, and look for your board under the Drafts tab. You can also type the board name into the search bar to find the board you\u2019re looking for.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "45-how-can-i-create-an-identical-copy-of-my-online-whiteboard",
          children: "How can I create an identical copy of my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To duplicate and make a copy of your whiteboard, navigate to the menu bar in the top left corner. Click the dropdown arrow next to the whiteboard title, then click Duplicate. This will make a duplicate copy of your board and automatically save it to your drafts.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "46-how-do-i-share-an-online-whiteboard",
          children: "How do I share an online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["The easiest way to share your online whiteboard is to send collaborators a share link. Click the Share button at the top right corner of your whiteboard, then select the Copy button. You can also invite additional collaborators via email, which you\u2019ll find via the same Share button.", " "]
      }), jsxs("p", {
        children: ["If you\u2019d like to allow collaborators to edit your whiteboard, update the permission settings to \u201CCan edit.\u201D This allows other team members to move, edit, and add objects to the board while giving them access to other FigJam collaboration features like running voting sessions or starting timers.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "48-how-do-i-export-my-online-whiteboards",
          children: "How do I export my online whiteboards?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To export your online whiteboards, click the Figma icon on the menu bar in the top left corner, then navigate to File and click Export as. From there, you\u2019ll have the option to export your board as a PNG, JPG, PDF, or CSV. You can also choose a solid, grid, or transparent background when exporting the file, but options may differ depending on the file type.", " "]
      }), jsxs("p", {
        children: ["If you only want to export a portion of your board, select the items you want to export, then right-click and choose Export selection.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "49-can-other-users-export-my-online-whiteboards",
          children: "Can other users export my online whiteboards?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Other users can export your online whiteboards if they have editing access. To check your access permissions, click the Share button in the top right corner of your whiteboard and change the edit toggle on for any team member you\u2019d like to grant editing access.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "50-how-can-other-people-collaborate-on-the-whiteboard",
          children: "How can other people collaborate on the whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam\u2019s online whiteboard offers tons of collaboration features to get your whole team involved. Some collaboration features to explore include:", " "]
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Comments, mentions, and chat."
          }), " Use the comment feature to ask questions or provide feedback anywhere on the board. Use the @ symbol to tag other collaborators and type a message in the selected field. You can also add media to a comment by dragging and dropping a file or clicking the image icon.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Stamps, emotes, and high-fives."
          }), " Offer visual feedback to team members with these features. Click anywhere on the board and use the stamp tool to leave a sticker of your choice, or select the emote tool to leave temporary emoji reactions.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Cursor chat."
          }), " This feature is great for quick communication, allowing you to leave live, temporary messages to other collaborators. When cursor chat is on, your chat bubble will appear next to your cursor and team members can see your message as you\u2019re typing.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Audio call."
          }), " FigJam\u2019s audio feature is great for quick conversations and casual chats during meetings. Click the headphone icon next to your profile avatar, then click Start Conversation. Any collaborators with access to the board can join live conversations by clicking the same icon.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Spotlight."
          }), " This feature allows any collaborators to see your view of the board, which is helpful when running quick audio calls for meetings and workshops. Hover over your avatar, then click Spotlight Me, and an invitation will be sent to any collaborator viewing the file."]
        })]
      }), jsxs("p", {
        children: ["Collaborators with view access can use most of these collaboration features, but if you\u2019d like to give anyone the ability to move, add, or edit objects on the whiteboard or have access to Community resources like stickers and libraries, make sure your users\u2019 access is set to \u201CCan edit.\u201D", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "51-can-other-users-draw-on-and-edit-the-contents-of-the-online-whiteboard",
          children: "Can other users draw on and edit the contents of the online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Yes! Anyone with editing access can use FigJam\u2019s drawing tools and edit, move, or change the order of objects on the whiteboard. Collaborators can also use features like stamps and emotes to leave visual feedback and reactions to content on the whiteboard.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "52-can-others-edit-my-virtual-whiteboard",
          children: "Can others edit my virtual whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Yes! If you\u2019d like to invite other collaborators to edit your online whiteboard, send them a share link or invite them via email. Check your permission settings and make sure collaborators have \u201CCan edit\u201D access, allowing them to edit, move, and rearrange any objects on your board.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [" ", jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "53-how-can-others-view-my-figjam-online-whiteboard",
          children: "How can others view my FigJam online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Share your online whiteboard by sending other people a share link or inviting them via email. Make sure the \u201CCan view\u201D settings are turned on, which also gives viewers access to FigJam\u2019s collaboration features while viewing your board, like adding comments, mentions, or emotes.", " "]
      })]
    })]
  });
}
function tI() {
  return jsxs("div", {
    className: tm,
    children: [jsx("h1", {
      className: tg,
      id: "online-whiteboard-templates",
      children: jsx("strong", {
        children: "Online whiteboard templates"
      })
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "54-does-the-online-diagram-tool-offer-ready-made-templates",
          children: "Does the online diagram tool offer ready-made templates?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam offers tons of pre-made", " ", jsx(Link, {
          href: "https://www.figma.com/templates/diagramming/",
          children: "diagramming templates"
        }), " ", "that are easy to edit and customize to fit your needs. Browse Figma\u2019s template library to find the one you need or open a diagram template on your whiteboard by clicking the Template button in the top right menu bar.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "55-how-can-i-find-online-whiteboard-templates",
          children: "How can I find online whiteboard templates?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To access a template from your whiteboard, click the Plus button at the bottom right of your toolbar. Then, navigate to the templates section to find the template you\u2019re looking for. You can also select the template icon located on the top right menu bar. If you\u2019d like to add a template to a section, click the template icon next to the section title, then browse different templates for team meetings, brainstorms, and more.", " "]
      }), jsxs("p", {
        children: ["You can also visit the", " ", jsx(Link, {
          href: "https://www.figma.com/templates/",
          children: "template library"
        }), " to explore over 300 free templates. Once you\u2019ve found the one you need, click the Start Diagramming or Get Started button to open the template directly in FigJam.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "56-how-do-i-use-a-ready-made-template-on-my-online-whiteboard",
          children: "How do I use a ready-made template on my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To use a pre-made template, click the Plus icon on the bottom toolbar and navigate to the Templates tab to search for or find templates organized by category. You can also click the template icon in the top right corner to quickly browse through ready-made template options.", " "]
      }), jsxs("p", {
        children: ["Explore Figma\u2019s online", " ", jsx(Link, {
          href: "https://www.figma.com/templates/",
          children: "template library"
        }), " to view all of the free templates, from brainstorming and strategic planning to diagramming and meeting planning.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "57-what-are-some-popular-online-whiteboard-templates",
          children: "What are some popular online whiteboard templates?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "You can kickstart your ideas with hundreds of free online whiteboard templates. Some of the most popular ones include:"
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/project-kickoff-template/",
            children: "Project kickoff template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/flow-chart-template/",
            children: "Flowchart template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/team-meeting-agenda-template/",
            children: "Team meeting template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/customer-journey-map/",
            children: "Customer journey map template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/daily-stand-up-meeting-template/",
            children: "Standup template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/project-retrospective-template/",
            children: "Retrospective template"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://www.figma.com/templates/agile-roadmap-template/",
            children: "Roadmap review template"
          }), " "]
        }), jsx("li", {
          children: jsx(Link, {
            href: "https://www.figma.com/templates/timeline-template/",
            children: "Project timeline template"
          })
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "58-how-can-i-copy-a-flowchart-on-figjams-online-whiteboard",
          children: "How can I copy a flowchart on FigJam\u2019s online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To copy a FigJam flowchart, drag your cursor around the entire flowchart, right-click, and then hit Group selection or Command + G on your keyboard. This will ensure your entire flowchart is grouped, making it easier to copy. Once you\u2019ve made your selection, click the flowchart and hit Command + C on your keyboard or right-click and hit Copy.", " "]
      }), jsxs("p", {
        children: ["If you want to copy individual objects or symbols on your flowchart, click the item you want to copy and hit Command + C on your keyboard, or right-click and hit Copy.", " "]
      }), jsxs("p", {
        children: ["You can also make a copy of your flowchart for others to use by adding it to the", " ", jsx(Link, {
          href: "https://www.figma.com/community/",
          children: "Figma Community"
        }), ". To do this, click the Share button in the top right corner of your board, then click Publish to Community. You must have \u201CCan edit\u201D access to publish the file to the Community.", " "]
      }), jsxs("p", {
        children: [jsx(Link, {
          href: "https://help.figma.com/hc/articles/360040035974-Publish-files-to-the-Community",
          children: "Learn more about how to publish files to the Figma Community"
        }), ".", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "59-can-i-create-a-flowchart-with-specific-symbols-on-my-online-whiteboard",
          children: "Can I create a flowchart with specific symbols on my online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Absolutely! Flowchart symbols are shapes, lines, and arrows that represent actions or processes on your flowchart diagram. For example, a diamond shape symbolizes points where decisions are made, rectangles signify a specific action or step needed to carry out a process, and parallelograms show where users input or output data.", " "]
      }), jsxs("p", {
        children: ["FigJam\u2019s online whiteboard has over 20 shapes and symbols you can use to build a flowchart that maps user flows, systems, and processes. Read FigJam\u2019s", " ", jsx(Link, {
          href: "https://www.figma.com/resource-library/flowchart-symbols/",
          children: "flowchart symbol guide"
        }), " ", "to learn more about what each symbol means and how to effectively use them.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "60-do-i-have-to-start-my-work-with-the-ready-made-online-flowchart",
          children: "Do I have to start my work with the ready-made online flowchart?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["You can start your flowchart with ready-made templates or start from scratch and build your own using shapes, lines, and connectors on the FigJam whiteboard. You can also use FigJam\u2019s Generate tool, which uses the power of AI to create a customized flowchart based on the prompt you input.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "61-can-i-add-sticky-notes-to-my-flowchart-board",
          children: "Can I add sticky notes to my flowchart board?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["You can add sticky notes anywhere on your board when building a flowchart. Press S on your keyboard or click the stack of stickies on the bottom toolbar, then click the area of your flowchart where you\u2019d like to drop the sticky.", " "]
      }), jsxs("p", {
        children: ["You can also add connectors between sticky notes to visualize flows and create paths. Click the connector icon on the toolbar, or hit Shift + C to create an elbow connector or L for a straight line. Then, click and drag your cursor between the stickies you want to connect.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "62-can-i-add-text-to-my-flowchart",
          children: "Can I add text to my flowchart?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Shapes already come with the option to add text, making it easy to add text and labels when", " ", jsx(Link, {
          href: "https://www.figma.com/resource-library/how-to-create-a-flow-chart/",
          children: "building your flowchart"
        }), ". When resizing a shape, use the text option in the toolbar to adjust the text or make any other formatting changes to enhance readability.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "63-can-i-undoredo-something-on-my-flowchart",
          children: "Can I undo/redo something on my flowchart?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Of course! To undo something on your flowchart, hit Command + Z on your keyboard. Or, navigate to the main menu in the upper left corner, click the Figma symbol, edit, and select undo. If you want to delete an object on your flowchart, hit the Delete button on your keyboard or right-click the flowchart object and hit Delete.", " "]
      }), jsxs("p", {
        children: ["To redo something, click Shift + Command + Z on your keyboard or select edit, then redo on the main menu.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "64-how-do-i-connect-shapes-and-symbols-on-my-flowchart-online",
          children: "How do I connect shapes and symbols on my flowchart online?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Use lines and connectors located on the bottom toolbar to connect shapes and symbols on your flowchart. Lines automatically snap onto the shapes and stickies you select, allowing you to move the object around the board without disrupting the connector.", " "]
      }), jsxs("p", {
        children: ["To speed up the flowchart process, use", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/1500004291601-Build-faster-with-quick-create-in-FigJam#Quick_create_shapes",
          children: "quick create"
        }), " ", "to automatically connect shapes as you\u2019re creating them.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "65-what-is-the-meaning-of-the-flowchart-symbols",
          children: "What is the meaning of the flowchart symbols?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Flowchart symbols visually represent each step, action, or order in a process. Every symbol has a different meaning, making it easier for teams to understand and analyze processes.", " "]
      }), jsx("p", {
        children: "The most common flowchart symbols are: "
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Decision:"
          }), " a diamond shape to represent any point where a decision is made", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Action:"
          }), " a rectangle shape to symbolize any step or action in a process", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Terminator:"
          }), " an oval symbol marking the first and last step in a process", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Input/output:"
          }), " a parallelogram to show when data enters or leaves", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Directional flow:"
          }), " arrows and lines representing the directional path between steps or actions"]
        })]
      }), jsxs("p", {
        children: ["FigJam\u2019s online whiteboard tool comes with all the shapes, symbols, and connectors you need to build even the most complex flowcharts.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "66-what-flowchart-symbols-are-available",
          children: "What flowchart symbols are available?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "Some of the available flowchart symbols FigJam offers include: "
      }), jsxs("ul", {
        children: [jsx("li", {
          children: "Predefined process "
        }), jsx("li", {
          children: "Document "
        }), jsx("li", {
          children: "Multiple documents "
        }), jsx("li", {
          children: "Manual input "
        }), jsx("li", {
          children: "Hexagon "
        }), jsx("li", {
          children: "Right-leaning parallelogram "
        }), jsx("li", {
          children: "Left-leaning parallelogram "
        }), jsx("li", {
          children: "Cylinder "
        }), jsx("li", {
          children: "Horizontal cylinder "
        }), jsx("li", {
          children: "Internal storage "
        }), jsx("li", {
          children: "Trapezoid "
        }), jsx("li", {
          children: "Summing junction "
        }), jsx("li", {
          children: "Or "
        }), jsx("li", {
          children: "Shield "
        }), jsx("li", {
          children: "Folder "
        }), jsx("li", {
          children: "File"
        })]
      }), jsxs("p", {
        children: ["To explore the flowchart symbols FigJam offers, click the shapes on the bottom toolbar, then click Flowchart on the dropdown menu.", " "]
      }), jsxs("p", {
        children: [jsx(Link, {
          href: "https://help.figma.com/hc/articles/1500004414382-Visualize-information-using-shapes-with-text",
          children: "Learn more about visualizing information and building flowcharts with shapes"
        }), ".", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "67-how-can-i-access-additional-flowcharting-features",
          children: "How can I access additional flowcharting features?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Aside from building using pre-made flowchart templates or building your own flowchart with shapes and symbols, FigJam\u2019s AI feature allows you to generate customized flowcharts in seconds.", " "]
      }), jsxs("p", {
        children: ["In the top toolbar, click Generate, then choose Flowchart and add a prompt to specify any unique symbols or features you\u2019d like to add to your diagram. The more specific, the better. Once you\u2019ve nailed your prompt, hit the Generate button and watch the magic happen.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "68-will-i-know-who-made-changes-to-my-online-flowchart",
          children: "Will I know who made changes to my online flowchart?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To see who\u2019s made changes to your online flowchart, click File, then View version history in the upper left corner of your board. From there, you can see who\u2019s made changes to the flowchart and when.", " "]
      }), jsxs("p", {
        children: ["To revert any changes and restore a version of your flowchart, click the three dots next to the autosaved version, then hit Restore this version. You can also name each version to make it easier to track any changes made.", " "]
      })]
    })]
  });
}
function tS() {
  return jsxs("div", {
    className: tm,
    children: [jsx("h1", {
      className: tg,
      id: "using-your-online-whiteboard",
      children: jsx("strong", {
        children: "Using your online whiteboard"
      })
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "1-what-is-an-online-whiteboard",
          children: "What is an online whiteboard?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "An online whiteboard is a visual collaboration tool for teams that recreates the feeling of working together in person."
      }), jsx("p", {
        children: "Unlike digital documents or slides, online whiteboards provide teams space to think outside the constraints of margins and text boxes. Plus, you can express yourself and interact with teammates live on the board, making conversations more human, dynamic, and productive."
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "2-what-is-figjam",
          children: "What is FigJam?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam is an online whiteboard tool that offers an easy way for individuals, teams, and organizations to collaborate on projects like brainstorming, project planning, design, and meetings. With its easy-to-use collaboration features, FigJam encourages users to contribute, offer feedback, and engage with team members in real time.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "3-is-figjams-online-whiteboard-tool-free",
          children: "Is FigJam's online whiteboard tool free?"
        }), " ", jsx(_$$k3, {
          className: ty
        }), " "]
      }), jsxs("p", {
        children: ["FigJam is an online whiteboard that can be used for free forever with unlimited collaborators in three editable files. Paid plans start at just $5 per user per month, less than a third of the cost of Miro and Mural.", " ", jsx(Link, {
          href: "https://www.figma.com/figjam-vs-miro/",
          children: "Compare FigJam to Miro"
        }), "."]
      }), jsxs("p", {
        children: ["To learn more about FigJam plans, visit the", " ", jsx(Link, {
          href: "https://www.figma.com/pricing/#figjam",
          children: "pricing page"
        }), ".", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "4-are-online-whiteboards-only-for-brainstorming",
          children: "Are online whiteboards only for brainstorming?"
        }), jsx(_$$k3, {
          className: ty
        }), " "]
      }), jsxs("p", {
        children: ["Collaborative online whiteboards like FigJam make all types of activities more inclusive, productive, and fun, including", " ", jsx(Link, {
          href: "https://www.figma.com/figjam/diagramming-tool/",
          children: "diagramming"
        }), ", journey mapping,", " ", jsx(Link, {
          href: "https://www.figma.com/figjam/strategic-planning/",
          children: "strategic planning"
        }), ",", " ", jsx(Link, {
          href: "https://www.figma.com/figjam/agile-workflows/",
          children: "agile workflows"
        }), ", and facilitating ", jsx(Link, {
          href: "https://www.figma.com/figjam/team-meetings/",
          children: "team meetings"
        }), " ", "and workshops."]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "5-can-i-make-online-presentations-with-figjam",
          children: "Can I make online presentations with FigJam?"
        }), jsx(_$$k3, {
          className: ty
        }), " "]
      }), jsxs("p", {
        children: ["While FigJam isn't a traditional presentation tool, its interactive features make it a great tool for presenting ideas and engaging in conversations with teams. Whether you're holding a design retrospective or brainstorming session, you can invite team members to view and follow your board using the Spotlight and audio call feature.", " "]
      }), jsxs("p", {
        children: [jsx(Link, {
          href: "https://www.figma.com/slides/",
          children: "Learn more about creating presentations with Figma Slides"
        }), ".", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "6-can-i-use-the-online-whiteboard-to-take-meeting-notes",
          children: "Can I use the online whiteboard to take meeting notes?"
        }), jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Yes. Use sticky notes, shapes, or text boxes to add your thoughts. Format your text using a bulleted or numbered list, then use the marker or highlighter to draw attention to important information.", " "]
      }), jsxs("p", {
        children: ["FigJam's", " ", jsx(Link, {
          href: "https://www.figma.com/templates/meeting-notes-template/",
          children: "meeting notes template"
        }), " ", "is a great starting point for jotting down important takeaways and organizing your notes.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "7-can-i-use-the-online-whiteboard-for-personal-projects",
          children: "Can I use the online whiteboard for personal projects?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Yes! FigJam is a free tool to use for personal, professional, or educational projects. Since the online whiteboard is so versatile, it's easy to use for various personal projects or tasks like organizing weekly tasks, studying for exams, setting goals, or journaling your thoughts.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "8-can-i-use-figjam-digital-whiteboards-with-conferencing-platforms",
          children: "Can I use FigJam digital whiteboards with conferencing platforms?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam integrates with many popular conferencing platforms to make it easy to present your whiteboard without leaving your conferencing tool. Learn more about how to integrate FigJam with the following platforms:", " "]
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx(Link, {
            href: "https://help.figma.com/hc/articles/17720082601751-Figma-and-Zoom",
            children: "FigJam and Zoom"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://help.figma.com/hc/articles/16921722048151-Figma-and-Google-Meet",
            children: "FigJam and Google Meet"
          }), " "]
        }), jsxs("li", {
          children: [jsx(Link, {
            href: "https://help.figma.com/hc/articles/7405452518423-Figma-and-Microsoft-Teams",
            children: "FigJam and Microsoft Teams"
          }), " "]
        }), jsx("li", {
          children: jsx(Link, {
            href: "https://help.figma.com/hc/articles/1500002613622-P2-and-Figma",
            children: "FigJam and P2"
          })
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "9-what-is-the-difference-between-figjam-and-miro",
          children: "What is the difference between FigJam and Miro?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "FigJam and Miro are both online whiteboards, but they have a few distinct differences."
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Price."
          }), " Both tools offer free plans, but FigJam's paid plan is $5 per user per month, while Miro's starts at $8 per user per month."]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Features."
          }), " Miro offers customizable features, while FigJam has fun and user-friendly features like stickers, emotes, high-fives, and cursor chat to cater to all user levels.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Integrations."
          }), " FigJam is the only online collaboration tool that connects to Figma and other tools product and design teams count on to streamline workflows."]
        })]
      }), jsx("p", {
        children: jsx(Link, {
          href: "https://www.figma.com/figjam-vs-miro/",
          children: "Learn more about the difference between FigJam and Miro."
        })
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "10-how-can-i-learn-more-about-figjam",
          children: "How can I learn more about FigJam?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: [jsx(Link, {
          href: "https://help.figma.com/hc/en-us",
          children: "Figma's Learn Center"
        }), " is a great place to learn more about FigJam's features, use cases, and best practices. Or, open a blank whiteboard to play around with the different features FigJam has to offer."]
      }), jsxs("p", {
        children: ["Explore", " ", jsx(Link, {
          href: "https://www.figma.com/resource-library/",
          children: "Figma's Resource Library"
        }), " for tips and tricks on how FigJam can help with brainstorming, strategic planning, diagramming, and more."]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "11-which-online-whiteboard-is-best-suited-for-teaching",
          children: "Which online whiteboard is best suited for teaching?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam is the best online whiteboard to enhance teaching and learning experiences in the classroom. Its user-friendly interface and fun features make it easy to navigate for all education levels. The shared workspace allows students to participate in discussions, contribute ideas, and offer feedback to their classmates.", " "]
      }), jsxs("p", {
        children: ["The drawing and shape tools enhance visual learning by offering an easy way to build diagrams, flowcharts, and drawings, making understanding complex topics simple. Since FigJam is an online whiteboard, it's great for remote and virtual learning environments since students can participate from anywhere.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "12-how-do-i-teach-with-an-online-whiteboard",
          children: "How do I teach with an online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Teachers from K\u201312 to higher education love using FigJam to facilitate collaborative classroom discussions, brainstorms, and group work.", " ", jsx(Link, {
          href: "https://www.figma.com/education/",
          children: "FigJam's open sessions are available on education plans, allowing you to temporarily invite people to interact with your board even if they don't have a Figma account. This is great for educators looking to host small workshops or feedback sessions with their students."
        }), " "]
      }), jsxs("p", {
        children: [jsx(Link, {
          href: "https://www.figma.com/education/",
          children: "Learn more about using FigJam for education"
        }), "."]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "13-how-do-i-draw-with-an-online-whiteboard",
          children: "How do I draw with an online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "Online whiteboards are great for doodling, sketching ideas and wireframes, and taking visual notes. Use FigJam's marker tool on desktop or, for more polished drawing, with the Apple Pencil in the free FigJam iPad app."
      }), jsxs("p", {
        children: ["If working between devices, copy and paste drawings from your iPad to your computer and vice versa. Once you've copied your selection, select paste from the notification banner on the other device.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "14-how-can-i-add-a-section-to-my-online-whiteboard",
          children: "How can I add a section to my online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "Sections are a great way to organize and group related objects together on your online whiteboard. To add a section to your board, click the section icon on the bottom toolbar or use the shortcut Shift + S on your keyboard. To keep things organized, rename your section in the box at the top left corner."
      }), jsxs("p", {
        children: ["If you want to select multiple objects and group them into a section, click and drag your cursor over the objects, then right-click your selection and hit Create section.", " "]
      }), jsxs("p", {
        children: ["If you want to hide a section without removing it from your board, select the section, then click the eye icon to hide the content. Click the same icon to reveal the content once ready. If you need to delete the section altogether, simply select the section and hit the Delete or backspace button on your keyboard.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "15-what-are-the-text-options-for-my-online-whiteboard",
          children: "What are the text options for my online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "Whether creating a text box or editing text on an object, sticky note, or shape, a text toolbar will appear, allowing you to change the text properties. On the toolbar, you can update the following properties:"
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Typeface."
          }), " Simple, bookish, technical, and scribbled are the four types of FigJam fonts you can choose to match the style of your board.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Text size."
          }), " Choose between the small, medium, large, extra large, or huge preset text sizes, or customize your font size by inputting a specific point size.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Bold and strikethrough."
          }), " You can apply the bold property to help text stand out or the strikethrough property to cross off tasks or ideas during meetings or brainstorming sessions.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Lists."
          }), " Create bulleted lists or numbered lists to organize to-do lists, notes, or instructions on your board.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Text color."
          }), " Make text pop by changing the font color to any of the color options in the dropdown on the toolbar.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Alignment."
          }), " Align text to the left, right, or center using the alignment option in the text toolbar.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Links."
          }), " Add clickable links to other FigJam boards, documents, Figma files, or websites by highlighting the text and pressing the Link button on the toolbar.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Markdown."
          }), " Easily format any text using Markdown syntax. Learn more about the Markdown syntax FigJam supports", " ", jsx(Link, {
            href: "https://help.figma.com/hc/articles/1500004291281-Create-text-and-links-in-FigJam#h_01HAQ9NYM8AYGY1W88Q4W58ST2",
            children: "here"
          }), "."]
        })]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "16-how-do-connection-lines-work-on-my-online-whiteboards",
          children: "How do connection lines work on my online whiteboards?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Connectors and lines in FigJam let you create paths and signify relationships between board items, outline steps, or organize information. They're great for building out flowcharts, mind maps, user flows, and other diagrams.", " "]
      }), jsx("p", {
        children: "There are two types of lines you can use in FigJam: "
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Elbowed connectors."
          }), " These connectors can wrap around other objects to create an indirect path to other objects on the board.", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Straight lines."
          }), " These create a straight path or line from one object to another. They can also be used to create simple arrows on your whiteboard."]
        })]
      }), jsxs("p", {
        children: ["To add lines to your whiteboard, click the shapes on your bottom toolbar, then click Connector or Straight line. To connect objects or shapes on your board, click and drag your cursor between the objects you want to connect.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "17-can-i-rotate-or-resize-an-uploaded-file",
          children: "Can I rotate or resize an uploaded file?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["Rotating and resizing uploaded image files on your whiteboard is simple. To resize an image, click and drag the bounding box around the image to get it to your desired proportions. To rotate the image, click the file, then hit the Crop image button that's located on the popup toolbar. From there, you can rotate the image or change its aspect ratio.", " "]
      }), jsxs("p", {
        children: ["You can also bring Figma designs into FigJam with the ability to move, flip, rotate, or rearrange the objects on your board.", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/1500005916661-Work-between-Figma-and-FigJam",
          children: "Learn more about working between Figma and FigJam"
        }), ".", " "]
      }), jsxs("p", {
        children: ["Adding images and design files to your FigJam whiteboard can make it easy to check in on design progress during team meetings or add personalization to mood boards, team chats, and brainstorming sessions.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "18-do-the-online-whiteboards-have-undoredo-functionality",
          children: "Do the online whiteboards have undo/redo functionality?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["FigJam's online whiteboard has both undo and redo functionalities, making it quick and easy to reverse or repeat actions.", " "]
      }), jsxs("p", {
        children: ["To undo an action, use the Command + Z shortcut on your keyboard or click Edit, then Undo on the top left menu bar. To redo actions, hit Command + Shift + Z on your keyboard, or select Edit then Redo in the menu bar.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "20-how-can-i-add-text-to-my-whiteboard",
          children: "How can I add text to my whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To add text to your whiteboard, click the Text button on the bottom toolbar, then select the area where you'd like to add the text box. Once selected, a toolbar will appear, allowing you to adjust the text size, font, color, and more.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "22-how-can-i-copy-objects-on-my-online-whiteboard",
          children: "How can I copy objects on my online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To copy objects on your whiteboard, select the object you want to copy, then press Command + C on your keyboard or right-click the object and hit Copy. You can also copy layers and objects from Figma files using the same instructions. Once you've copied the item from your Figma file, open your FigJam file and paste the copied selection into your whiteboard.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "23-how-can-i-give-a-title-to-my-figjam-virtual-whiteboard",
          children: "How can I give a title to my FigJam virtual whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["By default, your board will be named \u201CUntitled.\u201D To edit this, go to the upper left corner, then double-click the board title and rename it. You can also rename your board by navigating to the Drafts tab of your Figma files, right-clicking the board, and then hitting Rename.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "24-how-do-i-change-the-name-of-my-online-whiteboard",
          children: "How do I change the name of my online whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsxs("p", {
        children: ["To change the name of your online whiteboard, double-click the title on the menu bar in the upper left corner, then rename your board. You can also right-click the draft under your files and select Rename to update your board's name.", " "]
      })]
    }), jsxs("details", {
      className: tf,
      children: [jsxs("summary", {
        children: [jsx("span", {
          className: tE,
          id: "25-what-kind-of-files-can-be-uploaded-on-figjams-whiteboard",
          children: "What kind of files can be uploaded on FigJam's whiteboard?"
        }), " ", jsx(_$$k3, {
          className: ty
        })]
      }), jsx("p", {
        children: "FigJam supports the following import file types:"
      }), jsxs("ul", {
        children: [jsxs("li", {
          children: [jsx("strong", {
            children: "Image formats:"
          }), " PNG, JPEG, HEIC, TIFF, and WEBP", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "GIFs:"
          }), " can be imported but won't be animated", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Video formats:"
          }), " .mp4, .mov, or .webm", " "]
        }), jsxs("li", {
          children: [jsx("strong", {
            children: "Spreadsheets:"
          }), " can be imported using CSV data"]
        })]
      }), jsxs("p", {
        children: ["You can also import content and documents from", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/24196705785111-Import-Mural-content-to-FigJam",
          children: "Mural"
        }), ",", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/24170628689047-Import-Lucid-documents-to-FigJam",
          children: "Lucid"
        }), ",", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/6227676527255-Import-Miro-boards-to-FigJam",
          children: "Miro"
        }), ", and", " ", jsx(Link, {
          href: "https://help.figma.com/hc/articles/17028583915159-Migrate-Google-Jamboards-to-FigJam",
          children: "Google Jamboards"
        }), ".", " "]
      }), jsxs("p", {
        children: ["How can I draw a diagram in an online whiteboard?", jsx("br", {}), "You can use FigJam's marker tool to draw shapes, symbols, and arrows in a diagram. Located in the bottom toolbar, the marker tool comes in thin and thick stroke weights with the option to change the color at any time. When building your diagram, hold the Shift key on your keyboard to add straight lines.", " "]
      }), jsx("p", {
        children: "To resize diagram drawings, drag your cursor around your section, then drag the side or corner to achieve your desired proportions. To erase any mistakes, use the eraser tool in the bottom toolbar."
      })]
    })]
  });
}
function tC({
  text: e,
  svg: t,
  handleClick: r
}) {
  return jsx("li", {
    className: "figjam_try_faq_modal--listItem--Dg3ED",
    children: jsx("div", {
      className: "figjam_try_faq_modal--topLevelSectionContainer--JeZYY",
      children: jsxs("button", {
        className: "figjam_try_faq_modal--topLevelSection--7Qwg9",
        onClick: r,
        children: [jsx(SvgComponent, {
          svg: t
        }), jsx("h2", {
          className: "figjam_try_faq_modal--subTitle--Q-kIg",
          children: e
        }), jsx(_$$e2, {})]
      })
    })
  });
}
let tw = registerModal(function () {
  let [e, t] = useState(null);
  let [r, a] = useState(!0);
  let s = useModalManager({
    open: r,
    onClose: () => a(!1)
  });
  return jsx(TrackingProvider, {
    name: "figjam_try_faq_modal",
    children: jsx(ModalRootComponent, {
      manager: s,
      width: 480,
      children: jsx(DialogContents, {
        children: jsx(DialogBody, {
          children: jsxs("div", {
            className: "figjam_try_faq_modal--menuContent--C9Ew5",
            children: [!e && jsxs(Fragment, {
              children: [jsx("h1", {
                className: "figjam_try_faq_modal--title--smR-s",
                children: getI18nString("figjam_try_faq_modal.title")
              }), jsxs("ul", {
                children: [jsx(tC, {
                  handleClick: () => t("using_your_online_whiteboard"),
                  svg: _$$A6,
                  text: getI18nString("figjam_try_faq_modal.using_your_online_whiteboard")
                }), jsx(tC, {
                  handleClick: () => t("figjam_features"),
                  svg: _$$A4,
                  text: getI18nString("figjam_try_faq_modal.figjam_features")
                }), jsx(tC, {
                  handleClick: () => t("managing_whiteboard"),
                  svg: _$$A5,
                  text: getI18nString("figjam_try_faq_modal.managing_your_online_whiteboard")
                }), jsx(tC, {
                  handleClick: () => t("templates"),
                  svg: _$$A3,
                  text: getI18nString("figjam_try_faq_modal.online_whiteboard_templates")
                })]
              })]
            }), !!e && function (e) {
              switch (e) {
                case "using_your_online_whiteboard":
                default:
                  return jsx(tS, {});
                case "figjam_features":
                  return jsx(tb, {});
                case "managing_whiteboard":
                  return jsx(tT, {});
                case "templates":
                  return jsx(tI, {});
              }
            }(e)]
          })
        })
      })
    })
  });
}, "FIGJAM_TRY_FAQ_MODAL", ModalSupportsBackground.YES);
function tR({
  helpWidgetOnboardingKey: e
}) {
  let t = "ko-kr" === getI18nState()?.getPrimaryLocale(!0);
  let r = !!getFeatureFlags().web_help_widget_report_translations_korean;
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: KoreanReportTranslationIssueCallout,
    priority: ModalPriority.SECONDARY_MODAL
  });
  useSingleEffect(() => {
    show({
      canShow: () => t && r
    });
  });
  return jsx(OnboardingModal, {
    isShowing,
    targetKey: e,
    trackingContextName: "Report Korean Translation Issue",
    description: renderI18nText("help_widget.report_translation_issue_callout.description"),
    onClose: () => {
      complete();
    },
    arrowPosition: ArrowPosition.BOTTOM
  });
}
function tM({
  helpWidgetOnboardingKey: e
}) {
  var t;
  t = "product_locale";
  let r = useMemo(() => function (e) {
    if (!_$$j(e)) return;
    let t = getCookieManager();
    if (null != t) return t.get(e);
  }(t), [t]);
  let a = getI18nState()?.getPrimaryLocale(!0) ?? defaultLanguage;
  let s = null === getUserId();
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: GuestLanguagePickerOverlay,
    priority: ModalPriority.SECONDARY_MODAL
  });
  useSingleEffect(() => {
    !r && a !== languageCodes.EN && s && show();
  });
  return jsx(OnboardingModal, {
    isShowing,
    targetKey: e,
    trackingContextName: "Guest Language Picker",
    description: renderI18nText("q_1_localization_experiments.change_your_language_anytime_from"),
    onClose: () => {
      _$$T("product_locale", a, {
        maxAge: _$$e3
      });
      complete();
    },
    arrowPosition: ArrowPosition.BOTTOM
  });
}
let tU = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
let tB = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)/;
let tG = /color\(display-p3 ([0-9.]+) ([0-9.]+) ([0-9.]+)\)/;
let tV = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function tH(e, t) {
  if (!e) return null;
  if (e.match(tG)) return function (e, t) {
    let r = e.match(tG);
    if (!r) throw Error("Invalid P3 color string");
    let [n, i, a] = r.slice(1).map(Number);
    let {
      red,
      green,
      blue
    } = Fullscreen.applyConversionToColor({
      red: n,
      green: i,
      blue: a,
      alpha: t
    }, ColorConversionEnum.DISPLAY_P3_TO_SRGB);
    return {
      r: red,
      g: green,
      b: blue,
      opacity: t
    };
  }(e, t);
  let r = e.match(tU);
  if (r) return {
    r: parseFloat(r[1]) / 255,
    g: parseFloat(r[2]) / 255,
    b: parseFloat(r[3]) / 255,
    opacity: t
  };
  let n = e.match(tB);
  if (n) return {
    r: parseFloat(n[1]) / 255,
    g: parseFloat(n[2]) / 255,
    b: parseFloat(n[3]) / 255,
    opacity: parseFloat(n[4]) * t
  };
  let i = e.match(tV);
  return i ? {
    r: parseInt(i[1], 16) / 255,
    g: parseInt(i[2], 16) / 255,
    b: parseInt(i[3], 16) / 255,
    opacity: t
  } : null;
}
function tz(e) {
  let t = {
    width: "0",
    color: null
  };
  e.style.borderTopColor && e.style.borderTopWidth && (t.width = `${parseFloat(e.style.borderTopWidth)}`, t.color = tH(e.style.borderTopColor, 1));
  return t;
}
function tW(e, t) {
  let r;
  e.strokes = [{
    type: "SOLID",
    color: (r = t.color) ? {
      r: r.r,
      g: r.g,
      b: r.b
    } : {
      r: 0,
      g: 0,
      b: 0
    },
    opacity: r ? r.opacity : 1
  }];
  e.strokeWeight = parseFloat(t.width);
  e.strokeAlign = "INSIDE";
}
function tK(e) {
  switch (e.textTransform) {
    case "uppercase":
      return "UPPER";
    case "lowercase":
      return "LOWER";
    case "capitalize":
      return "TITLE";
  }
  return null;
}
function tY(e) {
  switch (e.textDecorationLine) {
    case "underline":
      return "UNDERLINE";
    case "line-through":
      return "STRIKETHROUGH";
  }
  return null;
}
function t$(e, t) {
  let r = tK(t);
  r && (e.textCase = r);
  let n = tY(t);
  n && (e.textDecoration = n);
  let i = function (e) {
    switch (e.textAlign) {
      case "left":
        return "LEFT";
      case "center":
        return "CENTER";
      case "right":
        return "RIGHT";
      case "justify":
        return "JUSTIFIED";
    }
    return null;
  }(t);
  i && (e.textAlignHorizontal = i);
}
async function tX(e, t, r, n, i) {
  let a = await tQ(e, i);
  t.setRangeFontSize(r, n, parseFloat(i.fontSize));
  t.setRangeFontName(r, n, a);
  let s = tK(i);
  s && t.setRangeTextCase(r, n, s);
  let o = tY(i);
  o && t.setRangeTextDecoration(r, n, o);
  let {
    r: _r,
    g,
    b,
    opacity
  } = tH(i.color, 1) || {
    r: 1,
    g: 1,
    b: 1,
    opacity: 0
  };
  t.setRangeFills(r, n, [{
    type: "SOLID",
    color: {
      r: _r,
      g,
      b
    },
    opacity
  }]);
}
let tq = [];
let tJ = {
  family: "Inter",
  style: "Regular"
};
async function tZ(e, t, r) {
  let n = `${e} ${t}`;
  if (tq.includes(n)) return {
    family: e,
    style: t
  };
  try {
    await r.loadFontAsync({
      family: e,
      style: t
    });
    tq.push(n);
    return {
      family: e,
      style: t
    };
  } catch (e) {
    tq.includes(`${tJ.family} ${tJ.style}`) || (await r.loadFontAsync(tJ));
    return tJ;
  }
}
async function tQ(e, t) {
  let r = t.fontWeight || "normal";
  let n = t.fontStyle || "normal";
  let i = {
    400: "Regular",
    normal: "Regular",
    500: "Medium",
    600: "SemiBold",
    700: "Bold",
    bold: "Bold",
    800: "ExtraBold",
    900: "Black"
  }[r];
  ("italic" === n || "oblique" === n) && ("Regular" === i ? i = "Italic" : i += "Italic");
  let a = t.fontFamily.replace(/"/g, "").trim().split(",").map(e => e.trim());
  let s = [];
  for (; a.length > 0;) {
    let t = a.shift() || "Inter";
    let r = i;
    let n = await tZ(t, r, e);
    n && s.push(n);
  }
  return s[0] || tJ;
}
async function t0(e, t, r) {
  let n;
  if (!t) return null;
  let {
    r: _r2,
    g,
    b,
    opacity
  } = tH(t.style?.backgroundColor || "", t.style?.hidden ? 0 : parseFloat(t.style?.opacity) || 1) || {
    r: 1,
    g: 1,
    b: 1,
    opacity: 0
  };
  try {
    switch (t.type) {
      case "RECTANGLE":
        (n = e.createRectangle()).x = t.position.x;
        n.y = t.position.y;
        n.name = t.tagName;
        n.resize(t.size.width, t.size.height);
        t.style.borderRadius && (n.cornerRadius = parseFloat(t.style.borderRadius));
        n.fills = [{
          type: "SOLID",
          color: {
            r: _r2,
            g,
            b
          },
          opacity
        }];
        tW(n, tz(t));
        break;
      case "VECTOR":
        (n = e.createNodeFromSvg(t.svg)).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        break;
      case "VECTOR_AS_IMAGE":
        (n = e.createNodeFromSvg(t.svg)).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        n.findAll(e => "VECTOR" === e.type && Array.isArray(e.fills) && 0 === e.fills.length).forEach(e => {
          e.fills = [{
            type: "SOLID",
            color: {
              r: 0,
              g: 0,
              b: 0
            },
            opacity: 1
          }];
        });
        break;
      case "IMAGE":
        (n = e.createRectangle()).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        let l = "FILL" === t.style.scaleMode ? "FILL" : "FIT";
        if (t.base64) {
          let r = Uint8Array.from(atob(t.base64), e => e.charCodeAt(0));
          let i = e.createImage(r).hash;
          n.resize(t.size.width, t.size.height);
          n.fills = [{
            type: "IMAGE",
            scaleMode: l,
            imageHash: i
          }];
        } else {
          let r = await e.createImageAsync(t.url);
          n.resize(t.size.width, t.size.height);
          n.fills = [{
            type: "IMAGE",
            imageHash: r.hash,
            scaleMode: l
          }];
        }
        break;
      case "TEXT":
        (n = e.createText()).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        let d = await tQ(e, t.style);
        n.fontName = d;
        n.characters = t.value;
        n.fontSize = parseFloat(t.style.fontSize);
        let {
          r,
          g: _g,
          b: _b,
          opacity: _opacity
        } = tH(t.style.color, 1) || {
          r: 1,
          g: 1,
          b: 1,
          opacity: 0
        };
        n.fills = [{
          type: "SOLID",
          color: {
            r,
            g: _g,
            b: _b
          },
          opacity: _opacity
        }];
        t$(n, t.style);
        n.textAutoResize = "HEIGHT";
        let h = 1;
        for (; n.height > t.size.height || n.width > t.size.width;) {
          let e = parseFloat(t.style.fontSize);
          if (h > .3 * e) {
            console.warn("Exceeded max font size adjustments");
            break;
          }
          h++;
          try {
            n.fontSize = n.fontSize - 1;
          } catch (e) {
            console.warn("Error adjusting font size", e);
          }
        }
        break;
      case "TEXT_RANGE":
        (n = e.createText()).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        let m = await tQ(e, t.style);
        n.fontName = m;
        let g = t.ranges.reduce((e, t) => e + t.value, "");
        n.characters = g;
        n.fontSize = parseFloat(t.style.fontSize);
        let f = tH(t.style.color, 1);
        t$(n, t.style);
        let {
          r: _r3,
          g: _g2,
          b: b,
          opacity: _opacity2
        } = f || {
          r: 1,
          g: 1,
          b: 1,
          opacity: 0
        };
        n.fills = [{
          type: "SOLID",
          color: {
            r: _r3,
            g: _g2,
            b: b
          },
          opacity: _opacity2
        }];
        let I = 0;
        for (let r of t.ranges) {
          let t = r.value.length;
          await tX(e, n, I, I + t, r.style);
          I += t;
        }
        n.textAutoResize = "HEIGHT";
        let S = 1;
        for (; n.height > t.size.height || n.width > t.size.width;) {
          let e = parseFloat(t.style.fontSize);
          if (S > .3 * e) {
            console.warn("Exceeded max font size adjustments");
            break;
          }
          S++;
          try {
            n.fontSize = n.fontSize - 1;
          } catch (e) {
            console.warn("Error adjusting font size", e);
          }
        }
        break;
      case "FRAME":
        (n = e.createFrame()).x = t.position.x;
        n.y = t.position.y;
        n.resize(t.size.width, t.size.height);
        n.name = t.tagName;
        n.layoutMode = "NONE";
        t.style.borderRadius && (n.cornerRadius = parseFloat(t.style.borderRadius));
        n.fills = [{
          type: "SOLID",
          color: {
            r: _r2,
            g,
            b
          },
          opacity
        }];
        tW(n, tz(t));
        n.clipsContent = "HTML" !== t.tagName && ["hidden"].includes(t.style.overflow);
        break;
      default:
        console.warn(`Unsupported node type: ${t.type}`);
        return null;
    }
    if (t.children && Array.isArray(t.children)) for (let i of t.children.sort((e, t) => e.order - t.order)) if ("FRAME" === n.type) {
      let t = await t0(e, i, n);
      t && (n.appendChild(t), n.resize(n.width, n.height));
    } else {
      let t = await t0(e, i, r);
      t && r?.appendChild(t);
    }
    return n;
  } catch (e) {
    console.error(`Error creating node ${t.type}`, e, {
      nodeData: t
    });
    n && n.remove();
    return null;
  }
}
let t1 = async (e, t) => await t0(e, t, null);
async function t2(e) {
  let t = createFigmaPluginScope();
  let r = await t1(t, e);
  t.currentPage.appendChild(r);
  return r;
}
let t8 = "help-widget-zendesk";
export function $$t60(e) {
  let [t, r] = useState(!1);
  let {
    canShowInProductHelp,
    inProductHelpViewType,
    showInProductHelpView,
    hideInProductHelpView
  } = A5();
  let {
    getConfig
  } = selectExperimentConfigHook("exp_in_product_help");
  let u = function () {
    let e = useSelector(e => getPermissionsStateMemoized(e));
    let t = selectCurrentFile();
    let r = t?.teamId;
    let n = e.user?.id;
    let s = !useSelector(e => !!(t && e.figFileDuplicatedFromHubFile[t.key]));
    let o = useSubscription(UserWithTeams, {});
    let l = function () {
      let e = selectUserFlag("dismissed_move_drafts_nudge");
      let t = selectUserFlag("ran_move_drafts_nudge_v2_num_3");
      return !!e && !!t && Date.now() - t.updatedAt.getTime() > 864e5;
    }();
    let d = function (e) {
      let t = "collective_upsell_first_file_created";
      let r = useRef(selectUserFlag(t));
      let n = useDispatch<AppDispatch>();
      useSingleEffect(() => {
        !r.current && e && n(postUserFlag({
          [t]: !0
        }));
      });
      return !!r.current && Date.now() - r.current.updatedAt.getTime() > 864e5;
    }(t?.creatorId === n);
    let {
      getConfig: _getConfig
    } = selectExperimentConfigHook("exp_collective_upsells_v2");
    let u = !!useMemo(() => o.transform(e => !!r && (e.currentUser.teamRoles ?? []).some(e => e.team && e.team.id === r && e.team.canEdit)), [r, o]).data;
    if ("loaded" !== o.status) return !1;
    let p = o.data.currentUser.teamRoles;
    if (!p?.length) return !1;
    let _ = !!e.user && dayjs().diff(dayjs(e.user.created_at), "days") >= 7;
    let h = !!t && !t.teamId;
    let m = p.some(e => e.team && !e.team.subscription && e.team.canEdit);
    let g = !p.some(e => e.team?.subscription && e.team.canEdit);
    return _ && d && l && (u || h && m) && s && g && m && !!e.user && _getConfig().get("isVariant", !1);
  }();
  let _ = !!selectUserFlag("collective_upsell_first_file_created");
  let h = u && _;
  let m = useSetAtom(aG);
  let g = isTryWhiteboardFile();
  let f = useSelector(e => e.userFlags);
  let y = selectCurrentFile();
  let I = useRef(null);
  let v = useSetAtom(_$$H2);
  return jsxs(Fragment, {
    children: [jsx(tM, {
      helpWidgetOnboardingKey: t8
    }), jsx(tR, {
      helpWidgetOnboardingKey: t8
    }), jsxs("div", {
      className: cssBuilderInstance.if(e.shouldShowBottomRightZoomMenu && e.hide, cssBuilderInstance.hidden, cssBuilderInstance.flexColumn.gap12.justifyCenter.itemsEnd).$,
      children: [u && jsx(tc, {
        dropdownOpen: t
      }), jsx(t9, {
        asFigmakeHeaderWidget: e.asFigmakeHeaderWidget,
        canShowInProductHelp: () => canShowInProductHelp && !!getConfig().getValue("enabled", !1),
        dispatch: e.dispatch,
        dropDownOpen: t,
        editorType: mapFileTypeToEditorTypeNullable(y?.editorType),
        fileKey: y?.key,
        getExpInProductHelpConfig: getConfig,
        hide: e.hide,
        hideInProductHelpView,
        inProductHelpViewType,
        isEditingFile: e.isEditingFile,
        isFigjamTry: g,
        keyboardShortcuts: e.keyboardShortcuts,
        modalShown: e.modalShown,
        orgUser: e.orgUser,
        recordingKey: "helpWidget",
        rootRef: I,
        setDropDownOpen: r,
        setSkipMakeSomethingOnboarding: m,
        shouldShowResetNuxOption: () => function ({
          user: e
        }) {
          return !!(isDevEnvironment() && e?.profile.job_title);
        }({
          user: e.user
        }),
        showDiscoverMoreOption: h,
        showInProductHelpView,
        showStringInspector: () => {
          v(!0);
        },
        teamId: y?.teamId,
        unsortedTeams: e.unsortedTeams,
        user: e.user,
        userFlags: f
      })]
    })]
  });
}
let t7 = class e extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.zendeskRef = createRef();
    this.dropdownID = generateUUIDv4();
    this.onKeyDown = e => {
      "Divide" === e.key && isExactModifier(e, ModifierKeyCodes.CONTROL | ModifierKeyCodes.SHIFT) && (e.preventDefault(), e.stopPropagation());
    };
    this.documentMouseUp = e => {
      this.props.dropDownOpen && !this.rootRef.current?.contains(e.target) && this.props.setDropDownOpen(!1);
      this.setState({
        showSupportChat: !1
      });
      this.zendeskRef.current?.close();
    };
    this.logEvent = e => {
      trackEventAnalytics(e, {
        isEditingFile: this.props.isEditingFile,
        editorType: this.props.editorType,
        source: "help-widget-button"
      });
    };
    this.logDefinedEvent = e => {
      analyticsEventManager.trackDefinedEvent(e, {
        isEditingFile: this.props.isEditingFile,
        editorType: this.props.editorType,
        source: "help-widget-button"
      });
    };
    this.closeDropdownAndLogEvent = e => {
      this.setState({
        discoverMoreOptionHovered: !1
      });
      this.props.setDropDownOpen(!1);
      this.logEvent(e);
    };
    this.hideDropdownWithTabLogging = () => {
      this.closeDropdownAndLogEvent("help_widget_close_on_tab");
    };
    this.closeDropdownAndLogDefinedEvent = e => {
      this.setState({
        discoverMoreOptionHovered: !1
      });
      this.props.setDropDownOpen(!1);
      this.logDefinedEvent(e);
    };
    this.onClickKeyboardShortcuts = () => {
      this.closeDropdownAndLogEvent("showing_keyboard_shortcuts_modal");
      fullscreenValue.isReady() && fullscreenValue.triggerAction("toggle-keyboard-shortcuts");
    };
    this.onClickLanguageSelector = () => {
      this.logEvent("help_widget_change_languages");
      this.props.dispatch(showModalHandler({
        type: kA,
        data: {
          source: IO.HELP
        }
      }));
    };
    this.onClickKeyboardLayoutSelector = () => {
      fullscreenValue.isReady() && (this.props.dispatch(setKeyboardShortcutPanelTab({
        tab: "layout"
      })), this.onClickKeyboardShortcuts());
    };
    this.onClickResetOnboarding = () => {
      getInitialOptions().user_data && (this.props.setSkipMakeSomethingOnboarding(!1), this.closeDropdownAndLogEvent("Reset Onboarding"));
    };
    this.onClickResetNux = () => {
      if (!getInitialOptions().user_data) return !1;
      this.props.dispatch(putUserAction({
        user: {
          id: getInitialOptions().user_data.id,
          email_validated_at: new Date().toISOString(),
          job_title: ""
        },
        userInitiated: !0
      }));
      setTimeout(() => {
        customHistory.reload("Nux reset");
      }, 1e3);
      this.closeDropdownAndLogEvent("Reset Nux");
    };
    this.onClickGetHelp = () => {
      this.closeDropdownAndLogEvent("help_widget_get_help");
      $() ? this.setState({
        showSupportChat: !0
      }) : 0 === this.props.unsortedTeams.filter(e => hasTeamPaidAccess(e)).length ? this.zendeskRef.current?.open({
        ticketForms: Fb.FREE,
        locale: this.props.user?.locale
      }) : this.zendeskRef.current?.open({
        ticketForms: Fb.PAID,
        locale: this.props.user?.locale
      });
    };
    this.onClickReportAbuse = () => {
      this.closeDropdownAndLogEvent("help_widget_report_abuse");
      this.props.dispatch(showModalHandler({
        type: D
      }));
    };
    this.onClickBugReport = setupPlayback(this, generateRecordingKey("bugReporter", "click") || "", ({
      isPerformanceIssue: e
    }) => {
      this.closeDropdownAndLogEvent("help_widget_bug_report");
      this.props.dispatch(showModalHandler({
        type: e ? cl : bb,
        data: {
          isPerformanceIssue: e
        },
        showModalsBeneath: !0
      }));
    });
    this.onClickChangeFeatureFlags = () => {
      this.closeDropdownAndLogEvent("change_feature_flags");
      this.props.dispatch(showModalHandler({
        type: qf,
        data: {},
        showModalsBeneath: !0
      }));
    };
    this.onClickResetUserFlags = () => {
      this.closeDropdownAndLogEvent("reset_user_flags");
      this.props.dispatch(showModalHandler({
        type: eB,
        data: {},
        showModalsBeneath: !0
      }));
    };
    this.onClickCreateCortextTraceLink = () => {
      this.closeDropdownAndLogEvent("create_cortext_trace_link");
      try {
        let e = "cortex-execution-traces";
        let t = "traces";
        let r = indexedDB.open(e, 1);
        let n = this.props.fileKey;
        r.onupgradeneeded = function () {
          this.result.objectStoreNames.contains(t) || this.result.createObjectStore(t, {
            keyPath: "fileKey"
          });
        };
        r.onsuccess = function () {
          let r = this.result.transaction(t, "readonly").objectStore(t).get(n);
          r.onsuccess = function () {
            let t = this.result;
            let r = new URL("https://toolbox.tools.staging.figma.com/cortex-execution-trace/create");
            let i = a => {
              "trace-create-ready" === a.data.type && (window.removeEventListener("message", i), console.debug(e, "create link, post to viewer", n, t), a.source?.postMessage({
                type: "trace-create-data",
                data: t
              }, {
                targetOrigin: r.origin
              }));
            };
            window.addEventListener("message", i);
            openWindow(r.toString(), "cortex-trace", "height=420,width=520,left=20,top=20,,scrollbars=yes,menubar=no");
          };
          r.onerror = function () {
            console.error("Error reading indexedDB data", e, n, this.error);
          };
        };
        r.onerror = function () {
          console.error("Error opening indexedDB", e, n, this.error);
        };
      } catch (e) {
        console.error("Error creating cortext trace link", e);
      }
    };
    this.onClickFigjamTryFAQ = () => {
      this.closeDropdownAndLogEvent("open_figjam_try_faq");
      this.props.dispatch(showModalHandler({
        type: tw,
        showModalsBeneath: !0
      }));
    };
    this.onClickHtmlToFigma = () => {
      let e = document.createElement("input");
      e.type = "file";
      e.accept = "application/json";
      e.onchange = () => {
        let t = e?.files?.[0];
        let r = new FileReader();
        r.onload = async function (e) {
          let t = null;
          try {
            console.log("starting import...");
            t = JSON.parse(e.target?.result);
            await t2(t);
            console.log("import complete!");
          } catch (e) {
            console.error("Error parsing JSON file:", e);
          }
        };
        r.onerror = function () {
          console.error("Error reading file");
        };
        t && r.readAsText(t);
      };
      e.click();
      e.onclose = () => {
        this.closeDropdownAndLogEvent("import_html_to_figma");
      };
    };
    this.onClickSetCommitSHA = setupPlayback(this, generateRecordingKey("setCommitSHA", "click") || "", () => {
      this.closeDropdownAndLogEvent("help_widget_set_commit_sha");
      this.props.dispatch(showModalHandler({
        type: _$$H,
        data: {},
        showModalsBeneath: !0
      }));
    });
    this.onInProductHelpClick = handleMouseEvent(this, "click", () => {
      "hidden" !== this.props.inProductHelpViewType ? this.props.hideInProductHelpView() : this.props.showInProductHelpView();
    });
    this.onClick = handleMouseEvent(this, "click", () => {
      !ci(this.props.user?.email) && this.props.canShowInProductHelp() ? "hidden" !== this.props.inProductHelpViewType ? this.props.hideInProductHelpView() : this.props.showInProductHelpView() : this.props.setDropDownOpen(!this.props.dropDownOpen);
      atomStoreManager.set(jH, !0);
    });
    this.getDropdownOptions = () => [{
      type: "option",
      onClick: this.onClickFigjamTryFAQ,
      label: renderI18nText("help_widget.menu.figjam_try_faq"),
      shouldShow: () => this.props.isFigjamTry,
      shouldShowUnauth: !0
    }, {
      type: "option",
      onClick: this.onClickHtmlToFigma,
      label: renderI18nText("help_widget.menu.import_html"),
      shouldShow: () => !!getFeatureFlags().babel_design_widget_entrypoint
    }, {
      type: "option",
      onClick: () => this.onClickBugReport({
        isPerformanceIssue: !1
      }),
      label: renderI18nText("help_widget.menu.report_issue"),
      shouldShow: () => !!getFeatureFlags().bug_reporter,
      shouldShowUnauth: !1
    }, {
      type: "option",
      onClick: () => this.onClickBugReport({
        isPerformanceIssue: !0
      }),
      label: renderI18nText("help_widget.menu.report_performance_issue"),
      shouldShow: () => !!getFeatureFlags().perf_reporter,
      shouldShowUnauth: !1
    }, {
      type: "option",
      onClick: this.onClickChangeFeatureFlags,
      label: renderI18nText("feature_flag_overrides.help_menu_button"),
      shouldShow: () => !!getFeatureFlags().feature_flag_overrides
    }, {
      type: "option",
      onClick: this.onClickResetUserFlags,
      label: renderI18nText("reset_user_flags_modal.option_label"),
      shouldShow: () => !!getFeatureFlags().reset_user_flags
    }, {
      type: "option",
      onClick: this.onClickCreateCortextTraceLink,
      label: renderI18nText("help_widget.menu.create_cortext_trace_link"),
      shouldShow: () => isDevEnvironment() && !!this.props.fileKey && !!this.props.isEditingFile
    }, {
      type: "option",
      target: "_blank",
      href: `https://${isGovCluster() ? "app.ddog-gov.com" : "app.datadoghq.com"}/rum/sessions?query=%40application.id%3A${Tf?.applicationId}%20%40session.id%3A${Tf?.sessionId}`,
      label: renderI18nText("help_widget.menu.rum_session"),
      shouldShow: () => !!Tf?.sessionId && (isLocalCluster() || isStagingCluster() || !!getFeatureFlags().feature_flag_overrides)
    }, {
      type: "option",
      onClick: this.onClickSetCommitSHA,
      label: renderI18nText("help_widget.menu.set_commit_sha"),
      shouldShow: () => !!getFeatureFlags().set_frontend_commit_sha
    }, {
      type: "option",
      target: "_blank",
      href: `https://deploys.figma.com/bisect?repro_url=${encodeURIComponent(window.location.href)}`,
      onClick: () => this.closeDropdownAndLogEvent("help_widget_web_bisect"),
      label: renderI18nText("help_widget.menu.web_bisect"),
      shouldShow: () => isLocalCluster() || isStagingCluster()
    }, {
      type: "option",
      onClick: this.onClickResetOnboarding,
      label: jsx("div", {
        "data-onboarding-key": "reset-onboarding",
        children: renderI18nText("help_widget.menu.reset_onboarding")
      }),
      shouldShow: () => !!getFeatureFlags().show_reset_onboarding
    }, {
      type: "separator",
      shouldShow: () => !!getFeatureFlags().bug_reporter
    }, {
      type: "option",
      target: "_blank",
      href: "https://help.figma.com/",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_help"),
      label: renderI18nText("help_widget.menu.help_center"),
      shouldShowUnauth: !0
    }, {
      type: "option",
      target: "_blank",
      href: "https://forum.figma.com/",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_forum"),
      label: renderI18nText("help_widget.menu.support_forum"),
      shouldShowUnauth: !1
    }, {
      type: "option",
      target: "_blank",
      href: "https://www.youtube.com/figmadesign",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_tutorials"),
      label: renderI18nText("help_widget.menu.youtube_videos"),
      shouldShowUnauth: !0
    }, {
      type: "option",
      target: "_blank",
      href: "https://www.figma.com/release-notes/",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_releases"),
      label: renderI18nText("help_widget.menu.release_notes"),
      shouldShowUnauth: !0
    }, {
      type: "option",
      target: "_blank",
      href: "/legal",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_legal_summary"),
      label: renderI18nText("help_widget.menu.legal_summary"),
      shouldShowUnauth: !0
    }, {
      type: "separator",
      shouldShowUnauth: !1
    }, {
      type: "option",
      target: "_blank",
      href: "https://forum.figma.com/share-your-feedback-26",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_forum_feedback"),
      label: renderI18nText("help_widget.menu.submit_feedback"),
      shouldShow: () => !isGovCluster() && !(this.props.editorType === FEditorType.Figmake && isFigmakeSitesEnabled())
    }, {
      type: "option",
      target: "_blank",
      href: "https://form.asana.com/?k=2lONzHHSiZJo3FThA47peg&d=10497086658021",
      onClick: () => this.closeDropdownAndLogDefinedEvent("i18n.help_widget_report_translations"),
      label: renderI18nText("help_widget.menu.report_translation_issues"),
      shouldShow: () => !!getFeatureFlags().web_help_widget_report_translations && getI18nState()?.getPrimaryLocale(!0) !== "en" && getI18nState()?.getPrimaryLocale(!0) !== "ko-kr"
    }, {
      type: "option",
      target: "_blank",
      href: "https://form.asana.com/?k=sDVVvv1ozFchtJWapzoUZw&d=10497086658021",
      onClick: () => this.closeDropdownAndLogDefinedEvent("i18n.help_widget_report_translations_korean"),
      label: renderI18nText("help_widget.menu.report_translation_issues"),
      shouldShow: () => !!getFeatureFlags().web_help_widget_report_translations_korean && getI18nState()?.getPrimaryLocale(!0) === "ko-kr"
    }, {
      type: "option",
      onClick: this.props.showStringInspector,
      label: renderI18nText("string_inspector.open_string_inspector"),
      shouldShow: () => getFeatureFlags().l10n_string_inspector || !1
    }, {
      type: "option",
      target: "_blank",
      href: "https://forum.figma.com/ask-the-community-7",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_forum_ask"),
      label: renderI18nText("help_widget.menu.ask_the_community"),
      shouldShow: () => !isGovCluster()
    }, isGovCluster() ? {
      type: "option",
      target: "_blank",
      href: "mailto:support-figgov@figma.com",
      onClick: () => this.closeDropdownAndLogEvent("help_widget_get_help"),
      label: renderI18nText("help_widget.menu.contact_support")
    } : {
      type: "option",
      onClick: this.onClickGetHelp,
      label: renderI18nText("help_widget.menu.contact_support"),
      shouldShowUnauth: !1
    }, {
      type: "option",
      onClick: this.onClickReportAbuse,
      label: renderI18nText("help_widget.menu.report_abuse"),
      shouldShowUnauth: !0,
      shouldShow: () => !0
    }, {
      type: "separator",
      shouldShowUnauth: !1
    }, {
      type: "option",
      shouldShow: () => fullscreenValue.isReady(),
      onClick: this.onClickKeyboardShortcuts,
      label: jsxs(Fragment, {
        children: [renderI18nText("help_widget.menu.keyboard_shortcuts"), jsx(KeyboardShortcut, {
          shortcut: getKeyboardShortcut(this.props.keyboardShortcuts, "open-shortcuts"),
          className: "help_widget--shortcut--H4xrS"
        })]
      })
    }, {
      type: "option",
      onClick: this.onClickResetNux,
      label: jsx("div", {
        children: renderI18nText("help_widget.menu.reset_nux")
      }),
      shouldShow: this.props.shouldShowResetNuxOption
    }, {
      type: "option",
      shouldShow: () => this.props.showDiscoverMoreOption,
      onClick: () => {
        this.props.dispatch(showModalHandler({
          type: e4,
          data: {
            teamId: this.props.teamId,
            editorType: this.props.editorType ? mapEditorTypeToFileType(this.props.editorType) : null
          }
        }));
        this.closeDropdownAndLogEvent("help_widget_discover_more_features");
      },
      onHover: e => {
        this.setState({
          discoverMoreOptionHovered: e
        });
      },
      label: jsxs(Fragment, {
        children: [renderI18nText("help_widget.menu.discover_more_features"), jsx(Badge, {
          className: `help_widget--proBadge--9d3JS ${this.state.discoverMoreOptionHovered ? "help_widget--proBadgeHovered--KoXjg" : ""}`,
          text: getI18nString("help_widget.menu.discover_more_features.pro"),
          color: BadgeColor.INVERT,
          subtle: !0
        })]
      })
    }, {
      type: "separator",
      shouldShow: () => fullscreenValue.isReady(),
      shouldShowUnauth: !0
    }, {
      type: "option",
      onClick: this.onClickKeyboardLayoutSelector,
      shouldShow: () => fullscreenValue.isReady(),
      label: renderI18nText("help_widget.menu.change_keyboard_layout")
    }, {
      type: "option",
      onClick: this.onClickLanguageSelector,
      label: renderI18nText("help_widget.menu.change_languages"),
      shouldShowUnauth: !0
    }];
    this.renderDropdownOptions = () => this.getDropdownOptions().filter(e => this.shouldShowOption(e)).map((e, t) => {
      if ("option" === e.type) {
        let {
          target,
          href,
          onClick,
          onHover,
          simulateHover
        } = e;
        return jsx(OptionComponent, {
          target,
          href,
          onClick,
          onHover,
          simulateHover,
          "data-fullscreen-intercept": !0,
          children: jsx("div", {
            className: "help_widget--optionItem---2-vY",
            children: e.label
          })
        }, t);
      }
      return "separator" === e.type && jsx(SeparatorComponent, {}, t);
    });
    this.rootRef = e.rootRef;
    this.state = {
      discoverMoreOptionHovered: !1,
      showSupportChat: !1
    };
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("mouseup", this.documentMouseUp);
    document.addEventListener("keydown", this.onKeyDown);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("mouseup", this.documentMouseUp);
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    e.hide != this.props.hide && this.props.hide && (this.setState({
      showSupportChat: !1
    }), this.zendeskRef.current?.close());
  }
  shouldShowOption(e) {
    return !!(e.shouldShow?.() ?? !0) && (null != getInitialOptions().user_data || !isNullish(e.shouldShowUnauth) && (isBoolean(e.shouldShowUnauth) ? e.shouldShowUnauth : e.shouldShowUnauth()));
  }
  render() {
    let t = !this.props.hide;
    let r = this.props.isDarkMode;
    let i = this.props.editorType === FEditorType.Whiteboard;
    let a = this.props.editorType === FEditorType.Cooper;
    let s = !i && ci(this.props.user?.email) && this.props.canShowInProductHelp();
    if (this.props.asFigmakeHeaderWidget) {
      let e = this.getDropdownOptions().filter(e => this.shouldShowOption(e));
      return jsx(rr, {
        isVisible: t,
        options: e,
        zendeskRef: this.zendeskRef,
        user: this.props.user,
        isSupportChatbotEligible: !!$(),
        shouldShowSupportChatbot: this.state.showSupportChat,
        hideSupportChatbot: () => this.setState({
          showSupportChat: !1
        })
      });
    }
    return jsxs(Fragment, {
      children: [s && jsx("section", {
        className: t ? z : K,
        children: jsx(trackedSvgComponent, {
          "aria-controls": this.dropdownID,
          "aria-expanded": this.props.dropDownOpen,
          "aria-haspopup": !0,
          "aria-label": getI18nString("fullscreen.menu.help_menu"),
          className: W,
          "data-fullscreen-intercept": !0,
          innerText: e.displayName,
          onClick: this.onInProductHelpClick,
          onKeyDown: e => handleAccessibilityKeyboardEvents({
            e,
            onClickHandler: this.onClick
          }),
          role: "button",
          svg: _$$A7,
          tabIndex: 0
        })
      }), jsxs("section", {
        className: h()(t ? z : K, {
          "help_widget--lightHelpWidget--cPso-": i || a && !1 === r,
          "help_widget--settingsCog--ZGFYA": s
        }),
        ref: this.rootRef,
        onFocusCapture: () => {
          this.rootRef.current?.setAttribute("aria-hidden", "false");
        },
        "data-onboarding-key": J_,
        children: [jsx(trackedSvgComponent, {
          "aria-controls": this.dropdownID,
          "aria-expanded": this.props.dropDownOpen,
          "aria-haspopup": !0,
          "aria-label": getI18nString("fullscreen.menu.help_menu"),
          className: W,
          "data-fullscreen-intercept": !0,
          "data-onboarding-key": t8,
          innerText: e.displayName,
          onClick: this.onClick,
          onKeyDown: e => handleAccessibilityKeyboardEvents({
            e,
            onClickHandler: this.onClick
          }),
          role: "button",
          svg: s ? _$$A8 : _$$A7,
          tabIndex: 0
        }), jsx(_$$F, {
          ref: this.zendeskRef,
          dispatch: this.props.dispatch,
          userName: this.props.user?.name || null,
          userEmail: this.props.user?.email || null
        }), !this.props.dropDownOpen && jsx(re, {}), this.props.dropDownOpen && jsx("div", {
          className: "help_widget--dropdown--3SXN1 help_widget--tooltipPosition--XygMP",
          children: jsx(DropdownOptions, {
            hideDropdown: this.hideDropdownWithTabLogging,
            id: this.dropdownID,
            options: this.renderDropdownOptions()
          })
        }), !!this.props.fileKey && jsx("div", {
          onFocus: KeyboardFocusManager.focusCustomCanvasFocusElement,
          tabIndex: 0
        })]
      }), $() && jsx(q, {
        open: this.state.showSupportChat,
        onClose: () => this.setState({
          showSupportChat: !1
        })
      }), !!getFeatureFlags().bug_reporter && t && jsx(eL, {})]
    });
  }
};
t7.displayName = "HelpWidget";
let t9 = t7;
function re() {
  return jsx("div", {
    "aria-hidden": !0,
    className: "help_widget--tooltip--ScNXy help_widget--tooltipPosition--XygMP text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: renderI18nText("help_widget.tooltip")
  });
}
let rt = {
  buttonStyle: {
    display: "x78zum5",
    width: "xvy4d1p",
    height: "xxk0z11",
    padding: "x17ngzzj",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    flexShrink: "x2lah0s",
    borderRadius: "x1khhgft",
    background: "x1sjmt1f",
    $$css: !0
  },
  buttonStyleActive: {
    background: "x1xsi6zv",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  }
};
function rr({
  isVisible: e,
  options: t,
  user: r,
  zendeskRef: i,
  isSupportChatbotEligible: s,
  shouldShowSupportChatbot: p,
  hideSupportChatbot: _
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let g = useDispatch<AppDispatch>();
  return jsxs(Fragment, {
    children: [e && jsxs(MenuRootComp, {
      manager,
      children: [jsx(ButtonPrimitive, {
        ...getTriggerProps(),
        ...stylex.props(rt.buttonStyle, manager.isOpen && rt.buttonStyleActive),
        "aria-label": getI18nString("fullscreen.menu.help_menu"),
        "aria-expanded": manager.isOpen,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("help_widget.tooltip"),
          "data-tooltip-submenu-open": manager.isOpen
        },
        "data-fullscreen-intercept": !0,
        children: jsx(d, {})
      }), jsx(MenuContainerComp, {
        children: t.map((e, t) => {
          if ("option" === e.type) {
            if (e.href) return jsx(MenuLinkComp, {
              href: e.href,
              newTab: "_blank" === e.target,
              children: e.label
            }, t);
            if (e.onClick) return jsx(MenuItemComp, {
              onClick: e.onClick,
              children: e.label
            }, t);
          } else if ("separator" === e.type) return jsx(MenuSeparator, {}, t);
        })
      })]
    }), jsx(_$$F, {
      ref: i,
      dispatch: g,
      userName: r?.name || null,
      userEmail: r?.email || null
    }), s && jsx(q, {
      open: p,
      onClose: _
    }), !!getFeatureFlags().bug_reporter && e && jsx(eL, {})]
  });
}
export const gs = $$t60;