import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { FileCreationPermissionsView } from "../figma_app/43951";
import { gq } from "../905/276025";
let o = atom(e => {
  let t = e(gq(!0)).data?.draftsFolderId;
  if (!t) {
    let e = {
      code: "nonNullableResult",
      path: [],
      retriable: !1,
      error: Error("No draft folder id")
    };
    return resourceUtils.error([e]);
  }
  return e(FileCreationPermissionsView.Query({
    projectId: t
  })).transform(e => e.project);
});
export function $$l0() {
  return useAtomWithSubscription(o);
}
export const y = $$l0;