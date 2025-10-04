import { AutosaveNewFileAlreadyOpenModal } from "../1a115cee/344566";
import { consumptionPaywallUtils } from "../905/224";
import { createFileConfig } from "../905/18613";
import { isAutosaveLockAvailable } from "../905/58217";
import { createActionCreator } from "../905/73481";
import { registerModal } from "../905/102752";
import { showModalHandler } from "../905/156213";
import { UpsellModalType } from "../905/165519";
import { getElapsedTime, resetTimer } from "../905/293182";
import { initiateNewFileCreation, transformNewFileParamsToApiParams, createNewFileViaDesktopAPI } from "../905/327855";
import { createOptimistThunk } from "../905/350402";
import { isBakeStarterPaywallEnabledWithoutLimit } from "../905/442612";
import { trackEventAnalytics } from "../905/449184";
import { compareValues } from "../905/508367";
import { A as _$$A } from "../905/560427";
import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { serializeQuery } from "../905/634134";
import { FeatureFlag, PageFolderFile } from "../905/652992";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { getNewFileConfig } from "../905/766303";
import { NONE_SYMBOL } from "../905/992467";
import { t as _$$t } from "../figma_app/32680";
import { i as _$$i } from "../figma_app/43065";
import { setAutosaveStatus } from "../figma_app/139113";
import { FFileType, FPlanLimitationType } from "../figma_app/191312";
import { fullscreenValue } from "../figma_app/455680";
import { isIntegrationContext } from "../figma_app/469876";
import { AddOperationType, checkTeamFileRestrictions } from "../figma_app/598018";
import { fileActionEnum } from "../figma_app/630077";
import { UIVisibilitySetting } from "../figma_app/763686";
import { M as _$$M2 } from "../figma_app/854365";
import { desktopAPIInstance } from "../figma_app/876459";
import { FileBrowserLocation, TabOpenBehavior } from "../figma_app/915202";

// Create lazy component for the autosave modal
const AutosaveNewFileAlreadyOpenModalComponent = _$$A.createLazyComponent(() => AutosaveNewFileAlreadyOpenModal, {
  loading: () => null,
  error: NONE_SYMBOL.NONE,
  componentName: "AutosaveNewFileAlreadyOpenModal"
});

// Register the modal and store its identifier
const autosaveModalId = registerModal(AutosaveNewFileAlreadyOpenModalComponent);

/**
 * Thunk for creating a new file with proper team restrictions checking
 * @param dispatch - Redux dispatch function
 * @param params - File creation parameters
 */
export const createNewFileWithRestrictions = createOptimistThunk(async ({
  dispatch
}, params: {
  state: any;
  from: string;
  editorType: FFileType;
  triggerElement: string;
  team: any;
  openNewFileIn: TabOpenBehavior;
  fileName: string;
  folderId: string | null;
  isDraftsFolder: boolean;
  callback: ((result?: any) => void) | null;
  presetName: string | null;
  figjamAiNewFileData: any;
  slidesAiNewFileData: any;
  figjamMakeSomethingUseCase: any;
  newFileDataLocalStorageKey: string | null;
  figmakeInitialMessage: any;
}) => {
  const {
    state,
    from,
    editorType,
    triggerElement,
    team,
    openNewFileIn,
    fileName,
    folderId,
    isDraftsFolder,
    callback,
    presetName,
    figjamAiNewFileData,
    slidesAiNewFileData,
    figjamMakeSomethingUseCase,
    newFileDataLocalStorageKey,
    figmakeInitialMessage
  } = params;

  // Check team file restrictions
  if (team && !checkTeamFileRestrictions(team, {
    type: AddOperationType.ADD_FILE,
    editorType,
    isDestinationTeamDrafts: !!isDraftsFolder
  })) {
    // Handle different restriction cases
    if (team.restrictions_list?.includes(FPlanLimitationType.LOCKED)) {
      dispatch(showModalHandler({
        type: _$$t,
        data: {
          teamId: team.id,
          canEditTeam: undefined
        }
      }));
    } else if (editorType === FFileType.FIGMAKE && isBakeStarterPaywallEnabledWithoutLimit()) {
      dispatch(showModalHandler({
        type: _$$i,
        data: {
          team
        }
      }));
    } else if (editorType === FFileType.SITES && _$$M2 && !getFeatureFlags().sts_starter_enabled) {
      dispatch(showModalHandler({
        type: _$$M2,
        data: {
          team
        }
      }));
    } else {
      dispatch(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team,
          resource: editorType !== FFileType.FIGMAKE || getFeatureFlags().bake_starter_limit ? PageFolderFile.FILE : FeatureFlag.FIGMAKE,
          action: fileActionEnum.CREATE_FILE,
          editorType,
          currentPlan: consumptionPaywallUtils.Plan.STARTER,
          upsellPlan: consumptionPaywallUtils.Plan.PRO,
          upsellSource: UpsellModalType.CREATE_NEW_FILE
        }
      }));
    }
    callback?.(null);
    return;
  }

  // Determine folder configuration
  const folderConfig = folderId ? {
    folderId
  } : from !== FileBrowserLocation.FILE_BROWSER_SIDEBAR_DRAFTS && team ? null : "drafts";

  // Generate file configuration
  const fileConfig = getNewFileConfig({
    state,
    openNewFileIn,
    folderOverride: folderConfig,
    trackingInfo: {
      from,
      triggerElement,
      selectedView: state.selectedView
    },
    editorType,
    fileName,
    callback,
    figjamAiNewFileData,
    slidesAiNewFileData,
    figjamMakeSomethingUseCase,
    newFileDataLocalStorageKey,
    figmakeInitialMessage
  });

  // Apply preset name if provided
  if (presetName) {
    fileConfig.framePresetName = presetName;
  }

  // Dispatch the file creation
  dispatch(createAndOpenFile(fileConfig));
});

