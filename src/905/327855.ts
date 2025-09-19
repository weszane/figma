import { createLocalFileKey, isLocalFileKey } from "../905/657242";
import { Fullscreen, FontSourceType, UIVisibilitySetting, ColorStateTsApi, DesignWorkspace, VariablesBindings, UserInterfaceElements, SideType, PrototypingTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { getFontMetadataList } from "../905/165290";
import { getPreviousSelectedView } from "../905/612521";
import { w5 } from "../figma_app/749805";
import { isLocalDevOnCluster } from "../figma_app/169182";
import { delay } from "../905/236856";
import { XHRError, XHR } from "../905/910117";
import { serializeQuery } from "../905/634134";
import { setTagGlobal } from "../905/11";
import { logError, logInfo, logWarning } from "../905/714362";
import { getGracePeriodStatus } from "../figma_app/141320";
import { generateUUIDv4 } from "../905/871474";
import { yp } from "../905/138461";
import { FileCreationPermissionsGenerator } from "../figma_app/687776";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { b as _$$b } from "../905/620668";
import { Lm, mF } from "../figma_app/755939";
import { handleEnterMode } from "../figma_app/806075";
import { selectViewAction } from "../905/929976";
import { filePutAction } from "../figma_app/78808";
import { kP, OB, Y6, FP, JM } from "../figma_app/91703";
import { am } from "../figma_app/430563";
import { showModalHandler } from "../905/156213";
import { hZ } from "../figma_app/990058";
import { setTeamOptimistThunk } from "../figma_app/240735";
import { putTeamUser } from "../905/584989";
import { $W } from "../figma_app/681244";
import { $K, bW, s5 } from "../figma_app/223206";
import { ky } from "../figma_app/214121";
import { LQ } from "../figma_app/741211";
import { trackFileEvent, trackFileObjEvent } from "../figma_app/314264";
import { ZG, GT, mu, yn, $3 } from "../figma_app/840917";
import { fullscreenValue } from "../figma_app/455680";
import { setupFileObject } from "../905/628874";
import { getRandomString } from "../905/87821";
import { setPropertiesPanelTab } from "../figma_app/741237";
import { liveStoreInstance } from "../905/713695";
import { getBackgroundColorForTheme, getMPVisibleTheme } from "../905/187165";
import { FEditorType, mapEditorTypeToWorkspaceType, mapEditorTypeToFileType, isWhiteboardOrDesignOrIllustration, doesEditorTypeMatchFileType, mapFileTypeToEditorType } from "../figma_app/53721";
import { m as _$$m } from "../905/84999";
import { j as _$$j } from "../905/694231";
import { l5 } from "../figma_app/728657";
import { dL } from "../figma_app/825489";
import { ag, u6, p9, Jt, yf } from "../905/509613";
import { setLastUsedEditorType } from "../905/298923";
import { lA } from "../figma_app/325537";
import { W as _$$W } from "../905/442612";
import { i as _$$i } from "../figma_app/43065";
import { M as _$$M } from "../figma_app/854365";
import { q7, bY, Vf } from "../figma_app/60023";
import { bJ, Ac, D2 } from "../figma_app/318123";
import { Zj } from "../figma_app/610446";
import { aZ, E7, UT } from "../905/775298";
import { n as _$$n } from "../905/646812";
import { z4 } from "../905/37051";
import { e8 } from "../figma_app/557318";
import { getConnectionInfo, getNavigatorHardwareInfo, getWindowDeviceInfo } from "../905/550523";
import { N as _$$N } from "../905/945673";
import { fullscreenPerfManager } from "../905/125218";
var n;
let A = function e() {
  return new Promise(t => {
    let i = () => {
      window.removeEventListener("online", i);
      A = e();
      t();
    };
    window.addEventListener("online", i);
  });
}();
function y(e) {
  return "canceled" === e;
}
class b {
  constructor(e) {
    this._resolveCancelPromise = () => { };
    this._cancelPromise = new Promise(e => {
      this._resolveCancelPromise = e;
    });
    this._result = this.startRequest(e);
  }
  getResult() {
    return this._result;
  }
  cancelRequest() {
    this._resolveCancelPromise("canceled");
  }
  async startRequest(e) {
    let t = 0;
    for (; ;) {
      let i = A;
      try {
        return await Promise.race([e(), this._cancelPromise]);
      } catch (e) {
        if (e instanceof XHRError) {
          if (e.status >= 400 && e.status < 500) throw e;
        } else throw e;
      }
      let n = await Promise.race([this._cancelPromise, delay(Math.min(500 * Math.pow(2, t), 6e4)), i]);
      if (n && y(n)) return n;
      t++;
    }
  }
}
export function $$eb11(e, t) {
  return navigator.onLine ? e.message ? e.message : t : getI18nString("user_facing_error.offline");
}
export function $$ev9(e) {
  return $$eb11(e, getI18nString("user_facing_error.new_document"));
}
export function $$eI10(e, t, i) {
  let n = JSON.stringify(getPreviousSelectedView() || {});
  let r = "fullscreen" === t.selectedView.view ? t.selectedView.trackingInfo?.source : "";
  trackFileEvent("File Opened", e.key, t, {
    randomID: getRandomString(),
    prevView: n,
    source: r,
    authenticatedUserIds: t.authedUsers.orderedIds.filter(e => e !== t.user?.id)
  });
  "fullscreen" === t.selectedView.view && (t.selectedView.editorType === FEditorType.Design || t.selectedView.editorType === FEditorType.DevHandoff || t.selectedView.editorType === FEditorType.Illustration) && handleEnterMode(t, t.selectedView.editorType, i ? "stored" : "init");
}
export async function $$eE1(e, t, i) {
  let n = await XHR.post("/api/files/create", t, {
    retryCount: 2
  });
  return ex(e.dispatch, n.data, i, e.getState());
}
function ex(e, t, i, n) {
  let r = t.meta.fig_file;
  let a = t.meta.team_user;
  let s = t.meta.org_user;
  e(filePutAction({
    file: r
  }));
  s && e(hZ({
    orgUsers: [s],
    orgId: s.org_id
  }));
  a && e(putTeamUser({
    teamUsers: [a],
    teamId: a.team_id
  }));
  let o = i ? {
    ...(i.triggerElement && {
      uiTriggerElement: i.triggerElement
    }),
    uiTriggeredFrom: i.from,
    uiSelectedView: JSON.stringify(i.selectedView)
  } : {};
  o.teamId = a?.team_id || null;
  o.orgId = s?.org_id || null;
  o.folderId = r.folder_id;
  o.authenticatedUserIds = n.authedUsers.orderedIds;
  o.offline = `${!navigator.onLine}`;
  trackFileObjEvent("File Created", r, n, o);
  return r.key;
}
export function $$eS6({
  fileKey: e,
  folderId: t,
  teamId: i,
  orgId: n,
  isNewFile: r,
  state: a
}) {
  let s = desktopAPIInstance && desktopAPIInstance.getConcurrentLoadingTabsCount() || 0;
  let o = desktopAPIInstance && 0 === s || !document.hidden;
  let {
    fileOpenIndex,
    isColdBoot
  } = fullscreenPerfManager.logOpenFileAction(e, o, t, i, n);
  _$$N.loadTimer.logOpenFileAction(e);
  trackFileEvent("Fullscreen File Opened", e, a, {
    randomID: getRandomString(),
    fileOpenIndex,
    isColdBoot,
    concurrentLoadingTabsCount: s,
    isActive: !document.hidden,
    isVisibleLoad: o,
    isNewFile: r,
    ...getConnectionInfo(),
    ...getNavigatorHardwareInfo(),
    ...getWindowDeviceInfo()
  }, {
    forwardToDatadog: !0
  });
}
export async function $$ew5(e, t, i, n) {
  let r = e.getState();
  let s = r.selectedView;
  let o = s && "fullscreen" === s.view;
  if (!o) return;
  {
    let e = await liveStoreInstance.fetchFile(t);
    setTagGlobal("file.key", e.key);
    null === e.file_repo_id ? setTagGlobal("branching", "not enabled") : (setTagGlobal("branching_repo", e.file_repo_id), null === e.source_file_key ? setTagGlobal("branching", "main branch") : setTagGlobal("branching", "user branch"));
    $$eS6({
      fileKey: t,
      folderId: e.folder_id,
      orgId: e.parent_org_id ?? null,
      teamId: e.team_id,
      isNewFile: !0,
      state: r
    });
  }
  let l = getBackgroundColorForTheme(getMPVisibleTheme(r.theme.themePreference));
  mpGlobal.preconnect(mpGlobal.url({
    fileKey: t,
    role: "editor",
    initialBgColor: l,
    suppressDecodeErrors: isLocalDevOnCluster(),
    tagForLogging: $$eD3(i),
    forceViewOnly: z4.getIsExtension()
  }));
  await fullscreenValue.loadAndStartFullscreenIfNecessary();
  Fullscreen.setEditorType(mapEditorTypeToWorkspaceType(i));
  Fullscreen.setEditorTheme(r.theme.visibleTheme || "");
  let c = (await (n ? (async () => {
    let e = new b(() => _$$m.getFileMetadata({
      fileKey: t
    }));
    let i = await e.getResult();
    if (y(i)) throw Error("Request was canceled");
    return i;
  })() : _$$m.getFileMetadata({
    fileKey: t
  }))).data.meta;
  if (!(o = (s = (r = e.getState()).selectedView) && "fullscreen" === s.view)) return;
  $$eI10({
    key: t
  }, r);
  _$$b(mapEditorTypeToFileType(i));
  setLastUsedEditorType(i);
  let m = {
    sharedFontsList: getFontMetadataList(c.shared_fonts),
    localizedToUnlocalized: [],
    renames: {
      family: {},
      style: {}
    },
    sources: [FontSourceType.SHARED]
  };
  _$$n(e, m);
  e.dispatch(kP({
    needsUpgrade: c.needs_upgrade
  }));
  fullscreenValue.figFileLoaded(t);
  Fullscreen.openFileWithServerMetadata({
    metadata: {
      file_key: c.file_key,
      source_file_key: c.source_file_key
    },
    startInCommentsMode: !1,
    newFile: !0,
    selectedNodeId: null,
    devModeFocusNodeId: null,
    fallbackStateGroupId: null,
    urlViewport: null,
    additionalTopPadding: null,
    mainComponentLink: !1,
    shouldConnectToMultiplayer: mpGlobal.shouldConnectToMultiplayer,
    preserveUrlNodeId: !1
  });
  let h = c.team;
  h && e.dispatch(setTeamOptimistThunk({
    team: h,
    userInitiated: !1
  }));
  atomStoreManager.set(ag, c.jubilee_tentative_plan_eligibility);
  atomStoreManager.set(u6, c.jubilee_tentative_user_eligibility);
  atomStoreManager.set(p9, c.jubilee_b);
  atomStoreManager.set(Jt, c.jubilee_eligibility_s);
  atomStoreManager.set(yf, new Set());
  let f = await liveStoreInstance.fetchFile(t);
  let _ = e.getState();
  let A = _.folders[f.folder_id || ""];
  let v = _.teams[f.team_id || ""];
  let S = getGracePeriodStatus(_.userEduGracePeriods, f.team_id || "");
  let w = _.repos[f.file_repo_id || ""];
  let T = _.fileByKey[f.source_file_key || ""];
  let k = A ? {
    ...FileCreationPermissionsGenerator.disabled(),
    ...A
  } : null;
  let N = setupFileObject(f, {
    folder: k,
    team: v,
    repo: w,
    sourceFile: {
      ...T,
      can_manage: !0,
      can_view: !0
    },
    can_delete: !0,
    can_edit: !0,
    can_edit_canvas: !0,
    can_access_dev_mode_entry_point: !0,
    can_access_full_dev_mode: !0,
    can_manage: !0,
    can_view: !0,
    can_export: !0,
    hasEduGracePeriod: S.isInValidGracePeriod,
    isFavorited: !!T?.is_favorited
  });
  isWhiteboardOrDesignOrIllustration(i) && !doesEditorTypeMatchFileType(i, N.editorType) && (logError("new file", "editor type mismatch", {
    requested: i,
    file: N.editorType
  }), i = mapFileTypeToEditorType(N.editorType));
  (i === FEditorType.Sites || i === FEditorType.Figmake) && Fullscreen.addNewFileDefaultResponsiveSet();
  i === FEditorType.Figmake && Fullscreen?.setEnabledFigmake(!0);
  e.dispatch(OB({
    file: N,
    fullscreenEditorType: i
  }));
  let P = c.current_team_user;
  P && f.team_id && e.dispatch(putTeamUser({
    teamUsers: [P],
    teamId: f.team_id
  }));
  let O = !!(c.is_team_template && LQ(r));
  desktopAPIInstance?.setIsLibrary(!!c.last_published_at);
  desktopAPIInstance?.setIsTeamTemplate(!!O);
}
export async function $$eC4(e, t, i) {
  e.dispatch(Y6({
    mode: i ? UIVisibilitySetting.HIDE_UI : UIVisibilitySetting.OFF
  }));
  await fullscreenValue.loadAndStartFullscreenIfNecessary();
  ColorStateTsApi && ky.updateColorsInFullscreen(ColorStateTsApi.colorTokensState());
  setPropertiesPanelTab(DesignWorkspace.DESIGN);
  getFeatureFlags().ce_new_missing_fonts_logging && e8();
  let n = e.getState().theme.visibleTheme;
  fullscreenValue.updateAppModel({
    themePreference: n
  });
  Fullscreen.openEmptyFile(mapEditorTypeToWorkspaceType(t));
}
export function $$eT2(e) {
  let t = {};
  e.folder_id && (t.folder_id = e.folder_id);
  e.org_id && (t.org_id = e.org_id);
  e.framePresetName && (t.frame_preset_name = e.framePresetName);
  e.editorType && (t.editor_type = e.editorType);
  e.fileName && (t.name = e.fileName);
  e.localFileKey && (t.localFileKey = e.localFileKey);
  e.team_id && (t.team_id = e.team_id);
  e.figjamAiNewFileData && (t.figjamAiNewFile_prompt = e.figjamAiNewFileData.prompt, t.figjamAiNewFile_useCaseCategory = e.figjamAiNewFileData.useCaseCategory, t.figjamAiNewFile_subtitle = e.figjamAiNewFileData.subtitle, t.figjamAiNewFile_entrypoint = e.figjamAiNewFileData.entrypoint);
  e.slidesAiNewFileData && (t.slidesAiNewFile_source = e.slidesAiNewFileData.source);
  e.figmakeInitialMessage && (t.figmakeInitialMessage = e.figmakeInitialMessage);
  e.figjamMakeSomethingUseCase && (t.figjam_make_something_use_case = e.figjamMakeSomethingUseCase);
  e.newFileDataLocalStorageKey && (t.newFileDataLocalStorageKey = e.newFileDataLocalStorageKey);
  e.slideTemplateLibraryKey && (t.slide_template_library_key = e.slideTemplateLibraryKey);
  e.initialLibKey && (t.initial_lib_key = e.initialLibKey);
  e.trackingInfo?.from && (t.from = e.trackingInfo.from);
  return t;
}
async function ek(e, t, i, r, p) {
  let m;
  if (atomStoreManager.set(q7, !0), await $$eC4(e, mapFileTypeToEditorType(t.editorType), r), t.newFileDataLocalStorageKey && atomStoreManager.set($K, t.newFileDataLocalStorageKey), "cooper" === t.editorType && Lm && mF) {
    let e = atomStoreManager.get(bW);
    t.cooperTemplateLibraryKey ? atomStoreManager.set(Lm, {
      type: mF.TEMPLATES,
      libraryKey: t.cooperTemplateLibraryKey,
      parentView: {
        type: mF.ALL
      }
    }) : e && atomStoreManager.set(Lm, {
      type: mF.ORG
    });
  }
  if ("slides" === t.editorType) {
    if (t.slidesAiNewFileData) {
      let e = atomStoreManager.get(s5);
      atomStoreManager.set(bY, {
        type: Vf.TEMPLATE_PICKER,
        figjamEntryPointData: e,
        source: t.slidesAiNewFileData.source
      });
    }
    t.slideTemplateLibraryKey && atomStoreManager.set(bY, {
      type: Vf.TEMPLATE,
      libraryKey: t.slideTemplateLibraryKey,
      parentView: {
        type: Vf.ALL
      }
    });
  }
  atomStoreManager.set(q7, !1);
  p ? (await p.onConnectNewFile(t), await p.session()?.restoreAutosaveIfNeeded()) : logInfo("new file", "failed to get autosave");
  (t.nodeId || t.viewport) && Fullscreen.restorePageAndViewportFromURL(t.nodeId ?? null, t.viewport ?? null);
  let g = t;
  let f = () => (p?.fileCreationManager?.newFileInfo && (g = p?.fileCreationManager?.newFileInfo), g);
  let A = "slides" !== t.editorType && p?.managerState === "connected" && yp && !w5();
  if (t.folder_id && _$$j.getDefaultModes({
    folderId: t.folder_id
  }).then(e => {
    let t = e.data.meta;
    for (let e of Object.keys(t)) permissionScopeHandler.system("set-default-mode-from-workspace-team", () => {
      VariablesBindings.setExplicitVariableModeForSelection(e, {
        guid: t[e],
        collectionKey: e,
        extendedCollectionId: null
      }, !1);
    });
  }), A) {
    let e = 0;
    let r = performance.now();
    if (i.isCanceled) return {
      status: "canceled"
    };
    let a = new b(async () => {
      e++;
      let t = $$eT2(f());
      return (await XHR.post("/api/files/create", t)).data;
    });
    i.setOnCanceled(() => a.cancelRequest());
    let s = await a.getResult();
    if (y(s)) return {
      status: "canceled"
    };
    i.setOnCanceled(null);
    let o = Math.round(performance.now() - r);
    n.offlineFileCreated(e, o, t);
    m = s;
  } else {
    logInfo("new file", "Offline file creation not supported", {
      editorType: t.editorType,
      autosaveState: p?.managerState
    });
    let e = $$eT2(t);
    m = (await XHR.post("/api/files/create", e, {
      retryCount: eR
    })).data;
  }
  let v = m.meta.fig_file;
  desktopAPIInstance?.setUrl({
    url: v.url,
    fileKey: v.key,
    oldLocalFileKey: p?.fileKey
  });
  let I = p?.fileCreationManager;
  I && I.assignPendingRealFileKey(v.key);
  f();
  g.fileName && g.fileName !== v.name && (e.dispatch(filePutAction({
    file: {
      key: v.key,
      name: g.fileName
    },
    userInitiated: !0
  })), v.name = g.fileName);
  let x = ex(e.dispatch, m, t.trackingInfo, e.getState());
  if ("whiteboard" === t.editorType && (t.figjamAiNewFileData ? (atomStoreManager.set(bJ), atomStoreManager.set(Ac, t.figjamAiNewFileData.prompt), atomStoreManager.set(D2, {
    fileKey: x,
    prompt: t.figjamAiNewFileData.prompt,
    useCaseCategory: t.figjamAiNewFileData.useCaseCategory,
    subtitle: t.figjamAiNewFileData.subtitle,
    stage: Zj.GENERATE_MODE,
    entrypoint: t.figjamAiNewFileData.entrypoint,
    fromGenerateModalV2: !0,
    pageNodeId: "0:1"
  })) : t.figjamMakeSomethingUseCase && atomStoreManager.set(l5, t.figjamMakeSomethingUseCase)), "figmake" === t.editorType && t.figmakeInitialMessage && !getFeatureFlags().killswitch_make_initial_message && atomStoreManager.set(lA, t.figmakeInitialMessage), "design" === t.editorType && t.initialLibKey) {
    let i = _$$l(t.initialLibKey);
    e.dispatch(am({
      libraryFileSubscription: {
        file_key: x,
        library_key: i,
        is_subscribed: !0
      },
      userInitiated: !0,
      fileSubscribedLibraryKeys: new Set()
    }));
    trackEventAnalytics("Library File Enabled", {
      fileKey: x,
      fileTeamId: g.team_id,
      fileOrgId: g.org_id,
      libraryKey: t.initialLibKey,
      entryPoint: "community_resource_detail_page"
    }, {
      forwardToDatadog: !0
    });
    e.dispatch(FP({
      tab: UserInterfaceElements.ASSETS,
      persist: !0
    }));
    atomStoreManager.set(dL, i);
  }
  logInfo("new file", "Received file key for new file", {
    fileKey: x
  });
  await $$ew5(e, x, mapFileTypeToEditorType(t.editorType), A);
  await p?.assignFileKeyForLocalFile(v.key);
  t.callback && t.callback(x);
  return {
    status: "success"
  };
}
(e => {
  e.fileCreationStarted = function (e) {
    trackEventAnalytics("File Creation Start", {
      editorType: e.editorType,
      from: e.trackingInfo?.from,
      triggerElement: e.trackingInfo?.triggerElement,
      selectedView: e.trackingInfo?.selectedView?.view,
      offline: !navigator.onLine,
      webLocksAvailable: yp
    });
    logInfo("new file", "Creating a new file", {
      editorType: e.editorType,
      from: e.trackingInfo?.from,
      selectedView: e.trackingInfo?.selectedView?.view
    });
  };
  e.offlineFileCreated = function (e, t, i) {
    e > eR && (async () => {
      let n = ZG()?.session();
      let r = n ? await n.getNodeChangeCount().catch(() => 0) : 0;
      let a = GT();
      trackEventAnalytics("Offline File Creation", {
        editorType: i.editorType,
        requestDuration: t,
        requestAttempts: e,
        nodeChangeCount: r,
        hasChangedMetadata: a?.hasChangedMetadata
      }, {
        forwardToDatadog: !0
      });
    })().catch(() => { });
  };
  e.fileCreationFailed = function (e, t, i, n, r) {
    let a = t instanceof XHRError ? t.status : void 0;
    logError("new file", "failed to create new file", {
      msg: e,
      status: a,
      hasPersistedUserChanges: i
    });
    trackEventAnalytics("File Creation Failure", {
      editorType: r.editorType,
      msg: e,
      status: a,
      offline: !navigator.onLine,
      hasPersistedUserChanges: i,
      result: n,
      from: r.trackingInfo?.from,
      selectedView: r.trackingInfo?.selectedView?.view
    }, {
      forwardToDatadog: !0
    });
  };
})(n || (n = {}));
let eR = 2;
export function $$eN8(e, t, i) {
  let a;
  if (aZ()) {
    logWarning("new file", "File creation already in progress");
    return;
  }
  let s = E7();
  n.fileCreationStarted(t);
  let o = e.getState().user;
  if (o) {
    let e = t.localFileKey ?? createLocalFileKey(generateUUIDv4);
    a = mu(e, o.id);
  } else logInfo("Autosave", "Not creating manager for logged out user");
  ek(e, t, s, i, a).catch(e => ({
    status: "error",
    error: e
  })).then(async i => {
    if ("canceled" === i.status) await yn(); else if ("error" === i.status) {
      let {
        error
      } = i;
      let l = $$ev9(error);
      let d = !!(await a?.session()?.hasPersistedUserChanges());
      let c = d ? "show_banner" : "exit_editor";
      if (n.fileCreationFailed(l, error, d, c, t), "show_banner" === c) {
        logInfo("new file", "Leaving editor open because file has unsynced persisted changes.");
        e.dispatch(FlashActions.error(l));
        e.dispatch(JM());
      } else {
        if (o && a) {
          let e = a.fileKey;
          isLocalFileKey(e) && (await $3(o.id, e));
        }
        await yn();
        e.dispatch(FlashActions.error(l));
        e.dispatch(selectViewAction({
          view: "recentsAndSharing"
        }));
        let i = e.getState().teams[e.getState().currentTeamId ?? ""];
        i && i.starter_team && "sites" === t.editorType && _$$M ? e.dispatch(showModalHandler({
          type: _$$M,
          data: {
            team: i
          }
        })) : i && i.starter_team && "figmake" === t.editorType && _$$W() && e.dispatch(showModalHandler({
          type: _$$i,
          data: {
            team: i
          }
        }));
        desktopAPIInstance && (desktopAPIInstance.showFileBrowser(l), desktopAPIInstance.close({
          suppressReopening: !0,
          shouldForceClose: !0
        }));
      }
      t.callback && t.callback(null);
    }
  }).$$finally(() => {
    UT();
    logInfo("new file", "finished creating new file");
  });
  let l = e.getState().selectedView;
  e.dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: void 0,
    framePresetName: t.framePresetName,
    editorType: mapFileTypeToEditorType(t.editorType),
    canNavigateDesktopNewTab: t.allowOnDesktop,
    nodeId: t.nodeId,
    localFileName: t.fileName,
    prevSelectedView: "recentsAndSharing" === l.view || "folder" === l.view ? l : void 0
  }));
}
export function $$eP0(e, t) {
  if (!desktopAPIInstance) return;
  t.localFileKey || (t.localFileKey = createLocalFileKey(generateUUIDv4));
  let i = {
    ...$$eT2(t)
  };
  let n = e.getState().user?.id;
  n && (i.fuid = n);
  let a = serializeQuery(i);
  let s = new URL(`/file/new?${a}`, document.baseURI);
  let o = t.trackingInfo ? {
    ...t.trackingInfo
  } : null;
  try {
    o?.selectedView && structuredClone(o.selectedView);
  } catch (e) {
    o?.selectedView && (o.selectedView = {
      view: o.selectedView.view
    });
  }
  let l = {
    ...t,
    trackingInfo: o,
    callback: void 0
  };
  let d = "desktopNewTab" === e.getState().selectedView.view;
  desktopAPIInstance.createFile({
    url: s.href,
    newFileInfo: l,
    editorType: t.editorType,
    isFromNewTabPage: d
  }).then(({
    fileKey: e
  }) => {
    t.callback && t.callback(e);
  }).catch(e => {
    console.error(e);
  });
}
export function $$eO7(e) {
  let t = e && $W[e];
  if (t) {
    let e = `${t.name} -`;
    Fullscreen.createFrame(e, t.width, t.height, SideType.RIGHT, !0);
    fullscreenValue.triggerAction("zoom-to-fit");
    PrototypingTsApi.updateCurrentPagePrototypeDeviceIfNecessary();
  }
}
export function $$eD3(e) {
  return e === FEditorType.DevHandoff ? "dev_mode" : void 0;
}
export const J5 = $$eP0;
export const Sp = $$eE1;
export const _I = $$eT2;
export const DH = $$eD3;
export const U_ = $$eC4;
export const OZ = $$ew5;
export const zR = $$eS6;
export const rJ = $$eO7;
export const $N = $$eN8;
export const OX = $$ev9;
export const BL = $$eI10;
export const an = $$eb11;
