import { createActionCreator } from "../905/73481";
// Refactored from original code in /Users/allen/sigma-main/src/905/748726.ts
// Changes: Renamed variables for clarity, added type annotations, added comments explaining each action creator.
// Assumed dependency: createActionCreator returns a Redux action creator function.

/**
 * Action creator for setting an error message.
 */
export const setErrorMessage = createActionCreator("SET_ERROR_MESSAGE");

/**
 * Action creator for handling autocomplete input changes.
 */
export const autocompleteInputChange = createActionCreator("AUTOCOMPLETE_INPUT_CHANGE");

/**
 * Action creator for adding a token in autocomplete.
 */
export const autocompleteAddToken = createActionCreator("AUTOCOMPLETE_ADD_TOKEN");

/**
 * Action creator for setting autocomplete data.
 */
export const autocompleteSet = createActionCreator("AUTOCOMPLETE_SET");

/**
 * Action creator for resetting autocomplete state.
 */
export const autocompleteReset = createActionCreator("AUTOCOMPLETE_RESET");

// Exported constants retain original export names for compatibility.
export const Ox = autocompleteAddToken;
export const cL = autocompleteReset;
export const g = setErrorMessage;
export const hZ = autocompleteSet;
export const pf = autocompleteInputChange;
