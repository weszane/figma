import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, createContext, useState, useRef, useMemo, useContext, useCallback, useEffect, useLayoutEffect, Fragment as _$$Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { r as _$$r } from "../905/840133";
import { r as _$$r2 } from "../905/216849";
import { H as _$$H } from "../905/56919";
import { i as _$$i } from "../905/718764";
import { N as _$$N } from "../905/130112";
import { ButtonPrimitive } from "../905/632989";
import { DesignGraphElements, Fullscreen, SourceType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import f from "classnames";
import { P as _$$P } from "../vendor/348225";
import { fU } from "../905/492004";
import { useHandleMouseEvent } from "../figma_app/878298";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Ho, wE, sp } from "../figma_app/308685";
import { Dm } from "../figma_app/8833";
import { Tc } from "../905/797478";
import { CB } from "../figma_app/442259";
import { l as _$$l } from "../905/831968";
import { getViewportZoom } from "../figma_app/62612";
import { XM } from "../905/486443";
import { p8, dH } from "../figma_app/722362";
import { F as _$$F } from "../905/258517";
import { KindEnum } from "../905/129884";
import { $L, us } from "../figma_app/136698";
import { _ as _$$_ } from "../figma_app/433187";
import { S as _$$S } from "../figma_app/403368";
import { Qn } from "../figma_app/580087";
import { Y as _$$Y } from "../905/1768";
import { L as _$$L } from "../905/453756";
import { zG } from "../figma_app/47958";
import { b9 } from "../figma_app/765161";
import { Point } from "../905/736624";
import { k6, be, WX, PK, LL, vv, C7 } from "../figma_app/565197";
import { n as _$$n } from "../905/155450";
import { lJ, hf } from "../figma_app/407856";
import { stampPaletteZ } from "../figma_app/786175";
import { A as _$$A } from "../svg/382200";
import { A as _$$A2 } from "../svg/557496";
import { A as _$$A3 } from "../svg/163487";
import { A as _$$A4 } from "../svg/929251";
import { A as _$$A5 } from "../svg/139140";
let h = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18M6.692 13c.238 0 .44.168.506.396a5.003 5.003 0 0 0 9.604 0 .54.54 0 0 1 .507-.396h.015c.31 0 .546.279.465.577a6.002 6.002 0 0 1-11.578 0c-.081-.298.155-.577.464-.577zM8.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    })
  });
});
var E = f;
let H = createContext({
  finishedAnimating: !1,
  draggedStamp: null,
  shouldDragCancel: !1,
  setFinishedAnimating: e => {},
  onDrag: e => {},
  onDragStart: e => {},
  onDragEnd: () => {},
  wheelContainerRef: {
    current: null
  },
  wheelContentRef: {
    current: null
  }
});
function z(e) {
  let [t, r] = useState(!1);
  let [a, s] = useState(null);
  let [o, l] = useState(!1);
  let d = useRef(null);
  let c = useRef(null);
  let u = useRef(null);
  let p = useMemo(() => ({
    finishedAnimating: t,
    draggedStamp: a,
    shouldDragCancel: o,
    wheelContainerRef: d,
    wheelContentRef: c,
    onDragStart: e => {
      u.current = c.current?.getBoundingClientRect() || null;
      s(e);
    },
    onDragEnd: () => {
      u.current = null;
      s(null);
      l(!1);
    },
    onDrag: e => {
      if (u.current) {
        let t = u.current;
        let r = Point.distance(new Point(e.x, e.y), new Point(t.left + t.width / 2, t.top + t.height / 2)) <= t.width / 2;
        r !== o && l(r);
      }
    },
    setFinishedAnimating: e => {
      r(e);
    }
  }), [t, a, o]);
  return jsx(H.Provider, {
    value: p,
    children: e.children
  });
}
function W(e) {
  let t = useContext(H);
  return e ? t.draggedStamp === e : null != t.draggedStamp;
}
function K() {
  return useContext(H).wheelContainerRef;
}
let q = "emoji_wheel--active---0zBa";
let J = "emoji_wheel--reactionsCenter--Z6kHH emoji_wheel--center--5zTgA";
let Z = "emoji_wheel--emoji--EG-Xt";
let Q = "emoji_wheel--wedge--sBm7k";
let ee = "emoji_wheel--centerGrid--JoPnp";
let et = "emoji_wheel--expand--bSTWk";
let er = "emoji_wheel--switchWheel1--pASAD";
let en = "emoji_wheel--switchWheel2--1Iksu";
let ec = 2 * _$$l;
var eu = (e => (e.REACTION = "REACTION", e.STAMP = "STAMP", e.VOTE_STAMP = "VOTE_STAMP", e))(eu || {});
function ep(e) {
  let {
    className,
    name,
    position,
    onMouseEnter,
    onMouseLeave
  } = e;
  let o = useHandleMouseEvent(`emojiWheel.wedge.${name}`, "mousedown", e.onClick);
  let l = _$$S();
  let d = {
    transform: `scaleX(-1) rotate(${(position - 1) * 45 + 22.5}deg)`
  };
  position % 2 == 0 && (d.transform = `rotate(${(4 - position) * 45 - 22.5}deg)`);
  return jsx("svg", {
    "aria-hidden": "true",
    style: d,
    className: E()(className, l && "r-chat" === name && "emoji_wheel--reactionsWedgeDisabled--0h2dE"),
    width: ec,
    height: ec,
    viewBox: `0 0 ${ec} ${ec}`,
    fill: "none",
    children: jsx("path", {
      onClick: o,
      onMouseEnter,
      onMouseLeave,
      d: `M0 ${_$$l}H${_$$l}L0 0V${_$$l}Z`,
      fill: "white",
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-offset-x": 30,
      "data-tooltip-offset-y": -50,
      "data-tooltip": !0 === l && "r-chat" === name ? getI18nString("fullscreen_actions.disable-cursor-chat") : null
    })
  });
}
function e_({
  displayedWheelType: e,
  tabManager: t,
  tabPropsMap: r
}) {
  if (p8("isReadOnly")) return jsx("div", {
    className: J,
    children: jsx("div", {
      className: "emoji_wheel--singleCenterReaction--xWX-5 emoji_wheel--singleCenter--X3W61",
      children: jsx(SvgComponent, {
        svg: _$$A3,
        ariaHidden: !0
      })
    })
  });
  if ("VOTE_STAMP" === e) return jsx("div", {
    className: "emoji_wheel--voteStampsCenter--4F1L3 emoji_wheel--center--5zTgA",
    children: jsx("div", {
      className: "emoji_wheel--singleCenterVoting--N2E5- emoji_wheel--singleCenter--X3W61",
      children: jsx(SvgComponent, {
        svg: _$$A4,
        ariaHidden: !0
      })
    })
  });
  let i = {
    REACTION: J,
    STAMP: "emoji_wheel--stampsCenter---ZqKJ emoji_wheel--center--5zTgA"
  }[e];
  return jsx("div", {
    className: i,
    children: jsx("div", {
      className: ee,
      children: jsxs(_$$r, {
        manager: t,
        children: [jsx(_$$r2, {
          ...r.REACTION,
          recordingKey: "emoji-wheel-reaction-button",
          className: E()("emoji_wheel--reactionsButton--H7Rps", "REACTION" === e && q),
          "data-fullscreen-intercept": !0,
          children: jsx(SvgComponent, {
            svg: _$$A3,
            "aria-label": getI18nString("fullscreen.reaction_wheel")
          })
        }), jsx(_$$r2, {
          ...r.STAMP,
          recordingKey: "emoji-wheel-stamp-button",
          className: E()("emoji_wheel--stampsButton--XDDR8", "STAMP" === e && q),
          "data-fullscreen-intercept": !0,
          children: jsx(SvgComponent, {
            svg: _$$A4,
            "aria-label": getI18nString("fullscreen.stamp_wheel")
          })
        })]
      })
    })
  });
}
function eh({
  displayedWheelType: e,
  tabManager: t,
  tabPropsMap: r
}) {
  return p8("isReadOnly") ? jsx("div", {
    className: "emoji_wheel--readonlyReactionsCenterUI3--EWTk3 emoji_wheel--borderedCenterUI3--ShEHr emoji_wheel--centerUI3--40t9X emoji_wheel--center--5zTgA",
    children: jsx("div", {
      className: "emoji_wheel--singleCenterReactionUI3--DXBcL emoji_wheel--singleCenterUI3--eqZib emoji_wheel--singleCenter--X3W61 emoji_wheel--singleCenterReaction--xWX-5 emoji_wheel--singleCenter--X3W61",
      children: jsx(SvgComponent, {
        svg: _$$A3,
        ariaHidden: !0
      })
    })
  }) : "VOTE_STAMP" === e ? jsx("div", {
    className: "emoji_wheel--voteStampsCenterUI3--g1PID emoji_wheel--borderedCenterUI3--ShEHr emoji_wheel--centerUI3--40t9X emoji_wheel--center--5zTgA",
    children: jsx("div", {
      className: "emoji_wheel--singleCenterVotingUI3--JgXPl emoji_wheel--singleCenterUI3--eqZib emoji_wheel--singleCenter--X3W61 emoji_wheel--singleCenterVoting--N2E5- emoji_wheel--singleCenter--X3W61",
      children: jsx(SvgComponent, {
        svg: _$$A4,
        ariaHidden: !0
      })
    })
  }) : jsx("div", {
    className: {
      REACTION: "emoji_wheel--reactionsCenterUI3--RPaFJ emoji_wheel--centerUI3--40t9X emoji_wheel--center--5zTgA",
      STAMP: "emoji_wheel--stampsCenterUI3--YOWRn emoji_wheel--centerUI3--40t9X emoji_wheel--center--5zTgA"
    }[e],
    children: jsx("div", {
      className: ee,
      children: jsxs(_$$r, {
        manager: t,
        children: [jsx(_$$r2, {
          ...r.REACTION,
          recordingKey: "emoji-wheel-reaction-button",
          className: E()("emoji_wheel--reactionsButtonUI3--dUVKv emoji_wheel--reactionsButton--H7Rps", "REACTION" === e && q),
          "data-fullscreen-intercept": !0,
          children: jsx(SvgComponent, {
            svg: _$$A3,
            "aria-label": getI18nString("fullscreen.reaction_wheel")
          })
        }), jsx(_$$r2, {
          ...r.STAMP,
          recordingKey: "emoji-wheel-stamp-button",
          className: E()("emoji_wheel--stampsButtonUI3--CtJMI emoji_wheel--stampsButton--XDDR8", "STAMP" === e && q),
          "data-fullscreen-intercept": !0,
          children: jsx(SvgComponent, {
            svg: _$$A4,
            "aria-label": getI18nString("fullscreen.stamp_wheel")
          })
        })]
      })
    })
  });
}
let em = createContext({
  top: 0,
  left: 0
});
function eg({
  x: e,
  y: t,
  activeWheelType: r,
  setActiveWheelType: a,
  openedViaHover: l
}) {
  let d = K();
  let p = useDispatch();
  let [_, h] = useState(null);
  let [g, f] = useState(!1);
  let y = useCallback(() => {
    p(Ho());
  }, [p]);
  let T = W();
  _$$Y(y, {
    closeOnEsc: !0,
    ignore: [d.current, b9(), Tc(Qn)]
  });
  let I = fU();
  let S = dH();
  let w = _$$L();
  useEffect(() => {
    l || S === DesignGraphElements.SELECT || S === DesignGraphElements.HAND_SELECT || y();
  }, [S, y, l]);
  useEffect(() => {
    T && S !== DesignGraphElements.SELECT && S !== DesignGraphElements.HAND_SELECT && Fullscreen?.triggerAction("set-tool-default", null);
  }, [T, S]);
  useLayoutEffect(() => {
    h(e => {
      switch (e) {
        case null:
          return et;
        case et:
          return er;
        case er:
          return en;
        case en:
          return er;
        default:
          return e;
      }
    });
  }, [r]);
  let O = _$$l + 3;
  let P = Math.min(window.innerHeight - 2 * O, Math.max(0, t - O));
  let D = Math.min(window.innerWidth - 2 * O, Math.max(0, e - O));
  let k = {
    top: P,
    left: D,
    position: "absolute",
    zIndex: stampPaletteZ
  };
  let M = useRef(null);
  let [B, V] = useState(null);
  let H = useCallback((e, t, r) => {
    let n = k6(e, I);
    let i = {
      x: t,
      y: r
    };
    let a = e.type;
    switch (a) {
      case "STAMP":
        _$$F.trackFromFullscreen("Start stamping", {
          name: e.name
        });
        be(n, e.label || "");
        y();
        break;
      case "VOTE_STAMP":
        _$$F.trackFromFullscreen("Start vote stamping", {
          name: e.name
        });
        be(n, e.label || "");
        y();
        break;
      case "REACTION":
        _$$F.trackFromFullscreen("Start reacting", {
          name: e.name
        });
        p(wE({
          imageUrl: n,
          name: e.name,
          position: i
        }));
        Fullscreen?.triggerAction("set-tool-default", null);
        break;
      case "ACTION":
        y();
        e.action(i, p);
        break;
      default:
        throwTypeError(a);
    }
  }, [I, y, p]);
  let z = l && !T;
  useEffect(() => {
    if (z && !g) {
      let e = setTimeout(y, 300);
      return () => clearTimeout(e);
    }
  }, [g, z, y]);
  useEffect(() => {
    let e = e => {
      if (M.current) {
        let {
          x,
          y
        } = e;
        H(M.current, x, y);
      }
    };
    CB.addTriggerActiveWheelButtonListener(e);
    return () => {
      CB.removeTriggerActiveWheelButtonListener(e);
    };
  }, [H]);
  useEffect(() => {
    d.current?.focus();
  }, [d]);
  let $ = "VOTE_STAMP" === r;
  let [X, q, J] = _$$H({
    REACTION: !$,
    STAMP: !$,
    VOTE_STAMP: $
  }, r, a, {
    orientation: "vertical"
  });
  return jsx(em.Provider, {
    value: {
      top: P,
      left: D
    },
    children: jsx("div", {
      tabIndex: -1,
      ref: d,
      style: k,
      className: E()("emoji_wheel--wheelContainer--PDwZJ", l && "emoji_wheel--wheelContainerWithExtendedHitBox--dtL8J", Dm),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      "data-fullscreen-intercept": !0,
      "data-testid": "emoji-wheel",
      children: jsxs(_$$i, {
        children: [J.tabs.map(e => jsx(ef, {
          dialPosition: B,
          setDialPosition: V,
          wheelAnimation: _,
          tabPanelPropsMap: q,
          multiplayerColor: I,
          activeButton: M,
          triggerWheelButton: H,
          displayedWheelType: e
        }, e)), w ? jsx(eh, {
          displayedWheelType: J.activeTab,
          tabManager: J,
          tabPropsMap: X
        }) : jsx(e_, {
          displayedWheelType: J.activeTab,
          tabManager: J,
          tabPropsMap: X
        })]
      })
    })
  });
}
function ef({
  dialPosition: e,
  setDialPosition: t,
  wheelAnimation: r,
  tabPanelPropsMap: a,
  displayedWheelType: s,
  activeButton: o,
  multiplayerColor: l,
  triggerWheelButton: d
}) {
  let c = function ({
    displayedWheelType: e
  }) {
    return eT()[e];
  }({
    displayedWheelType: s
  });
  let u = _$$L();
  let _ = null != e ? {
    transform: `rotate(${-(45 * e) - 22.5}deg)`
  } : null;
  let h = null != r ? {
    animation: `${r} 0.2s ease-in-out`
  } : {};
  let m = useContext(H).wheelContentRef;
  let {
    onAnimationStart,
    onAnimationEnd
  } = function () {
    let e = useContext(H);
    return {
      onAnimationStart: () => e.setFinishedAnimating(!1),
      onAnimationEnd: () => e.setFinishedAnimating(!0)
    };
  }();
  return jsx(_$$N, {
    ...a[s],
    children: jsxs("div", {
      style: h,
      ref: m,
      className: {
        REACTION: "emoji_wheel--reactions--RKlR4 emoji_wheel--wheel--sg2lN",
        STAMP: "emoji_wheel--stamps--ty-ji emoji_wheel--wheel--sg2lN",
        VOTE_STAMP: "emoji_wheel--voteStamps--yhYZR emoji_wheel--wheel--sg2lN"
      }[s],
      onAnimationStart,
      onAnimationEnd,
      children: [jsx(SvgComponent, {
        ariaHidden: !0,
        autosize: !0,
        height: `${ec}px`,
        width: `${ec}px`,
        useOriginalSrcFills_DEPRECATED: !0,
        svg: u ? _$$A2 : _$$A
      }), c.map(r => jsx(ey, {
        emoji: r,
        multiplayerColor: l,
        active: o.current === r,
        type: s,
        onMouseEnter: r => {
          if (o.current = r, null == e) t(r.position);else {
            let n = (r.position - e) % 8;
            n < -4 && (n += 8);
            n > 4 && (n -= 8);
            t(e + n);
          }
        },
        onMouseLeave: () => {
          o.current = null;
          t(null);
        },
        onClick: (e, t) => {
          d(t, e.clientX, e.clientY);
        }
      }, r.name)), _ && !u && jsx(SvgComponent, {
        ariaHidden: !0,
        autosize: !0,
        height: `${ec + 54}px`,
        width: `${ec + 54}px`,
        className: {
          REACTION: "emoji_wheel--reactionsDial--A3mRG emoji_wheel--dial--05ZOf",
          STAMP: "emoji_wheel--stampsDial--CLKFt emoji_wheel--dial--05ZOf",
          VOTE_STAMP: "emoji_wheel--voteStampsDial--v9czq emoji_wheel--dial--05ZOf"
        }[s],
        svg: _$$A5,
        style: _
      })]
    })
  });
}
function eE(e) {
  let {
    active,
    emoji,
    onMouseEnter,
    onMouseLeave,
    left,
    top,
    activeClass,
    isDragging
  } = e;
  let [u, p] = useState(null);
  let _ = useRef(null);
  let m = useCallback(() => {
    _.current && p(_.current.getBoundingClientRect());
  }, [p]);
  let g = useCallback(e => {
    console.log("onInsert", e);
    console.log("onInsert emoji:", String.fromCodePoint(Number(`0x${e.unified}`)));
    p(null);
  }, [p]);
  return jsxs("span", {
    children: [jsx(ep, {
      className: E()(Q, active && !isDragging && activeClass),
      name: emoji.name,
      position: emoji.position,
      onMouseEnter: () => onMouseEnter(emoji),
      onMouseLeave,
      onClick: () => m()
    }), jsxs("div", {
      className: Z,
      style: {
        top,
        left,
        zIndex: 1e3
      },
      ref: _,
      children: [jsx(h, {}), u && jsx(_$$_, {
        onInsert: g,
        onCancel: () => p(null),
        targetRect: u
      })]
    })]
  }, emoji.name);
}
function ey(e) {
  let {
    active,
    emoji,
    multiplayerColor,
    onMouseEnter,
    onMouseLeave,
    onClick,
    type
  } = e;
  let c = W(emoji.name);
  let u = useContext(H).finishedAnimating;
  let p = _$$S();
  let h = useRef(null);
  let [m, f] = useState(null);
  if (useEffect(() => {
    WX(emoji, multiplayerColor).then(f);
  }, [emoji, multiplayerColor]), !m) return jsx(_$$Fragment, {}, emoji.name);
  let y = {
    REACTION: "emoji_wheel--reactionsWedgeActive--nDFhr",
    STAMP: "emoji_wheel--stampsWedgeActive--fiShF",
    VOTE_STAMP: "emoji_wheel--voteStampsWedgeActive--F5i4m"
  }[type];
  let b = {
    REACTION: 12,
    STAMP: 20,
    VOTE_STAMP: 20
  }[type];
  let T = {
    REACTION: !1,
    STAMP: !0,
    VOTE_STAMP: !0,
    ACTION: !1
  }[emoji.type];
  let I = emoji.offset || .74;
  let S = emoji.position * Math.PI / 4;
  let v = (Math.cos(S) * I + 1) * _$$l - 20;
  let A = (1 - Math.sin(S) * I) * _$$l - 20;
  let x = emoji.i18nName();
  return getFeatureFlags().figjam_emoji_stamps_mw25 && "s-dot" === emoji.name ? jsx(eE, {
    active,
    activeClass: y,
    emoji,
    isDragging: c,
    left: v,
    multiplayerColor,
    onMouseEnter,
    onMouseLeave,
    top: A,
    type
  }) : jsxs("span", {
    children: [jsx(ep, {
      className: E()(Q, active && !c && y),
      name: emoji.name,
      position: emoji.position,
      onMouseEnter: () => onMouseEnter(emoji),
      onMouseLeave,
      onClick: e => onClick(e, emoji)
    }), jsx("div", {
      className: Z,
      style: {
        top: A,
        left: v
      },
      ref: h,
      children: !c && jsx(ButtonPrimitive, {
        "aria-label": x,
        className: E()("emoji_wheel--emojiButtonContainer--kC-6-", p && "r-chat" === emoji.name && "emoji_wheel--emojiButtonContainerDisabled--zc8XC"),
        "data-fullscreen-intercept": !0,
        onClick: e => onClick(e, emoji),
        htmlAttributes: {
          onFocus: () => onMouseEnter(emoji),
          onBlur: onMouseLeave
        },
        children: jsx("img", {
          style: {
            width: 2 * b,
            height: 2 * b
          },
          src: m,
          alt: x
        })
      })
    }), T && u && jsx(eb, {
      contentTarget: h.current,
      stamp: emoji,
      url: m,
      onClick: e => onClick(e, emoji),
      onMouseEnter: () => onMouseEnter(emoji),
      onMouseLeave
    })]
  }, emoji.name);
}
function eb(e) {
  let {
    contentTarget,
    onMouseEnter,
    onMouseLeave,
    stamp,
    url
  } = e;
  let d = K();
  let [c, u] = useState(0);
  let p = useRef(null);
  let [_, h] = useState(null);
  let g = useContext(em);
  useLayoutEffect(() => {
    if (contentTarget) {
      let e = contentTarget.getBoundingClientRect();
      h({
        top: e.top,
        left: e.left
      });
    } else h(null);
  }, [contentTarget, g.top, g.left]);
  let {
    onDragStart,
    onDrag,
    onDragEnd
  } = function () {
    let e = useContext(H);
    return {
      onDragStart: e.onDragStart,
      onDrag: e.onDrag,
      onDragEnd: e.onDragEnd
    };
  }();
  let I = W(stamp.name);
  let S = useContext(H).shouldDragCancel;
  let v = getViewportZoom({
    subscribeToUpdates_expensive: I
  });
  let A = useHandleMouseEvent(`emojiWheel.draggableStamp.${stamp.name}`, "mousedown", e.onClick);
  return _ && url && d.current ? createPortal(jsx(_$$P.div, {
    ref: p,
    animate: I ? S ? "whileDragCancel" : "whileDrag" : "initial",
    "aria-hidden": "true",
    className: "emoji_wheel--emojiDraggable--6hh9L",
    drag: !0,
    dragConstraints: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    dragElastic: 1,
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      A(e);
    },
    onDrag: (e, t) => {
      onDrag(t.point);
    },
    onDragEnd: () => {
      if (!S) {
        let e = p.current;
        if (e) {
          let t = zG(e.getBoundingClientRect());
          PK(url, stamp.label || "", Math.round(t.x), Math.round(t.y), null, SourceType.USER);
        }
      }
      u(e => e + 1);
      onDragEnd();
      onMouseLeave();
    },
    onDragStart: () => {
      onDragStart(stamp.name);
    },
    onMouseEnter,
    onMouseLeave,
    style: {
      top: _.top,
      left: _.left
    },
    variants: {
      initial: {
        scale: 1
      },
      whileDrag: {
        scale: 1.5 * v
      },
      whileDragCancel: {
        scale: .93
      }
    },
    children: jsx("img", {
      draggable: !1,
      style: {
        width: 40,
        height: 40
      },
      src: url,
      alt: `${stamp.name} emoji`
    })
  }, c), d.current) : null;
}
function eT() {
  let e = function () {
    let e = useSelector(e => e.multiplayer.allUsers.find(t => t.sessionID === e.multiplayer.sessionID));
    let t = useSelector(t => {
      if (e && e.imageURL) return `${e.imageURL}?c=1`;
      let r = t.user?.profile?.images;
      return r && r["500_500"] ? `${r["500_500"]}?c=1` : null;
    });
    let r = e ? e.name : null;
    let n = $L(e?.userID, us);
    let a = LL(t, r, n);
    let o = vv(t, r, n);
    return useMemo(() => ({
      stamp: a,
      voteStamp: o
    }), [a, o]);
  }();
  let t = fU();
  let r = useMemo(() => lJ(e.stamp), [e.stamp]);
  let n = useMemo(() => getFeatureFlags().figjam_emoji_stamps_mw25 ? Object.entries({
    JOY: "1462f5d1305a10264b48477078cddc21b64bce07",
    CLAP: "da2df8b4ed136a682af09a7d39903e2f308d1cca",
    SOB: "f8edb723d7a71b1e0f738e161c3a11a01efdfd72",
    EYES: "d132f5805915adfa51d7b4c53205ecb2242d0ef8",
    SKULL: "949e2fe2a90dc54a5b979f40a296cca632f1cb88",
    FIRE: "bc457e5fcee5d6bbe98af6cff31e63b8f7e8ce75",
    THINKING: "416868084377ed25db54b19a65c1fdf3d26427bb",
    QUESTIONING: "febcffec14ce90790e23b8f21379e1ab1d3d669a"
  }).map(([e, t], r) => ({
    type: "STAMP",
    name: e,
    label: e,
    position: r + 1,
    image: t,
    i18nName: () => getI18nString("fullscreen.stamp_wheel.thumbs_up")
  })) : _$$n, []);
  let a = useMemo(() => hf(e.voteStamp), [e.voteStamp]);
  useEffect(() => {
    C7(_$$n, t);
  }, [t]);
  useEffect(() => {
    C7(r, t);
  }, [t, r]);
  useEffect(() => {
    C7(a, t);
  }, [t, a]);
  return {
    REACTION: n,
    STAMP: r,
    VOTE_STAMP: a
  };
}
export function $$eI1() {
  eT();
  return jsx(Fragment, {});
}
export function $$eS0(e) {
  let t = XM();
  let r = useDispatch();
  let a = p8("isReadOnly");
  let o = function ({
    multiplayerWheelType: e,
    isJoinedToActiveVotingSession: t
  }) {
    return t ? "VOTE_STAMP" : {
      STAMP1: "STAMP",
      STAMP2: "STAMP",
      REACTION1: "REACTION",
      REACTION2: "REACTION"
    }[e];
  }({
    multiplayerWheelType: e.multiplayerEmoji.wheelType,
    isJoinedToActiveVotingSession: t
  }) ?? "STAMP";
  let l = useCallback(n => {
    "WHEEL" === e.multiplayerEmoji.type && n !== o && r(sp({
      wheelType: {
        STAMP: "STAMP2",
        REACTION: "REACTION1",
        VOTE_STAMP: "STAMP1"
      }[n],
      isReadonly: a,
      isJoinedToActiveVotingSession: t,
      viewportX: e.multiplayerEmoji.viewportX,
      viewportY: e.multiplayerEmoji.viewportY,
      openedViaHover: e.multiplayerEmoji.openedViaHover,
      source: "mouse"
    }));
  }, [e.multiplayerEmoji, t, r, a, o]);
  if ("WHEEL" !== e.multiplayerEmoji.type) return jsx(Fragment, {});
  let {
    viewportX,
    viewportY,
    openedViaHover
  } = e.multiplayerEmoji;
  return jsx(z, {
    children: jsx(eg, {
      x: viewportX,
      y: viewportY,
      activeWheelType: o,
      openedViaHover,
      setActiveWheelType: l
    })
  });
}
export const S4 = $$eS0;
export const Cj = $$eI1;