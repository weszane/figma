import { reportError, setTagGlobal } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { Tj } from '../905/266529';
import { n as _$$n } from '../905/347702';
import { debugState } from '../905/407919';
import { o8, YR } from '../905/622391';
import { atomStoreManager } from '../figma_app/27355';
import { isInteractionPathCheck } from '../figma_app/897289';
import { $f, d4, GR, vT } from '../figma_app/474636';
import { desktopAPIInstance } from '../figma_app/876459';
let m = null;
let $$h7 = {
  currentPluginRunID: null,
  stats: null,
  currentWidget: void 0,
  setMediaEnabled: !1,
  allowedPluginOrigin: void 0,
  resetGlobalPluginAPI: null
};
export function $$g5() {
  return $$h7.currentPluginRunID;
}
export function $$f6() {
  return atomStoreManager.get(GR);
}
export function $$_8(e) {
  setTagGlobal('pluginId', e?.plugin_id);
  atomStoreManager.set(GR, e);
}
export function $$A11(e) {
  setTagGlobal('pluginTriggeredFrom', e);
  atomStoreManager.set(vT, e ?? null);
}
export function $$y0(e) {
  atomStoreManager.set($f, e);
}
export function $$b9() {
  return Math.random().toString(36).slice(2);
}
function v(e) {
  isInteractionPathCheck();
  reportError(_$$e.EXTENSIBILITY, e);
}
export function $$I3(e) {
  m && v(new Error(`Did not close the previous plugin: type=${m.type}`));
  m = {
    type: 'global',
    closePluginFunc: e
  };
}
export function $$E1(e, t) {
  m?.type === 'plugin' && t?.ignorePreviousCloseFunc !== m.closePluginFunc && v(new Error(`Did not close the previous plugin: type=${m.type}`));
  m?.type === 'global' && v(new Error(`Did not close the previous plugin: type=${m.type}`));
  m = e ? {
    type: 'plugin',
    closePluginFunc: e
  } : null;
}
export function $$x13(e) {
  $$h7.resetGlobalPluginAPI = e;
}
export function $$S4() {
  return m?.type === 'global';
}
export async function $$w2(e) {
  if (m) {
    let {
      closePluginFunc,
      type
    } = m;
    m = null;
    type === 'global' ? await closePluginFunc() : await closePluginFunc(e);
  }
}
export let $$C12 = _$$n(async e => {
  await $$w2(e ? {
    message: `${e}`,
    isError: !0
  } : {});
  $$T10();
});
export function $$T10() {
  if (Tj(void 0), $$h7.currentWidget = void 0, $$_8(null), $$A11(null), $$y0(null), $$h7.currentPluginRunID = null, $$h7.stats = null, atomStoreManager.set(d4, null), atomStoreManager.set(GR, null), desktopAPIInstance && $$h7.setMediaEnabled && ($$h7.setMediaEnabled = !1), desktopAPIInstance && $$h7.allowedPluginOrigin && (desktopAPIInstance.removeAllowedPluginOrigin($$h7.allowedPluginOrigin), $$h7.allowedPluginOrigin = void 0), debugState) {
    let t = o8();
    let i = YR();
    if (t && i) {
      let e;
      e = {
        userID: t,
        openFileKey: i
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