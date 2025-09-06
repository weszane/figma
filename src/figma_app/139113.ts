import { ServiceCategories as _$$e } from "../905/165054";
import { i6g } from "../figma_app/763686";
import { atom, atomStoreManager } from "../figma_app/27355";
import { reportError } from "../905/11";
var $$o2 = (e => (e[e.NEW_FILE = 0] = "NEW_FILE", e[e.EXISTING_FILE = 1] = "EXISTING_FILE", e[e.WAITING = 2] = "WAITING", e[e.FINISHED_WAITING = 3] = "FINISHED_WAITING", e))($$o2 || {});
export let $$l5 = atom({
  status: 1,
  timeoutHandle: null
});
export function $$d1() {
  return atomStoreManager.get($$l5);
}
export function $$c0(e) {
  return !!(0 === $$d1().status && i6g && i6g.hasOnlyNewFileSystemChanges()) && !!navigator.onLine && (function (e) {
    let t = atomStoreManager.get($$l5);
    t.status = 2;
    t.timeoutHandle = e;
    atomStoreManager.set($$l5, t);
  }(setTimeout(() => {
    $$u4(!0);
    e();
  }, 1e4)), !0);
}
export function $$u4(e) {
  let t = atomStoreManager.get($$l5);
  t.status = 3;
  e || (t.timeoutHandle ? clearTimeout(t.timeoutHandle) : reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Finished waiting but no timeout handle")));
  t.timeoutHandle = null;
  atomStoreManager.set($$l5, t);
}
export function $$p3(e) {
  let t = atomStoreManager.get($$l5);
  t.status = e ? 0 : 1;
  t.timeoutHandle && clearTimeout(t.timeoutHandle);
  t.timeoutHandle = null;
  atomStoreManager.set($$l5, t);
}
export const Ed = $$c0;
export const Js = $$d1;
export const QY = $$o2;
export const Yu = $$p3;
export const pi = $$u4;
export const vE = $$l5;