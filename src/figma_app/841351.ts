import dayjs from 'dayjs';
import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { NotificationCategory } from '../905/170564';
import { LRUCache } from '../905/196201';
import { CompareViewType } from '../905/218608';
import { VisualBellActions } from '../905/302958';
import { createOptimistThunk } from '../905/350402';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { notificationActions } from '../905/463586';
import { isFullscreenSitesView } from '../905/561485';
import { FlashActions } from '../905/573154';
import { getFeatureFlags } from '../905/601108';
import { VersionHistoryAnalyticsInstance } from '../905/703182';
import { liveStoreInstance } from '../905/713695';
import { logError } from '../905/714362';
import { getDiffVersion } from '../905/760074';
import { UPDATE_FETCHED_PAGE_IDS, VERSION_HISTORY_APPEND, VERSION_HISTORY_COMPARE_CHANGES, VERSION_HISTORY_LOADING, VERSION_HISTORY_PAGE_LOADING, VERSION_HISTORY_RESET_VERSIONS, VERSION_HISTORY_SET_ACTIVE, VERSION_HISTORY_SET_LINKED_VERSION } from '../905/784363';
import { loadCanvasData } from '../905/815475';
import { zeroSessionLocalIDString } from '../905/871411';
import { generateUUIDv4 } from '../905/871474';
import { XHR } from '../905/910117';
import { selectViewAction } from '../905/929976';
import { versionHandlerInstance } from '../905/985740';
import { atom, atomStoreManager } from '../figma_app/27355';
import { FEditorType, mapEditorTypeToStringWithError } from '../figma_app/53721';
import { setProgressBarState } from '../figma_app/91703';
import { NK } from '../figma_app/111825';
import { sitesViewSetterAtomFamily } from '../figma_app/115923';
import { getFileKeyFromSelectedView } from '../figma_app/193867';
import { fullscreenValue } from '../figma_app/455680';
import { loadAllPagesAndTrack } from '../figma_app/582924';
import { fetchPaginatedData, PAGINATION_PREV } from '../figma_app/661371';
import { replaceSelection } from '../figma_app/741237';
import { AppStateTsApi, Fullscreen, HandoffBindingsCpp, LayoutTabType, PanelType, PluginModalType, SceneGraphHelpers, UIVisibilitySetting, ViewType } from '../figma_app/763686';
import { fileApiHandler } from '../figma_app/787550';

// Refactored version history module for Figma app
// Original file: /Users/allen/github/fig/src/figma_app/841351.ts
// This module handles version history loading, caching, comparison, and UI interactions.

// Constants
export const CURRENT_VERSION_ID = 'current_version'; // Original: $$B5

// Cache for canvas data
export const canvasCache = new LRUCache(40); // Original: $$G2

// Atom for version history key
export const versionHistoryKeyAtom = atom(''); // Original: $$V14

// Query for paginated file versions
export const fileVersionsQuery = liveStoreInstance.Query({
  fetch: async (params: any) => {
    const fileKey = params.fileKey;
    if (!fileKey) return null;
    const startTime = performance.now();
    const response = await versionHandlerInstance.getPaginatedVersions({
      ...params,
      fileKey,
      versionIds: params.versionIds?.join(',')
    });
    const duration = performance.now() - startTime;
    trackEventAnalytics('version_diffing_performance_metrics', {
      name: 'Lego versions fetched',
      durationMs: duration
    });
    return response.data.meta?.versions || [];
  },
  key: 'fileVersionsPaginated'
}); // Original: $$H12

/**
 * Generates a unique key for canvas caching.
 * @param fileKey - The file key.
 * @param pageId - The page ID.
 * @param version - The version object.
 * @param fileVersion - The file version.
 * @returns The generated key.
 */
export function generateCanvasKey(fileKey: string, pageId: string, version: any, fileVersion: any): string {
  return `${fileKey}-${pageId}-${version.id}-${fileVersion}`; // Original: $$z10
}

/**
 * Loads canvas data for a specific version.
 * @param version - The version object.
 * @param pageId - The page ID.
 * @returns Promise resolving to canvas data or null.
 */
