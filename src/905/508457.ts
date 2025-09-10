import { atom, setupSubscriptionAtom, createAtomWithEquality, atomStoreManager } from "../figma_app/27355";
import r from "../vendor/128080";
import { Md, z2 } from "../figma_app/187925";
import { fullscreenReadyAtom } from "../905/924253";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { subscribeObservable, isObservableAlive } from "../figma_app/84367";
var a = r;
let c = atom(e => {
  let t = e(fullscreenReadyAtom);
  let i = e(Md);
  return t || i.status === z2.LOADED;
});
export function $$u0(e) {
  let t = "function" == typeof e ? e : () => e;
  return setupRemovableAtomFamily(() => setupSubscriptionAtom({
    get: () => t().getCopy(),
    subscribe: e => subscribeObservable(t(), {
      onChangeDeferred: e
    })
  }));
}
export function $$p3(e, t) {
  let i = $$u0(e);
  return atom(n => {
    n(c);
    let r = e();
    return r && isObservableAlive(r) ? n(i) : t;
  });
}
export var $$m2 = (e => (e[e.RESET_VALUE_ON_FILE_CHANGE = 0] = "RESET_VALUE_ON_FILE_CHANGE", e[e.KEEP_SEPARATE_VALUE_FOR_EACH_FILE = 1] = "KEEP_SEPARATE_VALUE_FOR_EACH_FILE", e[e.SHARE_SAME_VALUE_FOR_ALL_FILES = 2] = "SHARE_SAME_VALUE_FOR_ALL_FILES", e))($$m2 || {});
export function $$h1(e, t) {
  let i = f(e, t);
  return Object.assign(atom(e => e(i)), _(i));
}
export function $$g4(e, t, i) {
  let r = f(e, i);
  return Object.assign(atom(e => e(r), (e, i, n) => {
    t("function" == typeof n ? n(e(r)) : n);
  }), _(r));
}
function f(e, {
  changeFileBehavior: t,
  equalityFn: i = a()
}) {
  let r = () => {
    let t = "function" == typeof e ? e() : e;
    return createAtomWithEquality(atom(t), i);
  };
  switch (t) {
    case 2:
      return r();
    case 1:
      return setupRemovableAtomFamily(r, {
        preserveValue: !0
      });
    case 0:
      return setupRemovableAtomFamily(r, {
        preserveValue: !1
      });
  }
}
function _(e) {
  let t = t => atomStoreManager.set(e, t);
  return {
    syncFromFullscreen: t,
    observable: {
      get: () => atomStoreManager.get(e),
      set: t
    }
  };
}
export const SG = $$u0;
export const hR = $$h1;
export const hW = $$m2;
export const vv = $$p3;
export const x6 = $$g4;