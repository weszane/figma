import { Component } from 'react';
import { jsx } from 'react/jsx-runtime';
import { createActionCreator } from '../905/73481';
import { rolePostAction, roleDeleteAction, rolePutAction } from '../905/98702';
import { registerLegacyModal, registerModal } from '../905/102752';
import { h as _$$h } from '../905/142086';
import { hideModalHandler, showModalHandler } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { p as _$$p } from '../905/195198';
import { UPSELL_ADD_EDITOR_MODAL } from '../905/249410';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { createOptimistThunk } from '../905/350402';
import { ConfirmationModal } from '../905/441305';
import { AccessLevelEnum } from '../905/557142';
import { FlashActions, handlePromiseError } from '../905/573154';
import { setMemberEduGracePeriodAction } from '../905/595507';
import { liveStoreInstance } from '../905/713695';
import { getDisplayNameAlt } from '../905/760074';
import { getCurrentLiveGraphClient } from '../905/761735';
import { handleOptimistTransaction } from '../905/842794';
import { sendWithRetry } from '../905/910117';
import { selectViewAction } from '../905/929976';
import { t as _$$t2 } from '../figma_app/32680';
import { ConfigGroups, isReduxDeprecationCutover } from '../figma_app/121751';
import { FResourceCategoryType } from '../figma_app/191312';
import { trackRoleEvent } from '../figma_app/314264';
import { mapResourceCategoryToRole } from '../figma_app/349248';
import { throwTypeError } from '../figma_app/465776';
import { getSidebarPath, isRootPath } from '../figma_app/528509';
import { getResourceTeamId, hasAdminRoleAccessOnTeam, hasEditorRoleAccessOnTeam } from '../figma_app/642025';
import { ConfirmationModal2 } from '../figma_app/918700';
class A extends Component {
  render() {
    let e;
    let t;
    let i = this.props.fileSeenState.user;
    let n = this.props.fileName;
    i.id === this.props.user.id ? (e = getI18nString('confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore', {
      fileName: n
    }), t = getI18nString('confirm_remove_role.leave')) : (e = getI18nString('confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_file_anymore', {
      userHandle: i.handle
    }), t = getI18nString('confirm_remove_role.remove'));
    return jsx(ConfirmationModal2, {
      content: e,
      confirmText: t,
      onConfirm: this.props.onConfirmRemove,
      ...this.props
    });
  }
}
A.displayName = 'ConfirmRemoveRoleModal';
let y = registerModal(A, 'ConfirmRemoveSeenStateModal');
let b = createOptimistThunk((e, {
  fileSeenState: t
}) => {
  let i = sendWithRetry.del(`/api/file_seen_state/${t.id}`);
  e.dispatch(handlePromiseError({
    promise: i,
    fallbackError: 'An error occurred while removing this user.'
  }));
  handleOptimistTransaction(i, e.dispatch, I({
    fileSeenState: t
  }));
  getCurrentLiveGraphClient().optimisticallyDelete({
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
        user && t.user_id === user.id ? e.dispatch(selectViewAction({
          view: 'recentsAndSharing'
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
createActionCreator('FILE_SEEN_STATE_POST');
let I = createActionCreator('FILE_SEEN_STATE_DELETE');
createActionCreator('FILE_SEEN_STATE_SET');
let M = 'confirm-remove-role-modal';
function j(e) {
  let t;
  let i;
  let n = e.roleToRemove;
  let r = n.user;
  let a = n.resource_type === FResourceCategoryType.FILE ? n.resource_id_or_key : void 0;
  let s = liveStoreInstance.File.useValue(a).data;
  switch (n.resource_type) {
    case FResourceCategoryType.FILE:
      r.id === e.user.id ? (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore', {
        fileName: s?.name || ''
      }), i = getI18nString('confirm_remove_role.leave')) : (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_file_anymore', {
        userHandle: r.handle
      }), i = getI18nString('confirm_remove_role.remove'));
      break;
    case FResourceCategoryType.FILE_REPO:
      {
        let a = e.repos[n.resource_id_or_key];
        let s = getDisplayNameAlt(a);
        r.id === e.user.id ? (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_leave_file_name_you_may_not_be_able_to_access_this_file_anymore', {
          fileName: s
        }), i = getI18nString('confirm_remove_role.leave')) : (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_this_main_file_and_the_branches_anymore', {
          userHandle: r.handle
        }), i = getI18nString('confirm_remove_role.remove'));
        break;
      }
    case FResourceCategoryType.FOLDER:
      {
        let a = e.folders[n.resource_id_or_key];
        r.id === e.user.id ? (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_leave_folder_name_you_may_not_be_able_to_access_files_in_this_project_anymore', {
          folderName: a.name
        }), i = getI18nString('confirm_remove_role.leave')) : (t = getI18nString('confirm_remove_role.are_you_sure_you_want_to_remove_user_to_remove_handle_they_may_not_be_able_to_access_files_in_this_project_anymore', {
          userHandle: r.handle
        }), i = getI18nString('confirm_remove_role.remove'));
        break;
      }
    default:
      throwTypeError(n.resource_type);
  }
  return jsx(ConfirmationModal, {
    confirmText: i,
    onConfirm: e.onConfirmRemove,
    title: getI18nString('confirm_remove_role.confirm_title_file'),
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
  trackRoleEvent('Role Deleted', t);
  let i = sendWithRetry.del(`/api/roles/${t.id}`);
  e.dispatch(handlePromiseError({
    promise: i,
    fallbackError: 'An error occurred while removing this user.'
  }));
  handleOptimistTransaction(i, e.dispatch, roleDeleteAction({
    role: t
  }));
  let o = mapResourceCategoryToRole(t.resource_type);
  if (o) {
    try {
      getCurrentLiveGraphClient().optimisticallyDelete({
        [o]: {
          [t.id]: null
        }
      }, i);
    } catch (e) {}
  }
});
let z = createOptimistThunk((e, {
  role: t,
  cascade: i,
  fromDraftsLockdownFileMove: s,
  onSuccess: l
}) => {
  trackRoleEvent('Role Permissions Changed', t, {
    level: t.level
  });
  let d = sendWithRetry.put(`/api/roles/${t.id}`, {
    ...t,
    cascade: i,
    response_version: 2
  });
  let c = e.getState();
  let u = t.resource_type === FResourceCategoryType.FILE && c.fileByKey[t.resource_id_or_key];
  let p = u && u.folder_id && c.folders[u.folder_id];
  let m = s && t.level >= AccessLevelEnum.EDITOR;
  d.then(i => {
    if (e.dispatch(setMemberEduGracePeriodAction({
      role: t,
      hasEduEditAccess: i.data.meta.edu_edit_access_allowed
    })), m && u && p) {
      let i = t.user.email;
      'handle' in t.user && (i = t.user.handle);
      e.dispatch(VisualBellActions.enqueue({
        type: 'file-moved',
        message: `${i} can now edit '${u.name}' in ${getSidebarPath(p)}`
      }));
    }
    l?.();
  }).catch(i => {
    m && u && p && e.dispatch(VisualBellActions.enqueue({
      type: 'file-moved',
      message: `Moved '${u.name}' to ${getSidebarPath(p)}`
    }));
    W(e, i, getResourceTeamId(t, c)) || K(e, i, u || null, () => {
      e.dispatch($$q0({
        role: t,
        level: AccessLevelEnum.EDITOR,
        fromDraftsLockdownFileMove: !0,
        seenState: null
      }));
    });
  });
  handleOptimistTransaction(d, e.dispatch, rolePutAction({
    role: t,
    cascade: i
  }));
  let h = mapResourceCategoryToRole(t.resource_type);
  h && getCurrentLiveGraphClient()?.optimisticallyUpdate({
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
      level: AccessLevelEnum.EDITOR,
      fromDraftsLockdownFileMove: !0,
      role: null
    }));
  };
  let u = e.getState();
  let p = u.fileByKey[t.file_key];
  let m = p?.folder_id && u.folders[p.folder_id];
  let h = m && isRootPath(m);
  let g = i && s >= AccessLevelEnum.EDITOR;
  let f = t.user.handle || t.user.email;
  if (d && h) {
    _$$h(p || null, null, e.dispatch, {
      handlesVisualBell: !1,
      callback: c
    });
    return;
  }
  let _ = sendWithRetry.post(`/api/role/file_seen_state/file/${t.file_key}/user/${t.user_id}`, {
    level: s
  });
  _.then(() => {
    g && p && m && e.dispatch(VisualBellActions.enqueue({
      type: 'file-moved',
      message: `${f} can now edit '${p.name}' in ${getSidebarPath(m)}`
    }));
  }).catch(t => {
    g && p && m && e.dispatch(VisualBellActions.enqueue({
      type: 'file-moved',
      message: `Moved '${p.name}' to ${getSidebarPath(m)}`
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
  handleOptimistTransaction(_, e.dispatch, rolePostAction({
    role: A
  }));
  mapResourceCategoryToRole(FResourceCategoryType.FILE) && (getCurrentLiveGraphClient().optimisticallyCreate({
    FileRole: {
      [A.id]: {
        createdAt: new Date(),
        userId: t.user_id,
        resourceType: 'file',
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
  }, _), getCurrentLiveGraphClient().optimisticallyDelete({
    FileSeenState: {
      [t.id]: null
    }
  }, _));
});
function W(e, t, i) {
  let n = e.getState();
  if (!i) return !1;
  if (t.data && (t.data.reason === 'NEEDS_UPGRADE' || t.data.reason === 'NEEDS_PAYMENT')) {
    if (isReduxDeprecationCutover(ConfigGroups.GROUP_7)) {
      e.dispatch(showModalHandler({
        type: _$$t2,
        data: {
          teamId: i,
          canEditTeam: void 0
        }
      }));
    } else {
      let t = {
        ...n.teams[i],
        canEdit: hasEditorRoleAccessOnTeam(i, n),
        canAdmin: hasAdminRoleAccessOnTeam(i, n)
      };
      e.dispatch(showModalHandler({
        type: UPSELL_ADD_EDITOR_MODAL,
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
  e.dispatch(FlashActions.error(t.data?.message || 'An error occurred while changing this user\'s permissions.'));
  t.data?.message === 'Unable to assign the editor level on a draft file' && _$$h(i || null, null, e.dispatch, {
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
        user && t.user_id === user.id ? e.dispatch(selectViewAction({
          view: 'recentsAndSharing'
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
    i !== AccessLevelEnum.NONE ? e.dispatch(H({
      seenState: n,
      level: i,
      fromDraftsLockdownFileMove: r,
      isStarterTier: a
    })) : e.dispatch(v({
      fileSeenState: n
    }));
    return;
  }
  i !== AccessLevelEnum.NONE ? e.dispatch(z({
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
  i !== AccessLevelEnum.NONE ? e.dispatch(z({
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
  i !== AccessLevelEnum.NONE ? e.dispatch(z({
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
  i !== AccessLevelEnum.NONE ? e.dispatch(z({
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