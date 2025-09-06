import { assert } from "../figma_app/465776";
import { Ez5, dBj } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { lB, $$if } from "../figma_app/97020";
import { ds } from "../figma_app/314264";
import { Wh } from "../figma_app/615482";
import { sF } from "../figma_app/357655";
import { a as _$$a } from "../905/38236";
import { K } from "../figma_app/695131";
export function $$m7() {
  return null !== atomStoreManager.get($$x6);
}
export function $$g10(e) {
  atomStoreManager.set($$x6, null);
  getFeatureFlags().sts_sprig_targeted_feedback && e && atomStoreManager.get(K) && e("track", "sites_responsive_set_edit");
}
let f = Wh(() => atom(null));
let $$E5 = atom(!1);
export var $$y0 = (e => (e[e.Modal = 0] = "Modal", e[e.Iframe = 1] = "Iframe", e[e.None = 2] = "None", e))($$y0 || {});
let b = Wh(() => atom(0));
let $$T9 = atom(null, (e, t, r) => {
  if (2 === e(b) && 2 !== r && e($$E5)) {
    let t = e(f);
    assert(!!t, "sitePreviewState should not be null");
    t.history.refresh();
    atomStoreManager.set($$E5, !1);
  }
  t(b, r);
});
function I() {
  return Ez5?.prototypingEditorState().prototypeViewMode.getCopy() === dBj.PRESENT ? "fullscreen" : "modal";
}
let $$S2 = Wh(() => atom(I()));
let $$v3 = Wh(() => atom(0));
let $$A1 = Wh(() => atom(null));
let $$x6 = atom(e => e(f), (e, t, r) => {
  var i;
  let s;
  let o = e(f);
  if (!o?.startingNodeId && r?.startingNodeId && function (e) {
    if (!e) return;
    let t = debugState.getState();
    let r = t.openFile?.key;
    let n = t.user && t.user.id;
    ds("sites_view_preview", r, t, {
      userId: n,
      mode: e
    });
  }(r.mode), r) {
    let e = getSingletonSceneGraph().get(r.startingNodeId);
    assert(!!e, `Node with id ${r.startingNodeId} not found`);
    let t = lB(e);
    let i = $$if(e) && t ? t : e.name;
    s = {
      ...r,
      history: new _$$a({
        url: i
      })
    };
  } else s = null;
  null !== s && t($$S2, s?.mode ?? I());
  t(f, s);
  i = s;
  new Promise(e => {
    C = e;
  });
  null === i && C(null);
});
let $$N4 = atom(e => {
  let t = e(f)?.history;
  if (t) return sF(e(t.currentAtom).url).id;
});
Promise.resolve(null);
let C = e => {};
export function $$w8(e) {
  C(e);
}
export const Dw = $$y0;
export const HA = $$A1;
export const IX = $$S2;
export const Og = $$v3;
export const Qy = $$N4;
export const W = $$E5;
export const _b = $$x6;
export const gu = $$m7;
export const o7 = $$w8;
export const q9 = $$T9;
export const uP = $$g10;