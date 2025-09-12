import { createActionCreator } from "../905/73481";
import { handleAtomEvent } from "../905/502364";
import { createOptimistThunk } from "../905/350402";
let $$s0 = createActionCreator("SET_KEYBOARD_SHORTCUT_PANEL_TAB");
let $$o2 = createActionCreator("USED_KEYBOARD_SHORTCUT");
let $$l1 = createOptimistThunk((e, t) => {
  "paste" === t.key && handleAtomEvent({
    id: "Used Keyboard Shortcut Paste"
  });
  e.dispatch($$o2(t));
});
export const FU = $$s0;
export const v6 = $$l1;
export const yu = $$o2;