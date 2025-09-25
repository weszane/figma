import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { LayoutSizingMode } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { xj, Cs, Dq, Qz, gP, W7, tr } from "../figma_app/655717";
import { oc } from "../figma_app/451499";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { isInvalidValue, isValidValue } from "../905/216495";
import { useNonMixedSelectionPropertyValue, useSelectionPropertyValue } from "../905/275640";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { aj } from "../figma_app/803932";
import { We, xe } from "../figma_app/481857";
import { n4, uQ } from "../figma_app/151869";
import { p7, bh, _p, Xm, YE, QG, _$, HF, r4 } from "../figma_app/826998";
import { SQ } from "../figma_app/161708";
import { rO } from "../figma_app/409807";
import { VZ } from "../figma_app/727192";
let b = new SQ();
let T = new oc();
function I() {
  let e = isDevHandoffEditorType();
  let t = useNonMixedSelectionPropertyValue("stackMode");
  let r = useNonMixedSelectionPropertyValue("inferredAutoLayoutResult");
  return e ? xj(t, r) : Cs(t);
}
function S() {
  let e = isDevHandoffEditorType();
  let t = useNonMixedSelectionPropertyValue("stackMode");
  let r = useNonMixedSelectionPropertyValue("inferredAutoLayoutResult");
  return e ? Dq(t, r) : Cs(t);
}
function v({
  property: e
}) {
  let t = useNonMixedSelectionPropertyValue(e);
  let r = n4({
    value: t
  }) ?? t ?? 0;
  let i = useSelectionPropertyValue("width" === e ? "stackHorizontalSize" : "stackVerticalSize");
  let o = I();
  return jsx(p7, {
    name: "width" === e ? getI18nString("inspect_panel.properties.width") : getI18nString("inspect_panel.properties.height"),
    copyName: e,
    selectionPropertyKey: e,
    variableField: "width" === e ? "WIDTH" : "HEIGHT",
    valueOverride: function (e = 0, t, r) {
      let n = "string" == typeof e ? e : (e || 0).toLocaleString("en", {
        maximumFractionDigits: 2
      }) + "px";
      if (!r || isInvalidValue(t)) return n;
      let i = {
        [LayoutSizingMode.FILL_CONTAINER]: getI18nString("inspect_panel.properties.fill"),
        [LayoutSizingMode.HUG_CONTENT]: getI18nString("inspect_panel.properties.hug"),
        [LayoutSizingMode.FIXED]: getI18nString("inspect_panel.properties.fixed")
      }[t || LayoutSizingMode.FIXED];
      return `${i} (${n})`;
    }(r, i, o),
    shouldFallbackCopyValueToRawValue: !0
  });
}
function A() {
  let e = Qz(gP.TOP);
  let t = Qz(gP.RIGHT);
  let r = Qz(gP.BOTTOM);
  let i = Qz(gP.LEFT);
  let a = useSelectionPropertyValue("dashPattern");
  let l = isDevHandoffEditorType();
  return jsxs(Fragment, {
    children: [jsx(bh, {
      expandedCopyName0: "border-top-width",
      expandedCopyName1: "border-right-width",
      expandedCopyName2: "border-bottom-width",
      expandedCopyName3: "border-left-width",
      expandedName0: getI18nString("inspect_panel.properties.border.top"),
      expandedName1: getI18nString("inspect_panel.properties.border.right"),
      expandedName2: getI18nString("inspect_panel.properties.border.bottom"),
      expandedName3: getI18nString("inspect_panel.properties.border.left"),
      shorthandCopyName: "border-width",
      shorthandName: getI18nString("inspect_panel.properties.border"),
      value0: e,
      value1: t,
      value2: r,
      value3: i,
      variableField0: "BORDER_TOP_WEIGHT",
      variableField1: "BORDER_RIGHT_WEIGHT",
      variableField2: "BORDER_BOTTOM_WEIGHT",
      variableField3: "BORDER_LEFT_WEIGHT"
    }), (!!e || !!t || !!r || !!i) && jsxs(Fragment, {
      children: [!!a && isValidValue(a) && a.length > 0 && jsxs(Fragment, {
        children: [jsx(_p, {
          name: getI18nString("inspect_panel.strokes.border_style"),
          value: getI18nString("fullscreen.properties_panel.stroke_settings.simple_dash"),
          copyName: "border-style",
          copyValue: "dashed",
          subPropertyRow: !0
        }), jsx(_p, {
          name: getI18nString("inspect_panel.strokes.border_dash_pattern"),
          value: a.join(", "),
          copyName: "dashes",
          subPropertyRow: !0
        })]
      }), l && jsx(Xm, {
        name: getI18nString("inspect_panel.strokes.alignment"),
        selectionPropertyKey: "strokeAlign",
        valueFormatter: b,
        copyValue: null,
        subPropertyRow: !0
      })]
    })]
  });
}
function x() {
  let {
    topLeft,
    topRight,
    bottomRight,
    bottomLeft
  } = W7();
  return jsx(bh, {
    expandedCopyName0: "border-top-left-radius",
    expandedCopyName1: "border-top-right-radius",
    expandedCopyName2: "border-bottom-right-radius",
    expandedCopyName3: "border-bottom-left-radius",
    expandedName0: getI18nString("inspect_panel.properties.radius.top_left"),
    expandedName1: getI18nString("inspect_panel.properties.radius.top_right"),
    expandedName2: getI18nString("inspect_panel.properties.radius.bottom_right"),
    expandedName3: getI18nString("inspect_panel.properties.radius.bottom_left"),
    shorthandCopyName: "border-radius",
    shorthandName: getI18nString("inspect_panel.properties.radius"),
    value0: topLeft,
    value1: topRight,
    value2: bottomRight,
    value3: bottomLeft,
    variableField0: "RECTANGLE_TOP_LEFT_CORNER_RADIUS",
    variableField1: "RECTANGLE_TOP_RIGHT_CORNER_RADIUS",
    variableField2: "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS",
    variableField3: "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS"
  });
}
function N() {
  let e = tr(gP.TOP);
  let t = tr(gP.RIGHT);
  let r = tr(gP.BOTTOM);
  let i = tr(gP.LEFT);
  return jsx(bh, {
    expandedCopyName0: "padding-top",
    expandedCopyName1: "padding-right",
    expandedCopyName2: "padding-bottom",
    expandedCopyName3: "padding-left",
    expandedName0: getI18nString("inspect_panel.properties.padding.top"),
    expandedName1: getI18nString("inspect_panel.properties.padding.right"),
    expandedName2: getI18nString("inspect_panel.properties.padding.bottom"),
    expandedName3: getI18nString("inspect_panel.properties.padding.left"),
    shorthandCopyName: "padding",
    shorthandName: getI18nString("inspect_panel.properties.padding"),
    value0: e,
    value1: t,
    value2: r,
    value3: i,
    variableField0: "STACK_PADDING_TOP",
    variableField1: "STACK_PADDING_RIGHT",
    variableField2: "STACK_PADDING_BOTTOM",
    variableField3: "STACK_PADDING_LEFT"
  });
}
function C() {
  let e = useSelectionPropertyValue("stackPrimaryAlignItems");
  let t = S();
  let r = useCallback(r => {
    let n = t && rO(e) ? void 0 : r;
    return n && isValidValue(n) && n > 0 ? n : void 0;
  }, [t, e]);
  return t ? jsx(p7, {
    name: getI18nString("inspect_panel.properties.gap"),
    selectionPropertyKey: "stackSpacing",
    variableField: "STACK_SPACING",
    valueFormatter: r,
    copyName: "gap"
  }) : null;
}
function w() {
  return I() ? jsxs(Fragment, {
    children: [jsx(N, {}), jsx(C, {})]
  }) : null;
}
function O() {
  let e = uQ();
  let {
    isAutoLayoutChild,
    isLayoutChild
  } = useDeepEqualSceneValue((e, t) => {
    let r = e?.get(t ?? "");
    return {
      isLayoutChild: !!r?.parentNode && "CANVAS" !== r.parentNode.type && "SECTION" !== r.parentNode.type,
      isAutoLayoutChild: Cs(r?.parentNode?.stackMode)
    };
  }, e);
  return isAutoLayoutChild || !isLayoutChild ? null : jsxs(Fragment, {
    children: [jsx(YE, {
      name: getI18nString("inspect_panel.properties.top"),
      copyName: "top",
      selectionPropertyKey: "y"
    }), jsx(YE, {
      name: getI18nString("inspect_panel.properties.left"),
      copyName: "left",
      selectionPropertyKey: "x"
    })]
  });
}
function R() {
  return "GRID" !== useNonMixedSelectionPropertyValue("stackMode") ? null : jsxs(Fragment, {
    children: [jsx(QG, {
      label: getI18nString("inspect_panel.properties.flow.grid")
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.rows"),
      copyName: "rows",
      selectionPropertyKey: "gridRowCount",
      subPropertyRow: !0
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.columns"),
      copyName: "columns",
      selectionPropertyKey: "gridColumnCount",
      subPropertyRow: !0
    }), jsx(YE, {
      name: getI18nString("inspect_panel.properties.grid.row_gap"),
      copyName: "row-gap",
      selectionPropertyKey: "gridRowGap",
      subPropertyRow: !0
    }), jsx(YE, {
      name: getI18nString("inspect_panel.properties.grid.column_gap"),
      copyName: "column-gap",
      selectionPropertyKey: "gridColumnGap",
      subPropertyRow: !0
    })]
  });
}
let L = e => void 0 !== e ? e + 1 : 0;
function P() {
  let e = useNonMixedSelectionPropertyValue("stackMode");
  let t = uQ();
  return useDeepEqualSceneValue((e, t) => {
    let r = e?.get(t ?? "");
    return r?.parentNode?.stackMode === "GRID";
  }, t) ? jsxs(Fragment, {
    children: ["GRID" !== e && jsx(QG, {
      label: getI18nString("inspect_panel.properties.flow.grid")
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.row_start"),
      selectionPropertyKey: "gridRowAnchorIndex",
      valueFormatter: L,
      copyName: "row-start",
      subPropertyRow: !0
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.column_start"),
      selectionPropertyKey: "gridColumnAnchorIndex",
      valueFormatter: L,
      copyName: "column-start",
      subPropertyRow: !0
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.horizontal_span"),
      selectionPropertyKey: "gridColumnSpan",
      copyName: "column-span",
      subPropertyRow: !0
    }), jsx(_$, {
      name: getI18nString("inspect_panel.properties.grid.vertical_span"),
      selectionPropertyKey: "gridRowSpan",
      copyName: "row-span",
      subPropertyRow: !0
    })]
  }) : null;
}
function D() {
  let e = S();
  let t = useSelectionPropertyValue("stackPrimaryAlignItems");
  let r = e && rO(t);
  return jsx(_p, {
    name: getI18nString("inspect_panel.properties.justify"),
    value: r ? "space-between" : void 0,
    copyName: "justify-content"
  });
}
function k() {
  let e = useNonMixedSelectionPropertyValue("blendMode");
  return jsx(aj, {
    blendMode: e,
    layout: !0
  });
}
export function $$M0({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let {
    copyAll,
    setCopyValue,
    hasCopyAllContent
  } = We();
  return 1 !== useSelectionPropertyValue("numSelected") ? null : jsx(VZ, {
    title: getI18nString("inspect_panel.properties.layout"),
    copyAllValue: copyAll,
    disableCopyAll: !hasCopyAllContent,
    recordingKey: "properties",
    noBorder: e,
    noPadding: t,
    isSubsection: r,
    children: jsxs(xe.Provider, {
      value: {
        setCopyValue
      },
      children: [jsx(Xm, {
        name: getI18nString("inspect_panel.properties.flow"),
        selectionPropertyKey: "stackMode",
        valueFormatter: T,
        copyValue: null,
        redact: "NONE"
      }), jsx(v, {
        property: "width"
      }), jsx(v, {
        property: "height"
      }), jsx(p7, {
        name: getI18nString("properties.label.min_width"),
        copyName: "min-width",
        selectionPropertyKey: "minWidth",
        variableField: "MIN_WIDTH"
      }), jsx(p7, {
        name: getI18nString("properties.label.max_width"),
        copyName: "max-width",
        selectionPropertyKey: "maxWidth",
        variableField: "MAX_WIDTH"
      }), jsx(p7, {
        name: getI18nString("properties.label.min_height"),
        copyName: "min-height",
        selectionPropertyKey: "minHeight",
        variableField: "MIN_HEIGHT"
      }), jsx(p7, {
        name: getI18nString("properties.label.max_height"),
        copyName: "max-height",
        selectionPropertyKey: "maxHeight",
        variableField: "MAX_HEIGHT"
      }), jsx(O, {}), jsx(x, {}), jsx(A, {}), jsx(D, {}), jsx(w, {}), jsx(R, {}), jsx(P, {}), jsx(HF, {
        name: getI18nString("inspect_panel.properties.rotation"),
        copyName: "angle",
        selectionPropertyKey: "angle"
      }), jsx(r4, {
        name: getI18nString("inspect_panel.properties.opacity"),
        copyName: "opacity",
        selectionPropertyKey: "opacity",
        variableField: "OPACITY"
      }), jsx(k, {})]
    })
  });
}
export const X = $$M0;