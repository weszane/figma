import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResourceStatus } from "../905/957591";
import { selectWithShallowEqual } from "../905/103090";
import { useSubscription } from "../figma_app/288654";
import { h3 } from "../figma_app/976345";
import { jl } from "../figma_app/199513";
import { selectCurrentUser } from "../905/372672";
import { FileKeysInProject } from "../figma_app/43951";
import { hasExternalRestrictedOrgId } from "../figma_app/12796";
if (443 == require.j) {}
let m = 443 == require.j ? 9e5 : null;
export function $$p2(e, t) {
  return !(new Date().getTime() - e.getTime() > m) && (!t || e.getTime() > t.getTime());
}
export function $$g1() {
  let e = selectCurrentUser();
  let t = useSelector(e => e.userFlags);
  let n = e?.personal_drafts_folder_id ?? "";
  let a = !!n;
  let o = useSubscription(FileKeysInProject, {
    projectId: n
  }, {
    enabled: a
  });
  if (!a || h(e, t)) return 0;
  let l = o.data?.project?.status !== ResourceStatus.Loaded ? [] : o.data?.project.data?.undeletedFiles ?? [];
  let d = 0;
  let u = new Set();
  l.forEach(e => {
    e.fileRepoId ? u.has(e.fileRepoId) || (d++, u.add(e.fileRepoId)) : d++;
  });
  let m = l.filter(e => e.trackTags?.isTemplate).length;
  return d === m ? 0 : d;
}
export function $$f0() {
  let {
    fileByKey,
    fileKeysByFolderId,
    deletedFilesByKey,
    loadedFolders
  } = selectWithShallowEqual(e => ({
    fileByKey: e.fileByKey,
    fileKeysByFolderId: e.fileKeysByFolderId,
    deletedFilesByKey: e.deletedFilesByKey,
    loadedFolders: e.loadedFolders
  }));
  let s = selectCurrentUser();
  let _ = useDispatch();
  let u = useSelector(e => e.userFlags);
  let m = s?.personal_drafts_folder_id;
  useEffect(() => {
    m && _(jl({
      folderId: m,
      loadedFolders
    }));
  }, [loadedFolders, _, m]);
  useEffect(() => {
    _(h3({
      orgId: null,
      teamId: null
    }));
  }, [_]);
  let p = useMemo(() => m ? (fileKeysByFolderId[m] ?? []).map(t => fileByKey[t]).filter(e => !!e) : [], [fileByKey, fileKeysByFolderId, m]);
  if (h(s, u)) return [];
  let g = Object.keys(deletedFilesByKey).map(e => deletedFilesByKey[e]).filter(e => e.folder_id === m);
  return p.concat(g);
}
function h(e, t) {
  if (hasExternalRestrictedOrgId(e)) return !0;
  let {
    personal_draft_migration_scheduled,
    personal_draft_migration_completed,
    personal_draft_deletion_scheduled,
    personal_draft_deletion_completed
  } = t;
  let o = personal_draft_migration_scheduled && $$p2(personal_draft_migration_scheduled.updatedAt, personal_draft_migration_completed?.updatedAt);
  let s = personal_draft_deletion_scheduled && $$p2(personal_draft_deletion_scheduled.updatedAt, personal_draft_deletion_completed?.updatedAt);
  return o || s;
}
export const Gs = $$f0;
export const j0 = $$g1;
export const rO = $$p2;