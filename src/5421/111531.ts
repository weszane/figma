import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, createContext, useContext, cloneElement, useMemo, useCallback, useState, useRef, forwardRef, createRef, useEffect, useLayoutEffect } from "react";
import { k as _$$k } from "../905/443820";
import { Ay, xk } from "@stylexjs/stylex";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { d as _$$d, k as _$$k2 } from "../5421/548912";
import { Y_, p_, l6, Xs, xJ, UL, iK, ZY, qQ, Wn } from "../figma_app/114522";
import { c2 } from "../905/382883";
import { bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { $n } from "../905/521428";
import { f as _$$f } from "../905/167712";
import { K as _$$K } from "../905/443068";
import { O as _$$O } from "../905/365108";
import { x as _$$x } from "../905/149501";
import { a as _$$a } from "../5421/219397";
import { Tj } from "../figma_app/342207";
import { AppStateTsApi, PanelType, Fullscreen, CodeComponentHelper } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { getI18nString, renderI18nText } from "../905/303541";
import { normalizeTrackingEnum, replaceSelection } from "../figma_app/741237";
import { Zk } from "../figma_app/626177";
import { Wv } from "../figma_app/711157";
import { Ct } from "../figma_app/205280";
import { LE } from "../figma_app/427737";
import { q as _$$q, y as _$$y } from "../5421/145480";
import { jD, fj } from "../figma_app/263905";
import { s0 } from "../figma_app/115923";
import { f3, TJ, YD, Vo } from "../figma_app/690664";
import { df } from "../figma_app/202307";
import { Py } from "../figma_app/251814";
import { cu } from "../figma_app/139865";
import V from "../vendor/241899";
import { debugState } from "../905/407919";
import { ds } from "../figma_app/314264";
import { SourceMapConsumer } from "../vendor/956116";
import { createPortal } from "../vendor/944059";
import { sH, gn } from "../5421/58503";
import { XH, zV, fl, pn } from "../1156/993639";
import { useDispatch } from "react-redux";
import Y from "classnames";
import { wY } from "../figma_app/708845";
import { VisualBellActions } from "../905/302958";
import { c as _$$c } from "../7a72fc59/376662";
import { Fk } from "../figma_app/167249";
import { $5 } from "../figma_app/504321";
import { q as _$$q2 } from "../5421/116496";
import { D as _$$D2 } from "../figma_app/446411";
import { a as _$$a2 } from "../905/558168";
import { Q as _$$Q } from "../figma_app/447352";
import { $ as _$$$ } from "../905/945083";
import { w as _$$w } from "../905/879280";
import { t as _$$t2 } from "../905/54003";
import { ar } from "../7a72fc59/842982";
import { MIXED_MARKER, isInvalidValue, isValidValue } from "../905/216495";
import { Ib } from "../905/129884";
import { gq } from "../figma_app/178475";
import { U1 } from "../figma_app/343967";
import { W1 } from "../figma_app/439493";
import { xE } from "../figma_app/581520";
import { cY, UU, BN } from "../vendor/343575";
import { fP, mc as _$$mc } from "../905/691059";
import { R as _$$R } from "../7a72fc59/583347";
import { throwTypeError, assert } from "../figma_app/465776";
import { Ay as _$$Ay } from "../vendor/917855";
import { analyticsEventManager } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { A as _$$A } from "../7a72fc59/43307";
import { Ku } from "../figma_app/740163";
import { Ou, qg } from "../figma_app/385874";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { S7 } from "../figma_app/259578";
import { n1 } from "../905/698732";
import { tb as _$$tb } from "../figma_app/703447";
import { O as _$$O2 } from "../905/969533";
import { permissionScopeHandler } from "../905/189185";
import { h as _$$h2 } from "../905/207101";
import { u1, XE } from "../figma_app/91703";
import { Qr } from "../905/690539";
import { Xo } from "../figma_app/482495";
import { pn as _$$pn } from "../905/714538";
import { VZ } from "../905/959568";
import { Cn } from "../905/882267";
import { UG } from "../figma_app/628987";
import { FF } from "../905/556648";
import { E as _$$E } from "../905/632989";
import { xF, m$, DY, HL } from "../5421/389127";
import { Y as _$$Y } from "../905/1768";
import { s as _$$s } from "../905/551945";
import { oW } from "../905/675859";
import { A as _$$A2 } from "../905/639174";
import { xp } from "../905/966582";
import { z as _$$z } from "../905/634240";
import { R as _$$R3 } from "../905/726507";
import { s as _$$s2 } from "../8826/112372";
import { y as _$$y2 } from "../905/672706";
import { K as _$$K2 } from "../905/796744";
import { R as _$$R4 } from "../905/912455";
import { z as _$$z2 } from "../905/639107";
import { M as _$$M } from "../905/702374";
import { v as _$$v } from "../905/181101";
import { h as _$$h3 } from "../905/513745";
import { N as _$$N } from "../905/568293";
import { K as _$$K3 } from "../905/459096";
import { h as _$$h4 } from "../905/123399";
import { W as _$$W } from "../7a72fc59/509666";
import { noop } from "../905/253683";
import { s as _$$s3 } from "../905/702260";
import { W as _$$W2 } from "../905/378870";
import { f as _$$f2 } from "../905/335032";
import { x as _$$x2 } from "../905/587214";
import { L as _$$L } from "../905/408237";
import { lQ } from "../905/934246";
import { bL as _$$bL, c$ as _$$c$ } from "../905/867927";
import { q as _$$q3 } from "../905/932270";
import { G as _$$G } from "../905/865520";
import { T as _$$T } from "../905/2124";
import { V as _$$V } from "../905/802779";
import { lV, r9 } from "../figma_app/617606";
import { W as _$$W3 } from "../9410/92046";
import { d as _$$d2 } from "../1006/820986";
import { isWhitespace } from "../figma_app/930338";
import { useCurrentFileKey } from "../figma_app/516028";
import { KP } from "../figma_app/440875";
import { selectCurrentUser } from "../905/372672";
import { e as _$$e, $v } from "../figma_app/259678";
import { Xu } from "../figma_app/588582";
import { $W, Z3 } from "../figma_app/325537";
import { tk as _$$tk } from "../figma_app/883638";
import { E as _$$E2 } from "../1156/200958";
import { P as _$$P } from "../1156/852405";
import { u as _$$u } from "../1156/115781";
import { Oz } from "../1156/354790";
import { ry } from "../figma_app/408883";
import { F as _$$F2 } from "../1156/649032";
import { jT, I4, IO, S4, H1, wE, gz, pO, GW, cH, jS } from "../figma_app/302802";
import { eY as _$$eY } from "../figma_app/616261";
import { logError } from "../905/714362";
import { a as _$$a3 } from "../5421/59825";
import { W as _$$W4 } from "../figma_app/331365";
import { T as _$$T2 } from "../5421/986644";
import { bB } from "../figma_app/609511";
import { r as _$$r } from "../5421/109125";
import { l as _$$l } from "../1156/926585";
import { _ as _$$_ } from "../5421/566691";
import { f as _$$f3 } from "../905/54715";
let y = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7.5 7h9a.5.5 0 0 1 .5.5V14H7V7.5a.5.5 0 0 1 .5-.5M6 15V7.5A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5zm11 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V15z",
      clipRule: "evenodd"
    })
  });
});
var B = V;
class F {
  constructor() {
    this.buildMetadata = null;
    this.initTime = performance.now();
    this.timingMap = {
      code_bundle_start: null,
      code_bundle_stop: null,
      preview_website_bundle_start: null,
      preview_website_bundle_stop: null,
      asset_generation_start: null,
      asset_generation_stop: null,
      render_start: null,
      render_stop: null
    };
  }
  record(e) {
    this.timingMap[e] = performance.now();
  }
  setBuildMetadata(e) {
    this.buildMetadata = e;
  }
  trackFigmentEvent() {
    let {
      code_bundle_start,
      code_bundle_stop,
      preview_website_bundle_start,
      preview_website_bundle_stop,
      asset_generation_start,
      asset_generation_stop,
      render_start,
      render_stop
    } = this.timingMap;
    let s = debugState.getState();
    let d = this.buildMetadata?.isBuildSuccessful ? render_stop : code_bundle_stop;
    ds("code_component_preview_perf", s.openFile?.key, B()(s, ["selectedView", "fileByKey"]), {
      total_build_and_render_ms: d && d - this.initTime,
      bundle_code_ms: code_bundle_start && code_bundle_stop && code_bundle_stop - code_bundle_start,
      preview_website_bundle_ms: preview_website_bundle_start && preview_website_bundle_stop && preview_website_bundle_stop - preview_website_bundle_start,
      asset_generation_ms: asset_generation_start && asset_generation_stop && asset_generation_stop - asset_generation_start,
      render_ms: render_start && render_stop && render_stop - render_start,
      is_build_successful: this.buildMetadata?.isBuildSuccessful,
      error_message: this.buildMetadata?.errorMessage,
      bundle_js_length: this.buildMetadata?.bundleJsLength,
      bundle_css_length: this.buildMetadata?.bundleCssLength,
      total_library_code_files: this.buildMetadata?.totalCodeFiles,
      total_library_code_file_lines: this.buildMetadata?.totalCodeFileLines,
      total_library_image_imports: this.buildMetadata?.totalImageImports
    }, {
      forwardToDatadog: !0
    });
  }
}
async function $(e, t) {
  if (!e || !t) return e;
  try {
    let n = JSON.parse(t);
    let o = await new SourceMapConsumer(n);
    let i = e.split("\n").map(e => {
      let t;
      let n = (t = e.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/)) ? {
        fnName: t[1],
        fileName: t[2],
        lineNumber: parseInt(t[3], 10),
        columnNumber: parseInt(t[4], 10)
      } : (t = e.match(/at\s+?(.+?):(\d+):(\d+)/)) ? {
        fnName: void 0,
        fileName: t[1],
        lineNumber: parseInt(t[2], 10),
        columnNumber: parseInt(t[3], 10)
      } : null;
      if (!n) return e;
      let i = o.originalPositionFor({
        line: n.lineNumber,
        column: n.columnNumber
      });
      return i.source && null !== i.line ? n.fnName ? `    at ${n.fnName} (${i.source}:${i.line}:${i.column || 0}${i.name ? ` [${i.name}]` : ""})` : `    at ${i.source}:${i.line}:${i.column || 0}${i.name ? ` [${i.name}]` : ""}` : null;
    }).filter(e => null !== e);
    let r = i.findIndex(e => e.includes("figma:react-base"));
    if (-1 !== r) return i.slice(0, r).join("\n");
    return i.join("\n");
  } catch (t) {
    console.warn("Error applying sourcemap:", t);
    return e;
  }
}
var q = Y;
function eg({
  children: e,
  menuRef: t
}) {
  let n = U1(t);
  return jsx("div", {
    "data-is-figmake": "true",
    className: xE,
    children: jsx(W1, {
      menuRef: n,
      darkModePreferred: !0,
      editorTheme: "seascape",
      children: e
    })
  });
}
let ey = createContext(null);
function ef() {
  let e = useContext(ey);
  if (!e) throw Error("useToolbarContext must be used within a ToolbarProvider");
  return e;
}
function e_({
  children: e,
  ...t
}) {
  return jsx(ey.Provider, {
    value: t,
    children: e
  });
}
function eC({
  target: e,
  children: t
}) {
  let {
    directManipulationEditor
  } = ef();
  let [r, a] = XH(directManipulationEditor);
  let {
    getContainerProps,
    getTriggerProps
  } = fP({
    type: "menu",
    isOpen: r,
    onOpenChange: a,
    softDismiss: !0,
    placement: "bottom",
    middleware: [cY({
      mainAxis: 16
    }), UU({
      padding: 16
    }), BN()]
  });
  let d = cloneElement(e, {
    ...getTriggerProps()
  });
  return jsxs("div", {
    children: [jsx(_$$R, {
      children: d
    }), jsx(_$$mc, {
      ...getContainerProps(),
      children: t
    })]
  });
}
let eE = {
  scrubbableInputIconWrapper: {
    pointerEvents: "x47corl",
    $$css: !0
  }
};
let ej = {
  dimensionContainer: {
    display: "xrvj5dj",
    gap: "x167g77z",
    alignItems: "x6s0dn4",
    justifyItems: "x619ttb",
    width: "xh8yej3",
    $$css: !0
  },
  dimensionContainerExpanded: {
    gridTemplateColumns: "xbyi07e",
    $$css: !0
  },
  dimensionContainerExpandedWithReset: {
    gridTemplateColumns: "xm8sf7i",
    $$css: !0
  },
  dimensionContainerCollapsed: {
    gridTemplateColumns: "x16zb2db",
    $$css: !0
  },
  dimensionContainerCollapsedWithReset: {
    gridTemplateColumns: "x1yv05lk",
    $$css: !0
  },
  container: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    padding: "xc7ga6q",
    paddingRight: "xy13l1i",
    gap: "x167g77z",
    width: "xafpxmx",
    boxSizing: "x9f619",
    $$css: !0
  },
  containerWithReset: {
    width: "x1dz1jew",
    $$css: !0
  }
};
let eN = ["border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "border-start-start-radius", "border-start-end-radius", "border-end-start-radius", "border-end-end-radius"];
function eT() {
  let {
    directManipulationEditor
  } = ef();
  let [t] = XH(directManipulationEditor);
  return jsx(eC, {
    target: jsx(ar, {
      "aria-label": getI18nString("figmake.toolbar.corner_radius"),
      tooltip: getI18nString("figmake.toolbar.corner_radius"),
      tooltipType: Ib.TEXT,
      showCaret: !0,
      isActive: t,
      children: jsx(_$$a2, {})
    }),
    children: jsx(eS, {})
  });
}
function eS() {
  let e = getFeatureFlags().click_to_inspect_reset_styles;
  let t = Ay.props(ej.dimensionContainer, e ? ej.dimensionContainerExpandedWithReset : ej.dimensionContainerExpanded);
  let n = Ay.props(ej.dimensionContainer, e ? ej.dimensionContainerCollapsedWithReset : ej.dimensionContainerCollapsed);
  let r = Ay.props(ej.container, e && ej.containerWithReset);
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let d = useDispatch();
  let c = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits);
  let p = parseInt(c["border-top-left-radius"] ?? "0", 10);
  let u = parseInt(c["border-top-right-radius"] ?? "0", 10);
  let m = parseInt(c["border-bottom-left-radius"] ?? "0", 10);
  let x = parseInt(c["border-bottom-right-radius"] ?? "0", 10);
  let g = useMemo(() => ({
    "top-left": p,
    "top-right": u,
    "bottom-left": m,
    "bottom-right": x
  }), [p, u, m, x]);
  let y = zV(directManipulationEditor, eN);
  let f = useCallback(() => {
    classNameEditingController.resetClassNamesForPropertiesAndCommitToCode(eN);
  }, [classNameEditingController]);
  let _ = g["top-left"] === g["top-right"] && g["top-left"] === g["bottom-left"] && g["top-left"] === g["bottom-right"];
  let b = _ ? g["top-left"] : MIXED_MARKER;
  let [v, I] = useState(!_);
  let N = useMemo(() => jsx(ar, {
    "aria-label": getI18nString("figmake.toolbar.corner_radius.individual_corner_radius"),
    tooltip: getI18nString("figmake.toolbar.corner_radius.individual_corner_radius"),
    tooltipType: Ib.TEXT,
    isActive: v,
    onClick: () => I(e => !e),
    children: jsx(_$$Q, {
      ...Ay.props(eE.scrubbableInputIconWrapper)
    })
  }), [v]);
  let T = useCallback((e, t) => {
    let n = function (e) {
      let t = e["top-left"] === e["top-right"];
      let n = e["bottom-left"] === e["bottom-right"];
      let o = e["top-left"] === e["bottom-left"];
      let i = e["top-right"] === e["bottom-right"];
      if (e["top-left"] === e["top-right"] && e["top-left"] === e["bottom-left"] && e["top-left"] === e["bottom-right"]) {
        let t = e["top-left"];
        let n = `${t}px`;
        return [{
          className: `rounded-[${t}px]`,
          cssRules: [{
            property: "border-radius",
            propertiesExpandedFromShorthand: ["border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"],
            value: n,
            computedStylesValue: n
          }]
        }];
      }
      return t && n ? ["top", "bottom"].map(t => {
        let n = e[`${t}-left`];
        let o = `${n}px`;
        let i = t[0];
        return {
          className: `rounded-${i}-[${n}px]`,
          cssRules: [{
            property: `border-${t}-left-radius`,
            propertiesExpandedFromShorthand: [],
            value: o,
            computedStylesValue: o
          }, {
            property: `border-${t}-right-radius`,
            propertiesExpandedFromShorthand: [],
            value: o,
            computedStylesValue: o
          }]
        };
      }) : o && i ? ["left", "right"].map(t => {
        let n = e[`top-${t}`];
        let o = `${n}px`;
        let i = t[0];
        return {
          className: `rounded-${i}-[${n}px]`,
          cssRules: [{
            property: `border-top-${t}-radius`,
            propertiesExpandedFromShorthand: [],
            value: o,
            computedStylesValue: o
          }, {
            property: `border-bottom-${t}-radius`,
            propertiesExpandedFromShorthand: [],
            value: o,
            computedStylesValue: o
          }]
        };
      }) : Object.entries(e).map(([e, t]) => {
        let n = e.split("-").map(e => e[0]).join("");
        let o = `${t}px`;
        return {
          className: `rounded-${n}-[${t}px]`,
          cssRules: [{
            property: `border-${e}-radius`,
            propertiesExpandedFromShorthand: [],
            value: o,
            computedStylesValue: o
          }]
        };
      });
    }(e);
    classNameEditingController.addClassesToInspectedElements(n, t, "border-radius");
  }, [classNameEditingController]);
  let S = useCallback((e, t) => {
    T({
      ...g,
      ...e
    }, t);
  }, [g, T]);
  let A = e ? jsx($n, {
    variant: "secondary",
    disabled: !y,
    onClick: f,
    children: getI18nString("figmake.toolbar.reset")
  }) : null;
  return jsx(eg, {
    children: jsx("div", {
      ...r,
      children: jsx("div", {
        className: "x78zum5 xdt5ytf x167g77z",
        children: v ? jsxs("div", {
          ...t,
          children: [jsx(gq, {
            value: g["top-left"],
            dispatch: d,
            onValueChange: (e, t) => {
              S({
                "top-left": e
              }, t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.corner_radius.top_left"),
            children: jsx(_$$a2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: g["top-right"],
            dispatch: d,
            onValueChange: (e, t) => {
              S({
                "top-right": e
              }, t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.corner_radius.top_right"),
            children: jsx(_$$$, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), N, A, jsx(gq, {
            value: g["bottom-left"],
            dispatch: d,
            onValueChange: (e, t) => {
              S({
                "bottom-left": e
              }, t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.corner_radius.bottom_left"),
            children: jsx(_$$w, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: g["bottom-right"],
            dispatch: d,
            onValueChange: (e, t) => {
              S({
                "bottom-right": e
              }, t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.corner_radius.bottom_right"),
            children: jsx(_$$t2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          })]
        }) : jsxs("div", {
          ...n,
          children: [jsx(gq, {
            bigNudgeAmount: 10,
            "data-tooltip": getI18nString("figmake.toolbar.corner_radius"),
            "data-tooltip-type": Ib.TEXT,
            dispatch: d,
            onValueChange: (e, t) => {
              S({
                "top-left": e,
                "top-right": e,
                "bottom-left": e,
                "bottom-right": e
              }, t);
            },
            smallNudgeAmount: 1,
            value: b,
            children: jsx(_$$Q, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), N, A]
        })
      })
    })
  });
}
function eB(e) {
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let r = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits);
  let [a] = XH(directManipulationEditor);
  let l = r[e.property];
  let s = useMemo(() => {
    let t;
    if (l && !t) try {
      let e = _$$Ay(l).rgba();
      t = {
        type: "SOLID",
        color: {
          r: e[0] / 255,
          g: e[1] / 255,
          b: e[2] / 255,
          a: e[3]
        },
        opacity: e[3]
      };
    } catch (t) {
      analyticsEventManager.trackDefinedEvent("figmake.color_control_parse_error", {
        color: l,
        property: e.property,
        error: t instanceof Error ? t.message : String(t)
      });
    }
    return t;
  }, [e.property, l]);
  let d = useCallback((n, o = yesNoTrackingEnum.YES) => {
    let i = "bg-";
    "color" === e.property ? i = "text-" : "border-color" === e.property && (i = "border-");
    let r = Math.round(255 * n.r);
    let a = Math.round(255 * n.g);
    let l = Math.round(255 * n.b);
    let s = `rgba(${r},${a},${l},${n.a})`;
    let d = `${i}[${s}]`;
    classNameEditingController.addClassesToInspectedElements([{
      className: d,
      cssRules: [{
        property: e.property,
        propertiesExpandedFromShorthand: [],
        value: s,
        computedStylesValue: s
      }]
    }], o, e.property);
  }, [classNameEditingController, e.property]);
  let c = function (e) {
    switch (e) {
      case "color":
        return getI18nString("figmake.toolbar.font_color");
      case "background-color":
        return getI18nString("figmake.toolbar.background_color");
      case "border-color":
        return getI18nString("figmake.toolbar.border_color");
      default:
        throwTypeError(e);
    }
  }(e.property);
  return jsx(eC, {
    target: jsx(ar, {
      "aria-label": c,
      tooltip: c,
      tooltipType: Ib.TEXT,
      showCaret: !0,
      isActive: a,
      children: jsx(_$$A, {
        paint: s
      })
    }),
    children: jsx(eH, {
      onColorChange: d,
      paint: s
    })
  });
}
function eH({
  paint: e,
  onColorChange: t
}) {
  return jsx(eg, {
    children: jsx(eF, {
      paint: e,
      onChange: t
    })
  });
}
let eU = {
  type: "SOLID",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: 1,
  blendMode: "NORMAL"
};
function eF({
  paint: e,
  onChange: t
}) {
  let n = e ? isInvalidValue(e) ? eU : e : eU;
  let r = Ou(n);
  let a = Ku();
  let {
    currentTool,
    dropdownShown
  } = selectWithShallowEqual(e => ({
    currentTool: e.mirror.appModel.currentTool,
    dropdownShown: e.dropdownShown
  }));
  let d = useDispatch();
  let c = useRef(null);
  return r ? jsx("div", {
    className: n1,
    ref: c,
    children: jsx(S7, {
      canAcceptStyles: !1,
      canAcceptVariables: !1,
      color: r.color,
      colorFormat: a,
      containerRef: c,
      currentTool,
      dispatch: d,
      dropdownShown,
      dropperDisabled: !0,
      onColorChange: t,
      theme: "dark"
    })
  }) : null;
}
let e2 = {
  buttonContainer: {
    height: "xxk0z11",
    borderRadius: "x19y5rnk",
    backgroundColor: "x16qho6y xv2f06h",
    border: "x1bamp8i",
    $$css: !0
  },
  buttonContainer_noBorder: {
    border: "x1gs6z28",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  buttonContainer_active: {
    backgroundColor: "xu5wzci",
    borderColor: "x1fzvlhx",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  buttonContainerLeftPaddingWithoutIconPrefix: {
    paddingLeft: "x8rdmch",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  buttonContainerRightPaddingWithoutIconSuffix: {
    paddingRight: "xctkrei",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
let e3 = forwardRef(function ({
  children: e,
  iconSuffix: t,
  ...n
}, i) {
  return jsx(_$$E, {
    ref: i,
    ...n,
    ...Ay.props(e2.buttonContainer, n["aria-expanded"] ? e2.buttonContainer_active : null, e2.buttonContainer_noBorder, e2.buttonContainerLeftPaddingWithoutIconPrefix, t ? null : e2.buttonContainerRightPaddingWithoutIconSuffix),
    children: jsxs("div", {
      className: "xz16r55 x78zum5 x6s0dn4",
      children: [e, t]
    })
  });
});
let e8 = "rev-font-family-picker";
function e9() {
  let {
    container,
    classNameEditingController,
    directManipulationEditor,
    componentPreview
  } = ef();
  let a = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits);
  let [l, s] = XH(directManipulationEditor);
  let d = createRef();
  let c = xF();
  let p = useMemo(() => _$$pn(c), [c]);
  let u = useDispatch();
  let h = Xo();
  let m = "sans-serif";
  let x = a["font-family"];
  let g = x ? m$(x, m) : m;
  let y = Object.keys(c).some(e => e.toLocaleLowerCase() === g?.toLocaleLowerCase()) ? g : "sans-serif";
  let f = useCallback((t, n) => {
    if (d.current) {
      let {
        x,
        y
      } = VZ(d.current, n);
      let r = container.getBoundingClientRect();
      x < r.left ? o = r.left : x + n > r.left + container.clientWidth && (o = r.left + container.clientWidth - n);
      u(u1({
        id: t,
        initialX: x,
        initialY: y + 16
      }));
    }
  }, [container, u, d]);
  let _ = useCallback(() => {
    u(XE());
  }, [u]);
  let b = useCallback(() => {
    s(!l);
    l ? _() : f(e8, 300);
  }, [_, l, f, s]);
  _$$h2(() => {
    h && h.id === e8 && _();
  });
  useEffect(() => {
    (!h || h.id !== e8) && l && s(!1);
  }, [l, h, s]);
  let v = useRef(null);
  _$$Y(_, {
    closeOnEsc: !0,
    ignore: e => !!(v.current && v.current.contains(e))
  });
  let I = useRef(null);
  let C = useCallback((e, n, o = yesNoTrackingEnum.YES) => {
    let i = DY(e, c);
    if (i) {
      let n = `${FF}/${i.fontId}`;
      let a = _$$tb({
        family: i.fontFamily,
        style: i.styleName,
        url: n
      });
      componentPreview.sendMessage("injectFontLoadingCSS", {
        fontDeduplicationKey: `${i.fontFamily}:${i.styleName}`,
        cssToInject: a
      });
      classNameEditingController.addClassesToInspectedElements([{
        className: `font-[${e.replace(/ /g, "_")}]`,
        cssRules: [{
          property: "font-family",
          propertiesExpandedFromShorthand: [],
          value: e,
          computedStylesValue: e
        }]
      }], o, "font-family");
      normalizeTrackingEnum(o) && permissionScopeHandler.user("direct-manipulation", () => {
        HL(i, I);
      });
    }
  }, [classNameEditingController, componentPreview, c]);
  let T = UG();
  return jsxs(Fragment, {
    children: [jsx(_$$R, {
      children: jsx(e3, {
        "aria-label": getI18nString("figmake.toolbar.font_family"),
        iconSuffix: jsx(_$$O2, {}),
        onClick: b,
        ref: d,
        children: jsx("div", {
          className: "x1f4nttd xuxw1ft xb3r6kr xlyipyv x1dmp6jm",
          children: y
        })
      })
    }), jsx("div", {
      ref: v,
      className: "x1f4nttd x11yfylt",
      children: jsx(Cn, {
        currentFont: y,
        dispatch: u,
        dropdown: null,
        fonts: c,
        googleFontPreviews: T,
        onFontChange: C,
        pickerId: e8,
        pickerShown: h,
        recordingKey: e8,
        restrictedFontSet: Qr.GOOGLE_FONTS,
        selectedNodeIds: [],
        versionsForStyles: p
      })
    })]
  });
}
let to = {
  image: {
    width: "xh8yej3",
    objectFit: "xl1xv1r",
    aspectRatio: "x1y5e3q9",
    $$css: !0
  },
  disabledImage: {
    filter: "xifi7vn",
    opacity: "x1ks1olk",
    $$css: !0
  }
};
function ti() {
  let {
    imageSwapEnabled,
    directManipulationEditor
  } = ef();
  let n = useAtomWithSubscription(directManipulationEditor.selectedElementInfoAtom);
  let [r] = XH(directManipulationEditor);
  let [l, s] = useState();
  let d = l ?? n?.thumbnailSrc ?? n?.imgSrc;
  let c = Ay.props(to.image, !imageSwapEnabled && to.disabledImage);
  let p = imageSwapEnabled ? {} : {
    "--color-icon": Tj.iconDisabled
  };
  return jsx(eC, {
    target: jsx(ar, {
      "aria-label": getI18nString("figmake.toolbar.image"),
      tooltip: getI18nString("figmake.toolbar.image"),
      tooltipType: Ib.TEXT,
      showCaret: !0,
      caretStyle: p,
      isActive: r,
      disabled: !imageSwapEnabled,
      children: jsx("div", {
        className: "xvy4d1p x78zum5 xl56j7k x6s0dn4 xy3p2pi x9f619 xb3r6kr x18xcxx1 xsb15dp",
        children: d ? jsx(oW, {
          src: d,
          alt: getI18nString("figmake.toolbar.image"),
          ...c
        }) : jsx(_$$s, {
          style: void 0
        })
      })
    }),
    children: jsx(tr, {
      currentImage: d,
      setCurrentImage: s
    })
  });
}
function tr({
  currentImage: e,
  setCurrentImage: t
}) {
  let {
    imageEditingController,
    directManipulationEditor
  } = ef();
  let a = useRef(null);
  let l = useCallback(async e => {
    if (e.image) {
      let o = await imageEditingController.updateImage(e, directManipulationEditor.bundledSourceCode, directManipulationEditor.codeFileNodeIdsWithRecentlyAddedImageAssetImports, "upload");
      if (o.success) for (let n of (t(e.image), o.modifiedCodeFileNodeIds)) directManipulationEditor.codeFileNodeIdsWithRecentlyAddedImageAssetImports.add(n);
    }
  }, [imageEditingController, t, directManipulationEditor]);
  let s = useCallback(async e => {
    let t = e.target.files?.[0];
    t && (await _$$z(t, l), a.current && (a.current.value = ""));
  }, [l]);
  return jsxs(eg, {
    children: [jsxs("div", {
      style: {
        backgroundImage: `url('${_$$A2()}')`
      },
      className: "x1n2onr6 x1oysuqx xhjk10j x78zum5 x1sxf85j x1ci220x xl56j7k x6s0dn4 x1hlb6i2 x197sbye",
      children: [jsx("input", {
        type: "file",
        ref: a,
        accept: xp.join(","),
        onChange: s,
        className: "x1s85apg"
      }), jsx(oW, {
        src: e,
        alt: getI18nString("figmake.toolbar.upload_alt"),
        className: "x193iq5w xmz0i5r x19kjcj4 x1tbiz1a x1xsqp64 xiy17q3"
      })]
    }), jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c xur7f20 x1hc1fzr x78zum5 xl56j7k x1o2pa38 x6s0dn4",
      children: jsx($n, {
        variant: "primary",
        onClick: () => {
          a.current?.click();
        },
        type: "submit",
        children: getI18nString("figmake.toolbar.upload")
      })
    })]
  });
}
function tm() {
  let {
    directManipulationEditor
  } = ef();
  let [t] = XH(directManipulationEditor);
  return jsx(eC, {
    target: jsx(ar, {
      "aria-label": getI18nString("figmake.toolbar.spacing"),
      tooltip: getI18nString("figmake.toolbar.spacing"),
      tooltipType: Ib.TEXT,
      showCaret: !0,
      isActive: t,
      children: jsx(_$$R3, {})
    }),
    children: jsx(ty, {})
  });
}
let tx = ["padding-top", "padding-right", "padding-bottom", "padding-left", "padding-inline-start", "padding-inline-end", "padding-block-start", "padding-block-end"];
let tg = ["margin-top", "margin-right", "margin-bottom", "margin-left", "margin-inline-start", "margin-inline-end", "margin-block-start", "margin-block-end"];
function ty() {
  let e = {
    className: "xrvj5dj xbyi07e x167g77z x6s0dn4 x619ttb xh8yej3"
  };
  let t = {
    className: "x1l7klhg xh8yej3 x1f4nttd x78zum5 x1qughib x6s0dn4"
  };
  let n = {
    className: "x78zum5 xdt5ytf x167g77z"
  };
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let s = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits);
  let d = parseInt(s["padding-left"] ?? "0", 10);
  let c = parseInt(s["padding-right"] ?? "0", 10);
  let p = parseInt(s["padding-top"] ?? "0", 10);
  let u = parseInt(s["padding-bottom"] ?? "0", 10);
  let m = parseInt(s["margin-left"] ?? "0", 10);
  let x = parseInt(s["margin-right"] ?? "0", 10);
  let g = parseInt(s["margin-top"] ?? "0", 10);
  let y = parseInt(s["margin-bottom"] ?? "0", 10);
  let f = {
    left: d,
    right: c,
    top: p,
    bottom: u
  };
  let _ = {
    left: m,
    right: x,
    top: g,
    bottom: y
  };
  let b = f.left === f.right;
  let v = f.top === f.bottom;
  let I = b ? f.left : MIXED_MARKER;
  let N = v ? f.top : MIXED_MARKER;
  let T = _.left === _.right;
  let S = _.top === _.bottom;
  let A = T ? _.left : MIXED_MARKER;
  let w = S ? _.top : MIXED_MARKER;
  let [k, P] = useState(!b || !v);
  let [O, L] = useState(!T || !S);
  let D = zV(directManipulationEditor, tx);
  let R = useCallback(() => {
    classNameEditingController.resetClassNamesForPropertiesAndCommitToCode(tx);
  }, [classNameEditingController]);
  let M = zV(directManipulationEditor, tg);
  let V = useCallback(() => {
    classNameEditingController.resetClassNamesForPropertiesAndCommitToCode(tg);
  }, [classNameEditingController]);
  let B = useMemo(() => jsx(ar, {
    "aria-label": getI18nString("figmake.toolbar.padding.individual_paddings"),
    tooltip: getI18nString("figmake.toolbar.padding.individual_paddings"),
    tooltipType: Ib.TEXT,
    isActive: k,
    onClick: () => P(e => !e),
    children: jsx(_$$s2, {})
  }), [k]);
  let H = useMemo(() => jsx(ar, {
    "aria-label": getI18nString("figmake.toolbar.margin.individual_margins"),
    tooltip: getI18nString("figmake.toolbar.margin.individual_margins"),
    tooltipType: Ib.TEXT,
    isActive: O,
    onClick: () => L(e => !e),
    children: jsx(_$$s2, {})
  }), [O]);
  let U = useCallback((e, t, n) => {
    let o = function (e, t) {
      let n = t.left === t.right;
      let o = t.top === t.bottom;
      let i = n && o && t.left === t.top;
      let r = "padding" === e ? "p" : "m";
      if (i) {
        let n = t.left;
        let o = `${n}px`;
        return [{
          className: `${r}-[${n}px]`,
          cssRules: [{
            property: e,
            propertiesExpandedFromShorthand: [`${e}-top`, `${e}-right`, `${e}-bottom`, `${e}-left`],
            value: o,
            computedStylesValue: o
          }]
        }];
      }
      return n && o ? ["x", "y"].map(n => {
        let o = "x" === n;
        let i = o ? t.left : t.top;
        let a = `${i}px`;
        return {
          className: `${r}${n}-[${i}px]`,
          cssRules: [{
            property: o ? `${e}-left` : `${e}-top`,
            propertiesExpandedFromShorthand: [],
            value: a,
            computedStylesValue: a
          }, {
            property: o ? `${e}-right` : `${e}-bottom`,
            propertiesExpandedFromShorthand: [],
            value: a,
            computedStylesValue: a
          }]
        };
      }) : ["top", "right", "bottom", "left"].map(n => {
        let o = t[n];
        let i = `${o}px`;
        let a = n[0];
        return {
          className: `${r}${a}-[${o}px]`,
          cssRules: [{
            property: `${e}-${n}`,
            propertiesExpandedFromShorthand: [],
            value: i,
            computedStylesValue: i
          }]
        };
      });
    }(e, t);
    classNameEditingController.addClassesToInspectedElements(o, n, e);
  }, [classNameEditingController]);
  let F = useCallback((e, t, n, o) => {
    U(n, {
      ...e,
      ...t
    }, o);
  }, [U]);
  let K = useDispatch();
  return jsx(eg, {
    children: jsxs("div", {
      className: "x78zum5 xdt5ytf xc7ga6q xy13l1i x167g77z xafpxmx x9f619",
      children: [jsxs("div", {
        ...n,
        children: [jsxs("div", {
          ...t,
          children: [getI18nString("figmake.toolbar.padding"), getFeatureFlags().click_to_inspect_reset_styles && jsx($n, {
            variant: "secondary",
            disabled: !D,
            onClick: R,
            children: getI18nString("figmake.toolbar.reset")
          })]
        }), k ? jsxs("div", {
          ...e,
          children: [jsx(gq, {
            value: f.left,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                left: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.left"),
            children: jsx(_$$R4, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: f.top,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                top: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.top"),
            children: jsx(_$$z2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), B, jsx(gq, {
            value: f.right,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                right: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.right"),
            children: jsx(_$$M, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: f.bottom,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                bottom: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.bottom"),
            children: jsx(_$$v, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          })]
        }) : jsxs("div", {
          ...e,
          children: [jsx(gq, {
            value: I,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                left: e,
                right: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.horizontal"),
            children: jsx(_$$y2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: N,
            dispatch: K,
            onValueChange: (e, t) => {
              F(f, {
                top: e,
                bottom: e
              }, "padding", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.padding.vertical"),
            children: jsx(_$$K2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), B]
        })]
      }), jsxs("div", {
        ...n,
        children: [jsxs("div", {
          ...t,
          children: [getI18nString("figmake.toolbar.margin"), getFeatureFlags().click_to_inspect_reset_styles && jsx($n, {
            variant: "secondary",
            disabled: !M,
            onClick: V,
            children: getI18nString("figmake.toolbar.reset")
          })]
        }), O ? jsxs("div", {
          ...e,
          children: [jsx(gq, {
            value: _.left,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                left: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.left"),
            children: jsx(_$$R4, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: _.top,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                top: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.top"),
            children: jsx(_$$z2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), H, jsx(gq, {
            value: _.right,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                right: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.right"),
            children: jsx(_$$M, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: _.bottom,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                bottom: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.bottom"),
            children: jsx(_$$v, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          })]
        }) : jsxs("div", {
          ...e,
          children: [jsx(gq, {
            value: A,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                left: e,
                right: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.horizontal"),
            children: jsx(_$$y2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), jsx(gq, {
            value: w,
            dispatch: K,
            onValueChange: (e, t) => {
              F(_, {
                top: e,
                bottom: e
              }, "margin", t);
            },
            smallNudgeAmount: 1,
            bigNudgeAmount: 10,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("figmake.toolbar.margin.vertical"),
            children: jsx(_$$K2, {
              ...Ay.props(eE.scrubbableInputIconWrapper)
            })
          }), H]
        })]
      })]
    })
  });
}
function tC() {
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let n = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits);
  let [r] = XH(directManipulationEditor);
  let a = useMemo(() => ({
    LEFT: {
      label: getI18nString("fullscreen.type_panel.align_left"),
      icon: () => jsx(_$$h3, {})
    },
    CENTER: {
      label: getI18nString("fullscreen.type_panel.align_center"),
      icon: () => jsx(_$$N, {})
    },
    RIGHT: {
      label: getI18nString("fullscreen.type_panel.align_right"),
      icon: () => jsx(_$$K3, {})
    },
    JUSTIFIED: {
      label: getI18nString("inspect_panel.properties.justify"),
      icon: () => jsx(_$$h4, {})
    }
  }), []);
  let l = n["text-align"];
  let s = "LEFT";
  switch (l) {
    case "left":
    default:
      s = "LEFT";
      break;
    case "center":
      s = "CENTER";
      break;
    case "right":
      s = "RIGHT";
      break;
    case "justified":
      s = "JUSTIFIED";
  }
  let d = useCallback(t => {
    let n = t.toLowerCase();
    classNameEditingController.addClassesToInspectedElements([{
      className: function () {
        switch (t) {
          case "LEFT":
            return "text-left";
          case "CENTER":
            return "text-center";
          case "RIGHT":
            return "text-right";
          case "JUSTIFIED":
            return "text-justify";
        }
      }(),
      cssRules: [{
        property: "text-align",
        propertiesExpandedFromShorthand: [],
        value: n,
        computedStylesValue: n
      }]
    }], yesNoTrackingEnum.YES, "text-align");
  }, [classNameEditingController]);
  return jsx(eC, {
    target: jsx(ar, {
      "aria-label": getI18nString("whiteboard.inline_menu.text_alignment"),
      tooltip: getI18nString("whiteboard.inline_menu.text_alignment"),
      tooltipType: Ib.TEXT,
      showCaret: !0,
      isActive: r,
      children: s ? isInvalidValue(s) ? jsx(_$$h3, {}) : a[s].icon() : jsx(_$$h3, {})
    }),
    children: jsx(tE, {
      horizontalAlignment: s,
      horizontalAlignmentOptions: a,
      updateHorizontalAlignment: d
    })
  });
}
function tE({
  horizontalAlignment: e,
  horizontalAlignmentOptions: t,
  updateHorizontalAlignment: n
}) {
  return jsx(eg, {
    children: jsx(_$$W, {
      maxColumns: 4,
      children: jsx(tj, {
        alignment: e,
        alignmentOptions: t,
        onAlignmentChanged: e => n(e, yesNoTrackingEnum.YES)
      })
    })
  });
}
function tj({
  alignment: e,
  alignmentOptions: t,
  onAlignmentChanged: n
}) {
  let r = useMemo(() => Object.entries(t), [t]);
  return jsx(Fragment, {
    children: r.map(([t, {
      label: i,
      icon: r
    }]) => jsx(ar, {
      "aria-label": i,
      isActive: isValidValue(e) && e === t,
      onClick: () => n(t),
      children: r()
    }, t))
  });
}
function tA() {
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let n = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits)["font-weight"];
  let r = !!(n && ("bold" === n || parseInt(n, 10) > 600));
  let a = useCallback(() => {
    let t = !r;
    let n = t ? "bold" : "normal";
    classNameEditingController.addClassesToInspectedElements([{
      className: t ? "font-bold" : "font-normal",
      cssRules: [{
        property: "font-weight",
        propertiesExpandedFromShorthand: [],
        value: n,
        computedStylesValue: n
      }]
    }], yesNoTrackingEnum.YES, "font-weight");
  }, [classNameEditingController, r]);
  return jsx(_$$R, {
    children: jsx(ar, {
      "aria-label": getI18nString("cooper.inline_menu.bold"),
      tooltip: "toggle-bold",
      tooltipType: Ib.LOOKUP,
      isActive: r,
      onClick: a,
      children: jsx(noop, {})
    })
  });
}
function tw() {
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let n = "italic" === useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits)["font-style"];
  let r = useCallback(() => {
    let t = !n;
    let o = t ? "italic" : "normal";
    classNameEditingController.addClassesToInspectedElements([{
      className: t ? "italic" : "not-italic",
      cssRules: [{
        property: "font-style",
        propertiesExpandedFromShorthand: [],
        value: o,
        computedStylesValue: o
      }]
    }], yesNoTrackingEnum.YES, "font-style");
  }, [classNameEditingController, n]);
  return jsx(_$$R, {
    children: jsx(ar, {
      "aria-label": getI18nString("cooper.inline_menu.italic"),
      tooltip: "text-toggle-italic",
      tooltipType: Ib.LOOKUP,
      isActive: n,
      onClick: r,
      children: jsx(_$$s3, {})
    })
  });
}
function tk() {
  let {
    classNameEditingController,
    directManipulationEditor
  } = ef();
  let n = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits)["text-decoration"];
  let r = n?.indexOf("underline") !== -1;
  let a = useCallback(() => {
    let t = !r;
    let n = t ? "underline" : "none";
    classNameEditingController.addClassesToInspectedElements([{
      className: t ? "underline" : "no-underline",
      cssRules: [{
        property: "text-decoration-line",
        propertiesExpandedFromShorthand: [],
        value: n,
        computedStylesValue: n
      }]
    }], yesNoTrackingEnum.YES, "text-decoration");
  }, [classNameEditingController, r]);
  return jsx(_$$R, {
    children: jsx(ar, {
      "aria-label": getI18nString("type_settings.decoration.underline"),
      tooltip: "text-toggle-underline",
      tooltipType: Ib.LOOKUP,
      isActive: r,
      onClick: a,
      children: jsx(_$$W2, {})
    })
  });
}
function tD({
  size: e,
  onSizeChanged: t
}) {
  let n = useRef(isInvalidValue(e) ? null : new tH(e));
  useEffect(() => {
    isInvalidValue(e) ? n.current = null : (n.current || (n.current = new tH(e)), n.current.onCurrentValueUpdated(e));
  }, [e, n]);
  let r = useCallback(() => {
    n.current && t(n.current.prevValue());
  }, [t, n]);
  let a = useCallback(() => {
    n.current && t(n.current.nextValue());
  }, [t, n]);
  let l = "cooperInlineMenuFontSize";
  return jsxs("div", {
    className: "text_size_nudge_input--nudgeInputContainer--KyT8p",
    "data-testid": "cooper-inline-text-size-control",
    children: [jsx(_$$E, {
      className: "text_size_nudge_input--decrementButton--vmC4E text_size_nudge_input--nudgeButtonBase--ctjk3",
      onClick: r,
      disabled: isInvalidValue(e) || e <= tB,
      "aria-label": getI18nString("cooper.inline_menu.decrease_input"),
      recordingKey: `${l}.decrease`,
      children: jsx(_$$f2, {
        width: 16,
        height: 16
      })
    }), jsx("div", {
      className: "text_size_nudge_input--valueDisplayContainer--10GGe",
      children: jsx(tR, {
        size: e,
        onSizeChanged: t,
        recordingKey: l
      })
    }), jsx(_$$E, {
      className: "text_size_nudge_input--incrementButton--f85OX text_size_nudge_input--nudgeButtonBase--ctjk3",
      onClick: a,
      disabled: isInvalidValue(e),
      "aria-label": getI18nString("cooper.inline_menu.increase_input"),
      recordingKey: `${l}.increase`,
      children: jsx(_$$x2, {
        width: 16,
        height: 16
      })
    })]
  });
}
function tR({
  size: e,
  onSizeChanged: t,
  recordingKey: n
}) {
  let r = createRef();
  let [a, l] = useState(tM(e));
  useEffect(() => {
    l(tM(e));
  }, [e]);
  return jsx(_$$L, {
    ref: r,
    className: "text_size_nudge_input--textSizeInput--pGLXJ",
    type: "text",
    value: a,
    recordingKey: n,
    onFocus: () => {
      r.current?.select();
    },
    onChange: e => {
      l(e.target.value);
    },
    onBlur: () => {
      let n = parseFloat(a);
      if (isNaN(n) || n < tB) {
        l(tM(e));
        return;
      }
      t(parseFloat(n.toFixed(2)));
    },
    onKeyDown: e => {
      "Enter" === e.key && e.currentTarget.blur();
    }
  });
}
function tM(e) {
  return isInvalidValue(e) ? getI18nString("common.mixed") : String(Math.round(e));
}
let tV = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 24, 32, 36, 40, 48, 64, 96, 128];
let tB = 1;
class tH {
  constructor(e) {
    this.currentValue = 0;
    this.prevValueIndex = void 0;
    this.nextValueIndex = void 0;
    this.currentValue = e;
    this.textSizePresetsLookup = {};
    tV.forEach((e, t) => {
      this.textSizePresetsLookup[e] = t;
    });
  }
  onCurrentValueUpdated(e) {
    if (e < 1) throw Error(`Text size cannot be less than 1, got ${e}`);
    this.currentValue = e;
    let t = this.textSizePresetsLookup[this.currentValue];
    if (void 0 !== t) {
      let e = t - 1;
      this.prevValueIndex = e < 0 ? void 0 : e;
      let n = t + 1;
      this.nextValueIndex = n >= tV.length ? void 0 : n;
    } else {
      let [e, t] = this.findClosestIndices(tV, this.currentValue);
      this.prevValueIndex = e;
      this.nextValueIndex = t;
    }
  }
  nextValue() {
    if (void 0 !== this.prevValueIndex && void 0 !== this.nextValueIndex) return tV[this.nextValueIndex];
    if (void 0 !== this.prevValueIndex && void 0 === this.nextValueIndex) return this.currentValue + 32;
    if (void 0 === this.prevValueIndex && void 0 !== this.nextValueIndex) {
      let e = tV[0];
      if (this.currentValue === e) return tV[this.nextValueIndex];
      let t = this.currentValue + 1;
      return t >= e ? e : t;
    }
    throw Error("Both next and prev value indices are undefined. Check that you have called onCurrentValueUpdated at least once");
  }
  prevValue() {
    if (void 0 !== this.prevValueIndex && void 0 !== this.nextValueIndex) return tV[this.prevValueIndex];
    if (void 0 !== this.prevValueIndex && void 0 === this.nextValueIndex) {
      let e = tV[tV.length - 1];
      if (this.currentValue === e) return tV[this.prevValueIndex];
      let t = this.currentValue - 32;
      return t <= e ? e : Math.max(t, tB);
    }
    if (void 0 === this.prevValueIndex && void 0 !== this.nextValueIndex) return Math.max(this.currentValue - 1, tB);
    throw Error("Both next and prev value indices are undefined. Check that you have called onCurrentValueUpdated at least once");
  }
  findClosestIndices(e, t) {
    let n = 0;
    let o = e.length - 1;
    if (t < e[n]) return [void 0, 0];
    if (t > e[o]) return [o, void 0];
    for (; n <= o;) {
      let i = Math.floor((n + o) / 2);
      if (e[i] === t) return [i, i];
      e[i] < t ? n = i + 1 : o = i - 1;
    }
    return [o, n];
  }
}
function tU() {
  let {
    directManipulationEditor,
    classNameEditingController
  } = ef();
  let n = useAtomWithSubscription(directManipulationEditor.selectedElementComputedStylesWithLocalEdits)["font-size"];
  let r = n ? parseInt(n, 10) : 16;
  let a = useCallback(e => {
    classNameEditingController.addClassesToInspectedElements([{
      className: `text-[${e}px]`,
      cssRules: [{
        property: "font-size",
        propertiesExpandedFromShorthand: [],
        value: `${e}px`,
        computedStylesValue: `${e}px`
      }]
    }], yesNoTrackingEnum.YES, "font-size");
  }, [classNameEditingController]);
  return jsx(_$$R, {
    children: jsx(tD, {
      size: r,
      onSizeChanged: a
    })
  });
}
var tF = (e => (e.Text = "text", e.Container = "container", e.Border = "border", e.Image = "image", e.Spacing = "spacing", e.Shadow = "shadow", e))(tF || {});
let tK = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "label", "button", "a", "input", "textarea", "select", "option", "ul", "ol", "li"];
let t$ = ["body", "div", "header", "footer", "main", "section", "nav", "article"];
let tz = ["img", "video"];
let tW = {
  image: [...tz],
  text: [...tK],
  container: [...t$, "button"],
  border: [...t$, ...tz, "button", "input", "textarea"],
  spacing: [...tK, ...t$, ...tz],
  shadow: [...t$, ...tz]
};
function tZ() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k xehqz9p",
      children: jsxs("div", {
        className: "xxk0z11 x78zum5 x1q0g3np x6s0dn4 xl56j7k xy6u8y9 x4pvk5x",
        children: [jsx(e9, {}), jsx("div", {
          className: "x5yr21d x1i1rx1s xq5lo5s"
        }), jsx("div", {
          className: "x1x862rh",
          children: jsx(eB, {
            property: "color"
          })
        })]
      })
    }), jsx(_$$c, {}), jsx(tU, {}), jsx(_$$c, {}), jsx(tA, {}), jsx(tw, {}), jsx(tk, {}), jsx(_$$c, {}), jsx(tC, {})]
  });
}
function tG() {
  return jsx(Fragment, {
    children: jsx(eB, {
      property: "background-color"
    })
  });
}
function tY() {
  return jsx(Fragment, {
    children: jsx(eT, {})
  });
}
function tq() {
  return jsx(Fragment, {
    children: jsx(tm, {})
  });
}
function tX() {
  return jsx(Fragment, {
    children: jsx(ti, {})
  });
}
function tJ() {
  let {
    directManipulationEditor
  } = ef();
  let {
    handleHtmlToDesign,
    isProcessing
  } = _$$q();
  let r = useCallback(() => {
    let n = atomStoreManager.get(directManipulationEditor.selectedElementIdAtom);
    assert(null !== n);
    handleHtmlToDesign({
      mode: _$$y.API,
      selectedElementId: n,
      target: "clipboard"
    });
  }, [handleHtmlToDesign, directManipulationEditor]);
  return getFeatureFlags().bake_m2d ? jsx(_$$R, {
    children: jsx(ar, {
      "aria-label": getI18nString("sites.panel.copy_make_as_design"),
      tooltip: getI18nString("sites.panel.copy_make_as_design"),
      tooltipType: Ib.TEXT,
      onClick: r,
      disabled: isProcessing,
      children: jsx(_$$a, {})
    })
  }) : null;
}
let t5 = {
  disabledIcon: {
    "--color-icon": "xz8z4lq",
    $$css: !0
  },
  selectedIcon: {
    "--color-icon": "x1aue78i",
    backgroundColor: "xcr9a89",
    borderRadius: "x4pvk5x",
    boxShadow: "xx9uh04",
    $$css: !0
  }
};
function t6({
  value: e,
  setValue: t,
  disabled: n
}) {
  let i = jsx("div", {
    ...Ay.props(n ? t5.disabledIcon : "style" === e ? t5.selectedIcon : t5.disabledIcon),
    children: jsx(_$$G, {})
  });
  let r = jsx("div", {
    ...Ay.props(n ? t5.disabledIcon : "prompt" === e ? t5.selectedIcon : t5.disabledIcon),
    children: jsx(_$$T, {})
  });
  return jsx(_$$R, {
    children: jsxs(_$$bL, {
      value: e,
      onChange: n ? lQ : t,
      legend: jsx(_$$q3, {
        children: getI18nString("figmake.toolbar.toggle_style")
      }),
      children: [jsx(_$$c$, {
        value: "style",
        icon: i,
        "aria-label": n ? getI18nString("figmake.toolbar.classnameEditingDisabled") : getI18nString("figmake.toolbar.toggle_style")
      }), jsx(_$$c$, {
        value: "prompt",
        icon: r,
        "aria-label": n ? getI18nString("figmake.toolbar.classnameEditingDisabled") : getI18nString("figmake.toolbar.toggle_prompt")
      })]
    })
  });
}
function t9() {
  let {
    directManipulationEditor
  } = ef();
  let t = useAtomWithSubscription(directManipulationEditor.editingSnippetAtom, {
    deferToFrame: !0
  }).snippet;
  let n = useCallback(() => {
    directManipulationEditor.goToSource();
  }, [directManipulationEditor]);
  return jsx(_$$R, {
    children: jsx(ar, {
      "aria-label": getI18nString("figmake.toolbar.goToSource"),
      tooltip: getI18nString("figmake.toolbar.goToSource"),
      tooltipType: Ib.TEXT,
      onClick: n,
      disabled: !t,
      children: jsx(_$$V, {})
    })
  });
}
let ng = {
  buttonContainer: {
    borderRadius: "x16rqkct",
    flexShrink: "x2lah0s",
    $$css: !0
  },
  buttonBrand: {
    backgroundColor: "xu5wzci",
    $$css: !0
  },
  buttonDisabled: {
    backgroundColor: "xgbcquw",
    $$css: !0
  }
};
function ny({
  disabled: e,
  codeNodeId: t
}) {
  let [n, r] = useState("");
  let {
    selectedElement,
    selectedElementCodeSnippet
  } = fl();
  let [c, p] = jT();
  let {
    setChatError,
    clearChatError
  } = _$$tk(t);
  let m = selectCurrentUser();
  let g = useCurrentFileKey();
  let y = Xu();
  let f = useMemo(() => getSingletonSceneGraph().get(t), [t]);
  let _ = useIsSelectedFigmakeFullscreen();
  let b = _ ? lV.FIGMAKE : lV.CODE_IN_SITES;
  let {
    changedFiles
  } = _$$E2(f, b, {
    shouldIncludeFile: _ ? e => e !== _$$e : void 0
  });
  let C = _$$P();
  let N = (e, t) => {
    let o = e.plainText;
    o || (o = e.hidden ? "" : n);
    let i = {
      ...e,
      plainText: o
    };
    r("");
    return Oz({
      featureType: b,
      userMessageContent: i,
      user: m,
      chatMessagesNode: f,
      rawUserChatDetails: t,
      setInput: r,
      fileKey: g,
      canUseSupabase: y,
      changedFiles,
      model: C,
      autoFixingUserMessageId: null
    });
  };
  let T = async ({
    message: e,
    errors: t,
    hidden: n
  }) => {
    if (!S && (e || n)) try {
      clearChatError();
      let o = selectedElement && selectedElementCodeSnippet ? _$$F2(selectedElement, selectedElementCodeSnippet) : void 0;
      let i = _$$u(e || "", [], selectedElement?.elementAndParentSources);
      await N({
        plainText: e,
        inspectedElement: o,
        errors: t,
        hidden: n
      }, i);
      t && p([]);
    } catch (e) {
      setChatError(e instanceof Error ? {
        error: e
      } : {
        error: Error("Unknown error")
      });
    }
  };
  let S = ry();
  let A = useAtomWithSubscription(f3);
  let w = KP();
  let {
    exchange,
    user
  } = $W(t);
  let O = void 0 !== exchange && exchange.messages.length > 0;
  let D = user?.sessionID === w;
  let R = useRef(null);
  let M = !isWhitespace(n) && !O;
  let V = useAtomWithSubscription(Z3(t));
  let B = useCallback(() => {
    if (R && "current" in R && R.current) {
      let e = R.current;
      e.style.height = "auto";
      let t = Math.min(e.scrollHeight, 32);
      e.style.height = `${t}px`;
      e.style.overflowY = t >= 32 ? "auto" : "hidden";
    }
  }, []);
  useEffect(() => {
    B();
  }, [n, B]);
  let H = useCallback(e => {
    let t = e.target;
    B();
    r(t.value);
  }, [r, B]);
  let U = ({
    message: e,
    errors: t
  }) => T({
    message: e ?? n,
    errors: t
  });
  let F = O ? jsx("div", {
    ...Ay.props(ng.buttonContainer, M ? ng.buttonBrand : ng.buttonDisabled),
    children: jsx(_$$K, {
      "aria-label": getI18nString("living_designs.chat.stop_button.alt_text"),
      onClick: () => {
        V && V.abort();
      },
      disabled: !D,
      children: jsx(_$$d2, {
        className: "xwa2v1s"
      })
    })
  }) : jsx("div", {
    ...Ay.props(ng.buttonContainer, M ? ng.buttonBrand : ng.buttonDisabled),
    children: jsx(_$$K, {
      type: "submit",
      "aria-label": getI18nString("living_designs.chat.send_button.alt_text"),
      onClick: () => {
        U({});
        A?.setDirectManipulationEnabled({
          enabled: !1
        });
      },
      disabled: !M,
      children: jsx(_$$W3, {
        className: "xwa2v1s"
      })
    })
  });
  return jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      M && T({});
    },
    children: jsxs("div", {
      className: "x1vqgdyp x1n2onr6 xrvj5dj x52fmzj xb3r6kr x6s0dn4",
      children: [jsx("div", {
        className: "xrvj5dj x6s0dn4",
        children: jsx("textarea", {
          rows: 1,
          ref: R,
          className: "xtt52l0 x1hshjfz x1xq1gxn xfifm61 x1dz1jew xjbqb8w x1f4nttd",
          disabled: S || e,
          maxLength: 5e3,
          onChange: H,
          onKeyDown: e => {
            e.stopPropagation();
            "Enter" === e.key && !e.shiftKey && (e.preventDefault(), M && (U({}), A?.setDirectManipulationEnabled({
              enabled: !1
            })));
          },
          placeholder: getI18nString("living_designs.chat.placeholder.iterate"),
          value: n
        })
      }), jsx("div", {
        className: "x78zum5 x1q0g3np x1qughib x6s0dn4 x84vhe8",
        children: jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            minWidth: 0
          },
          children: jsx("div", {
            style: {
              flexShrink: 0
            },
            children: F
          })
        })
      })]
    })
  });
}
let nI = "image_";
class nC {
  constructor(e, t, n) {
    this.componentPreview = e;
    this.displayErrorVisualBell = t;
    this.forceRefresh = n;
  }
  async updateImage(e, t, n, o) {
    let i = this.componentPreview.directManipulationEditor;
    let r = atomStoreManager.get(i.selectedElementInfoAtom);
    if (!r) {
      logError("direct_manipulation", "No element found to update image");
      this.displayErrorVisualBell("on_save");
      return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
    }
    let a = e.image;
    if (!a) {
      logError("direct_manipulation", "No image found to update image");
      this.displayErrorVisualBell("on_save");
      return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
    }
    let l = await i.fetchNewCodeSnippets();
    if (!l) {
      logError("direct_manipulation", "Unable to edit the image");
      this.displayErrorVisualBell("on_save");
      return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
    }
    let s = getSingletonSceneGraph();
    let {
      folderPath,
      fileName
    } = l;
    let p = $v(s, folderPath, fileName);
    let u = {
      success: !1
    };
    let h = {
      success: !1
    };
    if (p) {
      let d = l.editingInfo.srcAttribute;
      let c = r.imgSrc;
      if (!s.getInternalCanvas()) return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
      let m = s.get(e.nodeGuid);
      if (!m) return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
      let x = m.fills.find(e => "IMAGE" === e.type)?.image;
      if (!x || !x.hash || !x.name) return {
        success: !1,
        modifiedCodeFileNodeIds: []
      };
      let g = qg({
        hash: x.hash
      });
      let y = {
        hash: g,
        name: x.name
      };
      let f = `${nI}${g}`;
      let _ = !1;
      return (_$$a3(() => {
        permissionScopeHandler.user("direct-manipulation", () => {
          let e = !1;
          switch (d.type) {
            case "static":
              {
                let e = d.isWithinInitializerBraces ? f : `{${f}}`;
                let t = _$$W4(p, l.collaborativeSourceCodeVersion, d.valueIncludingQuotesStartIndex, d.valueIncludingQuotes, e);
                u = {
                  success: t,
                  codeFileNode: p,
                  message: t ? `Replaced image ${d.value} with ${f}` : `Failed to replace image ${d.value} with ${f}`
                };
                _ = !0;
                break;
              }
            case "dynamic-identifier":
              if (d.isConstFromImport) {
                let t = _$$W4(p, l.collaborativeSourceCodeVersion, d.valueStartIndex, d.value, f);
                u = {
                  success: t,
                  codeFileNode: p,
                  message: t ? `Replaced image ${d.value} with ${f}` : `Failed to replace image ${d.value} with ${f}`
                };
                e = !1;
                _ = !0;
                break;
              }
              e = !0;
              break;
            case "dynamic":
              e = !0;
              break;
            case "not-set":
            case "unknown":
              u = {
                success: !1,
                message: `Cannot handle image src type ${d.type}`
              };
              break;
            default:
              throwTypeError(d);
          }
          if (e && c) {
            let e = nE({
              selectedElementCodeFileNode: p,
              codeFileNodeIdsWithRecentlyAddedImageAssetImports: n,
              scenegraph: s,
              bundledSourceCode: t,
              previousElementUrl: c
            });
            if (null !== e) {
              let {
                stringLiteralOccurrences,
                collaborativeSourceCodeVersion,
                codeFileNodeGuid,
                previousImage
              } = e;
              let r = s.get(codeFileNodeGuid);
              if (r) {
                let e;
                for (let o of (stringLiteralOccurrences.reverse(), stringLiteralOccurrences)) {
                  let {
                    startIndex,
                    matchedString
                  } = o;
                  if (!_$$W4(r, collaborativeSourceCodeVersion, startIndex, matchedString, f)) {
                    e = `Failed to replace image ${matchedString} with ${f}`;
                    break;
                  }
                }
                u = e ? {
                  success: !1,
                  message: e
                } : {
                  success: !0,
                  codeFileNode: r,
                  message: `Replaced image ${previousImage.type} with ${f}`
                };
              }
            }
          }
          let o = u.codeFileNode;
          let i = o?.collaborativeSourceCode;
          if (u.success && o && i) {
            let e = r9({
              imageHash: g,
              imageVariableName: f,
              extension: "png"
            }) + "\n";
            o.setImageImports([y]);
            let t = i.createInsertionOp(0, e.length, e, 0);
            h = {
              success: t,
              addedImportLine: !0,
              message: t ? `Updated import statement to include ${f}` : `Failed to update import statement to include ${f}`
            };
          } else h = {
            success: !0,
            message: `Import statement already includes ${f}`
          };
        });
      }), u.success && h.success) ? (c || _ ? this.componentPreview.sendMessage("editInspectedElementImage", {
        hash: g,
        previousElementUrl: c,
        dataUrl: a,
        sourceCodeJSXCallId: _ ? l.sourceCodeJSXCallId : void 0
      }) : this.forceRefresh(), i.updateAnalyticsRecordImageSwappedFromSource(o), {
        success: !0,
        modifiedCodeFileNodeIds: []
      }) : (logError("direct_manipulation", "Failed to update image", {
        inspectedElementInfo: r,
        status: u,
        importStatus: h
      }), this.displayErrorVisualBell("on_save"), {
        success: !1,
        modifiedCodeFileNodeIds: []
      });
    }
    return {
      success: !1,
      modifiedCodeFileNodeIds: []
    };
  }
}
function nE({
  selectedElementCodeFileNode: e,
  codeFileNodeIdsWithRecentlyAddedImageAssetImports: t,
  scenegraph: n,
  bundledSourceCode: o,
  previousElementUrl: i
}) {
  let r = function (e) {
    let t = e.match(/#filename=([a-zA-Z0-9]+)(?:\.[^?#]+)?/);
    if (t?.[1]) {
      let e = t[1];
      return {
        type: "asset",
        assetId: e,
        assetVariableName: `${nI}${e}`
      };
    }
    return {
      type: "url",
      url: e
    };
  }(i);
  function a({
    previousImage: e,
    ...t
  }) {
    switch (e.type) {
      case "asset":
        return function ({
          sourceCode: e,
          codeFileNodeGuid: t,
          collaborativeSourceCodeVersion: n,
          previousImage: o
        }) {
          let i = function (e, t) {
            let n = _$$eY(t);
            let o = RegExp(`\\b${n}\\b`, "g");
            let i = o.exec(e);
            if (!i) return [];
            let r = [];
            do {
              let e = i.index;
              let n = e + i[0].length;
              r.push({
                startIndex: e,
                endIndex: n,
                matchedString: t
              });
            } while (i = o.exec(e));
            return r;
          }(e, o.assetVariableName).filter(t => !function (e, t) {
            let n = t;
            for (; n > 0 && 10 !== e.charCodeAt(n - 1);) n--;
            return /^\s*import\b/.test(e.slice(n));
          }(e, t.startIndex));
          return i.length > 0 ? {
            stringLiteralOccurrences: i,
            codeFileNodeGuid: t,
            collaborativeSourceCodeVersion: n,
            previousImage: o
          } : null;
        }({
          previousImage: e,
          ...t
        });
      case "url":
        return function ({
          sourceCode: e,
          codeFileNodeGuid: t,
          collaborativeSourceCodeVersion: n,
          previousImage: o
        }) {
          let i = [nj(e, `"${o.url}"`), nj(e, `'${o.url}'`)].flatMap(e => e);
          return i.length > 0 ? {
            stringLiteralOccurrences: i,
            codeFileNodeGuid: t,
            collaborativeSourceCodeVersion: n,
            previousImage: o
          } : null;
        }({
          previousImage: e,
          ...t
        });
      default:
        throwTypeError(e);
    }
  }
  let l = e.collaborativeSourceCode;
  if (l) {
    let t = a({
      sourceCode: l.computeCurrentText(),
      codeFileNodeGuid: e.guid,
      collaborativeSourceCodeVersion: l.getCurrentVersionAsString(),
      previousImage: r
    });
    if (t) return t;
  }
  if ("asset" === r.type) for (let o of t) {
    if (o === e.guid) continue;
    let t = n.get(o);
    let i = t?.collaborativeSourceCode;
    if (!t || !i) continue;
    let l = a({
      sourceCode: i.computeCurrentText(),
      codeFileNodeGuid: t.guid,
      collaborativeSourceCodeVersion: i.getCurrentVersionAsString(),
      previousImage: r
    });
    if (l) return l;
  }
  if (o) for (let [e, t] of Object.entries(o.codeFilesystem)) {
    let n = o.codeFilesystemMetadata[e];
    if (!t || !n || !n.codeFileNodeGUID || !n.collaborativeSourceCodeVersion) continue;
    let i = a({
      sourceCode: t,
      codeFileNodeGuid: n.codeFileNodeGUID,
      collaborativeSourceCodeVersion: n.collaborativeSourceCodeVersion,
      previousImage: r
    });
    if (i) return i;
  }
  return null;
}
function nj(e, t) {
  let n;
  let o = [];
  let i = 0;
  for (; -1 !== (n = e.indexOf(t, i));) {
    let e = n;
    let r = e + t.length;
    o.push({
      startIndex: e,
      endIndex: r,
      matchedString: t
    });
    i = n + 1;
  }
  return o;
}
function nN(e, t, n) {
  let o = n.getBoundingClientRect();
  let i = o.width / n.offsetWidth;
  let r = t.current?.getBoundingClientRect();
  let a = r?.width || 0;
  let l = r?.height || 0;
  let s = e.top - l;
  let d = o.x + e.left + e.width / 2 - a / 2;
  (s = o.y + e.top + e.height + 12) + l > o.height + o.y && (s = o.y + o.height - l - 36);
  s < o.y && (s = o.y + 12);
  d < o.x && (d = o.x);
  d + a > o.width + o.x && (d = o.x + o.width - a);
  d *= i;
  return {
    top: s *= i,
    left: d
  };
}
function nT({
  elementBoundingBox: e,
  container: t,
  elementInfo: n,
  chatNodeId: r,
  codeInstanceNodeId: a,
  preview: l,
  refreshPreview: s
}) {
  let d = useRef(null);
  let c = useRef(null);
  let p = useRef(null);
  let u = useRef(null);
  let h = useRef(null);
  let m = useRef(null);
  let [x, g] = useState("style");
  let y = n.tagName.toLowerCase();
  let f = useMemo(() => function (e, t) {
    let n = function (e, t) {
      let n = [];
      Object.entries(tW).forEach(([o, i]) => {
        (i.includes(e.toLowerCase()) || t && "text" === o) && n.push(o);
      });
      return n;
    }(e, t);
    let i = function (e) {
      let t = [];
      e.forEach(e => {
        switch (e) {
          case "text":
            t.push(tZ);
            break;
          case "image":
            t.push(tX);
            break;
          case "border":
            t.push(tY);
            break;
          case "spacing":
            t.push(tq);
            break;
          case "container":
            t.push(tG);
        }
      });
      let n = [];
      for (let [e, i] of t.entries()) {
        0 !== e && n.push(jsx(_$$c, {}, e));
        n.push(jsx(i, {}, i.name));
      }
      return n;
    }(n);
    return {
      controlTypes: n,
      components: i
    };
  }(y, n.isTextContainer), [y, n.isTextContainer]);
  let _ = function (e, t) {
    let n = useAtomWithSubscription(e.directManipulationEnabledAtom);
    let o = useAtomWithSubscription(e.editingSnippetAtom, {
      deferToFrame: !0
    });
    return n ? o.snippet ? $5(o.snippet) && t.length > 0 ? _$$D2.Enabled : _$$D2.Disabled : o.isLoading ? _$$D2.Loading : _$$D2.Disabled : _$$D2.Disabled;
  }(l.directManipulationEditor, f.components);
  let b = useAtomWithSubscription(l.directManipulationEditor.editingSnippetAtom, {
    deferToFrame: !0
  }).snippet;
  let v = useRef(!1);
  let I = useDispatch();
  let C = useCallback(e => {
    if (v.current) return;
    v.current = !0;
    let t = "on_selection" === e ? getI18nString("figmake.toolbar.error.inconsistency") : getI18nString("figmake.toolbar.error.save");
    I(VisualBellActions.enqueue({
      message: t,
      error: !0,
      button: {
        action: () => {
          s();
        },
        text: getI18nString("figmake.refresh")
      }
    }));
  }, [I, s]);
  let N = useMemo(() => new _$$q2(l.directManipulationEditor, e => l.sendMessage("editInspectedElementClassNames", e), C), [l, C]);
  let T = useMemo(() => new nC(l, C, s), [l, C, s]);
  let [S, A] = useState(nN(e, d, t));
  let [w, k] = useState(null);
  wY(d, () => {
    A(nN(e, d, t));
    k(d.current);
  });
  useLayoutEffect(() => {
    d.current && (A(nN(e, d, t)), k(d.current));
  }, [e, t]);
  let P = _ === _$$D2.Enabled;
  let O = Fk((e, t, n, o) => t.includes(tF.Image) && function (e, t, n, o, i) {
    if (!t) return !1;
    let {
      folderPath,
      fileName
    } = t;
    let l = $v(e, folderPath, fileName);
    if (!l) return !1;
    let s = t.editingInfo.srcAttribute;
    return "static" === s.type || "dynamic-identifier" === s.type && !!s.isConstFromImport || (("dynamic-identifier" === s.type || "dynamic" === s.type) && n ? null !== nE({
      selectedElementCodeFileNode: l,
      codeFileNodeIdsWithRecentlyAddedImageAssetImports: i,
      scenegraph: e,
      bundledSourceCode: o,
      previousElementUrl: n
    }) : ("not-set" === s.type || s.type, !1));
  }(e, n, o, l.directManipulationEditor.bundledSourceCode, l.directManipulationEditor.codeFileNodeIdsWithRecentlyAddedImageAssetImports), f.controlTypes, b, n.imgSrc, a, l.directManipulationEditor);
  l.directManipulationEditor.updateAnalyticsSelectedElementCanEditImage(O, n.figmaFiberId);
  let L = P ? x : "prompt";
  return _ === _$$D2.Loading ? null : jsx("div", {
    style: S,
    className: q()("toolbar--container--XO-GH", xE),
    children: jsx(e_, {
      classNameEditingController: N,
      classNameEditingEnabled: _,
      componentPreview: l,
      container: t,
      directManipulationEditor: l.directManipulationEditor,
      imageEditingController: T,
      imageSwapEnabled: O,
      toolbar: w,
      children: jsxs(eg, {
        menuRef: d,
        children: [jsx("div", {
          ref: c,
          className: "x78zum5 xc26acl xeq5yr9 x1vqgdyp x9f619 x6wrskw",
          children: jsx(t6, {
            disabled: !P,
            value: L,
            setValue: g
          })
        }), jsx(_$$c, {}), jsx("div", {
          style: {
            width: `${("style" === L ? h : m).current?.offsetWidth}px`
          },
          className: "xffdob0 x13w7htt xrvj5dj x1xe40qn",
          children: jsx("div", {
            ref: p,
            style: {
              marginTop: "style" === L ? "0px" : "-60px"
            },
            className: "x1vqgdyp x1on81qs xt4q7o6",
            children: jsxs("div", {
              style: {
                width: `${("style" === L ? h : m).current?.offsetWidth}px`
              },
              className: "xffdob0 x13w7htt xg7h5cd x6ikm8r",
              children: [jsx("div", {
                ref: h,
                className: "x78zum5 xc26acl xeq5yr9 x1vqgdyp",
                children: f.components
              }), jsx("div", {
                ref: m,
                className: "x78zum5 xc26acl xeq5yr9 x1vqgdyp",
                children: jsx(ny, {
                  disabled: "prompt" !== L,
                  codeNodeId: r
                })
              })]
            })
          })
        }), jsx(_$$c, {}), jsxs("div", {
          ref: u,
          className: "x78zum5 xc26acl xeq5yr9 x1vqgdyp x9f619 xmzs88n",
          children: [jsx(t9, {}), jsx(tJ, {})]
        })]
      }, `toolbar-${n.figmaFiberId}`)
    })
  }, `container-${n.figmaFiberId}`);
}
let nS = {
  boundingBox: {
    position: "x10l6tqk",
    pointerEvents: "x47corl",
    boxSizing: "x9f619",
    $$css: !0
  },
  boundingBoxSelected: {
    border: "xh2u52t",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    padding: "x1i3ajwb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  boundingBoxHovered: {
    border: "x1ix6d5r",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    padding: "x1i3ajwb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  boundingBoxSelectedSimilar: {
    border: "x1dxz0ip",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    opacity: "x18km98s",
    padding: "x1i3ajwb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  boundingBoxHoveredSimilar: {
    border: "x1dxz0ip",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    opacity: "xbyyjgo",
    padding: "x1i3ajwb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  tagNameLabel: {
    position: "x10l6tqk",
    top: "xcrr8yc",
    left: "x1ojtbga",
    color: "x140t73q",
    padding: "xxzb6uj",
    fontSize: "x4z9k3i",
    fontWeight: "x117nqv4",
    borderRadius: "xr78m7q",
    textTransform: "x1kyqaxf",
    $$css: !0
  },
  tagNameLabelSelected: {
    backgroundColor: "xf2r6mj",
    $$css: !0
  },
  tagNameLabelHovered: {
    backgroundColor: "x1g19c89",
    $$css: !0
  }
};
let nA = {
  selected: nS.boundingBoxSelected,
  hovered: nS.boundingBoxHovered,
  selectedSimilar: nS.boundingBoxSelectedSimilar,
  hoveredSimilar: nS.boundingBoxHoveredSimilar
};
let nw = {
  selected: nS.tagNameLabelSelected,
  hovered: nS.tagNameLabelHovered,
  selectedSimilar: void 0,
  hoveredSimilar: void 0
};
function nk({
  rect: e,
  selectionType: t,
  tagName: n
}) {
  return !e || 0 === e.width || 0 === e.height || isNaN(e.width) || isNaN(e.height) || isNaN(e.left) || isNaN(e.top) ? null : jsx("div", {
    ...xk(nS.boundingBox, nA[t]),
    style: {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    },
    children: !!n && ["selected", "hovered"].includes(t) && jsx("div", {
      ...xk(nS.tagNameLabel, nw[t]),
      children: n
    })
  });
}
function nP({
  preview: e,
  isVisible: t,
  refreshPreview: n,
  chatNodeId: r,
  codeInstanceNodeId: a
}) {
  let l = e.iframe;
  let s = e.directManipulationEditor;
  let d = useAtomWithSubscription(s.latestInspectedElementUIEvent);
  let c = useAtomWithSubscription(sH);
  let p = useAtomWithSubscription(gn);
  let u = null !== d;
  let h = u && !!l;
  let [m, x] = useState(!0);
  if (useEffect(() => {
    if (l && !u && x(!0), !h) return;
    let t = () => {
      x(!0);
    };
    let n = () => {
      x(!1);
    };
    let o = t => {
      "Escape" !== t.key || pn(e.directManipulationEditor) || (e.setDirectManipulationEnabled({
        enabled: !1
      }), x(!0));
    };
    l.addEventListener("mouseenter", t);
    l.addEventListener("mouseleave", n);
    document.addEventListener("keydown", o);
    return () => {
      l.removeEventListener("mouseenter", t);
      l.removeEventListener("mouseleave", n);
      document.removeEventListener("keydown", o);
    };
  }, [h, l, u, e, e.directManipulationEditor]), !h) return null;
  let g = l.getBoundingClientRect().width / l.offsetWidth;
  p && (g /= c);
  let y = e => e ? {
    width: Math.floor(e.width * g),
    height: Math.floor(e.height * g),
    left: e.left * g,
    top: e.top * g
  } : null;
  let {
    hoveredElement,
    selectedElement,
    selectedSimilarElements,
    hoveredSimilarElements
  } = d;
  let I = y(selectedElement?.rect ?? null);
  return jsxs("div", {
    className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c x47corl xb3r6kr x1vjfegm",
    children: [m && hoveredSimilarElements.map((e, t) => jsx(nk, {
      rect: y(e),
      selectionType: "hoveredSimilar"
    }, `hoveredSimilar-${t}`)), selectedSimilarElements.map((e, t) => jsx(nk, {
      rect: y(e),
      selectionType: "selectedSimilar"
    }, `selectedSimilar-${t}`)), m && hoveredElement && jsx(nk, {
      rect: y(hoveredElement.rect),
      selectionType: "hovered",
      tagName: hoveredElement.tagName
    }, "hovered"), selectedElement && I && jsxs(Fragment, {
      children: [t && createPortal(jsx(nT, {
        elementBoundingBox: I,
        elementInfo: selectedElement,
        chatNodeId: r,
        codeInstanceNodeId: a,
        container: l,
        preview: e,
        refreshPreview: n
      }, "toolbar"), document.body), jsx(nk, {
        rect: I,
        selectionType: "selected",
        tagName: selectedElement.tagName
      }, "selected")]
    })]
  });
}
function nD() {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 x1jnr06f xl56j7k x5yr21d xh8yej3",
    children: [jsx(nR, {}), jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 x1jnr06f x1racy4e",
      children: [jsx("div", {
        className: "xiqqdae xkezfkh",
        children: renderI18nText("figmake.error_overlay.header")
      }), jsx("div", {
        className: "x17akokd x1n0bwc9 x2b8uid",
        children: renderI18nText("figmake.error_overlay.subtitle")
      })]
    })]
  });
}
function nR() {
  return jsx("div", {
    className: "x1n2onr6 x1jn9k7v x1llg2sp",
    children: jsxs("svg", {
      className: "x10l6tqk x41qcxd xbzw7ph",
      width: "417",
      height: "423",
      viewBox: "0 0 417 423",
      fill: "none",
      children: [jsx("path", {
        d: "M1 1V32H32V1H1ZM1 289V320H32V289H1ZM33 289V320H64V289H33ZM65 289V320H96V289H65ZM97 289V320H128V289H97ZM129 289V320H160V289H129ZM161 289V320H192V289H161ZM193 289V320H224V289H193ZM225 289V320H256V289H225ZM257 289V320H288V289H257ZM289 289V320H320V289H289ZM321 289V320H352V289H321ZM353 289V320H384V289H353ZM385 289V320H416V289H385ZM1 257V288H32V257H1ZM33 257V288H64V257H33ZM65 257V288H96V257H65ZM97 257V288H128V257H97ZM129 257V288H160V257H129ZM161 257V288H192V257H161ZM193 257V288H224V257H193ZM225 257V288H256V257H225ZM257 257V288H288V257H257ZM289 257V288H320V257H289ZM321 257V288H352V257H321ZM353 257V288H384V257H353ZM385 257V288H416V257H385ZM1 225V256H32V225H1ZM33 225V256H64V225H33ZM65 225V256H96V225H65ZM97 225V256H128V225H97ZM129 225V256H160V225H129ZM161 225V256H192V225H161ZM193 225V256H224V225H193ZM225 225V256H256V225H225ZM257 225V256H288V225H257ZM289 225V256H320V225H289ZM321 225V256H352V225H321ZM353 225V256H384V225H353ZM385 225V256H416V225H385ZM1 193V224H32V193H1ZM33 193V224H64V193H33ZM65 193V224H96V193H65ZM97 193V224H128V193H97ZM129 193V224H160V193H129ZM161 193V224H192V193H161ZM193 193V224H224V193H193ZM225 193V224H256V193H225ZM257 193V224H288V193H257ZM289 193V224H320V193H289ZM321 193V224H352V193H321ZM353 193V224H384V193H353ZM385 193V224H416V193H385ZM1 161V192H32V161H1ZM33 161V192H64V161H33ZM65 161V192H96V161H65ZM97 161V192H128V161H97ZM129 161V192H160V161H129ZM161 161V192H192V161H161ZM193 161V192H224V161H193ZM225 161V192H256V161H225ZM257 161V192H288V161H257ZM289 161V192H320V161H289ZM321 161V192H352V161H321ZM353 161V192H384V161H353ZM385 161V192H416V161H385ZM1 129V160H32V129H1ZM33 129V160H64V129H33ZM65 129V160H96V129H65ZM97 129V160H128V129H97ZM129 129V160H160V129H129ZM161 129V160H192V129H161ZM193 129V160H224V129H193ZM225 129V160H256V129H225ZM257 129V160H288V129H257ZM289 129V160H320V129H289ZM321 129V160H352V129H321ZM353 129V160H384V129H353ZM385 129V160H416V129H385ZM1 97V128H32V97H1ZM33 97V128H64V97H33ZM65 97V128H96V97H65ZM97 97V128H128V97H97ZM129 97V128H160V97H129ZM161 97V128H192V97H161ZM193 97V128H224V97H193ZM225 97V128H256V97H225ZM257 97V128H288V97H257ZM289 97V128H320V97H289ZM321 97V128H352V97H321ZM353 97V128H384V97H353ZM385 97V128H416V97H385ZM1 65V96H32V65H1ZM33 65V96H64V65H33ZM65 65V96H96V65H65ZM97 65V96H128V65H97ZM129 65V96H160V65H129ZM161 65V96H192V65H161ZM193 65V96H224V65H193ZM225 65V96H256V65H225ZM257 65V96H288V65H257ZM289 65V96H320V65H289ZM321 65V96H352V65H321ZM353 65V96H384V65H353ZM385 65V96H416V65H385ZM1 33V64H32V33H1ZM33 33V64H64V33H33ZM65 33V64H96V33H65ZM97 33V64H128V33H97ZM129 33V64H160V33H129ZM161 33V64H192V33H161ZM193 33V64H224V33H193ZM225 33V64H256V33H225ZM257 33V64H288V33H257ZM289 33V64H320V33H289ZM321 33V64H352V33H321ZM353 33V64H384V33H353ZM385 33V64H416V33H385ZM33 32H64V1H33V32ZM65 32H96V1H65V32ZM97 32H128V1H97V32ZM129 32H160V1H129V32ZM161 32H192V1H161V32ZM193 32H224V1H193V32ZM225 32H256V1H225V32ZM257 32H288V1H257V32ZM289 32H320V1H289V32ZM321 32H352V1H321V32ZM353 32H384V1H353V32ZM385 32H416V1H417V321H0V0H416V1H385V32Z",
        fill: "url(#paint0_radial_11338_118262)"
      }), jsx("rect", {
        x: "141.5",
        y: "114.5",
        width: "133",
        height: "91",
        rx: "13.5",
        fill: Tj.bg,
        stroke: Tj.bgDesktopFullscreenDisabled,
        strokeDasharray: "4 4"
      }), jsx("rect", {
        x: "150",
        y: "131",
        width: "116",
        height: "66",
        rx: "5",
        fill: Tj.bgSecondary
      }), jsx("rect", {
        x: "198.233",
        y: "183.723",
        width: "3.7211",
        height: "7.44221",
        transform: "rotate(-90 198.233 183.723)",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "205.676",
        y: "183.723",
        width: "3.7211",
        height: "7.44221",
        transform: "rotate(-90 205.676 183.723)",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "195.443",
        y: "152.094",
        width: "3.7211",
        height: "13.9541",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "214.979",
        y: "158.605",
        width: "3.7211",
        height: "7.44221",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "188",
        y: "147.443",
        width: "3.7211",
        height: "3.7211",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "191.722",
        y: "143.721",
        width: "3.7211",
        height: "3.7211",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "195.443",
        y: "140",
        width: "3.7211",
        height: "3.7211",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "221.49",
        y: "150.231",
        width: "3.7211",
        height: "3.7211",
        transform: "rotate(90 221.49 150.231)",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "217.769",
        y: "146.51",
        width: "3.7211",
        height: "3.7211",
        transform: "rotate(90 217.769 146.51)",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "225.211",
        y: "150.23",
        width: "3.7211",
        height: "3.7211",
        transform: "rotate(90 225.211 150.23)",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "228.933",
        y: "146.51",
        width: "3.7211",
        height: "3.7211",
        transform: "rotate(90 228.933 146.51)",
        fill: Tj.bgDisabledSecondary
      }), jsx("circle", {
        cx: "153",
        cy: "125",
        r: "2",
        fill: Tj.bgDisabledSecondary
      }), jsx("circle", {
        cx: "160",
        cy: "125",
        r: "2",
        fill: Tj.bgDisabledSecondary
      }), jsx("circle", {
        cx: "167",
        cy: "125",
        r: "2",
        fill: Tj.bgDisabledSecondary
      }), jsx("rect", {
        x: "257.5",
        y: "101.5",
        width: "33",
        height: "33",
        rx: "16.5",
        fill: Tj.bg
      }), jsx("rect", {
        x: "257.5",
        y: "101.5",
        width: "33",
        height: "33",
        rx: "16.5",
        stroke: Tj.bgDesktopFullscreenDisabled,
        strokeDasharray: "4 4"
      }), jsx("path", {
        d: "M272.359 111.938C273.131 110.763 274.869 110.763 275.641 111.938L275.715 112.059L280.592 120.73L280.657 120.854C281.271 122.142 280.336 123.663 278.878 123.663H269.123C267.618 123.663 266.67 122.042 267.408 120.73L272.286 112.059L272.359 111.938ZM274.844 112.55C274.474 111.892 273.527 111.892 273.157 112.55L268.28 121.221C267.94 121.826 268.328 122.564 268.988 122.654L269.123 122.663H278.878L279.013 122.654C279.629 122.57 280.008 121.921 279.78 121.343L279.721 121.221L274.844 112.55ZM274.001 119.763C274.301 119.763 274.544 120.007 274.545 120.307C274.545 120.608 274.301 120.852 274.001 120.852C273.7 120.852 273.456 120.608 273.456 120.307C273.456 120.007 273.7 119.763 274.001 119.763ZM274.001 114.421C274.277 114.421 274.5 114.645 274.501 114.921V118.307C274.501 118.583 274.277 118.807 274.001 118.807C273.724 118.807 273.501 118.583 273.501 118.307V114.921C273.501 114.645 273.725 114.421 274.001 114.421Z",
        fill: Tj.bgDesktopFullscreenDisabled
      }), jsx("defs", {
        children: jsxs("radialGradient", {
          id: "paint0_radial_11338_118262",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(201.861 160.5) rotate(90.346) scale(138.026 214.208)",
          children: [jsx("stop", {
            stopColor: Tj.iconSecondary,
            stopOpacity: "0.4"
          }), jsx("stop", {
            offset: "1",
            stopColor: Tj.bg,
            stopOpacity: "0"
          })]
        })
      })]
    })
  });
}
let nB = {
  iframe: {
    margin: "x1bpp3o7",
    width: "xh8yej3",
    height: "x5yr21d",
    display: "x1lliihq",
    $$css: !0
  },
  iframeDisabled: {
    pointerEvents: "x47corl",
    $$css: !0
  },
  iframeHidden: {
    display: "x1s85apg",
    $$css: !0
  }
};
function nH({
  state: e,
  disablePointerEvents: t,
  props: n,
  codeExportName: r,
  showToolbar: c,
  onAddToCanvas: p,
  withBaseStyles: u,
  showViewOptions: h = !1,
  codeSelectionToRender: m,
  chatNodeId: x,
  instanceSwapPropertyGuids: g,
  imagePropAssetHashes: y,
  onChangePreviewState: f,
  jsxDev: _ = !1,
  isFullscreen: v = !1,
  isVisible: I,
  sandbox: N,
  onError: T,
  onBuild: S
}) {
  let A = useIsSelectedFigmakeFullscreen();
  let w = useRef(null);
  let k = useRef(null);
  let [O, R] = useAtomValueAndSetter(Y_);
  let M = useAtomWithSubscription(jD);
  let V = useAtomWithSubscription(p_);
  let B = useAtomWithSubscription(l6);
  let H = useAtomWithSubscription(Xs);
  let U = useAtomWithSubscription(xJ);
  let F = useAtomWithSubscription(UL);
  let K = useAtomWithSubscription(iK);
  let z = "instance" === m.type ? m.codeInstanceNode : m.codeBehaviorNode;
  let W = I4(z);
  let Z = IO(z);
  let [G, Y] = jT();
  let [q, X] = useAtomValueAndSetter(df(z.guid));
  let [J] = useState(new n$());
  let [Q, ee] = useState(J.componentPreview);
  let [et, en] = useState(J.readyIframe);
  let [eo, ei] = useState(J.isPreviewDirty);
  let [er, ea] = useState(0);
  let el = useCallback(e => {
    en(e);
  }, []);
  let es = useCallback(() => {
    f(_$$d.BUILDING);
    Q?.setDirectManipulationEnabled({
      enabled: !1
    });
    S?.();
  }, [f, S, Q]);
  let ed = useCallback(e => {
    f(_$$d.LOADED);
    X(Date.now());
    k.current = e;
  }, [f, X]);
  let ec = useCallback(e => {
    atomStoreManager.set(f3, e);
    ee(e);
  }, [ee]);
  let ep = useCallback(async (e, t) => {
    let n = q;
    t === S4.BUILD && X(n = Date.now());
    f(_$$d.ERROR);
    let o = [...(G || []), {
      type: "error",
      message: e.stack ? k.current?.sourceMap ? await $(e.stack, k.current.sourceMap) : e.stack : `${e.name}: ${e.message}`,
      phase: t,
      timestamp: Date.now()
    }];
    Y(o);
    let i = o.filter(e => "error" === e.type).map(e => e.message);
    T?.(e, t, i, n);
  }, [q, f, G, Y, T, X]);
  let eu = useCallback(async (e, t) => {
    let n;
    n = "error" === e ? (t = k.current?.sourceMap ? await $(t, k.current.sourceMap) : t).startsWith("Warning:") ? {
      type: "warn",
      message: t,
      timestamp: Date.now()
    } : {
      type: "error",
      message: t,
      phase: S4.RUNTIME,
      timestamp: Date.now()
    } : {
      type: e,
      message: t,
      timestamp: Date.now()
    };
    Y(e => [...(e || []), n]);
  }, [k, Y]);
  let eh = useCallback(() => {
    Y([]);
  }, [Y]);
  let em = m.codeInstanceNode;
  let ex = A || !getFeatureFlags().code_layers_zoom_controls;
  useLayoutEffect(() => {
    J.updateOptions({
      buildNumber: Z,
      nodeId: em.guid,
      codeExportName: r,
      props: n,
      instanceSwapPropertyGuids: g,
      imagePropAssetHashes: y,
      activeBreakpoint: v ? U : H,
      clipContents: v ? K : F,
      withBaseStyles: u,
      jsxDev: _,
      shadcn: ex,
      noWrapper: ex,
      allowScaling: !ex,
      scaleLinearly: h && O,
      width: ex ? void 0 : v ? B.x : V.x,
      height: ex ? void 0 : v ? B.y : V.y,
      sandbox: N,
      onComponentPreview: ec,
      onReadyIframe: el,
      onPreviewDirty: ei,
      onError: ep,
      onConsoleLog: eu,
      onConsoleClear: eh,
      onBuildStart: es,
      onBuildResult: ed
    });
  }, [Z, em.guid, r, n, g, y, v, U, H, K, F, u, _, ex, N, ec, el, ei, ep, eu, eh, es, ed, O, h, V.x, V.y, B.x, B.y, J]);
  let eg = useCallback(e => {
    w.current = e;
    e ? J.mountIframe(e) : J.unmount();
  }, [J]);
  let ey = useCallback(e => {
    R(e);
    J.forceRefresh();
  }, [R, J]);
  let ef = useCallback(() => {
    W();
    f(_$$d.BUILDING);
    J.forceRefresh();
    w.current && ea(e => e + 1);
  }, [J, W, f]);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x5yr21d xh8yej3 x1n2onr6",
    style: {
      backgroundColor: A ? Tj.bg : Tj.bgSecondary
    },
    children: [c && jsx(nU, {
      codeSelectionToRender: m,
      onAddToCanvas: p,
      refresh: ef,
      componentPreviewManager: J,
      componentPreview: Q,
      handleScaleLinearly: ey
    }), jsx("div", {
      className: "x5yr21d xh8yej3 x1n2onr6",
      children: jsxs("div", {
        className: "x10l6tqk x13vifvy x3m8u43 x1ey2m1c xu96u03 x9f619",
        style: {
          display: "flex",
          transition: "opacity 0.2s ease-in-out, filter 0.2s ease-in-out",
          filter: eo ? "blur(2px)" : "none",
          pointerEvents: eo ? "none" : "auto",
          opacity: et && et === w.current ? 1 : 0
        },
        children: [e === _$$d.ERROR ? jsx("div", {
          className: "xh8yej3 x47corl",
          children: jsx(nD, {})
        }) : Q && x && "instance" === m.type ? jsx(nP, {
          preview: Q,
          isVisible: I,
          refreshPreview: W,
          chatNodeId: x,
          codeInstanceNodeId: m.codeInstanceNode.guid
        }) : null, jsx("iframe", {
          title: getI18nString("sites.code_component.preview_title"),
          src: M,
          ref: eg,
          ...xk(nB.iframe, t && nB.iframeDisabled, e === _$$d.ERROR && nB.iframeHidden)
        }, er)]
      })
    })]
  });
}
function nU({
  codeSelectionToRender: e,
  onAddToCanvas: t,
  refresh: n,
  componentPreview: r,
  handleScaleLinearly: a
}) {
  let [l] = useAtomValueAndSetter(Y_);
  let [s, c] = useAtomValueAndSetter(TJ);
  let b = useCallback(e => {
    let t = getSingletonSceneGraph().get(e);
    let n = t?.exportedFromCodeFile;
    t && n && c(e => ({
      ...e,
      [n.guid]: t.guid
    }));
  }, [c]);
  let A = "instance" === e.type ? nK(e.codeInstanceNode) : nK(e.codeBehaviorNode);
  let w = A?.guid ?? "";
  let P = H1(A ?? null);
  let D = P[0];
  let V = s[w] ?? D?.localGuid;
  let B = getSingletonSceneGraph();
  let H = cu();
  let U = H[0] ? B.get(H[0]) : null;
  let F = wE(U);
  let K = useAtomWithSubscription(ZY);
  let $ = !F || K;
  let z = useAtomWithSubscription(s0);
  let [W, Z] = useAtomValueAndSetter(qQ);
  let G = K && (F || W);
  let Y = useCallback(() => {
    U && Py({
      node: U
    });
  }, [U]);
  let q = useCallback(() => {
    !F && W && (replaceSelection([W]), Z(null));
    AppStateTsApi?.codeSelection().showMainComponent.set(!1);
  }, [F, W, Z]);
  let X = getFeatureFlags().code_layers_zoom_controls;
  let {
    handleHtmlToDesign,
    isProcessing,
    isEnabled
  } = _$$q();
  let et = U ? {
    x: U.x + U.size.x + 100,
    y: U.y
  } : {
    x: 0,
    y: 0
  };
  return jsx(Zk, {
    style: {
      paddingBottom: 0,
      borderBottom: "none"
    },
    children: jsxs(Wv, {
      titleTx: P.length > 1 ? jsxs(bL, {
        value: V,
        onChange: e => {
          e && b(e);
        },
        children: [jsx(l9, {
          label: jsx(HiddenLabel, {
            children: getI18nString("sites.code_component.preview_legend")
          })
        }), jsx(mc, {
          children: P.map(e => jsx(c$, {
            value: e.localGuid,
            children: e.name
          }, e.localGuid))
        })]
      }) : jsx(Fragment, {}),
      children: [G && z === PanelType.FILE && jsx($n, {
        variant: "secondary",
        "aria-label": getI18nString("fullscreen_actions.return-to-instance"),
        onClick: q,
        children: getI18nString("fullscreen_actions.return-to-instance")
      }), !$ && z === PanelType.FILE && jsx($n, {
        variant: "secondary",
        "aria-label": getI18nString("fullscreen_actions.edit-main-component"),
        onClick: Y,
        children: getI18nString("fullscreen_actions.edit-main-component")
      }), "instance" === e.type && !e.codeInstanceNode.isLayerLikeCodeNode && t && jsx($n, {
        variant: "secondary",
        "aria-label": getI18nString("sites.code_component.add_to_canvas"),
        onClick: t,
        children: getI18nString("sites.code_component.add_to_canvas")
      }), X && jsx(_$$f, {
        variant: "highlighted",
        checked: !l,
        onIcon: jsx(_$$O, {}),
        offIcon: jsx(_$$O, {}),
        "aria-label": getI18nString("sites.code_component.view_at_100"),
        htmlAttributes: {
          "data-tooltip": getI18nString("sites.code_component.view_at_100"),
          "data-tooltip-type": "text"
        },
        onChange: () => a(!l)
      }), "instance" === e.type && $ && r && getFeatureFlags().code_layers_click_to_inspect && jsx(_$$l, {
        componentPreview: r,
        showTooltipAbove: !1,
        codeInstanceGuid: e.codeInstanceNode.guid
      }), jsx(_$$r, {
        openText: getI18nString("sites.code_component.drawer.open"),
        hideText: getI18nString("sites.code_component.drawer.hide"),
        children: jsx(y, {})
      }), jsx(_$$K, {
        "aria-label": getI18nString("sites.code_component.code_view_reload"),
        htmlAttributes: {
          "data-tooltip": getI18nString("sites.code_component.code_view_reload"),
          "data-tooltip-type": "text"
        },
        onClick: n,
        children: jsx(_$$x, {})
      }), getFeatureFlags().bake_m2d && jsx(_$$K, {
        "aria-label": getI18nString("figmake.m2d.paste_to_canvas_as_design_layers"),
        htmlAttributes: {
          "data-tooltip": getI18nString("figmake.m2d.paste_to_canvas_as_design_layers"),
          "data-tooltip-type": "text"
        },
        disabled: isProcessing || !isEnabled,
        onClick: () => handleHtmlToDesign({
          mode: _$$y.API,
          target: "canvas",
          parentGuid: U?.parentGuid ?? B.getCurrentPage()?.guid ?? "",
          insertionLocation: et
        }),
        children: jsx(_$$a, {})
      })]
    })
  });
}
class nF {
  get current() {
    return {
      url: "/_sandbox"
    };
  }
  addPopStateListener() {}
  addRefreshListener() {}
  push() {}
  forward() {}
  back() {}
  refresh() {}
}
function nK(e) {
  return e?.isCodeInstance ? e?.backingCodeComponent?.exportedFromCodeFile : e?.isCodeFile ? e : e?.exportedFromCodeFile;
}
class n$ {
  constructor() {
    this.componentPreview = null;
    this.readyIframe = null;
    this.isPreviewDirty = !0;
    this.iframeElement = null;
    this.shouldRenderWhenIframeReady = !1;
    this.sitePreviewIframeManager = new fj();
    this.previewHistory = new nF();
    this.requiresBuild = !1;
    this.requiresConsoleClear = !1;
    this.dirtyTimeout = void 0;
    this.codeBundle = null;
  }
  mountIframe(e) {
    this.iframeElement !== e && (this.componentPreview && this.unmount(), this.iframeElement = e, this.componentPreview = this.sitePreviewIframeManager.createSitesPreview({
      history: this.previewHistory,
      skipSetPreviewedNode: !0,
      onIframeReady: () => {
        this.readyIframe = e;
        this.onReadyIframe?.(e);
        this.shouldRenderWhenIframeReady && (this.shouldRenderWhenIframeReady = !1, this.render());
      },
      onError: e => this.onError?.(e, S4.RUNTIME),
      onConsoleLog: (e, t) => this.onConsoleLog?.(e, t),
      onInspectElementEvent: e => {
        this.componentPreview?.directManipulationEditor.processEvent(e, this.codeBundle ?? null);
      },
      options: {
        skipPreviewUpdateListener: !0,
        generateFullAssets: !0,
        withBaseStyles: this.withBaseStyles,
        labs: {
          runtimeDebugTools: !1
        }
      }
    }), this.onComponentPreview?.(this.componentPreview), this.sitePreviewIframeManager.mountIframe(e, {
      useReactDev: !0
    }));
  }
  unmount() {
    this.sitePreviewIframeManager.resetSitesPreview();
    this.readyIframe = null;
    this.onReadyIframe?.(null);
    this.componentPreview = null;
    this.onComponentPreview?.(null);
  }
  async build(e) {
    try {
      this.onBuildStart?.();
      let t = this.getNode();
      e.record("code_bundle_start");
      let n = (async () => {
        if (!this.sandbox) return gz({
          node: t,
          tailwind: !0,
          jsxDev: this.jsxDev ?? !1,
          shadcn: this.shadcn ?? !1,
          noWrapper: this.noWrapper ?? !1
        });
        {
          if (!t.isAlive) return null;
          let e = Fullscreen.deriveFilesystemFromEntrypointNodeIds([t.guid]);
          if (this.sandbox.state === _$$T2.UNRECOVERABLE) throw this.sandbox.error;
          await this.sandbox.waitForReady();
          let n = await this.sandbox.bundle();
          if (n.success) return {
            ...e,
            esm: n.esm,
            css: n.css,
            sourceMap: n.sourcemap
          };
          throw Error(n.error);
        }
      })();
      let o = await n.$$finally(() => e.record("code_bundle_stop"));
      if (o) {
        let e = await bB();
        o.css = [o.css ?? "", e].join("\n");
      }
      let i = Object.values(this.instanceSwapPropertyGuids ?? {}).concat(this.nodeId ? [this.nodeId] : []);
      e.record("preview_website_bundle_start");
      let {
        bundle,
        assetInstructions
      } = await LE(i, !1, !1, !0);
      e.record("preview_website_bundle_stop");
      e.record("asset_generation_start");
      bundle.files = await Ct(assetInstructions);
      e.record("asset_generation_stop");
      this.referencedWebsiteBundle = bundle;
      let l = CodeComponentHelper?.getCodeLibrarySizeMetadata();
      e.setBuildMetadata({
        isBuildSuccessful: !0,
        bundleJsLength: o?.esm?.length,
        bundleCssLength: o?.css?.length,
        ...(l ?? {})
      });
      this.codeBundle = o;
      this.onConsoleClear?.();
      o && this.onBuildResult?.(o);
      return !0;
    } catch (n) {
      this.onConsoleClear?.();
      this.onError?.(n, S4.BUILD);
      this.isPreviewDirty && (this.isPreviewDirty = !1, this.onPreviewDirty?.(this.isPreviewDirty));
      let t = CodeComponentHelper?.getCodeLibrarySizeMetadata();
      e.setBuildMetadata({
        isBuildSuccessful: !1,
        errorMessage: n.toString?.(),
        ...(t ?? {})
      });
      return !1;
    }
  }
  async render() {
    if (!this.readyIframe || !this.componentPreview || !this.codeBundle || !this.referencedWebsiteBundle) return;
    let e = this.codeBundle.esm || null;
    e && this.codeExportName && (this.isPreviewDirty && (this.isPreviewDirty = !1, this.onPreviewDirty?.(this.isPreviewDirty)), await this.componentPreview?.renderComponent({
      nodeId: this.nodeId,
      code: e,
      codeBuildId: this.codeBundle.codeBuildId,
      codeExportName: this.codeExportName,
      props: this.props ?? {},
      styles: this.codeBundle.css,
      withBaseStyles: this.withBaseStyles,
      instanceSwapPropertyGuids: this.instanceSwapPropertyGuids,
      referencedWebsiteBundle: this.referencedWebsiteBundle,
      activeBreakpoint: this.activeBreakpoint,
      clipContents: this.clipContents,
      allowScaling: this.allowScaling,
      scaleLinearly: this.scaleLinearly,
      width: this.width,
      height: this.height
    }));
  }
  forceRefresh() {
    this.iframeElement = null;
    this.requiresBuild = !0;
  }
  updateOptions(e) {
    let t = new Set(this.imagePropAssetHashes);
    let n = e.imagePropAssetHashes?.every(e => t.has(e));
    this.requiresBuild = this.requiresBuild || this.buildNumber !== e.buildNumber || this.nodeId !== e.nodeId || !c2(this.instanceSwapPropertyGuids, e.instanceSwapPropertyGuids) || !n;
    this.requiresConsoleClear = this.nodeId !== e.nodeId;
    this.requiresBuild && !this.isPreviewDirty && (this.isPreviewDirty = !0, this.onPreviewDirty?.(this.isPreviewDirty));
    this.componentPreview && e.onComponentPreview && !this.onComponentPreview && e.onComponentPreview(this.componentPreview);
    let o = e => ({
      buildNumber: e.buildNumber,
      nodeId: e.nodeId,
      codeExportName: e.codeExportName,
      props: e.props,
      instanceSwapPropertyGuids: e.instanceSwapPropertyGuids,
      imagePropAssetHashes: e.imagePropAssetHashes,
      activeBreakpoint: e.activeBreakpoint,
      clipContents: e.clipContents,
      withBaseStyles: e.withBaseStyles,
      jsxDev: e.jsxDev,
      shadcn: e.shadcn,
      noWrapper: e.noWrapper,
      allowScaling: e.allowScaling,
      scaleLinearly: e.scaleLinearly,
      width: e.width,
      height: e.height,
      sandboxState: e.sandbox?.state
    });
    let i = JSON.stringify(o(this)) !== JSON.stringify(o(e));
    this.onComponentPreview = e.onComponentPreview;
    this.onReadyIframe = e.onReadyIframe;
    this.onPreviewDirty = e.onPreviewDirty;
    this.onError = e.onError;
    this.onConsoleLog = e.onConsoleLog;
    this.onConsoleClear = e.onConsoleClear;
    this.onBuildStart = e.onBuildStart;
    this.onBuildResult = e.onBuildResult;
    this.sandbox = e.sandbox;
    i && (this.buildNumber = e.buildNumber, this.nodeId = e.nodeId, this.codeExportName = e.codeExportName, this.props = e.props, this.instanceSwapPropertyGuids = e.instanceSwapPropertyGuids, this.imagePropAssetHashes = e.imagePropAssetHashes, this.activeBreakpoint = e.activeBreakpoint, this.clipContents = e.clipContents, this.withBaseStyles = e.withBaseStyles, this.jsxDev = e.jsxDev, this.shadcn = e.shadcn, this.noWrapper = e.noWrapper, this.allowScaling = e.allowScaling, this.scaleLinearly = e.scaleLinearly, this.width = e.width, this.height = e.height, this.requiresConsoleClear && this.onConsoleClear?.(), this.dirtyTimeout && (clearTimeout(this.dirtyTimeout), this.dirtyTimeout = void 0), this.requiresBuild ? this.dirtyTimeout = setTimeout(() => {
      this.requiresBuild = !1;
      this.dirtyTimeout = void 0;
      let e = new F();
      this.build(e).then(async t => !!t && (this.readyIframe ? (e.record("render_start"), await this.render(), e.record("render_stop")) : this.shouldRenderWhenIframeReady = !0, !0)).then(() => e.trackFigmentEvent());
    }, 1e3) : this.render());
  }
  getNode() {
    if (!this.nodeId) throw Error("Node ID is not set");
    let e = getSingletonSceneGraph().get(this.nodeId);
    if (!e || !e.isAlive) throw Error("Node no longer exists in the scene");
    return e;
  }
}
let nW = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16.5 7h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m-9-1A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 6zm1.646 4.146a.5.5 0 0 0 0 .708L10.293 12l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708 0M12.5 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
function nG() {
  let [e] = jT();
  let t = e?.filter(e => "error" === e.type);
  let [n, r] = useAtomValueAndSetter(YD);
  let a = Xr(Vo);
  let [l, s] = useState(!1);
  return n || !t || 0 === t.length || l ? null : jsxs("button", {
    className: "x10l6tqk x191j7n5 x1nrll8i xuuh30 x78zum5 xl56j7k x6s0dn4 x1jnr06f x1ihmbg5 xxvmw7z x1sxf85j xehqz9p x3brusf",
    onClick: () => {
      a("console");
      r(!0);
    },
    children: [jsx(nW, {}), jsx("div", {
      children: getI18nString("living_designs.chat.errors.error_count", {
        count: t.length
      })
    }), jsx("button", {
      className: "x1ljf5od xjbqb8w",
      onClick: e => {
        e.stopPropagation();
        s(!0);
      },
      children: jsx(_$$f3, {})
    })]
  });
}
function nY() {
  return jsx("div", {
    className: "x10l6tqk x10a8y8t x1vjfegm x78zum5 xl56j7k x6s0dn4 x47corl",
    "data-testid": "html-preview-loading-overlay",
    children: jsx(_$$k, {})
  });
}
export function $$nq0({
  codeSelectionToRender: e,
  chatNodeId: t,
  jsxDev: n = !1,
  onPreviewStateChange: r,
  showViewOptions: a = !1,
  windowRef: c,
  showToolbar: p = !0,
  onAddToCanvas: u,
  isFullscreen: h,
  isVisible: m,
  sandbox: x,
  onError: g,
  onBuild: y,
  disablePointerEvents: f = !1
}) {
  let {
    componentPreviewState,
    setComponentPreviewState
  } = _$$k2();
  let [v, I] = useState(!1);
  let C = e ? "instance" === e.type ? e.codeInstanceNode : e.codeBehaviorNode : null;
  let E = C?.isCodeComponent ? C : C?.backingCodeComponent;
  let j = C?.isCodeFile ? C : E?.exportedFromCodeFile;
  let N = Wn(j?.guid ?? "");
  let T = useCallback(e => {
    setComponentPreviewState(e);
    r?.(e);
    e !== _$$d.LOADED || N || I(!0);
  }, [r, setComponentPreviewState, I, N]);
  pO();
  let S = GW(C);
  let A = useIsSelectedFigmakeFullscreen();
  let w = e?.type === "instance" && u ? () => {
    u(C);
  } : void 0;
  let k = cH(C);
  let P = useMemo(() => {
    let e = [];
    for (let t of Object.values(S)) "object" == typeof t && "image" in t && void 0 !== t.image && (e.push(t.image), void 0 !== t.animatedImage && e.push(t.animatedImage));
    return e;
  }, [S]);
  let O = useRef(null);
  jS(C);
  let L = componentPreviewState === _$$d.INITIAL || componentPreviewState === _$$d.BUILDING || !v;
  if (!e || !C) return null;
  let D = C.isCodeInstance || C.isCodeBehavior ? C.backingCodeComponent?.codeExportName || "default" : C.codeExportName || "default";
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x5yr21d xh8yej3 x1n2onr6",
    ref: O,
    children: [jsx(nH, {
      chatNodeId: t,
      codeExportName: D,
      codeSelectionToRender: e,
      disablePointerEvents: f,
      imagePropAssetHashes: P,
      instanceSwapPropertyGuids: k,
      isFullscreen: h,
      isVisible: m,
      jsxDev: n,
      onAddToCanvas: w,
      onBuild: y,
      onChangePreviewState: T,
      onError: g,
      props: S,
      sandbox: x,
      showToolbar: p,
      showViewOptions: a,
      state: componentPreviewState,
      withBaseStyles: !A
    }), !A && jsxs(Fragment, {
      children: [jsx(_$$_, {
        codeSelectionToRender: e,
        windowRef: c
      }), jsx(nG, {})]
    }), L && jsx(nY, {})]
  });
}
export const m = $$nq0;