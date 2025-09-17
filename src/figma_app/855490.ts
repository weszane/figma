import { createOptimistThunk } from "../905/350402";
import { createActionCreator } from "../905/73481";
import { browserFeatures } from "../905/508367";
import { desktopAPIInstance } from "../figma_app/876459";
createOptimistThunk(e => {
  let t = e.getState().appWindow.inFullScreenMode;
  if (desktopAPIInstance) {
    desktopAPIInstance.setFullScreen(!t);
    return;
  }
  browserFeatures.fullscreen && (t ? browserFeatures.getFullscreenElement() ? browserFeatures.exitFullscreenFunc() : e.dispatch($$o0()) : browserFeatures.requestFullscreenFunc.call(document.documentElement));
});
let $$s1 = createActionCreator("WINDOW_DID_ENTER_FULL_SCREEN");
let $$o0 = createActionCreator("WINDOW_DID_EXIT_FULL_SCREEN");
export function $$l2(e) {
  browserFeatures.fullscreen && !desktopAPIInstance && (document.addEventListener(browserFeatures.fullscreenChangeEventName, function () {
    let t = e.getState();
    browserFeatures.getFullscreenElement() && !t.appWindow.inFullScreenMode ? e.dispatch($$s1()) : t.appWindow.inFullScreenMode && e.dispatch($$o0());
  }), document.addEventListener(browserFeatures.fullscreenErrorEventName, function (t) {
    console.warn("failed to enter fullscreen:", t);
    e.getState().appWindow.inFullScreenMode && e.dispatch($$o0());
  }));
}
export const ZH = $$o0;
export const r$ = $$s1;
export const r5 = $$l2;