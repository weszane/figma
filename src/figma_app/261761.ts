import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { PropertyScope } from "../figma_app/763686";
import { convertKiwiToVariableIdString } from "../905/805904";
import d from "classnames";
import { getI18nString } from "../905/303541";
import { getEffectiveCodegenLanguage } from "../figma_app/655139";
import { Fj } from "../figma_app/793429";
import { Q } from "../905/217916";
import { $Q } from "../figma_app/315578";
import { LN } from "../figma_app/975811";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { getColorFormat } from "../figma_app/740163";
import { getVariableById, getVariablesByIds } from "../figma_app/852050";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { G } from "../figma_app/194673";
import { aj, DP, Af } from "../figma_app/803932";
import { T4, Cj, Wf, uQ } from "../figma_app/151869";
import { Cm, d1, _p, sD } from "../figma_app/826998";
import { ck } from "../figma_app/887579";
import { g as _$$g } from "../figma_app/638268";
import { vG } from "../905/210945";
import { Ig, oI } from "../figma_app/155647";
import { pc, uA } from "../figma_app/152690";
import { getWebVariableSyntax } from "../figma_app/394327";
import { VZ, x0 } from "../figma_app/727192";
import { wG } from "../905/331989";
import { yY, Ln, ix, n1, Q5, hq, i5, cu, DW, qR, bN, cx, TX, RI, W0 } from "../figma_app/811711";
var c = d;
function P({
  value: e,
  varData: t
}) {
  let r = t?.value?.alias;
  let i = getVariableById(r ? convertKiwiToVariableIdString(r) : void 0);
  return i ? jsx("div", {
    className: "value_or_variable_pill--variablePillContainer--198BC",
    children: jsx(wG, {
      text: e,
      variableValue: e,
      tooltip: i.name,
      isNonInteractive: !0
    })
  }) : jsx(Fragment, {
    children: e
  });
}
let k = new ck();
export function $$M6(e, t, r) {
  return Cm(T4.withPixels([getWebVariableSyntax({
    variable: t
  }) || e]).join(""), r);
}
export function $$F0({
  styleKey: e,
  styleType: t,
  rowWithAccessoryButton: r,
  itemIndex: i,
  itemType: a
}) {
  let s = useOpenFileLibraryKey();
  let o = Fj(e);
  let l = Cj(o?.name);
  return jsx("div", {
    className: c()(yY, r ? Ln : ix),
    children: jsx(_$$g, {
      libraryKey: s,
      dsStyle: o,
      styleType: t,
      onClick: l,
      itemIndex: i,
      elementType: k.format(a)
    })
  });
}
function j({
  effect: e,
  styleKey: t,
  itemIndex: r
}) {
  let i = k.format(e.type, e.blurOpType);
  return t ? jsx($$F0, {
    styleKey: t,
    styleType: "EFFECT",
    itemIndex: r,
    itemType: e.type
  }) : i ? jsxs("div", {
    className: yY,
    children: [vG(e), i]
  }) : null;
}
function U({
  effect: e,
  styleName: t
}) {
  let r = k.format(e.type, e.blurOpType);
  return jsx(d1, {
    className: n1,
    labelClassName: Q5,
    label: t,
    defaultLabel: r,
    children: vG(e)
  });
}
export function $$B2(e) {
  var t;
  let r = useRef(null);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: hq,
      children: jsx("div", {
        className: i5,
        ref: e.tooltipRef,
        children: e.label
      })
    }), jsx(ButtonPrimitive, {
      className: cu,
      ref: r,
      onClick: e.onClick,
      children: jsx(P, {
        value: e.value
      })
    }), e.shouldShowVariableInspection && jsxs(Fragment, {
      children: [jsx($Q, {
        variableId: (t = e.$$var, t?.value?.alias ? convertKiwiToVariableIdString(t.value.alias) : void 0),
        matchingVars: e.suggestedVariable?.matchingVars,
        rowRef: e.rowRef,
        rowRefForModalId: r,
        isHovered: e.isHovered,
        recordingKey: e.recordingKey
      }), jsx("div", {})]
    })]
  });
}
export function $$G1(e) {
  return jsxs(_p, {
    className: e.propertyContentClassName,
    onMouseEnter: () => e.setHovered(!0),
    onMouseLeave: () => e.setHovered(!1),
    isHovered: e.isHovered,
    disableDetailModalEntry: !0,
    forceCopyableStyling: !0,
    children: [e.button1, e.button2]
  });
}
export function $$V3(e) {
  let t = isDevHandoffEditorType();
  let r = t && !e.disableDetailModalEntry;
  let a = useRef(null);
  let s = getColorFormat();
  let [o, d] = useState(!1);
  let [p, _] = useState(!1);
  let {
    spread,
    radius,
    offset,
    blendMode,
    showShadowBehindNode,
    visible,
    radiusVar,
    spreadVar,
    xVar,
    yVar,
    colorVar,
    itemIndex,
    blurOpType,
    startRadius,
    startOffset,
    endOffset
  } = e;
  let z = "PROGRESSIVE" === blurOpType;
  let [W, K, Y, $] = getVariablesByIds([xVar, yVar, radiusVar, spreadVar, colorVar].map(e => e?.value?.alias ? convertKiwiToVariableIdString(e.value.alias) : void 0));
  let X = $$M6(offset?.x, W, getI18nString("inspect_panel.shadows.x"));
  let q = $$M6(offset?.y, K, getI18nString("inspect_panel.shadows.y"));
  let J = Cm(startOffset?.x);
  let Z = Cm(startOffset?.y);
  let Q = Cm(endOffset?.x);
  let ee = Cm(endOffset?.y);
  let et = $$M6(startRadius, Y, getI18nString("inspect_panel.shadows.blur.start"));
  let er = $$M6(radius, Y, z ? getI18nString("inspect_panel.shadows.blur.end") : getI18nString("inspect_panel.shadows.blur"));
  let en = $$M6(spread, $, getI18nString("inspect_panel.shadows.spread_tooltip"));
  let ei = pc("MISSING", offset?.x ?? 0);
  let ea = pc("MISSING", offset?.y ?? 0);
  let es = pc("MISSING", radius ?? 0);
  let eo = pc("MISSING", spread ?? 0);
  let el = sD(z ? getI18nString("inspect_panel.shadows.x.end") : getI18nString("inspect_panel.shadows.x"));
  let ed = sD(z ? getI18nString("inspect_panel.shadows.y.end") : getI18nString("inspect_panel.shadows.y"));
  let ec = sD(getI18nString("inspect_panel.shadows.x.start"));
  let eu = sD(getI18nString("inspect_panel.shadows.y.start"));
  let ep = sD(getI18nString("inspect_panel.shadows.blur.start"));
  let e_ = sD(z ? getI18nString("inspect_panel.shadows.blur.end") : getI18nString("inspect_panel.shadows.blur"));
  let eh = sD(getI18nString("inspect_panel.shadows.spread_tooltip"));
  if (!visible) return null;
  let em = "DROP_SHADOW" === e.type || "INNER_SHADOW" === e.type;
  let eg = "DROP_SHADOW" === e.type && showShadowBehindNode;
  let ef = c()(r && DW, qR, t && bN);
  let eE = new LN();
  let ey = jsxs(Fragment, {
    children: [jsx($$G1, {
      propertyContentClassName: ef,
      setHovered: d,
      isHovered: o,
      button1: jsx($$B2, {
        tooltipRef: ec,
        label: getI18nString("inspect_panel.shadows.x.start"),
        onClick: J,
        value: eE.format(startOffset?.x),
        rowRef: a,
        shouldShowVariableInspection: r
      }),
      button2: jsx($$B2, {
        tooltipRef: eu,
        label: getI18nString("inspect_panel.shadows.y.start"),
        onClick: Z,
        value: eE.format(startOffset?.y),
        rowRef: a,
        shouldShowVariableInspection: r
      })
    }), jsx($$G1, {
      propertyContentClassName: ef,
      setHovered: d,
      isHovered: o,
      button1: jsx($$B2, {
        tooltipRef: el,
        label: getI18nString("inspect_panel.shadows.x.end"),
        onClick: Q,
        value: eE.format(endOffset?.x),
        rowRef: a,
        isHovered: o,
        shouldShowVariableInspection: r
      }),
      button2: jsx($$B2, {
        tooltipRef: ed,
        label: getI18nString("inspect_panel.shadows.y.end"),
        onClick: ee,
        value: eE.format(endOffset?.y),
        rowRef: a,
        isHovered: o,
        shouldShowVariableInspection: r
      })
    })]
  });
  let eb = jsx($$G1, {
    propertyContentClassName: ef,
    setHovered: d,
    isHovered: o,
    button1: jsx($$B2, {
      isHovered: o,
      label: getI18nString("inspect_panel.shadows.x"),
      onClick: X,
      recordingKey: "shadows_panel_x",
      rowRef: a,
      shouldShowVariableInspection: r,
      suggestedVariable: ei,
      tooltipRef: el,
      value: Wf(offset?.x),
      var: xVar
    }),
    button2: jsx($$B2, {
      isHovered: o,
      label: getI18nString("inspect_panel.shadows.y"),
      onClick: q,
      recordingKey: "shadows_panel_y",
      rowRef: a,
      shouldShowVariableInspection: r,
      suggestedVariable: ea,
      tooltipRef: ed,
      value: Wf(offset?.y),
      var: yVar
    })
  });
  let eT = jsx($$G1, {
    propertyContentClassName: ef,
    setHovered: _,
    isHovered: p,
    button1: jsx($$B2, {
      tooltipRef: ep,
      label: getI18nString("inspect_panel.shadows.blur.start"),
      onClick: et,
      value: Wf(startRadius),
      rowRef: a,
      isHovered: p
    }),
    button2: jsx($$B2, {
      tooltipRef: e_,
      label: getI18nString("inspect_panel.shadows.blur.end"),
      onClick: er,
      value: Wf(radius),
      rowRef: a,
      isHovered: p
    })
  });
  let eI = jsx($$G1, {
    propertyContentClassName: ef,
    setHovered: _,
    isHovered: p,
    button1: jsx($$B2, {
      isHovered: p,
      label: getI18nString("inspect_panel.shadows.blur"),
      onClick: er,
      recordingKey: "shadows_panel_blur",
      rowRef: a,
      shouldShowVariableInspection: r,
      suggestedVariable: es,
      tooltipRef: e_,
      value: Wf(radius),
      var: radiusVar
    }),
    button2: em ? jsx($$B2, {
      isHovered: p,
      label: getI18nString("inspect_panel.shadows.spread_tooltip"),
      onClick: en,
      recordingKey: "shadows_panel_spread",
      rowRef: a,
      shouldShowVariableInspection: r,
      suggestedVariable: eo,
      tooltipRef: eh,
      value: Wf(spread),
      var: spreadVar
    }) : void 0
  });
  return jsxs("div", {
    ref: a,
    className: cx,
    children: [t ? jsx(j, {
      effect: e,
      styleKey: e.styleKey,
      itemIndex
    }) : jsx(U, {
      effect: e,
      styleName: e.styleName
    }), z && ey, em && eb, z ? eT : eI, em && jsxs(Fragment, {
      children: [jsx(aj, {
        blendMode,
        className: eg ? t ? TX : RI : W0
      }), eg && jsx(_p, {
        name: getI18nString("inspect_panel.shadows.behind_transparent_areas"),
        value: getI18nString("inspect_panel.shadows.behind_transparent_areas_true"),
        className: t ? TX : RI
      }), !!e.formattableColor && jsx(DP, {
        formattableColor: e.formattableColor,
        format: s,
        isInStyle: !0,
        disableDetailModalEntry: e.disableDetailModalEntry
      })]
    })]
  });
}
export function $$H5(e, t, r) {
  let n = uQ();
  let i = Q();
  let a = getEffectiveCodegenLanguage();
  let s = isDevHandoffEditorType();
  let l = Ig();
  return e.map(e => {
    if (!e.color) return {
      ...e,
      styleName: t,
      styleKey: r
    };
    let d = oI({
      color: e.color,
      colorVar: e.colorVar,
      variableScope: PropertyScope.EFFECT_COLOR,
      displayValue: l
    });
    let c = e.secondaryColor ? oI({
      color: e.secondaryColor,
      variableScope: PropertyScope.EFFECT_COLOR,
      displayValue: l
    }) : void 0;
    let u = uA(d, n, a.id, s, i.inspectionMode);
    let p = c ? uA(c, n, a.id, s, i.inspectionMode) : void 0;
    return {
      ...e,
      styleName: t,
      styleKey: r,
      formattableColor: u,
      formattableSecondaryColor: p
    };
  }).filter(e => !!e);
}
export function $$z4({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let s = useSelector(e => e.mirror.selectionProperties.numSelected) || 0;
  let o = G();
  let l = o[0];
  let d = T4.useCopyAllShadows(l?.shadowsAndBlurs ?? []);
  let c = $$H5(l?.shadowsAndBlurs ?? [], l?.styleName, l?.styleKey);
  let p = useCallback((e, t, r) => jsx($$V3, {
    blendMode: e.blendMode,
    blurOpType: e.blurOpType,
    colorVar: e.colorVar,
    endOffset: e.endOffset,
    formattableColor: e.formattableColor,
    id: e.id,
    itemIndex: r,
    offset: e.offset,
    radius: e.radius,
    radiusVar: e.radiusVar,
    showShadowBehindNode: e.showShadowBehindNode,
    spread: e.spread,
    spreadVar: e.spreadVar,
    startOffset: e.startOffset,
    startRadius: e.startRadius,
    styleKey: e.styleKey,
    styleName: e.styleName,
    type: e.type,
    visible: e.visible,
    xVar: e.xVar,
    yVar: e.yVar
  }, e.id), []);
  return 1 !== s || !o || o.length < 1 || l.shadowsAndBlurs.length < 1 ? null : jsx(VZ, {
    title: getI18nString("inspect_panel.shadows.title"),
    recordingKey: "shadows",
    copyAllValue: d,
    additionalHeaders: jsx(Af, {}),
    noBorder: e,
    noPadding: t,
    isSubsection: r,
    children: jsx(x0, {
      limit: 2,
      data: c,
      renderElement: p
    })
  });
}
export const s0 = $$F0;
export const hN = $$G1;
export const n5 = $$B2;
export const rK = $$V3;
export const yg = $$z4;
export const d7 = $$H5;
export const Kx = $$M6;