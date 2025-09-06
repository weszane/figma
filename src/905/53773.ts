import { getI18nString } from "../905/303541";
export function $$r0(e) {
  return e < 999 ? e.toString() : getI18nString("file_browser.folder.truncated_file_count", {
    maxCount: 999
  });
}
export const t = $$r0;