export function loadCanvasForVersion(version: any, pageId: string) {
  const state = debugState.getState();
  const fileKey = state.openFile?.key;
  const nodesToExtract = [pageId, state.mirror.sceneGraph.getInternalCanvas()?.guid].filter(Boolean);
  if (!fileKey || !pageId) return null;
  const key = generateCanvasKey(fileKey, pageId, version, NK(state.fileVersion));
  if (canvasCache.has(key)) return canvasCache.get(key);
  const promise = new Promise((resolve, reject) => {
    loadCanvasData(`${version.canvas_url}&nodes_to_extract=${nodesToExtract.join(',')}`).then(([canvas,, fileVersion]) => {
      const newKey = generateCanvasKey(fileKey, pageId, version, fileVersion);
      const result = Promise.resolve({
        canvas,
        key: newKey
      });
      canvasCache.delete(key);
      canvasCache.set(newKey, result);
      resolve(result);
    }).catch(reject);
  });
  canvasCache.set(key, promise);
  return promise; // Original: $$W8
}

/**
 * Invalidates the canvas cache for a version.
 * @param version - The version object.
 */
export function invalidateCanvasCache(version: any): void {
  const state = debugState.getState();
  const fileKey = state.openFile?.key;
  const pageId = state.mirror.appModel.currentPage;
  if (!fileKey || !pageId) return;
  const key = generateCanvasKey(fileKey, pageId, version, NK(state.fileVersion));
  canvasCache.delete(key); // Original: $$K18
}

/**
 * Fetches checkpoint diff data.
 * @param fileKey - The file key.
 * @param fromVersionId - The from version ID.
 * @param migrationVersion - The migration version.
 * @param nodesToDiff - Optional nodes to diff.
 * @returns Promise resolving to checkpoint diff.
 */
async function fetchCheckpointDiff(fileKey: string, fromVersionId: string, migrationVersion: string, nodesToDiff?: string[]): Promise<any> {
  const params = new URLSearchParams();
  params.set('diff_version', getDiffVersion().toString());
  params.set('from_file_version_id', fromVersionId);
  params.set('migration_version', migrationVersion);
  if (nodesToDiff && nodesToDiff.length > 0) params.set('nodes_to_diff', nodesToDiff.join(','));
  const {
    data: {
      meta: {
        checkpoint_diff
      }
    }
  } = await XHR.post(`/api/file_diff/v2/checkpoint_diff/${fileKey}?${params.toString()}`);
  return checkpoint_diff; // Original: Y
}

/**
 * Downloads diff data from a URL.
 * @param url - The URL to download from.
 * @returns Promise resolving to the data.
 */
async function downloadDiffData(url: string): Promise<any> {
  const startTime = new Date().getTime();
  const {
    data
  } = await XHR.crossOriginGetAny(url, null, {
    responseType: 'arraybuffer'
  });
  const endTime = new Date().getTime();
  trackEventAnalytics('versioning_performance_metrics', {
    name: 'download_diff',
    durationMs: endTime - startTime
  }, {
    forwardToDatadog: true
  });
  return data; // Original: $
}

/**
 * Gets the active version from version history.
 * @param versionHistory - The version history state.
 * @returns The active version or undefined.
 */
export function getActiveVersion(versionHistory: any): any {
  for (const version of versionHistory.versions) {
    if (version.id === versionHistory.activeId) return version;
  }
  if (versionHistory.linkedVersion && versionHistory.activeId === versionHistory.linkedVersion.id) return versionHistory.linkedVersion;
} // Original: $$X17

/**
 * Loads diff and pages for comparison.
 * @param versionId - The version ID.
 * @param dispatch - The dispatch function.
 * @param nodesToDiff - Optional nodes to diff.
 * @returns Promise resolving to error message or empty string.
 */
async function loadDiffAndPages(versionId: string, dispatch: any, nodesToDiff?: string[]): Promise<string> {
  const diff = await fetchCheckpointDiff(dispatch.getState().openFile.key, versionId, dispatch.getState().fileVersion, nodesToDiff);
  if (!diff.signed_url) return 'Error viewing what\'s changed between file versions.';
  const canEdit = !!dispatch.getState().openFile?.canEdit;
  const startTime = new Date().getTime();
  const [data] = await Promise.all([downloadDiffData(diff.signed_url), loadAllPagesAndTrack(PluginModalType.DEBUG_TOOL)]);
  const endTime = new Date().getTime();
  trackEventAnalytics('versioning_performance_metrics', {
    name: 'download_diff_and_load_pages',
    durationMs: endTime - startTime,
    isEditor: canEdit
  }, {
    forwardToDatadog: true
  });
  return Fullscreen.loadHistoryChangesState(data) ? '' : 'Error loading HistoryChangesState into memory.'; // Original: q
}

