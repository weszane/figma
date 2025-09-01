import { useMemo } from "react";
import { Qw } from "../905/989992";
import { p } from "../figma_app/288654";
import { vE } from "../figma_app/43951";
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
  let d = p(vE, r, {
    enabled: t
  });
  return useMemo(() => Qw.all(d.map(e => e.result)).transform(e => {
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