import { throwTypeError } from "../figma_app/465776";
import { nn } from "../figma_app/186343";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { cT } from "../figma_app/32128";
import { Qy } from "../figma_app/146384";
if (443 == require.j) {}
let c = /^Page \d+$/;
var u = (e => (e.FILE_LOADING = "fileLoading", e.K_12 = "k12", e.READ_ONLY = "readOnly", e.PERSONAL_DRAFT = "personalDraft", e))(u || {});
export function $$m1() {
  let e = sZ();
  let t = !!e?.k12_google_org;
  let r = selectCurrentUser()?.profile?.job_title;
  return t && "student" === r;
}
function _() {
  let e = q5();
  let t = cT();
  let r = $$m1();
  return e ? r ? "k12" : t ? "readOnly" : Qy(e) ? "personalDraft" : null : "fileLoading";
}
export var $$p3 = (e => (e.ADD_PAGE = "addPage", e.VIEW_PAGES = "viewPages", e))($$p3 || {});
export function $$f0({
  nonDividerPageCount: e
}) {
  let t = _();
  let r = nn();
  let i = r && !c.exec(r);
  if ("fileLoading" === t) return null;
  if (e > 1 || i) return "viewPages";
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
  return null === _();
}
export function $$h4() {
  return null === _();
}
export const h5 = $$f0;
export const hZ = $$m1;
export const hs = $$g2;
export const mb = $$p3;
export const sv = $$h4;