/**
 * Thunk for creating and opening a file
 * @param dispatch - Redux dispatch function
 * @param fileConfig - Configuration for the new file
 */
export const createAndOpenFile = createOptimistThunk(({
  dispatch
}, fileConfig) => {
  dispatch(openFileInFullscreen(fileConfig));
});

/**
 * Thunk for handling file creation with autosave lock checking
 * @param dispatch - Redux dispatch function
 * @param params - File and context parameters
 */
export const handleAutosaveFileCreation = createOptimistThunk(async ({
  dispatch,
  getState
}, params: {
  file: any;
  openNewFileIn: TabOpenBehavior;
  source: string;
}) => {
  const {
    file,
    openNewFileIn,
    source
  } = params;
  const state = getState();
  const user = state.user;
  if (!user) return;
  const createFileAction = () => {
    const config = createFileConfig(file, openNewFileIn);
    dispatch(createAndOpenFile(config));
    trackEventAnalytics("New Autosave File Open", {
      openNewFileIn,
      source
    });
  };

  // Check if desktop API is available
  if (desktopAPIInstance) {
    createFileAction();
  } else {
    const isLockAvailable = await isAutosaveLockAvailable(user.id, file);
    if (isLockAvailable) {
      dispatch(showModalHandler({
        type: autosaveModalId,
        data: {
          file
        }
      }));
      return;
    }
    createFileAction();
  }
});

/**
 * Thunk for opening file in fullscreen mode
 * @param dispatch - Redux dispatch function
 * @param fileParams - File parameters
 */
export const openFileInFullscreen = createOptimistThunk(({
  dispatch,
  getState
}, fileParams) => {
  // Early return conditions
  if (isIntegrationContext() || !fileParams.allowOnDesktop && getElapsedTime() < 600) {
    return;
  }
  const fileQueryParams = transformNewFileParamsToApiParams(fileParams);

  // Reset loaded file in fullscreen
  fullscreenValue.resetLoadedFigFile();

  // Handle different file opening scenarios
  if (desktopAPIInstance) {
    if (fileParams.allowOnDesktop) {
      initiateNewFileCreation(dispatch, fileParams, false);
    } else {
      createNewFileViaDesktopAPI(dispatch, fileParams);
      return;
    }
  } else if (fileParams.openNewFileIn === TabOpenBehavior.NEW_TAB) {
    const queryString = serializeQuery(fileQueryParams);
    customHistory.redirect(`/file/new${queryString ? `?${queryString}` : ""}`, "_blank");
  } else if (compareValues(getState().currentUserOrgId, fileParams.org_id)) {
    const queryString = serializeQuery(fileQueryParams);
    customHistory.redirect(`/file/new${queryString ? `?${queryString}` : ""}`);
  } else {
    initiateNewFileCreation(dispatch, fileParams, false);
  }

  // Reset timer and set autosave status
  resetTimer();
  const progressBarMode = fileParams.openNewFileIn === TabOpenBehavior.SAME_TAB && (!desktopAPIInstance || fileParams.allowOnDesktop) ? UIVisibilitySetting.HIDE_UI : UIVisibilitySetting.OFF;
  setAutosaveStatus(true);
  dispatch(setFullscreenNewFileOpen({
    openNewFileIn: fileParams.openNewFileIn,
    progressBarMode
  }));
});

// Action creator for fullscreen new file open
export const setFullscreenNewFileOpen = createActionCreator("FULLSCREEN_NEW_FILE_OPEN");

// Export public API

export const zE = createNewFileWithRestrictions;
export const NA = handleAutosaveFileCreation;
export const uM = createAndOpenFile;
export const HO = setFullscreenNewFileOpen;