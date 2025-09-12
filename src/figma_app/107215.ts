import { Multiplayer } from "../figma_app/763686";
import { getStorage } from "../905/657224";
import { createActionCreator } from "../905/73481";
import { Dk } from "../figma_app/623293";
import { createOptimistThunk } from "../905/350402";
import { xS } from "../figma_app/193867";
import { Vv } from "../905/32091";
let $$c3 = "seen_try_onboarding";
let $$u9 = createActionCreator("SET_WORKSHOP_USER_NAME");
let $$p4 = createOptimistThunk((e, t) => {
  let r = t.name.trim().substring(0, 170);
  let n = e.getState();
  let i = "fullscreen" === n.selectedView.view && n.selectedView.workshopModeInfo;
  i && ($$y2(r), Vv(i.id, r), e.dispatch($$u9(t)));
});
let $$_7 = createActionCreator("SET_STARTER_KIT_HAS_BEEN_HIDDEN");
let $$h5 = createActionCreator("SET_FIGJAM_EDITOR_ONBOARDING_FINISHED_OR_DISMISSED");
let $$m1 = createActionCreator("SET_FIGJAM_EDITOR_ONBOARDING_STARTED");
createOptimistThunk(e => {
  getStorage().set($$c3, !0);
  e.dispatch($$m1());
});
let $$g6 = createActionCreator("SET_WORKSHOP_MODE_UNTIL");
let $$f0 = createActionCreator("CLEAR_TRY_PLUGIN");
let $$E8 = createOptimistThunk((e, t) => {
  let r = e.getState();
  return Dk(xS(r, t));
});
export function $$y2(e) {
  Multiplayer?.setName(e);
}
export const MV = $$f0;
export const N = $$m1;
export const QA = $$y2;
export const Xk = $$c3;
export const cq = $$p4;
export const hh = $$h5;
export const lX = $$g6;
export const q0 = $$_7;
export const zT = $$E8;
export const zU = $$u9;