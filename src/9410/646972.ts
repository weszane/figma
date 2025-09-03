import { throwTypeError } from "../figma_app/465776";
import { nn } from "../figma_app/186343";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { iZ } from "../905/372672";
import { cT } from "../figma_app/32128";
import { Qy } from "../figma_app/146384";
let c = /^Page \d+$/;
var u = (e => (e.FILE_LOADING = "fileLoading", e.K_12 = "k12", e.READ_ONLY = "readOnly", e.PERSONAL_DRAFT = "personalDraft", e))(u || {});
export function $$p1() {
  let e = sZ();
  let t = !!e?.k12_google_org;
  let i = iZ()?.profile?.job_title;
  return t && "student" === i;
}
function h() {
  let e = q5();
  let t = cT();
  let i = $$p1();
  return e ? i ? "k12" : t ? "readOnly" : Qy(e) ? "personalDraft" : null : "fileLoading";
}
export var $$m3 = (e => (e.ADD_PAGE = "addPage", e.VIEW_PAGES = "viewPages", e))($$m3 || {});
export function $$f0({
  nonDividerPageCount: e
}) {
  let t = h();
  let i = nn();
  let a = i && !c.exec(i);
  if ("fileLoading" === t) return null;
  if (e > 1 || a) return "viewPages";
  switch (t) {
    case null:
      return "addPage";
    case "readOnly":
    case "personalDraft":
      return "viewPages";
    case "k12":
      return null;
    default:
      throwTypeError(t);
  }
}
export function $$g2() {
  return null === h();
}
export function $$_4() {
  return null === h();
}
export const h5 = $$f0;
export const hZ = $$p1;
export const hs = $$g2;
export const mb = $$m3;
export const sv = $$_4;