import { oB } from "../905/115338";
import { yJ, bE, sF } from "../figma_app/78808";
import { yH } from "../figma_app/598926";
import { FPermissionLevelType } from "../figma_app/191312";
export function $$s1(e) {
  return !!(e && e.org_browsable && (e.link_access === FPermissionLevelType.ORG_EDIT || e.link_access === FPermissionLevelType.ORG_VIEW));
}
export let $$o0 = oB(function (e, t) {
  if (yH.matches(t)) {
    if (e.folder_id && t.payload.folderIds.indexOf(e.folder_id) > -1) return {
      ...e,
      folder_id: null
    };
  } else if (yJ.matches(t) || bE.matches(t) || sF.matches(t)) return t.payload && t.payload.file && e && t.payload.file.key === e.key ? {
    ...e,
    ...t.payload.file
  } : e;
  return e;
}, {
  shouldIgnoreAction: e => !(yH.matches(e) || yJ.matches(e) || sF.matches(e) || bE.matches(e))
});
export const N = $$o0;
export const Y = $$s1;