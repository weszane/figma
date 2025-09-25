import { hideInstanceSwapPicker } from '../905/8732';
import { hidePickerInStyleCreation } from '../905/295712';
import { hideVariablePicker } from '../905/330741';
import { createOptimistThunk } from '../905/350402';
import { hideStylePicker, hidePickerThunk } from '../figma_app/91703';
import { sw } from '../figma_app/914957';
export let $$d0 = createOptimistThunk(e => {
  let t = e.getState();
  t.pickerShown && e.dispatch(hidePickerThunk());
  t.instanceSwapPickerShown && e.dispatch(hideInstanceSwapPicker());
  t.stylePickerShown && e.dispatch(hideStylePicker());
  t.stylePreviewShown && e.dispatch(sw());
  t.variablePickerShown?.isShown && e.dispatch(hideVariablePicker());
  t.pickerInStyleCreationShown && e.dispatch(hidePickerInStyleCreation());
});
export const r = $$d0;