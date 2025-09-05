import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { n as _$$n } from "../figma_app/630671";
import { m as _$$m } from "../905/118468";
import { o as _$$o } from "../figma_app/628776";
import { e as _$$e } from "../figma_app/952436";
import { W as _$$W } from "../figma_app/592474";
import { F as _$$F } from "../figma_app/241247";
import { l as _$$l } from "../905/241412";
import { H as _$$H } from "../figma_app/7677";
import { y as _$$y } from "../905/175043";
import { t } from "../figma_app/532797";
import { O as _$$O } from "../905/936515";
import { a as _$$a } from "../figma_app/258808";
import { l as _$$l2 } from "../905/556594";
import { v as _$$v } from "../figma_app/306727";
import { y as _$$y2 } from "../905/225297";
import { h as _$$h } from "../905/104000";
import { E as _$$E } from "../905/105281";
import { B as _$$B } from "../905/559262";
import { h as _$$h2 } from "../905/200386";
import { Z as _$$Z } from "../905/404142";
import { T as _$$T } from "../905/256551";
import { s as _$$s } from "../905/551945";
import { N as _$$N } from "../figma_app/316881";
import { k as _$$k } from "../905/381239";
import { L as _$$L } from "../1577/392861";
import { A as _$$A } from "../905/126947";
import { B as _$$B2 } from "../figma_app/327027";
import { X as _$$X } from "../figma_app/668312";
import { f as _$$f } from "../905/809171";
import { A as _$$A2 } from "../figma_app/180822";
import { k as _$$k2 } from "../figma_app/962894";
import { J as _$$J } from "../905/614223";
import { lyf, NLJ, m1T, nQ7, Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl, md } from "../figma_app/27355";
import J from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { o as _$$o2 } from "../9410/935965";
import { B as _$$B3 } from "../905/714743";
import { F as _$$F2 } from "../figma_app/832508";
import { y as _$$y3 } from "../figma_app/778611";
import { Q as _$$Q } from "../1291/188959";
import { LH } from "../figma_app/384673";
import { N as _$$N2 } from "../figma_app/176280";
import { I as _$$I } from "../figma_app/131348";
import { XS, Iy } from "../figma_app/95367";
import { c as _$$c } from "../figma_app/763535";
import { f as _$$f2 } from "../figma_app/913332";
import { X as _$$X2 } from "../905/350405";
import { Q6, kF } from "../figma_app/48566";
import { AE, $v, Q as _$$Q2, lW, uh } from "../figma_app/370763";
import { rM } from "../figma_app/241541";
import { s as _$$s2 } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { n6 } from "../905/234821";
import { Dm } from "../figma_app/8833";
import { d as _$$d } from "../9410/847929";
import { xn } from "../figma_app/644079";
import { k as _$$k4 } from "../figma_app/564183";
import { VA } from "../figma_app/528509";
import { Y5 } from "../figma_app/455680";
import { aV } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { FProductAccessType } from "../figma_app/191312";
import { ut } from "../figma_app/84367";
import { wH } from "../figma_app/680166";
import { m as _$$m2 } from "../905/99004";
import { Ij } from "../figma_app/433401";
import { O as _$$O2 } from "../figma_app/806649";
import { A as _$$A3 } from "../figma_app/426577";
import { _ as _$$_ } from "../figma_app/467504";
import { Bu } from "../figma_app/604494";
import { N as _$$N3, Q as _$$Q3 } from "../figma_app/287368";
import { u as _$$u } from "../6388/39003";
import { HW } from "../figma_app/357367";
import { tA, oH, nh } from "../642/588337";
import { hx } from "../figma_app/835688";
import { E as _$$E2 } from "../9410/583075";
import { b as _$$b } from "../figma_app/300024";
import { FT, RS, cR } from "../9410/607036";
import { bs, zF, Ix } from "../9410/680511";
import { u as _$$u2 } from "../figma_app/539950";
import { j4N } from "../figma_app/27776";
import { A as _$$A4 } from "../svg/328130";
import { A as _$$A5 } from "../svg/193017";
import { A as _$$A6 } from "../svg/858635";
import { A as _$$A7 } from "../svg/489925";
import { A as _$$A8 } from "../svg/555402";
import { A as _$$A9 } from "../svg/933932";
let z = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M13.103 3.005a1 1 0 0 1 .892.892L14 4v3h3l.102.005a1 1 0 0 1 .893.892L18 8v11h.5a.5.5 0 0 1 0 1h-14a.5.5 0 0 1 0-1H5v-8l.005-.102A1 1 0 0 1 6 10h3V4l.005-.103A1 1 0 0 1 10 3h3zM6 19h3v-8H6zm4 0h3V4h-3zm4 0h3V8h-3z"
    })
  });
});
var K = J;
let eO = "slides_toolbelt--svgWrapper--QfseS";
let eH = "slides_toolbelt--full--fYqiW";
let eV = parsePxNumber(j4N);
let eU = "design";
let eW = "QUICK_ACTIONS";
var eY = (e => (e.SelectTools = "Slides-SelectTools", e.ShapeTools = "Slides-ShapeTools", e.PenTools = "Slides-PenTools", e))(eY || {});
var eq = (e => (e.PenTool = "PenTool", e.ImageOrVideoTool = "ImageOrVideoTool", e))(eq || {});
let eQ = "EMBED_INSERT";
let eX = "SHAPE_INSERT";
let eZ = "CHART_AND_GRAPH";
function e0({
  getShortcutTextForTool: e,
  activeToolId: t,
  activateTool: l,
  topLevelMode: s,
  editModeType: r,
  areAnyShapesActive: i
}) {
  let a = aV();
  let d = q5();
  let c = VA(d?.project);
  let u = s === lyf.HISTORY;
  let h = zl.get(_$$o2);
  let {
    getProvisionalAccessBanner
  } = wH();
  let g = getProvisionalAccessBanner(FProductAccessType.SLIDES);
  let f = g?.showBanner && !a && !h && !c;
  let [m, v] = useState(!1);
  let b = _$$N3();
  let j = !m && b === _$$Q3.REQUEST_NEEDED;
  let {
    activeSecondaryToolbeltId,
    setActiveSecondaryToolbeltId,
    closeSecondaryToolbelt
  } = LH();
  useEffect(() => {
    t !== NLJ.VECTOR_BEND && t !== NLJ.VECTOR_PAINT_BUCKET && t !== NLJ.SHAPE_BUILDER && (r === m1T.VECTOR ? setActiveSecondaryToolbeltId("PenTool") : t === NLJ.IMAGE_OR_VIDEO ? setActiveSecondaryToolbeltId("ImageOrVideoTool") : setActiveSecondaryToolbeltId(null));
  }, [t, r, setActiveSecondaryToolbeltId]);
  let S = _$$E2({
    logToggle: !0
  });
  let I = AE();
  return a ? null : jsxs(XS, {
    "data-onboarding-key": hx,
    children: [jsxs(Iy, {
      children: [jsx(e6, {
        activateTool: l,
        topLevelMode: s,
        areAnyShapesActive: i,
        showDisabledTools: j
      }), !h && !u && jsx(_$$u, {
        modeIdentifier: "slides",
        modeIcon: jsx(_$$l, {}),
        modeLabel: _$$t("fullscreen.toolbar.toolbelt_mode_segmented_control.slides"),
        onToggleMode: S,
        getTooltipShortcut: e => e === nQ7.SELF ? I("enter-slides-mode") : I("enter-slides-design-mode")
      })]
    }), j && jsx(_$$f2, {
      onClose: () => {
        v(!0);
      }
    }), f && jsx(_$$c, {
      text: g.text,
      shouldShowCurf: g.shouldShowCurf,
      licenseType: FProductAccessType.SLIDES
    }), "PenTool" === activeSecondaryToolbeltId && r === m1T.VECTOR && jsx(_$$A3, {
      activeToolId: t,
      activateTool: l,
      getShortcutTextForTool: e,
      closeSecondaryToolbelt
    }), "ImageOrVideoTool" === activeSecondaryToolbeltId && jsx(_$$O2, {
      handleAction: $v
    })]
  });
}
function e1(e) {
  return !HW() && e === lyf.LAYOUT;
}
export function $$e51(e) {
  return e1(md(_$$Q2)) ? `${e}-${eU}` : e;
}
function e6(e) {
  let {
    activateTool,
    topLevelMode,
    areAnyShapesActive,
    showDisabledTools
  } = e;
  let i = e1(topLevelMode);
  let a = useMemo(() => [jsx(e3, {
    activateTool,
    topLevelMode,
    areAnyShapesActive,
    showDisabledTools
  }, nQ7.SELF), jsx(e4, {
    activateTool,
    topLevelMode
  }, nQ7.DESIGN)], [activateTool, topLevelMode, areAnyShapesActive, showDisabledTools]);
  return jsx(Q6, {
    rows: a,
    activeRowIndex: i ? 1 : 0
  });
}
function e4(e) {
  let {
    activateTool
  } = e;
  let l = n6();
  let {
    activeToolId
  } = rM(lW);
  let s = md(Bu);
  let x = uh();
  let M = AE();
  return jsxs(kF, {
    editorTheme: "design",
    children: [jsx(_$$I, {
      overlayId: "Slides-SelectTools",
      tooltipText: _$$t("fullscreen.flyout.move_tools"),
      items: [{
        toolId: NLJ.SELECT,
        text: _$$t("fullscreen_actions.set-tool-default"),
        shortcutText: x(NLJ.SELECT),
        icon: jsx(_$$H, {}),
        smallIcon: jsx(_$$y, {}),
        recordingKey: "toolDefault"
      }, {
        toolId: NLJ.HAND,
        text: _$$t("fullscreen_actions.set-tool-hand"),
        shortcutText: x(NLJ.HAND),
        icon: jsx(t, {}),
        smallIcon: jsx(_$$O, {}),
        recordingKey: "toolHand"
      }, {
        toolId: NLJ.SCALE,
        text: _$$t("fullscreen_actions.set-tool-scale"),
        shortcutText: x(NLJ.SCALE),
        icon: jsx(_$$a, {}),
        smallIcon: jsx(_$$l2, {}),
        recordingKey: "toolScale"
      }],
      activeToolId,
      onActivateTool: activateTool
    }), jsx(_$$N2, {
      toolId: NLJ.FRAME,
      tooltipText: _$$t("fullscreen_actions.set-tool-frame"),
      tooltipShortcut: x(NLJ.FRAME),
      icon: jsx(_$$v, {}),
      onActivateTool: activateTool,
      activeToolId
    }), jsx(_$$I, {
      overlayId: "Slides-ShapeTools",
      tooltipText: _$$t("fullscreen.flyout.shape_tools"),
      items: [{
        toolId: NLJ.SHAPE_RECTANGLE,
        text: _$$t("fullscreen_actions.set-tool-rectangle"),
        shortcutText: x(NLJ.SHAPE_RECTANGLE),
        icon: jsx(_$$n, {}),
        smallIcon: jsx(_$$y2, {}),
        recordingKey: "toolShapeRectangle"
      }, {
        toolId: NLJ.SHAPE_LINE,
        text: _$$t("fullscreen_actions.set-tool-line"),
        shortcutText: x(NLJ.SHAPE_LINE),
        icon: jsx(_$$W, {}),
        smallIcon: jsx(_$$h, {}),
        recordingKey: "toolShapeLine"
      }, {
        toolId: NLJ.SHAPE_ARROW,
        text: _$$t("fullscreen_actions.set-tool-arrow"),
        shortcutText: x(NLJ.SHAPE_ARROW),
        icon: jsx(_$$F, {}),
        smallIcon: jsx(_$$E, {}),
        recordingKey: "toolShapeArrow"
      }, {
        toolId: NLJ.SHAPE_ELLIPSE,
        text: _$$t("fullscreen_actions.set-tool-ellipse"),
        shortcutText: x(NLJ.SHAPE_ELLIPSE),
        icon: jsx(_$$m, {}),
        smallIcon: jsx(_$$B, {}),
        recordingKey: "toolShapeEllipse"
      }, {
        toolId: NLJ.SHAPE_REGULAR_POLYGON,
        text: _$$t("fullscreen_actions.set-tool-regular-polygon"),
        icon: jsx(_$$o, {}),
        smallIcon: jsx(_$$h2, {}),
        recordingKey: "toolShapePolygon"
      }, {
        toolId: NLJ.SHAPE_STAR,
        text: _$$t("fullscreen_actions.set-tool-star"),
        icon: jsx(_$$e, {}),
        smallIcon: jsx(_$$Z, {}),
        recordingKey: "toolShapeStar"
      }, {
        toolId: NLJ.IMAGE_OR_VIDEO,
        text: _$$t("fullscreen_actions.place_image_or_video"),
        icon: jsx(_$$T, {}),
        smallIcon: jsx(_$$s, {}),
        shortcutText: x(NLJ.IMAGE_OR_VIDEO),
        recordingKey: "image-tool"
      }],
      activeToolId,
      onActivateTool: activateTool
    }), jsx(_$$I, {
      overlayId: "Slides-PenTools",
      tooltipText: _$$t("fullscreen.flyout.drawing_tools"),
      items: [{
        toolId: NLJ.VECTOR_PEN,
        text: _$$t("fullscreen_actions.set-tool-pen"),
        shortcutText: x(NLJ.VECTOR_PEN),
        icon: jsx(_$$N, {}),
        smallIcon: jsx(_$$k, {}),
        recordingKey: "toolPen"
      }, {
        toolId: NLJ.VECTOR_PENCIL,
        text: _$$t("fullscreen_actions.set-tool-pencil"),
        shortcutText: x(NLJ.VECTOR_PENCIL),
        icon: jsx(_$$L, {}),
        smallIcon: jsx(_$$A, {}),
        recordingKey: "toolPencil"
      }],
      activeToolId,
      onActivateTool: activateTool
    }), jsx(_$$N2, {
      toolId: NLJ.TYPE,
      icon: jsx(_$$B2, {}),
      onActivateTool: activateTool,
      activeToolId,
      tooltipText: _$$t("fullscreen_actions.set-tool-type"),
      tooltipShortcut: x(NLJ.TYPE),
      onboardingKey: "tool-type-onboarding"
    }), jsx(_$$N2, {
      toolId: NLJ.COMMENTS,
      icon: l > 0 ? jsx(_$$X, {}) : jsx(_$$f, {}),
      onActivateTool: activeToolId === NLJ.COMMENTS ? () => activateTool(NLJ.SELECT) : activateTool,
      activeToolId,
      tooltipText: _$$t("fullscreen_actions.comment"),
      tooltipShortcut: x(NLJ.COMMENTS)
    }), jsx(_$$N2, {
      toolId: eW,
      icon: jsx(_$$_, {}),
      onActivateTool: () => $v("toggle-menu"),
      activeToolId: s ? eW : activeToolId,
      tooltipText: _$$t("qa.extensions.tooltip_actions"),
      tooltipShortcut: M("toggle-menu"),
      onboardingKey: Ij
    }), jsx("div", {
      "data-element-target": `${_$$b}-${eU}`,
      children: jsx(e8, {})
    })]
  });
}
function e3(e) {
  let {
    activateTool,
    topLevelMode,
    showDisabledTools
  } = e;
  let r = n6();
  let i = zl.get(_$$o2);
  let a = topLevelMode === lyf.HISTORY;
  let {
    activeToolId
  } = rM(lW);
  let c = md(FT) > -1;
  let u = md(bs) > -1;
  let [x, b] = useState(!1);
  let j = useRef(null);
  let y = useRef(null);
  let _ = useRef(null);
  let E = md(Bu);
  let S = uh();
  let I = AE();
  let C = useCallback(() => {
    let e = _.current?.getBoundingClientRect();
    if (e) return {
      x: e.left + e.width / 2 - tA / 2,
      y: e.top - oH - 16
    };
  }, []);
  let N = !!iZ();
  let w = _$$k4();
  let R = e => jsx(_$$N2, {
    toolId: NLJ.TYPE,
    icon: jsx(_$$B2, {}),
    onActivateTool: activateTool,
    activeToolId,
    tooltipText: _$$t("fullscreen_actions.set-tool-type"),
    tooltipShortcut: S(NLJ.TYPE),
    recordingKey: "text-tool",
    disabled: e
  });
  let A = e => jsx(_$$N2, {
    toolId: NLJ.IMAGE_OR_VIDEO,
    icon: jsx(_$$T, {}),
    onActivateTool: activateTool,
    activeToolId,
    tooltipText: _$$t("fullscreen_actions.place_image_or_video"),
    tooltipShortcut: S(NLJ.IMAGE_OR_VIDEO),
    recordingKey: "media-tool",
    disabled: e
  });
  let O = t => jsx(_$$N2, {
    toolId: eX,
    icon: jsx(_$$A2, {}),
    onActivateTool: () => e7(y, bs),
    activeToolId: u || e.areAnyShapesActive ? eX : activeToolId,
    tooltipText: _$$t("slides.inserts_menu.shapes"),
    recordingKey: "slides-shape-tool",
    disabled: t
  });
  let J = e => jsx(_$$N2, {
    toolId: eQ,
    icon: jsx(_$$k2, {}),
    onActivateTool: () => e7(j, FT),
    activeToolId: c ? eQ : activeToolId,
    tooltipText: _$$t("slides.inserts_menu.interaction"),
    recordingKey: "flapp-tool",
    disabled: e
  });
  let K = e => jsx(_$$N2, {
    toolId: eW,
    icon: jsx(_$$_, {}),
    onActivateTool: () => $v("toggle-menu"),
    activeToolId: E ? eW : activeToolId,
    tooltipText: _$$t("qa.extensions.tooltip_actions"),
    tooltipShortcut: I("toggle-menu"),
    disabled: e
  });
  let $ = jsxs(Fragment, {
    children: [jsx(_$$X2, {
      extended: !0
    }), R(!0), A(!0), O(!0), J(!0), K(!0)]
  });
  return jsxs(kF, {
    children: [(i || a) && jsxs(Fragment, {
      children: [jsx(_$$N2, {
        toolId: NLJ.SELECT,
        icon: jsx(_$$H, {}),
        onActivateTool: activateTool,
        activeToolId,
        tooltipText: _$$t("fullscreen_actions.set-tool-default"),
        tooltipShortcut: S(NLJ.SELECT)
      }), jsx(_$$N2, {
        toolId: NLJ.HAND,
        icon: jsx(t, {}),
        onActivateTool: activateTool,
        activeToolId,
        tooltipText: _$$t("fullscreen_actions.set-tool-hand"),
        tooltipShortcut: S(NLJ.HAND)
      })]
    }), !i && !a && jsxs(Fragment, {
      children: [jsx(_$$I, {
        overlayId: "Slides-SelectTools",
        tooltipText: _$$t("fullscreen.flyout.move_tools"),
        items: [{
          toolId: NLJ.SELECT,
          text: _$$t("fullscreen_actions.set-tool-default"),
          shortcutText: S(NLJ.SELECT),
          icon: jsx(_$$H, {}),
          smallIcon: jsx(_$$y, {}),
          recordingKey: "move-tool"
        }, {
          toolId: NLJ.HAND,
          text: _$$t("fullscreen_actions.set-tool-hand"),
          shortcutText: S(NLJ.HAND),
          icon: jsx(t, {}),
          smallIcon: jsx(_$$O, {}),
          recordingKey: "hand-tool"
        }, {
          toolId: NLJ.SCALE,
          text: _$$t("fullscreen_actions.set-tool-scale"),
          shortcutText: S(NLJ.SCALE),
          icon: jsx(_$$a, {}),
          smallIcon: jsx(_$$l2, {}),
          recordingKey: "scale-tool"
        }],
        activeToolId,
        onActivateTool: activateTool,
        recordingKey: "select-tool-group"
      }), R(), A(), jsx("div", {
        "data-element-target": zF,
        ref: y,
        children: O()
      }), jsx("div", {
        "data-element-target": RS,
        ref: j,
        children: J()
      }), getFeatureFlags().slides_charts_and_graphs && jsx("div", {
        "data-element-target": eZ,
        ref: _,
        children: jsx(_$$N2, {
          toolId: eZ,
          icon: jsx(z, {}),
          onActivateTool: () => {
            b(e => !e);
          },
          activeToolId: x ? eZ : activeToolId,
          tooltipText: "Charts and graphs",
          recordingKey: "charts-and-graphs-tool",
          disabled: void 0
        })
      }), jsx(nh, {
        defaultPosition: C(),
        isOpen: x,
        onClose: () => b(!1)
      })]
    }), !a && (N || w) && jsx(_$$N2, {
      toolId: NLJ.COMMENTS,
      icon: r > 0 ? jsx("div", {
        className: activeToolId === NLJ.COMMENTS ? _$$u2 : void 0,
        children: jsx(_$$X, {})
      }) : jsx(_$$f, {}),
      onActivateTool: activeToolId === NLJ.COMMENTS ? () => activateTool(NLJ.SELECT) : activateTool,
      activeToolId,
      tooltipText: _$$t("fullscreen_actions.comment"),
      tooltipShortcut: S(NLJ.COMMENTS),
      recordingKey: "comments-tool"
    }), !i && !a && K(), i || a ? null : jsx("div", {
      "data-element-target": _$$b,
      children: jsx(e8, {})
    }), i && !a && !showDisabledTools && N && jsx(_$$F2, {}), !!showDisabledTools && $]
  });
}
export function $$e20() {
  let e = md(FT) > -1;
  let t = md(bs) > -1;
  let l = uh();
  let {
    activeToolId,
    activateTool,
    topLevelMode,
    editModeType
  } = rM(lW);
  let g = e1(topLevelMode);
  let f = useMemo(() => function (e) {
    let t = [{
      toolId: NLJ.SHAPE_WHITEBOARD_SQUARE,
      text: _$$t("fullscreen_actions.set-tool-rectangle"),
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_SQUARE),
      icon: jsx(_$$n, {})
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_ELLIPSE,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_ELLIPSE),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-ellipse"),
      icon: jsx(_$$m, {})
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_DIAMOND,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_DIAMOND),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-diamond"),
      icon: jsx(_$$B3, {
        className: eO,
        svg: _$$A6
      })
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP),
      text: _$$t("fullscreen_actions.set-tool-shape-slides-triangle-up"),
      icon: jsx(_$$o, {})
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_STAR,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_STAR),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-star"),
      icon: jsx(_$$e, {})
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_PLUS,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_PLUS),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-plus"),
      icon: jsx(_$$B3, {
        className: eO,
        svg: _$$A7
      })
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_ARROW_LEFT,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_ARROW_LEFT),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-arrow-left"),
      icon: jsx(_$$B3, {
        className: eO,
        svg: _$$A4
      })
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_ARROW_RIGHT,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_ARROW_RIGHT),
      text: _$$t("fullscreen_actions.set-tool-shape-whiteboard-arrow-right"),
      icon: jsx(_$$B3, {
        className: eO,
        svg: _$$A5
      })
    }, {
      toolId: NLJ.SHAPE_WHITEBOARD_SPEECH_BUBBLE,
      shortcutText: e(NLJ.SHAPE_WHITEBOARD_SPEECH_BUBBLE),
      text: _$$t("fullscreen_actions.set-tool-shape-slides-blurb"),
      icon: jsx(_$$B3, {
        className: K()(eO, eH),
        svg: _$$A8
      })
    }, {
      toolId: NLJ.SHAPE_LINE,
      shortcutText: e(NLJ.SHAPE_LINE),
      text: _$$t("fullscreen_actions.set-tool-line"),
      icon: jsx(_$$W, {})
    }, {
      toolId: NLJ.SHAPE_ARROW,
      shortcutText: e(NLJ.SHAPE_ARROW),
      text: _$$t("fullscreen_actions.set-tool-arrow"),
      icon: jsx(_$$F, {})
    }];
    getFeatureFlags().piper_connectors && t.push({
      toolId: NLJ.CONNECTOR_ELBOWED,
      shortcutText: e(NLJ.CONNECTOR_ELBOWED),
      text: _$$t("fullscreen_actions.set-tool-connector-elbowed"),
      icon: jsx(_$$B3, {
        className: K()(eO, eH),
        svg: _$$A9
      })
    });
    return t;
  }(l), [l]);
  let m = f.some(e => e.toolId === activeToolId);
  return jsxs(Fragment, {
    children: [jsx(e9, {
      editorTheme: g ? "design" : "piper",
      children: jsx(_$$m2, {
        role: "region",
        "aria-label": _$$t("fullscreen_actions.toolbar_label"),
        children: jsx(e0, {
          getShortcutTextForTool: l,
          activeToolId,
          activateTool,
          topLevelMode,
          editModeType,
          areAnyShapesActive: m
        })
      })
    }), e && jsx(cR, {}), t && jsx(Ix, {
      activateTool,
      activeToolId,
      areAnyShapesActive: m,
      shapes: f
    })]
  });
}
function e8() {
  let e = useSelector(e => e.universalInsertModal.showing);
  let t = AE();
  return jsx(_$$Q, {
    children: jsx(_$$y3, {
      onClick: () => $v("browse-all-resources-modal"),
      isActive: e,
      tooltipText: _$$t("slides.inserts_menu.assets"),
      tooltipShortcut: t("browse-all-resources-modal"),
      recordingKey: "assets-tool"
    })
  });
}
function e7(e, t) {
  let l = e.current?.getBoundingClientRect();
  let o = l ? l.left + l.width / 2 : 0;
  let n = zl.get(t) > -1;
  zl.set(t, n ? -1 : o);
  Y5.triggerAction("set-tool-default", {
    source: "menu"
  });
}
function e9({
  children: e,
  editorTheme: t
}) {
  let l = xn();
  let n = _$$d();
  let s = n[0] ?? 0;
  let r = n[1] ?? 0;
  let i = ut(Ez5?.singleSlideView().isInFocusedNodeView, !1);
  return jsx("div", {
    className: K()(Dm, _$$s2.fixed.flex.justifyCenter.eventsNone.$),
    style: {
      marginBottom: l,
      left: 0,
      right: 0,
      zIndex: 8,
      bottom: eV,
      transition: "transform 0.2s",
      transform: i ? "translateX(" + (s - r) / 2 + "px)" : "translateX(0px)"
    },
    children: jsx(_$$J, {
      brand: t,
      children: e
    })
  });
}
export const Ah = $$e20;
export const gt = $$e51;