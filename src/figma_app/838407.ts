import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useLayoutEffect } from "react";
import { flushSync } from "../vendor/944059";
import { eU, Iz, zl, md } from "../figma_app/27355";
import { xi } from "../905/714362";
import { EE, lB } from "../figma_app/731583";
import { _X, Yb } from "../figma_app/62612";
let c = eU({});
let u = eU(null, (e, t, r) => {
  let n = e(c);
  if (r.parentNodeId && !n[r.parentNodeId]) {
    xi("scene node overlay", `trying to add child overlay to ${r.parentNodeId} but parent overlay does not exist`);
    return;
  }
  t(c, e => ({
    ...e,
    [r.nodeId]: r
  }));
});
let p = eU(null, (e, t, r) => {
  let n = e(h(r)).map(e => e.nodeId);
  let i = new Set([r, ...n]);
  t(c, e => Object.fromEntries(Object.entries(e).filter(([e]) => !i.has(e))));
});
let _ = eU(e => Object.keys(e(c)).length > 0);
let h = Iz(e => eU(t => Object.values(t(c)).filter(({
  parentNodeId: t
}) => t === e)));
let m = eU(e => Object.values(e(c)).filter(({
  parentNodeId: e
}) => !e));
export function $$g1(e, t, r) {
  zl.set(u, {
    nodeId: e,
    component: t,
    ...r
  });
}
export function $$f2(e) {
  zl.set(p, e);
}
export function $$E0() {
  return md(_) ? jsx(y, {}) : null;
}
function y() {
  let e = _X({
    subscribeToUpdates_expensive: !0
  });
  let t = md(m);
  return jsx(Fragment, {
    children: t.map(t => jsx(b, {
      viewportInfo: e,
      overlay: t
    }, t.nodeId))
  });
}
function b({
  viewportInfo: e,
  overlay: t,
  offset: r = {
    x: 0,
    y: 0
  }
}) {
  let o = md(h(t.nodeId));
  let [c, u] = useState(null);
  if (useLayoutEffect(() => {
    let {
      currentNodePosition
    } = EE(`scene-node-overlay-${t.nodeId}`, [t.nodeId], e => {
      e.nodeId === t.nodeId && queueMicrotask(() => flushSync(() => u(e.position)));
    });
    queueMicrotask(() => flushSync(() => u(currentNodePosition[t.nodeId]?.position ?? null)));
    return () => {
      lB(`scene-node-overlay-${t.nodeId}`);
    };
  }, [t.nodeId]), !c) return null;
  let p = Yb(e, c);
  let _ = {
    x: p.x + r.x,
    y: p.y + r.y
  };
  return jsxs("div", {
    style: {
      position: "fixed",
      width: p.width,
      height: p.height,
      top: e.y,
      left: e.x,
      transform: `translate(${_.x}px, ${_.y}px) rotate(${c.angle}deg)`,
      transformOrigin: "0 0",
      pointerEvents: "none",
      ...(t.overflowHidden ? {
        overflow: "hidden"
      } : {})
    },
    children: [t.component, o.map(t => jsx(b, {
      viewportInfo: e,
      overlay: t,
      offset: {
        x: -1 * _.x,
        y: -1 * _.y
      }
    }, t.nodeId))]
  });
}
export const Ay = $$E0;
export const Vm = $$g1;
export const ks = $$f2;