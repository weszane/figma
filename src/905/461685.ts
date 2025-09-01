import { eU, md } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { zCd } from "../figma_app/43951";
import { gq } from "../905/276025";
let o = eU(e => {
  let t = e(gq(!0)).data?.draftsFolderId;
  if (!t) {
    let e = {
      code: "nonNullableResult",
      path: [],
      retriable: !1,
      error: Error("No draft folder id")
    };
    return Qw.error([e]);
  }
  return e(zCd.Query({
    projectId: t
  })).transform(e => e.project);
});
export function $$l0() {
  return md(o);
}
export const y = $$l0;