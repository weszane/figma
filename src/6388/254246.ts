import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import s from "../vendor/267721";
import { A } from "../vendor/850789";
import { I6 } from "../figma_app/688398";
import { useCurrentFileKey } from "../figma_app/516028";
var r = s;
export function $$c0({
  ids: e,
  thumbnailEdits: t,
  idsInViewport: l,
  focusedNodeId: s,
  width: c,
  height: h
}) {
  let p = useCurrentFileKey();
  let [g, f] = useState([]);
  let [m] = A(g, 100, {
    equalityFn: x
  });
  useEffect(() => {
    if ((!l || 0 !== l.length) && m.length) {
      let e = [...m];
      e.sort((e, t) => e === s ? -1 : t === s ? 1 : l?.includes(e) && !l?.includes(t) ? -1 : l?.includes(t) && !l?.includes(e) ? 1 : 0);
      r()(e, l ? l.length : 5).forEach((e, t) => {
        e.forEach(e => {
          let o = e === s || !!l?.includes(e);
          setTimeout(() => I6(e, o, p || "", c, h), 40 * t);
        });
      });
      f([]);
    }
  }, [m, s, l, p, c, h]);
  let v = useCallback(e => {
    f(t => t.includes(e) ? t : [...t, e]);
  }, []);
  return jsx(Fragment, {
    children: e.map(e => jsx(u, {
      guid: e,
      editCount: t.get(e) || 0,
      requestThumbnailGeneration: v
    }, e))
  });
}
function u({
  guid: e,
  editCount: t,
  requestThumbnailGeneration: l
}) {
  let [s] = A(t, 400);
  useEffect(() => {
    l(e);
  }, [e, s, l]);
  return jsx(Fragment, {});
}
function x(e, t) {
  return e.length === t.length && e.every((e, l) => e === t[l]);
}
export const v = $$c0;