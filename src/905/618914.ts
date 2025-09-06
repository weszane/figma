import { createDeferredPromise } from "../905/874553";
import { atomStoreManager } from "../figma_app/27355";
export function $$a0(e) {
  let {
    promise,
    resolve,
    reject
  } = createDeferredPromise();
  let s = () => {
    let t = atomStoreManager.get(e);
    "loaded" === t.status ? (resolve(t.data), setTimeout(o)) : "errors" === t.status && (reject(t.errors), setTimeout(o));
  };
  let o = atomStoreManager.sub(e, s);
  s();
  return promise;
}
export const Q = $$a0;