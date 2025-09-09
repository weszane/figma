import { useMemo } from "react";
import i from "../vendor/128080";
import { Rs } from "../figma_app/288654";
import { Kz } from "../905/760074";
import { FileExpirationView, FilePermissionsV2 } from "../figma_app/43951";
import { d4 } from "../905/759412";
var a = i;
export function $$c1(e) {
  let t = Rs(FileExpirationView, {
    figFileKey: null != e ? Kz(e) ? e.sourceFileKey : e.key : ""
  }, {
    enabled: null != e
  });
  return useMemo(() => {
    if ("loaded" !== t.status) return;
    let e = t.data?.figFileLinkExpirationConfig;
    let r = t.data?.file;
    if (!e) return;
    let n = d4(e);
    return {
      file: r,
      accessReverted: !!e.accessReverted,
      expiresAt: e.expiresAt?.toISOString(),
      activeExpiration: n?.toISOString()
    };
  }, [t]);
}
export function $$u0(e, t) {
  let r = Rs(FilePermissionsV2, {
    fileKey: e.key,
    teamId: e.teamId,
    projectId: e.folderId,
    repoId: e.fileRepoId,
    currentOrgId: t
  });
  let i = Kz(e);
  return useMemo(() => {
    if (!t || "loaded" !== r.status) return;
    let e = r.data?.file;
    if (!e) return;
    let n = p(e);
    let s = !1;
    i && (s = a()(n, p(e, !1)));
    return {
      filePermissionsData: n,
      isBranch: i,
      branchMatchesRepo: s,
      linkExpiresAt: e.fileLinkExpirationConfig ? e.fileLinkExpirationConfig.expiresAt : e.sourceFileLinkExpirationConfig?.expiresAt
    };
  }, [r, t, i]);
}
function p(e, t = !0) {
  let r = t && e.repo ? e.repo : e;
  return {
    link_access: r.linkAccess,
    proto_link_access: r.protoLinkAccess,
    org_audience: !!r.orgAudience,
    org_browsable: !!r.orgBrowsable,
    has_file_link_password: !!r.hasFileLinkPassword,
    has_proto_link_password: !!e.hasProtoLinkPassword,
    parent_org_id: e.parentOrgId
  };
}
export const B = $$u0;
export const v = $$c1;