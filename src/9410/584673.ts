import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { b as _$$b, bL, mc, YJ, q7, Q$, Ov, N_, g8, ZP, MJ } from "../figma_app/860955";
import { E as _$$E } from "../905/53857";
import { EventShield } from "../905/821217";
import { t as _$$t } from "../905/947268";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import m from "classnames";
import { customHistory } from "../905/612521";
import { generateUUIDv4 } from "../905/871474";
import { sendUrlToParent } from "../figma_app/564528";
import { Badge, BadgeColor, BadgeSize } from "../figma_app/919079";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { b as _$$b2 } from "../905/985254";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { r1 } from "../figma_app/545877";
import { KindEnum } from "../905/129884";
import { c$ } from "../905/794875";
import { w as _$$w } from "../figma_app/654279";
import { v as _$$v } from "../figma_app/759243";
import { CI, v1 } from "../figma_app/761984";
import { Su } from "../9410/295369";
import { V as _$$V } from "../figma_app/144634";
import { Uj, Yh, PX, Y, Wb, Pn, z1, QL, E0, IW, Ef, u3, UI, kw } from "../9410/659371";
import { $n, W1 } from "../figma_app/439493";
import { Fn } from "../figma_app/769101";
import { _ as _$$_ } from "../figma_app/255873";
import { A as _$$A } from "../svg/735248";
import { A as _$$A2 } from "../1617/759863";
import { A as _$$A3 } from "../svg/228231";
let u = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5.5 5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5M4 5.5A1.5 1.5 0 0 1 5.5 4h4A1.5 1.5 0 0 1 11 5.5v4A1.5 1.5 0 0 1 9.5 11h-4A1.5 1.5 0 0 1 4 9.5zm12.015 7.94L15.5 15.5l-2.06.515c-.505.126-.505.844 0 .97l2.06.515.515 2.06c.126.505.844.505.97 0l.515-2.06 2.06-.515c.505-.126.505-.844 0-.97L17.5 15.5l-.515-2.06c-.126-.505-.844-.505-.97 0M9.5 14h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-4-1A1.5 1.5 0 0 0 4 14.5v4A1.5 1.5 0 0 0 5.5 20h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 9.5 13zm9-8h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m-1.5.5A1.5 1.5 0 0 1 14.5 4h4A1.5 1.5 0 0 1 20 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 13 9.5z",
      clipRule: "evenodd"
    })
  });
});
var f = m;
function N() {
  return jsx(_$$E, {
    variant: "defaultFilled",
    size: "md",
    children: renderI18nText("qa.ai")
  });
}
let K = "figjam_organize_sort_stickies_sub_menu";
let $$H0 = "https://help.figma.com/hc/articles/16822138920343-Use-AI-tools-in-Figma";
let z = "used_figjam_ai_quick_actions";
let V = r1(z);
function W(e) {
  switch (e) {
    case Uj.SUMMARIZE:
      return "summarize";
    case Uj.CLUSTER:
      return "sort stickies";
    case Uj.CREATE_FIGMA_SLIDES_OUTLINE:
      return "copy to slides";
    case Uj.CLUSTER_BY_AUTHOR:
      return "sort by author";
    case Uj.CLUSTER_BY_COLOR:
      return "sort by color";
    case Uj.CLUSTER_BY_STAMP_COUNT:
      return "sort by stamp count";
    case Uj.CLUSTER_BY_STAMP_TYPE:
      return "sort by stamp type";
    case Uj.OPEN_CLUSTER_BY_MORE_MENU:
      return "sort by more dropdown button";
    case Uj.TIDY_UP:
      return "tidy up";
    case Uj.WRAP_IN_SECTION:
      return "wrap in section";
    default:
      return "other organize action";
  }
}
export function $$Y1() {
  let e = Yh();
  let t = e.filter(e => !e?.disabled && !e?.isInClusterSubmenu);
  let i = e.filter(e => e?.disabled && !e?.isInClusterSubmenu);
  let s = generateUUIDv4();
  let u = PX();
  let [m, f] = useAtomValueAndSetter(Y);
  let g = Wb();
  let x = Pn();
  useEffect(() => g, [g]);
  useEffect(() => {
    m || x();
  }, [m, x]);
  let y = z1();
  let b = function () {
    let e = Yh();
    let t = QL();
    let i = E0();
    let r = [...e];
    for (let e of (i && (r = [...r, ...t]), r)) if (e && IW[e.type]) return !0;
    return !1;
  }();
  let E = getI18nString("whiteboard.inline_menu.organize_dropdown_options_aria_label");
  let S = [...t, ...i];
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let A = useDispatch();
  let L = CI();
  let M = useAtomWithSubscription(V).data;
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(TrackingProvider, {
    name: "organize_menu_dropdown",
    children: jsxs(bL, {
      manager,
      children: [jsx(_$$V, {
        variant: "menu",
        getTriggerProps: () => getTriggerProps({
          onClick: () => {
            b && A(_$$b2({
              [z]: !0
            }));
          }
        }),
        tooltip: getI18nString("whiteboard.inline_menu.organize_dropdown_button_aria_label"),
        ariaLabel: getI18nString("whiteboard.inline_menu.organize_dropdown_button_aria_label"),
        dataTestId: "inline_menu_organize_dropdown_button",
        recordingKey: "inline_menu_organize_dropdown_button",
        trackingProperties: {
          text: "organize dropdown button"
        },
        children: jsxs("div", {
          className: "x78zum5 x6s0dn4 x1jnr06f",
          children: [jsx(_$$t, {}), renderI18nText("whiteboard.inline_menu.organize_button_text"), !M && L && jsx(TrackingProvider, {
            name: "organize_actions_onboarding_badge",
            children: jsx(_$$E, {
              variant: "brandFilled",
              children: getI18nString("whiteboard.inline_menu.ai_quick_actions_onboarding_badge_2")
            })
          })]
        })
      }), jsxs(mc, {
        children: [jsx(YJ, {
          children: S.map(e => {
            if (!e) return null;
            let {
              type,
              disabled,
              displayText,
              fplIcon,
              disabledTooltipText,
              tooltipOverrides
            } = e;
            let c = tooltipOverrides?.tooltip || (disabled && disabledTooltipText ? disabledTooltipText : void 0);
            let p = tooltipOverrides?.tooltipType || KindEnum.TEXT;
            let h = Ef(e);
            return type === Uj.OPEN_CLUSTER_BY_MORE_MENU ? jsx($, {
              disabled
            }, type) : jsxs(q7, {
              disabled,
              onClick: () => u(e),
              recordingKey: Z(type),
              "data-testid": Z(type),
              "aria-label": displayText,
              htmlAttributes: {
                "data-tooltip": c,
                "data-tooltip-type": p,
                "data-tooltip-show-right": !0,
                "data-tooltip-text-left": !0,
                "data-tooltip-tip-align-left": !0
              },
              children: [fplIcon && jsx(Q$, {
                children: jsx("div", {
                  className: "x30jfuo",
                  children: fplIcon
                })
              }), displayText, h && jsx(Ov, {
                children: jsx(EventShield, {
                  eventListeners: ["onClick", "onPointerUp", "onMouseUp"],
                  children: jsx(N, {})
                })
              })]
            }, type);
          })
        }), jsx(N_, {
          href: $$H0,
          newTab: !0,
          trusted: !0,
          children: jsx(_$$_, {})
        })]
      })]
    })
  }) : jsx(TrackingProvider, {
    name: "organize_menu_dropdown",
    children: jsx(Fn, {
      OptionWrapper: function ({
        children: e
      }) {
        return jsx("div", {
          className: "organize_actions_control--flexColumn--p-Sra",
          "aria-label": E,
          id: s,
          role: "listbox",
          tabIndex: -1,
          "data-fullscreen-intercept": !0,
          children: e
        });
      },
      additionalContentsBottom: jsx("div", {
        className: _$$s.mt4.$
      }),
      additionalContentsTop: jsx("div", {
        className: _$$s.mt4.$
      }),
      onChange: (e, t) => {
        t.preventDefault();
        t.stopPropagation();
        u(e);
      },
      options: S,
      overrideMenuOpenState: {
        isOpenOverride: m,
        setIsOpenOverride: f
      },
      popoverClassName: "organize_actions_control--popover--l143N",
      positionX: e => e.x,
      renderButton: ({
        onClick: e,
        onKeyDown: t,
        ref: i
      }) => jsx(J, {
        disabled: !1,
        onClick: e,
        onKeyDown: e => y(e, t),
        buttonRef: i,
        ariaWrapperId: s,
        trackingProperties: {
          text: "organize dropdown button"
        },
        dropdownContainsAiOption: b
      }),
      renderOption: X,
      value: void 0
    })
  });
}
let J = withTrackedClick(function ({
  onClick: e,
  onKeyDown: t,
  buttonRef: i,
  ariaWrapperId: o,
  disabled: l,
  dropdownContainsAiOption: d
}) {
  let c = useDispatch();
  let u = useAtomWithSubscription(V).data;
  let p = CI();
  let [m, g] = useState(0);
  let _ = getI18nString("whiteboard.inline_menu.organize_dropdown_button_aria_label");
  return jsx($n, {
    ref: i,
    ariaControls: o,
    ariaLabel: _,
    buttonChildrenStyle: {
      justifyContent: "initial",
      width: "initial"
    },
    buttonStyle: {
      width: "auto",
      paddingRight: 24
    },
    caret: "down",
    disabled: l,
    onClick: l ? lQ : () => {
      e();
      d && c(_$$b2({
        [z]: !0
      }));
    },
    onKeyDown: t,
    onboardingKey: Su,
    recordingKey: "inline_menu_organize_dropdown_button",
    role: "combobox",
    testId: "inline_menu_organize_dropdown_button",
    tooltip: l ? _$$w : void 0,
    tooltipType: l ? KindEnum.SPECIAL : void 0,
    children: jsxs("div", {
      className: "organize_actions_control--withBadge--2qE6m",
      children: [jsx("div", {
        className: "organize_actions_control--buttonIconContainer--7BE5y",
        children: jsx(SvgComponent, {
          svg: _$$A3,
          className: f()("organize_actions_control--svgIcon--Y27OU", {
            "organize_actions_control--svgIconDisabled--siNy6": l
          })
        })
      }), renderI18nText("whiteboard.inline_menu.organize_button_text"), !u && p && jsx(TrackingProvider, {
        name: "organize_actions_onboarding_badge",
        children: jsx("div", {
          style: {
            paddingLeft: 8
          },
          ref: e => {
            g(e?.offsetWidth || m);
          },
          children: jsx(Badge, {
            text: getI18nString("whiteboard.inline_menu.ai_quick_actions_onboarding_badge_2"),
            color: BadgeColor.FIGJAM,
            size: BadgeSize.SMALL,
            className: "organize_actions_control--onboardingBadge--NG7o-",
            dataTestId: "figjam_ai_quick_actions_onboarding_badge"
          })
        })
      })]
    })
  });
});
function q({
  isFocused: e
}) {
  let t = v1();
  let i = PX();
  let a = QL();
  let o = useAtomWithSubscription(u3);
  let [l, d] = useAtomValueAndSetter(UI);
  let [c, u] = useAtomValueAndSetter(kw);
  let [p, m] = useState(!1);
  return (useEffect(() => {
    let e = setTimeout(() => {
      m(!0);
    }, 200);
    return () => {
      clearTimeout(e);
    };
  }, [m]), useEffect(() => {
    e ? u(!0) : u(!1);
  }, [e, u]), t) ? jsxs("div", {
    onMouseEnter: () => {
      p && d(!0);
    },
    onMouseLeave: () => {
      d(!1);
    },
    "data-testid": "whiteboard_organize_sort_sub_menu_wrapper",
    children: [jsx(Q, {
      ariaLabel: getI18nString("whiteboard.inline_menu.arrange_stickies_dropdown_button_aria_label"),
      disabled: !1,
      displayText: getI18nString("whiteboard.inline_menu.sort_by_dropdown_button_text_2"),
      id: `${Uj.OPEN_CLUSTER_BY_MORE_MENU}-menu-option`,
      isAiOption: !1,
      isFocused: e,
      isSubMenu: !0,
      onClick: () => {
        l || d(!l);
      },
      onKeyDown: () => {
        d(!l);
      },
      svgSrc: _$$A,
      trackingProperties: {
        text: W(Uj.OPEN_CLUSTER_BY_MORE_MENU)
      },
      type: Uj.OPEN_CLUSTER_BY_MORE_MENU
    }, `${Uj.OPEN_CLUSTER_BY_MORE_MENU}-menu-option`), l && jsx(TrackingProvider, {
      name: K,
      children: jsx("div", {
        className: "organize_actions_control--submenuPopover--3lKOZ",
        children: jsx("div", {
          className: "organize_actions_control--submenuContainer--TmBn7",
          children: jsx(W1, {
            children: jsx("div", {
              className: _$$s.flex.flexColumn.py6.w200.$,
              "aria-label": getI18nString("whiteboard.inline_menu.arrange_stickies_dropdown_button_aria_label"),
              role: "listbox",
              tabIndex: -1,
              "data-fullscreen-intercept": !0,
              children: a.map((e, t) => X({
                value: e,
                onClick: () => i(e),
                onKeyDown: lQ,
                isSelected: !1,
                isFocused: o === t
              }))
            })
          })
        })
      })
    })]
  }) : null;
}
let X = e => {
  let {
    value,
    onClick,
    id,
    isFocused,
    onKeyDown
  } = e;
  if (!value) return null;
  let o = Ef(value);
  let {
    type,
    disabled,
    displayText,
    svgSrc,
    disabledTooltipText,
    tooltipOverrides
  } = value;
  let m = W(type);
  return type === Uj.OPEN_CLUSTER_BY_MORE_MENU ? jsx(q, {
    isFocused
  }, Uj.OPEN_CLUSTER_BY_MORE_MENU) : jsx(Q, {
    disabled,
    disabledTooltipText,
    displayText,
    id,
    isAiOption: o,
    isFocused,
    onClick,
    onKeyDown,
    svgSrc,
    tooltipOverrides,
    trackingProperties: {
      text: m
    },
    type
  }, `${type}-menu-option`);
};
function Z(e) {
  return `inline_menu_organize_option-${e}`;
}
let Q = withTrackedClick(function ({
  id: e,
  type: t,
  displayText: i,
  svgSrc: n,
  disabledTooltipText: a,
  disabled: o,
  onClick: l,
  onKeyDown: c,
  isFocused: u,
  tooltipOverrides: p,
  isAiOption: h,
  isSubMenu: m,
  ariaLabel: _
}) {
  let y = p?.tooltip || (o && a ? a : "");
  let v = p?.tooltipType || KindEnum.TEXT;
  return jsx(Fragment, {
    children: jsx("div", {
      "aria-label": _ ?? i,
      "aria-selected": "false",
      className: f()("organize_actions_control--optionContainer--RtoCw", {
        "organize_actions_control--optionContainerDisabled--mB76I": o,
        "organize_actions_control--optionContainerIsFocused--8x27n": u
      }),
      "data-tooltip": y,
      "data-tooltip-offset-x": 6,
      "data-tooltip-show-right": !0,
      "data-tooltip-text-left": !0,
      "data-tooltip-tip-align-left": !0,
      "data-tooltip-type": v,
      id: e,
      role: "option",
      tabIndex: -1,
      children: jsx(c$, {
        children: jsxs("div", {
          className: _$$s.flex.justifyBetween.itemsCenter.gap8.$,
          children: [jsx(TextWithTruncation, {
            truncate: !0,
            children: i
          }), h && jsx(EventShield, {
            eventListeners: ["onClick", "onPointerUp", "onMouseUp"],
            children: jsx(_$$v, {
              location: "INLINE_TOOLBAR",
              hoverStyleClassName: f()({
                "organize_actions_control--aiBetaBadge--F1z9L": !o
              }),
              onPointerUp: () => {
                sendUrlToParent($$H0) || customHistory.unsafeRedirect($$H0, "_blank");
              }
            })
          }), m && jsx("span", {
            className: _$$s.pl4.mr0.$,
            children: jsx(SvgComponent, {
              svg: _$$A2
            })
          })]
        }),
        additionalStylesClassName: void 0,
        "data-testid": Z(t),
        dataTestId: Z(t),
        disabled: o,
        fullWidth: !0,
        height: 32,
        ignoreCheck: !0,
        onKeyDown: o ? lQ : c,
        onMouseUp: o ? lQ : l,
        recordingKey: Z(t),
        selected: !1,
        style: {
          width: "95%",
          marginBottom: 0
        },
        svg: n,
        value: t
      }, `option-${t}`)
    })
  });
});
function $({
  disabled: e
}) {
  let t = v1();
  let i = QL();
  let n = PX();
  return t ? jsx(TrackingProvider, {
    name: K,
    children: jsxs(g8, {
      children: [jsxs(ZP, {
        disabled: e,
        recordingKey: Z(Uj.OPEN_CLUSTER_BY_MORE_MENU),
        "data-testid": Z(Uj.OPEN_CLUSTER_BY_MORE_MENU),
        "aria-label": getI18nString("whiteboard.inline_menu.arrange_stickies_dropdown_button_aria_label"),
        children: [jsx(Q$, {
          children: jsx("div", {
            className: "x30jfuo",
            children: jsx(u, {})
          })
        }), getI18nString("whiteboard.inline_menu.sort_by_dropdown_button_text_2")]
      }), jsx(MJ, {
        children: jsx(YJ, {
          children: i.map(e => {
            if (!e) return null;
            let {
              type,
              disabled,
              displayText,
              svgSrc
            } = e;
            let l = Ef(e);
            return jsxs(q7, {
              disabled,
              onClick: () => n(e),
              recordingKey: Z(type),
              "data-testid": Z(type),
              "aria-label": displayText,
              children: [svgSrc && jsx(Q$, {
                children: jsx("div", {
                  className: "x30jfuo",
                  children: jsx(SvgComponent, {
                    svg: svgSrc
                  })
                })
              }), displayText, l && jsx(Ov, {
                children: jsx(EventShield, {
                  eventListeners: ["onClick", "onPointerUp", "onMouseUp"],
                  children: jsx(N, {})
                })
              })]
            }, type);
          })
        })
      })]
    })
  }) : null;
}
export const nG = $$H0;
export const tT = $$Y1;