import { createActionCreator } from "../905/73481";
// Action creators for tile selection functionality

/**
 * Action creator for resetting tile selection.
 * Original: $$r2
 */
export const resetTileSelection = createActionCreator("RESET_TILE_SELECTION");

/**
 * Action creator for deselecting tiles.
 * Original: $$a1
 */
export const deselectTiles = createActionCreator("DESELECT_TILES");

/**
 * Action creator for selecting tiles.
 * Original: $$s3
 */
export const selectTiles = createActionCreator("SELECT_TILES");

/**
 * Action creator for selecting tiles by keys.
 * Original: $$o0
 */
export const selectTilesByKeys = createActionCreator("SELECT_TILES_BY_KEYS");

// Exports with meaningful names (update any imports accordingly)
export const PW = selectTilesByKeys;
export const TK = deselectTiles;
export const an = resetTileSelection;
export const y$ = selectTiles;
