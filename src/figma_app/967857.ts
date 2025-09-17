import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuGroupComp, MenuTitleComp, MenuItemComp, MenuItemLead, MenuLinkComp } from "../figma_app/860955";
import { E as _$$E } from "../905/53857";
import { EventShield } from "../905/821217";
import { N as _$$N } from "../905/438674";
import { O as _$$O } from "../figma_app/114128";
import { $ as _$$$ } from "../figma_app/183557";
import { r } from "../figma_app/6042";
import { C as _$$C } from "../905/47358";
import { setupThemeContext } from "../905/614223";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import y from "classnames";
import { customHistory } from "../905/612521";
import { generateUUIDv4 } from "../905/871474";
import { sendUrlToParent } from "../figma_app/564528";
import { a as _$$a } from "../905/29104";
import { Badge, BadgeColor, BadgeSize } from "../figma_app/919079";
import { wv } from "../figma_app/236327";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { postUserFlag } from "../905/985254";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { KindEnum } from "../905/129884";
import { c$ } from "../905/794875";
import { w as _$$w } from "../figma_app/654279";
import { v as _$$v } from "../figma_app/759243";
import { isHandbrakeDisabledForCurrentUser } from "../figma_app/757723";
import { f as _$$f } from "../figma_app/481968";
import { QP } from "../figma_app/761984";
import { S as _$$S } from "../figma_app/773693";
import { ss } from "../figma_app/402783";
import { _ as _$$_ } from "../figma_app/255873";
import { V as _$$V } from "../figma_app/144634";
import { f as _$$f2 } from "../905/299537";
import { $n } from "../figma_app/439493";
import { Fn } from "../figma_app/769101";
import { T1, DH } from "../figma_app/90441";
import { A as _$$A } from "../svg/114059";
import { A as _$$A2 } from "../svg/966821";
import { A as _$$A3 } from "../svg/636569";
import { A as _$$A4 } from "../svg/339098";
var b = y;
export let $$J1 = "https://help.figma.com/hc/articles/16822138920343-Use-AI-tools-in-Figma";
export var $$Z2 = (e => (e.SUMMARIZE = "summarize", e.CLUSTER = "cluster", e.GENERATE_IDEAS = "generate_ideas", e))($$Z2 || {});
function Q(e) {
  switch (e) {
    case "summarize":
      return {
        displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_summarize_button"),
        svgSrc: _$$A4,
        disabledTooltipText: getI18nString("whiteboard.inline_menu.ai_quick_actions_summarize_disabled_tooltip", {
          minSelectedStickies: 2
        }),
        icon: jsx(_$$O, {})
      };
    case "cluster":
      return {
        displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_button"),
        svgSrc: _$$A3,
        disabledTooltipText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_disabled_tooltip", {
          minSelectedStickies: 2
        }),
        icon: jsx(_$$$, {})
      };
    case "generate_ideas":
      return {
        displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_generate_ideas_button"),
        svgSrc: _$$A2,
        disabledTooltipText: getI18nString("whiteboard.inline_menu.ai_quick_actions_generate_ideas_disabled_tooltip"),
        icon: jsx(r, {})
      };
  }
}
let $$ee3 = userFlagExistsAtomFamily("used_figjam_ai_quick_actions");
let et = "used_figjam_ai_mindmaps_inline_menu";
let er = "figjam ai";
let en = userFlagExistsAtomFamily(et);
export function $$ei4() {
  let e = useAtomWithSubscription(_$$f2).positionRelativeToSelection;
  let {
    summarizeCanvasSelection
  } = ss(e, void 0, "INLINE_TOOLBAR");
  let {
    clusterCanvasSelection
  } = _$$f();
  let {
    expandSelectedMindmapNode
  } = _$$S();
  return e => {
    let i = lQ;
    let a = "";
    if (e) {
      switch (e.type) {
        case "summarize":
          i = summarizeCanvasSelection;
          a = "ai-quick-action-summarize";
          break;
        case "cluster":
          i = clusterCanvasSelection;
          a = "ai-quick-action-cluster";
          break;
        case "generate_ideas":
          i = expandSelectedMindmapNode;
          a = "ai-quick-action-generate-ideas";
      }
      permissionScopeHandler.user(a, i);
    }
  };
}
export function $$ea0() {
  var e;
  let t = generateUUIDv4();
  let r = $$ei4();
  let a = getFeatureFlags().figjam_synthesize_handbrake;
  let [s, c] = useState(!1);
  let u = [...function () {
    let e = QP();
    let t = [];
    e && t.push({
      type: "generate_ideas",
      enabled: e
    });
    return t;
  }()];
  let {
    shouldShowBadge,
    setUserFlagsCallback
  } = es(u);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(TrackingProvider, {
    name: "ai_quick_actions_dropdown",
    children: [jsx(_$$V, {
      variant: "menu",
      getTriggerProps: () => getTriggerProps({
        onClick: () => {
          a || setUserFlagsCallback();
        }
      }),
      tooltip: a ? _$$w : getI18nString("whiteboard.inline_menu.ai_quick_actions_header_text"),
      ariaLabel: getI18nString("whiteboard.inline_menu.ai_quick_actions_header_text"),
      dataTestId: "toolbarAIQuickActionsDropdownButton",
      recordingKey: "toolbarAIQuickActionsDropdownButton",
      disabled: a,
      trackingProperties: {
        text: er
      },
      children: jsxs("div", {
        className: "x78zum5 x6s0dn4 x1nfngrj",
        children: [jsx(_$$C, {}), shouldShowBadge && jsx(TrackingProvider, {
          name: "ai_quick_actions_onboarding_badge",
          children: jsx(_$$E, {
            variant: "brandFilled",
            children: getI18nString("whiteboard.inline_menu.ai_quick_actions_onboarding_badge_2")
          })
        })]
      })
    }), jsx(MenuRootComp, {
      manager,
      children: jsxs(MenuContainerComp, {
        children: [jsx(MenuGroupComp, {
          title: jsx(MenuTitleComp, {
            children: getI18nString("whiteboard.inline_menu.ai_quick_actions_header_text")
          }),
          children: u.map(e => {
            if (!e) return null;
            let {
              type,
              enabled
            } = e;
            let {
              displayText,
              disabledTooltipText,
              icon
            } = Q(type);
            return jsxs(MenuItemComp, {
              disabled: !enabled,
              onClick: () => r(e),
              "data-testid": `ai-quick-action-${type}`,
              "aria-label": displayText,
              htmlAttributes: enabled ? void 0 : {
                "data-tooltip": disabledTooltipText,
                "data-tooltip-type": KindEnum.TEXT
              },
              children: [icon && jsx(MenuItemLead, {
                children: jsx("div", {
                  className: "x78zum5 x6s0dn4 xl56j7k x1t68hxm",
                  children: icon
                })
              }), displayText]
            }, type);
          })
        }), jsx(MenuLinkComp, {
          href: $$J1,
          newTab: !0,
          trusted: !0,
          children: jsx(_$$_, {})
        })]
      })
    })]
  }) : jsx(Fn, {
    OptionWrapper: (e = getI18nString("whiteboard.inline_menu.ai_quick_actions_dropdown_options_aria_label"), function ({
      children: r
    }) {
      return jsx("div", {
        className: "ai_quick_actions_control--flexColumn--kgAdX",
        "aria-label": e,
        id: t,
        role: "listbox",
        tabIndex: -1,
        "data-fullscreen-intercept": !0,
        children: r
      });
    }),
    additionalContentsTop: function ({
      closeMenu: e
    }) {
      let t = _$$a() ? getI18nString("whiteboard.inline_menu.ai_quick_actions_beta_badge_text") : "";
      return jsxs("div", {
        className: "ai_quick_actions_control--dropdownHeaderContainer--ifOPr",
        onClick: e,
        role: "button",
        tabIndex: 0,
        children: [jsx("div", {
          className: "ai_quick_actions_control--dropdownHeaderTitle--Cqg8n",
          children: renderI18nText("whiteboard.inline_menu.ai_quick_actions_header_text")
        }), jsx("div", {
          className: "ai_quick_actions_control--badgeContainer--kBpYM",
          children: jsx(EventShield, {
            eventListeners: ["onClick", "onPointerUp", "onMouseUp"],
            children: jsx(_$$v, {
              location: "INLINE_TOOLBAR",
              overrideText: t
            })
          })
        })]
      });
    }({
      closeMenu: () => c(!1)
    }),
    additionalOptionOnChange: () => {
      sendUrlToParent($$J1) || customHistory.unsafeRedirect($$J1, "_blank");
    },
    additionalOptions: el,
    onChange: r,
    options: u,
    overrideMenuOpenState: {
      isOpenOverride: s,
      setIsOpenOverride: c
    },
    popoverClassName: "ai_quick_actions_control--popover--BNsqs",
    positionX: e => e.x,
    renderButton: ({
      onClick: e,
      onKeyDown: r,
      ref: i
    }) => jsx(eo, {
      onClick: e,
      onKeyDown: r,
      buttonRef: i,
      ariaWrapperId: t,
      disabled: !!a,
      trackingProperties: {
        text: er
      },
      dropdownMenuOptions: u
    }),
    renderOption: ed,
    responsivePositionY: {
      aboveTargetPositionY: (e, t, r) => T1(e, t, r + -48),
      belowTargetPositionY: (e, t, r) => DH(e, t, r + -48)
    },
    value: void 0
  });
}
function es(e) {
  var t;
  let r = useDispatch();
  t = ["generate_ideas"];
  let n = !!e.find(e => e && t.includes(e.type));
  return {
    shouldShowBadge: function (e) {
      let t = isHandbrakeDisabledForCurrentUser();
      let r = useAtomWithSubscription(en).data;
      return !!(t && !r && e);
    }(n),
    setUserFlagsCallback: useCallback(() => {
      n && r(postUserFlag({
        [et]: !0
      }));
    }, [n, r])
  };
}
let eo = withTrackedClick(function ({
  onClick: e,
  onKeyDown: t,
  buttonRef: r,
  ariaWrapperId: a,
  disabled: o,
  dropdownMenuOptions: l
}) {
  let [d, c] = useState(0);
  let {
    shouldShowBadge,
    setUserFlagsCallback
  } = es(l);
  return jsx($n, {
    ref: r,
    ariaControls: a,
    ariaLabel: getI18nString("whiteboard.inline_menu.ai_quick_actions_button_aria_label"),
    buttonChildrenStyle: {
      justifyContent: "initial",
      width: "initial"
    },
    buttonStyle: {
      width: shouldShowBadge ? 48 + d + 8 : 48
    },
    caret: "down",
    disabled: o,
    onClick: o ? lQ : () => {
      e();
      setUserFlagsCallback();
    },
    onKeyDown: t,
    recordingKey: "toolbarAIQuickActionsDropdownButton",
    role: "combobox",
    testId: "toolbarAIQuickActionsDropdownButton",
    tooltip: _$$w,
    tooltipType: KindEnum.SPECIAL,
    children: jsxs("div", {
      className: b()({
        "ai_quick_actions_control--withBadge--z88DK": shouldShowBadge
      }),
      children: [jsx("div", {
        className: "ai_quick_actions_control--buttonIconContainer--pBGdR",
        children: jsx(SvgComponent, {
          svg: _$$A,
          className: b()("ai_quick_actions_control--svgIcon--XDs5m", {
            "ai_quick_actions_control--svgIconDisabled--u4WwB": o
          })
        })
      }), shouldShowBadge && jsx(TrackingProvider, {
        name: "ai_quick_actions_onboarding_badge",
        children: jsx("div", {
          ref: e => {
            c(e?.offsetWidth || d);
          },
          children: jsx(Badge, {
            text: getI18nString("whiteboard.inline_menu.ai_quick_actions_onboarding_badge_2"),
            color: BadgeColor.FIGJAM,
            size: BadgeSize.SMALL,
            className: "ai_quick_actions_control--onboardingBadge---sKJz"
          })
        })
      })]
    })
  });
});
function el() {
  return jsxs(Fragment, {
    children: [jsx(wv, {}, "menu-separator-token"), jsx("div", {
      className: "ai_quick_actions_control--dropdownFooterContainer--1d8mD",
      children: jsxs("span", {
        children: [jsx("span", {
          className: "ai_quick_actions_control--dropdownFooterDisclaimer--UVXvJ",
          children: getI18nString("whiteboard.inline_menu.ai_quick_actions_dropdown_disclaimer")
        }), "\xa0", jsx(setupThemeContext, {
          brand: "whiteboard",
          mode: "dark",
          children: jsx(_$$N, {
            href: $$J1,
            newTab: !0,
            trusted: !0,
            children: renderI18nText("whiteboard.inline_menu.ai_quick_actions_dropdown_disclaimer_cta")
          })
        })]
      })
    })]
  });
}
let ed = e => {
  let {
    value,
    onClick,
    id,
    isFocused
  } = e;
  if (!value) return null;
  let {
    type,
    enabled
  } = value;
  let {
    displayText,
    svgSrc,
    disabledTooltipText
  } = Q(type);
  let u = "generate_ideas" === type ? "generate ideas" : "other ai action";
  return jsx(ec, {
    disabled: !enabled,
    disabledTooltipText,
    displayText,
    id,
    isFocused,
    onClick,
    svgSrc,
    trackingProperties: {
      text: u
    },
    type
  }, `${type}-menu-option`);
};
let ec = withTrackedClick(function ({
  id: e,
  type: t,
  displayText: r,
  svgSrc: i,
  disabledTooltipText: a,
  disabled: o,
  onClick: l,
  isFocused: d
}) {
  return jsx("div", {
    "aria-label": r,
    "aria-selected": "false",
    className: b()("ai_quick_actions_control--optionContainer--pbhnv", {
      "ai_quick_actions_control--optionContainerDisabled--Sxua-": o,
      "ai_quick_actions_control--optionContainerIsFocused--AD1hq": d
    }),
    "data-tooltip": o ? a : "",
    "data-tooltip-offset-x": 6,
    "data-tooltip-show-right": !0,
    "data-tooltip-tip-align-left": !0,
    "data-tooltip-type": KindEnum.TEXT,
    id: e,
    role: "option",
    tabIndex: -1,
    children: jsx(c$, {
      additionalStylesClassName: void 0,
      "data-testid": `aiQuickActionsOption-${t}`,
      dataTestId: `aiQuickActionsOption-${t}`,
      disabled: o,
      formattedValue: r,
      fullWidth: !0,
      height: 32,
      ignoreCheck: !0,
      onMouseUp: o ? lQ : l,
      recordingKey: `aiQuickActionsOption-${t}`,
      selected: !1,
      style: {
        marginLeft: 8
      },
      svg: i,
      value: t
    }, `option-${t}`)
  });
});
export const s_ = $$ea0;
export const nG = $$J1;
export const Ay = $$Z2;
export const Bl = $$ee3;
export const dA = $$ei4;