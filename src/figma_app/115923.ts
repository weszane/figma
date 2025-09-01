import { Nfd, lyf } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { eU } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { sf } from "../905/929976";
import { T } from "../905/868547";
import { Wh } from "../figma_app/615482";
import { bt } from "../905/270322";
import { ou } from "../figma_app/32891";
let $$p3 = Wh(() => eU(e => e(_), (e, t, r) => {
  let a = debugState.getState().selectedView;
  if (!a) return;
  if (r === Nfd.DAKOTA && !getFeatureFlags().dakota) {
    console.error("A sites view was accessed that a user did not have permission to access", r);
    return;
  }
  let l = {
    ...a,
    sitesView: r
  };
  debugState.dispatch(sf(l));
}));
let _ = bt(e => {
  let t = e.selectedView;
  let r = T(e?.progressBarState?.mode);
  let a = e.mirror.appModel.isReadOnly || e.mirror.appModel.topLevelMode === lyf.HISTORY;
  if (r || !t || !t.sitesView) return Nfd.FILE;
  if (a && ou.includes(t.sitesView)) {
    console.error(`'Requested sites view is not available for read-only users. Redirecting to the file view. Tried to access view=${t.sitesView}`);
    let e = {
      ...t,
      sitesView: void 0
    };
    debugState.dispatch(sf(e));
    return Nfd.FILE;
  }
  if (t.sitesView === Nfd.DAKOTA && !getFeatureFlags().dakota) {
    console.error("A sites view was accessed that a user did not have permission to access", t.sitesView);
    let e = {
      ...t,
      sitesView: void 0
    };
    debugState.dispatch(sf(e));
    return Nfd.FILE;
  }
  return t.sitesView ?? Nfd.FILE;
});
export var $$h0 = (e => (e.FIND = "find", e.INSERT = "insert", e))($$h0 || {});
let $$m1 = Wh(() => eU(void 0));
let $$g2 = Wh(() => eU(!1));
export const $e = $$h0;
export const Nl = $$m1;
export const bP = $$g2;
export const s0 = $$p3;