import { throwTypeError } from "../figma_app/465776";
import { md, eU } from "../figma_app/27355";
import { isGovCluster } from "../figma_app/169182";
import { zl } from "../905/276025";
import { nT } from "../figma_app/53721";
import { n as _$$n } from "../905/347702";
import { u8 } from "../figma_app/976749";
let $$u1 = _$$n((e, t, r) => {
  let n = m(r);
  let i = e?.figma_provided_libraries_disabled || t?.figma_provided_libraries_disabled;
  return !!(!isGovCluster() && n && !i);
});
let $$p2 = _$$n((e, t) => {
  let r = m(t);
  let n = e?.figmaProvidedLibrariesEnabled;
  return !!(!isGovCluster() && r && n);
});
export function $$_3() {
  return md($$h0);
}
export let $$h0 = eU(e => {
  let t = e(zl(!0));
  let r = e(u8);
  return $$p2(t.data, r);
});
function m(e) {
  if (!e) return !0;
  switch (e) {
    case nT.Design:
    case nT.Illustration:
    case nT.DevHandoff:
      return !0;
    case nT.Cooper:
    case nT.Slides:
    case nT.Sites:
    case nT.Figmake:
    case nT.Whiteboard:
      return !1;
    default:
      throwTypeError(e);
  }
}
export const JB = $$h0;
export const MJ = $$u1;
export const ek = $$p2;
export const n1 = $$_3;