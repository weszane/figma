import { throwTypeError } from "../figma_app/465776";
import { ColorOptions } from "../figma_app/763686";
import { colorToRgbaString } from "../figma_app/191804";
import { getI18nString } from "../905/303541";
import { neutralPaperColor, greenTealColor, redCaramelColor, redGoldColor, greenSageColor, neutralDarkColor } from "../figma_app/728075";
let $$l5 = "TYPESCRIPT";
let $$d3 = ["BASH", "CPP", "CSS", "GO", "GRAPHQL", "HTML", "JAVASCRIPT", "JSON", "KOTLIN", "PLAINTEXT", "PYTHON", "RUBY", "RUST", "SQL", "SWIFT", "TYPESCRIPT"];
let $$c6 = {
  format: e => {
    switch (e) {
      case "CSS":
        return getI18nString("whiteboard.code_blocks.css");
      case "TYPESCRIPT":
        return getI18nString("whiteboard.code_blocks.type_script");
      case "CPP":
        return getI18nString("whiteboard.code_blocks.c");
      case "RUBY":
        return getI18nString("whiteboard.code_blocks.ruby");
      case "JAVASCRIPT":
        return getI18nString("whiteboard.code_blocks.java_script");
      case "HTML":
        return getI18nString("whiteboard.code_blocks.html");
      case "JSON":
        return getI18nString("whiteboard.code_blocks.json");
      case "GRAPHQL":
        return getI18nString("whiteboard.code_blocks.graph_ql");
      case "PYTHON":
        return getI18nString("whiteboard.code_blocks.python");
      case "GO":
        return getI18nString("whiteboard.code_blocks.go");
      case "SQL":
        return getI18nString("whiteboard.code_blocks.sql");
      case "SWIFT":
        return getI18nString("whiteboard.code_blocks.swift");
      case "KOTLIN":
        return getI18nString("whiteboard.code_blocks.kotlin");
      case "RUST":
        return getI18nString("whiteboard.code_blocks.rust");
      case "BASH":
        return getI18nString("whiteboard.code_blocks.bash");
      case "PLAINTEXT":
        return getI18nString("whiteboard.code_blocks.plaintext");
      default:
        return "";
    }
  }
};
let $$u7 = ["DRACULA", "DUOTONE_LIGHT", "DUOTONE_SEA", "DUOTONE_SPACE", "DUOTONE_EARTH", "DUOTONE_FOREST"];
export function $$p4(e) {
  switch (e) {
    case "DUOTONE_LIGHT":
      return neutralPaperColor;
    case "DUOTONE_SEA":
      return greenTealColor;
    case "DUOTONE_SPACE":
      return redCaramelColor;
    case "DUOTONE_EARTH":
      return redGoldColor;
    case "DUOTONE_FOREST":
      return greenSageColor;
    default:
      return neutralDarkColor;
  }
}
export function $$_1(e) {
  switch (colorToRgbaString(e)) {
    case neutralDarkColor:
      return "DRACULA";
    case neutralPaperColor:
      return "DUOTONE_LIGHT";
    case greenTealColor:
      return "DUOTONE_SEA";
    case redCaramelColor:
      return "DUOTONE_SPACE";
    case redGoldColor:
      return "DUOTONE_EARTH";
    case greenSageColor:
      return "DUOTONE_FOREST";
    default:
      return "DRACULA";
  }
}
export function $$h2(e) {
  switch (e) {
    case ColorOptions.CODE_BLOCK_DRACULA:
      return "DRACULA";
    case ColorOptions.CODE_BLOCK_DUOTONE_LIGHT:
      return "DUOTONE_LIGHT";
    case ColorOptions.CODE_BLOCK_DUOTONE_SEA:
      return "DUOTONE_SEA";
    case ColorOptions.CODE_BLOCK_DUOTONE_SPACE:
      return "DUOTONE_SPACE";
    case ColorOptions.CODE_BLOCK_DUOTONE_EARTH:
      return "DUOTONE_EARTH";
    case ColorOptions.CODE_BLOCK_DUOTONE_FOREST:
      return "DUOTONE_FOREST";
    default:
      return "DRACULA";
  }
}
export let $$m0 = {
  format: e => {
    switch (e) {
      case "FIGJAM_DARK":
        return getI18nString("whiteboard.code_blocks.theme.figjam_dark");
      case "DRACULA":
        return getI18nString("whiteboard.code_blocks.theme.dracula");
      case "DUOTONE_SEA":
        return getI18nString("whiteboard.code_blocks.theme.duotone_sea");
      case "DUOTONE_SPACE":
        return getI18nString("whiteboard.code_blocks.theme.duotone_space");
      case "DUOTONE_EARTH":
        return getI18nString("whiteboard.code_blocks.theme.duotone_earth");
      case "DUOTONE_FOREST":
        return getI18nString("whiteboard.code_blocks.theme.duotone_forest");
      case "DUOTONE_LIGHT":
        return getI18nString("whiteboard.code_blocks.theme.duotone_light");
      default:
        return throwTypeError(e);
    }
  }
};
export const A$ = $$m0;
export const Kr = $$_1;
export const X0 = $$h2;
export const ie = $$d3;
export const jP = $$p4;
export const jW = $$l5;
export const lR = $$c6;
export const pd = $$u7;