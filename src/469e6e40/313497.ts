import { getFeatureFlags } from "../905/601108";
import { showModalHandler } from "../905/156213";
import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, r1, nB, wi, jk, Y9, hE } from "../figma_app/272243";
import { w as _$$w } from "../905/770105";
import { J } from "../469e6e40/577626";
import { a as _$$a } from "../905/676930";
import { B as _$$B } from "../905/950875";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { logger } from "../905/651849";
import { A as _$$A } from "../905/920142";
import { rb, $z, c as _$$c } from "../figma_app/617427";
import { Ph, o as _$$o } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { c as _$$c2 } from "../905/370443";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { Eh } from "../figma_app/617654";
import { registerModal } from "../905/102752";
import { I as _$$I } from "../905/597430";
import { L as _$$L } from "../905/479295";
import { T1 } from "../figma_app/153916";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
let n;
let s;
function O() {
  return jsxs("svg", {
    width: "112",
    height: "84",
    viewBox: "-6 0 112 84",
    fill: "none",
    children: [jsx("path", {
      fill: "#80CAFF",
      stroke: "#80CAFF",
      strokeWidth: ".381",
      d: "M50.523 47.103h25.178v20.982H50.523z"
    }), jsx("path", {
      fill: "#80CAFF",
      d: "m59.367 12.72-.798.798-.808-.797.808-.809.798.809Zm1.027 1.028-.798.808-.797-.808.797-.798.798.798Zm-2.054 0-.809.808-.808-.808.808-.798.809.798Zm1.027 1.038-.798.797-.808-.797.808-.809.798.809Z"
    }), jsx("path", {
      fill: "#FFC700",
      stroke: "#000",
      strokeWidth: ".381",
      d: "M72.226 17.157a3.475 3.475 0 0 1 .577 6.903 3.476 3.476 0 0 1 0 6.855 3.476 3.476 0 0 1-.577 6.902H60.221a3.475 3.475 0 0 1-.577-6.902 3.476 3.476 0 0 1 0-6.855 3.476 3.476 0 0 1 .577-6.903h12.005Z"
    }), jsx("path", {
      fill: "#F24E1E",
      stroke: "#000",
      strokeWidth: ".381",
      d: "M41.803 47.103a3.475 3.475 0 0 1 .577 6.903 3.476 3.476 0 0 1 0 6.855 3.476 3.476 0 0 1-.578 6.903H29.797a3.475 3.475 0 0 1-.577-6.903 3.476 3.476 0 0 1 0-6.855 3.476 3.476 0 0 1 .577-6.903h12.006Z"
    }), jsx("path", {
      fill: "#0FA958",
      stroke: "#000",
      strokeWidth: ".381",
      d: "M75.7 52.349a5.245 5.245 0 0 0-5.245-5.245H56.15a5.245 5.245 0 1 0 0 10.49 5.245 5.245 0 1 0 0 10.491h14.305a5.245 5.245 0 1 0 0-10.49 5.245 5.245 0 0 0 5.246-5.246Z"
    }), jsx("path", {
      fill: "#80CAFF",
      stroke: "#80CAFF",
      strokeWidth: ".095",
      d: "m28.56 13.943.797.809.034.034-.865.864-.034-.033-.807-.798-.035-.033.034-.034.842-.843.035.034Zm-1.038-1.027.808.798.034.033-.843.843-.033.034-.843-.843-.033-.034.035-.033.808-.798.033-.033.034.033Zm2.065 0 .831.831-.033.034-.798.809-.034.034-.034-.034-.797-.809-.034-.034.865-.864.034.033Zm-1.026-1.037.796.809.034.033-.865.864-.034-.033-.807-.797-.035-.034.034-.034.808-.81.034-.032.035.034Z"
    }), jsx("path", {
      fill: "#5551FF",
      stroke: "#000",
      strokeWidth: ".381",
      d: "M51.095 22.403a5.245 5.245 0 0 0-5.245-5.246H31.544a5.245 5.245 0 0 0 0 10.491 5.245 5.245 0 1 0 0 10.49H45.85a5.245 5.245 0 0 0 0-10.49 5.245 5.245 0 0 0 5.245-5.245Z"
    }), jsx("path", {
      stroke: "#80CAFF",
      strokeWidth: ".112",
      d: "M26.355 17.404h24.588v20.488H26.355z"
    }), jsx("path", {
      fill: "#fff",
      stroke: "#80CAFF",
      strokeWidth: ".381",
      d: "M50.143 16.108h2.098v2.098h-2.098zM25.049 16.108h2.098v2.098h-2.098zM50.143 36.995h2.098v2.098h-2.098zM25.059 37.09h2.098v2.098h-2.098z"
    }), jsx("path", {
      stroke: "#80CAFF",
      strokeWidth: ".381",
      d: "M50.143 16.108h2.098v2.098h-2.098zM25.049 16.108h2.098v2.098h-2.098zM50.143 36.995h2.098v2.098h-2.098zM25.059 37.09h2.098v2.098h-2.098zM26.109 18.206v18.789M51.191 18.206v18.789M50.047 17.157H27.158M50.047 38.139H27.158M28.188 42.033l1.618 1.619-1.618 1.618-1.619-1.618zM52.602 42.128l1.619 1.619-1.619 1.618-1.619-1.618z"
    }), jsx("path", {
      fill: "#80CAFF",
      fillRule: "evenodd",
      stroke: "#80CAFF",
      strokeLinecap: "square",
      strokeWidth: ".381",
      d: "m17.811 16.656 8.142.29-5.39-6.557.249 3.972-3 2.295ZM69.692 70.303l-6.961-4.125 1.59 8.297 1.667-3.592 3.704-.58Z",
      clipRule: "evenodd"
    })]
  });
}
function L() {
  return jsxs("svg", {
    width: "112",
    height: "84",
    fill: "none",
    viewBox: "-14 0 112 84",
    children: [jsx("path", {
      fill: "#E5F4FF",
      stroke: "#000",
      strokeWidth: ".389",
      d: "M41.923 16.528c16.46 0 29.75 11.432 29.75 25.473 0 14.04-13.29 25.471-29.75 25.471s-29.75-11.43-29.75-25.471 13.29-25.473 29.75-25.473Z"
    }), jsx("path", {
      stroke: "#000",
      strokeWidth: ".389",
      d: "M71.755 42.042H12.133M41.922 67.563V16.526M64.234 25.044c-6.148 3.41-13.912 5.444-22.351 5.444-8.44 0-16.204-2.035-22.352-5.444M64.234 58.978c-6.148-3.41-13.912-5.444-22.351-5.444-8.44 0-16.204 2.034-22.352 5.444"
    }), jsx("path", {
      stroke: "#000",
      strokeWidth: ".389",
      d: "M41.922 16.528c4.823 0 9.211 2.824 12.401 7.433 3.19 4.609 5.168 10.986 5.168 18.04 0 7.052-1.978 13.43-5.168 18.038-3.19 4.609-7.578 7.433-12.401 7.433-4.824 0-9.212-2.824-12.401-7.433C26.33 55.43 24.352 49.053 24.351 42c0-7.054 1.98-13.431 5.168-18.04 3.19-4.609 7.579-7.433 12.402-7.433Z"
    }), jsx("path", {
      fill: "#F24E1E",
      stroke: "#000",
      strokeWidth: ".389",
      d: "M21.977 39.772h4.392v4.391h-4.392z"
    }), jsx("path", {
      fill: "#0FA958",
      stroke: "#000",
      strokeWidth: ".389",
      d: "m56.86 25.473 2.512 1.435v2.871l-2.511 1.436-2.511-1.436v-2.87l2.51-1.436Z"
    }), jsx("path", {
      fill: "#FFC700",
      stroke: "#000",
      strokeLinecap: "square",
      strokeWidth: ".389",
      d: "M73.423 20.519v-4.302H62.302v4.302h11.12Zm-13.357 3.26 2.378-1.413.394-.233-.441-.121-1.114-.305-.61-1.02-.26-.439-.097.502-.54 2.826-.082.424.372-.22Z"
    }), jsx("path", {
      fill: "#0FA958",
      stroke: "#000",
      strokeLinecap: "square",
      strokeWidth: ".389",
      d: "M6.884 34.363V30.06h11.12v4.302H6.885Zm13.356 3.26-2.378-1.413-.393-.233.441-.121 1.113-.305.61-1.02.262-.439.095.502.541 2.826.081.424-.372-.22Z"
    }), jsx("path", {
      fill: "#F24E1E",
      stroke: "#000",
      strokeLinecap: "square",
      strokeWidth: ".389",
      d: "M73.345 64.15v4.301H62.224V64.15h11.12Zm-13.357-3.261 2.378 1.413.394.233-.442.121-1.113.305-.61 1.02-.261.439-.096-.502-.54-2.826-.082-.424.372.22Z"
    }), jsx("mask", {
      id: "path-12-inside-1_451_8990",
      fill: "#fff",
      children: jsx("path", {
        d: "M59.272 57.196c0 .968-1.203 1.754-2.686 1.754-1.483 0-2.685-.786-2.686-1.754 0-.525.354-.994.913-1.316-.559-.321-.913-.79-.913-1.315 0-.969 1.203-1.754 2.686-1.754 1.483 0 2.685.785 2.686 1.754 0 .525-.355.993-.914 1.314.56.322.914.792.914 1.317Z"
      })
    }), jsx("path", {
      fill: "#FFC700",
      d: "M59.272 57.196c0 .968-1.203 1.754-2.686 1.754-1.483 0-2.685-.786-2.686-1.754 0-.525.354-.994.913-1.316-.559-.321-.913-.79-.913-1.315 0-.969 1.203-1.754 2.686-1.754 1.483 0 2.685.785 2.686 1.754 0 .525-.355.993-.914 1.314.56.322.914.792.914 1.317Z"
    }), jsx("path", {
      fill: "#000",
      d: "M59.272 57.196h.388-.388Zm-2.686 1.754v.389-.39ZM53.9 57.196h-.389.39Zm.913-1.316.194.337.587-.337-.587-.337-.194.337Zm-.913-1.315h-.389.39Zm2.686-1.754v-.389.389Zm2.686 1.754h.388-.388Zm-.914 1.314-.194-.337-.586.337.587.338.193-.338Zm.914 1.317h-.39c0 .31-.192.642-.61.914-.414.27-1.01.45-1.686.45v.779c.806 0 1.554-.213 2.111-.578.555-.362.963-.907.963-1.565h-.388Zm-2.686 1.754v-.39c-.677 0-1.272-.18-1.686-.45-.418-.272-.61-.604-.61-.914h-.779c0 .658.41 1.204.963 1.566.558.364 1.306.577 2.112.577v-.39ZM53.9 57.196h.39c0-.335.227-.697.717-.978l-.194-.338-.193-.337c-.628.361-1.108.938-1.108 1.653h.388Zm.913-1.316.194-.337c-.49-.282-.718-.643-.718-.978h-.778c0 .715.48 1.292 1.109 1.653l.194-.338Zm-.913-1.315h.39c0-.31.192-.642.61-.915.414-.27 1.009-.45 1.686-.45v-.778c-.806 0-1.554.213-2.112.577-.554.362-.962.907-.962 1.566h.388Zm2.686-1.754v.389c.677 0 1.272.18 1.686.45.418.273.61.605.61.915h.778c0-.659-.408-1.204-.962-1.566-.558-.364-1.306-.577-2.112-.577v.389Zm2.686 1.754h-.39c0 .334-.227.695-.718.977l.194.337.194.338c.627-.361 1.108-.937 1.108-1.652h-.388Zm-.914 1.314-.193.338c.49.281.718.644.718.979h.777c0-.715-.48-1.293-1.108-1.654l-.194.337Z",
      mask: "url(#path-12-inside-1_451_8990)"
    })]
  });
}
async function q(e) {
  (await Promise.allSettled([T1(e), jL({
    planType: FOrganizationLevelType.ORG,
    planId: e
  })])).forEach(e => {
    "rejected" === e.status && logger.error(e.reason);
  });
}
let $ = {
  pseudoTitle: {
    ..._$$g.textHeadingMedium,
    $$css: !0
  },
  ifYouCancelList: {
    ..._$$g.textBodyLarge,
    display: "xrvj5dj",
    gridTemplateColumns: "x1wlfl8j",
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    marginTop: "xpgiz1h",
    $$css: !0
  },
  wontBeAbleToUse: {
    ..._$$g.textBodyLarge,
    marginTop: "xehsoiq",
    $$css: !0
  },
  wontBeAbleToUseItem: {
    ..._$$g.textBodyLarge,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    paddingRight: "xctkrei",
    paddingInlineStart: null,
    paddingInlineEnd: null,
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
    borderRadius: "x116uinm",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    margin: "xoyptv",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  contactSupportBanner: {
    ..._$$g.textBodyLarge,
    backgroundColor: "x1ghs5zp",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  ifYouCancelMoreList: {
    ..._$$g.textBodyLarge,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x1qjc9v5",
    gap: "x1i71x30",
    rowGap: null,
    columnGap: null,
    paddingTop: "xuzqwsy",
    $$css: !0
  },
  ifYouCancelMoreItem: {
    ..._$$g.textBodyLarge,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    paddingRight: "xctkrei",
    paddingInlineStart: null,
    paddingInlineEnd: null,
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
    borderRadius: "x116uinm",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    gap: "x1nfngrj",
    rowGap: null,
    columnGap: null,
    textDecoration: "x1bvjpef",
    textDecorationColor: null,
    textDecorationLine: null,
    textDecorationStyle: null,
    textDecorationThickness: null,
    color: "x1akne3o",
    cursor: "x1ypdohk",
    ":focus-visible_borderColor": "x72noq",
    ":focus-visible_borderInlineColor": null,
    ":focus-visible_borderInlineStartColor": null,
    ":focus-visible_borderLeftColor": null,
    ":focus-visible_borderInlineEndColor": null,
    ":focus-visible_borderRightColor": null,
    ":focus-visible_borderBlockColor": null,
    ":focus-visible_borderTopColor": null,
    ":focus-visible_borderBottomColor": null,
    $$css: !0
  }
};
function B(e) {
  let t = useModalManager(e);
  let a = [{
    id: "teams",
    icon: jsx(_$$w, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.your_teams")
  }, {
    id: "projects",
    icon: jsx(J, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.your_projects")
  }, {
    id: "published_content",
    icon: jsx(_$$a, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.published_content")
  }];
  let n = useCallback(() => e.setStep("if_you_cancel_more"), [e.setStep]);
  let s = useCallback(() => e.setStep("confirm_cancel"), [e.setStep]);
  let i = getI18nString("general.learn_more");
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(r1, {
        children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.title")
      }), jsx(nB, {
        children: jsxs("div", {
          className: "x1apfuft x78zum5 xdt5ytf",
          children: [jsx("p", {
            ...Ay.props($.pseudoTitle),
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.no_longer_able_to_manage", {
              scheduledCancellationDate: e.scheduledCancellationDate
            })
          }), jsx("ul", {
            ...Ay.props($.ifYouCancelList),
            children: a.map(({
              id: e,
              label: t,
              icon: a
            }) => jsxs("li", {
              className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xfsy98r xg2d0mh x1bamp8i x116uinm",
              children: [a, t]
            }, e))
          }), jsx("p", {
            ...Ay.props($.wontBeAbleToUse),
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.wont_be_able_to_use")
          }), jsxs("div", {
            ...Ay.props($.wontBeAbleToUseItem),
            children: [jsx(_$$L, {}), jsxs("div", {
              className: "x78zum5 xdt5ytf xl56j7k x1k6glv7",
              children: [jsx("span", {
                children: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.wont_be_able_to_use_features")
              }), jsx("span", {
                children: jsxs(rb, {
                  onClick: n,
                  trackingProperties: {
                    trackingDescriptor: _$$c2.LEARN_MORE
                  },
                  "aria-label": i,
                  children: [i, " \u2192"]
                })
              })]
            })]
          }), jsxs("div", {
            ...Ay.props($.contactSupportBanner),
            children: [jsx(_$$B, {}), jsx("span", {
              children: renderI18nText("org_admin_settings.schedule_cancellation_modal.if_you_cancel.try_another_plan", {
                contactingSupport: jsx(Ph, {
                  href: "https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215",
                  trusted: !0,
                  newTab: !0,
                  trackingProperties: {
                    trackingDescriptor: _$$c2.CONTACT_SUPPORT
                  },
                  children: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel.contacting_support")
                })
              })
            })]
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "link",
            onClick: e.onClose,
            trackingProperties: {
              trackingDescriptor: _$$c2.KEEP_PLAN
            },
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.keep_plan")
          }), jsx(_$$c, {
            variant: "secondary",
            onClick: s,
            trackingProperties: {
              trackingDescriptor: _$$c2.CONTINUE
            },
            children: getI18nString("general.continue")
          })]
        })
      })]
    })
  });
}
function G(e) {
  let t = useModalManager(e);
  let a = [{
    id: "design_systems",
    graphic: jsx(_$$L, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel_more.design_systems"),
    href: "https://help.figma.com/hc/articles/360040529593-Share-libraries-in-an-organization",
    trackingDescriptor: _$$c2.DESIGN_SYSTEMS
  }, {
    id: "branching",
    graphic: jsx(O, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel_more.branching"),
    href: "https://help.figma.com/hc/articles/360063144053-Guide-to-branching",
    trackingDescriptor: _$$c2.BRANCHING
  }, {
    id: "unlimited_teams",
    graphic: jsx(L, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel_more.unlimited_teams"),
    href: "https://help.figma.com/hc/articles/360053463173-Manage-teams-in-an-organization",
    trackingDescriptor: _$$c2.UNLIMITED_TEAMS
  }, {
    id: "security",
    graphic: jsx(_$$I, {}),
    label: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel_more.security"),
    href: "https://help.figma.com/hc/articles/360040056294-Privacy-and-security-in-organizations",
    trackingDescriptor: _$$c2.SECURITY
  }];
  let n = useCallback(() => e.setStep("confirm_cancel"), [e.setStep]);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(r1, {
        children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.title")
      }), jsx(nB, {
        children: jsxs("div", {
          className: "x1apfuft x78zum5 xdt5ytf",
          children: [jsx("p", {
            ...Ay.props($.pseudoTitle),
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.if_you_cancel_more.will_lose_access")
          }), jsx("ul", {
            ...Ay.props($.ifYouCancelMoreList),
            children: a.map(({
              id: e,
              graphic: t,
              label: a,
              href: n,
              trackingDescriptor: s
            }) => jsx("li", {
              children: jsxs(_$$o, {
                ...Ay.props($.ifYouCancelMoreItem),
                newTab: !0,
                trusted: !0,
                href: n,
                trackingProperties: {
                  trackingDescriptor: s
                },
                "aria-label": a,
                children: [t, jsxs("span", {
                  children: [a, " \u2192"]
                })]
              })
            }, e))
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "link",
            onClick: e.onClose,
            trackingProperties: {
              trackingDescriptor: _$$c2.KEEP_PLAN
            },
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.keep_plan")
          }), jsx(_$$c, {
            variant: "secondary",
            onClick: n,
            trackingProperties: {
              trackingDescriptor: _$$c2.CONTINUE
            },
            children: getI18nString("general.continue")
          })]
        })
      })]
    })
  });
}
function z(e) {
  let [t, a] = useState(!1);
  let n = useModalManager({
    ...e,
    preventUserClose: t
  });
  let s = useDispatch();
  let i = useCallback(() => {
    a(!0);
    (async () => {
      let t = e.onClose;
      try {
        await Eh.scheduleCancellation({
          orgId: e.orgId
        });
      } catch (e) {
        s(VisualBellActions.enqueue({
          message: resolveMessage(e, getI18nString("org_admin_settings.schedule_cancellation_modal.generic_error")),
          error: !0
        }));
        a(!1);
        return;
      }
      try {
        await q(e.orgId);
      } catch (e) {
        logger.error(e);
      }
      s(VisualBellActions.enqueue({
        message: getI18nString("org_admin_settings.schedule_cancellation_modal.success", {
          orgName: e.orgName,
          scheduledCancellationDate: e.scheduledCancellationDate
        }),
        icon: VisualBellIcon.WARNING_EXCLAMATION_WITH_TRIANGLE
      }));
      t();
    })().catch(e => {
      logger.error(e);
      a(!1);
    });
  }, [s, e.orgId, e.onClose, e.orgName, e.scheduledCancellationDate]);
  return jsx(ModalRootComponent, {
    manager: n,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.title")
        })
      }), jsxs(nB, {
        children: [jsx("p", {
          children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.body", {
            scheduledCancellationDate: e.scheduledCancellationDate
          })
        }), jsx("br", {}), jsx("p", {
          children: renderI18nText("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.body2", {
            contactSupport: jsx(Ph, {
              href: "https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215",
              trusted: !0,
              newTab: !0,
              trackingProperties: {
                trackingDescriptor: _$$c2.CONTACT_SUPPORT
              },
              children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.contact_support")
            })
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "secondary",
            onClick: e.onClose,
            trackingProperties: {
              trackingDescriptor: _$$c2.GO_BACK
            },
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.go_back")
          }), jsx($z, {
            variant: "destructive",
            onClick: i,
            trackingProperties: {
              trackingDescriptor: _$$c2.CANCEL_PLAN
            },
            disabled: t,
            children: getI18nString("org_admin_settings.schedule_cancellation_modal.cancel_organization_plan.cancel_plan")
          })]
        })
      })]
    })
  });
}
function V(e) {
  let [t, a] = useState("if_you_cancel");
  let n = useMemo(() => _$$A(e.scheduledCancellationDate).toDate(), [e.scheduledCancellationDate]);
  return jsx("div", {
    style: {
      display: "contents"
    },
    "data-testid": `org-schedule-cancellation-modal-${t}`,
    children: jsx(fu, {
      name: e0.ORG_SCHEDULE_CANCELLATION_MODAL,
      properties: {
        orgId: e.orgId,
        step: t
      },
      children: "if_you_cancel" === t ? jsx(B, {
        ...e,
        scheduledCancellationDate: n,
        setStep: a
      }) : "if_you_cancel_more" === t ? jsx(G, {
        ...e,
        scheduledCancellationDate: n,
        setStep: a
      }) : "confirm_cancel" === t ? jsx(z, {
        ...e,
        scheduledCancellationDate: n
      }) : void throwTypeError(t, "Unexpected step in OrgScheduleCancellationModal")
    })
  });
}
function W(e) {
  let {
    onClose
  } = e;
  let a = useDispatch();
  let [n, s] = useState(!1);
  let i = useModalManager({
    ...e,
    preventUserClose: n
  });
  let r = useMemo(() => _$$A(e.scheduledCancellationDate).toDate(), [e.scheduledCancellationDate]);
  let c = useCallback(() => {
    s(!0);
    (async () => {
      try {
        await Eh.unscheduleCancellation({
          orgId: e.orgId
        });
      } catch (e) {
        a(VisualBellActions.enqueue({
          message: resolveMessage(e, getI18nString("org_admin_settings.unschedule_cancellation_modal.generic_error")),
          error: !0
        }));
        s(!1);
        return;
      }
      try {
        await q(e.orgId);
      } catch (e) {
        logger.error(e);
      }
      a(VisualBellActions.enqueue({
        message: getI18nString("org_admin_settings.unschedule_cancellation_modal.success"),
        icon: VisualBellIcon.CHECK_WITH_CIRCLE
      }));
      onClose();
    })().catch(e => {
      logger.error(e);
      s(!1);
    });
  }, [a, e.orgId, onClose]);
  return jsx(fu, {
    name: e0.ORG_UNSCHEDULE_CANCELLATION_MODAL,
    properties: {
      orgId: e.orgId
    },
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "md",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("org_admin_settings.unschedule_cancellation_modal.title")
          })
        }), jsx(nB, {
          children: getI18nString("org_admin_settings.unschedule_cancellation_modal.body", {
            scheduledCancellationDate: r
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($z, {
              variant: "secondary",
              onClick: e.onClose,
              trackingProperties: {
                trackingDescriptor: _$$c2.GO_BACK
              },
              children: getI18nString("modal.cancel")
            }), jsx($z, {
              variant: "primary",
              onClick: c,
              trackingProperties: {
                trackingDescriptor: _$$c2.REACTIVATE_PLAN
              },
              disabled: n,
              children: getI18nString("org_admin_settings.unschedule_cancellation_modal.reactivate_plan")
            })]
          })
        })]
      })
    })
  });
}
export var $$H0 = (e => (e.SCHEDULE = "schedule", e.UNSCHEDULE = "unschedule", e))($$H0 || {});
export function $$Y1(e) {
  let {
    isEligibleForCancellation,
    scheduledCancellationDate,
    cancelAtPeriodEnd
  } = e;
  return getFeatureFlags().scheduled_cancellation_enabled && scheduledCancellationDate ? cancelAtPeriodEnd ? {
    id: "unschedule",
    perform: ({
      dispatch: e,
      orgName: t,
      orgId: n
    }) => {
      e(showModalHandler({
        type: s ??= registerModal(W, "OrgUnscheduleCancellationModal"),
        data: {
          orgName: t,
          orgId: n,
          scheduledCancellationDate
        }
      }));
    },
    scheduledCancellationDate
  } : isEligibleForCancellation ? {
    id: "schedule",
    perform: ({
      dispatch: e,
      orgName: t,
      orgId: s
    }) => {
      e(showModalHandler({
        type: n ??= registerModal(V, "OrgScheduleCancellationModal"),
        data: {
          orgName: t,
          orgId: s,
          scheduledCancellationDate
        }
      }));
    }
  } : null : null;
}
export const a = $$H0;
export const h = $$Y1;