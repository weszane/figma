import { NC } from "../905/17179";
import { Q } from "../905/150006";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { bx } from "../905/34809";
import { sf } from "../905/929976";
import { popModalStack } from "../905/156213";
import { xr } from "../figma_app/314264";
import { SS, d as _$$d } from "../figma_app/528509";
import { FResourceCategoryType } from "../figma_app/191312";
import { rq } from "../905/351260";
import { e6 } from "../905/557142";
import { G } from "../figma_app/66216";
import { createOptimistThunk } from "../905/350402";
import { bE as _$$bE } from "../905/98702";
let $$b10 = createOptimistThunk((e, t) => XHR.put(`/api/folders/${t.folderId}/description`, {
  description: t.description
}).then(({
  data: t
}) => {
  e.dispatch($$P14({
    folder: t.meta
  }));
}).catch(t => {
  console.error(t);
  e.dispatch(_$$s.error(getI18nString("file_browser.file_browser_actions.update_subscription_error")));
}));
let $$T6 = NC("FOLDER_UNPIN_FILE");
let $$I15 = createOptimistThunk((e, t) => {
  let r = e.optimisticDispatch($$T6(t));
  return XHR.del(`/api/folders/${t.fileKey}/pin`).then(() => {
    r.commit();
  }).catch(() => {
    r.revert();
    e.dispatch(_$$s.error(getI18nString("file_browser.file_browser_actions.file_unpin_error")));
  });
});
let $$S1 = NC("FOLDER_PIN_FILE");
let $$v8 = createOptimistThunk(async (e, t) => {
  let r = e.optimisticDispatch($$S1(t));
  xr("file_browser_folder_pin_file", t.folderId, null, e.getState(), {
    fileKey: t.fileKey
  });
  await XHR.post(`/api/folders/${t.fileKey}/pin`).then(() => {
    r.commit();
    e.dispatch(F.enqueue({
      error: !1,
      message: getI18nString("file_browser.file_browser_actions.file_pinned_to_project")
    }));
  }).catch(() => {
    r.revert();
    e.dispatch(_$$s.error(getI18nString("file_browser.file_browser_actions.file_pin_error")));
  });
});
let $$A5 = NC("FOLDER_SET_PINNED_FILE");
let $$x2 = NC("FOLDER_DELETE_LG_SHIM");
let $$N13 = NC("FOLDER_DELETE");
let $$C3 = NC("FOLDER_CLEAR");
let $$w11 = createOptimistThunk((e, t) => {
  let r = SS(t.name);
  if (r) {
    e.dispatch(_$$s.error(r));
    return null;
  }
  if (e.dispatch(popModalStack()), e.dispatch(bx()), void 0 === t.isInviteOnly && void 0 === t.isViewOnly && void 0 === t.teamAccess) {
    e.dispatch(_$$s.error("inviteOnly and viewOnly fields or teamAccess field must be defined"));
    return null;
  }
  let n = {
    id: _$$d(),
    name: t.name,
    description: null,
    path: t.name,
    team_id: t.teamId,
    is_subscribed: !1,
    is_favorited: !1,
    created_at: `${new Date()}`,
    updated_at: `${new Date()}`,
    is_invite_only: !1,
    is_view_only: !1,
    settings: {
      webhooks: {}
    },
    deleted_at: null,
    sharing_audience_control: null,
    team_access: null,
    trashed_at: null,
    trashed_user_id: null,
    is_abandoned_drafts: !1
  };
  let l = XHR.post("/api/folders", {
    team_id: t.teamId,
    path: t.name,
    is_invite_only: t.isInviteOnly,
    is_view_only: t.isViewOnly,
    sharing_audience_control: t.sharingAudienceControl,
    team_access: t.teamAccess
  }).then(({
    data: r
  }) => {
    e.dispatch($$N13({
      folderIds: [n.id]
    }));
    let i = r.meta;
    for (let r of i) if (r.name === t.name) {
      e.dispatch($$k7(r));
      t.onFolderCreated && t.onFolderCreated(r.id, r.name);
      xr("Folder Created", r.id, r.team_id, e.getState(), {
        sharingAudienceControl: t.sharingAudienceControl,
        teamAccess: t.teamAccess
      });
      let n = e.getState().user;
      t.inviteEmails?.length && t.teamAccess && e.dispatch(rq({
        emails: t.inviteEmails,
        emailsToExclude: n ? new Set([n.email]) : void 0,
        resourceType: FResourceCategoryType.FOLDER,
        resourceIdOrKey: r.id,
        level: t.inviteLevel || e6.VIEWER,
        source: "new_project_creation_modal",
        teamId: t.teamId
      }));
      G.getRoles({
        resourceId: r.id,
        resourceType: FResourceCategoryType.FOLDER
      }).then(({
        data: t
      }) => {
        for (let r of t.meta) e.dispatch(_$$bE({
          role: r
        }));
      });
      t.shouldRedirect && e.dispatch(sf({
        view: "folder",
        folderId: r.id
      }));
      break;
    }
    return i;
  });
  return Q({
    store: e,
    requestPromise: l,
    fallbackError: getI18nString("file_browser.file_browser_actions.create_project_error"),
    next: e.dispatch,
    action: $$k7(n)
  });
});
createOptimistThunk((e, {
  folderId: t,
  teamId: r,
  isSubscribed: n
}) => {
  let s = n ? "Folder Subscriber Added" : "Folder Subscriber Deleted";
  xr(s, t, r, e.getState());
  let l = XHR.put(`/api/folders/${t}`, {
    is_subscribed: n
  });
  Q({
    store: e,
    requestPromise: l,
    fallbackError: getI18nString("file_browser.file_browser_actions.update_project_error"),
    next: e.dispatch,
    action: $$P14({
      folder: {
        id: t,
        is_subscribed: n
      }
    })
  });
});
let $$O9 = NC("FOLDER_LOAD");
let $$R12 = NC("FOLDER_PUT_UPDATED_AT");
let $$L4 = NC("FOLDER_LOADED");
let $$P14 = NC("FOLDER_PUT");
let $$D0 = NC("FOLDER_BATCH_POST");
let $$k7 = NC("FOLDER_POST");
export const $l = $$D0;
export const $o = $$S1;
export const HA = $$x2;
export const IU = $$C3;
export const Kc = $$L4;
export const MR = $$A5;
export const Q2 = $$T6;
export const bE = $$k7;
export const gO = $$v8;
export const qp = $$O9;
export const ub = $$b10;
export const vt = $$w11;
export const y2 = $$R12;
export const yH = $$N13;
export const yJ = $$P14;
export const z6 = $$I15;