/**
 * Finds a version by ID in the version history.
 * @param versionId - The version ID.
 * @param versionHistory - The version history state.
 * @returns The found version or undefined.
 */
export function findVersionById(versionId: string, versionHistory: any): any {
  if (!versionId) return;
  return versionHistory.versions.find((v: any) => v.id === versionId); // Original: $$J1
}

/**
 * Checks for visible changes in a version.
 * @param versionId - The version ID.
 * @param dispatch - The dispatch function.
 * @returns Promise resolving to result or Error.
 */
export async function checkForVisibleChanges(versionId: string, dispatch: any): Promise<any> {
  const startTime = Date.now();
  const version = findVersionById(versionId, dispatch.getState().versionHistory);
  if (!version) {
    return {
      elapsedTime: Date.now() - startTime,
      numPagesWithChanges: 0
    };
  }
  const error = await loadDiffAndPages(version.id, dispatch);
  const elapsedTime = Date.now() - startTime;
  if (error) {
    logError('version diffing', 'error checking for visible changes', {
      error
    });
    return new Error('Error checking for visible changes');
  }
  return {
    elapsedTime,
    numPagesWithChanges: Fullscreen.getPagesWithChanges().length
  }; // Original: $$Z13
}

/**
 * Thunk to maybe show version diff notification.
 */
export const maybeShowVersionDiffNotification = createOptimistThunk(async ({
  dispatch,
  getState
}, {
  openFileKey
}: {
  openFileKey: string;
}) => {
  const state = getState();
  const clearSelection = () => dispatch(selectViewAction({
    ...state.selectedView,
    compareLatest: undefined
  }));
  const exit = () => {
    dispatch(setProgressBarState({
      mode: UIVisibilitySetting.OFF
    }));
    clearSelection();
  };
  const user = state.user;
  if (!getFeatureFlags().version_diffing || !getFeatureFlags().xr_debounce_threshold || !user || state.selectedView.view !== 'fullscreen' || state.selectedView.editorType === FEditorType.Whiteboard || state.mirror.appModel.topLevelMode === ViewType.HISTORY || state.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COMPARE_CHANGES) return exit();
  let lastViewAt: any, lastEditAt: any;
  try {
    const response = await fileApiHandler.getLastInteraction({
      openFileKey
    });
    lastViewAt = response.data.meta.last_view_at;
    lastEditAt = response.data.meta.last_edit_at;
  } catch {
    return exit();
  }
  const lastInteraction = dayjs(lastViewAt) > dayjs(lastEditAt) ? dayjs(lastViewAt) : dayjs(lastEditAt);
  if (!lastInteraction.isValid() || lastInteraction < dayjs().subtract(7, 'days')) return exit();
  const [olderVersions, recentVersions] = await Promise.all([versionHandlerInstance.getPaginatedVersions({
    fileKey: openFileKey,
    createdAtOrBefore: lastInteraction.toISOString()
  }), versionHandlerInstance.getPaginatedVersions({
    fileKey: openFileKey
  })]);
  const oldVersions = olderVersions.data.meta.versions;
  const newVersions = recentVersions.data.meta.versions;
  if (!(oldVersions.length > 0 && newVersions.length > 0)) return exit();
  const lastSeenVersion = oldVersions[0];
  const latestVersion = newVersions[0];
  if (!(dayjs(latestVersion.created_at) > dayjs(lastSeenVersion.created_at)) || latestVersion.user_id === user.id || latestVersion.participating_users_array?.includes(user.handle)) return exit();
  dispatch(enterVersionHistoryMode());
  dispatch(startCompareChanges({
    fromVersionId: lastSeenVersion.id
  })); // Original: $$Q11
});

/**
 * Thunk to track version diffing changes.
 */
