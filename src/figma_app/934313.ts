import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { mKm } from "../figma_app/763686";
import { t as _$$t } from "../905/303541";
import { xj, Cs, Dq, Qz, gP, W7, tr } from "../figma_app/655717";
import { oc } from "../figma_app/451499";
import { m0 } from "../figma_app/976749";
import { gl, hS } from "../905/216495";
import { Gt, kl } from "../905/275640";
import { Fk } from "../figma_app/167249";
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
  let e = m0();
  let t = Gt("stackMode");
  let r = Gt("inferredAutoLayoutResult");
  return e ? xj(t, r) : Cs(t);
}
function S() {
  let e = m0();
  let t = Gt("stackMode");
  let r = Gt("inferredAutoLayoutResult");
  return e ? Dq(t, r) : Cs(t);
}
function v({
  property: e
}) {
  let t = Gt(e);
  let r = n4({
    value: t
  }) ?? t ?? 0;
  let i = kl("width" === e ? "stackHorizontalSize" : "stackVerticalSize");
  let o = I();
  return jsx(p7, {
    name: "width" === e ? _$$t("inspect_panel.properties.width") : _$$t("inspect_panel.properties.height"),
    copyName: e,
    selectionPropertyKey: e,
    variableField: "width" === e ? "WIDTH" : "HEIGHT",
    valueOverride: function (e = 0, t, r) {
      let n = "string" == typeof e ? e : (e || 0).toLocaleString("en", {
        maximumFractionDigits: 2
      }) + "px";
      if (!r || gl(t)) return n;
      let i = {
        [mKm.FILL_CONTAINER]: _$$t("inspect_panel.properties.fill"),
        [mKm.HUG_CONTENT]: _$$t("inspect_panel.properties.hug"),
        [mKm.FIXED]: _$$t("inspect_panel.properties.fixed")
      }[t || mKm.FIXED];
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
  let a = kl("dashPattern");
  let l = m0();
  return jsxs(Fragment, {
    children: [jsx(bh, {
      expandedCopyName0: "border-top-width",
      expandedCopyName1: "border-right-width",
      expandedCopyName2: "border-bottom-width",
      expandedCopyName3: "border-left-width",
      expandedName0: _$$t("inspect_panel.properties.border.top"),
      expandedName1: _$$t("inspect_panel.properties.border.right"),
      expandedName2: _$$t("inspect_panel.properties.border.bottom"),
      expandedName3: _$$t("inspect_panel.properties.border.left"),
      shorthandCopyName: "border-width",
      shorthandName: _$$t("inspect_panel.properties.border"),
      value0: e,
      value1: t,
      value2: r,
      value3: i,
      variableField0: "BORDER_TOP_WEIGHT",
      variableField1: "BORDER_RIGHT_WEIGHT",
      variableField2: "BORDER_BOTTOM_WEIGHT",
      variableField3: "BORDER_LEFT_WEIGHT"
    }), (!!e || !!t || !!r || !!i) && jsxs(Fragment, {
      children: [!!a && hS(a) && a.length > 0 && jsxs(Fragment, {
        children: [jsx(_p, {
          name: _$$t("inspect_panel.strokes.border_style"),
          value: _$$t("fullscreen.properties_panel.stroke_settings.simple_dash"),
          copyName: "border-style",
          copyValue: "dashed",
          subPropertyRow: !0
        }), jsx(_p, {
          name: _$$t("inspect_panel.strokes.border_dash_pattern"),
          value: a.join(", "),
          copyName: "dashes",
          subPropertyRow: !0
        })]
      }), l && jsx(Xm, {
        name: _$$t("inspect_panel.strokes.alignment"),
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
    expandedName0: _$$t("inspect_panel.properties.radius.top_left"),
    expandedName1: _$$t("inspect_panel.properties.radius.top_right"),
    expandedName2: _$$t("inspect_panel.properties.radius.bottom_right"),
    expandedName3: _$$t("inspect_panel.properties.radius.bottom_left"),
    shorthandCopyName: "border-radius",
    shorthandName: _$$t("inspect_panel.properties.radius"),
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
    expandedName0: _$$t("inspect_panel.properties.padding.top"),
    expandedName1: _$$t("inspect_panel.properties.padding.right"),
    expandedName2: _$$t("inspect_panel.properties.padding.bottom"),
    expandedName3: _$$t("inspect_panel.properties.padding.left"),
    shorthandCopyName: "padding",
    shorthandName: _$$t("inspect_panel.properties.padding"),
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
  let e = kl("stackPrimaryAlignItems");
  let t = S();
  let r = useCallback(r => {
    let n = t && rO(e) ? void 0 : r;
    return n && hS(n) && n > 0 ? n : void 0;
  }, [t, e]);
  return t ? jsx(p7, {
    name: _$$t("inspect_panel.properties.gap"),
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
  } = Fk((e, t) => {
    let r = e?.get(t ?? "");
    return {
      isLayoutChild: !!r?.parentNode && "CANVAS" !== r.parentNode.type && "SECTION" !== r.parentNode.type,
      isAutoLayoutChild: Cs(r?.parentNode?.stackMode)
    };
  }, e);
  return isAutoLayoutChild || !isLayoutChild ? null : jsxs(Fragment, {
    children: [jsx(YE, {
      name: _$$t("inspect_panel.properties.top"),
      copyName: "top",
      selectionPropertyKey: "y"
    }), jsx(YE, {
      name: _$$t("inspect_panel.properties.left"),
      copyName: "left",
      selectionPropertyKey: "x"
    })]
  });
}
function R() {
  return "GRID" !== Gt("stackMode") ? null : jsxs(Fragment, {
    children: [jsx(QG, {
      label: _$$t("inspect_panel.properties.flow.grid")
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.rows"),
      copyName: "rows",
      selectionPropertyKey: "gridRowCount",
      subPropertyRow: !0
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.columns"),
      copyName: "columns",
      selectionPropertyKey: "gridColumnCount",
      subPropertyRow: !0
    }), jsx(YE, {
      name: _$$t("inspect_panel.properties.grid.row_gap"),
      copyName: "row-gap",
      selectionPropertyKey: "gridRowGap",
      subPropertyRow: !0
    }), jsx(YE, {
      name: _$$t("inspect_panel.properties.grid.column_gap"),
      copyName: "column-gap",
      selectionPropertyKey: "gridColumnGap",
      subPropertyRow: !0
    })]
  });
}
let L = e => void 0 !== e ? e + 1 : 0;
function P() {
  let e = Gt("stackMode");
  let t = uQ();
  return Fk((e, t) => {
    let r = e?.get(t ?? "");
    return r?.parentNode?.stackMode === "GRID";
  }, t) ? jsxs(Fragment, {
    children: ["GRID" !== e && jsx(QG, {
      label: _$$t("inspect_panel.properties.flow.grid")
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.row_start"),
      selectionPropertyKey: "gridRowAnchorIndex",
      valueFormatter: L,
      copyName: "row-start",
      subPropertyRow: !0
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.column_start"),
      selectionPropertyKey: "gridColumnAnchorIndex",
      valueFormatter: L,
      copyName: "column-start",
      subPropertyRow: !0
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.horizontal_span"),
      selectionPropertyKey: "gridColumnSpan",
      copyName: "column-span",
      subPropertyRow: !0
    }), jsx(_$, {
      name: _$$t("inspect_panel.properties.grid.vertical_span"),
      selectionPropertyKey: "gridRowSpan",
      copyName: "row-span",
      subPropertyRow: !0
    })]
  }) : null;
}
function D() {
  let e = S();
  let t = kl("stackPrimaryAlignItems");
  let r = e && rO(t);
  return jsx(_p, {
    name: _$$t("inspect_panel.properties.justify"),
    value: r ? "space-between" : void 0,
    copyName: "justify-content"
  });
}
function k() {
  let e = Gt("blendMode");
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
  return 1 !== kl("numSelected") ? null : jsx(VZ, {
    title: _$$t("inspect_panel.properties.layout"),
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
        name: _$$t("inspect_panel.properties.flow"),
        selectionPropertyKey: "stackMode",
        valueFormatter: T,
        copyValue: null,
        redact: "NONE"
      }), jsx(v, {
        property: "width"
      }), jsx(v, {
        property: "height"
      }), jsx(p7, {
        name: _$$t("properties.label.min_width"),
        copyName: "min-width",
        selectionPropertyKey: "minWidth",
        variableField: "MIN_WIDTH"
      }), jsx(p7, {
        name: _$$t("properties.label.max_width"),
        copyName: "max-width",
        selectionPropertyKey: "maxWidth",
        variableField: "MAX_WIDTH"
      }), jsx(p7, {
        name: _$$t("properties.label.min_height"),
        copyName: "min-height",
        selectionPropertyKey: "minHeight",
        variableField: "MIN_HEIGHT"
      }), jsx(p7, {
        name: _$$t("properties.label.max_height"),
        copyName: "max-height",
        selectionPropertyKey: "maxHeight",
        variableField: "MAX_HEIGHT"
      }), jsx(O, {}), jsx(x, {}), jsx(A, {}), jsx(D, {}), jsx(w, {}), jsx(R, {}), jsx(P, {}), jsx(HF, {
        name: _$$t("inspect_panel.properties.rotation"),
        copyName: "angle",
        selectionPropertyKey: "angle"
      }), jsx(r4, {
        name: _$$t("inspect_panel.properties.opacity"),
        copyName: "opacity",
        selectionPropertyKey: "opacity",
        variableField: "OPACITY"
      }), jsx(k, {})]
    })
  });
}
export const X = $$M0;