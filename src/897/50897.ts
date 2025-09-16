import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useId, PureComponent } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { A as _$$A } from "../figma_app/121266";
import { v as _$$v } from "../905/439487";
import { o as _$$o } from "../905/89370";
import { W as _$$W } from "../905/592530";
import { N as _$$N } from "../905/7587";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { isInteractionPathCheck } from "../figma_app/897289";
import { getI18nString, renderI18nText } from "../905/303541";
import { _r, el } from "../figma_app/451499";
import { isSitesFileType } from "../figma_app/976749";
import { EU } from "../figma_app/740163";
import { isValidValue, normalizeValue, valueOrFallback, isInvalidValue } from "../905/216495";
import { Um as _$$Um } from "../905/848862";
import { _P } from "../figma_app/2590";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { W4 } from "../figma_app/178475";
import { R as _$$R } from "../897/631032";
import { PQ, F4, xX } from "../897/564585";
import { w_, J5 } from "../897/602108";
import { x as _$$x } from "../897/253631";
import { A as _$$A2 } from "../897/590880";
import { Zk } from "../figma_app/626177";
import { l6, c$ as _$$c$, sK } from "../905/794875";
import { BG, $2, SA, ub } from "../897/961984";
import { TN } from "../figma_app/334459";
import { y as _$$y, O as _$$O } from "../897/572017";
import { Lp, Gl } from "../897/934363";
import { DxS } from "../figma_app/27776";
import { dR, xy, RG, ai, hF } from "../897/641331";
var G = ["LINEAR", "SELECT_DIVIDER", "EASE_IN", "EASE_OUT", "EASE_IN_AND_OUT", "EASE_IN_BACK", "EASE_OUT_BACK", "EASE_IN_AND_OUT_BACK", "CUSTOM_BEZIER", "SELECT_DIVIDER", "GENTLE", "QUICK", "BOUNCY", "SLOW", "CUSTOM_SPRING"];
let K = {
  scrollTo: ["INSTANT", "SCROLL_ANIMATE"],
  nonScrollTo: ["INSTANT", "DISSOLVE", "SMART_ANIMATE", "SELECT_DIVIDER", "MOVE", "MOVE_OUT", "PUSH", "SLIDE", "SLIDE_OUT"]
};
function W(e, t, n, i) {
  let r = "DRAG" !== e || "INSTANT" !== n && "DISSOLVE" !== n;
  let a = !1;
  switch (t) {
    case "NAVIGATE":
      a = "SCROLL_ANIMATE" !== n;
      break;
    case "OVERLAY":
      a = ["INSTANT", "DISSOLVE", "MOVE"].indexOf(n ?? "") >= 0;
      break;
    case "SCROLL_TO":
      a = !i && ["INSTANT", "SCROLL_ANIMATE"].indexOf(n ?? "") >= 0;
      break;
    case "SWAP":
      a = ["INSTANT", "DISSOLVE", "MOVE", "SMART_ANIMATE"].indexOf(n ?? "") >= 0;
      break;
    case "SWAP_STATE":
      a = ["INSTANT", "DISSOLVE", "SMART_ANIMATE"].indexOf(n ?? "") >= 0;
  }
  return a && r;
}
let k = "RIGHT";
function z(e) {
  switch (e.behavior) {
    case "INSTANT":
      return {
        transitionType: "INSTANT_TRANSITION"
      };
    case "DISSOLVE":
      return {
        transitionType: "DISSOLVE"
      };
    case "FADE":
      return {
        transitionType: "FADE"
      };
    case "PUSH":
    case "SLIDE":
    case "MOVE":
      if (!e.direction) return {
        transitionType: `${e.behavior}_FROM_${k}`
      };
      return {
        transitionType: `${e.behavior}_FROM_${e.direction}`
      };
    case "SLIDE_OUT":
    case "MOVE_OUT":
      if (!e.direction) return {
        transitionType: `${e.behavior}_TO_${k}`
      };
      return {
        transitionType: `${e.behavior}_TO_${e.direction}`
      };
    case "SMART_ANIMATE":
      return {
        transitionType: "SMART_ANIMATE"
      };
    case "SCROLL_ANIMATE":
      return {
        transitionType: "SCROLL_ANIMATE"
      };
    default:
      return {};
  }
}
function H(e) {
  switch (e.easing) {
    case "EASE_IN":
      return {
        easingType: "IN_CUBIC"
      };
    case "EASE_OUT":
      return {
        easingType: "OUT_CUBIC"
      };
    case "EASE_IN_AND_OUT":
      return {
        easingType: "INOUT_CUBIC"
      };
    case "LINEAR":
      return {
        easingType: "LINEAR"
      };
    case "EASE_IN_BACK":
      return {
        easingType: "IN_BACK_CUBIC"
      };
    case "EASE_OUT_BACK":
      return {
        easingType: "OUT_BACK_CUBIC"
      };
    case "EASE_IN_AND_OUT_BACK":
      return {
        easingType: "INOUT_BACK_CUBIC"
      };
    case "CUSTOM_BEZIER":
      return {
        easingType: "CUSTOM_CUBIC"
      };
    case "GENTLE":
      return {
        easingType: "GENTLE_SPRING"
      };
    case "QUICK":
      return {
        easingType: "SPRING_PRESET_ONE"
      };
    case "BOUNCY":
      return {
        easingType: "SPRING_PRESET_TWO"
      };
    case "SLOW":
      return {
        easingType: "SPRING_PRESET_THREE"
      };
    case "CUSTOM_SPRING":
      return {
        easingType: "CUSTOM_SPRING"
      };
    default:
      return {};
  }
}
function $(e) {
  return "GENTLE" === e || "QUICK" === e || "BOUNCY" === e || "SLOW" === e || "CUSTOM_SPRING" === e;
}
function X(e, t) {
  switch (e.easing) {
    case "EASE_IN":
      return {
        easingFunction: [.42, 0, 1, 1]
      };
    case "EASE_OUT":
      return {
        easingFunction: [0, 0, .58, 1]
      };
    case "EASE_IN_AND_OUT":
      return {
        easingFunction: [.42, 0, .58, 1]
      };
    case "LINEAR":
      return {
        easingFunction: [0, 0, 1, 1]
      };
    case "EASE_IN_BACK":
      return {
        easingFunction: [.3, -.05, .7, -.5]
      };
    case "EASE_OUT_BACK":
      return {
        easingFunction: [.45, 1.45, .8, 1]
      };
    case "EASE_IN_AND_OUT_BACK":
      return {
        easingFunction: [.7, -.4, .4, 1.4]
      };
    case "CUSTOM_BEZIER":
      return !isValidValue(e.easingFunction) || t ? {
        easingFunction: [0, 0, .58, 1]
      } : {
        easingFunction: e.easingFunction
      };
    case "GENTLE":
      return {
        easingFunction: [1, 100, 15, 0]
      };
    case "QUICK":
      return {
        easingFunction: [1, 300, 20, 0]
      };
    case "BOUNCY":
      return {
        easingFunction: [1, 600, 15, 0]
      };
    case "SLOW":
      return {
        easingFunction: [1, 80, 20, 0]
      };
    case "CUSTOM_SPRING":
      return !isValidValue(e.easingFunction) || t ? {
        easingFunction: [1, 100, 15, 0]
      } : {
        easingFunction: w_(e.easingFunction)
      };
    default:
      return {};
  }
}
function Y(e, t) {
  if (isValidValue(e.easing)) {
    if ($(e.easing)) {
      let n = X(e, t).easingFunction;
      if (n && isValidValue(n)) return {
        transitionDuration: J5(n)
      };
    } else if (t) return {
      transitionDuration: .3
    };
  }
  if (isValidValue(e.duration)) return e.duration ? {
    transitionDuration: e.duration
  } : {};
}
export function $$q2({
  transition: e,
  interactionType: t,
  navigationType: n,
  recordingKey: l,
  isNarrowPanel: c,
  stateManagementVersion: u,
  updateSelectionProperties: _
}) {
  let d = useDispatch();
  let h = _$$Um();
  let T = EU();
  let w = useAtomWithSubscription(_$$x);
  let P = (t, n) => {
    let i = e.easingFunction;
    if (isValidValue(i)) {
      let e = PQ(t, w_(i));
      let r = J5(e);
      _({
        easingFunction: e,
        transitionDuration: r
      });
      BG.trigger("restartSpringAnimation");
      n === yesNoTrackingEnum.YES && d(_P({
        name: "Prototype Spring Animations Set Custom Value",
        params: {
          editedValue: "DURATION",
          ...F4(e)
        }
      }));
    }
  };
  let B = normalizeValue(e.behavior);
  let G = normalizeValue(n);
  let K = "NAVIGATE" === G;
  let k = "INSTANT" !== e.behavior && "DISSOLVE" !== e.behavior && "SMART_ANIMATE" !== e.behavior && "SCROLL_ANIMATE" !== e.behavior;
  let q = isSitesFileType();
  let Z = "INSTANT" !== e.behavior && W(t, G, normalizeValue(e.behavior), q);
  let J = Z && !w;
  let Q = !e.isSpringTransition || "INSTANT" === e.behavior;
  let ee = "INSTANT" === e.behavior;
  let et = useId();
  let ei = jsx($$ea1, {
    ariaLabelledBy: et,
    className: dR,
    property: e.easing,
    dispatch: d,
    dropdownShown: h,
    onChange: t => {
      d(_P({
        name: "Prototype Transition Easing Changed",
        params: {
          newEasing: t
        }
      }));
      let n = {
        ...e,
        easing: t
      };
      let i = e.easing;
      let r = !isValidValue(i) || $(t) !== $(i);
      _({
        ...H(n),
        ...X(n, r),
        ...Y(n, r)
      });
      setTimeout(() => {
        $(t) ? BG.trigger("restartSpringAnimation") : $2.trigger("activateBezierAnimation");
      }, 0);
    },
    recordingKey: generateRecordingKey(l, "easingDropdown")
  });
  let er = jsxs(Fragment, {
    children: [Q && jsx(W4, {
      className: Lp,
      "data-tooltip": getI18nString("proto.animation_panel.easing_duration_tooltip"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: d,
      inputClassName: Gl,
      onValueChange: t => {
        d(_P({
          name: "Prototype Transition Duration Changed",
          params: {
            newDuration: t
          }
        }));
        _({
          ...Y({
            ...e,
            duration: t
          })
        });
      },
      recordingKey: generateRecordingKey(l, "durationInput"),
      scrubMultiplier: .004166666666666667,
      tooltipForScreenReadersOnly: !0,
      value: e.duration,
      wheelMultiplier: T / 10,
      children: jsx(_$$A, {})
    }), !ee && isValidValue(e.easing) && $(e.easing) && isValidValue(e.easingFunction) && jsx(_$$y.Consumer, {
      children: ([e]) => jsx(W4, {
        className: Lp,
        "data-tooltip": getI18nString("proto.animation_panel.easing_duration_tooltip"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: d,
        inputClassName: Gl,
        onValueChange: P,
        recordingKey: generateRecordingKey(l, "springDurationInput"),
        scrubMultiplier: .004166666666666667,
        tooltipForScreenReadersOnly: !0,
        value: xX(w_(e)),
        wheelMultiplier: T / 10,
        children: jsx(_$$A, {})
      })
    })]
  });
  let es = jsxs(Fragment, {
    children: [jsx(_$$A2, {
      label: getI18nString("proto.curve"),
      labelId: et,
      input: ei
    }), jsx(_$$A2, {
      label: getI18nString("proto.duration"),
      input: er
    })]
  });
  let el = useId();
  let ec = jsx(en, {
    ariaLabelledBy: el,
    interactionType: t,
    navigationType: G,
    property: e.behavior,
    dispatch: d,
    dropdownShown: h,
    onChange: t => {
      d(_P({
        name: "Prototype Transition Type Changed",
        params: {
          newType: t,
          oldType: valueOrFallback(e.behavior, "MIXED"),
          smartAnimateMatchingLayers: valueOrFallback(e.shouldSmartAnimate, null)
        }
      }));
      let n = {
        ...e,
        behavior: t
      };
      _({
        ...z(n),
        ...H(n),
        ...X(n),
        ...Y(n),
        ...function (e, t) {
          if (isValidValue(e.preserveScroll) && 1 !== t) return {
            transitionPreserveScroll: e.preserveScroll
          };
        }(n, u),
        ...function (e) {
          if (isValidValue(e.resetVideoPosition)) return {
            transitionResetVideoPosition: e.resetVideoPosition
          };
        }(n)
      });
    },
    recordingKey: generateRecordingKey(l, "behaviorDropdown")
  });
  let ep = k ? jsx($$eo3, {
    property: e.direction ? e.direction : null,
    onChange: t => {
      d(_P({
        name: "Prototype Transition Direction Changed",
        params: {
          newDirection: t,
          oldDirection: valueOrFallback(e.direction, "MIXED")
        }
      }));
      _({
        ...z(e.direction ? {
          ...e,
          direction: t
        } : {
          ...e,
          direction: t,
          behavior: "MOVE"
        })
      });
    },
    recordingKey: generateRecordingKey(l, "directionControl")
  }) : null;
  let eu = k ? jsx(Fragment, {
    children: jsx(_$$A2, {
      label: getI18nString("proto.animation"),
      labelId: el,
      input: ec
    })
  }) : jsx(_$$A2, {
    label: getI18nString("proto.animation"),
    labelId: el,
    input: ec
  });
  let e_ = k && jsx(_$$A2, {
    label: getI18nString("proto.direction"),
    input: ep
  });
  let ed = jsx(Checkbox, {
    onChange: t => {
      let n = normalizeValue(e.behavior);
      d(_P({
        name: "Smart Animate Changed",
        params: {
          newValue: t,
          transitionType: n
        }
      }));
      _({
        ...function (e) {
          if (isValidValue(e.shouldSmartAnimate)) return {
            transitionShouldSmartAnimate: e.shouldSmartAnimate
          };
        }({
          ...e,
          shouldSmartAnimate: t
        })
      });
    },
    checked: !0 === e.shouldSmartAnimate,
    mixed: isInvalidValue(e.shouldSmartAnimate),
    recordingKey: generateRecordingKey(l, "transition-should-smart-animate"),
    label: jsx(Label, {
      children: renderI18nText("proto.animation_panel.animate_matching_layers")
    })
  });
  let eh = jsx(TN, {
    children: ed
  });
  return jsxs(Zk, {
    className: xy,
    children: [eu, Z && !ee && K && ("MOVE" == B || "MOVE_OUT" == B || "PUSH" == B || "SLIDE" == B || "SLIDE_OUT" == B) && eh, e_, jsxs(_$$O, {
      easingFunction: isValidValue(e.easingFunction) ? e.easingFunction : null,
      children: [Z && !ee && es, Z && !ee && ("CUSTOM_BEZIER" === e.easing || "CUSTOM_SPRING" === e.easing) && isValidValue(e.easingFunction) && jsx(_$$R, {
        easingType: e.easing,
        easingFunction: e.easingFunction,
        duration: e.duration,
        updateSelectionProperties: _,
        recordingKey: generateRecordingKey(l, "easingEditor"),
        isNarrowPanel: c
      })]
    }), J && jsxs("div", {
      className: RG,
      children: [!Q && jsx(SA, {
        transition: e,
        isNarrowPanel: c,
        isUI3: !0
      }), Q && jsx(ub, {
        transition: e,
        isNarrowPanel: c,
        isUI3: !0
      })]
    })]
  });
}
let Z = l6;
let J = _$$c$;
export class $$Q0 {
  formatImpl(e) {
    if (null == e) return "";
    switch (e) {
      case "LINEAR":
        return getI18nString("proto.easing_behavior.linear");
      case "EASE_IN":
        return getI18nString("proto.easing_behavior.bezier_ease_in");
      case "EASE_OUT":
        return getI18nString("proto.easing_behavior.bezier_ease_out");
      case "EASE_IN_AND_OUT":
        return getI18nString("proto.easing_behavior.bezier_ease_in_and_out");
      case "EASE_IN_BACK":
        return getI18nString("proto.easing_behavior.bezier_ease_in_back");
      case "EASE_OUT_BACK":
        return getI18nString("proto.easing_behavior.bezier_ease_out_back");
      case "EASE_IN_AND_OUT_BACK":
        return getI18nString("proto.easing_behavior.bezier_ease_in_and_out_back");
      case "CUSTOM_BEZIER":
        return getI18nString("proto.easing_behavior.bezier_custom");
      case "GENTLE":
        return getI18nString("proto.easing_behavior.spring_gentle");
      case "QUICK":
        return getI18nString("proto.easing_behavior.spring_quick");
      case "BOUNCY":
        return getI18nString("proto.easing_behavior.spring_bouncy");
      case "SLOW":
        return getI18nString("proto.easing_behavior.spring_slow");
      case "CUSTOM_SPRING":
        return getI18nString("proto.easing_behavior.spring_custom");
      default:
        return new _r().format(e);
    }
  }
  format(e) {
    return this.formatImpl(e);
  }
}
let ee = new $$Q0();
let et = new el();
class en extends PureComponent {
  render() {
    let e = "SCROLL_TO" === this.props.navigationType ? K.scrollTo : K.nonScrollTo;
    return jsx(Z, {
      ariaLabelledBy: this.props.ariaLabelledBy,
      chevronClassName: ai,
      className: this.props.className,
      dataOnboardingKey: "transition_behavior_select_onboarding_key",
      dataTestId: "transition-select",
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      dropdownWidth: DxS,
      formatter: et,
      hideDropdownWhenContainerMoves: !isInteractionPathCheck(),
      id: `animation-behavior-select-${this.props.recordingKey}`,
      inputClassName: hF,
      onChange: this.props.onChange,
      property: this.props.property,
      recordingKey: generateRecordingKey(this.props, "select"),
      children: e.map((e, t) => "SELECT_DIVIDER" === e ? jsx(sK, {}, t) : jsx(J, {
        value: e,
        disabled: !W(this.props.interactionType, this.props.navigationType, e),
        recordingKey: generateRecordingKey(this.props, e)
      }, e))
    });
  }
}
en.displayName = "TransitionBehaviorDropdown";
let ei = l6;
let er = _$$c$;
export class $$ea1 extends PureComponent {
  render() {
    return jsx(ei, {
      ariaLabelledBy: this.props.ariaLabelledBy,
      chevronClassName: ai,
      className: this.props.className,
      dataOnboardingKey: "easing",
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      dropdownWidth: DxS,
      formatter: ee,
      id: `easing-type-select-${this.props.recordingKey}`,
      inputClassName: hF,
      onChange: this.props.onChange,
      property: this.props.property,
      recordingKey: generateRecordingKey(this.props, "select"),
      children: G.map((e, t) => "SELECT_DIVIDER" === e ? jsx(sK, {}, t) : jsx(er, {
        value: e,
        disabled: !1,
        recordingKey: generateRecordingKey(this.props, e)
      }, t))
    });
  }
}
$$ea1.displayName = "TransitionEasingDropdown";
export class $$eo3 extends PureComponent {
  render() {
    return jsxs(bL, {
      onChange: this.props.onChange,
      recordingKey: this.props.recordingKey,
      value: isValidValue(this.props.property) ? this.props.property ?? "LEFT" : void 0,
      legend: jsx(q, {
        children: getI18nString("proto.animation_panel.transition_direction")
      }),
      children: [jsx(c$, {
        value: "RIGHT",
        icon: jsx(_$$v, {}),
        "aria-label": getI18nString("proto.animation_panel.transition_direction.left")
      }), jsx(c$, {
        value: "LEFT",
        icon: jsx(_$$o, {}),
        "aria-label": getI18nString("proto.animation_panel.transition_direction.right")
      }), jsx(c$, {
        value: "TOP",
        icon: jsx(_$$W, {}),
        "aria-label": getI18nString("proto.animation_panel.transition_direction.down")
      }), jsx(c$, {
        value: "BOTTOM",
        icon: jsx(_$$N, {}),
        "aria-label": getI18nString("proto.animation_panel.transition_direction.up")
      })]
    });
  }
}
$$eo3.displayName = "TransitionDirectionControl";
export const Mk = $$Q0;
export const Um = $$ea1;
export const X7 = $$q2;
export const sP = $$eo3;