import { S9, xb } from "../figma_app/465776";
import { h62 } from "../figma_app/763686";
import { FFileType } from "../figma_app/191312";
export let $$s1 = [FFileType.DESIGN, FFileType.WHITEBOARD, FFileType.SLIDES, FFileType.SITES, FFileType.COOPER, FFileType.FIGMAKE];
var $$o7 = (e => (e[e.SUCCESS = 0] = "SUCCESS", e[e.WARNING = 1] = "WARNING", e[e.FAILURE = 2] = "FAILURE", e[e.BUSY = 3] = "BUSY", e[e.WAITING = 4] = "WAITING", e[e.CANCELED = 5] = "CANCELED", e))($$o7 || {});
var $$l3 = (e => (e.START = "start", e.CONFIRM_PDF_IMPORT = "confirm_pdf_import", e.FILE_IMPORT_WITH_CANCELED_PDF = "file_import_with_canceled_pdf", e.FILE_IMPORT_WITH_CONFIRMED_PDF = "file_import_with_confirmed_pdf", e.IMPORT_REPO = "import_repo", e))($$l3 || {});
export function $$d5(e) {
  let t = e.replace(/\.[^\.]+$/, "");
  return e.slice(t.length);
}
export function $$c2(e) {
  let t = e.name;
  return $$p6(t) || u(t, ".jam") ? FFileType.WHITEBOARD : u(t, ".deck") || u(t, ".pptx") ? FFileType.SLIDES : u(t, ".site") ? FFileType.SITES : u(t, ".buzz") ? FFileType.COOPER : u(t, ".make") ? FFileType.FIGMAKE : FFileType.DESIGN;
}
function u(e, t) {
  t.startsWith(".") || (t = "." + t);
  return $$d5(e).toLowerCase() === t;
}
export function $$p6(e) {
  return u(e, ".pdf");
}
export function $$m0(e) {
  switch (e) {
    case "fig":
      return FFileType.DESIGN;
    case "jam":
      return FFileType.WHITEBOARD;
    case "deck":
      return FFileType.SLIDES;
    case "sites":
      return FFileType.SITES;
    case "buzz":
      return FFileType.COOPER;
    case "figmake":
      return FFileType.FIGMAKE;
    default:
      return S9(e, null);
  }
}
export function $$h4(e) {
  switch (e) {
    case h62.MIRO:
      return "Miro";
    case h62.MURAL:
      return "Mural";
    case h62.LUCID:
      return "Lucid";
    case h62.JAMBOARD:
      return "Jamboard";
    case h62.UNKNOWN:
      return "Unknown";
    default:
      xb(e);
  }
}
export const Ec = $$m0;
export const Mk = $$s1;
export const NU = $$c2;
export const Y5 = $$l3;
export const bT = $$h4;
export const dv = $$d5;
export const kI = $$p6;
export const mO = $$o7;