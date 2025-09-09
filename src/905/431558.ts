import { setupResourceAtomHandler } from "../figma_app/566371";
import { p } from "../905/896627";
import { A } from "../905/17894";
import { Lz } from "../905/497882";
import { LK } from "../905/104173";
function l({
  error: e,
  setValue: t
}) {
  return !!t && "INVALID_CATEGORY" === e.key && (t(void 0), !0);
}
export function $$d0(e) {
  p(e, l);
  let {
    figFile,
    viewerModeField,
    existingResourceContent,
    localExtension
  } = e.deps;
  let [u] = setupResourceAtomHandler(LK({
    figFile,
    currentViewerMode: viewerModeField && Lz(viewerModeField, void 0),
    existingResourceContent,
    localExtension
  }), {
    enabled: viewerModeField?.currentValue !== A
  });
  return {
    ...e,
    validCategories: "loaded" === u.status ? u.data : []
  };
}
export const t = $$d0;