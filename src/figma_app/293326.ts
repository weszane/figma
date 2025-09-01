import { parsePxInt } from "../figma_app/783094";
import { t as _$$t } from "../905/303541";
import { t as _$$t2 } from "../905/192333";
import { BuT, yUQ, XaD, fWT, nnJ, tui, i_6 } from "../figma_app/27776";
export function $$o0(e) {
  let t = [_$$t("whiteboard.inserts.search_placeholder_1"), _$$t("whiteboard.inserts.search_placeholder_2"), _$$t("whiteboard.inserts.search_placeholder_3"), _$$t("whiteboard.inserts.search_placeholder_4"), _$$t("whiteboard.inserts.search_placeholder_5"), _$$t("whiteboard.inserts.search_placeholder_6"), _$$t("whiteboard.inserts.search_placeholder_7"), _$$t("whiteboard.inserts.search_placeholder_8")];
  "en" === e && (t = t.concat([_$$t("whiteboard.inserts.search_placeholder_9"), _$$t("whiteboard.inserts.search_placeholder_10"), _$$t("whiteboard.inserts.search_placeholder_11"), _$$t("whiteboard.inserts.search_placeholder_12")]));
  return t[Math.floor(Math.random() * t.length)] ?? _$$t("whiteboard.inserts.search_placeholder_1");
}
let $$l3 = parsePxInt(BuT);
let $$d5 = parsePxInt(yUQ);
let $$c2 = parsePxInt(XaD);
let $$u4 = 62;
let p = parsePxInt(fWT);
let _ = parsePxInt(nnJ);
let $$h1 = parsePxInt(tui);
let $$m7 = parsePxInt(i_6);
let $$g8 = p + $$m7;
export function $$f6(e, t, r, n) {
  let i = e === _$$t2.PINNED_AND_DOCKED_LEFT && window.innerWidth >= _ ? 0 : n;
  let s = window.innerHeight - r - $$h1 - 2 * $$m7 - i;
  return e === _$$t2.PINNED_AND_DOCKED_LEFT ? s : Math.min(t, s);
}
export const DN = $$o0;
export const E0 = $$h1;
export const FL = $$c2;
export const HI = $$l3;
export const SK = $$u4;
export const kD = $$d5;
export const mS = $$f6;
export const wR = $$m7;
export const zD = $$g8;