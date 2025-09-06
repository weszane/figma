import { jsx } from "react/jsx-runtime";
import { Q } from "../905/730680";
import { D } from "../905/198083";
import { l as _$$l } from "../905/697177";
import { C } from "../905/850064";
import { L } from "../905/782297";
import { t as _$$t } from "../905/958417";
import { E } from "../905/267344";
import { J } from "../905/525097";
import { getI18nString } from "../905/303541";
import { G9 } from "../figma_app/975811";
import { l6, c$ } from "../905/794875";
import { hj } from "../905/859070";
let $$f1 = ["NONE", "ROUND", "SQUARE"];
let $$_6 = ["ARROW_LINES", "ARROW_EQUILATERAL", "TRIANGLE_FILLED", "CIRCLE_FILLED", "DIAMOND_FILLED"];
export class $$A3 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "NONE":
          return getI18nString("fullscreen.properties_panel.stroke_settings.none");
        case "ARROW_LINES":
          return getI18nString("fullscreen.properties_panel.stroke_settings.line_arrow");
        case "ARROW_EQUILATERAL":
          return getI18nString("fullscreen.properties_panel.stroke_settings.triangle_arrow");
        case "TRIANGLE_FILLED":
          return getI18nString("fullscreen.properties_panel.stroke_settings.reversed_triangle");
        case "CIRCLE_FILLED":
          return getI18nString("fullscreen.properties_panel.stroke_settings.circle_arrow");
        case "DIAMOND_FILLED":
          return getI18nString("fullscreen.properties_panel.stroke_settings.diamond_arrow");
        case "ROUND":
          return getI18nString("fullscreen.properties_panel.stroke_settings.round");
        case "SQUARE":
          return getI18nString("fullscreen.properties_panel.stroke_settings.square");
        case "HIGHLIGHT":
        case "WASHI_TAPE_1":
        case "WASHI_TAPE_2":
        case "WASHI_TAPE_3":
        case "WASHI_TAPE_4":
        case "WASHI_TAPE_5":
        case "WASHI_TAPE_6":
          return "";
      }
    };
  }
}
export class $$y0 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "NONE":
          return getI18nString("fullscreen.properties_panel.stroke_settings.none");
        case "ROUND":
          return getI18nString("fullscreen.properties_panel.stroke_settings.round");
        case "SQUARE":
          return getI18nString("fullscreen.properties_panel.stroke_settings.square");
        case "ARROW_LINES":
          return getI18nString("fullscreen.properties_panel.section_stroke.dropdown_startEndPoint.value_line");
        case "ARROW_EQUILATERAL":
          return getI18nString("fullscreen.properties_panel.section_stroke.dropdown_startEndPoint.value_triangle");
        case "TRIANGLE_FILLED":
          return getI18nString("fullscreen.properties_panel.section_stroke.dropdown_startEndPoint.value_reversed");
        case "CIRCLE_FILLED":
          return getI18nString("fullscreen.properties_panel.section_stroke.dropdown_startEndPoint.value_circle");
        case "DIAMOND_FILLED":
          return getI18nString("fullscreen.properties_panel.section_stroke.dropdown_startEndPoint.value_diamond");
        case "HIGHLIGHT":
        case "WASHI_TAPE_1":
        case "WASHI_TAPE_2":
        case "WASHI_TAPE_3":
        case "WASHI_TAPE_4":
        case "WASHI_TAPE_5":
        case "WASHI_TAPE_6":
          return "";
      }
    };
  }
}
new G9({
  allowEmpty: !0,
  autoValue: {
    value: 0,
    units: "RAW"
  },
  min: 0,
  smallPixelNudgeAmount: 1,
  bigPixelNudgeAmount: 10,
  smallPercentageNudgeAmount: 1,
  bigPercentageNudgeAmount: 10
});
let $$b4 = l6;
let $$v2 = c$;
export function $$I5(e, t = "right") {
  let i = (() => {
    switch (e) {
      case "NONE":
        return jsx(Q, {});
      case "ARROW_LINES":
        return jsx(D, {});
      case "ARROW_EQUILATERAL":
        return jsx(_$$l, {});
      case "TRIANGLE_FILLED":
        return jsx(C, {});
      case "DIAMOND_FILLED":
        return jsx(L, {});
      case "CIRCLE_FILLED":
        return jsx(_$$t, {});
      case "ROUND":
        return jsx(E, {});
      case "SQUARE":
        return jsx(J, {});
      default:
        return;
    }
  })();
  if (i) return jsx("div", {
    className: "left" === t ? hj : void 0,
    children: i
  });
}
export const EN = $$y0;
export const Gp = $$f1;
export const NC = $$v2;
export const OH = $$A3;
export const SO = $$b4;
export const Sp = $$I5;
export const yh = $$_6;