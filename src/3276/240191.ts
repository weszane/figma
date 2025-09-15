import { atom } from "../figma_app/27355";
import { userAtom } from "../figma_app/864723";
import { openFileAtom } from "../figma_app/516028";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { transformAtom } from "../905/401885";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
let d = createReduxSubscriptionAtomWithState(e => e.multiplayer.allUsers);
atom(e => {
  let t = e(userAtom);
  let n = e(d);
  if (t && 0 !== n.length) return n.filter(e => e.userID !== t.id);
});
let c = createReduxSubscriptionAtomWithState(e => e.multiplayer.deviceNameFilter);
let $$m2 = atom(e => {
  let t = e(d);
  let n = e(c);
  return null != e(openFileAtom) && null != n && new Set(t.filter(e => e.deviceName === n).map(e => e.userID)).size > 1;
});
let u = userFlagExistsAtomFamily("seen_spotlight_hint");
let $$p1 = transformAtom(u, (e, t) => {
  let n = t(d);
  let o = t(c);
  if (t(h)) return !1;
  let a = n.filter(e => e.deviceName === o);
  let i = Math.max(...Object.values(a).map(e => e.joinedAtS)) - 300;
  let s = new Set();
  for (let e of a) e.joinedAtS >= i && s.add(e.userID);
  return !(s.size < 5) && !e;
});
let h = createReduxSubscriptionAtomWithState(e => {
  let t = "fullscreen" === e.selectedView.view && !e.mirror.appModel.showUi;
  let n = "prototype" === e.selectedView.view && e.selectedView.hideUI;
  return t || n;
});
let $$f0 = createReduxSubscriptionAtomWithState(e => {
  let t = "fullscreen" === e.selectedView.view && e.mirror.appModel.showUi;
  let n = "prototype" === e.selectedView.view && !e.selectedView.hideUI;
  return t || n;
});
export const $5 = $$f0;
export const E6 = $$p1;
export const d9 = $$m2;