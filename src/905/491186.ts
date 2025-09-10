import { q42 } from "src/figma_app/822011";
export function $$r0(e, t, i) {
  let r = function (e, t, i) {
    if (e.openFile && null !== i) {
      let n = e.fileByKey[e.openFile.key];
      let r = n?.[t] ?? null;
      if (null !== r) {
        let e = "id";
        if ("team_user" === t ? e = "team_id" : "org_user" === t && (e = "org_id"), r[e] === i) return r;
      }
    }
    return q42.PENDING_LOAD;
  }(e, t, i);
  return r === q42.PENDING_LOAD ? null : r || null;
}
export const J = $$r0;
