import { createOptimistThunk } from "../905/350402";
import { createActionCreator } from "../905/73481";
import { R7 } from "../905/508367";
import { desktopAPIInstance } from "../figma_app/876459";
createOptimistThunk(e => {
  let t = e.getState().appWindow.inFullScreenMode;
  if (desktopAPIInstance) {
    desktopAPIInstance.setFullScreen(!t);
    return;
  }
  R7.fullscreen && (t ? R7.getFullscreenElement() ? R7.exitFullscreenFunc() : e.dispatch($$o0()) : R7.requestFullscreenFunc.call(document.documentElement));
});
let $$s1 = createActionCreator("WINDOW_DID_ENTER_FULL_SCREEN");
let $$o0 = createActionCreator("WINDOW_DID_EXIT_FULL_SCREEN");
export function $$l2(e) {
  R7.fullscreen && !desktopAPIInstance && (document.addEventListener(R7.fullscreenChangeEventName, function () {
    let t = e.getState();
    R7.getFullscreenElement() && !t.appWindow.inFullScreenMode ? e.dispatch($$s1()) : t.appWindow.inFullScreenMode && e.dispatch($$o0());
  }), document.addEventListener(R7.fullscreenErrorEventName, function (t) {
    console.warn("failed to enter fullscreen:", t);
    e.getState().appWindow.inFullScreenMode && e.dispatch($$o0());
  }));
}
export const ZH = $$o0;
export const r$ = $$s1;
export const r5 = $$l2;