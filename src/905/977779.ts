import { l as _$$l } from "../905/716947";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, mg } from "../figma_app/27355";
import s from "../vendor/239910";
import { debugState } from "../905/407919";
import { yZ } from "../figma_app/476572";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { ov, Av } from "../figma_app/646357";
import { k1, vx } from "../905/91038";
import { O } from "../905/221694";
import { subscribedSymbolsFromLoadedPagesSelector, subscribedStateGroupsFromLoadedPagesSelector } from "../figma_app/141508";
import { getCurrentHubFileVersionName } from "../905/71785";
var o = s;
let f = createReduxSubscriptionAtomWithState(e => e.library.publishedByLibraryKey.components);
let _ = createReduxSubscriptionAtomWithState(e => e.library.publishedByLibraryKey.stateGroups);
let A = createReduxSubscriptionAtomWithState(subscribedSymbolsFromLoadedPagesSelector);
let y = createReduxSubscriptionAtomWithState(subscribedStateGroupsFromLoadedPagesSelector);
let $$b3 = atom(e => {
  let t = {};
  let i = e(f);
  for (let [r, a] of Object.entries(e(_))) if (r && a) for (let e of (t[r] = {}, Object.keys(a))) {
    if (!e) continue;
    let a = _$$l(e);
    let s = {};
    for (let e of Object.values(i?.[r]?.[a] ?? {})) {
      let t = e?.containing_frame?.containingStateGroup?.nodeId;
      t && (s[t] = (s[t] ?? 0) + 1);
    }
    t[r][a] = s;
  }
  return t;
});
let $$v2 = atom(e => o()(e(k1), e => _$$l(e.library_key)));
let $$I1 = atom(e => {
  let t = {};
  let i = e($$v2);
  for (let e of Object.keys(i)) {
    let r = _$$l(e);
    let a = i[r];
    a && (t[r] = a.name);
  }
  let r = e(O);
  for (let e of Object.keys(r)) {
    let i = _$$l(e);
    let a = r[i];
    a && (t[i] = getCurrentHubFileVersionName(a));
  }
  return t;
});
let E = createReduxSubscriptionAtomWithState(vx);
let x = atom(e => {
  let t = getSingletonSceneGraph();
  let i = e(A).map(e => e.nodeId);
  let n = e(y).map(e => e.nodeId);
  let a = {
    components: e(f),
    stateGroups: e(_)
  };
  return ov(t, i, n, a, e(E), debugState.dispatch);
});
let $$S0 = mg(x, e => new Set(e.map(e => Av(e))), yZ);
export const hN = $$S0;
export const oE = $$I1;
export const qp = $$v2;
export const rg = $$b3;