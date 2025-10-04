import { createActionCreator } from "../905/73481"
import { resolveMessage } from "../905/231762"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { findBranchById } from "../905/760074"
import { getCurrentLiveGraphClient } from "../905/761735"
import { sendWithRetry } from "../905/910117"
import { fileEntityDataMapper } from "../905/943101"
import { APIParameterUtils } from "../figma_app/181241"
import { FEntityType } from "../figma_app/191312"
import { trackFavoritesToAddToSidebarClick, trackFavoritesToMoveUnstarAllClick, trackFileBrowserSidebarCustomSectionCreated, trackFileBrowserSidebarCustomSectionDeleted, trackFileBrowserSidebarCustomSectionRenamed, trackResourceAddedToFavorites, trackResourceRemovedFromFavorites } from "../figma_app/310688"
import { createFileResource, createFolderResource, createPrototypeResource, createTeamResource, createWorkspaceResource, transformFileData } from "../figma_app/411744"
import { throwTypeError } from "../figma_app/465776"
import { nb } from "../figma_app/543100"
import { ah } from "../figma_app/637328"
import { D6 } from "../figma_app/863319"

let $$I17 = createActionCreator("SET_FAVORITES_COUNT")
let $$S6 = createActionCreator("UPDATE_EXPANDED_CUSTOM_SECTIONS")
let $$v21 = createActionCreator("SET_MOVING_RESOURCE")
let $$A19 = createActionCreator("SET_NEW_SECTION_INDEX")
let $$x22 = createOptimistThunk((e, t) => {
  let {
    name,
    orderedFavoriteIds,
  } = t
  let i = sendWithRetry.put(`/api/user_sidebar_sections/${t.sectionId}`, {
    ordered_favorited_resource_ids: orderedFavoriteIds,
    name,
  }).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.data.message}`,
    }))
  })
  getCurrentLiveGraphClient().optimisticallyUpdate({
    UserSidebarSection: {
      [t.sectionId]: {
        ...(name
          ? {
              name,
            }
          : {}),
        ...(orderedFavoriteIds
          ? {
              orderedFavoritedResourceIds: orderedFavoriteIds,
            }
          : {}),
      },
    },
  }, i)
  t.name && trackFileBrowserSidebarCustomSectionRenamed(t.sectionId, t.name)
})
let $$N11 = createOptimistThunk((e, t) => {
  let r = sendWithRetry.del(`/api/user_sidebar_sections/${t.sidebarSectionId}`).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.msg}`,
    }))
  })
  trackFileBrowserSidebarCustomSectionDeleted(t.sidebarSectionId)
  getCurrentLiveGraphClient().optimisticallyDelete({
    UserSidebarSection: {
      [t.sidebarSectionId]: null,
    },
  }, r)
})
let $$C3 = createOptimistThunk((e, t) => {
  let r = {
    favorited_resource_ids: t.favoriteIds,
    team_id: t.teamId,
  }
  trackFavoritesToAddToSidebarClick(t.favoriteIds, t.teamId)
  sendWithRetry.put("/api/planless_favorited_resource_plan_id", r).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.data.message}`,
    }))
  })
})
let $$w7 = createOptimistThunk((e, t) => {
  let r = {
    section_id: t.sectionId,
    ordered_favorite_ids: t.orderedFavoriteIds,
  }
  let n = sendWithRetry.put(`/api/favorited_resources/${t.favoriteId}`, r).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.data.message}`,
    }))
  })
  t.sectionId && getCurrentLiveGraphClient().optimisticallyUpdate({
    UserSidebarSection: {
      [t.sectionId]: {
        orderedFavoritedResourceIds: t.orderedFavoriteIds,
      },
    },
  }, n)
  let i = {
    [t.favoriteId]: {
      sidebarSectionId: t.sectionId,
    },
  }
  switch (t.resourceType) {
    case FEntityType.TEAM:
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedTeam: i,
      }, n)
      break
    case FEntityType.FOLDER:
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedProject: i,
      }, n)
      break
    case FEntityType.FILE:
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedFile: i,
      }, n)
      break
    case FEntityType.PROTOTYPE:
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedPrototype: i,
      }, n)
      break
    case FEntityType.WORKSPACE:
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedWorkspace: i,
      }, n)
  }
})
let $$O24 = createOptimistThunk((e, t) => {
  let r = e.getState().currentUserOrgId ?? null
  let n = {
    name: t.name,
    org_id: r,
    insert_at_index: t.insertAtIndex,
    ordered_sections: t.currentOrderedSections,
  }
  let i = sendWithRetry.post("/api/user_sidebar_sections", n).then((r) => {
    if (!r?.data.meta) {
      e.dispatch($$v21({
        movingResource: void 0,
      }))
      return
    }
    Y(e.dispatch, t.newResourceForSection.resourceType, t.newResourceForSection.isFavorited, t.newResourceForSection.resourceId, void 0, r.data.meta)
    e.dispatch($$v21({
      movingResource: void 0,
    }))
  }).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.msg}`,
    }))
  })
  if (getCurrentLiveGraphClient().optimisticallyCreate({
    UserSidebarSection: {
      [q]: {
        userId: e.getState().user?.id ?? "",
        orgId: r,
        teamId: null,
        name: t.name,
        createdAt: new Date(),
        orderedFavoritedResourceIds: [],
      },
    },
  }, i), t.prefs && t.currentOrderedSections) {
    let n = t.currentOrderedSections.length
    let a = [...t.currentOrderedSections?.slice(0, t.insertAtIndex), q, ...t.currentOrderedSections.slice(t.insertAtIndex, n)]
    let s = {
      id: t.prefs?.id,
      orderedFavoritedResourceIds: t.prefs?.orderedFavoritedResourceIds,
      orderedTeamIds: t.prefs?.orderedTeamIds,
      orderedLicenseGroupIds: t.prefs?.orderedLicenseGroupIds,
      orderedSidebarSections: a,
    }
    ah(s, e.getState().user?.id, r, null, i)
  }
})
let $$R9 = createOptimistThunk((e, t) => {
  let r = e.getState().currentUserOrgId ?? null
  let n = {
    name: t.name,
    org_id: r,
    insert_at_index: t.insertAtIndex,
    ordered_sections: t.currentOrderedSections,
  }
  let i = sendWithRetry.post("/api/user_sidebar_sections", n).then((e) => {
    trackFileBrowserSidebarCustomSectionCreated(e?.data.meta, t.name)
  }).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.msg}`,
    }))
  })
  let a = "optimistic-id-custom-section-id"
  if (getCurrentLiveGraphClient().optimisticallyCreate({
    UserSidebarSection: {
      [a]: {
        userId: e.getState().user?.id ?? "",
        orgId: r,
        teamId: null,
        name: t.name,
        createdAt: new Date(),
        orderedFavoritedResourceIds: [],
      },
    },
  }, i), t.prefs && t.currentOrderedSections) {
    let n = t.currentOrderedSections.length
    let s = [...t.currentOrderedSections?.slice(0, t.insertAtIndex), a, ...t.currentOrderedSections.slice(t.insertAtIndex, n)]
    let o = {
      id: t.prefs?.id,
      orderedFavoritedResourceIds: t.prefs?.orderedFavoritedResourceIds,
      orderedTeamIds: t.prefs?.orderedTeamIds,
      orderedLicenseGroupIds: t.prefs?.orderedLicenseGroupIds,
      orderedSidebarSections: s,
    }
    ah(o, e.getState().user?.id, r, null, i)
  }
})
let $$L5 = createOptimistAction("BULK_RESOURCE_SET_FAVORITE", (e, t, {
  optimistId: r,
  liveStore: n,
}) => {
  let {
    files,
    repos,
    prototypes,
    orgId,
    teamId,
    selectedView,
    entrypoint,
  } = t
  let y = e.getState().currentTeamId
  let b = e.getState().currentUserOrgId
  let I = y ?? b
  let S = files.filter(e => !e.is_favorited && (e.team_id === I || e.parent_org_id === I))
  let v = S.map(e => e.key)
  let A = repos.filter(e => !e.is_favorited && (e.team_id === I || e.parent_org_id === I)).filter(Boolean)
  let x = A.map(e => e.default_file_key)
  let N = prototypes.filter(e => !e.is_favorited && (e.parent_team?.id === I || e.parent_org?.id === I))
  let C = N.map(e => `${e.file_key},${e.page_id}`)
  let w = {
    files: x.concat(v),
    org_id: orgId,
    team_id: teamId,
    prototypes: C,
    insert_at_index: t.insertAtIndex,
    ordered_favorites: t.orderedFavorites,
    section_id: t.sectionId,
  }
  files.forEach((e) => {
    trackResourceAddedToFavorites(e.key, selectedView, entrypoint, FEntityType.FILE, e.editor_type, !0)
  })
  repos.forEach((e) => {
    trackResourceAddedToFavorites(e.default_file_key ?? void 0, selectedView, entrypoint, FEntityType.FILE, "design", !0)
  })
  prototypes.forEach((e) => {
    trackResourceAddedToFavorites(e.file_key, selectedView, entrypoint, FEntityType.PROTOTYPE, "design", !0)
  })
  let O = sendWithRetry.put("/api/bulk_favorite_resources", w).then(() => {
    e.dispatch(createOptimistCommitAction(r))
  }).catch((t) => {
    e.dispatch(createOptimistRevertAction(r))
    try {
      e.dispatch(VisualBellActions.enqueue({
        message: t.message,
      }))
    }
    catch (t) {
      e.dispatch(FlashActions.error("An error occurred while favoriting these items"))
    }
  })
  let R = e.getState().user?.id
  if (!R)
    return
  let L = {}
  let P = {}
  let D = []
  if (N.forEach((e) => {
    D.push(`optimistic-id-${e.fig_file.key}`)
    P[`optimistic-id-${e.fig_file.key}`] = createPrototypeResource(e, R, orgId, t.sectionId)
  }), A.forEach((e) => {
    let r = e.default_file_key
    if (r) {
      let e = n.readCachedFile(r)
      e && (D.push(`optimistic-id-${e.key}`), L[`optimistic-id-${e.key}`] = createFileResource(e, R, orgId, t.sectionId))
    }
  }), S.forEach((e) => {
    D.push(`optimistic-id-${e.key}`)
    L[`optimistic-id-${e.key}`] = createFileResource(e, R, orgId, t.sectionId)
  }), getCurrentLiveGraphClient().optimisticallyCreate({
    FavoritedFile: L,
    FavoritedPrototype: P,
  }, O), t.insertAtIndex === null) {
    return
  }
  let k = [...t.orderedFavorites.slice(0, t.insertAtIndex), ...D, ...t.orderedFavorites.slice(t.insertAtIndex)]
  if (t.sectionId) {
    getCurrentLiveGraphClient().optimisticallyUpdate({
      UserSidebarSection: {
        [t.sectionId]: {
          orderedFavoritedResourceIds: k,
        },
      },
    }, O)
  }
  else {
    let e = {
      id: t.fileBrowserPrefs?.id || "optimistic-id",
      orderedFavoritedResourceIds: k,
      orderedTeamIds: t.fileBrowserPrefs?.orderedTeamIds,
      orderedLicenseGroupIds: t.fileBrowserPrefs?.orderedLicenseGroupIds,
    }
    ah(e, R, orgId, null, O)
  }
})
let $$P12 = createOptimistThunk((e, t) => {
  let {
    tile,
    entrypoint,
    favoriteId,
    fileBrowserEntryPoint,
  } = t
  switch (tile.type) {
    case nb.FILE:
    case nb.PINNED_FILE:
      e.dispatch($$H20({
        entrypoint,
        favoriteId,
        file: tile.file,
        fileBrowserEntryPoint,
      }))
      return
    case nb.PROTOTYPE:
      e.dispatch($$G8({
        entrypoint,
        favoriteId,
        prototype: tile.prototype,
        fileBrowserEntryPoint,
      }))
      return
    case nb.REPO:
      e.dispatch($$H20({
        entrypoint,
        favoriteId,
        file: fileEntityDataMapper.toLiveGraph(findBranchById(tile.repo, tile.branches, {})),
        repoId: tile.repo.id,
        fileBrowserEntryPoint,
      }))
      return
    case nb.OFFLINE_FILE:
      return
    default:
      throwTypeError(tile)
  }
})
let $$D16 = createOptimistAction("REMOVE_FOLDER_FAVORITE", (e, t, {
  optimistId: r,
}) => {
  let {
    folder,
    sectionId,
  } = t
  trackResourceRemovedFromFavorites(folder.id, e.getState().selectedView.view, t.entrypoint, FEntityType.FOLDER)
  let a = Y(e.dispatch, FEntityType.FOLDER, !1, folder.id, r, sectionId)
  t.favoriteId && getCurrentLiveGraphClient().optimisticallyDelete({
    FavoritedProject: {
      [t.favoriteId]: null,
    },
  }, a)
})
let $$k1 = createOptimistThunk(async (e, t, {
  liveStore: r,
}) => {
  let {
    tile,
    entrypoint,
    favoriteId,
    sectionId,
    fileBrowserEntryPoint,
  } = t
  switch (tile.type) {
    case nb.FILE:
      e.dispatch($$W2({
        entrypoint,
        favoriteId,
        sectionId,
        file: tile.file,
        fileBrowserEntryPoint,
      }))
      return
    case nb.PINNED_FILE:
      let d = await r.fetchFile(tile.file.key)
      e.dispatch($$W2({
        entrypoint,
        favoriteId,
        sectionId,
        file: fileEntityDataMapper.toLiveGraph(d),
        fileBrowserEntryPoint,
      }))
      return
    case nb.PROTOTYPE:
      e.dispatch($$V14({
        entrypoint,
        favoriteId,
        sectionId,
        prototype: tile.prototype,
        fileBrowserEntryPoint,
      }))
      return
    case nb.REPO:
      e.dispatch($$W2({
        entrypoint,
        favoriteId,
        sectionId,
        file: fileEntityDataMapper.toLiveGraph(findBranchById(tile.repo, tile.branches, e.getState().selectedBranchKeyByRepoId)),
        repoId: tile.repo.id,
        fileBrowserEntryPoint,
      }))
      return
    case nb.OFFLINE_FILE:
      return
    default:
      throwTypeError(tile)
  }
})
let $$M4 = createOptimistAction("ADD_FOLDER_FAVORITE", (e, t, {
  optimistId: r,
}) => {
  let {
    folder,
    sectionId,
  } = t
  trackResourceAddedToFavorites(folder.id, e.getState().selectedView.view, t.entrypoint, FEntityType.FOLDER)
  let a = Y(e.dispatch, FEntityType.FOLDER, !0, folder.id, r, sectionId)
  let d = e.getState().user?.id
  let c = e.getState().currentUserOrgId
  d && (t.favoriteId && t.sectionId && getCurrentLiveGraphClient().optimisticallyUpdate({
    FavoritedProject: {
      [t.favoriteId]: {
        sidebarSectionId: t.sectionId,
      },
    },
  }, a), "is_favorited" in folder && (t.favoriteId || getCurrentLiveGraphClient().optimisticallyCreate({
    FavoritedProject: {
      [`optimistic-id-${folder.id}`]: createFolderResource(folder, d, c, sectionId),
    },
  }, a)))
})
let $$F15 = createOptimistThunk((e, t) => {
  let {
    workspace,
  } = t
  trackResourceRemovedFromFavorites(workspace.id, e.getState().selectedView.view, t.entrypoint, FEntityType.WORKSPACE)
  let n = Y(e.dispatch, FEntityType.WORKSPACE, !1, workspace.id, void 0)
  t.favoriteId && getCurrentLiveGraphClient().optimisticallyDelete({
    FavoritedWorkspace: {
      [t.favoriteId]: null,
    },
  }, n)
})
let $$j10 = createOptimistThunk((e, t) => {
  let {
    workspace,
    sectionId,
  } = t
  let i = e.getState().currentUserOrgId
  trackResourceAddedToFavorites(workspace.id, e.getState().selectedView.view, t.entrypoint, FEntityType.WORKSPACE)
  let a = Y(e.dispatch, FEntityType.WORKSPACE, !0, workspace.id, void 0, sectionId)
  let d = e.getState().user?.id
  d && (t.favoriteId && t.sectionId
    ? getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedWorkspace: {
          [t.favoriteId]: {
            sidebarSectionId: t.sectionId,
          },
        },
      }, a)
    : getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedWorkspace: {
          [`optimistic-id-${workspace.id}`]: createWorkspaceResource(workspace, d, i, sectionId),
        },
      }, a))
})
let $$U18 = createOptimistThunk((e, t) => {
  let {
    team,
  } = t
  trackResourceRemovedFromFavorites(team.id, e.getState().selectedView.view, t.entrypoint, FEntityType.TEAM)
  let n = Y(e.dispatch, FEntityType.TEAM, !1, team.id, void 0)
  t.favoriteId && getCurrentLiveGraphClient().optimisticallyDelete({
    FavoritedTeam: {
      [t.favoriteId]: null,
    },
  }, n)
})
let $$B0 = createOptimistThunk((e, t) => {
  let {
    team,
    sectionId,
  } = t
  let i = e.getState().currentUserOrgId
  trackResourceAddedToFavorites(team.id, e.getState().selectedView.view, t.entrypoint, FEntityType.TEAM)
  let a = Y(e.dispatch, FEntityType.TEAM, !0, team.id, void 0, sectionId)
  let d = e.getState().user?.id
  d && (t.favoriteId && t.sectionId
    ? getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedTeam: {
          [t.favoriteId]: {
            sidebarSectionId: t.sectionId,
          },
        },
      }, a)
    : getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedTeam: {
          [`optimistic-id-${team.id}`]: createTeamResource(team, d, i, sectionId),
        },
      }, a))
})
let $$G8 = createOptimistAction("REMOVE_PROTOTYPE_FAVORITE", (e, t, {
  optimistId: r,
}) => {
  let {
    prototype,
    entrypoint,
    fileBrowserEntryPoint,
  } = t
  trackResourceRemovedFromFavorites(prototype.file_key, e.getState().selectedView.view, entrypoint, FEntityType.PROTOTYPE, void 0, fileBrowserEntryPoint)
  let l = Y(e.dispatch, FEntityType.PROTOTYPE, !1, prototype.file_key, r, void 0, prototype.page_id)
  e.getState().user?.id && t.favoriteId && getCurrentLiveGraphClient().optimisticallyDelete({
    FavoritedPrototype: {
      [t.favoriteId]: null,
    },
  }, l)
})
let $$V14 = createOptimistAction("ADD_PROTOTYPE_FAVORITE", (e, t, {
  optimistId: r,
}) => {
  let {
    prototype,
    entrypoint,
    sectionId,
    fileBrowserEntryPoint,
  } = t
  let c = e.getState().currentUserOrgId
  trackResourceAddedToFavorites(prototype.file_key, e.getState().selectedView.view, entrypoint, FEntityType.PROTOTYPE, "prototype", fileBrowserEntryPoint)
  let u = Y(e.dispatch, FEntityType.PROTOTYPE, !0, prototype.fig_file.key, r, sectionId, prototype.page_id)
  let p = e.getState().user?.id
  p && (t.favoriteId && t.sectionId
    ? getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedPrototype: {
          [t.favoriteId]: {
            sidebarSectionId: t.sectionId,
          },
        },
      }, u)
    : getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedPrototype: {
          [`optimistic-id-${prototype.fig_file.key}`]: createPrototypeResource(prototype, p, c, sectionId),
        },
      }, u))
})
let $$H20 = createOptimistAction("REMOVE_FILE_FAVORITE", (e, t, {
  optimistId: r,
}) => {
  let n = e.getState().selectedView.view
  let {
    file,
    entrypoint,
    fileBrowserEntryPoint,
  } = t
  trackResourceRemovedFromFavorites(file.key, n, entrypoint, FEntityType.FILE, file.editorType ?? "design", fileBrowserEntryPoint)
  let d = n === "fullscreen" ? K(e.dispatch, FEntityType.FILE, !1, file.key, D6(e.getState().currentUserOrgId)) : Y(e.dispatch, FEntityType.FILE, !1, file.key, r)
  e.getState().user?.id && t.favoriteId && getCurrentLiveGraphClient().optimisticallyDelete({
    FavoritedFile: {
      [t.favoriteId]: null,
    },
  }, d)
})
let $$z13 = createActionCreator("ADD_FILE_FAVORITE")
let $$W2 = createOptimistThunk((e, t) => {
  let {
    optimistId,
  } = e.optimisticDispatch($$z13(t))
  let {
    file,
    entrypoint,
    sectionId,
    fileBrowserEntryPoint,
  } = t
  trackResourceAddedToFavorites(file.key, e.getState().selectedView.view, entrypoint, FEntityType.FILE, file.editorType ?? "design", fileBrowserEntryPoint)
  let c = Y(e.dispatch, FEntityType.FILE, !0, file.key, optimistId, sectionId, void 0, D6(e.getState().currentUserOrgId))
  let u = e.getState().user?.id
  if (u) {
    if (t.favoriteId && t.sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedFile: {
          [t.favoriteId]: {
            sidebarSectionId: t.sectionId,
            orgId: e.getState().currentUserOrgId ?? null,
            resourceType: FEntityType.FILE,
            userId: u,
          },
        },
      }, c)
    }
    else if (e.getState().currentTeamId && e.getState().currentTeamId === t.file.teamId || e.getState().currentUserOrgId && t.file.parentOrgId) {
      let r = transformFileData(fileEntityDataMapper.toSinatra(file))
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedFile: {
          [`optimistic-id-${file.key}`]: {
            userId: u,
            orgId: e.getState().currentUserOrgId ?? null,
            teamId: e.getState().currentTeamId ?? null,
            sidebarSectionId: t.sectionId ?? null,
            createdAt: new Date(),
            updatedAt: new Date(),
            resourceId: file.key,
            resourceType: FEntityType.FILE,
            readableFile: r,
          },
        },
      }, c)
    }
  }
})
let K = (e, t, r, n, i) => sendWithRetry.put("/api/favorited_resources", {
  resource_type: t,
  is_favorited: r,
  file_key: n,
}).then(() => {
  let t = i ? getI18nString("tile.favoriting.file_removed_from_sidebar") : getI18nString("tile.favoriting.file_removed_from_favorites")
  let n = i ? getI18nString("tile.favoriting.file_added_to_sidebar") : getI18nString("tile.favoriting.file_added_to_favorites")
  e(VisualBellActions.enqueue({
    message: r ? n : t,
  }))
}).catch((t) => {
  let r = resolveMessage(t)
  if (r) {
    try {
      e(VisualBellActions.enqueue({
        message: r,
      }))
    }
    catch (t) {
      e(FlashActions.error("An error occurred while favoriting this item"))
    }
  }
})
let Y = (e, t, r, n, a, s, o, l) => sendWithRetry.put("/api/favorited_resources", {
  resource_type: t,
  is_favorited: r,
  resource_id_or_key: n,
  page_id: o,
  section_id: s,
}).then(() => {
  if (a && e(createOptimistCommitAction(a)), l || t !== FEntityType.FILE) {
    let t = r ? getI18nString("sidebar.item_added_bell_message") : getI18nString("sidebar.item_removed_bell_message")
    e(VisualBellActions.enqueue({
      message: t,
    }))
  }
}).catch((t) => {
  let n = resolveMessage(t)
  if (n) {
    a && e(createOptimistRevertAction(a))
    try {
      e(VisualBellActions.enqueue({
        message: n,
      }))
    }
    catch (n) {
      let t = r ? "favoriting this item" : "removing this favorite"
      e(FlashActions.error(`An error occurred while ${t}`))
    }
  }
})
let $ = e => (trackFavoritesToMoveUnstarAllClick(e.favorited_resource_ids), sendWithRetry.del("/api/favorited_resources", APIParameterUtils.toAPIParameters(e)))
let $$X23 = createOptimistThunk((e, t) => {
  $({
    favorited_resource_ids: t.favoriteIds,
  }).catch((t) => {
    e.dispatch(VisualBellActions.enqueue({
      message: `${t.data.message}`,
    }))
  })
})
let q = "optimistic-id-custom-section-id"
export const DN = $$B0
export const EX = $$k1
export const Fb = $$W2
export const Ic = $$C3
export const Mv = $$M4
export const N9 = $$L5
export const U6 = $$S6
export const V1 = $$w7
export const X7 = $$G8
export const YI = $$R9
export const ZW = $$j10
export const de = $$N11
export const dy = $$P12
export const gG = $$z13
export const iN = $$V14
export const _$$if = $$F15
export const jv = $$D16
export const lF = $$I17
export const ox = $$U18
export const pS = $$A19
export const qP = $$H20
export const to = $$v21
export const vg = $$x22
export const vr = $$X23
export const yH = $$O24
