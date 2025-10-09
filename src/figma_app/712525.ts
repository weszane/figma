import { createActionCreator } from "../905/73481";
// Refactored from original code in 712525.ts
// Changes: Renamed variables for clarity, added type definitions, added comments, preserved export names

// Assumed dependency: createActionCreator returns a Redux action creator function

/**
 * Type definition for a generic Redux action creator.
 * Adjust the payload type as needed for your application.
 */


/**
 * Action creator for setting the canvas search mode.
 */
export const setCanvasSearchMode = createActionCreator("CANVAS_SEARCH_SET_MODE");

/**
 * Action creator for setting the canvas search scope.
 */
export const setCanvasSearchScope = createActionCreator("CANVAS_SEARCH_SET_SCOPE");

/**
 * Action creator for clearing category filters in canvas search.
 */
export const clearCanvasSearchCategoryFilters = createActionCreator("CANVAS_SEARCH_CLEAR_CATEGORY_FILTERS");

/**
 * Action creator for switching category filter to exclusive mode.
 */
export const switchCanvasSearchCategoryFilterExclusive = createActionCreator("CANVAS_SEARCH_SWITCH_CATEGORY_FILTER_EXCLUSIVE");

/**
 * Action creator for toggling a category filter in canvas search.
 */
export const toggleCanvasSearchCategoryFilter = createActionCreator("CANVAS_SEARCH_TOGGLE_CATEGORY_FILTER");

/**
 * Action creator for setting the canvas search query.
 */
export const setCanvasSearchQuery = createActionCreator("CANVAS_SEARCH_SET_QUERY");

/**
 * Action creator for resetting the canvas search.
 */
export const resetCanvasSearch = createActionCreator("CANVAS_SEARCH_RESET");

// Exporting with original names for compatibility
export const DI = toggleCanvasSearchCategoryFilter;
export const NY = setCanvasSearchQuery;
export const V2 = setCanvasSearchScope;
export const cL = resetCanvasSearch;
export const dY = clearCanvasSearchCategoryFilters;
export const sV = setCanvasSearchMode;
export const zx = switchCanvasSearchCategoryFilterExclusive;