export const trackVersionDiffingChanges = createOptimistThunk(async ({
  dispatch,
  getState
}, {
  openFileKey,
  versionHistory
}: {
  openFileKey: string;
  versionHistory: any;
}) => {
  const state = getState();
  const user = state.user;
  if (!getFeatureFlags().version_diffing || !user || state.selectedView.view !== 'fullscreen' || state.selectedView.editorType === FEditorType.Whiteboard || state.mirror.appModel.topLevelMode === ViewType.HISTORY || state.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COMPARE_CHANGES) return;
  const lastEdited = dayjs(versionHistory.lastEdited);
  const lastViewed = dayjs(versionHistory.lastViewed);
  const lastInteraction = lastViewed > lastEdited ? lastViewed : lastEdited;
  if (!lastInteraction.isValid() || lastInteraction < dayjs().subtract(7, 'days')) return;
  const startTime = Date.now();
  const [olderVersions, recentVersions] = await Promise.all([versionHandlerInstance.getPaginatedVersions({
    fileKey: openFileKey,
    pageSize: 1,
    createdAtOrBefore: lastInteraction.toISOString()
  }), versionHandlerInstance.getPaginatedVersions({
    fileKey: openFileKey,
    pageSize: 1
  })]);
  const oldVersions = olderVersions.data.meta.versions;
  const newVersions = recentVersions.data.meta.versions;
  if (oldVersions.length > 0 && newVersions.length > 0) {
    const lastSeenVersion = oldVersions[0];
    const latestVersion = newVersions[0];
    if (dayjs(latestVersion.created_at) > dayjs(lastSeenVersion.created_at) && latestVersion.user_id !== user.id && !latestVersion.participating_users_array?.includes(user.handle)) {
      const trackingProps = {
        fileKey: openFileKey,
        eventId: generateUUIDv4(),
        lastEdited: lastEdited.toISOString(),
        lastViewed: lastViewed.toISOString(),
        lastSeenVersion: lastSeenVersion.id,
        lastSeenCreatedAt: lastSeenVersion.created_at,
        latestVersion: latestVersion.id,
        latestCreatedAt: latestVersion.created_at
      };
      trackEventAnalytics('Version Diffing Changed Since Last View', {
        ...trackingProps,
        durationMs: Date.now() - startTime
      }, {
        forwardToDatadog: true
      });
      dispatch(showVersionDiffNotification({
        lastSeenVersionId: lastSeenVersion.id,
        trackingProps
      })); // Original: $$ee4
    }
  }
});

/**
 * Loads the active version.
 * @returns Promise resolving to void or rejecting.
 */
export function loadActiveVersion(): Promise<void> {
  const state = debugState.getState();
  const versionHistory = state.versionHistory;
  const activeVersion = getActiveVersion(versionHistory);
  const fetchedPageIds = versionHistory.fetchedPageIds || new Set();
  const currentPage = state.mirror.appModel.currentPage;
  return activeVersion && activeVersion.id !== CURRENT_VERSION_ID ? loadVersionIntoScene(activeVersion, debugState, fetchedPageIds, currentPage, zeroSessionLocalIDString) : Promise.reject('Version history inactive'); // Original: $$et15
}
let currentLoadPromise: Promise<any> | null = null; // Original: er

/**
 * Loads a version into the scene.
 * @param version - The version object.
 * @param store - The store instance.
 * @param fetchedPageIds - Set of fetched page IDs.
 * @param currentPageNodeId - Current page node ID.
 * @param nodeId - Optional node ID.
 * @param eventType - Optional event type.
 * @returns Promise resolving to void.
 */
