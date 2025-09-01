import { jsx, Fragment } from "react/jsx-runtime";
import { mapFilter } from "../figma_app/656233";
import { N as _$$N } from "../905/720559";
import { j } from "../905/253683";
import { Z } from "../905/357899";
import { e } from "../905/478588";
import { y as _$$y } from "../905/292472";
import { o as _$$o } from "../905/347208";
import { rXF, rrT, j0r, Z6A } from "../figma_app/763686";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { A as _$$A } from "../2854/374356";
import { A as _$$A2 } from "../2854/731650";
import { A as _$$A3 } from "../2854/668810";
import { A as _$$A4 } from "../2854/936763";
import { A as _$$A5 } from "../2854/598494";
import { A as _$$A6 } from "../2854/77351";
import { A as _$$A7 } from "../svg/844984";
var $$T9 = (e => (e.SCOPE = "scope", e.LABEL = "label", e))($$T9 || {});
let I = new Set([rXF.FLOAT, rXF.COLOR, rXF.STRING]);
let S = new Set([rrT.FILL, rrT.STROKE, rrT.EFFECT]);
let v = new Set([j0r.FRAME_FILL, j0r.SHAPE_FILL, j0r.TEXT_FILL]);
let A = [{
  type: "scope",
  scope: j0r.ALL_SCOPES,
  name: tx("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: j0r.CORNER_RADIUS,
  name: tx("variables.scopes.corner_radius"),
  iconElement: jsx(B, {
    svg: _$$A
  })
}, {
  type: "scope",
  scope: j0r.WIDTH_HEIGHT,
  name: tx("variables.scopes.width_height"),
  iconElement: jsx(B, {
    svg: _$$A5
  })
}, {
  type: "scope",
  scope: j0r.GAP,
  name: tx("variables.scopes.gap"),
  iconElement: jsx(B, {
    svg: _$$A3
  }),
  subLabel: tx("variables.scopes.auto_layout")
}, {
  type: "scope",
  scope: j0r.TEXT_CONTENT,
  name: tx("variables.scopes.text_content"),
  iconElement: jsx(B, {
    svg: _$$A7
  })
}, {
  type: "scope",
  scope: j0r.STROKE_FLOAT,
  name: tx("variables.scopes.stroke"),
  iconElement: jsx(B, {
    svg: _$$A6
  })
}, {
  type: "scope",
  scope: j0r.OPACITY,
  name: tx("variables.scopes.layer_opacity"),
  iconElement: jsx(_$$N, {})
}, {
  type: "scope",
  scope: j0r.EFFECT_FLOAT,
  name: tx("variables.scopes.effects"),
  iconElement: jsx(B, {
    svg: _$$A2
  })
}, {
  type: "label",
  key: "typography",
  label: tx("fullscreen.type_panel.typography")
}, {
  type: "scope",
  scope: j0r.FONT_STYLE,
  name: tx("variables.scopes.font_weight"),
  iconElement: jsx(j, {})
}, {
  type: "scope",
  scope: j0r.FONT_SIZE,
  name: tx("variables.scopes.font_size"),
  iconElement: jsx(Z, {})
}, {
  type: "scope",
  scope: j0r.LINE_HEIGHT,
  name: tx("variables.scopes.line_height"),
  iconElement: jsx(e, {})
}, {
  type: "scope",
  scope: j0r.LETTER_SPACING,
  name: tx("variables.scopes.letter_spacing"),
  iconElement: jsx(_$$y, {})
}, {
  type: "scope",
  scope: j0r.PARAGRAPH_SPACING,
  name: tx("variables.scopes.paragraph_spacing"),
  iconElement: jsx(_$$o, {})
}, {
  type: "scope",
  scope: j0r.PARAGRAPH_INDENT,
  name: tx("variables.scopes.paragraph_indent"),
  iconElement: jsx(B, {
    svg: _$$A4
  })
}];
let x = [{
  type: "scope",
  scope: j0r.ALL_SCOPES,
  name: tx("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: j0r.ALL_FILLS,
  name: tx("variables.scopes.all_fills")
}, {
  type: "scope",
  scope: j0r.FRAME_FILL,
  name: tx("variables.scopes.frame_fill"),
  devModeName: tx("variables.scopes.frame_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: j0r.SHAPE_FILL,
  name: tx("variables.scopes.shape_fill"),
  devModeName: tx("variables.scopes.shape_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: j0r.TEXT_FILL,
  name: tx("variables.scopes.text_fill"),
  devModeName: tx("variables.scopes.text_fill_dev_mode"),
  indented: !0
}, {
  type: "scope",
  scope: j0r.STROKE,
  name: tx("variables.scopes.stroke")
}, {
  type: "scope",
  scope: j0r.EFFECT_COLOR,
  name: tx("variables.scopes.effects")
}];
let N = [{
  type: "scope",
  scope: j0r.ALL_SCOPES,
  name: tx("variables.scopes.all_properties")
}, {
  type: "scope",
  scope: j0r.TEXT_CONTENT,
  name: tx("variables.scopes.text_content"),
  iconElement: jsx(B, {
    svg: _$$A7
  })
}, {
  type: "scope",
  scope: j0r.FONT_FAMILY,
  name: tx("variables.scopes.font_family"),
  iconElement: jsx(Z, {})
}, {
  type: "scope",
  scope: j0r.FONT_STYLE,
  name: tx("variables.scopes.font_weight_or_style"),
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
  if (e?.length === 0) return tx("variables.scopes.no_supported_properties");
  if (e.includes(j0r.ALL_SCOPES)) return tx("variables.scopes.all_properties_label");
  for (let r of mapFilter(e, e => $$O6(e))) t = t ? jsx(Fragment, {
    children: tx("variables.scopes.scope_list", {
      scope1: t,
      scope2: r
    })
  }) : r;
  return t ?? tx("variables.scopes.no_supported_properties");
}
export let $$L3 = {
  CORNER_RADIUS: j0r.CORNER_RADIUS,
  STACK_SPACING: j0r.GAP,
  STACK_PADDING_LEFT: j0r.GAP,
  STACK_PADDING_TOP: j0r.GAP,
  STACK_PADDING_RIGHT: j0r.GAP,
  STACK_PADDING_BOTTOM: j0r.GAP,
  TEXT_DATA: j0r.TEXT_CONTENT,
  WIDTH: j0r.WIDTH_HEIGHT,
  HEIGHT: j0r.WIDTH_HEIGHT,
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: j0r.CORNER_RADIUS,
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: j0r.CORNER_RADIUS,
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: j0r.CORNER_RADIUS,
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: j0r.CORNER_RADIUS,
  STACK_COUNTER_SPACING: j0r.GAP,
  GRID_ROW_GAP: j0r.GAP,
  GRID_COLUMN_GAP: j0r.GAP,
  MIN_WIDTH: j0r.WIDTH_HEIGHT,
  MAX_WIDTH: j0r.WIDTH_HEIGHT,
  MIN_HEIGHT: j0r.WIDTH_HEIGHT,
  MAX_HEIGHT: j0r.WIDTH_HEIGHT,
  STROKE_WEIGHT: j0r.STROKE_FLOAT,
  BORDER_TOP_WEIGHT: j0r.STROKE_FLOAT,
  BORDER_BOTTOM_WEIGHT: j0r.STROKE_FLOAT,
  BORDER_LEFT_WEIGHT: j0r.STROKE_FLOAT,
  BORDER_RIGHT_WEIGHT: j0r.STROKE_FLOAT,
  OPACITY: j0r.OPACITY,
  PARAGRAPH_SPACING: j0r.PARAGRAPH_SPACING,
  PARAGRAPH_INDENT: j0r.PARAGRAPH_INDENT,
  FONT_FAMILY: j0r.FONT_FAMILY,
  FONT_STYLE: j0r.FONT_STYLE,
  FONT_VARIATIONS: j0r.PARAGRAPH_SPACING,
  FONT_SIZE: j0r.PARAGRAPH_SPACING,
  LETTER_SPACING: j0r.LETTER_SPACING,
  LINE_HEIGHT: j0r.LINE_HEIGHT,
  MISSING: null,
  VISIBLE: null,
  VARIANT_PROPERTIES: null,
  OVERRIDDEN_SYMBOL_ID: null,
  HYPERLINK: null,
  CMS_SERIALIZED_RICH_TEXT_DATA: null,
  SLOT_CONTENT_ID: null
};
Object.keys(Z6A).filter(e => isNaN(Number(e)));
let P = {
  FRAME: j0r.FRAME_FILL,
  SECTION: j0r.FRAME_FILL,
  SYMBOL: j0r.FRAME_FILL,
  INSTANCE: j0r.FRAME_FILL,
  VECTOR: j0r.SHAPE_FILL,
  BRUSH: j0r.SHAPE_FILL,
  STAR: j0r.SHAPE_FILL,
  LINE: j0r.SHAPE_FILL,
  ELLIPSE: j0r.SHAPE_FILL,
  RECTANGLE: j0r.SHAPE_FILL,
  REGULAR_POLYGON: j0r.SHAPE_FILL,
  ROUNDED_RECTANGLE: j0r.SHAPE_FILL,
  TEXT: j0r.TEXT_FILL,
  TEXT_PATH: j0r.TEXT_FILL,
  VECTOR_OPERATION: j0r.SHAPE_FILL,
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
  return e === rXF.FLOAT ? A : e === rXF.COLOR ? x : e === rXF.STRING ? N : [];
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
  for (let n of e.scopes) if (t.has(n) || n === j0r.ALL_SCOPES || n === j0r.ALL_FILLS && r) return !0;
  return !1;
}
export function $$j0() {
  return [rXF.FLOAT, rXF.COLOR, rXF.STRING];
}
export function $$U10(e, t) {
  return [...(t ?? []), e].some(e => I.has(e));
}
export function $$B7(e, t) {
  if (!e || !t || !S.has(e)) return;
  let r = new Set();
  switch (e) {
    case rrT.STROKE:
    case rrT.STROKE_PRESET:
      r.add(j0r.STROKE);
      break;
    case rrT.FILL:
      for (let e in t) {
        let t = P[e];
        t && r.add(t);
      }
      break;
    case rrT.EFFECT:
      r.add(j0r.EFFECT_COLOR);
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