import { useState, useEffect } from "react";
import { flushSync } from "../vendor/944059";
import { glU } from "../figma_app/763686";
import { UN } from "../905/700578";
let o = {};
export function $$l0(e, t, r) {
  o[e] = r;
  return glU.addNodePositionSubscription(e, t);
}
export function $$d2(e) {
  delete o[e];
  glU.removeNodePositionSubscription(e);
}
export function $$c1(e, t) {
  let r = o[e];
  r && r(t);
}
export function $$u3(e, t, r, a = {}) {
  let [o, c] = useState({});
  useEffect(() => {
    if (!t.length) {
      a.useFlushSyncExpensive ? queueMicrotask(() => {
        flushSync(() => c({}));
      }) : c({});
      return;
    }
    let {
      currentNodePosition
    } = $$l0(e, t, e => {
      let t = () => c(t => {
        if (!UN().get(e.nodeId) || !e.position) return t;
        let n = e.position;
        _(e.position) && (n = h(n));
        p(e.position) && (n = m(n));
        let i = r(e, n);
        return i ? {
          ...t,
          [e.nodeId]: i
        } : t;
      });
      a.useFlushSyncExpensive ? queueMicrotask(() => {
        flushSync(() => t());
      }) : t();
    });
    let o = Object.entries(currentNodePosition).reduce((e, [t, n]) => {
      if (UN().get(t) && n?.position) {
        let i = n?.position;
        _(n?.position) && (i = h(i));
        p(n?.position) && (i = m(i));
        let a = r(n, i);
        return a ? {
          ...e,
          [t]: a
        } : e;
      }
      return e;
    }, {});
    a.useFlushSyncExpensive ? queueMicrotask(() => {
      flushSync(() => c(o));
    }) : c(o);
    return () => $$d2(e);
  }, [e, t, r, a.useFlushSyncExpensive]);
  return o;
}
function p(e) {
  return null != e && e.y - e.absoluteBounds.y === e.height && e.height === e.absoluteBounds.height;
}
function _(e) {
  return null != e && e.x - e.absoluteBounds.x === e.width && e.width === e.absoluteBounds.width;
}
function h(e) {
  return {
    ...e,
    x: e.x - e.width,
    angle: 0
  };
}
function m(e) {
  return {
    ...e,
    y: e.y - e.height,
    angle: 0
  };
}
export const EE = $$l0;
export const Om = $$c1;
export const lB = $$d2;
export const tB = $$u3;