export function loadVersionIntoScene(version: any, store: any, fetchedPageIds: Set<string>, currentPageNodeId: string, nodeId?: string, eventType?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const canvasUrl = version.canvas_url;
    if (!canvasUrl) return reject('Couldn\'t get canvas URL for version.');
    const isZeroSession = nodeId === zeroSessionLocalIDString;
    const hasFetchedPages = !isZeroSession && fetchedPageIds.size > 0;
    let targetNodeId = nodeId ?? currentPageNodeId;
    const currentPage = store.getState().mirror.appModel.currentPage;
    if (eventType === 'LOAD_NEW_VERSION' && currentPage && !nodeId) targetNodeId = currentPage;
    const needsLoad = !store.getState().mirror.appModel.pagesList.every(p => fetchedPageIds.has(p.nodeId)) && !fetchedPageIds.has(targetNodeId);
    if (!needsLoad) {
      store.dispatch(VERSION_HISTORY_PAGE_LOADING({
        isLoadingPage: false
      }));
      return resolve();
    }
    const url = `${canvasUrl}&nodes_to_extract=${targetNodeId}`;
    const selectedView = store.getState().selectedView;
    VersionHistoryAnalyticsInstance.markVersionHistoryLoadStart(selectedView.fileKey, selectedView.nodeId, eventType);
    const loadPromise = loadCanvasData(url).then(([canvas]) => {
      if (loadPromise === currentLoadPromise) {
        currentLoadPromise = null;
        const editorType = store.getState().selectedView.editorType;
        const topLevelMode = store.getState().mirror.appModel.topLevelMode;
        if (topLevelMode === ViewType.HISTORY || topLevelMode === ViewType.DEV_HANDOFF) {
          if (hasFetchedPages) {
            Fullscreen.applyFileToCurrentScene(canvas);
          } else {
            atomStoreManager.set(versionHistoryKeyAtom, '');
            if (!Fullscreen.loadFigFileForPreview(canvas)) return reject('Error loading this version into memory.');
          }
          VersionHistoryAnalyticsInstance.markVersionHistoryLoadEnd();
          const fileKey = store.getState().selectedView.fileKey;
          const editorName = editorType === FEditorType.Whiteboard ? 'figjam' : editorType === FEditorType.Design || editorType === FEditorType.Slides ? mapEditorTypeToStringWithError(editorType) : 'unknown';
          const viewType = store.getState().selectedView.devModeFocusId ? 'focus_view' : 'version_history';
          VersionHistoryAnalyticsInstance.report(fileKey, editorName, viewType);
          if (needsLoad) {
            if (isZeroSession) {
              store.getState().mirror.appModel.pagesList.forEach(p => fetchedPageIds.add(p.nodeId));
            } else {
              fetchedPageIds.add(targetNodeId);
            }
            store.dispatch(UPDATE_FETCHED_PAGE_IDS({
              fetchedPageIds
            }));
            store.dispatch(VERSION_HISTORY_PAGE_LOADING({
              isLoadingPage: false
            }));
            resolve();
          }
          if (selectedView.nodeId && selectedView.nodeId !== currentPageNodeId) replaceSelection([selectedView.nodeId]);
          if (selectedView.devModeFocusId) HandoffBindingsCpp.focusOnNode(selectedView.devModeFocusId, false);
          store.dispatch(setProgressBarState({
            mode: UIVisibilitySetting.OFF
          }));
        }
      }
    });
    currentLoadPromise = loadPromise; // Original: en
  });
}

/**
 * Thunk to show version diff notification.
 */
const showVersionDiffNotification = createOptimistThunk(async (dispatch: any, {
  lastSeenVersionId,
  trackingProps
}: {
  lastSeenVersionId: string;
  trackingProps: any;
}) => {
  let elapsedTime: number, numPagesWithChanges: number;
  try {
    const result = await checkForVisibleChanges(lastSeenVersionId, dispatch);
    elapsedTime = result.elapsedTime;
    numPagesWithChanges = result.numPagesWithChanges;
  } catch {
    return;
  }
  if (numPagesWithChanges === 0) {
    trackEventAnalytics('Version Diffing Notification Skipped', {
      ...trackingProps,
      pagesWithChanges: 0,
      durationMs: elapsedTime
    }, {
      forwardToDatadog: true
    });
    return;
  }
  trackEventAnalytics('Version Diffing Notification Shown', {
    ...trackingProps,
    pagesWithChanges: numPagesWithChanges,
    durationMs: elapsedTime
  }, {
    forwardToDatadog: true
  });
  dispatch(notificationActions.enqueueFront({
    notification: {
      type: NotificationCategory.SEE_WHATS_CHANGED,
      message: 'See what\'s changed since the last time you viewed this file',
      acceptCallback: () => {
        trackEventAnalytics('Version Diffing Notification Opened', trackingProps);
        dispatch(enterVersionHistoryMode());
        dispatch(startCompareChanges({
          fromVersionId: lastSeenVersionId
        }));
      },
      dismissCallback: () => trackEventAnalytics('Version Diffing Notification Dismissed', trackingProps)
    }
  })); // Original: ei
});

/**
 * Thunk to fetch version history.
 */
