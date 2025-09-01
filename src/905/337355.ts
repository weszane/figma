import { b } from "../905/965432";
export function $$r0(e) {
  let t = new Map();
  let i = new Map();
  for (let {
    id,
    ...r
  } of e.states) {
    if (t.has(id)) throw Error(`Duplicate state ID ${id.toString()} found when building state machine`);
    if (t.set(id, r), null == r.transitions) continue;
    let e = new Map();
    for (let {
      event,
      ...a
    } of (i.set(id, e), r.transitions)) {
      let i = e.get(event);
      null == i && (i = [], e.set(event, i));
      i?.push(a);
    }
  }
  return {
    config: e,
    isComplete(e) {
      let i = t.get(e);
      return i?.terminal ?? !1;
    },
    isInitial: t => t === e.initial,
    start: () => e.initial,
    transition(e, t) {
      let n = i.get(e)?.get(t.id);
      if (null == n) return null;
      for (let i of n) if (null == i.condition || i.condition({
        from: e,
        to: i.target,
        event: t
      })) return i.target;
      return null;
    }
  };
}
export function $$a1(e) {
  let t = new Set();
  for (let i of e.config.states) if (null != i.transitions) for (let e of i.transitions) e.event === b && e.meta?.userEvents != null && e.meta.userEvents.forEach(e => t.add(e));
  return t;
}
export function $$s2(e, t, i) {
  var r;
  var a;
  let s = new Set("string" == typeof e ? [e] : e);
  let o = {
    userEvents: [...s]
  };
  r = b;
  a = {
    condition: e => s.has(e.event.type) && (i?.condition?.(e) ?? !0),
    meta: o
  };
  return {
    event: r,
    target: t,
    condition: a?.condition,
    meta: a?.meta
  };
}
export const Op = $$r0;
export const gV = $$a1;
export const nr = $$s2;