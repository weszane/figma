import { createActionCreator } from "../905/73481";
// Refactored from minified code in 972736.ts: Renamed minified variables to descriptive names based on action types, added type annotations for action creators, improved readability with comments and formatting.

// Assumed dependency: createActionCreator from "../905/73481" (likely a Redux action creator factory function).

// Define a type for action creators to ensure type safety. Inferred from usage: returns a function that creates actions with type and optional payload.


// Create action creators with descriptive names for clarity.
export const setQuickAccessToolActionCreator = createActionCreator("FIGJAM_SET_QUICK_ACCESS_TOOL");
export const setIsMakeSomethingV2ActiveActionCreator = createActionCreator("FIGJAM_SET_IS_MAKE_SOMETHING_V2_ACTIVE");
export const setDelightfulToolbarOverflowMenuActionCreator = createActionCreator("FIGJAM_SET_DELIGHTFUL_TOOLBAR_OVERFLOW_MENU");
export const setImageDialogActionCreator = createActionCreator("FIGJAM_SET_IMAGE_DIALOG");

// Export with original export names, but referencing the refactored action creators.
export const EG = setQuickAccessToolActionCreator;
export const Ji = setIsMakeSomethingV2ActiveActionCreator;
export const lr = setDelightfulToolbarOverflowMenuActionCreator;
export const qC = setImageDialogActionCreator;
