import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { v as _$$v } from "../figma_app/306727";
import { q as _$$q } from "../905/838985";
import { G as _$$G } from "../905/117393";
import { P as _$$P } from "../figma_app/483257";
import { c as _$$c } from "../905/90943";
import { h as _$$h } from "../905/510194";
import { n as _$$n } from "../figma_app/630671";
import { y as _$$y } from "../905/225297";
import { W as _$$W } from "../figma_app/592474";
import { h as _$$h2 } from "../905/104000";
import { F as _$$F } from "../figma_app/241247";
import { E as _$$E } from "../905/105281";
import { m as _$$m } from "../905/118468";
import { B as _$$B } from "../905/559262";
import { o as _$$o } from "../figma_app/628776";
import { h as _$$h3 } from "../905/200386";
import { e } from "../figma_app/952436";
import { Z as _$$Z } from "../905/404142";
import { T as _$$T } from "../905/256551";
import { s as _$$s } from "../905/551945";
import { N as _$$N } from "../figma_app/316881";
import { k as _$$k } from "../905/381239";
import { L as _$$L } from "../1577/392861";
import { A as _$$A } from "../905/126947";
import { X as _$$X } from "../figma_app/668312";
import { f as _$$f } from "../905/809171";
import { S as _$$S } from "../905/788053";
import { L as _$$L2 } from "../905/109200";
import { K as _$$K } from "../figma_app/104888";
import { r } from "../905/11890";
import { H as _$$H } from "../figma_app/7677";
import { y as _$$y2 } from "../905/175043";
import { t } from "../figma_app/532797";
import { O as _$$O } from "../905/936515";
import { a as _$$a } from "../figma_app/258808";
import { l as _$$l } from "../905/556594";
import { B as _$$B2 } from "../figma_app/327027";
import { C as _$$C } from "../figma_app/765025";
import { t as _$$t } from "../905/316903";
import { Fullscreen, DesignGraphElements, ViewType, LayoutTabType, UserInterfaceElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getFilteredFeatureFlags } from "../905/717445";
import { generateRecordingKey } from "../figma_app/878298";
import { WN } from "../figma_app/638601";
import { F as _$$F2 } from "../figma_app/832508";
import { y as _$$y3 } from "../figma_app/778611";
import { z as _$$z } from "../figma_app/47967";
import { N as _$$N2 } from "../figma_app/176280";
import { I as _$$I } from "../figma_app/131348";
import { X as _$$X2 } from "../905/350405";
import { kF } from "../figma_app/48566";
import { AE, $v } from "../figma_app/370763";
import { XZ, rM } from "../figma_app/241541";
import { getI18nString } from "../905/303541";
import { _Y } from "../figma_app/275462";
import { to } from "../figma_app/828186";
import { xo } from "../figma_app/473493";
import { isDevModeFocusViewActive } from "../figma_app/544649";
import { n6 } from "../905/234821";
import { k as _$$k3 } from "../figma_app/564183";
import { wg } from "../figma_app/101956";
import { fullscreenValue } from "../figma_app/455680";
import { T as _$$T2 } from "../905/858738";
import { Ij, _D } from "../figma_app/433401";
import { K as _$$K2 } from "../figma_app/398376";
import { L4 } from "../figma_app/34798";
import { u as _$$u } from "../figma_app/110635";
import { M as _$$M } from "../figma_app/652260";
import { uh } from "../figma_app/710136";
import { U as _$$U } from "../figma_app/964810";
import { AP } from "../figma_app/755783";
import { _ as _$$_ } from "../figma_app/467504";
import { y as _$$y4 } from "../figma_app/873852";
import { Bu } from "../figma_app/604494";
import { T as _$$T3 } from "../figma_app/399971";
import { I as _$$I2 } from "../figma_app/109163";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { Vi, _o, GI } from "../905/125333";
import { z5 } from "../905/713722";
import { DP } from "../905/640017";
import { hv } from "../figma_app/544744";
import { H as _$$H2 } from "../figma_app/539950";
let l = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M19.397 4.604a1.975 1.975 0 0 0-2.793 0l-3.25 3.25-.354.354-.354-.354-.045-.045a.85.85 0 0 0-1.202 0l-.09.09a.85.85 0 0 0 0 1.202l.545.546 2.5 2.5.545.545a.85.85 0 0 0 1.202 0l.09-.09a.85.85 0 0 0 0-1.203l-.044-.045-.354-.354.353-.353 3.25-3.25a1.975 1.975 0 0 0 0-2.793m-3.5-.707a2.975 2.975 0 1 1 4.207 4.207l-2.933 2.933a1.85 1.85 0 0 1-.272 2.271l-.09.091a1.85 1.85 0 0 1-2.617 0L14 13.207l-7.354 7.354a1.5 1.5 0 0 1-1.06.44H3.5a.5.5 0 0 1-.5-.5v-2.087c0-.397.158-.779.44-1.06L10.792 10l-.192-.192a1.85 1.85 0 0 1 0-2.616l.09-.09a1.85 1.85 0 0 1 2.272-.272zm-4.397 6.81-7.354 7.354a.5.5 0 0 0-.146.354V20h1.586a.5.5 0 0 0 .353-.146l7.354-7.354z",
      clipRule: "evenodd"
    })
  });
});
let p = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M19.405 5.862c-.5-.5-1.31-.5-1.81 0L12 11.457v3.813l7.416-7.611a1.28 1.28 0 0 0-.011-1.797M11.994 16.71l8.139-8.353a2.28 2.28 0 0 0-3.245-3.203l-5.739 5.74-8.497 8.247A.5.5 0 0 0 3 20h5.5a3.5 3.5 0 0 0 3.494-3.29M11 12.432 4.233 19H8.5a2.5 2.5 0 0 0 2.5-2.5z",
      clipRule: "evenodd"
    })
  });
});
let k = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M3.293 7.793a1 1 0 0 0 0 1.414l11.5 11.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0 0-1.414l-11.5-11.5a1 1 0 0 0-1.414 0zM4 8.5l.707.707.69.69.75-.75a.5.5 0 1 1 .707.707l-.75.75 1.292 1.292 2.25-2.25a.5.5 0 0 1 .708.708l-2.25 2.25 1.292 1.292.75-.75a.5.5 0 0 1 .708.708l-.75.75 1.292 1.292 2.25-2.25a.5.5 0 0 1 .708.708l-2.25 2.25 2.689 2.689.707.707.707-.707 3.086-3.086L20 15.5l-.707-.707L9.207 4.707 8.5 4l-.707.707-3.086 3.086zM16 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
      clipRule: "evenodd"
    })
  });
});
let eF = "assets--overlay--OZ7Lz";
function ej({
  children: e,
  ...t
}) {
  return jsx("svg", {
    ...t,
    className: eF,
    children: e
  });
}
function eU({
  color: e
}) {
  return jsx(ej, {
    viewBox: "0 0 36 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsx("path", {
      d: "M29.791 66H5.79103V39H29.791V66ZM17.791 3C22.107 3 26.2235 3.85434 29.9805 5.40332C30.3686 5.56335 30.6063 5.95599 30.5801 6.375L30.2803 11.1562C17.1547 18.1095 15.1274 5.38666 5.31153 11.333L5.00196 6.375C4.97578 5.95599 5.21345 5.56335 5.60157 5.40332C9.35851 3.85433 13.475 3.00001 17.791 3Z",
      fill: z5.format(e)
    })
  });
}
function eB({
  color: e
}) {
  return jsx(ej, {
    width: "34",
    height: "68",
    viewBox: "0 0 34 68",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: jsx("path", {
      d: "M29 67H5V40H29V67ZM17 18C19.2091 18 21 19.7909 21 22C21 24.2091 19.2091 26 17 26C14.7909 26 13 24.2091 13 22C13 19.7909 14.7909 18 17 18Z",
      fill: z5.format(e)
    })
  });
}
let eG = {
  dark: {
    brush: {
      base: "92f2b3374d918fc841bbf84a2031fb4debf0323b",
      overlay: "38ecf2765b7c3950c1023a48341859c5c46d9aa7",
      Wash: eU,
      atom: Vi
    },
    pen: {
      base: "088142be80f010c8d9778e7f186e795ab31a7ab0",
      overlay: "bd14345e2f74e9f687df0c5bf8d3d7566d8e8152",
      Wash: eB,
      atom: _o
    },
    pencil: {
      base: "61e4d7ec10ee7499173e60f8c8dff736ba736d0f",
      overlay: "6b9f003be3289fdca487f2924810ee4ca7786d22",
      Wash: function ({
        color: e
      }) {
        return jsx(ej, {
          width: "34",
          height: "67",
          viewBox: "0 0 34 67",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: jsx("path", {
            d: "M23.1182 32.0172C23.2728 31.7405 23.635 31.6437 23.9072 31.8063C25.4221 32.7114 27.2476 33.024 29 32.6403V65.6139H5V32.6393C6.75389 33.0247 8.58131 32.7122 10.0977 31.8063C10.3699 31.6437 10.732 31.7405 10.8867 32.0172C12.0827 34.1621 14.3729 35.6139 17.0029 35.6139C19.6328 35.6139 21.9223 34.1619 23.1182 32.0172ZM16.0713 3.93521C16.4065 3.09707 17.5934 3.09708 17.9287 3.93521L20.7139 10.8981C19.5654 11.3579 18.3127 11.6139 17 11.6139C15.6873 11.6139 14.4346 11.358 13.2861 10.8981L16.0713 3.93521Z",
            fill: z5.format(e)
          })
        });
      },
      atom: GI
    }
  },
  light: {
    brush: {
      base: "5d3465d6480fb1e5bb638da3e5cc39fe692ad65b",
      overlay: "2f83cafd8d45624778a5070f02edfcb38c8aa8f1",
      Wash: eU,
      atom: Vi
    },
    pen: {
      base: "d5d9cad647cd2f5267b6f0f2acab527b8b11c4e2",
      overlay: "66522e608abb68b211db911554eca95cbf046a27",
      Wash: eB,
      atom: _o
    },
    pencil: {
      base: "c173cee2845ae89ae2d5acbda78e1519c6a4cbc2",
      overlay: "fb90f0daa9ae0c82cbd8937127f78ab482112cd3",
      Wash: function ({
        color: e
      }) {
        return jsx(ej, {
          width: "34",
          height: "67",
          viewBox: "0 0 34 67",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: jsx("path", {
            d: "M23.1182 31.7116C23.2728 31.4348 23.635 31.338 23.9072 31.5007C25.4221 32.4058 27.2476 32.7183 29 32.3347V65.3083H5V32.3337C6.75385 32.719 8.58133 32.4066 10.0977 31.5007C10.3699 31.338 10.732 31.4348 10.8867 31.7116C12.0827 33.8564 14.3729 35.3083 17.0029 35.3083C19.6328 35.3082 21.9223 33.8562 23.1182 31.7116ZM16.0713 3.62861C16.4065 2.79046 17.5935 2.79046 17.9287 3.62861L20.7139 10.5915C19.5654 11.0513 18.3127 11.3073 17 11.3073C15.6869 11.3073 14.4339 11.0516 13.2852 10.5915L16.0713 3.62861Z",
            fill: z5.format(e)
          })
        });
      },
      atom: GI
    }
  }
};
function eV({
  tool: e
}) {
  let t = eG["dark" === DP() ? "dark" : "light"][e];
  let r = useAtomWithSubscription(t.atom);
  let a = useMemo(() => {
    let e = r.paints?.[0];
    if (e?.type === "SOLID") return e.color;
  }, [r]);
  return jsxs("div", {
    className: "assets--relContainer--A42xz",
    children: [jsx(oW, {
      src: buildUploadUrl(t.base)
    }), a && jsx(t.Wash, {
      color: a
    }), a && jsx(oW, {
      src: buildUploadUrl(t.overlay),
      className: eF
    })]
  });
}
function eH() {
  return jsx(eV, {
    tool: "brush"
  });
}
function ez() {
  return jsx(eV, {
    tool: "pen"
  });
}
function eW() {
  return jsx(eV, {
    tool: "pencil"
  });
}
let eK = "drawing_tools--toolWrapper--DcVM5";
let eY = {
  source: "illustration_drawing_toolbelt"
};
function e$({
  children: e,
  isSelected: t
}) {
  return jsxs("div", {
    className: eK,
    children: [t && jsx("div", {
      className: "drawing_tools--toolBackground--HVXXB"
    }), e]
  });
}
function eX({
  fullscreenAction: e,
  isSelected: t,
  toolType: r,
  tool: i
}) {
  let a = AP();
  return jsx(e$, {
    isSelected: t,
    children: jsx(_$$I2, {
      toolType: r,
      recordingKey: generateRecordingKey("illustrationToolbar.drawing", String(r)),
      isSelected: t,
      onClick: () => {
        "pen" === r && a || Fullscreen.setDefaultEditMode();
        Fullscreen.triggerActionInUserEditScope(e, eY);
      },
      dataTooltip: e,
      tooltipOffset: {
        offsetX: 0,
        offsetY: -20
      },
      IconNoRef: jsx("div", {
        className: eK,
        children: i
      }),
      optimizeForCompactSize: !0,
      forIllustration: !0
    })
  });
}
function eq() {
  let e = _$$T3();
  let t = e === DesignGraphElements.VECTOR_PEN;
  let r = e === DesignGraphElements.BRUSH;
  let i = e === DesignGraphElements.VECTOR_PENCIL;
  return jsx("div", {
    className: "drawing_tools--container--FXB08",
    children: jsx("div", {
      className: "drawing_tools--clip1--pMOSW",
      children: jsx("div", {
        className: "drawing_tools--clip2--ASqq6",
        children: jsxs("div", {
          className: "drawing_tools--toolContainer--KCdqi",
          children: [jsx(eX, {
            fullscreenAction: "set-tool-pen",
            isSelected: t,
            toolType: "pen",
            tool: jsx(ez, {})
          }), jsx(eX, {
            fullscreenAction: "set-tool-brush",
            isSelected: r,
            toolType: "brush",
            tool: jsx(eH, {})
          }), jsx(eX, {
            fullscreenAction: "set-tool-pencil",
            isSelected: i,
            toolType: "pencil",
            tool: jsx(eW, {})
          })]
        })
      })
    })
  });
}
let eQ = {
  FRAME: {
    toolId: DesignGraphElements.FRAME,
    getText: () => getI18nString("fullscreen_actions.set-tool-frame"),
    icon: jsx(_$$v, {}),
    smallIcon: jsx(_$$q, {}),
    recordingKey: "toolFrame",
    onboardingKey: "frame"
  },
  DROPPER: {
    toolId: DesignGraphElements.DROPPER_COLOR,
    getText: () => getI18nString("dev_handoff.eyedropper.tool_name"),
    icon: jsx(l, {}),
    smallIcon: jsx(_$$G, {}),
    recordingKey: "toolDropper",
    onboardingKey: _$$K2
  },
  SECTION: {
    toolId: DesignGraphElements.SECTION,
    getText: () => getI18nString("fullscreen_actions.set-tool-section"),
    icon: jsx(_$$P, {}),
    smallIcon: jsx(_$$c, {}),
    recordingKey: "toolSection"
  },
  SLICE: {
    toolId: DesignGraphElements.SLICE,
    getText: () => getI18nString("fullscreen_actions.set-tool-slice"),
    icon: jsx(p, {}),
    smallIcon: jsx(_$$h, {}),
    recordingKey: "toolSlice"
  },
  RECTANGLE: {
    toolId: DesignGraphElements.SHAPE_RECTANGLE,
    getText: () => getI18nString("fullscreen_actions.set-tool-rectangle"),
    icon: jsx(_$$n, {}),
    smallIcon: jsx(_$$y, {}),
    recordingKey: "toolShapeRectangle"
  },
  LINE: {
    toolId: DesignGraphElements.SHAPE_LINE,
    getText: () => getI18nString("fullscreen_actions.set-tool-line"),
    icon: jsx(_$$W, {}),
    smallIcon: jsx(_$$h2, {}),
    recordingKey: "toolShapeLine"
  },
  ARROW: {
    toolId: DesignGraphElements.SHAPE_ARROW,
    getText: () => getI18nString("fullscreen_actions.set-tool-arrow"),
    icon: jsx(_$$F, {}),
    smallIcon: jsx(_$$E, {}),
    recordingKey: "toolShapeArrow"
  },
  ELLIPSE: {
    toolId: DesignGraphElements.SHAPE_ELLIPSE,
    getText: () => getI18nString("fullscreen_actions.set-tool-ellipse"),
    icon: jsx(_$$m, {}),
    smallIcon: jsx(_$$B, {}),
    recordingKey: "toolShapeEllipse"
  },
  REGULAR_POLYGON: {
    toolId: DesignGraphElements.SHAPE_REGULAR_POLYGON,
    getText: () => getI18nString("fullscreen_actions.set-tool-regular-polygon"),
    icon: jsx(_$$o, {}),
    smallIcon: jsx(_$$h3, {}),
    recordingKey: "toolShapePolygon"
  },
  STAR: {
    toolId: DesignGraphElements.SHAPE_STAR,
    getText: () => getI18nString("fullscreen_actions.set-tool-star"),
    icon: jsx(e, {}),
    smallIcon: jsx(_$$Z, {}),
    recordingKey: "toolShapeStar"
  },
  IMAGE_OR_VIDEO: {
    toolId: DesignGraphElements.IMAGE_OR_VIDEO,
    getText: () => getI18nString("fullscreen_actions.place_image_or_video"),
    icon: jsx(_$$T, {}),
    smallIcon: jsx(_$$s, {}),
    recordingKey: "image-tool"
  },
  PEN: {
    toolId: DesignGraphElements.VECTOR_PEN,
    getText: () => getI18nString("fullscreen_actions.set-tool-pen"),
    icon: jsx(_$$N, {}),
    smallIcon: jsx(_$$k, {}),
    recordingKey: "toolPen"
  },
  PENCIL: {
    toolId: DesignGraphElements.VECTOR_PENCIL,
    getText: () => getI18nString("fullscreen_actions.set-tool-pencil"),
    icon: jsx(_$$L, {}),
    smallIcon: jsx(_$$A, {}),
    recordingKey: "toolPencil"
  },
  COMMENTS: {
    toolId: DesignGraphElements.COMMENTS,
    getText: e => e ? getI18nString("dev_handoff.workflows.focus_view.reset_comments_tooltip") : getI18nString("fullscreen_actions.comment"),
    getIcon: ({
      numUnreadComments: e
    }) => e > 0 ? jsx(_$$X, {}) : jsx(_$$f, {}),
    smallIcon: jsx(_$$S, {}),
    recordingKey: "toolComment",
    hideShortcutWhenInteractiveFocus: !0
  },
  MEASURE: {
    toolId: DesignGraphElements.MEASURE,
    getText: e => e ? getI18nString("dev_handoff.workflows.focus_view.reset_measurement_tooltip") : getI18nString("fullscreen_actions.set-tool-measure"),
    icon: jsx(k, {}),
    smallIcon: jsx(_$$L2, {}),
    recordingKey: "toolMeasure",
    onboardingKey: "tool-measurements-onboarding",
    hideShortcutWhenInteractiveFocus: !0
  },
  ANNOTATE: {
    toolId: DesignGraphElements.ANNOTATE,
    getText: e => e ? getI18nString("dev_handoff.workflows.focus_view.reset_annotation_tooltip") : getI18nString("fullscreen_actions.set-tool-annotate"),
    icon: jsx(_$$K, {}),
    smallIcon: jsx(r, {}),
    recordingKey: "toolAnnotate",
    onboardingKey: "tool-annotations-onboarding",
    hideShortcutWhenInteractiveFocus: !0
  },
  SELECT: {
    toolId: DesignGraphElements.SELECT,
    getText: () => getI18nString("fullscreen_actions.set-tool-default"),
    icon: jsx(_$$H, {}),
    smallIcon: jsx(_$$y2, {}),
    recordingKey: "toolDefault"
  },
  HAND: {
    toolId: DesignGraphElements.HAND,
    getText: () => getI18nString("fullscreen_actions.set-tool-hand"),
    icon: jsx(t, {}),
    smallIcon: jsx(_$$O, {}),
    recordingKey: "toolHand"
  },
  SCALE: {
    toolId: DesignGraphElements.SCALE,
    getText: () => getI18nString("fullscreen_actions.set-tool-scale"),
    icon: jsx(_$$a, {}),
    smallIcon: jsx(_$$l, {}),
    recordingKey: "toolScale"
  },
  TYPE: {
    toolId: DesignGraphElements.TYPE,
    getText: () => getI18nString("fullscreen_actions.set-tool-type"),
    icon: jsx(_$$B2, {}),
    recordingKey: "toolType",
    onboardingKey: "tool-type-onboarding"
  },
  CODE_COMPONENT: {
    toolId: DesignGraphElements.CODE_COMPONENT,
    getText: () => getI18nString("fullscreen_actions.set-tool-code-component"),
    icon: jsx(_$$C, {}),
    smallIcon: jsx(_$$t, {}),
    recordingKey: "toolCodeComponent"
  }
};
export function $$e00(e) {
  let {
    toolbeltMode,
    topLevelMode,
    activateTool,
    showDisabledTools,
    suppressRecordingKeys
  } = e;
  let d = n6();
  let c = function () {
    let e = XZ();
    let t = _$$k3();
    let r = WN();
    return useCallback(n => {
      if (null !== n && t) {
        r("TOOLGROUP_CHEVRON");
        return;
      }
      e(n);
    }, [t, r, e]);
  }();
  let {
    activeToolId,
    editModeType
  } = rM(_$$u, c);
  let _ = topLevelMode === ViewType.LAYOUT;
  let h = topLevelMode === ViewType.DEV_HANDOFF;
  let m = topLevelMode === ViewType.HISTORY || editModeType === LayoutTabType.DEV_HANDOFF_HISTORY;
  let g = "illustration" === toolbeltMode;
  let f = _$$z(editModeType);
  let E = _Y();
  let y = L4();
  let b = useAtomWithSubscription(wg);
  let T = useAtomWithSubscription(Bu);
  let I = useSelector(e => e.leftPanel);
  let {
    showPublish
  } = _$$U();
  let v = e => {
    if (!suppressRecordingKeys) return generateRecordingKey("toolbarView", e);
  };
  let A = uh(h);
  let x = AE();
  let N = _$$k3();
  let C = xo();
  let w = AP();
  let O = to();
  let R = WN();
  let D = e => getFilteredFeatureFlags().ce_il_vem_move && w && e === DesignGraphElements.SELECT;
  let k = e => !D(e);
  let M = e => {
    D(e) && fullscreenValue.triggerAction("leave-edit-mode");
    activateTool(e);
  };
  let F = ({
    toolId: e,
    icon: t,
    recordingKey: r,
    onboardingKey: i,
    getText: a,
    hideShortcutWhenInteractiveFocus: o
  }, {
    disabled: l,
    showActiveTheme: d,
    isInteractiveFocus: c
  } = {}) => jsx(_$$N2, {
    activeToolId,
    canBeActive: k(e),
    disabled: l && !d,
    icon: t,
    onActivateTool: activateTool,
    onboardingKey: i,
    recordingKey: v(r),
    toolId: e,
    tooltipShortcut: o && l ? void 0 : A(e),
    tooltipText: a(c)
  });
  let j = ({
    tools: e,
    overlayId: t,
    recordingKey: r,
    tooltipText: i,
    onboardingKey: a,
    chevronOnboardingKey: s
  }, {
    disabled: o,
    showActiveTheme: l
  } = {}) => {
    let c;
    let p = e.map(e => {
      let {
        getText,
        getIcon,
        ...n
      } = e;
      return {
        ...n,
        shortcutText: A(n.toolId),
        text: getText(),
        icon: getIcon ? getIcon({
          numUnreadComments: d
        }) : n.icon
      };
    });
    activeToolId && k(activeToolId) && (c = activeToolId);
    return jsx(_$$I, {
      activeToolId: c,
      chevronOnboardingKey: s,
      disabled: o && !l,
      items: p,
      onActivateTool: M,
      onboardingKey: a,
      overlayId: t,
      recordingKey: r ? v(r) : void 0,
      tooltipText: i
    });
  };
  let U = {
    tools: [eQ.SELECT, eQ.HAND, eQ.SCALE],
    overlayId: _$$M.SelectTools,
    recordingKey: "moveFlyout",
    tooltipText: getI18nString("fullscreen.flyout.move_tools")
  };
  let B = {
    tools: [eQ.FRAME, eQ.SECTION, eQ.SLICE],
    overlayId: _$$M.FrameTools,
    recordingKey: "regionFlyout",
    tooltipText: getI18nString("fullscreen.flyout.region_tools"),
    onboardingKey: "frame"
  };
  let G = {
    tools: [eQ.RECTANGLE, eQ.LINE, eQ.ARROW, eQ.ELLIPSE, eQ.REGULAR_POLYGON, eQ.STAR, eQ.IMAGE_OR_VIDEO],
    overlayId: _$$M.ShapeTools,
    recordingKey: "shapeFlyout",
    tooltipText: getI18nString("fullscreen.flyout.shape_tools")
  };
  let V = {
    tools: [eQ.PEN, eQ.PENCIL],
    overlayId: _$$M.PenTools,
    recordingKey: "penFlyout",
    tooltipText: getI18nString("fullscreen.flyout.drawing_tools")
  };
  let H = {
    tools: [eQ.COMMENTS, eQ.ANNOTATE, eQ.MEASURE],
    overlayId: _$$M.CommentTools,
    recordingKey: "commentsFlyout",
    tooltipText: getI18nString("fullscreen.flyout.comment_tools")
  };
  let z = ({
    disabled: e,
    showActiveTheme: t
  } = {}) => F(eQ.TYPE, {
    disabled: e,
    showActiveTheme: t
  });
  let W = ({
    disabled: e,
    showActiveTheme: t
  } = {}) => F(eQ.CODE_COMPONENT, {
    disabled: e,
    showActiveTheme: t
  });
  let K = ({
    disabled: e,
    showActiveTheme: t
  } = {}) => jsx(_$$N2, {
    toolId: _$$y4,
    icon: jsx(_$$_, {}),
    onActivateTool: N ? () => R("QUICK_ACTIONS_TOOL") : () => $v("toggle-menu"),
    activeToolId: T ? _$$y4 : activeToolId,
    tooltipText: getI18nString("qa.extensions.tooltip_actions"),
    tooltipShortcut: x("toggle-menu"),
    onboardingKey: Ij,
    disabled: e && !t
  });
  let Y = jsxs(Fragment, {
    children: [jsx(_$$X2, {
      extended: !0
    }), O ? F(eQ.FRAME) : j(B, {
      disabled: !0,
      showActiveTheme: N
    }), j(G, {
      disabled: !0,
      showActiveTheme: N
    }), j(V, {
      disabled: !0,
      showActiveTheme: N
    }), z({
      disabled: !0,
      showActiveTheme: N
    }), W({
      disabled: !0,
      showActiveTheme: N
    }), K({
      disabled: !0,
      showActiveTheme: N
    })]
  });
  let eb = h ? "dev-handoff" : g ? "sulli" : "design";
  let eO = hv({
    isEnabledForViewers: !1
  }) || m;
  let eR = isDevModeFocusViewActive();
  return jsxs(kF, {
    editorTheme: eb,
    children: [jsxs("div", {
      className: _$$H2,
      "data-onboarding-key": _D,
      children: [_ && j(U), h && F({
        ...eQ.SELECT,
        text: getI18nString("fullscreen_actions.set-tool-default-dev-handoff")
      }), f && jsxs(Fragment, {
        children: [F(eQ.SELECT), F(eQ.HAND)]
      }), g && !eO && jsxs(Fragment, {
        children: [jsx(_$$X2, {
          extended: !0
        }), jsx(eq, {}), jsx(_$$X2, {
          extended: !0
        })]
      }), h && F(eQ.DROPPER), _ && !O && j(B), _ && O && F(eQ.FRAME), _ && j(G), _ && !g && j(V, {}), _ && z(), h && y && !m && !(_$$T2() && getFeatureFlags().dt_vscode_ready_for_dev) && jsxs(Fragment, {
        children: [F(eQ.MEASURE, {
          disabled: eR,
          isInteractiveFocus: eR
        }), F(eQ.ANNOTATE, {
          disabled: eR,
          isInteractiveFocus: eR
        })]
      }), !m && (_ && !g && y ? j(H, {}) : jsx(_$$N2, {
        toolId: DesignGraphElements.COMMENTS,
        icon: d > 0 && !C ? jsx(_$$X, {}) : jsx(_$$f, {}),
        onActivateTool: activeToolId === DesignGraphElements.COMMENTS ? () => activateTool(DesignGraphElements.SELECT) : activateTool,
        activeToolId,
        recordingKey: v("toolComment"),
        tooltipText: C ? getI18nString("fullscreen_actions.comments-disabled") : eR ? getI18nString("dev_handoff.workflows.focus_view.reset_comments_tooltip") : getI18nString("fullscreen_actions.comment"),
        tooltipShortcut: C || eR ? "" : A(DesignGraphElements.COMMENTS),
        disabled: C || eR
      })), _ && getFeatureFlags().bake_canvas && W(), _ && K(), f && !b && !showDisabledTools && jsx(_$$F2, {
        disableAutoAppearingTooltips: h
      })]
    }), !h && !!showDisabledTools && Y, _ && E() && (({
      disabled: e,
      showActiveTheme: t
    } = {}) => jsx(_$$y3, {
      onClick: () => showPublish(!1),
      tooltipText: "Browse assets",
      elementId: "toolbelt-action-open-asset-panel",
      isActive: I.activeTab === UserInterfaceElements.ASSETS,
      disabled: e && !t
    }))()]
  });
}
export const R = $$e00;