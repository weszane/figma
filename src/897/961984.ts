import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef, PureComponent } from "react";
import { W } from "../905/187396";
import { EventEmitter } from "../905/690073";
import { parsePxNumber } from "../figma_app/783094";
import { n } from "../897/929006";
import { valueOrFallback, normalizeValue, isValidValue, isInvalidValue } from "../905/216495";
import { N as _$$N } from "../figma_app/271807";
import { w_, J5, Zp } from "../897/602108";
function u() {
  return performance.now();
}
let d = "transition_preview--previewPanel--Gp-aI";
let h = "transition_preview--belowInactive--DBGgj transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
let m = "transition_preview--belowActive--69cT1 transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
let S = "transition_preview--blueHeaderShort--FqI0m transition_preview--_blueHeader--Xlxtt transition_preview--_previewItem--o2gce";
let T = "transition_preview--blueHeaderTall--atMMg transition_preview--_blueHeader--Xlxtt transition_preview--_previewItem--o2gce";
let I = "transition_preview--screenBorder--Fz-dz transition_preview--screenContainer--iuLzq transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
let w = "transition_preview--screenBorderNarrow--EB6kk transition_preview--screenContainerNarrow--ugQN- transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
let v = "transition_preview--smartAnimateRowItem--aMXQ8";
let A = "transition_preview--ui3Container--2qKB0";
var E = (e => (e[e.BLANK = 0] = "BLANK", e[e.ACTIVE = 1] = "ACTIVE", e[e.INACTIVE = 2] = "INACTIVE", e[e.ACTIVE_RESETTABLE = 3] = "ACTIVE_RESETTABLE", e))(E || {});
var $$g0 = (e => (e[e.STATIC = 0] = "STATIC", e[e.ANIMATING = 1] = "ANIMATING", e[e.RETURN_TO_START = 2] = "RETURN_TO_START", e))($$g0 || {});
let N = parsePxNumber("40px");
let $$y3 = new EventEmitter("activateBezierCustomAnimationPreview");
let $$f4 = new EventEmitter("activateSpringCustomAnimationPreview");
export function $$x1({
  transition: e,
  isNarrowPanel: t
}) {
  let [n, a, o, s, l] = function (e, t = {
    delayBeforeAnimation: 0,
    delayAfterAnimation: 0
  }) {
    let {
      delayBeforeAnimation = 0,
      delayAfterAnimation = 0
    } = t;
    let a = w_(e);
    let [o, s, l, c] = function (e) {
      let [t, n] = useState(!1);
      let [i, a] = useState(0);
      let [o, s] = useState(0);
      _$$N(useCallback(() => {
        let t = (u() - i) / 1e3;
        t > e ? (s(e), n(!1)) : s(t);
      }, [i, s, n, e]), t);
      return [o, t, useCallback(() => {
        n(!0);
        a(u());
        s(0);
      }, [a, n, s]), useCallback(() => {
        n(!1);
        s(0);
      }, [n, s])];
    }(delayBeforeAnimation + J5(a) + delayAfterAnimation);
    return [o < delayBeforeAnimation ? 0 : Zp(a, o - delayBeforeAnimation), o, s, l, c];
  }(valueOrFallback(e.easingFunction, [1, 100, 10, 0]), {
    delayBeforeAnimation: .1,
    delayAfterAnimation: 1
  });
  useEffect(() => {
    $$f4.on("restartSpringAnimation", () => {
      s();
    });
    let e = () => {
      l();
    };
    $$f4.on("resetSpringAnimation", e);
    return () => {
      $$f4.removeListener("resetSpringAnimation", e);
    };
  }, [s, l]);
  let [h, m] = useState(t ? 80 : 124);
  let S = useRef(null);
  useEffect(() => {
    let e = new ResizeObserver(e => {
      for (let t of e) {
        let {
          width
        } = t.contentRect;
        m(width - 2 * N - 54);
      }
    });
    S.current && e.observe(S.current);
    return () => {
      e.disconnect();
    };
  }, []);
  let T = {
    transform: `translateX(${n * h}px)`,
    transition: "none"
  };
  0 !== a && o || (T = {
    transform: "none",
    transition: "transform 0.2s ease-out"
  });
  let I = useCallback(() => {
    o || s();
  }, [o, s]);
  let w = jsx("div", {
    className: "transition_preview--springBoxItem--Uej9X",
    style: T
  });
  return jsx("div", {
    className: d,
    onMouseEnter: I,
    onMouseLeave: l,
    children: jsx("div", {
      ref: S,
      className: "transition_preview--ui3ContainerSpring--5ReEi",
      children: w
    })
  });
}
var b = (e => (e[e.RESET_INSTANT = 0] = "RESET_INSTANT", e[e.RESET_WITH_EASE = 1] = "RESET_WITH_EASE", e[e.PLAY_TO_END = 2] = "PLAY_TO_END", e))(b || {});
let M = class e extends PureComponent {
  constructor(t) {
    super(t);
    this.executor = new W();
    this.cursorIsOverUs = !1;
    this.transitionToNextFrame = () => {
      if (1 === this.state.frameIndex && !this.cursorIsOverUs) {
        this.executor.scheduleOnce(() => {
          this.setState({
            status: 2
          });
        }, 2);
        return;
      }
      let e = (this.state.frameIndex + 1) % 2;
      this.setState({
        status: 1,
        frameIndex: e
      });
      let t = 1e3 * (0 === this.state.frameIndex ? valueOrFallback(this.props.transition.duration, 1) : 2);
      this.executor.scheduleOnce(this.transitionToNextFrame, t);
    };
    this.startAnimation = () => {
      this.setState({
        status: 1,
        frameIndex: 0
      });
      this.executor.reset();
      this.executor.scheduleOnce(() => {
        this.setState({
          status: 1,
          frameIndex: 1
        });
        this.transitionToNextFrame();
      }, 0);
    };
    this.onMouseEnter = () => {
      this.cursorIsOverUs = !0;
      this.startAnimation();
    };
    this.onMouseLeave = () => {
      this.cursorIsOverUs = !1;
      this.executor.reset();
      this.setState({
        status: 2
      });
    };
    this.startAnimationNew = () => {
      this.setAnimationStateNew(0);
      this.executor.scheduleOnce(() => {
        this.setAnimationStateNew(2);
        this.executor.scheduleOnce(() => {
          this.setAnimationStateNew(1);
        }, 1e3 * valueOrFallback(this.props.transition.duration, 0) + e.BEZIER_RETURN_TO_START_WAIT_TIME);
      }, e.BEZIER_BEFORE_ANIMATION_WAIT_TIME);
    };
    this.resetAnimationNew = () => {
      this.setAnimationStateNew(1);
    };
    this.setAnimationStateNew = e => {
      this.executor.reset();
      this.setState({
        status: 0 === e ? 1 : 3,
        frameIndex: 2 === e ? 1 : 0
      });
    };
    this.isAnimationRunningNew = () => !((3 === this.state.status || 1 === this.state.status || 2 === this.state.status) && 0 === this.state.frameIndex);
    this.onMouseEnterNew = () => {
      this.isAnimationRunningNew() || this.startAnimationNew();
    };
    this.onMouseLeaveNew = () => {
      this.resetAnimationNew();
    };
    this.isAnyTransitionInfoMixed(t.transition) ? this.state = {
      status: 0,
      frameIndex: 0
    } : this.state = {
      status: 3,
      frameIndex: 0
    };
    $$y3.on("activateBezierAnimation", this.startAnimationNew);
    $$y3.on("resetBezierAnimation", this.resetAnimationNew);
  }
  buildKeyFramesForNonSmartTransition(e) {
    let t = {
      top: 0,
      left: 0,
      opacity: 1
    };
    switch (e.behavior) {
      case "SMART_ANIMATE":
        throw Error(`Invalid transition behavior ${e.behavior}`);
      case "INSTANT":
      case "DISSOLVE":
        return [{
          below: t,
          above: {
            ...t,
            opacity: 0
          }
        }, {
          below: {
            ...t,
            opacity: 0
          },
          above: t
        }];
      case "SCROLL_ANIMATE":
        return [{
          below: t,
          above: {
            ...t,
            left: 1
          }
        }, {
          below: {
            ...t,
            left: -.25,
            opacity: .25
          },
          above: t
        }];
      case "SLIDE":
        switch (e.direction) {
          case "LEFT":
            return [{
              below: t,
              above: {
                ...t,
                left: -1
              }
            }, {
              below: {
                ...t,
                left: .25,
                opacity: .25
              },
              above: t
            }];
          case "RIGHT":
            return [{
              below: t,
              above: {
                ...t,
                left: 1
              }
            }, {
              below: {
                ...t,
                left: -.25,
                opacity: .25
              },
              above: t
            }];
          case "TOP":
            return [{
              below: t,
              above: {
                ...t,
                top: -1
              }
            }, {
              below: {
                ...t,
                top: .25,
                opacity: .25
              },
              above: t
            }];
          case "BOTTOM":
            return [{
              below: t,
              above: {
                ...t,
                top: 1
              }
            }, {
              below: {
                ...t,
                top: -.25,
                opacity: .25
              },
              above: t
            }];
          default:
            throw Error(`Invalid direction: ${e.direction}`);
        }
      case "SLIDE_OUT":
        switch (e.direction) {
          case "LEFT":
            return [{
              below: {
                ...t,
                left: -.25,
                opacity: .25
              },
              above: t
            }, {
              below: t,
              above: {
                ...t,
                left: 1
              }
            }];
          case "RIGHT":
            return [{
              below: {
                ...t,
                left: .25,
                opacity: .25
              },
              above: t
            }, {
              below: t,
              above: {
                ...t,
                left: -1
              }
            }];
          case "TOP":
            return [{
              below: {
                ...t,
                top: -.25,
                opacity: .25
              },
              above: t
            }, {
              below: t,
              above: {
                ...t,
                top: 1
              }
            }];
          case "BOTTOM":
            return [{
              below: {
                ...t,
                top: .25,
                opacity: .25
              },
              above: t
            }, {
              below: t,
              above: {
                ...t,
                top: -1
              }
            }];
          default:
            throw Error(`Invalid direction: ${e.direction}`);
        }
      case "PUSH":
        switch (e.direction) {
          case "LEFT":
            return [{
              below: t,
              above: {
                ...t,
                left: -1
              }
            }, {
              below: {
                ...t,
                left: 1
              },
              above: t
            }];
          case "RIGHT":
            return [{
              below: t,
              above: {
                ...t,
                left: 1
              }
            }, {
              below: {
                ...t,
                left: -1
              },
              above: t
            }];
          case "TOP":
            return [{
              below: t,
              above: {
                ...t,
                top: -1
              }
            }, {
              below: {
                ...t,
                top: 1
              },
              above: t
            }];
          case "BOTTOM":
            return [{
              below: t,
              above: {
                ...t,
                top: 1
              }
            }, {
              below: {
                ...t,
                top: -1
              },
              above: t
            }];
          default:
            throw Error(`Invalid direction: ${e.direction}`);
        }
      case "MOVE":
        switch (e.direction) {
          case "LEFT":
            return [{
              below: t,
              above: {
                ...t,
                left: -1
              }
            }, {
              below: t,
              above: t
            }];
          case "RIGHT":
            return [{
              below: t,
              above: {
                ...t,
                left: 1
              }
            }, {
              below: t,
              above: t
            }];
          case "TOP":
            return [{
              below: t,
              above: {
                ...t,
                top: -1
              }
            }, {
              below: t,
              above: t
            }];
          case "BOTTOM":
            return [{
              below: t,
              above: {
                ...t,
                top: 1
              }
            }, {
              below: t,
              above: t
            }];
          default:
            throw Error(`Invalid direction: ${e.direction}`);
        }
      case "MOVE_OUT":
        switch (e.direction) {
          case "LEFT":
            return [{
              below: t,
              above: t
            }, {
              below: t,
              above: {
                ...t,
                left: 1
              }
            }];
          case "RIGHT":
            return [{
              below: t,
              above: t
            }, {
              below: t,
              above: {
                ...t,
                left: -1
              }
            }];
          case "TOP":
            return [{
              below: t,
              above: t
            }, {
              below: t,
              above: {
                ...t,
                top: 1
              }
            }];
          case "BOTTOM":
            return [{
              below: t,
              above: t
            }, {
              below: t,
              above: {
                ...t,
                top: -1
              }
            }];
          default:
            throw Error(`Invalid direction: ${e.direction}`);
        }
      default:
        throw Error(`Invalid behavior: ${e.behavior}`);
    }
  }
  cssEasingFunction(e) {
    if ("INSTANT" !== e.behavior) switch (e.easing) {
      case "EASE_IN":
        return "ease-in";
      case "EASE_OUT":
        return "ease-out";
      case "EASE_IN_AND_OUT":
        return "ease-in-out";
      case "LINEAR":
        return "linear";
      case "EASE_IN_BACK":
        return "cubic-bezier(0.3, -0.05, 0.7, -0.5)";
      case "EASE_OUT_BACK":
        return "cubic-bezier(0.45, 1.45, 0.8, 1)";
      case "EASE_IN_AND_OUT_BACK":
        return "cubic-bezier(0.7, -0.4, 0.4, 1.4)";
      case "CUSTOM_BEZIER":
        let t = normalizeValue(e.easingFunction);
        if (t && 4 === t.length) return "cubic-bezier(" + n.format(t) + ")";
    }
    return "";
  }
  cssDuration(e) {
    return "INSTANT" === e.behavior ? 0 : valueOrFallback(e.duration, .3);
  }
  rectangleStateToCSSStyle(t, n, i, r, a) {
    let o = this.cssEasingFunction(t);
    let s = this.cssDuration(t);
    return {
      transition: 2 === i ? e.BEZIER_RETURN_TO_START_EASING : 0 === i ? "unset" : `all ${s}s ${o}`,
      top: 18 + 60 * n.top,
      left: (r ? a ? 79 : 65 : a ? 79 : 81) + 54 * n.left,
      opacity: n.opacity
    };
  }
  isAnyTransitionInfoMixed(e) {
    let t = !isValidValue(e.behavior);
    let n = !isValidValue(e.easing);
    let i = !isValidValue(e.duration);
    let r = !isValidValue(e.direction);
    return t || n || i || r;
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.isAnyTransitionInfoMixed(e.transition) ? (this.executor.reset(), this.setState({
      status: 0
    })) : this.props.transition && this.props.transition.behavior === e.transition.behavior && this.props.transition.easing === e.transition.easing && this.props.transition.duration === e.transition.duration && this.props.transition.direction === e.transition.direction || this.startAnimationNew();
  }
  componentWillUnmount() {
    $$y3.removeListener("activateBezierAnimation", this.startAnimationNew);
    $$y3.removeListener("resetBezierAnimation", this.resetAnimationNew);
    this.executor.reset();
  }
  renderSimpleScreenToScreenAnimationPreview(t, n, r, a, o, s, l, c) {
    let p = S;
    let u = T;
    let _ = this.props.transition.behavior;
    ("MOVE_OUT" === _ || "SLIDE_OUT" === _) && (p = T, u = S);
    let h = jsx("div", {
      className: p
    });
    let m = jsx("div", {
      className: u
    });
    let v = null;
    if (this.props.transition.shouldSmartAnimate) {
      h = null;
      m = null;
      let t = this.cssEasingFunction(o);
      let n = this.cssDuration(o);
      let r = {
        transition: 2 === s ? e.BEZIER_RETURN_TO_START_EASING : 0 === s ? "unset" : `all ${n}s ${t}`
      };
      v = jsx("div", {
        className: this.state.frameIndex ? T : S,
        style: r
      });
    }
    ("DISSOLVE" === _ || "INSTANT" === _) && (m = h = v = null);
    let E = c ? w : I;
    let g = jsxs(Fragment, {
      children: [jsx("div", {
        className: t,
        style: n,
        children: h
      }), jsx("div", {
        className: r,
        style: a,
        children: m
      }), jsx("div", {
        className: c ? "transition_preview--screenContainerNarrow--ugQN- transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce" : "transition_preview--screenContainer--iuLzq transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce",
        children: v
      }), jsx("div", {
        className: E
      })]
    });
    return jsx("div", {
      className: d,
      onMouseEnter: this.onMouseEnterNew,
      onMouseLeave: this.onMouseLeaveNew,
      children: l ? jsx("div", {
        className: A,
        children: g
      }) : g
    });
  }
  renderSmartAnimateTransition(t) {
    let n = 1 === this.state.frameIndex ? 1 : 3 === this.state.status ? 2 : 0;
    let r = this.cssDuration(this.props.transition);
    let a = this.cssEasingFunction(this.props.transition);
    let o = 2 === n ? e.BEZIER_RETURN_TO_START_EASING : 0 === n ? "unset" : `all ${r}s ${a}`;
    let s = t ? "transition_preview--smartAnimateContainerNarrow--0x3xY transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce" : "transition_preview--smartAnimateContainer--SuYj0 transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
    let l = t ? w : I;
    if (0 === this.state.frameIndex) {
      let e = jsxs(Fragment, {
        children: [jsxs("div", {
          className: s,
          children: [jsx("div", {
            className: v,
            style: {
              transition: o,
              height: 12,
              background: "rgba(0, 0, 0, 0.06)"
            }
          }), jsx("div", {
            className: v
          }), jsx("div", {
            className: v
          })]
        }), jsx("div", {
          className: l
        })]
      });
      return jsx("div", {
        className: d,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: this.props.isUI3 ? jsx("div", {
          className: A,
          children: e
        }) : e
      });
    }
    if (1 === this.state.frameIndex) {
      let e = jsxs(Fragment, {
        children: [jsxs("div", {
          className: s,
          children: [jsx("div", {
            className: v,
            style: {
              transition: o,
              height: 20,
              background: "var(--color-bg-brand)"
            }
          }), jsx("div", {
            className: v
          }), jsx("div", {
            className: v
          })]
        }), jsx("div", {
          className: l
        })]
      });
      return jsx("div", {
        className: d,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: this.props.isUI3 ? jsx("div", {
          className: A,
          children: e
        }) : e
      });
    }
    throw Error("Invalid state.frameIndex");
  }
  render() {
    let e = 0 === this.state.status || 2 === this.state.status ? h : m;
    let t = "PUSH" === this.props.transition.behavior;
    let n = 0 === this.state.status || 2 === this.state.status ? t ? h : "transition_preview--aboveInactive--b8PZf transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce" : t ? m : "transition_preview--aboveActive--Wbtj2 transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
    if (0 === this.state.status || isInvalidValue(this.props.transition.behavior)) return null;
    if ("SMART_ANIMATE" === this.props.transition.behavior) return this.renderSmartAnimateTransition(this.props.isNarrowPanel);
    {
      let t = this.buildKeyFramesForNonSmartTransition(this.props.transition)[this.state.frameIndex];
      let i = 1 === this.state.frameIndex ? 1 : 3 === this.state.status ? 2 : 0;
      return this.renderSimpleScreenToScreenAnimationPreview(e, this.rectangleStateToCSSStyle(this.props.transition, t.below, i, this.props.isNarrowPanel, this.props.isUI3), n, this.rectangleStateToCSSStyle(this.props.transition, t.above, i, this.props.isNarrowPanel, this.props.isUI3), this.props.transition, i, this.props.isUI3, this.props.isNarrowPanel);
    }
  }
};
M.displayName = "TransitionPreview";
M.BEZIER_BEFORE_ANIMATION_WAIT_TIME = 100;
M.BEZIER_RETURN_TO_START_WAIT_TIME = 1500;
M.BEZIER_RETURN_TO_START_EASING = "all ease-out 200ms";
export let $$R2 = M;
export const H_ = $$g0;
export const SA = $$x1;
export const ub = $$R2;
export const $2 = $$y3;
export const BG = $$f4;