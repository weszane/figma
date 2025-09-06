import { yT } from "../figma_app/492908";
import { getFalseValue } from "../figma_app/897289";
import { c3 } from "../figma_app/78808";
import { yJ, bE, HA, yH } from "../figma_app/598926";
import { ru } from "../905/879323";
import { pFu, dq_ } from "../figma_app/43951";
import { H } from "../905/715533";
import { fJ, aj } from "../905/25169";
export function $$u2(e, t, i = !1) {
  if (t.folder) switch (t.method) {
    case "put":
      let n = t.folder;
      let r = e.getState();
      let l = r.folders[n.id];
      if (l && (e.dispatch(yJ({
        folder: n
      })), l.team_id !== n.team_id)) for (let t of r.fileKeysByFolderId[l.id] || []) {
        e.dispatch(ru({
          fileKey: t
        }));
        e.dispatch(c3({
          fileKey: t
        }));
      }
      break;
    case "post":
      t.folder.id in e.getState().folders ? e.dispatch(yJ({
        folder: t.folder
      })) : e.dispatch(bE(t.folder));
      break;
    case "delete":
      i ? e.dispatch(HA({
        folderIds: [t.folder.id]
      })) : e.dispatch(yH({
        folderIds: [t.folder.id]
      }));
  }
}
let $$p3 = new H({
  name: "TeamChannelFoldersShim",
  ...fJ,
  livegraphView: pFu,
  livegraphArgs: (e, t) => ({
    teamId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, {}, i) => function (e, t) {
    let i = [];
    let n = e.getState().folders;
    let r = new Map();
    for (let e of t.team?.projectUpdates || []) {
      let t = n[e.id];
      t && t.updated_at < e.updatedAt.toISOString() ? i.push({
        method: "put",
        type: "folder",
        folder: $$g0(e)
      }) : !t && e.updatedAt > m && i.push({
        method: "post",
        type: "folder",
        folder: $$g0(e)
      });
      r.set(e.id, e);
    }
    return i;
  }(i.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => yT(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => "communityHub" !== e.getState().selectedView.view,
  fullReadEnabled: ({
    store: e
  }) => "communityHub" !== e.getState().selectedView.view
});
let m = getFalseValue() ? new Date("1970-01-01T00:00:00.000Z") : new Date();
let $$h1 = new H({
  name: "FolderChannelFoldersShim",
  ...aj,
  livegraphView: dq_,
  livegraphArgs: e => ({
    projectId: e
  }),
  convertLivegraphMessage: (e, t, {
    projectId: i
  }, n) => {
    let r = function (e, t, i) {
      let n = e.getState().folders;
      let r = t.project;
      if (r) {
        let e = n[r.id];
        return e && e.updated_at < r.updatedAt.toISOString() ? {
          method: "put",
          type: "folder",
          folder: $$g0(r)
        } : {
          method: "post",
          type: "folder",
          folder: $$g0(r)
        };
      }
      return n[i] ? {
        method: "delete",
        type: "folder",
        folder: $$g0({
          id: i
        })
      } : null;
    }(n.store, e, i);
    return r ? [r] : [];
  },
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => yT(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
export function $$g0(e) {
  return {
    id: e.id,
    created_at: e.createdAt?.toISOString(),
    updated_at: e.updatedAt?.toISOString(),
    path: e.path,
    team_id: e.teamId,
    org_id: e.orgId,
    trashed_at: e.trashedAt?.toISOString() || null,
    deleted_at: e.deletedAt?.toISOString() || null,
    description: e.description,
    name: e.name,
    is_invite_only: e.isInviteOnly,
    is_view_only: e.isViewOnly,
    is_subscribed: e.isSubscribed
  };
}
export const Y7 = $$g0;
export const _O = $$h1;
export const vf = $$u2;
export const z$ = $$p3;