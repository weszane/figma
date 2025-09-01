import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { d4 } from "../vendor/514228";
import s from "classnames";
import { t as _$$t, tx } from "../905/303541";
import { m0 } from "../figma_app/976749";
import { We, xe } from "../figma_app/481857";
import { VZ, x0 } from "../figma_app/727192";
import { rh, _p, QG, NJ, zp, wy, KY, zG, fY, cK, kI } from "../figma_app/826998";
var o = s;
let _ = e => {
  if ("CAP_HEIGHT" === e) return _$$t("inspect_panel.typography.cap_height");
};
let h = e => {
  if (e) return _$$t("inspect_panel.typography.hanging_punctuation");
};
let m = e => {
  switch (e) {
    case "RIGHT":
      return _$$t("inspect_panel.typography.align_right");
    case "CENTER":
      return _$$t("inspect_panel.typography.align_center");
    case "JUSTIFIED":
      return _$$t("inspect_panel.typography.align_justified");
    default:
      return;
  }
};
let g = e => {
  switch (e) {
    case "RIGHT":
      return "right";
    case "CENTER":
      return "center";
    case "JUSTIFIED":
      return "justify";
    default:
      return;
  }
};
let f = e => {
  switch (e) {
    case "CENTER":
      return _$$t("inspect_panel.typography.align_middle");
    case "BOTTOM":
      return _$$t("inspect_panel.typography.align_bottom");
    default:
      return;
  }
};
let E = e => {
  switch (e) {
    case "CENTER":
      return "middle";
    case "BOTTOM":
      return "bottom";
    default:
      return;
  }
};
let y = e => {
  switch (e) {
    case "SUPER":
      return _$$t("inspect_panel.typography.position_super");
    case "SUB":
      return _$$t("inspect_panel.typography.position_sub");
    default:
      return;
  }
};
let b = e => {
  switch (e) {
    case "SUPER":
      return "super";
    case "SUB":
      return "sub";
    default:
      return;
  }
};
let T = e => {
  switch (e) {
    case "LINING":
      return _$$t("inspect_panel.typography.numeric.figure_lining");
    case "OLDSTYLE":
      return _$$t("inspect_panel.typography.numeric.figure_oldstyle");
    default:
      return;
  }
};
let I = e => {
  switch (e) {
    case "LINING":
      return "lining-nums";
    case "OLDSTYLE":
      return "oldstyle-nums";
    default:
      return;
  }
};
let S = e => {
  switch (e) {
    case "PROPORTIONAL":
      return _$$t("inspect_panel.typography.numeric.spacing_proportional");
    case "TABULAR":
      return _$$t("inspect_panel.typography.numeric.spacing_tabular");
    default:
      return;
  }
};
let v = e => {
  switch (e) {
    case "PROPORTIONAL":
      return "proportional-nums";
    case "TABULAR":
      return "tabular-nums";
    default:
      return;
  }
};
let A = e => {
  switch (e) {
    case "DIAGONAL":
      return _$$t("inspect_panel.typography.numeric.fraction_diagonal");
    case "STACKED":
      return _$$t("inspect_panel.typography.numeric.fraction_stacked");
    default:
      return;
  }
};
let x = e => {
  switch (e) {
    case "DIAGONAL":
      return "diagonal-fractions";
    case "STACKED":
      return "stacked-fractions";
    default:
      return;
  }
};
let N = (e = [], t = []) => {
  if (e.includes("ZERO") && !t.includes("ZERO")) return _$$t("inspect_panel.typography.numeric.zero_slashed");
};
let C = (e = [], t = []) => {
  if (e.includes("ZERO") && !t.includes("ZERO")) return "slashed-zero";
};
let w = (e, t) => {
  if (e && "ORIGINAL" !== e) switch (e) {
    case "UPPER":
      return _$$t("inspect_panel.typography.type_settings.case_upper");
    case "LOWER":
      return _$$t("inspect_panel.typography.type_settings.case_lower");
    case "TITLE":
      return _$$t("inspect_panel.typography.type_settings.case_title");
    case "SMALL_CAPS":
      return _$$t("inspect_panel.typography.type_settings.case_small");
    case "SMALL_CAPS_FORCED":
      return _$$t("inspect_panel.typography.type_settings.case_small_forced");
    default:
      return;
  }
  return "SMALL" === t ? _$$t("inspect_panel.typography.type_settings.case_small") : "ALL_SMALL" === t ? _$$t("inspect_panel.typography.type_settings.case_small_forced") : void 0;
};
let O = (e, t) => {
  if ("SMALL" === t || "ALL_SMALL" === t) return "font-variant";
  switch (e) {
    case "UPPER":
    case "LOWER":
    case "TITLE":
      return "text-transform";
    case "SMALL_CAPS":
    case "SMALL_CAPS_FORCED":
      return "font-variant";
    default:
      return;
  }
};
let $$R = (e, t) => {
  if ("SMALL" === t || "ALL_SMALL" === t) return "small-caps";
  switch (e) {
    case "UPPER":
      return "uppercase";
    case "LOWER":
      return "lowercase";
    case "TITLE":
      return "capitalize";
    case "SMALL_CAPS":
    case "SMALL_CAPS_FORCED":
      return "small-caps";
    default:
      return;
  }
};
let L = e => {
  switch (e) {
    case "STRIKETHROUGH":
      return _$$t("inspect_panel.typography.strikethrough");
    case "UNDERLINE":
      return _$$t("inspect_panel.typography.underline");
    default:
      return;
  }
};
let P = e => {
  if (!e) return "";
  switch (e) {
    case "STRIKETHROUGH":
      return "line-through";
    case "UNDERLINE":
      return "underline";
    default:
      return "";
  }
};
let D = e => {
  switch (e) {
    case "SOLID":
      return _$$t("inspect_panel.typography.solid");
    case "DOTTED":
      return _$$t("inspect_panel.typography.dotted");
    case "WAVY":
      return _$$t("inspect_panel.typography.wavy");
    default:
      return;
  }
};
let k = e => {
  if (!e) return "";
  switch (e) {
    case "SOLID":
      return "solid";
    case "DOTTED":
      return "dotted";
    case "WAVY":
      return "wavy";
    default:
      return "";
  }
};
let M = e => {
  if (e) return _$$t("variables.values.boolean.true");
};
function F(e, t, r) {
  return n => n?.getStyledTextSegments([e], t, r)?.[0]?.[e] ?? void 0;
}
function j(e) {
  return t => t?.[e];
}
function $$U({
  nodeId: e,
  start: t,
  end: r
}) {
  let i = F("textCase", t, r);
  let a = F("fontVariantCaps", t, r);
  let s = rh(e, i);
  let o = rh(e, a);
  return jsx(_p, {
    name: _$$t("inspect_panel.typography.type_settings.case"),
    copyName: O(s, o),
    value: w(s, o),
    copyValue: $$R(s, o)
  });
}
function B({
  nodeId: e,
  start: t,
  end: r
}) {
  let i = rh(e, F("toggledOnOTFeatures", t, r));
  let a = rh(e, F("toggledOffOTFeatures", t, r));
  return jsx(_p, {
    name: _$$t("inspect_panel.typography.numeric.zero"),
    copyName: "font-variant-numeric-zero",
    value: N(i, a),
    copyValue: C(i, a)
  });
}
function G({
  nodeId: e,
  start: t,
  end: r
}) {
  let i = rh(e, F("textDecoration", t, r));
  return i && "NONE" !== i ? jsxs(Fragment, {
    children: ["UNDERLINE" === i && jsx(QG, {
      label: _$$t("inspect_panel.typography.text_decoration")
    }), jsx(NJ, {
      subPropertyRow: "UNDERLINE" === i,
      name: "UNDERLINE" === i ? _$$t("inspect_panel.typography.decoration") : _$$t("inspect_panel.typography.text_decoration"),
      copyName: "text-decoration",
      nodeId: e,
      scenePropertyAccessor: F("textDecoration", t, r),
      valueFormatter: L,
      copyValueFormatter: P
    }), "UNDERLINE" === i && jsxs(Fragment, {
      children: [jsx(NJ, {
        subPropertyRow: !0,
        name: _$$t("inspect_panel.typography_text_decoration_style"),
        copyName: "text-decoration-style",
        nodeId: e,
        scenePropertyAccessor: F("textDecorationStyle", t, r),
        valueFormatter: D,
        copyValueFormatter: k
      }), jsx(zp, {
        subPropertyRow: !0,
        name: _$$t("inspect_panel.typography.text_decoration_offset"),
        copyName: "text-decoration-offset",
        nodeId: e,
        scenePropertyAccessor: F("textDecorationOffset", t, r),
        isTextProperty: !0
      }), jsx(zp, {
        subPropertyRow: !0,
        name: _$$t("inspect_panel.typography.text_decoration_thickness"),
        copyName: "text-decoration-thickness",
        nodeId: e,
        scenePropertyAccessor: F("textDecorationThickness", t, r),
        isTextProperty: !0
      }), jsx(wy, {
        subPropertyRow: !0,
        name: _$$t("inspect_panel.typography.text_decoration_skip_ink"),
        copyName: "text-decoration-skip-ink",
        nodeId: e,
        scenePropertyAccessor: F("textDecorationSkipInk", t, r),
        valueFormatter: M,
        copyValueFormatter: e => e ? "auto" : void 0
      })]
    })]
  }) : null;
}
export function $$V1({
  nodeId: e,
  start: t = 0,
  end: r = 1,
  variableConsumptionMap: i,
  disableSuggestions: a,
  disableDetailModalEntry: s
}) {
  return jsxs(Fragment, {
    children: [jsx(KY, {
      name: _$$t("inspect_panel.typography.font"),
      copyName: "font-family",
      nodeId: e,
      scenePropertyAccessor: e => e?.getStyledTextSegments(["fontName"], t, r)?.[0]?.fontName?.family,
      variableField: "FONT_FAMILY",
      variableConsumptionMap: i,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(zG, {
      name: _$$t("inspect_panel.typography.weight"),
      copyName: "font-weight",
      nodeId: e,
      scenePropertyAccessor: F("fontWeight", t, r),
      variableField: "FONT_STYLE",
      variableConsumptionMap: i,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.style"),
      copyName: "font-style",
      nodeId: e,
      scenePropertyAccessor: F("fontStyle", t, r)
    }), jsx(fY, {
      name: _$$t("inspect_panel.typography.size"),
      copyName: "font-size",
      nodeId: e,
      scenePropertyAccessor: F("fontSize", t, r),
      variableField: "FONT_SIZE",
      variableConsumptionMap: i,
      isTextProperty: !0,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.leading_trim"),
      copyName: "leading-trim",
      scenePropertyAccessor: j("leadingTrim"),
      valueFormatter: _
    }), jsx(cK, {
      name: _$$t("inspect_panel.typography.line_height"),
      copyName: "line-height",
      nodeId: e,
      scenePropertyAccessor: F("lineHeight", t, r),
      variableField: "LINE_HEIGHT",
      variableConsumptionMap: i,
      isTextProperty: !0,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(fY, {
      name: _$$t("inspect_panel.typography.paragraph_spacing"),
      nodeId: e,
      scenePropertyAccessor: F("paragraphSpacing", t, r),
      variableField: "PARAGRAPH_SPACING",
      variableConsumptionMap: i,
      isTextProperty: !0,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(fY, {
      name: _$$t("inspect_panel.typography.paragraph_indent"),
      copyName: "text-indent",
      nodeId: e,
      scenePropertyAccessor: F("paragraphIndent", t, r),
      variableField: "PARAGRAPH_INDENT",
      variableConsumptionMap: i,
      isTextProperty: !0,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(kI, {
      name: _$$t("inspect_panel.typography.list_spacing"),
      nodeId: e,
      scenePropertyAccessor: F("listSpacing", t, r),
      isTextProperty: !0
    }), jsx(cK, {
      name: _$$t("inspect_panel.typography.letter"),
      copyName: "letter-spacing",
      nodeId: e,
      scenePropertyAccessor: F("letterSpacing", t, r),
      variableField: "LETTER_SPACING",
      variableConsumptionMap: i,
      isTextProperty: !0,
      disableSuggestions: a,
      disableDetailModalEntry: s
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.align"),
      copyName: "text-align",
      scenePropertyAccessor: j("textAlignHorizontal"),
      valueFormatter: m,
      copyValueFormatter: g
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.align_vertical"),
      copyName: "vertical-align",
      scenePropertyAccessor: j("textAlignVertical"),
      valueFormatter: f,
      copyValueFormatter: E
    }), jsx($$U, {
      nodeId: e,
      start: t,
      end: r
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.position"),
      copyName: "position",
      nodeId: e,
      scenePropertyAccessor: F("fontVariantPosition", t, r),
      valueFormatter: y,
      copyValueFormatter: b
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.numeric.figure"),
      copyName: "font-variant-numeric-figure",
      nodeId: e,
      scenePropertyAccessor: F("fontVariantNumericFigure", t, r),
      valueFormatter: T,
      copyValueFormatter: I
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.numeric.spacing"),
      copyName: "font-variant-numeric-spacing",
      nodeId: e,
      scenePropertyAccessor: F("fontVariantNumericSpacing", t, r),
      valueFormatter: S,
      copyValueFormatter: v
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.numeric.fraction"),
      copyName: "font-variant-numeric-fraction",
      nodeId: e,
      scenePropertyAccessor: F("fontVariantNumericFraction", t, r),
      valueFormatter: A,
      copyValueFormatter: x
    }), jsx(B, {
      nodeId: e,
      start: t,
      end: r
    }), jsx(G, {
      nodeId: e,
      start: t,
      end: r
    }), jsx(wy, {
      name: _$$t("inspect_panel.typography.punctuation"),
      scenePropertyAccessor: j("hangingPunctuation"),
      valueFormatter: h
    }), jsx(wy, {
      name: _$$t("inspect_panel.typography.hanging_list"),
      scenePropertyAccessor: j("hangingList"),
      valueFormatter: h
    }), jsx(kI, {
      name: _$$t("inspect_panel.typography.optical_size"),
      scenePropertyAccessor: F("opticalSize", t, r),
      isTextProperty: !0
    }), jsx(NJ, {
      name: _$$t("inspect_panel.typography.variation"),
      scenePropertyAccessor: F("fontVariationsDescription", t, r)
    })]
  });
}
function H(e, {
  numFonts: t,
  extraHeader: r,
  noPadding: i,
  isSubsection: a
}) {
  let {
    copyAll,
    setCopyValue,
    hasCopyAllContent
  } = We();
  let h = m0();
  let {
    substring,
    startPos,
    endPos,
    styleName,
    isStyleSoftDeleted
  } = e;
  let b = 0 === e.index;
  let T = e.index === t - 1;
  let I = substring?.trim() || _$$t("inspect_panel.typography.span_whitespace");
  return jsx(VZ, {
    copyAllValue: copyAll,
    disableCopyAll: !hasCopyAllContent,
    isSubsection: T && a,
    noBorder: !0,
    noPadding: !T || i,
    recordingKey: b ? "typography" : `typography${e.index}`,
    snugTitle: h,
    thinTitle: !!h || !b,
    title: b ? _$$t("inspect_panel.typography.title") : substring ? _$$t("inspect_panel.typography.span_contents", {
      contents: I
    }) : _$$t("inspect_panel.typography.span"),
    children: jsxs(xe.Provider, {
      value: {
        setCopyValue
      },
      children: [b && r, jsx(_p, {
        name: _$$t("inspect_panel.typography.name"),
        value: isStyleSoftDeleted ? void 0 : styleName,
        disableDetailModalEntry: !0
      }), jsx($$V1, {
        start: startPos,
        end: endPos,
        variableConsumptionMap: e.variableConsumptionMap
      })]
    })
  });
}
export function $$z0({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let s = d4(e => e.mirror.selectionProperties.numSelected) || 0;
  let d = function () {
    let e = d4(e => e.mirror.selectionProperties.selectedFonts);
    let t = useMemo(() => {
      if (!e || !e.fonts) return;
      let t = new Set();
      return e.fonts.filter(e => !!e.substring && (!e.parentStyleId || !t.has(e.parentStyleId) && (t.add(e.parentStyleId), !0))).sort((e, t) => (e.startPos ?? 0) - (t.startPos ?? 0)).map((e, t) => ({
        ...e,
        index: t
      }));
    }, [e]);
    if (e && t) return {
      fonts: t,
      incompleteResults: e.incompleteResults
    };
  }();
  return !d || d?.fonts.length < 1 ? null : jsx("div", {
    className: o()("typography_inspection_panel--typographyPanel--f3upg", e && "typography_inspection_panel--hideBorder--Kzj6u", t && "typography_inspection_panel--noPadding--QmOtZ"),
    children: jsx(x0, {
      limit: 2,
      data: d.fonts,
      renderElement: H,
      extras: {
        numFonts: d.fonts.length,
        extraHeader: d.incompleteResults ? jsx("div", {
          className: "typography_inspection_panel--warningRow---NOm6",
          children: tx("inspect_panel.typography.too_many_selected", {
            numSelected: s
          })
        }) : null,
        noPadding: t,
        isSubsection: r
      }
    })
  });
}
export const U = $$z0;
export const R = $$V1;