import { ServiceCategories as _$$e } from "../905/165054";
import { l as _$$l } from "../905/716947";
import { $D } from "../905/11";
export function $$s0(e) {
  if (!e.library_key) {
    let t = Error("No library key found for file");
    $D(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, t, {
      tags: {
        fileKey: e.key ?? e.fileKey
      }
    });
    return;
  }
  return _$$l(e.library_key);
}
export const l = $$s0;