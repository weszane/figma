import type { Team, UserState } from '../figma_app/345997';
import { FFileType } from '../figma_app/191312';
import { getFileKeyFromSelectedView } from '../figma_app/193867';
import { hasFolderRestrictions } from '../figma_app/345997';
import { getPermissionsState } from '../figma_app/642025';
interface AppState extends UserState {
  selectedView: {
    view: string;
    fileKey?: string;
    folderId?: string;
  };
  fileByKey: Record<string, any>;
  folders: Record<string, any>;
  currentUserOrgId: string | null;
  orgById: Record<string, {
    id: string;
  }>;
  currentTeamId: string | null;
  teams: Record<string, Team>;
}
interface NewFileConfigParams {
  state: AppState;
  openNewFileIn: string;
  folderOverride: {
    folderId: string;
  } | 'drafts' | null;
  trackingInfo?: any;
  editorType?: FFileType;
  fileName?: string;
  callback?: () => void;
  figjamAiNewFileData?: any;
  slidesAiNewFileData?: any;
  figjamMakeSomethingUseCase?: string;
  newFileDataLocalStorageKey?: string;
  figmakeInitialMessage?: string;
}
interface NewFileConfig {
  folder_id: string | null;
  org_id: string | null;
  openNewFileIn: string;
  trackingInfo: any | null;
  editorType: FFileType;
  fileName?: string;
  figjamAiNewFileData?: any;
  slidesAiNewFileData?: any;
  figjamMakeSomethingUseCase?: string;
  newFileDataLocalStorageKey?: string;
  figmakeInitialMessage?: string;
  callback?: () => void;
  team_id: string | null;
}
export function getFullscreenFile(state: AppState): any | null {
  if (state.selectedView.view === 'fullscreen') {
    const fileKey = state.selectedView.fileKey;
    return fileKey ? state.fileByKey[fileKey] ?? null : null;
  }
  return null;
}
export function getSelectedFile(state: AppState): any | null {
  const fileKey = getFileKeyFromSelectedView(state.selectedView);
  return fileKey ? state.fileByKey[fileKey] ?? null : null;
}
export function getSelectedFolder(state: AppState): any | null {
  return state.selectedView.view === 'folder' ? state.folders[state.selectedView.folderId] : null;
}
export function getPermissionsAndView(state: AppState): {
  selectedView: AppState['selectedView'];
  currentOrgId: string | null;
} & ReturnType<typeof getPermissionsState> {
  return {
    ...getPermissionsState(state),
    selectedView: state.selectedView,
    currentOrgId: state.currentUserOrgId
  };
}
export function getNewFileConfig({
  state,
  openNewFileIn,
  folderOverride = null,
  trackingInfo,
  editorType = FFileType.DESIGN,
  fileName,
  callback,
  figjamAiNewFileData,
  slidesAiNewFileData,
  figjamMakeSomethingUseCase,
  newFileDataLocalStorageKey,
  figmakeInitialMessage
}: NewFileConfigParams): NewFileConfig {
  let folderId: string | null = null;
  if (folderOverride === null) {
    const selectedFolder = getSelectedFolder(state);
    if (selectedFolder && !hasFolderRestrictions(selectedFolder, state)) {
      folderId = selectedFolder.id;
    }
  } else if (folderOverride !== 'drafts') {
    folderId = folderOverride.folderId;
  }
  const organization = state.currentUserOrgId ? state.orgById[state.currentUserOrgId] : null;
  const orgId = organization?.id ?? null;
  const team = state.currentTeamId ? state.teams[state.currentTeamId] : null;
  const teamId = team?.id ?? null;
  return {
    folder_id: folderId,
    org_id: orgId,
    openNewFileIn,
    trackingInfo: trackingInfo || null,
    editorType,
    fileName,
    figjamAiNewFileData,
    slidesAiNewFileData,
    figjamMakeSomethingUseCase,
    newFileDataLocalStorageKey,
    figmakeInitialMessage,
    callback,
    team_id: teamId
  };
}
export function removeOptimist(state: AppState) {
  return {
    ...state,
    optimist: undefined
  };
}
export const Kl = getPermissionsAndView;
export const d1 = getSelectedFile;
export const e9 = getSelectedFolder;
export const l$ = removeOptimist;
export const xA = getNewFileConfig;
export const yt = getFullscreenFile;