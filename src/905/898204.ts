import { useMemo, useCallback, useSyncExternalStore } from "react";
import { f } from "../905/693155";
import { Timer } from "../905/609396";
import { vF, J4 } from "../figma_app/290870";
import { shallowEqual } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
function d(e, t, i, n) {
  let r = new Set(t);
  let a = new Set();
  let o = new Set();
  let d = new Set();
  let p = new Set();
  let m = new Set();
  for (let h of t) {
    let g;
    if (o.has(h)) continue;
    let f = [{
      phase: "explore",
      node: h,
      reuseDecision: !1
    }];
    for (; g = f.pop();) {
      let {
        phase
      } = g;
      switch (phase) {
        case "explore":
          {
            let {
              node,
              reuseDecision
            } = g;
            o.add(node);
            let c = e.id(node);
            let u = e.interpret(node);
            let p = e.children(node).map(t => e.id(t));
            if (f.push({
              phase: "update",
              decision: u,
              id: c,
              childIds: p,
              node
            }), "function" == typeof u || u.inclusion !== vF.OMIT) {
              let s = e.children(node);
              if (reuseDecision) {
                for (let e of s) r.has(e) && d.add(e);
                s = s.filter(n => (!i.has(e.id(n)) || t.includes(n)) && !o.has(n));
              }
              f.push(...s.map(e => ({
                phase: "explore",
                node: e,
                reuseDecision: n
              })));
            }
            break;
          }
        case "update":
          {
            let {
              node,
              childIds,
              id,
              decision
            } = g;
            let d = c(decision, childIds, i);
            let h = i.get(id);
            if (d.inclusion !== vF.INCLUDE && p.add(id), h && u(d, h, e.comparePayloads) && !t.includes(node)) continue;
            for (let e of (a.add(id), i.set(id, d), h?.childIds ?? [])) p.add(e);
            for (let e of d.childIds) m.add(e);
            break;
          }
        default:
          throwTypeError(phase);
      }
    }
  }
  for (let n of t) {
    if (d.has(n)) continue;
    let t = n;
    for (; (t = e.parent(t)) && !d.has(t);) {
      d.add(t);
      let n = e.id(t);
      let r = c(e.interpret(t), e.children(t).map(t => e.id(t)), i);
      let o = i.get(n);
      if (r.inclusion !== vF.INCLUDE && p.add(n), o && u(r, o, e.comparePayloads)) break;
      for (let e of (i.set(n, r), a.add(n), o?.childIds ?? [])) p.add(e);
      for (let e of r.childIds) m.add(e);
    }
  }
  (function (e, t, i) {
    for (let i of e) t.$$delete(i);
    {
      let n;
      let r = [...t];
      for (; n = r.pop();) {
        let t = i.get(n);
        t && (i.$$delete(n), r.push(...t.childIds.filter(t => !e.has(t))));
      }
    }
  })(m, p, i);
  return a;
}
function c(e, t, i) {
  let n = [];
  return (("function" == typeof e || e.inclusion !== vF.OMIT) && (n = [].concat(...t.map(e => {
    let {
      inclusion,
      childIds
    } = i.get(e) ?? {};
    switch (inclusion) {
      case void 0:
      case vF.OMIT:
        return [];
      case vF.INCLUDE:
        return [e];
      case vF.CHILDREN:
        return childIds ?? [];
    }
  }))), "function" == typeof e) ? e(n) : {
    ...e,
    childIds: n
  };
}
function u({
  inclusion: e,
  childIds: t,
  ...i
}, {
  inclusion: n,
  childIds: r,
  ...a
}, s = shallowEqual) {
  return e === n && shallowEqual(t, r) && s(i, a);
}
export function $$p0(e, t) {
  return useMemo(() => {
    let i = new Map();
    let n = new Map();
    function s(e) {
      return t ? (...i) => {
        let n = new Timer();
        n.start();
        let s = e(...i);
        n.stop();
        f(t, {
          elapsedTime: n.getElapsedTime(),
          numNodes: s.size
        });
      } : e;
    }
    let o = s(t => {
      let r = d(e, [t], i, !1);
      for (let e of r) {
        let t = i.get(e);
        for (let i of n.get(e) || []) i(t);
      }
      return r;
    });
    let l = s(t => {
      let r = d(e, t, i, !0);
      for (let e of r) {
        let t = i.get(e);
        for (let i of n.get(e) || []) i(t);
      }
      return r;
    });
    return {
      adjacencies: i,
      invalidators: n,
      subscribe: (e, t) => {
        let i = n.get(e);
        i || n.set(e, i = []);
        i.push(t);
        return () => {
          let r = i?.indexOf(t);
          void 0 === r || r < 0 || (i?.splice(r, 1), i?.length === 0 && n.$$delete(e));
        };
      },
      updateSubtree: o,
      updateDirtyNodes: l
    };
  }, [e, t]);
}
export function $$m1(e, t) {
  e ??= "-1:-1";
  let i = useCallback(i => t.subscribe(e, i), [t, e]);
  let r = useCallback(() => J4(t.adjacencies.get(e)), [t, e]);
  return useSyncExternalStore(i, r);
}
export const _ = $$p0;
export const W = $$m1;
