import { s as _$$s } from "../905/583953";
import { getCenteredRotation } from "../905/346946";
import { getI18nString } from "../905/303541";
import { Yb, HD } from "../figma_app/62612";
import { GY } from "../figma_app/348938";
export function $$l3(e, t) {
  return GY(e, t) || "WIDGET" === t.type;
}
export function $$d4(e) {
  return "SECTION" === e;
}
export function $$c9(e) {
  return $$d4(e.type) && e.name ? e.name : null;
}
export function $$u10(e) {
  if (0 === Math.round(e.angle)) return e;
  let t = getCenteredRotation(e.angle, e.width, e.height);
  return {
    ...e,
    x: e.x - t[0][2],
    y: e.y - t[1][2]
  };
}
export function $$p7(e) {
  let t = e?.textData;
  return t?.characters ? {
    characters: t.characters,
    lines: t.lines,
    styleOverrideTable: t.styleOverrideTable,
    characterStyleIDs: t.characterStyleIDs,
    hyperlink: e.hyperlink,
    defaultFont: e.fontName,
    defaultFontSize: e.fontSize,
    defaultTextDecoration: e.textDecoration
  } : {};
}
export function $$_8(e) {
  return "TABLE" !== e.type ? [] : e.sortedTableCells;
}
export function $$h1(e) {
  return e.fills && (1 === e.fills.length && "IMAGE" === e.fills[0].type || 2 === e.fills.length && "IMAGE" === e.fills[1].type) ? "img" : "SECTION" === e.type ? "region" : "TABLE" === e.type ? "table" : "group";
}
let m = {
  x: 0,
  y: 0,
  width: 1e3,
  height: 1e3,
  angle: 0
};
export function $$g5(e) {
  let t = Yb(e, m);
  let r = HD(t, e);
  return {
    left: r.x,
    top: r.y,
    width: r.width,
    height: r.height,
    position: "absolute"
  };
}
export function $$f6(e, t) {
  let r = 0 !== Math.round(e.angle) ? {
    transform: `rotate(${(360 - e.angle).toString()}deg)`
  } : {};
  let n = m;
  "canvas" !== t && (n = t);
  return {
    position: "absolute",
    left: 100 * e.x / n.width + "%",
    top: 100 * e.y / n.height + "%",
    width: 100 * e.width / n.width + "%",
    height: 100 * e.height / n.height + "%",
    ...r
  };
}
export function $$E0(e, t, r = {
  x: 1e3,
  y: 1e3
}, i = _$$s.identity().toFigMatrix()) {
  let a = e.x / r.x;
  let s = e.y / r.y;
  let o = _$$s.fromFigMatrix(i);
  if (!o.invert()) return {
    position: "absolute",
    height: "1px",
    width: "1px"
  };
  o.multiply(_$$s.fromFigMatrix(t));
  let l = o.offset();
  let d = o.toDegrees();
  return {
    position: "absolute",
    top: `${l.y / r.y * 100}%`,
    left: `${l.x / r.x * 100}%`,
    height: `${100 * s}%`,
    width: `${100 * a}%`,
    transform: `rotate(${d}deg)`,
    transformOrigin: "top left"
  };
}
export function $$y2(e) {
  switch (e) {
    case "DIAMOND":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-diamond");
    case "ELLIPSE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-ellipse");
    case "ENG_DATABASE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-eng-database");
    case "ENG_FILE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-eng-file");
    case "ENG_FOLDER":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-eng-folder");
    case "ENG_QUEUE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-eng-queue");
    case "PARALLELOGRAM_RIGHT":
    case "PARALLELOGRAM_LEFT":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-parallelogram-right");
    case "ROUNDED_RECTANGLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-rounded-rectangle");
    case "SQUARE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-square");
    case "TRIANGLE_DOWN":
    case "TRIANGLE_UP":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-triangle-down");
    case "TRAPEZOID":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-trapezoid");
    case "STAR":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-star");
    case "SHIELD":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-shield");
    case "HEXAGON":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-hexagon");
    case "PENTAGON":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-pentagon");
    case "OCTAGON":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-octagon");
    case "PLUS":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-plus");
    case "PREDEFINED_PROCESS":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-predefined-process");
    case "MANUAL_INPUT":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-manual-input");
    case "CHEVRON":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-chevron");
    case "DOCUMENT_SINGLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-document-single");
    case "DOCUMENT_MULTIPLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-document-multiple");
    case "ARROW_LEFT":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-arrow-left");
    case "ARROW_RIGHT":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-arrow-right");
    case "SUMMING_JUNCTION":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-summing-junction");
    case "OR":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-or");
    case "SPEECH_BUBBLE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-speech-bubble");
    case "INTERNAL_STORAGE":
      return getI18nString("fullscreen.accessibility_dom.node_name_whiteboard-internal-storage");
    default:
      throw Error(`Unhandled shape type: ${e}`);
  }
}
export const EO = $$E0;
export const U3 = $$h1;
export const ZG = $$y2;
export const dl = $$l3;
export const iT = $$d4;
export const it = $$g5;
export const l0 = $$f6;
export const q4 = $$p7;
export const qJ = $$_8;
export const sh = $$c9;
export const xR = $$u10;