const fetchVersionHistory = createOptimistThunk((dispatch: any, {
  direction
}: {
  direction: string;
}) => {
  const state = dispatch.getState();
  const fileKey = getFileKeyFromSelectedView(state.selectedView);
  if (fileKey && !state.versionHistory.loading) {
    dispatch(VERSION_HISTORY_LOADING({
      loading: true
    }));
    fetchPaginatedData(`/api/versions/${fileKey}`, 30, state.versionHistory, direction).then(history => {
      if (fileKey === getFileKeyFromSelectedView(dispatch.getState().selectedView)) {
        dispatch(VERSION_HISTORY_APPEND({
          history,
          direction
        }));
      }
    });
  } // Original: $$ea7
});

/**
 * Thunk to reset version history.
 */
export const resetVersionHistory = createOptimistThunk(({
  dispatch
}) => {
  dispatch(VERSION_HISTORY_RESET_VERSIONS());
  dispatch(fetchVersionHistory({
    direction: PAGINATION_PREV
  })); // Original: es
});

/**
 * Thunk to enter version history mode.
 */
export const enterVersionHistoryMode = createOptimistThunk(({
  dispatch,
  getState
}, {
  source
}: {
  source?: string;
} = {}) => {
  fullscreenValue.triggerAction('enter-history-mode');
  fullscreenValue.triggerAction('deselect-all');
  dispatch(resetVersionHistory());
  if (isFullscreenSitesView(getState().selectedView)) atomStoreManager.set(sitesViewSetterAtomFamily, PanelType.FILE);
  AppStateTsApi?.uiState().showPropertiesPanel.set(true);
  trackEventAnalytics('Toggle Version History', {
    source: source || null
  }); // Original: $$eo6
});

/**
 * Thunk to exit version history mode.
 */
export const exitVersionHistoryMode = createOptimistThunk(({
  dispatch,
  getState
}) => {
  dispatch(resetCompareMode());
  dispatch(VisualBellActions.dequeue({
    matchType: 'versions'
  }));
  Fullscreen.exitVersionHistoryMode(getState().openFile?.canEdit ?? false); // Original: $$el0
});

/**
 * Thunk to reset compare mode.
 */
export const resetCompareMode = createOptimistThunk(({
  dispatch
}) => {
  dispatch(setActiveVersion({
    id: CURRENT_VERSION_ID
  }));
  dispatch(startCompareChanges({
    fromVersionId: undefined
  }));
  SceneGraphHelpers.clearSelection();
  dispatch(VisualBellActions.dequeue({
    matchType: 'comparing'
  }));
  dispatch(VisualBellActions.dequeue({
    matchType: 'view_changes'
  }));
  dispatch(setProgressBarState({
    mode: UIVisibilitySetting.OFF
  })); // Original: $$ed9
});

/**
 * Thunk to set active version.
 */
export const setActiveVersion = createOptimistThunk(async ({
  dispatch,
  getState
}, {
  id,
  versions,
  eventType,
  nodeId
}: {
  id: string;
  versions?: any[];
  eventType?: string;
  nodeId?: string;
}) => {
  if (id === CURRENT_VERSION_ID) {
    atomStoreManager.set(versionHistoryKeyAtom, '');
    Fullscreen.loadFigFileForPreview(new Uint8Array());
    const state = getState();
    dispatch(selectViewAction({
      ...state.selectedView,
      versionId: undefined,
      compareVersionId: undefined
    }));
    dispatch(VERSION_HISTORY_SET_ACTIVE({
      id
    }));
    return;
  }
  dispatch(VERSION_HISTORY_SET_ACTIVE({
    id
  }));
  const state = getState();
  const version = versions ? versions.find(v => v.id === id) : getActiveVersion(state.versionHistory);
  if (!version) return;
  dispatch(selectViewAction({
    ...state.selectedView,
    compareVersionId: undefined
  }));
  const currentPage = state.mirror.appModel.currentPage;
  const isDevMode = !!state.selectedView.devModeFocusId;
  try {
    await loadVersionIntoScene(version, dispatch, new Set(), currentPage, nodeId, eventType);
  } catch (error) {
    if (isDevMode) {
      const message = `[${eventType}] Failed load version for preview in focus view: ${error}`;
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`[LOAD_VERSION_FOR_PREVIEW] ${message}`));
    }
    dispatch(FlashActions.error(error as string));
  } // Original: $$ec3
});

/**
 * Thunk to load version incrementally.
 */
