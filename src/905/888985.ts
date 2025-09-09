import { SubscriptionManager } from '../905/417830';
import { deepEqual } from '../905/663269';
import { Xm } from '../905/723791';
import { WB } from '../905/761735';
import { debounce } from '../905/915765';
import { resourceUtils } from '../905/989992';
import { atom, createRemovableAtomFamily, setupAtomWithMount, atomStoreManager } from '../figma_app/27355';
import { VariableCollectionByKey, VariablesByVariableCollectionKey, LibraryVariableCollectionDataWithVariables, VariableByKey, LibraryVariableCollectionData, UserColorProfilePreferenceView, LibraryModuleData } from '../figma_app/43951';
function u(e, t) {
  return deepEqual(e, t);
}
function p(e, t) {
  let i = atom(Xm());
  return void 0 === t ? setupAtomWithMount(i, ({
    setSelf: t
  }) => WB().subscribe(e, {}, e => {
    t(e);
  })) : setupAtomWithMount(i, ({
    setSelf: i
  }) => WB().subscribe(e, t, e => {
    i(e);
  }));
}
function m(e) {
  return createRemovableAtomFamily(t => p(e, t), u);
}
let h = (e, t) => e.length === t.length && e.every((e, i) => u(e, t[i]));
function g(e) {
  return createRemovableAtomFamily(t => function (e, t) {
    let i = atom(t.map(e => ({
      args: e,
      result: resourceUtils.loading()
    })));
    return setupAtomWithMount(i, ({
      setSelf: i
    }) => {
      let r = new SubscriptionManager(WB(), debounce(() => {
        i(t.map(e => ({
          args: e,
          result: resourceUtils.from(r.currentResult(e))
        })));
      }, 100));
      r.update(e, t);
      return () => r.clear();
    });
  }(e, t), h);
}
let $$f4 = m(UserColorProfilePreferenceView);
let $$_6 = m(VariablesByVariableCollectionKey);
let $$A3 = m(VariableByKey);
let $$y8 = m(LibraryModuleData);
let $$b1 = g(VariableCollectionByKey);
let $$v5 = g(VariableByKey);
function I(e, t) {
  let i = createRemovableAtomFamily(t => p(e, t), u);
  let n = t(i);
  let a = atom((e, t) => n(e, t));
  let s = atom(e => e(a), () => {});
  s.onMount = () => () => i.removeAll();
  return s;
}
export function $$E2(e, t) {
  return new Promise((i, n) => {
    let a = !0;
    let s = e => {
      a = !1;
      i(e);
    };
    let o = e => {
      a = !1;
      n(e);
    };
    function l() {
      t(s, o);
      a || d();
    }
    let d = atomStoreManager.sub(e, l);
    a && l();
  });
}
let $$x0 = e => I(LibraryVariableCollectionData, e);
let $$S7 = e => I(LibraryVariableCollectionDataWithVariables, e);
export const BV = $$x0;
export const Ew = $$b1;
export const QO = $$E2;
export const Y4 = $$A3;
export const Zx = $$f4;
export const a5 = $$v5;
export const d5 = $$_6;
export const eS = $$S7;
export const x8 = $$y8;