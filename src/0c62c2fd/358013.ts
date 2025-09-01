import { d4 } from "../vendor/514228";
import { nt } from "../figma_app/687776";
import { h } from "../figma_app/334471";
import { FFileType } from "../figma_app/191312";
import { No, YY } from "../figma_app/465071";
import { W } from "../905/442612";
if (443 == require.j) {}
export function $$d0() {
  let e = d4(e => e.user?.drafts_folder_id);
  let t = nt(e);
  let r = h(t.data);
  let d = No();
  let c = YY(d).unwrapOr(!1);
  return t.transform(e => {
    let t = r.find(({
      editorType: e
    }) => e === FFileType.FIGMAKE);
    let a = c && W();
    return !!t?.canCreate && !a;
  });
}
export const E = $$d0;