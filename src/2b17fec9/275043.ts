import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, forwardRef, memo, useContext, useMemo } from "react";
import { noop } from 'lodash-es';
import { getFeatureFlags } from "../905/601108";
import { um, useAtomWithSubscription, useAtomValueAndSetter, Xr, atom } from "../figma_app/27355";
import { wY } from "../figma_app/708845";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { F as _$$F } from "../figma_app/832508";
import { z as _$$z } from "../figma_app/47967";
import { XS, Iy } from "../figma_app/95367";
import { X as _$$X } from "../905/350405";
import { sg, kF } from "../figma_app/48566";
import { f as _$$f } from "../figma_app/109947";
import { consentCounterAtom } from "../905/18800";
import { renderI18nText, getI18nString } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { xn } from "../figma_app/644079";
import { XM } from "../905/486443";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { m as _$$m } from "../905/99004";
import { x as _$$x } from "../905/106997";
import { C as _$$C } from "../figma_app/859828";
import { $J, Z9, iN as _$$iN, qv } from "../figma_app/634656";
import { nf, hV } from "../figma_app/822177";
import { SH, fK, Nr, WB, gf, b as _$$b, yl, NZ, HY, RZ } from "../figma_app/300024";
import { m as _$$m2 } from "../2b17fec9/405130";
import { w as _$$w } from "../figma_app/461518";
import { g as _$$g } from "../figma_app/391708";
import { z as _$$z2 } from "../figma_app/849005";
import { SKIP_RECORDING, generateRecordingKey } from "../figma_app/878298";
import { LR } from "../figma_app/120210";
import { AE } from "../9410/757252";
import { C as _$$C2 } from "../9410/365876";
import { I1, d6, t1 as _$$t2, Mg, $o } from "../9410/595754";
import { Fullscreen, TransactionCommand, BorderStyle, DesignGraphElements, Command, AlignmentPosition, ConfirmationLevel, ShapeSidebarMode, NodePropertyCategory, ToolType, SessionStatus, LayoutTabType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import F from "classnames";
import { ez as _$$ez, U9, SK, wp, GI, IZ, qL } from "../905/125333";
import { LH } from "../figma_app/384673";
import { colorCSSManipulatorInstance } from "../905/989956";
import { KindEnum } from "../905/129884";
import { Yt, Uo } from "../figma_app/955650";
import { zG, C2, P as _$$P } from "../figma_app/47958";
import { EJ, Mm, vO } from "../figma_app/827329";
import { lx, Jc, Qd, Lz } from "../figma_app/27927";
import { KeyCodes } from "../905/63728";
import { RecordableDiv } from "../905/511649";
import { formatI18nMessage } from "../905/482208";
import { J as _$$J } from "../figma_app/900567";
import { Zh, $y, yG, dR, vu, ll, bz, ke, zO, bj, Bx, z6, ac, cq, UJ } from "../figma_app/731560";
import { useDispatch, useSelector } from "react-redux";
import { debug, throwTypeError } from "../figma_app/465776";
import { rgbToHsl } from "../figma_app/273493";
import { d as _$$d } from "../vendor/456530";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P2 } from "../vendor/348225";
import { hideTooltip } from "../905/765855";
import { oW } from "../figma_app/247611";
import { getViewportZoom } from "../figma_app/62612";
import { $R, X as _$$X2, iT as _$$iT, p3, pZ, Xc } from "../figma_app/765161";
import { w as _$$w2, fo, hj, zK } from "../9410/307066";
import { YCy, zuZ } from "../figma_app/27776";
import { W as _$$W, v0, Dm } from "../9410/645772";
import { ButtonPrimitive } from "../905/632989";
import { Yk, iy as _$$iy, Z9 as _$$Z, AO } from "../2b17fec9/441720";
import { Y as _$$Y } from "../figma_app/916469";
import { GQ, BG, JE, L as _$$L } from "../figma_app/634288";
import { g as _$$g2 } from "../9410/385690";
import { a as _$$a } from "../2b17fec9/927391";
import { whiteColor, parseColor, colorToRgbaString, blackColor } from "../figma_app/191804";
import { a as _$$a2 } from "../905/847494";
import { W as _$$W2 } from "../2b17fec9/185058";
import { DP, vz } from "../figma_app/351862";
import { h as _$$h } from "../2b17fec9/813960";
import { Button } from "../905/521428";
import { ZE } from "../figma_app/932285";
import { s as _$$s } from "../figma_app/666387";
import { W1 } from "../figma_app/439493";
import { R as _$$R } from "../figma_app/640506";
import { useLatestRef, usePersistentValue } from "../figma_app/922077";
import { Qv } from "../figma_app/967873";
import { TS, AF, V_, Cz, zS, MV } from "../figma_app/153399";
import { v as _$$v } from "../figma_app/99807";
import { Yv } from "../figma_app/616107";
import { vm, Vz, gy } from "../figma_app/431620";
import { bL, c$ } from "../905/575478";
import { Legend } from "../905/932270";
import { XS as _$$XS, BB, nU } from "../9410/999133";
import { sha1HexFromBytes, bytesToHex } from "../905/125019";
import { trackEventAnalytics } from "../905/449184";
import { Point } from "../905/736624";
import { o as _$$o } from "../9410/935965";
import { fullscreenValue } from "../figma_app/455680";
import { generatePaintIcon, convertImageDataToURL } from "../905/619652";
import { F as _$$F3 } from "../905/258517";
import { B as _$$B } from "../figma_app/397954";
import { uM, Iz, g5, wv } from "../905/888175";
import { M8, Iw, Qc } from "../figma_app/368611";
import { B as _$$B2, M as _$$M } from "../figma_app/371825";
import { buildUploadUrl } from "../figma_app/169182";
import { e as _$$e } from "../905/149844";
import { _ as _$$_ } from "../9410/628824";
import { y as _$$y } from "../figma_app/778611";
import { Q as _$$Q } from "../1291/188959";
import { r as _$$r } from "../3276/289511";
import { n6 } from "../9410/67768";
import { y as _$$y2 } from "../figma_app/873852";
import { Kj, $R as _$$$R, Hu, Iq } from "../2b17fec9/696626";
import { stopChattingThunk } from "../figma_app/308685";
import { H1 } from "../figma_app/124493";
import { CB } from "../figma_app/442259";
import { hr } from "../9410/960980";
import { L as _$$L2 } from "../905/453756";
import { g as _$$g3 } from "../905/125190";
import { BrowserInfo } from "../figma_app/778880";
import { lO } from "../9410/28761";
import { isAIFeaturesEnabledForCurrentUser } from "../figma_app/459490";
import { I as _$$I } from "../figma_app/827540";
import { rX, UJ as _$$UJ } from "../figma_app/801324";
import { k as _$$k2 } from "../905/545760";
var H = F;
let Q = um({
  draggedTool: void 0,
  draggedToolCanCancel: !0,
  shouldFinishClick: !0
}, function (e, t) {
  switch (t.type) {
    case "start click":
      return {
        ...e,
        shouldFinishClick: !0
      };
    case "start drag":
      return {
        ...e,
        draggedTool: t.tool
      };
    case "end drag":
      return {
        ...e,
        draggedTool: void 0
      };
    case "toggle drag cancellable":
      return {
        ...e,
        draggedToolCanCancel: !e.draggedToolCanCancel
      };
    case "cancel drag":
      return {
        ...e,
        draggedTool: void 0,
        shouldFinishClick: !1
      };
    case "end insert":
      return {
        ...e,
        shouldFinishClick: !1
      };
    default:
      return e;
  }
});
function ee(e = noop, t = !0) {
  let i = useAtomWithSubscription(Q);
  let [n, s] = useState({
    isHovered: !1,
    hoverTarget: null
  });
  let l = useRef(0);
  useEffect(() => {
    i.draggedTool || s({
      isHovered: !1,
      hoverTarget: null
    });
  }, [i.draggedTool]);
  useEffect(() => () => clearTimeout(l.current), []);
  let d = useCallback(e => (s({
    isHovered: !0,
    hoverTarget: e.target
  }), SKIP_RECORDING), []);
  let c = useCallback(e => {
    n.isHovered && e.target !== n.hoverTarget && s({
      isHovered: !0,
      hoverTarget: e.target
    });
  }, [n.hoverTarget, n.isHovered]);
  let u = useCallback(() => (clearTimeout(l.current), s({
    isHovered: !1,
    hoverTarget: null
  }), SKIP_RECORDING), []);
  let p = useCallback(n => {
    n.preventDefault();
    i.shouldFinishClick && e(n);
    t && s({
      isHovered: !0,
      hoverTarget: n.target
    });
  }, [t, i.shouldFinishClick, e]);
  let h = useCallback(n => {
    n.preventDefault();
    i.shouldFinishClick && e(n);
    t && s({
      isHovered: !1,
      hoverTarget: null
    });
  }, [t, i.shouldFinishClick, e]);
  return {
    ...n,
    onMouseEnter: d,
    onMouseLeave: u,
    onMouseMove: c,
    onTouchStart: p,
    onTouchEnd: h
  };
}
let et = class e {
  static getMotionDivId(e) {
    return `dlt-${e}-motion-div`;
  }
  static getAnimationState(t) {
    let i = document.querySelector(`[data-testid="${e.getMotionDivId(t)}"]`);
    return i?.getAttribute("data-test-animate-state") || "";
  }
};
et.RECORD_DETAILED_EVENTS = !1;
let en = forwardRef((e, t) => {
  let {
    toolType,
    isActive,
    onClick,
    children,
    tooltipLocation = "above",
    className,
    recordingKey,
    inTabOrder = !0,
    ariaLabel,
    isHovered,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    disabled,
    testId,
    onboardingKey,
    ...v
  } = e;
  let [C, T] = useAtomValueAndSetter(Q);
  let E = _$$J;
  let S = C.draggedTool === toolType;
  let w = ariaLabel || v["data-tooltip"];
  let I = e => {
    e.preventDefault();
    e.stopPropagation();
    C.shouldFinishClick && onClick(e);
  };
  return jsxs(RecordableDiv, {
    className: H()(Zh, $y),
    "data-fullscreen-intercept": !0,
    "data-onboarding-key": onboardingKey,
    "data-testid": testId,
    "data-tooltip": v["data-tooltip"],
    "data-tooltip-bottom-flip-margin": v["data-tooltip-bottom-flip-margin"],
    "data-tooltip-show-above": "above" === tooltipLocation || void 0,
    "data-tooltip-show-below": "below" === tooltipLocation || void 0,
    "data-tooltip-show-left": "left" === tooltipLocation || void 0,
    "data-tooltip-submenu-open": v["data-tooltip-submenu-open"],
    "data-tooltip-type": S ? null : v["data-tooltip-type"],
    onClick: disabled ? void 0 : I,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onPointerDown: disabled ? void 0 : e => {
      if (e.preventDefault(), e.stopPropagation(), T({
        type: "start click"
      }), !et.RECORD_DETAILED_EVENTS) return SKIP_RECORDING;
    },
    onTouchEnd,
    onTouchStart,
    recordingKey,
    children: [jsx(E, {
      className,
      isHovering: isHovered,
      isSelected: isActive,
      disabled: disabled ?? !1,
      isDragging: S,
      "aria-hidden": !0,
      children
    }), jsx(RecordableDiv, {
      "aria-disabled": disabled,
      "aria-hidden": !inTabOrder,
      "aria-label": w && inTabOrder ? function (e) {
        try {
          return formatI18nMessage(e) || e;
        } catch (t) {
          return e;
        }
      }(w) : void 0,
      className: H()(yG, dR, {
        [vu]: isActive,
        [ll]: disabled
      }),
      "data-fullscreen-intercept": !0,
      forwardedRef: t,
      onClick: disabled ? void 0 : I,
      onKeyDown: e => {
        !disabled && e.keyCode === KeyCodes.ENTER && C.shouldFinishClick && onClick(e);
      },
      role: inTabOrder ? "button" : void 0,
      tabIndex: !disabled && inTabOrder ? 0 : void 0
    })]
  });
});
let er = forwardRef(({
  children: e,
  hasExtraLongHoverTime: t,
  disabled: i,
  ...r
}, a) => {
  let {
    isHovered,
    hoverTarget,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = ee(r.onClick, t);
  let h = "function" == typeof e ? e(isHovered, hoverTarget) : e;
  return jsx(en, {
    ...r,
    ref: a,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onTouchStart,
    onTouchEnd,
    disabled: i,
    children: h
  });
});
let ef = memo(function ({
  toolType: e,
  color: t,
  isActive: i,
  onTap: a,
  onDragEnd: s,
  onDragStart: l,
  Icon: d,
  IconNoRef: c,
  toolbarIconScale: u,
  canvasToSvgScale: p,
  isDrawingSubmenuTool: h,
  isDragReversing: m,
  stickyAnimationState: f,
  isHovered: _,
  hoverOffsetAmount: x = "DEFAULT",
  shapeStrokeStyleType: g,
  disabled: j
}) {
  let [b, y] = useAtomValueAndSetter(Q);
  let v = useDispatch();
  let [C, T] = useState(!1);
  let [E, S] = useState(!1);
  let [I, L] = useState(0);
  let N = useRef(!1);
  let A = b.draggedTool === e;
  let k = b.draggedToolCanCancel;
  let R = b.shouldFinishClick;
  useEffect(() => {
    let e = e => {
      "Escape" === e.key && A && (y({
        type: "end drag"
      }), N.current = !0, T(!1), L(I + 1));
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [I, A, y]);
  useEffect(() => {
    let e = () => {
      T(!1);
    };
    document.addEventListener("pointerup", e);
    return () => {
      document.removeEventListener("pointerup", e);
    };
  }, [T]);
  useEffect(() => (A ? document.body.classList.add(bz) : document.body.classList.remove(bz), () => {
    document.body.classList.remove(bz);
  }), [A]);
  let M = useRef(null);
  let D = getViewportZoom({
    subscribeToUpdates_expensive: A
  });
  let U = function (e) {
    switch (e) {
      case "NONE":
        return 0;
      case "STICKY":
        return -20;
      case "STICKY_UI3_PILE":
        return -8;
      case "DRAWING":
        return -22;
      case "DRAWING_SUBMENU":
      case "DEFAULT":
        return -24;
    }
  }(x);
  let F = useRef(null);
  let B = _$$d(.5);
  let V = _$$d(.5);
  let [K, W] = useState();
  let Z = A ? k ? "whileDragShouldCancel" : "whileDrag" : "pencil" === e && i ? "hiddenPencil" : C ? "whileTap" : h && i ? "selectedSubmenuTool" : !j && _ ? "whileHovering" : "initial";
  if ("connector" === e && !A) {
    let e = rgbToHsl(colorCSSManipulatorInstance.parse(t));
    e.l > .9 && (t = colorCSSManipulatorInstance.formatHSLA({
      h: e.h,
      s: e.s,
      l: .9,
      a: e.a
    }));
  }
  return jsx(RecordableDiv, {
    recordingKey: generateRecordingKey(SH, `${e}.animatedIcon`),
    className: H()(ke, {
      [zO]: i,
      [bj]: _,
      [Bx]: A
    }),
    onPointerDown: () => {
      if (!j && (T(!0), !et.RECORD_DETAILED_EVENTS)) return SKIP_RECORDING;
    },
    onPointerUp: () => {
      if (T(!1), !et.RECORD_DETAILED_EVENTS) return SKIP_RECORDING;
    },
    onTouchStart: e => {
      e.preventDefault();
    },
    onTouchEnd: e => {
      e.preventDefault();
      !E && R && a();
      S(!1);
    },
    onContextMenu: e => {
      e.preventDefault();
    },
    children: jsx(_$$N, {
      children: jsx(_$$P2.div, {
        ref: F,
        animate: Z,
        "data-test-animate-state": Z,
        drag: !j && !!s,
        dragConstraints: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        dragElastic: 1,
        onDrag: (e, t) => {
          var i;
          K && ((i = t.point).x >= K.x && i.x <= K.x + K.width && i.y >= K.y || i.y > K.y + K.height) !== k && y({
            type: "toggle drag cancellable"
          });
        },
        onDragEnd: (e, t) => {
          if (S(!0), B.set(.5), V.set(.5), k) {
            y({
              type: "cancel drag"
            });
            T(!1);
            return;
          }
          let i = M.current;
          if (i) {
            if (N.current) return;
            let t = zG(i.getBoundingClientRect());
            let n = C2(e);
            s && s(t, n);
            y({
              type: "end drag"
            });
            T(!1);
            L(I + 1);
          } else debug(!1, "Delightful tool is missing the toolref!");
        },
        onDragStart: (t, i) => {
          y({
            type: "start drag",
            tool: e
          });
          N.current = !1;
          Fullscreen?.triggerActionInUserEditScope("set-tool-default", {
            source: fK
          });
          oW.trigger("action", TransactionCommand.CLEAR);
          v(hideTooltip());
          let n = F.current;
          if (n) {
            let e = n.getBoundingClientRect();
            B.set((i.point.x - e.x) / e.width);
            V.set((i.point.y - e.y) / e.height);
          }
          if (M.current) {
            let e = $R();
            debug(!!e, "ToolIcon can't find containing toolbar!");
            W(e?.getBoundingClientRect());
            l && l();
          }
        },
        style: {
          originX: B,
          originY: V
        },
        transformTemplate: (e, t) => "translate3d(0px, 0px, 0) scale(1, 1)" === t ? "none" : t,
        transition: {
          duration: .1,
          ease: [.12, .23, .5, 1]
        },
        variants: {
          initial: {
            scale: 1,
            y: 0
          },
          selectedSubmenuTool: {
            y: U
          },
          whileTap: {
            y: U,
            scale: .93
          },
          whileDragShouldCancel: {
            y: U,
            scale: .93
          },
          whileDrag: {
            y: U,
            scale: D * (p || 1)
          },
          whileHovering: {
            y: U
          },
          hiddenPencil: {
            y: 72
          }
        },
        children: d ? jsx(d, {
          color: t,
          toolbarIconScale: u,
          ref: M,
          isBeingDraggedForPlacement: A,
          shouldAnimate: A,
          isReversing: m,
          stickyAnimationState: f,
          shapeStrokeProps: {
            isDragging: A,
            styleType: void 0 !== g ? g : BorderStyle.NONE,
            svgToCanvasScale: p && u ? 1 / (p * u) : 1
          }
        }) : c
      })
    }, String(I))
  });
});
let e_ = ["SQUARE", "ELLIPSE", "DIAMOND", "TRIANGLE_UP", "TRIANGLE_DOWN", "ROUNDED_RECTANGLE", "ENG_DATABASE", "MINDMAP_TREE_NUCLEUS"];
function eg(e) {
  let t = lx.get(e);
  let i = t && e_.includes(t);
  let n = e === DesignGraphElements.CONNECTOR_ELBOWED;
  let r = e === DesignGraphElements.CONNECTOR_CURVED && getFeatureFlags().ad_curved_connectors;
  let a = e === DesignGraphElements.CONNECTOR_STRAIGHT;
  return i || n || r || a;
}
function ej() {
  let {
    activeSecondaryToolbeltId
  } = LH();
  return activeSecondaryToolbeltId === _$$w2.DiagrammingTools;
}
let eb = "shapeCollage";
let ev = "shapes_collage--ignorePointerEvents--kxZ7g";
let eC = YCy;
let eT = zuZ;
let eE = {
  ELBOWED: {
    action: Command.SET_TOOL_CONNECTOR_ELBOWED,
    tool: DesignGraphElements.CONNECTOR_ELBOWED,
    Icon: EJ
  },
  CURVED: {
    action: Command.SET_TOOL_CONNECTOR_CURVED,
    tool: DesignGraphElements.CONNECTOR_CURVED,
    Icon: Mm
  },
  STRAIGHT: {
    action: Command.SET_TOOL_CONNECTOR_STRAIGHT,
    tool: DesignGraphElements.CONNECTOR_STRAIGHT,
    Icon: vO
  }
};
function eS({
  collageShapeItems: e,
  onClick: t,
  disabled: i
}) {
  let a = useRef(null);
  return jsx("div", {
    className: "shapes_collage--collageButtonContainer--5SEqf",
    ref: a,
    children: jsx("div", {
      className: H()(z6, "shapes_collage--collageButton---Ws2a"),
      children: e.map((e, r) => {
        let a = e.shapeType;
        return "ELBOWED" === a || "CURVED" === a || "STRAIGHT" === a || "STRAIGHT_NO_ENDPOINTS" === a ? jsx(eN, {
          collageItem: e,
          onClick: t,
          disabled: i
        }, `connector-${r}`) : jsx(eA, {
          shapeType: a,
          collageItem: e,
          onClick: t,
          disabled: i
        }, `shape-${r}`);
      })
    })
  });
}
let ew = memo(function ({
  shapeType: e,
  toolbarIconScale: t,
  onClick: i,
  disabled: a,
  onboardingKey: s
}) {
  let {
    draggedTool
  } = useAtomWithSubscription(Q);
  let {
    activeSecondaryToolbeltId
  } = LH();
  let c = Jc.get(e);
  let u = c === Yt();
  let p = useAtomWithSubscription(_$$ez);
  let h = colorCSSManipulatorInstance.format(p);
  let m = useAtomWithSubscription(U9);
  let f = Qd().get(c);
  let _ = useCallback(() => {
    f && i(c);
  }, [f, i, c]);
  let x = `shape-${e.toLowerCase()}`;
  let g = draggedTool === x;
  let j = useCallback((e, t) => {
    permissionScopeHandler.user("drop-shape-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(c, Math.round(e.x), Math.round(e.y), Math.round(t.x), Math.round(t.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
  }, [c]);
  if (!f) return null;
  let b = (f?.canvasToSvgScale || 1) / t;
  let y = !!draggedTool || activeSecondaryToolbeltId === _$$w2.DiagrammingTools;
  return jsx(er, {
    className: H()(z6, {
      [ev]: g
    }),
    "data-tooltip": g ? void 0 : f.action,
    "data-tooltip-submenu-open": y,
    "data-tooltip-type": KindEnum.LOOKUP,
    disabled: a,
    inTabOrder: !1,
    isActive: u,
    onClick: _,
    onboardingKey: s,
    recordingKey: generateRecordingKey(eb, x),
    toolType: x,
    children: jsx(ef, {
      Icon: f.Icon,
      canvasToSvgScale: b,
      color: h,
      hoverOffsetAmount: "NONE",
      isActive: u,
      isHovered: !1,
      onDragEnd: j,
      onTap: _,
      shapeStrokeStyleType: m,
      toolType: x,
      toolbarIconScale: t
    })
  });
});
function eI({
  zIndex: e,
  width: t,
  height: i,
  children: r,
  position: a,
  hasShadow: s
}) {
  return jsx("div", {
    className: H()("shapes_collage--collageIconContainer--RdU1N", {
      [ac]: s
    }),
    style: {
      zIndex: e,
      width: t,
      height: i,
      transform: a,
      pointerEvents: "auto"
    },
    children: jsx("div", {
      className: "shapes_collage--collageScaleContainer--loton",
      children: r
    })
  });
}
function eL(e) {
  return `translate(${e.x}px, ${e.y}px)`;
}
let eN = memo(function ({
  collageItem: e,
  onClick: t,
  disabled: i
}) {
  let {
    draggedTool
  } = useAtomWithSubscription(Q);
  return jsx(eI, {
    zIndex: "connector" === draggedTool ? eT : eC + 1,
    width: e.width,
    height: e.height,
    position: eL({
      x: e.position.x,
      y: e.position.y
    }),
    hasShadow: !0,
    children: jsx(eO, {
      toolbarIconScale: e.scale,
      onClick: t,
      disabled: i
    })
  });
});
let eA = memo(function ({
  shapeType: e,
  collageItem: t,
  onClick: i,
  disabled: r
}) {
  let {
    draggedTool
  } = useAtomWithSubscription(Q);
  let s = `shape-${e.toLowerCase()}`;
  return jsx(eI, {
    zIndex: draggedTool === s ? eT : eC + 1,
    width: t.width,
    height: t.height,
    position: eL({
      x: t.position.x,
      y: t.position.y
    }),
    hasShadow: !0,
    children: jsx(ew, {
      shapeType: e,
      toolbarIconScale: t.scale,
      onClick: i,
      disabled: r,
      onboardingKey: t.onboardingKey
    })
  });
});
function eO({
  toolbarIconScale: e,
  onClick: t,
  disabled: i
}) {
  let {
    draggedTool
  } = useAtomWithSubscription(Q);
  let {
    activeSecondaryToolbeltId
  } = LH();
  let l = Uo();
  let d = useAtomWithSubscription(SK).connectorToolLineStyle;
  let c = useAtomWithSubscription(wp);
  let u = colorCSSManipulatorInstance.format(c);
  let p = useCallback(() => {
    t(eE[d].tool);
  }, [d, t]);
  let h = "connector" === draggedTool;
  let m = useCallback((e, t) => {
    permissionScopeHandler.user("drop-connector-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(eE[d].tool, Math.round(e.x), Math.round(e.y + 7 * _$$P), Math.round(t.x), Math.round(t.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
  }, [d]);
  let f = eE[d].Icon;
  let _ = "connector";
  let x = !!draggedTool || activeSecondaryToolbeltId === _$$w2.DiagrammingTools;
  return jsx(er, {
    className: H()(z6, {
      [ev]: h
    }),
    "data-tooltip": h ? void 0 : "set-tool-connector-elbowed",
    "data-tooltip-submenu-open": x,
    "data-tooltip-type": KindEnum.LOOKUP,
    disabled: i,
    inTabOrder: !1,
    isActive: l,
    onClick: p,
    onboardingKey: Nr,
    recordingKey: generateRecordingKey(eb, _),
    toolType: _,
    children: jsx(ef, {
      Icon: f,
      canvasToSvgScale: _$$P,
      color: u,
      hoverOffsetAmount: "NONE",
      isActive: l,
      isHovered: !1,
      onDragEnd: m,
      onTap: p,
      toolType: _,
      toolbarIconScale: e
    })
  });
}
function eM(e) {
  let {
    children,
    isActive,
    onClick,
    onboardingKey,
    size,
    forceHover
  } = e;
  let c = useContext(sg);
  let u = e.disabled || c;
  let {
    activeSecondaryToolbeltId
  } = LH();
  let {
    draggedTool
  } = useAtomWithSubscription(Q);
  let f = !!draggedTool || e.secondaryToolbeltId === activeSecondaryToolbeltId;
  return jsx(ButtonPrimitive, {
    "aria-disabled": u,
    "aria-hidden": u,
    "aria-label": e.tooltipText,
    "aria-pressed": e.isActive,
    className: H()("whiteboard_delightful_button--whiteboardDelightfulButton--G16hR", {
      "whiteboard_delightful_button--whiteboardDelightfulButtonHoverBgEnabled--F3JlY": !e.hoverBgDisabled,
      "whiteboard_delightful_button--whiteboardDelightfulButtonActive--BvtWZ": !u && isActive,
      "whiteboard_delightful_button--forceHover--0DaXN": !u && !isActive && forceHover,
      "whiteboard_delightful_button--pointerEventsDisabled--iQ41n": u
    }),
    disabled: u,
    htmlAttributes: {
      "data-onboarding-key": onboardingKey,
      "data-testid": e["data-testid"],
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": e.tooltipText,
      "data-tooltip-shortcut": e.tooltipShortcut,
      "data-tooltip-show-above": !0,
      "data-tooltip-submenu-open": f,
      "data-tooltip-offset-y": -12,
      id: e.elementId
    },
    onClick,
    recordingKey: e.recordingKey,
    style: {
      width: size?.width,
      height: size?.height
    },
    children
  });
}
function eP({
  disabled: e
}) {
  let {
    activeToolId,
    handleToolAction
  } = _$$W();
  let [a, s] = useState(!1);
  let o = ej();
  let l = LR();
  let d = _$$C2();
  let c = AE();
  let u = Yk.SHAPE_COLLAGE;
  let p = useCallback(() => {
    c ? (d({
      setToolToDefault: !1
    }), handleToolAction({
      type: fo.ACTIVATE_TOOL,
      toolId: u.toolId
    })) : handleToolAction({
      type: fo.TOGGLE_SUBMENU_AND_TOOL,
      toolIdToActivate: u.toolId,
      secondaryToolbeltId: _$$w2.DiagrammingTools
    });
  }, [handleToolAction, u.toolId, c, d]);
  let h = useCallback(e => {
    if (l(!1), c) {
      d({
        setToolToDefault: !1
      });
      handleToolAction({
        type: fo.ACTIVATE_TOOL,
        toolId: e
      });
      return;
    }
    activeToolId === e ? handleToolAction({
      type: fo.TOGGLE_SUBMENU_AND_TOOL,
      toolIdToActivate: e,
      secondaryToolbeltId: _$$w2.DiagrammingTools
    }) : handleToolAction({
      type: fo.ACTIVATE_TOOL,
      toolId: e
    });
  }, [l, c, activeToolId, d, handleToolAction]);
  let m = useMemo(() => ({
    position: "absolute",
    top: a && !e ? -24 : -20,
    transition: "ease-in-out 0.07s all",
    pointerEvents: "none"
  }), [a, e]);
  return jsxs("div", {
    role: "group",
    style: {
      position: "relative"
    },
    onMouseEnter: () => s(!0),
    onMouseLeave: () => s(!1),
    children: [jsx(eM, {
      "data-testid": "toolbelt-shapes-button",
      disabled: e,
      forceHover: a,
      isActive: o,
      onClick: p,
      onboardingKey: u.onboardingKey,
      recordingKey: generateRecordingKey(I1, u.recordingKey),
      secondaryToolbeltId: _$$w2.DiagrammingTools,
      size: {
        width: 64,
        height: 40
      },
      tooltipText: u.getText()
    }), jsx("div", {
      style: m,
      children: jsx(eS, {
        collageShapeItems: eU,
        onClick: h,
        disabled: e
      })
    })]
  });
}
let eU = [{
  shapeType: "SQUARE",
  zIndex: 2,
  width: 24,
  height: 24,
  position: {
    x: 6,
    y: 26
  },
  scale: 22 / 128,
  onboardingKey: WB
}, {
  shapeType: "ELBOWED",
  zIndex: 0,
  width: 24,
  height: 24,
  position: {
    x: 40,
    y: 18
  },
  scale: .55
}, {
  shapeType: "ELLIPSE",
  zIndex: 1,
  width: 24,
  height: 24,
  position: {
    x: 36,
    y: 40
  },
  scale: 18 / 112
}];
function eG({
  toolbarState: e,
  disabled: t
}) {
  let i = _$$a();
  return jsx(_$$iy, {
    staticToolConfig: Yk.COMMENTS,
    toolbarState: e,
    extendedData: {
      numUnreadComments: i
    },
    disabled: t
  });
}
function eX() {
  let e = _$$C2();
  return jsx(Button, {
    onClick: () => e(),
    variant: "secondary",
    recordingKey: generateRecordingKey(d6, "MORESHAPES"),
    children: renderI18nText("whiteboard.shapes.more_shapes")
  });
}
function e0({
  children: e
}) {
  let [t, i] = useState(!1);
  let {
    openColorPalettePicker,
    closeColorPalettePicker
  } = $J(i);
  return jsxs(W1, {
    children: [jsx("div", {
      className: "shape_tool_color_picker_popover--container--X-ipf",
      children: e
    }), jsx(_$$s, {
      colorPalettePickerState: {
        openColorPalettePicker,
        closeColorPalettePicker,
        isColorPalettePickerOpen: t
      },
      paletteType: "base",
      recordingKey: generateRecordingKey(d6, "PALETTE_PICKER"),
      isInDltSubmenu: !1
    })]
  });
}
function e1() {
  let e = useAtomWithSubscription(_$$ez);
  let t = function (e) {
    let t = useAtomWithSubscription(SK);
    let i = Xr(_$$ez);
    let {
      shapeWithTextType
    } = t;
    return useCallback(t => {
      i(t);
      let r = Jc.get(shapeWithTextType);
      if (!r) return;
      let a = Qd();
      let s = a.get(r)?.actionEnum ?? Command.SET_TOOL_DEFAULT;
      Fullscreen?.triggerActionEnumInUserEditScope(s, {
        source: e
      });
    }, [i, shapeWithTextType, e]);
  }(fK);
  let [i, a] = useState(!1);
  return jsx(ZE, {
    ariaLabel: getI18nString("whiteboard.inline_menu.color_list_box"),
    buttonBackground: "light",
    buttonCaretType: "down",
    buttonClassName: "shape_tool_color_selector--colorSelectorButton--cWibX",
    buttonSize: "xsmall",
    colorButtonSizeOverride: {
      buttonSize: {
        height: "24px",
        width: "40px"
      },
      buttonChildrenSize: {
        height: "24px",
        width: "24px"
      }
    },
    isColorPopoverOpen: i,
    onColorChange: t,
    optionSize: "medium",
    palettePickerPopoverWrapper: e0,
    paletteType: "base",
    recordingKey: generateRecordingKey(d6, "shape-color"),
    setIsColorPopoverOpen: a,
    shouldRenderCirclesWithContentBoxSizing: !0,
    swatchStyle: {
      border: "1px solid var(--ramp-grey-500)"
    },
    value: e
  });
}
function e2() {
  let e = useAtomWithSubscription(U9);
  let t = DP();
  let i = vz();
  let a = useMemo(() => getFeatureFlags().ad_curved_connectors ? ["ELBOWED", "CURVED", "STRAIGHT", "STRAIGHT_NO_ENDPOINTS"] : ["ELBOWED", "STRAIGHT", "STRAIGHT_NO_ENDPOINTS"], []);
  return jsxs(_$$a2, {
    ariaLabel: getI18nString("whiteboard.delightful_toolbar.shapes_and_connectors_label"),
    children: [jsx(e1, {}), jsx(_$$X, {
      extended: !0
    }), jsxs(Lz, {
      children: [a.map(e => jsx(_$$W2, {
        isSelected: t(e),
        connectorStyle: e,
        setConnectorTool: i,
        size: "small",
        recordingKey: generateRecordingKey(d6, e),
        disableDragging: !0
      }, e)), e_.map(t => jsx(_$$h, {
        shapeType: t,
        color: whiteColor,
        strokeStyleType: e,
        addToRecentsBehavior: ConfirmationLevel.YES,
        toolSetSource: ShapeSidebarMode.NONE,
        size: "small",
        disableDragging: "MINDMAP_TREE_NUCLEUS" === t,
        recordingKey: generateRecordingKey(d6, t)
      }, t))]
    }), jsx(_$$X, {
      extended: !0
    }), jsx(eX, {})]
  });
}
function ti({
  legend: e,
  options: t,
  onChange: i,
  recordingKey: a,
  ...s
}) {
  let o = useContext(sg);
  let l = s.disabled || o;
  return jsx(bL, {
    onChange: i,
    legend: jsx(Legend, {
      children: e
    }),
    recordingKey: a,
    readonly: l,
    htmlAttributes: {
      "data-testid": s["data-testid"]
    },
    children: jsx("div", {
      className: "whiteboard_secondary_toolbelt_radio_group--radioOptionsContainer--K0zhX",
      children: t.map(e => jsx(tn, {
        ...e
      }, e.value))
    })
  });
}
function tn(e) {
  let {
    value,
    content,
    isSelected,
    disabled,
    tooltipText,
    tooltipShortcut,
    onboardingKey
  } = e;
  return jsx(c$, {
    value,
    className: H()("whiteboard_secondary_toolbelt_radio_group--radioOption--fO1qq", {
      "whiteboard_secondary_toolbelt_radio_group--radioOptionSelected--Zp-UH": isSelected,
      "whiteboard_secondary_toolbelt_radio_group--radioOptionDisabled--yAXJq": disabled
    }),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": disabled ? void 0 : tooltipText,
      "data-tooltip-shortcut": tooltipShortcut,
      "data-tooltip-show-above": !0,
      "data-onboarding-key": onboardingKey,
      "data-testid": e["data-testid"]
    },
    "aria-label": tooltipText,
    readonly: disabled || void 0,
    children: content
  });
}
function tr({
  paletteType: e,
  isPaletteLoading: t,
  recordingKey: i
}) {
  let [a, s] = useState(!1);
  let {
    openColorPalettePicker,
    closeColorPalettePicker
  } = $J(s);
  return jsx(_$$s, {
    renderAsToolbeltButton: !0,
    colorPalettePickerState: {
      isColorPalettePickerOpen: a,
      openColorPalettePicker,
      closeColorPalettePicker
    },
    paletteType: e,
    isPaletteLoading: t,
    recordingKey: generateRecordingKey(i, "colorPalettes")
  });
}
let ta = "whiteboard_tool_color_swatch_picker--colorSwatch---N8tP";
function ts({
  toolId: e,
  legend: t,
  color: i,
  onColorChange: a,
  canApplyCustomColor: s,
  disabled: l,
  recordingKey: d,
  ...c
}) {
  let {
    colors,
    paletteType,
    isCustomPalette
  } = function (e) {
    let t = Z9();
    let i = t.type === Yv.CUSTOM;
    let n = GQ(e);
    return {
      colors: i ? t.variations[n] : TS(n),
      paletteType: n,
      isCustomPalette: i
    };
  }(e);
  let m = useCallback(e => {
    a(parseColor(e));
  }, [a]);
  let f = useAtomWithSubscription(Qv);
  let _ = !!f;
  let x = i ? colorCSSManipulatorInstance.format(i) : null;
  return jsxs(Fragment, {
    children: [jsx(tc, {
      numSwatchesLoading: f
    }), !_ && jsx(ti, {
      onChange: m,
      legend: t,
      disabled: l,
      recordingKey: generateRecordingKey(d, "colorSelect"),
      "data-testid": c["data-testid"],
      options: colors.map((e, t) => {
        let i = colorCSSManipulatorInstance.format(e);
        let r = isCustomPalette ? AF(t, paletteType) : V_(e, paletteType);
        return {
          key: `${i}-${t}`,
          value: colorToRgbaString(e),
          isSelected: i === x,
          tooltipText: r,
          disabled: l,
          content: jsx(td, {
            color: Cz(e, paletteType, "light")
          }),
          "data-testid": `${c["data-testid"]}-option`
        };
      })
    }), null != s && jsx(to, {
      toolId: e,
      color: i,
      onColorChange: a,
      paletteType,
      disabled: !s,
      "data-testid": `${c["data-testid"]}-custom`,
      recordingKey: d
    }), jsx(tr, {
      paletteType,
      isPaletteLoading: _,
      recordingKey: d
    })]
  });
}
function to({
  toolId: e,
  color: t,
  onColorChange: i,
  paletteType: a,
  disabled: s,
  recordingKey: o,
  ...l
}) {
  let d = t || blackColor;
  let [c, u] = useState(!1);
  return jsx(_$$v, {
    target: jsx(tl, {
      color: d,
      paletteType: a,
      showCustomColorPopover: c,
      setShowCustomColorPopover: u,
      disabled: s,
      "data-testid": l["data-testid"],
      recordingKey: generateRecordingKey(o, "customColorButton")
    }),
    color: d,
    isOpen: !s && c,
    onColorChange: i,
    onClose: () => {
      u(!1);
    },
    theme: "light",
    analytics: {
      name: "Drawing Tool Change Color",
      properties: {
        tool: DesignGraphElements[e]
      }
    },
    recordingKey: generateRecordingKey(o, "customColorPopover")
  });
}
function tl({
  color: e,
  paletteType: t,
  showCustomColorPopover: i,
  setShowCustomColorPopover: r,
  disabled: a,
  recordingKey: s,
  ...o
}) {
  let l = _$$iN(e, t) && !a;
  let d = e && (l || i);
  return jsx(vm, {
    buttonType: Vz.DialogTrigger,
    isActive: i || l,
    isExpanded: i,
    activeStyle: l ? gy.RainbowActive : gy.PurpleActive,
    onClick: () => r(!i),
    tooltipText: getI18nString("whiteboard.colors.custom"),
    disabled: a,
    recordingKey: generateRecordingKey(s, "customColorButton"),
    "data-testid": o["data-testid"],
    children: jsx(td, {
      color: Cz(e, t, "light"),
      showRainbowSwatch: a || !d
    })
  });
}
function td({
  color: e,
  showRainbowSwatch: t
}) {
  return jsx("div", {
    className: H()(ta, {
      "whiteboard_tool_color_swatch_picker--colorSwatchCustom--UfzH3": t
    }),
    style: t ? void 0 : {
      background: e
    }
  });
}
let tc = memo(function ({
  numSwatchesLoading: e
}) {
  let t = useLatestRef(e);
  let i = t && !e;
  let r = i ? t : e;
  let a = 0 === e;
  return jsx("div", {
    className: H()("whiteboard_tool_color_swatch_picker--controlContainer--J8U4z", {
      "whiteboard_tool_color_swatch_picker--overlayContainer--iZftv": a,
      "whiteboard_tool_color_swatch_picker--isFadingOut--VdCyC": i
    }),
    children: [...Array(r)].map((e, t) => jsx("div", {
      className: "whiteboard_tool_color_swatch_picker--skeletonColorSwatchWrapper--fPCO2",
      children: jsx("div", {
        className: H()(ta, "whiteboard_tool_color_swatch_picker--skeletonColorSwatch--3kf29", {
          "whiteboard_tool_color_swatch_picker--isLoading--un1Mo": !i
        }),
        style: {
          animationDelay: `${.1 * t}s`
        }
      })
    }, `skeleton-swatch-${t}`))
  });
});
function tC() {
  let e = useAtomWithSubscription(GI);
  return e.paints?.[0]?.color;
}
function tT() {
  let e = useAtomWithSubscription(IZ);
  return e.paints?.[0]?.color;
}
function tE(e) {
  let t = useAtomWithSubscription(GI);
  let i = useAtomWithSubscription(IZ);
  if (!e || !BG(e)) return null;
  switch (e) {
    case DesignGraphElements.VECTOR_PENCIL:
      return t.strokeWeight === uM ? "THICK" : "THIN";
    case DesignGraphElements.HIGHLIGHTER:
      return i.strokeWeight === Iz ? "THICK" : "THIN";
    case DesignGraphElements.WASHI_TAPE:
    case DesignGraphElements.ERASER:
    case null:
      return null;
    default:
      throwTypeError(e);
  }
}
function tS() {
  let {
    washiTapePaint
  } = useAtomWithSubscription(SK);
  return washiTapePaint?.image?.hash && sha1HexFromBytes(washiTapePaint.image.hash);
}
function tw() {
  let e = tS();
  return useMemo(() => !!e && !_$$B2.map(e => e.image).includes(e), [e]);
}
function tI() {
  fullscreenValue.updateAppModel({
    currentSelectedProperty: {
      type: NodePropertyCategory.STROKE_PRESET,
      indices: [0]
    }
  });
  Fullscreen?.uploadPaintImage("NORMAL", 1);
}
let tL = atom(null);
function tN() {
  let e = tw();
  let {
    washiTapePaint
  } = useAtomWithSubscription(SK);
  let i = washiTapePaint?.image?.hash;
  let [n, a] = useAtomValueAndSetter(tL);
  let s = n?.paintHex;
  useEffect(() => {
    if (!e || !i) return;
    let n = bytesToHex(i);
    n !== s && a({
      paintHex: n,
      imageSrc: function (e) {
        let t = (e.originalImageWidth || 244) / (e.originalImageHeight || 244);
        let i = generatePaintIcon(e, new Point(244 * t, 244), {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        });
        return i && i.pixels && i.pixelSize ? convertImageDataToURL(i.pixels, i.pixelSize) : null;
      }(washiTapePaint)
    });
  }, [e, i, s, washiTapePaint, a]);
  return e && n ? n.imageSrc : null;
}
function tA() {
  let {
    currentDrawingTool,
    currentColor,
    colorSetLegend,
    canEditColor,
    canApplyCustomColor
  } = function () {
    let e = useAtomWithSubscription(_$$XS);
    let t = tC();
    let i = tT();
    switch (e) {
      case DesignGraphElements.VECTOR_PENCIL:
        return {
          currentDrawingTool: e,
          currentColor: t ?? null,
          colorSetLegend: getI18nString("whiteboard.delightful_toolbar.marker.color_selector.legend"),
          canApplyCustomColor: !0,
          canEditColor: !0
        };
      case DesignGraphElements.HIGHLIGHTER:
        return {
          currentDrawingTool: e,
          currentColor: i ?? null,
          colorSetLegend: getI18nString("whiteboard.delightful_toolbar.highlighter.color_selector.legend"),
          canApplyCustomColor: !1,
          canEditColor: !0
        };
      case DesignGraphElements.WASHI_TAPE:
      case DesignGraphElements.ERASER:
        return {
          currentDrawingTool: e,
          currentColor: null,
          colorSetLegend: null,
          canApplyCustomColor: !1,
          canEditColor: !1
        };
      case null:
        return {
          currentDrawingTool: DesignGraphElements.VECTOR_PENCIL,
          currentColor: t ?? null,
          colorSetLegend: null,
          canApplyCustomColor: !1,
          canEditColor: !1
        };
      default:
        return throwTypeError(e);
    }
  }();
  let l = function () {
    let e = useAtomWithSubscription(_$$XS);
    let [t, i] = useAtomValueAndSetter(GI);
    let [n, a] = useAtomValueAndSetter(IZ);
    return useCallback(r => {
      let s = [{
        type: "SOLID",
        color: r
      }];
      switch (e) {
        case DesignGraphElements.HIGHLIGHTER:
          a({
            ...n,
            paints: s
          });
          break;
        case DesignGraphElements.VECTOR_PENCIL:
          i({
            ...t,
            paints: s
          });
          break;
        case DesignGraphElements.WASHI_TAPE:
        case DesignGraphElements.ERASER:
        case null:
          break;
        default:
          throwTypeError(e);
      }
      _$$F3.trackFromFullscreen("Drawing Tool Change Color", {
        source: "default",
        color: colorCSSManipulatorInstance.format(r),
        tool: e ? DesignGraphElements[e] : ""
      });
    }, [t, i, n, a, e]);
  }();
  let d = useCallback(e => {
    e && canEditColor && l(e);
  }, [canEditColor, l]);
  return jsx(ts, {
    toolId: currentDrawingTool,
    legend: colorSetLegend ?? "",
    color: currentColor,
    onColorChange: d,
    canApplyCustomColor,
    disabled: !canEditColor,
    recordingKey: _$$t2,
    "data-testid": "drawing-tool-color-swatch-picker"
  });
}
function tO() {
  let e = tE(useAtomWithSubscription(_$$XS));
  let t = function () {
    let e = useAtomWithSubscription(_$$XS);
    let [t, i] = useAtomValueAndSetter(GI);
    let [n, a] = useAtomValueAndSetter(IZ);
    return useCallback(r => {
      switch (e) {
        case DesignGraphElements.HIGHLIGHTER:
          a({
            ...n,
            strokeWeight: "THIN" === r ? g5 : Iz
          });
          break;
        case DesignGraphElements.VECTOR_PENCIL:
          i({
            ...t,
            strokeWeight: "THIN" === r ? wv : uM
          });
          break;
        case DesignGraphElements.ERASER:
        case DesignGraphElements.WASHI_TAPE:
        case null:
          break;
        default:
          throwTypeError(e);
      }
      trackEventAnalytics("Drawing Tool Change Thickness", {
        thickness: r,
        tool: e ? DesignGraphElements[e] : ""
      });
    }, [e, t, n, i, a]);
  }();
  let i = function () {
    let e = useAtomWithSubscription(_$$XS);
    switch (e) {
      case DesignGraphElements.VECTOR_PENCIL:
      case DesignGraphElements.HIGHLIGHTER:
        return !0;
      case DesignGraphElements.ERASER:
      case DesignGraphElements.WASHI_TAPE:
      case null:
        return !1;
      default:
        throwTypeError(e);
    }
  }();
  return jsxs(Fragment, {
    children: [jsx(vm, {
      buttonType: Vz.Toggle,
      isActive: "THIN" === e,
      onClick: () => t("THIN"),
      tooltipText: getI18nString("whiteboard.delightful_toolbar.thin"),
      disabled: !i,
      recordingKey: generateRecordingKey(_$$t2, "sizeSelect.thin"),
      children: jsx(tR, {
        stroke: "THIN" === e ? "var(--color-bg-figjam)" : "var(--color-icon-secondary)"
      })
    }), jsx(vm, {
      buttonType: Vz.Toggle,
      isActive: "THICK" === e,
      onClick: () => t("THICK"),
      tooltipText: getI18nString("whiteboard.delightful_toolbar.thick"),
      disabled: !i,
      recordingKey: generateRecordingKey(_$$t2, "sizeSelect.thick"),
      children: jsx(tM, {
        stroke: "THICK" === e ? "var(--color-bg-figjam)" : "var(--color-icon-secondary)"
      })
    })]
  });
}
var tk = (e => (e.DEFAULT = "var(--color-icon-secondary)", e.SELECTED = "var(--color-bg-figjam)", e))(tk || {});
function tR({
  stroke: e
}) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: [jsx("path", {
      d: "M0 5C0 2.23858 2.23858 0 5 0H19.0001C21.7615 0 24.0001 2.23858 24.0001 5V19.0001C24.0001 21.7615 21.7615 24.0001 19.0001 24.0001H5C2.23858 24.0001 0 21.7615 0 19.0001V5Z"
    }), jsx("path", {
      d: "M6.5 14.5C7.54992 11.5755 10.2886 8.5 11.5 8.5C13.4006 8.5 12.268 13.4943 14.3243 13.4943C15.79 13.4943 17.5 11.5 17.5 11.5",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function tM({
  stroke: e
}) {
  return jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: jsx("path", {
      d: "M6.50018 15C7.5501 12.0755 10.2888 9 11.5002 9C13.4008 9 12.2682 13.9943 14.3245 13.9943C15.7902 13.9943 17.5002 12 17.5002 12",
      stroke: e,
      strokeOpacity: "0.5",
      strokeWidth: "4",
      strokeLinecap: "round"
    })
  });
}
function tD() {
  return jsxs("svg", {
    width: "28",
    height: "66",
    viewBox: "0 0 28 66",
    fill: "none",
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsxs("g", {
      filter: "url(#filter0_ii_4_711)",
      children: [jsx("path", {
        d: "M2.5 7.00561C2.5 4.59895 2.5 3.39562 2.96741 2.47427C3.37859 1.66377 4.03491 1.00359 4.84299 0.587668C5.76159 0.114868 6.96489 0.107819 9.37151 0.0937207L18.4313 0.0406478C20.859 0.0264259 22.0729 0.0193149 23.0015 0.486985C23.8184 0.898339 24.4836 1.5583 24.9013 2.37185C25.3763 3.29677 25.3788 4.51067 25.3838 6.93845L25.5 64H2.5V7.00561Z",
        fill: "#FFA4A4"
      }), jsx("path", {
        d: "M2.5 7.00561C2.5 4.59895 2.5 3.39562 2.96741 2.47427C3.37859 1.66377 4.03491 1.00359 4.84299 0.587668C5.76159 0.114868 6.96489 0.107819 9.37151 0.0937207L18.4313 0.0406478C20.859 0.0264259 22.0729 0.0193149 23.0015 0.486985C23.8184 0.898339 24.4836 1.5583 24.9013 2.37185C25.3763 3.29677 25.3788 4.51067 25.3838 6.93845L25.5 64H2.5V7.00561Z",
        fill: "url(#paint0_radial_4_711)"
      }), jsx("path", {
        d: "M2.5 7.00561C2.5 4.59895 2.5 3.39562 2.96741 2.47427C3.37859 1.66377 4.03491 1.00359 4.84299 0.587668C5.76159 0.114868 6.96489 0.107819 9.37151 0.0937207L18.4313 0.0406478C20.859 0.0264259 22.0729 0.0193149 23.0015 0.486985C23.8184 0.898339 24.4836 1.5583 24.9013 2.37185C25.3763 3.29677 25.3788 4.51067 25.3838 6.93845L25.5 64H2.5V7.00561Z",
        fill: "url(#paint1_linear_4_711)",
        fillOpacity: "0.2"
      })]
    }), jsx("path", {
      d: "M18.4326 0.291016C19.6506 0.28388 20.5493 0.278082 21.2598 0.332031C21.8787 0.379037 22.3381 0.470115 22.7266 0.634766L22.8887 0.709961C23.5621 1.04912 24.1263 1.56814 24.5205 2.20605L24.6787 2.48633C24.895 2.90755 25.01 3.40538 25.0693 4.1123C25.1289 4.82221 25.1313 5.7207 25.1338 6.93848L25.249 63.75H2.75V7.00586C2.75 5.79842 2.75021 4.90745 2.80762 4.20312C2.85763 3.58967 2.95035 3.13438 3.11523 2.74902L3.19043 2.58691C3.5778 1.82354 4.19591 1.20136 4.95703 0.80957C5.37549 0.59419 5.87025 0.479244 6.57129 0.417969C7.27522 0.356458 8.16577 0.350822 9.37305 0.34375L18.4326 0.291016Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("g", {
      filter: "url(#filter1_f_4_711)",
      children: jsx("path", {
        d: "M3 15.32C3 12.9341 4.93413 11 7.32 11H20.68C23.0659 11 25 12.9341 25 15.32V63H3V15.32Z",
        fill: "black",
        fillOpacity: "0.15"
      })
    }), jsx("g", {
      clipPath: "url(#clip0_4_711)",
      children: jsx("g", {
        filter: "url(#filter2_f_4_711)",
        children: jsx("path", {
          d: "M3.5 4.32C3.5 1.93413 5.43413 0 7.82 0H20.18C22.5659 0 24.5 1.93413 24.5 4.32V6.68C24.5 9.06587 22.5659 11 20.18 11H7.82C5.43413 11 3.5 9.06587 3.5 6.68V4.32Z",
          fill: "white",
          fillOpacity: "0.32"
        })
      })
    }), jsxs("g", {
      filter: "url(#filter3_i_4_711)",
      children: [jsx("rect", {
        x: "2",
        y: "32",
        width: "24",
        height: "28",
        rx: "0.5",
        fill: "#7070E9"
      }), jsx("rect", {
        x: "2",
        y: "32",
        width: "24",
        height: "28",
        rx: "0.5",
        fill: "url(#paint2_linear_4_711)",
        fillOpacity: "0.6"
      })]
    }), jsx("rect", {
      x: "2.25",
      y: "32.25",
      width: "23.5",
      height: "27.5",
      rx: "0.25",
      stroke: "black",
      strokeOpacity: "0.4",
      strokeWidth: "0.5"
    }), jsxs("g", {
      filter: "url(#filter4_di_4_711)",
      children: [jsx("path", {
        d: "M5 34C5 32.8954 5.89543 32 7 32H25.5C25.7761 32 26 32.2239 26 32.5V59.5C26 59.7761 25.7761 60 25.5 60H7C5.89543 60 5 59.1046 5 58V34Z",
        fill: "#7070E9"
      }), jsx("path", {
        d: "M5 34C5 32.8954 5.89543 32 7 32H25.5C25.7761 32 26 32.2239 26 32.5V59.5C26 59.7761 25.7761 60 25.5 60H7C5.89543 60 5 59.1046 5 58V34Z",
        fill: "url(#paint3_linear_4_711)",
        fillOpacity: "0.6"
      }), jsx("path", {
        d: "M7 32.25H25.5C25.6381 32.25 25.75 32.3619 25.75 32.5V59.5C25.75 59.6381 25.6381 59.75 25.5 59.75H7C6.0335 59.75 5.25 58.9665 5.25 58V34C5.25 33.0335 6.0335 32.25 7 32.25Z",
        stroke: "black",
        strokeOpacity: "0.4",
        strokeWidth: "0.5"
      })]
    }), jsx("path", {
      d: "M11 59.5L11 32.5L20 32.5L20 59.5L11 59.5Z",
      fill: "white"
    }), jsx("path", {
      d: "M17 42L17 40L12 40L12 42L17 42ZM17 44L17 43L12 43L12 44L17 44ZM17 46L17 45L12 45L12 46L17 46ZM17 48L17 47L12 47L12 48L17 48ZM17 53L17 50L12 50L12 53L17 53ZM12 55L17 55L17 54L12 54L12 55Z",
      fill: "#101010"
    }), jsxs("mask", {
      id: "mask0_4_711",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "2",
      y: "32",
      width: "24",
      height: "32",
      children: [jsx("mask", {
        id: "path-12-inside-1_4_711",
        fill: "white",
        children: jsx("path", {
          d: "M26 63C26 63.5523 25.5523 64 25 64H3C2.44772 64 2 63.5523 2 63V33C2 32.4477 2.44772 32 3 32H4.57695C4.8258 32 5 32.2512 5 32.5V32.5C5 33.3284 5.67157 34 6.5 34C7.32843 34 8 33.3284 8 32.5V32.5C8 32.2512 8.1742 32 8.42305 32H19.577C19.8258 32 20 32.2512 20 32.5V32.5C20 33.3284 20.6716 34 21.5 34C22.3284 34 23 33.3284 23 32.5V32.5C23 32.2512 23.1742 32 23.423 32H25C25.5523 32 26 32.4477 26 33V63Z"
        })
      }), jsx("path", {
        d: "M26 63C26 63.5523 25.5523 64 25 64H3C2.44772 64 2 63.5523 2 63V33C2 32.4477 2.44772 32 3 32H4.57695C4.8258 32 5 32.2512 5 32.5V32.5C5 33.3284 5.67157 34 6.5 34C7.32843 34 8 33.3284 8 32.5V32.5C8 32.2512 8.1742 32 8.42305 32H19.577C19.8258 32 20 32.2512 20 32.5V32.5C20 33.3284 20.6716 34 21.5 34C22.3284 34 23 33.3284 23 32.5V32.5C23 32.2512 23.1742 32 23.423 32H25C25.5523 32 26 32.4477 26 33V63Z",
        fill: "#E2CFB8"
      }), jsx("path", {
        d: "M26 63C26 63.5523 25.5523 64 25 64H3C2.44772 64 2 63.5523 2 63V33C2 32.4477 2.44772 32 3 32H4.57695C4.8258 32 5 32.2512 5 32.5V32.5C5 33.3284 5.67157 34 6.5 34C7.32843 34 8 33.3284 8 32.5V32.5C8 32.2512 8.1742 32 8.42305 32H19.577C19.8258 32 20 32.2512 20 32.5V32.5C20 33.3284 20.6716 34 21.5 34C22.3284 34 23 33.3284 23 32.5V32.5C23 32.2512 23.1742 32 23.423 32H25C25.5523 32 26 32.4477 26 33V63Z",
        fill: "url(#paint4_linear_4_711)",
        fillOpacity: "0.6"
      }), jsx("path", {
        d: "M25 64V63.5H3V64V64.5H25V64ZM2 63H2.5V33H2H1.5V63H2ZM3 32V32.5H4.57695V32V31.5H3V32ZM5 32.5H4.5C4.5 33.6046 5.39543 34.5 6.5 34.5V34V33.5C5.94772 33.5 5.5 33.0523 5.5 32.5H5ZM6.5 34V34.5C7.60457 34.5 8.5 33.6046 8.5 32.5H8H7.5C7.5 33.0523 7.05228 33.5 6.5 33.5V34ZM8.42305 32V32.5H19.577V32V31.5H8.42305V32ZM20 32.5H19.5C19.5 33.6046 20.3954 34.5 21.5 34.5V34V33.5C20.9477 33.5 20.5 33.0523 20.5 32.5H20ZM21.5 34V34.5C22.6046 34.5 23.5 33.6046 23.5 32.5H23H22.5C22.5 33.0523 22.0523 33.5 21.5 33.5V34ZM23.423 32V32.5H25V32V31.5H23.423V32ZM26 33H25.5V63H26H26.5V33H26ZM19.577 32V32.5C19.5526 32.5 19.5296 32.4933 19.5123 32.4841C19.4966 32.4757 19.4905 32.4679 19.4904 32.4679C19.4903 32.4676 19.491 32.4686 19.4923 32.4709C19.4936 32.4733 19.495 32.4764 19.4963 32.4801C19.4991 32.4882 19.5 32.4955 19.5 32.5H20H20.5C20.5 32.2649 20.4196 32.0297 20.2732 31.8455C20.1235 31.6573 19.8831 31.5 19.577 31.5V32ZM4.57695 32V32.5C4.55259 32.5 4.5296 32.4933 4.51234 32.4841C4.4966 32.4757 4.49046 32.4679 4.49043 32.4679C4.49026 32.4676 4.49105 32.4686 4.49231 32.4709C4.49357 32.4733 4.49499 32.4764 4.49629 32.4801C4.49907 32.4882 4.5 32.4955 4.5 32.5H5H5.5C5.5 32.2649 5.41961 32.0297 5.27316 31.8455C5.12351 31.6573 4.88308 31.5 4.57695 31.5V32ZM8 32.5H8.5C8.5 32.4955 8.50093 32.4882 8.50371 32.4801C8.50501 32.4764 8.50643 32.4733 8.50769 32.4709C8.50895 32.4686 8.50974 32.4676 8.50957 32.4679C8.50954 32.4679 8.5034 32.4757 8.48766 32.4841C8.4704 32.4933 8.44741 32.5 8.42305 32.5V32V31.5C8.11692 31.5 7.87649 31.6573 7.72684 31.8455C7.58039 32.0297 7.5 32.2649 7.5 32.5H8ZM25 32V32.5C25.2761 32.5 25.5 32.7239 25.5 33H26H26.5C26.5 32.1716 25.8284 31.5 25 31.5V32ZM2 33H2.5C2.5 32.7239 2.72386 32.5 3 32.5V32V31.5C2.17157 31.5 1.5 32.1716 1.5 33H2ZM23 32.5H23.5C23.5 32.4955 23.5009 32.4882 23.5037 32.4801C23.505 32.4764 23.5064 32.4733 23.5077 32.4709C23.509 32.4686 23.5097 32.4676 23.5096 32.4679C23.5095 32.4679 23.5034 32.4757 23.4877 32.4841C23.4704 32.4933 23.4474 32.5 23.423 32.5V32V31.5C23.1169 31.5 22.8765 31.6573 22.7268 31.8455C22.5804 32.0297 22.5 32.2649 22.5 32.5H23ZM3 64V63.5C2.72386 63.5 2.5 63.2761 2.5 63H2H1.5C1.5 63.8284 2.17157 64.5 3 64.5V64ZM25 64V64.5C25.8284 64.5 26.5 63.8284 26.5 63H26H25.5C25.5 63.2761 25.2761 63.5 25 63.5V64Z",
        fill: "black",
        fillOpacity: "0.2",
        mask: "url(#path-12-inside-1_4_711)"
      })]
    }), jsx("g", {
      mask: "url(#mask0_4_711)",
      children: jsx("g", {
        opacity: "0.03",
        filter: "url(#filter5_f_4_711)",
        children: jsx("rect", {
          x: "14",
          y: "34",
          width: "10",
          height: "28",
          fill: "black"
        })
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_ii_4_711",
        x: "1.42",
        y: "0.0362854",
        width: "25.16",
        height: "63.9637",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "-1.08"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.08"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_4_711"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "1.08"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.08"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_innerShadow_4_711",
          result: "effect2_innerShadow_4_711"
        })]
      }), jsxs("filter", {
        id: "filter1_f_4_711",
        x: "0",
        y: "8",
        width: "28",
        height: "58",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5",
          result: "effect1_foregroundBlur_4_711"
        })]
      }), jsxs("filter", {
        id: "filter2_f_4_711",
        x: "1.9",
        y: "-1.6",
        width: "24.2",
        height: "14.2",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.8",
          result: "effect1_foregroundBlur_4_711"
        })]
      }), jsxs("filter", {
        id: "filter3_i_4_711",
        x: "2",
        y: "32",
        width: "24",
        height: "29",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_4_711"
        })]
      }), jsxs("filter", {
        id: "filter4_di_4_711",
        x: "3",
        y: "30.5",
        width: "24",
        height: "31",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "-0.5"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.75"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4_711"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_4_711",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect2_innerShadow_4_711"
        })]
      }), jsxs("filter", {
        id: "filter5_f_4_711",
        x: "10",
        y: "30",
        width: "18",
        height: "36",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "2",
          result: "effect1_foregroundBlur_4_711"
        })]
      }), jsxs("radialGradient", {
        id: "paint0_radial_4_711",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(22.4501 2.02322) rotate(47.518) scale(3.24219 2.54478)",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0.3"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_4_711",
        x1: "14",
        y1: "25.5",
        x2: "14",
        y2: "36",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1"
        })]
      }), jsxs("linearGradient", {
        id: "paint2_linear_4_711",
        x1: "2",
        y1: "50",
        x2: "26",
        y2: "50",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.3",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.25"
        })]
      }), jsxs("linearGradient", {
        id: "paint3_linear_4_711",
        x1: "5",
        y1: "50",
        x2: "26",
        y2: "50",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.3",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.25"
        })]
      }), jsxs("linearGradient", {
        id: "paint4_linear_4_711",
        x1: "2",
        y1: "50",
        x2: "26",
        y2: "50",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.3",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.25"
        })]
      }), jsx("clipPath", {
        id: "clip0_4_711",
        children: jsx("path", {
          d: "M3 6.912C3 4.49257 3 3.28286 3.47085 2.35876C3.88502 1.5459 4.5459 0.885025 5.35876 0.470852C6.28286 0 7.49257 0 9.912 0H18.088C20.5074 0 21.7171 0 22.6412 0.470852C23.4541 0.885025 24.115 1.5459 24.5291 2.35876C25 3.28286 25 4.49257 25 6.912V11H3V6.912Z",
          fill: "white"
        })
      })]
    })]
  });
}
function tP() {
  return jsxs("svg", {
    width: "18",
    height: "34",
    viewBox: "0 0 18 34",
    fill: "none",
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsxs("mask", {
      id: "mask0_19_1803",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "1",
      y: "0",
      width: "16",
      height: "29",
      children: [jsx("path", {
        d: "M1 4.608C1 2.99505 1 2.18857 1.3139 1.57251C1.59002 1.0306 2.0306 0.590017 2.57251 0.313901C3.18857 0 3.99505 0 5.608 0H12.392C14.005 0 14.8114 0 15.4275 0.313901C15.9694 0.590017 16.41 1.0306 16.6861 1.57251C17 2.18857 17 2.99505 17 4.608V26.8502C17 27.5906 17 27.9607 16.8559 28.2435C16.7292 28.4923 16.527 28.6945 16.2782 28.8212C15.9955 28.9653 15.6253 28.9653 14.8849 28.9653H3.11507C2.37473 28.9653 2.00455 28.9653 1.72178 28.8212C1.47305 28.6945 1.27082 28.4923 1.14408 28.2435C1 27.9607 1 27.5906 1 26.8502V4.608Z",
        fill: "#FFA4A4"
      }), jsx("path", {
        d: "M1 4.608C1 2.99505 1 2.18857 1.3139 1.57251C1.59002 1.0306 2.0306 0.590017 2.57251 0.313901C3.18857 0 3.99505 0 5.608 0H12.392C14.005 0 14.8114 0 15.4275 0.313901C15.9694 0.590017 16.41 1.0306 16.6861 1.57251C17 2.18857 17 2.99505 17 4.608V26.8502C17 27.5906 17 27.9607 16.8559 28.2435C16.7292 28.4923 16.527 28.6945 16.2782 28.8212C15.9955 28.9653 15.6253 28.9653 14.8849 28.9653H3.11507C2.37473 28.9653 2.00455 28.9653 1.72178 28.8212C1.47305 28.6945 1.27082 28.4923 1.14408 28.2435C1 27.9607 1 27.5906 1 26.8502V4.608Z",
        fill: "url(#paint0_radial_19_1803)"
      })]
    }), jsxs("g", {
      mask: "url(#mask0_19_1803)",
      children: [jsxs("g", {
        filter: "url(#filter0_ii_19_1803)",
        children: [jsx("path", {
          d: "M1 4.608C1 2.99505 1 2.18857 1.3139 1.57251C1.59002 1.0306 2.0306 0.590017 2.57251 0.313901C3.18857 0 3.99505 0 5.608 0H12.392C14.005 0 14.8115 0 15.4275 0.313901C15.9694 0.590017 16.41 1.0306 16.6861 1.57251C17 2.18857 17 2.99505 17 4.608V26.8502C17 27.5906 17 27.9607 16.856 28.2435C16.7292 28.4923 16.527 28.6945 16.2783 28.8212C15.9955 28.9653 15.6253 28.9653 14.885 28.9653H3.11507C2.37473 28.9653 2.00455 28.9653 1.72178 28.8212C1.47305 28.6945 1.27082 28.4923 1.14408 28.2435C1 27.9607 1 27.5906 1 26.8502V4.608Z",
          fill: "#FFA4A4"
        }), jsx("path", {
          d: "M1 4.608C1 2.99505 1 2.18857 1.3139 1.57251C1.59002 1.0306 2.0306 0.590017 2.57251 0.313901C3.18857 0 3.99505 0 5.608 0H12.392C14.005 0 14.8115 0 15.4275 0.313901C15.9694 0.590017 16.41 1.0306 16.6861 1.57251C17 2.18857 17 2.99505 17 4.608V26.8502C17 27.5906 17 27.9607 16.856 28.2435C16.7292 28.4923 16.527 28.6945 16.2783 28.8212C15.9955 28.9653 15.6253 28.9653 14.885 28.9653H3.11507C2.37473 28.9653 2.00455 28.9653 1.72178 28.8212C1.47305 28.6945 1.27082 28.4923 1.14408 28.2435C1 27.9607 1 27.5906 1 26.8502V4.608Z",
          fill: "url(#paint1_radial_19_1803)"
        })]
      }), jsx("path", {
        d: "M5.6084 0.25H12.3916C13.2022 0.25 13.796 0.249873 14.2637 0.288086C14.6121 0.316575 14.8785 0.366256 15.1025 0.446289L15.3145 0.537109C15.7473 0.757774 16.1097 1.09299 16.3623 1.50488L16.4639 1.68555C16.5998 1.95238 16.6739 2.27177 16.7119 2.73633C16.7501 3.20403 16.75 3.7978 16.75 4.6084V26.8506C16.75 27.2247 16.7494 27.4904 16.7324 27.6982C16.7199 27.8518 16.6992 27.9614 16.668 28.0488L16.6328 28.1299C16.5557 28.2812 16.4447 28.4118 16.3086 28.5107L16.165 28.5986C16.0648 28.6497 15.9374 28.6815 15.7324 28.6982C15.5246 28.7152 15.2588 28.7148 14.8848 28.7148H3.11523C2.74117 28.7148 2.47541 28.7152 2.26758 28.6982C2.11365 28.6857 2.00361 28.6642 1.91602 28.6328L1.83496 28.5986C1.68368 28.5215 1.55399 28.4095 1.45508 28.2734L1.36719 28.1299C1.31611 28.0296 1.28433 27.9031 1.26758 27.6982C1.2506 27.4904 1.25 27.2247 1.25 26.8506V4.6084C1.25 3.7978 1.24987 3.20403 1.28809 2.73633C1.32607 2.27177 1.40115 1.95238 1.53711 1.68555C1.78918 1.19111 2.19111 0.789181 2.68555 0.537109C2.95238 0.40115 3.27177 0.326071 3.73633 0.288086C3.97022 0.268977 4.23587 0.259707 4.54395 0.254883L5.6084 0.25Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      })]
    }), jsx("g", {
      clipPath: "url(#clip0_19_1803)",
      children: jsx("g", {
        filter: "url(#filter1_f_19_1803)",
        children: jsx("path", {
          d: "M1.49933 3.0936C1.49933 1.50301 2.78875 0.213596 4.37933 0.213596H13.3793C14.9699 0.213596 16.2593 1.50302 16.2593 3.0936V4.16027C16.2593 5.75085 14.9699 7.04027 13.3793 7.04027H4.37933C2.78875 7.04027 1.49933 5.75084 1.49933 4.16026V3.0936Z",
          fill: "white",
          fillOpacity: "0.32"
        })
      })
    }), jsx("g", {
      filter: "url(#filter2_f_19_1803)",
      children: jsx("path", {
        d: "M1.54523 9.58514C1.54523 7.99456 2.83465 6.70514 4.42523 6.70514H13.5743C15.1649 6.70514 16.4543 7.99456 16.4543 9.58514V29.1203C16.4543 30.7109 15.1649 32.0003 13.5743 32.0003H4.42523C2.83465 32.0003 1.54523 30.7109 1.54523 29.1203V9.58514Z",
        fill: "black",
        fillOpacity: "0.12"
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_ii_19_1803",
        x: "0.28",
        y: "0",
        width: "17.4401",
        height: "28.9653",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "-0.72"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.72"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_19_1803"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.72"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.72"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_innerShadow_19_1803",
          result: "effect2_innerShadow_19_1803"
        })]
      }), jsxs("filter", {
        id: "filter1_f_19_1803",
        x: "0.432661",
        y: "-0.853071",
        width: "16.8933",
        height: "8.96001",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.533334",
          result: "effect1_foregroundBlur_19_1803"
        })]
      }), jsxs("filter", {
        id: "filter2_f_19_1803",
        x: "0.105226",
        y: "5.26514",
        width: "17.7891",
        height: "28.1752",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.72",
          result: "effect1_foregroundBlur_19_1803"
        })]
      }), jsxs("radialGradient", {
        id: "paint0_radial_19_1803",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(15 1.32758) rotate(46.2871) scale(2.17063 1.70859)",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0.3"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("radialGradient", {
        id: "paint1_radial_19_1803",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(15 1.32758) rotate(46.287) scale(2.17063 1.70859)",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0.3"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsx("clipPath", {
        id: "clip0_19_1803",
        children: jsx("path", {
          d: "M1 4.608C1 2.99505 1 2.18857 1.3139 1.57251C1.59002 1.0306 2.0306 0.590017 2.57251 0.313901C3.18857 0 3.99505 0 5.608 0H12.392C14.005 0 14.8114 0 15.4275 0.313901C15.9694 0.590017 16.41 1.0306 16.6861 1.57251C17 2.18857 17 2.99505 17 4.608V7.24133H1V4.608Z",
          fill: "white"
        })
      })]
    })]
  });
}
function tU() {
  let e = tT();
  return colorCSSManipulatorInstance.format(e);
}
function tF() {
  let e = tU();
  return jsxs("svg", {
    width: "28",
    height: "66",
    viewBox: "0 0 28 66",
    fill: "none",
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsx("path", {
      d: "M10.605 9C9.65941 9 8.89286 9.76202 8.89286 10.702C8.89286 16.2709 6.73078 20.4466 2.66805 24.2506C2.24942 24.6426 2 25.1863 2 25.7598V31.5001C2 32.3286 2.67157 33.0001 3.49999 33.0001L24.5 33.0002C25.3284 33.0002 26 32.3286 26 31.5002V25.7599C26 25.1864 25.7506 24.6427 25.3319 24.2507C21.2692 20.4467 19.1071 16.271 19.1071 10.7021C19.1071 9.76212 18.3406 9.0001 17.395 9.0001L10.605 9Z",
      fill: "white"
    }), jsx("path", {
      d: "M10.605 9C9.65941 9 8.89286 9.76202 8.89286 10.702C8.89286 16.2709 6.73078 20.4466 2.66805 24.2506C2.24942 24.6426 2 25.1863 2 25.7598V31.5001C2 32.3286 2.67157 33.0001 3.49999 33.0001L24.5 33.0002C25.3284 33.0002 26 32.3286 26 31.5002V25.7599C26 25.1864 25.7506 24.6427 25.3319 24.2507C21.2692 20.4467 19.1071 16.271 19.1071 10.7021C19.1071 9.76212 18.3406 9.0001 17.395 9.0001L10.605 9Z",
      fill: "url(#paint0_linear_7_787)",
      fillOpacity: "0.6"
    }), jsx("path", {
      d: "M10.6055 9.25H17.3945C18.2035 9.25 18.8574 9.90162 18.8574 10.7021C18.8574 16.1751 20.9219 20.3237 24.7822 24.0713L25.1611 24.4336C25.5321 24.781 25.75 25.2596 25.75 25.7598V31.5C25.75 32.1904 25.1904 32.75 24.5 32.75H3.5L3.37207 32.7441C2.74179 32.6801 2.25 32.1472 2.25 31.5V25.7598C2.25001 25.322 2.41672 24.9006 2.70703 24.5693L2.83887 24.4336C6.94301 20.5908 9.14254 16.3516 9.14258 10.7021C9.14258 9.95173 9.71689 9.33242 10.4551 9.25781L10.6055 9.25Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("g", {
      filter: "url(#filter0_i_7_787)",
      children: jsx("path", {
        d: "M2 34C2 33.1716 2.67157 32.5 3.5 32.5H24.5C25.3284 32.5 26 33.1716 26 34V64H2L2 34Z",
        fill: e,
        className: cq
      })
    }), jsx("g", {
      style: {
        mixBlendMode: "soft-light"
      },
      opacity: "0.15",
      filter: "url(#filter1_f_7_787)",
      children: jsx("path", {
        d: "M3 33.5H14V63H3.13236L3 33.5Z",
        fill: "white"
      })
    }), jsx("g", {
      style: {
        mixBlendMode: "darken"
      },
      opacity: "0.05",
      filter: "url(#filter2_f_7_787)",
      children: jsx("path", {
        d: "M14 33.5L25 33.5L25 63H14L14 33.5Z",
        fill: "black"
      })
    }), jsx("path", {
      d: "M3.5 32.75H24.5C25.1904 32.75 25.75 33.3096 25.75 34V63.75H2.25V34C2.25 33.3096 2.80964 32.75 3.5 32.75Z",
      stroke: "black",
      strokeOpacity: "0.15",
      strokeWidth: "0.5"
    }), jsx("g", {
      opacity: "0.5",
      filter: "url(#filter3_f_7_787)",
      children: jsx("rect", {
        x: "3",
        y: "34",
        width: "22",
        height: "1",
        rx: "0.5",
        fill: "white"
      })
    }), jsx("path", {
      d: "M10 3.58005C10 3.17969 10.2388 2.81792 10.6069 2.66054L16.6069 0.0955447C17.2667 -0.186505 18 0.29752 18 1.01505V9.5H10V3.58005Z",
      fill: e,
      className: cq
    }), jsx("path", {
      d: "M10 3.58005C10 3.17969 10.2388 2.81792 10.6069 2.66054L16.6069 0.0955447C17.2667 -0.186505 18 0.29752 18 1.01505V9.5H10V3.58005Z",
      fill: "url(#paint1_linear_7_787)"
    }), jsx("path", {
      d: "M16.7051 0.325195C17.1998 0.11371 17.7497 0.476723 17.75 1.01465V9.25H10.25V3.58008C10.25 3.31728 10.3871 3.0765 10.6064 2.94141L10.7051 2.89062L16.7051 0.325195Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("g", {
      opacity: "0.15",
      filter: "url(#filter4_f_7_787)",
      children: jsx("path", {
        d: "M18 11H14.5V31.5H24.5V25.5C21.5 22.5 18 20 18 11Z",
        fill: "black"
      })
    }), jsx("g", {
      opacity: "0.1",
      filter: "url(#filter5_f_7_787)",
      children: jsx("path", {
        d: "M3.5 26C3.5 25.4477 3.94772 25 4.5 25H23.5C24.0523 25 24.5 25.4477 24.5 26V32C24.5 32.5523 24.0523 33 23.5 33H4.5C3.94772 33 3.5 32.5523 3.5 32V26Z",
        fill: "url(#paint2_linear_7_787)"
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_i_7_787",
        x: "2",
        y: "32.5",
        width: "24",
        height: "36.5",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "5"
        }), jsx("feGaussianBlur", {
          stdDeviation: "6.15"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "plus-darker",
          in2: "shape",
          result: "effect1_innerShadow_7_787"
        })]
      }), jsxs("filter", {
        id: "filter1_f_7_787",
        x: "0",
        y: "30.5",
        width: "17",
        height: "35.5",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5",
          result: "effect1_foregroundBlur_7_787"
        })]
      }), jsxs("filter", {
        id: "filter2_f_7_787",
        x: "11",
        y: "30.5",
        width: "17",
        height: "35.5",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5",
          result: "effect1_foregroundBlur_7_787"
        })]
      }), jsxs("filter", {
        id: "filter3_f_7_787",
        x: "1",
        y: "32",
        width: "26",
        height: "5",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1",
          result: "effect1_foregroundBlur_7_787"
        })]
      }), jsxs("filter", {
        id: "filter4_f_7_787",
        x: "11.5",
        y: "8",
        width: "16",
        height: "26.5",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5",
          result: "effect1_foregroundBlur_7_787"
        })]
      }), jsxs("filter", {
        id: "filter5_f_7_787",
        x: "2.5",
        y: "24",
        width: "23",
        height: "10",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.5",
          result: "effect1_foregroundBlur_7_787"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_7_787",
        x1: "2",
        y1: "28.3335",
        x2: "26",
        y2: "28.3335",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.4",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.15"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_7_787",
        x1: "14",
        y1: "0.5",
        x2: "14",
        y2: "7",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0.8"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: "paint2_linear_7_787",
        x1: "14",
        y1: "27.9272",
        x2: "4.93182",
        y2: "27.9272",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {}), jsx("stop", {
          offset: "1",
          stopOpacity: "0"
        })]
      })]
    })]
  });
}
function tH() {
  let e = tU();
  return jsxs("svg", {
    width: "19",
    height: "44",
    viewBox: "0 0 19 44",
    fill: "none",
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsx("path", {
      d: "M6.73673 5.99998C6.10633 5.99998 5.59529 6.508 5.59529 7.13466C5.59529 10.8473 4.1539 13.6311 1.4454 16.1671C1.16631 16.4284 1.00003 16.7909 1.00003 17.1733V21.0001C1.00003 21.5524 1.44774 22.0001 2.00003 22.0002L16.0001 22.0002C16.5524 22.0002 17.0001 21.5525 17.0001 21.0002V17.1733C17.0001 16.791 16.8338 16.4285 16.5547 16.1672C13.8462 13.6312 12.4049 10.8474 12.4049 7.13473C12.4049 6.50807 11.8938 6.00005 11.2634 6.00005L6.73673 5.99998Z",
      fill: "white"
    }), jsx("path", {
      d: "M6.73673 5.99998C6.10633 5.99998 5.59529 6.508 5.59529 7.13466C5.59529 10.8473 4.1539 13.6311 1.4454 16.1671C1.16631 16.4284 1.00003 16.7909 1.00003 17.1733V21.0001C1.00003 21.5524 1.44774 22.0001 2.00003 22.0002L16.0001 22.0002C16.5524 22.0002 17.0001 21.5525 17.0001 21.0002V17.1733C17.0001 16.791 16.8338 16.4285 16.5547 16.1672C13.8462 13.6312 12.4049 10.8474 12.4049 7.13473C12.4049 6.50807 11.8938 6.00005 11.2634 6.00005L6.73673 5.99998Z",
      fill: "url(#paint0_linear_18_1718)",
      fillOpacity: "0.6"
    }), jsx("path", {
      d: "M6.73636 6.24998H11.2637C11.7573 6.25014 12.1553 6.64765 12.1553 7.13475C12.1553 10.928 13.6339 13.7748 16.3838 16.3496C16.6153 16.5663 16.7499 16.8638 16.75 17.1728V21C16.75 21.4142 16.4142 21.75 16 21.75H2.00003L1.92288 21.7461C1.54492 21.7074 1.25003 21.3881 1.25003 21V17.1728C1.25014 16.9024 1.35333 16.6409 1.53421 16.4346L1.61624 16.3496C4.36617 13.7748 5.84571 10.928 5.84573 7.13475C5.84573 6.67795 6.19495 6.30025 6.64554 6.25487L6.73636 6.24998Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("g", {
      filter: "url(#filter0_i_18_1718)",
      children: jsx("path", {
        d: "M1.00003 22.6667C1.00003 22.1144 1.44775 21.6667 2.00004 21.6667H16.0001C16.5524 21.6667 17.0001 22.1144 17.0001 22.6667V42.6668H1.00003L1.00003 22.6667Z",
        fill: e,
        className: cq
      })
    }), jsx("g", {
      style: {
        mixBlendMode: "soft-light"
      },
      opacity: "0.15",
      filter: "url(#filter1_f_18_1718)",
      children: jsx("path", {
        d: "M9.66672 22.3334H17.0001V42.0002H9.75496L9.66672 22.3334Z",
        fill: "white"
      })
    }), jsx("path", {
      d: "M9.33701 33.3341C9.33654 34.0237 8.81223 34.5916 8.14072 34.6602L8.004 34.6671C7.31478 34.6671 6.74566 34.1433 6.67685 33.4708L6.67001 33.3341C6.67001 33.2187 6.68533 33.1068 6.71298 33.0001C6.85104 33.5355 7.31236 33.9407 7.87607 33.9942L8.004 34.0001L8.14072 33.9933C8.81233 33.9246 9.33666 33.3568 9.33701 32.6671V33.3341ZM8.004 32.0001H8.67001V32.6671H8.004C7.75781 32.6671 7.54437 32.8015 7.4288 33.0001C7.37161 32.9019 7.33707 32.7889 7.33701 32.6671C7.33701 32.3449 7.56543 32.076 7.86923 32.0138L8.004 32.0001ZM11.2931 31.0011C11.3206 31.1075 11.337 31.2191 11.337 31.3341L11.3302 31.4708C11.2661 32.0975 10.7674 32.5962 10.1407 32.6602L10.004 32.6671C9.76099 32.6671 9.5334 32.6001 9.33701 32.4864V31.8194C9.48423 31.9047 9.64877 31.9633 9.82431 31.9874L10.004 32.0001L10.1407 31.9933C10.7 31.9361 11.1557 31.5326 11.2931 31.0011ZM6.71298 31.0001C6.78105 31.2622 6.92688 31.4925 7.12411 31.6661C7.01597 31.7612 6.92364 31.8739 6.85068 31.9991C6.75822 31.8408 6.69646 31.6624 6.67685 31.4708L6.67001 31.3341C6.67001 31.2187 6.68533 31.1068 6.71298 31.0001ZM8.004 30.0001H8.67001V30.6671H8.004C7.75781 30.6671 7.54437 30.8015 7.4288 31.0001C7.37161 30.9019 7.33707 30.7889 7.33701 30.6671C7.33701 30.3449 7.56543 30.076 7.86923 30.0138L8.004 30.0001ZM10.004 30.0001C10.3719 30.0004 10.67 30.2991 10.67 30.6671C10.6699 30.7892 10.6336 30.9017 10.5763 31.0001C10.4609 30.802 10.2496 30.6673 10.004 30.6671C9.75781 30.6671 9.54437 30.8015 9.4288 31.0001C9.37161 30.9019 9.33707 30.7889 9.33701 30.6671C9.33701 30.2989 9.63581 30.0001 10.004 30.0001ZM6.71298 29.0001C6.78105 29.2622 6.92688 29.4925 7.12411 29.6661C7.01597 29.7612 6.92364 29.8739 6.85068 29.9991C6.75822 29.8408 6.69646 29.6624 6.67685 29.4708L6.67001 29.3341C6.67001 29.2188 6.68544 29.1068 6.71298 29.0001ZM11.2921 28.9981C11.309 29.0631 11.3233 29.1299 11.3302 29.1983L11.337 29.3341C11.3368 29.577 11.2695 29.8034 11.1554 29.9991C11.0825 29.8741 10.9909 29.7612 10.8829 29.6661C11.0803 29.4922 11.2241 29.2606 11.2921 28.9981ZM8.67001 28.0001V28.6671H8.004C7.75781 28.6671 7.54437 28.8015 7.4288 29.0001C7.37161 28.9019 7.33707 28.7889 7.33701 28.6671C7.33701 28.2989 7.63581 28.0001 8.004 28.0001H8.67001ZM10.004 28.0001C10.3719 28.0004 10.67 28.2991 10.67 28.6671C10.6699 28.7892 10.6336 28.9017 10.5763 29.0001C10.4609 28.802 10.2496 28.6673 10.004 28.6671H9.33701V28.0001H10.004Z",
      fill: "white",
      fillOpacity: "0.3"
    }), jsxs("mask", {
      id: "path-6-outside-1_18_1718",
      maskUnits: "userSpaceOnUse",
      x: "6.32999",
      y: "27.0001",
      width: "5",
      height: "7",
      fill: "black",
      children: [jsx("rect", {
        fill: "white",
        x: "6.32999",
        y: "27.0001",
        width: "5",
        height: "7"
      }), jsx("path", {
        d: "M8.66299 32.6671C8.66282 33.035 8.36491 33.3329 7.99698 33.3331C7.6289 33.3331 7.33017 33.0351 7.32999 32.6671C7.32999 32.2989 7.62879 32.0001 7.99698 32.0001H8.66299V32.6671ZM8.66299 31.3331H7.99698C7.6289 31.3331 7.33017 31.0351 7.32999 30.6671C7.32999 30.2989 7.62879 30.0001 7.99698 30.0001H8.66299V31.3331ZM9.99698 30.0001C10.365 30.0003 10.663 30.299 10.663 30.6671C10.6628 31.035 10.3649 31.3329 9.99698 31.3331C9.6289 31.3331 9.33017 31.0351 9.32999 30.6671C9.32999 30.2989 9.62879 30.0001 9.99698 30.0001ZM8.66299 29.3331H7.99698C7.62889 29.3331 7.33016 29.0351 7.32999 28.6671C7.32999 28.2989 7.62879 28.0001 7.99698 28.0001H8.66299V29.3331ZM9.99698 28.0001C10.365 28.0003 10.663 28.299 10.663 28.6671C10.6628 29.035 10.3649 29.3329 9.99698 29.3331H9.32999V28.0001H9.99698Z"
      })]
    }), jsx("path", {
      d: "M8.66299 32.6671L9.32966 32.6674V32.6671H8.66299ZM7.99698 33.3331L7.99698 33.9998L7.9973 33.9998L7.99698 33.3331ZM7.32999 32.6671L6.66332 32.6671L6.66332 32.6674L7.32999 32.6671ZM8.66299 32.0001H9.32966V31.3334H8.66299V32.0001ZM8.66299 31.3331V31.9998H9.32966V31.3331H8.66299ZM7.32999 30.6671L6.66332 30.6671L6.66332 30.6674L7.32999 30.6671ZM8.66299 30.0001H9.32966V29.3334H8.66299V30.0001ZM9.99698 30.0001L9.99729 29.3334H9.99698V30.0001ZM10.663 30.6671L11.3297 30.6674V30.6671H10.663ZM9.99698 31.3331L9.99698 31.9998L9.99729 31.9998L9.99698 31.3331ZM9.32999 30.6671L8.66332 30.6671L8.66332 30.6674L9.32999 30.6671ZM8.66299 29.3331V29.9998H9.32966V29.3331H8.66299ZM7.32999 28.6671L6.66332 28.6671L6.66332 28.6674L7.32999 28.6671ZM8.66299 28.0001H9.32966V27.3334H8.66299V28.0001ZM9.99698 28.0001L9.99729 27.3334H9.99698V28.0001ZM10.663 28.6671L11.3297 28.6674V28.6671H10.663ZM9.99698 29.3331L9.99698 29.9998L9.99729 29.9998L9.99698 29.3331ZM9.32999 29.3331H8.66332V29.9998H9.32999V29.3331ZM9.32999 28.0001V27.3334H8.66332V28.0001H9.32999ZM8.66299 32.6671L7.99632 32.6668L7.99666 32.6664L7.99698 33.3331L7.9973 33.9998C8.73318 33.9994 9.32931 33.4033 9.32966 32.6674L8.66299 32.6671ZM7.99698 33.3331V32.6664L7.99666 32.6668L7.32999 32.6671L6.66332 32.6674C6.66367 33.4043 7.26166 33.9998 7.99698 33.9998V33.3331ZM7.32999 32.6671H7.99666L7.99698 32.6668V32.0001V31.3334C7.2606 31.3334 6.66332 31.9307 6.66332 32.6671H7.32999ZM7.99698 32.0001V32.6668H8.66299V32.0001V31.3334H7.99698V32.0001ZM8.66299 32.0001H7.99632V32.6671H8.66299H9.32966V32.0001H8.66299ZM8.66299 31.3331V30.6664H7.99698V31.3331V31.9998H8.66299V31.3331ZM7.99698 31.3331V30.6664L7.99666 30.6668L7.32999 30.6671L6.66332 30.6674C6.66368 31.4043 7.26165 31.9998 7.99698 31.9998V31.3331ZM7.32999 30.6671H7.99666L7.99698 30.6668V30.0001V29.3334C7.2606 29.3334 6.66332 29.9307 6.66332 30.6671H7.32999ZM7.99698 30.0001V30.6668H8.66299V30.0001V29.3334H7.99698V30.0001ZM8.66299 30.0001H7.99632V31.3331H8.66299H9.32966V30.0001H8.66299ZM9.99698 30.0001L9.99667 30.6668L9.99632 30.6671H10.663H11.3297C11.3297 29.9318 10.7342 29.3338 9.99729 29.3334L9.99698 30.0001ZM10.663 30.6671L9.99632 30.6668L9.99667 30.6664L9.99698 31.3331L9.99729 31.9998C10.7332 31.9994 11.3293 31.4033 11.3297 30.6674L10.663 30.6671ZM9.99698 31.3331V30.6664L9.99666 30.6668L9.32999 30.6671L8.66332 30.6674C8.66368 31.4043 9.26165 31.9998 9.99698 31.9998V31.3331ZM9.32999 30.6671H9.99666L9.99698 30.6668V30.0001V29.3334C9.2606 29.3334 8.66332 29.9307 8.66332 30.6671H9.32999ZM8.66299 29.3331V28.6664H7.99698V29.3331V29.9998H8.66299V29.3331ZM7.99698 29.3331V28.6664L7.99666 28.6668L7.32999 28.6671L6.66332 28.6674C6.66367 29.4043 7.26166 29.9998 7.99698 29.9998V29.3331ZM7.32999 28.6671H7.99666L7.99698 28.6668V28.0001V27.3334C7.2606 27.3334 6.66332 27.9307 6.66332 28.6671H7.32999ZM7.99698 28.0001V28.6668H8.66299V28.0001V27.3334H7.99698V28.0001ZM8.66299 28.0001H7.99632V29.3331H8.66299H9.32966V28.0001H8.66299ZM9.99698 28.0001L9.99667 28.6668L9.99632 28.6671H10.663H11.3297C11.3297 27.9318 10.7342 27.3338 9.99729 27.3334L9.99698 28.0001ZM10.663 28.6671L9.99632 28.6667L9.99667 28.6664L9.99698 29.3331L9.99729 29.9998C10.7332 29.9994 11.3293 29.4032 11.3297 28.6674L10.663 28.6671ZM9.99698 29.3331V28.6664H9.32999V29.3331V29.9998H9.99698V29.3331ZM9.32999 29.3331H9.99666V28.0001H9.32999H8.66332V29.3331H9.32999ZM9.32999 28.0001V28.6668H9.99698V28.0001V27.3334H9.32999V28.0001Z",
      fill: "url(#paint1_linear_18_1718)",
      fillOpacity: "0.5",
      mask: "url(#path-6-outside-1_18_1718)"
    }), jsx("g", {
      style: {
        mixBlendMode: "plus-lighter"
      },
      opacity: "0.05",
      filter: "url(#filter2_f_18_1718)",
      children: jsx("path", {
        d: "M9.00001 22.3334L16.3334 22.3334L16.3334 42.0002H9L9.00001 22.3334Z",
        fill: "black"
      })
    }), jsx("path", {
      d: "M2.00003 21.8337H16C16.4603 21.8337 16.833 22.2065 16.833 22.6667V42.4997H1.16702V22.6667C1.16703 22.2065 1.53979 21.8337 2.00003 21.8337Z",
      stroke: "black",
      strokeOpacity: "0.15",
      strokeWidth: "0.333335"
    }), jsx("g", {
      opacity: "0.5",
      filter: "url(#filter3_f_18_1718)",
      children: jsx("rect", {
        x: "1.66672",
        y: "22.6667",
        width: "14.6667",
        height: "0.66667",
        rx: "0.333335",
        fill: "white"
      })
    }), jsx("path", {
      d: "M6.33337 2.56004C6.33337 2.29314 6.49256 2.05196 6.73798 1.94704L10.738 0.237032C11.1779 0.0489973 11.6667 0.371683 11.6667 0.850036V6.5067H6.33337V2.56004Z",
      fill: e,
      className: cq
    }), jsx("path", {
      d: "M6.33337 2.56004C6.33337 2.29314 6.49256 2.05196 6.73798 1.94704L10.738 0.237032C11.1779 0.0489973 11.6667 0.371683 11.6667 0.850036V6.5067H6.33337V2.56004Z",
      fill: "url(#paint2_linear_18_1718)"
    }), jsx("path", {
      d: "M10.8363 0.466953C11.1111 0.349472 11.4162 0.550945 11.4164 0.849766V6.25699H6.58337V2.55973L6.58826 2.4982C6.60946 2.35679 6.70216 2.23426 6.8363 2.17691L10.8363 0.466953Z",
      stroke: "black",
      strokeOpacity: "0.3",
      strokeWidth: "0.5"
    }), jsx("g", {
      opacity: "0.1",
      filter: "url(#filter4_f_18_1718)",
      children: jsx("path", {
        d: "M11.6633 7.33332H9.32999V21.0001H15.9967V17C13.9967 15 11.6633 13.3334 11.6633 7.33332Z",
        fill: "black"
      })
    }), jsx("g", {
      opacity: "0.05",
      filter: "url(#filter5_f_18_1718)",
      children: jsx("path", {
        d: "M2.00003 17.3334C2.00003 16.9652 2.29851 16.6667 2.6667 16.6667H15.3334C15.7016 16.6667 16.0001 16.9652 16.0001 17.3334V21.3334C16.0001 21.7016 15.7016 22.0001 15.3334 22.0001H2.6667C2.29851 22.0001 2.00003 21.7016 2.00003 21.3334V17.3334Z",
        fill: "url(#paint3_linear_18_1718)"
      })
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_i_18_1718",
        x: "1.00003",
        y: "21.6667",
        width: "16.0001",
        height: "24.3335",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "3.33335"
        }), jsx("feGaussianBlur", {
          stdDeviation: "4.10002"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "plus-darker",
          in2: "shape",
          result: "effect1_innerShadow_18_1718"
        })]
      }), jsxs("filter", {
        id: "filter1_f_18_1718",
        x: "7.66671",
        y: "20.3334",
        width: "11.3334",
        height: "23.6668",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.00001",
          result: "effect1_foregroundBlur_18_1718"
        })]
      }), jsxs("filter", {
        id: "filter2_f_18_1718",
        x: "6.99999",
        y: "20.3334",
        width: "11.3334",
        height: "23.6668",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.00001",
          result: "effect1_foregroundBlur_18_1718"
        })]
      }), jsxs("filter", {
        id: "filter3_f_18_1718",
        x: "0.333377",
        y: "21.3334",
        width: "17.3334",
        height: "3.33335",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.66667",
          result: "effect1_foregroundBlur_18_1718"
        })]
      }), jsxs("filter", {
        id: "filter4_f_18_1718",
        x: "7.32998",
        y: "5.33331",
        width: "10.6667",
        height: "17.6668",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.00001",
          result: "effect1_foregroundBlur_18_1718"
        })]
      }), jsxs("filter", {
        id: "filter5_f_18_1718",
        x: "1.33336",
        y: "16",
        width: "15.3334",
        height: "6.6667",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.333335",
          result: "effect1_foregroundBlur_18_1718"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_18_1718",
        x1: "1.00003",
        y1: "18.8891",
        x2: "17.0001",
        y2: "18.8891",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.4",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.15"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_18_1718",
        x1: "10.663",
        y1: "30.6666",
        x2: "7.32999",
        y2: "30.6666",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.75"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.5"
        })]
      }), jsxs("linearGradient", {
        id: "paint2_linear_18_1718",
        x1: "9.00005",
        y1: "0.50667",
        x2: "9.00005",
        y2: "4.84003",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "white",
          stopOpacity: "0.8"
        }), jsx("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        })]
      }), jsxs("linearGradient", {
        id: "paint3_linear_18_1718",
        x1: "9.00007",
        y1: "18.6182",
        x2: "2.95458",
        y2: "18.6182",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {}), jsx("stop", {
          offset: "1",
          stopOpacity: "0"
        })]
      })]
    })]
  });
}
function tB() {
  let e = tC();
  return colorCSSManipulatorInstance.format(e);
}
function tV() {
  let e = tB();
  return jsxs("svg", {
    width: "32",
    height: "71",
    viewBox: "0 0 32 71",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_dd_2_289)",
      children: [jsx("path", {
        d: "M9.99331 12.2472C10.2996 11.4932 11.0323 11 11.8462 11H20.1538C20.9677 11 21.7004 11.4932 22.0067 12.2472L26.8235 24.1039C27.6005 26.0166 28 28.0615 28 30.1259V65H4L4 30.1259C4 28.0615 4.39952 26.0166 5.17653 24.1039L9.99331 12.2472Z",
        fill: "white"
      }), jsx("path", {
        d: "M9.99331 12.2472C10.2996 11.4932 11.0323 11 11.8462 11H20.1538C20.9677 11 21.7004 11.4932 22.0067 12.2472L26.8235 24.1039C27.6005 26.0166 28 28.0615 28 30.1259V65H4L4 30.1259C4 28.0615 4.39952 26.0166 5.17653 24.1039L9.99331 12.2472Z",
        fill: "url(#paint0_linear_2_289)",
        fillOpacity: "0.6"
      }), jsx("path", {
        d: "M11.8467 11.25H20.1533C20.8655 11.25 21.5074 11.682 21.7754 12.3418L26.5918 24.1982C27.3566 26.0809 27.75 28.0938 27.75 30.126V64.75H4.25V30.126C4.25 28.0938 4.64338 26.0809 5.4082 24.1982L10.2246 12.3418C10.4926 11.682 11.1345 11.25 11.8467 11.25Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      }), jsx("g", {
        opacity: "0.4",
        filter: "url(#filter1_f_2_289)",
        children: jsx("path", {
          d: "M26 28.134V63.634H16.5V12.634L20 12.5L26 28.134Z",
          fill: "url(#paint1_linear_2_289)"
        })
      }), jsx("g", {
        filter: "url(#filter2_i_2_289)",
        children: jsx("path", {
          d: "M15.0745 2.76245C15.4134 1.93396 16.5866 1.93396 16.9255 2.76245L20.5 11.5H11.5L15.0745 2.76245Z",
          fill: e,
          className: cq
        })
      }), jsx("path", {
        d: "M15.3057 2.85742C15.5599 2.23605 16.4401 2.23606 16.6943 2.85742L20.1279 11.25H11.8721L15.3057 2.85742Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      }), jsx("path", {
        d: "M4.5 33H27.5",
        stroke: "black",
        strokeOpacity: "0.15"
      }), jsx("path", {
        opacity: "0.5",
        d: "M4.5 34H27.5",
        stroke: "white"
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_dd_2_289",
        x: "0",
        y: "-1",
        width: "32",
        height: "72",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_2_289"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "2"
        }), jsx("feGaussianBlur", {
          stdDeviation: "2"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_2_289",
          result: "effect2_dropShadow_2_289"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect2_dropShadow_2_289",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_f_2_289",
        x: "13.5",
        y: "9.5",
        width: "15.5",
        height: "57.134",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.5",
          result: "effect1_foregroundBlur_2_289"
        })]
      }), jsxs("filter", {
        id: "filter2_i_2_289",
        x: "9.34",
        y: "2.14108",
        width: "11.16",
        height: "10.4389",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "-2.16",
          dy: "1.08"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.62"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_2_289"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_2_289",
        x1: "4",
        y1: "54.5",
        x2: "28",
        y2: "54.5",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.4",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.15"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_2_289",
        x1: "16.5",
        y1: "-0.499999",
        x2: "23.7558",
        y2: "51.4928",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.4"
        })]
      })]
    })]
  });
}
function tG() {
  let e = tB();
  return jsxs("svg", {
    width: "16",
    height: "34",
    viewBox: "0 0 16 34",
    fill: "none",
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsxs("g", {
      clipPath: "url(#clip0_18_1382)",
      children: [jsx("path", {
        d: "M3.99556 7.49816C4.19978 6.99546 4.68826 6.66666 5.23085 6.66666H10.7692C11.3118 6.66666 11.8003 6.99546 12.0045 7.49816L15.2157 15.4026C15.7337 16.6777 16.0001 18.041 16.0001 19.4174V42.6668H0L0 19.4174C0 18.041 0.26635 16.6777 0.784361 15.4026L3.99556 7.49816Z",
        fill: "white"
      }), jsx("path", {
        d: "M3.99556 7.49816C4.19978 6.99546 4.68826 6.66666 5.23085 6.66666H10.7692C11.3118 6.66666 11.8003 6.99546 12.0045 7.49816L15.2157 15.4026C15.7337 16.6777 16.0001 18.041 16.0001 19.4174V42.6668H0L0 19.4174C0 18.041 0.26635 16.6777 0.784361 15.4026L3.99556 7.49816Z",
        fill: "url(#paint0_linear_18_1382)",
        fillOpacity: "0.6"
      }), jsx("path", {
        d: "M5.23047 6.91666H10.7695C11.1552 6.91676 11.5071 7.12129 11.7002 7.44595L11.7725 7.59244L14.9844 15.4967C15.4902 16.7419 15.75 18.0736 15.75 19.4176V42.4167H0.25V19.4176C0.25 18.0736 0.509788 16.7419 1.01562 15.4967L4.22754 7.59244C4.39342 7.18411 4.78976 6.91681 5.23047 6.91666Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      }), jsx("g", {
        opacity: "0.2",
        filter: "url(#filter0_f_18_1382)",
        children: jsx("path", {
          d: "M14.6634 18.0894V41.7561H8.32998V7.75597L10.6633 7.66666L14.6634 18.0894Z",
          fill: "url(#paint1_linear_18_1382)"
        })
      }), jsx("g", {
        filter: "url(#filter1_i_18_1382)",
        children: jsx("path", {
          d: "M7.38304 1.17493C7.60899 0.622596 8.39116 0.622596 8.61711 1.17492L11.0001 6.99999H5.00006L7.38304 1.17493Z",
          fill: e,
          className: cq
        })
      }), jsx("path", {
        d: "M7.61432 1.26916C7.75567 0.924389 8.24445 0.924397 8.3858 1.26916L10.628 6.74963H5.37213L7.61432 1.26916Z",
        stroke: "black",
        strokeOpacity: "0.3",
        strokeWidth: "0.5"
      }), jsx("path", {
        d: "M0.329987 21.3334H15.6634",
        stroke: "black",
        strokeOpacity: "0.15",
        strokeWidth: "0.66667"
      }), jsx("path", {
        opacity: "0.5",
        d: "M0.329987 22.0001H15.6634",
        stroke: "white",
        strokeWidth: "0.66667"
      }), jsxs("g", {
        filter: "url(#filter2_d_18_1382)",
        children: [jsxs("mask", {
          id: "path-8-outside-1_18_1382",
          maskUnits: "userSpaceOnUse",
          x: "5.32999",
          y: "27.0001",
          width: "5",
          height: "7",
          fill: e,
          className: cq,
          children: [jsx("rect", {
            fill: "white",
            x: "5.32999",
            y: "27.0001",
            width: "5",
            height: "7"
          }), jsx("path", {
            d: "M7.66299 32.6671C7.66282 33.035 7.36491 33.3329 6.99698 33.3331C6.6289 33.3331 6.33017 33.0351 6.32999 32.6671C6.32999 32.2989 6.62879 32.0001 6.99698 32.0001H7.66299V32.6671ZM7.66299 31.3331H6.99698C6.6289 31.3331 6.33017 31.0351 6.32999 30.6671C6.32999 30.2989 6.62879 30.0001 6.99698 30.0001H7.66299V31.3331ZM8.99698 30.0001C9.36503 30.0003 9.66299 30.299 9.66299 30.6671C9.66281 31.035 9.36491 31.3329 8.99698 31.3331C8.6289 31.3331 8.33017 31.0351 8.32999 30.6671C8.32999 30.2989 8.62879 30.0001 8.99698 30.0001ZM7.66299 29.3331H6.99698C6.62889 29.3331 6.33016 29.0351 6.32999 28.6671C6.32999 28.2989 6.62879 28.0001 6.99698 28.0001H7.66299V29.3331ZM8.99698 28.0001C9.36503 28.0003 9.66299 28.299 9.66299 28.6671C9.66281 29.035 9.36491 29.3329 8.99698 29.3331H8.32999V28.0001H8.99698Z"
          })]
        }), jsx("path", {
          d: "M7.66299 32.6671L8.32966 32.6674V32.6671H7.66299ZM6.99698 33.3331L6.99698 33.9998L6.9973 33.9998L6.99698 33.3331ZM6.32999 32.6671L5.66332 32.6671L5.66332 32.6674L6.32999 32.6671ZM7.66299 32.0001H8.32966V31.3334H7.66299V32.0001ZM7.66299 31.3331V31.9998H8.32966V31.3331H7.66299ZM6.32999 30.6671L5.66332 30.6671L5.66332 30.6674L6.32999 30.6671ZM7.66299 30.0001H8.32966V29.3334H7.66299V30.0001ZM8.99698 30.0001L8.99729 29.3334H8.99698V30.0001ZM9.66299 30.6671L10.3297 30.6674V30.6671H9.66299ZM8.99698 31.3331L8.99698 31.9998L8.99729 31.9998L8.99698 31.3331ZM8.32999 30.6671L7.66332 30.6671L7.66332 30.6674L8.32999 30.6671ZM7.66299 29.3331V29.9998H8.32966V29.3331H7.66299ZM6.32999 28.6671L5.66332 28.6671L5.66332 28.6674L6.32999 28.6671ZM7.66299 28.0001H8.32966V27.3334H7.66299V28.0001ZM8.99698 28.0001L8.99729 27.3334H8.99698V28.0001ZM9.66299 28.6671L10.3297 28.6674V28.6671H9.66299ZM8.99698 29.3331L8.99698 29.9998L8.99729 29.9998L8.99698 29.3331ZM8.32999 29.3331H7.66332V29.9998H8.32999V29.3331ZM8.32999 28.0001V27.3334H7.66332V28.0001H8.32999ZM7.66299 32.6671L6.99632 32.6668L6.99666 32.6664L6.99698 33.3331L6.9973 33.9998C7.73318 33.9994 8.32931 33.4033 8.32966 32.6674L7.66299 32.6671ZM6.99698 33.3331V32.6664L6.99666 32.6668L6.32999 32.6671L5.66332 32.6674C5.66367 33.4043 6.26166 33.9998 6.99698 33.9998V33.3331ZM6.32999 32.6671H6.99666L6.99698 32.6668V32.0001V31.3334C6.2606 31.3334 5.66332 31.9307 5.66332 32.6671H6.32999ZM6.99698 32.0001V32.6668H7.66299V32.0001V31.3334H6.99698V32.0001ZM7.66299 32.0001H6.99632V32.6671H7.66299H8.32966V32.0001H7.66299ZM7.66299 31.3331V30.6664H6.99698V31.3331V31.9998H7.66299V31.3331ZM6.99698 31.3331V30.6664L6.99666 30.6668L6.32999 30.6671L5.66332 30.6674C5.66368 31.4043 6.26165 31.9998 6.99698 31.9998V31.3331ZM6.32999 30.6671H6.99666L6.99698 30.6668V30.0001V29.3334C6.2606 29.3334 5.66332 29.9307 5.66332 30.6671H6.32999ZM6.99698 30.0001V30.6668H7.66299V30.0001V29.3334H6.99698V30.0001ZM7.66299 30.0001H6.99632V31.3331H7.66299H8.32966V30.0001H7.66299ZM8.99698 30.0001L8.99667 30.6668L8.99632 30.6671H9.66299H10.3297C10.3297 29.9318 9.73425 29.3338 8.99729 29.3334L8.99698 30.0001ZM9.66299 30.6671L8.99632 30.6668L8.99667 30.6664L8.99698 31.3331L8.99729 31.9998C9.7332 31.9994 10.3293 31.4033 10.3297 30.6674L9.66299 30.6671ZM8.99698 31.3331V30.6664L8.99666 30.6668L8.32999 30.6671L7.66332 30.6674C7.66368 31.4043 8.26165 31.9998 8.99698 31.9998V31.3331ZM8.32999 30.6671H8.99666L8.99698 30.6668V30.0001V29.3334C8.2606 29.3334 7.66332 29.9307 7.66332 30.6671H8.32999ZM7.66299 29.3331V28.6664H6.99698V29.3331V29.9998H7.66299V29.3331ZM6.99698 29.3331V28.6664L6.99666 28.6668L6.32999 28.6671L5.66332 28.6674C5.66367 29.4043 6.26166 29.9998 6.99698 29.9998V29.3331ZM6.32999 28.6671H6.99666L6.99698 28.6668V28.0001V27.3334C6.2606 27.3334 5.66332 27.9307 5.66332 28.6671H6.32999ZM6.99698 28.0001V28.6668H7.66299V28.0001V27.3334H6.99698V28.0001ZM7.66299 28.0001H6.99632V29.3331H7.66299H8.32966V28.0001H7.66299ZM8.99698 28.0001L8.99667 28.6668L8.99632 28.6671H9.66299H10.3297C10.3297 27.9318 9.73425 27.3338 8.99729 27.3334L8.99698 28.0001ZM9.66299 28.6671L8.99632 28.6667L8.99667 28.6664L8.99698 29.3331L8.99729 29.9998C9.7332 29.9994 10.3293 29.4032 10.3297 28.6674L9.66299 28.6671ZM8.99698 29.3331V28.6664H8.32999V29.3331V29.9998H8.99698V29.3331ZM8.32999 29.3331H8.99666V28.0001H8.32999H7.66332V29.3331H8.32999ZM8.32999 28.0001V28.6668H8.99698V28.0001V27.3334H8.32999V28.0001Z",
          fill: "url(#paint2_linear_18_1382)",
          fillOpacity: "0.5",
          mask: "url(#path-8-outside-1_18_1382)"
        })]
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_f_18_1382",
        x: "6.32998",
        y: "5.66665",
        width: "10.3334",
        height: "38.0895",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.00001",
          result: "effect1_foregroundBlur_18_1382"
        })]
      }), jsxs("filter", {
        id: "filter1_i_18_1382",
        x: "3.56005",
        y: "0.760681",
        width: "7.44004",
        height: "6.95931",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "-1.44001",
          dy: "0.720004"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1.08001"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "shape",
          result: "effect1_innerShadow_18_1382"
        })]
      }), jsxs("filter", {
        id: "filter2_d_18_1382",
        x: "5.66333",
        y: "27.3334",
        width: "4.66632",
        height: "7.33302",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "0.66667"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_18_1382"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_18_1382",
          result: "shape"
        })]
      }), jsxs("linearGradient", {
        id: "paint0_linear_18_1382",
        x1: "0",
        y1: "35.6668",
        x2: "16.0001",
        y2: "35.6668",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.1"
        }), jsx("stop", {
          offset: "0.4",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.15"
        })]
      }), jsxs("linearGradient", {
        id: "paint1_linear_18_1382",
        x1: "8.32999",
        y1: "-1.00005",
        x2: "13.1672",
        y2: "33.662",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.2"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.4"
        })]
      }), jsxs("linearGradient", {
        id: "paint2_linear_18_1382",
        x1: "9.66299",
        y1: "30.6666",
        x2: "6.32999",
        y2: "30.6666",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopOpacity: "0.75"
        }), jsx("stop", {
          offset: "1",
          stopOpacity: "0.5"
        })]
      }), jsx("clipPath", {
        id: "clip0_18_1382",
        children: jsx("rect", {
          width: "16",
          height: "34",
          fill: "white"
        })
      })]
    })]
  });
}
var tW = (e => (e[e.TOOLBELT_LARGE = 0] = "TOOLBELT_LARGE", e[e.SECONDARY_TOOLBELT_SMALL = 1] = "SECONDARY_TOOLBELT_SMALL", e))(tW || {});
let tz = {
  0: {
    maskUrl: buildUploadUrl("b64b978fd482ae9b8eaa89c5aa3663ae811ddb52"),
    overlayUrl: buildUploadUrl("a48e5d740881ff10017d9c39b38ab7f8698ee343")
  },
  1: {
    maskUrl: buildUploadUrl("12ac52bdd978b3f8d65fb27c15a6533750cb2ed5"),
    overlayUrl: buildUploadUrl("eb520d0fdf8c56b8db70b8ce7dd6542a5be60c39")
  }
};
function tZ({
  size: e = 0
}) {
  let {
    patternSrc,
    isCustom
  } = function () {
    let e = tS();
    return {
      patternSrc: e && buildUploadUrl(e),
      isCustom: e && !_$$B2.map(e => e.image).includes(e)
    };
  }();
  let r = tN();
  return jsxs("div", {
    className: H()({
      "icons--toolbeltWashiTapeWrapperLarge--SH0ae icons--toolbeltWashiTapeWrapper--Nxa0N": 0 === e,
      "icons--toolbeltWashiTapeWrapperSmall--5evSY icons--toolbeltWashiTapeWrapper--Nxa0N": 1 === e
    }),
    style: {
      filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18))"
    },
    children: [jsx(t$, {
      patternSrc: r ?? patternSrc,
      size: e
    }), 0 === e && jsx("div", {
      style: {
        position: "absolute",
        bottom: "-6px",
        left: "-6px"
      },
      children: jsx(tY, {})
    })]
  });
}
function t$({
  patternSrc: e,
  size: t
}) {
  return jsx("div", {
    className: "icons--toolbeltWashitapePerforatedImgStrip--k0oHM",
    style: {
      maskImage: `url(${tz[t].maskUrl})`,
      backgroundImage: `url(${e})`
    },
    children: jsx("img", {
      src: tz[t].overlayUrl,
      alt: "",
      className: "x10l6tqk x13vifvy xu96u03 xh8yej3 x5yr21d"
    })
  });
}
function tY() {
  return jsxs("svg", {
    width: "32",
    height: "74",
    viewBox: "0 0 32 74",
    fill: "none",
    children: [jsxs("g", {
      filter: "url(#filter0_dd_16_1178)",
      children: [jsx("foreignObject", {
        x: "0",
        y: "-2",
        width: "32",
        height: "76",
        children: jsx("div", {
          style: {
            backdropFilter: "blur(1px)",
            clipPath: "url(#bgblur_1_16_1178_clip_path)",
            height: "100%",
            width: "100%"
          }
        })
      }), jsxs("g", {
        "data-figma-bg-blur-radius": "2",
        children: [jsx("path", {
          d: "M28 65.999C27.9998 67.1034 27.1044 68 26 68H6C4.89543 68 4 67.1046 4 66V37H28V65.999Z",
          fill: "url(#paint0_linear_16_1178)",
          fillOpacity: "0.1"
        }), jsx("path", {
          d: "M28 65.999C27.9998 67.1034 27.1044 68 26 68H6C4.89543 68 4 67.1046 4 66V37H28V65.999Z",
          fill: "white",
          fillOpacity: "0.75"
        })]
      }), jsx("g", {
        filter: "url(#filter1_f_16_1178)",
        children: jsx("path", {
          d: "M27.5 37C27.5 38.1046 26.6046 39 25.5 39H6.5C5.39543 39 4.5 38.1046 4.5 37H4V35C4 33.8954 4.89543 33 6 33V37H26V33C27.1046 33 28 33.8954 28 35V37H27.5Z",
          fill: "white"
        })
      }), jsx("foreignObject", {
        x: "2",
        y: "31",
        width: "28",
        height: "39",
        children: jsx("div", {
          style: {
            backdropFilter: "blur(1px)",
            clipPath: "url(#bgblur_1_16_1178_clip_path)",
            height: "100%",
            width: "100%"
          }
        })
      }), jsx("path", {
        "data-figma-bg-blur-radius": "2",
        d: "M27.4922 34.8467C27.4154 34.0903 26.7767 33.5 26 33.5V37.5H6V33.5C5.17157 33.5 4.5 34.1716 4.5 35V67.5H27.5V35L27.4922 34.8467ZM28 68H4V35C4 33.8954 4.89543 33 6 33H6.5V37H25.5V33H26C27.1046 33 28 33.8954 28 35V68Z",
        fill: "black",
        fillOpacity: "0.3"
      })]
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_dd_16_1178",
        x: "0",
        y: "-2",
        width: "32",
        height: "76",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "1"
        }), jsx("feGaussianBlur", {
          stdDeviation: "1"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_16_1178"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dy: "2"
        }), jsx("feGaussianBlur", {
          stdDeviation: "2"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "effect1_dropShadow_16_1178",
          result: "effect2_dropShadow_16_1178"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect2_dropShadow_16_1178",
          result: "shape"
        })]
      }), jsx("clipPath", {
        id: "bgblur_0_16_1178_clip_path",
        transform: "translate(0 2)",
        children: jsx("path", {
          d: "M28 65.999C27.9998 67.1034 27.1044 68 26 68H6C4.89543 68 4 67.1046 4 66V37H28V65.999Z"
        })
      }), jsxs("filter", {
        id: "filter1_f_16_1178",
        x: "3.5",
        y: "32.5",
        width: "25",
        height: "7",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), jsx("feGaussianBlur", {
          stdDeviation: "0.25",
          result: "effect1_foregroundBlur_16_1178"
        })]
      }), jsx("clipPath", {
        id: "bgblur_1_16_1178_clip_path",
        transform: "translate(-2 -31)",
        children: jsx("path", {
          d: "M27.4922 34.8467C27.4154 34.0903 26.7767 33.5 26 33.5V37.5H6V33.5C5.17157 33.5 4.5 34.1716 4.5 35V67.5H27.5V35L27.4922 34.8467ZM28 68H4V35C4 33.8954 4.89543 33 6 33H6.5V37H25.5V33H26C27.1046 33 28 33.8954 28 35V68Z"
        })
      }), jsxs("linearGradient", {
        id: "paint0_linear_16_1178",
        x1: "4",
        y1: "55.9676",
        x2: "28",
        y2: "55.9676",
        gradientUnits: "userSpaceOnUse",
        children: [jsx("stop", {
          stopColor: "#AAAAAA",
          stopOpacity: "0.5"
        }), jsx("stop", {
          offset: "0.394231",
          stopColor: "#AAAAAA",
          stopOpacity: "0"
        }), jsx("stop", {
          offset: "0.831731",
          stopColor: "#999999"
        })]
      })]
    })]
  });
}
let tq = forwardRef(({
  value: e,
  sizePx: t
}, i) => jsx("div", {
  ref: i,
  className: "image_circle--imageCircleWrapper--uWMXu",
  children: jsx("div", {
    className: "image_circle--imageCircle--VZPxP",
    style: {
      backgroundImage: `url(${e})`,
      backgroundSize: "auto 100%",
      width: t ?? void 0,
      height: t ?? void 0
    }
  })
}));
function tJ() {
  let e = tS();
  let t = JE();
  let i = tw();
  return jsxs(Fragment, {
    children: [_$$B2.map(t => {
      let i = M8(t);
      return jsx(vm, {
        buttonType: Vz.Toggle,
        isActive: e === t.image,
        onClick: () => {
          Iw(i);
        },
        tooltipText: _$$M(t),
        recordingKey: generateRecordingKey(_$$t2, `washiTapePatternSelect.${t.name}`),
        children: jsx(tq, {
          value: i
        })
      }, t.name);
    }), t && jsx(vm, {
      buttonType: Vz.Toggle,
      isActive: i,
      onClick: tI,
      "aria-label": getI18nString("whiteboard.washi_tapes.custom_aria_label"),
      tooltipText: getI18nString("whiteboard.washi_tapes.custom_aria_label"),
      children: i ? jsx(tQ, {}) : jsx(_$$e, {})
    })]
  });
}
function tQ() {
  let e = tN();
  return e ? jsx(tq, {
    value: e
  }) : null;
}
let t0 = "whiteboard_toolbelt--disabled--fxdYS";
let t1 = {
  [DesignGraphElements.VECTOR_PENCIL]: {
    toolId: DesignGraphElements.VECTOR_PENCIL,
    getText: () => getI18nString("fullscreen_actions.set-tool-marker"),
    recordingKey: hj.PENCIL
  },
  [DesignGraphElements.HIGHLIGHTER]: {
    toolId: DesignGraphElements.HIGHLIGHTER,
    getText: () => getI18nString("fullscreen_actions.set-tool-highlighter"),
    recordingKey: hj.HIGHLIGHER
  },
  [DesignGraphElements.WASHI_TAPE]: {
    toolId: DesignGraphElements.WASHI_TAPE,
    getText: () => getI18nString("fullscreen_actions.set-tool-washi-tape"),
    recordingKey: hj.WASHI_TAPE
  },
  [DesignGraphElements.ERASER]: {
    toolId: DesignGraphElements.ERASER,
    getText: () => getI18nString("fullscreen_actions.set-tool-eraser"),
    recordingKey: hj.ERASER
  }
};
function t2({
  disabled: e
}) {
  let t = function () {
    let e = useAtomWithSubscription(_$$B);
    let t = useAtomWithSubscription(BB) && e === ToolType.PENCIL_TOOL;
    return !!useAtomWithSubscription(_$$XS) || t;
  }();
  let i = function () {
    let e = useAtomWithSubscription(_$$XS) ?? void 0;
    let t = usePersistentValue(e);
    return e || t || gf;
  }();
  let a = v0();
  let s = t1[i];
  let {
    handleToolAction
  } = _$$W();
  !function () {
    let e = useAtomWithSubscription(_$$o);
    let t = tS();
    useEffect(() => {
      Qc(_$$B2);
    }, []);
    useEffect(() => {
      let i = _$$B2[0];
      e || t || !i || Iw(M8(i));
    }, [t, e]);
  }();
  let d = tE(i);
  let c = useCallback(() => {
    handleToolAction({
      type: fo.TOGGLE_SUBMENU_AND_TOOL,
      secondaryToolbeltId: _$$w2.DrawingTools,
      toolIdToActivate: i
    });
  }, [i, handleToolAction]);
  return jsx(eM, {
    onClick: c,
    isActive: t,
    secondaryToolbeltId: _$$w2.DrawingTools,
    tooltipText: s.getText(),
    tooltipShortcut: a(i),
    recordingKey: generateRecordingKey(I1, s.recordingKey),
    "data-testid": "toolbelt-drawing-button",
    disabled: e,
    hoverBgDisabled: !0,
    children: jsx("div", {
      className: H()("whiteboard_drawing--drawingToolPositionWrapper--AIl6j", {
        "whiteboard_drawing--drawingToolActive--q82CU": t,
        "whiteboard_drawing--drawingToolDisabled--dxAOq": e,
        [t0]: e
      }),
      children: null !== d ? jsx(_$$R, {
        isThick: "THICK" === d,
        children: jsx(t3, {
          lastActiveDrawingTool: i
        })
      }) : jsx(t3, {
        lastActiveDrawingTool: i
      })
    })
  });
}
function t3({
  lastActiveDrawingTool: e
}) {
  switch (e) {
    case DesignGraphElements.VECTOR_PENCIL:
      return jsx(tV, {});
    case DesignGraphElements.HIGHLIGHTER:
      return jsx(tF, {});
    case DesignGraphElements.ERASER:
      return jsx(tD, {});
    case DesignGraphElements.WASHI_TAPE:
      return jsx(tZ, {
        size: tW.TOOLBELT_LARGE
      });
    default:
      throwTypeError(e);
  }
}
let t5 = [DesignGraphElements.VECTOR_PENCIL, DesignGraphElements.HIGHLIGHTER, DesignGraphElements.WASHI_TAPE, DesignGraphElements.ERASER];
function t6() {
  let {
    activeToolId,
    handleToolAction
  } = _$$W();
  return jsxs(_$$a2, {
    ariaLabel: getI18nString("whiteboard.delightful_toolbar.drawing_tools_label"),
    children: [t5.map(i => jsx(t9, {
      toolId: i,
      isActive: activeToolId === i,
      activateTool: () => {
        handleToolAction({
          type: fo.ACTIVATE_TOOL,
          toolId: i
        });
      },
      customPaddingTop: i === DesignGraphElements.WASHI_TAPE ? 3 : void 0
    }, i)), jsx(_$$X, {
      extended: !0
    }), jsx(tO, {}), jsx(_$$X, {
      extended: !0
    }), jsx(t4, {
      activeTool: activeToolId
    })]
  });
}
function t4({
  activeTool: e
}) {
  switch (e) {
    case DesignGraphElements.VECTOR_PENCIL:
    case DesignGraphElements.HIGHLIGHTER:
    case DesignGraphElements.ERASER:
      return jsx(tA, {});
    case DesignGraphElements.WASHI_TAPE:
      return jsx(tJ, {});
    default:
      return jsx(tA, {});
  }
}
function t9({
  toolId: e,
  isActive: t,
  activateTool: i,
  customPaddingTop: r
}) {
  let a = v0();
  let s = t1[e];
  let o = tE(e);
  return jsx(vm, {
    buttonType: Vz.Toggle,
    onClick: () => {
      i(s.toolId);
    },
    isActive: t,
    tooltipText: s.getText(),
    tooltipShortcut: a(s.toolId),
    recordingKey: generateRecordingKey(_$$t2, s.recordingKey),
    children: jsx("div", {
      className: "drawing_secondary_toolbelt--subMenuDrawingToolIconWrapper--rV31e",
      style: void 0 !== r ? {
        paddingTop: r
      } : void 0,
      children: null !== o ? jsx(_$$R, {
        isThick: "THICK" === o,
        children: jsx(t8, {
          toolId: e
        })
      }) : jsx(t8, {
        toolId: e
      })
    })
  });
}
function t8({
  toolId: e
}) {
  switch (e) {
    case DesignGraphElements.VECTOR_PENCIL:
      return jsx(tG, {});
    case DesignGraphElements.HIGHLIGHTER:
      return jsx(tH, {});
    case DesignGraphElements.WASHI_TAPE:
      return jsx(tZ, {
        size: tW.SECONDARY_TOOLBELT_SMALL
      });
    case DesignGraphElements.ERASER:
      return jsx(tP, {});
    default:
      throwTypeError(e);
  }
}
function t7() {
  return jsx(_$$a2, {
    ariaLabel: getI18nString("whiteboard.delightful_toolbar.sticky_options_label"),
    children: jsx(ie, {})
  });
}
function ie() {
  let [e, t] = useAtomValueAndSetter(qL);
  let i = useCallback(e => {
    e && t(e);
  }, [t]);
  return jsx(ts, {
    toolId: DesignGraphElements.STICKY,
    legend: renderI18nText("whiteboard.delightful_toolbar.sticky.color_selector.legend"),
    color: e,
    onColorChange: i,
    recordingKey: Mg,
    "data-testid": "sticky-tool-color-swatch-picker"
  });
}
function it() {
  let {
    activeSecondaryToolbeltId
  } = LH();
  return jsxs(Fragment, {
    children: [activeSecondaryToolbeltId === _$$w2.DrawingTools && jsx(t6, {}), activeSecondaryToolbeltId === _$$w2.StickyTools && jsx(t7, {}), activeSecondaryToolbeltId === _$$w2.DiagrammingTools && jsx(e2, {})]
  });
}
function io({
  disabled: e
}) {
  let t = v0();
  let i = useSelector(e => e.universalInsertModal.showing);
  let r = _$$r(i);
  return jsx(_$$Q, {
    disabled: e,
    children: jsx("div", {
      "data-element-target": _$$b,
      className: H()("whiteboard_inserts_modal_button--insertsWrapper--GxIPb", {
        "whiteboard_inserts_modal_button--insertsWrapperRotated--ejljC": i
      }),
      children: jsx(_$$y, {
        onClick: r,
        isActive: i,
        tooltipText: getI18nString("fullscreen_actions.browse-all-resources-dlt"),
        tooltipShortcut: t(zK.INSERTS_MENU),
        onboardingKey: yl,
        recordingKey: generateRecordingKey(I1, hj.INSERTS),
        disabled: e
      })
    })
  });
}
function il(e) {
  return jsx("div", {
    className: "hide_bottom_overflow--overflowMask--wPOP2",
    children: jsx("div", {
      className: "hide_bottom_overflow--overflowMaskInner--U2pM4",
      children: e.children
    })
  });
}
function ig({
  shouldOpenWheelOnHover: e,
  isHovered: t
}) {
  let i = e && t;
  useEffect(() => {
    if (!i) return;
    let e = setTimeout(() => _$$X2({
      source: "peeking_vote_wheel_hover",
      openedViaHover: !0,
      offsetFromToolbelt: 40
    }), 100);
    return () => clearTimeout(e);
  }, [i]);
}
let ij = "stamps--remainingVotesIndicatorTextSpan--w-jJN ellipsis--ellipsis--Tjyfa";
let ib = {
  padBottom: 30,
  height: 512
};
let iy = 100 * ib.padBottom / ib.height;
let iv = `calc(${iy}% + -40px)`;
let iC = `translateY(${iv})`;
function iT({
  onClickToOpenWheel: e,
  isStampToolActive: t,
  hasRemainingVotes: i
}) {
  let [a, s] = useState(!1);
  let o = useRef(null);
  let l = _$$iT();
  let d = p3({
    isHidden: l,
    wheelRef: o
  });
  let c = pZ() && i;
  ig({
    shouldOpenWheelOnHover: c,
    isHovered: a
  });
  let u = _$$L2() ? buildUploadUrl("b430a2e7534f9452cfc5067678872f109b7cade4") : buildUploadUrl("c497ee1c6afcaf44b866a46227b40c8ad62dd143");
  useEffect(() => {
    let e = o.current;
    if (!e) return;
    let t = {
      transform: `${iC} scale(1.05)`
    };
    let i = {
      transform: `${iC} scale(1)`
    };
    let n = new Animation(new KeyframeEffect(e, [{
      transform: "translateY(100%) scale(0.1)"
    }, t], {
      duration: 450,
      easing: "ease-out"
    }));
    let r = new Animation(new KeyframeEffect(e, [t, i], {
      duration: 200,
      easing: "ease-in-out"
    }));
    let a = new Animation(new KeyframeEffect(e, [i, i], {
      duration: 400
    }));
    let s = new Animation(new KeyframeEffect(e, [i, {}], {
      duration: 300,
      easing: "cubic-bezier(0.37, 0, 0.48, 1.33)"
    }));
    n.play();
    n.finished.then(() => r.play()).catch(() => {});
    r.finished.then(() => a.play()).catch(() => {});
    a.finished.then(() => s.play()).catch(() => {});
    return () => {
      n.cancel();
      a.cancel();
      s.cancel();
    };
  }, [o]);
  let p = !(t || i);
  return jsx("div", {
    className: "stamps--peekingVotingWheelContainer--hP2CU",
    children: jsx(ButtonPrimitive, {
      ref: o,
      className: H()("stamps--peekingVotingWheel--JsL1l", {
        "stamps--peekingVotingWheelInactive---J5D8": p,
        "stamps--peekingVotingWheelHidden--UPEU5": l,
        "stamps--peekingVotingWheelShowHide--trcMp": d,
        "stamps--peekingVotingWheelDoneVoting--sJEXl": !i
      }),
      "aria-label": getI18nString("voting.voting_wheel"),
      htmlAttributes: {
        onMouseEnter: () => pZ() && s(!0),
        onMouseLeave: () => pZ() && s(!1)
      },
      onClick: () => !c && e(),
      style: {
        backgroundImage: `url(${u})`,
        backgroundColor: "transparent"
      },
      children: jsx(Fragment, {})
    })
  });
}
function iw({
  onClickToOpenWheel: e,
  leaveVotingSessionAndCloseWheel: t,
  numVotesRemaining: i,
  hasRemainingVotes: a
}) {
  let [s, o] = useState(!1);
  let l = a && !BrowserInfo.isIpad;
  ig({
    shouldOpenWheelOnHover: l,
    isHovered: s
  });
  return jsx("div", {
    className: "stamps--remainingVotesIndicatorContainer--0hRva",
    children: jsx(ButtonPrimitive, {
      className: H()("stamps--remainingVotesIndicator--8Rl3H text--fontPos12--YsUAh text--_fontBase--QdLsd", a ? "stamps--remainingVotesIndicatorInProgress--6-a5V" : "stamps--remainingVotesIndicatorDone--Qas38"),
      htmlAttributes: {
        onMouseEnter: () => pZ() && o(!0),
        onMouseLeave: () => pZ() && o(!1)
      },
      "aria-label": getI18nString("voting.remaining_votes"),
      onClick: () => {
        l || (a ? e() : t());
      },
      children: a ? jsx("span", {
        className: ij,
        children: renderI18nText("voting.delightful_toolbar.votes_remaining", {
          numVotes: i
        })
      }) : jsxs(Fragment, {
        children: [jsx(_$$g3, {
          className: "stamps--checkIcon--XCqm2"
        }), jsx("span", {
          className: ij,
          children: renderI18nText("voting.delightful_toolbar.no_votes_remaining")
        })]
      })
    })
  });
}
function iL({
  disabled: e
}) {
  let t = _$$W();
  let {
    activeToolId
  } = t;
  let a = lO(activeToolId);
  let s = activeToolId === DesignGraphElements.STAMP;
  let l = _$$iT();
  let d = function (e) {
    let t = XM();
    let i = useAtomWithSubscription(nf);
    let n = ej();
    let r = _$$L(e);
    return t && !(i || n || r);
  }(activeToolId);
  let {
    numVotesRemaining,
    hasRemainingVotes,
    leaveVotingSessionAndCloseWheel
  } = function () {
    let e = useDispatch();
    let t = XM();
    let i = hr();
    return {
      numVotesRemaining: i,
      hasRemainingVotes: i > 0,
      leaveVotingSessionAndCloseWheel: useCallback(() => {
        t && e(H1({
          votingStage: SessionStatus.NOT_JOINED
        }));
        e(stopChattingThunk());
      }, [e, t])
    };
  }();
  let {
    handleStampToolClick
  } = function (e) {
    let t = LR();
    return {
      handleStampToolClick: useCallback(() => {
        t(!1);
        e ? CB.closeWheel() : _$$X2({
          source: fK,
          offsetFromToolbelt: 40
        });
      }, [e, t])
    };
  }(l);
  let m = s || l;
  return jsxs("div", {
    "data-element-target": NZ,
    className: UJ,
    children: [jsx(_$$iy, {
      staticToolConfig: Yk.STAMP,
      toolbarState: t,
      forceToRenderActive: a,
      disabled: e
    }), d && jsxs(Fragment, {
      children: [jsx(iw, {
        leaveVotingSessionAndCloseWheel,
        onClickToOpenWheel: handleStampToolClick,
        numVotesRemaining,
        hasRemainingVotes
      }), jsx(iT, {
        onClickToOpenWheel: handleStampToolClick,
        isStampToolActive: m,
        hasRemainingVotes
      })]
    })]
  });
}
function iO({
  toolbarState: e,
  disabled: t
}) {
  let i = !isAIFeaturesEnabledForCurrentUser();
  let r = _$$I();
  return jsx(_$$iy, {
    staticToolConfig: Yk.ACTIONS,
    toolbarState: e,
    extendedData: {
      hasAIPermission: i
    },
    forceToRenderActive: r,
    disabled: t
  });
}
function ik({
  toolbarState: e,
  isToolbeltDisabled: t,
  isCommentsDisabled: i
}) {
  let a = XM();
  let {
    numVisibleTools
  } = useAtomWithSubscription(Kj);
  let d = _$$$R(numVisibleTools);
  let c = Xr(n6);
  useEffect(() => {
    c(void 0 !== d.find(e => e.toolId === _$$y2));
  }, [c, d]);
  a && void 0 === d.find(({
    toolId: e
  }) => e !== DesignGraphElements.STAMP) && d.push(Yk.STAMP);
  let u = [];
  for (let r of d) switch (r.toolId) {
    case DesignGraphElements.STAMP:
      u.push(jsx(iL, {
        disabled: t
      }, r.toolId));
      break;
    case DesignGraphElements.COMMENTS:
      u.push(jsx(eG, {
        toolbarState: e,
        disabled: i
      }, r.toolId));
      break;
    case _$$y2:
      getFeatureFlags().figjam_quick_actions_v2 && u.push(jsx(iO, {
        toolbarState: e,
        disabled: t
      }, r.toolId));
      break;
    default:
      u.push(jsx(_$$iy, {
        staticToolConfig: r,
        toolbarState: e,
        disabled: t
      }, r.toolId));
  }
  return u.length > 0 ? jsx(Fragment, {
    children: u
  }) : null;
}
function iD({
  toolbarIconScale: e,
  disabled: t
}) {
  let i = useAtomWithSubscription(nU);
  let [s, l] = useState(!1);
  let [d, c] = useState(!1);
  let [u, p] = useState(_$$k2.DEFAULT);
  let h = 240 / (rX * e);
  let m = function () {
    let e = useAtomWithSubscription(qL);
    let t = zS(e, "sticky");
    let i = colorCSSManipulatorInstance.format(e);
    return t ? MV(t, i) : "rgba(230, 230, 230, 1)";
  }();
  let f = useAtomWithSubscription(Q);
  let _ = function () {
    let {
      activeSecondaryToolbeltId
    } = LH();
    return null !== activeSecondaryToolbeltId;
  }();
  let {
    isHovered,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = ee(noop, _);
  let C = useCallback((e, t) => {
    permissionScopeHandler.user("drop-sticky-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(DesignGraphElements.STICKY, Math.round(e.x - 55), Math.round(e.y - 55), Math.round(t.x), Math.round(t.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
    l(!1);
    c(!1);
    p(_$$k2.DEFAULT);
  }, []);
  let T = useCallback(() => {
    l(!0);
    u === _$$k2.DEFAULT && p(_$$k2.INITIAL_DRAG_ON_DLT);
  }, [u, p, l]);
  useEffect(() => {
    if ("sticky" === f.draggedTool) {
      let e = !f.draggedToolCanCancel;
      u === _$$k2.INITIAL_DRAG_ON_DLT ? e && p(_$$k2.DRAG_ON_CANVAS) : u === _$$k2.DRAG_ON_CANVAS ? e || p(_$$k2.DRAG_RETURN_TO_DLT) : u === _$$k2.DRAG_RETURN_TO_DLT && e && p(_$$k2.DRAG_ON_CANVAS);
    } else f.draggedTool || p(_$$k2.DEFAULT);
  }, [f, s, p, u]);
  return jsx("div", {
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    children: jsxs("div", {
      className: H()(z6, ac),
      children: [jsx(ef, {
        Icon: _$$UJ,
        canvasToSvgScale: h,
        color: m,
        disabled: t,
        hoverOffsetAmount: "STICKY_UI3_PILE",
        isActive: i,
        isDragReversing: d,
        isHovered,
        onDragEnd: C,
        onDragStart: T,
        onTap: noop,
        stickyAnimationState: u,
        toolType: "sticky",
        toolbarIconScale: e
      }), jsx(_$$UJ, {
        toolOrder: 2,
        color: m,
        toolbarIconScale: e,
        shouldAnimate: s,
        isReversing: d,
        stickyAnimationState: u
      }), jsx(_$$UJ, {
        toolOrder: 3,
        color: m,
        toolbarIconScale: e,
        shouldAnimate: s,
        isReversing: d,
        stickyAnimationState: u
      }), jsx(_$$UJ, {
        toolOrder: 4,
        color: m,
        toolbarIconScale: e,
        shouldAnimate: s,
        isReversing: d,
        stickyAnimationState: u
      })]
    })
  });
}
function iP({
  disabled: e
}) {
  let {
    activeToolId,
    handleToolAction
  } = _$$W();
  let a = useCallback(() => {
    handleToolAction({
      type: fo.TOGGLE_SUBMENU_AND_TOOL,
      toolIdToActivate: DesignGraphElements.STICKY,
      secondaryToolbeltId: _$$w2.StickyTools
    });
  }, [handleToolAction]);
  let s = Yk.STICKY;
  let o = v0();
  return jsx(eM, {
    "data-testid": "toolbelt-sticky-button",
    disabled: e,
    hoverBgDisabled: !0,
    isActive: activeToolId === DesignGraphElements.STICKY,
    onClick: a,
    onboardingKey: s.onboardingKey,
    recordingKey: generateRecordingKey(I1, s.recordingKey),
    secondaryToolbeltId: _$$w2.StickyTools,
    tooltipShortcut: o(s.toolId),
    tooltipText: s.getText(),
    children: jsx("div", {
      className: "sticky--stickyButtonInner--JfK46",
      children: jsx("div", {
        className: H()("sticky--stickyPileWrapper---hHW-", {
          [t0]: e
        }),
        children: jsx(iD, {
          toolbarIconScale: .5,
          disabled: e
        })
      })
    })
  });
}
export function $$iU0() {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "WhiteboardToolbelt",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(iF, {
      children: jsx(iH, {
        children: jsx(iB, {})
      })
    })
  });
}
function iF({
  children: e
}) {
  let t = function () {
    let e = useRef(null);
    let t = wY(e);
    let i = t?.width ?? Hu().thresholdWidth + 260;
    let n = Xr(Kj);
    let a = XM();
    useEffect(() => {
      n(Iq(a).find(e => i >= e.thresholdWidth + 260) ?? Hu());
    }, [i, a, n]);
    return e;
  }();
  !function (e, t) {
    let i = _$$C();
    let n = i?.setWhiteboardToolbeltContainerNode || noop;
    let s = i?.setWhiteboardToolbeltNode || noop;
    useEffect(() => {
      e && n(e.current);
      t && s(t.current);
    }, [e, n, t, s]);
  }(t, useAtomWithSubscription(_$$f));
  let i = xn();
  let s = useAtomWithSubscription(consentCounterAtom);
  let d = useMemo(() => ({
    marginBottom: i + s
  }), [i, s]);
  return jsx("div", {
    id: HY,
    ref: t,
    "data-onboarding-key": HY,
    "data-element-target": HY,
    className: "whiteboard_toolbelt--root---s6Vo",
    style: d,
    children: e
  });
}
function iH({
  children: e
}) {
  return useIsProgressBarHiddenOrLocked() ? null : jsx(TrackingProvider, {
    name: RZ,
    children: jsx(_$$x, {
      children: jsx(_$$m, {
        role: "region",
        "aria-label": getI18nString("fullscreen_actions.toolbar_label"),
        children: e
      })
    })
  });
}
function iB() {
  let e = _$$W();
  let {
    editModeType
  } = e;
  let i = _$$z(editModeType);
  let a = useAtomWithSubscription(hV);
  let {
    activeBannerType
  } = Dm();
  qv();
  !function () {
    let {
      activeToolId
    } = _$$W();
    let {
      setActiveSecondaryToolbeltId
    } = LH();
    let i = Xc();
    let n = AE();
    useEffect(() => {
      if (i) {
        setActiveSecondaryToolbeltId(null);
        return;
      }
      setActiveSecondaryToolbeltId(t => activeToolId === $o && t === _$$w2.DiagrammingTools ? _$$w2.DiagrammingTools : _$$L(activeToolId) ? _$$w2.DrawingTools : activeToolId === DesignGraphElements.STICKY ? _$$w2.StickyTools : eg(activeToolId) && !n ? _$$w2.DiagrammingTools : null);
    }, [activeToolId, setActiveSecondaryToolbeltId, i, n]);
  }();
  !function () {
    let {
      activeToolId
    } = _$$W();
    let {
      activeSecondaryToolbeltId,
      setActiveSecondaryToolbeltId
    } = LH();
    let n = useAtomWithSubscription(_$$f);
    useEffect(() => {
      let t = t => {
        !_$$L(activeToolId) && !eg(activeToolId) && n?.current && t.target instanceof Element && !n.current.contains(t.target) && setActiveSecondaryToolbeltId(null);
      };
      document.addEventListener("pointerdown", t);
      return () => {
        document.removeEventListener("pointerdown", t);
      };
    }, [activeToolId, activeSecondaryToolbeltId, setActiveSecondaryToolbeltId, n]);
  }();
  !function (e) {
    let {
      setActiveSecondaryToolbeltId
    } = LH();
    useEffect(() => {
      let i = i => {
        "Escape" === i.key && e !== LayoutTabType.TEXT && setActiveSecondaryToolbeltId(null);
      };
      document.addEventListener("keydown", i);
      return () => {
        document.removeEventListener("keydown", i);
      };
    }, [setActiveSecondaryToolbeltId, e]);
  }(editModeType);
  _$$m2(hV);
  !function () {
    let {
      activeSecondaryToolbeltId
    } = LH();
    let t = _$$g2(_$$Y.FigjamDLTSubmenuOpen);
    useEffect(() => {
      activeSecondaryToolbeltId && t();
    }, [activeSecondaryToolbeltId, t]);
  }();
  return jsxs(XS, {
    "data-testid": SH,
    children: [jsx(Iy, {
      children: jsx(il, {
        children: jsxs(kF, {
          children: [!getFeatureFlags().figjam_ui3_toolbelt_move_tool_group || i ? jsxs(Fragment, {
            children: [jsx(_$$iy, {
              staticToolConfig: Yk.SELECT,
              toolbarState: e
            }), jsx(_$$iy, {
              staticToolConfig: Yk.HAND,
              toolbarState: e
            })]
          }) : jsx(_$$Z, {
            staticToolGroupConfig: AO.MOVE,
            toolbarState: e
          }), a ? jsx(iG, {}) : jsx(iV, {})]
        })
      })
    }), jsx(it, {}), jsx(_$$_, {
      activeBannerType
    })]
  });
}
function iV() {
  let {
    isToolbeltDisabled,
    isCommentsDisabled
  } = iK();
  let i = _$$W();
  return jsxs(Fragment, {
    children: [jsx(_$$X, {
      extended: !0
    }), jsx(t2, {
      disabled: isToolbeltDisabled
    }), jsx(iP, {
      disabled: isToolbeltDisabled
    }), jsx(eP, {
      disabled: isToolbeltDisabled
    }), jsx(_$$X, {
      extended: !0
    }), jsx(ik, {
      toolbarState: i,
      isToolbeltDisabled,
      isCommentsDisabled
    }), jsx(io, {
      disabled: isToolbeltDisabled
    })]
  });
}
function iG() {
  let e = _$$W();
  let {
    isCommentsDisabled
  } = iK();
  return jsxs(Fragment, {
    children: [jsx(eG, {
      toolbarState: e,
      disabled: isCommentsDisabled
    }, Yk.COMMENTS.toolId), jsx(_$$F, {})]
  });
}
function iK() {
  let e = _$$w();
  let t = _$$g();
  let i = _$$z2();
  return {
    isToolbeltDisabled: t || e || i,
    isCommentsDisabled: !(e || i) && t
  };
}
export const WhiteboardUI3ToolbeltWithErrorBoundary = $$iU0;