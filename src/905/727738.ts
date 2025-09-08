import { handleOptimistTransaction } from "../905/842794";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { Q, s as _$$s } from "../905/573154";
import { F as _$$F } from "../905/302958";
import { h as _$$h } from "../905/142086";
import { createOptimistThunk } from "../905/350402";
import { sf } from "../905/929976";
import { NC } from "../905/17179";
import { showModalHandler, hideModalHandler } from "../905/156213";
import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { getI18nString } from "../905/303541";
import { registerModal, registerLegacyModal } from "../905/102752";
import { yX } from "../figma_app/918700";
import { yH, yJ, bE } from "../905/98702";
import { P as _$$P } from "../905/595507";
import { z_ } from "../figma_app/314264";
import { CI, Gi } from "../figma_app/528509";
import { FResourceCategoryType } from "../figma_app/191312";
import { ZW } from "../figma_app/349248";
import { getResourceTeamId, hasEditorRoleAccessOnTeam, hasAdminRoleAccessOnTeam } from "../figma_app/642025";
import { e6 } from "../905/557142";
import { t as _$$t2 } from "../figma_app/32680";
import { oE } from "../905/249410";
import { throwTypeError } from "../figma_app/465776";
import { R as _$$R } from "../905/441305";
import { oj } from "../905/760074";
import { M4 } from "../905/713695";
import { p as _$$p } from "../905/195198";
import { DQ, Pw } from "../figma_app/121751";
import { UpsellModalType } from "../905/165519";
class A extends Component {
  render() {
    let e;
    let t;
    let i = this.props.fileSeenState.user;
    let n = this.props.fileName;
    i.id === this.props.user.id ? (e = getI18nString("confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore", {
      fileName: n
    }), t = getI18nString("confirm_remove_role.leave")) : (e = getI18nString("confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_file_anymore", {
      userHandle: i.handle
    }), t = getI18nString("confirm_remove_role.remove"));
    return jsx(yX, {
      content: e,
      confirmText: t,
      onConfirm: this.props.onConfirmRemove,
      ...this.props
    });
  }
}
A.displayName = "ConfirmRemoveRoleModal";
let y = registerModal(A, "ConfirmRemoveSeenStateModal");
let b = createOptimistThunk((e, {
  fileSeenState: t
}) => {
  let i = XHR.del(`/api/file_seen_state/${t.id}`);
  e.dispatch(Q({
    promise: i,
    fallbackError: "An error occurred while removing this user."
  }));
  handleOptimistTransaction(i, e.dispatch, I({
    fileSeenState: t
  }));
  WB().optimisticallyDelete({
    FileSeenState: {
      [t.id]: null
    }
  }, i);
});
let v = createOptimistThunk(async (e, {
  fileSeenState: t
}, {
  liveStore: i
}) => {
  let {
    user,
    modalShown
  } = e.getState();
  let a = await i.fetchFile(t.file_key);
  e.dispatch(showModalHandler({
    type: y,
    data: {
      fileSeenState: t,
      onConfirmRemove: () => {
        user && t.user_id === user.id ? e.dispatch(sf({
          view: "recentsAndSharing"
        })) : modalShown && e.dispatch(showModalHandler(modalShown));
        e.dispatch(b({
          fileSeenState: t
        }));
      },
      fileName: a.name,
      user,
      dispatch: e.dispatch,
      onCancel: () => {
        modalShown && e.dispatch(showModalHandler(modalShown));
      }
    }
  }));
});
NC("FILE_SEEN_STATE_POST");
let I = NC("FILE_SEEN_STATE_DELETE");
NC("FILE_SEEN_STATE_SET");
let M = "confirm-remove-role-modal";
function j(e) {
  let t;
  let i;
  let n = e.roleToRemove;
  let r = n.user;
  let a = n.resource_type === FResourceCategoryType.FILE ? n.resource_id_or_key : void 0;
  let s = M4.File.useValue(a).data;
  switch (n.resource_type) {
    case FResourceCategoryType.FILE:
      r.id === e.user.id ? (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore", {
        fileName: s?.name || ""
      }), i = getI18nString("confirm_remove_role.leave")) : (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_file_anymore", {
        userHandle: r.handle
      }), i = getI18nString("confirm_remove_role.remove"));
      break;
    case FResourceCategoryType.FILE_REPO:
      {
        let a = e.repos[n.resource_id_or_key];
        let s = oj(a);
        r.id === e.user.id ? (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore", {
          fileName: s
        }), i = getI18nString("confirm_remove_role.leave")) : (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_main_file_and_the_branches_anymore", {
          userHandle: r.handle
        }), i = getI18nString("confirm_remove_role.remove"));
        break;
      }
    case FResourceCategoryType.FOLDER:
      {
        let a = e.folders[n.resource_id_or_key];
        r.id === e.user.id ? (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_leave_folder_name_you_may_not_be_able_to_access_files_in_this_project_anymore", {
          folderName: a.name
        }), i = getI18nString("confirm_remove_role.leave")) : (t = getI18nString("confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_files_in_this_project_anymore", {
          userHandle: r.handle
        }), i = getI18nString("confirm_remove_role.remove"));
        break;
      }
    default:
      throwTypeError(n.resource_type);
  }
  return jsx(_$$R, {
    confirmText: i,
    onConfirm: e.onConfirmRemove,
    title: getI18nString("confirm_remove_role.confirm_title_file"),
    onClose: e.onCancel,
    open: !1,
    ...e,
    children: t
  });
}
registerLegacyModal(M, e => jsx(j, {
  ...e.modalShown.data,
  ...e,
  user: e.user
}));
let G = createOptimistThunk((e, {
  role: t
}) => {
  z_("Role Deleted", t);
  let i = XHR.del(`/api/roles/${t.id}`);
  e.dispatch(Q({
    promise: i,
    fallbackError: "An error occurred while removing this user."
  }));
  handleOptimistTransaction(i, e.dispatch, yH({
    role: t
  }));
  let o = ZW(t.resource_type);
  if (o) try {
    WB().optimisticallyDelete({
      [o]: {
        [t.id]: null
      }
    }, i);
  } catch (e) {}
});
let z = createOptimistThunk((e, {
  role: t,
  cascade: i,
  fromDraftsLockdownFileMove: s,
  onSuccess: l
}) => {
  z_("Role Permissions Changed", t, {
    level: t.level
  });
  let d = XHR.put(`/api/roles/${t.id}`, {
    ...t,
    cascade: i,
    response_version: 2
  });
  let c = e.getState();
  let u = t.resource_type === FResourceCategoryType.FILE && c.fileByKey[t.resource_id_or_key];
  let p = u && u.folder_id && c.folders[u.folder_id];
  let m = s && t.level >= e6.EDITOR;
  d.then(i => {
    if (e.dispatch(_$$P({
      role: t,
      hasEduEditAccess: i.data.meta.edu_edit_access_allowed
    })), m && u && p) {
      let i = t.user.email;
      "handle" in t.user && (i = t.user.handle);
      e.dispatch(_$$F.enqueue({
        type: "file-moved",
        message: `${i} can now edit '${u.name}' in ${CI(p)}`
      }));
    }
    l?.();
  }).catch(i => {
    m && u && p && e.dispatch(_$$F.enqueue({
      type: "file-moved",
      message: `Moved '${u.name}' to ${CI(p)}`
    }));
    W(e, i, getResourceTeamId(t, c)) || K(e, i, u || null, () => {
      e.dispatch($$q0({
        role: t,
        level: e6.EDITOR,
        fromDraftsLockdownFileMove: !0,
        seenState: null
      }));
    });
  });
  handleOptimistTransaction(d, e.dispatch, yJ({
    role: t,
    cascade: i
  }));
  let h = ZW(t.resource_type);
  h && WB()?.optimisticallyUpdate({
    [h]: {
      [t.id]: {
        level: t.level
      }
    }
  }, d);
});
let H = createOptimistThunk((e, {
  seenState: t,
  fromDraftsLockdownFileMove: i,
  level: s,
  isStarterTier: d
}) => {
  let c = () => {
    e.dispatch($$q0({
      seenState: t,
      level: e6.EDITOR,
      fromDraftsLockdownFileMove: !0,
      role: null
    }));
  };
  let u = e.getState();
  let p = u.fileByKey[t.file_key];
  let m = p?.folder_id && u.folders[p.folder_id];
  let h = m && Gi(m);
  let g = i && s >= e6.EDITOR;
  let f = t.user.handle || t.user.email;
  if (d && h) {
    _$$h(p || null, null, e.dispatch, {
      handlesVisualBell: !1,
      callback: c
    });
    return;
  }
  let _ = XHR.post(`/api/role/file_seen_state/file/${t.file_key}/user/${t.user_id}`, {
    level: s
  });
  _.then(() => {
    g && p && m && e.dispatch(_$$F.enqueue({
      type: "file-moved",
      message: `${f} can now edit '${p.name}' in ${CI(m)}`
    }));
  }).catch(t => {
    g && p && m && e.dispatch(_$$F.enqueue({
      type: "file-moved",
      message: `Moved '${p.name}' to ${CI(m)}`
    }));
    W(e, t, p.team_id) || K(e, t, p, c);
  });
  let A = {
    id: `temp-role-${t.id}`,
    created_at: Date.now(),
    user_id: t.user_id,
    user: {
      ...t.user
    },
    resource_type: FResourceCategoryType.FILE,
    resource_id_or_key: t.file_key,
    level: s,
    pending: !1,
    updated_at: `${new Date()}`,
    team_id: p.team_id
  };
  handleOptimistTransaction(_, e.dispatch, bE({
    role: A
  }));
  ZW(FResourceCategoryType.FILE) && (WB().optimisticallyCreate({
    FileRole: {
      [A.id]: {
        createdAt: new Date(),
        userId: t.user_id,
        resourceType: "file",
        resourceId: t.file_key,
        level: s,
        updatedAt: new Date(),
        teamId: p.team_id,
        pendingEmail: null,
        pending: !1,
        isOwnerOfResource: !1,
        canRead: !0
      }
    }
  }, _), WB().optimisticallyDelete({
    FileSeenState: {
      [t.id]: null
    }
  }, _));
});
function W(e, t, i) {
  let n = e.getState();
  if (!i) return !1;
  if (t.data && ("NEEDS_UPGRADE" === t.data.reason || "NEEDS_PAYMENT" === t.data.reason)) {
    if (DQ(Pw.GROUP_7)) e.dispatch(showModalHandler({
      type: _$$t2,
      data: {
        teamId: i,
        canEditTeam: void 0
      }
    }));else {
      let t = {
        ...n.teams[i],
        canEdit: hasEditorRoleAccessOnTeam(i, n),
        canAdmin: hasAdminRoleAccessOnTeam(i, n)
      };
      e.dispatch(showModalHandler({
        type: oE,
        data: {
          team: t,
          editorType: null,
          upsellSource: UpsellModalType.ADD_EDITOR
        }
      }));
    }
    return !0;
  }
  return !1;
}
function K(e, t, i, n) {
  e.dispatch(_$$s.error(t.data?.message || "An error occurred while changing this user's permissions."));
  t.data?.message === "Unable to assign the editor level on a draft file" && _$$h(i || null, null, e.dispatch, {
    handlesVisualBell: !1,
    callback: n
  });
}
function Y(e, t) {
  let {
    user,
    modalShown
  } = e.getState();
  e.dispatch(hideModalHandler());
  e.dispatch(showModalHandler({
    type: M,
    data: {
      roleToRemove: t,
      onConfirmRemove: () => {
        user && t.user_id === user.id ? e.dispatch(sf({
          view: "recentsAndSharing"
        })) : modalShown && e.dispatch(showModalHandler(modalShown));
        e.dispatch(G({
          role: t
        }));
      },
      onCancel: () => {
        modalShown && e.dispatch(showModalHandler(modalShown));
      }
    }
  }));
}
let $$q0 = createOptimistThunk((e, {
  role: t,
  level: i,
  seenState: n,
  fromDraftsLockdownFileMove: r,
  isStarterTier: a
}) => {
  if (!t) {
    i !== e6.NONE ? e.dispatch(H({
      seenState: n,
      level: i,
      fromDraftsLockdownFileMove: r,
      isStarterTier: a
    })) : e.dispatch(v({
      fileSeenState: n
    }));
    return;
  }
  i !== e6.NONE ? e.dispatch(z({
    role: {
      ...t,
      level: i
    },
    fromDraftsLockdownFileMove: r
  })) : t.pending ? e.dispatch(G({
    role: t
  })) : Y(e, t);
});
let $$$2 = createOptimistThunk((e, {
  role: t,
  level: i
}) => {
  i !== e6.NONE ? e.dispatch(z({
    role: {
      ...t,
      level: i
    }
  })) : t.pending ? e.dispatch(G({
    role: t
  })) : Y(e, t);
});
let $$Z1 = createOptimistThunk((e, {
  role: t,
  level: i
}) => {
  i !== e6.NONE ? e.dispatch(z({
    role: {
      ...t,
      level: i
    }
  })) : t.pending ? e.dispatch(G({
    role: t
  })) : Y(e, t);
});
let $$X3 = createOptimistThunk((e, {
  role: t,
  level: i
}) => {
  let {
    user
  } = e.getState();
  i !== e6.NONE ? e.dispatch(z({
    role: {
      ...t,
      level: i
    }
  })) : !t.pending && user && t.user_id === user.id ? e.dispatch(showModalHandler({
    type: _$$p,
    data: {
      teamId: t.resource_id_or_key
    }
  })) : e.dispatch(G({
    role: t
  }));
});
export const hw = $$q0;
export const lP = $$Z1;
export const zO = $$$2;
export const yN = $$X3;