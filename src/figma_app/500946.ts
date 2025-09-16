import { showDropdownThunk } from "../905/929976";
import { si } from "../figma_app/8833";
import { gY } from "../figma_app/973927";
import { fullscreenValue } from "../figma_app/455680";
import { n as _$$n } from "../905/79930";
let l = ["#FFC470", "#DA9DFF", "#D5EB97", "#DA8167", "#E9FAFF"];
export function $$d2(e) {
  return l[e % l.length];
}
export function $$c1(e, t, r) {
  let n = e.find(e => e.id === t);
  if (!n) return null;
  let i = n.shelf_content.find(e => e.id === r);
  if (!i) return null;
  let s = {
    type: _$$n.HubFile,
    template: i,
    category: n.id
  };
  return gY(s);
}
export function $$u0(e, t) {
  if (!e || !e.isSection || !fullscreenValue.isReady()) return !1;
  let r = e.sectionPresetShelfId;
  let a = e.sectionPresetTemplateId;
  let o = e.name;
  let l = e.hasSectionPresetWithEdits;
  return !!o && (t(showDropdownThunk({
    type: si,
    data: {
      sectionId: e.guid,
      sectionName: o,
      initialShelfId: r,
      initialTemplateId: a,
      showAlertOnSelect: l
    }
  })), !0);
}
export const BQ = $$u0;
export const bO = $$c1;
export const j3 = $$d2;