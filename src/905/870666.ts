import type { FFileType } from '../figma_app/191312';
import { noop } from 'lodash-es';
import { storeAnonymousUserData } from '../905/32091';
import { combineWithHyphen, ShareContext } from '../905/91820';
import { setLastVisitedPlan } from '../905/93909';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { mapViewTypeToMainfestEditorType, parsePluginParams } from '../905/327571';
import { panelTypeToString, stringToPanelType } from '../905/366346';
import { debugState } from '../905/407919';
import { isAppShellEnabled } from '../905/561581';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { parseAndNormalizeQuery, parseQuery, serializeQuery } from '../905/634134';
import { fileKeyAtom } from '../905/662353';
import { replaceColonWithDash } from '../905/691205';
import { getSingletonSceneGraph } from '../905/700578';
import { buildUrlPath, getDisplayName, getRepoById } from '../905/760074';
import { OrganizationType } from '../905/833838';
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411';
import { atomStoreManager } from '../figma_app/27355';
import { FEditorType, mapFileTypeToEditorType } from '../figma_app/53721';
import { SceneGraphUnavailableError } from '../figma_app/518682';
import { INTERACTION_FAKE_FILE_KEY } from '../figma_app/617727';
import { AppView } from '../figma_app/707808';
import { CorePerfInfo, ViewType } from '../figma_app/763686';
import { BrowserInfo } from '../figma_app/778880';
import { desktopAPIInstance } from '../figma_app/876459';
import { isEvalViewPathCheck } from '../figma_app/897289';
import { encodeUri } from '../figma_app/930338';

/**
 * Checks if the view is fullscreen and editor type is Whiteboard.
 * Original: $$O0
 * @param viewObj - The view object to check.
 * @returns True if fullscreen whiteboard, false otherwise.
 */
export function isFullscreenWhiteboard(viewObj: {
  view: string;
  editorType: FEditorType;
}) {
  return viewObj.view === 'fullscreen' && viewObj.editorType === FEditorType.Whiteboard;
}

/**
 * Types for selected view and related params.
 */
export interface SelectedViewParams {
  view: string;
  editorType: FEditorType;
  fileKey?: string;
  showCommentPreferencesPicker?: boolean;
  commentThreadId?: string;
  showInspectPanel?: boolean;
  nodeId?: string;
  codeNodeId?: string;
  sitesView?: any;
  fallbackStateGroupId?: string;
  versionId?: string;
  compareVersionId?: string;
  compareLatest?: boolean;
  framePresetName?: string;
  mergeParams?: any;
  reviewNumber?: number;
  openReview?: boolean;
  cmsItemId?: string;
  preloaded?: boolean;
  viewport?: string;
  landingState?: string;
  tryPluginId?: string;
  tryPluginVersionId?: string;
  tryPluginName?: string;
  tryPluginEditorType?: any;
  tryPluginParams?: any;
  isWidget?: boolean;
  isPlaygroundFile?: boolean;
  tryPluginFileKey?: string;
  libraryHubFileId?: string;
  commentsEnabled?: boolean;
  trackingInfo?: any;
  mainComponentLink?: boolean;
  teamToMoveFileToOnNavigate?: string;
  isFreemiumPreview?: boolean;
  showPermissionsModalFromGoogleClassroomIntegration?: boolean;
  mode?: string;
  isRecoveryMode?: boolean;
  prevSelectedView?: any;
  workshopUserNames?: Record<string, string>;
  claim?: string;
  figmakeView?: AppView;
  newFile?: boolean;
}

/**
 * Handles view path and resource mapping logic.
 * Original: $$D1
 */
