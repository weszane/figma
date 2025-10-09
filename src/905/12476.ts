import { hideInstanceSwapPicker } from '../905/8732';
import { hidePickerInStyleCreation } from '../905/295712';
import { hideVariablePicker } from '../905/330741';
import { createOptimistThunk } from '../905/350402';
import { hidePickerThunk, hideStylePicker } from '../figma_app/91703';
import { hideStylePreview } from '../figma_app/914957';

/**
 * Hides all pickers and previews if they are currently shown.
 * Original export: $$d0
 */
export const hideAllPickersAndPreviews = createOptimistThunk(dispatchContext => {
  const state = dispatchContext.getState();

  // Hide main picker if shown
  if (state.pickerShown) {
    dispatchContext.dispatch(hidePickerThunk());
  }

  // Hide instance swap picker if shown
  if (state.instanceSwapPickerShown) {
    dispatchContext.dispatch(hideInstanceSwapPicker());
  }

  // Hide style picker if shown
  if (state.stylePickerShown) {
    dispatchContext.dispatch(hideStylePicker());
  }

  // Hide style preview if shown
  if (state.stylePreviewShown) {
    dispatchContext.dispatch(hideStylePreview());
  }

  // Hide variable picker if shown
  if (state.variablePickerShown?.isShown) {
    dispatchContext.dispatch(hideVariablePicker());
  }

  // Hide picker in style creation if shown
  if (state.pickerInStyleCreationShown) {
    dispatchContext.dispatch(hidePickerInStyleCreation());
  }
});

/** Alias for hideAllPickersAndPreviews (original export: r) */
export const r = hideAllPickersAndPreviews;