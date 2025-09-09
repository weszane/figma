import { throwTypeError } from "../figma_app/465776";
import { useAtomWithSubscription, atom } from "../figma_app/27355";
import { isGovCluster } from "../figma_app/169182";
import { getPlanFeaturesAtomFamily } from "../905/276025";
import { FEditorType } from "../figma_app/53721";
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
  return useAtomWithSubscription($$h0);
}
export let $$h0 = atom(e => {
  let t = e(getPlanFeaturesAtomFamily(!0));
  let r = e(u8);
  return $$p2(t.data, r);
});
function m(e) {
  if (!e) return !0;
  switch (e) {
    case FEditorType.Design:
    case FEditorType.Illustration:
    case FEditorType.DevHandoff:
      return !0;
    case FEditorType.Cooper:
    case FEditorType.Slides:
    case FEditorType.Sites:
    case FEditorType.Figmake:
    case FEditorType.Whiteboard:
      return !1;
    default:
      throwTypeError(e);
  }
}
export const JB = $$h0;
export const MJ = $$u1;
export const ek = $$p2;
export const n1 = $$_3;