import { useMemo } from "react";
import { resourceUtils } from "../905/989992";
import { useMultiSubscription } from "../figma_app/288654";
import { PrototypeTilePermissions } from "../figma_app/43951";
export function $$o1(e) {
  return {
    canRead: e.canRead,
    canFavorite: e.canRead && !e.isFavorited,
    canUnfavorite: e.canRead && e.isFavorited
  };
}
export function $$l0(e, t = !0) {
  let r = useMemo(() => e.map(e => ({
    prototypeId: e
  })), [e]);
  let d = useMultiSubscription(PrototypeTilePermissions, r, {
    enabled: t
  });
  return useMemo(() => resourceUtils.all(d.map(e => e.result)).transform(e => {
    let t = {};
    for (let r of e) {
      let e = r.prototype;
      e && (t[e.id] = $$o1(e));
    }
    return t;
  }), [d]);
}
export const Q = $$l0;
export const R = $$o1;