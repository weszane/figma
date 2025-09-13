import { Fullscreen, DesignGraphElements } from "../figma_app/763686";
import { createActionCreator } from "../905/73481";
import { trackFileEvent } from "../figma_app/314264";
import { R9 } from "../905/977824";
import { q } from "../figma_app/403368";
import { createOptimistThunk } from "../905/350402";
let $$d6 = createActionCreator("MULTIPLAYER_EMOJI_UPDATE_EMOJI_WHEEL_POSITION");
let $$c2 = createActionCreator("MULTIPLAYER_EMOJI_CLEAR_STATE");
let $$u1 = createOptimistThunk(e => {
  Fullscreen?.setIsInCursorChat(!1);
  e.dispatch($$c2());
});
let $$p9 = createActionCreator("MULTIPLAYER_EMOJI_START_CHATTING");
let $$_0 = createOptimistThunk((e, t) => {
  let r = e.getState();
  0 > [DesignGraphElements.HAND, DesignGraphElements.SELECT, DesignGraphElements.HAND_SELECT].indexOf(r.mirror.appModel.currentTool) && Fullscreen?.triggerAction("set-tool-default", null);
  q().then(e => {
    e || (Fullscreen?.setIsInCursorChat(!0), trackFileEvent("Started chatting", r.openFile?.key, r, {
      source: t.source
    }));
  });
  e.dispatch($$p9(t));
});
let $$h5 = createActionCreator("MULTIPLAYER_EMOJI_STOP_REACTING");
let $$m3 = createActionCreator("MULTIPLAYER_EMOJI_START_REACTING");
let $$g8 = createOptimistThunk((e, t) => {
  R9.resetReactions();
  e.dispatch($$m3(t));
});
let $$f4 = createActionCreator("MULTIPLAYER_EMOJI_TOGGLE_EMOJI_WHEEL");
let $$E7 = createOptimistThunk((e, t) => {
  let r = e.getState();
  trackFileEvent("Toggled emoji wheel", r.openFile?.key, r, {
    wheelType: t.wheelType,
    ...(t.source && {
      source: t.source
    })
  });
  e.dispatch($$f4(t));
});
export const F6 = $$_0;
export const Ho = $$u1;
export const K6 = $$c2;
export const PU = $$m3;
export const V9 = $$f4;
export const mu = $$h5;
export const sm = $$d6;
export const sp = $$E7;
export const wE = $$g8;
export const yc = $$p9;