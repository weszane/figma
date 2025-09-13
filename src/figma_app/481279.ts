import { jsx, Fragment } from "react/jsx-runtime";
import { mapFilter } from "../figma_app/656233";
import { N as _$$N } from "../905/720559";
import { j } from "../905/253683";
import { Z } from "../905/357899";
import { e } from "../905/478588";
import { y as _$$y } from "../905/292472";
import { o as _$$o } from "../905/347208";
import { VariableResolvedDataType, NodePropertyCategory, PropertyScope, NodeType } from "../figma_app/763686";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { A as _$$A } from "../2854/374356";
import { A as _$$A2 } from "../2854/731650";
import { A as _$$A3 } from "../2854/668810";
import { A as _$$A4 } from "../2854/936763";
import { A as _$$A5 } from "../2854/598494";
import { A as _$$A6 } from "../2854/77351";
import { A as _$$A7 } from "../svg/844984";
var $$T9 = (e => (e.SCOPE = "scope", e.LABEL = "label", e))($$T9 || {});
let I = new Set([VariableResolvedDataType.FLOAT, VariableResolvedDataType.COLOR, VariableResolvedDataType.STRING]);
let S = new Set([NodePropertyCategory.FILL, NodePropertyCategory.STROKE, NodePropertyCategory.EFFECT]);
let v = new Set([PropertyScope.FRAME_FILL, PropertyScope.SHAPE_FILL, PropertyScope.TEXT_FILL]);
let A = [{
  type: "scope",
  scope: PropertyScope.ALL_SCOPES,
  name: renderI18nText("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: PropertyScope.CORNER_RADIUS,
  name: renderI18nText("variables.scopes.corner_radius"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A
  })
}, {
  type: "scope",
  scope: PropertyScope.WIDTH_HEIGHT,
  name: renderI18nText("variables.scopes.width_height"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A5
  })
}, {
  type: "scope",
  scope: PropertyScope.GAP,
  name: renderI18nText("variables.scopes.gap"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A3
  }),
  subLabel: renderI18nText("variables.scopes.auto_layout")
}, {
  type: "scope",
  scope: PropertyScope.TEXT_CONTENT,
  name: renderI18nText("variables.scopes.text_content"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A7
  })
}, {
  type: "scope",
  scope: PropertyScope.STROKE_FLOAT,
  name: renderI18nText("variables.scopes.stroke"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A6
  })
}, {
  type: "scope",
  scope: PropertyScope.OPACITY,
  name: renderI18nText("variables.scopes.layer_opacity"),
  iconElement: jsx(_$$N, {})
}, {
  type: "scope",
  scope: PropertyScope.EFFECT_FLOAT,
  name: renderI18nText("variables.scopes.effects"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A2
  })
}, {
  type: "label",
  key: "typography",
  label: renderI18nText("fullscreen.type_panel.typography")
}, {
  type: "scope",
  scope: PropertyScope.FONT_STYLE,
  name: renderI18nText("variables.scopes.font_weight"),
  iconElement: jsx(j, {})
}, {
  type: "scope",
  scope: PropertyScope.FONT_SIZE,
  name: renderI18nText("variables.scopes.font_size"),
  iconElement: jsx(Z, {})
}, {
  type: "scope",
  scope: PropertyScope.LINE_HEIGHT,
  name: renderI18nText("variables.scopes.line_height"),
  iconElement: jsx(e, {})
}, {
  type: "scope",
  scope: PropertyScope.LETTER_SPACING,
  name: renderI18nText("variables.scopes.letter_spacing"),
  iconElement: jsx(_$$y, {})
}, {
  type: "scope",
  scope: PropertyScope.PARAGRAPH_SPACING,
  name: renderI18nText("variables.scopes.paragraph_spacing"),
  iconElement: jsx(_$$o, {})
}, {
  type: "scope",
  scope: PropertyScope.PARAGRAPH_INDENT,
  name: renderI18nText("variables.scopes.paragraph_indent"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A4
  })
}];
let x = [{
  type: "scope",
  scope: PropertyScope.ALL_SCOPES,
  name: renderI18nText("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: PropertyScope.ALL_FILLS,
  name: renderI18nText("variables.scopes.all_fills")
}, {
  type: "scope",
  scope: PropertyScope.FRAME_FILL,
  name: renderI18nText("variables.scopes.frame_fill"),
  devModeName: renderI18nText("variables.scopes.frame_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: PropertyScope.SHAPE_FILL,
  name: renderI18nText("variables.scopes.shape_fill"),
  devModeName: renderI18nText("variables.scopes.shape_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: PropertyScope.TEXT_FILL,
  name: renderI18nText("variables.scopes.text_fill"),
  devModeName: renderI18nText("variables.scopes.text_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: PropertyScope.STROKE,
  name: renderI18nText("variables.scopes.stroke")
}, {
  type: "scope",
  scope: PropertyScope.EFFECT_COLOR,
  name: renderI18nText("variables.scopes.effects")
}];
let N = [{
  type: "scope",
  scope: PropertyScope.ALL_SCOPES,
  name: renderI18nText("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: PropertyScope.TEXT_CONTENT,
  name: renderI18nText("variables.scopes.text_content"),
  iconElement: jsx(SvgComponent, {
    svg: _$$A7
  })
}, {
  type: "scope",
  scope: PropertyScope.FONT_FAMILY,
  name: renderI18nText("variables.scopes.font_family"),
  iconElement: jsx(Z, {})
}, {
  type: "scope",
  scope: PropertyScope.FONT_STYLE,
  name: renderI18nText("variables.scopes.font_weight_or_style"),
  iconElement: jsx(j, {})
}];
let C = [...A, ...x, ...N].reduce((e, t, r, n) => ("scope" in t && (e[t.scope] = t.name), e), {});
let w = [...A, ...x, ...N].reduce((e, t, r, n) => ("scope" in t && (e[t.scope] = t.devModeName ?? t.name), e), {});
export function $$O6(e, {
  devMode: t = !1
} = {}) {
  return t ? w[e] : C[e];
}
export function $$R2(e) {
  let t;
  if (e?.length === 0) return renderI18nText("variables.scopes.no_supported_properties");
  if (e.includes(PropertyScope.ALL_SCOPES)) return renderI18nText("variables.scopes.all_properties_label");
  for (let r of mapFilter(e, e => $$O6(e))) t = t ? jsx(Fragment, {
    children: renderI18nText("variables.scopes.scope_list", {
      scope1: t,
      scope2: r
    })
  }) : r;
  return t ?? renderI18nText("variables.scopes.no_supported_properties");
}
export let $$L3 = {
  CORNER_RADIUS: PropertyScope.CORNER_RADIUS,
  STACK_SPACING: PropertyScope.GAP,
  STACK_PADDING_LEFT: PropertyScope.GAP,
  STACK_PADDING_TOP: PropertyScope.GAP,
  STACK_PADDING_RIGHT: PropertyScope.GAP,
  STACK_PADDING_BOTTOM: PropertyScope.GAP,
  TEXT_DATA: PropertyScope.TEXT_CONTENT,
  WIDTH: PropertyScope.WIDTH_HEIGHT,
  HEIGHT: PropertyScope.WIDTH_HEIGHT,
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: PropertyScope.CORNER_RADIUS,
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: PropertyScope.CORNER_RADIUS,
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: PropertyScope.CORNER_RADIUS,
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: PropertyScope.CORNER_RADIUS,
  STACK_COUNTER_SPACING: PropertyScope.GAP,
  GRID_ROW_GAP: PropertyScope.GAP,
  GRID_COLUMN_GAP: PropertyScope.GAP,
  MIN_WIDTH: PropertyScope.WIDTH_HEIGHT,
  MAX_WIDTH: PropertyScope.WIDTH_HEIGHT,
  MIN_HEIGHT: PropertyScope.WIDTH_HEIGHT,
  MAX_HEIGHT: PropertyScope.WIDTH_HEIGHT,
  STROKE_WEIGHT: PropertyScope.STROKE_FLOAT,
  BORDER_TOP_WEIGHT: PropertyScope.STROKE_FLOAT,
  BORDER_BOTTOM_WEIGHT: PropertyScope.STROKE_FLOAT,
  BORDER_LEFT_WEIGHT: PropertyScope.STROKE_FLOAT,
  BORDER_RIGHT_WEIGHT: PropertyScope.STROKE_FLOAT,
  OPACITY: PropertyScope.OPACITY,
  PARAGRAPH_SPACING: PropertyScope.PARAGRAPH_SPACING,
  PARAGRAPH_INDENT: PropertyScope.PARAGRAPH_INDENT,
  FONT_FAMILY: PropertyScope.FONT_FAMILY,
  FONT_STYLE: PropertyScope.FONT_STYLE,
  FONT_VARIATIONS: PropertyScope.PARAGRAPH_SPACING,
  FONT_SIZE: PropertyScope.PARAGRAPH_SPACING,
  LETTER_SPACING: PropertyScope.LETTER_SPACING,
  LINE_HEIGHT: PropertyScope.LINE_HEIGHT,
  MISSING: null,
  VISIBLE: null,
  VARIANT_PROPERTIES: null,
  OVERRIDDEN_SYMBOL_ID: null,
  HYPERLINK: null,
  CMS_SERIALIZED_RICH_TEXT_DATA: null,
  SLOT_CONTENT_ID: null
};
Object.keys(NodeType).filter(e => isNaN(Number(e)));
let P = {
  FRAME: PropertyScope.FRAME_FILL,
  SECTION: PropertyScope.FRAME_FILL,
  SYMBOL: PropertyScope.FRAME_FILL,
  INSTANCE: PropertyScope.FRAME_FILL,
  VECTOR: PropertyScope.SHAPE_FILL,
  BRUSH: PropertyScope.SHAPE_FILL,
  STAR: PropertyScope.SHAPE_FILL,
  LINE: PropertyScope.SHAPE_FILL,
  ELLIPSE: PropertyScope.SHAPE_FILL,
  RECTANGLE: PropertyScope.SHAPE_FILL,
  REGULAR_POLYGON: PropertyScope.SHAPE_FILL,
  ROUNDED_RECTANGLE: PropertyScope.SHAPE_FILL,
  TEXT: PropertyScope.TEXT_FILL,
  TEXT_PATH: PropertyScope.TEXT_FILL,
  VECTOR_OPERATION: PropertyScope.SHAPE_FILL,
  NONE: null,
  DOCUMENT: null,
  CANVAS: null,
  GROUP_DEPRECATED: null,
  SLICE: null,
  STICKY: null,
  SHAPE_WITH_TEXT: null,
  CONNECTOR: null,
  CODE_BLOCK: null,
  WIDGET: null,
  STAMP: null,
  MEDIA: null,
  HIGHLIGHT: null,
  SECTION_OVERLAY: null,
  WASHI_TAPE: null,
  VARIABLE: null,
  TABLE: null,
  TABLE_CELL: null,
  VARIABLE_SET: null,
  VARIABLE_OVERRIDE: null,
  SLIDE: null,
  CANVAS_ROW: null,
  CANVAS_GRID: null,
  ASSISTED_LAYOUT_DEPRECATED: null,
  INTERACTIVE_SLIDE_ELEMENT: null,
  MODULE: null,
  RESPONSIVE_SET: null,
  CODE_COMPONENT: null,
  CODE_LIBRARY: null,
  CODE_FILE: null,
  CODE_INSTANCE: null,
  CODE_LAYER: null,
  MANAGED_STRING: null,
  TRANSFORM: null,
  CMS_RICH_TEXT: null,
  REPEATER: null,
  JSX: null,
  EMBEDDED_PROTOTYPE: null,
  REACT_FIBER: null,
  RESPONSIVE_NODE_SET: null,
  WEBPAGE: null
};
export function $$D4(e) {
  return P[e];
}
export function $$k5(e) {
  return e === VariableResolvedDataType.FLOAT ? A : e === VariableResolvedDataType.COLOR ? x : e === VariableResolvedDataType.STRING ? N : [];
}
export function $$M8(e) {
  let t = new Set();
  for (let r of e) {
    let e = $$L3[r];
    e && t.add(e);
  }
  return t;
}
export function $$F1(e, t) {
  if (!I.has(e.resolvedType)) return !0;
  let r = !1;
  for (let e of t) if (v.has(e)) {
    r = !0;
    break;
  }
  for (let n of e.scopes) if (t.has(n) || n === PropertyScope.ALL_SCOPES || n === PropertyScope.ALL_FILLS && r) return !0;
  return !1;
}
export function $$j0() {
  return [VariableResolvedDataType.FLOAT, VariableResolvedDataType.COLOR, VariableResolvedDataType.STRING];
}
export function $$U10(e, t) {
  return [...(t ?? []), e].some(e => I.has(e));
}
export function $$B7(e, t) {
  if (!e || !t || !S.has(e)) return;
  let r = new Set();
  switch (e) {
    case NodePropertyCategory.STROKE:
    case NodePropertyCategory.STROKE_PRESET:
      r.add(PropertyScope.STROKE);
      break;
    case NodePropertyCategory.FILL:
      for (let e in t) {
        let t = P[e];
        t && r.add(t);
      }
      break;
    case NodePropertyCategory.EFFECT:
      r.add(PropertyScope.EFFECT_COLOR);
  }
  return r.size ? r : void 0;
}
export const $8 = $$j0;
export const AQ = $$F1;
export const B3 = $$R2;
export const CP = $$L3;
export const Ku = $$D4;
export const Mm = $$k5;
export const Us = $$O6;
export const aZ = $$B7;
export const iG = $$M8;
export const my = $$T9;
export const yg = $$U10;