export const loadVersionIncrementally = createOptimistThunk(({
  dispatch
}, {
  version,
  currentPageNodeId,
  fetchedPageIds,
  eventType
}: {
  version: any;
  currentPageNodeId: string;
  fetchedPageIds: Set<string>;
  eventType: string;
}) => {
  loadVersionIntoScene(version, dispatch, fetchedPageIds, currentPageNodeId, undefined, eventType).then(() => {
    dispatch(VERSION_HISTORY_SET_LINKED_VERSION({
      version
    }));
  }).catch(error => {
    const message = `[${eventType}] Failed load fig file for preview: ${error}`;
    reportError(_$$e.SCENEGRAPH_AND_SYNC, new Error(`[VERSION_HISTORY_INCREMENTAL_LOAD] ${message}`));
    dispatch(FlashActions.error(error as string));
  }); // Original: $$eu19
});

/**
 * Thunk to start compare changes.
 */
export const startCompareChanges = createOptimistThunk(async ({
  dispatch,
  getState
}, {
  fromVersionId
}: {
  fromVersionId?: string;
}) => {
  if (!getFeatureFlags().version_diffing) {
    dispatch(VERSION_HISTORY_COMPARE_CHANGES({
      fromVersionId
    }));
    return;
  }
  if (!fromVersionId) return;
  const version = findVersionById(fromVersionId, getState().versionHistory);
  if (!version) return;
  const startTime = new Date().getTime();
  const error = await loadDiffAndPages(version.id, dispatch);
  if (error) {
    dispatch(FlashActions.error(error));
    return;
  }
  const endTime = new Date().getTime();
  const editorType = getState().selectedView.editorType;
  const source = CompareViewType[CompareViewType.COMPARE_CHANGES];
  trackEventAnalytics('versioning_performance_metrics', {
    name: 'load_diff',
    durationMs: endTime - startTime,
    fromCheckpointKey: version.checkpoint_key,
    nodesToDiff: 'all',
    editorType,
    source
  }, {
    forwardToDatadog: true
  });
  if (version.canvas_url) {
    const changes = Fullscreen.getChangesToCompareFromHistoryChangesState();
    if (changes.size > 0) {
      const nodes = Array.from(changes).join(',');
      const url = `${version.canvas_url}&nodes_to_extract=${nodes}`;
      loadCanvasData(url).then(([canvas]) => Fullscreen.loadPartialHistoryScene(canvas));
    }
  }
  const compareError = Fullscreen.startComparingChanges() ? '' : 'Error starting history compare';
  if (compareError) {
    dispatch(FlashActions.error(compareError));
    return;
  }
  const state = getState();
  dispatch(selectViewAction({
    ...state.selectedView,
    compareVersionId: fromVersionId,
    compareLatest: undefined
  }));
  trackEventAnalytics('Version History Compare Start', {
    fromVersionId
  });
  dispatch(VERSION_HISTORY_COMPARE_CHANGES({
    fromVersionId
  })); // Original: $$ep16
});

// Exports with meaningful names
export const Eg = exitVersionHistoryMode; // Original export: Eg = $$el0
export const HF = findVersionById; // Original export: HF = $$J1
export const Ht = canvasCache; // Original export: Ht = $$G2
export const Nb = setActiveVersion; // Original export: Nb = $$ec3
export const Ul = trackVersionDiffingChanges; // Original export: Ul = $$ee4
export const V_ = CURRENT_VERSION_ID; // Original export: V_ = $$B5
export const _b = enterVersionHistoryMode; // Original export: _b = $$eo6
export const _h = fetchVersionHistory; // Original export: _h = $$ea7
export const _t = loadCanvasForVersion; // Original export: _t = $$W8
export const cU = resetCompareMode; // Original export: cU = $$ed9
export const cn = generateCanvasKey; // Original export: cn = $$z10
export const hZ = maybeShowVersionDiffNotification; // Original export: hZ = $$Q11
export const kT = fileVersionsQuery; // Original export: kT = $$H12
export const ke = checkForVisibleChanges; // Original export: ke = $$Z13
export const tP = versionHistoryKeyAtom; // Original export: tP = $$V14
export const un = loadActiveVersion; // Original export: un = $$et15
export const vF = startCompareChanges; // Original export: vF = $$ep16
export const vw = getActiveVersion; // Original export: vw = $$X17
export const w_ = invalidateCanvasCache; // Original export: w_ = $$K18
export const yH = loadVersionIncrementally; // Original export: yH = $$eu19