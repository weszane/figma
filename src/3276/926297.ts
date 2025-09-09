import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useSubscription } from "../figma_app/288654";
import { VA } from "../figma_app/528509";
import { t as _$$t } from "../figma_app/579169";
import { useCurrentFileKey, selectOpenFileObject } from "../figma_app/516028";
import { FileWithRoleRequests, FilePermissionsV2 } from "../figma_app/43951";
import { Xs } from "../figma_app/349248";
export function $$u1() {
  let e = useCurrentFileKey();
  let t = useSubscription(FileWithRoleRequests, {
    fileKey: e ?? ""
  }, {
    enabled: !!e
  });
  return useMemo(() => t.data?.file?.fileRoleRequests ?? [], [t.data?.file?.fileRoleRequests]);
}
export function $$p0() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useSelector(selectOpenFileObject);
  let n = useAtomWithSubscription(_$$t).data ?? !0;
  let u = useSubscription(FilePermissionsV2, {
    fileKey: t?.key ?? "",
    teamId: t?.team_id ?? null,
    repoId: t?.file_repo_id ?? null,
    projectId: t?.folder_id ?? null,
    currentOrgId: e ?? null
  });
  return useMemo(() => {
    let e = "loaded" === u.status && u.data.file;
    if (!e) return null;
    let o = e.project;
    let a = VA(o);
    return {
      file: t,
      repo: e.repo ? {
        ...Xs(e.repo),
        canEdit: e.repo.canEdit
      } : null,
      hasOrg: !!e.org,
      isInDraftsFolder: a,
      isFreeUserOnly: n
    };
  }, [t, u.status, u.data, n]);
}
export const RC = $$p0;
export const Yx = $$u1;