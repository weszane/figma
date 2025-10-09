import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
// Origin: /Users/allen/sigma-main/src/figma_app/914957.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, improved readability, added comments, simplified logic.
// Assumed dependencies: createActionCreator, createOptimistThunk (Redux-style helpers)

/**
 * Interface for the payload used to show the create style preview.
 */
interface ShowCreateStylePreviewPayload {
  rowTop: number;
  rowLeft: number;
  styleType: string;
  inheritStyleKeyField?: string;
  styleNameInputPrefix?: string;
  nodeId: string;
}

/**
 * Redux action creators for style preview UI.
 */
export const hideStylePreview = createActionCreator("FULLSCREEN_HIDE_STYLE_PREVIEW");
export const showCreateStylePreview = createActionCreator("SHOW_CREATE_STYLE_PREVIEW");
export const showStylePreview = createActionCreator("FULLSCREEN_SHOW_STYLE_PREVIEW");
export const putStyleSet = createActionCreator("STYLE_FILE_PUT_STYLE_SET");
// Note: STYLE_FILE_GET_STYLE_SET is created but not used/exported.

/**
 * Thunk to hide style preview if it is currently shown and not being created.
 */
export const hideStylePreviewThunk = createOptimistThunk((store) => {
  const { stylePreviewShown } = store.getState();
  // Only hide if preview is shown and not in creation mode
  if (stylePreviewShown.isShown && !stylePreviewShown.isCreating) {
    store.dispatch(hideStylePreview());
  }
});

/**
 * Thunk to show create style preview with provided payload.
 */
export const showCreateStylePreviewThunk = createOptimistThunk(
  (store, payload: ShowCreateStylePreviewPayload) => {
    // Dispatch action to show the create style preview with payload
    store.dispatch(showCreateStylePreview(payload));
  }
);

/**
 * Thunk to show style preview with payload.
 */
export const showStylePreviewThunk = createOptimistThunk(
  (store, payload: any) => {
    // Dispatch action to show style preview (payload type unknown)
    store.dispatch(showStylePreview(payload));
  }
);

// Exported constants retain original names for compatibility
export const Ev = showStylePreview;
export const FL = showCreateStylePreview;
export const YG = hideStylePreviewThunk;
export const Zs = showCreateStylePreviewThunk;
export const nH = putStyleSet;
export const rk = showStylePreviewThunk;
export const sw = hideStylePreview;
