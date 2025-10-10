import type { ActionCreator } from "redux";
import type { ThunkAction } from "redux-thunk";
import { createActionCreator } from "../905/73481";
import { permissionScopeHandler } from "../905/189185";
import { resolveMessage } from "../905/231762";
import { showBranchMergeModalThunk, fetchSourceFileInfoThunk } from "../905/292918";
import { handleMergeOnFileOpen } from "../905/300250";
import { getI18nString } from "../905/303541";
import { createNewFramePreset } from "../905/327855";
import { createOptimistThunk } from "../905/350402";
import { openResiger } from "../905/438683";
import { tryPluginInFullscreen } from "../905/489647";
import { SourceDirection } from "../905/535806";
import { FlashActions } from "../905/573154";
import { isBranchAlt } from "../905/760074";
import { selectViewAction } from "../905/929976";
import { versionHandlerInstance } from "../905/985740";
import { setProgressBarState } from "../figma_app/91703";
import { setFileInfo } from "../figma_app/682945";
import { UIVisibilitySetting } from "../figma_app/763686";

// Refactored code: Improved readability, added types, simplified logic, and preserved functionality.
// Origin: FULLSCREEN_DOCUMENT_LOADED thunk logic

import { enterVersionHistoryMode, loadVersionIncrementally, startCompareChanges } from "../figma_app/841351";
import { updateLocalLibraryItemsThunk } from "../figma_app/864378";
import { desktopAPIInstance } from "../figma_app/876459";

// Action creator for fullscreen document loaded
export const fullscreenDocumentLoadedAction = createActionCreator("FULLSCREEN_DOCUMENT_LOADED");

// Thunk to handle fullscreen document loading logic
export const handleFullscreenDocumentLoaded = createOptimistThunk(({
  dispatch,
  getState
}) => {
  const state = getState();
  const {
    selectedView
  } = state;
  const {
    openFile
  } = state;

  // Handle desktop API loading state
  if (desktopAPIInstance) {
    const viewState = state.selectedView;
    if (!desktopAPIInstance.isFileBrowserTab() && (viewState.view !== "fullscreen" || viewState.fileKey)) {
      desktopAPIInstance.setLoading(false);
    }
  }

  // Set file info if openFile exists
  if (openFile) {
    setFileInfo(openFile.key, selectedView.editorType);
  }

  // Handle version history loading
  if (selectedView.fileKey && selectedView.versionId) {
    versionHandlerInstance.getVersion({
      fileKey: selectedView.fileKey,
      versionId: selectedView.versionId
    }).then(response => {
      dispatch(enterVersionHistoryMode());
      dispatch(loadVersionIncrementally({
        version: response.data.meta.version,
        fetchedPageIds: new Set(),
        currentPageNodeId: state.mirror.appModel.currentPage,
        eventType: "LOAD_NEW_VERSION"
      }));
    }).catch(error => {
      dispatch(enterVersionHistoryMode());
      const errorMessage = error.data?.reason === "missing_authentication" ? getI18nString("collaboration.feedback.version_history_authentication_error") : getI18nString("collaboration.feedback.version_history_error");
      dispatch(FlashActions.error(resolveMessage(error, errorMessage)));
      dispatch(setProgressBarState({
        mode: UIVisibilitySetting.OFF
      }));
    });
  }

  // Handle version comparison
  if (selectedView.fileKey && selectedView.compareVersionId) {
    dispatch(enterVersionHistoryMode());
    dispatch(startCompareChanges({
      fromVersionId: selectedView.compareVersionId
    }));
  }

  // Open comment preferences picker if needed
  if (selectedView.fileKey && selectedView.showCommentPreferencesPicker) {
    openResiger();
  }

  // Handle frame preset creation
  if (selectedView.framePresetName) {
    const presetName = selectedView.framePresetName;
    dispatch(selectViewAction({
      ...selectedView,
      framePresetName: undefined
    }));
    createNewFramePreset(presetName);
  }

  // Handle branch redirection
  if (state.user && openFile && isBranchAlt(openFile) && (dispatch(fetchSourceFileInfoThunk({
    branchFileKey: openFile.key
  })), selectedView.reviewNumber || !isNaN(selectedView.reviewNumber) || selectedView.openReview)) {
    const branchParams = {
      branchKey: openFile.key,
      sourceKey: openFile.sourceFileKey,
      direction: SourceDirection.TO_SOURCE
    };
    dispatch(showBranchMergeModalThunk(branchParams));
  }

  // Handle merge parameters
  if (selectedView.mergeParams) {
    dispatch(selectViewAction({
      ...selectedView,
      mergeParams: undefined,
      framePresetName: undefined
    }));
    if (selectedView.mergeParams.mergeOnFileOpen) {
      if (!openFile) return;
      dispatch(handleMergeOnFileOpen({
        mergeParams: selectedView.mergeParams,
        editingFile: {
          key: openFile.key,
          file_repo_id: openFile.fileRepoId
        },
        migrationVersion: state.fileVersion,
        user: state.user,
        branchModalTrackingId: selectedView.mergeParams.branchModalTrackingId
      }));
      dispatch(updateLocalLibraryItemsThunk());
    } else {
      dispatch(showBranchMergeModalThunk(selectedView.mergeParams));
    }
  }

  // Handle plugin loading in fullscreen
  const {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    editorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams
  } = selectedView;
  if (state.user && tryPluginId && tryPluginName && tryPluginVersionId && fileKey && editorType) {
    permissionScopeHandler.user("try-plugin", () => {
      dispatch(tryPluginInFullscreen({
        tryPluginId,
        tryPluginName,
        tryPluginVersionId,
        isWidget: !!isWidget,
        fullscreenEditorType: editorType,
        isPlaygroundFile: !!isPlaygroundFile,
        fileKey,
        tryPluginParams
      }));
    });
  }

  // Dispatch final action
  dispatch(fullscreenDocumentLoadedAction());
});
export const X = handleFullscreenDocumentLoaded;
export const o = fullscreenDocumentLoadedAction;