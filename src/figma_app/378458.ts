import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useCallback, useMemo, memo, useRef, useState } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { o as _$$o } from "../905/821217";
import { y as _$$y } from "../905/661502";
import { O as _$$O } from "../905/969533";
import { Ez5, glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import u from "classnames";
import { _ as _$$_ } from "../905/569825";
import { am } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { Uz } from "../905/63728";
import { Pt } from "../figma_app/806412";
import { wv } from "../figma_app/236327";
import { L as _$$L } from "../figma_app/942671";
import { getI18nString } from "../905/303541";
import { _I } from "../figma_app/473493";
import { oB } from "../905/929976";
import { E3 } from "../figma_app/976749";
import { iT } from "../figma_app/74165";
import { VU } from "../905/625959";
import { Y5 } from "../figma_app/455680";
import { d as _$$d } from "../905/758967";
import { UK } from "../figma_app/740163";
import { RF, oQ, DH } from "../figma_app/701001";
import { Zr } from "../figma_app/678782";
import { BK } from "../905/848862";
import { J2 } from "../figma_app/84367";
import { FEditorType, mapEditorTypeToFileType } from "../figma_app/53721";
import { Ib } from "../905/129884";
import { c1 } from "../figma_app/357047";
import { q } from "../figma_app/57000";
import { $A } from "../905/782918";
import { XR, uA, FQ } from "../figma_app/781512";
import { A as _$$A } from "../905/79603";
import { j as _$$j } from "../905/834956";
import { Td } from "../905/595131";
import { n$, Mg, UF, zj, hF, l4, wg, Jk, Y7, S0, i5, FH, WB, sH } from "../905/709864";
var $$p = u;
let $$H = "zoom-input-dropdown";
function z({
  targetRect: e,
  showingZoomDropdown: t,
  toggleZoomMenu: r,
  recordingKey: s
}) {
  let l = am();
  useEffect(() => {
    l("View Menu Opened");
  }, [l]);
  let u = E3();
  let p = J2(_$$d().activeCanvasCurrentZoom);
  let _ = J2(UK().activeCanvasPixelPreview);
  let g = J2(_$$d().activeCanvasRetinaMode);
  let f = selectWithShallowEqual(e => e.mirror.appModel.keyboardShortcuts);
  let E = useSelector(e => !e.mirror.appModel.isReadOnly);
  let y = useSelector(e => !!e.user);
  let b = useSelector(e => $A(e.selectedView));
  let I = _I();
  let v = XR();
  let R = J2(Ez5.uiState().filterAnnotationCategoryId);
  let D = u === FEditorType.Design;
  let M = u === FEditorType.Slides;
  let U = u === FEditorType.Sites;
  let B = u === FEditorType.Figmake;
  let H = u === FEditorType.Illustration;
  let z = "design" === mapEditorTypeToFileType(u);
  let K = "whiteboard" === mapEditorTypeToFileType(u);
  let Y = useSelector(e => e.mirror.appModel.prototypeCanvasUiVisible);
  let $ = J2(Ez5.editorPreferences().showPropertyLabels);
  let X = J2(Ez5.editorPreferences().showFrameGrids);
  let q = J2(_$$d().showFrameGridsViewOnly);
  let J = Td();
  let Z = !J;
  let Q = Z ? "showFrameGrids" : "showFrameGridsViewOnly";
  let ee = J2(getFeatureFlags().figjam_snap_to_dot_grid_reset ? UK().snapToDotGridStagingReset : UK().snapToDotGrid);
  let et = J2(UK().snapToPixelGrid);
  let er = z ? et : ee;
  let en = J2(UK().showDotGrid);
  let ei = J2(UK().renderGrid);
  let ea = z ? ei : en;
  let es = z ? "renderGrid" : "showDotGrid";
  let eo = b;
  let el = !1;
  let ed = !1;
  b ? v.length > 0 ? (eo = !1, el = !1, ed = !0) : (eo = !0, el = !1, ed = !1) : I && !J && !H && (eo = !1, el = !0, ed = !1, getFeatureFlags().dt_annotations_always_expand && (eo = !0, el = !1, ed = !1));
  let ec = [{
    type: "ZOOM_IN",
    shortcut: c1(f, "zoom-in"),
    recordingKey: "zoomIn",
    disabled: !Zr("zoom-in")
  }, {
    type: "ZOOM_OUT",
    shortcut: c1(f, "zoom-out"),
    recordingKey: "zoomOut",
    disabled: !Zr("zoom-out")
  }, {
    type: "ZOOM_TO_FIT",
    shortcut: c1(f, "zoom-to-fit"),
    recordingKey: "zoomToFit"
  }, {
    type: "ZOOM_TO_50",
    recordingKey: "zoomTo50"
  }, {
    type: "ZOOM_TO_100",
    shortcut: c1(f, "zoom-reset"),
    recordingKey: "zoomTo100"
  }, {
    type: "ZOOM_TO_200",
    recordingKey: "zoomTo200"
  }, {
    type: "separator"
  }, {
    type: "PIXEL_PREVIEW",
    isChildChecked: _,
    recordingKey: "activeCanvasPixelPreview",
    hidden: !D && !b && !H,
    disabled: Zr("activeCanvasPixelPreview"),
    children: [{
      type: "PIXEL_PREVIEW_DISABLED",
      shortcut: c1(f, "toggle-pixel-preview"),
      isChecked: !_,
      recordingKey: "disabled"
    }, {
      type: "PIXEL_PREVIEW_1X",
      isChecked: _ && !g,
      shortcut: g ? void 0 : c1(f, "toggle-pixel-preview"),
      recordingKey: "1x"
    }, {
      type: "PIXEL_PREVIEW_2X",
      isChecked: _ && g,
      shortcut: g ? c1(f, "toggle-pixel-preview") : void 0,
      recordingKey: "2x"
    }]
  }, {
    type: K ? "DOT_GRID" : "PIXEL_GRID",
    shortcut: c1(f, z ? "toggle-grid" : "toggle-show-dot-grid"),
    recordingKey: es,
    isChecked: ea,
    disabled: !Zr("toggle-grid")
  }, {
    type: K ? "SNAP_TO_DOT_GRID" : "SNAP_TO_PIXEL_GRID",
    shortcut: c1(f, z || M ? "toggle-snapping-to-pixels" : "toggle-snapping-to-dots"),
    recordingKey: K ? "snapToDotGrid" : "snapToPixelGrid",
    isChecked: er,
    disabled: !Zr(D || M || U || B || H ? "toggle-snapping-to-pixels" : "toggle-snapping-to-dots"),
    hidden: b
  }, {
    type: "LAYOUT_GRIDS",
    shortcut: c1(f, "toggle-shown-layout-grids"),
    recordingKey: Q,
    hidden: !z || !y,
    isChecked: Z ? X : q,
    disabled: Zr(Q)
  }, {
    type: "RULERS",
    shortcut: c1(f, "toggle-rulers"),
    recordingKey: "renderRulers",
    hidden: !z,
    isChecked: J2(UK().renderRulers),
    disabled: Zr("renderRulers")
  }, {
    type: "OUTLINES_MENU",
    recordingKey: "outlinesMenu",
    hidden: !z || !y,
    disabled: Zr("showOutlines"),
    children: [{
      type: "OUTLINES",
      shortcut: c1(f, "toggle-outlines"),
      isChecked: J2(_$$d().showOutlines),
      recordingKey: "showOutlines"
    }, {
      type: "separator"
    }, {
      type: "OUTLINES_HIDDEN_LAYERS",
      isChecked: J2(_$$d().showOutlineHiddenLayers),
      recordingKey: "hiddenLayers"
    }, {
      type: "OUTLINES_OBJECT_BOUNDS",
      isChecked: J2(_$$d().showOutlineObjectBounds),
      recordingKey: "objectBounds"
    }]
  }, {
    type: "MULTIPLAYER_CURSORS",
    shortcut: c1(f, "toggle-multiplayer-cursors"),
    recordingKey: "hideMultiplayerCursors",
    isChecked: !RF(),
    disabled: Zr("hideMultiplayerCursors")
  }, {
    type: "PROPERTY_LABELS",
    recordingKey: "toggleShowPropertyLabels",
    isChecked: $,
    hidden: !1
  }, {
    type: "separator"
  }, {
    type: "COMMENTS",
    shortcut: c1(f, "toggle-show-comments"),
    recordingKey: "showComments",
    isChecked: useSelector(e => !!e.mirror.appModel.showComments),
    disabled: Zr("showComments")
  }, {
    type: "SHOW_ANNOTATIONS",
    shortcut: c1(f, "toggle-show-annotations"),
    recordingKey: "showAnnotationsInDevMode",
    isChecked: oQ(),
    disabled: !Zr("toggle-show-annotations"),
    hidden: !eo
  }, {
    type: "ALWAYS_EXPAND_ANNOTATIONS",
    recordingKey: "alwaysExpandAnnotations",
    isChecked: DH(),
    disabled: !Zr("toggle-always-expand-annotations"),
    hidden: !el
  }, {
    type: "ANNOTATIONS_MENU",
    recordingKey: "annotationFilters",
    hidden: !ed,
    children: [{
      type: "SHOW_ANNOTATIONS",
      shortcut: c1(f, "toggle-show-annotations"),
      recordingKey: "showAnnotationsInDevMode",
      isChecked: oQ(),
      disabled: !Zr("toggle-show-annotations")
    }, ...(v.length > 0 ? [{
      type: "separator"
    }, {
      type: "SHOW_ALL_ANNOTATION_CATEGORIES",
      icon: jsx(_$$y, {
        className: n$
      }),
      isChecked: !R,
      recordingKey: "showAllAnnotationCategories"
    }, ...v.map(e => {
      let t = uA(e);
      return {
        type: "SHOW_ANNOTATION_CATEGORY",
        displayText: t,
        displayTextClassName: Mg,
        icon: jsx("div", {
          className: UF,
          style: {
            backgroundColor: FQ(e) ?? void 0
          }
        }),
        isChecked: e.id === R,
        callback: () => {
          l("filter_annotation_category", {
            categoryLabel: t,
            source: "zoom_menu"
          });
          Ez5?.uiState().filterAnnotationCategoryId.set(e.id);
        },
        recordingKey: `showAnnotationCategory-${t}`
      };
    })] : [])]
  }, {
    type: "PROTOTYPING",
    shortcut: c1(f, "toggle-prototyping-info"),
    recordingKey: "prototypingMode",
    hidden: !D || E,
    isChecked: Y
  }, {
    type: "SITES_SEMANTIC_LABELS",
    recordingKey: "sitesA11yAriaAttributes",
    hidden: !U || !getFeatureFlags().sts_a11y_layers_semantic_tags,
    isChecked: J2(UK().showSemanticTagsOnLayerRows)
  }];
  let eu = useCallback(e => {
    glU.setCanvasZoomScale(e / 100);
  }, []);
  return jsx($$W1, {
    targetRect: e,
    showingZoomDropdown: t,
    toggleZoomMenu: r,
    recordingKey: s,
    allowCodegenOptions: z,
    currentZoom: 100 * p,
    dropdownItems: ec,
    onSelectDropdownItem: (e, t, n) => {
      switch (e) {
        case "ZOOM_IN":
          Y5.triggerAction("zoom-in", {
            source: "zoom-menu"
          });
          break;
        case "ZOOM_OUT":
          Y5.triggerAction("zoom-out", {
            source: "zoom-menu"
          });
          break;
        case "ZOOM_TO_FIT":
          Y5.triggerAction("zoom-to-fit", {
            source: "zoom-menu"
          });
          break;
        case "ZOOM_TO_50":
          glU.setCanvasZoomScale(.5);
          break;
        case "ZOOM_TO_100":
          glU.setCanvasZoomScale(1);
          break;
        case "ZOOM_TO_200":
          glU.setCanvasZoomScale(2);
          break;
        case "PIXEL_PREVIEW":
          VU.get("toggle-pixel-preview", "toolbar")(t);
          break;
        case "PIXEL_GRID":
          VU.get("toggle-grid", "toolbar")(t);
          break;
        case "SNAP_TO_PIXEL_GRID":
          VU.get("toggle-snapping-to-pixels", "toolbar")(t);
          break;
        case "SNAP_TO_DOT_GRID":
          VU.get("toggle-snapping-to-dots", "toolbar")(t);
          break;
        case "DOT_GRID":
          VU.get("toggle-show-dot-grid", "toolbar")(t);
          break;
        case "LAYOUT_GRIDS":
          VU.get("toggle-shown-layout-grids", "toolbar")(t);
          break;
        case "MULTIPLAYER_CURSORS":
          VU.get("toggle-multiplayer-cursors", "toolbar")(t);
          break;
        case "PROPERTY_LABELS":
          Y5.triggerAction("toggle-show-property-labels", {
            source: "zoom-menu"
          });
          break;
        case "PROTOTYPING":
          VU.get("toggle-prototyping-info", "toolbar")(t);
          break;
        case "RULERS":
          VU.get("toggle-rulers", "toolbar")(t);
          break;
        case "SLICES":
          VU.get("toggle-show-slices", "toolbar")(t);
          break;
        case "COMMENTS":
          VU.get("toggle-show-comments", "toolbar")(t);
          break;
        case "SHOW_ANNOTATIONS":
          VU.get("toggle-show-annotations", "toolbar")(t);
          break;
        case "ALWAYS_EXPAND_ANNOTATIONS":
          VU.get("toggle-always-expand-annotations", "toolbar")(t);
          break;
        case "SHOW_ALL_ANNOTATION_CATEGORIES":
          l("filter_annotation_category", {
            categoryLabel: "all",
            source: "zoom_menu"
          });
          Ez5?.uiState().filterAnnotationCategoryId.set(null);
          break;
        case "SHOW_ANNOTATION_CATEGORY":
          n?.();
          break;
        case "OUTLINES":
          Y5.triggerAction("toggle-outlines", {
            source: "zoom-menu"
          });
          break;
        case "OUTLINES_HIDDEN_LAYERS":
          Y5.triggerAction("toggle-outline-mode-hidden-layers", {
            source: "zoom-menu"
          });
          break;
        case "OUTLINES_OBJECT_BOUNDS":
          Y5.triggerAction("toggle-outline-mode-object-bounds", {
            source: "zoom-menu"
          });
          break;
        case "PIXEL_PREVIEW_DISABLED":
          _ && Y5.triggerAction("toggle-pixel-preview", {
            source: "zoom-menu"
          });
          break;
        case "PIXEL_PREVIEW_1X":
          _ || Y5.triggerAction("toggle-pixel-preview", {
            source: "zoom-menu"
          });
          g && Y5.triggerAction("toggle-retina-mode", {
            source: "zoom-menu"
          });
          break;
        case "PIXEL_PREVIEW_2X":
          _ || Y5.triggerAction("toggle-pixel-preview", {
            source: "zoom-menu"
          });
          g || Y5.triggerAction("toggle-retina-mode", {
            source: "zoom-menu"
          });
          break;
        case "SITES_SEMANTIC_LABELS":
          Y5.triggerAction("toggle-show-semantic-tags-on-layer-rows", {
            source: "zoom-menu"
          });
      }
      r();
    },
    onSubmitCustomZoom: eu
  });
}
export function $$W1({
  targetRect: e,
  showingZoomDropdown: t,
  recordingKey: r,
  allowCodegenOptions: s,
  currentZoom: o,
  dropdownItems: l,
  displayAboveTarget: d,
  onSelectDropdownItem: u,
  onSubmitCustomZoom: p
}) {
  let _ = useDispatch();
  let h = useSelector(e => $A(e.selectedView));
  let m = XR();
  let y = useMemo(() => ({
    ZOOM_IN: getI18nString("fullscreen_actions.zoom-in"),
    ZOOM_OUT: getI18nString("fullscreen_actions.zoom-out"),
    ZOOM_TO_FIT: getI18nString("fullscreen_actions.zoom-to-fit"),
    ZOOM_TO_50: getI18nString("fullscreen.toolbar.zoom_menu.zoom_to_50"),
    ZOOM_TO_100: getI18nString("fullscreen_actions.zoom-reset"),
    ZOOM_TO_200: getI18nString("fullscreen.toolbar.zoom_menu.zoom_to_200"),
    PIXEL_PREVIEW: getI18nString("fullscreen.toolbar.zoom_menu.pixel_preview"),
    PIXEL_GRID: getI18nString("fullscreen_actions.toggle-grid"),
    SNAP_TO_PIXEL_GRID: getI18nString("fullscreen_actions.toggle-snapping-to-pixels"),
    PROTOTYPING: getI18nString("fullscreen_actions.toggle-prototyping-information"),
    SNAP_TO_DOT_GRID: getI18nString("fullscreen_actions.toggle-snapping-to-dots"),
    DOT_GRID: getI18nString("fullscreen_actions.toggle-show-dot-grid"),
    LAYOUT_GRIDS: getI18nString("fullscreen_actions.toggle-shown-layout-guides"),
    MULTIPLAYER_CURSORS: getI18nString("fullscreen_actions.toggle-multiplayer-cursors"),
    PROPERTY_LABELS: getI18nString("fullscreen_actions.toggle-show-property-labels"),
    RULERS: getI18nString("fullscreen_actions.toggle-rulers"),
    SLICES: getI18nString("fullscreen_actions.toggle-show-slices"),
    COMMENTS: getI18nString("fullscreen_actions.toggle-show-comments"),
    SHOW_ANNOTATIONS: !(getFeatureFlags().dt_annotations_always_expand && !h) && m.length > 0 ? getI18nString("fullscreen_actions.toggle-show-annotations-v2") : getI18nString("fullscreen_actions.toggle-show-annotations"),
    ALWAYS_EXPAND_ANNOTATIONS: getI18nString("fullscreen_actions.toggle-always-expand-annotations"),
    ANNOTATIONS_MENU: getI18nString("fullscreen_actions.annotations-menu"),
    SHOW_ALL_ANNOTATION_CATEGORIES: getI18nString("fullscreen_actions.show-all-annotation-categories"),
    SHOW_ANNOTATION_CATEGORY: "",
    OUTLINES: getI18nString("fullscreen_actions.toggle-outlines"),
    OUTLINES_MENU: getI18nString("fullscreen_actions.outlines-menu"),
    OUTLINES_HIDDEN_LAYERS: getI18nString("fullscreen_actions.outline-mode-hidden-layers"),
    OUTLINES_OBJECT_BOUNDS: getI18nString("fullscreen_actions.outline-mode-object-bounds"),
    PIXEL_PREVIEW_DISABLED: getI18nString("fullscreen.toolbar.zoom_menu.pixel_preview_disabled"),
    PIXEL_PREVIEW_1X: getI18nString("fullscreen.toolbar.zoom_menu.pixel_preview_1x"),
    PIXEL_PREVIEW_2X: getI18nString("fullscreen.toolbar.zoom_menu.pixel_preview_2x"),
    SINGLE_PROPERTIES_PANEL: getI18nString("fullscreen_actions.single-properties-panel"),
    SITES_SEMANTIC_LABELS: getI18nString("fullscreen_actions.toggle-show-semantic-tags-on-layer-rows")
  }), [h, m.length]);
  let T = useMemo(() => {
    let e = t => {
      if ("separator" === t.type) return {
        displayText: "",
        disabled: !0,
        separator: !0
      };
      let {
        children,
        ...n
      } = t;
      let i = {
        displayText: t.displayText ?? y[t.type]
      };
      switch (t.type) {
        case "ZOOM_TO_50":
          i.isChecked = 50 === o;
          break;
        case "ZOOM_TO_100":
          i.isChecked = 100 === o;
          break;
        case "ZOOM_TO_200":
          i.isChecked = 200 === o;
      }
      children && (i.children = children.map(e));
      return {
        ...n,
        ...i
      };
    };
    return l.map(e);
  }, [o, l, y]);
  let S = useCallback((e, t) => {
    u(e.type, t, e.callback);
  }, [u]);
  return jsxs(_$$j, {
    allowCodegenOptions: s,
    alwaysShowCheckMarkOffset: !0,
    dispatch: _,
    displayAboveTarget: d,
    items: T,
    onSelectItem: S,
    parentRect: e,
    recordingKey: Pt(r, "dropdown"),
    showPoint: !1,
    children: [jsx("div", {
      style: {
        height: 2
      }
    }), jsx("div", {
      className: zj,
      onKeyDown: e => {
        (e.keyCode === Uz.ENTER || e.keyCode === Uz.ESCAPE) && t && _(oB());
      },
      children: jsx(_$$A, {
        className: hF,
        inputId: "zoom-input-menu",
        hiddenLabelText: getI18nString("fullscreen.zoom_menu.zoom_view_options"),
        placeholderValue: `${Math.round(o)}%`,
        cancel: e => {
          e && e.blur();
        },
        submit: e => {
          e.endsWith("%") && (e = e.substr(0, e.length - 1));
          let t = -1;
          try {
            t = parseInt(e, 10);
          } catch (e) {}
          t > 0 && p(t);
        },
        recordingKey: Pt(r, "dropdown", "zoomInput")
      })
    }), jsx(wv, {})]
  });
}
export let $$K0 = memo(function ({
  recordingKey: e
}) {
  let t = useRef(null);
  let r = 100 * J2(_$$d().activeCanvasCurrentZoom);
  let a = BK($$H);
  let [o, d] = useState(null);
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let u = useCallback(() => {
    d(t?.current?.getBoundingClientRect() || null);
  }, [t]);
  useEffect(() => (u(), _$$_.addListener(u), window.addEventListener("resize", u), () => {
    _$$_.removeListener(u);
    window.removeEventListener("resize", u);
  }), [u]);
  let h = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    u();
    a.toggle({
      hasOwnEscKeyHandler: !1
    });
  }, [a, u]);
  let m = a.showing && o && jsx(z, {
    targetRect: o,
    showingZoomDropdown: a.showing,
    toggleZoomMenu: a.toggle,
    recordingKey: e
  });
  let g = l4;
  let E = a.showing ? wg : isPropertiesPanelCollapsed ? Jk : Y7;
  let T = a.showing ? S0 : i5;
  let I = jsxs("div", {
    className: E,
    ref: t,
    children: [jsx("div", {
      className: T,
      "data-testid": "zoom-amount",
      children: function () {
        let e = Math.round(r);
        return e.toString().length < 5 ? `${e}%` : `${e}`;
      }()
    }), jsx("div", {
      className: $$p()(FH, {
        [WB]: a.showing
      }),
      ref: t,
      children: jsx(_$$O, {})
    })]
  });
  return jsx("div", {
    className: sH,
    children: jsxs(_$$o, {
      eventListeners: ["onClick"],
      children: [jsx(_$$L, {
        "aria-controls": $$H,
        "aria-expanded": a.showing,
        "aria-haspopup": "menu",
        ariaLabel: getI18nString("fullscreen.zoom_menu.zoom_view_options.aria_label", {
          zoomPercentage: Math.round(r)
        }),
        className: g,
        "data-tooltip": getI18nString("fullscreen.zoom_menu.zoom_view_options"),
        "data-tooltip-type": Ib.TEXT,
        enabled: !0,
        isUI3: !0,
        onClick: h,
        onboardingKey: q,
        recordingKey: Pt(e, "zoomButton"),
        selected: a.showing,
        children: I
      }), m]
    })
  });
});
export const H = $$K0;
export const p = $$W1;