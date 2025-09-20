import { defaultSessionLocalIDString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { atom } from "../figma_app/27355";
import s from "../vendor/946678";
import { createDeepEqualSelector } from "../905/270781";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { isNewOrChangedOrDeleted } from "../figma_app/646357";
import { StagingStatusEnum } from "../figma_app/633080";
var o = s;
let p = atom(new Map());
let m = createDeepEqualSelector([e => e.mirror.appModel.pagesList], e => {
  let t = new Map();
  e.forEach(e => {
    e.thumbnailInfo && e.thumbnailInfo.nodeID !== defaultSessionLocalIDString && t.set(e.nodeId, {
      ...e.thumbnailInfo,
      pageName: e.name,
      pageId: e.nodeId
    });
  });
  return t;
});
let h = createReduxSubscriptionAtomWithState(m);
let g = (e, t) => e.nodeID !== t.thumbnailId || e.thumbnailVersion !== t.content_hash;
let f = (e, t) => {
  let i = !!e && e.nodeID !== defaultSessionLocalIDString;
  return t && !i ? StagingStatusEnum.DELETED : !t && i ? StagingStatusEnum.NEW : t || i ? e && t && g(e, t) ? StagingStatusEnum.CHANGED : StagingStatusEnum.CURRENT : StagingStatusEnum.NOT_STAGED;
};
let $$_0 = atom(e => {
  if (!getFeatureFlags().dse_library_pg_thumbnails) return [];
  let t = e(h);
  let i = e(p);
  let n = new Set([...t.keys(), ...i.keys()]);
  let a = [];
  for (let e of n) {
    let n = t.get(e);
    let r = i.get(e);
    let s = f(n, r);
    n ? a.push({
      node_id: n.nodeID,
      thumbnailVersion: n.thumbnailVersion,
      status: s,
      pageID: e,
      name: n.pageName
    }) : r && a.push({
      node_id: r.thumbnailId,
      thumbnailVersion: r.content_hash,
      status: s,
      pageID: e,
      name: r.pageName,
      unpublished_at: r.unpublished_at
    });
  }
  a.sort((e, t) => e.name.localeCompare(t.name));
  return a;
});
let A = e => e.status && isNewOrChangedOrDeleted(e.status);
export function $$y1(e) {
  let [t, i] = o()(e, e => A(e));
  return {
    modified: t,
    unmodified: i
  };
}
export const dv = $$_0;
export const tj = $$y1;