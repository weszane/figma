import { FontSourceType } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { trackFileEvent } from "../figma_app/314264";
export let $$n2;
let o = !1;
let l = !1;
let d = !1;
let c = !1;
export function $$u0() {
  l = !0;
  h();
}
export function $$p3() {
  o = !1;
  l = !1;
  d = !1;
  c = !1;
}
export function $$_4(e, t) {
  let r = debugState.getState();
  let n = r.openFile?.key;
  n && !c && (trackFileEvent("Show Missing Fonts Popover", n, r, {
    fontListLoaded: e,
    counts: t,
    timeNow: performance.now()
  }), c = !0);
}
function h() {
  if (o && l && !d) {
    let e = debugState.getState();
    let t = new Set(Object.values(e.fonts).map(e => Object.values(e)).flat().map(e => e.source));
    let r = e.openFile?.key;
    let n = e.figFileDuplicatedFromHubFile;
    let o = !1;
    void 0 !== r && void 0 !== n && (o = null != n[r]);
    trackFileEvent("has_missing_font", r, e, {
      has_google_fonts: t.has(FontSourceType.GOOGLE),
      has_local_fonts: t.has(FontSourceType.LOCAL),
      has_shared_fonts: t.has(FontSourceType.SHARED),
      is_community_duplicated_file: o
    });
    d = !0;
  }
}
class m {
  markMissingFontScannerAsComplete() {
    o = !0;
    h();
  }
}
export function $$g1() {
  $$n2 = new m();
}
export const DI = $$u0;
export const Ds = $$g1;
export const ZO = $$n2;
export const e8 = $$p3;
export const vS = $$_4;