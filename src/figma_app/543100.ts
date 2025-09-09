import { useMemo } from "react";
import { useSelector } from "react-redux";
import { throwTypeError, debug } from "../figma_app/465776";
import { atom, useAtomWithSubscription, createRemovableAtomFamily } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { oA } from "../905/723791";
import { findBestBranch, getDisplayNameAlt, findBranchById, generateUrl, hasPassword } from "../905/760074";
import { fileEntityDataMapper } from "../905/943101";
import { Z } from "../905/190310";
import { FEntityType, FFileType } from "../figma_app/191312";
import { FileCanView, RepoCanView, PrototypeCanView } from "../figma_app/43951";
import { F as _$$F } from "../905/915030";
import { I4 } from "../figma_app/840917";
import { Ph, Uj, i4 } from "../905/862913";
import { to, jN, rl } from "../905/612685";
var $$E8 = (e => (e.FILE = "FILE", e.PROTOTYPE = "PROTOTYPE", e.REPO = "REPO", e.PINNED_FILE = "PINNED_FILE", e.OFFLINE_FILE = "OFFLINE_FILE", e))($$E8 || {});
export function $$y5(e, t) {
  return {
    type: "FILE",
    file: {
      ...fileEntityDataMapper.toLiveGraph(e),
      owner: e.owner,
      trackTags: e.track_tags ? Z.toLiveGraph(e.track_tags) : null,
      UserFileRecentAny: e.accessed_at ? {
        actionAt: new Date(e.accessed_at)
      } : void 0
    },
    sharedWithYouFields: t ?? null
  };
}
export function $$b0(e) {
  return {
    type: "PROTOTYPE",
    prototype: e
  };
}
export function $$T10(e, t) {
  return {
    type: "REPO",
    repo: e.repo,
    branches: e.files,
    selectedBranchKey: t[e.repo.id],
    accessed_at: e.timestamp
  };
}
export function $$I6(e) {
  return {
    type: "OFFLINE_FILE",
    file: e
  };
}
export function $$S11(e) {
  let t = findBestBranch(e.repo, e.branches, e.selectedBranchKey);
  return t ? t : (e.repo.default_file_key ? findBestBranch(e.repo, e.branches, e.repo.default_file_key) : null) || e.branches[0];
}
export let $$v2 = atom(null);
export function $$A9(e) {
  let t = useSelector(e => e.tileSelect);
  return useMemo(() => e.filter(e => {
    let r = $$x1.getId(e);
    switch (e.type) {
      case "FILE":
        return t[_$$F.FILES][r];
      case "PINNED_FILE":
        return t[_$$F.PINNED_FILES][r];
      case "PROTOTYPE":
        return t[_$$F.PROTOTYPES][r];
      case "REPO":
        return t[_$$F.REPOS][r];
      case "OFFLINE_FILE":
        return t[_$$F.OFFLINE_FILES][r];
      default:
        throwTypeError(e);
    }
  }), [e, t]);
}
export class $$x1 {
  static getId(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key;
      case "PROTOTYPE":
        return e.prototype.file_key + "," + e.prototype.page_id + "," + e.prototype.id;
      case "REPO":
        return e.repo.id;
      case "OFFLINE_FILE":
        return e.file.fileKey;
      default:
        throwTypeError(e);
    }
  }
  static sameObject(e, t) {
    if (e.type !== t.type) return !1;
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key === t.file.key;
      case "PROTOTYPE":
        return e.prototype.id === t.prototype.id;
      case "REPO":
        return e.repo.id === t.repo.id;
      case "OFFLINE_FILE":
        return e.file.fileKey === t.file.fileKey;
      default:
        throwTypeError(e);
    }
  }
  static getName(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return e.file.name;
      case "PROTOTYPE":
        return e.prototype.fig_file.name + " - " + e.prototype.name;
      case "REPO":
        return getDisplayNameAlt(e.repo);
      default:
        throwTypeError(e);
    }
  }
  static getAccessedAt(e) {
    switch (e.type) {
      case "FILE":
        return e.file.UserFileRecentAny?.actionAt.toISOString();
      case "PROTOTYPE":
        return e.prototype.accessed_at;
      case "REPO":
        return e.accessed_at;
      case "PINNED_FILE":
        return null;
      case "OFFLINE_FILE":
        return new Date(e.file.lastUpdatedAt).toISOString();
      default:
        throwTypeError(e);
    }
  }
  static getSharedAt(e) {
    switch (e.type) {
      case "FILE":
        return e.sharedWithYouFields?.sharedAt?.toISOString() ?? null;
      case "PROTOTYPE":
        return e.prototype.shared_at;
      case "REPO":
        return e.repo.shared_at;
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getCreatedAt(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.createdAt.toISOString();
      case "PROTOTYPE":
        return e.prototype.fig_file.created_at;
      case "REPO":
        return e.branches.reduce((e, t) => e < t.created_at ? e : t.created_at, e.repo.created_at);
      case "OFFLINE_FILE":
        return new Date(e.file.createdAt).toISOString();
      default:
        throwTypeError(e);
    }
  }
  static getTouchedAt(e) {
    switch (e.type) {
      case "FILE":
        return e.file.touchedAt ?? e.file.updatedAt;
      case "REPO":
        return e.branches.reduce((e, t) => null !== e && e > t.touched_at ? e : t.touched_at, null);
      case "PROTOTYPE":
        return e.prototype.accessed_at;
      case "PINNED_FILE":
        return null;
      case "OFFLINE_FILE":
        return new Date(e.file.lastUpdatedAt).toISOString();
      default:
        throwTypeError(e);
    }
  }
  static getTrashedAt(e) {
    switch (e.type) {
      case "FILE":
        return e.file.trashedAt ? e.file.trashedAt.toISOString() : null;
      case "PROTOTYPE":
        return e.prototype.fig_file.trashed_at;
      case "REPO":
        return e.repo.trashed_at;
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getTrashedUserId(e) {
    switch (e.type) {
      case "FILE":
        return e.file.trashedUserId;
      case "PROTOTYPE":
      case "REPO":
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getIsFavorited(e) {
    switch (e.type) {
      case "FILE":
        return !!e.file.isFavorited;
      case "PROTOTYPE":
        return !!e.prototype.is_favorited;
      case "REPO":
        return !!e.repo.is_favorited;
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return !1;
      default:
        throwTypeError(e);
    }
  }
  static getFavoritedResourceType(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
      case "REPO":
      case "OFFLINE_FILE":
        return FEntityType.FILE;
      case "PROTOTYPE":
        return FEntityType.PROTOTYPE;
      default:
        throwTypeError(e);
    }
  }
  static getFileOrMainBranchKey(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key;
      case "PROTOTYPE":
        return e.prototype.file_key;
      case "REPO":
        return e.repo.default_file_key ?? void 0;
      case "OFFLINE_FILE":
        return;
      default:
        throwTypeError(e);
    }
  }
  static getFileOrSelectedBranchKey(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key;
      case "PROTOTYPE":
        return e.prototype.file_key;
      case "REPO":
        return $$S11(e).key;
      case "OFFLINE_FILE":
        return;
      default:
        throwTypeError(e);
    }
  }
  static getUrl(e, t) {
    switch (e.type) {
      case "FILE":
        return to(e.file);
      case "PINNED_FILE":
        return jN(e);
      case "PROTOTYPE":
        return e.prototype.url;
      case "REPO":
        let r = findBranchById(e.repo, e.branches, t);
        return r ? generateUrl(r, e.repo, "file") : "";
      case "OFFLINE_FILE":
        return "";
      default:
        throwTypeError(e);
    }
  }
  static getEditUrl(e, t) {
    switch (e.type) {
      case "FILE":
        return rl(e.file);
      case "PINNED_FILE":
        return jN({
          ...e,
          allowDefaulting: !0
        });
      case "PROTOTYPE":
        return e.prototype.url;
      case "REPO":
        let r = findBranchById(e.repo, e.branches, t);
        return r ? rl(r) : "";
      case "OFFLINE_FILE":
        return "";
      default:
        throwTypeError(e);
    }
  }
  static getFavoriteResourceId(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key;
      case "PROTOTYPE":
        return e.prototype.id;
      case "REPO":
        return e.repo.default_file_key;
      case "OFFLINE_FILE":
        return e.file.fileKey;
      default:
        throwTypeError(e);
    }
  }
  static getIsTeamTemplate(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.isTeamTemplate;
      case "PROTOTYPE":
      case "REPO":
      case "OFFLINE_FILE":
        return !1;
      default:
        throwTypeError(e);
    }
  }
  static getOrgId(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.parentOrgId;
      case "PROTOTYPE":
        return e.prototype.fig_file.parent_org_id ?? e.prototype.fig_file.parent_org_id;
      case "REPO":
        return e.repo.parent_org?.id ?? e.repo.parent_org_id;
      case "OFFLINE_FILE":
        return e.file.orgId;
      default:
        throwTypeError(e);
    }
  }
  static getFavoriteResourceTeamId(e) {
    switch (e.type) {
      case "FILE":
        return e.file.teamId;
      case "PINNED_FILE":
      default:
        return null;
      case "PROTOTYPE":
        return e.prototype.parent_team?.id ?? e.prototype.fig_file?.team_id;
      case "REPO":
        return e.repo.parent_team?.id ?? e.repo.team_id;
    }
  }
  static getSharedBy(e) {
    switch (e.type) {
      case "FILE":
        return e.sharedWithYouFields?.sharedByUser?.id;
      case "PROTOTYPE":
        return e.prototype.shared_by_user?.id ?? e.prototype.shared_by;
      case "REPO":
        return e.repo.shared_by_user?.id ?? e.repo.shared_by;
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getSharedByName(e) {
    switch (e.type) {
      case "FILE":
        return e.sharedWithYouFields?.sharedByUser?.name;
      case "PROTOTYPE":
        return e.prototype.shared_by_user?.name;
      case "REPO":
        return e.repo.shared_by_user?.name;
      case "PINNED_FILE":
        debug(!0, "Cannot get shared by name from a pinned file");
        return null;
      case "OFFLINE_FILE":
        debug(!0, "Cannot get shared by name from an offline file");
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getOwner(e) {
    switch (e.type) {
      case "FILE":
        return e.file.owner;
      case "PINNED_FILE":
      case "PROTOTYPE":
      case "REPO":
      case "OFFLINE_FILE":
        debug(!0, "Did not expect to render owner for non-file tiles");
        return;
      default:
        throwTypeError(e);
    }
  }
  static useIsRenaming(e) {
    let t = useAtomWithSubscription($$v2);
    return $$x1.isRenaming(e, t);
  }
  static isRenaming(e, t) {
    if (!t) return !1;
    switch (e.type) {
      case "FILE":
        return "FILE" === t.type && t.id === e.file.key;
      case "OFFLINE_FILE":
        return "FILE" === t.type && t.id === e.file.fileKey;
      case "REPO":
        return "REPO" === t.type && t.id === e.repo.id;
      case "PINNED_FILE":
      case "PROTOTYPE":
        return !1;
      default:
        throwTypeError(e);
    }
  }
  static getIsPasswordProtected(e) {
    switch (e.type) {
      case "FILE":
        return Ph(e.file);
      case "REPO":
        return hasPassword(e.repo);
      case "PROTOTYPE":
        return Uj(e.prototype.fig_file) || i4(e.prototype.fig_file);
      case "PINNED_FILE":
        return i4({
          has_file_link_password: e.file.hasFileLinkPassword,
          link_access: e.file.linkAccess
        });
      case "OFFLINE_FILE":
        return !1;
      default:
        throwTypeError(e);
    }
  }
  static getFolderId(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.folderId;
      case "REPO":
        return e.repo.folder_id;
      case "PROTOTYPE":
        return e.prototype.fig_file.folder_id;
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getTeamId(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.teamId;
      case "PROTOTYPE":
        return e.prototype.parent_team?.id ?? null;
      case "REPO":
        return e.repo.team_id;
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getThumbnailUrl(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.thumbnailUrlOverride ?? e.file.thumbnailUrl;
      case "REPO":
        let t = $$S11(e);
        return t ? t.thumbnail_url_override ?? t.thumbnail_url : null;
      case "PROTOTYPE":
        return e.prototype.thumbnail_url;
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getIsThumbnailFullWidth(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return !!e.file.thumbnailGuid;
      case "REPO":
        let t = $$S11(e);
        return t ? t.thumbnail_guid : null;
      case "PROTOTYPE":
        return !0;
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getEditorType(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
      case "OFFLINE_FILE":
        return e.file.editorType;
      case "REPO":
        return FFileType.DESIGN;
      case "PROTOTYPE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getClientMeta(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.clientMeta;
      case "REPO":
        let t = $$S11(e);
        return t ? t.client_meta : null;
      case "PROTOTYPE":
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
  static getPreviewThumbnailUrls(e) {
    return "FILE" === e.type ? e.file.signedPreviewThumbnailUrls : "REPO" === e.type ? $$S11(e)?.preview_thumbnail_urls : void 0;
  }
  static getFileKeyForAutosaveChanges(e) {
    switch (e.type) {
      case "FILE":
      case "PINNED_FILE":
        return e.file.key;
      case "PROTOTYPE":
        return e.prototype.file_key;
      case "REPO":
        return $$S11(e)?.key;
      case "OFFLINE_FILE":
        return null;
      default:
        throwTypeError(e);
    }
  }
}
export function $$N4(e) {
  let t = $$x1.getFileKeyForAutosaveChanges(e);
  return I4(t || "");
}
let $$C7 = createRemovableAtomFamily(e => atom(t => "FILE" === e.type || "PINNED_FILE" === e.type ? t(FileCanView.Query({
  key: e.file.key
})).transform(e => !!e.file?.hasPermission) : "REPO" === e.type ? t(RepoCanView.Query({
  repoId: e.repo.id
})).transform(e => !!oA(e.repo)?.canView) : "PROTOTYPE" === e.type ? t(PrototypeCanView.Query({
  prototypeId: e.prototype.id
})).transform(e => !!oA(e.prototype)?.canRead) : "OFFLINE_FILE" === e.type ? resourceUtils.loaded(!0) : void throwTypeError(e)), $$x1.sameObject);
let $$w3 = {
  FILE: _$$F.FILES,
  PROTOTYPE: _$$F.PROTOTYPES,
  REPO: _$$F.REPOS,
  PINNED_FILE: _$$F.PINNED_FILES,
  OFFLINE_FILE: _$$F.OFFLINE_FILES
};
export const Nu = $$b0;
export const Tf = $$x1;
export const Y6 = $$v2;
export const YC = $$w3;
export const c_ = $$N4;
export const fA = $$y5;
export const gB = $$I6;
export const hi = $$C7;
export const nb = $$E8;
export const nw = $$A9;
export const uy = $$T10;
export const yF = $$S11;