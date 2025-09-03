import { throwTypeError } from "../figma_app/465776";
import { daH } from "../figma_app/763686";
import { YU } from "../figma_app/191804";
import { t } from "../905/303541";
import { Tn, OF, Zv, L5, QE, B8 } from "../figma_app/728075";
let $$l5 = "TYPESCRIPT";
let $$d3 = ["BASH", "CPP", "CSS", "GO", "GRAPHQL", "HTML", "JAVASCRIPT", "JSON", "KOTLIN", "PLAINTEXT", "PYTHON", "RUBY", "RUST", "SQL", "SWIFT", "TYPESCRIPT"];
let $$c6 = {
  format: e => {
    switch (e) {
      case "CSS":
        return t("whiteboard.code_blocks.css");
      case "TYPESCRIPT":
        return t("whiteboard.code_blocks.type_script");
      case "CPP":
        return t("whiteboard.code_blocks.c");
      case "RUBY":
        return t("whiteboard.code_blocks.ruby");
      case "JAVASCRIPT":
        return t("whiteboard.code_blocks.java_script");
      case "HTML":
        return t("whiteboard.code_blocks.html");
      case "JSON":
        return t("whiteboard.code_blocks.json");
      case "GRAPHQL":
        return t("whiteboard.code_blocks.graph_ql");
      case "PYTHON":
        return t("whiteboard.code_blocks.python");
      case "GO":
        return t("whiteboard.code_blocks.go");
      case "SQL":
        return t("whiteboard.code_blocks.sql");
      case "SWIFT":
        return t("whiteboard.code_blocks.swift");
      case "KOTLIN":
        return t("whiteboard.code_blocks.kotlin");
      case "RUST":
        return t("whiteboard.code_blocks.rust");
      case "BASH":
        return t("whiteboard.code_blocks.bash");
      case "PLAINTEXT":
        return t("whiteboard.code_blocks.plaintext");
      default:
        return "";
    }
  }
};
let $$u7 = ["DRACULA", "DUOTONE_LIGHT", "DUOTONE_SEA", "DUOTONE_SPACE", "DUOTONE_EARTH", "DUOTONE_FOREST"];
export function $$p4(e) {
  switch (e) {
    case "DUOTONE_LIGHT":
      return Tn;
    case "DUOTONE_SEA":
      return OF;
    case "DUOTONE_SPACE":
      return Zv;
    case "DUOTONE_EARTH":
      return L5;
    case "DUOTONE_FOREST":
      return QE;
    default:
      return B8;
  }
}
export function $$_1(e) {
  switch (YU(e)) {
    case B8:
      return "DRACULA";
    case Tn:
      return "DUOTONE_LIGHT";
    case OF:
      return "DUOTONE_SEA";
    case Zv:
      return "DUOTONE_SPACE";
    case L5:
      return "DUOTONE_EARTH";
    case QE:
      return "DUOTONE_FOREST";
    default:
      return "DRACULA";
  }
}
export function $$h2(e) {
  switch (e) {
    case daH.CODE_BLOCK_DRACULA:
      return "DRACULA";
    case daH.CODE_BLOCK_DUOTONE_LIGHT:
      return "DUOTONE_LIGHT";
    case daH.CODE_BLOCK_DUOTONE_SEA:
      return "DUOTONE_SEA";
    case daH.CODE_BLOCK_DUOTONE_SPACE:
      return "DUOTONE_SPACE";
    case daH.CODE_BLOCK_DUOTONE_EARTH:
      return "DUOTONE_EARTH";
    case daH.CODE_BLOCK_DUOTONE_FOREST:
      return "DUOTONE_FOREST";
    default:
      return "DRACULA";
  }
}
export let $$m0 = {
  format: e => {
    switch (e) {
      case "FIGJAM_DARK":
        return t("whiteboard.code_blocks.theme.figjam_dark");
      case "DRACULA":
        return t("whiteboard.code_blocks.theme.dracula");
      case "DUOTONE_SEA":
        return t("whiteboard.code_blocks.theme.duotone_sea");
      case "DUOTONE_SPACE":
        return t("whiteboard.code_blocks.theme.duotone_space");
      case "DUOTONE_EARTH":
        return t("whiteboard.code_blocks.theme.duotone_earth");
      case "DUOTONE_FOREST":
        return t("whiteboard.code_blocks.theme.duotone_forest");
      case "DUOTONE_LIGHT":
        return t("whiteboard.code_blocks.theme.duotone_light");
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