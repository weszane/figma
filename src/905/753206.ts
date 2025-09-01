import { ServiceCategories as _$$e } from "../905/165054";
import { zl } from "../figma_app/27355";
import { eD } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { kF, $D } from "../905/11";
import { nl } from "../figma_app/257275";
import { GR, vT, $f, d4 } from "../figma_app/474636";
import { o8, YR } from "../905/622391";
import { n as _$$n } from "../905/347702";
import { Tj } from "../905/266529";
let m = null;
let $$h7 = {
  currentPluginRunID: null,
  stats: null,
  currentWidget: void 0,
  setMediaEnabled: !1,
  allowedPluginOrigin: void 0,
  resetGlobalPluginAPI: null,
};
export function $$g5() {
  return $$h7.currentPluginRunID;
}
export function $$f6() {
  return zl.get(GR);
}
export function $$_8(e) {
  kF("pluginId", e?.plugin_id);
  zl.set(GR, e);
}
export function $$A11(e) {
  kF("pluginTriggeredFrom", e);
  zl.set(vT, e ?? null);
}
export function $$y0(e) {
  zl.set($f, e);
}
export function $$b9() {
  return Math.random().toString(36).slice(2);
}
function v(e) {
  nl();
  $D(_$$e.EXTENSIBILITY, e);
}
export function $$I3(e) {
  m && v(Error(`Did not close the previous plugin: type=${m.type}`));
  m = {
    type: "global",
    closePluginFunc: e,
  };
}
export function $$E1(e, t) {
  m?.type === "plugin" &&
    t?.ignorePreviousCloseFunc !== m.closePluginFunc &&
    v(Error(`Did not close the previous plugin: type=${m.type}`));
  m?.type === "global" &&
    v(Error(`Did not close the previous plugin: type=${m.type}`));
  m = e
    ? {
        type: "plugin",
        closePluginFunc: e,
      }
    : null;
}
export function $$x13(e) {
  $$h7.resetGlobalPluginAPI = e;
}
export function $$S4() {
  return m?.type === "global";
}
export async function $$w2(e) {
  if (m) {
    let { closePluginFunc, type } = m;
    m = null;
    "global" === type ? await closePluginFunc() : await closePluginFunc(e);
  }
}
export let $$C12 = _$$n(async (e) => {
  await $$w2(
    e
      ? {
          message: e + "",
          isError: !0,
        }
      : {},
  );
  $$T10();
});
export function $$T10() {
  if (
    (Tj(void 0),
    ($$h7.currentWidget = void 0),
    $$_8(null),
    $$A11(null),
    $$y0(null),
    ($$h7.currentPluginRunID = null),
    ($$h7.stats = null),
    zl.set(d4, null),
    zl.set(GR, null),
    eD && $$h7.setMediaEnabled && ($$h7.setMediaEnabled = !1),
    eD &&
      $$h7.allowedPluginOrigin &&
      (eD.removeAllowedPluginOrigin($$h7.allowedPluginOrigin),
      ($$h7.allowedPluginOrigin = void 0)),
    debugState)
  ) {
    let t = o8();
    let i = YR();
    if (t && i) {
      var e;
      e = {
        userID: t,
        openFileKey: i,
      };
      $$h7.resetGlobalPluginAPI?.(e);
    }
  }
}
export const Kd = $$y0;
export const Mt = $$E1;
export const XF = $$w2;
export const XY = $$I3;
export const et = $$S4;
export const fD = $$g5;
export const hw = $$f6;
export const iu = $$h7;
export const lM = $$_8;
export const mv = $$b9;
export const nT = $$T10;
export const qR = $$A11;
export const wY = $$C12;
export const yp = $$x13;
