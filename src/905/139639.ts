import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { V } from "../figma_app/304955";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
export function $$l0() {
  let e = wA();
  return useCallback((t, i, n) => {
    if (n) {
      if (i === n) return !1;
      if (V().filter(e => !e.isSubscribedAsset && !e.isSoftDeleted && e.codeFilePath === t).map(e => e.name.toLowerCase()).filter(Boolean).includes(n.toLowerCase())) {
        e(F.enqueue({
          message: _$$t("sites.code_components.code_file_duplicate_name"),
          type: "code-file-rename",
          error: !0
        }));
        return !0;
      }
    }
    return !1;
  }, [e]);
}
export const s = $$l0;