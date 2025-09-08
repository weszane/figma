import { AccessibilityAttributes, MixedBlockType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { isInvalidValue } from "../905/216495";
var $$s0 = (e => (e.AUTO = "AUTO", e.DIV = "DIV", e.SPAN = "SPAN", e.P = "P", e.H1 = "H1", e.H2 = "H2", e.H3 = "H3", e.H4 = "H4", e.H5 = "H5", e.H6 = "H6", e.ARTICLE = "ARTICLE", e.ASIDE = "ASIDE", e.FOOTER = "FOOTER", e.HEADER = "HEADER", e.MAIN = "MAIN", e.NAV = "NAV", e.SECTION = "SECTION", e.IMG = "IMG", e.VIDEO = "VIDEO", e.BUTTON = "BUTTON", e.FIGURE = "FIGURE", e.IFRAME = "IFRAME", e.OL = "OL", e.UL = "UL", e))($$s0 || {});
let o = {
  value: "DIV"
};
let l = {
  value: "ARTICLE"
};
let d = {
  value: "ASIDE"
};
let c = {
  value: "BUTTON"
};
let u = {
  value: "FIGURE"
};
let p = {
  value: "FOOTER"
};
let h = {
  value: "HEADER"
};
let m = {
  value: "MAIN"
};
let f = {
  value: "NAV"
};
let g = {
  value: "OL"
};
let $$_ = {
  value: "UL"
};
let x = {
  value: "SECTION"
};
let y = {
  value: "P"
};
let $$b = {
  value: "H1"
};
let C = {
  value: "H2"
};
let v = {
  value: "H3"
};
let E = {
  value: "H4"
};
let T = {
  value: "H5"
};
let w = {
  value: "H6"
};
let S = {
  value: "IMG"
};
let j = {
  value: "VIDEO"
};
let I = {
  value: "IFRAME"
};
export function $$k1(e, t, i) {
  switch ((!e || isInvalidValue(e)) && (e = AccessibilityAttributes.NONE), t) {
    case MixedBlockType.MIXED:
      return {
        category: t,
        tagDefaultValue: "AUTO",
        tagOptions: [],
        tagEditable: !1,
        labelType: e
      };
    case MixedBlockType.TEXT:
      let s = y;
      getFeatureFlags().sts_a11y_aria_attributes && ("UNORDERED_LIST" === i ? s = $$_ : "ORDERED_LIST" === i && (s = g));
      return {
        category: t,
        tagDefaultValue: s.value,
        tagOptions: [...(s === $$_ || s === g ? [s, {
          divider: !0
        }] : []), y, $$b, C, v, E, T, w],
        tagEditable: !0,
        labelType: e
      };
    case MixedBlockType.BLOCK:
      return {
        category: t,
        tagDefaultValue: o.value,
        tagOptions: [o, l, d, !!getFeatureFlags().sts_a11y_button_tag && c, u, p, h, m, f, x, ...(getFeatureFlags().sts_a11y_ol_ul_tags ? [{
          divider: !0
        }, g, $$_] : [])].filter(Boolean),
        tagEditable: !0,
        labelType: e
      };
    case MixedBlockType.BLOCK_WITH_IMAGE:
      return {
        category: t,
        tagDefaultValue: getFeatureFlags().sts_a11y_aria_attributes ? S.value : o.value,
        tagOptions: [...(getFeatureFlags().sts_a11y_aria_attributes ? [S] : []), o, l, d, !!getFeatureFlags().sts_a11y_button_tag && c, u, p, h, m, f, x, ...(getFeatureFlags().sts_a11y_ol_ul_tags ? [{
          divider: !0
        }, g, $$_] : [])].filter(Boolean),
        tagEditable: !0,
        labelType: e
      };
    case MixedBlockType.BLOCK_WITH_VIDEO:
      return {
        category: t,
        tagDefaultValue: getFeatureFlags().sts_a11y_aria_attributes ? j.value : o.value,
        tagOptions: [...(getFeatureFlags().sts_a11y_aria_attributes ? [j] : []), o, l, d, !!getFeatureFlags().sts_a11y_button_tag && c, u, p, h, m, f, x, ...(getFeatureFlags().sts_a11y_ol_ul_tags ? [{
          divider: !0
        }, g, $$_] : [])].filter(Boolean),
        tagEditable: !0,
        labelType: e
      };
    case MixedBlockType.IFRAME:
      return {
        category: t,
        tagDefaultValue: I.value,
        tagOptions: [I],
        tagEditable: !1,
        labelType: e
      };
    default:
      return {
        category: MixedBlockType.NONE,
        tagDefaultValue: "AUTO",
        tagOptions: [],
        tagEditable: !1,
        labelType: e
      };
  }
}
export const _ = $$s0;
export const b = $$k1;