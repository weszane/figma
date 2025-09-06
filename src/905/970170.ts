import { yT } from "../figma_app/492908";
import { getFeatureFlags } from "../905/601108";
import { isIOSUA, isFigmaMobileWithoutTripleTaps } from "../figma_app/778880";
import { yJ, c3, Yp, bE } from "../figma_app/78808";
import { ru } from "../905/879323";
import { ER } from "../905/466026";
import { VK, YK } from "../905/880488";
import { qNg, m0h, SMQ, n8j } from "../figma_app/43951";
import { H } from "../905/715533";
import { fJ, aj, w7, Ut } from "../905/25169";
function m(e) {
  let t = isIOSUA && e.getState().selectedView?.view === "prototype";
  return isFigmaMobileWithoutTripleTaps() || t;
}
export function $$h0(e, t) {
  if (!t.file || !t.file.library_key) return;
  let i = t.file;
  switch (t.method) {
    case "put":
      let n = e.getState().fileByKey[i.key];
      if (!n?.trashed_at && i.trashed_at) {
        e.dispatch(VK({
          fileKeys: {
            [i.key]: i
          }
        }));
        break;
      }
      e.dispatch(yJ({
        file: i
      }));
      n && (n.team_id !== i.team_id ? (e.dispatch(ru({
        fileKey: i.key
      })), e.dispatch(c3({
        fileKey: i.key
      }))) : n.folder_id !== i.folder_id && (e.dispatch(c3({
        fileKey: i.key
      })), n.folder_id && e.dispatch(Yp({
        file: i,
        folderId: n.folder_id
      }))));
      break;
    case "post":
      i.file_repo_id && e.dispatch(ER({
        file: t.file
      }));
      e.dispatch(bE({
        file: t.file
      }));
      break;
    case "delete":
      e.dispatch(YK({
        fileKeys: {
          [t.file.key]: !0
        }
      }));
  }
}
function g(e, t) {
  return e.updated_at < t.updatedAt?.toISOString() || e.touched_at < t.touchedAt.replace(/\.\d+Z/, "Z") || !!e.is_try_file != !!t.isTryFile || !!e.is_published_site != !!t.isPublishedSite || (e.last_published_at || "") !== t.lastPublishedAt || (e.thumbnail_url || "") !== t.thumbnailUrl;
}
let $$f3 = new H({
  name: "TeamChannelFilesShim",
  ...fJ,
  livegraphView: qNg,
  livegraphArgs: (e, t) => ({
    teamId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = e.getState().fileByKey;
    for (let e of t.team?.fileUpdates || []) {
      let t = n[e.key];
      t && g(t, e) ? i.push({
        method: "put",
        type: "file",
        file: $$b2(e)
      }) : t || i.push({
        method: "post",
        type: "file",
        file: $$b2(e)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => yT(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => !m(e),
  fullReadEnabled: ({
    store: e
  }) => !m(e)
});
let $$_1 = new H({
  name: "FolderChannelFilesShim",
  ...aj,
  livegraphView: m0h,
  livegraphArgs: (e, t) => ({
    projectId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = e.getState().fileByKey;
    for (let e of t.project?.fileUpdates || []) {
      let t = n[e.key];
      t && g(t, e) ? i.push({
        method: "put",
        type: "file",
        file: $$b2(e)
      }) : t || i.push({
        method: "post",
        type: "file",
        file: $$b2(e)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => yT(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => !m(e),
  fullReadEnabled: ({
    store: e
  }) => !m(e)
});
let $$A4 = new H({
  name: "FileChannelFilesShim",
  ...w7,
  livegraphView: SMQ,
  livegraphArgs: e => ({
    fileKey: e
  }),
  convertLivegraphMessage: (e, t, i, n) => {
    let r = function (e, t) {
      let i = e.getState().fileByKey;
      let n = t.file;
      if (n) {
        let e = i[n.key];
        if (e && g(e, n)) return {
          method: "put",
          type: "file",
          file: $$b2(n)
        };
        if (!e) return {
          method: "post",
          type: "file",
          file: $$b2(n)
        };
      }
      return null;
    }(n.store, e);
    return r ? [r] : [];
  },
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => getFeatureFlags().livegraph_splay_realtime_views ? yT(500, 9e4) : yT(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => !m(e),
  fullReadEnabled: ({
    store: e
  }) => !m(e)
});
let $$y5 = new H({
  name: "FileRepoChannelFilesShim",
  ...Ut,
  livegraphView: n8j,
  livegraphArgs: e => ({
    repoId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = e.getState().fileByKey;
    for (let e of t.repo?.files || []) {
      let t = n[e.key];
      t && g(t, e) ? i.push({
        method: "put",
        type: "file",
        file: $$b2(e)
      }) : t || i.push({
        method: "post",
        type: "file",
        file: $$b2(e)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => getFeatureFlags().livegraph_splay_realtime_views ? yT(500, 9e4) : yT(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => !m(e),
  fullReadEnabled: ({
    store: e
  }) => !m(e)
});
export function $$b2(e) {
  return {
    checkpoint_id: e.checkpointId,
    checkpoint_key: e.checkpointKey,
    branch_checkpoint_id: e.branchCheckpointId,
    client_meta: e.clientMeta,
    created_at: e.createdAt?.toISOString().replace(/\.\d+Z/, "Z") || "",
    creator_id: e.creatorId,
    deleted_at: e.deletedAt?.toISOString() || null,
    description: e.description,
    edit_url: e.editUrl,
    editor_type: e.editorType,
    file_repo_id: e.fileRepoId,
    folder_id: e.folderId,
    handoff_url: e.handoffUrl,
    has_file_link_password: e.hasFileLinkPassword,
    has_proto_link_password: e.hasProtoLinkPassword,
    is_try_file: e.isTryFile,
    is_published_site: e.isPublishedSite,
    key: e.key,
    license: e.license,
    link_access: e.linkAccess,
    name: e.name,
    org_audience: !!e.orgAudience,
    org_browsable: e.orgBrowsable,
    parent_org_id: e.parentOrgId,
    proto_link_access: e.protoLinkAccess,
    prototype_url: e.prototypeUrl,
    source_checkpoint_id: e.sourceCheckpointId,
    source_file_key: e.sourceFileKey,
    team_id: e.teamId,
    touched_at: e.touchedAt ? new Date(e.touchedAt).toISOString().replace(/\.\d+Z/, "Z") : e.touchedAt,
    thumbnail_guid: e.thumbnailGuid,
    thumbnail_url: e.thumbnailUrl || "",
    thumbnail_url_override: e.thumbnailUrlOverride,
    track_tags: e.trackTags ? {
      is_template: e.trackTags.isTemplate,
      starter_library_src_file_key: e.trackTags.starterLibrarySrcFileKey,
      figma_basics_experiment: e.trackTags.figmaBasicsExperiment,
      source: e.trackTags.source
    } : null,
    trashed_at: e.trashedAt?.toISOString().replace(/\.\d+Z/, "Z") || null,
    trashed_user_id: e.trashedUserId,
    updated_at: e.updatedAt?.toISOString() || "",
    url: e.url,
    viewer_export_restricted: e.viewerExportRestricted,
    scheme: e.scheme,
    last_published_at: e.lastPublishedAt || null,
    library_key: e.libraryKey
  };
}
export const Dk = $$h0;
export const O9 = $$_1;
export const W$ = $$b2;
export const XG = $$f3;
export const qG = $$A4;
export const qS = $$y5;