import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useCallback, useState, useEffect, useContext, useRef } from "react";
import { Fullscreen, ToolType, AlignmentPosition, ConfirmationLevel, Command, DesignGraphElements, BorderStyle } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import l from "classnames";
import { ez, SK, U9, wp } from "../905/125333";
import { F as _$$F } from "../905/989956";
import { e as _$$e } from "../905/621515";
import { Fy } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { LR } from "../figma_app/120210";
import { aV } from "../figma_app/722362";
import { N as _$$N } from "../figma_app/268271";
import { KindEnum } from "../905/129884";
import { Wd_ } from "../figma_app/6204";
import { oh, Yg } from "../905/526509";
import { hx } from "../figma_app/630194";
import { nS } from "../figma_app/274383";
import { $y } from "../figma_app/544744";
import { W as _$$W } from "../905/866915";
import { createPortal } from "react-dom";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { sD, W2 } from "../2b17fec9/873436";
import { A as _$$A } from "../svg/741686";
import { A as _$$A2 } from "../svg/776856";
import { A as _$$A3 } from "../svg/488178";
import { s as _$$s } from "../figma_app/30255";
import { useDispatch } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { getFeatureFlags } from "../905/601108";
import { d as _$$d } from "../vendor/456530";
import { P as _$$P } from "../vendor/348225";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { s as _$$s2 } from "../cssbuilder/589278";
import { jD } from "../905/765855";
import { getViewportZoom } from "../figma_app/62612";
import { $J } from "../figma_app/634656";
import { s as _$$s3 } from "../figma_app/666387";
import { br, XI, Qw, XN, ti } from "../figma_app/937735";
import { B as _$$B2, y as _$$y } from "../figma_app/397954";
import { OD, AT, R0, Yt, s3, Uo, bu, sT } from "../figma_app/955650";
import { ZE } from "../figma_app/932285";
import { K0, W1 } from "../figma_app/439493";
import { tl } from "../figma_app/351862";
import { C as _$$C } from "../9410/365876";
import { fK, Nr, V4, BC } from "../figma_app/300024";
import { zG, C2, P as _$$P2 } from "../figma_app/47958";
import { Jc, Qd, S8, lx, Lz } from "../figma_app/27927";
import { Su, ke, eg as _$$eg } from "../2b17fec9/592383";
import { z6, ac, xt } from "../figma_app/731560";
import { A as _$$A4 } from "../svg/702627";
import { A as _$$A5 } from "../svg/527157";
import { A as _$$A6 } from "../svg/178500";
import { I as _$$I, J as _$$J } from "../figma_app/552397";
import { AE, ar } from "../9410/757252";
import { XD, Mm, vO } from "../figma_app/827329";
import { YCy, zuZ } from "../figma_app/27776";
var d = l;
let L = "advanced_diagramming_onboarding--flyout--F8slx";
function k({
  position: e,
  isHovered: t,
  hasProgressedToShapesSidebar: i,
  onboardingDelayHasCompleted: r,
  complete: a
}) {
  return e ? i ? jsx(sD, {
    complete: a
  }) : createPortal(jsxs("div", {
    className: d()({
      "advanced_diagramming_onboarding--onboardingContainer--V1w0u": !0,
      "advanced_diagramming_onboarding--onboardingHovered--JCcLA": t
    }),
    style: {
      top: e.top,
      left: e.left,
      height: e.height,
      width: e.width
    },
    children: [jsx(M, {}), jsx(R, {
      text: getI18nString("whiteboard.ad_onboarding.onboarding_entry_pill_content"),
      isShowing: r
    })]
  }), document.getElementById("fullscreen-root")) : null;
}
function R({
  text: e,
  isShowing: t
}) {
  return jsx("div", {
    className: d()({
      "advanced_diagramming_onboarding--labelContainer--MO7wT": !0,
      "advanced_diagramming_onboarding--labelContainerShowing--LmY-g": t
    }),
    children: jsx("span", {
      className: "advanced_diagramming_onboarding--label--4Ti9J text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: e
    })
  });
}
function M() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: d()("advanced_diagramming_onboarding--flyoutLeft--d-idk", L),
      children: jsx(SvgComponent, {
        svg: _$$A3,
        style: {
          fill: "#FFFFFF",
          stroke: "#B6B6B6"
        }
      })
    }), jsx("div", {
      className: d()("advanced_diagramming_onboarding--flyoutRight--RmOg2", L),
      children: jsx(SvgComponent, {
        svg: _$$A,
        style: {
          fill: "#FFFFFF",
          stroke: "#B6B6B6"
        }
      })
    }), jsx("div", {
      className: d()("advanced_diagramming_onboarding--flyoutCenter--xXW1g", L),
      children: jsx(SvgComponent, {
        svg: _$$A2,
        style: {
          fill: "#FFFFFF",
          stroke: "#B6B6B6"
        }
      })
    })]
  });
}
let es = "dlt_shape_submenu--isSelected--isSGg";
let ec = memo(function ({
  recordingKey: e
}) {
  let t = OD();
  let i = AT();
  let s = R0();
  let l = useAtomWithSubscription(ez);
  let [d, p] = useAtomValueAndSetter(SK);
  let h = useAtomWithSubscription(U9);
  let m = useAtomWithSubscription(oh);
  let f = "open" === m.state && "shape" === m.tool;
  let _ = useCallback(e => {
    let t = Jc.get(e);
    if (!t) return;
    let {
      actionEnum
    } = Qd().get(t);
    Fullscreen?.triggerActionEnumInUserEditScope(actionEnum, {
      source: fK
    });
  }, []);
  let x = Su(fK);
  let g = useCallback(e => {
    ("CURVED" !== e || getFeatureFlags().ad_curved_connectors) && (p({
      ...d,
      connectorToolLineStyle: e
    }), Fullscreen?.triggerActionEnumInUserEditScope(tl(e), {
      source: fK
    }));
  }, [p, d]);
  let j = _$$F.format(l);
  let [y, v] = useState(!1);
  let {
    openColorPalettePicker,
    closeColorPalettePicker
  } = $J(v);
  let [E, S] = useState(!1);
  !function ({
    isShapeMenuColorPickerOpen: e
  }) {
    let t = function (e) {
      let t = useAtomWithSubscription(_$$B2);
      let i = Yt();
      let n = s3() && t === ToolType.SHAPE_TOOL;
      return null !== i || n || e;
    }(e);
    let [i, n] = useAtomValueAndSetter(_$$B2);
    let s = ToolType.SHAPE_TOOL;
    useEffect(() => {
      t && i !== s ? n(s) : t || i !== s || n(_$$y);
    }, [t, s, i, n]);
    useEffect(() => () => {
      i === s && n(_$$y);
    }, [i, n, s]);
  }({
    isShapeMenuColorPickerOpen: E
  });
  let L = _$$C();
  return jsxs(Fragment, {
    children: [jsxs(br, {
      paddingLeft: 4,
      paddingRight: 5,
      shouldVerticallyCenter: !0,
      children: [jsx(K0, {
        svg: _$$A5,
        tooltip: getI18nString("whiteboard.shapes_sidebar.bent_connector"),
        onClick: () => g("ELBOWED"),
        active: t ? "LOUD" : "NONE",
        isNewSubmenu: !0,
        buttonStyle: {
          borderRadius: "12px 4px 4px 4px"
        },
        recordingKey: generateRecordingKey(e, "ELBOWED")
      }, "ELBOWED"), getFeatureFlags().ad_curved_connectors && jsx(K0, {
        svg: _$$A4,
        tooltip: getI18nString("whiteboard.shapes_sidebar.curved_connector"),
        onClick: () => g("CURVED"),
        active: s ? "LOUD" : "NONE",
        isNewSubmenu: !0,
        buttonStyle: {
          borderRadius: "4px",
          marginRight: "2px"
        },
        recordingKey: generateRecordingKey(e, "CURVED")
      }, "CURVED"), jsx(K0, {
        svg: _$$A6,
        tooltip: getI18nString("whiteboard.delightful_toolbar.connector"),
        onClick: () => g("STRAIGHT"),
        active: i ? "LOUD" : "NONE",
        isNewSubmenu: !0,
        buttonStyle: {
          borderRadius: "4px",
          marginRight: "2px"
        },
        recordingKey: generateRecordingKey(e, "STRAIGHT")
      }, "STRAIGHT"), jsx(ZE, {
        ariaLabel: getI18nString("whiteboard.inline_menu.color_list_box"),
        buttonBackground: "light",
        buttonCaretType: "up",
        buttonClassName: "dlt_shape_submenu--shapeColorSelectorButton--YekZF",
        buttonSize: "medium",
        isColorPopoverOpen: E,
        onColorChange: x,
        optionSize: "medium",
        palettePickerPopoverWrapper: function ({
          children: t
        }) {
          return jsxs(W1, {
            children: [jsx("div", {
              className: "dlt_shape_submenu--flexColumn--hCUzZ",
              children: t
            }), jsx(_$$s3, {
              colorPalettePickerState: {
                openColorPalettePicker,
                closeColorPalettePicker,
                isColorPalettePickerOpen: y
              },
              paletteType: "base",
              recordingKey: generateRecordingKey(e || "color-palettes", "shape") || "shape",
              isInDltSubmenu: !1
            })]
          });
        },
        paletteType: "base",
        recordingKey: generateRecordingKey(e, `shape-color-${j}`),
        setIsColorPopoverOpen: S,
        shouldDisableDataTooltip: !f,
        value: l
      })]
    }), jsx(XI, {}), jsx(br, {
      paddingLeft: 8,
      paddingRight: 4,
      shouldVerticallyCenter: !0,
      children: jsx(eu, {
        shapeColor: l,
        strokeStyleType: h,
        onChange: _,
        recordingKey: e
      })
    }), (() => {
      let t = "MINDMAP_TREE_NUCLEUS";
      return jsx(br, {
        paddingLeft: 4,
        paddingRight: 4,
        shouldVerticallyCenter: !0,
        children: jsx(ep, {
          shapeType: t,
          color: l,
          strokeStyleType: h,
          onChange: _,
          recordingKey: generateRecordingKey(e, t),
          isTopRight: !1
        }, t)
      });
    })(), jsx(XI, {}), jsx(br, {
      paddingLeft: 8,
      paddingRight: 4,
      shouldVerticallyCenter: !0,
      children: jsx(ButtonPrimitive, {
        onClick: () => L(),
        className: _$$s2.flex.b0.noWrap.gap0.flexRow.hFull.px8.itemsCenter.$,
        recordingKey: generateRecordingKey(e, "MORESHAPES"),
        htmlAttributes: {
          "data-onboarding-key": W2
        },
        children: jsx("span", {
          className: _$$s2.colorText.textBodyMedium.$,
          children: getI18nString("whiteboard.shapes.more_shapes")
        })
      })
    })]
  });
});
function eu({
  shapeColor: e,
  strokeStyleType: t,
  onChange: i,
  recordingKey: r
}) {
  return jsx("div", {
    className: "dlt_shape_submenu--shapesGrid--iweeQ",
    style: {
      "--columns": ke.length
    },
    role: "listbox",
    "data-fullscreen-intercept": !0,
    children: ke.map(a => jsx(ep, {
      shapeType: a,
      color: e,
      strokeStyleType: t,
      onChange: i,
      recordingKey: generateRecordingKey(r, a),
      isTopRight: !1
    }, `BASIC-${a}`))
  });
}
function ep({
  shapeType: e,
  color: t,
  strokeStyleType: i,
  onChange: o,
  recordingKey: l,
  isTopRight: c,
  onboardingKey: p
}) {
  let h = useDispatch();
  let {
    onDragStart,
    onDrag,
    onDragEnd
  } = function () {
    let e = useContext(S8);
    return {
      onDragStart: e.onDragStart,
      onDrag: e.onDrag,
      onDragEnd: e.onDragEnd
    };
  }();
  let x = function (e) {
    let t = useContext(S8);
    return e ? t.draggedShape === e : null != t.draggedShape;
  }(e);
  let j = useContext(S8).shouldDragCancel;
  let b = useRef(null);
  let [y, v] = useState(0);
  let C = _$$d(.5);
  let T = _$$d(.5);
  let E = getViewportZoom({
    subscribeToUpdates_expensive: x
  });
  let w = Yt();
  let I = (w ? lx.get(w) : null) === e;
  let L = useHandleMouseEvent(l, "click", () => {
    o(e);
  });
  let N = Jc.get(e);
  if (!N) return null;
  let A = Qd().get(N);
  if (!A) return null;
  let O = E * (A.canvasToSvgScale || 1) / .2;
  let k = "MINDMAP_TREE_NUCLEUS" === e;
  return jsx("div", {
    className: d()({
      "dlt_shape_submenu--shape--0vtJo": !0,
      [es]: I && !x,
      "dlt_shape_submenu--isTopRight--gZHau": c,
      "dlt_shape_submenu--mindmapIcon--C4vqQ": k
    }),
    children: jsx(_$$P.div, {
      animate: x ? j ? "whileDragCancel" : "whileDrag" : "initial",
      "aria-hidden": "true",
      className: d()({
        [z6]: !0,
        [ac]: !0,
        "dlt_shape_submenu--shapeDraggable--t9G0E": !0,
        "dlt_shape_submenu--isDragging--TttjP": x
      }),
      "data-onboarding-key": p,
      "data-tooltip": x ? void 0 : A.action,
      "data-tooltip-offset-y": -10,
      "data-tooltip-show-above": !0,
      "data-tooltip-type": KindEnum.LOOKUP,
      drag: !k,
      dragConstraints: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      },
      dragElastic: 1,
      onDrag: (e, t) => {
        onDrag(t.point);
      },
      onDragEnd: (t, i) => {
        if (C.set(.5), T.set(.5), !j) {
          let i = b.current;
          if (i) {
            let n = zG(i.getBoundingClientRect());
            let r = C2(t);
            permissionScopeHandler.user("drop-shape-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(Jc.get(e), Math.round(n.x), Math.round(n.y), Math.round(r.x), Math.round(r.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
          }
        }
        v(e => e + 1);
        onDragEnd();
      },
      onDragStart: (t, i) => {
        let n = b.current;
        if (n) {
          let e = n.getBoundingClientRect();
          C.set((i.point.x - e.x) / e.width);
          T.set((i.point.y - e.y) / e.height);
        }
        onDragStart(e);
        h(jD());
      },
      onPointerDown: L,
      style: {
        originX: C,
        originY: T
      },
      variants: {
        initial: {
          scale: 1
        },
        whileDrag: {
          scale: O
        },
        whileDragCancel: {
          scale: .93
        }
      },
      children: x && !j ? !k && jsx(A.Icon, {
        color: _$$F.format(t),
        toolbarIconScale: .2,
        isBeingDraggedForPlacement: x,
        shapeStrokeProps: {
          isDragging: x,
          styleType: i,
          svgToCanvasScale: A.canvasToSvgScale ? 1 / A.canvasToSvgScale : 1
        },
        ref: b
      }) : jsx(SvgComponent, {
        svg: _$$eg(e),
        className: d()({
          "dlt_shape_submenu--shapeIcon--o4oZr": !0,
          [es]: I
        })
      })
    }, y)
  });
}
let ex = "dlt_shape_collage--ignorePointerEvents--dih4g";
let eg = ["ELLIPSE", "SQUARE", "TRIANGLE_UP"];
let $$ej0 = "seen_figjam_advanced_diagraming_v1_onboarding";
let eb = r1($$ej0);
let ey = YCy;
let ev = zuZ;
let eC = [{
  zIndex: 1,
  width: 36,
  height: 36,
  translateStart: {
    x: 9,
    y: 14
  },
  translateEnd: {
    x: 7,
    y: -6
  },
  scale: 36 / 128
}, {
  zIndex: 2,
  width: 32,
  height: 32,
  translateStart: {
    x: 49,
    y: 16
  },
  translateEnd: {
    x: 51,
    y: -4
  },
  scale: 32 / 112
}, {
  zIndex: 3,
  width: 40,
  height: 34,
  translateStart: {
    x: 6,
    y: 57
  },
  translateEnd: {
    x: 4,
    y: 37
  },
  scale: 40 / 120
}];
let eT = {
  width: 30,
  height: 34,
  translateStart: {
    x: 52,
    y: 54
  },
  translateEnd: {
    x: 54,
    y: 34
  },
  scale: 1
};
let eE = {
  ELBOWED: {
    action: Command.SET_TOOL_CONNECTOR_ELBOWED,
    tool: DesignGraphElements.CONNECTOR_ELBOWED,
    Icon: XD
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
let eS = memo(function ({
  shapeType: e,
  index: t,
  toolbarIconScale: i,
  isInteractive: l
}) {
  let {
    state
  } = useContext(nS);
  let h = Jc.get(e);
  let m = h === Yt();
  let _ = _$$C();
  let x = AE();
  let j = useAtomWithSubscription(ez);
  let C = _$$F.format(j);
  let T = useAtomWithSubscription(U9);
  let E = Qd().get(h);
  let [S, w] = useAtomValueAndSetter(oh);
  let I = "open" === S.state && "shape" === S.tool;
  let L = LR();
  let N = useCallback(() => {
    if (L(!1), I) {
      w({
        type: "close",
        source: Yg.ToolSelected
      });
      Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_DEFAULT, null);
      return;
    }
    x ? _({
      setToolToDefault: !1
    }) : w({
      type: "open",
      tool: "shape"
    });
    Fullscreen?.triggerActionEnumInUserEditScope(E.actionEnum, {
      source: fK
    });
  }, [L, I, x, _, w, E.actionEnum]);
  let A = state.draggedTool === `shape-tool-${t}`;
  let O = useCallback((e, t) => {
    permissionScopeHandler.user("drop-shape-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(h, Math.round(e.x), Math.round(e.y), Math.round(t.x), Math.round(t.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
  }, [h]);
  let k = (E.canvasToSvgScale || 1) / i;
  return l ? jsx(_$$I, {
    className: d()({
      [z6]: !0,
      [ac]: !0,
      [ex]: A
    }),
    "data-tooltip": A ? void 0 : E.action,
    "data-tooltip-offset-y": 0,
    "data-tooltip-type": KindEnum.LOOKUP,
    hasOpenSubmenu: I,
    inTabOrder: !1,
    isSelected: m,
    onClick: N,
    recordingKey: hx(`shape-tool-${t}`),
    toolType: `shape-tool-${t}`,
    children: jsx(_$$s, {
      Icon: E.Icon,
      canvasToSvgScale: k,
      color: C,
      hoverOffsetAmount: "NONE",
      isHovered: !1,
      isSelected: m,
      onDragEnd: O,
      onTap: N,
      shapeStrokeStyleType: T,
      toolType: `shape-tool-${t}`,
      toolbarIconScale: i
    })
  }) : jsx(E.Icon, {
    color: C,
    toolbarIconScale: i,
    shapeStrokeProps: {
      isDragging: A,
      styleType: void 0 !== T ? T : BorderStyle.NONE,
      svgToCanvasScale: k && i ? 1 / (k * i) : 1
    }
  });
});
function ew({
  zIndex: e,
  width: t,
  height: i,
  transformStart: a,
  transformEnd: s,
  shouldFanOut: o,
  children: l,
  hasShadow: c,
  isInteractive: u
}) {
  let [p, h] = useState(!1);
  useEffect(() => {
    h(!0);
    let e = setTimeout(() => {
      h(!1);
    }, 150);
    return () => {
      clearTimeout(e);
    };
  }, [o]);
  return jsx("div", {
    className: d()("dlt_shape_collage--collageIconContainer--80E2y", {
      [ex]: p,
      [ac]: c
    }),
    style: {
      zIndex: e,
      width: t,
      height: i,
      transform: o ? s : a
    },
    children: jsx("div", {
      className: d()({
        "dlt_shape_collage--collageScaleContainer--ZatXz": u
      }),
      children: l
    })
  });
}
function eI(e) {
  return `translate(${e.x}px, ${e.y}px)`;
}
let eL = memo(function ({
  shouldFanOut: e,
  toolbarIconScale: t,
  showAdvancedDiagrammingOnboarding: i
}) {
  let {
    state
  } = useContext(nS);
  return jsxs("div", {
    className: d()({
      [z6]: !0,
      "dlt_shape_collage--collageButton--Z28yX": !0,
      "dlt_shape_collage--advancedDiagrammingOnboarding--Tle7Q": i
    }),
    style: {
      width: 100 * t
    },
    children: [jsx(ew, {
      zIndex: "connector" === state.draggedTool ? ev : ey + 1,
      width: eT.width * t,
      height: eT.height * t,
      shouldFanOut: e,
      transformStart: eI({
        x: eT.translateStart.x * t,
        y: eT.translateStart.y * t
      }),
      transformEnd: eI({
        x: eT.translateEnd.x * t,
        y: eT.translateEnd.y * t
      }),
      isInteractive: !i,
      children: jsx(eN, {
        toolbarIconScale: t * eT.scale,
        isInteractive: !i
      })
    }, "connector-tool"), eC.map((r, s) => {
      let o = eg[s];
      let l = Jc.get(o);
      return jsx(ew, {
        zIndex: state.draggedTool === `shape-tool-${s}` ? ev : ey + 1,
        width: r.width * t,
        height: r.height * t,
        shouldFanOut: e,
        transformStart: eI({
          x: r.translateStart.x * t,
          y: r.translateStart.y * t
        }),
        transformEnd: eI({
          x: r.translateEnd.x * t,
          y: r.translateEnd.y * t
        }),
        isInteractive: !i,
        hasShadow: !0,
        children: jsx(eS, {
          shapeType: o,
          index: s,
          toolbarIconScale: t * r.scale,
          isInteractive: !i
        })
      }, l);
    })]
  });
});
function eN({
  toolbarIconScale: e,
  isInteractive: t
}) {
  let {
    state
  } = useContext(nS);
  let l = aV();
  let p = Uo();
  let h = _$$C();
  let m = AE();
  let x = useAtomWithSubscription(SK).connectorToolLineStyle;
  let j = useAtomWithSubscription(wp);
  let C = _$$F.format(j);
  let [T, E] = useAtomValueAndSetter(oh);
  let S = "open" === T.state && "shape" === T.tool;
  let w = LR();
  let I = useCallback(() => {
    if (w(!1), S) {
      E({
        type: "close",
        source: Yg.ToolSelected
      });
      Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_DEFAULT, null);
      return;
    }
    m ? h({
      setToolToDefault: !1
    }) : E({
      type: "open",
      tool: "shape"
    });
    Fullscreen?.triggerActionEnumInUserEditScope(eE[x].action, {
      source: fK
    });
  }, [w, S, m, h, E, x]);
  let L = "connector" === state.draggedTool;
  let N = useCallback((e, t) => {
    permissionScopeHandler.user("drop-connector-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(eE[x].tool, Math.round(e.x), Math.round(e.y + 7 * _$$P2), Math.round(t.x), Math.round(t.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
  }, [x]);
  let A = eE[x].Icon;
  return t ? jsx(_$$I, {
    className: d()({
      [z6]: !0,
      [ex]: L,
      "dlt_shape_collage--isConnectorIconHidden--OVylY": l
    }),
    "data-tooltip": L ? void 0 : "set-tool-connector-elbowed",
    "data-tooltip-offset-y": 0,
    "data-tooltip-type": KindEnum.LOOKUP,
    hasOpenSubmenu: S,
    inTabOrder: !1,
    isSelected: p,
    onClick: I,
    onboardingKey: Nr,
    recordingKey: hx("connector-tool"),
    toolType: "connector",
    children: jsx(_$$s, {
      Icon: A,
      canvasToSvgScale: _$$P2,
      color: C,
      hoverOffsetAmount: "NONE",
      isHovered: !1,
      isSelected: p,
      onDragEnd: N,
      onTap: I,
      toolType: "connector",
      toolbarIconScale: e
    })
  }) : jsx(A, {
    color: C,
    toolbarIconScale: e,
    shapeStrokeProps: {
      isDragging: L,
      styleType: BorderStyle.NONE,
      svgToCanvasScale: _$$P2 && e ? 1 / (_$$P2 * e) : 1
    }
  });
}
export function $$eA1({
  optimizeForCompactSize: e
}) {
  let [t, i] = useAtomValueAndSetter(SK);
  let [s, l] = useAtomValueAndSetter(_$$B2);
  let {
    shapeWithTextType
  } = t;
  let u = Jc.get(shapeWithTextType);
  let m = useRef(null);
  let f = $y();
  let _ = Yt();
  let g = bu();
  let v = sT();
  let E = s3() && s === ToolType.SHAPE_TOOL;
  let S = useAtomWithSubscription(oh);
  let w = "open" === S.state && "shape" === S.tool || E;
  let I = function ({
    startingShapeTool: e
  }) {
    let [t, i] = useAtomValueAndSetter(oh);
    let n = "open" === t.state && "shape" === t.tool;
    return useCallback(() => {
      if (n) {
        i({
          type: "close",
          source: Yg.ToolSelected
        });
        Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_DEFAULT, null);
        return;
      }
      if (e) {
        let t = Qd();
        let i = t.get(e)?.actionEnum ?? Command.SET_TOOL_DEFAULT;
        Fullscreen?.triggerActionEnumInUserEditScope(i, {
          source: fK
        });
      }
      i({
        type: "open",
        tool: "shape"
      });
    }, [i, n, e]);
  }({
    startingShapeTool: Jc.get("SQUARE")
  });
  let L = useAtomWithSubscription(Fy);
  let N = useAtomWithSubscription(eb);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Wd_,
    priority: _$$N.SECONDARY_MODAL
  }, [N, L]);
  let M = AE();
  useEffect(() => {
    show({
      canShow: (e, t) => !e && t && !M && f
    });
  }, [show, N, M, L, f]);
  let [D, P] = useState(!1);
  useEffect(() => {
    let e = setTimeout(() => {
      P(!0);
    }, 2e3);
    return () => clearTimeout(e);
  }, [P]);
  let [U, F] = useState(!1);
  let H = ar();
  let B = useCallback(() => {
    Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_DEFAULT, null);
    F(!0);
    H();
  }, [H]);
  let V = isShowing && D && !U;
  let G = V || M ? B : I;
  useEffect(() => {
    u !== _ && _ && i({
      ...t,
      shapeWithTextType: lx.get(_)
    });
  }, [_, u, t, i]);
  let {
    isHovered,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onTouchStart,
    onTouchEnd
  } = _$$W(G, g || v, !1);
  let Q = jsx(Qw, {
    isOpen: w,
    fadedOut: isHovered,
    optimizeForCompactSize: e,
    testId: "dlt-shape-submenu",
    id: V4,
    children: jsx(Lz, {
      children: jsx(ec, {
        recordingKey: hx("shapeMenu")
      })
    })
  });
  let ee = m.current?.getBoundingClientRect();
  let ei = ee ? {
    top: ee.top,
    left: ee.left,
    height: ee.height,
    width: ee.width
  } : void 0;
  return jsxs(Fragment, {
    children: [jsxs(XN, {
      alignment: "CENTER",
      children: [jsx(ti, {
        isSelected: isHovered || w,
        noScaleAnimation: !0,
        children: jsx(_$$J, {
          ariaLabel: "dlt-shape-collage-button",
          className: xt,
          "data-does-not-dismiss-modal": !0,
          hasOpenSubmenu: w,
          isHovered,
          isSelected: w,
          onClick: G,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onTouchEnd,
          onTouchStart,
          onboardingKey: BC,
          recordingKey: hx("shape"),
          testId: "dlt-shape-collage-button",
          toolType: "shape",
          children: jsx("div", {
            className: "dlt_shape_collage--collageButtonContainer--4Ex6o",
            ref: m,
            children: jsx(eL, {
              shouldFanOut: isHovered,
              showAdvancedDiagrammingOnboarding: V,
              toolbarIconScale: 1
            })
          })
        })
      }), Q]
    }), isShowing && jsx(k, {
      onboardingDelayHasCompleted: D,
      position: ei,
      isHovered,
      hasProgressedToShapesSidebar: U,
      complete
    })]
  });
}
export const c8 = $$ej0;
export const xJ = $$eA1;