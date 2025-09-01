import { Yx } from "../figma_app/930338";
import { t as _$$t } from "../905/303541";
import { ZG } from "../figma_app/536669";
import { rs } from "../figma_app/440994";
export function $$$$o1(e) {
  let t = [_$$t("fullscreen.accessibility_dom.comment_pin")];
  e.setSize > 1 && t.push(_$$t("fullscreen.accessibility_dom.pos_in_set", {
    i: e.setPos,
    size: e.setSize
  }));
  return Yx(t, "unit");
}
export function $$l0(e) {
  let t = [];
  for (let [i, n] of (e.shapeType && t.push(ZG(e.shapeType)), "img" === e.ariaRole ? e.accessibleLabel ? t.push(e.accessibleLabel) : t.push(_$$t("fullscreen.accessibility_dom.unlabeled_image")) : "MEDIA" === e.type ? e.accessibleLabel ? t.push(e.accessibleLabel) : t.push(_$$t("fullscreen.accessibility_dom.unlabeled_video")) : t.push(rs(e.type, e.editorType)), ("SECTION" === e.type || "INSTANCE" === e.type || "FRAME" === e.type) && e.name && t.push(e.name), e.contentsHidden && t.push(_$$t("fullscreen.accessibility.contents_hidden")), e.setData.size > 1 && t.push(_$$t("fullscreen.accessibility_dom.pos_in_set", {
    i: e.setData.i,
    size: e.setData.size
  })), e.numChildren && e.numChildren > 0 && t.push(_$$t("fullscreen.accessibility_dom.num_children", {
    n: e.numChildren
  })), Object.entries(e.stampFrequencies ?? {}))) t.push(_$$t("fullscreen.accessibility_dom.num_stamps", {
    count: n,
    name: i
  }));
  return Yx(t, "unit");
}
export const E = $$l0;
export const o = $$$$o1;