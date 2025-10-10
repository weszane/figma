import { setupObservableAtomFamily } from "../905/508457";
import { AppStateTsApi } from "../figma_app/763686";
import { selectAtom } from "../figma_app/27355";
import { isMobileDevice } from "../figma_app/349969";
let s = setupObservableAtomFamily(() => AppStateTsApi.prototypingEditorState().activePrototypeDevice);
let $$r0 = selectAtom(s, e => isMobileDevice(e.presetIdentifier));
export const NE = $$r0;