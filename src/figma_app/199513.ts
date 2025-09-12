import { unstable_batchedUpdates } from "react-redux";
import { lQ } from "../905/934246";
import { isNotNullish } from "../figma_app/95419";
import { getFeatureFlags } from "../905/601108";
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { z as _$$z } from "../905/239603";
import { WB } from "../905/761735";
import { createAtomSetter } from "../figma_app/566371";
import { getRequest, XHR } from "../905/910117";
import { handlePromiseError, FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { sf } from "../905/34809";
import { p as _$$p } from "../905/282607";
import { createOptimistThunk, createOptimistAction } from "../905/350402";
import { sf as _$$sf } from "../905/929976";
import { uo } from "../figma_app/78808";
import { yJ, bE, Kc } from "../figma_app/598926";
import { showModalHandler } from "../905/156213";
import { nX } from "../905/466026";
import { uo as _$$uo } from "../905/98702";
import { xr } from "../figma_app/314264";
import { F as _$$F2 } from "../905/224";
import { SS } from "../figma_app/528509";
import { convertTeamToRaw } from "../905/628874";
import { FFolderType } from "../figma_app/191312";
import { FilesForProject, TeamFoldersQuerySyncView } from "../figma_app/43951";
import { M4, IT } from "../905/713695";
import { rR, sK } from "../figma_app/598018";
import { UpsellModalType } from "../905/165519";
import { W$ } from "../905/970170";
import { Y7 } from "../905/438864";
import { vL } from "../905/652992";
import { fileEntityModel } from "../905/806985";
import { lH } from "../905/316062";
import { z as _$$z2 } from "../905/954314";
import { AccessSchema } from "../905/557142";
import { EntityType } from "../figma_app/707808";
import { fileActionEnum } from "../figma_app/630077";
import { W as _$$W } from "../905/522628";
import { $ as _$$$ } from "../905/834575";
import { z as _$$z3 } from "../905/40865";
import { DV } from "../905/739964";
import { o as _$$o } from "../905/29370";
let Y = createOptimistThunk((e, {
  folderId: t,
  folderData: r
}) => {
  unstable_batchedUpdates(() => {
    e.getState().folders[t] ? e.dispatch(yJ({
      folder: r.folder
    })) : e.dispatch(bE(r.folder));
    e.dispatch(uo({
      files: r.files,
      subscribeToRealtime: !1
    }));
    e.dispatch(nX({
      repos: r.repos
    }));
    e.dispatch(_$$uo({
      roles: r.roles
    }));
    e.dispatch(Kc({
      folderId: t,
      state: "loaded"
    }));
  });
});
let $ = M4.Query({
  fetch: async (e, {
    reduxStore: t
  }) => {
    let r = await _$$W.getFiles({
      folderId: e.folderId,
      shouldShowOnlyTrashedFiles: !!e.shouldShowOnlyTrashedFiles
    });
    t.dispatch(uo({
      files: r.data.meta.files
    }));
    t.dispatch(nX({
      repos: r.data.meta.repos
    }));
    t.dispatch(_$$uo({
      roles: r.data.meta.roles
    }));
    t.dispatch(Kc({
      folderId: e.folderId,
      state: "loaded"
    }));
    return r.data.meta;
  },
  schema: e => e.object({
    folder: lH.nullable(),
    files: e.array(fileEntityModel),
    repos: e.array(_$$z2)
  }),
  sync: ({
    folderId: e
  }, {
    mutate: t,
    livegraphClient: r
  }) => {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return r.subscribe(FilesForProject, {
      projectId: e,
      updatedAtTimestamp: n
    }, r => {
      t(t => {
        let n = t.files;
        (r.data?.project?.fileUpdates || []).filter(t => t.folderId === e).forEach(e => {
          n.find(t => t.key === e.key) || t.files.unshift(W$(e));
        });
      });
    });
  },
  syncObjects: !0,
  output: ({
    data: e,
    args: t
  }) => {
    let r = e.files.filter(e => e.folder_id === t.folderId && (t.shouldShowOnlyTrashedFiles && e.trashed_at && e.trashed_with_parent === FFolderType.FOLDER || !t.shouldShowOnlyTrashedFiles && !e.trashed_at) && !e.file_repo_id);
    let n = e.repos.filter(e => e.folder_id === t.folderId && (t.shouldShowOnlyTrashedFiles && e.trashed_at && e.trashed_with_parent === FFolderType.FOLDER || !t.shouldShowOnlyTrashedFiles && !e.trashed_at));
    let i = e.repos.filter(e => !e.trashed_at && !e.deleted_at).map(t => e.files.find(e => e.key === t.default_file_key)).filter(isNotNullish);
    let s = {};
    e.repos.forEach(t => {
      let r = e.files.filter(e => e.file_repo_id === t.id).sort((e, t) => new Date(t.touched_at).getTime() - new Date(e.touched_at).getTime());
      s[t.id] = r;
    });
    return {
      folder: e.folder,
      files: r,
      repos: n,
      previewFiles: [...r, ...i],
      filesByRepoId: s
    };
  }
});
export function $$X2(e, t = !0, r = !1) {
  let [n] = IT($({
    folderId: e,
    shouldShowOnlyTrashedFiles: r
  }), {
    enabled: t
  });
  return n;
}
let q = _$$z.object({
  folder: lH.nullable(),
  files: _$$z.array(fileEntityModel),
  repos: _$$z.array(_$$z2),
  roles: _$$z.array(AccessSchema)
});
let $$J0 = M4.PaginatedQuery({
  fetch: async (e, {
    pageParam: t,
    reduxStore: r
  }) => {
    let n;
    if (t) n = t;else {
      let {
        folderId,
        shouldShowOnlyTrashedFiles = !1,
        page_size = 50,
        skipFetchingRepoBranches = !1,
        file_type = "",
        ...o
      } = e;
      let l = new URLSearchParams({
        ...o,
        fetch_only_trashed_with_folder_files: shouldShowOnlyTrashedFiles.toString(),
        page_size: page_size.toString(),
        skip_fetching_repo_branches: skipFetchingRepoBranches.toString(),
        file_type
      }).toString();
      n = `/api/folders/${folderId}/paginated_files?${l}`;
    }
    let i = await getRequest(n);
    let a = i.data.meta;
    r.dispatch(uo({
      files: a.files
    }));
    r.dispatch(nX({
      repos: a.repos
    }));
    r.dispatch(_$$uo({
      roles: a.roles
    }));
    r.dispatch(Kc({
      folderId: e.folderId,
      state: "loaded"
    }));
    return {
      data: i.data.meta,
      nextPage: i.data.pagination?.next_page,
      prevPage: i.data.pagination?.prev_page
    };
  },
  joinPages: e => ({
    files: e.flatMap(e => e.data.files),
    repos: e.flatMap(e => e.data.repos),
    roles: e.flatMap(e => e.data.roles),
    folder: e.length > 0 ? e[e.length - 1].data.folder : null
  }),
  sync: ({
    folderId: e
  }, {
    mutate: t,
    livegraphClient: r
  }) => {
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return r.subscribe(FilesForProject, {
      projectId: e,
      updatedAtTimestamp: n
    }, r => {
      t(t => {
        let n = t[0];
        n && (r.data?.project?.fileUpdates || []).filter(t => t.folderId === e).forEach(e => {
          t.find(t => !!t.files.find(t => t.key === e.key)) || n.files.unshift(W$(e));
        });
      });
    });
  },
  output: ({
    data: e,
    args: t
  }) => {
    let r = e.files.filter(e => {
      let r = t.shouldShowOnlyTrashedFiles && e.trashed_at && e.trashed_with_parent === FFolderType.FOLDER || !t.shouldShowOnlyTrashedFiles && !e.trashed_at;
      let n = t.skipFetchingRepoBranches && !e.source_file_key || !e.file_repo_id;
      return e.folder_id === t.folderId && r && n;
    });
    let n = e.repos.filter(e => e.folder_id === t.folderId && (t.shouldShowOnlyTrashedFiles && e.trashed_at && e.trashed_with_parent === FFolderType.FOLDER || !t.shouldShowOnlyTrashedFiles && !e.trashed_at));
    let i = {};
    e.repos.forEach(t => {
      let r = e.files.filter(e => e.file_repo_id === t.id).sort((e, t) => new Date(t.touched_at).getTime() - new Date(e.touched_at).getTime());
      i[t.id] = r;
    });
    return {
      folder: e.folder,
      files: r,
      repos: n,
      filesByRepoId: i
    };
  },
  schema: q,
  syncObjects: !0
});
let $$Z10 = createOptimistThunk(async (e, {
  folderId: t,
  loadedFolders: r
}) => {
  if (!r[t]) {
    e.dispatch(Kc({
      folderId: t,
      state: "loading"
    }));
    try {
      let r = (await _$$W.getFiles({
        folderId: t
      })).data.meta;
      e.dispatch(Y({
        folderId: t,
        folderData: r
      }));
    } catch (r) {
      404 === r.status || 403 === r.status ? e.dispatch(_$$sf({
        view: "resourceUnavailable",
        resourceType: EntityType.PROJECT
      })) : r.status >= 400 && r.status < 500 ? e.dispatch(Kc({
        folderId: t,
        state: "loaded"
      })) : e.dispatch(Kc({
        folderId: t,
        state: null
      }));
    }
  }
});
let $$Q8 = M4.Query({
  fetch: async e => (await _$$$.getFolders({
    teamId: e.teamId
  })).data.meta.folder_rows,
  schema: e => e.array(lH.extend({
    touched_at: e.string()
  })),
  syncObjects: !0,
  enabled: e => !!e.teamId,
  sync: ({
    teamId: e
  }, {
    mutate: t,
    livegraphClient: r
  }) => {
    if (!e || !getFeatureFlags().team_page_folder_creation_live_updates) return lQ;
    let n = new Date(new Date().setHours(0, 0, 0, 0));
    return r.subscribe(TeamFoldersQuerySyncView, {
      teamId: e,
      updatedAtTimestamp: n
    }, r => {
      t(t => {
        (r.data?.team?.projectUpdates ?? []).filter(t => t.teamId === e).forEach(e => {
          t.find(t => t.id === e.id) || t.push({
            ...Y7(e),
            touched_at: e.updatedAt.toISOString()
          });
        });
      });
    });
  },
  output: ({
    data: e
  }) => e.filter(e => !(e.trashed_at || e.deleted_at))
});
let $$ee5 = M4.Mutation((e, {
  reduxStore: t
}) => _$$W.permanentlyDelete({
  folderId: e.folderId
}).then(() => {
  t.dispatch(VisualBellActions.enqueue({
    message: getI18nString("file_browser.file_browser_actions.folder_deleted_forever")
  }));
}));
let $$et1 = M4.Mutation(({
  folderId: e
}, {
  objects: t,
  reduxStore: r
}) => {
  let n = _$$W.trash({
    folderId: e
  }).then(() => {
    t.Folder.update(e, e => {
      e.trashed_at = Date.now().toString();
    });
    r.dispatch(VisualBellActions.enqueue({
      message: getI18nString("file_browser.file_browser_actions.folder_trashed")
    }));
  });
  r.dispatch(handlePromiseError({
    promise: n,
    fallbackError: getI18nString("file_browser.api_folder.error_when_moving_to_trash")
  }));
  WB().optimisticallyUpdate({
    Project: {
      [e]: {
        trashedAt: new Date()
      }
    }
  }, n);
});
let $$er11 = M4.Mutation(({
  folderId: e,
  team: t
}, {
  objects: r,
  reduxStore: n
}) => {
  let i = _$$W.restore({
    folderId: e
  }).then(() => {
    r.Folder.update(e, e => {
      e.trashed_at = null;
    });
    n.dispatch(VisualBellActions.enqueue({
      message: getI18nString("file_browser.file_browser_actions.folder_restored"),
      button: {
        text: getI18nString("visual_bell.show_in_toast", {
          destination: t?.name ?? "Recents"
        }),
        action: () => {
          t ? n.dispatch(_$$sf({
            view: "team",
            teamId: t.id
          })) : n.dispatch(_$$sf({
            view: "recentsAndSharing"
          }));
        }
      }
    }));
  });
  n.dispatch(handlePromiseError({
    promise: i,
    fallbackError: getI18nString("file_browser.api_folder.error_when_restoring")
  }));
  WB().optimisticallyUpdate({
    Project: {
      [e]: {
        trashedAt: null
      }
    }
  }, i);
});
let $$en7 = M4.Mutation(e => _$$W.batchDelete({
  folderIds: e.folderIds
}));
let $$ei12 = M4.Mutation(({
  folderId: e,
  folderName: t
}, {
  objects: r,
  reduxStore: n
}) => {
  let i = SS(t);
  if (i) {
    n.dispatch(FlashActions.error(i));
    return;
  }
  r.Folder.update(e, e => {
    e.name = t;
    e.path = t;
  });
  xr("Folder Renamed", e, null, n.getState(), {
    folderName: t
  });
  let a = XHR.put("/api/folders/rename", {
    folder_id: e,
    name: t
  });
  n.dispatch(handlePromiseError({
    promise: a,
    fallbackError: getI18nString("file_browser.api_folder.an_error_occurred_while_renaming_this_project")
  }));
  WB().optimisticallyUpdate({
    Project: {
      [e]: {
        name: t,
        path: t
      }
    }
  }, a);
  return a;
});
let $$ea9 = createOptimistAction("FOLDER_UPDATE_FOLDER_ACCESS", (e, t, {
  optimistId: r
}) => {
  let n = XHR.put(`/api/folders/${t.folderId}`, {
    is_invite_only: t.isInviteOnly,
    is_view_only: t.isViewOnly
  }).then(() => {
    e.dispatch(createOptimistCommitAction(r));
  }).catch(() => {
    e.dispatch(createOptimistRevertAction(r));
  });
  handlePromiseError({
    promise: n,
    fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_access")
  });
});
let $$es4 = createOptimistAction("FOLDER_UPDATE_SHARING_AUDIENCE_CONTROLS", (e, t, {
  optimistId: r
}) => {
  let n = _$$W.updateFolderSharingAudienceControls({
    folderId: t.folder.id,
    sharingAudienceControl: t.sharingAudienceControl
  }).then(() => {
    e.dispatch(createOptimistCommitAction(r));
    xr("Folder Share Settings Updated", t.folder.id, t.folder.team_id, e.getState(), {
      share_settings_type: "sharing_audience",
      oldSharingAudienceControl: t.folder.sharing_audience_control,
      newSharingAudienceControl: t.sharingAudienceControl
    });
  }).catch(() => {
    e.dispatch(createOptimistRevertAction(r));
  });
  handlePromiseError({
    promise: n,
    fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_sharing_audience_control")
  });
});
let $$eo13 = createOptimistAction("FOLDER_UPDATE_TEAM_ACCESS", (e, t, {
  optimistId: r
}) => {
  let n = _$$W.updatedFolderTeamAccess({
    folderId: t.folder.id,
    teamAccess: t.teamAccess
  }).then(() => {
    e.dispatch(createOptimistCommitAction(r));
    xr("Folder Share Settings Updated", t.folder.id, t.folder.team_id, e.getState(), {
      share_settings_type: "team_access",
      oldTeamAccess: t.folder.team_access,
      newTeamAccess: t.teamAccess
    });
  }).catch(() => {
    e.dispatch(createOptimistRevertAction(r));
  });
  handlePromiseError({
    promise: n,
    fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_team_access")
  });
});
let $$el3 = createOptimistThunk(async (e, t) => {
  let r = t.folder;
  let n = t.team;
  let i = convertTeamToRaw(n);
  if (r.inviteOnlyAt || r.viewOnlyAt) {
    e.dispatch(showModalHandler({
      type: _$$z3,
      data: {
        folder: r
      }
    }));
    return;
  }
  try {
    await _$$W.getCanMove({
      teamId: n.id,
      folderId: r.id
    });
  } catch (t) {
    t.data?.failure_info?.code === "ERR_FILE_LIMIT" || t.data?.failure_info?.code === "ERR_PROJECT_LIMIT" ? e.dispatch(showModalHandler({
      type: DV,
      data: {
        team: i,
        resource: vL.FOLDER,
        action: fileActionEnum.MOVE_FOLDER,
        currentPlan: _$$F2.Plan.STARTER,
        upsellPlan: _$$F2.Plan.PRO,
        editorType: null,
        upsellSource: UpsellModalType.FOLDER_MOVE_MODAL
      }
    })) : e.dispatch(FlashActions.error(t.data?.message));
    return;
  }
  if (r.teamId && i) {
    e.dispatch(showModalHandler({
      type: _$$o,
      data: {
        folder: r,
        destinationTeam: i,
        onConfirm: () => {
          createAtomSetter(ed)({
            folder: r,
            team: i
          });
        }
      }
    }));
    return;
  }
  createAtomSetter(ed)({
    folder: r,
    team: i
  });
  t.onSuccess && t.onSuccess();
});
let ed = M4.Mutation((e, {
  query: t,
  objects: r,
  reduxStore: n
}) => {
  let {
    folder,
    team
  } = e;
  xr("Folder Moved", folder.id, null, n.getState(), {
    destTeamId: team.id
  });
  let s = XHR.put("/api/folders/move", {
    folder_id: folder.id,
    team_id: team.id
  }).then(() => {
    n.dispatch(VisualBellActions.enqueue({
      message: getI18nString("file_browser.folder_move.project_moved_toast", {
        folderName: folder.path,
        teamName: team.name
      })
    }));
  });
  n.dispatch(handlePromiseError({
    promise: s,
    fallbackError: getI18nString("file_browser.api_folder.an_error_occurred_while_moving_this_project")
  }));
  WB()?.optimisticallyUpdate({
    Project: {
      [folder.id]: {
        teamId: team.id
      }
    }
  }, s);
  folder.teamId && (t.mutate($$Q8({
    teamId: folder.teamId
  }), e => {
    let t = e.findIndex(e => e.id === folder.id);
    -1 !== t && e.splice(t, 1);
  }), r.Folder.update(folder.id, e => {
    e.team_id = team.id;
  }));
  return s;
});
let $$ec6 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = t.where;
  let i = t.team.id;
  let a = r.creatingNewFolder && r.creatingNewFolder.where === n && r.creatingNewFolder.teamId === i;
  let s = t.team;
  if (!a) {
    if (s.canEdit) rR(s, {
      type: sK.ADD_PROJECT
    }) ? (e.dispatch(sf({
      where: n,
      teamId: i
    })), e.dispatch(showModalHandler({
      type: _$$p(),
      data: {
        teamId: s.id,
        modalShown: r.modalShown,
        onFolderCreated: t.onFolderCreated
      }
    }))) : e.dispatch(showModalHandler({
      type: DV,
      data: {
        team: s,
        resource: vL.FOLDER,
        action: fileActionEnum.CREATE_FOLDER,
        currentPlan: _$$F2.Plan.STARTER,
        upsellPlan: _$$F2.Plan.PRO,
        editorType: null
      }
    }));else {
      let t = s ? getI18nString("file_browser.api_folder.no_create_permissions_team_name", {
        teamName: s.name
      }) : getI18nString("file_browser.api_folder.no_create_permissions_this_team");
      e.dispatch(FlashActions.flash(t));
    }
  }
});
export const BU = $$J0;
export const Ct = $$et1;
export const LK = $$X2;
export const Nr = $$el3;
export const Q3 = $$es4;
export const Q4 = $$ee5;
export const SX = $$ec6;
export const U = $$en7;
export const Xg = $$Q8;
export const iT = $$ea9;
export const jl = $$Z10;
export const k4 = $$er11;
export const mq = $$ei12;
export const xT = $$eo13;