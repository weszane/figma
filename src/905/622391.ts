import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { logWarning } from "../905/714362";
import { isInteractionPathCheck } from "../figma_app/897289";
import { tn } from "../figma_app/473493";
import { np as _$$np } from "../figma_app/544649";
import { s as _$$s } from "../905/506024";
import { cb, Eh, Pe } from "../figma_app/12796";
import { n as _$$n } from "../905/347702";
export function $$p6() {
  let e = debugState.getState();
  let t = _$$s(e);
  t || e.selectedView || logWarning("plugins", "selectedView is invalid");
  return t;
}
export function $$m3() {
  let e = debugState.getState();
  return e.openFile?.key;
}
export function $$h1() {
  let e = debugState.getState();
  return cb(e);
}
export function $$g7() {
  if (getInitialOptions().e2e_traffic || isInteractionPathCheck()) return !0;
  let e = debugState.getState();
  return Eh(e) && cb(e);
}
export function $$f2() {
  return debugState.getState().currentUserOrgId || void 0;
}
export function $$_8() {
  return debugState.getState().mirror.appModel.useRealmsForPluginDev ? "realms" : "cppvm";
}
export function $$A0() {
  let e = debugState.getState().openFile;
  return !!e && !Pe(e);
}
let $$y4 = _$$n(() => {
  let e = debugState.getState();
  return tn(e);
});
let $$b5 = _$$n(_$$np);
export const CQ = $$A0;
export const Fr = $$h1;
export const I = $$f2;
export const YR = $$m3;
export const fb = $$y4;
export const np = $$b5;
export const o8 = $$p6;
export const op = $$g7;
export const r_ = $$_8;