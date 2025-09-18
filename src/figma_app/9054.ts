import { selectWithShallowEqual } from "../905/103090";
import { getInitialOptions } from "../figma_app/169182";
import { useSceneGraphSelector } from "../figma_app/722362";
import { useDeepEqualSceneValue } from "../figma_app/167249";
export function $$o4(e, t = !1, r) {
  return useDeepEqualSceneValue((e, t, n) => t && $$u0(r ?? e, t, n) || null, e, t);
}
export function $$l1() {
  let {
    lastViewedStamp,
    lastEditedStamp
  } = selectWithShallowEqual(e => ({
    fileKey: e.openFile?.key,
    lastViewedStamp: e.versionHistory.lastViewed,
    lastEditedStamp: e.versionHistory.lastEdited
  }));
  return function (e, t) {
    if (!e) return t ? new Date(t) : void 0;
    if (!t) return e ? new Date(e) : void 0;
    let r = new Date(e);
    let n = new Date(t);
    return r > n ? r : n;
  }(lastViewedStamp, lastEditedStamp);
}
export var $$d3 = (e => (e.NOT_RECENT = "NOT_RECENT", e.RECENTLY_EDITED = "RECENTLY_EDITED", e.RECENTLY_CREATED = "RECENTLY_CREATED", e))($$d3 || {});
export function $$c2(e, t, r) {
  let n = useSceneGraphSelector();
  if (!e) return "NOT_RECENT";
  let i = $$u0(n, e, !0);
  if (!i) return "NOT_RECENT";
  let s = i.lastEditedAt;
  if (!s || !t) return "NOT_RECENT";
  if (i.createdAt) {
    let n = new Date(i.createdAt);
    if (t < n && (!r[e] || r[e] < n)) return "RECENTLY_CREATED";
  }
  let o = new Date(s);
  o.setSeconds(0, 0);
  return t < o && (!r[e] || r[e] < o) ? "RECENTLY_EDITED" : "NOT_RECENT";
}
export function $$u0(e, t, r) {
  let n = e.get(t)?.editInfo;
  return !n || r && n.userId === getInitialOptions().user_data?.id || 0 === n.lastEditedAt ? null : (n.lastEditedAt = 1e3 * n.lastEditedAt, n.createdAt = 1e3 * n.createdAt, n);
}
export const BJ = $$u0;
export const E1 = $$l1;
export const L = $$c2;
export const Uy = $$d3;
export const ei = $$o4;