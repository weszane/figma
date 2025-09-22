import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { autosaveFileInfoAtom } from "../figma_app/840917";
import { selectCurrentFile } from "../figma_app/516028";
export function $$o0() {
  let e = selectCurrentFile();
  let t = useAtomWithSubscription(autosaveFileInfoAtom);
  return e ? e.name : t ? t.name : getI18nString("fullscreen.filename_view.title_placeholder");
}
export const Z = $$o0;