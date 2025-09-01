import { l } from "../905/716947";
if (443 == require.j) {}
export function $$s0(e) {
  let t = e.file ? {
    type: "file",
    fileKey: e.file.key,
    libraryKey: l(e.file.libraryKey),
    name: e.file.name,
    thumbnailUrl: `/file/${e.file.key}/thumbnail`,
    updatedAt: e.file.library?.updatedAt,
    owner: e.file.ownerRole?.user,
    repoOwner: e.file.repo?.ownerRole?.user,
    permissions: {
      linkAccess: e.file.linkAccess,
      protoLinkAccess: e.file.protoLinkAccess,
      orgAudience: e.file.orgAudience,
      orgBrowsable: e.file.orgBrowsable,
      hasFileLinkPassword: e.file.hasFileLinkPassword,
      hasProtoLinkPassword: e.file.hasProtoLinkPassword
    },
    approvedLibraries: e.file.library?.approvedLibraries,
    teamId: e.file.teamId
  } : null;
  return {
    org: e.org ? {
      id: e.org.id,
      name: e.org.name,
      librarySubscription: e.org.librarySubscriptionByLibraryKey,
      orgSharedSetting: e.org.orgSharedSetting,
      workspaces: e.org.workspaces ? e.org.workspaces.map(e => ({
        id: e.id,
        name: e.name,
        librarySubscription: e.librarySubscriptionByLibraryKey,
        canAdmin: e.canAdmin
      })) : null
    } : null,
    library: t
  };
}
export function $$i2(e) {
  let t = e.communityLibraryByHubFileId;
  let a = e.org;
  let s = t ? {
    type: "community",
    libraryKey: l(t.hubFile.libraryKey),
    hubFileId: t.hubFile.id,
    name: t.hubFile.currentHubFileVersion?.name ?? "",
    thumbnailUrl: t.hubFile.thumbnailUrl,
    updatedAt: t.updatedAt,
    profile: {
      name: t.hubFile.profile.name,
      imgUrl: t.hubFile.profile.imgUrl,
      supportContact: t.hubFile.supportContact
    }
  } : null;
  return {
    org: a ? {
      id: a.id,
      name: a.name,
      librarySubscription: a.librarySubscriptionByLibraryHubFileId,
      orgSharedSetting: a.orgSharedSetting,
      workspaces: a.workspaces ? a.workspaces.map(e => ({
        id: e.id,
        name: e.name,
        librarySubscription: e.librarySubscriptionByLibraryHubFileId,
        canAdmin: e.canAdmin
      })) : null
    } : null,
    library: s
  };
}
export function $$r1(e) {
  return "file" === e.type ? e.fileKey : e.hubFileId;
}
export const Ti = $$s0;
export const Xs = $$r1;
export const gi = $$i2;