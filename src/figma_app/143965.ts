import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useCallback, useEffect } from "react";
import { d4, wA } from "../vendor/514228";
import { K } from "../905/443068";
import { A as _$$A } from "../905/24328";
import { V } from "../1577/311426";
import { glU, Ez5 } from "../figma_app/763686";
import { dI, Hr } from "../905/871411";
import u from "classnames";
import { s as _$$s } from "../figma_app/429226";
import { t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { RK } from "../figma_app/815170";
import { el, VG, js, _r, mj, cP } from "../figma_app/451499";
import { m0 } from "../figma_app/976749";
import { wr, Dh } from "../figma_app/741237";
import { gl, hS } from "../905/216495";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { hU, x6 } from "../figma_app/84580";
import { _i, E8, U8 } from "../figma_app/800999";
import { T4 } from "../figma_app/151869";
import { VZ, x0 } from "../figma_app/727192";
import { _p, lz } from "../figma_app/826998";
var p = u;
class x {
  constructor(e) {
    this.formatter = e;
  }
  format(e) {
    return !e || gl(e) ? "" : this.formatter.format(e);
  }
}
let N = () => _$$t("inspect_panel.property.missing");
class C {
  constructor(e) {
    this.nodeNameFormatter = new x(e);
    this.behaviorFormatter = new x(new el());
    this.eventFormatter = new x(new VG());
    this.prototypeActionFormatter = new x(new js(!0));
    this.sentenceCaseFormatter = new x(new _r());
  }
  getActionValue(e) {
    switch (e.connectionType) {
      case "INTERNAL_NODE":
        let t = dI(e.transitionNodeID);
        return this.nodeNameFormatter.format(t);
      case "URL":
        if (!e.connectionURL || e.connectionURL?.trim().length === 0) return N();
        return e.connectionURL;
      default:
        return;
    }
  }
  formatAction(e) {
    if (!e) return;
    let t = hU(e.transitionType, e.easingType, e.easingFunction, e.transitionDuration);
    let r = this.prototypeActionFormatter.format(mj(e));
    let n = this.getActionValue(e);
    let i = dI(e.transitionNodeID) || void 0;
    let a = x6(e.easingType);
    let s = t.direction && ` ${t.direction.charAt(0)}${t.direction.toLowerCase().substring(1)}` || "";
    let o = this.behaviorFormatter.format(t.behavior ?? "INSTANT") + s;
    let l = gl(t.easingFunction) ? [] : t.easingFunction;
    let d = "CUSTOM_BEZIER" === t.easing ? l.map(e => parseFloat(e.toFixed(2))).join(", ") : this.sentenceCaseFormatter.format(t.easing);
    a && (l = l.map(e => parseFloat(e.toFixed(2))), d = "Spring");
    return {
      action: n ? r : "Action",
      value: n || r,
      guid: i,
      animation: o,
      hasAnimation: "INTERNAL_NODE" === e.connectionType,
      curve: "INSTANT" !== t.behavior ? d : void 0,
      duration: "INSTANT" !== t.behavior && hS(t.duration) ? t.duration : void 0,
      isSpringTransition: a,
      curveFunction: l,
      type: e.connectionType,
      openUrlInNewTab: e.openUrlInNewTab ? _$$t("inspect_panel.interactions.open_in_new_tab_true") : void 0
    };
  }
  getEventArgs(e) {
    switch (e?.interactionType) {
      case "AFTER_TIMEOUT":
        return {
          delay: e.transitionTimeout || .8
        };
      case "ON_KEY_DOWN":
        if (!e.keyTrigger || !e.keyTrigger.keyCodes) return {
          trigger: N()
        };
        let t = _i(e.keyTrigger?.keyCodes);
        let r = E8(e.keyTrigger, !0) || N();
        return {
          trigger: "KEYBOARD" === e.keyTrigger.triggerDevice && t ? U8(t) : r
        };
      case "ON_MEDIA_HIT":
        return {
          mediaHitTime: e.mediaHitTime || 0
        };
      default:
        if (e?.interactionMaintained) return {
          delay: e.interactionDuration || .3
        };
        return;
    }
  }
  format(e) {
    let t = this.eventFormatter.format(e.event?.interactionType);
    let r = this.formatAction(e.actions && e.actions[0]);
    return {
      event: t,
      ...this.getEventArgs(e.event),
      action: r,
      guid: dI(e.id)
    };
  }
}
let L = "animation_panel--animationSection--ecznm";
let P = () => (d4(e => e.mirror.selectionProperties.prototypeInteractions) || []).filter(e => {
  if (!e.actions || e.actions.length < 1 || !e.actions[0]) return !1;
  let t = e.actions[0].connectionType;
  return t && "NONE" != t;
});
let D = () => {
  let e = d4(e => e.mirror.sceneGraph);
  return useMemo(() => new cP(e), [e]);
};
let k = () => {
  let e = D();
  return useMemo(() => new C(e), [e]);
};
let M = e => {
  let t = d4(e => e.mirror.sceneGraphSelection);
  let r = useRef(null);
  let n = D();
  let s = wA();
  let o = useCallback(e => {
    e && (glU.panToNode(e, !1), wr(), Dh([e]));
  }, []);
  useEffect(() => {
    let n = r.current;
    null === n || t[n] || s(_$$F.dequeue({
      matchType: e
    }));
  }, [s, t, e]);
  return useCallback(i => {
    let a = Object.keys(t) || [];
    let {
      guid
    } = i;
    if (!guid) return;
    o(guid);
    r.current = guid;
    let d = _$$t("inspect_panel.interactions.return_to_node", {
      previous: n.format(a[0])
    });
    s(_$$F.enqueue({
      type: e,
      message: "",
      button: {
        text: d,
        action: () => o(a[0])
      },
      icon: zX.UNDO,
      onDismiss: () => {}
    }));
  }, [s, o, n, t, e]);
};
function F(e) {
  let {
    action,
    onClick
  } = e;
  let c = m0();
  let u = wA();
  let p = useCallback(e => {
    e.stopPropagation();
    action && onClick && onClick(action);
  }, [onClick, action]);
  let _ = Fk((e, t) => {
    if (!t) return;
    let r = e.get(t);
    if (r) return r.type;
  }, action?.guid);
  let m = "FRAME" === _ ? _$$t("inspect_panel.interactions.select_frame") : _ ? _$$t("inspect_panel.interactions.select_layer") : void 0;
  let g = action?.value;
  let E = action && onClick && action.hasAnimation ? jsx(K, {
    onClick: p,
    htmlAttributes: {
      "data-tooltip": m,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-immediately": !0
    },
    "aria-label": m ?? _$$t("proto.action"),
    children: jsx(_$$A, {})
  }) : action?.type === "URL" && g ? jsx(K, {
    onClick: () => u(RK({
      rawInput: g
    })),
    htmlAttributes: {
      "data-tooltip": _$$t("inspect_panel.interactions.new_tab"),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-immediately": !0
    },
    "aria-label": _$$t("inspect_panel.interactions.new_tab"),
    children: jsx(V, {})
  }) : void 0;
  let b = action?.guid && c ? action.guid : void 0;
  let T = b ? () => Ez5.canvasViewState().temporarilyHoveredNodes.set([b]) : void 0;
  let v = b ? () => Ez5.canvasViewState().temporarilyHoveredNodes.set([]) : void 0;
  return action ? jsx(_p, {
    name: action.action,
    value: action.value,
    accessoryButton: E,
    onMouseEnter: T,
    onMouseLeave: v
  }) : null;
}
function j(e) {
  let {
    event,
    delay,
    trigger,
    phrase,
    action
  } = e.interaction;
  let o = m0();
  return jsxs("div", {
    className: p()({
      [L]: !e.isLast,
      "animation_panel--highlightedAnimationSection--cPkZz": e.highlighted
    }),
    children: [o ? jsx(_p, {
      name: _$$t("proto.action"),
      value: event
    }) : jsx(_p, {
      className: "animation_panel--animationTitle--Xmsme text--fontPos11--2LvXf text--_fontBase--QdLsd",
      copyValue: event,
      children: event
    }), jsx(lz, {
      name: _$$t("inspect_panel.interactions.delay"),
      value: delay
    }), jsx(_p, {
      name: _$$t("inspect_panel.interactions.trigger"),
      value: trigger
    }), jsx(_p, {
      name: _$$t("inspect_panel.interactions.phrase"),
      value: phrase
    }), jsx(F, {
      action,
      onClick: e.onActionClicked
    }), jsx(_p, {
      name: _$$t("inspect_panel.interactions.should_open_in_new_tab"),
      value: action?.openUrlInNewTab
    }), action?.hasAnimation && jsxs(Fragment, {
      children: [jsx(_p, {
        name: _$$t("inspect_panel.interactions.animate"),
        value: action?.animation
      }), jsx(_p, {
        name: _$$t("inspect_panel.interactions.curve"),
        value: action?.curve
      }), !action?.isSpringTransition && jsx(lz, {
        name: _$$t("inspect_panel.interactions.duration"),
        value: action?.duration
      }), action?.isSpringTransition && action?.curveFunction && jsx(_p, {
        name: _$$t("inspect_panel.interactions.mass"),
        value: action?.curveFunction[0]
      }), action?.isSpringTransition && action?.curveFunction && jsx(_p, {
        name: _$$t("inspect_panel.interactions.stiffness"),
        value: action?.curveFunction[1]
      }), action?.isSpringTransition && action?.curveFunction && jsx(_p, {
        name: _$$t("inspect_panel.interactions.damping"),
        value: action?.curveFunction[2]
      })]
    })]
  });
}
export function $$U0({
  isSubsection: e
}) {
  let t = P();
  let r = d4(e => e.mirror.selectionProperties.numSelected) || 0;
  let s = d4(e => e.mirror.appModel.hoveredInteractions) || [];
  let o = d4(e => e.mirror.selectionProperties.scrollDirection);
  let l = d4(e => e.mirror.selectionProperties.scrollBehavior);
  let d = k();
  let u = t.map(e => d.format(e));
  let p = T4.useCopyAllInteractions(u);
  let m = M("instance_panel_return_to_node");
  let g = s && s.length > 0 ? _$$s(s[0])?.interactionID : Hr;
  let f = useCallback((e, t, r, i) => jsx(j, {
    interaction: e,
    onActionClicked: m,
    highlighted: e.guid === dI(g),
    isLast: i
  }), [m, g]);
  if (1 !== r) return null;
  let E = "SCROLLS" !== l || !!o && "NONE" !== o;
  let y = !(t.length < 1 && hS(t));
  return y || E ? jsxs(VZ, {
    title: _$$t("inspect_panel.interactions.title"),
    recordingKey: "interactions",
    copyAllValue: p,
    isSubsection: e,
    children: [E && jsxs(Fragment, {
      children: [jsx(_p, {
        name: _$$t("inspect_panel.interactions.scroll_direction"),
        value: function (e) {
          switch (e) {
            case "HORIZONTAL":
              return _$$t("inspect_panel.interactions.scroll_direction_horizontal");
            case "VERTICAL":
              return _$$t("inspect_panel.interactions.scroll_direction_vertical");
            case "BOTH":
              return _$$t("inspect_panel.interactions.scroll_direction_both");
          }
        }(o)
      }), jsx(_p, {
        name: _$$t("inspect_panel.interactions.scroll_behaviour"),
        value: function (e) {
          switch (e) {
            case "SCROLLS":
              return _$$t("inspect_panel.interactions.scroll_behaviour_with_parent");
            case "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME":
              return _$$t("inspect_panel.interactions.scroll_behaviour_fixed");
            case "STICKY_SCROLLS":
              return _$$t("inspect_panel.interactions.scroll_behaviour_sticky");
          }
        }(l)
      }), y && jsx("div", {
        className: L
      })]
    }), y && jsx(x0, {
      limit: 3,
      data: u,
      renderElement: f
    })]
  }) : null;
}
export const t = $$U0;