export class SelectedViewPathManager {
  /**
   * Maps path segments and query to a selected view object.
   * Original: pathToSelectedView
   */
  pathToSelectedView(mirror: any, pathSegments: string[], queryStr?: string, hash?: string): SelectedViewParams | null {
    const query = queryStr ? parseAndNormalizeQuery(queryStr) : {};
    const hashValue = hash ? hash.slice(1) : '';
    const mainType = pathSegments[1];

    // Main editor types
    if (['file', 'design', 'board', 'slides', 'site', 'buzz', 'rev', 'make'].includes(mainType)) {
      let fileType = 'design' as any;
      if (mainType === 'file' && query.type) {
        fileType = query.type;
      } else if (mainType !== 'file') {
        switch (mainType) {
          case 'design':
            fileType = 'design';
            break;
          case 'board':
            fileType = 'whiteboard';
            break;
          case 'slides':
            fileType = 'slides';
            break;
          case 'site':
            fileType = 'sites';
            break;
          case 'buzz':
            fileType = 'cooper';
            break;
          case 'make':
          case 'rev':
            fileType = 'figmake';
            break;
        }
      }
      const viewObj: SelectedViewParams = {
        view: 'fullscreen',
        editorType: mapFileTypeToEditorType(fileType)
      };
      // File key assignment
      if (pathSegments[3] === 'branch' && pathSegments[4]) {
        viewObj.fileKey = pathSegments[4];
      } else if (pathSegments[2] !== 'new') {
        viewObj.fileKey = pathSegments[2];
      }
      // Hash and query params
      if (hashValue) {
        if (hashValue === 'commentPreferences') {
          viewObj.showCommentPreferencesPicker = true;
        } else {
          viewObj.commentThreadId = hashValue;
        }
      }
      if (query['properties-panel-tab'] === 'code') {
        viewObj.showInspectPanel = true;
      }
      if (query['node-id']) {
        viewObj.nodeId = query['node-id'];
      }
      if (query['code-node-id'] && (getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan)) {
        viewObj.codeNodeId = query['code-node-id'].replace('-', ':');
      }
      if (query.view) {
        viewObj.sitesView = stringToPanelType(query.view);
      }
      if (query['state-group-id']) {
        viewObj.fallbackStateGroupId = query['state-group-id'];
      }
      if (query['version-id']) {
        viewObj.versionId = query['version-id'];
      }
      if (query['compare-version-id'] && !query['version-id']) {
        viewObj.compareVersionId = query['compare-version-id'];
      }
      if (query['compare-latest']) {
        viewObj.compareLatest = true;
      }
      if (query['frame-preset-name']) {
        viewObj.framePresetName = query['frame-preset-name'];
      }
      // Merge params
      if (query['merge-branch-key'] && query['merge-source-key'] && query['merge-direction']) {
        viewObj.mergeParams = {
          branchKey: query['merge-branch-key'],
          sourceKey: query['merge-source-key'],
          direction: query['merge-direction']
        };
        if (query['merge-back-key']) {
          viewObj.mergeParams.backFileKey = query['merge-back-key'];
        }
        if (query['checkpoint-diff-url']) {
          viewObj.mergeParams.mergeOnFileOpen = true;
          viewObj.mergeParams.checkpointDiffURL = query['checkpoint-diff-url'];
        }
        if (query['merge-to-checkpoint-key']) {
          viewObj.mergeParams.toCheckpointKey = query['merge-to-checkpoint-key'];
        }
        if (query['merge-from-checkpoint-key']) {
          viewObj.mergeParams.fromCheckpointKey = query['merge-from-checkpoint-key'];
        }
      }
      // Review number
      if (query['review-number']) {
        const reviewNum = parseInt(query['review-number']);
        if (!isNaN(reviewNum)) {
          viewObj.reviewNumber = reviewNum;
        }
      }
      if (query['open-review']) {
        viewObj.openReview = true;
      }
      if (getFeatureFlags().dakota && query['cms-item-id']) {
        viewObj.cmsItemId = query['cms-item-id'];
      }
      if (query.$$new) {
        viewObj.preloaded = true;
      }
      if (query.viewport) {
        const vp = query.viewport.split(',');
        if (vp.length === 3 && !isNaN(+vp[0]) && !isNaN(+vp[1]) && !isNaN(+vp[2])) {
          viewObj.viewport = query.viewport;
        }
      }
      if (pathSegments[4] === 'duplicate' || query.duplicate) {
        viewObj.landingState = 'DUPLICATE';
      }
      if (query['try-plugin-id']) {
        viewObj.tryPluginId = query['try-plugin-id'];
      }
      if (query['try-plugin-version-id']) {
        viewObj.tryPluginVersionId = query['try-plugin-version-id'];
      }
      if (query['try-plugin-name']) {
        viewObj.tryPluginName = query['try-plugin-name'];
      }
      if (query['try-plugin-editor-type']) {
        viewObj.tryPluginEditorType = mapViewTypeToMainfestEditorType(query['try-plugin-editor-type']);
      }
      if (query['try-plugin-params']) {
        viewObj.tryPluginParams = parsePluginParams(query);
      }
      if (query['is-widget'] === '1') {
        viewObj.isWidget = true;
      }
      if (query['is-playground-file'] === '1') {
        viewObj.isPlaygroundFile = true;
      }
      if (query['try-plugin-file-key']) {
        viewObj.tryPluginFileKey = query['try-plugin-file-key'];
      }
      if (query['library-hub-file-id']) {
        viewObj.libraryHubFileId = query['library-hub-file-id'];
      }
      if (query['comments-enabled'] === '1') {
        viewObj.commentsEnabled = true;
      }
      if (query.source) {
        viewObj.trackingInfo = {
          source: query.source
        };
      }
      if (query['main-component'] === '1') {
        viewObj.mainComponentLink = true;
      }
      if (query.teamToMoveFileToOnNavigate) {
        viewObj.teamToMoveFileToOnNavigate = query.teamToMoveFileToOnNavigate;
      }
      if (query['is-freemium-preview'] === '1') {
        viewObj.isFreemiumPreview = true;
      }
      if (query['google-classroom-open-share-settings']) {
        viewObj.showPermissionsModalFromGoogleClassroomIntegration = true;
      }
      if (mainType === 'design' || query.mode === 'design' || query.mode === 'view') {
        viewObj.mode = 'design';
      }
      if (query.m === 'auto') {
        viewObj.mode = undefined;
      }
      // Recovery mode
      if (query.recovery && fileType === 'design' && BrowserInfo.isWasm4gbSupported && mirror.appModel.topLevelMode === ViewType.LAYOUT) {
        if ((CorePerfInfo?.getTotalUsedHeapMemory() ?? 0) > 2 * 0x40000000 || query.recovery === 'true') {
          viewObj.isRecoveryMode = true;
          console.log('Entering Recovery Mode');
        } else {
          viewObj.isRecoveryMode = false;
        }
      }
      // Last visited plan
      if (query['prev-plan-id'] && query['prev-plan-type']) {
        const planType = query['prev-plan-type'] === 'org' ? OrganizationType.ORG : OrganizationType.TEAM;
        debugState.dispatch(setLastVisitedPlan({
          planId: query['prev-plan-id'],
          planType
        }));
      }
      // Previous selected view
      if (query['prev-selected-view']) {
        if (query['prev-selected-view'] === 'recentsAndSharing') {
          viewObj.prevSelectedView = {
            view: 'recentsAndSharing',
            tab: query['prev-tab']
          };
        } else if (query['prev-selected-view'] === 'folder' && query['prev-folder-id']) {
          viewObj.prevSelectedView = {
            view: 'folder',
            folderId: query['prev-folder-id']
          };
        }
      }
      // Workshop user names
      if (query.workshop_id && query.workshop_username && query.workshop_username.trim().length > 0) {
        viewObj.workshopUserNames = {
          [query.workshop_id]: query.workshop_username
        };
        storeAnonymousUserData(query.workshop_id, query.workshop_username);
      }
      if (query.claim) {
        viewObj.claim = query.claim;
      }
      if (query['google-classroom']) {
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('whiteboard.google_classroom.addon.submission_reminder'),
          timeoutOverride: Infinity,
          onDismiss: noop
        }));
      }
      if (query.fullscreen) {
        viewObj.figmakeView = AppView.FULLSCREEN_PREVIEW;
      }
      return viewObj;
    }

    // Jam view
    if (pathSegments[1] === 'jam') {
      const jamView: SelectedViewParams = {
        view: 'fullscreen',
        editorType: FEditorType.Whiteboard
      };
      if (query['try-plugin-id']) {
        jamView.tryPluginId = query['try-plugin-id'];
      }
      if (query['try-plugin-version-id']) {
        jamView.tryPluginVersionId = query['try-plugin-version-id'];
      }
      if (query['try-plugin-name']) {
        jamView.tryPluginName = query['try-plugin-name'];
      }
      if (query['is-widget'] === '1') {
        jamView.isWidget = true;
      }
      if (query['is-playground-file'] === '1') {
        jamView.isPlaygroundFile = true;
      }
      return jamView;
    }

    // Test interactions/eval
    if (pathSegments[1] === 'test' && (pathSegments[2] === 'interactions' || pathSegments[2] === 'eval')) {
      const testQuery = queryStr ? parseQuery(queryStr) : {};
      const testView: SelectedViewParams = {
        view: 'fullscreen',
        fileKey: INTERACTION_FAKE_FILE_KEY,
        editorType: FEditorType.Design
      };
      if (testQuery['node-id']) {
        testView.nodeId = testQuery['node-id'];
      }
      return testView;
    }
    return null;
  }

  /**
   * Determines if a history change is required between two views.
   * Original: requireHistoryChange
   */
  requireHistoryChange(prev: SelectedViewParams, next: SelectedViewParams): boolean {
    return prev.view === 'fullscreen' !== (next.view === 'fullscreen') || prev.view === 'fullscreen' && next.view === 'fullscreen' && prev.fileKey !== next.fileKey;
  }

  /**
   * Gets default resources for a selected view.
   * Original: DEPRECATED_getDefaultResources
   */
  DEPRECATED_getDefaultResources(view: SelectedViewParams) {
    const {
      fileByKey,
      repos
    } = debugState.getState();
    const file = view.fileKey && fileByKey ? fileByKey[view.fileKey] : undefined;
    return {
      file,
      repo: file ? getRepoById(file, repos) : undefined
    };
  }

  /**
   * Converts a selected view to a path string.
   * Original: selectedViewToPath
   */
  selectedViewToPath(view: SelectedViewParams, context: {
    resources?: any;
    sharingAttributionContextKey?: string;
  }): string | null {
    if (view.view === 'fullscreen') {
      let path: string;
      if (view.fileKey === INTERACTION_FAKE_FILE_KEY) {
        return isEvalViewPathCheck() ? `/test/eval/view${customHistory.location.search}` : `/test/interactions${customHistory.location.search}`;
      }
      const name = this.selectedViewName(view, context);
      const encodedName = name ? encodeUri(name) : '';
      const queryParams: Record<string, any> = {};
      const fileKey = view.fileKey || 'new';
      let editorTypeStr = 'design';
      switch (view.editorType) {
        case FEditorType.Whiteboard:
          editorTypeStr = 'board';
          break;
        case FEditorType.Slides:
          editorTypeStr = 'slides';
          break;
        case FEditorType.Sites:
          editorTypeStr = 'site';
          break;
        case FEditorType.Cooper:
          editorTypeStr = 'buzz';
          break;
        case FEditorType.Figmake:
          editorTypeStr = 'make';
          break;
        default:
          editorTypeStr = 'design';
      }
      const {
        file,
        repo
      } = context.resources || this.DEPRECATED_getDefaultResources(view);
      if (file) {
        path = buildUrlPath(file, repo || null, editorTypeStr);
      } else {
        path = `/${editorTypeStr}/${fileKey}`;
        if (view.fileKey == null) {
          path += encodedName ? `/${encodedName}` : '/Untitled';
        }
      }
      if (view.landingState === 'DUPLICATE') {
        path += '/duplicate';
      }
      if (editorTypeStr === 'design' && view.mode === 'auto') {
        queryParams.m = 'auto';
      }
      if (view.versionId) {
        queryParams['version-id'] = view.versionId;
      }
      if (view.compareVersionId) {
        queryParams['compare-version-id'] = view.compareVersionId;
      }
      if (view.compareLatest) {
        queryParams['compare-latest'] = '1';
      }
      if (view.newFile) {
        queryParams.$$new = '1';
      }
      if (view.nodeId && isValidSessionLocalID(parseSessionLocalID(view.nodeId))) {
        queryParams['node-id'] = replaceColonWithDash(view.nodeId);
      }
      if (view.codeNodeId && isValidSessionLocalID(parseSessionLocalID(view.codeNodeId))) {
        queryParams['code-node-id'] = replaceColonWithDash(view.codeNodeId);
      }
      if (view.editorType === FEditorType.Sites && view.sitesView) {
        queryParams.view = panelTypeToString(view.sitesView);
      }
      if (view.nodeId && isValidSessionLocalID(parseSessionLocalID(view.nodeId))) {
        try {
          const nodeType = getSingletonSceneGraph().get(view.nodeId)?.type;
          if (nodeType && ['CANVAS', 'DOCUMENT'].includes(nodeType || '')) {
            queryParams.p = 'f';
          }
        } catch (err) {
          if (!(err instanceof SceneGraphUnavailableError)) throw err;
        }
      }
      if (view.isRecoveryMode) {
        queryParams.recovery = view.isRecoveryMode;
      }
      if (view.viewport) {
        queryParams.viewport = view.viewport;
      }
      if (view.framePresetName) {
        queryParams['frame-preset-name'] = view.framePresetName;
      }
      if (view.reviewNumber) {
        queryParams['review-number'] = view.reviewNumber;
      }
      if (view.mergeParams) {
        queryParams['merge-branch-key'] = view.mergeParams.branchKey;
        queryParams['merge-source-key'] = view.mergeParams.sourceKey;
        queryParams['merge-direction'] = view.mergeParams.direction;
        if (view.mergeParams.toCheckpointKey) {
          queryParams['merge-to-checkpoint-key'] = view.mergeParams.toCheckpointKey;
        }
        if (view.mergeParams.fromCheckpointKey) {
          queryParams['merge-from-checkpoint-key'] = view.mergeParams.fromCheckpointKey;
        }
        if (view.mergeParams.backFileKey) {
          queryParams['merge-back-key'] = view.mergeParams.backFileKey;
        }
        if (view.mergeParams.mergeOnFileOpen) {
          queryParams['merge-on-file-open'] = view.mergeParams.mergeOnFileOpen;
        }
        if (view.mergeParams.checkpointDiffURL) {
          queryParams['checkpoint-diff-url'] = view.mergeParams.checkpointDiffURL;
        }
      }
      if (view.teamToMoveFileToOnNavigate) {
        queryParams.teamToMoveFileToOnNavigate = view.teamToMoveFileToOnNavigate;
      }
      if (getFeatureFlags().dakota && view.cmsItemId) {
        queryParams['cms-item-id'] = view.cmsItemId;
      }
      const attributionKey = combineWithHyphen(context.sharingAttributionContextKey, ShareContext.BROWSER_ADDRESS_BAR);
      if (attributionKey) {
        queryParams.t = attributionKey;
      }
      if (view.figmakeView === AppView.FULLSCREEN_PREVIEW) {
        queryParams.fullscreen = '1';
      }
      if (desktopAPIInstance) {
        const localFileKey = atomStoreManager.get(fileKeyAtom);
        if (localFileKey != null) {
          queryParams.localFileKey = localFileKey;
        }
      }
      if (isAppShellEnabled()) {
        queryParams._app_shell = '1';
      }
      if (Object.keys(queryParams).length > 0) {
        path += `?${serializeQuery(queryParams)}`;
      }
      if (view.commentThreadId) {
        path += `#${view.commentThreadId}`;
      }
      if (window.EARLY_ARGS?.multiplayer_preconnect_options?.forceIncrementalForEditors !== undefined) {
        path += `&force-incremental=${window.EARLY_ARGS?.multiplayer_preconnect_options?.forceIncrementalForEditors}`;
      }
      return path;
    }
    return null;
  }

  /**
   * Helper to get display name for selected view.
   * Original: selectedViewNameHelper
   */
  selectedViewNameHelper(file: any, repo: any): string {
    return `${repo ? getDisplayName(file, repo) : file.name}`;
  }

  /**
   * Gets the display name for a selected view.
   * Original: selectedViewName
   */
  selectedViewName(view: SelectedViewParams, context: {
    resources?: any;
  }): string {
    if (view.view === 'fullscreen') {
      let name: string | null = null;
      if (view.fileKey) {
        const {
          file,
          repo
        } = context.resources || this.DEPRECATED_getDefaultResources(view);
        if (file) {
          name = this.selectedViewNameHelper(file, repo || null);
        }
      }
      if (view.tryPluginName && !view.tryPluginFileKey) {
        name = view.tryPluginName;
      }
      return name ?? getI18nString('fullscreen.fullscreen_view_selector.untitled');
    }
    return null;
  }

  /**
   * Checks if selected view is missing resources.
   * Original: selectedViewHasMissingResources
   */
  selectedViewHasMissingResources(state: {
    fileByKey: Record<string, any>;
  }, view: SelectedViewParams): boolean {
    return view.view === 'fullscreen' && !!view.fileKey && !(view.fileKey in state.fileByKey);
  }
}

// Exported names refactored for clarity
export const C = isFullscreenWhiteboard;
export const a = SelectedViewPathManager;